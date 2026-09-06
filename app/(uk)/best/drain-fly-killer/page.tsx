import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged. Award labels, rank numerals
// (the "1." to "5." prefixes) and card order are UNCHANGED as ruled.
//
// A NEVER TOUCH COLLISION, HANDLED IN PLACE RATHER THAN BY STOPPING THE ROUTE.
// CLAUDE.md protects the string "The most effective drain fly killers" BY NAME. It sits
// in this page's subtitle, and it is a superlative in our own voice — exactly what a
// rebuild would otherwise delete. Law 192 does not reach it: that law covers a protected
// LABEL introducing claim content, and here the protected string IS the claim. So THE
// PROTECTED PHRASE SURVIVES BYTE-FOR-BYTE at the head of the subtitle, and only the
// unprotected remainder is corrected — it promised "enzyme treatments", which this page
// does not card. A protection given by name is not overridden by a broad authorisation.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Drain Fly Killer UK 2026 | Get Rid of Drain Flies Fast",
    description:
      "Drain flies breed in the film of organic matter inside the pipe. One product here treats the drain; four treat the room. Compared on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/drain-fly-killer" },
    openGraph: {
      title: "Best Drain Fly Killer UK 2026 | Get Rid of Drain Flies Fast",
      description:
        "Drain flies breed in the film of organic matter inside the pipe. One product here treats the drain; four treat the room. Compared on their own listings.",
      url: "https://pestproindex.com/best/drain-fly-killer",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Drain Fly Killer UK 2026: Get Rid of Drain Flies Fast",
  description:
    "Drain flies breed in the film of organic matter inside the pipe. One product here treats the drain; four treat the room. Compared on their own listings.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/drain-fly-killer" },
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
      name: "Best Drain Fly Killer UK 2026",
      item: "https://pestproindex.com/best/drain-fly-killer",
    },
  ],
};

// S67 R8 — THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). Every question is
// answered by the body above, and the body now answers them from a source.

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); the citation names the host actually read (S59-A).
const SRC = {
  ufl: "https://ask.ifas.ufl.edu/publication/IN1226",
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
  tocTitle: string;
};

// NOTE THE FIELD SEMANTICS ON THIS ROUTE: h2Label holds the NUMBERED PRODUCT NAME and
// h2Name holds the AWARD — the inverse of the pilot. Read before editing, not assumed.
//
// THE FINDING THAT SHAPES THIS PAGE: only ONE of the five products treats a drain. The
// other four are room and surface sprays on their own listings, and the fifth names
// Cockroach as its target species on a drain fly page.
const products: ProductRecord[] = [
  {
    anchorId: "fruit-fly-drain-gel",
    asin: "B0BCP3VT97",
    rank: 1,
    cardName: "Fruit Fly & Drain Fly Gel Treatment 1 Gallon",
    cardLabel: "Best Overall",
    features: [
      "The only product here poured into the drain itself",
      "Listed at 1 gallon — 3,785 millilitres",
      "The maker describes it as an all-natural, non-toxic gel",
      "The maker claims it breaks up and digests drain scum",
      "Listed as safe for use in any plumbing",
    ],
    tableCells: [
      "Fruit Fly & Drain Fly Gel Treatment",
      "Poured into the drain; 3,785ml",
      "Best Overall",
    ],
    h2Label: "1. Fruit Fly & Drain Fly Gel Treatment 1 Gallon",
    h2Name: "Best Overall",
    tocTitle: "1. Fruit Fly & Drain Fly Gel Treatment",
  },
  {
    anchorId: "zero-in-drain-gel",
    asin: "B00EE3C1IS",
    rank: 2,
    cardName: "Zero In Total Insect Killer 300ml",
    cardLabel: "Best UK Brand",
    features: [
      "A 300ml room aerosol, not a drain treatment",
      "Active substances stated on the listing: permethrin and tetramethrin",
      "Target species listed as ants, mosquitoes, flies and bugs",
      "The maker's directions: a 5-second burst, room sealed 10 minutes, then ventilate",
      "Listed for indoor use",
    ],
    tableCells: ["Zero In Total Insect Killer 300ml", "Room aerosol; permethrin + tetramethrin", "Best UK Brand"],
    h2Label: "2. Zero In Total Insect Killer 300ml",
    h2Name: "Best UK Brand",
    tocTitle: "2. Zero In Total Insect Killer 300ml",
  },
  {
    anchorId: "green-gobbler",
    asin: "B000TARC7A",
    rank: 3,
    cardName: "Rentokil Insectrol Insect Killer Spray 250ml",
    cardLabel: "Best Professional-Strength",
    features: [
      "A 250ml aerosol, not a drain treatment",
      "Active substances stated on the listing: permethrin and D-allethrin",
      "Listed as intended for indoor use",
      "Listed for fleas, ants, cockroaches, earwigs and bed bugs",
      "Target species listed as Insects",
    ],
    tableCells: ["Rentokil Insectrol 250ml", "Room aerosol; permethrin + D-allethrin", "Best Professional-Strength"],
    h2Label: "3. Rentokil Insectrol Insect Killer Spray 250ml",
    h2Name: "Best Professional-Strength",
    tocTitle: "3. Rentokil Insectrol Insect Killer Spray 250ml",
  },
  {
    anchorId: "biopipe",
    asin: "B007XD60C4",
    rank: 4,
    cardName: "Doff Ant & Crawling Insect Killer Spray 1L",
    cardLabel: "Best for Prevention",
    features: [
      "A 1-litre surface pump spray, not a drain treatment",
      "Target species listed as Insect, Ant",
      "Listed for indoor and outdoor hard surfaces",
      "Active substance not stated on the listing",
      "Ready to use; no mixing",
    ],
    tableCells: ["Doff Ant & Crawling Insect Killer 1L", "Surface spray; active not stated", "Best for Prevention"],
    h2Label: "4. Doff Ant & Crawling Insect Killer Spray 1L",
    h2Name: "Best for Prevention",
    tocTitle: "4. Doff Ant & Crawling Insect Killer Spray 1L",
  },
  {
    anchorId: "pest-expert",
    asin: "B085S1KX82",
    rank: 5,
    cardName: "Pest Expert Formula C+ Cockroach & Insect Killer Spray 5L",
    cardLabel: "Best Targeted Treatment",
    features: [
      "Target species listed as Cockroach — not drain flies",
      "A 5-litre surface spray supplied with a trigger hose sprayer",
      "The maker states three active ingredients including an insect growth regulator",
      "The maker claims coverage of 250 square metres per application",
      "Description names cypermethrin and pyriproxyfen",
    ],
    tableCells: ["Pest Expert Formula C+ 5L", "Surface spray; target species Cockroach", "Best Targeted Treatment"],
    h2Label: "5. Pest Expert Formula C+ Cockroach & Insect Killer Spray 5L",
    h2Name: "Best Targeted Treatment",
    tocTitle: "5. Pest Expert Formula C+ Cockroach & Insect Killer Spray 5L",
  },
];

