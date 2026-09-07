import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// THE H1 PROMISES GELS AND THE PAGE CARDS NONE. It reads "Sprays, Gels & Professional
// Products"; the five products are a solvent fluid, a concentrate, an aerosol, an
// injector bottle and a moisture meter. Held by the standing rule and reported; the
// subtitle and description no longer promise a gel, and no longer say "boron", which no
// listing here states.
//
// THE OLD PAGE'S MOISTURE FIGURES — 12%, 18%, "larvae die" — HAD NO SOURCE and are gone.
// What SPAB actually says about dampness and about moisture meters is quoted instead,
// and it cuts against over-reading a meter. The old page's "industry standard",
// "gold standard", "20-30 year guarantees" and "majority of professional companies"
// claims are gone with it: 31 unsourced sentences, all deleted.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Woodworm Treatments UK 2026 — Sprays & Fluids",
    description:
      "Woodworm treatment for UK homes: telling an active outbreak from old holes, why dampness is dealt with first, and five products compared on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/woodworm-treatments" },
    openGraph: {
      title: "Best Woodworm Treatments UK 2026 — Sprays & Fluids",
      description:
        "Woodworm treatment for UK homes: telling an active outbreak from old holes, why dampness is dealt with first, and five products compared on their own listings.",
      url: "https://pestproindex.com/best/woodworm-treatments",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Woodworm Treatments UK 2026 — Sprays & Fluids",
  description:
    "Woodworm treatment for UK homes: telling an active outbreak from old holes, why dampness is dealt with first, and five products compared on their own listings.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/woodworm-treatments" },
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
      name: "Best Woodworm Treatments UK 2026 — Sprays & Fluids",
      item: "https://pestproindex.com/best/woodworm-treatments",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S68 R1 under
