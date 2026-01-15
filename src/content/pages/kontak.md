---
title: Kontak
---

# Hubungi Kami

Silakan hubungi kami melalui informasi kontak di bawah ini atau isi formulir kontak.

## Informasi Kontak

**Alamat:**  
Jl. Contoh No. 123, Kota, Provinsi 12345

**Telepon:**  
(021) 1234-5678

**Email:**  
info@kejaksaan-activity.com

**Jam Operasional:**  
Senin - Jumat: 08.00 - 16.00 WIB

---

## Formulir Kontak

<form name="contact" method="POST" data-netlify="true" class="space-y-6 max-w-2xl">
  <input type="hidden" name="form-name" value="contact" />
  
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
    />
  </div>

  <div>
    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subjek *</label>
    <input 
      type="text" 
      id="subject" 
      name="subject" 
      required 
      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
    <textarea 
      id="message" 
      name="message" 
      rows="6" 
      required 
      class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
    ></textarea>
  </div>

  <button 
    type="submit" 
    class="px-8 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
  >
    Kirim Pesan
  </button>
</form>
