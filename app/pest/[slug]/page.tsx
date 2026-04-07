import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { pestGuides } from '@/data/pest-guides';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return pestGuides.map((pest) => ({
    slug: pest.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pest = pestGuides.find((p) => p.slug === slug);
  if (!pest) return {};

  return {
    title: pest.seoTitle,
    description: pest.metaDescription,
    openGraph: {
      title: pest.seoTitle,
      description: pest.metaDescription,
      url: `https://pestproindex.com/pest/${pest.slug}`,
      siteName: 'PestPro Index',
      type: 'article',
    },
    alternates: {
      canonical: `https://pestproindex.com/pest/${pest.slug}`,
    },
  };
}

function EffectivenessBadge({ level }: { level: string }) {
  const colours: Record<string, string> = {
    Low: 'bg-red-100 text-red-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-green-100 text-green-800',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${colours[level] || 'bg-gray-100 text-gray-800'}`}>
      {level} effectiveness
    </span>
  );
}

const productLinks: Record<string, { label: string; href: string }[]> = {
  rats: [
    { label: 'Best Rat Poison (UK)', href: '/best/rat-poison-for-gardens' },
    { label: 'Best Rat Bait Stations', href: '/best/rat-bait-stations' },
  ],
  mice: [
    { label: 'Best Mouse Bait Stations', href: '/best/mouse-bait-stations' },
    { label: 'Best Mouse Repellent', href: '/best/mouse-repellent' },
  ],
  'bed-bugs': [
    { label: 'Best Bed Bug Spray', href: '/best/bed-bug-spray' },
    { label: 'Best Bed Bug Steamers', href: '/best/professional-bed-bug-steamers' },
  ],
  wasps: [
    { label: 'Best Wasp Nest Foam', href: '/best/wasp-nest-foam' },
  ],
  fleas: [
    { label: 'Best Flea Spray for Home', href: '/best/flea-spray-for-home' },
    { label: 'Best Flea Fogger', href: '/best/flea-fogger' },
  ],
  ants: [
    { label: 'Best Ant Gel Bait', href: '/best/ant-gel-bait' },
  ],
  cockroaches: [
    { label: 'Best Cockroach Gel Bait', href: '/best/cockroach-gel-bait' },
  ],
  moths: [
    { label: 'Best Moth Traps', href: '/best/moth-traps' },
  ],
};

export default async function PestGuidePage({ params }: Props) {
  const { slug } = await params;
  const pest = pestGuides.find((p) => p.slug === slug);
  if (!pest) return notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pest.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Pest Library', item: 'https://pestproindex.com/pest-library' },
      { '@type': 'ListItem', position: 3, name: pest.name, item: `https://pestproindex.com/pest/${pest.slug}` },
    ],
  };

  const relatedPestData = pest.relatedPests
    .map((s) => pestGuides.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-20">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 800px 600px at center 20%, rgba(59, 130, 246, 0.5) 0%, transparent 60%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(15, 23, 42, 0.85) 100%)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pest-library" className="hover:text-white/80">Pest Library</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{pest.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            {pest.name} — Identification, Treatment & Removal
          </h1>
          <p className="text-lg text-blue-100/90 max-w-3xl">{pest.heroDescription}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-white rounded-xl shadow-lg border border-gray-200">
          <div>
            <p className="text-sm text-gray-500">Typical Cost</p>
            <p className="text-lg font-bold text-gray-900">{pest.costRange.typical}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">DIY Possible?</p>
            <p className="text-lg font-bold text-gray-900">
              {pest.diyMethods.some((m) => m.effectiveness === 'High') ? 'For mild cases' : 'Professional recommended'}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm text-gray-500">Season</p>
            <p className="text-lg font-bold text-gray-900">
              {pest.seasonalInfo.includes('year-round') ? 'Year-round' : pest.seasonalInfo.split('.')[0].length > 50 ? 'Seasonal' : pest.seasonalInfo.split('.')[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Table of Contents */}
        <div className="mb-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <p className="font-bold text-gray-900 mb-3">On this page</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <li><a href="#overview" className="text-blue-600 hover:underline">Overview</a></li>
            <li><a href="#signs" className="text-blue-600 hover:underline">Signs of Infestation</a></li>
            <li><a href="#health-risks" className="text-blue-600 hover:underline">Health Risks</a></li>
            <li><a href="#diy" className="text-blue-600 hover:underline">DIY Methods</a></li>
            <li><a href="#professional" className="text-blue-600 hover:underline">When to Call a Pro</a></li>
            <li><a href="#costs" className="text-blue-600 hover:underline">Treatment Costs</a></li>
            <li><a href="#prevention" className="text-blue-600 hover:underline">Prevention Tips</a></li>
            <li><a href="#seasonal" className="text-blue-600 hover:underline">Seasonal Info</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Overview */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{pest.overview}</p>
        </section>

        {/* Signs */}
        <section id="signs" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Signs of a {pest.name} Infestation</h2>
          <ul className="space-y-3">
            {pest.signsOfInfestation.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Health Risks */}
        <section id="health-risks" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Health Risks</h2>
          <ul className="space-y-3">
            {pest.healthRisks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                <span className="text-gray-700">{risk}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* DIY Methods */}
        <section id="diy" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">DIY Treatment Methods</h2>
          <div className="space-y-4">
            {pest.diyMethods.map((method, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{method.method}</h3>
                  <EffectivenessBadge level={method.effectiveness} />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Products */}
        {productLinks[slug] && (
          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productLinks[slug].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-5 bg-green-50 border border-green-200 rounded-xl hover:border-green-400 hover:shadow-md transition-all"
                >
                  <span className="text-green-600 font-bold text-lg">&rarr;</span>
                  <span className="font-bold text-gray-900">{link.label}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* When to Call Professional */}
        <section id="professional" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">When to Call a Professional</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <ul className="space-y-3">
              {pest.whenToCallProfessional.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 text-blue-600 font-bold">&rarr;</span>
                  <span className="text-gray-800">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
            <p className="text-gray-900 font-bold mb-2">Find a Trusted {pest.name} Controller Near You</p>
            <p className="text-gray-600 text-sm mb-4">No lead fees. No commissions. Just trusted, vetted pest controllers.</p>
            <Link href="/residential" className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
              Browse Residential Pest Controllers
            </Link>
          </div>
        </section>

        {/* Costs */}
        <section id="costs" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">How Much Does {pest.name} Treatment Cost?</h2>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-3xl font-black text-gray-900 mb-3">{pest.costRange.typical}</p>
            <p className="text-gray-700 leading-relaxed">{pest.costRange.description}</p>
          </div>
        </section>

        {/* Prevention */}
        <section id="prevention" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Prevention Tips</h2>
          <ul className="space-y-3">
            {pest.preventionTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Seasonal Info */}
        <section id="seasonal" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Seasonal Information</h2>
          <p className="text-gray-700 leading-relaxed">{pest.seasonalInfo}</p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {pest.faqItems.map((faq, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pests */}
        {relatedPestData.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Related Pest Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPestData.map((related) => (
                related && (
                  <Link key={related.slug} href={`/pest/${related.slug}`} className="p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
                    <h3 className="font-bold text-gray-900">{related.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{related.heroDescription}</p>
                  </Link>
                )
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="p-8 bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-2xl text-center">
          <h2 className="text-2xl font-black mb-3">Need Professional Help with {pest.name}?</h2>
          <p className="text-gray-300 mb-6">PestPro Index lists trusted, vetted pest controllers across the UK. No lead fees. No commissions. No sponsored rankings.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/residential" className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
              Find Residential Controllers
            </Link>
            <Link href="/commercial" className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Find Commercial Controllers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
