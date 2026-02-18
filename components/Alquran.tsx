import React from "react";
import { TfiLayoutGrid2, TfiMenu } from 'react-icons/tfi';
import { House, Star, MessageCircleMore, Hourglass, ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from "./Articlesdata";
import Link from "next/link";


const Alquran = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10">
      <div className="py-4 text-center md:text-left">
        <p className="flex justify-center md:justify-start gap-2 items-center text-[#065F46] text-sm md:text-base">
        <House size={16} /> / Answering Criticism / Islamic Teaching / Al-Quran
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
      {articles.map((article) => (
        <div key={article.id}>
         
          <div className="flex flex-col lg:flex-row justify-between gap-5 py-10">
            <div className="flex flex-col gap-3 lg:max-w-[634px]">
              <h5 className="font-poppins text-black text-sm sm:text-base">
                {article.date} | {article.author} | {article.university}
              </h5>
              <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
                <Link href={article.link}>{article.title}</Link>
              </p>
              <p className="opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4">
                {article.description}
              </p>
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]">
                  <span className="flex items-center gap-1"><Star />{article.rating}</span>
                  <span className="flex items-center gap-1"><MessageCircleMore />{article.discussions} Discussions</span>
                  <span className="flex items-center gap-1"><Hourglass />{article.readtime}</span>
                </div>
                {article.verified && (
                  <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">
                    Verified Source
                  </span>
                )}
              </div>
            </div>
            <div className="lg:max-w-[550px] w-full mt-4 lg:mt-0">
              <img src={article.image} alt={article.title} className="w-full h-auto rounded-lg object-cover" />
            </div>
          </div>

       
          <hr className="border-t-2 border-[#065F46] my-6" />
        </div>
      ))}
      
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
