import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged. Award labels, rank numerals
// and card order UNCHANGED as ruled.
//
// THE B000BQT5IG STANDING BAR DOES NOT REACH THIS ROUTE. It binds /best/ant-killers,
// which is a different page; that ASIN is not carded here. Checked before editing.
//
// AND THE PAGE IS NOT WHAT ITS TITLE SAYS. The route is /best/ant-gel-bait and the H1
// reads "Best Ant Killer Gel". Of the five products, ONE is a bait — the Nippon liquid,
// item form Liquid — and one is pre-baited stations. The other three are a powder and
// two sprays, which kill on contact and do not go back to the nest. The old description
// promised "Borax gels, fipronil baits and indoxacarb"; not one of those three actives
// is named on any listing here. Description and subtitle corrected; title and H1 held.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Ant Killer Gel UK 2026: Kill the Whole Colony",
    description:
      "Only a bait reaches the nest. Five ant products compared on their own listings — which are baits, which kill on contact, and why the difference decides it.",
    alternates: { canonical: "https://pestproindex.com/best/ant-gel-bait" },
    openGraph: {
      title: "Best Ant Killer Gel UK 2026: Kill the Whole Colony",
      description:
        "Only a bait reaches the nest. Five ant products compared on their own listings — which are baits, which kill on contact, and why the difference decides it.",
      url: "https://pestproindex.com/best/ant-gel-bait",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Ant Killer Gel UK 2026: Kill the Whole Colony",
  description:
    "Only a bait reaches the nest. Five ant products compared on their own listings — which are baits, which kill on contact, and why the difference decides it.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/ant-gel-bait" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pestproindex.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://pestproindex.com/best" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Ant Killer Gel UK 2026",
      item: "https://pestproindex.com/best/ant-gel-bait",
    },
  ],
};

// S67 R8 — THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). The body now answers
// the same questions from a source, and the "how long does it take" answer in particular
// is better made by NC State's own words than by an unsourced figure.

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); the citation names the host actually read (S59-A).
const SRC = {
  ncsu: "https://content.ces.ncsu.edu/tips-for-effective-ant-baiting",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
  tocLabel: string;
  tocName: string;
};

// Feature text and comparison cells rebuilt from the banked listings' own titles, detail
// tables and feature bullets (S52-E), fetched 2026-09-01, inside the S45-C window.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B000TAUBSC",
    rank: 1,
    cardName: "Nippon Ant Killer Gel 25g — Liquid Bait, Colony Elimination",
    cardLabel: "Best Overall",
    features: [
      "Active substance stated on the listing: spinosad",
      "Item form listed as Liquid; 25g",
      "Listed as carried back to the nest by worker ants",
      "Listed as usable in a bait station or standalone",
      "Target species listed as Ant",
    ],
    tableCells: ["Nippon Ant Killer 25g", "Bait — spinosad", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Nippon Ant Killer Gel 25g",
    tocLabel: "Best Overall",
    tocName: "Nippon Ant Killer Gel",
  },
  {
    anchorId: "best-powder",
    asin: "B000TAW39M",
    rank: 2,
    cardName: "Nippon Ant Killer Powder 500g",
    cardLabel: "Best Powder",
    features: [
      "Item form listed as Powder; 500g",
      "Listed as killing on contact — not a bait",
      "The maker claims up to 6 months of control",
      "Listed for indoor and outdoor use",
      "Listed for cockroaches, beetles, earwigs, silverfish and woodlice as well",
    ],
    tableCells: ["Nippon Ant Killer Powder 500g", "Contact powder — active not stated", "Best Powder"],
    h2Label: "Best Powder",
    h2Name: "Nippon Ant Killer Powder 500g",
    tocLabel: "Best Powder",
    tocName: "Nippon Ant Killer Powder",
  },
  {
    anchorId: "best-spray",
    asin: "B000TAP1R8",
    rank: 3,
    cardName: "Nippon Ant & Crawling Insect Killer Spray 750ml",
    cardLabel: "Best Spray",
    features: [
      "Item form listed as Spray; 750ml, ready to use",
      "A contact spray — not a bait",
      "Listed as suitable for use on soft furnishings",
      "Target species field on the listing reads Flea",
      "Directions text states it contains cypermethrin",
    ],
    tableCells: ["Nippon Ant & Crawling Insect Spray 750ml", "Contact spray — cypermethrin", "Best Spray"],
    h2Label: "Best Spray",
    h2Name: "Nippon Ant & Crawling Insect Killer Spray 750ml",
    tocLabel: "Best Spray",
    tocName: "Nippon Ant & Crawling Insect Spray",
  },
  {
    anchorId: "best-indoor",
    asin: "B0B71D3QS1",
    rank: 4,
    cardName: "Zero In Ant & Cockroach Killer 1.5L Ready-to-Use",
    cardLabel: "Best Indoor",
    features: [
      "Active substances stated on the listing: cypermethrin and benzalkonium chloride",
      "1.5L pressurised pump spray — a contact treatment, not a bait",
      "Listed for fan spray or crack-and-crevice application",
      "Listed for indoor and outdoor use",
      "Target species listed as Insects",
    ],
    tableCells: [
      "Zero In Ant & Cockroach Killer 1.5L",
      "Contact spray — cypermethrin",
      "Best Indoor",
    ],
    h2Label: "Best Indoor",
    h2Name: "Zero In Ant & Cockroach Killer 1.5L",
    tocLabel: "Best Indoor",
    tocName: "Zero In Ant & Cockroach Killer",
  },
  {
    anchorId: "best-stations",
    asin: "B086DX7HM7",
    rank: 5,
    cardName: "Doff 2-in-1 Ant & Nest Bait Killer Stations",
    cardLabel: "Best Bait Stations",
    features: [
      "Pre-baited stations — the second bait product here",
      "Listed for indoor and outdoor use",
      "Listed as safe around children and pets when used as instructed",
      "Target species listed as Ant",
      "Active substance not stated on the listing",
    ],
    tableCells: ["Doff 2-in-1 Ant & Nest Bait Stations", "Bait — active not stated", "Best Bait Stations"],
    h2Label: "Best Bait Stations",
    h2Name: "Doff 2-in-1 Ant & Nest Bait Killer Stations",
    tocLabel: "Best Bait Stations",
    tocName: "Doff 2-in-1 Ant & Nest Killer",
  },
];

