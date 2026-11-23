import React from 'react';
import { 
  HigherYieldIcon, 
  ResourceEfficiencyIcon, 
  BetterProfitIcon, 
  SustainableFarmingIcon 
} from './Icons';

export const BenefitCards: React.FC = () => {
  return (
    <>
      {/* ========================================================
          DESKTOP VIEW (lg and above):
          Exact 1440px Proportions Around The Farmer
          Matching user uploaded reference screenshot
          ======================================================== */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none z-20">
        
        {/* Glowing Dashed Green Orbital Halo Ring behind Farmer */}
        <div 
          className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ left: '73.2%', top: '28.5%' }}
        >
          <svg
            viewBox="0 0 460 460"
            className="w-[300px] lg:w-[360px] xl:w-[410px] 2xl:w-[450px] h-[300px] lg:h-[360px] xl:h-[410px] 2xl:h-[450px] orbital-glow opacity-85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Delicate dashed green circular halo matching reference */}
            <circle
              cx="230"
              cy="230"
              r="190"
              stroke="#4ade80"
              strokeWidth="1.8"
              strokeDasharray="4 3"
              strokeOpacity="0.85"
            />
            <circle
              cx="230"
              cy="230"
              r="190"
              stroke="#67e8f9"
              strokeWidth="1"
              strokeOpacity="0.45"
            />
          </svg>
        </div>

        {/* 1. Card Top-Left: Higher Yield */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto animate-float-1"
          style={{ left: '59.2%', top: '18.2%' }}
        >
          <div className="backdrop-blur-md bg-white/95 hover:bg-white border border-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 xl:p-3 w-[82px] lg:w-[94px] xl:w-[106px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group ring-1 ring-white/70">
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-[#F0FDF4] group-hover:bg-[#DCFCE7] flex items-center justify-center mb-1 transition-colors">
              <HigherYieldIcon className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-[10px] lg:text-[11px] xl:text-[12px] font-extrabold text-[#102235] leading-tight">
              <div>Higher</div>
              <div>Yield</div>
            </div>
          </div>
        </div>

        {/* 2. Card Top-Right: Resource Efficiency */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto animate-float-2"
          style={{ left: '87.2%', top: '19.0%' }}
        >
          <div className="backdrop-blur-md bg-white/95 hover:bg-white border border-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 xl:p-3 w-[86px] lg:w-[98px] xl:w-[110px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group ring-1 ring-white/70">
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-[#F0FDF4] group-hover:bg-[#DCFCE7] flex items-center justify-center mb-1 transition-colors">
              <ResourceEfficiencyIcon className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-[10px] lg:text-[11px] xl:text-[12px] font-extrabold text-[#102235] leading-tight">
              <div>Resource</div>
              <div>Efficiency</div>
            </div>
          </div>
        </div>

        {/* 3. Card Mid-Left: Better Profit */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto animate-float-3"
          style={{ left: '56.4%', top: '38.8%' }}
        >
          <div className="backdrop-blur-md bg-white/95 hover:bg-white border border-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 xl:p-3 w-[82px] lg:w-[94px] xl:w-[106px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group ring-1 ring-white/70">
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-[#F0FDF4] group-hover:bg-[#DCFCE7] flex items-center justify-center mb-1 transition-colors">
              <BetterProfitIcon className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-[10px] lg:text-[11px] xl:text-[12px] font-extrabold text-[#102235] leading-tight">
              <div>Better</div>
              <div>Profit</div>
            </div>
          </div>
        </div>

        {/* 4. Card Mid-Right: Sustainable Farming */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto animate-float-4"
          style={{ left: '87.8%', top: '38.2%' }}
        >
          <div className="backdrop-blur-md bg-white/95 hover:bg-white border border-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 xl:p-3 w-[86px] lg:w-[100px] xl:w-[114px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 group ring-1 ring-white/70">
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-xl bg-[#F0FDF4] group-hover:bg-[#DCFCE7] flex items-center justify-center mb-1 transition-colors">
              <SustainableFarmingIcon className="w-4 h-4 xl:w-5 xl:h-5" />
            </div>
            <div className="text-[10px] lg:text-[11px] xl:text-[12px] font-extrabold text-[#102235] leading-tight">
              <div>Sustainable</div>
              <div>Farming</div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================
          MOBILE / TABLET VIEW (< lg):
          Compact Responsive Badges
          ======================================================== */}
      <div className="block lg:hidden w-full pt-4 pb-2 pointer-events-auto z-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-md mx-auto sm:max-w-none">
          <div className="backdrop-blur-md bg-white/95 border border-white/95 shadow-sm rounded-xl p-2.5 flex flex-col items-center text-center">
            <HigherYieldIcon className="w-4 h-4 mb-1" />
            <span className="text-[11px] font-bold text-[#102235]">Higher Yield</span>
          </div>
          <div className="backdrop-blur-md bg-white/95 border border-white/95 shadow-sm rounded-xl p-2.5 flex flex-col items-center text-center">
            <ResourceEfficiencyIcon className="w-4 h-4 mb-1" />
            <span className="text-[11px] font-bold text-[#102235]">Resource Efficiency</span>
          </div>
          <div className="backdrop-blur-md bg-white/95 border border-white/95 shadow-sm rounded-xl p-2.5 flex flex-col items-center text-center">
            <BetterProfitIcon className="w-4 h-4 mb-1" />
            <span className="text-[11px] font-bold text-[#102235]">Better Profit</span>
          </div>
          <div className="backdrop-blur-md bg-white/95 border border-white/95 shadow-sm rounded-xl p-2.5 flex flex-col items-center text-center">
            <SustainableFarmingIcon className="w-4 h-4 mb-1" />
            <span className="text-[11px] font-bold text-[#102235]">Sustainable Farming</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitCards;
