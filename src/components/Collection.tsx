import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collection = () => {
  const categories = [
    {
      name: 'Formal Suits',
      image: '/Formals.jpg',
      description: 'Timeless elegance in every drape'
    },
    {
      name: 'Casuals',
      image: '/Casual suits.jpg',
      description: 'Royal grandeur for special occasions'
    },
    {
      name: 'Suits',
      image: '/Suits.jpg',
      description: 'Contemporary comfort with traditional charm'
    },
    {
      name: 'Kurtis',
      image: '/Kurti.jpg',
      description: 'Versatile pieces for everyday elegance'
    },
    {
      name: 'Custom Orders',
      image: '/hero2.jpg',
      description: 'Bespoke designs crafted just for you'
    }
  ];

  const handleShopNow = (category: string) => {
    // In a real app, this would navigate to the category page
    window.open('https://wa.me/919876269091?text=Hi! I\'m interested in your ' + category + ' collection.', '_blank');
  };

  return (
    <section id="collection" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
              Our Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated range of authentic Indian ethnicwear, 
              each piece telling its own story of tradition and craftsmanship
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{category.name}</h3>
                  <p className="text-amber-200 mb-4 opacity-90">{category.description}</p>
                  
                  <button
                    onClick={() => handleShopNow(category.name)}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-emerald-900 px-6 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-400/20 to-yellow-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Shipping Info */}
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-4">
              Shipping Pan India
            </h3>
            <p className="text-emerald-700 text-lg mb-4">
              We deliver our authentic designs across India with care and precision
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">5-7</div>
                <div className="text-emerald-700">Business Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">Free</div>
                <div className="text-emerald-700">Above ₹2999</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-emerald-700">Secure Packaging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;