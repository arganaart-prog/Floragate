# 📄 Integrasi Invoice dengan Kwitansi Floragate

## 📋 Deskripsi
Sistem kwitansi (official receipt) yang terintegrasi dengan invoice generator Floragate. Memudahkan pembuatan kwitansi pembayaran langsung dari data invoice yang sudah ada.

## ✨ Fitur Utama

### 1. **Halaman Kwitansi Generator** (`/kwitansi`)
- Interface khusus untuk membuat kwitansi pembayaran
- Template sesuai standar bisnis Indonesia (dwi-bahasa: Indonesia & Inggris)
- Login terproteksi untuk admin
- Live preview A4 format
- Export ke PDF & Print ready

### 2. **Integrasi dengan Invoice**
- Tombol "Buat Kwitansi" di halaman invoice
- Auto-fill data dari invoice ke kwitansi
- Validasi status pembayaran (DP atau Lunas)
- Nomor kwitansi otomatis dari nomor invoice

### 3. **Template Kwitansi Profesional**
- Header dengan logo & branding Floragate
- Format bilingual (Indonesia / English)
- Nomor kwitansi & referensi invoice
- Terbilang otomatis (angka → kata)
- Metode pembayaran (Transfer Bank / QRIS / Tunai)
- Stempel digital opsional
- Footer standar bisnis

## 🔑 Cara Menggunakan

### A. Membuat Kwitansi dari Invoice (Rekomendasi)

1. **Buka halaman Invoice** (`/invoice`)
2. **Login** dengan kredensial admin
3. **Isi data invoice** lengkap termasuk:
   - Data pemesan (Billed To)
   - Status pembayaran: Pilih **"DP"** atau **"Sudah Dibayar"**
   - Jika DP, isi nominal DP yang diterima
4. **Klik tombol "Buat Kwitansi"** (tombol kuning)
5. Halaman kwitansi akan terbuka di tab baru dengan data auto-fill:
   - Nomor kwitansi (dari nomor invoice)
   - Referensi invoice
   - Nama pembayar (dari data pemesan)
   - Nominal (Grand Total atau DP)
   - Keterangan pembayaran
6. **Periksa & lengkapi data** jika perlu
7. **Cetak atau Download PDF**

### B. Membuat Kwitansi Manual

1. **Buka halaman Kwitansi** langsung (`/kwitansi`)
2. **Login** dengan kredensial admin
3. **Isi formulir kwitansi:**

   **Card 1: Nomor Kwitansi & Referensi**
   - No. Kwitansi (contoh: KWT-FG-001)
   - Ref. Invoice (opsional, contoh: INV-FG-001)
   - Tanggal Kwitansi (klik "Set Hari Ini" untuk tanggal otomatis)

   **Card 2: Telah Terima Dari**
   - Nama pembayar / perusahaan

   **Card 3: Jumlah Pembayaran**
   - Nominal (Rp) - masukkan angka
   - Terbilang - akan otomatis terisi

   **Card 4: Untuk Pembayaran**
   - Keterangan detail pembayaran (produk/jasa yang dibayar)

   **Card 5: Metode Pembayaran**
   - Pilih: Transfer Bank / QRIS / Tunai

   **Card 6: Lokasi & Stempel**
   - Lokasi penerbitan (default: Kab. Malang)
   - Toggle stempel digital (aktif/nonaktif)

4. **Preview** tampil real-time di panel kanan (desktop) atau tab preview (mobile)
5. **Cetak atau Download PDF**

## 🎨 Fitur Template

