import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps",
    description:
      "Pheromone moth traps for UK wardrobes, drawers and kitchens. Which moth you have, what a trap can and cannot do, and six products compared.",
    alternates: { canonical: "https://pestproindex.com/best/moth-traps" },
    openGraph: {
      title: "Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps",
      description:
        "Pheromone moth traps for UK wardrobes, drawers and kitchens. Which moth you have, what a trap can and cannot do, and six products compared.",
      url: "https://pestproindex.com/best/moth-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Moth Traps UK 2026: Clothes Moth & Pantry Moth Traps",
  description:
    "Pheromone moth traps for UK wardrobes, drawers and kitchens. Which moth you have, what a trap can and cannot do, and six products compared.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-06",
  author: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/moth-traps",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pestproindex.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best",
      item: "https://pestproindex.com/best",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Moth Traps UK 2026",
      item: "https://pestproindex.com/best/moth-traps",
    },
  ],
};

// S66 R8 — THE FAQ IS REMOVED, BLOCK AND STRUCTURED DATA TOGETHER. All six answers
// were either given by the body above them — whether traps work and their limits at
// #limits, the clothes/food moth distinction at #which-moth, how many and how long
// at #what-decides and in the comparison table, cedar at #alternatives — or
// answerable by a general search without this page's products. FAQPage structured
// data that restates the body is not an asset; it is a second copy to keep in step.

// SOURCES. Every quotation on this page is extracted by byte range from a body saved
// under ~/pp-s66r8/sources/, or from a banked Amazon listing, and verified by exact
// string match before it was written here (Law 164). Each citation names the host
// actually read (S59-A).
const SRC = {
  gov: "https://www.gov.uk/product-safety-alerts-reports-recalls/product-safety-report-fuxue-mothballs-2408-0123",
  eh: "https://www.english-heritage.org.uk/learn/conservation/clothes-moth-research/operation-clothes-moth-results/",
  nt: "https://www.nationaltrust.org.uk/discover/history/art-collections/expert-tips-insect-pests",
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
};

