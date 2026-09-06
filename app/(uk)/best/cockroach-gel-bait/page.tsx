import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged, as ruled.
//
// AND THE TITLE IS THE PAGE'S BIGGEST PROBLEM, WHICH THIS ROUND REPORTS RATHER THAN
// HIDES. The route is /best/cockroach-gel-bait and the H1 reads "Best Cockroach Gel
// Bait UK 2026". NOT ONE OF THE FOUR CARDED PRODUCTS IS A GEL BAIT. Read from the
// banked listings: a treatment kit whose item form is Spray, a 5-litre trigger spray,
// a 250ml aerosol and a 1.5L pump spray. The old description promised "professional-
// grade gels, bait stations and IGR products" and the page cards none of the three.
// The description and subtitle are corrected here; the title and H1 are held by the
// ruling and the mismatch is referred.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Cockroach Gel Bait UK 2026: Kill the Nest",
    description:
      "What is actually sold for cockroaches in the UK: four contact sprays compared on their own listings, and why baiting and sanitation do the real work.",
    alternates: { canonical: "https://pestproindex.com/best/cockroach-gel-bait" },
    openGraph: {
      title: "Best Cockroach Gel Bait UK 2026: Kill the Nest",
      description:
        "What is actually sold for cockroaches in the UK: four contact sprays compared on their own listings, and why baiting and sanitation do the real work.",
      url: "https://pestproindex.com/best/cockroach-gel-bait",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Cockroach Gel Bait UK 2026: Kill the Nest",
  description:
    "What is actually sold for cockroaches in the UK: four contact sprays compared on their own listings, and why baiting and sanitation do the real work.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/cockroach-gel-bait" },
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
      name: "Best Cockroach Gel Bait UK 2026",
      item: "https://pestproindex.com/best/cockroach-gel-bait",
    },
  ],
};

// S67 R8 — THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). Every question is
// answered by the body above or by a general search, and two of them turned on the gel
// bait this page does not card.

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); the citation names the host actually read (S59-A).
const SRC = {
  ufl: "https://ask.ifas.ufl.edu/publication/IN1190",
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

// AWARD LABELS, RANK NUMERALS, ANCHOR IDS AND CARD ORDER UNCHANGED. Feature text and
// comparison cells rebuilt from the banked listings' OWN FEATURE BULLETS (S52-E), not
// from a body-wide search: a raw grep over the saved page returns "cypermethrin" on all
// four, because Amazon's recommendation carousels are in the same file.
//
// CLAIMS REMOVED: "Combines gel bait, spray and powder" — the kit's item form is Spray
// and no bullet mentions gel; "3-month residual barrier" — the listing says 12 weeks for
// a different product and nothing for this one; "Disinfects as well as kills — ideal for
// kitchens and bathrooms" — the listing says "Disinfectant properties", which is not the
// same claim; "Trusted Rentokil formulation" — trusted is banned in our own voice.
//
// ONE CARD NAME CONTRADICTS ITS OWN LISTING AND IS FLAGGED, NOT SILENTLY CHANGED: the
// NOPE! product is carded as "500ml" and its listing reads "(5L) … (Pack of 2)", unit
// count 10,000 millilitres. The listing figure is in the features and the table.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B071K8X44X",
    rank: 1,
    cardName: "Pest Expert Cockroach Killer Kit (Advanced)",
    cardLabel: "Best Overall",
    features: [
      "Item form listed as Spray; target species listed as Cockroach",
      "Listed as covering 3-4 rooms",
      "The maker claims a residue that continues to protect for up to 12 weeks",
      "Listed as low-odour and non-staining",
      "Supplied with a step-by-step advice sheet",
    ],
    tableCells: ["Pest Expert Cockroach Killer Kit (Advanced)", "Spray; cypermethrin with pyriproxyfen", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Cockroach Killer Kit (Advanced)",
    tocLabel: "Best Overall",
    tocName: "Pest Expert Cockroach Killer Kit",
  },
  {
    anchorId: "best-alternative",
    asin: "B0B1QNQ7Y1",
    rank: 2,
    cardName: "NOPE! CP Cockroach Killer Spray 500ml",
    cardLabel: "Best Alternative",
    features: [
      "Listed as 5 litres, pack of two — 10 litres in total",
      "Active substance stated on the listing: cypermethrin",
      "Listed as an odourless trigger spray for spot treatments",
      "Listed as having disinfectant properties",
      "Target species listed as Cockroach",
    ],
    tableCells: ["NOPE! CP Cockroach Killer Spray", "Cypermethrin; 5L x 2 as listed", "Best Alternative"],
    h2Label: "Best Alternative",
    h2Name: "NOPE! CP Cockroach Killer Spray 500ml",
    tocLabel: "Best Alternative",
    tocName: "NOPE! CP Cockroach Killer Spray",
  },
  {
    anchorId: "best-spray",
    asin: "B000TARC7A",
    rank: 3,
    cardName: "Rentokil Insectrol Insect Killer Spray 250ml",
    cardLabel: "Best Spray",
    features: [
      "Active substances stated on the listing: permethrin and D-allethrin",
      "250ml aerosol, listed at 3.53 ounces",
      "Listed as intended for indoor use",
      "Listed for fleas, ants, cockroaches, earwigs and bed bugs",
      "Target species listed as Insects",
    ],
    tableCells: ["Rentokil Insectrol 250ml", "Permethrin + D-allethrin", "Best Spray"],
    h2Label: "Best Spray",
    h2Name: "Rentokil Insectrol Insect Killer Spray 250ml",
    tocLabel: "Best Spray",
    tocName: "Rentokil Insectrol Insect Killer Spray",
  },
  {
    anchorId: "best-budget",
    asin: "B0B71D3QS1",
    rank: 4,
    cardName: "Zero In Ant & Cockroach Killer 1.5L Ready-to-Use",
    cardLabel: "Best Budget",
    features: [
      "Active substances stated on the listing: cypermethrin and benzalkonium chloride",
      "1.5L pressurised pump spray with an adjustable nozzle",
      "Listed for fan spray or crack-and-crevice treatment",
      "Listed for indoor and outdoor use",
      "Target species listed as Insects",
    ],
    tableCells: [
      "Zero In Ant & Cockroach Killer 1.5L",
      "Cypermethrin + benzalkonium chloride",
      "Best Budget",
    ],
    h2Label: "Best Budget",
    h2Name: "Zero In Ant & Cockroach Killer 1.5L Ready-to-Use",
    tocLabel: "Best Budget",
    tocName: "Zero In Ant & Cockroach Killer",
  },
];

