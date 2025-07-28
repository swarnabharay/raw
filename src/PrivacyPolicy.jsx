import React from 'react';
import { Button } from '@/components/ui/button.jsx';

function PrivacyPolicy() {
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
              <a href="#" className="text-[#bc1818] font-medium">Privacy Policy</a>
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

      {/* Privacy Policy Content */}
      <section className="py-16 bg-[#bc1818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <p className="text-white/90 leading-relaxed mb-6">
              At Smebhawan, we are committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal and business-related information in compliance with applicable data protection laws.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-white/90 leading-relaxed mb-4">We may collect the following types of information to facilitate our services:</p>
            <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
              <li>Business Contact Details</li>
              <li>Transaction Data</li>
              <li>Website Usage Data</li>
              <li>Communications</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/90 leading-relaxed mb-4">Your data is used solely for legitimate business purposes, including:</p>
            <ul className="text-white/90 leading-relaxed list-disc list-inside space-y-2">
              <li>Providing procurement and supply chain services</li>
              <li>Processing orders and ensuring timely delivery</li>
              <li>Improving customer support and communication</li>
              <li>Enhancing our website and service offerings</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Security & Confidentiality</h2>
            <p className="text-white/90 leading-relaxed">
              We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure. Access to sensitive data is restricted to authorized personnel only.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-white/90 leading-relaxed mb-4">You have the right to:</p>
            <p className="text-white/90 leading-relaxed mb-4">Access, correct, or delete your personal data.</p>
            <p className="text-white/90 leading-relaxed">To exercise these rights, contact us at +91 8617219004</p>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
            <p className="text-white/90 leading-relaxed">
              We may revise this policy periodically. The latest version will always be posted on our website with the effective date.
            </p>
          </div>

          <div className="bg-white/10 text-white rounded-lg p-8 text-center">
            <p className="text-lg mb-6">For questions or concerns regarding your privacy, please contact:</p>
            <div className="flex justify-center items-center space-x-2">
              <span className="text-2xl">📞</span>
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

export default PrivacyPolicy;