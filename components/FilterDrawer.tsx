// components/FilterDrawer.tsx
"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { getCategories } from "@/lib/api";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (type: string, category: string) => void;
}

export default function FilterDrawer({ isOpen, onClose, onApply }: FilterDrawerProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const types: string[] = ["Men", "Women", "Unisex"];

  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
      <div 
        className={`absolute inset-0 bg-[#010B13]/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      <div className={`absolute left-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-8 flex justify-between items-center border-b border-[#F5F5F5]">
          <h2 className="text-lg font-bold text-[#010B13] uppercase tracking-widest">Filters</h2>
          <button onClick={onClose} className="p-1 hover:opacity-50 transition-opacity text-[#010B13]">
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          <section>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Gender</h4>
            <div className="flex flex-col gap-4">
              {types.map((type) => (
                <button 
                  key={type}
                  onClick={() => setSelectedType(type === selectedType ? "" : type)}
                  className="flex items-center justify-between group"
                >
                  <span className={`text-[13px] uppercase tracking-wide font-bold transition-colors ${selectedType === type ? "text-[#010B13]" : "text-gray-400 group-hover:text-[#010B13]"}`}>
                    {type}
                  </span>
                  {selectedType === type && <FontAwesomeIcon icon={faCheck} className="text-[#010B13] w-3 h-3" />}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Category</h4>
            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
                  className="flex items-center justify-between group"
                >
                  <span className={`text-[13px] uppercase tracking-wide font-bold transition-colors ${selectedCategory === cat ? "text-[#010B13]" : "text-gray-400 group-hover:text-[#010B13]"}`}>
                    {cat}
                  </span>
                  {selectedCategory === cat && <FontAwesomeIcon icon={faCheck} className="text-[#010B13] w-3 h-3" />}
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="p-8 bg-white border-t border-[#F5F5F5] grid grid-cols-2 gap-4">
          <button 
            onClick={() => { setSelectedType(""); setSelectedCategory(""); }}
            className="py-4 text-[11px] font-bold uppercase tracking-widest text-[#010B13] border border-[#010B13]"
          >
            Reset
          </button>
          <button 
            onClick={() => { onApply(selectedType, selectedCategory); onClose(); }}
            className="py-4 text-[11px] font-bold uppercase tracking-widest text-white bg-[#010B13]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}