const tocItems = [
  { id: "situation", title: "What This Page Actually Cards" },
  { id: "legal", title: "What a Householder Can Buy" },
  { id: "limits", title: "Where a Spray Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Four Products Compared" },
];

export default function BestCockroachGelBaitPage() {
  return (
    <GuideLayout
      title="Best Cockroach Gel Bait UK 2026: Kill the Nest"
      subtitle="Four cockroach sprays described by what their own listings state, and what the published guidance says actually suppresses an infestation"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "How to Get Rid of Ants: Complete UK Guide", href: "/guides/how-to-get-rid-of-ants" },
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "How to Get Rid of Fleas: Complete UK Guide", href: "/guides/how-to-get-rid-of-fleas" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Restaurant Pest Control: UK Compliance Guide", href: "/guides/restaurant-pest-control" },
        { title: "Hotel Pest Control: UK Compliance Guide", href: "/guides/hotel-pest-control" },
        { title: "Landlord Pest Control: UK Compliance Guide", href: "/guides/landlord-pest-control" },
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "Wasp Nest Removal: Complete UK Guide", href: "/guides/wasp-nest-removal" },
        { title: "How to Get Rid of Moths", href: "/guides/how-to-get-rid-of-moths" },
        { title: "Carpet Beetle Control: Complete UK Guide", href: "/guides/carpet-beetle-control" },
      ]}
      relatedProducts={[
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Ant Gel Bait UK 2026", href: "/best/ant-gel-bait" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Bed Bug Treatments UK 2026", href: "/best/bed-bug-treatments" },
        { title: "Best Flea Treatments UK 2026", href: "/best/flea-treatments" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Carpet Beetle Treatments UK 2026", href: "/best/carpet-beetle-treatments" },
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
        This page is titled for gel bait and it does not card any. All four
        products below are contact sprays, on their own listings. That matters,
        because a spray and a bait do different things to a cockroach
        infestation.
      </p>

      {/* DECISION BLOCK — situation first. The what-you-can-buy line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You came here for gel bait.</strong> There is none on this
            page, and the published guidance rates baiting above spraying —{" "}
            <a href="#situation" className="underline">
              what this page actually cards
            </a>
            .
          </li>
          <li>
            <strong>You want to know what a householder can buy.</strong>{" "}
            <a href="#legal" className="underline">
              What a householder can buy
            </a>
            .
          </li>
          <li>
            <strong>You have sprayed already and they came back.</strong> A
            surface spray does not reach a harbourage —{" "}
            <a href="#limits" className="underline">
              where a spray does not help
            </a>
            .
          </li>
          <li>
            <strong>You want to know what is in it.</strong> All four name an
            active substance, and they are not the same &mdash;{" "}
            <a href="#compared" className="underline">
              the comparison table
            </a>{" "}
            states which.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Cockroaches in a home are usually a sign the problem is bigger than a
            spray can reach. If you are seeing them in daylight, or in more than
            one room, that is the point to get a professional in rather than
            treating again.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What This Page Actually Cards</h2>
      <p>
        Four contact sprays. Read from their own listings: a treatment kit whose
        item form is Spray, a five-litre trigger spray sold in a pack of two, a
        250ml aerosol, and a 1.5-litre pump spray. No gel, no bait station, no
        insect growth regulator.
      </p>
      <p>
        The University of Florida&rsquo;s extension guidance on assessment-based
        management of German cockroaches puts it the other way round:{" "}
        <em>
          &ldquo;Baiting, insect growth regulators (IGRs), and vacuums with
          high-efficiency particulate air filters—(HEPA) are the most effective
          treatment options for cockroach suppression.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ufl} rel="nofollow">
          UF/IFAS
        </a>
        ). That is a US extension service writing about the German cockroach,
        which is the species that infests UK kitchens too; the guidance is about
        the animal, not the country.
      </p>

      {/* [1] Legal / what you can buy */}
      <h2 id="legal">What a Householder Can Buy</h2>
      <p>
        The products on this page are amateur-authorised insecticides sold over
        the counter. Read the label on the one you buy and use it only as the
        label says — that is a condition of sale, not a suggestion, and it is
        the same principle that governs rodenticides.
      </p>
      <p>
        All four listings name their active substance: cypermethrin on one,
        permethrin with D-allethrin on another, cypermethrin with benzalkonium
        chloride on the third, and cypermethrin with pyriproxyfen on the Pest
        Expert kit. Only the Rentokil aerosol carries it as a detail field; the
        other three state it in the description, which is the part of a listing
        it is easiest to skip.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Spray Does Not Help</h2>
      <p>
        <strong>A surface spray treats surfaces.</strong> Cockroaches spend most
        of their time in harbourage — behind and under appliances, in voids, in
        the warm space at the back of a fitted kitchen. A spray reaches what it
        lands on.
      </p>
      <p>
        <strong>Sanitation is doing more work than any product here.</strong>{" "}
        UF/IFAS treats monitoring and sanitation as the first level of a
        management strategy, before any insecticide, and recommends sticky traps
        to find out what is actually happening:{" "}
        <em>
          &ldquo;Use sticky traps. They are your &quot;eyes&quot; in the property
          and are working for you 24/7.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ufl} rel="nofollow">
          UF/IFAS
        </a>
        ).
      </p>
      <p>
        <strong>Repeat spraying is a warning sign, not a plan.</strong> If a
        second treatment has not held, the problem is where the insects are
        living, not how much you sprayed.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Which active substance the listing names</h3>
      <p>
        All four name one and they are not the same. It is the only property on
        this page you can check before buying, and it is what a label condition
        attaches to.
      </p>
      <h3>2. Indoor only, or indoor and out</h3>
      <p>
        The Rentokil aerosol is listed as intended for indoor use. The Zero In
        spray is listed for indoors and out. That decides where each can go.
      </p>
      <h3>3. How much you are actually buying</h3>
      <p>
        Pack sizes here range from a 250ml aerosol to ten litres. One card names
        a size its own listing contradicts, which the table records.
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
                "A kit rather than a single product, with cockroach as its stated target species and an item form of Spray. Its description names cypermethrin and pyriproxyfen, an insect growth regulator; the manufacturer's comparative claims about the market are not repeated here.",
                "Carded as 500ml; the listing reads 5 litres, pack of two, with a unit count of 10,000 millilitres. Cypermethrin is named on the listing, and disinfectant properties are claimed by the maker.",
                "A 250ml aerosol whose listing names permethrin and D-allethrin, lists a range of crawling insects including cockroaches, and states it is intended for indoor use.",
                "The largest single container here at 1.5 litres, with cypermethrin and benzalkonium chloride named on the listing and both a fan spray and a crack-and-crevice setting.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>Bait, not spray, is what the guidance rates first.</strong> This
        page does not card a gel bait; that is a gap in what we list, stated
        plainly rather than papered over.
      </p>
      <p>
        <strong>Monitor before you treat again.</strong> Sticky traps tell you
        where they are, which is the question a second spray does not answer.
      </p>
      <p>
        <strong>Get a professional in for anything established.</strong>{" "}
        Cockroach infestations in shared or multi-room buildings are rarely
        solved from a shelf — compare providers below.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Read the label on the pack that arrives.</strong> The listing
          names the substance; only the label carries the conditions of use.
        </li>
        <li>
          <strong>Treat cracks and crevices, not open surfaces.</strong> That is
          where the insects are, and two of these listings offer a
          crack-and-crevice setting for exactly that.
        </li>
        <li>
          <strong>Keep the indoor-only product indoors.</strong> The Rentokil
          aerosol is listed for indoor use.
        </li>
        <li>
          <strong>Clean first and keep cleaning.</strong> Food debris and warmth
          are what hold an infestation in place.
        </li>
        <li>
          <strong>Put monitors down and read them.</strong> If they keep filling,
          stop spraying and call someone.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">The Four Products Compared</h2>
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
                Active substance and size, as listed
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
        heading="Cockroaches in more than one room?"
        subtext="An established cockroach infestation is rarely solved from a shelf. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
