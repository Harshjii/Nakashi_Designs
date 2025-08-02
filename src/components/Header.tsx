import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpg" 
              alt="Nakash Designs Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-serif font-bold text-emerald-800">Nakash Designs</h1>
              <p className="text-xs text-emerald-600 font-light">DESIGNS BY H&I</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('collection')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium">
              Collection
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/nakashi_designs" target="_blank" rel="noopener noreferrer" 
               className="text-amber-600 hover:text-amber-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/919876269091" target="_blank" rel="noopener noreferrer"
               className="text-amber-600 hover:text-amber-700 transition-colors">
              <MessageCircle size={20} />
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-emerald-800 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-emerald-100">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection('collection')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium text-left">
                Collection
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-emerald-800 hover:text-amber-600 transition-colors font-medium text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;