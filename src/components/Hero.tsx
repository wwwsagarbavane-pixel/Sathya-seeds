import React, { useState, useRef, useEffect } from 'react';
import HeroContent from './HeroContent';
import { Menu, X, ArrowRight, User, ChevronDown, ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string, crop?: string) => void;
}

const FIELD_CROPS_ITEMS = [
  { name: 'Paddy (Dhan)', crop: 'Paddy' },
  { name: 'Maize (Corn)', crop: 'Maize' },
  { name: 'Bt Cotton', crop: 'Cotton' },
  { name: 'Mustard (Sarson)', crop: 'Mustard' },
  { name: 'Bajra (Millet)', crop: 'Bajra' },
  { name: 'Jowar (Sorghum)', crop: 'Jowar' },
  { name: 'Wheat (Gehun)', crop: 'Wheat' },
  { name: 'Redgram (Toor)', crop: 'Redgram' },
  { name: 'Sunflower', crop: 'Sunflower' },
];

const VEGETABLES_ITEMS = [
  { name: 'Chilli (Mirch)', crop: 'Chilli' },
  { name: 'Tomato (Tamatar)', crop: 'Tomato' },
  { name: 'Okra (Bhindi)', crop: 'Okra' },
  { name: 'Brinjal (Baingan)', crop: 'Brinjal' },
  { name: 'Watermelon (Tarbooz)', crop: 'Watermelon' },
  { name: 'Sweet Corn', crop: 'Sweetcorn' },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState<'Field Crops' | 'Vegetables' | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
        setActiveSubCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden select-none bg-slate-900 min-h-[660px] xs:min-h-[720px] sm:min-h-[760px] md:min-h-0 md:aspect-[1671/941] flex flex-col justify-between"
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

      {/* 2. Floating Header in the Open Sky */}
      <header className="relative z-30 w-full max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-5 lg:pt-6">
        <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">

          {/* Official Sathya Seeds Logo in Crisp Frosted Pill */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer bg-white/95 hover:bg-white backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-105"
          >
            <img
              src="/sathya-logo-transparent.png"
              alt="Sri Sathya Seeds - A Symbol of Trust"
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Menu in Open Sky */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8" aria-label="Main Navigation">
            <button
              onClick={() => {
                onNavigate?.('Home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#A3E635] font-black text-xs sm:text-[13.5px] lg:text-[14px] pb-0.5 border-b-2 border-[#A3E635] cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate?.('About Us');
                window.location.hash = '#about-us';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#A3E635] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              About Us
            </button>

            {/* Products Dropdown Menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => {
                setProductsDropdownOpen(false);
                setActiveSubCategory(null);
              }}
            >
              <button
                type="button"
                onClick={() => {
                  onNavigate?.('Products');
                  setProductsDropdownOpen(!productsDropdownOpen);
                }}
                className="text-white hover:text-[#A3E635] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer flex items-center gap-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#A3E635]' : ''}`} />
              </button>

              {/* Multi-Level Flyout Dropdown */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.22)] border border-gray-100 py-2.5 z-50 text-left animate-in fade-in zoom-in-95 duration-150">
                  
                  {/* Option 1: Field Crops */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubCategory('Field Crops')}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate?.('Products', 'Paddy');
                        setProductsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        activeSubCategory === 'Field Crops' ? 'text-[#087C19] bg-[#EBF8E3]' : 'text-slate-800 hover:text-[#087C19] hover:bg-slate-50'
                      }`}
                    >
                      <span>🌾 Field Crops</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>

                    {/* Flyout Submenu Level 2: Field Crops */}
                    {activeSubCategory === 'Field Crops' && (
                      <div className="absolute top-0 left-full ml-1 min-w-[200px] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.2)] border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {FIELD_CROPS_ITEMS.map((item) => (
                          <button
                            type="button"
                            key={item.crop}
                            onClick={() => {
                              onNavigate?.('Products', item.crop);
                              setProductsDropdownOpen(false);
                              setActiveSubCategory(null);
                            }}
                            className="w-full text-left px-4 py-2 text-xs sm:text-[13px] text-slate-700 hover:text-[#087C19] hover:bg-[#EBF8E3] font-semibold transition-colors cursor-pointer"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Option 2: Vegetables */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubCategory('Vegetables')}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate?.('Products', 'Vegetables');
                        setProductsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        activeSubCategory === 'Vegetables' ? 'text-[#087C19] bg-[#EBF8E3]' : 'text-slate-800 hover:text-[#087C19] hover:bg-slate-50'
                      }`}
                    >
                      <span>🌶️ Vegetables</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>

                    {/* Flyout Submenu Level 2: Vegetables */}
                    {activeSubCategory === 'Vegetables' && (
                      <div className="absolute top-0 left-full ml-1 min-w-[200px] max-h-[380px] overflow-y-auto bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.2)] border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {VEGETABLES_ITEMS.map((item) => (
                          <button
                            type="button"
                            key={item.crop}
                            onClick={() => {
                              onNavigate?.('Products', item.crop);
                              setProductsDropdownOpen(false);
                              setActiveSubCategory(null);
                            }}
                            className="w-full text-left px-4 py-2 text-xs sm:text-[13px] text-slate-700 hover:text-[#087C19] hover:bg-[#EBF8E3] font-semibold transition-colors cursor-pointer"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Option 3: BT Cotton */}
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate?.('Products', 'Cotton');
                      setProductsDropdownOpen(false);
                    }}
                    onMouseEnter={() => setActiveSubCategory(null)}
                    className="w-full text-left px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#087C19] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>🌱 BT Cotton (BG-II)</span>
                  </button>

                  {/* Option 4: View All Products */}
                  <div className="pt-1.5 mt-1 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate?.('Products');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-black text-[#087C19] hover:bg-[#EBF8E3] rounded-b-xl transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>View All Varieties</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate?.('R&D');
                window.location.hash = '#rd';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#A3E635] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              R&amp;D
            </button>

            <a
              href="#purpose"
              className="text-white hover:text-[#A3E635] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              CSR
            </a>

            <a
              href="#contact-us"
              className="text-white hover:text-[#A3E635] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-2xl bg-white/95 hover:bg-white text-[#102235] shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#087C19]" />
              ) : (
                <Menu className="w-6 h-6 text-[#087C19]" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.3)] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
            <button
              onClick={() => {
                onNavigate?.('Home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#087C19] bg-[#EBF8E3] transition-colors cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate?.('About Us');
                setMobileMenuOpen(false);
                window.location.hash = '#about-us';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              About Us
            </button>

            {/* Mobile Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180 text-[#087C19]' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl my-1 text-xs">
                  <div>
                    <span className="font-bold text-[#087C19] uppercase tracking-wider text-[10px] block px-2 pb-1">
                      Field Crops
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 pl-2">
                      {FIELD_CROPS_ITEMS.map((item) => (
                        <button
                          key={item.crop}
                          onClick={() => {
                            onNavigate?.('Products', item.crop);
                            setMobileMenuOpen(false);
                          }}
                          className="text-left text-slate-700 hover:text-[#087C19] py-1 cursor-pointer font-medium"
                        >
                          • {item.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold text-[#087C19] uppercase tracking-wider text-[10px] block px-2 pb-1">
                      Vegetables
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 pl-2">
                      {VEGETABLES_ITEMS.map((item) => (
                        <button
                          key={item.crop}
                          onClick={() => {
                            onNavigate?.('Products', item.crop);
                            setMobileMenuOpen(false);
                          }}
                          className="text-left text-slate-700 hover:text-[#087C19] py-1 cursor-pointer font-medium"
                        >
                          • {item.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <button
                      onClick={() => {
                        onNavigate?.('Products', 'Cotton');
                        setMobileMenuOpen(false);
                      }}
                      className="text-left font-bold text-slate-800 hover:text-[#087C19] px-2 py-1 block cursor-pointer"
                    >
                      🌱 BT Cotton (BG-II)
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate?.('R&D');
                setMobileMenuOpen(false);
                window.location.hash = '#rd';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              R&amp;D
            </button>

            <a
              href="#purpose"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors"
            >
              CSR
            </a>

            <a
              href="#contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </a>

            <div className="pt-2 border-t border-gray-100">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#087C19] hover:bg-[#075B19] text-white py-2.5 rounded-full font-bold text-xs shadow-md transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Farmer Login</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Content: Sits in the upper sky space on mobile, vertically centered on desktop */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 flex items-start md:items-center pt-3 xs:pt-5 sm:pt-8 lg:pt-10 pb-64 xs:pb-72 sm:pb-80 md:pb-10">
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
