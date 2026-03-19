"use client";

import { useCart } from "../app/context/CartContext";
import { useState } from "react";

export default function AddToCartButton({ productId, disabled }: { productId: string; disabled: boolean }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product page if card is a link
    setLoading(true);
    await addToCart(productId);
    setLoading(false);
  };

  return (
    <button
      onClick={handleAdd}
      disabled={disabled || loading}
      className="w-full bg-[#010B13] text-white py-3 text-[11px] uppercase tracking-widest font-bold rounded-sm shadow-xl active:scale-[0.97] transition-all disabled:bg-gray-400"
    >
      {loading ? "Adding..." : disabled ? "Sold Out" : "Add to Cart"}
    </button>
  );
}