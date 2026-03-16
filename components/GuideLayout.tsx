import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface TocItem {
  id: string;
  title: string;
}

interface RelatedLink {
  title: string;
  href: string;
}

interface GuideLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  readingTime: string;
  breadcrumbParent: { label: string; href: string };
  tocItems: TocItem[];
  relatedGuides?: RelatedLink[];
  relatedProducts?: RelatedLink[];
  children: React.ReactNode;
  articleSchema: object;
  breadcrumbSchema: object;
}

export default function GuideLayout({
  title,
  subtitle,
  lastUpdated,
  readingTime,
  breadcrumbParent,
  tocItems,
  relatedGuides = [],
  relatedProducts = [],
  children,
  articleSchema,
  breadcrumbSchema,
}: GuideLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={breadcrumbParent.href} className="hover:text-white transition-colors">{breadcrumbParent.label}</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
            <span>By the PestPro Index Team</span>
            <span className="hidden sm:inline">|</span>
            <span>Updated {lastUpdated}</span>
            <span className="hidden sm:inline">|</span>
            <span>{readingTime} read</span>
          </div>
        </div>
      </section>

      {/* Main content with sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of contents — sidebar on desktop */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Contents</h3>
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 py-1 border-l-2 border-transparent hover:border-blue-600 pl-3 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Need a Professional? CTA */}
              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Need a Professional?</h4>
                <p className="text-xs text-gray-600 mb-3">Compare verified pest control providers near you — no fees, no commissions.</p>
                <Link
                  href="/pest-control/regions"
                  className="block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  Find Providers →
                </Link>
              </div>

              {/* Related Guides */}
              {relatedGuides.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Related Guides</h4>
                  <ul className="space-y-1">
                    {relatedGuides.map((guide) => (
                      <li key={guide.href}>
                        <Link href={guide.href} className="text-sm text-blue-600 hover:underline">
                          {guide.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          {/* Main article content */}
          <main className="flex-1 min-w-0">
            <article className="guide-content">
              {children}
            </article>
          </main>
        </div>
      </div>

      {/* Related content grid at bottom */}
      {(relatedGuides.length > 0 || relatedProducts.length > 0) && (
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4">
            {relatedGuides.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedGuides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Guide</span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{guide.title}</h3>
                      <span className="inline-block mt-3 text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform">Read guide &rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Reviews</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                          <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Review</span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{product.title}</h3>
                      <span className="inline-block mt-3 text-sm text-amber-600 font-medium group-hover:translate-x-1 transition-transform">Read review &rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
