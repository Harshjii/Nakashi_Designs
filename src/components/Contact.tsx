import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}. You can reach me at ${formData.email}`;
    window.open(`https://wa.me/919876269091?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Ready to embrace your authentic beauty? Let's create something beautiful together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif font-bold text-emerald-800 mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We'd love to hear from you! Whether you're looking for a custom design, 
                  have questions about our collection, or simply want to share your story, 
                  we're here to listen.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href="https://wa.me/919876269091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">WhatsApp</h4>
                    <p className="text-emerald-600">+91 98762 69091</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/nakashi_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Instagram</h4>
                    <p className="text-emerald-600">@nakashi_designs</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Shipping</h4>
                    <p className="text-emerald-600">Pan India Delivery</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-800 mb-4">Business Hours</h4>
                <div className="space-y-2 text-emerald-700">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-emerald-800 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-emerald-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-emerald-800 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements, questions, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-emerald-100 text-center">
                <p className="text-sm text-emerald-600">
                  Your message will be forwarded to our WhatsApp for faster response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;