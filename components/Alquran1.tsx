import React from 'react';
import { House, Star, MessageCircleMore, Hourglass, ChevronLeft, ChevronRight } from 'lucide-react';
import { TfiLayoutGrid2, TfiMenu } from 'react-icons/tfi';

const Alquran = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">

      {/* Breadcrumb */}
      <div className="py-4 text-center md:text-left">
        <p className="flex justify-center md:justify-start gap-2 items-center text-[#065F46] text-sm md:text-base">
          <House size={16} /> / Answering Criticism / Islamic Teaching / Al-Quran
        </p>
      </div>

      {/* Header + Filter */}
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

     <div><div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">June 12, 2021 | Ibn Kathir | Al-Azhar University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-black text-sm opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/beautiful.png" alt="beautiful" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/>

      {/* Article 2 */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            Scientific Approaches to the Preservation of the Quran
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This article delves into how the Quran was recorded and compiled during the lifetime of Prophet Muhammad ﷺ and later standardized under Caliph Uthma...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-black text-sm opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/historical.png" alt="historical" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/>

      {/* Article 3 */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-black text-sm opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/beautiful.png" alt="beautiful" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/></div>
      <div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">June 12, 2021 | Ibn Kathir | Al-Azhar University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-black text-sm opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/beautiful.png" alt="beautiful" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/>

      {/* Article 2 */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            Scientific Approaches to the Preservation of the Quran
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This article delves into how the Quran was recorded and compiled during the lifetime of Prophet Muhammad ﷺ and later standardized under Caliph Uthma...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-black text-sm opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/historical.png" alt="historical" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/>

      {/* Article 3 */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 py-6">
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-sm text-black">August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className="text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug">
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className="text-[#0A0A0A] opacity-70 text-base sm:text-lg leading-relaxed">
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-4 text-sm text-black opacity-70 flex-wrap">
              <span className="flex items-center gap-1"><Star size={14}/>4.8</span>
              <span className="flex items-center gap-1"><MessageCircleMore size={14}/>134 Discussions</span>
              <span className="flex items-center gap-1"><Hourglass size={14}/>8 min read</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs">Verified Source</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="/beautiful.png" alt="beautiful" className="w-full h-auto rounded-lg object-cover"/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6"/>
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

