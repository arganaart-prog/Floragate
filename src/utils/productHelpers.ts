import type { Product } from '../data/products';

type ProductName = Pick<Product, 'name'>;
type PopularProduct = ProductName & Partial<Pick<Product, 'featured'>>;

export function getProductDisplayName(product: ProductName): string {
  return product.name.replace(/\s*\*\s*/g, ' ').replace(/\s+/g, ' ').trim();
}

export function isProductPopular(product: PopularProduct): boolean {
  return Boolean(product.featured || product.name.includes('*'));
}
