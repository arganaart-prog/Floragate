import type { Product } from '../data/products';

const CATEGORY_ORDER = [
  'bunga-papan-duka-cita-malang',
  'bunga-papan-wedding-malang',
  'bunga-papan-congratulations-malang',
  'standing-flower-malang',
  'hand-bouquet-malang',
  'paper-flower-malang',
  'bunga-meja-malang'
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
