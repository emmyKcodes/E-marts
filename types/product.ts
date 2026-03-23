export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number;
  quantity: number;
  image: string;
  gallery: string[];
  description: string;
  short_description: string;
  category: string;
  sub_category: string;
  tags: string[];
  vendor_name: string;
  vendor_business_name: string;
  in_stock: boolean;
}

export type SortOption = "default" | "price_asc" | "price_desc";
export type DiscountFilter = "all" | "with_discount" | "without_discount";

export interface PriceRange {
  min: number;
  max: number;
}

export function getDisplayPrice(product: Product): number {
  return product.sale_price > 0 && product.sale_price < product.price
    ? product.sale_price
    : product.price;
}

export function isOnSale(product: Product): boolean {
  return product.sale_price > 0 && product.sale_price < product.price;
}

export function getStockLabel(product: Product): "Few Units Left" | "In Stock" {
  return product.quantity <= 5 ? "Few Units Left" : "In Stock";
}
