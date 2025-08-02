import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    '/hero1.jpg',
    '/hero2.jpg',
    '/hero3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCollection = () => {
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Indian ethnicwear ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          </div>
        ))}
      </div>

      {/* Paisley Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c0-11.046 8.954-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/logo.jpg" 
              alt="Nakashi Designs Logo" 
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 drop-shadow-lg">
              Nakashi Designs
            </h1>
            <p className="text-amber-300 font-light text-lg tracking-wider">DESIGNS BY H&I</p>
          </div>

          {/* Tagline */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-4xl font-serif text-white leading-relaxed mb-6 drop-shadow-lg">
              Celebrating womanhood in all its
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl md:text-3xl font-serif text-amber-300">
              <span className="animate-pulse">grace,</span>
              <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>strength,</span>
              <span className="animate-pulse" style={{ animationDelay: '1s' }}>and beauty</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up">
            <button
              onClick={scrollToCollection}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Explore Our Collection
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-amber-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;