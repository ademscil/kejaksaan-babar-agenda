# Cara Menggunakan CMS Lokal

## Masalah: Kegiatan yang dibuat di CMS tidak muncul

**Penyebab:** Backend `test-repo` memerlukan Git repository untuk menyimpan perubahan.

## Solusi:

### Opsi 1: Install Git (Recommended)
1. Download Git: https://git-scm.com/download/win
2. Install Git
3. Buka terminal di folder project
4. Jalankan:
```bash
git init
git add .
git commit -m "Initial commit"
```
5. Restart dev server
6. Buka /admin/index.html dan buat kegiatan baru
7. Perubahan akan tersimpan di file

### Opsi 2: Edit File Manual (Tanpa CMS)
Buat file baru di `src/content/activities/` dengan format:

**Nama file:** `2026-01-15-judul-kegiatan.md`

**Isi file:**
```markdown
---
status: Publish
title: Judul Kegiatan Anda
date: 2026-01-15T10:00:00.000Z
category: Pengajian
tags:
  - tag1
  - tag2
excerpt: Deskripsi singkat kegiatan
featured: false
location: Lokasi Kegiatan
coverImage: https://placehold.co/1200x800/6366f1/white?text=Foto+Kegiatan
---

Isi konten kegiatan di sini...
```

Simpan file, refresh browser di http://localhost:4321 - kegiatan akan muncul.

### Opsi 3: Deploy ke Netlify (Production)
Untuk menggunakan CMS dengan login:
1. Push project ke GitHub (perlu install Git)
2. Deploy ke Netlify
3. Enable Netlify Identity + Git Gateway
4. CMS akan bekerja penuh dengan autentikasi

## Kesimpulan
**CMS lokal memerlukan Git** untuk menyimpan perubahan. Tanpa Git, edit file manual atau deploy ke Netlify.
