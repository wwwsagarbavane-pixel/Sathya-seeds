import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  Info,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PRODUCTS_CATALOG, DetailedProduct } from '../data/productsData';

type CategoryType = 'all' | 'paddy' | 'cotton' | 'field-crops' | 'vegetables';

interface CategoryTab {
  id: CategoryType;
  label: string;
  icon: string;
  badge?: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'All Products', icon: '🌟' },
  { id: 'paddy', label: 'Paddy (Dhan)', icon: '🌾', badge: '16 Varieties' },
  { id: 'cotton', label: 'Bt Cotton', icon: '🌱', badge: 'BG-II' },
  { id: 'field-crops', label: 'Field Crops', icon: '🌽', badge: 'Maize & Oilseeds' },
  { id: 'vegetables', label: 'Vegetables', icon: '🌶️', badge: 'Chilli & Tomato' },
];

interface ProductsPageProps {
  initialCrop?: string;
  onNavigate?: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ initialCrop, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>(() => {
    if (initialCrop) {
      const lower = initialCrop.toLowerCase();
      if (lower.includes('paddy') || lower.includes('rice') || lower.includes('dhan')) return 'paddy';
      if (lower.includes('cotton')) return 'cotton';
      if (lower.includes('veg') || lower.includes('chilli') || lower.includes('tomato') || lower.includes('okra') || lower.includes('brinjal')) return 'vegetables';
      if (lower.includes('maize') || lower.includes('mustard') || lower.includes('bajra') || lower.includes('wheat') || lower.includes('jowar') || lower.includes('field')) return 'field-crops';
    }
    return 'all';
  });

  const [searchQuery, setSearchQuery] = useState(initialCrop && !['paddy', 'cotton', 'field crops', 'vegetables'].includes(initialCrop.toLowerCase()) ? initialCrop : '');
  const [selectedProduct, setSelectedProduct] = useState<DetailedProduct | null>(null);

