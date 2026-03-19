import Image from "next/image";
import { Product } from "../types/product";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white">
      <div className="relative aspect-[4/5] w-full bg-[#F6F6F6] overflow-hidden rounded-sm transition-colors group-hover:bg-[#F0F0F0]">
        {product.category === "Sneakers" && (
          <span className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm text-[10px] uppercase tracking-tighter px-2 py-1 font-medium border border-gray-100">
            Handcrafted in EU
          </span>
        )}
        
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartButton productId={product.id} disabled={product.stockQuantity === 0} />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1 px-1">
        <h3 className="text-[14px] font-bold text-[#010B13] tracking-tight group-hover:underline">
          {product.name}
        </h3>
        <p className="text-[12px] text-gray-500 font-medium">
          Leather + Recycled Polyester
        </p>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-[14px] font-bold text-[#010B13]">{product.price}</span>
          <span className="text-[10px] font-bold text-[#010B13] uppercase">EUR</span>
        </div>
      </div>
    </div>
  );
}