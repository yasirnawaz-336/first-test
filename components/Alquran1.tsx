"use client";
import React from 'react';
import { House, Star, MessageCircleMore, Hourglass, ChevronLeft, ChevronRight, } from 'lucide-react';
import { TfiLayoutGrid2, TfiMenu } from 'react-icons/tfi';
import {cards} from "./Carddata"
import Link from 'next/link';
const Alquran = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">

      <div className="py-4 text-center md:text-left">
        <p className="flex justify-center md:justify-start gap-2 items-center text-[#065F46] text-sm md:text-base">
        <Link href="/"><House size={16} /></Link> / Answering Criticism / Islamic Teaching / Al-Quran
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-center md:text-left">
        <h4 className="text-[#065F46] font-robotoslab font-semibold text-2xl sm:text-3xl md:text-[30px] leading-snug max-w-full">
        The Quran: A Timeless Divine Revelation
        </h4>

        <div className="flex text-black items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded border bg-white text-sm sm:text-base">
            <img src="/Icon.png" alt="Icon" className="w-4 h-4 sm:w-5 sm:h-5"/>
            Filter
          </button>
          <div className="flex gap-2 text-xl">
            <TfiLayoutGrid2 />
            <TfiMenu />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map((card) => (
    <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
      
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-[178px] object-cover rounded-md"
      />

      <p className="text-sm text-gray-500 mt-2">
        {card.date} | {card.author} | {card.university}
      </p>

      <h1 className="text-lg font-semibold mt-2 text-[#065F46]">
       <Link href={card.link}> {card.title}</Link>
      </h1>

      <p className="text-sm text-gray-600 mt-2">
        {card.description}
      </p>

      <div className="flex justify-between items-center text-center mt-4 text-sm text-gray-500">
        <div className="flex gap-3 items-center">
          <span className="flex items-center gap-1"><Star size={16} />{card.rating}</span>
          <span className="flex items-center gap-1"><MessageCircleMore size={16} />{card.discussions}</span>
          <span className="flex items-center gap-1"><Hourglass size={16} />{card.readtime}</span>
        </div>

        {card.verified && (
          <span className="px-2 py-1 bg-[#ECFDF5]  text-xs rounded-full">
            Verified
          </span>
        )}
      </div>

    </div>
  ))}
</div>


     
<div className="flex flex-wrap justify-between items-center gap-4 py-10 text-sm sm:text-base">
        <span className="flex items-center gap-2 text-[#0A0A0A] opacity-50"><ChevronLeft /> Previous</span>
        <div className="flex gap-2 text-black flex-wrap justify-center items-center">
          <span className="bg-[#ECFDF5] px-3 py-1 rounded text-[#065F46]">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <span className="flex items-center gap-2 text-[#0A0A0A] ">Next <ChevronRight /></span>
      </div>

    </div>
    
  );
};

export default Alquran;

