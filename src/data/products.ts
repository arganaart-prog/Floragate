export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  city: string;
  priceFrom: number;
  priceLabel: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  featured: boolean;
  whatsappText: string;
  processingTime: string;
  serviceArea: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
}

const RAW_CATEGORIES: Category[] = [
  {
    slug: "bunga-papan-duka-cita-malang",
    name: "Bunga Papan Duka Cita",
    description: "Ungkapan bela sungkawa terdalam dengan karangan bunga papan elegan, tenang, dan terhormat.",
    seoTitle: "Bunga Papan Duka Cita Malang Murah & Berkualitas",
    seoDescription: "Pesan bunga papan duka cita Malang murah dan berkualitas di Floragate. Rangkaian elegan, bunga segar, proses cepat 3 jam, dan gratis ongkir area Kota Malang.",
    image: "/images/kategori/duka-cita.webp"
  },
  {
    slug: "bunga-papan-wedding-malang",
    name: "Bunga Papan Wedding",
    description: "Semarakkan momen bahagia pernikahan kerabat Anda dengan bunga papan bernuansa ceria dan mewah.",
    seoTitle: "Bunga Papan Wedding Malang Murah & Berkualitas",
    seoDescription: "Jual bunga papan wedding Malang murah dan berkualitas. Desain elegan, warna menawan, bunga segar, dan pengerjaan cepat oleh florist profesional.",
    image: "/images/kategori/wedding.webp"
  },
  {
    slug: "bunga-papan-congratulations-malang",
    name: "Bunga Papan Congratulations",
    description: "Apresiasi kesuksesan pembukaan toko, grand opening, kelulusan, atau kenaikan jabatan dengan karangan bunga megah.",
    seoTitle: "Bunga Papan Congratulations Malang Murah & Berkualitas",
    seoDescription: "Kirim bunga papan congratulations Malang murah dan berkualitas untuk grand opening, toko baru, kantor, atau ucapan selamat sukses dengan desain modern.",
    image: "/images/kategori/congratulations.webp"
  },
  {
    slug: "standing-flower-malang",
    name: "Standing Flower",
    description: "Bunga berdiri eksklusif untuk diletakkan di dalam ruangan, cocok untuk acara formal maupun duka cita.",
    seoTitle: "Standing Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan standing flower Malang murah dan berkualitas untuk duka cita, opening, wedding, dan acara formal. Rangkaian segar, elegan, dan pengiriman aman.",
    image: "/images/kategori/standing-flower.webp"
  },
  {
    slug: "hand-bouquet-malang",
    name: "Hand Bouquet",
    description: "Rangkaian bunga tangan segar nan cantik untuk momen romantis, wisuda, ulang tahun, atau hari ibu.",
    seoTitle: "Hand Bouquet Malang Murah & Berkualitas",
    seoDescription: "Jual hand bouquet Malang murah dan berkualitas untuk wisuda, lamaran, ulang tahun, Valentine, dan hadiah romantis. Bunga segar, rapi, bisa custom.",
    image: "/images/kategori/hand-bouquet.webp"
  },
  {
    slug: "paper-flower-malang",
    name: "Paper Flower",
    description: "Kreasi bunga dari kertas berkualitas tinggi yang tahan lama, cocok untuk dekorasi acara, kado spesial, dan pajangan.",
    seoTitle: "Paper Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan paper flower Malang murah dan berkualitas. Bunga kertas artistik, tahan lama, cantik untuk dekorasi, kado wisuda, lamaran, dan pajangan.",
    image: "/images/kategori/paper-flower.webp"
  },
  {
    slug: "bunga-meja-malang",
    name: "Bunga Meja",
    description: "Rangkaian bunga segar cantik untuk menghias meja kantor, lobby, ruang tamu, atau meja resepsi acara Anda.",
    seoTitle: "Bunga Meja Malang Murah & Berkualitas",
    seoDescription: "Pesan bunga meja Malang murah dan berkualitas untuk dekorasi lobby, kantor, ruang tamu, meja resepsi, dan acara formal. Segar, cantik, dan elegan.",
    image: "/images/kategori/bunga-meja.svg"
  }
];

