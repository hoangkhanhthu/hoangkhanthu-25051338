## Vì sao cần refactor

Project hiện dùng **TanStack Start** (cần server) + ảnh host trên **CDN Lovable** (`/__l5e/assets-v1/...`). GitHub Pages chỉ chạy file tĩnh và không truy cập được CDN Lovable → sẽ trắng trang và 404 ảnh.

Giải pháp: tạo **một bản build song song** dành riêng cho GitHub Pages, KHÔNG động vào code Lovable hiện tại (để preview Lovable vẫn chạy bình thường).

## Sẽ làm gì

### 1. Tạo thư mục `gh-pages-build/` — bản SPA tĩnh độc lập
- `package.json` riêng — chỉ Vite + React + Tailwind + lucide-react (bỏ TanStack Start)
- `vite.config.ts` với `base: './'` để chạy được ở mọi subpath GitHub Pages
- `index.html` + `src/main.tsx` — SPA entry đơn giản
- `src/App.tsx` — copy nguyên nội dung `src/routes/index.tsx`, chuyển các `import X from "@/assets/.../file.asset.json"` sang import ảnh/file thật trong `public/media/`
- `src/styles.css` — copy từ `src/styles.css`
- `public/404.html` — copy `index.html` để fallback route (dù project 1 trang, đề phòng)

### 2. Script `gh-pages-build/scripts/download-assets.mjs`
- Quét toàn bộ `src/assets/**/*.asset.json` của project chính
- Tải mỗi URL CDN về `gh-pages-build/public/media/<filename>`
- Sinh file `gh-pages-build/src/asset-map.ts` map từ tên file → path local
- App.tsx dùng map này thay vì các URL CDN

### 3. GitHub Actions `/.github/workflows/deploy-gh-pages.yml`
- Trigger: push vào `main`
- Steps: checkout → cài bun → chạy script download-assets → `bun run build` → upload artifact → deploy lên GitHub Pages
- Sử dụng action chính chủ `actions/deploy-pages@v4`

### 4. File hướng dẫn `HUONG_DAN_GITHUB_PAGES.md` (tiếng Việt)
- Bước 1: Push code lên GitHub
- Bước 2: Vào Settings → Pages → chọn "GitHub Actions"
- Bước 3: Chờ workflow chạy xong → truy cập `https://<username>.github.io/<repo>/`

## Chi tiết kỹ thuật

```text
gh-pages-build/
├── package.json          # vite, react, tailwindcss, lucide-react
├── vite.config.ts        # base: './'
├── tailwind.config.ts    # copy từ tokens hiện có
├── index.html
├── scripts/
│   └── download-assets.mjs   # tải asset CDN về public/media/
├── public/
│   ├── media/            # (được sinh khi build) chứa ~60 ảnh + 6 file docx/pdf/zip
│   └── 404.html          # fallback
└── src/
    ├── main.tsx
    ├── App.tsx           # nội dung PortfolioPage
    ├── styles.css
    └── asset-map.ts      # (được sinh khi build) map filename → /media/<file>

.github/workflows/deploy-gh-pages.yml
```

**Kích thước repo**: ~60 ảnh + 6 file báo cáo sẽ được tải khi CI chạy (không commit vào git — nằm trong `.gitignore`), nên repo vẫn nhẹ. Chỉ dist deploy mới chứa ảnh.

**Không đụng vào**:
- `src/routes/`, `src/styles.css`, `src/router.tsx` — Lovable preview vẫn chạy nguyên vẹn
- Các file `.asset.json` hiện có

## Kết quả bạn sẽ có

- Push code lên GitHub → workflow tự chạy → site live tại `https://<username>.github.io/<repo>/`
- Không trắng trang, không 404, tất cả ảnh và file tải xuống hoạt động
- Vẫn giữ nguyên bản Lovable để bạn tiếp tục chỉnh sửa

Bạn duyệt để mình bắt đầu build nhé?
