import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { createClient } from '@/utils/supabase';
import { cardiffBoroughs } from '@/lib/cardiff-boroughs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pest Control Cardiff | Find Local Pest Controllers | PestPro Index',
  description:
    'Find trusted pest control companies in Cardiff and South Wales. Compare BPCA-certified local specialists for rats, mice, wasps, bed bugs and more.',
  alternates: {
    canonical: 'https://pestproindex.com/cardiff',
  },
  openGraph: {
    title: 'Pest Control Cardiff | Find Local Pest Controllers | PestPro Index',
    description:
      'Find trusted pest control companies in Cardiff and South Wales. Compare BPCA-certified local specialists for rats, mice, wasps, bed bugs and more.',
    url: 'https://pestproindex.com/cardiff',
    siteName: 'PestPro Index',
    type: 'website',
  },
};

export default async function CardiffHubPage() {
  const supabase = createClient();

  const { count } = await supabase
    .from('Providers')
    .select('*', { count: 'exact', head: true })
    .eq('active', true)
    .or('regions.cs.["cardiff"]');

  const providerCount = count ?? 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pest control cost in Cardiff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pest control costs in Cardiff typically range from £80-£150 for a standard residential treatment such as mice or rats. Wasp nest removal usually costs £50-£80. Commercial pest control contracts vary depending on the size of premises and frequency of visits. Prices in Cardiff are generally comparable to other major UK cities. Always get at least two quotes and check what is included in the price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Cardiff pest controllers BPCA certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Cardiff pest control providers hold BPCA (British Pest Control Association) certification, which is a recognised industry standard. BPCA members must meet strict technical competence requirements, carry appropriate insurance, and follow a code of conduct. You can filter providers by BPCA certification on our residential and commercial directory pages to find accredited companies in the Cardiff area.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get a pest controller in Cardiff?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Cardiff pest control companies offer same-day or next-day service for urgent issues such as wasp nests, rat infestations, or bed bugs. Several providers operate 24/7 emergency call-out services. For routine treatments and surveys, you can usually book within 2-3 working days. Response times may be faster in central Cardiff and slower in the more rural outlying areas such as the Vale of Glamorgan or the upper valleys.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cardiff-skyline.png"
            alt="Cardiff skyline illustration"
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
            Pest Control in Cardiff
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-2xl drop-shadow-lg"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Find vetted, local pest control providers across Cardiff &amp; South Wales
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
              <p className="text-4xl font-black">8</p>
              <p className="text-lg font-semibold opacity-90">Areas Covered</p>
            </div>
            <div>
              <p className="text-4xl font-black">South Wales</p>
              <p className="text-lg font-semibold opacity-90">Region</p>
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
            {/* Residential Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-[#2563eb]">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Residential Pest Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find trusted pest control providers for your home across Cardiff and South Wales.
                Filter by pest type, service features, and compare ratings from real customers.
              </p>
              <Link
                href="/cardiff/residential"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Residential Providers
                <span>→</span>
              </Link>
            </div>

            {/* Commercial Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-[#f59e0b]">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Commercial Pest Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compare certified commercial pest control providers with advanced filtering by certifications, capabilities, and business sectors.
              </p>
              <Link
                href="/cardiff/commercial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Commercial Providers
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE BY AREA */}
      <section className="relative bg-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Browse by Area</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find pest control providers in your area of Cardiff. Select your area to see local providers and area-specific pest information.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {cardiffBoroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/pest-control/cardiff/${borough.slug}`}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center border border-blue-100 hover:border-blue-300 hover:-translate-y-1 duration-200"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="text-sm font-bold text-gray-900 leading-tight block">{borough.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PESTS IN CARDIFF */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Common Pests in Cardiff</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cardiff is Wales&apos;s capital city, home to over 360,000 people across diverse neighbourhoods from the historic city centre to Cardiff Bay, Canton, Roath, and the surrounding Vale of Glamorgan. Whether you need residential or commercial pest control in Cardiff, our directory connects you with vetted local providers covering the whole city and surrounding areas including Newport, Caerphilly, Penarth and Pontypridd.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { label: 'Rats', slug: 'rats', icon: '🐀' },
              { label: 'Mice', slug: 'mice', icon: '🐁' },
              { label: 'Wasps', slug: 'wasps', icon: '🐝' },
              { label: 'Bed Bugs', slug: 'bed-bugs', icon: '🛏️' },
              { label: 'Pigeons', slug: 'pigeons', icon: '🐦' },
              { label: 'Cockroaches', slug: 'cockroaches', icon: '🪳' },
              { label: 'Ants', slug: 'ants', icon: '🐜' },
              { label: 'Fleas', slug: 'fleas', icon: '🔬' },
              { label: 'Moths', slug: 'moths', icon: '🦋' },
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
            <Link href="/residential" className="text-blue-600 hover:underline font-semibold">
              London
            </Link>
            {' | '}
            <Link href="/birmingham/residential" className="text-blue-600 hover:underline font-semibold">
              Birmingham
            </Link>
            {' | '}
            <Link href="/manchester/residential" className="text-blue-600 hover:underline font-semibold">
              Manchester
            </Link>
            {' | '}
            <Link href="/liverpool/residential" className="text-blue-600 hover:underline font-semibold">
              Liverpool
            </Link>
            {' | '}
            <Link href="/leeds/residential" className="text-blue-600 hover:underline font-semibold">
              Leeds
            </Link>
            {' | '}
            <Link href="/sheffield/residential" className="text-blue-600 hover:underline font-semibold">
              Sheffield
            </Link>
            {' | '}
            <Link href="/nottingham/residential" className="text-blue-600 hover:underline font-semibold">
              Nottingham
            </Link>
            {' | '}
            <Link href="/bristol/residential" className="text-blue-600 hover:underline font-semibold">
              Bristol
            </Link>
            {' | '}
            <Link href="/brighton/residential" className="text-blue-600 hover:underline font-semibold">
              Brighton
            </Link>
            {' | '}
            <Link href="/glasgow/residential" className="text-blue-600 hover:underline font-semibold">
              Glasgow
            </Link>
            {' | '}
            <Link href="/bradford/residential" className="text-blue-600 hover:underline font-semibold">
              Bradford
            </Link>
            {' | '}
            <Link href="/newcastle/residential" className="text-blue-600 hover:underline font-semibold">
              Newcastle
            </Link>
            {' | '}
            <Link href="/edinburgh/residential" className="text-blue-600 hover:underline font-semibold">
              Edinburgh
            </Link>
            {' | '}
            <Link href="/leicester/residential" className="text-blue-600 hover:underline font-semibold">
              Leicester
            </Link>
            {' | '}
            <Link href="/hampshire/residential" className="text-blue-600 hover:underline font-semibold">
              Hampshire
            </Link>
            {' | '}
            <Link href="/coventry/residential" className="text-blue-600 hover:underline font-semibold">
              Coventry
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
