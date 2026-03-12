import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { createClient } from '@/utils/supabase';
import { sheffieldBoroughs } from '@/app/pest-control/sheffield/sheffield-boroughs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pest Control Sheffield | Find Local Experts | PestPro Index',
  description:
    'Find trusted pest control companies in Sheffield. Browse residential and commercial services across all Sheffield districts including Rotherham, Doncaster, Barnsley and more.',
  alternates: {
    canonical: 'https://pestproindex.com/sheffield',
  },
  openGraph: {
    title: 'Pest Control Sheffield | Find Local Experts | PestPro Index',
    description:
      'Find trusted pest control companies in Sheffield. Browse residential and commercial services across all Sheffield districts.',
    url: 'https://pestproindex.com/sheffield',
    siteName: 'PestPro Index',
    type: 'website',
  },
};

export default async function SheffieldHubPage() {
  const supabase = createClient();

  const { count } = await supabase
    .from('Providers')
    .select('*', { count: 'exact', head: true })
    .eq('active', true)
    .or('regions.cs.["sheffield"]');

  const providerCount = count ?? 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pest control cost in Sheffield?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pest control costs in Sheffield typically range from £80-£150 for a standard residential treatment such as mice or rats. Wasp nest removal usually costs £50-£80. Commercial pest control contracts vary depending on the size of premises and frequency of visits. Prices in Sheffield tend to be lower than London but comparable to other Northern cities. Always get at least two quotes and check what is included in the price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Sheffield pest controllers BPCA certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Sheffield pest control providers hold BPCA (British Pest Control Association) certification, which is a recognised industry standard. BPCA members must meet strict technical competence requirements, carry appropriate insurance, and follow a code of conduct. You can filter providers by BPCA certification on our residential and commercial directory pages to find accredited companies in the Sheffield area.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get a pest controller in Sheffield?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Sheffield pest control companies offer same-day or next-day service for urgent issues such as wasp nests, rat infestations, or bed bugs. Several providers operate 24/7 emergency call-out services. For routine treatments and surveys, you can usually book within 2-3 working days. Response times may be faster in central Sheffield and slower in the outlying areas of South Yorkshire.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sheffield-skyline.png"
            alt="Sheffield skyline"
            fill
            className="object-cover opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/50 via-[#2563eb]/45 to-[#1e3a8a]/50"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 max-w-3xl drop-shadow-lg"
            style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
          >
            Pest Control in Sheffield
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-2xl drop-shadow-lg"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Find vetted, local pest control providers across Sheffield &amp; South Yorkshire
          </p>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-8 max-w-2xl drop-shadow-lg"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Compare residential and commercial services. No endorsements, no commissions — just transparent, provider-stated information.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <p className="text-4xl font-black">{providerCount}</p>
              <p className="text-lg font-semibold opacity-90">Verified Providers</p>
            </div>
            <div>
              <p className="text-4xl font-black">{sheffieldBoroughs.length}</p>
              <p className="text-lg font-semibold opacity-90">Districts Covered</p>
            </div>
            <div>
              <p className="text-4xl font-black">Free</p>
              <p className="text-lg font-semibold opacity-90">No Referral Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE TYPE CARDS */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Browse by Service Type</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need help at home or protection for your business, find the right provider for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-[#2563eb]">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Residential Pest Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find trusted pest control providers for your home across Sheffield and South Yorkshire.
                Filter by pest type, service features, and compare ratings from real customers.
              </p>
              <Link
                href="/sheffield/residential"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Residential Providers
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-[#f59e0b]">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Commercial Pest Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compare certified commercial pest control providers with advanced filtering by certifications, capabilities, and business sectors.
              </p>
              <Link
                href="/sheffield/commercial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Commercial Providers
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE BY DISTRICT */}
      <section className="relative bg-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Browse by District</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find pest control providers in your area of Sheffield. Select your district to see local providers and area-specific pest information.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {sheffieldBoroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/pest-control/sheffield/${borough.slug}`}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center border border-blue-100 hover:border-blue-300 hover:-translate-y-1 duration-200"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="text-sm font-bold text-gray-900 leading-tight block">{borough.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PESTS IN SHEFFIELD */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Common Pests in Sheffield</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sheffield&apos;s position between urban South Yorkshire and the Peak District moorland creates a distinctive mix of pest pressures. Rats and mice are the most common call-outs, particularly along the River Don corridor. Wasps thrive in the stone-built suburbs, while moles and squirrels are significant pests in the leafy western neighbourhoods.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { label: 'Rats', slug: 'rats', icon: '🐀' },
              { label: 'Mice', slug: 'mice', icon: '🐁' },
              { label: 'Wasps', slug: 'wasps', icon: '🐝' },
              { label: 'Squirrels', slug: 'squirrels', icon: '🐿️' },
              { label: 'Bed Bugs', slug: 'bed-bugs', icon: '🛏️' },
              { label: 'Cockroaches', slug: 'cockroaches', icon: '🪳' },
              { label: 'Ants', slug: 'ants', icon: '🐜' },
              { label: 'Moths', slug: 'moths', icon: '🦋' },
              { label: 'Fleas', slug: 'fleas', icon: '🔬' },
              { label: 'Silverfish', slug: 'silverfish', icon: '🐛' },
            ].map((pest) => (
              <Link
                key={pest.slug}
                href={`/pest/${pest.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center border border-gray-100 hover:border-blue-300 hover:-translate-y-1 duration-200"
              >
                <span className="text-3xl mb-2 block">{pest.icon}</span>
                <span className="text-sm font-bold text-gray-900 block">{pest.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-CITY LINKS */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pest Control in Other Cities</h2>
          <p className="text-gray-700 mb-4">
            Also compare pest control providers in{' '}
            <Link href="/manchester/residential" className="text-blue-600 hover:underline font-semibold">Manchester</Link>
            {' | '}
            <Link href="/leeds/residential" className="text-blue-600 hover:underline font-semibold">Leeds</Link>
            {' | '}
            <Link href="/bradford/residential" className="text-blue-600 hover:underline font-semibold">Bradford</Link>
            {' | '}
            <Link href="/birmingham/residential" className="text-blue-600 hover:underline font-semibold">Birmingham</Link>
            {' | '}
            <Link href="/glasgow/residential" className="text-blue-600 hover:underline font-semibold">Glasgow</Link>
            {' | '}
            <Link href="/residential" className="text-blue-600 hover:underline font-semibold">London</Link>
            {' | '}
            <Link href="/edinburgh/residential" className="text-blue-600 hover:underline font-semibold">Edinburgh</Link>
            {' | '}
            <Link href="/leicester/residential" className="text-blue-600 hover:underline font-semibold">Leicester</Link>
            {' | '}
            <Link href="/hampshire/residential" className="text-blue-600 hover:underline font-semibold">Hampshire</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
