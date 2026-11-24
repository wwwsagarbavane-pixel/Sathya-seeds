import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, User, ArrowRight, Menu, X } from 'lucide-react';
import { AgriGrowLogoIcon } from './Icons';

interface SubCategoryItem {
  name: string;
  href: string;
}

interface ProductSubMenu {
  category: string;
  href: string;
  items?: SubCategoryItem[];
}

const FIELD_CROPS_ITEMS: SubCategoryItem[] = [
  { name: 'Paddy', href: '#paddy' },
  { name: 'Maize', href: '#maize' },
  { name: 'Redgram', href: '#redgram' },
  { name: 'Jowar', href: '#jowar' },
  { name: 'Bajra', href: '#bajra' },
  { name: 'Sunflower', href: '#sunflower' },
  { name: 'Castor', href: '#castor' },
  { name: 'Mustard', href: '#mustard' },
  { name: 'Wheat', href: '#wheat' },
];

const VEGETABLES_ITEMS: SubCategoryItem[] = [
  { name: 'Tomato', href: '#tomato' },
  { name: 'Chilli', href: '#chilli' },
  { name: 'Brinjal', href: '#brinjal' },
  { name: 'Okra', href: '#okra' },
  { name: 'Watermelon', href: '#watermelon' },
  { name: 'Maskmelon', href: '#maskmelon' },
  { name: 'Ridge Guard', href: '#ridge-guard' },
  { name: 'Bitter Guard', href: '#bitter-guard' },
  { name: 'Bottle Guard', href: '#bottle-guard' },
];

const PRODUCTS_MENU: ProductSubMenu[] = [
  {
    category: 'Field Crops',
    href: '#field-crops',
    items: FIELD_CROPS_ITEMS,
  },
  {
    category: 'Vegetables',
    href: '#vegetables',
    items: VEGETABLES_ITEMS,
  },
  {
    category: 'BT COTTON',
    href: '#bt-cotton',
  },
];

const MAIN_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Products', href: '#products', hasDropdown: true },
  { label: 'R&D', href: '#rd' },
  { label: 'CSR', href: '#csr' },
  { label: 'Contact Us', href: '#contact-us' },
];

interface NavbarProps {
  activePage?: string;
  onNavigate?: (page: string, crop?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'Home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(activePage);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState<'Field Crops' | 'Vegetables' | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync activeItem when activePage prop changes
  useEffect(() => {
    setActiveItem(activePage);
  }, [activePage]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setActiveSubCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 bg-white w-full border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.04)] select-none">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-[56px] sm:h-[64px] lg:h-[70px]">
          
