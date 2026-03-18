// Deployment triggered - 1770229070
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Shield, TrendingUp, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation';
import { createClient } from '@/utils/supabase';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ providers: 0, cities: 18, regions: 12 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [providerTarget, setProviderTarget] = useState(0);

  // Fetch live provider count on mount
  useEffect(() => {
    const fetchProviderCount = async () => {
      const supabase = createClient();
      const { count } = await supabase
        .from('Providers')
        .select('*', { count: 'exact', head: true })
        .eq('active', true);
      const roundedCount = Math.floor((count ?? 0) / 10) * 10;
      setProviderTarget(roundedCount);
    };
    fetchProviderCount();
  }, []);

  // Animate stats on scroll
  useEffect(() => {
    if (providerTarget === 0) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateStats(providerTarget);
      }
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, providerTarget]);

  const animateStats = (target: number) => {
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        providers: Math.floor(target * progress),
        cities: Math.floor(18 * progress),
        regions: Math.floor(12 * progress)
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
      { '@type': 'City', 'name': 'Nottingham' },
      { '@type': 'City', 'name': 'Brighton' },
      { '@type': 'City', 'name': 'Sheffield' },
      { '@type': 'City', 'name': 'Bristol' },
      { '@type': 'City', 'name': 'Glasgow' },
      { '@type': 'City', 'name': 'Bradford' },
      { '@type': 'City', 'name': 'Newcastle' },
      { '@type': 'City', 'name': 'Cardiff' },
      { '@type': 'City', 'name': 'Edinburgh' },
      { '@type': 'City', 'name': 'Leicester' },
      { '@type': 'City', 'name': 'Coventry' },
      { '@type': 'City', 'name': 'Belfast' },
      { '@type': 'AdministrativeArea', 'name': 'Hampshire' }
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
              <div className="space-y-2">
                <Link href="/birmingham/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Birmingham →
                </Link>
                <Link href="/coventry/residential" className="block text-center px-4 py-2.5 border-2 border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-colors text-sm">
                  Browse Coventry →
                </Link>
              </div>
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
              <div className="space-y-2">
                <Link href="/leeds/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Leeds →
                </Link>
                <Link href="/bradford/residential" className="block text-center px-4 py-2.5 border-2 border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-colors text-sm">
                  Browse Bradford →
                </Link>
              </div>
            </div>

            {/* East Midlands */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">East Midlands</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">106 providers</p>
              <div className="space-y-2">
                <Link href="/nottingham/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Nottingham →
                </Link>
                <Link href="/leicester/residential" className="block text-center px-4 py-2.5 border-2 border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-colors text-sm">
                  Browse Leicester →
                </Link>
              </div>
            </div>

            {/* South East */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">South East</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">172 providers</p>
              <div className="space-y-2">
                <Link href="/brighton/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Brighton →
                </Link>
                <Link href="/hampshire/residential" className="block text-center px-4 py-2.5 border-2 border-amber-500/60 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold rounded-lg transition-colors text-sm">
                  Browse Hampshire →
                </Link>
              </div>
            </div>

            {/* South Yorkshire */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">South Yorkshire</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">53 providers</p>
              <Link href="/sheffield/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Sheffield →
              </Link>
            </div>

            {/* South West */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">South West</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">43 providers</p>
              <Link href="/bristol/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Bristol →
              </Link>
            </div>

            {/* Scotland */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">Scotland</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">60+ providers</p>
              <div className="space-y-2">
                <Link href="/glasgow/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Glasgow →
                </Link>
                <Link href="/edinburgh/residential" className="block text-center px-4 py-3 bg-amber-500/80 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                  Browse Edinburgh →
                </Link>
              </div>
            </div>

            {/* North East */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">North East</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">53 providers</p>
              <Link href="/newcastle/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Newcastle →
              </Link>
            </div>

            {/* Wales */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">Wales</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">38 providers</p>
              <Link href="/cardiff/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Cardiff →
              </Link>
            </div>

            {/* Northern Ireland */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-[3px] border-amber-500/60 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-black text-white">Northern Ireland</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">23 providers</p>
              <Link href="/belfast/residential" className="block text-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-colors">
                Browse Belfast →
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <p className="text-center text-white/50 text-sm">
            More regions launching in 2026: East of England
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

      {/* PEST CONTROL GUIDES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Pest Control Guides</h2>
            <p className="text-xl text-gray-600">Free, expert advice to help you tackle common pest problems</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/guides/how-to-get-rid-of-rats" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Rats</h3>
              <p className="text-gray-600">The complete UK guide to identifying, treating, and preventing rat infestations in your home and garden.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-mice" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Mice</h3>
              <p className="text-gray-600">The complete UK guide to spotting, treating, and preventing mouse infestations in your home.</p>
            </Link>
            <Link href="/best/rat-traps" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Rat Traps UK 2026</h3>
              <p className="text-gray-600">Our pick of the most effective rat traps available in the UK — snap traps, electronic, humane, and budget options.</p>
            </Link>
            <Link href="/best/mouse-traps" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Mouse Traps UK 2026</h3>
              <p className="text-gray-600">Snap traps, humane live-catch options, and bait stations — reviewed with honest pros, cons, and buying advice.</p>
            </Link>
            <Link href="/guides/wasp-nest-removal" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Wasp Nest Removal</h3>
              <p className="text-gray-600">How to identify wasp nests, whether to remove them yourself or call a professional, and UK costs.</p>
            </Link>
            <Link href="/best/wasp-killers" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Wasp Killers UK 2026</h3>
              <p className="text-gray-600">Sprays, powders, and traps — the best wasp control products reviewed with honest pros and cons.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-bed-bugs" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Bed Bugs</h3>
              <p className="text-gray-600">Signs of infestation, DIY treatment options, professional heat treatment, costs, and prevention tips.</p>
            </Link>
            <Link href="/best/bed-bug-treatments" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Bed Bug Treatments UK 2026</h3>
              <p className="text-gray-600">Sprays, powders, mattress encasements, and monitoring traps — reviewed with expert buying guidance.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-cockroaches" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Cockroaches</h3>
              <p className="text-gray-600">Species identification, signs of infestation, DIY treatments, professional solutions, and cockroach-proofing your home.</p>
            </Link>
            <Link href="/best/cockroach-killers" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Cockroach Killers UK 2026</h3>
              <p className="text-gray-600">Gel baits, sprays, powders, and monitoring traps — the best cockroach control products reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-fleas" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Fleas</h3>
              <p className="text-gray-600">Signs of infestation, treating pets and your home, professional options, and long-term prevention.</p>
            </Link>
            <Link href="/best/flea-treatments" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Flea Treatments UK 2026</h3>
              <p className="text-gray-600">Household sprays, powders, foggers, and natural options — reviewed with honest pros and cons.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-ants" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Ants</h3>
              <p className="text-gray-600">Species identification, DIY bait methods, flying ants, and when to call a professional.</p>
            </Link>
            <Link href="/best/ant-killers" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Ant Killers UK 2026</h3>
              <p className="text-gray-600">Bait stations, gel baits, powders and sprays — the best ant killer products reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-squirrels" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Squirrels</h3>
              <p className="text-gray-600">Grey squirrel identification, loft proofing, humane deterrents, UK law, and when to call a professional.</p>
            </Link>
            <Link href="/best/squirrel-deterrents" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Squirrel Deterrents UK 2026</h3>
              <p className="text-gray-600">Squirrel-proof bird feeders, repellent sprays, baffles, and humane traps reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-foxes" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Foxes</h3>
              <p className="text-gray-600">Urban fox behaviour, garden proofing, humane deterrents, UK law, and when to call a professional.</p>
            </Link>
            <Link href="/best/fox-deterrents" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Fox Deterrents UK 2026</h3>
              <p className="text-gray-600">Ultrasonic repellers, scent deterrents, motion-activated sprinklers, and garden fencing reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-silverfish" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Silverfish</h3>
              <p className="text-gray-600">Identification, humidity control, DIY treatments, professional options, and long-term prevention for UK homes.</p>
            </Link>
            <Link href="/best/silverfish-treatments" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Silverfish Treatments UK 2026</h3>
              <p className="text-gray-600">Diatomaceous earth, killer sprays, traps, dehumidifiers, and insecticidal powders reviewed.</p>
            </Link>
            <Link href="/guides/woodworm-treatment" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Woodworm Treatment</h3>
              <p className="text-gray-600">Identification, active vs inactive infestations, DIY treatments, professional solutions, and property survey advice.</p>
            </Link>
            <Link href="/best/woodworm-treatments" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Woodworm Treatments UK 2026</h3>
              <p className="text-gray-600">Permethrin fluids, boron gels, spray treatments, injection kits, and moisture meters reviewed.</p>
            </Link>
            <Link href="/guides/carpet-beetle-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Carpet Beetle Control</h3>
              <p className="text-gray-600">Identification, larvae damage, DIY treatments, professional solutions, and prevention strategies for UK homes.</p>
            </Link>
            <Link href="/best/carpet-beetle-treatments" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Carpet Beetle Treatments UK 2026</h3>
              <p className="text-gray-600">Insecticidal sprays, pheromone traps, killer powders, treatment kits, and cedar repellents reviewed.</p>
            </Link>
            <Link href="/guides/pigeon-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Pigeon Control</h3>
              <p className="text-gray-600">Bird deterrent methods, proofing, netting, spikes, legal considerations, and when to call a professional.</p>
            </Link>
            <Link href="/best/bird-deterrents" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Bird Deterrents UK 2026</h3>
              <p className="text-gray-600">Bird spikes, netting, optical gel, and more — the best pigeon and bird deterrents reviewed.</p>
            </Link>
            <Link href="/guides/how-to-get-rid-of-moths" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">How to Get Rid of Moths</h3>
              <p className="text-gray-600">Clothes moths vs pantry moths, DIY treatments, pheromone traps, professional fumigation, and prevention tips.</p>
            </Link>
            <Link href="/best/moth-killers" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Moth Killers UK 2026</h3>
              <p className="text-gray-600">Hanging killers, pheromone traps, carpet sprays, sachets, and budget options reviewed.</p>
            </Link>
            <Link href="/guides/commercial-pest-control" className="group block p-8 bg-white rounded-2xl border border-purple-300 hover:shadow-lg hover:border-purple-400 ring-1 ring-purple-100 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Commercial Pest Control Hub</h3>
              <p className="text-gray-600">Guides for restaurants, offices, hotels, and warehouses — compliance, equipment reviews, and finding commercial providers.</p>
            </Link>
            <Link href="/guides/restaurant-pest-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Restaurant Pest Control</h3>
              <p className="text-gray-600">Legal requirements, EHO inspections, HACCP compliance, and setting up a pest management programme for your food business.</p>
            </Link>
            <Link href="/guides/warehouse-pest-management" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Warehouse Pest Management</h3>
              <p className="text-gray-600">BRC compliance, stock protection, monitoring systems, and integrated pest management for warehouses.</p>
            </Link>
            <Link href="/best/commercial-fly-killers" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Commercial Fly Killers UK 2026</h3>
              <p className="text-gray-600">UV zappers, glue board units, and LED models for restaurants, kitchens, and food businesses reviewed.</p>
            </Link>
            <Link href="/best/commercial-rodent-bait-stations" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Commercial Bait Stations UK 2026</h3>
              <p className="text-gray-600">Tamper-resistant lockable bait stations for warehouses, restaurants, and commercial premises reviewed.</p>
            </Link>
            <Link href="/guides/hotel-pest-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Hotel Pest Control</h3>
              <p className="text-gray-600">Bed bug management, guest complaint handling, reputation protection, and ongoing monitoring for hotels and B&Bs.</p>
            </Link>
            <Link href="/best/commercial-insect-monitors" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Commercial Insect Monitors UK 2026</h3>
              <p className="text-gray-600">Bed bug interceptors, glue traps, and insect monitoring devices for hotels and commercial premises reviewed.</p>
            </Link>
            <Link href="/best/commercial-bird-proofing" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-amber-600 mb-2">Product Review</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Best Commercial Bird Proofing UK 2026</h3>
              <p className="text-gray-600">Heavy-duty netting, stainless steel spikes, bird wire systems, optical gel, and solar panel mesh for commercial premises.</p>
            </Link>
            <Link href="/guides/office-pest-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Office Pest Control</h3>
              <p className="text-gray-600">Common office pests, legal obligations for employers, prevention strategies, and cost-effective solutions.</p>
            </Link>
            <Link href="/guides/landlord-pest-control" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-sm font-semibold text-purple-600 mb-2">Commercial</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Landlord Pest Control</h3>
              <p className="text-gray-600">Legal duties, tenant vs landlord responsibilities, HMO compliance, prevention strategies, and Awaab's Law implications.</p>
            </Link>
            <Link href="/guides/pest-control-costs" className="group block p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-amber-200 transition-all">
              <div className="text-sm font-semibold text-green-600 mb-2">Price Guide</div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">Pest Control Costs UK 2026</h3>
              <p className="text-gray-600">Complete pricing breakdown for every common pest — rats, mice, wasps, bed bugs, cockroaches, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FIND PEST SPECIALISTS */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 border-t-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Find Pest Specialists by City</h2>
            <p className="text-lg text-gray-600">Browse providers who specialise in specific pests near you</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <Link href="/pest-control/london/rats" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🐀 Rat Control London</Link>
            <Link href="/pest-control/london/bed-bugs" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🛏️ Bed Bugs London</Link>
            <Link href="/pest-control/birmingham/mice" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🐁 Mouse Control Birmingham</Link>
            <Link href="/pest-control/manchester/wasps" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🐝 Wasp Removal Manchester</Link>
            <Link href="/pest-control/glasgow/rats" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🐀 Rat Control Glasgow</Link>
            <Link href="/pest-control/leeds/cockroaches" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🪳 Cockroach Control Leeds</Link>
            <Link href="/pest-control/bristol/fleas" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🦟 Flea Treatment Bristol</Link>
            <Link href="/pest-control/edinburgh/pigeons" className="px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm text-gray-800 text-center">🐦 Pigeon Control Edinburgh</Link>
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
                <li><Link href="/brighton/residential" className="hover:text-white transition">Brighton Residential</Link></li>
                <li><Link href="/brighton/commercial" className="hover:text-white transition">Brighton Commercial</Link></li>
                <li><Link href="/sheffield/residential" className="hover:text-white transition">Sheffield Residential</Link></li>
                <li><Link href="/sheffield/commercial" className="hover:text-white transition">Sheffield Commercial</Link></li>
                <li><Link href="/bristol/residential" className="hover:text-white transition">Bristol Residential</Link></li>
                <li><Link href="/bristol/commercial" className="hover:text-white transition">Bristol Commercial</Link></li>
                <li><Link href="/glasgow/residential" className="hover:text-white transition">Glasgow Residential</Link></li>
                <li><Link href="/glasgow/commercial" className="hover:text-white transition">Glasgow Commercial</Link></li>
                <li><Link href="/bradford/residential" className="hover:text-white transition">Bradford Residential</Link></li>
                <li><Link href="/bradford/commercial" className="hover:text-white transition">Bradford Commercial</Link></li>
                <li><Link href="/newcastle/residential" className="hover:text-white transition">Newcastle Residential</Link></li>
                <li><Link href="/newcastle/commercial" className="hover:text-white transition">Newcastle Commercial</Link></li>
                <li><Link href="/cardiff/residential" className="hover:text-white transition">Cardiff Residential</Link></li>
                <li><Link href="/cardiff/commercial" className="hover:text-white transition">Cardiff Commercial</Link></li>
                <li><Link href="/edinburgh/residential" className="hover:text-white transition">Edinburgh Residential</Link></li>
                <li><Link href="/edinburgh/commercial" className="hover:text-white transition">Edinburgh Commercial</Link></li>
                <li><Link href="/leicester/residential" className="hover:text-white transition">Leicester Residential</Link></li>
                <li><Link href="/leicester/commercial" className="hover:text-white transition">Leicester Commercial</Link></li>
                <li><Link href="/hampshire/residential" className="hover:text-white transition">Hampshire Residential</Link></li>
                <li><Link href="/hampshire/commercial" className="hover:text-white transition">Hampshire Commercial</Link></li>
                <li><Link href="/coventry/residential" className="hover:text-white transition">Coventry Residential</Link></li>
                <li><Link href="/coventry/commercial" className="hover:text-white transition">Coventry Commercial</Link></li>
                <li><Link href="/belfast/residential" className="hover:text-white transition">Belfast Residential</Link></li>
                <li><Link href="/belfast/commercial" className="hover:text-white transition">Belfast Commercial</Link></li>
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
                <li><Link href="/guides/how-to-get-rid-of-rats" className="hover:text-white transition">How to Get Rid of Rats</Link></li>
                <li><Link href="/best/rat-traps" className="hover:text-white transition">Best Rat Traps UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-mice" className="hover:text-white transition">How to Get Rid of Mice</Link></li>
                <li><Link href="/best/mouse-traps" className="hover:text-white transition">Best Mouse Traps UK</Link></li>
                <li><Link href="/guides/wasp-nest-removal" className="hover:text-white transition">Wasp Nest Removal</Link></li>
                <li><Link href="/best/wasp-killers" className="hover:text-white transition">Best Wasp Killers UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-bed-bugs" className="hover:text-white transition">How to Get Rid of Bed Bugs</Link></li>
                <li><Link href="/best/bed-bug-treatments" className="hover:text-white transition">Best Bed Bug Treatments UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-cockroaches" className="hover:text-white transition">How to Get Rid of Cockroaches</Link></li>
                <li><Link href="/best/cockroach-killers" className="hover:text-white transition">Best Cockroach Killers UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-fleas" className="hover:text-white transition">How to Get Rid of Fleas</Link></li>
                <li><Link href="/best/flea-treatments" className="hover:text-white transition">Best Flea Treatments UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-ants" className="hover:text-white transition">How to Get Rid of Ants</Link></li>
                <li><Link href="/best/ant-killers" className="hover:text-white transition">Best Ant Killers UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-squirrels" className="hover:text-white transition">How to Get Rid of Squirrels</Link></li>
                <li><Link href="/best/squirrel-deterrents" className="hover:text-white transition">Best Squirrel Deterrents UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-foxes" className="hover:text-white transition">How to Get Rid of Foxes</Link></li>
                <li><Link href="/best/fox-deterrents" className="hover:text-white transition">Best Fox Deterrents UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-silverfish" className="hover:text-white transition">How to Get Rid of Silverfish</Link></li>
                <li><Link href="/best/silverfish-treatments" className="hover:text-white transition">Best Silverfish Treatments UK</Link></li>
                <li><Link href="/guides/woodworm-treatment" className="hover:text-white transition">Woodworm Treatment Guide</Link></li>
                <li><Link href="/best/woodworm-treatments" className="hover:text-white transition">Best Woodworm Treatments UK</Link></li>
                <li><Link href="/guides/carpet-beetle-control" className="hover:text-white transition">Carpet Beetle Control Guide</Link></li>
                <li><Link href="/best/carpet-beetle-treatments" className="hover:text-white transition">Best Carpet Beetle Treatments UK</Link></li>
                <li><Link href="/guides/pigeon-control" className="hover:text-white transition">Pigeon Control Guide</Link></li>
                <li><Link href="/best/bird-deterrents" className="hover:text-white transition">Best Bird Deterrents UK</Link></li>
                <li><Link href="/guides/how-to-get-rid-of-moths" className="hover:text-white transition">How to Get Rid of Moths</Link></li>
                <li><Link href="/best/moth-killers" className="hover:text-white transition">Best Moth Killers UK</Link></li>
                <li><Link href="/guides/commercial-pest-control" className="hover:text-white transition">Commercial Pest Control</Link></li>
                <li><Link href="/guides/restaurant-pest-control" className="hover:text-white transition">Restaurant Pest Control</Link></li>
                <li><Link href="/best/commercial-fly-killers" className="hover:text-white transition">Best Commercial Fly Killers</Link></li>
                <li><Link href="/guides/warehouse-pest-management" className="hover:text-white transition">Warehouse Pest Management</Link></li>
                <li><Link href="/best/commercial-rodent-bait-stations" className="hover:text-white transition">Best Commercial Bait Stations</Link></li>
                <li><Link href="/guides/hotel-pest-control" className="hover:text-white transition">Hotel Pest Control</Link></li>
                <li><Link href="/guides/office-pest-control" className="hover:text-white transition">Office Pest Control</Link></li>
                <li><Link href="/guides/landlord-pest-control" className="hover:text-white transition">Landlord Pest Control</Link></li>
                <li><Link href="/best/commercial-insect-monitors" className="hover:text-white transition">Best Commercial Insect Monitors</Link></li>
                <li><Link href="/best/commercial-bird-proofing" className="hover:text-white transition">Best Commercial Bird Proofing</Link></li>
                <li><Link href="/guides/pest-control-costs" className="hover:text-white transition">Pest Control Costs UK</Link></li>
                <li><Link href="/guides" className="hover:text-white transition">All Guides &amp; Reviews</Link></li>
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
          <div className="border-t border-gray-800 pt-8 mt-12">
            <h4 className="text-white font-bold mb-4 text-center">Sister Sites</h4>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="https://taxbandcheck.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">TaxBandCheck &mdash; Free Council Tax Band Checker</a></li>
              <li><a href="https://findakitchen.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">FindAKitchen &mdash; Temporary Kitchen Hire UK</a></li>
              <li><a href="https://stampdutyback.co.uk" target="_blank" rel="noopener nofollow" className="hover:text-white transition">StampDutyBack &mdash; Stamp Duty Refund Calculator</a></li>
            </ul>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p>&copy; 2026 PestPro Index. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
