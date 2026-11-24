import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  Sparkles,
  Sprout
} from 'lucide-react';
import { CROPS_DB, CropInfo, VarietyItem } from '../data/cropsData';

interface ProductsPageProps {
  initialCrop?: string;
  selectedCrop?: string;
  onNavigate?: (page: string, crop?: string) => void;
}

const CROP_PILLS = [
  { key: 'paddy', label: '🌾 Paddy (Dhan)' },
  { key: 'cotton', label: '🌱 Bt Cotton' },
  { key: 'maize', label: '🌽 Maize' },
  { key: 'mustard', label: '🌼 Mustard' },
  { key: 'chilli', label: '🌶️ Chilli' },
  { key: 'tomato', label: '🍅 Tomato' },
  { key: 'okra', label: '🌿 Okra' },
  { key: 'brinjal', label: '🍆 Brinjal' },
  { key: 'watermelon', label: '🍉 Watermelon' },
  { key: 'bajra', label: '🌾 Bajra' },
  { key: 'wheat', label: '🌾 Wheat' },
  { key: 'jowar', label: '🌾 Jowar' },
  { key: 'redgram', label: '🌾 Redgram' },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ initialCrop, selectedCrop, onNavigate }) => {
  // Normalize initialCrop to a key in CROPS_DB
  const resolveCropKey = (cropName?: string): string => {
    if (!cropName) return 'paddy';
    const lower = cropName.toLowerCase().trim();
    if (lower.includes('paddy') || lower.includes('dhan') || lower.includes('rice')) return 'paddy';
    if (lower.includes('cotton') || lower.includes('bt')) return 'cotton';
    if (lower.includes('maize') || lower.includes('corn')) return 'maize';
    if (lower.includes('mustard') || lower.includes('sarson')) return 'mustard';
    if (lower.includes('bajra')) return 'bajra';
    if (lower.includes('jowar')) return 'jowar';
    if (lower.includes('wheat') || lower.includes('gehun')) return 'wheat';
    if (lower.includes('redgram') || lower.includes('toor') || lower.includes('arhar')) return 'redgram';
    if (lower.includes('chilli') || lower.includes('mirch')) return 'chilli';
    if (lower.includes('tomato') || lower.includes('tamatar')) return 'tomato';
    if (lower.includes('okra') || lower.includes('bhindi')) return 'okra';
    if (lower.includes('brinjal') || lower.includes('baingan')) return 'brinjal';
    if (lower.includes('watermelon') || lower.includes('tarbooz')) return 'watermelon';
    if (lower.includes('veg')) return 'chilli';
    return 'paddy';
  };

  const effectiveCrop = selectedCrop || initialCrop;
  const [currentCropKey, setCurrentCropKey] = useState<string>(() => resolveCropKey(effectiveCrop));
  const [selectedVariety, setSelectedVariety] = useState<VarietyItem | null>(null);

  // Sync currentCropKey whenever selectedCrop or initialCrop prop changes
  useEffect(() => {
    if (selectedCrop || initialCrop) {
      setCurrentCropKey(resolveCropKey(selectedCrop || initialCrop));
    }
  }, [selectedCrop, initialCrop]);

  useEffect(() => {
    if (initialCrop) {
      setCurrentCropKey(resolveCropKey(initialCrop));
    }
  }, [initialCrop]);

  const activeCrop: CropInfo = CROPS_DB[currentCropKey] || CROPS_DB['paddy'];

  return (
    <div className="w-full bg-[#FAFCF8] min-h-screen select-none text-slate-800 flex flex-col justify-between">
      
      <div>
        {/* 1. Crop Hero Banner with Organic Double Wave (Exact match to reference) */}
        <div 
          className="relative w-full h-[260px] sm:h-[320px] lg:h-[370px] bg-cover bg-center overflow-hidden flex items-center shadow-inner"
          style={{ backgroundImage: `url('${activeCrop.banner}')` }}
        >
          {/* Nature Green Gradient Backdrop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03340D]/85 via-[#087C19]/50 to-transparent z-0" />

          {/* Banner Typography on Left */}
          <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16 text-left">
            <div className="inline-flex items-center gap-1.5 text-white/95 text-xs sm:text-sm font-semibold tracking-wide">
              <Sprout className="w-4 h-4 text-[#B5F640]" />
              <span>Our Products</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-1.5 drop-shadow-md">
              {activeCrop.name}
            </h1>

            <p className="text-white/90 text-xs sm:text-base font-normal max-w-xl mt-2 leading-relaxed drop-shadow-sm">
              {activeCrop.tagline}
            </p>
          </div>

          {/* Organic Double Wave SVG at Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="relative block w-full h-8 sm:h-12 text-[#FAFCF8] fill-current"
            >
              <path d="M0,0 C300,90 900,10 1200,70 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </div>

        {/* 2. Breadcrumbs Bar */}
        <div className="max-w-[1400px] mx-auto px-6 pt-4 pb-2 flex items-center justify-between gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <button 
              type="button"
              onClick={() => onNavigate?.('Home')}
              className="flex items-center text-slate-400 hover:text-[#087C19] transition-colors cursor-pointer"
              title="Go to Home"
            >
              <Home className="w-4 h-4" />
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <button
              type="button"
              onClick={() => onNavigate?.('Home')}
              className="text-slate-600 hover:text-[#087C19] cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-bold text-[#087C19]">{activeCrop.name}</span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.('Home')}
            className="text-xs text-[#087C19] hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>← Back to Home</span>
          </button>
        </div>

        {/* Quick Crop Selector Pills */}
        <div className="max-w-[1400px] mx-auto px-6 py-2 overflow-x-auto no-scrollbar scrollbar-none flex items-center gap-2">
          {CROP_PILLS.map((pill) => {
            const isActive = currentCropKey === pill.key;
            return (
              <button
                key={pill.key}
                type="button"
                onClick={() => setCurrentCropKey(pill.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#087C19] text-white shadow-sm scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-[#087C19] border border-gray-200/80'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* 3. Section Title & Subtitle with Green Underline */}
        <div className="text-center max-w-2xl mx-auto px-4 mt-2 sm:mt-4">
          {/* Two Green Leaves Emblem */}
          <div className="w-8 h-8 mx-auto flex items-center justify-center text-[#087C19] mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-[#102235]">
            {activeCrop.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-normal">
            {activeCrop.subtitle}
          </p>

          {/* Green Horizontal Pill Underline */}
          <div className="w-12 h-1 bg-[#087C19] rounded-full mx-auto mt-3" />
        </div>

        {/* 4. Crop Varieties Grid (Exact 4 Columns Matching Reference) */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {activeCrop.varieties.map((variety) => (
              <div
                key={variety.code}
                onClick={() => setSelectedVariety(variety)}
                className="bg-white rounded-[22px] border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(8,124,25,0.14)] hover:-translate-y-1.5 transition-all duration-300 p-4 sm:p-5 flex flex-col items-center justify-between cursor-pointer group"
              >
                {/* Variety Image Box with Subtle Soft Frame */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-50/50 flex items-center justify-center p-2 mb-4 group-hover:bg-emerald-50/20 transition-colors">
                  <img
                    src={variety.image}
                    alt={variety.code}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                  />
                </div>

                {/* Mint Green Variety Code Pill */}
                <div className="w-full max-w-[170px] py-1.5 px-3 rounded-full bg-[#EBF8E3] group-hover:bg-[#087C19] border border-[#CDEFC0] group-hover:border-[#087C19] text-[#087C19] group-hover:text-white font-black text-xs sm:text-sm text-center shadow-xs transition-colors duration-200">
                  <span>{variety.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Bottom Landscape Embellishment Wave */}
      <div className="relative w-full overflow-hidden leading-none pointer-events-none mt-10">
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 text-[#087C19]/15"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C320,80 640,10 960,50 C1280,90 1440,30 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* 6. Technical Specifications Modal (Triggered when user taps any variety) */}
      {selectedVariety && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedVariety(null)}
        >
          <div 
            className="bg-white rounded-[28px] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-gray-100 p-6 sm:p-7 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedVariety(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-100 pb-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-50 rounded-2xl p-2 border border-slate-100 shrink-0 flex items-center justify-center">
                <img
                  src={selectedVariety.image}
                  alt={selectedVariety.code}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF8E3] text-[#087C19] text-xs font-black uppercase">
                  <span>{activeCrop.name}</span>
                  {selectedVariety.subname && (
                    <>
                      <span>•</span>
                      <span>{selectedVariety.subname}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl font-black text-[#102235] mt-1.5">
                  {selectedVariety.code}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Genuine research seed variety developed by Sri Sathya Seeds.
                </p>
              </div>
            </div>

            {/* Specifications Key-Value List */}
            <div className="mt-5">
              <h4 className="text-xs font-black text-[#102235] uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#087C19]" />
                <span>Product Information &amp; Specs</span>
              </h4>

              <div className="rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-100 text-xs">
                {Object.entries(selectedVariety.specs).map(([label, val], idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-2.5 sm:px-3.5 ${
                      idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'
                    }`}
                  >
                    <span className="font-semibold text-slate-500">{label}</span>
                    <span className="font-bold text-[#102235] text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                100% Certified Germination
              </span>

              <button
                onClick={() => {
                  setSelectedVariety(null);
                  onNavigate?.('Home');
                  setTimeout(() => {
                    window.location.hash = '#contact-us';
                    const msgInput = document.getElementById('message') as HTMLTextAreaElement | null;
                    if (msgInput) {
                      msgInput.value = `Hello Sathya Seeds, I am inquiring about seed availability for ${selectedVariety.code} (${activeCrop.name}).`;
                    }
                  }, 200);
                }}
                className="px-5 py-2.5 rounded-full bg-[#087C19] hover:bg-[#075B19] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Inquire About {selectedVariety.code}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsPage;
