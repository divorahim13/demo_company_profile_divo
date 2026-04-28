# Handover Website CV. Samudera Abadi Teknik

Dokumen ini dipakai untuk serah-terima website ke tim internal/klien.

## 1. Status Delivery
- Framework: Next.js (App Router)
- UI: Tailwind CSS + Framer Motion
- Build mode: `standalone` (siap deploy server/container)
- SEO dasar: metadata, canonical, `robots.txt`, `sitemap.xml`
- Conversion: tombol WhatsApp sticky + CTA kontak

## 2. Cara Menjalankan Lokal
1. Install dependency:
`npm install`
2. Jalankan development:
`npm run dev`
3. Buka:
`http://localhost:3000`

## 3. Build Production
1. Jalankan lint:
`npm run lint`
2. Build app:
`npm run build`
3. Jalankan hasil build:
`npm run start`

## 4. Pengaturan Domain (Penting)
Set environment variable berikut di server production:

`NEXT_PUBLIC_SITE_URL=https://domain-anda.com`

Contoh:
`NEXT_PUBLIC_SITE_URL=https://samuderaabaditeknik.com`

Variable ini dipakai untuk canonical URL, OpenGraph, `robots`, dan `sitemap`.

## 5. Konten yang Bisa Diubah Cepat
- Navbar: `components/Navbar.tsx`
- Tombol WhatsApp sticky: `components/WhatsAppSticky.tsx`
- Halaman Tentang Kami (termasuk Dokumen Izin): `app/tentang-kami/page.tsx`
- Halaman Kontak: `app/kontak/page.tsx`

## 6. Checklist Sebelum Kirim ke Klien Akhir
- Ganti `NEXT_PUBLIC_SITE_URL` ke domain final.
- Cek semua nomor WhatsApp sudah benar.
- Validasi dokumen izin (judul, nomor, preview, link file).
- Cek semua foto proyek sudah final.
- Jalankan ulang `npm run lint && npm run build`.

## 7. Catatan
- Form inquiry saat ini diarahkan ke WhatsApp (tanpa backend form).
- Jika ingin email/form database, perlu integrasi API endpoint terpisah.
