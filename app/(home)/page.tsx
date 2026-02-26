// Deployment triggered - 1770229070
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Shield, TrendingUp, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ providers: 805, cities: 6, regions: 5 });
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
        providers: Math.floor(805 * progress),
        cities: Math.floor(6 * progress),
        regions: Math.floor(5 * progress)
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
    'description': 'The UK\'s neutral pest control and pest removal directory. Compare providers with transparent information. No lead fees or commissions.',
    'areaServed': [
      { '@type': 'City', 'name': 'London' },
      { '@type': 'City', 'name': 'Birmingham' },
      { '@type': 'City', 'name': 'Manchester' },
      { '@type': 'City', 'name': 'Liverpool' },
      { '@type': 'City', 'name': 'Leeds' },
      { '@type': 'City', 'name': 'Nottingham' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        {/* Layer 1: Center glow */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        
        {/* Layer 2: Edge vignette */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        
        {/* Layer 3: Bottom darkening */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>PestPro Index</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 tracking-widest">The UK's Neutral Pest Control Directory</p>
          <p className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Find trusted, vetted pest controllers near you. No lead fees. No commissions. No sponsored rankings.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-8" ref={statsRef}>
            <div className="border-b sm:border-b-0 sm:border-r border-white/30 pb-4 sm:pb-0 sm:pr-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.providers}+</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">VERIFIED PROVIDERS</div>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-white/30 pb-4 sm:pb-0 sm:px-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.cities}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">CITIES</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stats.regions}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-widest text-blue-100">UK REGIONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT OUT OF FRUSTRATION */}
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
              Whether you need pest control or pest removal services, we bring available data on professionals across the UK to your fingertips so you can find the right service on your terms. A neutral directory designed for transparency, not transactions.
            </p>
          </div>
        </div>
      </section>

      {/* REGION PICKER SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Find Pest Control in Your Region
            </h2>
            <p className="text-xl text-white/80">
              Browse verified providers across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Greater London */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">Greater London</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">389 providers</p>
              <Link href="/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse London →
              </Link>
            </div>

            {/* West Midlands */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">West Midlands</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">42 providers</p>
              <Link href="/birmingham/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Birmingham →
              </Link>
            </div>

            {/* North West */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">North West</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">207 providers</p>
              <div className="space-y-2">
                <Link href="/manchester/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Manchester →
                </Link>
                <Link href="/liverpool/residential" className="block text-center px-4 py-2.5 border-2 border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-colors text-sm">
                  Browse Liverpool →
                </Link>
              </div>
            </div>

            {/* Yorkshire & the Humber */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">Yorkshire</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">61 providers</p>
              <Link href="/leeds/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Leeds →
              </Link>
            </div>

            {/* East Midlands */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">East Midlands</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">106 providers</p>
              <Link href="/nottingham/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Nottingham →
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <p className="text-center text-white/50 text-sm">
            More regions launching in 2026: South East, South West, East of England, North East, Scotland, Wales, Northern Ireland
          </p>
        </div>
      </section>

      {/* THREE FEATURES */}
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Find Your Pest Control?</h2>
          <p className="text-xl mb-12 text-blue-100">Browse verified providers across the UK. No sign-up required.</p>
          <div className="flex justify-center">
            <Link href="/pest-control/regions" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Browse All Regions →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Browse</h4>
              <ul className="space-y-2">
                <li><Link href="/pest-control/regions" className="hover:text-white transition">Find Pest Control</Link></li>
                <li><Link href="/residential" className="hover:text-white transition">London Residential</Link></li>
                <li><Link href="/commercial" className="hover:text-white transition">London Commercial</Link></li>
                <li><Link href="/birmingham/residential" className="hover:text-white transition">Birmingham Residential</Link></li>
                <li><Link href="/birmingham/commercial" className="hover:text-white transition">Birmingham Commercial</Link></li>
                <li><Link href="/manchester/residential" className="hover:text-white transition">Manchester Residential</Link></li>
                <li><Link href="/manchester/commercial" className="hover:text-white transition">Manchester Commercial</Link></li>
                <li><Link href="/liverpool/residential" className="hover:text-white transition">Liverpool Residential</Link></li>
                <li><Link href="/liverpool/commercial" className="hover:text-white transition">Liverpool Commercial</Link></li>
                <li><Link href="/leeds/residential" className="hover:text-white transition">Leeds Residential</Link></li>
                <li><Link href="/leeds/commercial" className="hover:text-white transition">Leeds Commercial</Link></li>
                <li><Link href="/nottingham/residential" className="hover:text-white transition">Nottingham Residential</Link></li>
                <li><Link href="/nottingham/commercial" className="hover:text-white transition">Nottingham Commercial</Link></li>
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
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/frequently-asked-questions" className="hover:text-white transition">Pest Control FAQ</Link></li>
                <li><Link href="/professionals" className="hover:text-white transition">For Professionals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">About</Link></li>
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
