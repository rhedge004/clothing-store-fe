"use client";
import { CartItem } from "@/types/cart";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCartItems = async (): Promise<CartItem[]> => {
  if (!API_BASE_URL) return [];
  const res = await fetch(`${API_BASE_URL}/cart`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch cart");
  }
  return res.json();
};

export const addCartItem = async (productId: string): Promise<void> => {
  if (!API_BASE_URL) return;
  const res = await fetch(`${API_BASE_URL}/cart/add/${productId}`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to add to cart");
};

export const removeCartItem = async (index: number): Promise<void> => {
  if (!API_BASE_URL) return;
  const res = await fetch(`${API_BASE_URL}/cart/remove/${index}`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to remove from cart");
};

export const clearAllCartItems = async (): Promise<void> => {
  if (!API_BASE_URL) return;
  const res = await fetch(`${API_BASE_URL}/cart/clear`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to clear cart");
};