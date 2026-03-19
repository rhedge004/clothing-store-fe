"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoryBanner() {
  return (
    <section className="bg-[#EFEFEF] py-12 px-6">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Welcome Text Content */}
        <div className="flex-1 text-[#010B13] max-w-2xl md:py-24">
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4 block">
            Established 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase leading-[0.9]">
            Modern <br /> Essentials.
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-10 max-w-md font-medium">
            Welcome! We curate high-quality, handcrafted footwear and apparel 
            designed for the minimalist lifestyle. Quality materials meet timeless silhouettes.
          </p>
          
          <Link 
            href="/shop" 
            className="group flex items-center justify-between w-full max-w-[240px] border-2 border-[#010B13] bg-[#010B13] text-white px-6 py-4 rounded-sm transition-all hover:bg-transparent hover:text-[#010B13]"
          >
            <span className="text-[13px] font-bold uppercase tracking-widest">Explore Shop</span>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </div>

        <div className="flex-1 w-full max-w-[700px] aspect-square bg-white rounded-sm border border-gray-100 flex items-center justify-center overflow-hidden relative">
          <Image 
            src="https://images.unsplash.com/photo-1631363320585-06e91d54210e"
            alt="Clothing Collection"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}