// ~/pp-s68r1/sources/ (Law 175).
const SRC = {
  spab: "https://www.spab.org.uk/advice/wood-boring-insects",
  nhm: "https://www.nhm.ac.uk/take-part/identify-nature/common-insect-pest-species-in-homes/furniture-beetle-anobium-punctatum-identification-guide.html",
  hse: "https://www.hse.gov.uk/biocides/using/overview.htm",
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
// rows (S52-E), fetched 2026-09-01. Two listings name an active (both Rentokil:
// permethrin); the Barrettine fluid's bullets name none, and the Woodwyse listing has
// no bullets at all — the cells say so.
const products: ProductRecord[] = [
  {
    anchorId: "best-fluid",
    asin: "B0041WB2E6",
    rank: 1,
    cardName: "Barrettine Premier Woodworm Killer 1L",
    cardLabel: "Best Treatment Fluid",
    features: [
      "Fetched title: 1 L Solvent Preserver Woodworm Killer; manufacturer row Barrettine",
      "The maker claims it kills woodworm larvae and eggs on direct contact",
      "The maker claims coverage of common furniture beetle, house longhorn, powder post beetle and wood-boring weevils",
      "No active substance is named on the listing",
      "1 litre; item form listed as Powder, Spray",
    ],
    tableCells: ["Barrettine Woodworm Killer 1L", "Solvent fluid; active not stated; 1L, as listed", "Best Treatment Fluid"],
    h2Label: "Best Treatment Fluid",
    h2Name: "Barrettine Premier Woodworm Killer 1L",
    tocLabel: "Best Treatment Fluid",
    tocName: "Barrettine Woodworm Killer",
  },
  {
    anchorId: "best-water-based",
    asin: "B01MZ7ZB2V",
    rank: 2,
    cardName: "Rempro Woodwyse Internal Wood Treatment",
    cardLabel: "Best Water-Based Treatment",
    features: [
      "Fetched title: Woodwyse Internal Wood Treatment for Woodworm & Dry Rot Control — Makes 25 Litres",
      "A concentrate; unit count listed as 1,000 millilitres",
      "Brand listed as Rempro",
      "The listing carries no feature bullets and names no active substance",
    ],
    tableCells: ["Rempro Woodwyse concentrate", "Concentrate making 25L; active not stated, as listed", "Best Water-Based Treatment"],
    h2Label: "Best Water-Based Treatment",
    h2Name: "Rempro Woodwyse Internal Wood Treatment",
    tocLabel: "Best Water-Based Treatment",
    tocName: "Rempro Woodwyse",
  },
  {
    anchorId: "best-spray",
    asin: "B000TVLY1O",
    rank: 3,
    cardName: "Rentokil PSW85 Woodworm Treatment Spray 300ml",
    cardLabel: "Best Spray Can",
    features: [
      "Contains permethrin, per the listing",
      "The maker describes it as a dual-purpose spray that kills eggs, larvae and adult wood-boring insects",
      "The maker describes it as fast drying and low odour",
      "300ml aerosol",
    ],
    tableCells: ["Rentokil PSW85 300ml", "Aerosol; permethrin; 300ml, as listed", "Best Spray Can"],
    h2Label: "Best Spray Can",
    h2Name: "Rentokil PSW85 Woodworm Treatment Spray 300ml",
    tocLabel: "Best Spray Can",
    tocName: "Rentokil Woodworm Spray",
  },
  {
    anchorId: "best-injector",
    asin: "B000TVIXZY",
    rank: 4,
    cardName: "Rentokil PSW92 Woodworm Treatment 250ml",
    cardLabel: "Best Injection Applicator",
    features: [
      "Contains permethrin, per the listing",
      "The maker claims it kills eggs, grubs and beetles and prevents re-infestation",
      "Listed for use on wood indoors and outdoors",
      "250ml; item volume listed as 0.25 litres",
    ],
    tableCells: ["Rentokil PSW92 250ml", "Injector bottle; permethrin; 250ml, as listed", "Best Injection Applicator"],
    h2Label: "Best Injection Applicator",
    h2Name: "Rentokil PSW92 Woodworm Treatment 250ml",
    tocLabel: "Best Injection Applicator",
    tocName: "Rentokil PSW92",
  },
  {
    anchorId: "best-meter",
    asin: "B003ASOBG8",
    rank: 5,
    cardName: "Stanley 0-77-030 Moisture Meter",
    cardLabel: "Best Moisture Meter",
    features: [
      "Not a treatment — a two-pin meter giving a percentage moisture reading",
      "Listed as measuring moisture in wood from 6-44%",
      "Listed as measuring other building materials from 0.2-2%",
      "LCD screen; listed as including 4 x AAA batteries",
    ],
    tableCells: ["Stanley 0-77-030", "Pin moisture meter; wood 6-44%, as listed", "Best Moisture Meter"],
    h2Label: "Best Moisture Meter",
    h2Name: "Stanley 0-77-030",
    tocLabel: "Best Moisture Meter",
    tocName: "Stanley 0-77-030",
  },
];

const tocItems = [
  { id: "situation", title: "Old Holes or an Active Outbreak" },
  { id: "legal", title: "The Legal Position on Wood Preservatives" },
  { id: "limits", title: "Where a Treatment Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Treatment Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestWoodwormTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Woodworm Treatments UK 2026 &mdash; Sprays, Fluids &amp; Injectors"
      subtitle="Four treatments and one moisture meter for UK homes, described by what their own listings state — and what SPAB says has to be established before any of them is used"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Moth Killers UK", href: "/best/moth-killers" },
        { title: "Best Fox Deterrents UK 2026", href: "/best/fox-deterrents" },
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
        Holes in timber are the end of the story, not the start of it. The
        Natural History Museum on the common furniture beetle:{" "}
        <em>
          &ldquo;The larvae bore straight into the wood making a hole
          indiscernible to the naked eye.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhm} rel="nofollow">
          Natural History Museum
        </a>
        ). The hole you can see is where an adult left.
      </p>

      {/* DECISION BLOCK — situation first. The active-or-not line, the legal line and
          the damp line sit ABOVE the product lines. No Amazon link, no price, no image,
          no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have found holes and do not know if they are old.</strong>{" "}
            SPAB describes how an active outbreak looks &mdash;{" "}
            <a href="#situation" className="underline">
              old holes or an active outbreak
            </a>
            .
          </li>
          <li>
            <strong>You want to know what you are allowed to use.</strong>{" "}
            HSE says who may use which biocides &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>The timber is damp.</strong> SPAB puts drying before any
            chemical &mdash;{" "}
            <a href="#limits" className="underline">
              where a treatment does not help
            </a>
            .
          </li>
          <li>
            <strong>You are choosing between a fluid, a spray and an injector.</strong>{" "}
            Two of the four treatments name their active; two do not &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Old Holes or an Active Outbreak</h2>
      <p>
        The Society for the Protection of Ancient Buildings gives the test:{" "}
        <em>
          &ldquo;Active outbreaks are identified by holes with sharp rather than
          round edges, and the interiors and bore dust (&apos;frass&apos;) are
          not dark but the colour of freshly-cut timber.&rdquo;
        </em>{" "}
        (
        <a href={SRC.spab} rel="nofollow">
          SPAB
        </a>
        ). For the common furniture beetle it adds the size:{" "}
        <em>
          &ldquo;Furniture beetles target both softwoods and hardwoods,
          producing 1-2 mm wide holes and lemon-shaped frass.&rdquo;
        </em>
      </p>
      <p>
        The Natural History Museum describes the same evidence from the
        insect&rsquo;s side &mdash;{" "}
        <em>
          &ldquo;small piles of wood dust (frass) characteristic of woodworm
          damage&rdquo;
        </em>{" "}
        &mdash; and the timescale:{" "}
        <em>
          &ldquo;Full-grown larvae change into pupae and, after 6-8 weeks, into
          adult beetles.&rdquo;
        </em>{" "}
        Fresh, pale frass under a sharp-edged hole is the sign that decides
        whether anything on this page is needed.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Wood Preservatives</h2>
      <p>
        A woodworm treatment is a biocide. HSE&rsquo;s guidance on using them:{" "}
        <em>
          &ldquo;If you are a member of the public, you should only use
          biocidal products that are intended for the general public -
          sometimes the terms &apos;amateur&apos; or &apos;non-professional&apos;
          might be used instead.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). And:{" "}
        <em>
          &ldquo;members of the general public must not use professional or
          industrial use products&rdquo;
        </em>
        . The label on the container states which a product is; the listings
        here do not.
      </p>
      <p>
        HSE on the label itself:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Treatment Does Not Help</h2>
      <p>
        <strong>Where the timber is damp.</strong> SPAB:{" "}
        <em>
          &ldquo;Wood-boring insects, like timber-decaying fungi, only establish
          themselves where dampness exists.&rdquo;
        </em>{" "}
        And on what a chemical is for:{" "}
        <em>
          &ldquo;Action could entail targeted chemical treatment - but not as a
          substitute for promoting drying, or general precaution for extinct or
          non-existent outbreaks merely to obtain a guarantee.&rdquo;
        </em>
      </p>
      <p>
        <strong>Where the outbreak is old.</strong> The same sentence covers it:
        a treatment applied to extinct holes is a precaution SPAB says not to
        take for its own sake.
      </p>
      <p>
        <strong>Where a meter is read as a verdict.</strong> SPAB on the fifth
        product&rsquo;s class:{" "}
        <em>
          &ldquo;However, over-reliance should not be placed on surface readings
          from electrical moisture meters.&rdquo;
        </em>{" "}
        A reading is a reading, not a diagnosis.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the outbreak is active</h3>
      <p>
        SPAB&rsquo;s test above. If the holes are round-edged and the frass is
        dark, SPAB&rsquo;s advice is not to treat merely to obtain a guarantee.
      </p>
      <h3>2. Whether the listing names an active substance</h3>
      <p>
        Both Rentokil listings state permethrin. The Barrettine listing claims
        what it kills and names no substance. The Woodwyse listing carries no
        bullets at all. What is in the first two is on the page; what is in the
        other two is on the container.
      </p>
      <h3>3. How it is applied, as listed</h3>
      <p>
        A 1-litre fluid and a concentrate that makes 25 litres are brushed or
        sprayed over an area. The 300ml aerosol and the 250ml injector bottle
        are for holes and small areas. The meter treats nothing and is listed
        for wood from 6-44%.
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
                "A 1-litre solvent fluid whose fetched title is 1 L Solvent Preserver Woodworm Killer, with Barrettine in the manufacturer row. The maker claims it kills larvae and eggs on direct contact and names common furniture beetle, house longhorn, powder post beetle and weevils; no active substance is stated. The brand row reads Nourish & Protect.",
                "A concentrate whose title states it makes 25 litres, for woodworm and dry rot, listed under the Rempro brand. The listing carries no feature bullets and names no active substance, so nothing beyond the title and the volume is stated.",
                "A 300ml aerosol whose listing states permethrin and which the maker describes as killing eggs, larvae and adult wood-boring insects, fast drying and low odour. The smallest volume on the page and the only one with a spray head.",
                "A 250ml injector bottle whose listing states permethrin, for wood indoors and outdoors, which the maker claims kills eggs, grubs and beetles and prevents re-infestation. The one product listed for outdoor timber.",
                "Not a treatment. A two-pin electrical-resistance meter listed as reading wood from 6-44% and other building materials from 0.2-2%, with an LCD screen and four AAA batteries included. SPAB's caution about over-relying on surface readings applies to it directly.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Treatment Is Not the Answer</h2>
      <p>
        <strong>Dry the timber.</strong> SPAB puts it before any chemical:{" "}
        <em>
          &ldquo;Good preventative maintenance and moisture monitoring can avert
          dampness and, therefore, ensuing damage caused by wood-borers.&rdquo;
        </em>
      </p>
      <p>
        <strong>Confirm it is active before you buy anything.</strong> Sharp
        edges and pale frass, per SPAB. Old holes need no treatment.
      </p>
      <p>
        <strong>Get a specialist in for structural timber.</strong> HSE:{" "}
        <em>
          &ldquo;If you are not a professional, consider using a professional
          pest controller to deal with the problem.&rdquo;
        </em>
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Establish the outbreak is active.</strong> Sharp-edged holes,
          frass the colour of fresh-cut timber.
        </li>
        <li>
          <strong>Deal with the damp first.</strong> Chemical treatment is not a
          substitute for drying, per SPAB.
        </li>
        <li>
          <strong>Read the container, not the listing.</strong> Two of the four
          treatments name no active substance online.
        </li>
        <li>
          <strong>Match the product to the area.</strong> Fluid or concentrate
          for joists and boards; aerosol or injector for holes.
        </li>
        <li>
          <strong>Treat a meter reading as one reading.</strong> SPAB&rsquo;s
          caution above.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            Nothing on this page states a moisture percentage at which larvae
            die. The old version of this page did, and no source supported it.
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
                Form and active, as listed
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
        heading="Fresh frass in structural timber?"
        subtext="Roof and floor timbers are a specialist's job. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
