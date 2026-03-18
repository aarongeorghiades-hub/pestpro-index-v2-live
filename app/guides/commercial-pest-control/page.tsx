import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Commercial Pest Control UK | Guides for Businesses 2026 | PestPro Index',
    description:
      'Essential pest control guides for UK businesses. Restaurant compliance, warehouse pest management, EHO inspections, HACCP requirements, and commercial pest control equipment reviewed.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/commercial-pest-control',
    },
    openGraph: {
      title: 'Commercial Pest Control UK | Guides for Businesses 2026 | PestPro Index',
      description:
        'Essential pest control guides for UK businesses. Restaurant compliance, warehouse pest management, EHO inspections, HACCP requirements, and commercial pest control equipment reviewed.',
      url: 'https://pestproindex.com/guides/commercial-pest-control',
      type: 'website',
      siteName: 'PestPro Index',
    },
  };
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Commercial Pest Control UK | Guides for Businesses 2026',
  description:
    'Essential pest control guides for UK businesses. Restaurant compliance, warehouse pest management, EHO inspections, HACCP requirements, and commercial pest control equipment reviewed.',
  url: 'https://pestproindex.com/guides/commercial-pest-control',
  publisher: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pestproindex.com/guides/commercial-pest-control',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://pestproindex.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Guides',
      item: 'https://pestproindex.com/guides',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Commercial Pest Control',
      item: 'https://pestproindex.com/guides/commercial-pest-control',
    },
  ],
};

const sectorGuides = [
  {
    emoji: '\u{1F37D}\uFE0F',
    title: 'Restaurant Pest Control',
    description:
      'EHO compliance, HACCP requirements, food hygiene ratings, and setting up a pest management programme for restaurants and caf\u00E9s.',
    href: '/guides/restaurant-pest-control',
    live: true,
  },
  {
    emoji: '\u{1F3E2}',
    title: 'Office Pest Control',
    description:
      'Common office pests, legal obligations for employers, and cost-effective prevention strategies.',
    href: '/guides/office-pest-control',
    live: true,
  },
  {
    emoji: '\u{1F3E8}',
    title: 'Hotel Pest Control',
    description:
      'Bed bug management, guest complaint handling, reputation protection, and ongoing monitoring.',
    href: '/guides/hotel-pest-control',
    live: true,
  },
  {
    emoji: '\u{1F3ED}',
    title: 'Warehouse Pest Management',
    description:
      'BRC compliance, stock protection, monitoring systems, and integrated pest management.',
    href: '/guides/warehouse-pest-management',
    live: true,
  },
  {
    emoji: '\u{1F3E0}',
    title: 'Landlord Pest Control',
    description:
      'Tenant responsibilities, HMO compliance, legal obligations, and cost management.',
    href: null,
    live: false,
  },
];

const productReviews = [
  {
    emoji: '\u26A1',
    title: 'Best Commercial Fly Killers UK 2026',
    description:
      'UV zappers, glue board units, and LED capture models compared for restaurants, kitchens, and food businesses.',
    href: '/best/commercial-fly-killers',
    live: true,
  },
  {
    emoji: '\u{1FAA4}',
    title: 'Best Commercial Rodent Bait Stations',
    description:
      'Lockable tamper-proof stations and professional monitoring systems reviewed.',
    href: '/best/commercial-rodent-bait-stations',
    live: true,
  },
  {
    emoji: '\u{1F54A}\uFE0F',
    title: 'Best Commercial Bird Proofing',
    description:
      'Netting, spike systems, wire systems, and electric track deterrents compared.',
    href: null,
    live: false,
  },
  {
    emoji: '\u{1F50D}',
    title: 'Best Commercial Insect Monitors',
    description:
      'Bed bug interceptors, glue traps, and insect monitoring devices for hotels and commercial premises reviewed.',
    href: '/best/commercial-insect-monitors',
    live: true,
  },
];

const commercialCities = [
  { name: 'London', href: '/commercial' },
  { name: 'Birmingham', href: '/birmingham/commercial' },
  { name: 'Manchester', href: '/manchester/commercial' },
  { name: 'Liverpool', href: '/liverpool/commercial' },
  { name: 'Leeds', href: '/leeds/commercial' },
  { name: 'Nottingham', href: '/nottingham/commercial' },
  { name: 'Brighton', href: '/brighton/commercial' },
  { name: 'Sheffield', href: '/sheffield/commercial' },
  { name: 'Bristol', href: '/bristol/commercial' },
  { name: 'Glasgow', href: '/glasgow/commercial' },
  { name: 'Bradford', href: '/bradford/commercial' },
  { name: 'Newcastle', href: '/newcastle/commercial' },
  { name: 'Cardiff', href: '/cardiff/commercial' },
  { name: 'Edinburgh', href: '/edinburgh/commercial' },
  { name: 'Leicester', href: '/leicester/commercial' },
  { name: 'Hampshire', href: '/hampshire/commercial' },
  { name: 'Coventry', href: '/coventry/commercial' },
  { name: 'Belfast', href: '/belfast/commercial' },
];

