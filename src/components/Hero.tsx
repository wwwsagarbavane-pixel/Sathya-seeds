import React, { useState, useRef, useEffect } from 'react';
import HeroContent from './HeroContent';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string, crop?: string) => void;
}

interface DropdownCategory {
  name: string;
  crop: string;
  icon: string;
  tag: string;
}

const PRODUCT_CATEGORIES: DropdownCategory[] = [
  { name: 'Field Crops', crop: 'Paddy', icon: '🌾', tag: '16+ Types' },
  { name: 'Vegetables', crop: 'Chilli', icon: '🌶️', tag: 'F1 Hybrids' },
  { name: 'Bt Cotton (BG-II)', crop: 'Cotton', icon: '🌱', tag: 'High Yield' },
  { name: 'Oilseeds & Pulses', crop: 'Mustard', icon: '🌻', tag: 'Resilient' },
];

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Parallax & Camera Entry State
  const [scrollY, setScrollY] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isEntered, setIsEntered] = useState(false);
  const [cameraSettled, setCameraSettled] = useState(false);

  useEffect(() => {
    // Trigger cinematic camera dolly zoom-out entry on mount
    const enterTimer = setTimeout(() => {
      setIsEntered(true);
    }, 60);

    // Settle into interactive real-time mouse parallax after initial camera motion
    const settledTimer = setTimeout(() => {
      setCameraSettled(true);
    }, 2400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(settledTimer);
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleNavMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setProductsDropdownOpen(true);
  };

  const handleNavMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden select-none bg-slate-900 min-h-[720px] xs:min-h-[760px] sm:min-h-[800px] md:min-h-0 md:aspect-[1672/941] flex flex-col justify-between"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
      aria-label="Sri Sathya Seeds Hero Section"
    >
      {/* =========================================================================
          AFTER EFFECTS 3D CAMERA NULL CONTROLLER
          Tilts, pitches, and orbits all layers in true 3D spatial coordinate space
          ========================================================================= */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none animate-camera-drift will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${
            isEntered ? (mouseOffset.y * -3.2) + (scrollY * 0.012) : 4.5
          }deg) rotateY(${
            isEntered ? mouseOffset.x * 4.2 : -3.5
          }deg) rotateZ(${
            isEntered ? mouseOffset.x * -0.5 : 0.8
          }deg) ${!isEntered ? 'scale(1.12)' : 'scale(1)'}`,
          transition: cameraSettled
            ? 'transform 260ms cubic-bezier(0.2, 0.8, 0.4, 1)'
            : 'transform 2400ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Layer 1: Deep Background at Z = -160px */}
        <div 
          className="absolute inset-0 w-full h-full z-[1] overflow-hidden pointer-events-none select-none will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: isEntered
              ? `translate3d(${mouseOffset.x * -8}px, ${scrollY * 0.14 + mouseOffset.y * -6}px, -160px) scale(${1.18 + scrollY * 0.00015})`
              : 'translate3d(0, -25px, -160px) scale(1.28)',
            opacity: isEntered ? 1 : 0.4,
            filter: isEntered ? 'blur(0px)' : 'blur(8px)',
            transition: cameraSettled
              ? 'transform 200ms ease-out'
              : 'transform 2400ms cubic-bezier(0.16, 1, 0.3, 1), filter 2000ms ease-out, opacity 1400ms ease-out',
          }}
        >
          <img
            src="/golden-sunrise-sunflower-fields.png"
            alt="Golden Sunrise Sunflower Fields"
            className="w-full h-[112%] sm:h-[114%] -translate-y-2 sm:-translate-y-4 lg:-translate-y-6 object-cover object-center pointer-events-none select-none"
            loading="eager"
          />
        </div>

        {/* Layer 2: Midground Farmer at Z = 0px (focal focal plane) */}
        <div
          className="absolute z-[2] bottom-0 pointer-events-none flex items-end justify-center right-[-3%] xs:right-0 sm:right-[1%] md:right-[3%] lg:right-[5%] xl:right-[7%] 2xl:right-[9%] h-[57%] xs:h-[61%] sm:h-[67%] md:h-[79%] lg:h-[83%] xl:h-[87%] max-h-[740px] will-change-transform"
          style={{
            transformStyle: 'preserve-3d',
            transform: isEntered
              ? `translate3d(${mouseOffset.x * 12}px, ${scrollY * 0.09 + mouseOffset.y * 6}px, 0px) scale(1)`
              : 'translate3d(0, 65px, 0px) scale(1.12)',
            opacity: isEntered ? 1 : 0,
            transition: cameraSettled
              ? 'transform 200ms ease-out'
              : 'transform 2200ms cubic-bezier(0.16, 1, 0.3, 1) 250ms, opacity 1800ms ease-out 250ms',
          }}
          aria-hidden="true"
        >
          <img
            src="/proud-farmer-transparent.png"
            alt="Proud Indian Farmer in Traditional White Attire"
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] pointer-events-none select-none"
            loading="eager"
          />
        </div>

        {/* Layer 3: Foreground Sunflowers at Z = +80px (close to camera lens) */}
        <div
          className="absolute bottom-0 left-0 w-full z-[3] pointer-events-none select-none overflow-hidden leading-none will-change-transform"
          style={{ 
            transformStyle: 'preserve-3d',
            height: 'clamp(210px, 34vw, 460px)',
            transform: isEntered
              ? `translate3d(${mouseOffset.x * 22}px, ${-scrollY * 0.05 + mouseOffset.y * 10}px, 80px) scale(1)`
              : 'translate3d(0, 85px, 80px) scale(1.15)',
            opacity: isEntered ? 1 : 0,
            transition: cameraSettled
              ? 'transform 200ms ease-out'
              : 'transform 2200ms cubic-bezier(0.16, 1, 0.3, 1) 380ms, opacity 1800ms ease-out 380ms',
          }}
          aria-hidden="true"
        >
          <img
            src="/sunflower-border-foreground.png"
            alt="Foreground Sunflower Border"
            className="w-full h-full object-cover object-bottom pointer-events-none select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* =========================================================================
          UI LAYER: FLOATING SKY HEADER (z-index: 30)
          Transparent sky header gliding smoothly in from the top
          ========================================================================= */}
      <header 
        className="relative z-[30] w-full max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-5 lg:pt-6 will-change-transform"
        style={{
          transform: isEntered ? 'translate3d(0, 0, 0)' : 'translate3d(0, -30px, 0)',
          opacity: isEntered ? 1 : 0,
          transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1) 650ms, opacity 1000ms ease-out 650ms',
        }}
      >
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
              className="text-[#FF4D4D] font-black text-xs sm:text-[13.5px] lg:text-[14px] pb-0.5 border-b-2 border-[#FF4D4D] cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              Home
            </button>

            <button
              onClick={() => {
                onNavigate?.('About Us');
                window.location.hash = '#about-us';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white hover:text-[#FF4D4D] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              About Us
            </button>

            {/* Products Dropdown Menu on Hover */}
            <div
              className="relative"
              onMouseEnter={handleNavMouseEnter}
              onMouseLeave={handleNavMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  onNavigate?.('Products');
                  setProductsDropdownOpen(false);
                }}
                className="text-white hover:text-[#FF4D4D] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer flex items-center gap-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#FF4D4D]' : ''}`} />
              </button>

              {/* Clean Single Dropdown on Hover */}
              {productsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.25)] border border-white/60 p-2 z-50 text-left animate-in fade-in zoom-in-95 duration-150"
                  onMouseEnter={handleNavMouseEnter}
                  onMouseLeave={handleNavMouseLeave}
                >
                  <div className="px-3 pt-1 pb-1.5 text-[10.5px] font-black uppercase tracking-wider text-[#E50201]">
                    Seed Categories
                  </div>

                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => {
                        onNavigate?.('Products', cat.crop);
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#E50201] hover:bg-[#FEF2F2] transition-colors cursor-pointer group/cat text-left"
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </span>
                      <span className="text-[10.5px] font-medium text-slate-400 group-hover/cat:text-[#E50201]">
                        {cat.tag}
                      </span>
                    </button>
                  ))}

                  <div className="pt-1.5 mt-1 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate?.('Products');
                        setProductsDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-black text-[#E50201] hover:bg-[#FEF2F2] transition-colors cursor-pointer"
                    >
                      <span>View All 90+ Varieties</span>
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
              className="text-white hover:text-[#FF4D4D] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              R&amp;D
            </button>

            <a
              href="#purpose"
              className="text-white hover:text-[#FF4D4D] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
            >
              CSR
            </a>

            <a
              href="#contact-us"
              className="text-white hover:text-[#FF4D4D] font-bold text-xs sm:text-[13.5px] lg:text-[14px] transition-colors cursor-pointer drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
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
                <X className="w-6 h-6 text-[#E50201]" />
              ) : (
                <Menu className="w-6 h-6 text-[#E50201]" />
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
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#E50201] bg-[#FEF2F2] transition-colors cursor-pointer"
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

            <button
              onClick={() => {
                onNavigate?.('Products');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm text-[#102235] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Products
            </button>

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
          </div>
        )}
      </header>

      {/* =========================================================================
          UI LAYER: HERO CONTENT (z-index: 20)
          Positioned comfortably on the left side: heading, subtitle, and CTA buttons
          Glides up into place during entry, then subtle parallax and soft fade on scroll
          ========================================================================= */}
      <div 
        className="relative z-[20] w-full max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 flex-1 flex items-start pt-2 xs:pt-3 sm:pt-6 md:pt-8 lg:pt-11 xl:pt-14 pb-0 will-change-transform"
        style={{
          transform: isEntered
            ? `translate3d(0, ${scrollY * 0.14}px, 0)`
            : 'translate3d(0, 45px, 0)',
          opacity: isEntered
            ? Math.max(0, 1 - scrollY / 650)
            : 0,
          transition: cameraSettled
            ? 'none'
            : 'transform 1600ms cubic-bezier(0.16, 1, 0.3, 1) 450ms, opacity 1400ms ease-out 450ms',
        }}
      >
        <div className="w-full max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
          <HeroContent />
        </div>
      </div>

      {/* Natural Bottom Anchor Spacer */}
      <div className="relative z-[4] h-2 sm:h-4 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Hero;
