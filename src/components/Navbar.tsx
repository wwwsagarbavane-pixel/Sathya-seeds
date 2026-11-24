import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string, crop?: string) => void;
}

interface DropdownItem {
  name: string;
  crop: string;
  icon: string;
  tag: string;
}

const PRODUCT_CATEGORIES: DropdownItem[] = [
  { name: 'Field Crops', crop: 'Paddy', icon: '🌾', tag: '16+ Types' },
  { name: 'Vegetables', crop: 'Chilli', icon: '🌶️', tag: 'F1 Hybrids' },
  { name: 'Bt Cotton (BG-II)', crop: 'Cotton', icon: '🌱', tag: 'High Yield' },
  { name: 'Oilseeds & Pulses', crop: 'Mustard', icon: '🌻', tag: 'Resilient' },
];

const MAIN_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Products', href: '#products', hasDropdown: true },
  { label: 'R&D', href: '#rd' },
  { label: 'CSR', href: '#csr' },
  { label: 'Contact Us', href: '#contact-us' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'Home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(activePage);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync activeItem when activePage prop changes
  useEffect(() => {
    setActiveItem(activePage);
  }, [activePage]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const handleNavClick = (e: React.MouseEvent, itemLabel: string, href: string) => {
    e.preventDefault();
    setActiveItem(itemLabel);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);

    if (itemLabel === 'Home') {
      onNavigate?.('Home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemLabel === 'About Us') {
      onNavigate?.('About Us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemLabel === 'Products') {
      onNavigate?.('Products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemLabel === 'R&D') {
      onNavigate?.('R&D');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (itemLabel === 'CSR') {
      if (activePage !== 'Home') {
        onNavigate?.('Home');
        setTimeout(() => {
          document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById('purpose')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (itemLabel === 'Contact Us') {
      if (activePage !== 'Home') {
        onNavigate?.('Home');
        setTimeout(() => {
          document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate?.(itemLabel);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] select-none">
      <div className="max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-[58px] sm:h-[64px] lg:h-[70px]">
          
          {/* Logo: Sri Sathya Seeds Official Logo */}
          <a 
            href="#home" 
            className="flex items-center group select-none cursor-pointer"
            onClick={(e) => handleNavClick(e, 'Home', '#home')}
          >
            <img
              src="/sathya-logo-transparent.png"
              alt="Sri Sathya Seeds - A Symbol of Trust"
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              const isCurrent = activeItem === item.label;
              const isProducts = item.label === 'Products';

              if (isProducts) {
                return (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={(e) => handleNavClick(e, item.label, item.href)}
                      className={`relative py-2 text-[14px] sm:text-[15px] font-semibold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                        isCurrent
                          ? 'text-[#E50201] font-bold'
                          : 'text-[#102235] hover:text-[#E50201]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-[#E50201]' : 'text-slate-400'
                        }`}
                      />

                      {/* Active Underline Bar */}
                      {isCurrent && (
                        <span className="absolute -bottom-4 lg:-bottom-[18px] left-0 right-0 h-[2.5px] bg-[#E50201] rounded-full" />
                      )}
                    </button>

                    {/* Products Dropdown Menu on Hover */}
                    {productsDropdownOpen && (
                      <div
                        className="absolute top-[calc(100%-6px)] left-0 w-64 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.14)] border border-gray-100 p-2 z-50 text-left animate-in fade-in zoom-in-95 duration-150"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
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
                );
              }

              return (
                <div key={item.label} className="relative h-full flex items-center">
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, item.label, item.href)}
                    className={`relative py-2 text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'text-[#E50201] font-bold'
                        : 'text-[#102235] hover:text-[#E50201]'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Active Underline Bar */}
                    {isCurrent && (
                      <span className="absolute -bottom-4 lg:-bottom-[18px] left-0 right-0 h-[2.5px] bg-[#E50201] rounded-full" />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E50201]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200">
          {MAIN_NAV.map((item) => {
            const isCurrent = activeItem === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isCurrent
                    ? 'text-[#E50201] bg-[#FEF2F2] font-bold'
                    : 'text-[#102235] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
