import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getRegionBySlug, getAllRegions } from '../data/regions';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ region: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const regionData = getRegionBySlug(region);

  if (!regionData) {
    return {
      title: 'Region Not Found | PestPro Index',
      description: 'The region you are looking for could not be found.',
    };
  }

  return {
    title: regionData.metaTitle,
    description: regionData.metaDescription,
    alternates: {
      canonical: `https://pestproindex.com/pest-control/${region}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllRegions().map((region) => ({
    region: region.slug,
  }));
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const regionData = getRegionBySlug(region);

  if (!regionData) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Region Not Found</h1>
          <p className="text-gray-600 mb-8">The region you are looking for could not be found.</p>
          <Link href="/pest-control" className="text-blue-600 hover:text-blue-700 font-semibold">
            Back to Regions →
          </Link>
        </div>
      </div>
    );
  }

  // JSON-LD Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://pestproindex.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Regions',
        'item': 'https://pestproindex.com/pest-control'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': regionData.name,
        'item': `https://pestproindex.com/pest-control/${region}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            Pest Control in {regionData.name}
          </h1>
          {regionData.status === 'live' && (
            <div className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-full text-sm mb-6">
              ✓ LIVE
            </div>
          )}
          {regionData.status === 'coming-soon' && (
            <div className="inline-block px-4 py-2 bg-blue-400 text-white font-bold rounded-full text-sm mb-6">
              COMING SOON
            </div>
          )}
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            {regionData.description}
          </p>
        </div>
      </section>

      {/* Cities/Areas Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
            {regionData.status === 'live' ? 'Browse by Area' : 'Planned Coverage'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionData.cities.map((city) => (
              <div
                key={city.slug}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-[3px] border-gray-200 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  {city.status === 'live' && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                      LIVE
                    </span>
                  )}
                  {city.status === 'coming-soon' && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                      SOON
                    </span>
                  )}
                </div>

                {city.providerCount && (
                  <p className="text-sm text-gray-600 mb-4">
                    {city.providerCount} verified providers
                  </p>
                )}

                {city.residentialLink && (
                  <Link
                    href={city.residentialLink}
                    className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Browse Residential Providers →
                  </Link>
                )}

                {city.commercialLink && (
                  <Link
                    href={city.commercialLink}
                    className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm mt-2"
                  >
                    Browse Commercial Providers →
                  </Link>
                )}

                {city.areasLink && (
                  <Link
                    href={city.areasLink}
                    className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Browse by Borough →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            {regionData.status === 'live' 
              ? `Are you a pest control provider in ${regionData.name}?`
              : `Are you a pest control provider in ${regionData.name}?`
            }
          </h2>
          <p className="text-lg mb-12 text-blue-100">
            {regionData.status === 'live'
              ? 'Contact us to get listed on PestPro Index — no lead fees, no commissions, just honest directory listings.'
              : `We're expanding to your area soon. Contact us to get listed when we launch — no lead fees, no commissions.`
            }
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
