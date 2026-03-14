import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { createClient } from '@/utils/supabase';
import { londonBoroughs } from '@/app/pest-control/london/london-boroughs';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pest Control London | Find Local Experts | PestPro Index',
  description:
    'Find trusted pest control companies in London. Browse residential and commercial pest control services across all 33 London boroughs. Verified providers, no referral fees.',
  alternates: {
    canonical: 'https://pestproindex.com/london',
  },
  openGraph: {
    title: 'Pest Control London | Find Local Experts | PestPro Index',
    description:
      'Find trusted pest control companies in London. Browse residential and commercial pest control services across all 33 London boroughs.',
    url: 'https://pestproindex.com/london',
    siteName: 'PestPro Index',
    type: 'website',
  },
};

export default async function LondonHubPage() {
  const supabase = createClient();

  const { count } = await supabase
    .from('Providers')
    .select('*', { count: 'exact', head: true })
    .eq('active', true)
    .or('regions.cs.["london"]');

  const providerCount = count ?? 0;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pest control cost in London?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pest control costs in London typically range from £120-£250 for a standard residential treatment such as mice or rats. Wasp nest removal usually costs £60-£100. Bed bug treatments are more expensive, often £200-£400 depending on the size of the property and severity of the infestation. Commercial pest control contracts vary depending on the size of premises and frequency of visits. London prices tend to be higher than other UK cities due to higher operating costs. Always get at least two quotes and check what is included in the price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are London pest controllers BPCA certified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many London pest control providers hold BPCA (British Pest Control Association) certification, which is a recognised industry standard. BPCA members must meet strict technical competence requirements, carry appropriate insurance, and follow a code of conduct. Given the size of the London market, there is a wide range of providers — some BPCA certified, others holding NPTA or other qualifications. You can filter providers by BPCA certification on our residential and commercial directory pages to find accredited companies serving your London borough.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get a pest controller in London?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most London pest control companies offer same-day or next-day service for urgent issues such as wasp nests, rat infestations, or bed bugs. Many providers operate 24/7 emergency call-out services across all London boroughs. For routine treatments and surveys, you can usually book within 1-2 working days. London has one of the highest concentrations of pest control providers in the UK, so availability is generally good across all boroughs.',
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
            src="/london-skyline.png"
            alt="London skyline"
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
            Pest Control in London
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-2xl drop-shadow-lg"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Find vetted, local pest control providers across all 33 London boroughs
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
              <p className="text-4xl font-black">{londonBoroughs.length}</p>
              <p className="text-lg font-semibold opacity-90">London Boroughs</p>
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
            {/* Residential Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-[#2563eb]">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Residential Pest Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find trusted pest control providers for your home across all 33 London boroughs.
                Filter by pest type, service features, and compare ratings from real customers.
              </p>
              <Link
                href="/residential"
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
                href="/commercial"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white font-bold rounded-xl hover:from-[#2563eb] hover:to-[#3b82f6] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Browse Commercial Providers
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE BY BOROUGH */}
      <section className="relative bg-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Browse by Borough</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find pest control providers in your area of London. Select your borough to see local providers and area-specific pest information.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {londonBoroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/pest-control/london/${borough.slug}`}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 text-center border border-blue-100 hover:border-blue-300 hover:-translate-y-1 duration-200"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="text-sm font-bold text-gray-900 leading-tight block">{borough.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PESTS IN LONDON */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Common Pests in London</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              London&apos;s dense urban environment makes it one of the UK&apos;s most challenging cities for pest control. Rats and mice thrive in the Underground network and older Victorian housing stock. Bed bugs are prevalent in hotels, rental properties and HMOs. Wasps, foxes, pigeons and cockroaches are widespread across all boroughs. Bed bug infestations have increased significantly in recent years linked to international travel through London&apos;s airports.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { label: 'Rats', slug: 'rats', icon: '🐀' },
              { label: 'Mice', slug: 'mice', icon: '🐁' },
              { label: 'Bed Bugs', slug: 'bed-bugs', icon: '🛏️' },
              { label: 'Cockroaches', slug: 'cockroaches', icon: '🪳' },
              { label: 'Wasps', slug: 'wasps', icon: '🐝' },
              { label: 'Foxes', slug: 'foxes', icon: '🦊' },
              { label: 'Pigeons', slug: 'pigeons', icon: '🕊️' },
              { label: 'Moths', slug: 'moths', icon: '🦋' },
              { label: 'Ants', slug: 'ants', icon: '🐜' },
              { label: 'Squirrels', slug: 'squirrels', icon: '🐿️' },
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
            <Link href="/birmingham" className="text-blue-600 hover:underline font-semibold">
              Birmingham
            </Link>
            {' | '}
            <Link href="/manchester" className="text-blue-600 hover:underline font-semibold">
              Manchester
            </Link>
            {' | '}
            <Link href="/leeds" className="text-blue-600 hover:underline font-semibold">
              Leeds
            </Link>
            {' | '}
            <Link href="/liverpool" className="text-blue-600 hover:underline font-semibold">
              Liverpool
            </Link>
            {' | '}
            <Link href="/sheffield" className="text-blue-600 hover:underline font-semibold">
              Sheffield
            </Link>
            {' | '}
            <Link href="/bristol" className="text-blue-600 hover:underline font-semibold">
              Bristol
            </Link>
            {' | '}
            <Link href="/glasgow" className="text-blue-600 hover:underline font-semibold">
              Glasgow
            </Link>
            {' | '}
            <Link href="/edinburgh" className="text-blue-600 hover:underline font-semibold">
              Edinburgh
            </Link>
            {' | '}
            <Link href="/leicester" className="text-blue-600 hover:underline font-semibold">
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
            {' | '}
            <Link href="/belfast/residential" className="text-blue-600 hover:underline font-semibold">
              Belfast
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
