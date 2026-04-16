import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getAllBoroughs } from './london-boroughs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pest Control London | 389 Verified Providers Across 33 Boroughs | PestPro Index',
  description: 'Find trusted pest control in London. Compare 389 residential and 240 commercial providers across all 33 boroughs. Verified Google ratings, no lead fees, no commissions.',
  alternates: {
    canonical: 'https://pestproindex.com/pest-control/london',
  },
  openGraph: {
    title: 'Pest Control London | 389 Verified Providers Across 33 Boroughs',
    description: 'Find trusted pest control in London. Compare 389 residential and 240 commercial providers across all 33 boroughs. Verified Google ratings, no lead fees, no commissions.',
    url: 'https://pestproindex.com/pest-control/london',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Pest Control London | 389 Verified Providers Across 33 Boroughs',
    description: 'Find trusted pest control in London. Compare 389 residential and 240 commercial providers across all 33 boroughs.',
  },
};

export default function LondonPestControlHubPage() {
  const boroughs = getAllBoroughs();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Pest Control', item: 'https://pestproindex.com/pest-control' },
      { '@type': 'ListItem', position: 3, name: 'London', item: 'https://pestproindex.com/pest-control/london' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pest Control Services in London',
    description: 'Directory of 389 verified residential and 240 commercial pest control providers across all 33 London boroughs.',
    areaServed: { '@type': 'City', name: 'London' },
    url: 'https://pestproindex.com/pest-control/london',
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-32">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)'}}></div>
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.3) 100%)'}}></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4" style={{fontWeight: 900, letterSpacing: '-0.05em'}}>
            Pest Control in London
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 tracking-widest">
            389 verified providers across all 33 London boroughs
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">389</div>
            <div className="text-sm text-gray-600 font-semibold">Residential Providers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">240</div>
            <div className="text-sm text-gray-600 font-semibold">Commercial Providers</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">33</div>
            <div className="text-sm text-gray-600 font-semibold">London Boroughs</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">£0</div>
            <div className="text-sm text-gray-600 font-semibold">Lead Fees</div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Finding Pest Control in London</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            London is one of the most challenging pest environments in the UK. The combination of dense Victorian and Georgian housing, extensive underground infrastructure, a network of canals and rivers, and an enormous food and hospitality industry creates conditions that sustain significant pest populations year-round. Mice, rats, cockroaches, bed bugs, foxes and moths are all commonly reported across the capital, and effective treatment often depends on finding a provider who understands the specific property type, borough and pest involved.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            PestPro Index lists 389 verified residential and 240 commercial pest control providers across all 33 London boroughs, from the financial centre of the City of London to the outer suburbs of Havering, Bromley and Hillingdon. Every provider has been verified against Google ratings and business records, and every listing is free — no lead fees, no commissions, just honest directory data so Londoners can find trusted local providers quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/residential" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
              Browse Residential Providers →
            </Link>
            <Link href="/commercial" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
              Browse Commercial Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Common Pests Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Most Common Pests in London</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mice</h3>
              <p className="text-gray-600 text-sm">The single most reported pest across inner London. Victorian terraces, converted flats and aging brickwork provide countless entry points and nesting sites.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rats</h3>
              <p className="text-gray-600 text-sm">Common along London&apos;s canal and river network, near food businesses and around construction sites. The underground sewer system provides extensive rodent habitat.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cockroaches</h3>
              <p className="text-gray-600 text-sm">Both German and Oriental species are found in older flatted buildings and restaurant areas, particularly in boroughs with shared drainage systems.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bed Bugs</h3>
              <p className="text-gray-600 text-sm">Regularly reported across London&apos;s private rental sector, hotels and short-term rentals. Dense housing and transient populations sustain the spread.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Foxes</h3>
              <p className="text-gray-600 text-sm">London has one of the highest urban fox populations in the world. Well-established across every borough, with particular density in outer suburbs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clothes Moths</h3>
              <p className="text-gray-600 text-sm">Increasingly reported in period properties across Kensington, Chelsea, Hammersmith and other boroughs with large concentrations of natural fibre furnishings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Borough Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">Browse by London Borough</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Select your borough to learn about local pest issues and connect with verified providers in your area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boroughs.map((borough) => (
              <Link key={borough.slug} href={`/pest-control/london/${borough.slug}`}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 cursor-pointer border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{borough.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {borough.intro.substring(0, 120)}...
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
          <h2 className="text-3xl md:text-4xl font-black mb-8">Get Listed on PestPro Index</h2>
          <p className="text-lg mb-12 text-blue-100">
            Are you a pest control provider in London? Every provider is listed free. No lead fees. No commissions. Just honest data.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all">
            Get Listed →
          </Link>
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
