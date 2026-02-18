import React from "react";
import { Star, MessageCircleMore, Hourglass } from "lucide-react";
import { articles } from "./Articlesdata";
import Link from "next/link";

const Alquran = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10">
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
    </div>
  );
};

export default Alquran;
