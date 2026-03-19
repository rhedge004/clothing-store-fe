"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010B13] text-white py-16 px-6">
      <div className="max-w-[1920px] mx-auto">
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
            &copy; {currentYear} Rhedge Michael Navarro. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/rhedge004/">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border border-white/20 px-2 py-1">
                Source Code
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
