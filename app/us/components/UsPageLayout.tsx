import Link from 'next/link';
import ProgressRail from '@/components/ProgressRail';
import UsHeader from './UsHeader';

const SITE = 'https://pestproindex.com';
const US_HOME = '/us';

type Crumb = { label: string; href: string | null };

// S77 — ONE TRAIL, TWO SURFACES. The visible breadcrumb and the BreadcrumbList
// JSON-LD are built from the same array, so they cannot disagree. Before this they
// were written separately and disagreed on most routes: /us/ants showed "US Pest
// Guides / Household Ants" while its schema listed "Household Ants" alone. Two
// sources of truth that disagree are a defect (Law 41); the overlap law says an
// edit to one surface must reach its twin.
//
// "Home" is the US home, /us, never the UK "/". A parent that IS /us is not
// repeated after it: "Home / US Pest Guides" would be two links to one page. On
// the hub itself the trail is "Home" alone, as the current page, not a link to
// itself — so every /us trail starts with Home. A lone root crumb stays
// ink-mute like every breadcrumb; only a current page at the END of a longer
// trail is lifted to ink, as on the UK estate.
function buildTrail(title: string, isHub: boolean, parent?: { label: string; href: string }): Crumb[] {
  if (isHub) return [{ label: 'Home', href: null }];
  const trail: Crumb[] = [{ label: 'Home', href: US_HOME }];
  if (parent && parent.href !== US_HOME) trail.push({ label: parent.label, href: parent.href });
  trail.push({ label: title, href: null });
  return trail;
}

type Schema = { '@type'?: string; itemListElement?: { item?: string }[] } & Record<string, unknown>;

