import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ResearchDevelopment from './components/ResearchDevelopment';
import Products from './components/Products';
import VisionMission from './components/VisionMission';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'Home' | 'About Us' | 'R&D'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about-us' || hash === '#about') return 'About Us';
      if (hash === '#rd' || hash === '#research' || hash === '#rnd') return 'R&D';
    }
    return 'Home';
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
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('Home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === 'About Us') {
      setCurrentPage('About Us');
      window.location.hash = '#about-us';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'R&D' || page === 'Research & Development') {
      setCurrentPage('R&D');
      window.location.hash = '#rd';
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
      {/* 1. Header Navigation Bar (Shown on standalone pages like About Us and R&D) */}
      {currentPage !== 'Home' && (
        <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* 2. Page Routing: About Us | R&D | Landing Page */}
      {currentPage === 'About Us' ? (
        <main className="flex-1 w-full flex flex-col">
          <AboutUs />
        </main>
      ) : currentPage === 'R&D' ? (
        <main className="flex-1 w-full flex flex-col">
          <ResearchDevelopment />
        </main>
      ) : (
        <main className="flex-1 w-full flex flex-col">
          <Hero onNavigate={handleNavigate} />
          <Products />
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