import type { Product } from '../data/products';

const CATEGORY_ORDER = [
  'bunga-papan-duka-cita-malang',
  'bunga-papan-wedding-malang',
  'bunga-papan-congratulations-malang',
  'standing-flower-malang',
  'hand-bouquet-malang',
  'paper-flower-malang',
  'bunga-meja-malang',
  'tanbulampot-malang'
];

/**
 * Menyusun produk secara bergantian antarkategori (round-robin)
 * agar setiap variasi produk (duka cita, wedding, bouquet, meja, dsb.)
 * tersebar merata dan proporsional saat ditampilkan.
 */
export function getInterleavedProducts(products: Product[]): Product[] {
  const buckets = new Map<string, Product[]>();

  // Inisialisasi urutan kategori utama
  CATEGORY_ORDER.forEach((slug) => buckets.set(slug, []));

  // Masukkan setiap produk ke bucket kategorinya
  products.forEach((product) => {
    if (!buckets.has(product.categorySlug)) {
      buckets.set(product.categorySlug, []);
    }
    buckets.get(product.categorySlug)!.push(product);
  });

  const interleaved: Product[] = [];
  let hasItems = true;
  let round = 0;

  while (hasItems) {
    hasItems = false;
    for (const [, list] of buckets) {
      if (round < list.length) {
        interleaved.push(list[round]);
        hasItems = true;
      }
    }
    round++;
  }

  return interleaved;
}

/**
 * Menghitung indeks rotasi 3 harian berdasarkan kalender lokal WIB (UTC+7).
 * Berubah setiap 3 hari tepat pada pukul 00:00 WIB.
 */
export function getThreeDayCycleIndex(date: Date = new Date()): number {
  const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;
  const dayNumber = Math.floor((date.getTime() + WIB_OFFSET_MS) / (24 * 60 * 60 * 1000));
  return Math.floor(dayNumber / 3);
}

/**
 * Mengambil indeks 8 produk aktif untuk rotasi saat ini.
 * Jika produk <= limit, tampilkan semuanya.
 */
export function getRotatingProductIndices(
  totalCount: number,
  limit: number = 8,
  cycleIndex: number = getThreeDayCycleIndex()
): number[] {
  if (totalCount <= limit) {
    return Array.from({ length: totalCount }, (_, i) => i);
  }

  const start = (cycleIndex * limit) % totalCount;
  const indices: number[] = [];
  for (let i = 0; i < limit; i++) {
    indices.push((start + i) % totalCount);
  }
  return indices;
}

/**
 * Menghasilkan kandidat produk terinterleave dan indeks 8 produk aktif
 * untuk ditampilkan di halaman utama.
 */
export function getRotatingHomeProducts(
  allProducts: Product[],
  limit: number = 8,
  date: Date = new Date()
) {
  const candidateProducts = getInterleavedProducts(allProducts);
  const cycleIndex = getThreeDayCycleIndex(date);
  const activeIndices = getRotatingProductIndices(candidateProducts.length, limit, cycleIndex);

  return {
    candidateProducts,
    activeIndices,
    activeProducts: activeIndices.map((i) => candidateProducts[i])
  };
}

/**
 * Menghitung nomor hari berdasarkan kalender lokal WIB (UTC+7).
 */
export function getWIBDayNumber(date: Date = new Date()): number {
  const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;
  return Math.floor((date.getTime() + WIB_OFFSET_MS) / (24 * 60 * 60 * 1000));
}

/**
 * Membuat seed angka deterministik berdasarkan categorySlug dan dayNumber.
 */
export function getCategoryDaySeed(categorySlug: string, dayNumber: number): number {
  let hash = 0;
  for (let i = 0; i < categorySlug.length; i++) {
    hash = (hash << 5) - hash + categorySlug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash ^ (dayNumber * 2654435761));
}

/**
 * PRNG Mulberry32 deterministik.
 */
export function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Mengacak urutan produk dalam 1 kategori secara deterministik setiap 1 hari (00:00 WIB).
 * Menggunakan Fisher-Yates shuffle yang di-seed oleh hari WIB & slug kategori.
 */
export function getDailyShuffledProducts<T extends { slug: string }>(
  products: T[],
  categorySlug: string,
  date: Date = new Date()
): T[] {
  if (products.length <= 1) return [...products];

  const dayNumber = getWIBDayNumber(date);
  const seed = getCategoryDaySeed(categorySlug, dayNumber);
  const rng = mulberry32(seed);

  const shuffled = [...products];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

