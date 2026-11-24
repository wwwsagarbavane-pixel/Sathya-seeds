import React from 'react';
import { Leaf } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section 
      id="about-us" 
      className="relative w-full bg-white select-none overflow-hidden"
      aria-label="About Sri Sathya Seeds"
    >
      {/* =========================================================================
          1. TOP HERO BANNER: Vibrant Chili Plant Banner
          ========================================================================= */}
      <div className="relative w-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] xl:min-h-[460px] overflow-hidden bg-white">
        
        {/* Main Background Image: Vibrant Chili Plant Banner */}
        <img
          src="./about/chili-banner.png"
          alt="Vibrant Chili Plant Banner"
          className="absolute inset-0 w-full h-full object-cover object-[center_center] z-0 pointer-events-none select-none"
        />

        {/* Top Seamless Blending Fade from Hero White Base */}
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none z-10" />

        {/* Content Container (1920px max-width) */}
        <div className="relative max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-12 lg:px-16 xl:px-20 h-full flex flex-col justify-center pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-18 lg:pb-24 z-20">
          
          <div className="max-w-lg lg:max-w-xl text-left">
            
            {/* Headline: About Us */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-black tracking-tight leading-tight">
              <span className="text-[#E50201]">About </span>
              <span className="text-[#FF4D4D]">Us</span>
            </h1>

            {/* Organic Smile Underline with Sprout Leaves */}
            <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 mb-3 sm:mb-4">
              <svg viewBox="0 0 180 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 sm:w-44 h-4 text-[#E50201]">
                <path d="M2 14C50 4 130 4 178 14C135 7 45 7 2 14Z" fill="#E50201" />
              </svg>
              <div className="flex items-center text-[#FF4D4D] -ml-2">
                <Leaf className="w-4 h-4 fill-current stroke-none transform rotate-12" />
                <Leaf className="w-3.5 h-3.5 fill-current stroke-none -ml-1 transform -rotate-45" />
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#102235] font-extrabold leading-snug drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] max-w-md">
              A Trusted Name in Quality Seeds for a Productive Farming Future
            </p>

          </div>

        </div>

      </div>

      {/* =========================================================================
          2. COMPANY STORY: About Sri Sathya Seeds
          ========================================================================= */}
      <div className="relative max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-16 pb-12 sm:pb-16 z-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow: — About Sri Sathya Seeds — */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#E50201] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-[#102235]">
              About <span className="text-[#E50201]">Sri Sathya Seeds</span>
            </h2>
            <span className="w-8 sm:w-12 h-[2px] bg-[#E50201] rounded-full inline-block" />
          </div>

          {/* Leaf Pair Icon Accent */}
          <div className="flex justify-center mt-1.5 text-[#E50201]">
            <div className="flex items-center">
              <Leaf className="w-4 h-4 fill-current stroke-none transform -rotate-12" />
              <Leaf className="w-4 h-4 fill-current stroke-none transform rotate-45 -ml-1" />
            </div>
          </div>
        </div>

        {/* Narrative Description Paragraph */}
        <div className="mt-6 sm:mt-8 max-w-5xl mx-auto text-slate-700 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed text-justify sm:text-center font-normal">
          <p>
            <strong className="text-[#102235] font-bold">SRI SATHYA AGRI BIOTECH PVT LTD</strong> is one of the premier seed companies in the country by producing and supplying quality seeds to the farming community. The company was incorporated in the year 2004 by <span className="font-semibold text-slate-900">Mr. Kosana Ramakoteswara Rao</span>, a veteran in the agriculture industry. Having noble thought to serve the farming community the next generation has also entered in the agriculture field. <span className="font-semibold text-slate-900">Mr. RAM KOSANA</span>, Executive Director S/o. Kosana Ramakoteswara Rao, Chairman & Managing Director of the company. He has completed Bachelor degree in Agriculture from Tamil Nadu Agricultural University, Coimbatore, Tamilnadu and Masters in MBA (Agri Business Management) from Symbiosis International University, Pune, Maharashtra. Having strong interest to be the part of the company, he associated with the company after his education. The company has strong presence in PAN India. At present it is one of India&apos;s fastest growing seed companies with a wide portfolio, large network of distributors and dealers and a very wide customer. The company has been popularized as &ldquo;SRI SATHYA SEEDS&rdquo;. The Company in-house R&D recognized by the Department of Science and Technology (DSIR), Govt. of India from 2007 onwards.
          </p>
        </div>

        {/* =========================================================================
            3. LEADERSHIP MESSAGES: Chairman & Executive Director Cards
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 space-y-8 sm:space-y-10 max-w-5xl mx-auto">
          
          {/* -----------------------------------------------------------------------
              Card 1: Chairman & Managing Director Message
              ----------------------------------------------------------------------- */}
          <div className="relative bg-gradient-to-r from-white via-[#FCFDFB] to-[#FFF5F5] rounded-[22px] sm:rounded-[30px] border border-[#FECACA] shadow-[0_8px_30px_rgba(229,2,1,0.06)] p-4 xs:p-6 sm:p-7 lg:p-8 flex flex-col md:flex-row items-center gap-5 sm:gap-6 lg:gap-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(229,2,1,0.12)]">
            
            {/* Left Photo Container: Chairman */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-36 xs:w-36 xs:h-40 sm:w-40 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#FCA5A5] bg-white shadow-sm">
                <img
                  src="./about/chairman.png"
                  alt="Mr. Kosana Ramakoteswara Rao - Chairman & Managing Director"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Decorative Corner Leaves Accent */}
              <div className="absolute -bottom-2 -left-2 text-[#FF4D4D] pointer-events-none">
                <Leaf className="w-6 h-6 fill-current stroke-white stroke-1 transform -rotate-45 drop-shadow-sm" />
              </div>
            </div>

            {/* Right Message Content */}
            <div className="flex-1 text-left">
              
              <div className="flex items-center justify-between gap-2 mb-3">
                {/* Red Pill Badge */}
                <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#E50201] text-white text-[11px] xs:text-xs sm:text-[13px] font-bold px-3 xs:px-4 py-1.5 rounded-full shadow-sm">
                  <Leaf className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>Chairman & Managing Director</span>
                </div>

                {/* Quotation Mark Accent */}
                <span className="text-3xl sm:text-5xl font-serif text-[#FCA5A5] leading-none select-none font-black">
                  &ldquo;
                </span>
              </div>

              <blockquote className="space-y-2 text-xs sm:text-[13.5px] text-slate-700 italic font-medium leading-relaxed">
                <p>
                  To be perceived as a technology driven seed company that offers superior products and exceed customer expectations and ensure that the developed procedures meet all the statutory & regulatory requirements and achieve the supply of quality seeds in right time at an affordable price.
                </p>
                <p className="not-italic text-slate-600 font-normal">
                  We are committed to encourage the spirit of leadership amongst our dedicated team by creating a healthy environment for continuous growth and prosperity of the organization.
                </p>
              </blockquote>

            </div>

          </div>

          {/* -----------------------------------------------------------------------
              Card 2: Executive Director's Message
              ----------------------------------------------------------------------- */}
          <div className="relative bg-gradient-to-l from-white via-[#FCFDFB] to-[#FFF5F5] rounded-[22px] sm:rounded-[30px] border border-[#FECACA] shadow-[0_8px_30px_rgba(229,2,1,0.06)] p-4 xs:p-6 sm:p-7 lg:p-8 flex flex-col md:flex-row-reverse items-center gap-5 sm:gap-6 lg:gap-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(229,2,1,0.12)]">
            
            {/* Right Photo Container: Executive Director */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-36 xs:w-36 xs:h-40 sm:w-40 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#FCA5A5] bg-white shadow-sm">
                <img
                  src="./about/director.png"
                  alt="Mr. RAM KOSANA - Executive Director"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Decorative Corner Leaves Accent */}
              <div className="absolute -bottom-2 -right-2 text-[#FF4D4D] pointer-events-none">
                <Leaf className="w-6 h-6 fill-current stroke-white stroke-1 transform rotate-45 drop-shadow-sm" />
              </div>
            </div>

            {/* Left Message Content */}
            <div className="flex-1 text-left">
              
              <div className="flex items-center justify-between gap-2 mb-3">
                {/* Red Pill Badge */}
                <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-[#E50201] text-white text-[11px] xs:text-xs sm:text-[13px] font-bold px-3 xs:px-4 py-1.5 rounded-full shadow-sm">
                  <Leaf className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>Executive Director Message</span>
                </div>

                {/* Quotation Mark Accent */}
                <span className="text-3xl sm:text-5xl font-serif text-[#FCA5A5] leading-none select-none font-black">
                  &ldquo;
                </span>
              </div>

              <blockquote className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 italic font-medium leading-relaxed">
                <p>
                  &ldquo;We believe quality seed is the pivotal input for sustained growth of the company. Our hard work and commitment take us to new heights.&rdquo;
                </p>
              </blockquote>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutUs;