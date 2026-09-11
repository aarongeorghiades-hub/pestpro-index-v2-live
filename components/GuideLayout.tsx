import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ProgressRail from '@/components/ProgressRail';

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
  // RAIL STAGES ARE DERIVED FROM THIS ROUTE'S OWN CONTENTS — S72 PILOT.
  //
  // tocItems already IS the real section sequence; it is what the sidebar
  // renders. The rail wants the STRUCTURAL stages only, so the product-card
  // anchors are dropped: a /best route interleaves its cards into the contents,
  // and a rail with twelve stops, eight of them products, stops being a sense of
  // place and becomes a second table of contents.
  //
  // THE PRIMARY RULE IS SHAPE, NOT A LIST OF KNOWN IDS. Every product entry is
  // built from the template `${p.tocLabel} — ${p.tocName}`, so its title always
  // carries an em-dash; authored section titles almost never do. MEASURED across
  // all 50 /best routes before this was written: the rule catches 48 of 48
  // product spreads and is silent on 365 of 366 structural entries.
  //
  // THE ID SET IS A SAFETY NET OVER THAT RULE, NOT THE RULE ITSELF, AND IT
  // EXISTS BECAUSE THE MEASUREMENT FOUND A REAL FALSE POSITIVE. The one
  // structural title on the estate containing an em-dash is /best/ant-gel-bait's
  // "Bait or Spray — the Whole Decision", which the shape rule alone would have
  // dropped from that route's rail. Listing the structural ids can only ever ADD
  // a stage back; a new section id nobody has listed is still kept by the shape
  // rule, because it will not carry an em-dash. So unlike a list used AS the
  // rule, this one cannot cause a silent omission (Law 170).
  const STRUCTURAL_IDS = new Set([
    'situation',
    'legal',
    'limits',
    'what-decides',
    'alternatives',
    'using',
    'compared',
    'faq',
  ]);
  const railStages = tocItems.filter(
    (item) => STRUCTURAL_IDS.has(item.id) || !item.title.includes('\u2014'),
  );

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <ProgressRail stages={railStages} />
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
      <section className="border-b border-[var(--color-rule)] bg-[var(--color-surface)] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-[var(--color-ink-mute)]">
            <Link href="/" className="transition-colors hover:text-[var(--color-teal-deep)]">Home</Link>
            <span>/</span>
            <Link href={breadcrumbParent.href} className="transition-colors hover:text-[var(--color-teal-deep)]">{breadcrumbParent.label}</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)]">{title}</span>
          </nav>

          <h1 className="mb-4 text-3xl font-black leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mb-6 max-w-3xl text-lg text-[var(--color-ink-soft)] md:text-xl">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-ink-mute)]">
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
        {/*
          S66 R7 — MOBILE ORDER. Below lg (1024px) the reader met, before any
          article content: the subtitle, a cookie notice, a 786px contents nav, a
          provider CTA and a related-guides list. Measured at S66 R6 on
          /best/pigeon-spikes at 390x844: h1 at 328px, first article content at
          1,518px. This container fixes that for all 93 consumers at once.

          THE MECHANISM IS `display: contents` PLUS FLEX `order`, AND IT IS CHOSEN
          SO THE DESKTOP TREE IS UNCHANGED. On mobile the <aside> and its sticky
          wrapper are `display: contents`, so their children become direct flex
          items of this column and can be ordered independently: contents (1),
          article (2), CTA and related guides (3). At lg both revert to normal
          boxes and the nesting — aside > sticky wrapper > toc + CTA + related —
          is exactly what it was, so the desktop sidebar is untouched.

          NOTHING IS DUPLICATED. Every link keeps its href and its text; the
          anchors move in the DOM and nothing else. A second copy would have been
          the easy way to do this and would have broken rendered-anchor parity.
        */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of contents — sidebar on desktop, one tappable line on mobile */}
          <aside className="contents lg:block lg:w-64 lg:flex-shrink-0">
            <div className="contents lg:block lg:sticky lg:top-24">
              <div className="order-1 lg:order-none">
                {/* <details> is used deliberately: it collapses to one line and
                    expands on tap with NO client JavaScript, which matters because
                    GuideLayout is a server component. globals.css forces the panel
                    open and hides the summary at lg, so desktop is unaffected. */}
                <details className="toc-collapsible border-b border-[var(--color-rule)] lg:border-0">
                  <summary className="flex items-center justify-between cursor-pointer py-3 text-sm font-bold text-[var(--color-ink)] lg:hidden">
                    <span>Contents</span>
                    <span aria-hidden="true" className="toc-chevron text-[var(--color-ink-mute)]">&#9662;</span>
                  </summary>
                  <h3 className="mb-3 hidden text-sm font-bold text-[var(--color-ink)] lg:block">Contents</h3>
                  <nav className="space-y-1 pb-3 lg:pb-0">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block border-l-2 border-transparent py-1 pl-3 text-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-ochre)] hover:text-[var(--color-ink)]"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </details>
              </div>

              {/* Provider CTA and related guides — sidebar on desktop, BELOW the
                  article on mobile. order-3 puts them after <main>. */}
              <div className="order-3 lg:order-none">
                {/* Need a Professional? CTA */}
                <div className="mt-8 rounded-xl border border-[var(--color-teal-edge)] bg-[var(--color-teal-wash)] p-4">
                  <h4 className="font-bold text-[var(--color-ink)] mb-2 text-sm">Need a Professional?</h4>
                  <p className="text-xs text-[var(--color-ink-soft)] mb-3">Compare pest control providers near you — no fees, no commissions.</p>
                  <Link
                    href="/pest-control/regions"
                    className="block rounded-lg bg-[var(--color-teal-deep)] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-teal)]"
                  >
                    Find providers
                  </Link>
                </div>

                {/* Related Guides */}
                {relatedGuides.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-bold text-[var(--color-ink)] mb-2 text-sm">Related Guides</h4>
                    <ul className="space-y-1">
                      {relatedGuides.map((guide) => (
                        <li key={guide.href}>
                          <Link href={guide.href} className="text-sm text-[var(--color-teal-deep)] hover:underline">
                            {guide.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main article content */}
          <main className="order-2 lg:order-none flex-1 min-w-0">
            <article className="guide-content">
              {children}
            </article>
          </main>
        </div>
      </div>

      {/* Related content grid at bottom */}
      {(relatedGuides.length > 0 || relatedProducts.length > 0) && (
        <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-sunk)] py-16">
          <div className="max-w-7xl mx-auto px-4">
            {relatedGuides.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedGuides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group block p-6 bg-white rounded-xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-teal-edge)] transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-teal-wash)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-teal-edge)] transition-colors">
                          <svg className="w-5 h-5 text-[var(--color-teal-deep)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-teal-deep)]">Guide</span>
                      </div>
                      <h3 className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors">{guide.title}</h3>
                      <span className="inline-block mt-3 text-sm text-[var(--color-teal-deep)] font-medium group-hover:translate-x-1 transition-transform">Read guide</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Related Product Guides</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="group block p-6 bg-white rounded-xl border border-[var(--color-rule)] hover:shadow-lg hover:border-[var(--color-ochre-edge)] transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-ochre-wash)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-ochre-edge)] transition-colors">
                          <svg className="w-5 h-5 text-[var(--color-ochre-deep)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-ochre-deep)]">Guide</span>
                      </div>
                      <h3 className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-ochre-deep)] transition-colors">{product.title}</h3>
                      <span className="inline-block mt-3 text-sm text-[var(--color-ochre-deep)] font-medium group-hover:translate-x-1 transition-transform">Read guide</span>
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