// S66 R8. AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED on every surface
// — cardLabel, h2Label and the comparison table's award cell alike. What changed is
// NAME and FEATURE text, rebuilt from the banked Amazon bodies fetched 2026-09-01 and
// re-read this round, inside the S45-C freshness window. A property is asserted only
// where the listing's own feature text, detail table or fetched title states it
// (S52-E, S50-H); a comparison cell the listing does not state reads "not stated".
//
// TWO RECORDS CARRIED A LAW 188 DISAGREEMENT AND ARE LEFT EXACTLY AS THEY WERE.
// B0189FU8KO renders cardLabel "Best Pantry Moth" under h2Label "Best Pantry Moth
// Trap", and B01NCZJ2P4 renders "Best Professional-Grade" under "Best Professional".
// Law 188 would correct the card to its own heading, but this round's ruling holds
// every label surface unchanged, so both stand and are reported instead.
//
// ONE BRAND WAS FALSE ON THREE SURFACES. Record 5 was named "SiSi"; the banked body
// gives Brand :: Biocare and a byline of "Visit the Biocare Store". Corrected on the
// card name, the heading name and the comparison table's product cell.
const products: ProductRecord[] = [
  {
    anchorId: "best-clothes",
    asin: "B0B21S966L",
    rank: 1,
    cardName: "MothPrevention Clothes Moth Traps (3-Pack)",
    cardLabel: "Best Clothes Moth Trap",
    features: [
      "Listed as a refillable clothes moth trap",
      "Sold as a 3-pack",
      "Listing describes it as odour-free and natural",
      "For wardrobes and stored clothing",
    ],
    tableCells: [
      "MothPrevention Clothes Moth Traps",
      "Best Clothes Moth",
      "Clothes moths",
      "3 traps",
      "not stated",
    ],
    h2Label: "Best Clothes Moth Trap",
    h2Name: "MothPrevention Clothes Moth Traps",
  },
  {
    anchorId: "best-pantry",
    asin: "B0189FU8KO",
    rank: 2,
    cardName: "Demi Diamond Food Moth Pheromone Traps",
    cardLabel: "Best Pantry Moth",
    features: [
      "Listed as food moth pheromone traps",
      "3 traps and 20 pads per pack",
      "Target species listed as moth",
      "The listing carries no feature text beyond its title",
    ],
    tableCells: [
      "Demi Diamond Food Moth Traps",
      "Best Pantry Moth",
      "Food moths",
      "3 traps, 20 pads",
      "not stated",
    ],
    h2Label: "Best Pantry Moth Trap",
    h2Name: "Demi Diamond Food Moth Pheromone Traps",
  },
  {
    anchorId: "best-value",
    asin: "B07SS5DDWH",
    rank: 3,
    cardName: "Zero In Clothes Moth Trap (Twinpack)",
    cardLabel: "Best Value",
    features: [
      "Two traps per pack",
      "Hangs on a built-in hook or stands free",
      "Listed as poison-free, using pheromones without poisons or chemicals",
      "Listing states it is for monitoring infestations",
      "Disposable once the trap is full",
    ],
    tableCells: [
      "Zero In Clothes Moth Trap",
      "Best Value",
      "Clothes moths",
      "2 traps",
      "not stated",
    ],
    h2Label: "Best Value",
    h2Name: "Zero In Clothes Moth Trap",
  },
  {
    anchorId: "best-professional",
    asin: "B01NCZJ2P4",
    rank: 4,
    cardName: "Pest Expert Demi-Diamond Clothes Moth Pheromone Traps",
    cardLabel: "Best Professional-Grade",
    features: [
      "6 holders and 6 pheromone pads",
      "Pheromone listed as effective for up to 12 weeks",
      "Listing describes it as a professional monitoring tool",
      "Catches the male moth, halting reproduction",
      "Odourless and pesticide-free",
    ],
    tableCells: [
      "Pest Expert Demi-Diamond Traps",
      "Best Professional",
      "Clothes moths",
      "6 holders, 6 pads",
      "Up to 12 weeks",
    ],
    h2Label: "Best Professional",
    h2Name: "Pest Expert Demi-Diamond Traps",
  },
  {
    anchorId: "best-refill",
    asin: "B0086OZO12",
    rank: 5,
    cardName: "Biocare Clothes & Carpet Moth Trap Refills (20 Pads)",
    cardLabel: "Best Refills",
    features: [
      "20 pheromone refill pads",
      "Listing states MONITORING USE ONLY",
      "Each pad listed at approximately 13.4 x 5.8 cm",
      "For compatible holders and monitoring traps",
      "Odourless and pesticide-free",
    ],
    tableCells: [
      "Biocare Moth Trap Refill Pads",
      "Best Refills",
      "Clothes & carpet moths",
      "20 pads",
      "not stated",
    ],
    h2Label: "Best Refills",
    h2Name: "Biocare Moth Trap Refill Pads",
  },
  {
    anchorId: "best-repellent",
    asin: "B000LNFINU",
    rank: 6,
    cardName: "Zero In Cedarwood Moth Repellent Balls (20-Pack)",
    cardLabel: "Best Repellent",
    features: [
      "20 cedarwood balls per pack",
      "Made from 100% natural Eastern aromatic red cedar",
      "Listed as poison and chemical-free",
      "Listed as lasting up to 12 months",
      "Refreshed by rubbing with fine sandpaper",
    ],
    tableCells: [
      "Zero In Cedarwood Moth Balls",
      "Best Repellent",
      "All moths",
      "20 balls",
      "Up to 12 months",
    ],
    h2Label: "Best Repellent",
    h2Name: "Zero In Cedarwood Moth Balls",
  },
];

