import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsToolCard from '../components/UsToolCard';
import { PRODUCTS_INDEX_NAV, PRODUCTS_INDEX_HOME } from '../components/productsIndexNav';
import { buildCardIndex } from '../lib/cardIndex';

// THE US PRODUCTS INDEX.
//
// NOTHING ON THIS PAGE IS WRITTEN DOWN HERE. Every product, every name, every
// bullet, every group heading and every count below is read out of the estate at
// build time by ../lib/cardIndex.ts. That module's header records how it is
// calibrated against the rendered estate. The consequence that matters: a card
// added to or removed from any /us route changes this page on the next build with
// no file hand-edited, and a card declared in a shape the extractor cannot read
// FAILS THE BUILD rather than quietly going missing from the index.
//
// WHY OCCURRENCES ARE NOT COLLAPSED TO PRODUCTS. Twenty-four ASINs are carded on
// more than one route, and seven of them carry a DIFFERENT name on different
// routes -- "Insect Screen, 20 x 20 Mesh Roll" against "No-See-Um Small Insect
// Screen, 20 x 20 Mesh Roll", the same product described for a different reader.
// Twenty-three carry different bullets. Deduplicating by ASIN would mean choosing
// one of those surfaces and discarding the other, which is precisely the collapse
// Law 104 forbids and precisely the many-name-surfaces case Law 60 names. Each
// card is therefore shown as its own page shows it, under that page.
//
// TWO POPULATIONS, BOTH STATED (Law 62). PRODUCT_COUNT counts distinct ASINs;
// ENTRY_COUNT counts card occurrences. They differ, both are correct, and the
// prose below names which is which rather than letting a reader assume one number.
//
// NO PRICE APPEARS HERE, AND NONE CAN. UsToolCard has no price field, and neither
// does the extracted record (Law 162: the structural form of Law 120).

const URL = 'https://pestproindex.com/us/products';

const index = buildCardIndex();

const ENTRY_COUNT = index.reduce(
  (n, g) => n + g.routes.reduce((m, r) => m + r.cards.length, 0),
  0,
);
const PRODUCT_COUNT = new Set(
  index.flatMap((g) => g.routes.flatMap((r) => r.cards.map((c) => c.asin))),
).size;
const ROUTE_COUNT = index.reduce((n, g) => n + g.routes.length, 0);

// Anchor ids are derived from the heading, so a group renamed on the hub renames
// its anchor here too rather than leaving a stale id behind.
const anchorId = (heading: string) =>
  heading.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const TITLE = `US Pest Control Products: ${PRODUCT_COUNT} Tools, Grouped by Pest`;
const DESCRIPTION = `Every product named across the US pest pages, grouped by the pest it is for, with a link to the page that explains why it is there. ${PRODUCT_COUNT} distinct products across ${ROUTE_COUNT} pages.`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      type: 'website',
      siteName: 'PestPro Index',
    },
  };
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'US Pest Guides', item: 'https://pestproindex.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: URL },
  ],
};

const tocItems = index.map((g) => ({ id: anchorId(g.heading), title: g.heading }));

export default function UsProductsIndexPage() {
  return (
    <UsPageLayout
      title="Every Product Named on the US Pages"
      subtitle={`One place to find any tool named anywhere on this estate. ${PRODUCT_COUNT} distinct products, grouped by the pest they are for, each sitting under the page that explains what it does and when it is the wrong choice.`}
      lastUpdated="September 2026"
      readingTime="Reference"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={PRODUCTS_INDEX_HOME}
      clusterNav={PRODUCTS_INDEX_NAV}
      schemas={[collectionSchema, breadcrumbSchema]}
    >
      <h2 id="what-this-is">What This Page Is, and What It Leaves Out</h2>
      <p>
        This is an index, not a recommendation. It lists every product named anywhere on
        the US pages so you can find one again without remembering which page it was on.
        The products are grouped by the pest they are for and, within a group, by the page
        that names them.
      </p>
      <p>
        <strong>Read the page before you buy from this list.</strong> Each product here is
        shown with the same mechanical description its own page gives it, and nothing else.
        What is missing is everything that decides whether it is the right thing to buy:
        which pest you actually have, whether the product works on that pest at all, what
        it can and cannot do, how to use it without harming yourself or an animal, and
        whether your state permits it. That reasoning is on the linked page in every case,
        and the link sits directly above each group of cards. A trap bought for the wrong
        animal is wasted; a trap set in a state that prohibits it is worse than wasted.
      </p>
      <p>
        Nothing here is ranked, scored or labeled a best buy, and no price appears on this
        page. Prices change and we do not track them. Availability changes too, and a link
        that opened a product when the page was written may open something else later.
      </p>
      <p>
        Two numbers describe this list and they are not the same number. There are{' '}
        <strong>{PRODUCT_COUNT} distinct products</strong> here, and{' '}
        <strong>{ENTRY_COUNT} entries</strong> across {ROUTE_COUNT} pages. The difference is
        products named on more than one page: a silicone sealant is the same tube whether
        you are shutting out scorpions or cluster flies, and it appears under both, described
        each time for the reader of that page.
      </p>

      {index.map((group) => (
        <section key={group.heading}>
          <h2 id={anchorId(group.heading)}>{group.heading}</h2>
          <p>{group.blurb}</p>

          {group.routes.map((route) => (
            <div key={route.slug}>
              <h3 id={route.slug}>
                <Link href={route.href}>{route.title}</Link>
              </h3>
              <p>
                {route.covers}{' '}
                <Link href={route.href}>Read the {route.title} page</Link> before buying any
                of the {route.cards.length === 1 ? 'product' : `${route.cards.length} products`}{' '}
                below.
              </p>
              {route.cards.map((card, i) => (
                <UsToolCard
                  key={`${route.slug}-${card.asin}-${i}`}
                  name={card.name}
                  whatItDoes={card.whatItDoes}
                  asin={card.asin}
                />
              ))}
            </div>
          ))}
        </section>
      ))}
    </UsPageLayout>
  );
}
