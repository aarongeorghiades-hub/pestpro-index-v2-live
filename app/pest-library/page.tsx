import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { pestGuides } from '@/data/pest-guides';

export const metadata: Metadata = {
  title: 'Pest Library — UK Pest Identification & Treatment Guides | PestPro Index',
  description: 'Browse our comprehensive pest library. Identification guides, treatment options, costs and prevention tips for mice, rats, bed bugs, wasps, ants, cockroaches and more.',
  openGraph: {
    title: 'Pest Library — UK Pest Identification & Treatment Guides | PestPro Index',
    description: 'Browse our comprehensive pest library. Identification guides, treatment options, costs and prevention tips for common UK pests.',
    url: 'https://pestproindex.com/pest-library',
    siteName: 'PestPro Index',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pestproindex.com/pest-library',
  },
};

const categories = [
  {
    name: 'Rodents & Wildlife',
    pests: ['mice', 'rats', 'squirrels'],
  },
  {
    name: 'Insects',
    pests: ['bed-bugs', 'wasps', 'ants', 'cockroaches', 'fleas', 'moths', 'silverfish'],
  },
];

function PestCard({ pest }: { pest: typeof pestGuides[number] }) {
  return (
    <Link
      href={`/pest/${pest.slug}`}
      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
    >
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {pest.name}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{pest.heroDescription}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-blue-600">{pest.costRange.typical}</span>
        <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">Read guide &rarr;</span>
      </div>
    </Link>
  );
}

export default function PestLibraryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'Pest Library', item: 'https://pestproindex.com/pest-library' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-white">Pest Library</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            Pest Library
          </h1>
          <p className="text-lg text-blue-100/90 max-w-3xl">
            Your complete guide to identifying, treating and preventing common UK pests. Browse our expert guides below.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {categories.map((category) => {
          const categoryPests = category.pests
            .map((slug) => pestGuides.find((p) => p.slug === slug))
            .filter(Boolean) as typeof pestGuides;

          return (
            <section key={category.name} className="mb-14">
              <h2 className="text-2xl font-black text-gray-900 mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryPests.map((pest) => (
                  <PestCard key={pest.slug} pest={pest} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <div className="p-8 bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-2xl text-center mt-8">
          <h2 className="text-2xl font-black mb-3">Need Professional Pest Control?</h2>
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
