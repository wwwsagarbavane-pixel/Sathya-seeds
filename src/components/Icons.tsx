import React from 'react';

/**
 * Custom precision SVGs exactly matching the AgriGrow reference design
 */

// AgriGrow Brand Sprout Emblem (Leaf seedling over green furrowed field bowl)
export const AgriGrowLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 36 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Upper seedling leaves */}
    <path d="M19 14C19 14 18 6 25 3C25 10 20.5 13.5 19 14Z" fill="#A8F044" />
    <path d="M19 14C19 14 19.5 7.5 15.5 5.5C13.5 9.5 17 13 19 14Z" fill="#087C19" />
    {/* Dark green furrow field bowl */}
    <path d="M5 15C5 24 10.5 29 19 29C27.5 29 33 24 33 15H5Z" fill="#075B19" />
    {/* White curved furrow ridges */}
    <path d="M7 15C7 22.5 12 26.5 19 26.5C26 26.5 31 22.5 31 15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 15C11 20 14.5 23.5 19 23.5C23.5 23.5 27 20 27 15" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M19 15V29" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Organic Lime Brush Underline for "Growing Futures"
export const BrushUnderline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    className={className}
  >
    <defs>
      <linearGradient id="brushLimeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9AEB28" />
        <stop offset="45%" stopColor="#C4FA48" />
        <stop offset="85%" stopColor="#9AEB28" />
        <stop offset="100%" stopColor="#78D814" />
      </linearGradient>
    </defs>
    <path
      d="M4 12.5C50 7.5 150 4 240 6C310 7.5 365 10 396 14C355 17.5 280 18.8 190 17.2C110 15.8 45 15 4 12.5Z"
      fill="url(#brushLimeGradient)"
    />
  </svg>
);

// Floating Card Icon 1: Higher Yield
export const HigherYieldIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 24V11" stroke="#087C19" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M14 13C14 13 13 5 21 3C21 11 16 13 14 13Z" fill="#087C19" />
    <path d="M14 17C14 17 10 12 5 14C5 20 12 18 14 17Z" fill="#075B19" />
  </svg>
);

// Floating Card Icon 2: Resource Efficiency (Water droplet with ripple/leaf)
export const ResourceEfficiencyIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 3C14 3 6 12 6 17.5C6 21.9 9.6 25.5 14 25.5C18.4 25.5 22 21.9 22 17.5C22 12 14 3 14 3Z"
      fill="#087C19"
    />
    <path
      d="M14 7C14 7 9 13.5 9 17.5C9 19.5 10.2 21 12 21.8"
      stroke="#A8F044"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

// Floating Card Icon 3: Better Profit (Rising bar chart with trend arrow)
export const BetterProfitIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="4" height="8" rx="1" fill="#087C19" />
    <rect x="11" y="11" width="4" height="13" rx="1" fill="#087C19" />
    <rect x="18" y="6" width="4" height="18" rx="1" fill="#087C19" />
    <path d="M5 12L12 6L17 9L23 3" stroke="#075B19" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 3H23V8" stroke="#075B19" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Floating Card Icon 4: Sustainable Farming (People & sprout)
export const SustainableFarmingIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" fill="#087C19" />
    <path d="M4 19C4 16 6.5 14 9 14C11.5 14 14 16 14 19" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="19" cy="8" r="3" fill="#087C19" />
    <path d="M14 19C14 16 16.5 14 19 14C21.5 14 24 16 24 19" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
    {/* Small center sprout */}
    <path d="M14 24V17" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 19C15.5 17.5 17.5 18 17.5 18" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 19C12.5 17.5 10.5 18 10.5 18" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Stats Bar Icon 1: 1M+ Happy Farmers (Farmer with straw hat)
export const StatFarmerHatIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Straw hat brim & crown */}
    <path d="M11 13C11 8.5 14.2 6.5 18 6.5C21.8 6.5 25 8.5 25 13H11Z" fill="#087C19" />
    <ellipse cx="18" cy="13.5" rx="13" ry="2.6" fill="#087C19" />
    {/* Farmer head */}
    <circle cx="18" cy="17" r="3.8" fill="#087C19" />
    {/* Shoulders / Shirt */}
    <path d="M6 29C6 23 11 20.5 18 20.5C25 20.5 30 23 30 29" fill="#087C19" />
    {/* White collar detail */}
    <path d="M16 20.5L18 23.5L20 20.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Stats Bar Icon 2: 5M+ Acres Covered (Sprouts over furrowed ridges)
export const StatAcresFieldIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* 3 stalks */}
    <path d="M18 5V14M16 10L18 8L20 10M15 12L18 9L21 12" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 8V15M8.5 11.5L10 10L11.5 11.5" stroke="#087C19" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26 8V15M24.5 11.5L26 10L27.5 11.5" stroke="#087C19" strokeWidth="1.8" strokeLinecap="round" />
    {/* Rolling furrow ridges */}
    <path d="M4 28C9 23 27 23 32 28" stroke="#087C19" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 24C11 19 25 19 30 24" stroke="#087C19" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 20C14 16 22 16 26 20" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Stats Bar Icon 3: 98% Satisfaction Rate (Trophy cup with star)