const tocItems = [
  { id: "situation", title: "Bait or Spray — the Whole Decision" },
  { id: "legal", title: "What the Listings Tell You" },
  { id: "limits", title: "Where a Bait Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Bait Is Not the Answer" },
  { id: "using", title: "Baiting Properly" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestAntGelBaitPage() {
  return (
    <GuideLayout
      title="Best Ant Killer Gel UK 2026: Kill the Whole Colony"
      subtitle="Two baits and three contact treatments, described by what their own listings state — and why only one of those two kinds reaches the nest"
      lastUpdated="September 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Ants: Complete UK Guide", href: "/guides/how-to-get-rid-of-ants" },
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "Wasp Nest Removal: Complete UK Guide", href: "/guides/wasp-nest-removal" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "How to Get Rid of Fleas: Complete UK Guide", href: "/guides/how-to-get-rid-of-fleas" },
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "Restaurant Pest Control: UK Compliance Guide", href: "/guides/restaurant-pest-control" },
        { title: "How to Get Rid of Moths", href: "/guides/how-to-get-rid-of-moths" },
        { title: "Carpet Beetle Control: Complete UK Guide", href: "/guides/carpet-beetle-control" },
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
      ]}
      relatedProducts={[
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Cockroach Gel Bait UK 2026", href: "/best/cockroach-gel-bait" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Indoor Fly Killers UK 2026", href: "/best/fly-killer-indoor" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        The ants you can see are a fraction of the colony, and they are the part
        that does not matter. Everything on this page comes down to whether a
        product goes back to the nest or kills what it touches.
      </p>

      {/* DECISION BLOCK — situation first. The what-the-listings-say line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You want the colony gone, not the trail.</strong> Only a
            bait travels back to the nest —{" "}
            <a href="#situation" className="underline">
              bait or spray
            </a>
            .
          </li>
          <li>
            <strong>You want to know what you are actually buying.</strong>{" "}
            Three of these five name an active substance &mdash;{" "}
            <a href="#legal" className="underline">
              what the listings tell you
            </a>
            .
          </li>
          <li>
            <strong>You baited and the ants are still there after a week.</strong>{" "}
            NC State says that is expected (
            <a href={SRC.ncsu} rel="nofollow" className="underline">
              NC State Extension
            </a>
            ) —{" "}
            <a href="#limits" className="underline">
              where a bait does not help
            </a>
            .
          </li>
          <li>
            <strong>You want a bait.</strong> Two here are —{" "}
            <a href="#best-overall" className="underline">
              the 25g liquid
            </a>{" "}
            and{" "}
            <a href="#best-stations" className="underline">
              the pre-baited stations
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Bait or Spray — the Whole Decision</h2>
      <p>
        A bait is food with an insecticide in it. Foragers carry it home and feed
        it to the rest, which is the only mechanism on this page that reaches a
        queen. NC State Extension is direct about the trade-off that makes it
        work:{" "}
        <em>
          &ldquo;Most ant baits are slow-acting and do not kill the ants quickly.
          Therefore, you may continue to see ants for a week or more after
          baiting.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ncsu} rel="nofollow">
          NC State Extension
        </a>
        ).
      </p>
      <p>
        A contact spray or powder does the opposite. It kills the ant it lands
        on, immediately, and that ant never goes home. Three of the five products
        below work that way, and the Nippon liquid&rsquo;s own listing states the
        alternative: worker ants carry the bait back to the nest.
      </p>

      {/* [1] What the listings say */}
      <h2 id="legal">What the Listings Tell You</h2>
      <p>
        Three of the five name an active substance. The Nippon liquid states
        spinosad; the Nippon 750ml spray states cypermethrin; the Zero In spray
        states cypermethrin with benzalkonium chloride. The powder and the Doff
        stations name none, so what is in them is on the pack and not on the page
        you buy from.
      </p>
      <p>
        One listing field is worth reading before you buy: the Nippon 750ml
        spray&rsquo;s target species reads <em>Flea</em>, not Ant, even though it
        is sold as an ant and crawling insect killer. That is what the listing
        says, recorded rather than tidied.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Bait Does Not Help</h2>
      <p>
        <strong>It is not quick, and impatience is what breaks it.</strong> The
        slow action is the point; spraying the trail while a bait is down kills
        the couriers.
      </p>
      <p>
        <strong>It has to be eaten.</strong> NC State:{" "}
        <em>
          &ldquo;baits are effective only if they are eaten by the ants and not
          all baits are equally attractive to different ant species.&rdquo;
        </em>{" "}
        An untouched bait is not a failed product so much as the wrong bait, or
        the wrong place.
      </p>
      <p>
        <strong>It has to keep being there.</strong>{" "}
        <em>
          &ldquo;Make sure you provide enough bait and check it daily to make
          sure that it isn&rsquo;t depleted.&rdquo;
        </em>{" "}
        A bait point that runs dry mid-treatment stops the process partway.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Bait or contact — read the item form</h3>
      <p>
        The listing&rsquo;s own item form settles it: Liquid and pre-baited
        stations are baits; Powder and Spray are contact treatments. The table
        states which each is.
      </p>
      <h3>2. Whether the active substance is named</h3>
      <p>
        Three of five name one, and two of the three state it in the description
        rather than in a detail field. If you need to know what you are putting
        near food preparation or pets, that is what to read.
      </p>
      <h3>3. Where it is going</h3>
      <p>
        Three of these are listed for indoor and outdoor use. One is listed as
        suitable for soft furnishings. That decides more in practice than any
        ranking would.
      </p>

      {products.map((p, i) => (
        <div key={p.asin}>
          <h2 id={p.anchorId}>
            {p.h2Label} &mdash; {p.h2Name}
          </h2>
          <div className="not-prose my-6">
            <ProductCard
              name={p.cardName}
              features={p.features}
              asin={p.asin}
              bestFor={p.cardLabel}
              rank={p.rank}
            />
          </div>
          <p>
            {
              [
                "The clearest bait on the page and the only product here naming spinosad. Its listing states that worker ants carry it back to the nest and that it is useful where the nest site is unknown, which is the case a bait exists for.",
                "A 500g contact powder rather than a bait, listed as killing on contact and as covering cockroaches, beetles, earwigs, silverfish and woodlice as well as ants. The maker claims up to six months of control; no active substance is named.",
                "A 750ml ready-to-use contact spray listed as suitable for soft furnishings. Its target species field reads Flea, and its directions text states it contains cypermethrin.",
                "The largest container here at 1.5 litres, naming cypermethrin with a benzalkonium chloride antibacterial agent. Fan spray or crack-and-crevice.",
                "Pre-baited stations, so the second product on the page that works by being carried home rather than by contact. Listed for indoor and outdoor use and as safe around children and pets when used as instructed; the active substance is not named.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Bait Is Not the Answer</h2>
      <p>
        <strong>Take the food away first.</strong> A bait competes with whatever
        is already on the worktop, and it loses.
      </p>
      <p>
        <strong>Follow the trail to where they come in.</strong> Sealing the entry
        is the only step here that stops the next colony as well as this one.
      </p>
      <p>
        <strong>For a nest under a slab or in a wall,</strong> a surface product
        is treating the symptom — that is the point to get someone in.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Baiting Properly</h2>
      <ol>
        <li>
          <strong>Put bait on the trail, not where you saw one ant.</strong> The
          trail is the supply line to the nest.
        </li>
        <li>
          <strong>Do not spray a trail you are baiting.</strong> Killing the
          couriers is the most common way a bait treatment fails.
        </li>
        <li>
          <strong>Check the bait daily and top it up.</strong> That is NC
          State&rsquo;s instruction above, and it is the step most often skipped.
        </li>
        <li>
          <strong>Expect a week or more of visible ants.</strong> Slow action is
          the mechanism working, not failing.
        </li>
        <li>
          <strong>If nothing is taken in a few days, move it or change it.</strong>{" "}
          Not all baits suit all species.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">The Five Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Bait or contact, and active substance
              </th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.asin} className="align-top">
                {p.tableCells.map((c, i) => (
                  <td key={i} className="p-2 border-b">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FindProviderCTA
        heading="Ants coming back every summer?"
        subtext="A nest in a cavity or under a slab is not a worktop problem. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
