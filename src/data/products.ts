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
    seoDescription: "Pesan standing flower Malang murah and berkualitas untuk duka cita, opening, wedding, dan acara formal. Rangkaian segar, elegan, dan pengiriman aman.",
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
  // Bunga Papan Duka Cita (Hanya produk riil pengguna)
  {
    id: "BP-DC-03",
    slug: "bunga-papan-duka-cita-malang-product1",
    name: "Bunga Papan Duka Cita - Product1",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 750000,
    priceLabel: "Rp 750.000",
    image: "/images/produk/bunga-papan/duka-cita/750000/Product1.png",
    imageWidth: 1122,
    imageHeight: 1230,
    description: "Karangan bunga papan duka cita dengan desain elegan dan rangkaian bunga yang tertata rapi untuk menyampaikan belasungkawa secara hangat, sopan, dan penuh penghormatan.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita - Product1 (BP-DC-03). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Papan Wedding (Hanya produk riil pengguna)
  {
    id: "BP-WD-03",
    slug: "bunga-papan-wedding-malang-product1",
    name: "Bunga Papan Wedding - Product1",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 800000,
    priceLabel: "Rp 800.000",
    image: "/images/produk/bunga-papan/wedding/800000/Product1.png",
    imageWidth: 1122,
    imageHeight: 1297,
    description: "Bunga papan wedding dengan tampilan meriah dan rangkaian bunga yang cantik untuk menyampaikan ucapan selamat atas momen pernikahan keluarga, sahabat, atau rekan kerja.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Product1 (BP-WD-03). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-04",
    slug: "bunga-papan-wedding-malang-paket-700",
    name: "Bunga Papan Wedding - Paket 700",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 700000,
    priceLabel: "Rp 700.000",
    image: "/images/produk/bunga-papan/wedding/700.png",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 700 ribu dengan desain ceria dan rangkaian bunga segar yang rapi untuk ucapan selamat pernikahan di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Paket 700 (BP-WD-04). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-05",
    slug: "bunga-papan-wedding-malang-paket-800",
    name: "Bunga Papan Wedding - Paket 800",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 800000,
    priceLabel: "Rp 800.000",
    image: "/images/produk/bunga-papan/wedding/800.png",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 800 ribu dengan tampilan meriah, warna menarik, dan komposisi bunga yang cantik untuk mengirimkan ucapan selamat pernikahan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Paket 800 (BP-WD-05). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-06",
    slug: "bunga-papan-wedding-malang-paket-950",
    name: "Bunga Papan Wedding - Paket 950",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 950000,
    priceLabel: "Rp 950.000",
    image: "/images/produk/bunga-papan/wedding/950.png",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 950 ribu dengan susunan bunga yang lebih penuh dan elegan untuk melengkapi momen pernikahan keluarga, sahabat, atau rekan kerja.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Paket 950 (BP-WD-06). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-07",
    slug: "bunga-papan-wedding-malang-paket-1350",
    name: "Bunga Papan Wedding - Paket 1350",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 1350000,
    priceLabel: "Rp 1.350.000",
    image: "/images/produk/bunga-papan/wedding/1350.png",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 1,35 juta dengan desain premium, ukuran tampilan yang megah, dan rangkaian bunga lebih melimpah untuk ucapan pernikahan yang berkesan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Paket 1350 (BP-WD-07). Mohon info harga detail dan format pemesanannya.",
    processingTime: "4 - 5 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-08",
    slug: "bunga-papan-wedding-malang-product3",
    name: "Bunga Papan Wedding - Product3",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 800000,
    priceLabel: "Rp 800.000",
    image: "/images/produk/bunga-papan/wedding/800000/Product3.png",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 800 ribu varian Product3 dengan tampilan meriah dan rangkaian bunga segar yang cantik untuk ucapan selamat pernikahan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Product3 (BP-WD-08). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Papan Congratulations
  {
    id: "BP-CG-01",
    slug: "bunga-papan-congratulations-success-gold",
    name: "Bunga Papan Congratulations - Success Gold",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 550000,
    priceLabel: "Rp 550.000",
    image: "/images/produk/bunga-papan/congratulations/550000/Product1.png",
    imageWidth: 1084,
    imageHeight: 1272,
    description: "Bunga papan ucapan 'Selamat & Sukses' atau 'Congratulations' dengan nuansa warna kuning cerah, merah meriah, dan aksen emas (gold) yang melambangkan kemakmuran dan kesuksesan. Sangat cocok diletakkan di depan toko baru, kantor baru, atau kafe saat peresmian / grand opening di area Malang.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations - Success Gold (BP-CG-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  {
    id: "BP-CG-02",
    slug: "bunga-papan-congratulations-vibrant-achievement",
    name: "Bunga Papan Congratulations - Vibrant Achievement",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 2250000,
    priceLabel: "Rp 2.250.000",
    image: "/images/produk/bunga-papan/congratulations/2250000/Product1.png",
    imageWidth: 1158,
    imageHeight: 1359,
    description: "Karangan bunga papan selamat grand opening dengan desain penuh energi, paduan warna jingga, merah menyala, dan biru navy yang modern. Dirangkai menggunakan spon tebal anti badai dengan hiasan bunga segar melimpah ruah di bagian mahkota atas dan kaki bawah papan bunga.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations - Vibrant Achievement (BP-CG-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-CG-04",
    slug: "bunga-papan-congratulations-premium-celebration",
    name: "Bunga Papan Congratulations - Premium Celebration",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 250000,
    priceLabel: "Rp 2.500.000",
    image: "/images/produk/bunga-papan/congratulations/2250000/2500000.png",
    imageWidth: 1122,
    imageHeight: 1311,
    description: "Karangan bunga papan congratulations premium dengan tampilan megah dan rangkaian bunga melimpah untuk pembukaan usaha, pencapaian penting, atau ucapan selamat eksklusif di area Malang.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations - Premium Celebration (BP-CG-04). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
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
    image: "/images/produk/bunga-meja/400000/700.png",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Bunga meja paket 700 ribu dengan rangkaian segar yang cocok untuk meja tamu, lobby, meja resepsionis, rapat, atau dekorasi acara formal di area Malang.",
    featured: true,
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
    image: "/images/produk/bunga-meja/250000/950.png",
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
