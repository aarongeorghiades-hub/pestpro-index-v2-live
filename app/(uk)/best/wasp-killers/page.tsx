import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// THE H1 PROMISES POWDERS AND THE PAGE CARDS NONE. It reads "Sprays, Powders & Traps";
// the three products are two foams and a trap. Held by the standing rule and reported;
// the subtitle and description no longer promise a powder.
//
// HEALTH: one general sentence, quoted from Oxford City Council, naming no illness.
//
// BPCA's wasp page was attempted and returned HTTP 403 with a 5,509-byte body — recorded
// as BLOCKED (Law 177), the round's single attempt on that URL spent. Oxford City
// Council's pest advice page is the source read.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Wasp Killer Products UK 2026: Sprays, Powders & Traps",
    description:
      "Wasp nest treatment for UK homes: when a council says leave it to a professional, why a nest dies off in winter anyway, and four products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/wasp-killers" },
    openGraph: {
      title: "Best Wasp Killer Products UK 2026: Sprays, Powders & Traps",
      description:
        "Wasp nest treatment for UK homes: when a council says leave it to a professional, why a nest dies off in winter anyway, and four products on their own listings.",
      url: "https://pestproindex.com/best/wasp-killers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wasp Killer Products UK 2026: Sprays, Powders & Traps",
  description:
    "Wasp nest treatment for UK homes: when a council says leave it to a professional, why a nest dies off in winter anyway, and four products on their own listings.",
  datePublished: "2026-03-16",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/wasp-killers" },
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
      name: "Best Wasp Killer Products UK 2026: Sprays, Powders & Traps",
      item: "https://pestproindex.com/best/wasp-killers",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S68 R1 under
// ~/pp-s68r1/sources/ (Law 175).
const SRC = {
  oxford: "https://www.oxford.gov.uk/pest-control-advice/pest-control-advice-wasps",
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
// rows (S52-E), fetched 2026-09-01. Maker claims are framed as the maker's.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B000TAY2EQ",
    rank: 1,
    cardName: "Rentokil Wasp Foam 300ml",
    cardLabel: "Best Overall",
    features: [
      "Fetched title: Rentokil PSW97 Wasp Destroy Foam Aerosol 300ml",
      "Contains d-phenothrin and tetramethrin, per the listing",
      "The maker claims it kills wasps in the nest",
      "Aerosol; target species listed as Insects",
    ],
    tableCells: ["Rentokil PSW97 Foam 300ml", "Nest foam; d-phenothrin + tetramethrin, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Rentokil Wasp Foam 300ml",
    tocLabel: "Best Overall",
    tocName: "Rentokil Foam",
  },
  {
    anchorId: "best-trap",
    asin: "B08BJ1LFNS",
    rank: 2,
    cardName: "Zero In Ultra Power XL Wasp Trap",
    cardLabel: "Best Wasp Trap",
    features: [
      "Listed as poison-free, supplied with 2 sachets of attractant bait",
      "Listed for outdoor use: gardens, smallholdings, refuse areas, stables and barns",
      "Listed as reusable, with a refill available and a twist-off base for emptying",
      "Listing directions: put the trap in a bag in a freezer for 2 hours before emptying",
      "Target species listed as Wasp",
    ],
    tableCells: ["Zero In XL Wasp Trap", "Baited trap; poison-free; outdoor, as listed", "Best Wasp Trap"],
    h2Label: "Best Wasp Trap",
    h2Name: "Zero In Ultra Power XL Wasp Trap",
    tocLabel: "Best Trap",
    tocName: "Zero In XL",
  },
  {
    anchorId: "best-spray",
    asin: "B0082M8TU6",
    rank: 3,
    cardName: "Zero In Wasp Killer 300ml",
    cardLabel: "Best Quick-Kill Spray",
    features: [
      "Fetched title: Zero In Wasp Nest Killer — foam spray for indoor and outdoor nest removal",
      "Contains permethrin and tetramethrin, per the listing",
      "Listed as reaching a nest from up to 2 metres away",
      "Listed as 2-3 treatments per 300ml can",
      "Listing directions: apply late evening or early morning when wasps are less active",
    ],
    tableCells: ["Zero In Wasp Nest Killer 300ml", "Nest foam; permethrin + tetramethrin; 2-3 treatments per can, as listed", "Best Quick-Kill Spray"],
    h2Label: "Best Quick-Kill Spray",
    h2Name: "Zero In Wasp Killer 300ml",
    tocLabel: "Best Spray",
    tocName: "Zero In Killer",
  },
  // S68 R5 — the powder the title promises. Banked body (S45-C), fetched 2026-09-01;
  // neutral factual label.
  {
    anchorId: "nest-powder",
    asin: "B00AC1IM6Q",
    rank: 4,
    cardName: "Rentokil PSW99P Wasp Killer Powder 300g",
    cardLabel: "Nest Powder, 300g",
    features: [
      "300g powder; active listed as permethrin",
      "Listed for use on inaccessible nests",
      "Listed for the home and garden",
      "Target species listed as Insects",
      "No application rate or nest count is stated on the listing",
    ],
    tableCells: ["Rentokil PSW99P Powder 300g", "Powder; permethrin; for inaccessible nests, as listed", "Nest Powder, 300g"],
    h2Label: "Nest Powder, 300g",
    h2Name: "Rentokil PSW99P Wasp Killer Powder 300g",
    tocLabel: "Nest Powder",
    tocName: "Rentokil PSW99P",
  },
];

const tocItems = [
  { id: "situation", title: "Where the Nest Is, and When It Ends" },
  { id: "legal", title: "The Legal Position on Wasp Products" },
  { id: "limits", title: "Where a Foam Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Three Products Compared" },
];

export default function BestWaspKillersPage() {
  return (
    <GuideLayout
      title="Best Wasp Killer Products UK 2026: Sprays, Powders & Traps"
      subtitle="Two nest foams and one baited trap for UK homes, described by what their own listings state — and what a council's pest advice says about which nests to leave to a professional"
      lastUpdated="September 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Moth Killers UK", href: "/best/moth-killers" },
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
        A wasp nest is a summer structure. Oxford City Council&rsquo;s pest
        advice:{" "}
        <em>
          &ldquo;Fertilized queens leave to hibernate, while the rest of the
          colony dies off with the onset of cold weather.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ). Whether to treat one at all is the first question, and it is not
        always yes.
      </p>

      {/* DECISION BLOCK — situation first. The professional line, the legal line and
          the does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>The nest is large, or somewhere you cannot reach.</strong>{" "}
            The council&rsquo;s advice is that larger nests may need a
            professional &mdash;{" "}
            <a href="#alternatives" className="underline">
              if a product is not the answer
            </a>
            .
          </li>
          <li>
            <strong>You want to know what you are allowed to use.</strong>{" "}
            HSE separates general-public products from professional ones &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>You want to know where the nest is likely to be.</strong>{" "}
            The council lists the places &mdash;{" "}
            <a href="#situation" className="underline">
              where the nest is, and when it ends
            </a>
            .
          </li>
          <li>
            <strong>You want wasps away from a table, not a nest treated.</strong>{" "}
            One of the three is a baited outdoor trap with no insecticide &mdash;{" "}
            <a href="#best-trap" className="underline">
              the trap
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Where the Nest Is, and When It Ends</h2>
      <p>
        Oxford City Council:{" "}
        <em>
          &ldquo;Wasps build colonies inside nests made from wood pulp,
          commonly found in buildings&rsquo; roof spaces, airbricks, wall
          cavities, garden sheds, tree holes, and soil banks.&rdquo;
        </em>{" "}
        And on size:{" "}
        <em>&ldquo;By early autumn, nests can contain thousands of wasps.&rdquo;</em>
      </p>
      <p>
        The council&rsquo;s reason for controlling them at all is the one
        health sentence on this page:{" "}
        <em>
          &ldquo;Wasps can carry germs and attack when disturbed, posing a risk
          to hypersensitive individuals.&rdquo;
        </em>{" "}
        A nest that is not near people and not being disturbed will end on its
        own with the first frosts.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Wasp Products</h2>
      <p>
        Two of the three products are insecticides; the trap is poison-free by
        its listing. HSE&rsquo;s guidance on using biocides:{" "}
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
        ). The label on the can states which a product is.
      </p>
      <p>
        HSE on the label:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>{" "}
        The Zero In foam listing carries a direction of its own &mdash; apply
        late evening or early morning &mdash; which is repeated on its card as
        the maker&rsquo;s.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Foam Does Not Help</h2>
      <p>
        <strong>A nest you cannot reach.</strong> The Zero In foam is listed as
        reaching from up to 2 metres. A nest in a wall cavity, a roof void or
        under a soil bank &mdash; three of the council&rsquo;s six locations
        &mdash; may be beyond it. The council&rsquo;s line:{" "}
        <em>&ldquo;However, larger nests may require professional treatment.&rdquo;</em>
      </p>
      <p>
        <strong>A trap does not treat a nest.</strong> The Zero In trap is
        listed for outdoor use with a bait attractant. It is for wasps in the
        garden, not the colony they came from.
      </p>
      <p>
        <strong>A foam does not treat next year.</strong> Per the council, the
        colony dies with the cold and only the queens overwinter.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Nest or no nest</h3>
      <p>
        Two products are nest foams and one is a baited trap. If you have not
        found a nest, the foams have nothing to be pointed at.
      </p>
      <h3>2. Reach and how many goes, as listed</h3>
      <p>
        Zero In foam: up to 2 metres, 2-3 treatments per can. Rentokil foam:
        neither figure is stated on its listing. The table carries both as
        stated.
      </p>
      <h3>3. Which active the listing names</h3>
      <p>
        Rentokil: d-phenothrin and tetramethrin. Zero In foam: permethrin and
        tetramethrin. The trap: none, by design.
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
                "A 300ml Rentokil aerosol foam whose listing states d-phenothrin and tetramethrin and which the maker says kills wasps in the nest. The listing states no reach and no number of treatments per can, so those cells read not stated.",
                "A reusable outdoor trap listed as poison-free and supplied with two sachets of attractant, with a refill available and a twist-off base. The listing's own emptying direction is to bag the trap and freeze it for two hours first. Its target species field reads Wasp. The maker's claim about how far the bait draws wasps from is the maker's and is not repeated here.",
                "A 300ml foam whose fetched title reads Zero In Wasp Nest Killer, listed with permethrin and tetramethrin, for indoor and outdoor nests, reaching from up to 2 metres, with 2-3 treatments per can. The listing directs application in late evening or early morning when wasps are less active.",
                "A 300g powder, the form the title promises, whose listing names permethrin and states use on inaccessible nests in the home and garden. The listing gives no application rate and no nest count; the puffer format is what its form-factor row says, and the rest is on the pack.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Leave it, if it is leaving you alone.</strong> The colony dies
        off with the cold, per the council. A nest that is not near people
        needs nothing.
      </p>
      <p>
        <strong>A professional, for a large or unreachable nest.</strong>{" "}
        Oxford City Council:{" "}
        <em>&ldquo;However, larger nests may require professional treatment.&rdquo;</em>{" "}
        HSE:{" "}
        <em>
          &ldquo;If you are not a professional, consider using a professional
          pest controller to deal with the problem.&rdquo;
        </em>{" "}
        Our <a href="/guides/wasp-nest-removal">wasp nest guide</a> covers what
        a treatment visit involves.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Decide whether the nest needs treating at all.</strong> Near
          people and being disturbed, or not.
        </li>
        <li>
          <strong>Check you can reach it from the listed distance.</strong> Two
          metres for the Zero In foam; not stated for the Rentokil.
        </li>
        <li>
          <strong>Follow the listing&rsquo;s timing.</strong> Zero In directs
          late evening or early morning.
        </li>
        <li>
          <strong>Empty the trap the way its listing says.</strong> Bagged and
          frozen for two hours first.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The council&rsquo;s advice that larger nests may require professional
            treatment is the line this page defers to. Nothing here is a
            substitute for it.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Three Products Compared</h2>
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
                Form and actives, as listed
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
        heading="Nest in a wall, a roof or somewhere you cannot reach?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
