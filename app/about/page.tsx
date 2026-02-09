'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Shield, Eye, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

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
            <Link href="/" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-[#1e3a8a] text-white">Home</Link>
            <Link href="/residential" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Residential</Link>
            <Link href="/commercial" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Commercial</Link>
            <Link href="/professionals" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">For Pest Professionals</Link>
            <Link href="/products" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Home Products</Link>
            <Link href="/commercial-products" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Commercial Products</Link>
            <Link href="/about" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">About</Link>
            <Link href="/contact" className="px-6 py-2.5 font-medium text-base border-2 border-white/40 rounded-xl transition-all duration-200 bg-transparent text-white hover:border-white/60 hover:bg-white/10">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
              Built Out of Frustration.<br />Designed for Clarity.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow">
              We believe finding pest control should be straightforward — and so should running a pest control business.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR STORY */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 animate-fade-in-up">Our Story</h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p>
              We've all been there. You've got a problem — whether it's mice in the kitchen or a wasp nest in the eaves — and you need help. So you turn to one of those aggregation sites.
            </p>
            
            <p>
              What follows is an avalanche. Calls from numbers you don't recognise. Providers you've never heard of pitching hard. And through it all, one nagging question: <em>is this actually the right provider for my problem, or just the one who paid to be first in the queue?</em>
            </p>
            
            <p>
              That uncertainty didn't sit right with us. So we built something different.
            </p>
            
            <p className="text-xl font-semibold text-gray-900 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              PestPro Index is a neutral directory. No lead fees. No commissions. No pay-per-enquiry. Every provider gets listed — enhanced listings get extra visibility, but the data speaks for itself. Reviews, certifications, service areas, specialisms — organised so you can make your own informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MORE THAN A DIRECTORY */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 animate-fade-in-up">More Than a Directory</h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p>
              As we dug deeper into the pest control industry, we noticed something else.
            </p>
            
            <p>
              Commercial businesses and pest control professionals vary massively in size. Some have dedicated teams monitoring compliance, maintaining health and safety records, tracking certifications and training for audit purposes. But many don't have that luxury — they're owner-operators, small teams, stretched thin.
            </p>
            
            <p>
              For them, getting the pest control done isn't the hard part. It's the paperwork. The compliance evidence. The audit trail. The CPD tracking.
            </p>
            
            <p className="text-xl font-semibold text-gray-900">
              They just want to focus on their business.
            </p>
            
            <p>
              That's the second part of what PestPro Index is about: making the housekeeping easier so commercial businesses and pest professionals can spend less time on admin and more time doing what they do best.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE OFFER TODAY */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-gray-900 animate-fade-in-up">What We Offer Today</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* For Homeowners */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-8 text-white">
                <h3 className="text-2xl font-bold">For Homeowners</h3>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  A searchable directory of 389 London pest control providers. Filter by pest type, location, certifications, reviews, and more. Plus curated product recommendations if you prefer DIY.
                </p>
                <Link href="/residential" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* For Commercial Businesses */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-8 text-white">
                <h3 className="text-2xl font-bold">For Commercial Businesses</h3>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  240 providers with commercial-specific filters — contract options, multi-site capabilities, industry specialisms. Compliance resources to help you meet regulatory requirements.
                </p>
                <Link href="/commercial" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* For Pest Professionals */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-[#2563eb] to-[#1e40af] p-8 text-white">
                <h3 className="text-2xl font-bold">For Pest Professionals</h3>
              </div>
              <div className="bg-white p-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Free listings to reach more customers. Enhanced visibility options. No lead fees eating into your margins.
                </p>
                <Link href="/professionals" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT'S COMING */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 animate-fade-in-up">What's Coming</h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            We're building tools to make compliance simpler:
          </p>
          
          <div className="space-y-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Compliance Hub */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">Compliance Hub</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Digital audit trails, certification alerts, insurance document storage, and one-click compliance reports for commercial businesses.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Continuing Education */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">Continuing Education</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    CPD-accredited training to help pest professionals maintain their certifications without the admin headache.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            These are coming soon. If you'd like early access, <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800 underline">get in touch</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 5: OUR PRINCIPLES */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-gray-900 animate-fade-in-up">Our Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Neutral */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Neutral</h3>
              <p className="text-gray-700 leading-relaxed">
                Rankings based on data, not payment.
              </p>
            </div>

            {/* Transparent */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent</h3>
              <p className="text-gray-700 leading-relaxed">
                Real reviews, verified certifications, no hidden agendas.
              </p>
            </div>

            {/* London-focused */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">London-focused</h3>
              <p className="text-gray-700 leading-relaxed">
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
                <li><Link href="/residential" className="hover:text-white transition">Find Providers</Link></li>
                <li><Link href="/products" className="hover:text-white transition">DIY Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/commercial" className="hover:text-white transition">Find Providers</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white transition">Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/professionals" className="hover:text-white transition">Get Listed</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
