// Deployment triggered - 1770229070
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Shield, TrendingUp, Home as HomeIcon, Building2, Users } from 'lucide-react'
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ residential: 391, commercial: 240, reviews: 274 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateStats();
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        residential: Math.floor(391 * progress),
        commercial: Math.floor(240 * progress),
        reviews: Math.floor(274 * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'PestPro Index',
    'url': 'https://pestproindex.com',
    'description': 'UK pest control provider directory. Compare providers with transparent information. No lead fees or commissions.',
    'areaServed': [
      { '@type': 'City', 'name': 'London' },
      { '@type': 'City', 'name': 'Birmingham' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />

      {/* SECTION 2: HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        {/* Layer 1: MUCH BRIGHTER center glow */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        
        {/* Layer 2: MUCH DARKER edge vignette */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        
        {/* Layer 3: Additional darkening at very edges */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>PestPro Index</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 tracking-widest">London's Neutral Pest Control & Pest Removal Directory</p>
          <p className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Find the right pest control or pest removal service for your home or business. Filter by location, pest type, certifications, reviews and other criteria specific to your pest problem. No endorsements, just data.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-8" ref={statsRef}>
            <div className="border-b sm:border-b-0 sm:border-r border-white/30 pb-4 sm:pb-0 sm:pr-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.residential}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">RESIDENTIAL PROVIDERS</div>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-white/30 pb-4 sm:pb-0 sm:px-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.commercial}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">COMMERCIAL PROVIDERS</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.reviews}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">VERIFIED REVIEWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE CATEGORY CARDS (Two-tone design) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Residential */}
            <Link href="/residential" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Residential Pest Control</h3>
                <p className="text-gray-700 mb-6">Find pest professionals and DIY pest products for your home</p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Browse 391 providers →
                </div>
              </div>
            </Link>

            {/* Card 2: Commercial */}
            <Link href="/commercial" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-12 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Commercial Pest Control</h3>
                <p className="text-gray-700 mb-6">Find pest professionals, DIY pest products, and compliance services for your business</p>
                <div className="flex items-center text-amber-600 font-bold group-hover:translate-x-2 transition-transform">
                  Browse 240 providers →
                </div>
              </div>
            </Link>

            {/* Card 3: Professionals */}
            <Link href="/professionals" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Pest Professionals</h3>
                <p className="text-gray-700 mb-6">Customer exposure and compliance services for PestPros</p>
                <div className="flex items-center text-green-600 font-bold group-hover:translate-x-2 transition-transform">
                  Explore Services →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: BUILT OUT OF FRUSTRATION */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 text-center">
            Built Out of Frustration.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Designed for Clarity.</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              We believe finding pest control should be straightforward — and so should running a pest control business.
            </p>

            <p>
              We've all been there. You've got a problem — whether it's mice in the kitchen or a wasp nest in the eaves — and you need help. So you turn to one of those aggregation sites.
            </p>

            <p>
              What follows is an avalanche. Calls from numbers you don't recognise. Providers you've never heard of pitching hard. And through it all, one nagging question: <em>is this actually the right provider for my problem, or just the one who paid to be first in the queue?</em>
            </p>

            <p>
              That uncertainty didn't sit right with us. So we built something different.
            </p>

            <p className="text-xl font-semibold text-gray-900 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
              PestPro Index is a neutral directory. No lead fees. No commissions. No pay-per-enquiry. Every provider gets listed — enhanced listings get extra visibility, but the data speaks for itself. Reviews, certifications, service areas, specialisms — organised so you can make your own informed decision.
            </p>

            <p>
              We bring available data on pest control professionals to your fingertips so you can find pest control on your terms. A neutral directory designed for transparency, not transactions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: THREE FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Search & Filter</h3>
              <p className="text-gray-600">Filter by pest type, service features, and certifications to find the right match</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Provider-Stated Info</h3>
              <p className="text-gray-600">All information comes directly from providers - we don't judge outcomes</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Make Informed Decisions</h3>
              <p className="text-gray-600">Contact providers directly - no booking fees, no commissions, no bias</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Find Your Pest Control?</h2>
          <p className="text-xl mb-12 text-blue-100">Start browsing our neutral directory today. No sign-up required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/residential" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Browse Residential →
            </Link>
            <Link href="/commercial" className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all border-2 border-white">
              Browse Commercial →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Browse</h4>
              <ul className="space-y-2">
                <li><Link href="/residential" className="hover:text-white transition">Residential</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">Commercial</Link></li>
                <li><Link href="/professionals" className="hover:text-white transition">For Professionals</Link></li>
                <li><Link href="/pest-control" className="hover:text-white transition">By Borough</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="hover:text-white transition">Home Products</Link></li>
                <li><Link href="/commercial-products" className="hover:text-white transition">Commercial Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">

                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="hover:text-white transition">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
