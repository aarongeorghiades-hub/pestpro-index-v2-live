import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import TopPicks, { ProsList } from "@/components/TopPicks";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S67 R9 — PRODUCT-FIT CORRECTION. Title and H1 still byte-unchanged.
//
// CARD 5 IS REMOVED. B085S1KX82, Pest Expert Formula C+ 5L, listed Cockroach as its
// target species on a drain fly page. It was reported at S67 R8 and carded anyway
// because that round's ruling held the card set; this round's ruling removes it. The
// remaining four keep their order, their ASINs and their numerals 1 to 4, so nothing
// renumbers.
//
// CARD LABELS NOW NAME FORM AND APPLICATION SITE, on the PM ruling for this route.
// The page turns on one fact — whether the thing goes down the drain or into the room —
// and a label reading "Best for Prevention" hid that fact behind an award. The award
// survives only on card 1, where the listing supports it: it is the one product poured
// into the drain. The same string is carried on the card, the h2 and the table.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Drain Fly Killer UK 2026 | Get Rid of Drain Flies Fast",
    description:
      "Eliminate drain flies from your kitchen and bathroom. The best drain fly killers, gels and treatments for UK homes in 2026.",
    alternates: { canonical: "https://pestproindex.com/best/drain-fly-killer" },
    openGraph: {
      title: "Best Drain Fly Killer UK 2026 | Get Rid of Drain Flies Fast",
      description:
        "Eliminate drain flies from your kitchen and bathroom. The best drain fly killers, gels and treatments for UK homes in 2026.",
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
    "Eliminate drain flies from your kitchen and bathroom. The best drain fly killers, gels and treatments for UK homes in 2026.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-07",
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
  tocLabel: string;
  tocName: string;
  // S70 R1 (Law 195) selling layer: top-picks reason, benefit-led blurb, pros.
  // Every fact in them is one the features above already carry from the listing.
  pick: string;
  blurb: string;
  pros: string[];
};

// NOTE THE FIELD SEMANTICS ON THIS ROUTE: h2Label holds the NUMBERED PRODUCT NAME and
// h2Name holds the AWARD — the inverse of the pilot. Read before editing, not assumed.
//
// S70 R1 — NORMALISED to the rat-poison field names: h2Label/tocLabel now hold the AWARD
// and h2Name/tocName the product name, so the h2 reads "award — name". The "N." heading
// prefix is dropped; the rank numeral stays on every card via rank={p.rank}. Cards 2 to 4
// take back their 2efd1f5 awards, except card 4's "Best for Prevention": a surface spray
// that never reaches the drain prevents nothing here, so it reads "Best for Hard Surfaces",
// the listing's own application site. Card 1's label is unchanged.
//
// THE FINDING THAT SHAPES THIS PAGE: only ONE of the four products treats a drain. The
// other three are room and surface sprays on their own listings, and the page says so
// on every surface a reader meets — the label, the heading, the table and the body.
const products: ProductRecord[] = [
  {
    anchorId: "fruit-fly-drain-gel",
    asin: "B0BCP3VT97",
    rank: 1,
    cardName: "Fruit Fly & Drain Fly Gel Treatment 1 Gallon",
    cardLabel: "Best Overall: Gel, Poured Into the Drain",
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
      "Best Overall: Gel, Poured Into the Drain",
    ],
    h2Label: "1. Best Overall: Gel, Poured Into the Drain",
    h2Name: "Fruit Fly & Drain Fly Gel Treatment 1 Gallon",
    tocLabel: "1. Best Overall: Gel, Poured Into the Drain",
    tocName: "Fruit Fly & Drain Fly Gel Treatment",
    pick: "Best if flies come from a drain: the one gel here you pour into the pipe, a full gallon.",
    blurb: "Start here if the flies are coming from a drain. You pour the gel into the drain, and it comes as a full gallon, 3,785ml, which the maker describes as an all-natural, non-toxic gel that breaks up and digests drain scum. It is listed as safe for use in any plumbing, and the guidance below says to brush and flush the drain with boiling water first.",
    pros: ["Poured into the drain itself", "1 gallon, 3,785ml", "Listed as safe for use in any plumbing", "Described by its maker as all-natural and non-toxic"],
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
    h2Label: "2. Best UK Brand",
    h2Name: "Zero In Total Insect Killer 300ml",
    tocLabel: "2. Best UK Brand",
    tocName: "Zero In Total Insect Killer 300ml",
    pick: "Best for adult flies already in the room: a 300ml permethrin and tetramethrin aerosol.",
    blurb: "Pick this for the adult flies already in the room while you clear the drain. It is a 300ml aerosol naming permethrin and tetramethrin, with ants, mosquitoes, flies and bugs listed as targets. The maker's directions are a five-second burst with the room sealed for ten minutes, then ventilate.",
    pros: ["Actives named: permethrin and tetramethrin", "Flies listed among its target species", "Short burst, then ventilate, per the maker", "300ml, for indoor use"],
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
    h2Label: "3. Best Professional-Strength",
    h2Name: "Rentokil Insectrol Insect Killer Spray 250ml",
    tocLabel: "3. Best Professional-Strength",
    tocName: "Rentokil Insectrol Insect Killer Spray 250ml",
    pick: "Best if you have more than one pest: a 250ml Rentokil aerosol for indoor use.",
    blurb: "A general insect spray to keep under the sink if you have more than one pest. The 250ml Rentokil aerosol names permethrin and D-allethrin and is listed for indoor use against fleas, ants, cockroaches, earwigs and bed bugs. It is a room product, so it does not reach the film inside the pipe.",
    pros: ["Actives named: permethrin and D-allethrin", "250ml aerosol for indoor use", "Listed for fleas, ants, cockroaches, earwigs and bed bugs"],
  },
  {
    anchorId: "biopipe",
    asin: "B007XD60C4",
    rank: 4,
    cardName: "Doff Ant & Crawling Insect Killer Spray 1L",
    cardLabel: "Best for Hard Surfaces",
    features: [
      "A 1-litre surface pump spray, not a drain treatment",
      "Target species listed as Insect, Ant",
      "Listed for indoor and outdoor hard surfaces",
      "Active substance not stated on the listing",
      "Ready to use; no mixing",
    ],
    tableCells: ["Doff Ant & Crawling Insect Killer 1L", "Surface spray; active not stated", "Best for Hard Surfaces"],
    h2Label: "4. Best for Hard Surfaces",
    h2Name: "Doff Ant & Crawling Insect Killer Spray 1L",
    tocLabel: "4. Best for Hard Surfaces",
    tocName: "Doff Ant & Crawling Insect Killer Spray 1L",
    pick: "Best for hard surfaces indoors and out: a litre of ready-to-use pump spray.",
    blurb: "The largest bottle here, a litre of ready-to-use spray with nothing to mix, for indoor and outdoor hard surfaces. Ant and insect are its listed target species. The listing does not state an active substance, so check the label.",
    pros: ["1 litre, ready to use", "For indoor and outdoor hard surfaces", "No mixing needed"],
  },
];

