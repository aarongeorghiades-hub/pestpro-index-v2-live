import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getBoroughBySlug, getAllBoroughs } from '../borough-data';
import { getRegionBySlug, getAllRegions } from '../data/regions';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if it's a region first
  const region = getRegionBySlug(slug);
  if (region) {
    return {
      title: region.metaTitle,
      description: region.metaDescription,
      alternates: {
        canonical: `https://pestproindex.com/pest-control/${slug}`,
      },
    };
  }
  
  // Otherwise check if it's a borough
  const borough = getBoroughBySlug(slug);
  if (borough) {
    return {
      title: `Pest Control ${borough.name} | Compare Local Providers`,
      description: `Compare pest control and pest removal providers in ${borough.name}, London. View ratings, certifications and services. No lead fees or commissions.`,
      alternates: {
        canonical: `https://pestproindex.com/pest-control/${slug}`,
      },
    };
  }

  return {
    title: 'Page Not Found | PestPro Index',
    description: 'The page you are looking for could not be found.',
  };
}

export async function generateStaticParams() {
  const boroughs = getAllBoroughs().map((borough) => ({
    slug: borough.slug,
  }));
  
  const regions = getAllRegions().map((region) => ({
    slug: region.slug,
  }));
  
  return [...boroughs, ...regions];
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  
  // Check if it's a region first
  const region = getRegionBySlug(slug);
  if (region) {
    // Render region page
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
          'name': region.name,
          'item': `https://pestproindex.com/pest-control/${slug}`
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
              Pest Control in {region.name}
            </h1>
            {region.status === 'live' && (
              <div className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-full text-sm mb-6">
                ✓ LIVE
              </div>
            )}
            {region.status === 'coming-soon' && (
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
              {region.description}
            </p>
          </div>
        </section>

        {/* Cities/Areas Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
              {region.status === 'live' ? 'Browse by Area' : 'Planned Coverage'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.cities.map((city) => (
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
              {region.status === 'live' 
                ? `Are you a pest control provider in ${region.name}?`
                : `Are you a pest control provider in ${region.name}?`
              }
            </h2>
            <p className="text-lg mb-12 text-blue-100">
              {region.status === 'live'
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
  
  // Otherwise check if it's a borough
  const borough = getBoroughBySlug(slug);
  if (borough) {
    // Render borough page (existing logic)
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
              Pest Control in {borough.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 tracking-widest">
              Find trusted pest control and pest removal services serving {borough.name} and surrounding areas
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              {borough.intro}
            </p>
          </div>
        </section>

        {/* Common Pests Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              Common Pests in {borough.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {borough.commonPests}
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b-2 border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">389</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Residential Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">240</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Commercial Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">274</div>
                <div className="text-sm md:text-base text-gray-600 font-semibold">Providers with Reviews</div>
              </div>
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

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
              About Pest Control in {borough.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {borough.aboutSection}
            </p>
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

  // Not found
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for could not be found.</p>
        <Link href="/pest-control" className="text-blue-600 hover:text-blue-700 font-semibold">
          Back to Regions →
        </Link>
      </div>
    </div>
  );
}
