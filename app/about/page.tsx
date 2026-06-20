import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

// Static content page — no DB call, so it renders as a normal async Server
// Component (no force-dynamic needed; this keeps it cacheable for SEO/perf).
export const metadata: Metadata = {
  // Layout template appends "| PestPro Index" — keep a single brand suffix.
  title: 'About PestPro Index — Neutral UK Pest Control Directory',
  description:
    'PestPro Index is a neutral UK pest control directory. Every provider is listed free — no lead fees, no commissions, no paid rankings. Read who we are, how we stay independent, and our affiliate disclosure.',
  alternates: { canonical: 'https://pestproindex.com/about' },
  openGraph: {
    title: 'About PestPro Index',
    description:
      'A neutral UK pest control directory — no lead fees, no commissions, no paid rankings. How we operate and stay independent.',
    url: 'https://pestproindex.com/about',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
};

export default async function AboutPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
    description:
      'A neutral UK pest control directory listing providers free of charge, with no lead fees, commissions or paid rankings.',
    parentOrganization: { '@type': 'Organization', name: 'ENA Enterprises Ltd' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://pestproindex.com/about' },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#2563eb] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>
            About PestPro Index
          </h1>
          <p className="text-lg sm:text-xl font-light text-blue-100 max-w-2xl mx-auto">
            A neutral UK pest control directory — free to list, free to use, with no lead fees, commissions or paid rankings.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        {/* Who we are */}
        <h2 className="text-3xl font-black text-gray-900 mb-4">Who we are</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PestPro Index is a neutral directory of pest control providers across the United Kingdom. We exist to make
          finding a local pest controller straightforward and transparent: you can compare providers by location, the
          pests they treat, their certifications and their public Google review data, then contact them directly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every provider is listed <strong>free of charge</strong>. We charge no lead fees, take no commission from
          providers, and sell no ranking positions — there is no way for a company to pay to appear higher in our
          listings. What you see is provider-stated information alongside publicly available review data. We do not
          judge outcomes, vet individual jobs, or guarantee results; we present the available evidence and let you
          decide who to contact.
        </p>

        {/* Operated by */}
        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">Who operates the site</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          PestPro Index is operated by <strong>ENA Enterprises Ltd</strong>, a company registered in the United Kingdom
          (company number <strong>[CONFIRM]</strong>). For any question about a listing, a correction, or getting your
          business added or removed, please use our{' '}
          <Link href="/contact" className="text-blue-600 hover:underline">contact page</Link>.
        </p>

        {/* Funding & independence */}
        <h2 className="text-3xl font-black text-gray-900 mb-4 mt-10">How we fund the site &amp; stay independent</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The directory is free to use and free to be listed in, so it isn&apos;t funded by providers. Instead, the site
          is partly supported by affiliate commissions on some of the pest control <em>products</em> we link to — for
          example, products available through Amazon. When we recommend a product, our selection is based on its review
          score and the volume of ratings it has received, not on whether it earns us a commission.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Crucially, this product revenue is kept entirely separate from the directory. Affiliate relationships never
          influence which providers are listed, how providers are ranked, or which products we feature. The provider
          listings and the product recommendations are decided independently of any commercial relationship.
        </p>

        {/* Affiliate disclosure */}
        <h2 id="affiliate-disclosure" className="text-3xl font-black text-gray-900 mb-4 mt-10 scroll-mt-24">
          Affiliate disclosure
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-0">
            Some of the product links on PestPro Index are affiliate links, including links to Amazon. If you buy a
            product through one of these links, we may earn a small commission — at <strong>no extra cost to you</strong>.
            Affiliate commissions help fund our independent research and keep the directory free to use. They do not
            affect our recommendations: we feature products on the basis of their review score and rating volume, and
            affiliate links never influence our provider listings or rankings.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/residential" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
            Browse Pest Control Providers →
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all">
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}
