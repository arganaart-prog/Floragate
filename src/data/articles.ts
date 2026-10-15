export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor?: string;
  readTime: string;
  date: string;
  isoDate: string;
  image: string;
  author: string;
  authorRole: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const ARTICLES: Article[] = [
  {
    id: 'artikel-1',
    slug: 'panduan-memilih-karangan-bunga-papan',
    title: 'Panduan Memilih Karangan Bunga Papan di Malang: Duka Cita, Pernikahan, & Selamat',
    excerpt: 'Ketahui standar ukuran, perpaduan warna yang sopan, etika kalimat ucapan, dan tips pemesanan tepat waktu di Malang.',
    category: 'Panduan Florist',
    categoryColor: '#2D382E',
    readTime: '4 mnt baca',
    date: '14 Oktober 2026',
    isoDate: '2026-10-14',
    image: '/images/produk/wedding-luxury.webp',
    author: 'Tim Florist Floragate',
    authorRole: 'Master Florist & Desainer Ucapan',
    content: {
      lead: 'Karangan bunga papan merupakan representasi penghormatan dan rasa peduli Anda kepada keluarga, sahabat, maupun rekan bisnis. Di Malang, tradisi mengirim bunga papan memiliki etika pemilihan warna dan tata bahasa ucapan tersendiri yang perlu diperhatikan.',
      sections: [
        {
          heading: '1. Menyesuaikan Warna Rangkaian dengan Momen',
          body: [
            'Untuk momen Duka Cita, gunakan dominasi warna teduh seperti hitam, putih, kuning lembut, ungu tua, atau biru tua. Hindari warna merah menyala atau motif ceria.',
            'Sebaliknya, untuk Pernikahan (Happy Wedding) dan Grand Opening / Sertijab, gunakan palet warna cerah dan energik seperti merah marun, emas (gold), oranye hangat, dan hijau segar sebagai simbol keberuntungan dan kegembiraan.'
          ],
          tip: 'Floragate selalu memberikan foto preview bunga papan sebelum dikirim ke lokasi acara di Malang Raya.'
        },
        {
          heading: '2. Ukuran Papan Standar vs Ukuran Jumbo',
          body: [
            'Ukuran standar 2 x 1,2 meter sangat ideal untuk mewakili individu atau divisi kantor kecil.',
            'Untuk instansi pemerintah, BUMN, direksi perusahaan, atau sahabat karib keluarga inti, ukuran 2 x 1,5 meter atau paket gandeng double papan memberikan impresi yang jauh lebih megah dan menonjol di barisan terdepan lokasi.'
          ]
        },
        {
          heading: '3. Waktu Pemesanan yang Ideal',
          body: [
            'Untuk acara pernikahan atau peresmian gedung, disarankan memesan H-1 agar papan dapat dipasang 2 jam sebelum tamu undangan hadir.',
            'Namun bila terjadi peristiwa duka cita mendadak, Floragate menyediakan layanan ekspres 3 jam selesai dengan garansi tiba tepat waktu di seluruh rumah duka di Kota Malang.'
          ]
        }
      ],
      conclusion: 'Memilih karangan bunga papan yang tepat menunjukkan ketulusan dan profesionalitas Anda. Konsultasikan kebutuhan desain dan kalimat ucapan Anda bersama tim Floragate Malang.'
    },
    tags: ['Bunga Papan', 'Florist Malang', 'Etika Karangan Bunga', 'Tips Pesan Bunga']
  },
  {
    id: 'artikel-2',
    slug: 'cara-merawat-hand-bouquet-bunga-segar',
    title: '5 Cara Merawat Hand Bouquet Bunga Segar Agar Mawar Tahan Lama di Rumah',
    excerpt: 'Trik praktis florist profesional: cara potong batang 45°, suhu ruangan ideal, dan ramuan alami menjaga kelopak tetap mekar segar.',
    category: 'Tips Perawatan',
    categoryColor: '#967849',
    readTime: '3 mnt baca',
    date: '12 Oktober 2026',
    isoDate: '2026-10-12',
    image: '/images/produk/bunga-meja/400000/700.webp',
    author: 'Sarah Lestari',
    authorRole: 'Spesialis Perangkai Hand Bouquet',
    content: {
      lead: 'Mendapatkan buket bunga segar saat hari ulang tahun, wisuda, atau anniversary tentu membahagiakan. Sayangnya tanpa perawatan yang benar, kelopak mawar bisa layu dalam 2 hari. Berikut panduan merawat buket agar awet hingga 7-10 hari.',
      sections: [
        {
          heading: '1. Buka Pembungkus & Potong Batang Miring 45 Derajat',
          body: [
            'Segera buka kertas pembungkus buket jika sudah sampai di rumah agar sirkulasi udara lancar.',
            'Potong bagian bawah batang bunga sekitar 2 cm dengan sudut miring 45 derajat menggunakan gunting tajam atau pisau di dalam air. Potongan miring memaksimalkan luas penyerapan air oleh pembuluh batang.'
          ],
          tip: 'Jangan memotong batang dengan gunting tumpul karena dapat meremukkan pembuluh kapiler bunga.'
        },
        {
          heading: '2. Gunakan Vas Bersih dan Air Dingin Segar',
          body: [
            'Pastikan vas bunga dicuci bersih bebas dari bakteri sebelum diisi air dingin. Bersihkan daun-daun di bagian bawah batang yang terendam air untuk mencegah pembusukan dan bau tidak sedap.',
            'Ganti air vas setiap hari atau maksimal 2 hari sekali agar air selalu steril dan kaya oksigen.'
          ]
        },
        {
          heading: '3. Hindarkan dari Sinar Matahari Langsung & AC Dingin Ekstrem',
          body: [
            'Tempatkan vas bunga di area yang teduh, sejuk, dan memiliki ventilasi baik.',
            'Jauhkan dari hembusan angin langsung AC, kipas angin kencang, serta jangan diletakkan dekat buah-buahan matang seperti pisang atau apel karena memancarkan gas etilen yang mempercepat pembungaan layu.'
          ]
        }
      ],
      conclusion: 'Dengan sedikit ketelatenan, buket bunga kenangan spesial Anda akan tetap cantik, wangi, dan mekar segar menghiasi sudut ruangan.'
    },
    tags: ['Hand Bouquet', 'Perawatan Bunga', 'Mawar Segar', 'Tips Rumah']
  },
  {
    id: 'artikel-3',
    slug: 'makna-filosofis-warna-bunga',
    title: 'Makna Filosofis Warna Bunga: Jangan Sampai Salah Kirim di Hari Istimewa',
    excerpt: 'Pahami arti simbolis mawar merah, putih, lily, hingga anggrek sebelum mengirimkan karangan bunga kepada sahabat atau orang terkasih.',
    category: 'Inspirasi Bunga',
    categoryColor: '#BFA77A',
    readTime: '3 mnt baca',
    date: '10 Oktober 2026',
    isoDate: '2026-10-10',
    image: '/images/produk/standing-flower/1500 kombinasi bunga mawar dan lily.webp',
    author: 'Florist Floragate',
    authorRole: 'Konsultan Estetika Bunga',
    content: {
      lead: 'Setiap warna kelopak bunga memiliki bahasa tersirat (floriography) yang telah diwariskan sejak berabad-abad lalu. Memahami makna warna akan membuat ucapan Anda terasa jauh lebih personal dan menyentuh hati penerima.',
      sections: [
        {
          heading: '1. Merah Menyala: Cinta Sejati & Keberanian',
          body: [
            'Mawar merah melambangkan gairah, cinta yang mendalam, dan rasa hormat yang tinggi. Sangat tepat untuk momen romantis seperti Hari Valentine, lamaran pernikahan, atau anniversary.',
            'Dalam bunga papan peresmian, sentuhan merah juga menyimbolkan semangat membara dan kesuksesan finansial.'
          ]
        },
        {
          heading: '2. Putih Bersih: Ketulusan, Kesucian, & Simpati',
          body: [
            'Bunga putih seperti lily casablanca, mawar putih, dan krisan putih melambangkan keanggunan, ketulusan niat, dan kedamaian.',
            'Warna ini sangat universal: anggun untuk momen pernikahan sakral dan penuh hormat saat dijadikan karangan duka cita sebagai ungkapan belasungkawa.'
          ],
          tip: 'Kombinasi mawar putih dan baby breath adalah pilihan terpopuler untuk wisuda karena melambangkan awal babak baru yang suci.'
        },
        {
          heading: '3. Kuning Cerah & Oranye: Persahabatan & Optimisme',
          body: [
            'Warna kuning memancarkan keceriaan, kehangatan sinar mentari, dan persahabatan erat.',
            'Cocok untuk memberi semangat kepada sahabat yang sedang sakit (Get Well Soon) atau ucapan selamat atas kelulusan dan promosi jabatan.'
          ]
        }
      ],
      conclusion: 'Bingung meracik paduan warna yang tepat? Diskusikan pesan dan nuansa yang ingin Anda sampaikan kepada desainer bunga Floragate.'
    },
    tags: ['Makna Bunga', 'Filosofi Bunga', 'Mawar', 'Inspirasi Kado']
  },
  {
    id: 'artikel-4',
    slug: 'keunggulan-tanbulampot-kado-hidup-modern',
    title: 'Keunggulan Tanbulampot sebagai Kado Hidup Modern & Pohon Ucapan di Malang',
    excerpt: 'Alternatif karangan bunga kekinian yang ramah lingkungan, dapat dipanen buahnya, dan menjadi kenang-kenangan abadi di halaman rumah.',
    category: 'Tren Florist',
    categoryColor: '#55654B',
    readTime: '4 mnt baca',
    date: '08 Oktober 2026',
    isoDate: '2026-10-08',
    image: '/images/produk/tanbulampot/1250 berbuah.webp',
    author: 'Dian Saputra',
    authorRole: 'Spesialis Tanaman & Lanskap',
    content: {
      lead: 'Bosan dengan karangan bunga konvensional yang layu setelah 3 hari? Di Malang, hadir tren baru kado ucapan berupa Tanbulampot (Tanaman Buah dalam Pot) berhias pita dan kartu ucapan akrilik eksklusif dari Floragate.',
      sections: [
        {
          heading: '1. Kado Hidup yang Tahan Bertahun-tahun',
          body: [
            'Berbeda dengan bunga potong yang hanya bertahan hitungan hari, tanbulampot adalah hadiah hidup yang akan terus tumbuh subur dan dirawat oleh penerima.',
            'Setiap kali menyiram dan melihat pohon tumbuh, penerima akan selalu teringat pada ketulusan Anda yang mengirimkannya.'
          ],
          tip: 'Pilihan tanaman favorit di Floragate meliputi Jeruk Nagami, Jeruk Chokun, Jambu Kristal, dan Sawo Manila yang rajin berbuah di dataran Malang.'
        },
        {
          heading: '2. Simbol Berkah, Rezeki, dan Produktivitas',
          body: [
            'Pohon buah yang sedang berbunga atau berbuah lebat menyimbolkan panen rezeki, kemakmuran, dan bisnis yang berbuah manis.',
            'Sangat cocok dihadiahkan untuk pembukaan kantor baru, housewarming pindah rumah, maupun ucapan selamat pensiun kepada atasan.'
          ]
        },
        {
          heading: '3. Tampilan Mewah & Mudah Dirawat',
          body: [
            'Dikemas dalam pot teraso / keramik elegan, dihias bebatuan alami, pita satin, serta banner ucapan berdesain custom.',
            'Penerima juga mendapatkan panduan penyiraman dan pemupukan sederhana sehingga siapa saja bisa merawatnya dengan mudah.'
          ]
        }
      ],
      conclusion: 'Jadikan momen ucapan Anda berbeda dan lebih bermakna dengan mengirimkan pohon ucapan tanbulampot dari Floragate Malang.'
    },
    tags: ['Tanbulampot', 'Pohon Ucapan', 'Kado Ramah Lingkungan', 'Florist Malang']
  }
];

export function getFeaturedArticles(limit = 4): Article[] {
  return ARTICLES.slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  return ARTICLES.filter((article) => article.slug !== currentSlug).slice(0, limit);
}
