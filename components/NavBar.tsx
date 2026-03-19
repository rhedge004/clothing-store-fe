"use client";

import Link from "next/link";
import { useCart } from "../app/context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { cart, setIsOpen } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F5F5F5]">
      <div className="relative flex justify-between items-center h-16 px-6 max-w-[1920px] mx-auto text-[13px] tracking-wide text-black/80 font-medium uppercase">
        
        <div className="flex items-center gap-6">
          <button className="p-2 -ml-2 text-black md:hidden">
            <FontAwesomeIcon icon={faBars} className="w-7 h-7" />
          </button>
          <div className="hidden md:flex items-center gap-">
          </div>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-tight text-[#010B13] hover:text-black/90">
          CLOTHING STORE.
        </Link>

        <div className="flex items-center gap-2 md:gap-5">

          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-md">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-black" />
            <span className="hidden sm:inline">My account</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-10 h-10 -mr-2 text-[#010B13] hover:bg-slate-100 rounded-full transition-all group"
          >
            <FontAwesomeIcon icon={faShoppingBag} className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
            {itemCount > 0 && (
              <span className="absolute top-1 right-0.5 w-4 h-4 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-sm">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}