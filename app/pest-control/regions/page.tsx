import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllRegions } from '../data/regions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Pest Control Directory by Region | PestPro Index',
  description: 'Browse pest control providers across all UK regions. Currently covering Greater London and West Midlands with more regions launching soon. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/pest-control/regions',
  },
};

export default function RegionsIndexPage() {
  const regions = getAllRegions();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        {/* Layer 1: Center glow */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        
        {/* Layer 2: Edge vignette */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        
        {/* Layer 3: Bottom darkening */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>
            Pest Control Across the UK
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
            PestPro Index is building the UK's most comprehensive neutral pest control directory. Browse by region to find verified providers near you.
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/pest-control/${region.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border-[3px] border-gray-200 hover:border-blue-400 transition-all duration-300 h-full hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                      {region.name}
                    </h2>
                    {region.status === 'live' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        LIVE
                      </span>
                    )}
                    {region.status === 'coming-soon' && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full">
                        SOON
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {region.description}
                  </p>

                  {region.status === 'live' && (
                    <div className="text-sm text-gray-700 mb-4">
                      <strong>{region.cities.filter(c => c.status === 'live').length}</strong> live areas
                    </div>
                  )}

                  <div className="text-blue-600 font-bold group-hover:translate-x-2 transition-transform inline-block">
                    {region.status === 'live' ? 'Browse Providers' : 'Learn More'} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Are you a pest control provider?
          </h2>
          <p className="text-lg mb-12 text-blue-100">
            Get listed on PestPro Index — no lead fees, no commissions, just honest directory listings. We're expanding across the UK.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all"
          >
            Get Listed →
          </Link>
        </div>
      </section>
    </div>
  );
}
