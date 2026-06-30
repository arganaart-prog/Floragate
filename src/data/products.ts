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

export const CATEGORIES: Category[] = [
  {
    slug: "bunga-papan-duka-cita-malang",
    name: "Bunga Papan Duka Cita",
    description: "Ungkapan bela sungkawa terdalam dengan karangan bunga papan elegan, tenang, dan terhormat.",
    seoTitle: "Bunga Papan Duka Cita Malang Murah & Berkualitas",
    seoDescription: "Pesan bunga papan duka cita Malang murah dan berkualitas di Floragate. Rangkaian elegan, bunga segar, proses cepat 3 jam, dan gratis ongkir area Kota Malang.",
    image: "/images/kategori/duka-cita.png"
  },
  {
    slug: "bunga-papan-wedding-malang",
    name: "Bunga Papan Wedding",
    description: "Semarakkan momen bahagia pernikahan kerabat Anda dengan bunga papan bernuansa ceria dan mewah.",
    seoTitle: "Bunga Papan Wedding Malang Murah & Berkualitas",
    seoDescription: "Jual bunga papan wedding Malang murah dan berkualitas. Desain elegan, warna menawan, bunga segar, dan pengerjaan cepat oleh florist profesional.",
    image: "/images/kategori/wedding.png"
  },
  {
    slug: "bunga-papan-congratulations-malang",
    name: "Bunga Papan Congratulations",
    description: "Apresiasi kesuksesan pembukaan toko, grand opening, kelulusan, atau kenaikan jabatan dengan karangan bunga megah.",
    seoTitle: "Bunga Papan Congratulations Malang Murah & Berkualitas",
    seoDescription: "Kirim bunga papan congratulations Malang murah dan berkualitas untuk grand opening, toko baru, kantor, atau ucapan selamat sukses dengan desain modern.",
    image: "/images/kategori/congratulations.png"
  },
  {
    slug: "standing-flower-malang",
    name: "Standing Flower",
    description: "Bunga berdiri eksklusif untuk diletakkan di dalam ruangan, cocok untuk acara formal maupun duka cita.",
    seoTitle: "Standing Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan standing flower Malang murah dan berkualitas untuk duka cita, opening, wedding, dan acara formal. Rangkaian segar, elegan, dan pengiriman aman.",
    image: "/images/kategori/standing-flower.png"
  },
  {
    slug: "hand-bouquet-malang",
    name: "Hand Bouquet",
    description: "Rangkaian bunga tangan segar nan cantik untuk momen romantis, wisuda, ulang tahun, atau hari ibu.",
    seoTitle: "Hand Bouquet Malang Murah & Berkualitas",
    seoDescription: "Jual hand bouquet Malang murah dan berkualitas untuk wisuda, lamaran, ulang tahun, Valentine, dan hadiah romantis. Bunga segar, rapi, bisa custom.",
    image: "/images/kategori/hand-bouquet.png"
  },
  {
    slug: "paper-flower-malang",
    name: "Paper Flower",
    description: "Kreasi bunga dari kertas berkualitas tinggi yang tahan lama, cocok untuk dekorasi acara, kado spesial, dan pajangan.",
    seoTitle: "Paper Flower Malang Murah & Berkualitas",
    seoDescription: "Pesan paper flower Malang murah dan berkualitas. Bunga kertas artistik, tahan lama, cantik untuk dekorasi, kado wisuda, lamaran, dan pajangan.",
    image: "/images/kategori/paper-flower.png"
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
    image: "/images/produk/duka-cita-classic.webp",
    imageWidth: 600,
    imageHeight: 450,
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
    image: "/images/produk/duka-cita-premium.webp",
    imageWidth: 600,
    imageHeight: 450,
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
    image: "/images/produk/wedding-sweet.webp",
    imageWidth: 600,
    imageHeight: 450,
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
    image: "/images/produk/wedding-luxury.webp",
    imageWidth: 600,
    imageHeight: 450,
    description: "Karangan bunga papan pernikahan kelas premium ukuran super megah. Memiliki hiasan bunga mawar merah dan putih melimpah di setiap sudutnya, ditambah dengan dedaunan hijau tropis yang menambah kesegaran alami. Desain latar belakang yang elegan memberikan kesan sangat eksklusif bagi penerima ucapan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding - Luxury Rose (BP-WD-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "4 - 5 Jam",
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
    image: "/images/produk/congrats-success.webp",
    imageWidth: 600,
    imageHeight: 450,
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
    priceFrom: 800000,
    priceLabel: "Rp 800.000",
    image: "/images/produk/congrats-vibrant.webp",
    imageWidth: 600,
    imageHeight: 450,
    description: "Karangan bunga papan selamat grand opening dengan desain penuh energi, paduan warna jingga, merah menyala, dan biru navy yang modern. Dirangkai menggunakan spon tebal anti badai dengan hiasan bunga segar melimpah ruah di bagian mahkota atas dan kaki bawah papan bunga.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations - Vibrant Achievement (BP-CG-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Standing Flower
  {
    id: "SF-01",
    slug: "standing-flower-malang-elegant-lilac",
    name: "Standing Flower - Elegant Lilac",
    categorySlug: "standing-flower-malang",
    categoryName: "Standing Flower",
    city: "Malang",
    priceFrom: 450000,
    priceLabel: "Rp 450.000",
    image: "/images/produk/standing-lilac.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Standing flower cantik dengan tinggi sekitar 1.5 meter yang ditopang oleh kaki besi kokoh. Menggunakan kombinasi bunga mawar lilac, krisan putih, krisan ungu, dan dedaunan eucalyptus. Sangat cocok ditaruh di dalam ruangan (indoor) gereja, gedung pernikahan, lobby kantor, atau rumah duka.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan Standing Flower - Elegant Lilac (SF-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "SF-02",
    slug: "standing-flower-malang-pure-devotion",
    name: "Standing Flower - Pure Devotion",
    categorySlug: "standing-flower-malang",
    categoryName: "Standing Flower",
    city: "Malang",
    priceFrom: 700000,
    priceLabel: "Rp 700.000",
    image: "/images/produk/standing-pure.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Rangkaian bunga berdiri mewah 2 tingkat dengan mengedepankan bunga lili wangi putih, mawar merah, mawar peach, serta dedaunan premium. Desain modern melingkar yang memberikan aura ketenangan, kesucian, dan kemewahan dalam satu kesatuan. Dirancang eksklusif oleh florist mitra utama Floragate.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Standing Flower - Pure Devotion (SF-02). Mohon info harga detail dan format pemesanannya.",
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
    image: "/images/produk/bouquet-red-rose.webp",
    imageWidth: 600,
    imageHeight: 600,
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
    image: "/images/produk/bouquet-tulip.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Buket bunga tangan eksklusif yang menggunakan bunga tulip segar impor (warna pink/putih/kuning sesuai ketersediaan). Rangkaian bunga tulip ini dipadukan dengan daun eucalyptus beraroma menenangkan. Kado ulang tahun, wisuda, atau hari spesial yang sangat modern dan minimalis.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Hand Bouquet - Tulip Breeze (HB-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 Jam",
    serviceArea: ["Kota Malang", "Kota Batu"]
  },

  // Paper Flower
  {
    id: "PF-01",
    slug: "paper-flower-malang-rose-garden",
    name: "Paper Flower - Rose Garden",
    categorySlug: "paper-flower-malang",
    categoryName: "Paper Flower",
    city: "Malang",
    priceFrom: 200000,
    priceLabel: "Rp 200.000",
    image: "/images/produk/box-pastel.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Rangkaian bunga kertas premium berbentuk mawar merah dan pink yang dibuat dengan detail presisi tinggi dari kertas Italia berkualitas. Tahan lama hingga bertahun-tahun tanpa layu, cocok untuk dekorasi rumah, kado wisuda, atau pajangan meja. Dikemas dalam box eksklusif.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan Paper Flower - Rose Garden (PF-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "1 - 2 Hari",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "PF-02",
    slug: "paper-flower-malang-peony-blush",
    name: "Paper Flower - Peony Blush",
    categorySlug: "paper-flower-malang",
    categoryName: "Paper Flower",
    city: "Malang",
    priceFrom: 350000,
    priceLabel: "Rp 350.000",
    image: "/images/produk/box-orchid.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Kreasi bunga kertas peony jumbo berwarna pastel blush dan putih. Sangat cocok untuk backdrop foto, dekorasi lamaran, atau pajangan ruang tamu. Dibuat secara handmade dengan kertas crepe premium yang memberikan kesan realistis dan elegan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Paper Flower - Peony Blush (PF-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Hari",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Meja
  {
    id: "BM-01",
    slug: "bunga-meja-malang-fresh-elegance",
    name: "Bunga Meja - Fresh Elegance",
    categorySlug: "bunga-meja-malang",
    categoryName: "Bunga Meja",
    city: "Malang",
    priceFrom: 250000,
    priceLabel: "Rp 250.000",
    image: "/images/produk/box-pastel.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Rangkaian bunga meja segar dengan kombinasi mawar pink, krisan putih, dan baby's breath dalam vas kaca elegan. Cocok untuk menghias meja lobby kantor, meja resepsionis, atau ruang tamu. Memberikan sentuhan segar dan wangi alami pada ruangan Anda.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Bunga Meja - Fresh Elegance (BM-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BM-02",
    slug: "bunga-meja-malang-tropical-bloom",
    name: "Bunga Meja - Tropical Bloom",
    categorySlug: "bunga-meja-malang",
    categoryName: "Bunga Meja",
    city: "Malang",
    priceFrom: 400000,
    priceLabel: "Rp 400.000",
    image: "/images/produk/box-orchid.webp",
    imageWidth: 600,
    imageHeight: 600,
    description: "Rangkaian bunga meja premium dengan bunga anggrek, lili putih, dan dedaunan hijau tropis dalam pot keramik putih modern. Desain modern dan minimalis yang memberikan nuansa mewah untuk meja meeting, meja VIP, atau dekorasi acara formal di Malang.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan Bunga Meja - Tropical Bloom (BM-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "2 - 3 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  }
];

