'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AlertCircle, Building2, Bell, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/for-pest-professionals', label: 'For Pest Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const enquiryCategories = [
    {
      icon: AlertCircle,
      title: 'Report an Issue',
      description: 'Notice incorrect information or a broken link? Let us know and we\'ll fix it.',
      email: 'mailto:pestproindex@zohomail.eu?subject=Issue%20Report',
    },
    {
      icon: Building2,
      title: 'Provider Enquiries',
      description: 'Want to create your listing, become a Featured Provider, or appear in Provider of the Week?',
      email: 'mailto:pestproindex@zohomail.eu?subject=Provider%20Enquiry',
    },
    {
      icon: Bell,
      title: 'Stay Updated',
      description: 'Get notified when we launch our Compliance Hub and CPD training offering for pest control companies, as well as our pest control audit/compliance packs for commercial users of pest control. All designed to allow you to focus on your business rather than admin headaches.',
      email: 'mailto:pestproindex@zohomail.eu?subject=Stay%20Updated',
    },
    {
      icon: MessageSquare,
      title: 'General Enquiries',
      description: 'Anything else? We\'d love to hear from you.',
      email: 'mailto:pestproindex@zohomail.eu?subject=General%20Enquiry',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION - EXACT MATCH TO HOMEPAGE */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#050812] via-[#1e3a8a] to-[#050812] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo-header.png" 
              alt="PestPro Index Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>

          {/* NAVIGATION - ALL TABS SAME BORDER */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Home</Link>
            <Link href="/residential" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Residential</Link>
            <Link href="/commercial" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Commercial</Link>
            <Link href="/professionals" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">For Pest Professionals</Link>
            <Link href="/products" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Home Products</Link>
            <Link href="/commercial-products" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Commercial Products</Link>
            <Link href="/about" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">About</Link>
            <Link href="/contact" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-[#1e3a8a] text-white">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#050812] via-[#1e3a8a] to-[#050812] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg" style={{textShadow: '0 4px 6px rgba(0,0,0,0.3)'}}>
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-semibold drop-shadow" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
            Whether you've spotted an issue, want to create your listing, or just want to say hello - we're here to help.
          </p>
        </div>
      </section>

      {/* ENQUIRY CATEGORIES */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {enquiryCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <a
                  key={index}
                  href={category.email}
                  className="group bg-white rounded-xl border-2 border-blue-200 p-8 shadow-md hover:border-blue-500 hover:shadow-2xl hover:bg-blue-50 hover:-translate-y-2 transition-all duration-300 cursor-pointer transform"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {category.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIRECT EMAIL DISPLAY */}
      <section className="py-16 bg-blue-50 border-t-2 border-blue-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 mb-4">Or email us directly at:</p>
          <a
            href="mailto:pestproindex@zohomail.eu"
            className="inline-block text-2xl font-bold text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            pestproindex@zohomail.eu
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Find Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/residential" className="hover:text-white transition">Residential Pest Control</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">Commercial Pest Control</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition">Home Products</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white transition">Commercial Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/for-pest-professionals" className="hover:text-white transition">For Pest Professionals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