export const PRODUCTS: Product[] = [
  // Bunga Papan Duka Cita
  {
    id: "BP-DC-01",
    slug: "bunga-papan-duka-cita-malang-classic-white",
    name: "Bunga Papan Duka Cita - Classic White",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 500000,
    priceLabel: "Rp 500.000",
    image: "/images/produk/bunga-papan/duka-cita/500000/duka-cita-classic.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Karangan bunga papan duka cita dengan dominasi warna putih bersih, hijau tua, dan aksen kuning/hitam yang memberikan kesan tenang, takzim, dan penuh rasa hormat. Menggunakan bunga segar pilihan di bagian atas dan bawah papan, serta bahan spon tebal berkualitas tinggi. Sangat tepat sebagai ungkapan simpati mendalam Anda.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita - Classic White (BP-DC-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-02",
    slug: "bunga-papan-duka-cita-malang-premium-purple",
    name: "Bunga Papan Duka Cita - Premium Purple",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 750000,
    priceLabel: "Rp 750.000",
    image: "/images/produk/bunga-papan/duka-cita/750000/duka-cita-premium.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Karangan bunga papan duka cita ukuran besar (2x1.25m) dengan kombinasi warna ungu anggun dan putih bersih. Rangkaian bunga segar penuh di atas, bawah, kanan, dan kiri papan memberikan tampilan yang sangat mewah dan eksklusif. Dibuat khusus oleh mitra florist berpengalaman untuk menyampaikan belasungkawa terbaik Anda.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita - Premium Purple (BP-DC-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Papan Wedding
  {
    id: "BP-WD-01",
    slug: "bunga-papan-wedding-malang-sweet-romance",
    name: "Bunga Papan Wedding - Sweet Romance",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 600000,
    priceLabel: "Rp 600.000",
    image: "/images/produk/bunga-papan/wedding/600000/wedding-sweet.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Bunga papan pernikahan bertema romantis manis dengan perpaduan warna pink pastel, putih, dan merah hati. Dihiasi dengan bunga-bunga segar berkualitas tinggi seperti krisan, aster, dan mawar lokal. Desain huruf yang rapi dan artistik menjamin ucapan selamat Anda terlihat menonjol dan indah di area pesta pernikahan.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Sweet Romance (BP-WD-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-02",
    slug: "bunga-papan-wedding-malang-luxury-rose",
    name: "Bunga Papan Wedding - Luxury Rose",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 900000,
    priceLabel: "Rp 900.000",
    image: "/images/produk/bunga-papan/wedding/900000/wedding-luxury.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Karangan bunga papan pernikahan kelas premium ukuran super megah. Memiliki hiasan bunga mawar merah dan putih melimpah di setiap sudutnya, ditambah dengan dedaunan hijau tropis yang menambah kesegaran alami. Desain latar belakang yang elegan memberikan kesan sangat eksklusif bagi penerima ucapan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Luxury Rose (BP-WD-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "4 - 5 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Standing Flower
  {
    id: "SF-01",
    slug: "standing-flower-malang-paket-725",
    name: "Standing Flower - Paket 725",
    categorySlug: "standing-flower-malang",
    categoryName: "Standing Flower",
    city: "Malang",
    priceFrom: 725000,
    priceLabel: "Rp 725.000",
    image: "/images/produk/standing-flower/450000/725.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Standing flower paket 725 ribu dengan rangkaian bunga berdiri yang rapi, elegan, dan cocok untuk acara formal, pernikahan, grand opening, maupun ungkapan simpati di area Malang Raya.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan Standing Flower - Paket 725 (SF-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "SF-02",
    slug: "standing-flower-malang-paket-1150",
    name: "Standing Flower - Paket 1150",
    categorySlug: "standing-flower-malang",
    categoryName: "Standing Flower",
    city: "Malang",
    priceFrom: 1150000,
    priceLabel: "Rp 1.150.000",
    image: "/images/produk/standing-flower/700000/1150.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Standing flower paket 1,15 juta dengan tampilan lebih penuh dan premium. Rangkaian ini cocok untuk kebutuhan acara penting, ucapan selamat, maupun dekorasi formal yang membutuhkan kesan mewah.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Standing Flower - Paket 1150 (SF-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Hand Bouquet
  {
    id: "HB-01",
    slug: "hand-bouquet-malang-red-rose-passion",
    name: "Hand Bouquet - Red Rose Passion",
    categorySlug: "hand-bouquet-malang",
    categoryName: "Hand Bouquet",
    city: "Malang",
    priceFrom: 250000,
    priceLabel: "Rp 250.000",
    image: "/images/produk/hand-bouquet/250000/bouquet-red-rose.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Buket bunga mawar merah segar berisi 12-15 tangkai mawar premium pilihan yang diikat manis dengan kertas pembungkus (wrapping paper) hitam matte atau coklat craft elegan. Aksen baby's breath putih di sekeliling mawar menambah keanggunan buket ini. Kado paling romantis untuk orang tercinta di Malang.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan Hand Bouquet - Red Rose Passion (HB-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "1 - 2 Jam",
    serviceArea: ["Kota Malang", "Kota Batu"]
  },
  {
    id: "HB-02",
    slug: "hand-bouquet-malang-tulip-breeze",
    name: "Hand Bouquet - Tulip Breeze",
    categorySlug: "hand-bouquet-malang",
    categoryName: "Hand Bouquet",
    city: "Malang",
    priceFrom: 400000,
    priceLabel: "Rp 400.000",
    image: "/images/produk/hand-bouquet/400000/bouquet-tulip.webp",
    imageWidth: 960,
    imageHeight: 960,
    description: "Buket bunga tangan eksklusif yang menggunakan bunga tulip segar impor (warna pink/putih/kuning sesuai ketersediaan). Rangkaian bunga tulip ini dipadukan dengan daun eucalyptus beraroma menenangkan. Kado ulang tahun, wisuda, atau hari spesial yang sangat modern dan minimalis.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Hand Bouquet - Tulip Breeze (HB-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 Jam",
    serviceArea: ["Kota Malang", "Kota Batu"]
  },

  // Paper Flower
  {
    id: "PF-01",
    slug: "paper-flower-malang-paket-600",
    name: "Paper Flower - Paket 600",
    categorySlug: "paper-flower-malang",
    categoryName: "Paper Flower",
    city: "Malang",
    priceFrom: 600000,
    priceLabel: "Rp 600.000",
    image: "/images/produk/paper-flower/200000/600.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Paper flower paket 600 ribu dengan detail handmade yang rapi and tahan lama. Cocok untuk dekorasi acara, kado spesial, wisuda, lamaran, atau pajangan cantik di rumah.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan Paper Flower - Paket 600 (PF-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "1 - 2 Hari",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "PF-02",
    slug: "paper-flower-malang-paket-700",
    name: "Paper Flower - Paket 700",
    categorySlug: "paper-flower-malang",
    categoryName: "Paper Flower",
    city: "Malang",
    priceFrom: 700000,
    priceLabel: "Rp 700.000",
    image: "/images/produk/paper-flower/350000/700.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Paper flower paket 700 ribu dengan komposisi lebih berisi untuk dekorasi, kado spesial, backdrop mini, atau pajangan yang ingin terlihat lebih menonjol dan elegan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Paper Flower - Paket 700 (PF-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Hari",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Meja
  {
    id: "BM-01",
    slug: "bunga-meja-malang-paket-700",
    name: "Bunga Meja - Paket 700",
    categorySlug: "bunga-meja-malang",
    categoryName: "Bunga Meja",
    city: "Malang",
    priceFrom: 700000,
    priceLabel: "Rp 700.000",
    image: "/images/produk/bunga-meja/400000/700.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Bunga meja paket 700 ribu dengan rangkaian segar yang cocok untuk meja tamu, lobby, meja resepsionis, rapat, atau dekorasi acara formal di area Malang.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Bunga Meja - Paket 700 (BM-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BM-02",
    slug: "bunga-meja-malang-paket-950",
    name: "Bunga Meja - Paket 950",
    categorySlug: "bunga-meja-malang",
    categoryName: "Bunga Meja",
    city: "Malang",
    priceFrom: 950000,
    priceLabel: "Rp 950.000",
    image: "/images/produk/bunga-meja/250000/950.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Bunga meja paket 950 ribu dengan susunan bunga lebih penuh dan premium. Pilihan pas untuk dekorasi meja VIP, lobby, ruang meeting, resepsi, atau acara spesial.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Bunga Meja - Paket 950 (BM-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  }
];

export const CATEGORIES: Category[] = RAW_CATEGORIES.filter(cat =>
  PRODUCTS.some(p => p.categorySlug === cat.slug)
);
