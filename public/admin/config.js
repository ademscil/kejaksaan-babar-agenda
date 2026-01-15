window.CMS_CONFIG = {
  backend: {
    name: 'test-repo'
  },
  media_folder: 'public/uploads',
  public_folder: '/uploads',
  locale: 'id',
  collections: [
    {
      name: 'activities',
      label: 'Kegiatan',
      label_singular: 'Kegiatan',
      folder: 'src/content/activities',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        {label: 'Status', name: 'status', widget: 'select', options: ['Draft', 'Publish'], default: 'Draft'},
        {label: 'Judul', name: 'title', widget: 'string', required: true},
        {label: 'Tanggal', name: 'date', widget: 'datetime', required: true},
        {label: 'Kategori', name: 'category', widget: 'select', options: ['Pengajian', 'Penyuluhan Hukum', 'Kunjungan Kerja', 'Rapat Koordinasi', 'Upacara', 'Bakti Sosial', 'Lainnya'], required: true},
        {label: 'Tag', name: 'tags', widget: 'list', required: false},
        {label: 'Ringkasan', name: 'excerpt', widget: 'text', required: true},
        {label: 'Unggulan', name: 'featured', widget: 'boolean', default: false},
        {label: 'Lokasi', name: 'location', widget: 'string', required: false},
        {label: 'Foto Sampul', name: 'coverImage', widget: 'image', required: true},
        {label: 'Galeri Foto', name: 'galleryImages', widget: 'list', field: {label: 'Foto', name: 'image', widget: 'image'}, required: false},
        {label: 'Isi Kegiatan', name: 'body', widget: 'markdown', required: true}
      ]
    }
  ]
};
