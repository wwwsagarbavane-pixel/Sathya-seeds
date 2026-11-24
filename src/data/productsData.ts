// Auto-generated Sathya Seeds Product Catalog from sathyaseeds.com
export interface ProductSpec {
  [key: string]: string;
}

export interface DetailedProduct {
  id: string;
  name: string;
  category: 'paddy' | 'cotton' | 'field-crops' | 'vegetables';
  cropType: string;
  badge: string;
  tag: string;
  description: string;
  image: string;
  duration?: string;
  plantHeight?: string;
  grainType?: string;
  keyFeatures: string[];
  specs: ProductSpec;
  isPopular?: boolean;
}

export const CROP_CATEGORIES = [
  { id: 'all', label: 'All Products', icon: 'Sparkles', count: 0 },
  { id: 'paddy', label: '🌾 Paddy (Dhan)', icon: 'Wheat', count: 0 },
  { id: 'cotton', label: '🌱 Bt Cotton', icon: 'Flower2', count: 0 },
  { id: 'field-crops', label: '🌽 Field Crops & Oilseeds', icon: 'Sprout', count: 0 },
  { id: 'vegetables', label: '🌶️ Vegetables', icon: 'Carrot', count: 0 },
] as const;

export const PRODUCTS_CATALOG: DetailedProduct[] = [
  {
    "id": "paddy-sph-1111",
    "name": "SPH-1111",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-1111.png",
    "duration": "140-145",
    "plantHeight": "85-95 cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking Quality",
      "Moderately tolerant to Gall midge and blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-1111",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "85-95 cm",
      "Days to 50% Flowering": "100-105",
      "Crop Duration": "140-145",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and blast",
      "Cooking Quality": "Medium Cooking Quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-sph-1199",
    "name": "SPH-1199",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-1199.png",
    "duration": "140-150",
    "plantHeight": "100-110cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking quality",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-1199",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "100-110cm",
      "Days to 50% Flowering": "110-115",
      "Crop Duration": "140-150",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Medium Cooking quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-sph-2222",
    "name": "SPH-2222",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-2222.png",
    "duration": "120-130",
    "plantHeight": "100-105 cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking quality",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-2222",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "100-105 cm",
      "Days to 50% Flowering": "90-95",
      "Crop Duration": "120-130",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Medium Cooking quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-sph-2299",
    "name": "SPH-2299",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-2299.png",
    "duration": "115-120",
    "plantHeight": "110-115 cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking Quality",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-2299",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115 cm",
      "Days to 50% Flowering": "85-90",
      "Crop Duration": "115-120",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Medium Cooking Quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-sph-4444",
    "name": "SPH-4444",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with short bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-4444.png",
    "duration": "120-125",
    "plantHeight": "90-100cm",
    "grainType": "Short Bold",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-4444",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "90-100cm",
      "Days to 50% Flowering": "90-95",
      "Crop Duration": "120-125",
      "Panicle Type": "Long",
      "Grain Type": "Short Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-sph-4499",
    "name": "SPH-4499",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-4499.png",
    "duration": "115-120",
    "plantHeight": "110-115 cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking quality",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-4499",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115 cm",
      "Days to 50% Flowering": "85-90",
      "Crop Duration": "115-120",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Medium Cooking quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-sph-4444",
    "name": "SPH-4444",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with short bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-4444.jpg",
    "duration": "120-125",
    "plantHeight": "90-100cm",
    "grainType": "Short Bold",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-4444",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "90-100cm",
      "Days to 50% Flowering": "90-95",
      "Crop Duration": "120-125",
      "Panicle Type": "Long",
      "Grain Type": "Short Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-sph-4499",
    "name": "SPH-4499",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "High Yield",
    "tag": "Hybrid Paddy",
    "description": "Premium high-yielding paddy with medium bold grains and robust pest tolerance.",
    "image": "/products/paddy_sph-4499.jpg",
    "duration": "115-120",
    "plantHeight": "110-115 cm",
    "grainType": "Medium Bold",
    "keyFeatures": [
      "High Yielder",
      "Medium Cooking quality",
      "Moderately tolerant to Gall midge and Blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPH-4499",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115 cm",
      "Days to 50% Flowering": "85-90",
      "Crop Duration": "115-120",
      "Panicle Type": "Long",
      "Grain Type": "Medium Bold",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and Blast",
      "Cooking Quality": "Medium Cooking quality",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-spv-1155",
    "name": "SPV-1155",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-1155.jpg",
    "duration": "130-135",
    "plantHeight": "90-100 cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High yielder",
      "Good",
      "Moderately tolerant to Gall midge"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-1155",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "90-100 cm",
      "Days to 50% Flowering": "100-105",
      "Crop Duration": "130-135",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-spv-3333",
    "name": "SPV-3333",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-3333.jpg",
    "duration": "130 days",
    "plantHeight": "90-95 cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge and blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-3333",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "90-95 cm",
      "Days to 50% Flowering": "95-100",
      "Crop Duration": "130 days",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-spv-4224",
    "name": "SPV-4224",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-4224.jpg",
    "duration": "130-135",
    "plantHeight": "105-110cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midged and blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-4224",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "105-110cm",
      "Days to 50% Flowering": "110-105",
      "Crop Duration": "130-135",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midged and blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-spv-5115",
    "name": "SPV-5115",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-5115.jpg",
    "duration": "135-140",
    "plantHeight": "105-110cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "Good Tillering",
      "Good",
      "Moderately tolerant to Gall midge"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-5115",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "105-110cm",
      "Days to 50% Flowering": "105-110",
      "Crop Duration": "135-140",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-spv-6006",
    "name": "SPV-6006",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-6006.jpg",
    "duration": "130 days",
    "plantHeight": "110-115cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge and blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-6006",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115cm",
      "Days to 50% Flowering": "95-100",
      "Crop Duration": "130 days",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": false
  },
  {
    "id": "paddy-spv-6336",
    "name": "SPV-6336 (Sankranthi)",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Farmer's Choice",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-6336.jpg",
    "duration": "130 days",
    "plantHeight": "110-115cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-6336 (Sankranthi)",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115cm",
      "Days to 50% Flowering": "95-100",
      "Crop Duration": "130 days",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-spv-8118",
    "name": "SPV-8118 (Subhadra)",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-8118.jpg",
    "duration": "140 days",
    "plantHeight": "95-100 cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge and blast"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-8118 (Subhadra)",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "95-100 cm",
      "Days to 50% Flowering": "95-100",
      "Crop Duration": "140 days",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge and blast",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "paddy-spv-9009",
    "name": "SPV-9009 (Sriaman)",
    "category": "paddy",
    "cropType": "Paddy (Dhan)",
    "badge": "Superior Grain",
    "tag": "High-Yield Variety",
    "description": "Premium high-yielding paddy with medium slender grains and robust pest tolerance.",
    "image": "/products/paddy_spv-9009.jpg",
    "duration": "120-125",
    "plantHeight": "110-115cm",
    "grainType": "Medium Slender",
    "keyFeatures": [
      "High Yielder",
      "Good",
      "Moderately tolerant to Gall midge"
    ],
    "specs": {
      "Hybrid / Variety": "SPV-9009 (Sriaman)",
      "Crop": "Paddy (Oryza sativa)",
      "Plant Height": "110-115cm",
      "Days to 50% Flowering": "90-95",
      "Crop Duration": "120-125",
      "Panicle Type": "Long",
      "Grain Type": "Medium Slender",
      "Pest & Disease Reaction": "Moderately tolerant to Gall midge",
      "Cooking Quality": "Good",
      "Recommended Season": "Kharif & Rabi"
    },
    "isPopular": true
  },
  {
    "id": "cotton-ssch-333-bg-ii",
    "name": "SSCH-333 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "High Boll Count",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.0-5.5 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_ssch-333_bg_ii.jpg",
    "duration": "140-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.0-5.5 gms",
    "keyFeatures": [
      "High Boll Count",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SSCH-333 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Semi-erect, compact",
      "Boll Weight": "5.0-5.5 gms",
      "Crop Duration": "140-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": true
  },
  {
    "id": "cotton-ssch-444-bg-ii",
    "name": "SSCH-444 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Heavy Bolls",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.2-5.8 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_ssch-444_bg_ii.jpg",
    "duration": "145-155 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.2-5.8 gms",
    "keyFeatures": [
      "Heavy Bolls",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SSCH-444 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Robust, high branching",
      "Boll Weight": "5.2-5.8 gms",
      "Crop Duration": "145-155 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": true
  },
  {
    "id": "cotton-ssch-555-bg-ii",
    "name": "SSCH-555 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Max Yield",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.5-6.0 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_ssch-555_bg_ii.jpg",
    "duration": "150-160 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.5-6.0 gms",
    "keyFeatures": [
      "Max Yield",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SSCH-555 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Bushy, vigorous",
      "Boll Weight": "5.5-6.0 gms",
      "Crop Duration": "150-160 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-45-ss-33-bg-ii",
    "name": "45 SS 33 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Easy Picking",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.0 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_45_ss_33_bg_ii.jpg",
    "duration": "140-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.0 gms",
    "keyFeatures": [
      "Easy Picking",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "45 SS 33 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Erect, easy picking",
      "Boll Weight": "5.0 gms",
      "Crop Duration": "140-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-54-ss-33-bg-ii",
    "name": "54 SS 33 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Bollworm Guard",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.2 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_54_ss_33_bg_ii.jpg",
    "duration": "145-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.2 gms",
    "keyFeatures": [
      "Bollworm Guard",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "54 SS 33 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Dense branching",
      "Boll Weight": "5.2 gms",
      "Crop Duration": "145-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-69-ss-66-bg-ii",
    "name": "69 SS 66 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Bt Cotton BG II",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.0-5.5 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_69_ss_66_bg_ii.jpg",
    "duration": "140-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.0-5.5 gms",
    "keyFeatures": [
      "Bt Cotton BG II",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "69 SS 66 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Semi-erect",
      "Boll Weight": "5.0-5.5 gms",
      "Crop Duration": "140-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-60-ss-66-bg-ii",
    "name": "60 SS 66 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Top Performer",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.5 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_60_ss_66_bg_ii.jpg",
    "duration": "150-160 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.5 gms",
    "keyFeatures": [
      "Top Performer",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "60 SS 66 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Sturdy stem, high boll retention",
      "Boll Weight": "5.5 gms",
      "Crop Duration": "150-160 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-66-ss-33-bg-ii",
    "name": "66 SS 33 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Premium Fibre",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.4 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_66_ss_33_bg_ii.png",
    "duration": "145-155 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.4 gms",
    "keyFeatures": [
      "Premium Fibre",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "66 SS 33 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "High boll weight",
      "Boll Weight": "5.4 gms",
      "Crop Duration": "145-155 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": true
  },
  {
    "id": "cotton-d-29-bg-ii",
    "name": "D-29 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Drought Resilient",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.0-5.3 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_d-29_bg_ii.png",
    "duration": "140-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.0-5.3 gms",
    "keyFeatures": [
      "Drought Resilient",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "D-29 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Drought hardy",
      "Boll Weight": "5.0-5.3 gms",
      "Crop Duration": "140-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": true
  },
  {
    "id": "cotton-sb-546-bg-ii",
    "name": "SB-546 BG II",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Pest Guard",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 5.1 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_sb-546_bg_ii.png",
    "duration": "145-150 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 5.1 gms",
    "keyFeatures": [
      "Pest Guard",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SB-546 BG II",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Sucking pest tolerant",
      "Boll Weight": "5.1 gms",
      "Crop Duration": "145-150 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-sdch-1",
    "name": "SDCH-1",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Early Maturity",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 4.0-4.5 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_sdch-1.jpg",
    "duration": "120-130 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 4.0-4.5 gms",
    "keyFeatures": [
      "Early Maturity",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SDCH-1",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Open canopy",
      "Boll Weight": "4.0-4.5 gms",
      "Crop Duration": "120-130 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "cotton-sdch-2",
    "name": "SDCH-2",
    "category": "cotton",
    "cropType": "BT Cotton",
    "badge": "Fast Harvest",
    "tag": "BG-II Hybrid",
    "description": "Superior Bt Cotton hybrid with 4.5-5.0 gms boll weight and high resistance against bollworms.",
    "image": "/products/cotton_sdch-2.jpg",
    "duration": "125-135 Days",
    "plantHeight": "Medium to Tall",
    "grainType": "Boll: 4.5-5.0 gms",
    "keyFeatures": [
      "Fast Harvest",
      "BG-II Protection",
      "High Ginning Outturn"
    ],
    "specs": {
      "Hybrid Name": "SDCH-2",
      "Crop": "Bt Cotton (Gossypium hirsutum)",
      "Technology": "Bollgard II (BG-II) Cry1Ac & Cry2Ab",
      "Plant Habit": "Open canopy, high picking",
      "Boll Weight": "4.5-5.0 gms",
      "Crop Duration": "125-135 Days",
      "Pest Resistance": "Bollworms (Helicoverpa, Spodoptera, Pink Bollworm)",
      "Fibre Quality": "Long staple, high strength, superior micronaire",
      "Picking Ease": "Fluffy open bolls, effortless harvesting"
    },
    "isPopular": false
  },
  {
    "id": "maize-smh-34",
    "name": "SMH-34",
    "category": "field-crops",
    "cropType": "Maize (Corn)",
    "badge": "High Starch & Yield",
    "tag": "Hybrid Maize",
    "description": "Superior Maize (Corn) hybrid with bold orange yellow grains and 95-105 Days.",
    "image": "/products/maize_smh-34.jpg",
    "duration": "95-105 Days",
    "plantHeight": "200-220 cm",
    "grainType": "Bold Orange Yellow",
    "keyFeatures": [
      "High Starch & Yield",
      "Dense cob filling to the tip",
      "95-105 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMH-34",
      "Crop": "Maize (Corn)",
      "Maturity Duration": "95-105 Days",
      "Plant Height": "200-220 cm",
      "Grain / Seed Character": "Bold Orange Yellow",
      "Key Strength": "Dense cob filling to the tip",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "maize-smh-99",
    "name": "SMH-99",
    "category": "field-crops",
    "cropType": "Maize (Corn)",
    "badge": "High Starch & Yield",
    "tag": "Hybrid Maize",
    "description": "Superior Maize (Corn) hybrid with bold orange yellow grains and 95-105 Days.",
    "image": "/products/maize_smh-99.jpg",
    "duration": "95-105 Days",
    "plantHeight": "200-220 cm",
    "grainType": "Bold Orange Yellow",
    "keyFeatures": [
      "High Starch & Yield",
      "Dense cob filling to the tip",
      "95-105 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMH-99",
      "Crop": "Maize (Corn)",
      "Maturity Duration": "95-105 Days",
      "Plant Height": "200-220 cm",
      "Grain / Seed Character": "Bold Orange Yellow",
      "Key Strength": "Dense cob filling to the tip",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "maize-smh-1188",
    "name": "SMH-1188",
    "category": "field-crops",
    "cropType": "Maize (Corn)",
    "badge": "High Starch & Yield",
    "tag": "Hybrid Maize",
    "description": "Superior Maize (Corn) hybrid with bold orange yellow grains and 95-105 Days.",
    "image": "/products/maize_smh-1188.jpg",
    "duration": "95-105 Days",
    "plantHeight": "200-220 cm",
    "grainType": "Bold Orange Yellow",
    "keyFeatures": [
      "High Starch & Yield",
      "Dense cob filling to the tip",
      "95-105 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMH-1188",
      "Crop": "Maize (Corn)",
      "Maturity Duration": "95-105 Days",
      "Plant Height": "200-220 cm",
      "Grain / Seed Character": "Bold Orange Yellow",
      "Key Strength": "Dense cob filling to the tip",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "mustard-smuh-654",
    "name": "SMUH-654",
    "category": "field-crops",
    "cropType": "Mustard (Sarson)",
    "badge": "High Oil Content",
    "tag": "Hybrid Mustard",
    "description": "Superior Mustard (Sarson) hybrid with bold brown lustrous grains and 115-125 Days.",
    "image": "/products/mustard_smuh-654.jpg",
    "duration": "115-125 Days",
    "plantHeight": "160-180 cm",
    "grainType": "Bold Brown Lustrous",
    "keyFeatures": [
      "High Oil Content",
      "40%+ oil recovery, shatter tolerant",
      "115-125 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMUH-654",
      "Crop": "Mustard (Sarson)",
      "Maturity Duration": "115-125 Days",
      "Plant Height": "160-180 cm",
      "Grain / Seed Character": "Bold Brown Lustrous",
      "Key Strength": "40%+ oil recovery, shatter tolerant",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "mustard-smuv-546",
    "name": "SMUV-546",
    "category": "field-crops",
    "cropType": "Mustard (Sarson)",
    "badge": "High Oil Content",
    "tag": "Hybrid Mustard",
    "description": "Superior Mustard (Sarson) hybrid with bold brown lustrous grains and 115-125 Days.",
    "image": "/products/mustard_smuv-546.jpg",
    "duration": "115-125 Days",
    "plantHeight": "160-180 cm",
    "grainType": "Bold Brown Lustrous",
    "keyFeatures": [
      "High Oil Content",
      "40%+ oil recovery, shatter tolerant",
      "115-125 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMUV-546",
      "Crop": "Mustard (Sarson)",
      "Maturity Duration": "115-125 Days",
      "Plant Height": "160-180 cm",
      "Grain / Seed Character": "Bold Brown Lustrous",
      "Key Strength": "40%+ oil recovery, shatter tolerant",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "mustard-smuv-456",
    "name": "SMUV-456",
    "category": "field-crops",
    "cropType": "Mustard (Sarson)",
    "badge": "High Oil Content",
    "tag": "Hybrid Mustard",
    "description": "Superior Mustard (Sarson) hybrid with bold brown lustrous grains and 115-125 Days.",
    "image": "/products/mustard_smuv-456.jpg",
    "duration": "115-125 Days",
    "plantHeight": "160-180 cm",
    "grainType": "Bold Brown Lustrous",
    "keyFeatures": [
      "High Oil Content",
      "40%+ oil recovery, shatter tolerant",
      "115-125 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SMUV-456",
      "Crop": "Mustard (Sarson)",
      "Maturity Duration": "115-125 Days",
      "Plant Height": "160-180 cm",
      "Grain / Seed Character": "Bold Brown Lustrous",
      "Key Strength": "40%+ oil recovery, shatter tolerant",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "bajra-sbh-1122",
    "name": "SBH-1122",
    "category": "field-crops",
    "cropType": "Bajra (Pearl Millet)",
    "badge": "Drought Hardy",
    "tag": "Hybrid Bajra",
    "description": "Superior Bajra (Pearl Millet) hybrid with grey bold grain grains and 75-85 Days.",
    "image": "/products/bajra_sbh-1122.jpg",
    "duration": "75-85 Days",
    "plantHeight": "190-210 cm",
    "grainType": "Grey Bold Grain",
    "keyFeatures": [
      "Drought Hardy",
      "Excellent stay-green fodder & grain",
      "75-85 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SBH-1122",
      "Crop": "Bajra (Pearl Millet)",
      "Maturity Duration": "75-85 Days",
      "Plant Height": "190-210 cm",
      "Grain / Seed Character": "Grey Bold Grain",
      "Key Strength": "Excellent stay-green fodder & grain",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "bajra-sbh-3344",
    "name": "SBH-3344",
    "category": "field-crops",
    "cropType": "Bajra (Pearl Millet)",
    "badge": "Drought Hardy",
    "tag": "Hybrid Bajra",
    "description": "Superior Bajra (Pearl Millet) hybrid with grey bold grain grains and 75-85 Days.",
    "image": "/products/bajra_sbh-3344.jpg",
    "duration": "75-85 Days",
    "plantHeight": "190-210 cm",
    "grainType": "Grey Bold Grain",
    "keyFeatures": [
      "Drought Hardy",
      "Excellent stay-green fodder & grain",
      "75-85 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SBH-3344",
      "Crop": "Bajra (Pearl Millet)",
      "Maturity Duration": "75-85 Days",
      "Plant Height": "190-210 cm",
      "Grain / Seed Character": "Grey Bold Grain",
      "Key Strength": "Excellent stay-green fodder & grain",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "jowar-ssh-369",
    "name": "SSH-369",
    "category": "field-crops",
    "cropType": "Jowar (Sorghum)",
    "badge": "Dual Purpose",
    "tag": "Hybrid Jowar",
    "description": "Superior Jowar (Sorghum) hybrid with pearly white grains and 100-110 Days.",
    "image": "/products/jowar_ssh-369.jpg",
    "duration": "100-110 Days",
    "plantHeight": "180-200 cm",
    "grainType": "Pearly White",
    "keyFeatures": [
      "Dual Purpose",
      "High grain yield & juicy fodder",
      "100-110 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SSH-369",
      "Crop": "Jowar (Sorghum)",
      "Maturity Duration": "100-110 Days",
      "Plant Height": "180-200 cm",
      "Grain / Seed Character": "Pearly White",
      "Key Strength": "High grain yield & juicy fodder",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "jowar-ssh-379",
    "name": "SSH-379",
    "category": "field-crops",
    "cropType": "Jowar (Sorghum)",
    "badge": "Dual Purpose",
    "tag": "Hybrid Jowar",
    "description": "Superior Jowar (Sorghum) hybrid with pearly white grains and 100-110 Days.",
    "image": "/products/jowar_ssh-379.jpg",
    "duration": "100-110 Days",
    "plantHeight": "180-200 cm",
    "grainType": "Pearly White",
    "keyFeatures": [
      "Dual Purpose",
      "High grain yield & juicy fodder",
      "100-110 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SSH-379",
      "Crop": "Jowar (Sorghum)",
      "Maturity Duration": "100-110 Days",
      "Plant Height": "180-200 cm",
      "Grain / Seed Character": "Pearly White",
      "Key Strength": "High grain yield & juicy fodder",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "jowar-ssh-389",
    "name": "SSH-389",
    "category": "field-crops",
    "cropType": "Jowar (Sorghum)",
    "badge": "Dual Purpose",
    "tag": "Hybrid Jowar",
    "description": "Superior Jowar (Sorghum) hybrid with pearly white grains and 100-110 Days.",
    "image": "/products/jowar_ssh-389.jpg",
    "duration": "100-110 Days",
    "plantHeight": "180-200 cm",
    "grainType": "Pearly White",
    "keyFeatures": [
      "Dual Purpose",
      "High grain yield & juicy fodder",
      "100-110 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SSH-389",
      "Crop": "Jowar (Sorghum)",
      "Maturity Duration": "100-110 Days",
      "Plant Height": "180-200 cm",
      "Grain / Seed Character": "Pearly White",
      "Key Strength": "High grain yield & juicy fodder",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "wheat-swv-234",
    "name": "SWV-234",
    "category": "field-crops",
    "cropType": "Wheat (Gehun)",
    "badge": "Chapatty Quality",
    "tag": "Hybrid Wheat",
    "description": "Superior Wheat (Gehun) hybrid with amber hard lustrous grains and 110-120 Days.",
    "image": "/products/wheat_swv-234.jpg",
    "duration": "110-120 Days",
    "plantHeight": "95-105 cm",
    "grainType": "Amber Hard Lustrous",
    "keyFeatures": [
      "Chapatty Quality",
      "Rust resistant, high protein",
      "110-120 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SWV-234",
      "Crop": "Wheat (Gehun)",
      "Maturity Duration": "110-120 Days",
      "Plant Height": "95-105 cm",
      "Grain / Seed Character": "Amber Hard Lustrous",
      "Key Strength": "Rust resistant, high protein",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "wheat-swv-237",
    "name": "SWV-237",
    "category": "field-crops",
    "cropType": "Wheat (Gehun)",
    "badge": "Chapatty Quality",
    "tag": "Hybrid Wheat",
    "description": "Superior Wheat (Gehun) hybrid with amber hard lustrous grains and 110-120 Days.",
    "image": "/products/wheat_swv-237.jpg",
    "duration": "110-120 Days",
    "plantHeight": "95-105 cm",
    "grainType": "Amber Hard Lustrous",
    "keyFeatures": [
      "Chapatty Quality",
      "Rust resistant, high protein",
      "110-120 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SWV-237",
      "Crop": "Wheat (Gehun)",
      "Maturity Duration": "110-120 Days",
      "Plant Height": "95-105 cm",
      "Grain / Seed Character": "Amber Hard Lustrous",
      "Key Strength": "Rust resistant, high protein",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "redgram-srv-36",
    "name": "SRV-36",
    "category": "field-crops",
    "cropType": "Redgram (Arhar / Toor)",
    "badge": "Wilt Resistant",
    "tag": "Hybrid Redgram",
    "description": "Superior Redgram (Arhar / Toor) hybrid with bold reddish brown grains and 150-165 Days.",
    "image": "/products/redgram_srv-36.jpg",
    "duration": "150-165 Days",
    "plantHeight": "170-190 cm",
    "grainType": "Bold Reddish Brown",
    "keyFeatures": [
      "Wilt Resistant",
      "Profuse pod bearing, high dal recovery",
      "150-165 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SRV-36",
      "Crop": "Redgram (Arhar / Toor)",
      "Maturity Duration": "150-165 Days",
      "Plant Height": "170-190 cm",
      "Grain / Seed Character": "Bold Reddish Brown",
      "Key Strength": "Profuse pod bearing, high dal recovery",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "redgram-srv-66",
    "name": "SRV-66",
    "category": "field-crops",
    "cropType": "Redgram (Arhar / Toor)",
    "badge": "Wilt Resistant",
    "tag": "Hybrid Redgram",
    "description": "Superior Redgram (Arhar / Toor) hybrid with bold reddish brown grains and 150-165 Days.",
    "image": "/products/redgram_srv-66.jpg",
    "duration": "150-165 Days",
    "plantHeight": "170-190 cm",
    "grainType": "Bold Reddish Brown",
    "keyFeatures": [
      "Wilt Resistant",
      "Profuse pod bearing, high dal recovery",
      "150-165 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SRV-66",
      "Crop": "Redgram (Arhar / Toor)",
      "Maturity Duration": "150-165 Days",
      "Plant Height": "170-190 cm",
      "Grain / Seed Character": "Bold Reddish Brown",
      "Key Strength": "Profuse pod bearing, high dal recovery",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "redgram-srv-88",
    "name": "SRV-88",
    "category": "field-crops",
    "cropType": "Redgram (Arhar / Toor)",
    "badge": "Wilt Resistant",
    "tag": "Hybrid Redgram",
    "description": "Superior Redgram (Arhar / Toor) hybrid with bold reddish brown grains and 150-165 Days.",
    "image": "/products/redgram_srv-88.jpg",
    "duration": "150-165 Days",
    "plantHeight": "170-190 cm",
    "grainType": "Bold Reddish Brown",
    "keyFeatures": [
      "Wilt Resistant",
      "Profuse pod bearing, high dal recovery",
      "150-165 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SRV-88",
      "Crop": "Redgram (Arhar / Toor)",
      "Maturity Duration": "150-165 Days",
      "Plant Height": "170-190 cm",
      "Grain / Seed Character": "Bold Reddish Brown",
      "Key Strength": "Profuse pod bearing, high dal recovery",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "redgram-srv-99",
    "name": "SRV-99",
    "category": "field-crops",
    "cropType": "Redgram (Arhar / Toor)",
    "badge": "Wilt Resistant",
    "tag": "Hybrid Redgram",
    "description": "Superior Redgram (Arhar / Toor) hybrid with bold reddish brown grains and 150-165 Days.",
    "image": "/products/redgram_srv-99.jpg",
    "duration": "150-165 Days",
    "plantHeight": "170-190 cm",
    "grainType": "Bold Reddish Brown",
    "keyFeatures": [
      "Wilt Resistant",
      "Profuse pod bearing, high dal recovery",
      "150-165 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SRV-99",
      "Crop": "Redgram (Arhar / Toor)",
      "Maturity Duration": "150-165 Days",
      "Plant Height": "170-190 cm",
      "Grain / Seed Character": "Bold Reddish Brown",
      "Key Strength": "Profuse pod bearing, high dal recovery",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "sunflower-ssfh-222",
    "name": "SSFH-222",
    "category": "field-crops",
    "cropType": "Sunflower (Surajmukhi)",
    "badge": "42% Oil Content",
    "tag": "Hybrid Sunflower",
    "description": "Superior Sunflower (Surajmukhi) hybrid with black striped grains and 85-95 Days.",
    "image": "/products/sunflower_ssfh-222.jpg",
    "duration": "85-95 Days",
    "plantHeight": "150-170 cm",
    "grainType": "Black Striped",
    "keyFeatures": [
      "42% Oil Content",
      "Well-filled head, uniform maturity",
      "85-95 Days"
    ],
    "specs": {
      "Hybrid / Variety": "SSFH-222",
      "Crop": "Sunflower (Surajmukhi)",
      "Maturity Duration": "85-95 Days",
      "Plant Height": "150-170 cm",
      "Grain / Seed Character": "Black Striped",
      "Key Strength": "Well-filled head, uniform maturity",
      "Yield Potential": "High across all agro-climatic zones",
      "Disease Tolerance": "Tolerant to prevailing foliar diseases"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-111",
    "name": "SCPH-111",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-111.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-111",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-114",
    "name": "SCPH-114",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-114.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-114",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-115",
    "name": "SCPH-115",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-115.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-115",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-116",
    "name": "SCPH-116",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-116.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-116",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-117",
    "name": "SCPH-117",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-117.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-117",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "chilli-scph-118",
    "name": "SCPH-118",
    "category": "vegetables",
    "cropType": "Chilli (Mirch)",
    "badge": "High Pungency",
    "tag": "F1 Hybrid Chilli",
    "description": "High performance Chilli (Mirch) hybrid with glossy dark red / green and virus tolerant, heavy bearing.",
    "image": "/products/chilli_scph-118.JPG",
    "duration": "Picking starts 65-70 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Glossy Dark Red / Green",
    "keyFeatures": [
      "High Pungency",
      "Virus tolerant, heavy bearing"
    ],
    "specs": {
      "Hybrid Name": "SCPH-118",
      "Crop": "Chilli (Mirch)",
      "Fruit / Harvest Characteristics": "Glossy Dark Red / Green",
      "Days to First Picking": "Picking starts 65-70 Days",
      "Special Traits": "Virus tolerant, heavy bearing",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-3",
    "name": "STMH-3",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-3.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-3",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-6",
    "name": "STMH-6",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-6.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-6",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-9",
    "name": "STMH-9",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-9.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-9",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-12",
    "name": "STMH-12",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-12.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-12",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-15",
    "name": "STMH-15",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-15.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-15",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-18",
    "name": "STMH-18",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-18.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-18",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-21",
    "name": "STMH-21",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-21.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-21",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "tomato-stmh-24",
    "name": "STMH-24",
    "category": "vegetables",
    "cropType": "Tomato (Tamatar)",
    "badge": "Firm & Long Transport",
    "tag": "F1 Hybrid Tomato",
    "description": "High performance Tomato (Tamatar) hybrid with square round, 90-110g and tolerant to tylcv & bacterial wilt.",
    "image": "/products/tomato_stmh-24.JPG",
    "duration": "First harvest 60-65 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Square Round, 90-110g",
    "keyFeatures": [
      "Firm & Long Transport",
      "Tolerant to TYLCV & bacterial wilt"
    ],
    "specs": {
      "Hybrid Name": "STMH-24",
      "Crop": "Tomato (Tamatar)",
      "Fruit / Harvest Characteristics": "Square Round, 90-110g",
      "Days to First Picking": "First harvest 60-65 Days",
      "Special Traits": "Tolerant to TYLCV & bacterial wilt",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "okra-sokh-101",
    "name": "SOKH-101",
    "category": "vegetables",
    "cropType": "Okra (Bhindi)",
    "badge": "YVMV Tolerant",
    "tag": "F1 Hybrid Okra",
    "description": "High performance Okra (Bhindi) hybrid with dark green, 5-ridged tender and short internodes, high picking rate.",
    "image": "/products/okra_sokh-101.jpg",
    "duration": "45-50 Days to first pick",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Dark Green, 5-ridged tender",
    "keyFeatures": [
      "YVMV Tolerant",
      "Short internodes, high picking rate"
    ],
    "specs": {
      "Hybrid Name": "SOKH-101",
      "Crop": "Okra (Bhindi)",
      "Fruit / Harvest Characteristics": "Dark Green, 5-ridged tender",
      "Days to First Picking": "45-50 Days to first pick",
      "Special Traits": "Short internodes, high picking rate",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "okra-sokh-102",
    "name": "SOKH-102",
    "category": "vegetables",
    "cropType": "Okra (Bhindi)",
    "badge": "YVMV Tolerant",
    "tag": "F1 Hybrid Okra",
    "description": "High performance Okra (Bhindi) hybrid with dark green, 5-ridged tender and short internodes, high picking rate.",
    "image": "/products/okra_sokh-102.jpg",
    "duration": "45-50 Days to first pick",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Dark Green, 5-ridged tender",
    "keyFeatures": [
      "YVMV Tolerant",
      "Short internodes, high picking rate"
    ],
    "specs": {
      "Hybrid Name": "SOKH-102",
      "Crop": "Okra (Bhindi)",
      "Fruit / Harvest Characteristics": "Dark Green, 5-ridged tender",
      "Days to First Picking": "45-50 Days to first pick",
      "Special Traits": "Short internodes, high picking rate",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "okra-sokh-103",
    "name": "SOKH-103",
    "category": "vegetables",
    "cropType": "Okra (Bhindi)",
    "badge": "YVMV Tolerant",
    "tag": "F1 Hybrid Okra",
    "description": "High performance Okra (Bhindi) hybrid with dark green, 5-ridged tender and short internodes, high picking rate.",
    "image": "/products/okra_sokh-103.jpg",
    "duration": "45-50 Days to first pick",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Dark Green, 5-ridged tender",
    "keyFeatures": [
      "YVMV Tolerant",
      "Short internodes, high picking rate"
    ],
    "specs": {
      "Hybrid Name": "SOKH-103",
      "Crop": "Okra (Bhindi)",
      "Fruit / Harvest Characteristics": "Dark Green, 5-ridged tender",
      "Days to First Picking": "45-50 Days to first pick",
      "Special Traits": "Short internodes, high picking rate",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "okra-sokh-104",
    "name": "SOKH-104",
    "category": "vegetables",
    "cropType": "Okra (Bhindi)",
    "badge": "YVMV Tolerant",
    "tag": "F1 Hybrid Okra",
    "description": "High performance Okra (Bhindi) hybrid with dark green, 5-ridged tender and short internodes, high picking rate.",
    "image": "/products/okra_sokh-104.jpg",
    "duration": "45-50 Days to first pick",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Dark Green, 5-ridged tender",
    "keyFeatures": [
      "YVMV Tolerant",
      "Short internodes, high picking rate"
    ],
    "specs": {
      "Hybrid Name": "SOKH-104",
      "Crop": "Okra (Bhindi)",
      "Fruit / Harvest Characteristics": "Dark Green, 5-ridged tender",
      "Days to First Picking": "45-50 Days to first pick",
      "Special Traits": "Short internodes, high picking rate",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": true
  },
  {
    "id": "brinjal-sbjh-16",
    "name": "sbjh-16",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-16.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-16",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "brinjal-sbjh-17",
    "name": "sbjh-17",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-17.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-17",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "brinjal-sbjh-18",
    "name": "sbjh-18",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-18.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-18",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "brinjal-sbjh-19",
    "name": "sbjh-19",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-19.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-19",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "brinjal-sbjh-20",
    "name": "sbjh-20",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-20.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-20",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "brinjal-sbjh-21",
    "name": "sbjh-21",
    "category": "vegetables",
    "cropType": "Brinjal (Baingan)",
    "badge": "Glossy Purple",
    "tag": "F1 Hybrid Brinjal",
    "description": "High performance Brinjal (Baingan) hybrid with round / oblong fleshy and borer tolerant, non-spiny calyx.",
    "image": "/products/brinjal_sbjh-21.JPG",
    "duration": "55-60 Days to harvest",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Round / Oblong fleshy",
    "keyFeatures": [
      "Glossy Purple",
      "Borer tolerant, non-spiny calyx"
    ],
    "specs": {
      "Hybrid Name": "sbjh-21",
      "Crop": "Brinjal (Baingan)",
      "Fruit / Harvest Characteristics": "Round / Oblong fleshy",
      "Days to First Picking": "55-60 Days to harvest",
      "Special Traits": "Borer tolerant, non-spiny calyx",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "watermelon-swmh-024",
    "name": "SWMH-024",
    "category": "vegetables",
    "cropType": "Watermelon (Tarbooz)",
    "badge": "12-13% TSS Sweet",
    "tag": "F1 Hybrid Watermelon",
    "description": "High performance Watermelon (Tarbooz) hybrid with deep crimson flesh, 8-10 kg and tough rind, great shipping tolerance.",
    "image": "/products/watermelon_swmh-024.jpg",
    "duration": "75-80 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Deep Crimson Flesh, 8-10 kg",
    "keyFeatures": [
      "12-13% TSS Sweet",
      "Tough rind, great shipping tolerance"
    ],
    "specs": {
      "Hybrid Name": "SWMH-024",
      "Crop": "Watermelon (Tarbooz)",
      "Fruit / Harvest Characteristics": "Deep Crimson Flesh, 8-10 kg",
      "Days to First Picking": "75-80 Days",
      "Special Traits": "Tough rind, great shipping tolerance",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  },
  {
    "id": "watermelon-swmh-033",
    "name": "SWMH-033",
    "category": "vegetables",
    "cropType": "Watermelon (Tarbooz)",
    "badge": "12-13% TSS Sweet",
    "tag": "F1 Hybrid Watermelon",
    "description": "High performance Watermelon (Tarbooz) hybrid with deep crimson flesh, 8-10 kg and tough rind, great shipping tolerance.",
    "image": "/products/watermelon_swmh-033.jpg",
    "duration": "75-80 Days",
    "plantHeight": "Vigorous Plant Habit",
    "grainType": "Deep Crimson Flesh, 8-10 kg",
    "keyFeatures": [
      "12-13% TSS Sweet",
      "Tough rind, great shipping tolerance"
    ],
    "specs": {
      "Hybrid Name": "SWMH-033",
      "Crop": "Watermelon (Tarbooz)",
      "Fruit / Harvest Characteristics": "Deep Crimson Flesh, 8-10 kg",
      "Days to First Picking": "75-80 Days",
      "Special Traits": "Tough rind, great shipping tolerance",
      "Disease Reaction": "High field tolerance to key viruses & wilts",
      "Market Preference": "Excellent consumer appeal and high market price"
    },
    "isPopular": false
  }
];
