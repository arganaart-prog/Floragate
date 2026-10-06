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
    id: "BP-DC-03",
    slug: "bunga-papan-duka-cita-malang-001",
    name: "Bunga Papan Duka Cita Malang 001",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 675000,
    priceLabel: "Rp 675.000",
    image: "/images/produk/bunga-papan/duka-cita/750000/Product1.webp",
    imageWidth: 1122,
    imageHeight: 1230,
    description: "Karangan bunga papan duka cita dengan desain elegan dan rangkaian bunga yang tertata rapi untuk menyampaikan belasungkawa secara hangat, sopan, dan penuh penghormatan.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 001 (BP-DC-03). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-04",
    slug: "bunga-papan-duka-cita-malang-002",
    name: "Bunga Papan Duka Cita Malang 002",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 935000,
    priceLabel: "Rp 935.000",
    image: "/images/produk/bunga-papan/duka-cita/935.webp",
    imageWidth: 1198,
    imageHeight: 1313,
    description: "Bunga papan duka cita paket 935 ribu dengan desain bernuansa teduh dan rangkaian bunga segar yang rapi untuk menyampaikan ungkapan belasungkawa di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 002 (BP-DC-04). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-05",
    slug: "bunga-papan-duka-cita-malang-003",
    name: "Bunga Papan Duka Cita Malang 003",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 1155000,
    priceLabel: "Rp 1.155.000",
    image: "/images/produk/bunga-papan/duka-cita/1155.webp",
    imageWidth: 1313,
    imageHeight: 1198,
    description: "Bunga papan duka cita paket 1,155 juta dengan tampilan megah, susunan bunga melimpah, dan nuansa terhormat untuk ungkapan belasungkawa mendalam di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 003 (BP-DC-05). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-06",
    slug: "bunga-papan-duka-cita-malang-004",
    name: "Bunga Papan Duka Cita Malang 004",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 735000,
    priceLabel: "Rp 735.000",
    image: "/images/produk/bunga-papan/duka-cita/735.webp",
    imageWidth: 1086,
    imageHeight: 1448,
    description: "Bunga papan duka cita paket 735 ribu dengan desain bernuansa teduh, tenang, dan susunan bunga segar yang rapi untuk menyampaikan ungkapan belasungkawa di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 004 (BP-DC-06). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-07",
    slug: "bunga-papan-duka-cita-malang-005",
    name: "Bunga Papan Duka Cita Malang 005",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 1350000,
    priceLabel: "Rp 1.350.000",
    image: "/images/produk/bunga-papan/duka-cita/1350.webp",
    imageWidth: 1198,
    imageHeight: 1313,
    description: "Bunga papan duka cita paket 1,35 juta dengan tampilan megah, susunan bunga melimpah, dan nuansa terhormat untuk ungkapan belasungkawa mendalam di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 005 (BP-DC-07). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-08",
    slug: "bunga-papan-duka-cita-malang-006",
    name: "Bunga Papan Duka Cita Malang 006",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 975000,
    priceLabel: "Rp 975.000",
    image: "/images/produk/bunga-papan/duka-cita/975.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    description: "Bunga papan duka cita paket 975 ribu dengan susunan bunga segar elegan dan nuansa terhormat untuk menyampaikan belasungkawa di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 006 (BP-DC-08). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-DC-09",
    slug: "bunga-papan-duka-cita-malang-007",
    name: "Bunga Papan Duka Cita Malang 007",
    categorySlug: "bunga-papan-duka-cita-malang",
    categoryName: "Bunga Papan Duka Cita",
    city: "Malang",
    priceFrom: 1475000,
    priceLabel: "Rp 1.475.000",
    image: "/images/produk/bunga-papan/duka-cita/1475.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    description: "Bunga papan duka cita paket 1,475 juta dengan desain premium megah, susunan bunga melimpah ruah, dan nuansa terhormat untuk belasungkawa mendalam.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Duka Cita Malang 007 (BP-DC-09). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Papan Wedding
  {
    id: "BP-WD-03",
    slug: "bunga-papan-wedding-malang-001",
    name: "Bunga Papan Wedding Malang 001",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 725000,
    priceLabel: "Rp 725.000",
    image: "/images/produk/bunga-papan/wedding/800000/Product1.webp",
    imageWidth: 1122,
    imageHeight: 1297,
    description: "Bunga papan wedding dengan tampilan meriah dan rangkaian bunga yang cantik untuk menyampaikan ucapan selamat atas momen pernikahan keluarga, sahabat, atau rekan kerja.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 001 (BP-WD-03). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-04",
    slug: "bunga-papan-wedding-malang-002",
    name: "Bunga Papan Wedding Malang 002",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 700000,
    priceLabel: "Rp 700.000",
    image: "/images/produk/bunga-papan/wedding/700.webp",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 700 ribu dengan desain ceria dan rangkaian bunga segar yang rapi untuk ucapan selamat pernikahan di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 002 (BP-WD-04). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-05",
    slug: "bunga-papan-wedding-malang-003",
    name: "Bunga Papan Wedding Malang 003",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 675000,
    priceLabel: "Rp 675.000",
    image: "/images/produk/bunga-papan/wedding/800.webp",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 675 ribu dengan tampilan meriah, warna menarik, dan komposisi bunga yang cantik untuk mengirimkan ucapan selamat pernikahan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 003 (BP-WD-05). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-06",
    slug: "bunga-papan-wedding-malang-004",
    name: "Bunga Papan Wedding Malang 004",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 775000,
    priceLabel: "Rp 775.000",
    image: "/images/produk/bunga-papan/wedding/950.webp",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 775 ribu dengan susunan bunga yang lebih penuh dan elegan untuk melengkapi momen pernikahan keluarga, sahabat, atau rekan kerja.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 004 (BP-WD-06). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-07",
    slug: "bunga-papan-wedding-malang-005",
    name: "Bunga Papan Wedding Malang 005",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 1350000,
    priceLabel: "Rp 1.350.000",
    image: "/images/produk/bunga-papan/wedding/1350.webp",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 1,35 juta dengan desain premium, ukuran tampilan yang megah, dan rangkaian bunga lebih melimpah untuk ucapan pernikahan yang berkesan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 005 (BP-WD-07). Mohon info harga detail dan format pemesanannya.",
    processingTime: "4 - 5 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-08",
    slug: "bunga-papan-wedding-malang-006",
    name: "Bunga Papan Wedding Malang 006",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 750000,
    priceLabel: "Rp 750.000",
    image: "/images/produk/bunga-papan/wedding/800000/Product3.webp",
    imageWidth: 1122,
    imageHeight: 1402,
    description: "Bunga papan wedding paket 750 ribu varian Product3 dengan tampilan meriah dan rangkaian bunga segar yang cantik untuk ucapan selamat pernikahan.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 006 (BP-WD-08). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-09",
    slug: "bunga-papan-wedding-malang-007",
    name: "Bunga Papan Wedding Malang 007",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 475000,
    priceLabel: "Rp 475.000",
    image: "/images/produk/bunga-papan/wedding/475.webp",
    imageWidth: 1166,
    imageHeight: 1349,
    description: "Bunga papan wedding paket 475 ribu dengan desain elegan dan rangkaian bunga segar yang rapi untuk ucapan selamat pernikahan di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 007 (BP-WD-09). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-10",
    slug: "bunga-papan-wedding-malang-008",
    name: "Bunga Papan Wedding Malang 008",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 1175000,
    priceLabel: "Rp 1.175.000",
    image: "/images/produk/bunga-papan/wedding/1175.webp",
    imageWidth: 1167,
    imageHeight: 1348,
    description: "Bunga papan wedding paket 1,175 juta dengan desain mewah dan rangkaian bunga melimpah untuk ucapan selamat pernikahan yang berkesan di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 008 (BP-WD-10). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-WD-11",
    slug: "bunga-papan-wedding-malang-009",
    name: "Bunga Papan Wedding Malang 009",
    categorySlug: "bunga-papan-wedding-malang",
    categoryName: "Bunga Papan Wedding",
    city: "Malang",
    priceFrom: 1165000,
    priceLabel: "Rp 1.165.000",
    image: "/images/produk/bunga-papan/wedding/1165.webp",
    imageWidth: 1166,
    imageHeight: 1349,
    description: "Bunga papan wedding paket 1,165 juta dengan desain mewah dan susunan bunga melimpah untuk ucapan selamat pernikahan yang berkesan di area Malang Raya.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Wedding Malang 009 (BP-WD-11). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },

  // Bunga Papan Congratulations
  {
    id: "BP-CG-01",
    slug: "bunga-papan-congratulations-malang-001",
    name: "Bunga Papan Congratulations Malang 001",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 550000,
    priceLabel: "Rp 550.000",
    image: "/images/produk/bunga-papan/congratulations/550000/Product1.webp",
    imageWidth: 1084,
    imageHeight: 1272,
    description: "Bunga papan ucapan 'Selamat & Sukses' atau 'Congratulations' dengan nuansa warna kuning cerah, merah meriah, dan aksen emas (gold) yang melambangkan kemakmuran dan kesuksesan. Sangat cocok diletakkan di depan toko baru, kantor baru, atau kafe saat peresmian / grand opening di area Malang.",
    featured: true,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations Malang 001 (BP-CG-01). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-CG-02",
    slug: "bunga-papan-congratulations-malang-002",
    name: "Bunga Papan Congratulations Malang 002",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 1750000,
    priceLabel: "Rp 1.750.000",
    image: "/images/produk/bunga-papan/congratulations/2250000/Product1.webp",
    imageWidth: 1158,
    imageHeight: 1359,
    description: "Karangan bunga papan selamat grand opening dengan desain penuh energi, paduan warna jingga, merah menyala, dan biru navy yang modern. Dirangkai menggunakan spon tebal anti badai dengan hiasan bunga segar melimpah ruah di bagian mahkota atas dan kaki bawah papan bunga.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations Malang 002 (BP-CG-02). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-CG-04",
    slug: "bunga-papan-congratulations-malang-003",
    name: "Bunga Papan Congratulations Malang 003",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 1800000,
    priceLabel: "Rp 1.800.000",
    image: "/images/produk/bunga-papan/congratulations/2250000/2500000.webp",
    imageWidth: 1122,
    imageHeight: 1311,
    description: "Karangan bunga papan congratulations premium dengan tampilan megah dan rangkaian bunga melimpah untuk pembukaan usaha, pencapaian penting, atau ucapan selamat eksklusif di area Malang.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations Malang 003 (BP-CG-04). Mohon info harga detail dan format pemesanannya.",
    processingTime: "3 - 4 Jam",
    serviceArea: ["Kota Malang", "Kabupaten Malang", "Kota Batu"]
  },
  {
    id: "BP-CG-05",
    slug: "bunga-papan-congratulations-malang-004",
    name: "Bunga Papan Congratulations Malang 004",
    categorySlug: "bunga-papan-congratulations-malang",
    categoryName: "Bunga Papan Congratulations",
    city: "Malang",
    priceFrom: 1135000,
    priceLabel: "Rp 1.135.000",
    image: "/images/produk/bunga-papan/congratulations/1135.webp",
    imageWidth: 1084,
    imageHeight: 1322,
    description: "Karangan bunga papan ucapan selamat & sukses paket 1,135 juta dengan susunan bunga segar elegan dan desain menarik untuk pembukaan usaha, grand opening, atau momen perayaan penting di area Malang.",
    featured: false,
    whatsappText: "Halo Floragate, saya ingin pesan karangan Bunga Papan Congratulations Malang 004 (BP-CG-05). Mohon info harga detail dan format pemesanannya.",
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
    priceFrom: 675000,
    priceLabel: "Rp 675.000",
    image: "/images/produk/standing-flower/450000/725.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Standing flower paket 675 ribu dengan rangkaian bunga berdiri yang rapi, elegan, dan cocok untuk acara formal, pernikahan, grand opening, maupun ungkapan simpati di area Malang Raya.",
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
    priceFrom: 935000,
    priceLabel: "Rp 935.000",
    image: "/images/produk/standing-flower/700000/1150.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Standing flower paket 935 ribu dengan tampilan lebih penuh dan premium. Rangkaian ini cocok untuk kebutuhan acara penting, ucapan selamat, maupun dekorasi formal yang membutuhkan kesan mewah.",
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
    priceFrom: 575000,
    priceLabel: "Rp 575.000",
    image: "/images/produk/paper-flower/200000/600.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Paper flower paket 575 ribu dengan detail handmade yang rapi and tahan lama. Cocok untuk dekorasi acara, kado spesial, wisuda, lamaran, atau pajangan cantik di rumah.",
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
    priceFrom: 645000,
    priceLabel: "Rp 645.000",
    image: "/images/produk/paper-flower/350000/700.webp",
    imageWidth: 960,
    imageHeight: 1200,
    description: "Paper flower paket 645 ribu dengan komposisi lebih berisi untuk dekorasi, kado spesial, backdrop mini, atau pajangan yang ingin terlihat lebih menonjol dan elegan.",
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