### Format Kwitansi
- **Ukuran:** A4 Portrait (210 x 297 mm)
- **Warna:** Earth tone (#FAF7F0 background, #9B8C6F accent)
- **Font:** Serif untuk heading, Sans-serif untuk body
- **Layout:** Professional business receipt

### Elemen Kwitansi
1. **Header:**
   - Logo Floragate (orchid & arch design)
   - Nama perusahaan: "FLORAGATE"
   - Tagline: "The Gateway to Meaningful Moments"
   - Website & lokasi
   - Title: "KWITANSI / OFFICIAL RECEIPT"
   - Nomor kwitansi & referensi invoice

2. **Body:**
   - Telah Terima Dari (Received From)
   - Uang Sejumlah / Terbilang (Amount in Words) - dalam box
   - Untuk Pembayaran (Payment For)

3. **Footer:**
   - Total Amount (Rp) - highlighted box
   - Metode Pembayaran (checkboxes)
   - Lokasi & Tanggal
   - Stempel Digital / Placeholder untuk cap manual
   - Tanda tangan penerima (Floragate)
   - Page footer: "FLORAGATE — Official Payment Receipt"

## 🔧 Fitur Teknis

### Auto-Convert Angka ke Terbilang
Sistem otomatis mengkonversi nominal pembayaran menjadi kata-kata dalam Bahasa Indonesia:
- Contoh: `500000` → "Lima Ratus Ribu Rupiah"
- Mendukung hingga miliaran rupiah
- Real-time update saat mengetik nominal

### Validasi Status Pembayaran
Saat membuat kwitansi dari invoice:
- Status "Belum Dibayar" → Alert & tidak bisa lanjut
- Status "DP" → Nominal kwitansi = nilai DP
- Status "Sudah Dibayar" → Nominal kwitansi = Grand Total

### Auto-Fill Data
Data yang otomatis terisi dari invoice:
- ✅ Nomor Kwitansi (KWT-FG-XXX dari INV-FG-XXX)
- ✅ Referensi Invoice
- ✅ Nama Pembayar (dari Billed To)
- ✅ Nominal Pembayaran
- ✅ Keterangan Pembayaran

### Responsive Design
- **Desktop (≥1280px):** Split view (form + live preview)
- **Mobile (<1280px):** Tab switcher (Edit / Preview)
- Zoom controls untuk mobile preview
- Print-optimized layout

## 🖨️ Export & Print

### Print (Cetak)
1. Klik tombol **"Cetak (Print)"**
2. Dialog print browser akan muncul
3. Pilih printer atau "Save as PDF"
4. Ukuran otomatis: A4 Portrait
5. Print color: Exact (semua warna tercetak)

### Download PDF
1. Klik tombol **"Simpan / Unduh PDF"**
2. Saat ini akan membuka print dialog
3. Pilih "Save as PDF" untuk menyimpan

> **Note:** Fitur direct PDF download (tanpa print dialog) dapat ditambahkan menggunakan library jsPDF atau html2pdf.js

## 👥 Autentikasi

### Kredensial Admin (sama dengan Invoice)
```
Email: admin@floragate.id
Password: FloragateAdmin2026

--- atau ---

Email: floragate@gmail.com
Password: Floragate123
```

### Session Management
- Login tersimpan di localStorage
- Checkbox "Tetap masuk di browser ini"
- Logout manual untuk keluar

## 📂 Struktur File

```
src/pages/
  └── kwitansi.astro        # Halaman kwitansi generator

public/
  └── scripts/
      └── kwitansi.js       # JavaScript kwitansi logic
  └── images/
      └── invoice/
          └── stempel-floragate.webp  # Stempel digital

src/pages/invoice.astro     # (Modified) Tombol "Buat Kwitansi"
```

## 🔗 Integrasi Flow

```
┌──────────────┐
│   Invoice    │
│   /invoice   │
└──────┬───────┘
       │
       │ [Klik "Buat Kwitansi"]
       │ Status: DP / Sudah Dibayar
       │
       ↓
┌──────────────────┐
│  localStorage    │ ← Data draft disimpan
│  (5 menit)       │
└──────┬───────────┘
       │
       │ [Redirect ke /kwitansi]
       │ [Tab baru]
       │
       ↓
┌──────────────────┐
│   Kwitansi       │
│   /kwitansi      │
│                  │
│ ✅ Auto-fill form│
│ ✅ Nomor KWT     │
│ ✅ Ref Invoice   │
│ ✅ Pembayar      │
│ ✅ Nominal       │
│ ✅ Keterangan    │
└──────────────────┘
```

## 🎯 Workflow Rekomendasi

### Untuk Pembayaran Lunas
1. Buat invoice lengkap
2. Set status: **"Sudah Dibayar"**
3. Klik "Buat Kwitansi"
4. Periksa & cetak kwitansi
5. Kirim kwitansi ke customer

### Untuk Pembayaran DP (Down Payment)
1. Buat invoice lengkap
2. Set status: **"DP (Uang Muka)"**
3. Isi nominal DP yang diterima
4. Klik "Buat Kwitansi"
5. Kwitansi akan tercatat: "Pembayaran DP Invoice XXX"
6. Kirim kwitansi DP ke customer

### Untuk Pelunasan Setelah DP
1. Buka invoice yang sama
2. Ubah status ke: **"Sudah Dibayar"**
3. Klik "Buat Kwitansi" lagi
4. Manual edit nominal = Sisa Tagihan
5. Edit keterangan: "Pelunasan Invoice XXX"
6. Kirim kwitansi pelunasan ke customer

## 📱 Responsive Features

### Desktop (XL ≥ 1280px)
- Side-by-side: Form editor (kiri) + Live preview (kanan)
- Real-time preview update
- Comfortable editing experience

### Tablet & Mobile
- Tab switcher: "✏️ Isi Data" vs "📄 Lihat Preview"
- Zoom in/out controls
- Fit-to-screen button
- Optimized touch targets

## 🚀 Tips & Best Practices

1. **Selalu cek status pembayaran** sebelum buat kwitansi
2. **Verifikasi nominal** sesuai dengan yang diterima
3. **Simpan PDF kwitansi** sebagai arsip
4. **Kirim kwitansi via WhatsApp** ke customer
5. **Gunakan stempel digital** untuk kwitansi electronic
6. **Nonaktifkan stempel** jika perlu cap/stempel fisik manual
7. **Nomor kwitansi urut** untuk tracking pembayaran
8. **Referensi invoice** memudahkan cross-check

## 🔄 Update & Maintenance

### Mengubah Lokasi Default
Edit `kwitansi.js` line ~38:
```javascript
location: 'Kab. Malang',  // Ganti sesuai kebutuhan
```

### Mengubah Stempel Digital
Ganti file: `public/images/invoice/stempel-floragate.webp`
- Rekomendasi: PNG/WebP dengan background transparan
- Ukuran: 100x100 px atau 200x200 px
- Format: Round/circular stamp design

### Menambah Metode Pembayaran
Edit template di `kwitansi.astro` section "Payment Method"

### Customize Color Scheme
Sesuaikan Tailwind classes di `kwitansi.astro`:
- Background: `bg-[#FAF7F0]`
- Accent: `border-[#B8A67D]`, `text-[#9B8C6F]`
- Text: `text-[#222922]`, `text-[#6A7168]`

## 📞 Support

Untuk pertanyaan atau bantuan:
- **Website:** tokobungamurahmalang.web.id
- **WhatsApp:** 08158842097
- **Location:** Kab. Malang, Indonesia

---

**Floragate** — The Gateway to Meaningful Moments
*Sistem Invoice & Kwitansi Terintegrasi*
