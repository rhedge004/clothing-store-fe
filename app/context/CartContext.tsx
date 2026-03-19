"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { CartItem, CartContextType } from "../../types/cart";
import { fetchCartItems, addCartItem, removeCartItem, clearAllCartItems } from "../../lib/cart-api";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCart = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchCartItems();
      setCart(data);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addToCart = async (productId: string) => {
    try {
      await addCartItem(productId);
      await refreshCart();
      setIsOpen(true); // Open the popup automatically
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  const removeToCart = async (index: number) => {
    try {
      await removeCartItem(index);
      await refreshCart();
      setIsOpen(true); // Open the popup automatically
    } catch (error) {
      console.error("Remove to cart error:", error);
    }
  };

  const clearCart = async () => {
    try {
      await clearAllCartItems();
      setCart([]);
    } catch (error) {
      console.error("Clear cart error:", error);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  return (
    <CartContext.Provider
      value={{ cart, isOpen, isLoading, setIsOpen, addToCart, clearCart, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
