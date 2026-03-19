"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

interface FeaturedSliderProps {
  products: Product[];
  title: string;
}

export default function FeaturedSlider({ products, title }: FeaturedSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              Curated Selection
            </span>
            <h2 className="text-3xl font-extrabold text-[#010B13] uppercase tracking-tight mt-2">
              {title}
            </h2>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 border border-gray-200 rounded-full hover:bg-[#010B13] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 border border-gray-200 rounded-full hover:bg-[#010B13] hover:text-white transition-all"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="min-w-[85%] sm:min-w-[40%] lg:min-w-[22%] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}