// The contents entry is DERIVED from the same fields the h2 renders, so an entry
// cannot say something the heading does not (the S66 R4 pattern).
const tocItems = [
  { id: "which-moth", title: "Which Moth Have You Got?" },
  { id: "mothballs", title: "Why Old-Style Mothballs Are Gone" },
  { id: "limits", title: "What a Pheromone Trap Will Not Do" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.h2Label} — ${p.h2Name}`,
  })),
  { id: "alternatives", title: "If a Trap Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "Best Moth Traps Compared" },
];

export default function BestMothTrapsPage() {
  return (
    <GuideLayout
      title="Best Moth Traps UK 2026"
      subtitle="Pheromone traps for wardrobes, drawers and kitchens, and cedar for storage"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "How to Get Rid of Moths",
          href: "/guides/how-to-get-rid-of-moths",
        },
        {
          title: "Carpet Beetle Control: Complete UK Guide",
          href: "/guides/carpet-beetle-control",
        },
        {
          title: "How to Get Rid of Fleas: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-fleas",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
        {
          title: "How to Get Rid of Bed Bugs: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-bed-bugs",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
        },
        {
          title: "Restaurant Pest Control: UK Compliance Guide",
          href: "/guides/restaurant-pest-control",
        },
        {
          title: "Hotel Pest Control: UK Compliance Guide",
          href: "/guides/hotel-pest-control",
        },
      ]}
      relatedProducts={[
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
        {
          title: "Best Carpet Beetle Treatments UK 2026",
          href: "/best/carpet-beetle-treatments",
        },
        {
          title: "Best Flea Treatments UK 2026",
          href: "/best/flea-treatments",
        },
        {
          title: "Best Bed Bug Treatments UK 2026",
          href: "/best/bed-bug-treatments",
        },
        {
          title: "Best Cockroach Killers UK 2026",
          href: "/best/cockroach-killers",
        },
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
        A pheromone trap catches adult male moths on a sticky board. That tells
        you what you have and how bad it is. It is not, on its own, how the
        problem ends — and the trap you need depends on which moth you have.
      </p>

      {/* DECISION BLOCK — situation first, product second, every line.
          NOT a card: no Amazon link, no price, no image, no award. It sits above
          the first h2 so a reader meets their own situation before a product. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You still have old-style mothballs in a cupboard.</strong>{" "}
            Naphthalene mothballs are banned from sale here —{" "}
            <a href={SRC.gov} rel="nofollow" className="underline">
              GOV.UK product safety
            </a>
            . Do not use them up.
          </li>
          <li>
            <strong>You want the moths gone, not counted.</strong> A pheromone
            trap catches males only and one of the listings here says{" "}
            <em>monitoring use only</em>. Read{" "}
            <a href="#limits" className="underline">
              what a trap will not do
            </a>{" "}
            first.
          </li>
          <li>
            <strong>Holes in wool or silk, moths in the wardrobe.</strong>{" "}
            Clothes moth pheromone —{" "}
            <a href="#best-clothes" className="underline">
              the three-pack refillable trap
            </a>
            .
          </li>
          <li>
            <strong>Moths in flour, rice or cereal.</strong> A different
            pheromone entirely —{" "}
            <a href="#best-pantry" className="underline">
              the food moth traps
            </a>
            .
          </li>
          <li>
            <strong>You want the longest stated lure life.</strong> One listing
            here states up to 12 weeks —{" "}
            <a href="#best-professional" className="underline">
              the six-holder set
            </a>
            .
          </li>
          <li>
            <strong>You already own trap holders.</strong> Refill pads rather
            than whole traps —{" "}
            <a href="#best-refill" className="underline">
              the 20-pad refills
            </a>
            .
          </li>
          <li>
            <strong>Nothing is flying yet and you are storing knitwear.</strong>{" "}
            Cedar, not a trap —{" "}
            <a href="#best-repellent" className="underline">
              the cedarwood balls
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="which-moth">Which Moth Have You Got?</h2>
      <p>
        Clothes moths and food moths take different pheromones, so the wrong trap
        catches nothing. The National Trust describes the clothes moth damage
        pattern:{" "}
        <em>
          &ldquo;The larvae feed on wool and other keratinous materials, creating
          ragged patches or holes.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nt} rel="nofollow">
          National Trust
        </a>
        ). Food moths are a kitchen problem instead — flour, rice, cereal, dried
        goods — and never touch a jumper.
      </p>
      <p>
        Where you live matters more than most people expect. English
        Heritage&rsquo;s public trapping survey found{" "}
        <em>
          &ldquo;flats or apartments were more susceptible to clothes moths&rdquo;
        </em>{" "}
        and that{" "}
        <em>
          &ldquo;Clothes moths numbers were higher in older, pre-1950 properties
          as they have more voids, fireplaces and attics than modern
          houses.&rdquo;
        </em>{" "}
        (
        <a href={SRC.eh} rel="nofollow">
          English Heritage
        </a>
        ). An old flat with open fireplaces is the high-risk case.
      </p>

      {/* [1] Legal */}
      <h2 id="mothballs">Why Old-Style Mothballs Are Gone</h2>
      <p>
        If you have inherited a box of traditional mothballs, do not use them.
        Naphthalene mothballs are banned from consumer sale in the UK, and
        GOV.UK product safety reports withdraw them where they turn up:{" "}
        <em>
          &ldquo;The product does not meet the requirements of the Registration,
          Evaluation, Authorisation &amp; restriction of Chemicals (REACH)
          Enforcement Regulations 2008.&rdquo;
        </em>{" "}
        (
        <a href={SRC.gov} rel="nofollow">
          GOV.UK
        </a>
        ).
      </p>
      <p>
        That is why the repellent on this page is cedarwood. Its own listing
        offers it as an alternative to traditional, old-fashioned moth balls.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">What a Pheromone Trap Will Not Do</h2>
      <p>
        A pheromone lure imitates the female&rsquo;s scent, so it draws{" "}
        <strong>males</strong>. Larvae are what eat your clothes, and a trap does
        not touch them. The Pest Expert listing is straightforward about the
        mechanism — it catches the male moth to halt reproduction — and the
        Biocare refill listing goes further, stating{" "}
        <em>&ldquo;MONITORING USE ONLY&rdquo;</em> on its own feature text.
      </p>
      <p>
        So a trap tells you whether you have a problem, roughly how big it is,
        and whether it is getting better. Clearing it takes cleaning and
        laundering as well. Any figure for how many moths per week means an
        infestation is one we do not have a source for, so this page does not
        give one.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Which moth</h3>
      <p>
        Covered above, and it rules out most of this page immediately. Clothes
        moth traps and food moth traps are not interchangeable.
      </p>
      <h3>2. What the listing actually states about lure life</h3>
      <p>
        Only one of the six listings here states how long its pheromone lasts —
        the Pest Expert set, at up to 12 weeks. The others do not state a figure,
        and the comparison table at the bottom says so rather than filling the
        gap. If lure life matters to you, that is the one listing that commits to
        a number.
      </p>
      <h3>3. Trap or refill</h3>
      <p>
        If you already own holders, refill pads fit them; if you do not, refills
        are useless on their own. The Biocare pads are listed at approximately
        13.4 x 5.8 cm, which is the number that decides whether they fit what you
        have.
      </p>

      {/* Product 1 */}
      <h2 id={products[0].anchorId}>
        {products[0].h2Label} &mdash; {products[0].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[0].cardName}
          features={products[0].features}
          asin={products[0].asin}
          bestFor={products[0].cardLabel}
          rank={products[0].rank}
        />
      </div>
      <p>
        For a wardrobe or a chest of drawers where you have seen holes. It is
        sold as a three-pack and the listing describes it as refillable, so the
        holders stay and the pads are replaced. The listing does not state a lure
        life, so this page does not give one for it.
      </p>

      {/* Product 2 */}
      <h2 id={products[1].anchorId}>
        {products[1].h2Label} &mdash; {products[1].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[1].cardName}
          features={products[1].features}
          asin={products[1].asin}
          bestFor={products[1].cardLabel}
          rank={products[1].rank}
        />
      </div>
      <p>
        For the kitchen rather than the wardrobe. Three traps and twenty pads per
        pack. This listing carries no feature text beyond its title, so the card
        above is everything it states — including no lure life and no named moth
        species.
      </p>

      {/* Product 3 */}
      <h2 id={products[2].anchorId}>
        {products[2].h2Label} &mdash; {products[2].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[2].cardName}
          features={products[2].features}
          asin={products[2].asin}
          bestFor={products[2].cardLabel}
          rank={products[2].rank}
        />
      </div>
      <p>
        Two traps, and the only listing here that says outright what it is for:
        monitoring infestations. It folds to hang on a rail or stands in a
        drawer, and it is listed as poison-free, which is the relevant point if
        it is going where children or pets can reach.
      </p>

      {/* Product 4 */}
      <h2 id={products[3].anchorId}>
        {products[3].h2Label} &mdash; {products[3].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[3].cardName}
          features={products[3].features}
          asin={products[3].asin}
          bestFor={products[3].cardLabel}
          rank={products[3].rank}
        />
      </div>
      <p>
        Six holders and six pads, and the only listing here that commits to a
        lure life: up to 12 weeks. Its own text calls it a professional
        monitoring tool and describes the mechanism plainly — it catches the
        male, so no new eggs. If you want to cover several rooms and check them
        over a season, this is the set that states enough to plan around.
      </p>

      {/* Product 5 */}
      <h2 id={products[4].anchorId}>
        {products[4].h2Label} &mdash; {products[4].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[4].cardName}
          features={products[4].features}
          asin={products[4].asin}
          bestFor={products[4].cardLabel}
          rank={products[4].rank}
        />
      </div>
      <p>
        Twenty pads for holders you already own. Check the size before you buy:
        the pads are listed at approximately 13.4 x 5.8 cm and fit compatible
        holders, which is not the same as fitting whatever you have. The listing
        is explicit that these are for monitoring.
      </p>

      {/* Product 6 */}
      <h2 id={products[5].anchorId}>
        {products[5].h2Label} &mdash; {products[5].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[5].cardName}
          features={products[5].features}
          asin={products[5].asin}
          bestFor={products[5].cardLabel}
          rank={products[5].rank}
        />
      </div>
      <p>
        Not a trap at all — a repellent for storage. Twenty balls of Eastern
        aromatic red cedar, listed as poison and chemical-free and as lasting up
        to 12 months, refreshed by rubbing with fine sandpaper. This is the
        modern stand-in for the banned mothballs above, and it belongs in a box
        of stored knitwear rather than in a room with a live infestation.
      </p>

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Trap Is Not the Answer</h2>
      <p>
        <strong>Clean before you store.</strong> The National Trust&rsquo;s
        advice is that{" "}
        <em>&ldquo;moths rarely eat clean silk or wool&rdquo;</em> (
        <a href={SRC.nt} rel="nofollow">
          National Trust
        </a>
        ), so washing or dry-cleaning before packing away does more than any
        trap.
      </p>
      <p>
        <strong>Freeze what is already damaged.</strong> For a jumper with a hole
        in it, the same guidance is to{" "}
        <em>
          &ldquo;pop it in a plastic bag and leave it in the freezer for about 14
          days&rdquo;
        </em>
        , which kills eggs that survive a modern low-temperature wash.
      </p>
      <p>
        <strong>Old mothballs are not an option.</strong> See above — they are
        banned from sale here.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Match the pheromone to the moth.</strong> A clothes moth trap
          in a food cupboard catches nothing.
        </li>
        <li>
          <strong>Put them where the clothes are.</strong> Inside the wardrobe or
          the drawer, not in the room.
        </li>
        <li>
          <strong>Read them as a count, not a cure.</strong> Rising catches mean
          the problem is growing; falling catches mean what you are doing is
          working.
        </li>
        <li>
          <strong>Replace the pad, not the plan.</strong> A refilled trap keeps
          monitoring; it does not remove larvae from a carpet.
        </li>
        <li>
          <strong>Clean and launder alongside.</strong> That is the part that
          ends it.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Moth Traps Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
              <th className="text-left p-2 border-b font-semibold">
                Target moth
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Pack as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Lure life as listed
              </th>
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
        heading="Moths beyond a wardrobe?"
        subtext="For a carpet infestation or a whole house, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
