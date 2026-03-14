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
            <article className="prose prose-lg max-w-none text-gray-800
              prose-headings:text-gray-900 prose-headings:scroll-mt-24
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-800 prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-800 prose-ul:mb-4 prose-ul:ml-6 prose-ul:list-disc
              prose-ol:text-gray-800 prose-ol:mb-4 prose-ol:ml-6 prose-ol:list-decimal
              prose-li:mb-2 prose-li:text-gray-800
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-table:border-collapse
              prose-th:bg-gray-50 prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
              prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2 prose-td:text-gray-800"
            >
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
                      className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-gray-900 hover:text-blue-600">{guide.title}</h3>
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
                      className="block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-gray-900 hover:text-blue-600">{product.title}</h3>
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
