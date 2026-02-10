"use client";
import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#065F46]">
      <div className="flex justify-between items-center h-[80px] max-w-[1440px] mx-auto px-4 md:px-10">
        
        {/* Logo */}
       

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-white">
        <img
            src="/Logoipsum.png"
            alt="Logoipsum"
            className="max-w-[135px]"
          />
          <p className="opacity-70">Home</p>
          <p className="opacity-70 flex items-center gap-1">Library <ChevronDown size={16} /></p>
          <p className="opacity-70">Ask a Scholar</p>
          <p className="opacity-70">About</p>
          <p className="opacity-70">Contact Us</p>
        </div>

        {/* Search */}
        <div className="relative hidden sm:block w-full max-w-[264px] h-8">
          <Search
            size={16}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search what you need here"
            className="w-full h-full rounded bg-white py-[6px] pr-2 pl-8 text-sm text-black"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#065F46] text-white px-6 pb-4 space-y-4">
          <p className="opacity-80">Home</p>
          <p className="opacity-80 flex items-center gap-1">Library <ChevronDown size={16} /></p>
          <p className="opacity-80">Ask a Scholar</p>
          <p className="opacity-80">About</p>
          <p className="opacity-80">Contact Us</p>

          {/* Mobile Search */}
          <div className="relative w-full h-8">
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full rounded bg-white py-[6px] pr-2 pl-8 text-sm text-black"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
