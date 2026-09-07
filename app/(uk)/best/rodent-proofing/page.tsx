import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled. The subtitle is held.
//
// THE THIRD CARD'S h2Name WAS EMPTY on the served page, so its heading rendered as
// "Best for Drains — " with nothing after the dash. It now carries the product name,
// which is the only heading text change on the route.
//
// ONE LISTING CONTRADICTS THE OLD PAGE. The Stormguard brush strip was described as
// having an aluminium carrier; its listing's material row reads Wood and its title ends
// "- Wood". Corrected. The old page's "6mm x 6mm is the point at which the gap stops
// being a route" and "most-used entry point in British housing" had no source: 14
// unsourced sentences deleted. FAQ block and FAQPage schema removed together (Law 190).
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
    description:
      "Rodent proofing for UK homes: the 6mm gap, what rats and mice gnaw through, why the guidance puts proofing first, and five products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/rodent-proofing" },
    openGraph: {
      title: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
      description:
        "Rodent proofing for UK homes: the 6mm gap, what rats and mice gnaw through, why the guidance puts proofing first, and five products on their own listings.",
      url: "https://pestproindex.com/best/rodent-proofing",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
  description:
    "Rodent proofing for UK homes: the 6mm gap, what rats and mice gnaw through, why the guidance puts proofing first, and five products on their own listings.",
  datePublished: "2026-08-12",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/rodent-proofing" },
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
      name: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
      item: "https://pestproindex.com/best/rodent-proofing",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). All three bodies were
