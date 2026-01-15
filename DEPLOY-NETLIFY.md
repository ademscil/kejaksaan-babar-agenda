# Deploy ke Netlify - kejaksaan-babar.netlify.app

## Status: ✅ Siap Deploy

Project sudah dikonfigurasi untuk: **kejaksaan-babar.netlify.app**

## Langkah Deploy:

### 1. Push ke GitHub
```bash
git add .
git commit -m "Configure for Netlify production"
git push origin main
```

### 2. Setup di Netlify
Website sudah di-import dari GitHub. Netlify akan auto-deploy setiap kali ada push.

### 3. Enable CMS (WAJIB)
Di dashboard Netlify (https://app.netlify.com):

1. **Enable Identity:**
   - Site settings → Identity → Enable Identity

2. **Enable Git Gateway:**
   - Scroll ke bawah → Enable Git Gateway

3. **Invite Admin User:**
   - Identity tab → Invite users
   - Masukkan email admin
   - Cek email → klik link → set password

### 4. Akses Admin Panel
Buka: https://kejaksaan-babar.netlify.app/admin

Login dengan email dan password yang sudah dibuat.

## Selesai! 🎉

Sekarang admin bisa:
- Login ke /admin
- Tambah/edit/hapus kegiatan
- Upload foto
- Atur menu & homepage
- Semua perubahan otomatis commit ke Git dan deploy

## Troubleshooting

**CMS tidak bisa login?**
- Pastikan Identity sudah enabled
- Pastikan Git Gateway sudah enabled
- Cek email untuk link aktivasi

**Build error?**
- Cek Netlify deploy logs
- Pastikan semua file sudah ter-push ke GitHub
