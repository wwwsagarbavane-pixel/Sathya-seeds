import React from 'react';
import { SmileUnderline } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactUs: React.FC = () => {
  const { ref: sectionRef, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="contact-us" 
      className="relative w-full h-auto py-12 sm:py-16 md:py-0 md:aspect-[1671/941] md:min-h-[580px] lg:min-h-[640px] bg-white overflow-hidden select-none flex items-center"
      aria-label="Contact Us"
    >
      {/* 1. Main Background Image with Subtle Parallax Depth */}
      <img
        src="/contact-farmer-bg.png"
        alt="Smiling Farmer at Sunrise"
        className={`absolute inset-0 w-full h-full object-cover object-[left_top] z-0 pointer-events-none select-none opacity-40 md:opacity-100 transition-all duration-1000 ${
          isRevealed ? 'scale-100 translate-y-0' : 'scale-105 -translate-y-2'
        }`}
      />

      {/* Mobile-Only Soft White Frost Backdrop (Guarantees zero text overlap on small screens) */}
      <div className="md:hidden absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 pointer-events-none" />

      {/* 2. Soft White Gradient at Top: Seamlessly melts the section above into the open blue sky */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 lg:h-40 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-10" />

      {/* 3. Corner Leaves Framing with Floating Parallax Depth */}
      <img
        src="/leaf-cluster-left.png"
        alt=""
        className={`absolute top-0 left-0 w-20 sm:w-32 lg:w-40 xl:w-48 h-auto pointer-events-none select-none z-10 opacity-90 transition-transform duration-1000 ${
          isRevealed ? 'translate-x-0 translate-y-0 rotate-0' : '-translate-x-4 -translate-y-4 -rotate-6'
        }`}
      />

      <img
        src="/leaf-cluster-right.png"
        alt=""
        className={`absolute top-0 right-0 w-24 sm:w-44 lg:w-52 xl:w-60 h-auto pointer-events-none select-none z-10 opacity-90 transition-transform duration-1000 ${
          isRevealed ? 'translate-x-0 translate-y-0 rotate-0' : 'translate-x-4 -translate-y-4 rotate-6'
        }`}
      />

      {/* 4. Section Content Container: 3-Zone Flex Layout */}
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full h-full flex items-center pt-2 sm:pt-6 pb-4 sm:pb-8 lg:pb-10 z-20">
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* ZONE 1: 100% Dedicated Spacer for Farmer (Farmer occupies 0-25% on desktop) */}
          <div 
            className="hidden md:block w-[30%] lg:w-[32%] xl:w-[34%] flex-shrink-0 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* ZONE 2: Heading & Description (Glides in from Left) */}
          <div className={`w-full md:w-[32%] lg:w-[30%] xl:w-[28%] text-center md:text-left flex-shrink-0 z-20 max-w-sm md:max-w-none mx-auto md:mx-0 scroll-reveal-left ${
            isRevealed ? 'revealed' : ''
          }`}>
            
            {/* Eyebrow: — CONTACT — */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-6 sm:w-7 h-[2px] bg-[#E50201] rounded-full inline-block" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] text-[#102235] uppercase">
                CONTACT
              </span>
              <span className="w-6 sm:w-7 h-[2px] bg-[#E50201] rounded-full inline-block" />
            </div>

            {/* Main Headline: Contact Us */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight text-[#102235] mt-1.5 sm:mt-2 leading-tight">
              Contact{' '}
              <span className="relative inline-block text-[#E50201]">
                Us
                <SmileUnderline className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#E50201] overflow-visible" />
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm lg:text-[14px] xl:text-[14.5px] text-[#334155] font-medium leading-relaxed max-w-[340px] mx-auto md:mx-0 mt-2.5 sm:mt-3 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
              We&apos;d love to hear from you. Reach out to us for product information, support or partnership enquiries.
            </p>

          </div>

          {/* ZONE 3: Contact Information Card (Scales & Elevates from Bottom) */}
          <div className={`w-full md:flex-1 flex justify-center md:justify-end z-20 scroll-reveal-scale ${
            isRevealed ? 'revealed' : ''
          }`}>
            
            <div className="relative bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-[0_16px_45px_rgba(0,0,0,0.08)] p-4 xs:p-5 sm:p-6 lg:p-7 w-full max-w-[420px] xs:max-w-[460px] lg:max-w-[500px] xl:max-w-[520px] mx-auto md:mx-0 transition-all duration-300 hover:shadow-[0_20px_55px_rgba(229,2,1,0.12)]">
              
              {/* Item 1: Our Address */}
              <div className="flex items-start justify-between gap-3.5 sm:gap-4">
                
                {/* Red Squircle Icon Badge */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E50201] flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(229,2,1,0.25)]">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>

                {/* Address Details */}
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-base sm:text-[17px] font-bold text-[#102235] tracking-tight leading-snug">
                    Our Address
                  </h3>
                  <p className="text-sm sm:text-[14px] font-bold text-[#E50201] mt-0.5 leading-snug">
                    Sri Sathya Agri Biotech Pvt. Ltd
                  </p>
                  <p className="text-xs sm:text-[12px] text-slate-600 font-medium leading-relaxed mt-1">
                    Sy.no.53, Plot No. 45 to 49,<br />
                    Agro Processing Park, Bandamailram Village,<br />
                    Mulugu Mandal, Siddipet Dist,<br />
                    Hyderabad Telangana State – 502279
                  </p>
                </div>

                {/* 3D Folded Map with Pin Illustration */}
                <div className="hidden sm:block flex-shrink-0 self-center pl-1">
                  <img
                    src="/map-pin.png"
                    alt="Map Location"
                    className="w-16 sm:w-18 lg:w-20 h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* Divider Line 1 */}
              <div className="w-full h-[1px] bg-gray-100 my-3.5 sm:my-4" />

              {/* Item 2: Email Us */}
              <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                
                {/* Red Squircle Icon Badge */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E50201] flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(229,2,1,0.25)]">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#102235] tracking-tight leading-snug">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@sathyaseeds.com"
                    className="text-xs sm:text-sm lg:text-[14.5px] font-semibold text-slate-700 hover:text-[#E50201] transition-colors mt-0.5 inline-block"
                  >
                    info@sathyaseeds.com
                  </a>
                </div>

              </div>

              {/* Divider Line 2 */}
              <div className="w-full h-[1px] bg-gray-100 my-3.5 sm:my-4" />

              {/* Item 3: Call Us */}
              <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                
                {/* Red Squircle Icon Badge */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E50201] flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(229,2,1,0.25)]">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#102235] tracking-tight leading-snug">
                    Call Us
                  </h3>
                  <a
                    href="tel:+919948203799"
                    className="text-xs sm:text-sm lg:text-[14.5px] font-bold text-slate-700 hover:text-[#E50201] transition-colors mt-0.5 inline-block tracking-tight"
                  >
                    +91-9948203799
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;