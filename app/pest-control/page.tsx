import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllBoroughs } from './borough-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pest Control by London Borough',
  description: 'Find pest control providers across all 33 London boroughs. Compare 391 residential and 240 commercial providers. No lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/pest-control',
  },
  openGraph: {
    title: 'Pest Control by London Borough',
    description: 'Find pest control providers across all 33 London boroughs. Compare 391 residential and 240 commercial providers. No lead fees, no commissions.',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pest Control by London Borough',
    description: 'Find pest control providers across all 33 London boroughs. Compare 391 residential and 240 commercial providers. No lead fees, no commissions.',
  },
};

export default function BoroughIndexPage() {
  const boroughs = getAllBoroughs();

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
            Pest Control by London Borough
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 tracking-widest">
            Find pest control providers in your London borough
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Find pest control providers in your London borough. Select your area below to learn about local pest issues and connect with verified providers.
          </p>
        </div>
      </section>

      {/* Borough Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boroughs.map((borough) => (
              <Link key={borough.slug} href={`/pest-control/${borough.slug}`}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{borough.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {borough.intro.substring(0, 100)}...
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                    View Borough →
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
          <h2 className="text-3xl md:text-4xl font-black mb-8">Find a Pest Control Provider</h2>
          <p className="text-lg mb-12 text-blue-100">
            Every provider is listed free. No lead fees. No commissions. Just data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/residential" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
              Browse Residential Providers →
            </Link>
            <Link href="/commercial" className="px-8 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-all border-2 border-white">
              Browse Commercial Providers →
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
