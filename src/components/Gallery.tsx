import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Embracing tradition with modern confidence',
      caption: 'Authentic beauty in every thread'
    },
    {
      src: 'https://images.pexels.com/photos/8148579/pexels-photo-8148579.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Strength lies in staying true to yourself',
      caption: 'Unfiltered elegance'
    },
    {
      src: 'https://images.pexels.com/photos/8148578/pexels-photo-8148578.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Grace is not about perfection, but authenticity',
      caption: 'Raw beauty celebrated'
    },
    {
      src: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Every woman carries her own unique story',
      caption: 'Stories woven in silk'
    },
    {
      src: 'https://images.pexels.com/photos/8148581/pexels-photo-8148581.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Beauty blooms when you embrace who you are',
      caption: 'Celebrating individuality'
    },
    {
      src: 'https://images.pexels.com/photos/8148582/pexels-photo-8148582.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      quote: 'Tradition is not about the past, but the future',
      caption: 'Timeless traditions'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
              Raw Beauty Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Celebrating real women in their authentic beauty - no filters, no edits, 
              just pure elegance and strength
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <blockquote className="text-lg font-serif italic mb-2">
                    "{image.quote}"
                  </blockquote>
                  <p className="text-amber-200 text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <div className="text-center bg-gradient-to-r from-emerald-800 to-emerald-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Our Philosophy
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-6">
              We believe that true beauty lies in authenticity. Every photograph in our gallery 
              showcases real women wearing our designs without heavy editing or artificial enhancements. 
              This is our commitment to celebrating natural grace and genuine confidence.
            </p>
            <div className="text-amber-300 font-semibold text-lg">
              #NoFilter #AuthenticBeauty #RealWomen
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <X className="text-white w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].caption}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <blockquote className="text-xl font-serif italic mb-2">
                "{galleryImages[selectedImage].quote}"
              </blockquote>
              <p className="text-amber-200">{galleryImages[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;