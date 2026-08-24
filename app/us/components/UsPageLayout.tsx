import Link from 'next/link';

// Layout for the US estate.
//
// WHY THIS EXISTS RATHER THAN components/GuideLayout.tsx: that layout hardcodes
// links into the UK estate — a Home link to "/", a breadcrumb parent such as
// "/guides", and a "Find Providers" call to action pointing at
// "/pest-control/regions". It also renders <Navigation />, which is a UK menu.
// The US pages must not link into the UK estate at all, so reusing it was not
// possible without editing a shared component with 40-plus UK consumers.
//
// Everything else follows the existing estate conventions deliberately: the same
// hero/sidebar/article structure, the same `guide-content` typography class from
// globals.css, the same JSON-LD injection via dangerouslySetInnerHTML (never
// next/script), and the same "By the PestPro Index Team / Updated ..." byline.

interface TocItem {
  id: string;
  title: string;
}

interface RelatedLink {
  title: string;
  href: string;
}

// The header nav belongs to the CLUSTER, not to the layout. R5 hardcoded the four
// Joro links here because there was only one cluster. R6 added a second, and the two
// must not link to each other, so the nav became a prop.
//
// DONE, S47 R3: the defaults that stood here carried the Joro cluster's own home
// pointer and its four-item nav, so any page that omitted both props rendered the
// Joro cluster silently and wrongly. The condition the old comment set — "as soon
// as a /us hub page exists" — was met by the hub at app/us/page.tsx in S46 R5.
// `homeHref` and `clusterNav` are now REQUIRED and the defaults are deleted. The
// four Joro pages carry the identical values explicitly, and this round proved the
// rendered output unchanged rather than assuming it.

interface UsPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  readingTime: string;
  // Omitted on the cluster hub, which is itself the top of the trail.
  breadcrumbParent?: { label: string; href: string };
  tocItems: TocItem[];
  relatedPages?: RelatedLink[];
  children: React.ReactNode;
  schemas: object[];
  // Where the wordmark points. Should be this cluster's hub. REQUIRED: there is no
  // default, so a cluster cannot inherit another cluster's home pointer by omission.
  homeHref: string;
  // The header nav for this cluster. Never links out of its own cluster. REQUIRED
  // for the same reason.
  clusterNav: RelatedLink[];
}

export default function UsPageLayout({
  title,
  subtitle,
  lastUpdated,
  readingTime,
  breadcrumbParent,
  tocItems,
  relatedPages = [],
  children,
  schemas,
  homeHref,
  clusterNav,
}: UsPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* US header. Deliberately self-contained: the wordmark links to the US
          cluster hub, never to the UK home page. */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link href={homeHref} className="font-black text-lg text-gray-900 tracking-tight">
            PestPro Index <span className="text-blue-600">US</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-5 text-sm font-semibold text-gray-600">
            {clusterNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-600 transition-colors">{item.title}</Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            {breadcrumbParent ? (
              <>
                <Link href={breadcrumbParent.href} className="hover:text-white transition-colors">
                  {breadcrumbParent.label}
                </Link>
                <span>/</span>
                <span className="text-white">{title}</span>
              </>
            ) : (
              <span className="text-white">{title}</span>
            )}
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Contents</h2>
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

              {relatedPages.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-bold text-gray-900 mb-2 text-sm">Related Pages</h2>
                  <ul className="space-y-1">
                    {relatedPages.map((page) => (
                      <li key={page.href}>
                        <Link href={page.href} className="text-sm text-blue-600 hover:underline">
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <article className="guide-content">{children}</article>
          </main>
        </div>
      </div>

      {relatedPages.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Keep Reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                  <span className="inline-block mt-3 text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                    Read more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* US footer. No UK links. */}
      <footer className="bg-[#0f172a] text-blue-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <p className="font-bold text-white mb-2">PestPro Index US</p>
          <p className="max-w-3xl">
            Independent, research-based information on pests in the United States. We are
            not a pest control company and we do not sell pest control services.
          </p>
        </div>
      </footer>
    </div>
  );
}