// A page's own BreadcrumbList supplies one fact the layout does not have: the
// page's canonical URL, as its last item. Everything else is rebuilt from the trail.
function deriveBreadcrumbSchema(schema: Schema, trail: Crumb[]): Schema {
  if (schema['@type'] !== 'BreadcrumbList') return schema;
  const items = schema.itemListElement ?? [];
  const selfUrl = items.length ? items[items.length - 1].item : undefined;
  if (!selfUrl) throw new Error('UsPageLayout: BreadcrumbList has no item URL for the current page');
  return {
    ...schema,
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.href ? `${SITE}${c.href}` : selfUrl,
    })),
  };
}

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
  // Formerly where the wordmark pointed (this cluster's hub). Since S78 the
  // wordmark goes to /us on every page by PM ruling and this prop is NOT READ.
  // It stays in the type only because all 61 pages pass it; removing it is a
  // separate cleanup across those files.
  homeHref: string;
  // The header nav for this cluster. Never links out of its own cluster. REQUIRED
  // for the same reason.
  clusterNav: RelatedLink[];
  // S70 R5 (Law 195 as extended): the top-picks box, rendered inside the hero
  // directly after the byline so it sits in the first mobile screen. The cards and
  // every guide section below stay exactly where they were.
  topPicks?: React.ReactNode;
  // S77: set only by app/us/page.tsx. The hub is the root of the breadcrumb trail.
  isHub?: boolean;
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
  // homeHref is still accepted (every page passes it) but no longer read: S78
  // pointed the wordmark at /us everywhere by PM ruling. See UsHeader.
  clusterNav,
  topPicks,
  isHub = false,
}: UsPageLayoutProps) {
  const trail = buildTrail(title, isHub, breadcrumbParent);
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* THE RAIL TAKES EVERY tocItem, AND THAT IS NOT WHAT GuideLayout DOES.
          The UK layout filters product-card anchors out of its contents, because
          a /best route interleaves its cards into tocItems. MEASURED HERE BEFORE
          REUSING ANY OF THAT: zero /us pages spread products into tocItems,
          UsToolCard emits no anchor id at all, and every toc id resolves to a
          real section — 10/10 on cluster-flies, 12/12 on imported-fire-ants,
          13/13 on moths. So there is nothing to filter.

          COPYING THE UK FILTER WOULD HAVE BEEN ACTIVELY WRONG. It drops any
          title containing an em-dash, and /us/moths names two genuine sections
          "Division A — Moths That Damage Fabric" and "Division B — Moths in
          Stored Food". The UK rule would have deleted two real stages from that
          route's rail. Same component, different derivation, because the two
          estates structure their contents differently. */}
      <ProgressRail stages={tocItems} />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(deriveBreadcrumbSchema(schema as Schema, trail)) }}
        />
      ))}

      {/* S77: the UK header's look, US links only. See UsHeader.tsx. */}
      <UsHeader clusterNav={clusterNav} />

      {/* Hero */}
      <section className={`border-b border-[var(--color-rule)] bg-[var(--color-surface)] ${topPicks ? 'py-5 md:py-12' : 'py-12 md:py-16'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <nav
            aria-label="Breadcrumb"
            className={`${topPicks ? 'mb-3 flex-nowrap sm:flex-wrap md:mb-6' : 'mb-6 flex-wrap'} flex items-center gap-x-2 gap-y-1 text-sm text-[var(--color-ink-mute)]`}
          >
            {trail.map((c, i) => {
              // The current page always shows, so a trail never ends on a link or a
              // bare "/". On a phone with a top-picks box it is held to ONE line and
              // truncated, so the box stays in the first screen (S70 R5) — the old
              // layout hid it outright, which left the reader with "Home" alone.
              const clampOnPhone = !c.href && Boolean(topPicks) && trail.length > 1;
              return (
                <span key={i} className={`flex items-center gap-2 ${clampOnPhone ? 'min-w-0' : 'shrink-0'}`}>
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="shrink-0 whitespace-nowrap transition-colors hover:text-[var(--color-primary)]">
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className={`${trail.length > 1 ? 'text-[var(--color-ink)]' : ''} ${clampOnPhone ? 'min-w-0 truncate sm:whitespace-normal' : ''}`}
                    >
                      {c.label}
                    </span>
                  )}
                </span>
              );
            })}
          </nav>

          <h1 className={`${topPicks ? 'mb-2 text-2xl md:mb-4' : 'mb-4 text-3xl'} font-black leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl`}>{title}</h1>
          <p className={topPicks ? 'mb-2 max-w-3xl text-[15px] leading-snug text-[var(--color-ink-soft)] md:mb-6 md:text-xl' : 'mb-6 max-w-3xl text-lg text-[var(--color-ink-soft)] md:text-xl'}>{subtitle}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-ink-mute)]">
            <span>By the PestPro Index Team</span>
            <span className="hidden sm:inline">|</span>
            <span>Updated {lastUpdated}</span>
            <span className="hidden sm:inline">|</span>
            <span>{readingTime} read</span>
          </div>

          {topPicks}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h2 className="mb-3 text-sm font-bold text-[var(--color-ink)]">Contents</h2>
              <nav className="space-y-1">
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

              {relatedPages.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-2 text-sm font-bold text-[var(--color-ink)]">Related Pages</h2>
                  <ul className="space-y-1">
                    {relatedPages.map((page) => (
                      <li key={page.href}>
                        <Link href={page.href} className="text-sm text-[var(--color-teal-deep)] hover:underline">
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
        <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-sunk)] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">Keep Reading</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-ochre-edge)]"
                >
                  <h3 className="font-bold text-[var(--color-ink)] group-hover:text-[var(--color-teal-deep)] transition-colors">
                    {page.title}
                  </h3>
                  <span className="inline-block mt-3 text-sm text-[var(--color-teal-deep)] font-medium group-hover:translate-x-1 transition-transform">
                    Read more
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* S77: the US footer is now one band, in app/us/layout.tsx. The identity
          line and the research sentence that printed here moved into it verbatim. */}
    </div>
  );
}
