import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Search, Menu, ChevronDown, Star, Users, ShoppingCart, TrendingUp, Globe, Zap } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import Contact from './Contact.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import './App.css';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('buy');
  const [currentPage, setCurrentPage] = useState('home');
  
  const dropdownItems = ['Butamine', 'Secondary TMT', 'Phenol', 'Aluminium Ingot', 'Copper Cathode', 'Methanol', 'PVC'];
  
  if (currentPage === 'about') {
    return <AboutUs />;
  }
  
  if (currentPage === 'contact') {
    return <Contact />;
  }
  
  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                smebhawan
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#bc1818] transition-colors">Prices</a>
              <a href="#" className="text-gray-700 hover:text-[#bc1818] transition-colors">Orders</a>
              <a href="#" onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-[#bc1818] transition-colors">About Us</a>
            </nav>

            {/* Action Buttons */}
            <Button 
              onClick={() => document.getElementById('requirements-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#bc1818] hover:bg-[#bc1818]/90"
            >
              Buy Now
            </Button>
          </div>
        </div>


      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              India's Largest B2B Raw Materials<br />
              Procurement & Credit Platform
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 relative">
              <div className="relative bg-white rounded-lg shadow-lg">
                <input
                  type="text"
                  placeholder="Search for"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className="w-full px-6 py-4 text-gray-900 focus:outline-none rounded-lg pr-32"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#bc1818] hover:bg-[#bc1818]/90 px-6 py-2 rounded-lg">
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
                  {dropdownItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSearchValue(item);
                        setShowDropdown(false);
                      }}
                      className="px-6 py-3 hover:bg-gray-50 cursor-pointer text-gray-900 border-b border-gray-100 last:border-b-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="bg-[#bc1818] text-white px-4 py-2 rounded-full text-sm">Aluminium Ingot</span>
              <span className="bg-[#bc1818] text-white px-4 py-2 rounded-full text-sm">Bitumen</span>
              <span className="bg-[#bc1818] text-white px-4 py-2 rounded-full text-sm">Methanol</span>
              <span className="bg-[#bc1818] text-white px-4 py-2 rounded-full text-sm">PVC</span>
              <span className="bg-[#bc1818] text-white px-4 py-2 rounded-full text-sm">Secondary TMT</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bc1818] mb-2">400K+</div>
                <div className="text-sm text-gray-300">Raw Materials Prices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bc1818] mb-2">1 Million+</div>
                <div className="text-sm text-gray-300">SMEs Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bc1818] mb-2">500K+</div>
                <div className="text-sm text-gray-300">Orders Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#bc1818] mb-2">30+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
            <p className="text-gray-600">Tap to access expertise across supply chains. Get Quotations, Prices, and Latest News Instantly</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Steel', color: 'bg-orange-100 border-orange-200', icon: '🏗️' },
              { name: 'Non Ferrous', color: 'bg-pink-100 border-pink-200', icon: '⚡' },
              { name: 'Polymers', color: 'bg-purple-100 border-purple-200', icon: '🧪' },
              { name: 'Chemicals', color: 'bg-green-100 border-green-200', icon: '⚗️' },
              { name: 'Energy', color: 'bg-blue-100 border-blue-200', icon: '🔋' },
              { name: 'Construction', color: 'bg-yellow-100 border-yellow-200', icon: '🏢' },
              { name: 'Agri', color: 'bg-green-100 border-green-200', icon: '🌾' },
              { name: 'Fashion', color: 'bg-pink-100 border-pink-200', icon: '👗' }
            ].map((category, index) => (
              <div key={index} className={`${category.color} border-2 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <button className="text-[#bc1818] text-sm font-medium hover:underline">View All</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Delivering value to our ecosystem of buyers, suppliers and channel partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Buy & Sell With Us', desc: 'One stop solution for your raw material sourcing and selling needs', icon: ShoppingCart, color: 'bg-[#bc1818]' },
              { title: 'Raw Materials Prices', desc: 'Get live prices for the raw materials you deal in', icon: TrendingUp, color: 'bg-[#bc1818]' },
              { title: 'Raw Materials News', desc: 'Get daily raw material news & insights live from the ground', icon: Globe, color: 'bg-[#bc1818]' },
              { title: 'Grow With Credit', desc: 'Get access to credit for manufacturers and contractors', icon: Star, color: 'bg-[#bc1818]' },
              { title: 'Industry Digital First', desc: 'Transparency on your orders, live tracking & more with our app and web', icon: Zap, color: 'bg-[#bc1818]' }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                <button className="text-[#bc1818] text-sm font-medium hover:underline">Know More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#bc1818] to-[#8b1414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Why Buyers Choose Us</h2>
            
            <div className="flex justify-center mb-8">
              <div className="flex bg-white/10 rounded-lg p-1">
                <button className="bg-[#bc1818] text-white px-6 py-2 rounded-md">Buyer</button>
                <button className="text-white px-6 py-2">Supplier</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Get Lowest Price', desc: 'Get rates at least 1% lower than the existing market rates', icon: '💰' },
              { title: 'Get Credit', desc: 'Do not worry about working capital. Grow with our credit', icon: '💳' },
              { title: 'Pan India & Global', desc: 'World-class fulfillment for domestic and international markets', icon: '🌍' },
              { title: 'Multi Brand SKUs', desc: 'One stop shop for 3L+ SKU from multiple brands', icon: '📦' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About smebhawan Group</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We are India's leading B2B Raw Materials procurement and credit platform, dedicated to revolutionising the SME sector. 
              As a dynamic player in over 7 supply chains, including Steel, Aluminium, Agriculture, Petroleum, Energy, Polymers, 
              Chemicals & more, we aim to add value to the SMEs by providing cheap and high quality raw materials, and access to credit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Aggregator', desc: 'Enabling buyers and supplier ecosystem to supply the best raw materials across the globe', image: '🏭' },
              { title: 'Manufacturer', desc: '30+ world class manufacturing & processing plants in Steel, Aluminium, Energy, Chemicals, Agri & more', image: '⚙️' },
              { title: 'Importer & Exporter', desc: 'One of the India\'s Largest Importers & Exporters', image: '🚢' },
              { title: 'SaaS & AI', desc: 'Innovations with industry first SME B2B SaaS offering from Arjun AI and many more', image: '🤖' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "As Managing Director of a renewable materials supplier company serving Indian Railways, solar industry, and commercial sectors, we encountered shipment delays, working capital shortages, and high raw material costs. smebhawan streamlined procurement, reduced working capital cycles, and helped us cut interest costs significantly.",
                author: "Mr. Sajal Gupta",
                role: "Managing Director"
              },
              {
                quote: "In our mission to deliver distinctive design capabilities for commercial spaces, our interior design company often grapples with the challenges of volatile raw material prices and extended lead times. smebhawan has been a transformative partner.",
                author: "Mr Rahul Bansal",
                role: "Interior Design Company"
              },
              {
                quote: "We aim to electrify India with our cost effective Solar Power solutions, but it is easier said than done. We consistently grapple with the challenge of working capital shortages. smebhawan emerged as a crucial ally.",
                author: "Mr Ankit Garg",
                role: "Solar Power Solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#bc1818] fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="requirements-form" className="py-16 bg-[#bc1818] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Tell Us Your Requirements</h2>
          <p className="text-xl mb-8">Best Rates | Working Capital | Delivery Anywhere</p>
          
          <div className="bg-white rounded-lg p-8 text-left">
            <div className="flex justify-center mb-6">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setActiveTab('buy')}
                  className={`px-6 py-2 rounded-md ${activeTab === 'buy' ? 'bg-[#bc1818] text-white' : 'text-gray-600'}`}
                >
                  Buy
                </button>
                <button 
                  onClick={() => setActiveTab('sell')}
                  className={`px-6 py-2 rounded-md ${activeTab === 'sell' ? 'bg-[#bc1818] text-white' : 'text-gray-600'}`}
                >
                  Sell
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Product</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc1818]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc1818]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc1818]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc1818]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bc1818]" rows="3"></textarea>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <Button className="bg-[#bc1818] hover:bg-[#bc1818]/90 px-8 py-3 text-lg">
                {activeTab === 'buy' ? 'Buy' : 'Sell'}
              </Button>
              <Button 
                onClick={() => window.open('tel:8617219004', '_self')}
                className="bg-[#bc1818] hover:bg-[#bc1818]/90 px-8 py-3 text-lg"
              >
                Contact Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">smebhawan</div>
              <p className="text-gray-400">India's Largest B2B Raw Materials Procurement & Credit Platform</p>
              <p className="text-gray-400 mt-2">GST No: 19EUOPR2679A1Z3</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#bc1818]">Steel</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Non Ferrous</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Polymers</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Chemicals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#bc1818]">Buy & Sell</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Prices</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">News</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Credit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" onClick={() => setCurrentPage('about')} className="hover:text-[#bc1818]">About Us</a></li>
                <li><a href="#" onClick={() => setCurrentPage('contact')} className="hover:text-[#bc1818]">Contact</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Careers</a></li>
                <li><a href="#" onClick={() => setCurrentPage('privacy')} className="hover:text-[#bc1818]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#bc1818]">Investor relations</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 smebhawan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

