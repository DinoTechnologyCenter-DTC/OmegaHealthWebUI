
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { FEATURES } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features', hasDropdown: true },
    { name: 'Hospitals', href: '#hospitals' },
    { name: 'Tips', href: '#tips' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-[#0072C6] p-2 rounded-lg shadow-sm">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-[#0072C6]' : 'text-slate-900'}`}>
            Omega Health
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.hasDropdown && setFeaturesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setFeaturesOpen(false)}
              ref={link.hasDropdown ? dropdownRef : null}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                  scrolled ? 'text-slate-600 hover:text-[#0072C6]' : 'text-slate-800 hover:text-[#0072C6]'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
                )}
              </a>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 transform ${
                    featuresOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 w-[500px]">
                    {FEATURES.map((feature) => (
                      <a 
                        key={feature.id} 
                        href={`#features`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        <div className="bg-slate-50 p-2 rounded-lg group-hover/item:bg-white transition-colors">
                          {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{feature.title}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">{feature.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="bg-[#FFC107] text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e6ae06] transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Download App
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 bg-slate-100 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 px-6 py-8 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-50">
              <div 
                className="flex justify-between items-center py-4"
                onClick={() => link.hasDropdown ? setMobileFeaturesOpen(!mobileFeaturesOpen) : setMobileMenuOpen(false)}
              >
                <a
                  href={link.hasDropdown ? undefined : link.href}
                  className="text-lg font-bold text-slate-800"
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} />
                )}
              </div>
              
              {link.hasDropdown && mobileFeaturesOpen && (
                <div className="pb-4 grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-top-2">
                  {FEATURES.map((feature) => (
                    <a 
                      key={feature.id} 
                      href="#features"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 active:bg-slate-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                       <div className="p-1.5 bg-white rounded-lg shadow-sm">
                        {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-4 h-4' })}
                      </div>
                      <span className="text-sm font-semibold text-slate-600">{feature.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-[#FFC107] text-slate-900 px-6 py-4 rounded-2xl font-bold text-center mt-6 shadow-lg">
            Download Alpha Health App
          </button>
          <div className="mt-auto py-8 text-center">
            <p className="text-slate-400 text-sm">© 2026 Alpha Health</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
