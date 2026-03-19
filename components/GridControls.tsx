"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterDrawer from "./FilterDrawer";

interface GridControlsProps {
  onFilterChange: (type: string, category: string) => void;
}

export default function GridControls({ onFilterChange }: GridControlsProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="max-w-[1920px] mx-auto px-6 py-6 flex items-center justify-between border-b border-[#F5F5F5] bg-white sticky top-20 z-40">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-3 px-6 py-2.5 border border-[#010B13] rounded-sm text-[11px] uppercase tracking-[0.2em] font-bold text-[#010B13] hover:bg-[#010B13] hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={faSliders} className="w-3 h-3" />
          Filter
        </button>

        <button className="flex items-center gap-10 px-6 py-2.5 border border-gray-200 rounded-sm hover:border-[#010B13] transition-colors text-[11px] uppercase tracking-[0.2em] font-bold">
          Sort
          <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
        </button>
      </div>

      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApply={onFilterChange}
      />
    </>
  );
}
