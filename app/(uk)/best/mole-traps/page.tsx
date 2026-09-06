import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged. Award labels, rank numerals
// and card order UNCHANGED as ruled.
//
// LAW 188 DISAGREEMENTS ARE PRINTED AND LEFT ALONE, AS RULED. On all five records the
// h2Label holds a clean award ("Best Overall") while the cardLabel holds a SENTENCE
// ("The go-to mole trap for reliable, proven performance"). Under Law 188 the h2 wins
// and the card would be corrected to match — but this round was told to print the
// disagreements and touch nothing, so every cardLabel below is byte-unchanged. The five
// are reported in the round output.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Mole Traps UK 2026",
    description:
      "Mole traps for UK gardens: the one legal fact that decides what you may use, where a trap has to go, and five compared on what their listings state.",
    alternates: { canonical: "https://pestproindex.com/best/mole-traps" },
    openGraph: {
      title: "Best Mole Traps UK 2026",
      description:
        "Mole traps for UK gardens: the one legal fact that decides what you may use, where a trap has to go, and five compared on what their listings state.",
      url: "https://pestproindex.com/best/mole-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Mole Traps UK 2026",
  description:
    "Mole traps for UK gardens: the one legal fact that decides what you may use, where a trap has to go, and five compared on what their listings state.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/mole-traps" },
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
      name: "Best Mole Traps UK 2026",
      item: "https://pestproindex.com/best/mole-traps",
    },
  ],
};

// S67 R8 — THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). The legal question
// is now answered from the legislation itself at #legal, and the rest are answered by
// the body or by a general search.

// SOURCES. The quotation is extracted by byte range from the saved body and exact-matched
// before drafting (Law 164). legislation.gov.uk is an official publisher of the statutory
// instrument, and the citation names the host actually read (S59-A).
const SRC = {
  sgvt: "https://www.legislation.gov.uk/uksi/1958/24/made",
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

// Feature text and comparison cells rebuilt from the banked listings, fetched 2026-09-01
// and inside the S45-C window. A property is asserted only where the listing states it
// (S52-E); a cell the listing does not state reads "not stated".
//
// ONE LISTING ODDITY WORTH RECORDING RATHER THAN REPEATING: every one of these five
// gives its Amazon "target species" field as Mouse — or Mouse and Rat — and not Mole.
// That is a category field on a retail listing, not a statement about what the trap is
// for, and the page says so rather than either ignoring it or treating it as a defect.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00004RAMS",
    rank: 1,
    cardName: "Victor Push Mole Trap",
    cardLabel: "The go-to mole trap for reliable, proven performance",
    features: [
      "Listed as iron, single trap",
      "Listed at 816 grams — the heaviest here",
      "Push design, set into the run from above",
      "Target species field on the listing reads Mouse",
    ],
    tableCells: ["Victor Push Mole Trap", "Push trap, iron, 816g", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Victor Push Mole Trap",
    tocLabel: "Best Overall",
    tocName: "Victor Push Mole Trap",
  },
  {
    anchorId: "best-traditional",
    asin: "B001DYTNV4",
    rank: 2,
    cardName: "The Big Cheese Mole Tunnel Trap",
    cardLabel: "The standard traditional tunnel trap for UK gardens",
    features: [
      "Listed as a traditional two-way tunnel design",
      "Listed as galvanised metal and wire",
      "Listed at 330 grams, single trap",
      "Listed as rust-free and weather-proof",
    ],
    tableCells: ["The Big Cheese Mole Tunnel Trap", "Tunnel trap, galvanised, 330g", "Best Traditional"],
    h2Label: "Best Traditional",
    h2Name: "The Big Cheese Mole Tunnel Trap",
    tocLabel: "Best Traditional",
    tocName: "The Big Cheese Mole Tunnel Trap",
  },
  {
    anchorId: "best-professional",
    asin: "B000YPXJG8",
    rank: 3,
    cardName: "Pest-Stop Tunnel Mole Trap — Dual Entry, 30% Stronger",
    cardLabel: "Professional mole catchers and experienced users",
    features: [
      "Listed as a traditional barrel design with dual entry",
      "Listed as alloy steel, rust-resistant and reusable",
      "The maker claims it is 30% stronger; no comparison is stated",
      "Target species field on the listing reads Mouse",
    ],
    tableCells: ["Pest-Stop Tunnel Mole Trap", "Barrel trap, alloy steel, dual entry", "Best Professional"],
    h2Label: "Best Professional",
    h2Name: "Pest-Stop Tunnel Mole Trap",
    tocLabel: "Best Professional",
    tocName: "Pest-Stop Tunnel Mole Trap",
  },
  {
    anchorId: "best-discreet",
    asin: "B011BX33HG",
    rank: 4,
    cardName: "SWISSINNO SuperCat Mole Trap — Swiss Precision Claw Design",
    cardLabel: "Lawns, sports turf and situations where discreet placement matters",
    features: [
      "Claw design, listed as high-impact polystyrene and stainless steel",
      "Listed at 630 grams, single trap",
      "Listed as reusable, with no poison and no bait",
      "Target species field on the listing reads Mouse",
    ],
    tableCells: ["SWISSINNO SuperCat Mole Trap", "Claw trap, HIPS + stainless, 630g", "Best Discreet"],
    h2Label: "Best Discreet",
    h2Name: "SWISSINNO SuperCat Mole Trap",
    tocLabel: "Best Discreet",
    tocName: "SWISSINNO SuperCat Mole Trap",
  },
  {
    anchorId: "best-beginner",
    asin: "B0CZTRKZFD",
    rank: 5,
    cardName: "REPELEM Claw Mole Trap — Reusable, Rust-Free, Pack of 3",
    cardLabel: "Gardens with persistent mole activity across multiple areas",
    features: [
      "Three traps in the pack — the only multi-pack here",
      "Claw design, listed as metal and rust-free",
      "Listed at 740 grams for the pack",
      "Target species field on the listing reads Mouse, Rat",
    ],
    tableCells: ["REPELEM Claw Mole Trap", "Claw trap, metal, pack of 3", "Best for Beginners"],
    h2Label: "Best for Beginners",
    h2Name: "REPELEM Claw Mole Trap (Pack of 3)",
    tocLabel: "Best for Beginners",
    tocName: "REPELEM Claw Mole Trap (Pack of 3)",
  },
];

