import React from 'react';
import HeroContent from './HeroContent';

interface HeroProps {
  onNavigate?: (page: string, crop?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden select-none bg-slate-900 min-h-[580px] xs:min-h-[620px] sm:min-h-[660px] md:min-h-0 md:aspect-[1671/941] flex flex-col justify-between"
      aria-label="Sathya Seeds Hero Section"
    >
      {/* 1. Mobile Background Image: Farmer Beneath a Radiant Sunrise Sky (941x1672 Portrait) */}
      <img
        src="/hero-farmer-mobile.png"
        alt="Farmer Beneath a Radiant Sunrise Sky"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none select-none"
      />

      {/* 2. Desktop Background Image: 100% Full Panoramic Photo without any zoom/crop on desktop */}
      <img
        src="/hero-farmer-halo.png"
        alt="Farmer Beneath a Sunset Halo"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
      />

      {/* 3. Hero Content: Sits in the upper sky space on mobile, vertically centered on desktop */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 flex items-start md:items-center pt-8 xs:pt-12 sm:pt-16 lg:pt-20 pb-44 xs:pb-52 sm:pb-60 md:pb-12">
        <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
          <HeroContent />
        </div>
      </div>

      {/* 4. Bottom Organic White Wave Transition into Our Products (Mobile) */}
      <div className="md:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 xs:h-11 sm:h-14 text-white fill-current"
        >
          <path d="M0,0 C300,80 800,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* 5. Natural Bottom Spacer for Desktop */}
      <div className="hidden md:block h-6 sm:h-10 lg:h-12 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