// banked at S67 R2 and kept under Law 175; none was re-fetched.
const SRC = {
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
  oxford: "https://www.oxford.gov.uk/pest-control-advice/pest-control-advice-mice",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
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

// Feature text and comparison cells from the banked listings' OWN bullets and detail
// rows (S52-E), fetched 2026-09-01. Maker claims are framed as the maker's.
const products: ProductRecord[] = [
  {
    anchorId: "best-mesh",
    asin: "B07GWNN623",
    rank: 1,
    cardName: "Roshield Rodent Proofing Wire Mesh (6m x 900mm)",
    cardLabel: "Best Overall",
    features: [
      "Aperture listed as 6mm x 6mm; 900mm wide, 6m long; hot-dipped galvanised welded steel",
      "Listed for air bricks, pipework, gaps and voids in walls, and soffits",
      "Listed as cut with strong scissors or tin snips; no fixings included",
      "Target species listed as Mouse, Rat; the maker also names squirrels and pigeons",
    ],
    tableCells: ["Roshield Wire Mesh 6m x 900mm", "Welded galvanised mesh; 6mm aperture, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Roshield Rodent Proofing Wire Mesh (6m × 900mm)",
    tocLabel: "Best Overall",
    tocName: "Roshield Rodent Proofing Wire Mesh",
  },
  {
    anchorId: "best-fill",
    asin: "B09P22PPJ2",
    rank: 2,
    cardName: "Xcluder Rodent Control Steel Wool Fill Fabric",
    cardLabel: "Best for Gaps & Holes",
    features: [
      "Listed as a 4 inch x 10 foot roll of stainless steel wool blended with poly fibres",
      "The maker says it compresses into a hole and expands to fit, and will not rust",
      "Listed for holes around pipes, air conditioning units, windows and vents",
      "Target species listed as Mouse; 454g",
    ],
    tableCells: ["Xcluder Fill Fabric 4in x 10ft", "Stainless steel wool + poly fibre roll, as listed", "Best for Gaps & Holes"],
    h2Label: "Best for Gaps & Holes",
    h2Name: "Xcluder Rodent Control Steel Wool Fill Fabric",
    tocLabel: "Best for Gaps & Holes",
    tocName: "Xcluder Steel Wool Fill Fabric",
  },
  {
    anchorId: "best-drain",
    asin: "B07FKQLPFV",
    rank: 3,
    cardName: "Roshield Rat Drain Guard (Stainless Steel 4 inch / 110mm)",
    cardLabel: "Best for Drains",
    features: [
      "Listed as a one-way flap fitted inside an inspection chamber, 4 inch / 110mm",
      "Listed as 316 marine-grade stainless steel, made in the UK",
      "The maker says liquids and solids pass down while rats cannot come up or chew through the flap",
      "Listed as installable at the pipe entrance or exit, with the bolt switched to the flow direction; a 150mm variant is listed separately",
    ],
    tableCells: ["Roshield Rat Drain Guard 110mm", "One-way stainless flap for 110mm drains, as listed", "Best for Drains"],
    h2Label: "Best for Drains",
    h2Name: "Roshield Rat Drain Guard",
    tocLabel: "Best for Drains",
    tocName: "Roshield Rat Drain Guard",
  },
  {
    anchorId: "best-door",
    asin: "B00FO7OLA4",
    rank: 4,
    cardName: "Stormguard Door Brush Strip Draught Excluder (914mm)",
    cardLabel: "Best for Door Gaps",
    features: [
      "Listed as sealing gaps up to 25mm under a door",
      "Fetched title ends \"- Wood\"; material row reads Wood — not aluminium, as this page once said",
      "Listed at 91.4cm long; cut to size with a hacksaw through the 3mm rod, per the listing's own directions",
      "The listing describes crimping the housing ends so the brush cannot slide out",
    ],
    tableCells: ["Stormguard Brush Strip 914mm", "Wood-carrier brush strip; gaps up to 25mm, as listed", "Best for Door Gaps"],
    h2Label: "Best for Door Gaps",
    h2Name: "Stormguard Door Brush Strip Draught Excluder (914mm)",
    tocLabel: "Best for Door Gaps",
    tocName: "Stormguard Door Brush Strip",
  },
  {
    anchorId: "best-paste",
    asin: "B07VWCQ647",
    rank: 5,
    cardName: "Roshield Rodent Proofing Control Paste",
    cardLabel: "Best Finishing Seal",
    features: [
      "Listed for holes, cracks and crevices up to 10cm across; a caulking gun is needed and not included",
      "The maker describes a firm outer layer over a non-setting underlayer",
      "Listed as non-toxic, made of natural fibres and oils",
      "The listing's legal disclaimer: remove the infestation before applying proofing materials",
    ],
    tableCells: ["Roshield Proofing Paste", "Non-setting proofing paste; gaps to 10cm, as listed", "Best Finishing Seal"],
    h2Label: "Best Finishing Seal",
    h2Name: "Roshield Rodent Proofing Control Paste",
    tocLabel: "Best Finishing Seal",
    tocName: "Roshield Rodent Proofing Paste",
  },
];

const tocItems = [
  { id: "situation", title: "The 6mm Gap" },
  { id: "legal", title: "Where Proofing Sits in the Guidance" },
  { id: "limits", title: "Where Proofing Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Proofing Is Not the Answer" },
  { id: "using", title: "Doing the Job" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestRodentProofingPage() {
  return (
    <GuideLayout
      title="Best Rodent Proofing Products UK 2026: Mesh, Steel Wool &amp; Drain Guards"
      subtitle="Physical rodent proofing materials for UK homes — galvanised wire mesh, stainless steel wool fill fabric, drain guards, door brush strips and proofing paste compared."
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
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
        Oxford City Council&rsquo;s figure is the one that matters:{" "}
        <em>
          &ldquo;Even gaps as small as 6mm, like those around pipes, can allow
          entry, so sealing these is crucial.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ). Every product on this page is a way of closing a gap; one of them is
        listed at exactly that aperture.
      </p>

      {/* DECISION BLOCK — situation first. The gap line, the guidance line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price, no
          image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You do not know where they are getting in.</strong> Defra
            lists what they can pass through and gnaw through &mdash;{" "}
            <a href="#situation" className="underline">
              the 6mm gap
            </a>
            .
          </li>
          <li>
            <strong>You are wondering whether to proof or to poison.</strong>{" "}
            Defra and HSE both put proofing first &mdash;{" "}
            <a href="#legal" className="underline">
              where proofing sits in the guidance
            </a>
            .
          </li>
          <li>
            <strong>Rats, and no obvious hole.</strong> Defra names the drain
            &mdash;{" "}
            <a href="#best-drain" className="underline">
              the drain guard
            </a>
            .
          </li>
          <li>
            <strong>You still have mice inside.</strong> The paste listing says
            what to do first &mdash;{" "}
            <a href="#limits" className="underline">
              where proofing does not help
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">The 6mm Gap</h2>
      <p>
        Defra&rsquo;s code:{" "}
        <em>
          &ldquo;They can pass through very small gaps, and can jump
          significant distances and burrow in soil or other materials.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra
        </a>
        ). And on what a gap that is nearly big enough becomes:{" "}
        <em>
          &ldquo;Both rats and mice can gnaw a range of materials including
          concrete, wood, soft metals and plastics and can create gaps below
          house doors to gain easy access.&rdquo;
        </em>{" "}
        Soft metals and plastics are on that list. Welded galvanised steel and
        stainless steel are not, which is what three of the five products here
        are made of.
      </p>

      {/* [1] Legal / guidance position */}
      <h2 id="legal">Where Proofing Sits in the Guidance</h2>
      <p>
        There is no licence to hold for a roll of mesh; the position is where
        the guidance puts it, and it is first. Defra:{" "}
        <em>
          &ldquo;Buildings should be proofed as far as possible against rodent
          ingress&rdquo;
        </em>
        . On drains specifically:{" "}
        <em>
          &ldquo;Depending on the circumstances, drainage pipes or gullies
          should be proofed by fitting grilles, flaps, crushed wire mesh or
          other suitable materials.&rdquo;
        </em>{" "}
        Three of those four words are products on this page.
      </p>
      <p>
        HSE, on the alternative:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). Proofing is one of those methods.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where Proofing Does Not Help</h2>
      <p>
        <strong>With the ones already inside.</strong> The Roshield paste
        listing carries its own disclaimer: rodent control to remove the
        infestation is to be undertaken before proofing materials are applied.
        A sealed house with a mouse in it is a sealed house with a mouse in it.
      </p>
      <p>
        <strong>Against a material they can gnaw.</strong> Defra&rsquo;s list
        above. A plastic vent cover or a foam filler is on it.
      </p>
      <p>
        <strong>At a gap you have not found.</strong> Oxford&rsquo;s 6mm and
        Defra&rsquo;s under-the-door line say where to look; a product cannot.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Where the gap is</h3>
      <p>
        Mesh for an air brick or a wall void; fill fabric for a hole around a
        pipe; a flap for a drain; a brush strip for a door; paste for a crack.
        Each listing states the places it is for, and the table carries them.
      </p>
      <h3>2. What the listing says it is made of</h3>
      <p>
        Hot-dipped galvanised welded steel, stainless steel wool with poly
        fibre, 316 stainless steel, a wood carrier with a brush, and natural
        fibres and oils. Against Defra&rsquo;s gnaw list, the metals are the
        ones not on it.
      </p>
      <h3>3. The size it is listed for</h3>
      <p>
        6mm aperture; a 4 inch by 10 foot roll; a 110mm pipe; a gap up to 25mm;
        a hole up to 10cm. Measure the gap before buying for it.
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
                "A 6m by 900mm roll of hot-dipped galvanised welded mesh with a 6mm aperture, listed for air bricks, pipework and wall voids, cut with tin snips, with no fixings supplied. The 6mm figure is the listing's; that it matches the council's gap is the reason it leads the page, not a claim about how well it works.",
                "A 4 inch by 10 foot roll of stainless steel wool woven with poly fibres, which the maker says is pushed into a hole and expands to fill it, and will not rust. Listed for holes around pipes, vents and windows, with Mouse as its target species.",
                "A one-way flap in 316 stainless steel for a 110mm drain, fitted inside the inspection chamber with the bolt switched to match the flow, which the maker says lets waste down and stops rats coming up. The drain is the entry Defra names in terms, and this is the one product here that addresses it.",
                "A 91.4cm brush strip listed as sealing gaps up to 25mm under a door, with a wood carrier — the listing's material row and its title both say wood, and this page once said aluminium. Cut to length through a 3mm rod with a hacksaw and crimped so the brush stays put, per the listing's own steps.",
                "A non-toxic proofing paste of natural fibres and oils for cracks and holes up to 10cm, applied with a caulking gun that is not included, which the maker describes as setting firm on the outside over a layer that never sets. The listing's disclaimer is the honest one: clear the infestation first.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Proofing Is Not the Answer</h2>
      <p>
        <strong>Trap what is inside first.</strong> The paste listing&rsquo;s
        own order of work &mdash; our <a href="/best/mouse-traps">mouse traps</a>{" "}
        and <a href="/best/rat-traps">rat traps</a> pages.
      </p>
      <p>
        <strong>A professional, for a drain you cannot get to.</strong> A
        collapsed pipe below ground is not an inspection-chamber job, and it
        is the one entry Defra names that a householder cannot always see.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Doing the Job</h2>
      <ol>
        <li>
          <strong>Clear the infestation first.</strong> The paste
          listing&rsquo;s disclaimer, and the reason the trap pages exist.
        </li>
        <li>
          <strong>Walk the outside at ground level.</strong> Air bricks, pipe
          entries, the gap under every door, per Defra and Oxford.
        </li>
        <li>
          <strong>Match the material to the gap.</strong> Mesh, wool, flap,
          brush or paste, by the sizes each listing states.
        </li>
        <li>
          <strong>Use a metal on Defra&rsquo;s list of things they cannot
          gnaw.</strong>{" "}
          Three of the five here are steel.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            The old version of this page said the brush strip had an aluminium
            carrier. Its listing says wood. The listing governs, and the card
            now says so.
          </p>
        </Callout>
      </div>

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
                Material and size, as listed
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
        heading="Activity that continues after every visible gap is closed?"
        subtext="That is a drain survey or a void you cannot see. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