export default function CommercialPestControlHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white">Commercial Pest Control</span>
          </nav>

          <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-semibold mb-4">
            Commercial
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Commercial Pest Control Guides
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-6">
            Essential pest control compliance, equipment, and management guides for UK businesses
          </p>
          <p className="text-blue-200 max-w-3xl leading-relaxed">
            Pest control is a legal requirement for food businesses and a critical operational need for all commercial premises. These guides help business owners, facilities managers, and kitchen managers understand their obligations and make informed decisions about pest management programmes, equipment, and compliance.
          </p>
        </div>
      </section>

      {/* Why Pest Control Matters for Businesses */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
          Why Pest Control Matters for Businesses
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            For any business operating in the UK, pest control is not a &ldquo;nice to have&rdquo; &mdash; it is a <strong>legal and operational necessity</strong>. Under the <strong>Food Safety Act 1990</strong> and EC Regulation 852/2004 (retained in UK law), all food business operators must maintain adequate procedures to control pests. Environmental Health Officers (EHOs) carry out <strong>unannounced inspections</strong> and have the power to issue improvement notices, close premises immediately, and prosecute operators who fail to comply.
          </p>
          <p>
            Beyond food businesses, <strong>all commercial premises</strong> face pest-related risks: rodent damage to cables and stock, insect contamination, bird fouling, and the reputational damage that follows any public pest incident. Insurance policies frequently require documented pest management as a condition of cover. For landlords, the Housing Health and Safety Rating System (HHSRS) makes pest infestations a category of hazard that must be addressed.
          </p>
          <p>
            Your <strong>Food Hygiene Rating</strong> is visible on Google, Deliveroo, Uber Eats, and the FSA website. A single inspection finding evidence of pests can drop your rating from 5 to 0, with immediate and measurable impact on footfall and revenue. A documented pest control programme with a BPCA or NPTA accredited provider is the accepted minimum standard &mdash; and the foundation of any due diligence defence.
          </p>
        </div>

        <div className="mt-6">
          <Callout type="warning">
            <p><strong>Under UK law, food business operators face unlimited fines and up to two years&apos; imprisonment for food safety offences.</strong> A documented pest control programme isn&apos;t optional &mdash; it&apos;s a legal requirement.</p>
          </Callout>
        </div>
      </section>

      {/* Sector Guides */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
            Guides by Business Type
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sectorGuides.map((guide) =>
              guide.live && guide.href ? (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                      <span className="text-sm text-blue-600 font-medium group-hover:translate-x-1 inline-block transition-transform">
                        Read guide &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={guide.title}
                  className="block p-6 bg-gray-50 rounded-xl border border-gray-200 opacity-75"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0 grayscale">{guide.emoji}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-500">
                          {guide.title}
                        </h3>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-gray-200 text-gray-500 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{guide.description}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Commercial Product Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
          Commercial Equipment Reviews
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {productReviews.map((review) =>
            review.live && review.href ? (
              <Link
                key={review.title}
                href={review.href}
                className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{review.emoji}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{review.description}</p>
                    <span className="text-sm text-amber-600 font-medium group-hover:translate-x-1 inline-block transition-transform">
                      Read review &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={review.title}
                className="block p-6 bg-gray-50 rounded-xl border border-gray-200 opacity-75"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0 grayscale">{review.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-500">
                        {review.title}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-gray-200 text-gray-500 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{review.description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Find a Commercial Pest Controller */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <FindProviderCTA
          heading="Find a Commercial Pest Controller"
          subtext="Find BPCA and NPTA accredited commercial pest controllers in your area"
        />
      </section>

      {/* Compare Commercial Pest Control Providers */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-l-4 border-amber-500 pl-4 mb-8">
            Compare Commercial Pest Control Providers
          </h2>
          <div className="flex flex-wrap gap-3">
            {commercialCities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="text-sm text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-2 rounded-full transition-colors font-medium"
              >
                {city.name} Commercial
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
