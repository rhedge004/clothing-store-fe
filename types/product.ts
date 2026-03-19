export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stockQuantity: number;
  size: "S" | "M" | "L" | "XL" | string;
  imageUrl: string;
}

export type ProductType = string;

export interface FilterState {
  type: ProductType | "";
  category: string;
}

export interface FilterParams {
  type?: string;
  category?: string;
}
