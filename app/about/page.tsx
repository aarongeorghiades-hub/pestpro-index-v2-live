'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Eye, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/professionals', label: 'For Pest Professionals' },
    { href: '/products', label: 'Home Products' },
    { href: '/commercial-products', label: 'Commercial Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-[#0f172a] shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-header.png" alt="PestPro Index" className="h-12" />
            <span className="text-xl font-black text-white">PestPro Index</span>
          </Link>
          <div className="hidden md:flex gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-2 rounded-full font-semibold bg-[#1e3a8a] text-white hover:bg-blue-800 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Built Out of Frustration.<br />Designed for Clarity.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            We believe finding pest control should be straightforward — and so should running a pest control business.
          </p>
        </div>
      </section>

      {/* SECTION 1: OUR STORY */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We've all been there. You've got a problem — whether it's mice in the kitchen or a wasp nest in the eaves — and you need help. So you turn to one of those aggregation sites.
            </p>
            
            <p>
              What follows is an avalanche. Calls from numbers you don't recognise. Providers you've never heard of pitching hard. And through it all, one nagging question: <em>is this actually the right provider for my problem, or just the one who paid to be first in the queue?</em>
            </p>
            
            <p>
              That uncertainty didn't sit right with us. So we built something different.
            </p>
            
            <p className="font-semibold text-gray-900">
              PestPro Index is a neutral directory. No lead fees. No commissions. No pay-per-enquiry. Every provider gets listed — enhanced listings get extra visibility, but the data speaks for itself. Reviews, certifications, service areas, specialisms — organised so you can make your own informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MORE THAN A DIRECTORY */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">More Than a Directory</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              As we dug deeper into the pest control industry, we noticed something else.
            </p>
            
            <p>
              Commercial businesses and pest control professionals vary massively in size. Some have dedicated teams monitoring compliance, maintaining health and safety records, tracking certifications and training for audit purposes. But many don't have that luxury — they're owner-operators, small teams, stretched thin.
            </p>
            
            <p>
              For them, getting the pest control done isn't the hard part. It's the paperwork. The compliance evidence. The audit trail. The CPD tracking.
            </p>
            
            <p className="font-semibold text-gray-900">
              They just want to focus on their business.
            </p>
            
            <p>
              That's the second part of what PestPro Index is about: making the housekeeping easier so commercial businesses and pest professionals can spend less time on admin and more time doing what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE OFFER TODAY */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">What We Offer Today</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* For Homeowners */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Homeowners</h3>
              <p className="text-gray-700 leading-relaxed">
                A searchable directory of 481 London pest control providers. Filter by pest type, location, certifications, reviews, and more. Plus curated product recommendations if you prefer DIY.
              </p>
              <Link href="/residential" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6">
                Explore <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Commercial Businesses */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Commercial Businesses</h3>
              <p className="text-gray-700 leading-relaxed">
                457 providers with commercial-specific filters — contract options, multi-site capabilities, industry specialisms. Compliance resources to help you meet regulatory requirements.
              </p>
              <Link href="/commercial" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6">
                Explore <ArrowRight size={16} />
              </Link>
            </div>

            {/* For Pest Professionals */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Pest Professionals</h3>
              <p className="text-gray-700 leading-relaxed">
                Free listings to reach more customers. Enhanced visibility options. No lead fees eating into your margins.
              </p>
              <Link href="/professionals" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 mt-6">
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S COMING */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">What's Coming</h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We're building tools to make compliance simpler:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Hub</h3>
              <p className="text-gray-700">
                Digital audit trails, certification alerts, insurance document storage, and one-click compliance reports for commercial businesses.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuing Education</h3>
              <p className="text-gray-700">
                CPD-accredited training to help pest professionals maintain their certifications without the admin headache.
              </p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700">
            These are coming soon. If you'd like early access, <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">get in touch</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 5: OUR PRINCIPLES */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Our Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Neutral */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Neutral</h3>
              <p className="text-gray-700">
                Rankings based on data, not payment.
              </p>
            </div>

            {/* Transparent */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent</h3>
              <p className="text-gray-700">
                Real reviews, verified certifications, no hidden agendas.
              </p>
            </div>

            {/* London-focused */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">London-focused</h3>
              <p className="text-gray-700">
                We know this market. Depth over breadth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">For Homeowners</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/residential" className="hover:text-white">Find Providers</Link></li>
                <li><Link href="/products" className="hover:text-white">DIY Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/commercial" className="hover:text-white">Find Providers</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white">Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/professionals" className="hover:text-white">Get Listed</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
