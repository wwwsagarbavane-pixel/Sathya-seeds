import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <div className="space-y-3 xs:space-y-3.5 sm:space-y-5 lg:space-y-6 text-left select-none">
      
      {/* 1. Eyebrow: — SMART AGRICULTURE PLATFORM */}
      <div className="inline-flex items-center gap-2 sm:gap-2.5">
        <span className="w-4 xs:w-5 sm:w-8 h-[2px] xs:h-[2.5px] bg-[#A3E635] rounded-full inline-block" />
        <span className="text-[10px] xs:text-[11px] sm:text-[13px] lg:text-[14px] font-black tracking-[0.16em] xs:tracking-[0.18em] text-[#A3E635] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          SMART AGRICULTURE PLATFORM
        </span>
      </div>

      {/* 2. Main Headline: Empowering Farmers, Growing Futures */}
      <h1 className="text-[26px] xs:text-[30px] sm:text-4xl md:text-[52px] lg:text-[62px] xl:text-[68px] font-black tracking-tight leading-[1.12] text-white">
        <span className="block drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Empowering Farmers,
        </span>
        <span className="relative inline-block mt-0.5 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#B5F640] via-[#9DE729] to-[#4ADE80] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          Growing Futures
          {/* Curved Green Painted Brush Stroke Underline */}
          <svg
            viewBox="0 0 320 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-1 xs:-bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2 xs:h-2.5 sm:h-4 text-[#9DE729] overflow-visible"
          >
            <path
              d="M2 14C70 4 220 3 318 16C230 6 100 6 2 14Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </h1>

      {/* 3. Description Subtitle */}
      <p className="text-[11.5px] xs:text-xs sm:text-sm lg:text-[17px] text-white/95 font-medium leading-relaxed max-w-[280px] xs:max-w-sm sm:max-w-lg lg:max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] pt-0.5 sm:pt-1">
        Modern, end-to-end solutions for higher yield, healthier crops and a more prosperous farming community.
      </p>

      {/* 4. CTA Action Buttons: Compact side-by-side or clean row on mobile */}
      <div className="pt-2 xs:pt-2.5 sm:pt-3 flex flex-row flex-wrap items-center gap-2.5 xs:gap-3 sm:gap-4">
        
        {/* Button 1: Explore Solutions */}
        <a
          href="#solutions"
          className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-4 xs:px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#B5F640] via-[#9DE729] to-[#7ED91C] text-[#0A3A17] font-black text-[11.5px] xs:text-xs sm:text-sm lg:text-[15px] shadow-[0_8px_25px_rgba(163,230,53,0.45)] hover:shadow-[0_10px_32px_rgba(163,230,53,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
        </a>

        {/* Button 2: Watch Video */}
        <button
          onClick={() => {
            const videoElem = document.getElementById('purpose');
            videoElem?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3.5 xs:px-4.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white/95 hover:bg-white text-[#0A3A17] font-bold text-[11.5px] xs:text-xs sm:text-sm lg:text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#087C19] flex items-center justify-center flex-shrink-0 shadow-sm">
            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white translate-x-0.5" />
          </div>
          <span>Watch Video</span>
        </button>

      </div>

    </div>
  );
};

export default HeroContent;