export const StatTrophyIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg viewBox="0 0 36 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 7H26V16C26 20.5 22.4 23.5 18 23.5C13.6 23.5 10 20.5 10 16V7Z" fill="#087C19" />
    <path d="M10 9H5C5 14 7.5 16 10 16V9Z" fill="#087C19" />
    <path d="M26 9H31C31 14 28.5 16 26 16V9Z" fill="#087C19" />
    <path d="M16 23.5V27H20V23.5" fill="#087C19" />
    <rect x="12" y="27" width="12" height="3" rx="1.5" fill="#087C19" />
    {/* White Star */}
    <path
      d="M18 11.5L19.2 14.2L22 14.5L20 16.3L20.5 19.1L18 17.8L15.5 19.1L16 16.3L14 14.5L16.8 14.2L18 11.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

// Products Badge 1: Field Crops (Wheat/Grain stalk)
export const ProductGrainIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4V24" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M14 6C16 8 18 9 18 11C18 12.5 16 13 14 13" fill="#087C19" />
    <path d="M14 6C12 8 10 9 10 11C10 12.5 12 13 14 13" fill="#087C19" />
    <path d="M14 11C16.5 13 19 14 19 16.5C19 18 16.5 18.5 14 18" fill="#087C19" />
    <path d="M14 11C11.5 13 9 14 9 16.5C9 18 11.5 18.5 14 18" fill="#087C19" />
    <path d="M14 16C16 18 18 19 18 21C18 22 16 22.5 14 22" fill="#087C19" />
    <path d="M14 16C12 18 10 19 10 21C10 22 12 22.5 14 22" fill="#087C19" />
  </svg>
);

// Products Badge 2: Vegetables (Bell Pepper)
export const ProductPepperIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M14 4C14 4 14.5 7 13.5 9" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
    {/* Bell pepper lobes */}
    <path
      d="M10 9C7.5 9 6 11 6 14.5C6 19.5 9.5 24 12 24C13.5 24 14 23 14 23C14 23 14.5 24 16 24C18.5 24 22 19.5 22 14.5C22 11 20.5 9 18 9C16.5 9 15 10 14 11C13 10 11.5 9 10 9Z"
      stroke="#087C19"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path d="M10.5 11C10.5 15 11 21 12 23" stroke="#087C19" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M17.5 11C17.5 15 17 21 16 23" stroke="#087C19" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Products Badge 3: Cotton (Cotton Boll)
export const ProductCottonIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Calyx sepals */}
    <path d="M14 22V25" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 20C11 18 14 19 14 22C14 19 17 18 19 20" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
    {/* Fluffy cotton lobes */}
    <circle cx="10" cy="13" r="3.8" fill="#087C19" />
    <circle cx="18" cy="13" r="3.8" fill="#087C19" />
    <circle cx="14" cy="9.5" r="3.8" fill="#087C19" />
    <circle cx="14" cy="15" r="4.2" fill="#087C19" />
    {/* White inner accents */}
    <circle cx="10" cy="13" r="2.2" fill="#FFFFFF" />
    <circle cx="18" cy="13" r="2.2" fill="#FFFFFF" />
    <circle cx="14" cy="9.5" r="2.2" fill="#FFFFFF" />
    <circle cx="14" cy="15" r="2.4" fill="#FFFFFF" />
  </svg>
);

// Vision Eye Icon
export const VisionEyeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3.5" stroke="#087C19" strokeWidth="2" />
    <circle cx="12" cy="12" r="1.6" fill="#087C19" />
  </svg>
);

// Mission Flag on Mountain Icon
export const MissionFlagIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16L9 9.5L14 16L17 12.5L21 17.5H3L4 16Z" stroke="#087C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 9.5V3M12 3L16.5 5.5L12 8" stroke="#087C19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 20.5H22" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Underline Smile Arch
export const SmileUnderline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 12C45 4 115 4 158 12C118 6 42 6 2 12Z" fill="#087C19" />
  </svg>
);

// Products Badge 4: Oilseeds (Sunflower / Bloom)
export const OilseedFlowerIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="4.5" fill="#087C19" />
    <path d="M14 2V5.5M14 22.5V26M2 14H5.5M22.5 14H26" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M5.5 5.5L8 8M20 20L22.5 22.5M5.5 22.5L8 20M20 8L22.5 5.5" stroke="#087C19" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Products Badge 5: Pulses (Pea / Bean Pod)
export const PulsePodIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 22C4 22 7 9 20 5C22 4.5 24 6.5 23.5 8.5C19.5 21.5 6.5 24 4 22Z" stroke="#087C19" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="16" r="2.2" fill="#087C19" />
    <circle cx="14.5" cy="12" r="2.2" fill="#087C19" />
    <circle cx="19" cy="8" r="2.2" fill="#087C19" />
  </svg>
);


