
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Hospitals from './components/Hospitals';
import HealthTips from './components/HealthTips';
import AppDownload from './components/AppDownload';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#00BFA6] selection:text-white">
      <Header scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="features" className="bg-[#F9F9F9] py-20 px-4">
          <Features />
        </section>

        <section id="hospitals" className="py-20 px-4">
          <Hospitals />
        </section>

        <section id="tips" className="bg-gradient-to-br from-[#0072C6]/5 to-[#00BFA6]/5 py-20 px-4">
          <HealthTips />
        </section>

        <section id="download" className="py-20 px-4">
          <AppDownload />
        </section>

        <section id="testimonials" className="bg-[#F9F9F9] py-20 px-4">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