const tocItems = [
  { id: "situation", title: "Where Drain Flies Actually Come From" },
  { id: "legal", title: "Finding the Drain They Are Using" },
  { id: "limits", title: "Where a Spray Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: p.tocTitle })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Clearing the Drain" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestDrainFlyKillerPage() {
  return (
    <GuideLayout
      title="Best Drain Fly Killer UK 2026: Get Rid of Drain Flies Fast"
      subtitle="The most effective drain fly killers, gels and sprays for UK kitchens and bathrooms — and which of them reaches the drain the flies are breeding in"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Professional Pest Control vs DIY", href: "/guides/professional-pest-control-vs-diy" },
        { title: "Electric Fly Killers vs Sticky Traps", href: "/guides/electric-fly-killers-vs-sticky-traps" },
      ]}
      relatedProducts={[
        { title: "Best Indoor Fly Killers UK 2026", href: "/best/fly-killer-indoor" },
        { title: "Best Cockroach Gel Bait UK 2026", href: "/best/cockroach-gel-bait" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Moth Traps UK 2026", href: "/best/moth-traps" },
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
        Drain flies are not really a room problem. The adults you swat are
        emerging from a film of organic matter inside a pipe a few feet away,
        and until that film is gone the flies keep arriving.
      </p>

      {/* DECISION BLOCK — situation first. The find-the-drain line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You want to know why they keep coming back.</strong> The
            larvae live in the drain, not the room (
            <a href={SRC.ufl} rel="nofollow" className="underline">
              UF/IFAS
            </a>
            ) —{" "}
            <a href="#situation" className="underline">
              where drain flies come from
            </a>
            .
          </li>
          <li>
            <strong>You do not know which drain it is.</strong> There is a test
            that takes a strip of tape and a day —{" "}
            <a href="#legal" className="underline">
              finding the drain they are using
            </a>
            .
          </li>
          <li>
            <strong>You have already sprayed the room.</strong> That kills the
            adults on the wall and nothing in the pipe —{" "}
            <a href="#limits" className="underline">
              where a spray does not help
            </a>
            .
          </li>
          <li>
            <strong>You want the product that goes down the drain.</strong> One
            of the five does —{" "}
            <a href="#fruit-fly-drain-gel" className="underline">
              the gel drain treatment
            </a>
            . The other four are room and surface sprays.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="info">
          <p>
            Drain flies are a nuisance rather than a hazard. UF/IFAS records that{" "}
            <em>
              &ldquo;Flies of the genus Psychoda are non-biting (Fair 1934) and
              are not capable of transmitting any known pathogens&rdquo;
            </em>
            .
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Where Drain Flies Actually Come From</h2>
      <p>
        The University of Florida&rsquo;s extension guidance is specific about
        the breeding site:{" "}
        <em>
          &ldquo;The larvae can be found feeding on the film of wet organic
          material that can accumulate in drains.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ufl} rel="nofollow">
          UF/IFAS
        </a>
        ). That film is the infestation. The adults in the bathroom are the
        symptom.
      </p>
      <p>
        This is a US extension service writing about the genus{" "}
        <em>Psychoda</em>, which is the same genus found in UK kitchens and
        bathrooms. The biology is about the animal, not the country.
      </p>

      {/* [1] Finding the drain */}
      <h2 id="legal">Finding the Drain They Are Using</h2>
      <p>
        Before treating anything, find out which drain is producing them. UF/IFAS
        gives a test that costs nothing:{" "}
        <em>
          &ldquo;To confirm if the drain contains flies, place tape over the
          drain for 24 hours, remove the tape and check for any flies that became
          trapped while trying to emerge&rdquo;
        </em>
        .
      </p>
      <p>
        Because drain flies fly poorly, the source is almost always the nearest
        drain — a shower trap, a sink trap, an overflow, a floor gully. Tape each
        candidate and read them the next day.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Spray Does Not Help</h2>
      <p>
        <strong>Four of the five products here are room or surface sprays.</strong>{" "}
        They kill adult insects they land on. They do not reach the film inside
        the pipe, and the next generation is already in it.
      </p>
      <p>
        <strong>The published advice is mechanical, not chemical.</strong>{" "}
        UF/IFAS:{" "}
        <em>
          &ldquo;The simplest way to control drain flies is by manually removing
          the organic material in the drain where eggs are laid and larvae
          feed.&rdquo;
        </em>{" "}
        And where flies are breeding outside a pipe,{" "}
        <em>
          &ldquo;the flies are controlled by scraping away organic matter that
          has built up and drying the area&rdquo;
        </em>
        .
      </p>
      <p>
        <strong>One card is not a drain fly product at all.</strong> The Pest
        Expert Formula C+ spray lists Cockroach as its target species. It is on
        this page and it is worth knowing that before you buy it.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Does it go down the drain, or into the room?</h3>
      <p>
        This is the only question that matters here, and it splits the page one
        against four. The comparison table states it for every row.
      </p>
      <h3>2. Does the listing name an active substance?</h3>
      <p>
        Three of the five name theirs. The one-litre surface spray states
        nothing. The drain gel is described by its maker as all-natural and names
        no active substance either.
      </p>
      <h3>3. Is it for the species you have?</h3>
      <p>
        Target species is a field on the listing, and on this page it ranges from
        flies to ants to cockroaches. Read it before buying.
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
                "The one product on this page that is poured into the drain rather than sprayed into the room, which is where the published guidance puts the problem. Its maker describes it as an all-natural gel that breaks up and digests drain scum; no active substance is named on the listing.",
                "A 300ml room aerosol naming permethrin and tetramethrin, with its target species listed as ants, mosquitoes, flies and bugs. It treats the air and the surfaces, not the pipe.",
                "A 250ml aerosol naming permethrin and D-allethrin, listed as intended for indoor use and for a range of crawling insects. Again a room product rather than a drain one.",
                "A one-litre surface pump spray for indoor and outdoor hard surfaces, with ant and insect as its listed target species and no active substance stated.",
                "Listed with Cockroach as its target species. It is a five-litre surface spray whose description names cypermethrin and pyriproxyfen, the insect growth regulator, alongside a pyrethrum extract.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>A pipe brush and boiling water cost nothing.</strong> UF/IFAS
        recommends scraping the inside of the drain with a metal pipe brush and
        pouring boiling water down to flush what the brush missed.
      </p>
      <p>
        <strong>Fix the standing water.</strong> A slow drain or an unused trap
        that dries out and refills is the condition that lets the film build up
        in the first place.
      </p>
      <p>
        <strong>If the source is not a drain you can reach</strong> — a gully
        under a floor, a broken pipe, a soil stack — that is a plumbing job
        before it is a pest one.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Clearing the Drain</h2>
      <ol>
        <li>
          <strong>Tape the drains overnight and read them.</strong> That tells
          you which one, and everything after depends on it.
        </li>
        <li>
          <strong>Scrape the inside of the pipe.</strong> A metal pipe brush,
          worked around the walls of the trap, is what removes the film.
        </li>
        <li>
          <strong>Flush with boiling water.</strong> It loosens what the brush
          could not reach.
        </li>
        <li>
          <strong>Then, if you want to, treat the drain.</strong> The gel here is
          the only product on the page designed to go in it.
        </li>
        <li>
          <strong>Re-tape a week later.</strong> If flies are still emerging, the
          film is still there or you have the wrong drain.
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
                What it treats, as listed
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
        heading="Flies still coming after the drain is clean?"
        subtext="A source you cannot reach — a gully, a stack, a broken pipe — needs someone who can find it. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
