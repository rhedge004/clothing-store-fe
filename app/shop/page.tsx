// app/shop/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { getProducts, getFilteredProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import GridControls from "@/components/GridControls";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFilter = async (type: string, category: string) => {
    setLoading(true);
    try {
      const data = await getFilteredProducts(type, category);
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts().then(setProducts).finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <header className="py-12 px-6 border-b border-[#F5F5F5]">
        <h1 className="text-3xl font-black tracking-tighter text-[#010B13] uppercase text-center">
          Collections
        </h1>
      </header>
      
      <GridControls onFilterChange={handleFilter} />
      
      <main className="max-w-[1920px] mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#010B13] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}