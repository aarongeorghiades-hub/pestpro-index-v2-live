// Server-safe structured-data component (no client state). Rendered inside the
// listing templates so the JSON-LD is emitted in the initial server HTML and
// matches the visible provider list. Emits:
//   - ItemList of LocalBusiness (the providers actually shown on the page)
//   - BreadcrumbList (the page's position in the site hierarchy)

const SITE = 'https://pestproindex.com';
const MAX_ITEMS = 50; // cap payload on large lists (e.g. London 380+)

export interface SchemaProvider {
  name: string;
  slug: string;
  phone?: string | null;
  postcode?: string | null;
  google_rating?: number | null;
  google_review_count?: number | null;
}

export interface Crumb {
  name: string;
  url: string;
}

export default function ListingSchema({
  providers,
  listName,
  listUrl,
  areaName,
  breadcrumbs,
}: {
  providers: SchemaProvider[];
  listName: string;
  listUrl: string;
  areaName?: string;
  breadcrumbs: Crumb[];
}) {
  const items = providers.slice(0, MAX_ITEMS);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    url: listUrl.startsWith('http') ? listUrl : `${SITE}${listUrl}`,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => {
      const business: Record<string, unknown> = {
        '@type': 'LocalBusiness',
        name: p.name,
        url: `${SITE}/provider/${p.slug}`,
      };
      if (p.phone) business.telephone = p.phone;
      if (areaName) business.areaServed = areaName;
      if (
        typeof p.google_rating === 'number' &&
        p.google_rating > 0 &&
        typeof p.google_review_count === 'number' &&
        p.google_review_count > 0
      ) {
        business.aggregateRating = {
          '@type': 'AggregateRating',
          ratingValue: p.google_rating,
          reviewCount: p.google_review_count,
        };
      }
      return { '@type': 'ListItem', position: i + 1, item: business };
    }),
  };

  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : `${SITE}${c.url}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} />
    </>
  );
}
