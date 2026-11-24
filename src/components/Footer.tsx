import React from 'react';
import { ChevronRight, MapPin, Mail, Phone, Sprout, Handshake, Leaf, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Footer: React.FC = () => {
  const { ref: footerRef, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-white overflow-hidden select-none text-[#102235]"
      aria-label="AgriGrow Site Footer"
    >
      {/* 1. Bottom Artwork Background: Sunrise Over Green Fields with baked-in Follow Us & Copyright */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0 overflow-hidden leading-none h-[240px] sm:h-[300px] lg:h-[360px] xl:h-[400px]">
        <img
          src="/footer/sunrise-bg.png"
          alt="Sunrise Over Green Fields"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
        {/* Soft top gradient to melt the artwork seamlessly into the white footer background */}
        <div className="absolute top-0 left-0 w-full h-20 sm:h-28 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* 3. Main Footer Content Container (1920px max-width) */}
      <div className={`relative max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 xl:px-20 pt-10 sm:pt-14 lg:pt-16 pb-28 sm:pb-32 lg:pb-36 z-10 scroll-reveal ${
        isRevealed ? 'revealed' : ''
      }`}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          
          {/* Column 1: Company Info & 4 Feature Badges (Span 4 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4 sm:space-y-5">
            
            {/* Logo: Sri Sathya Seeds Official Logo */}
            <div className="flex items-center">
              <img
                src="/sathya-logo-transparent.png"
                alt="Sri Sathya Seeds - A Symbol of Trust"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </div>

            {/* Tagline Description */}
            <p className="text-xs sm:text-[13.5px] text-slate-600 font-medium leading-relaxed max-w-sm">
              Delivering high-quality seeds for a more productive and sustainable farming future.
            </p>

            {/* 4 Feature Badges in a Row */}
            <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-2 pt-2 max-w-[340px]">
              
              {/* Badge 1: Quality Seeds */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E50201] shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <Sprout className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-1.5">
                  Quality Seeds
                </span>
              </div>

              {/* Badge 2: Farmer Support */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E50201] shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <Handshake className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-1.5">
                  Farmer Support
                </span>
              </div>

              {/* Badge 3: Sustainable Farming */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E50201] shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <Leaf className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-1.5">
                  Sustainable Farming
                </span>
              </div>

              {/* Badge 4: Higher Productivity */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#E50201] shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <TrendingUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-1.5">
                  Higher Productivity
                </span>
              </div>

            </div>

          </div>

          {/* Column 2: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div>
              <h3 className="text-base sm:text-[17px] font-black text-[#102235] tracking-tight">
                Quick Links
              </h3>
              <span className="w-8 h-[2.5px] bg-[#E50201] rounded-full block mt-1.5 mb-4" />
            </div>

            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about-us' },
                { name: 'Our Products', href: '#solutions' },
                { name: 'Why Choose Us', href: '#purpose' },
                { name: 'News & Updates', href: '#news' },
                { name: 'Contact Us', href: '#contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-semibold text-slate-700 hover:text-[#E50201] transition-all duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#E50201] stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products (Span 3 cols) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div>
              <h3 className="text-base sm:text-[17px] font-black text-[#102235] tracking-tight">
                Our Products
              </h3>
              <span className="w-8 h-[2.5px] bg-[#E50201] rounded-full block mt-1.5 mb-4" />
            </div>

            <ul className="space-y-2.5">
              {[
                { name: 'Maize Seeds', thumb: './footer/maize.png', href: '#field-crops' },
                { name: 'Cotton Seeds', thumb: './footer/cotton.png', href: '#cotton' },
                { name: 'Paddy Seeds', thumb: './footer/paddy.png', href: '#field-crops' },
                { name: 'Vegetable Seeds', thumb: './footer/vegetables.png', href: '#vegetables' },
                { name: 'Other Crops', thumb: './footer/other-crops.png', href: '#solutions' },
              ].map((prod) => (
                <li key={prod.name}>
                  <a
                    href={prod.href}
                    className="group flex items-center gap-2.5 text-xs sm:text-[13.5px] font-semibold text-slate-700 hover:text-[#E50201] transition-all duration-200"
                  >
                    <div className="w-10 h-7 rounded-md overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm border border-slate-200/80 transition-transform duration-200 group-hover:scale-105">
                      <img
                        src={prod.thumb}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span>{prod.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 3 cols) */}
          <div className="lg:col-span-3 xl:col-span-3">
            <div>
              <h3 className="text-base sm:text-[17px] font-black text-[#102235] tracking-tight">
                Contact Us
              </h3>
              <span className="w-8 h-[2.5px] bg-[#E50201] rounded-full block mt-1.5 mb-4" />
            </div>

            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-2.5 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FEF2F2] text-[#E50201] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#FECACA]">
                  <MapPin className="w-4 h-4 stroke-[2.2]" />
                </div>
                <p className="text-xs sm:text-[12.5px] text-slate-600 font-medium leading-relaxed">
                  Sy.no.53, Plot No. 45 to 49,<br />
                  Agro Processing Park, Bandamailram Village,<br />
                  Mulugu Mandal, Siddipet Dist,<br />
                  Hyderabad Telangana State – 502279
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FEF2F2] text-[#E50201] flex items-center justify-center flex-shrink-0 border border-[#FECACA]">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                </div>
                <a
                  href="mailto:info@sathyaseeds.com"
                  className="text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#E50201] transition-colors"
                >
                  info@sathyaseeds.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FEF2F2] text-[#E50201] flex items-center justify-center flex-shrink-0 border border-[#FECACA]">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </div>
                <a
                  href="tel:+919948203799"
                  className="text-xs sm:text-[13px] font-bold text-slate-700 hover:text-[#E50201] transition-colors"
                >
                  +91-9948203799
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 4. Bottom Copyright & Designed By Bar (Directly overlaid on dark green image base) */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-auto">
        <div className="max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 xl:px-20 py-3.5 sm:py-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-[13px] text-white/90">
          
          {/* Left: Copyright & All Rights Reserved */}
          <div className="flex items-center gap-1.5 font-medium tracking-wide text-white/85 text-center sm:text-left">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-bold text-white">Sri Sathya Seeds</span>.
            <span>All Rights Reserved.</span>
          </div>

          {/* Right: Design by Credit */}
          <div className="flex items-center gap-1.5 font-medium text-white/85">
            <span>Design by</span>
            <span className="font-bold text-white tracking-wide hover:text-[#A7F3D0] transition-colors cursor-pointer">
              Clearbiz
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;