const tocItems = [
  { id: "situation", title: "Whether to Trap at All" },
  { id: "legal", title: "The Legal Position on Mole Traps" },
  { id: "limits", title: "Where a Mole Trap Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Trapping Is Not the Answer" },
  { id: "using", title: "Finding the Run and Setting the Trap" },
  { id: "compared", title: "Best Mole Traps Compared" },
];

export default function BestMoleTrapsPage() {
  return (
    <GuideLayout
      title="Best Mole Traps UK 2026"
      subtitle="Push, tunnel and claw traps for UK gardens, described by what their own listings state — and the legal position that decides which you may use"
      lastUpdated="September 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "How to Get Rid of Squirrels: Complete UK Guide", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
      ]}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Squirrel Deterrents UK 2026", href: "/best/squirrel-deterrents" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Pigeon Spikes UK 2026", href: "/best/pigeon-spikes" },
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
        A mole trap is set blind, in a tunnel you cannot see into, against an
        animal you will probably never meet. Everything below turns on two
        things: finding an active run, and knowing what the law lets you put in
        it.
      </p>

      {/* DECISION BLOCK — situation first. The legal line and the does-not-help line
          sit ABOVE the product lines. No Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are not sure trapping is the right response.</strong>{" "}
            Molehills in a paddock and molehills on a lawn are different
            problems —{" "}
            <a href="#situation" className="underline">
              whether to trap at all
            </a>
            .
          </li>
          <li>
            <strong>You want to know what the law says.</strong> Mole traps sit
            in a specific place in the spring trap rules —{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>You have set traps and caught nothing.</strong> That is
            almost always the run, not the trap —{" "}
            <a href="#limits" className="underline">
              where a trap does not help
            </a>
            .
          </li>
          <li>
            <strong>You want more than one trap.</strong> Only one product here
            is a multi-pack —{" "}
            <a href="#best-beginner" className="underline">
              the pack of three
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Whether to Trap at All</h2>
      <p>
        Moles are solitary and territorial. A garden with fresh hills usually has
        one animal, not a colony, and the damage is to the surface rather than to
        the plants — the tunnelling is what lifts turf and topples seedlings.
      </p>
      <p>
        If the hills are in rough grass or an orchard, the honest answer is often
        to leave it. Trapping is for turf you actually use: lawns, greens, sports
        pitches, and beds where the heaving is doing visible harm.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Mole Traps</h2>
      <p>
        Spring traps in England and Wales may generally only be used if they are
        approved by order, which is why most trap types carry an approval
        reference. Mole traps are the documented exception. The Small Ground
        Vermin Traps Order 1958 lists, among the traps to which the approval
        requirement does not apply,{" "}
        <em>
          &ldquo;Spring traps of the kind commonly used for catching moles in
          their runs.&rdquo;
        </em>{" "}
        (
        <a href={SRC.sgvt} rel="nofollow">
          legislation.gov.uk, The Small Ground Vermin Traps Order 1958
        </a>
        ).
      </p>
      <p>
        In practice that is why a mole trap can be bought off a shelf without an
        approval number on the box. It is not a licence to be careless: a trap
        set where a pet or a child can reach it is a different problem, and the
        exemption says nothing about that.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Mole Trap Does Not Help</h2>
      <p>
        <strong>A trap in a disused run catches nothing.</strong> Moles abandon
        tunnels constantly. Most failed trapping is a trap set correctly in the
        wrong tunnel.
      </p>
      <p>
        <strong>It does not stop the next mole.</strong> A cleared territory is
        an empty territory, and neighbouring moles fill it. Trapping is
        maintenance, not a cure.
      </p>
      <p>
        <strong>It does nothing for the lawn you already have.</strong> The hills
        and the heaved turf still need levelling and reseeding once the animal is
        gone.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Trap type: push, tunnel or claw</h3>
      <p>
        Three designs are represented here. A push trap is driven down into the
        run from above; a tunnel or barrel trap is set into an opened run with
        entries at both ends; a claw trap closes across the run. The comparison
        table states which each product is.
      </p>
      <h3>2. How many runs you need to cover</h3>
      <p>
        Four of these are single traps and one is a pack of three. Two traps in
        one run, facing opposite ways, is the usual approach for a two-way
        tunnel, so a single trap covers less than it looks.
      </p>
      <h3>3. Material and weight, because these are set outdoors and left</h3>
      <p>
        Weights here run from 330 grams to 816 grams and materials from
        galvanised wire to alloy steel to polystyrene and stainless. All are
        listed facts, and all bear on how a trap survives a wet winter in soil.
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
                "A push trap in iron and the heaviest item on the page at 816 grams, set down into the run from the surface rather than into an opened tunnel.",
                "The traditional two-way tunnel trap, listed as galvanised metal and wire and as rust-free and weather-proof. At 330 grams it is the lightest here.",
                "A barrel trap with entries at both ends, listed in alloy steel. Its maker claims it is 30% stronger without stating what the comparison is against, so that figure is reported as theirs rather than repeated as ours.",
                "A claw trap in high-impact polystyrene and stainless steel, listed as reusable and as using no poison and no bait — which is the whole argument for a trap over a bait product in a garden with pets.",
                "The only multi-pack on the page: three claw traps, listed as metal and rust-free, at 740 grams for the set. Three traps is what covers more than one run at once.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Trapping Is Not the Answer</h2>
      <p>
        <strong>Tolerate it in rough ground.</strong> Outside managed turf, a
        mole is doing very little harm and will move on.
      </p>
      <p>
        <strong>Level and reseed rather than pursue.</strong> If the animal has
        already moved through, repairing the surface is the whole job.
      </p>
      <p>
        <strong>Call a mole catcher for repeated reinvasion.</strong> Where the
        garden backs onto open ground, the traffic is continuous and someone who
        does this weekly will read the runs faster than you will.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Finding the Run and Setting the Trap</h2>
      <ol>
        <li>
          <strong>Find an active run, not a hill.</strong> Probe between fresh
          hills for the connecting tunnel; the hills are spoil, the run is the
          road.
        </li>
        <li>
          <strong>Test that the run is in use.</strong> Open a small hole, block
          it lightly, and come back: a repaired blockage means an active tunnel.
        </li>
        <li>
          <strong>Set into the run, not the hill.</strong> A trap in loose spoil
          will not sit square and will not fire cleanly.
        </li>
        <li>
          <strong>Two traps facing opposite ways in a two-way run.</strong>{" "}
          Moles work a tunnel in both directions.
        </li>
        <li>
          <strong>Close the light out and check daily.</strong> Cover the opened
          run, and check every trap you set — a trap left unchecked is the part
          of this that is genuinely indefensible.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Mole Traps Compared</h2>
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
                Type, material and pack, as listed
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

      <div className="not-prose">
        <Callout type="info">
          <p>
            Every listing here gives its Amazon target-species field as Mouse, or
            Mouse and Rat, rather than Mole. That is a retail category field, not
            a statement about what the trap is designed for, and it is recorded
            because it is what the listing says.
          </p>
        </Callout>
      </div>

      <FindProviderCTA
        heading="Moles returning as fast as you trap them?"
        subtext="Where a garden backs onto open ground the traffic never really stops. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
