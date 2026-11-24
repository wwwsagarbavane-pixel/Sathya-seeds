import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ResearchDevelopment from './components/ResearchDevelopment';
import Products from './components/Products';
import ProductsPage from './components/ProductsPage';
import VisionMission from './components/VisionMission';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'Home' | 'About Us' | 'R&D' | 'Products'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-us' || hash === '#about') return 'About Us';
      if (hash === '#rd' || hash === '#research' || hash === '#rnd') return 'R&D';
      if (hash.startsWith('#product') || hash === '#paddy' || hash === '#cotton' || hash === '#field-crops' || hash === '#vegetables') return 'Products';
    }
    return 'Home';
  });

  const [selectedCrop, setSelectedCrop] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#paddy') return 'Paddy';
      if (hash === '#cotton' || hash === '#bt-cotton') return 'Cotton';
      if (hash === '#maize') return 'Maize';
      if (hash === '#mustard') return 'Mustard';
      if (hash === '#chilli') return 'Chilli';
      if (hash === '#tomato') return 'Tomato';
      if (hash === '#okra') return 'Okra';
    }
    return undefined;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-us' || hash === '#about') {
        setCurrentPage('About Us');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#rd' || hash === '#research' || hash === '#rnd') {
        setCurrentPage('R&D');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#products' || hash.startsWith('#product') || hash === '#paddy' || hash === '#cotton' || hash === '#field-crops' || hash === '#vegetables') {
        setCurrentPage('Products');
        if (hash === '#paddy') setSelectedCrop('Paddy');
        else if (hash === '#cotton' || hash === '#bt-cotton') setSelectedCrop('Cotton');
        else if (hash === '#maize') setSelectedCrop('Maize');
        else if (hash === '#mustard') setSelectedCrop('Mustard');
        else if (hash === '#chilli') setSelectedCrop('Chilli');
        else if (hash === '#tomato') setSelectedCrop('Tomato');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('Home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string, crop?: string) => {
    if (page === 'About Us') {
      setCurrentPage('About Us');
      window.location.hash = '#about-us';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'R&D' || page === 'Research & Development') {
      setCurrentPage('R&D');
      window.location.hash = '#rd';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'Products') {
      setCurrentPage('Products');
      setSelectedCrop(crop);
      window.location.hash = crop ? `#${crop.toLowerCase()}` : '#products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('Home');
      if (page === 'Home') {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#A8F044] selection:text-[#075B19]">
      {/* 1. Header Navigation Bar (Shown on standalone pages like About Us, R&D, and Products) */}
      {currentPage !== 'Home' && (
        <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* 2. Page Routing: About Us | R&D | Products | Landing Page */}
      {currentPage === 'About Us' ? (
        <main className="flex-1 w-full flex flex-col">
          <AboutUs />
        </main>
      ) : currentPage === 'R&D' ? (
        <main className="flex-1 w-full flex flex-col">
          <ResearchDevelopment />
        </main>
      ) : currentPage === 'Products' ? (
        <main className="flex-1 w-full flex flex-col">
          <ProductsPage initialCrop={selectedCrop} onNavigate={handleNavigate} />
        </main>
      ) : (
        <main className="flex-1 w-full flex flex-col">
          <Hero onNavigate={handleNavigate} />
          <Products onNavigate={handleNavigate} />
          <VisionMission />
          <ContactUs />
        </main>
      )}

      {/* 3. Site Footer */}
      <Footer />
    </div>
  );
};

export default App;
