import React, { useState, useEffect } from 'react';
import { Search, User, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string, crop?: string) => void;
}

const MAIN_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Products', href: '#products' },
  { label: 'R&D', href: '#rd' },
  { label: 'CSR', href: '#csr' },
  { label: 'Contact Us', href: '#contact-us' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'Home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(activePage);

  // Sync activeItem when activePage prop changes
  useEffect(() => {
    setActiveItem(activePage);
  }, [activePage]);

  const handleNavClick = (e: React.MouseEvent, itemLabel: string, href: string) => {
    e.preventDefault();
    setActiveItem(itemLabel);
    setMobileMenuOpen(false);

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
            className="flex items-center group select-none"
            onClick={(e) => handleNavClick(e, 'Home', '#home')}
          >
            <img
              src="/sathya-logo-transparent.png"
              alt="Sri Sathya Seeds - A Symbol of Trust"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 h-full" aria-label="Main Navigation">
            {MAIN_NAV.map((item) => {
              const isCurrent = activeItem === item.label;
              const isProducts = item.label === 'Products';

              if (isProducts) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={(e) => handleNavClick(e, item.label, item.href)}
                    className={`transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#087C19] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-[0_2px_8px_rgba(8,124,25,0.3)]'
                        : 'py-2 text-[14px] sm:text-[15px] font-semibold text-[#102235] hover:text-[#087C19]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <div key={item.label} className="relative h-full flex items-center">
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, item.label, item.href)}
                    className={`relative py-2 text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'text-[#087C19] font-bold'
                        : 'text-[#102235] hover:text-[#087C19]'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Active Underline Bar */}
                    {isCurrent && (
                      <span className="absolute -bottom-4 lg:-bottom-[18px] left-0 right-0 h-[2.5px] bg-[#087C19] rounded-full" />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons: Search & Farmer Login */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search site"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#087C19] hover:bg-gray-100/80 transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />
            </button>

            {/* Green Farmer Login Button */}
            <a
              href="#login"
              className="group flex items-center gap-2 bg-[#087C19] hover:bg-[#075B19] active:scale-95 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-[0_3px_12px_rgba(8,124,25,0.3)] hover:shadow-[0_4px_16px_rgba(8,124,25,0.45)] transition-all duration-200 cursor-pointer"
            >
              <User className="w-4 h-4 stroke-[2.2]" />
              <span>Farmer Login</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                    ? 'text-[#087C19] bg-[#EBF8E3] font-bold'
                    : 'text-[#102235] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-gray-100">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#087C19] hover:bg-[#075B19] text-white py-2.5 rounded-full font-semibold text-xs shadow-md transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Farmer Login</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