  useEffect(() => {
    if (initialCrop) {
      const lower = initialCrop.toLowerCase();
      if (lower.includes('paddy') || lower.includes('rice') || lower.includes('dhan')) {
        setActiveCategory('paddy');
      } else if (lower.includes('cotton')) {
        setActiveCategory('cotton');
      } else if (lower.includes('chilli') || lower.includes('tomato') || lower.includes('okra') || lower.includes('brinjal') || lower.includes('veg')) {
        setActiveCategory('vegetables');
        if (['chilli', 'tomato', 'okra', 'brinjal'].includes(lower)) {
          setSearchQuery(initialCrop);
        }
      } else if (lower.includes('maize') || lower.includes('mustard') || lower.includes('bajra') || lower.includes('wheat') || lower.includes('jowar')) {
        setActiveCategory('field-crops');
        setSearchQuery(initialCrop);
      }
    }
  }, [initialCrop]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((product) => {
      const matchesCategory = 
        activeCategory === 'all' ? true : product.category === activeCategory;
      
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.cropType.toLowerCase().includes(q) ||
        product.tag.toLowerCase().includes(q) ||
        product.badge.toLowerCase().includes(q) ||
        (product.grainType && product.grainType.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-slate-50 min-h-screen select-none">
      
      {/* 1. Page Header Banner */}
      <div className="relative bg-gradient-to-r from-[#075B19] via-[#087C19] to-[#0A8F20] text-white py-12 sm:py-16 px-4 xs:px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#B5F640]/15 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
            <button 
              onClick={() => onNavigate?.('Home')} 
              className="hover:text-white hover:underline cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-[#B5F640] font-bold">Products Portfolio</span>
            {activeCategory !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-white/60" />
                <span className="text-white/90">
                  {CATEGORY_TABS.find(t => t.id === activeCategory)?.label}
                </span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
            Certified High-Yielding Seeds Portfolio
          </h1>
          <p className="text-xs sm:text-base text-white/90 max-w-2xl mt-2 leading-relaxed">
            Authentic Sri Sathya Seeds research hybrids with high germination, pest resistance, and proven field performance across major Indian agro-climatic zones.
          </p>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-16 xl:px-20 py-8 sm:py-12">
        
        {/* 2. Category Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                  }}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#087C19] text-white shadow-[0_6px_18px_rgba(8,124,25,0.3)] scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-[#087C19] border border-gray-200/80'
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#EBF8E3] text-[#087C19]'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search variety, hybrid, crop..."
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-full bg-white border border-gray-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#087C19] focus:ring-2 focus:ring-[#087C19]/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Results Count & Filter Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-[#102235] font-bold">{filteredProducts.length}</strong> products
            {activeCategory !== 'all' && (
              <span> in <strong className="text-[#087C19] font-bold">{CATEGORY_TABS.find(t => t.id === activeCategory)?.label}</strong></span>
            )}
            {searchQuery && (
              <span> matching "<strong className="text-slate-700">{searchQuery}</strong>"</span>
            )}
          </span>

          {(activeCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-[#087C19] hover:underline font-bold text-xs cursor-pointer flex items-center gap-1"
            >
              <span>Reset Filters</span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 3. Product Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-[24px] sm:rounded-[26px] border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(8,124,25,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Product Card Top Image */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 select-none"
                  loading="lazy"
                />

                {/* Top Left: Crop Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#087C19] shadow-sm border border-emerald-100">
                    {product.tag}
                  </span>
                </div>

                {/* Top Right: Highlight Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-[#075B19] text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#B5F640]" />
                    <span>{product.badge}</span>
                  </span>
                </div>
              </div>

              {/* Product Body Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#102235] group-hover:text-[#087C19] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {product.cropType}
                  </p>

                  {/* Specifications Pills */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-600">
                    {product.duration && (
                      <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
                        <Clock className="w-3.5 h-3.5 text-[#087C19] shrink-0" />
                        <span className="truncate">{product.duration}</span>
                      </div>
                    )}
                    {product.grainType && (
                      <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#087C19] shrink-0" />
                        <span className="truncate">{product.grainType}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {product.keyFeatures && product.keyFeatures.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {product.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-[#087C19] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card CTA Actions */}
                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl text-xs font-bold bg-[#EBF8E3] hover:bg-[#087C19] text-[#087C19] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group/btn"
                  >
                    <span>View Details</span>
                    <Info className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      onNavigate?.('Home');
                      setTimeout(() => {
                        window.location.hash = '#contact-us';
                        const msgInput = document.getElementById('message') as HTMLTextAreaElement | null;
                        if (msgInput) {
                          msgInput.value = `Hello Sathya Seeds team, I am inquiring about ${product.name} (${product.cropType}). Please share pricing and availability.`;
                        }
                      }, 200);
                    }}
                    className="py-2 sm:py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-[#075B19] text-slate-700 hover:text-white transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
                    title="Inquire about this seed"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">Inquire</span>
                  </button>
                </div>

              </div>

              {/* Decorative corner flourish */}
              <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-br-[24px]">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#E0F7D4]/60">
                  <path d="M32 0C32 17.6731 17.6731 32 0 32H32V0Z" fill="currentColor" />
                </svg>
              </div>

            </div>
          ))}
        </div>

        {/* Zero Results State */}
        {filteredProducts.length === 0 && (
          <div className="mt-12 text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto px-6">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-black text-slate-800 mt-3">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any seed variety matching your search. Try adjusting your keywords or category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-5 px-6 py-2 rounded-full bg-[#087C19] text-white text-xs font-bold hover:bg-[#075B19] transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Details Specification Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-[28px] sm:rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-gray-100 p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-gray-100 pb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-slate-50 rounded-2xl p-2 border border-slate-100 shrink-0 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EBF8E3] text-[#087C19] text-xs font-black uppercase">
                  <span>{selectedProduct.cropType}</span>
                  <span>•</span>
                  <span>{selectedProduct.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#102235] mt-2">
                  {selectedProduct.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  {selectedProduct.keyFeatures.map((feat, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 font-medium">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Complete Specifications Table */}
            <div className="mt-6">
              <h4 className="text-sm font-black text-[#102235] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087C19]" />
                <span>Technical Specifications</span>
              </h4>

              <div className="mt-3 rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100 text-xs sm:text-sm">
                {Object.entries(selectedProduct.specs).map(([label, val], idx) => (
                  <div 
                    key={idx}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:px-4 ${
                      idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
                    }`}
                  >
                    <span className="font-semibold text-slate-500">{label}</span>
                    <span className="font-bold text-[#102235] mt-0.5 sm:mt-0 text-left sm:text-right">
                      {val || 'High / Standard'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Genuine Sri Sathya Seeds guarantee with lab-certified germination.
              </span>

              <button
                onClick={() => {
                  setSelectedProduct(null);
                  onNavigate?.('Home');
                  setTimeout(() => {
                    window.location.hash = '#contact-us';
                    const msgInput = document.getElementById('message') as HTMLTextAreaElement | null;
                    if (msgInput) {
                      msgInput.value = `Hello Sathya Seeds, I want to inquire about availability and pricing for ${selectedProduct.name} (${selectedProduct.cropType}).`;
                    }
                  }, 200);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#087C19] hover:bg-[#075B19] text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire About This Seed</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;
