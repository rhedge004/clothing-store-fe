"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, clearCart, isLoading, removeToCart } = useCart();
  console.log('cart: ', cart);
  return (
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div 
        className={`absolute inset-0 bg-[#010B13]/20 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} 
        onClick={() => setIsOpen(false)} 
      />
      
      <div 
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex justify-between items-center border-b border-[#F5F5F5]">
          <div className="flex items-baseline gap-2">
            <h2 className="text-lg font-bold text-[#010B13] uppercase tracking-widest">Your Bag</h2>
            <span className="text-[12px] text-gray-400 font-medium">({cart.length} items)</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1 hover:rotate-90 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-[#010B13]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-6 h-6 border-2 border-[#010B13] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#010B13] font-medium uppercase tracking-widest text-[13px]">Your bag is currently empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 text-[11px] font-bold uppercase tracking-widest underline underline-offset-4"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-6 group">
                <div className="relative h-28 w-24 flex-shrink-0 bg-[#F6F6F6] rounded-sm overflow-hidden border border-[#F0F0F0]">
                  <Image 
                    src={item.product.imageUrl} 
                    alt={item.product.name} 
                    fill 
                    className="object-contain p-2 mix-blend-multiply" 
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-[13px] font-bold text-[#010B13] uppercase tracking-tight">
                        {item.product.name}
                      </h3>
                      <span className="text-[13px] font-bold text-[#010B13]">
                        {item.product.price} <span className="text-[9px]">EUR</span>
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-1 uppercase font-medium tracking-wide">
                      Size: {item.product.size}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 border border-gray-200 px-3 py-1 rounded-sm">
                      <span className="text-[11px] font-bold text-[#010B13]">QTY: {item.quantity}</span>
                    </div>
                    <button
                      onClick={() => removeToCart(item.id)}
                      className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-white border-t border-[#F5F5F5] space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                <span>Subtotal</span>
                <span>
                  {cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)} EUR
                </span>
              </div>
              <div className="flex justify-between text-[12px] uppercase tracking-widest text-gray-500 font-medium">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-[16px] font-bold text-[#010B13] pt-2">
                <span className="uppercase tracking-widest">Total</span>
                <span>
                  {cart.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)} EUR
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-[#010B13] text-white py-5 text-[12px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-black transition-all shadow-xl active:scale-[0.98]">
                Secure Checkout
              </button>
              <button 
                onClick={clearCart}
                className="w-full py-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-600 transition-colors"
              >
                Clear entire bag
              </button>
            </div>
            
            <p className="text-[10px] text-center text-gray-400 font-medium tracking-wide">
              Duties and taxes included.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}