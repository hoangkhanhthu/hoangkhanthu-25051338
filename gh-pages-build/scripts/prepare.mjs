// Script chuẩn bị cho GitHub Pages build:
// 1) Copy src/routes/index.tsx → src/App.tsx (bỏ các dòng TanStack Start)
// 2) Copy src/styles.css → src/styles.css
// 3) Duyệt toàn bộ src/assets/**/*.asset.json ở project chính,
//    tải file CDN về public/media/, và tạo mirror .asset.json cục bộ
//    trỏ tới URL tương đối "media/<flatname>".

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, ".."); // gh-pages-build/
const PROJECT_ROOT = path.resolve(ROOT, ".."); // project root
const SRC_ROUTES = path.join(PROJECT_ROOT, "src", "routes", "index.tsx");
const SRC_STYLES = path.join(PROJECT_ROOT, "src", "styles.css");
const SRC_ASSETS = path.join(PROJECT_ROOT, "src", "assets");

const OUT_APP = path.join(ROOT, "src", "App.tsx");
const OUT_STYLES = path.join(ROOT, "src", "styles.css");
const OUT_ASSETS = path.join(ROOT, "src", "assets");
const OUT_MEDIA = path.join(ROOT, "public", "media");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

async function downloadWithRetry(url, dest, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(dest, buf);
      return buf.length;
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    }
  }
}

function slugify(p) {
  // "bai1/img1.png" → "bai1__img1.png"
  return p.replace(/[\\/]+/g, "__");
}

async function processAssets() {
  await ensureDir(OUT_MEDIA);
  await ensureDir(OUT_ASSETS);

  const files = await walk(SRC_ASSETS);
  const pointers = files.filter((f) => f.endsWith(".asset.json"));

  console.log(`\n📦 Tìm thấy ${pointers.length} file .asset.json cần xử lý.\n`);

  // URL ổn định của project trên Lovable (không đổi kể cả khi đổi tên project).
  // Có thể override bằng env LOVABLE_ASSETS_BASE nếu cần.
  const projectId = "fa856b17-afce-43eb-9995-26520a494d5b";
  const CDN_BASE =
    process.env.LOVABLE_ASSETS_BASE || `https://project--${projectId}-dev.lovable.app`;

  let downloaded = 0;
  let skipped = 0;

  for (const ptr of pointers) {
    const rel = path.relative(SRC_ASSETS, ptr); // e.g. "bai1/img1.png.asset.json"
    const json = JSON.parse(await fs.readFile(ptr, "utf8"));

    // File cuối cùng, ví dụ "img1.png"
    const originalFilename = json.original_filename || path.basename(rel, ".asset.json");
    // Đặt tên phẳng để tránh trùng: "bai1__img1.png"
    const flatName = slugify(rel.replace(/\.asset\.json$/, ""));

    const destMedia = path.join(OUT_MEDIA, flatName);
    const localUrl = `media/${flatName}`;

    // Tải file nếu chưa có
    let bytes = 0;
    try {
      const stat = await fs.stat(destMedia);
      bytes = stat.size;
      skipped++;
    } catch {
      // Ghép URL tuyệt đối từ url tương đối trong pointer
      let fullUrl;
      if (json.url.startsWith("http")) {
        fullUrl = json.url;
      } else {
        fullUrl = CDN_BASE.replace(/\/$/, "") + (json.url.startsWith("/") ? json.url : "/" + json.url);
      }
      try {
        bytes = await downloadWithRetry(fullUrl, destMedia);
        downloaded++;
        console.log(`  ✓ ${flatName}  (${(bytes / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`  ✗ ${flatName}  FAIL: ${err.message}`);
        throw err;
      }
    }

    // Tạo mirror pointer trong gh-pages-build/src/assets/
    const mirror = { ...json, url: localUrl, original_filename: originalFilename };
    const outPtr = path.join(OUT_ASSETS, rel);
    await ensureDir(path.dirname(outPtr));
    await fs.writeFile(outPtr, JSON.stringify(mirror, null, 2));
  }

  console.log(`\n📊 Tổng kết assets:  ${downloaded} tải mới · ${skipped} đã có sẵn.`);
}

async function buildApp() {
  const src = await fs.readFile(SRC_ROUTES, "utf8");
  let out = src;

  // 1) Xóa import createFileRoute
  out = out.replace(
    /import\s*\{\s*createFileRoute\s*\}\s*from\s*["']@tanstack\/react-router["'];?\s*\n/,
    "",
  );

  // 2) Xóa export Route
  out = out.replace(
    /export\s+const\s+Route\s*=\s*createFileRoute\([^)]*\)\(\{[\s\S]*?\}\);?\s*\n/,
    "",
  );

  // 3) Thêm export default ở cuối
  if (!/export\s+default\s+PortfolioPage/.test(out)) {
    out += "\n\nexport default PortfolioPage;\n";
  }

  await fs.writeFile(OUT_APP, out);
  console.log(`\n📄 Đã sinh gh-pages-build/src/App.tsx  (${out.split("\n").length} dòng).`);
}

async function copyStyles() {
  // Copy styles.css và bỏ `source(none)` để Tailwind auto-scan App.tsx
  let css = await fs.readFile(SRC_STYLES, "utf8");
  css = css.replace(/@import\s+"tailwindcss"\s+source\(none\);?/, '@import "tailwindcss";');
  css = css.replace(/^\s*@source\s+"[^"]+";?\s*$/m, "");
  await fs.writeFile(OUT_STYLES, css);
  console.log(`🎨 Đã copy styles.css (đã bật auto-scan).`);
}

async function main() {
  console.log("🚀 Chuẩn bị build GitHub Pages...");
  await ensureDir(path.join(ROOT, "src"));
  await processAssets();
  await buildApp();
  await copyStyles();
  console.log("\n✅ Hoàn tất chuẩn bị. Chạy `npm run build` để build.\n");
}

main().catch((err) => {
  console.error("\n❌ Lỗi:", err);
  process.exit(1);
});
