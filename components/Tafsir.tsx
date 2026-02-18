"use client"
import React from "react";
import {useState} from "react"
import { House } from "lucide-react";
import Link from "next/link";


const Tafsir = () => {
  const [tafsir , settafsir] = useState("/ Tafsir")

  return (
    <div className="w-full max-w-[1440px] mx-auto">

      <div className="px-4 md:px-10 py-5 bg-[#065F46] text-white">
        <p className="flex gap-2 items-center text-sm">
          <House size={16} />  {tafsir}
        </p>
      </div>

    
      <div className="relative bg-[#065F46]  py-10 overflow-hidden">
   
        <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-10 py-10 relative z-10 gap-8">
          <div className="max-w-full md:max-w-[637px] text-white">
            <h1 className="font-['Roboto_Slab'] font-bold text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[58px] tracking-[0.01em]">
              <span className="text-[#FBBF24] block">Answering Criticism:</span>
              <span className="block">Unveiling the Truth Behind</span>
              Common Misconceptions
            </h1>
            <p className="mt-4 font-['Poppins'] text-base sm:text-lg md:text-[18px] leading-[28px]">
              Islam faces criticism due to misconceptions. This section explores common criticism and provides scholarly responses, using logic, history, and teachings to promote understanding.
            </p>
          </div>
        </div>

      
        <div className="absolute inset-0 flex justify-end py-10  items-end z-0 pointer-events-none">
          <img
            src="/Vector.png"
            alt="Vector"
            className="w-full md:w-auto max-w-[650px] object-contain"
          />
        </div>
      </div>

      
      <div className="relative bg-[#FFFBEB] py-12 px-4 md:px-10">
        <img
          src="/Vectorleft.png"
          alt="Vector Left"
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-50 w-24 sm:w-32 md:w-48 z-0 pointer-events-none"
        />

        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-4 relative z-10">
          <h3 className="text-[#065F46] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Explore the Key Areas of Criticism and Our Responses
          </h3>
          <p className="text-[#0A0A0A] max-w-lg font-normal text-base sm:text-lg md:text-lg opacity-70">
            We address criticisms of Islam with evidence. Understanding context and interpretations offers a clearer picture of the faith.
          </p>
        </div>
      </div>

     
      <div className="bg-[#FFFBEB] relative z-10 px-4 md:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">

        
          <div className="flex flex-col gap-3 border border-[#065F46] rounded-2xl p-5">
           <Link href="/Alquran"><img src="/Qur_an.png" alt="Quran" className="max-w-[80px]" /></Link> 
            <h4 className="text-[#065F46] font-semibold text-xl">
              <Link href="/Alquran">Al-Quran</Link>
            </h4>
            <p className="text-[#0A0A0A] text-sm md:text-base opacity-70">
              Discover the miraculous preservation of the Quran, the linguistic perfection, and the historical evidence that proves its authenticity.
            </p>
            <button className="mt-2 bg-[#065F46] text-white rounded py-2" 
          
            >
              See More
            </button>
          </div>

      
          <div className="flex flex-col gap-3 border border-[#065F46] rounded-2xl p-5">
            <img src="/Lampion 4.png" alt="Lampion" className="max-w-[80px]" />
            <h4 className="text-[#065F46] font-semibold text-xl">Hadith</h4>
            <p className="text-[#0A0A0A] text-sm md:text-base opacity-70">
              Learn about the meticulous science of Hadith authentication and how scholars ensured the reliability of the Prophet’s words and actions.
            </p>
            <button className="mt-2 bg-[#065F46] text-white rounded py-2 ">
            See More
            </button>
          </div>

        </div>

      
        <img
          src="/Vectorright.png"
          alt="Vector Right"
          className="absolute z-0 opacity-50 right-0 bottom-0 w-24 sm:w-32 md:w-48 pointer-events-none"
        />
      </div>

    </div>
  );
};

export default Tafsir;
