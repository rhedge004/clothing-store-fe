// app/page.tsx
import { getProducts } from "@/lib/api";
import CategoryBanner from "@/components/CategoryBanner";
import FeaturedSlider from "@/components/FeaturedSlider";
import Link from "next/link";

export default async function HomePage() {
  const allProducts = await getProducts();
  const featured = allProducts.slice(0, 8);

  return (
    <div className="bg-white min-h-screen">
      <CategoryBanner />
      
      <FeaturedSlider 
        products={featured} 
        title="Featured Arrivals" 
      />

      <section className="py-20 px-6 bg-[#010B13] text-white text-center">
        <h2 className="text-4xl font-extrabold uppercase tracking-tighter mb-6">
          The Full Collection
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 mb-10">
          Explore our complete range of handcrafted footwear, designed for the modern individual who values quality and minimalism.
        </p>
        <Link 
          href="/shop" 
          className="inline-block bg-white text-[#010B13] px-10 py-4 font-bold uppercase tracking-widest text-[13px] hover:bg-gray-200 transition-colors"
        >
          Shop All Products
        </Link>
      </section>
    </div>
  );
}