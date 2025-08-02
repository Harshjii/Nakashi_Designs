import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo.jpg" 
                  alt="Nakashi Designs Logo" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold">Nakashi Designs</h3>
                  <p className="text-amber-300 font-light">DESIGNS BY H&I</p>
                </div>
              </div>
              <p className="text-emerald-200 leading-relaxed mb-6 max-w-md">
                Celebrating womanhood through authentic, handcrafted Indian ethnicwear. 
                Every piece tells a story of grace, strength, and timeless beauty.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/nakashi_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-amber-400 hover:to-yellow-500 transition-colors group"
                >
                  <Instagram className="text-emerald-800 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/919876269091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-amber-400 hover:to-yellow-500 transition-colors group"
                >
                  <MessageCircle className="text-emerald-800 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-serif font-bold mb-6 text-amber-300">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('collection')}
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Collection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-xl font-serif font-bold mb-6 text-amber-300">Collections</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.me/919876269091?text=Hi! I'm interested in your Sarees collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Sarees
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876269091?text=Hi! I'm interested in your Lehengas collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Lehengas
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876269091?text=Hi! I'm interested in your Suits collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Suits
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876269091?text=Hi! I'm interested in your Kurtis collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Kurtis
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876269091?text=Hi! I'm interested in custom orders."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-amber-300 transition-colors"
                  >
                    Custom Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-emerald-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-emerald-200 text-sm">
                © 2024 Nakashi Designs. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-emerald-200 text-sm">
                <span>Made with</span>
                <Heart className="text-amber-400 w-4 h-4 fill-current" />
                <span>for authentic beauty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;