import { Product } from "./product";

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  removeToCart: (productId: number) => Promise<void>;
  isLoading: boolean;
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void; 
}