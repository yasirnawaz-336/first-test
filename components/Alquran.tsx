import React from 'react'
import { House, Star, MessageCircleMore, Hourglass, ChevronLeft, ChevronRight } from 'lucide-react'
import { TfiLayoutGrid2, TfiMenu } from "react-icons/tfi";

const Alquran = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 md:px-10'>

      
      <div className="flex justify-center md:justify-start py-5">
        <p className="flex items-center gap-2 text-sm md:text-base text-[#065F46]">
          <House size={16} /> / Answering Criticism / Islamic Teaching / Al-Quran
        </p>
      </div>

   
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-10 text-center md:text-left'>
        <h4 className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl md:text-[30px] leading-snug md:leading-[36px]'>
          The Quran: A Timeless Divine Revelation
        </h4>
        <div className='flex gap-2 text-black'>
          <button className="flex items-center gap-2 px-4 py-2 rounded-[4px] bg-white border border-gray-300 text-sm sm:text-base">
            <img src="/Icon.png" alt='Icon' className="w-4 h-4 sm:w-5 sm:h-5" />
            Filter
          </button>
          <div className='flex gap-2 text-xl items-center'>
            <TfiLayoutGrid2 />
            <TfiMenu />
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>June 12, 2021 | Ibn Kathir | Al-Azhar University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/beautiful.png" alt='beautiful' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />


      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            Scientific Approaches to the Preservation of the Quran
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This article delves into how the Quran was recorded and compiled during the lifetime of Prophet Muhammad ﷺ and later standardized under Caliph Uthma...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/historical.png" alt='historical' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />

 
      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/beautiful.png" alt='beautiful' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />


      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            Scientific Approaches to the Preservation of the Quran
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This article delves into how the Quran was recorded and compiled during the lifetime of Prophet Muhammad ﷺ and later standardized under Caliph Uthma...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/historical.png" alt='historical' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />

      
      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            The Preservation of the Quran: Insights from Classical and Modern Scholars
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This study explores how the Quran has been preserved since its revelation over 1400 years ago. The work of renowned Islamic scholar Ibn Kathir provides deta...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/beautiful.png" alt='beautiful' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />

    
      <div className='flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <div className='flex flex-col gap-3 lg:max-w-[634px]'>
          <h5 className='font-poppins text-black text-sm sm:text-base'>August 8, 2022 | Dr Yasir Qadhi | Yale University</h5>
          <p className='text-[#065F46] font-robotoslab font-semibold text-xl sm:text-2xl lg:text-[24px] leading-snug'>
            Scientific Approaches to the Preservation of the Quran
          </p>
          <p className='opacity-70 text-[#0A0A0A] text-base sm:text-[16px] leading-relaxed mb-4'>
            This article delves into how the Quran was recorded and compiled during the lifetime of Prophet Muhammad ﷺ and later standardized under Caliph Uthma...
          </p>
          <div className='flex flex-wrap justify-between items-center gap-2'>
            <div className='flex flex-wrap gap-4 items-center text-[#0A0A0A] opacity-70 text-sm sm:text-[14px]'>
              <span className='flex items-center gap-1'><Star />4.8</span>
              <span className='flex items-center gap-1'><MessageCircleMore />134 Discussions</span>
              <span className='flex items-center gap-1'><Hourglass />8 min read</span>
            </div>
            <span className='px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs'>Verified Source</span>
          </div>
        </div>
        <div className='lg:max-w-[550px] w-full mt-4 lg:mt-0'>
          <img src="/historical.png" alt='historical' className='w-full h-auto rounded-lg object-cover'/>
        </div>
      </div>
      <hr className="border-t-2 border-[#065F46] my-6" />

     
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-10 text-sm sm:text-base'>
        <span className='flex items-center gap-2 text-[#0A0A0A] opacity-50'><ChevronLeft />Previous</span>
        <div className='flex flex-wrap justify-center items-center gap-2 text-[#0A0A0A] opacity-50'>
          <span className='bg-[#ECFDF5] px-3 py-1 rounded text-[#065F46] text-black opacity-100'>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <span className='flex items-center gap-2 text-[#0A0A0A] '>Next <ChevronRight /></span>
      </div>

    </div>
  )
}

export default Alquran

