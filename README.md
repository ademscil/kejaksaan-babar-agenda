# Website Aktivitas Kegiatan

Website modern photo-first untuk dokumentasi aktivitas dan kegiatan dengan CMS admin panel yang mudah digunakan oleh non-developer.

## 🚀 Fitur Utama

- ✅ **Admin Panel CMS** di `/admin` - Kelola semua konten tanpa coding
- ✅ **Photo-First Design** - Desain modern fokus pada foto kegiatan
- ✅ **Draft/Publish Workflow** - Kontrol penuh atas konten yang ditampilkan
- ✅ **Homepage Builder** - Atur section dan konten homepage dari CMS
- ✅ **Menu Builder** - Kelola menu header dan footer dari CMS
- ✅ **Search & Filter** - Pencarian kegiatan dengan Fuse.js
- ✅ **Lightbox Gallery** - Galeri foto dengan navigasi keyboard
- ✅ **Responsive Design** - Mobile-friendly
- ✅ **SEO Optimized** - Meta tags, OpenGraph, Sitemap
- ✅ **Netlify Forms** - Form kontak terintegrasi
- ✅ **Fast & Lightweight** - Static site generation dengan Astro

## 📦 Tech Stack

- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (Netlify CMS)
- **Search:** Fuse.js
- **Hosting:** Netlify (Free tier)
- **Content:** Markdown + Content Collections

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:4321`

### Testing CMS Lokal

1. Jalankan Decap server di terminal terpisah:
```bash
npx decap-server
```

2. Buka `http://localhost:4321/admin`

3. Login dan mulai kelola konten

### Build untuk Production

```bash
npm run build
```

Output akan ada di folder `dist/`

## 🌐 Deploy ke Netlify

### Langkah 1: Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### Langkah 2: Import ke Netlify

1. Login ke [Netlify](https://netlify.com)
2. Klik "Add new site" → "Import an existing project"
3. Pilih GitHub dan pilih repository Anda
4. Build settings sudah otomatis terdeteksi dari `netlify.toml`
5. Klik "Deploy site"

### Langkah 3: Setup Netlify Identity & Git Gateway

1. Di dashboard Netlify, buka site Anda
2. Go to **Site settings** → **Identity**
3. Klik **Enable Identity**
4. Scroll ke bawah, klik **Enable Git Gateway**
5. Go to **Identity** tab → **Invite users**
6. Masukkan email admin, kirim invite
7. Cek email, klik link aktivasi, set password

### Langkah 4: Akses Admin Panel

1. Buka `https://your-site.netlify.app/admin`
2. Login dengan email dan password yang sudah dibuat
3. Mulai kelola konten!

## 📝 Cara Menggunakan CMS

### Mengelola Kegiatan

1. Login ke `/admin`
2. Klik **Kegiatan** → **New Kegiatan**
3. Isi form:
   - **Status:** Pilih "Draft" (tidak tampil) atau "Publish" (tampil di website)
   - **Judul:** Judul kegiatan
   - **Tanggal:** Tanggal kegiatan
   - **Kategori:** Pilih kategori
   - **Tag:** Tambah tag (tekan Enter)
   - **Ringkasan:** Deskripsi singkat
   - **Unggulan:** Centang jika ingin tampil di hero homepage
   - **Lokasi:** Lokasi kegiatan
   - **Foto Sampul:** Upload foto utama
   - **Galeri Foto:** Upload beberapa foto (opsional)
   - **Isi Kegiatan:** Tulis konten lengkap (support Markdown)
4. Klik **Publish** → **Publish now**

### Mengelola Menu

1. Login ke `/admin`
2. Klik **Pengaturan** → **Menu Navigasi**
3. Edit **Menu Header** atau **Menu Footer**:
   - Tambah item baru dengan klik **Add Menu Header**
   - Isi Label, URL, Tipe (internal/external)
   - Atur urutan dengan field **Urutan**
   - Aktifkan/nonaktifkan dengan toggle **Aktif**
4. Klik **Publish**

### Mengatur Homepage

1. Login ke `/admin`
2. Klik **Pengaturan** → **Homepage Builder**
3. Atur:
   - **Mode Hero:** Pilih otomatis (featured terbaru) atau manual
   - **Section Homepage:** Aktifkan/nonaktifkan section, atur urutan dan jumlah item
4. Klik **Publish**

### Mengatur Banner Pengumuman

1. Login ke `/admin`
2. Klik **Pengaturan** → **Banner Pengumuman**
3. Toggle **Aktif** untuk menampilkan/menyembunyikan
4. Isi teks, link (opsional), dan pilih style
5. Klik **Publish**

## 📁 Struktur Folder

```
kejaksaan-activity/
├── public/
│   ├── admin/              # Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── uploads/            # Media upload dari CMS
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/         # Komponen reusable
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ActivityCard.astro
│   │   ├── AlbumCard.astro
│   │   └── ...
│   ├── content/            # Content Collections
│   │   ├── activities/     # Kegiatan
│   │   ├── events/         # Agenda
│   │   ├── galleries/      # Album foto
│   │   ├── videos/         # Video
│   │   ├── documents/      # Dokumen
│   │   ├── pages/          # Halaman statis
│   │   ├── settings/       # Settings (site, nav, homepage, announcement)
│   │   └── config.ts       # Schema collections
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/              # Routes
│       ├── index.astro     # Homepage
│       ├── kegiatan/
│       ├── agenda/
│       ├── galeri/
│       ├── video/
│       ├── dokumen.astro
│       └── [slug].astro    # Dynamic pages
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

## 🎨 Customization

### Mengubah Warna Primary

Edit `tailwind.config.mjs`:

```js
colors: {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    500: '#6366f1',  // Ubah ini
    600: '#4f46e5',
    700: '#4338ca',
  },
}
```

### Mengubah Font

Edit `tailwind.config.mjs`:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],  // Ubah ini
},
```

Dan update link font di `src/layouts/BaseLayout.astro`

## 🔧 Troubleshooting

### CMS tidak bisa login

- Pastikan Netlify Identity sudah diaktifkan
- Pastikan Git Gateway sudah diaktifkan
- Cek email untuk link aktivasi

### Foto tidak muncul

- Pastikan path foto benar (mulai dengan `/uploads/`)
- Cek folder `public/uploads/` ada file-nya
- Untuk development, gunakan placeholder image

### Build error

- Jalankan `npm run build` lokal untuk cek error
- Pastikan semua required field di content terisi
- Cek console untuk error detail

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan buka issue di repository ini.

## 📄 License

MIT License - Bebas digunakan untuk project apapun.

---

**Dibuat dengan ❤️ menggunakan Astro + Tailwind + Decap CMS**