const tocItems = [
  { id: "compared", title: "The Four Products Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "Where Drain Flies Actually Come From" },
  { id: "legal", title: "Finding the Drain They Are Using" },
  { id: "limits", title: "Where a Spray Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Clearing the Drain" },
];

export default function BestDrainFlyKillerPage() {
  return (
    <GuideLayout
      title="Best Drain Fly Killer UK 2026: Gel, Aerosols and Sprays Compared"
      subtitle="A drain gel for the pipe the flies breed in and three sprays for the adults in the room, for UK kitchens and bathrooms."
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
      topPicks={
        <TopPicks
          picks={products.slice(0, 3).map((p) => ({
            label: p.cardLabel,
            name: p.cardName,
            reason: p.pick,
            asin: p.asin,
            anchorId: p.anchorId,
          }))}
        />
      }
    >
      {/* Affiliate disclosure */}
      <div className="not-prose mb-8 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] p-4">
        <p className="text-sm text-[var(--color-ochre-deep)]">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        If drain flies keep turning up in your kitchen or bathroom, start with
        the drain gel: it is the one pick you pour down the pipe. The Zero In
        and Rentokil aerosols are for the adult flies already in the room, and
        the Doff pump spray covers hard surfaces indoors and out.
      </p>

      {/* [16] Comparison table */}
      <h2 id="compared">The Four Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                What it treats, as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">Label</th>
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
      <p>
        UF/IFAS advises removing the organic film inside the drain by hand
        first, because that is where the larvae feed, and the three sprays here
        are applied to the room or a surface, so they do not reach it (
        <a href={SRC.ufl} rel="nofollow">
          UF/IFAS
        </a>
        ).
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
          <p>{p.blurb}</p>
          <ProsList pros={p.pros} />
        </div>
      ))}

      {/* DECISION BLOCK — situation first. The find-the-drain line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <DecisionBox>
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
            of the four does &mdash;{" "}
            <a href="#fruit-fly-drain-gel" className="underline">
              the gel drain treatment
            </a>
            . The other three are aerosols and a surface spray, for the room.
          </li>
        </DecisionBox>

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
        <strong>Three of the four products here are room or surface sprays.</strong>{" "}
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
        <strong>Which of these reaches a drain, stated plainly.</strong> The
        Fruit Fly &amp; Drain Fly Gel is poured into the drain and is the only
        one that goes there. The Zero In 300ml aerosol, the Rentokil Insectrol
        250ml aerosol and the Doff 1-litre pump spray are all applied to the
        room or to a hard surface, and none of them reaches the film inside the
        pipe. That is a statement about where each product is applied, taken
        from its own listing, not about how well any of them works.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Does it go down the drain, or into the room?</h3>
      <p>
        This is the only question that matters here, and it splits the page one
        against three. The comparison table states it for every row.
      </p>
      <h3>2. Does the listing name an active substance?</h3>
      <p>
        Two of the four name theirs. The one-litre surface spray states nothing.
        The drain gel is described by its maker as all-natural and names no
        active substance either.
      </p>
      <h3>3. Is it for the species you have?</h3>
      <p>
        Target species is a field on the listing, and on this page it ranges from
        flies to ants to insects in general. Read it before buying.
      </p>


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


      <FindProviderCTA
        heading="Flies still coming after the drain is clean?"
        subtext="A source you cannot reach — a gully, a stack, a broken pipe — needs someone who can find it. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