          {/* Logo: Sri Sathya Seeds Official Logo */}
          <a 
            href="#home" 
            className="flex items-center group select-none text-decoration-none"
            onClick={(e) => { 
              e.preventDefault(); 
              setActiveItem('Home');
              onNavigate?.('Home');
            }}
          >
            <img
              src="/sathya-logo-transparent.png"
              alt="Sri Sathya Seeds - A Symbol of Trust"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 h-full">
            {MAIN_NAV.map((item) => {
              const isCurrent = activeItem === item.label;
              const isProducts = item.label === 'Products';

              if (isProducts) {
                return (
                  <div 
                    key={item.label} 
                    ref={dropdownRef}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => {
                      setProductsOpen(false);
                      setActiveSubCategory(null);
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItem('Products');
                        setProductsOpen(!productsOpen);
                      }}
                      className={`relative flex items-center gap-1.5 py-2 text-[15px] font-semibold transition-all duration-200 ${
                        isCurrent || productsOpen
                          ? 'text-[#1CA308]'
                          : 'text-[#102235] hover:text-[#1CA308]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsOpen ? 'rotate-180 text-[#1CA308]' : 'text-slate-500'
                        }`} 
                      />

                      {/* Active / Open Underline Bar */}
                      {(isCurrent || productsOpen) && (
                        <span className="absolute -bottom-4 lg:-bottom-[18px] left-0 right-0 h-[2.5px] bg-[#1CA308] rounded-full" />
                      )}
                    </button>

                    {/* Products Multi-Level Dropdown */}
                    {productsOpen && (
                      <div className="absolute top-[calc(100%-4px)] left-0 min-w-[210px] bg-white rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-100 py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                        {PRODUCTS_MENU.map((sub) => {
                          const hasFlyout = !!sub.items;
                          const isCatActive = activeSubCategory === sub.category;

                          return (
                            <div
                              key={sub.category}
                              className="relative"
                              onMouseEnter={() => {
                                if (hasFlyout) {
                                  setActiveSubCategory(sub.category as 'Field Crops' | 'Vegetables');
                                } else {
                                  setActiveSubCategory(null);
                                }
                              }}
                            >
                              <a
                                href={sub.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveItem('Products');
                                  onNavigate?.('Products', sub.category);
                                  if (!hasFlyout) {
                                    setProductsOpen(false);
                                    setActiveSubCategory(null);
                                  }
                                }}
                                className={`flex items-center justify-between px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                                  isCatActive
                                    ? 'text-[#087C19] bg-[#EBF8E3]'
                                    : 'text-[#102235] hover:text-[#087C19] hover:bg-slate-50'
                                }`}
                              >
                                <span>{sub.category}</span>
                                {hasFlyout && (
                                  <ChevronRight 
                                    className={`w-4 h-4 stroke-[2] ${
                                      isCatActive ? 'text-[#087C19]' : 'text-slate-400'
                                    }`} 
                                  />
                                )}
                              </a>

                              {/* Flyout Submenu Level 2 (Field Crops or Vegetables) */}
                              {hasFlyout && isCatActive && (
                                <div 
                                  className="absolute top-0 left-full ml-1 min-w-[190px] max-h-[380px] overflow-y-auto bg-white rounded-xl shadow-[0_14px_40px_rgba(0,0,0,0.14)] border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                                >
                                  {sub.items?.map((crop) => (
                                    <a
                                      key={crop.name}
                                      href={crop.href}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem('Products');
                                        onNavigate?.('Products', crop.name);
                                        setProductsOpen(false);
                                        setActiveSubCategory(null);
                                      }}
                                      className="block px-5 py-2 text-sm text-slate-700 hover:text-[#087C19] hover:bg-[#EBF8E3] transition-colors font-medium text-left cursor-pointer"
                                    >
                                      {crop.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="relative h-full flex items-center">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item.label);
                      if (item.label === 'About Us') {
                        onNavigate?.('About Us');
                      } else {
                        onNavigate?.(item.label);
                        if (item.href.startsWith('#')) {
                          const target = document.querySelector(item.href);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }
                    }}
                    className={`relative py-2 text-[15px] font-semibold transition-all duration-200 ${
                      isCurrent
                        ? 'text-[#1CA308]'
                        : 'text-[#102235] hover:text-[#1CA308]'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Active Underline Bar */}
                    {isCurrent && (
                      <span className="absolute -bottom-4 lg:-bottom-[18px] left-0 right-0 h-[2.5px] bg-[#1CA308] rounded-full" />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search site"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#087C19] hover:bg-gray-100/80 transition-colors"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2]" />
            </button>

            {/* Green Farmer Login Button */}
            <a
              href="#login"
              className="group flex items-center gap-2 bg-[#087C19] hover:bg-[#075B19] active:scale-95 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-[0_3px_12px_rgba(8,124,25,0.3)] hover:shadow-[0_4px_16px_rgba(8,124,25,0.45)] transition-all duration-200"
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
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in duration-200 max-h-[80vh] overflow-y-auto">
          {MAIN_NAV.map((item) => {
            const isProducts = item.label === 'Products';

            if (isProducts) {
              return (
                <div key={item.label} className="border-b border-gray-50 pb-2">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedCat(mobileExpandedCat === 'Products' ? null : 'Products')}
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-[#102235]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedCat === 'Products' ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileExpandedCat === 'Products' && (
                    <div className="pl-4 space-y-1 mt-1">
                      {PRODUCTS_MENU.map((sub) => (
                        <div key={sub.category}>
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate?.('Products', sub.category);
                              setMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-xs font-bold text-slate-800 hover:text-[#087C19] cursor-pointer"
                          >
                            {sub.category}
                          </button>
                          {sub.items && (
                            <div className="pl-4 grid grid-cols-2 gap-1 pb-2">
                              {sub.items.map((crop) => (
                                <button
                                  type="button"
                                  key={crop.name}
                                  onClick={() => {
                                    onNavigate?.('Products', crop.name);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="text-left text-[11px] text-slate-600 hover:text-[#087C19] py-1 cursor-pointer"
                                >
                                  • {crop.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.label);
                  setMobileMenuOpen(false);
                  if (item.label === 'About Us') {
                    onNavigate?.('About Us');
                  } else if (item.label === 'R&D') {
                    onNavigate?.('R&D');
                  } else {
                    onNavigate?.(item.label);
                    if (item.href.startsWith('#')) {
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }
                }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeItem === item.label
                    ? 'text-[#087C19] bg-[#EBF8E3] font-bold'
                    : 'text-[#102235] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="#login"
              className="flex items-center justify-center gap-2 bg-[#087C19] text-white py-3 rounded-full font-semibold text-sm shadow-md"
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
