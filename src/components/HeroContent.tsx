import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <div className="space-y-3.5 xs:space-y-4 sm:space-y-5 lg:space-y-6 text-left select-none">
      
      {/* 1. Eyebrow: — SMART AGRICULTURE PLATFORM */}
      <div className="inline-flex items-center gap-2 sm:gap-2.5">
        <span className="w-5 sm:w-8 h-[2.5px] bg-[#FF4D4D] rounded-full inline-block" />
        <span className="text-[11px] xs:text-xs sm:text-[13px] lg:text-[14px] font-black tracking-[0.18em] text-[#FF4D4D] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          SMART AGRICULTURE PLATFORM
        </span>
      </div>

      {/* 2. Main Headline: Empowering Farmers, Growing Futures */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] xl:text-[68px] font-black tracking-tight leading-[1.08] text-white">
        <span className="block drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
          Empowering Farmers,
        </span>
        <span className="relative inline-block mt-1 sm:mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#EE2727] to-[#DC2626] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Growing Futures
          {/* Curved Red Painted Brush Stroke Underline */}
          <svg
            viewBox="0 0 320 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#EE2727] overflow-visible"
          >
            <path
              d="M2 14C70 4 220 3 318 16C230 6 100 6 2 14Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </h1>

      {/* 3. Description Subtitle */}
      <p className="text-xs sm:text-base lg:text-[17px] text-slate-100 font-medium leading-relaxed max-w-lg lg:max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] pt-1">
        Modern, end-to-end solutions for higher yield, healthier crops and a more prosperous farming community.
      </p>

      {/* 4. CTA Action Buttons */}
      <div className="pt-2 sm:pt-3 flex flex-row flex-wrap items-center gap-2.5 sm:gap-4">
        
        {/* Button 1: Explore Solutions */}
        <a
          href="#solutions"
          className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF4D4D] via-[#E50201] to-[#C00201] text-white font-black text-xs sm:text-sm lg:text-[15px] shadow-[0_8px_25px_rgba(229,2,1,0.45)] hover:shadow-[0_10px_32px_rgba(229,2,1,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>Explore Solutions</span>
          <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 stroke-[2.8]" />
        </a>

        {/* Button 2: Watch Video (Frosted Glass Pill) */}
        <button
          onClick={() => {
            const videoElem = document.getElementById('purpose');
            videoElem?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white font-bold text-xs sm:text-sm lg:text-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/30 border border-white/70 flex items-center justify-center flex-shrink-0 shadow-inner">
            <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-white text-white translate-x-0.5" />
          </div>
          <span>Watch Video</span>
        </button>

      </div>

    </div>
  );
};

export default HeroContent;