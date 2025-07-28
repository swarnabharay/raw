import React from 'react';
import { Button } from '@/components/ui/button.jsx';

function AboutUs() {
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
              <a href="#" className="text-[#bc1818] font-medium">About Us</a>
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

      {/* About Us Content */}
      <section className="py-16 bg-[#bc1818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              We believe in transparency, efficiency, and trust—core principles that drive us to deliver exceptional value to our clients. By optimizing the supply chain, we empower businesses to reduce costs, enhance productivity, and scale confidently.
            </p>
            <p className="text-white/90 leading-relaxed">
              Partner with Smebhawan for a smarter, faster, and more economical procurement experience.
            </p>
          </div>

          <div className="bg-white/10 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-lg mb-6">to discuss how we can support your business growth.</p>
            <div className="flex justify-center items-center space-x-2">
              <span className="text-2xl">📞</span>
              <span className="text-lg font-medium">Phone: </span>
              <a 
                href="tel:+861721900004" 
                className="text-lg font-bold hover:underline"
              >
                +86 172 1900 4
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;