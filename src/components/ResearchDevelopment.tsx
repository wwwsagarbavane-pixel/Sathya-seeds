import React from 'react';
import { Microscope, Target, FlaskConical, Leaf } from 'lucide-react';

export const ResearchDevelopment: React.FC = () => {
  return (
    <div className="w-full bg-white select-none">
      
      {/* 1. R&D Hero Banner with Micropipette Artwork */}
      <section className="relative w-full aspect-[2172/724] min-h-[260px] xs:min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] overflow-hidden bg-slate-100 flex items-center">
        <img
          src="/rd/rd-hero-banner.png"
          alt="Research and Development Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Floating Text Overlay */}
        <div className="relative max-w-[1920px] mx-auto px-4 xs:px-6 sm:px-12 lg:px-20 w-full z-10">
          <div className="max-w-2xl text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0A3A17] tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]">
              Research &amp;<br />
              <span className="text-[#087C19]">Development</span>
            </h1>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-slate-700 font-bold mt-1.5 sm:mt-3 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)] max-w-lg">
              Driving Seed Innovation for Higher Yields and Farmer Prosperity
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#087C19] rounded-full inline-block" />
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#087C19] tracking-tight">
              Research &amp; Development
            </h2>
            <span className="w-8 sm:w-12 h-[2.5px] bg-[#087C19] rounded-full inline-block" />
          </div>
          <div className="flex justify-center mt-2 text-[#087C19]">
            <Leaf className="w-6 h-6 fill-current stroke-none" />
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-[15px] lg:text-[15.5px] text-slate-700 leading-relaxed font-normal">
            The company maintains a comprehensive 50-acre Research and Development facility located at Jonam Chunduru village, Chowdavaram panchayat, Guntur rural mandal, Guntur District. Equipped with advanced irrigation networks and modern imported laboratory instrumentation, the center supports biotechnology, seed testing, and controlled greenhouse screening. Led by a team of experienced breeders, pathologists, and technical specialists, our in-house R&amp;D is recognized by the Department of Scientific and Industrial Research (DSIR), Ministry of Science &amp; Technology, Government of India.
          </p>
        </div>

        {/* 3. Alternating Rows Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          
          {/* Row 1: Building Photo (Left) + Focus on Research (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Building Image Card (High-Res Generated 16:9) */}
            <div className="lg:col-span-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[#D8F3C5] shadow-[0_12px_36px_rgba(8,124,25,0.08)] bg-white group hover:shadow-[0_16px_45px_rgba(8,124,25,0.15)] transition-all duration-300">
              <img
                src="/rd/building.jpg"
                alt="Research and Development Infrastructure"
                className="w-full h-full aspect-[16/9] object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Right: Focus on Research Card */}
            <div className="lg:col-span-6 bg-[#F6FCF2] rounded-[24px] sm:rounded-[28px] border border-[#DCF4CE] p-6 sm:p-8 lg:p-9 text-left shadow-sm">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#087C19] flex items-center justify-center text-white shadow-md shadow-[#087C19]/20 flex-shrink-0">
                  <Microscope className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-2xl sm:text-[26px] font-black text-[#0A3A17] tracking-tight">
                  Focus on Research
                </h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                Our breeding objectives prioritize farmer requirements, actively gathering field feedback to align hybridization programs with market needs. Facilities are fully equipped for breeding, net-house screening, pest and disease evaluation, as well as drought and salinity tolerance testing alongside cold foundation seed storage. Germplasm accessions are meticulously documented, continuously preserved, and systematically evaluated for productive hybrid development.
              </p>
            </div>

          </div>

          {/* Row 2: Technology Scope (Left) + Cotton Field Trials Photo (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Technology Text Card */}
            <div className="lg:col-span-6 bg-[#F6FCF2] rounded-[24px] sm:rounded-[28px] border border-[#DCF4CE] p-6 sm:p-8 lg:p-9 text-left shadow-sm order-2 lg:order-1">
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                With rapid technological advancements across agriculture, active research and genetic development are essential. Our breeding initiatives focus on high-value and performance-critical crops including hybrid cotton and sunflower. Concurrently, rigorous parent material purification and broad-spectrum germplasm collection reinforce our scientific base, driving the continuous release of superior commercial hybrids with high market acceptability.
              </p>
            </div>

            {/* Right: Cotton Field Trials Image (High-Res Generated 16:9) */}
            <div className="lg:col-span-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[#D8F3C5] shadow-[0_12px_36px_rgba(8,124,25,0.08)] bg-white group hover:shadow-[0_16px_45px_rgba(8,124,25,0.15)] transition-all duration-300 order-1 lg:order-2">
              <img
                src="/rd/cotton-trials.jpg"
                alt="Cotton Hybrid Trials Field"
                className="w-full h-full aspect-[16/9] object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

          </div>

          {/* Row 3: Objective Callout Bar */}
          <div className="bg-[#EBF8E3] border border-[#CDEFC0] rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-6 text-left shadow-sm">
            <div className="flex items-center gap-3.5 flex-shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#087C19] text-white flex items-center justify-center shadow-md shadow-[#087C19]/25 flex-shrink-0">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0A3A17] tracking-tight">
                Objective
              </h3>
            </div>
            
            <div className="hidden sm:block w-[1.5px] h-10 bg-[#087C19]/20 flex-shrink-0" />

            <p className="text-xs sm:text-sm lg:text-[14px] text-slate-800 font-medium leading-relaxed">
              Continuous enhancement of our commercial product portfolio, hybrid performance characteristics, and adaptability to meet evolving agro-climatic demands and market competition.
            </p>
          </div>

          {/* Row 4: Greenhouse Photo (Right on desktop, top on mobile) + Policy's */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Greenhouse Facility Photo (High-Res Generated 16:9) */}
            <div className="lg:col-span-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[#D8F3C5] shadow-[0_12px_36px_rgba(8,124,25,0.08)] bg-white group hover:shadow-[0_16px_45px_rgba(8,124,25,0.15)] transition-all duration-300 order-1 lg:order-2">
              <img
                src="/rd/greenhouse.jpg"
                alt="Modern Greenhouse Polyhouse Facility"
                className="w-full h-full aspect-[16/9] object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Policy List */}
            <div className="lg:col-span-6 text-left order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-[#087C19] tracking-tight">
                  Policy&apos;s
                </h3>
                <Leaf className="w-5 h-5 text-[#087C19] fill-current stroke-none" />
              </div>

              <div className="space-y-3.5 sm:space-y-5">
                {[
                  {
                    num: 1,
                    text: "Seed is the foundational input for agricultural success. We are committed to supplying superior-quality hybrid seeds engineered for high yields, reliability, and farmer satisfaction."
                  },
                  {
                    num: 2,
                    text: "Systematic international and indigenous germplasm collection to support dynamic, multi-environment breeding programs."
                  },
                  {
                    num: 3,
                    text: "Progressive genetic improvement to ensure hybrid resilience against biotic and abiotic environmental stresses."
                  },
                  {
                    num: 4,
                    text: "Deployment of cutting-edge biotechnology, rigorous testing methodologies, and high breeding standards across all research activities."
                  }
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3 sm:gap-4">
                    <span className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-[#087C19] text-white font-extrabold text-[11px] xs:text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      {item.num}
                    </span>
                    <p className="text-xs sm:text-sm lg:text-[14px] text-slate-700 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Row 5: Biotech Lab Photo (Left) + Biotechnology Lab Text (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Biotech Lab Photo (High-Res Generated 16:9) */}
            <div className="lg:col-span-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[#D8F3C5] shadow-[0_12px_36px_rgba(8,124,25,0.08)] bg-white group hover:shadow-[0_16px_45px_rgba(8,124,25,0.15)] transition-all duration-300">
              <img
                src="/rd/biotech-lab.jpg"
                alt="Biotechnology Laboratory"
                className="w-full h-full aspect-[16/9] object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Right: Biotechnology Lab Description Card */}
            <div className="lg:col-span-6 bg-[#F6FCF2] rounded-[24px] sm:rounded-[28px] border border-[#DCF4CE] p-6 sm:p-8 lg:p-9 text-left shadow-sm">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#087C19] flex items-center justify-center text-white shadow-md shadow-[#087C19]/20 flex-shrink-0">
                  <FlaskConical className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-2xl sm:text-[26px] font-black text-[#0A3A17] tracking-tight">
                  Biotechnology Lab
                </h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-700 leading-relaxed font-normal">
                Our modern Biotechnology Laboratory is equipped with specialized instrumentation supporting marker-assisted breeding and molecular diagnostics. Supported by a skilled team of researchers, the facility conducts advanced genetic characterization, hybrid purity verification, and high-throughput diagnostic screenings like ELISA and molecular testing for transgenic traits.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ResearchDevelopment;