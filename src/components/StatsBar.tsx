import React from 'react';
import { StatFarmerHatIcon, StatAcresFieldIcon, StatTrophyIcon } from './Icons';
import { StatItem } from '../types';

const STATS_DATA: StatItem[] = [
  {
    id: 'farmers',
    value: '1M+',
    label: 'Happy Farmers',
    icon: <StatFarmerHatIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />,
  },
  {
    id: 'acres',
    value: '5M+',
    label: 'Acres Covered',
    icon: <StatAcresFieldIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />,
  },
  {
    id: 'satisfaction',
    value: '98%',
    label: 'Satisfaction Rate',
    icon: <StatTrophyIcon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />,
  },
];

export const StatsBar: React.FC = () => {
  return (
    <div className="z-30 select-none">
      <div className="backdrop-blur-2xl bg-white/90 hover:bg-white/95 border border-white/95 shadow-[0_12px_32px_rgba(0,0,0,0.12)] rounded-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 lg:py-4 inline-flex items-center gap-3.5 sm:gap-6 lg:gap-8 transition-all duration-300 ring-1 ring-white/60">

        {STATS_DATA.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Stat Item */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl sm:rounded-2xl bg-[#FEF2F2] flex items-center justify-center flex-shrink-0 shadow-inner">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-[#102235] tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs lg:text-[13px] font-semibold text-slate-600 mt-1 whitespace-nowrap leading-none">
                  {item.label}
                </span>
              </div>
            </div>

            {/* Subtle Divider (not after last item) */}
            {index < STATS_DATA.length - 1 && (
              <div className="h-7 sm:h-8 lg:h-9 w-[1.5px] bg-slate-200/90 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}

      </div>
    </div>
  );
};

export default StatsBar;
