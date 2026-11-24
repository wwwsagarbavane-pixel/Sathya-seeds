import React from 'react';
import { VisionEyeIcon, MissionFlagIcon, SmileUnderline } from './Icons';

export const VisionMission: React.FC = () => {
  return (
    <section 
      id="purpose" 
      className="relative w-full bg-white pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-18 overflow-hidden select-none"
      aria-label="Our Purpose - Vision & Mission"
    >
      {/* 1. Section Content Container (1920px max-width) */}
      <div className="relative max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow: — Our Purpose — */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 sm:w-11 h-[2px] bg-[#E50201] rounded-full inline-block" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] text-[#E50201] uppercase">
              Our Purpose
            </span>
            <span className="w-8 sm:w-11 h-[2px] bg-[#E50201] rounded-full inline-block" />
          </div>

          {/* Main Headline: Vision & Mission */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#102235] mt-2.5 sm:mt-3 leading-tight">
            Vision & <span className="text-[#E50201]">Mission</span>
          </h2>

          {/* Underline Smile Arch */}
          <div className="flex justify-center mt-1 sm:mt-1.5">
            <SmileUnderline className="w-28 sm:w-36 h-3 text-[#E50201] overflow-visible" />
          </div>
        </div>

        {/* 4. Two Vision & Mission Cards Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 max-w-[1360px] xl:max-w-[1480px] mx-auto">
          
          {/* Card 1: Our Vision */}
          <div className="relative bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(229,2,1,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col sm:flex-row overflow-hidden group max-w-[360px] xs:max-w-md sm:max-w-none mx-auto w-full">
            
            {/* Left Image: Seedling in cupped hands */}
            <div className="relative w-full sm:w-[46%] lg:w-[44%] flex-shrink-0 h-[190px] xs:h-[210px] sm:h-auto overflow-hidden bg-slate-50">
              <img
                src="./crops/vision-seedling.jpg"
                alt="Our Vision Seedling in Hands"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Organic Red Curved Leaf Divider SVG on the right edge */}
              <div className="hidden sm:block absolute top-0 -right-[2px] h-full w-12 pointer-events-none z-10 overflow-visible">
                <svg viewBox="0 0 40 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
                  <path
                    d="M0 0C32 25 32 75 0 100"
                    stroke="#E50201"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M0 0C32 25 32 75 0 100H40V0H0Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-5 xs:p-6 sm:p-8 lg:p-9 flex flex-col justify-center text-left bg-white z-10">
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3.5">
                {/* Red Icon Badge */}
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FEE2E2] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#FECACA]">
                  <VisionEyeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <div>
                  <h3 className="text-xl xs:text-2xl sm:text-[25px] font-black text-[#E50201] tracking-tight leading-none">
                    Our Vision
                  </h3>
                  <span className="w-8 sm:w-9 h-[2.5px] bg-[#E50201] rounded-full block mt-1.5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#334155] leading-relaxed font-medium mt-1">
                To be one of the premier seed companies by producing and supplying quality seeds to the farming community.
              </p>
            </div>

          </div>

          {/* Card 2: Our Mission */}
          <div className="relative bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(229,2,1,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col sm:flex-row overflow-hidden group max-w-[360px] xs:max-w-md sm:max-w-none mx-auto w-full">
            
            {/* Left Image: Tractor in green crop field */}
            <div className="relative w-full sm:w-[46%] lg:w-[44%] flex-shrink-0 h-[190px] xs:h-[210px] sm:h-auto overflow-hidden bg-slate-50">
              <img
                src="./crops/mission-tractor.jpg"
                alt="Our Mission Tractor in Field"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Organic Red Curved Leaf Divider SVG on the right edge */}
              <div className="hidden sm:block absolute top-0 -right-[2px] h-full w-12 pointer-events-none z-10 overflow-visible">
                <svg viewBox="0 0 40 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
                  <path
                    d="M0 0C32 25 32 75 0 100"
                    stroke="#E50201"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M0 0C32 25 32 75 0 100H40V0H0Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-5 xs:p-6 sm:p-8 lg:p-9 flex flex-col justify-center text-left bg-white z-10">
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3.5">
                {/* Red Icon Badge */}
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FEE2E2] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#FECACA]">
                  <MissionFlagIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <div>
                  <h3 className="text-xl xs:text-2xl sm:text-[25px] font-black text-[#E50201] tracking-tight leading-none">
                    Our Mission
                  </h3>
                  <span className="w-8 sm:w-9 h-[2.5px] bg-[#E50201] rounded-full block mt-1.5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#334155] leading-relaxed font-medium mt-1">
                Constant upgradation of product portfolio, which is very much essential due to the changing needs of customers, our research and operations consistently creates best value for the farming community.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VisionMission;
