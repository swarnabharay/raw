import React from 'react';
import { Button } from '@/components/ui/button.jsx';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                smebhawan
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#bc1818] transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#bc1818] transition-colors">Prices</a>
              <a href="#" className="text-gray-700 hover:text-[#bc1818] transition-colors">Orders</a>
              <a href="#" className="text-gray-700 hover:text-[#bc1818] transition-colors">About Us</a>
              <a href="#" className="text-[#bc1818] font-medium">Contact</a>
            </nav>
            <div className="flex space-x-3">
              <Button className="bg-[#bc1818] hover:bg-[#bc1818]/90">
                Buy Now
              </Button>
              <Button className="bg-[#bc1818] hover:bg-[#bc1818]/90">
                Login Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-16 bg-[#bc1818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <p className="text-white/90 leading-relaxed text-center">
              At Smebhawan, we specialize in procuring high-quality raw materials and delivering them to SMBs in India and abroad. Our end-to-end supply chain solutions ensure cost efficiency, reliability, and superior product quality for your business.
            </p>
          </div>

          <div className="bg-white/10 text-white rounded-lg p-8 text-center mb-8">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <span className="text-2xl">📞</span>
              <span className="text-lg font-medium">Call Us: </span>
              <a 
                href="tel:+861721900004" 
                className="text-lg font-bold hover:underline"
              >
                +86 172 1900 4
              </a>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 text-center">
            <p className="text-white/90 leading-relaxed text-lg">
              Let's simplify your procurement process—reach out today!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;