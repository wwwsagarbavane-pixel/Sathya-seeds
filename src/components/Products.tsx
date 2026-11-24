import React from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  ProductGrainIcon, 
  ProductPepperIcon, 
  ProductCottonIcon,
  OilseedFlowerIcon,
  PulsePodIcon
} from './Icons';

interface ProductItem {
  id: string;
  category: string;
  cropName: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'field-crops',
    category: 'Field Crops',
    cropName: 'Paddy',
    description: 'Paddy (16+ Varieties), Maize, Bajra, Jowar, Castor and more.',
    image: '/crops/field-crops.jpg',
    icon: <ProductGrainIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: 'vegetables',
    category: 'Vegetables',
    cropName: 'Chilli',
    description: 'F1 Chilli, Tomato, Okra, Brinjal, Watermelon, Gourds.',
    image: '/crops/vegetables.jpg',
    icon: <ProductPepperIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: 'cotton',
    category: 'Cotton',
    cropName: 'Cotton',
    description: 'Sathya Diamond BG II, SSCH-333 BG II, SSCH-444, Bt Cotton.',
    image: '/crops/cotton.jpg',
    icon: <ProductCottonIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
    isFeatured: true,
  },
  {
    id: 'oilseeds',
    category: 'Oilseeds',
    cropName: 'Mustard',
    description: 'Mustard, Sunflower, Groundnut, Soybean and more.',
    image: '/crops/oilseeds.jpg',
    icon: <OilseedFlowerIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: 'pulses',
    category: 'Pulses',
    cropName: 'Redgram',
    description: 'Red Gram (Arhar / Toor), Chickpea, Black Gram, Green Gram.',
    image: '/crops/pulses.jpg',
    icon: <PulsePodIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
];

interface ProductsProps {
  onNavigate?: (page: string, crop?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  return (
    <section 
      id="solutions" 
      className="relative w-full bg-white pt-10 sm:pt-12 lg:pt-14 pb-20 sm:pb-28 lg:pb-32 overflow-hidden select-none scroll-mt-6"
      aria-label="Our Products"
    >
      {/* Anchor for #products */}
      <span id="products" className="absolute -top-16 left-0" />

      <div className="relative max-w-[1920px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto px-2">
          {/* Eyebrow with red lines on left and right */}
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="w-6 sm:w-12 h-[2px] bg-[#E50201] rounded-full inline-block" />
            <span className="text-[11px] sm:text-[13px] font-extrabold tracking-[0.16em] sm:tracking-[0.18em] text-[#E50201] uppercase">
              OUR PRODUCTS
            </span>
            <span className="w-6 sm:w-12 h-[2px] bg-[#E50201] rounded-full inline-block" />
          </div>

          {/* Main Section Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-[#102235] mt-2.5 sm:mt-4 leading-tight">
            High-Quality Seeds for <span className="text-[#E50201] inline-block">Better Yields</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 max-w-2xl mx-auto mt-2.5 sm:mt-3.5 leading-relaxed font-normal">
            A trusted range of high-performing seeds for key crops, designed for higher productivity, resilience, and greater farm profitability.
          </p>
        </div>

        {/* 5 Product Cards Grid - Fully Clickable */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 max-w-[1720px] xl:max-w-[1800px] mx-auto">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                onNavigate?.('Products', product.cropName);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative bg-white rounded-[24px] sm:rounded-[28px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(229,2,1,0.14)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group max-w-[320px] xs:max-w-[340px] sm:max-w-none w-full mx-auto cursor-pointer"
            >
              {/* Product Card Image Container */}
              <div className="relative w-full h-[165px] sm:h-[180px] lg:h-[190px] overflow-hidden rounded-t-[26px] sm:rounded-t-[28px] bg-slate-100">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlapping circular category icon badge */}
              <div className="absolute top-[165px] sm:top-[180px] lg:top-[190px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FEE2E2] border-[3.5px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-110">
                {product.icon}
              </div>

              {/* Product Card Content Body */}
              <div className="pt-8 sm:pt-9 pb-6 sm:pb-7 px-4 sm:px-5 flex flex-col items-center text-center flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-[20px] font-black text-[#102235] tracking-tight group-hover:text-[#E50201] transition-colors leading-tight">
                    {product.category}
                  </h3>

                  <p className="text-[11.5px] sm:text-xs text-slate-500 mt-1.5 font-medium leading-relaxed max-w-[220px] mx-auto min-h-[34px]">
                    {product.description}
                  </p>
                </div>

                {/* Action CTA Button */}
                <span
                  className={`mt-5 px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition-all duration-200 ${
                    product.isFeatured
                      ? 'bg-[#C00201] group-hover:bg-[#A00201] text-white shadow-[0_4px_14px_rgba(229,2,1,0.35)] group-hover:shadow-[0_6px_20px_rgba(229,2,1,0.45)]'
                      : 'border-2 border-[#E50201] text-[#E50201] bg-white group-hover:bg-[#E50201] group-hover:text-white shadow-sm'
                  }`}
                >
                  <span>Explore Varieties</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
                </span>
              </div>

              {/* Decorative subtle bottom-right corner leaf flourish */}
              <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none overflow-hidden rounded-br-[26px] sm:rounded-br-[28px]">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#FEE2E2]/85" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0C40 22 22 40 0 40H40V0Z" fill="currentColor" />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Products;
