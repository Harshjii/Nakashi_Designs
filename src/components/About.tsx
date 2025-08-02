import React from 'react';
import { Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Where tradition meets authenticity, and every thread tells a story of grace
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-emerald-800 mb-6">
                Authenticity in Every Stitch
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Nakashi Designs, we believe in the raw, unfiltered beauty of Indian craftsmanship. 
                Our journey began with a simple vision: to celebrate the authentic spirit of womanhood 
                through handcrafted clothing that speaks to the soul.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece in our collection is a testament to the skilled artisans who pour their 
                heart into creating timeless designs. We embrace the imperfections that make each 
                garment unique, just like the women who wear them.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our philosophy is simple: real beauty lies in authenticity. That's why you'll never 
                find heavily edited or filtered representations of our designs. What you see is what 
                you get – pure, honest, and beautifully crafted ethnicwear.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="text-emerald-800 w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-emerald-800">Handcrafted</h4>
                    <p className="text-sm text-gray-600">With Love</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="text-emerald-800 w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-emerald-800">Authentic</h4>
                    <p className="text-sm text-gray-600">Designs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="text-emerald-800 w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-emerald-800">For Every</h4>
                    <p className="text-sm text-gray-600">Woman</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/Kurti.jpg"
                  alt="Artisan crafting traditional Indian clothing"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full opacity-10"></div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-12">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-emerald-800 mb-6">
              "True beauty is not about perfection, it's about embracing your authentic self 
              and letting your inner strength shine through."
            </blockquote>
            <cite className="text-amber-600 font-semibold text-lg">- Nakashi Designs Philosophy</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;