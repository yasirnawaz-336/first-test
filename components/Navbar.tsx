"use client";
import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Tafsir from "./Tafsir";
import Alquran from "./Alquran";
import Alqurhan2 from "./Alquran2";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("")
  const router = useRouter();

  const pages : Record <string, string> = {
    tafsir : "/",
    alquran: "/Alquran",
    alquran1: "/Alquran1",
    alquran2: "/Alquran2"
  }

 const handleSearch = () => {
  const value = search.toLowerCase().trim()
  if(pages[value]) {
    router.push(pages[value])
  }
  else{
    alert("Page not found")
  }
 }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#065F46]">
      <div className="flex justify-between items-center h-[80px] max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="hidden md:flex gap-6 items-center text-white">
        <img
            src="/Logoipsum.png"
            alt="Logoipsum"
            className="max-w-[135px]"
          />
         <p className="opacity-70"><Link href="/">Home</Link> </p>
          <p className="opacity-70 flex items-center gap-1">Library <ChevronDown size={16} /></p>
          <p className="opacity-70">Ask a Scholar</p>
          <p className="opacity-70">About</p>
          <p className="opacity-70">Contact Us</p>
        </div>

       
        <div className="relative hidden sm:block w-full max-w-[264px] h-8">
          <Search
            size={16}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search what you need here"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") 
              handleSearch()
            
          }}
            className="w-full h-full rounded bg-white py-[6px] pr-2 pl-8 text-sm text-black"
          />
        </div>

      
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

 
      {open && (
        <div className="md:hidden bg-[#065F46] text-white px-6 pb-4 space-y-4">
      <p className="opacity-80">   <Link href="/">Home</Link> </p>
          <p className="opacity-80 flex items-center gap-1">Library <ChevronDown size={16} /></p>
          <p className="opacity-80">Ask a Scholar</p>
          <p className="opacity-80">About</p>
          <p className="opacity-80">Contact Us</p>

        
          <div className="relative w-full h-8">
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full rounded bg-white py-[6px] pr-2 pl-8 text-sm text-black"
               onChange={(e) => 
                setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if(e.key === "Enter") 
                    handleSearch()
                }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
