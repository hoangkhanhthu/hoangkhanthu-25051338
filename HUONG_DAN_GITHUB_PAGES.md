# Hướng dẫn xuất Portfolio lên GitHub Pages

Website Portfolio này chạy trên TanStack Start (có SSR) nên **không thể** publish trực tiếp lên GitHub Pages. Mình đã tạo sẵn thư mục `gh-pages-build/` để build ra bản **SPA tĩnh** (React + Vite) hoạt động được trên GitHub Pages, và tự động tải toàn bộ ảnh minh chứng về repo.

## 🚀 Cách 1 — Tự động deploy bằng GitHub Actions (khuyên dùng)

1. **Push code lên GitHub** (đã có file `.github/workflows/deploy-gh-pages.yml`).
2. Vào repo trên GitHub → **Settings → Pages** → phần **Build and deployment** → chọn **Source: GitHub Actions**.
3. Vào tab **Actions** → chờ workflow **Deploy to GitHub Pages** chạy xong (~2-3 phút).
4. Link web sẽ hiện ở **Settings → Pages** dạng:
   `https://<username>.github.io/<tên-repo>/`

Mỗi lần bạn push code mới, workflow sẽ tự build & deploy lại.

## 🛠 Cách 2 — Build tay tại máy rồi push lên nhánh `gh-pages`

```bash
cd gh-pages-build
npm install
npm run build          # → tạo thư mục dist/
```

Sau đó copy toàn bộ nội dung `gh-pages-build/dist/` lên nhánh `gh-pages` của repo (hoặc dùng `gh-pages` npm package).

## ✅ Đảm bảo không lỗi

- **Không trắng trang / không 404**: `vite.config.ts` đã set `base: "./"` (đường dẫn tương đối) nên chạy được dưới mọi subpath (ví dụ `/portfolio/`).
- **Ảnh hiển thị**: script `scripts/prepare.mjs` tự tải 64 file ảnh/tài liệu từ CDN Lovable về `public/media/`, được đóng gói cùng bản build.
- **Cập nhật nội dung**: khi bạn sửa `src/routes/index.tsx` ở dự án Lovable gốc, chỉ cần chạy lại `npm run build` trong `gh-pages-build/` là bản GitHub Pages đồng bộ theo.

## 📝 Ghi chú

- Nội dung trang **giống 100%** bản Lovable, chỉ khác là chạy client-side.
- Nếu Lovable đổi URL asset (hiếm khi xảy ra), chạy lại `npm run build` để tải lại.
