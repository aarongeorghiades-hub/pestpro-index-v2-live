import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled. The subtitle's "Our pick
// of the most effective" is held by the standing rule and reported.
//
// ONE CARD NAME IS CORRECTED AGAINST ITS LISTING. B01FSDM1E6 was carded as a "300g Twin
// Pack"; its fetched title is a single 300g puffer, unit count 1. The name now says what
// the listing says. The award label "Best Twin Pack" on the same card is held by the
// standing rule and REPORTED, as the Strikeback label was at S68 R1 before its ruling.
//
// HEALTH: one sentence, quoted from Oxford City Council, naming no illness. FAQ block
// and FAQPage schema removed together (Law 190). 12 unsourced sentences deleted; two G3
// hits cleared.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Wasp Nest Killer Foam UK 2026",
    description:
      "Wasp nest foams and powders for UK homes: where nests are, which the council says to leave to a professional, and five products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/wasp-nest-foam" },
    openGraph: {
      title: "Best Wasp Nest Killer Foam UK 2026",
      description:
        "Wasp nest foams and powders for UK homes: where nests are, which the council says to leave to a professional, and five products on their own listings.",
      url: "https://pestproindex.com/best/wasp-nest-foam",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wasp Nest Killer Foam UK 2026",
  description:
    "Wasp nest foams and powders for UK homes: where nests are, which the council says to leave to a professional, and five products on their own listings.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/wasp-nest-foam" },
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
      name: "Best Wasp Nest Killer Foam UK 2026",
      item: "https://pestproindex.com/best/wasp-nest-foam",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Both banked at S68 R1
// under ~/pp-s68r1/sources/ (Law 175); neither re-fetched.
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
    cardName: "Rentokil Wasp Nest Destroyer Foam 300ml",
    cardLabel: "Best Overall",
    features: [
      "Fetched title: Rentokil PSW97 Wasp Destroy Foam Aerosol 300ml",
      "Contains d-phenothrin and tetramethrin, per the listing",
      "Aerosol; target species listed as Insects",
      "Reach and treatments per can are not stated on the listing",
    ],
    tableCells: ["Rentokil PSW97 300ml", "Foam; d-phenothrin + tetramethrin; reach not stated", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Rentokil Wasp Nest Destroyer Foam",
    tocLabel: "Best Overall",
    tocName: "Rentokil Wasp Nest Destroyer Foam",
  },
  {
    anchorId: "best-range",
    asin: "B077G3YB38",
    rank: 2,
    cardName: "Zero In Ultra Power Wasp & Hornet Nest Killer Foam 600ml",
    cardLabel: "Best Long-Range",
    features: [
      "Listed as reaching up to 4 metres; the maker says a 600ml can treats 4 to 7 nests",
      "Listed for indoor and outdoor nests, with a thumb-lock trigger",
      "Listing directions: use in the late evening; wear protective clothing; mind the wind outdoors",
      "No active substance is named on the listing; target species Insects",
    ],
    tableCells: ["Zero In Ultra Power 600ml", "Foam; active not stated; up to 4m, 4-7 nests, as listed", "Best Long-Range"],
    h2Label: "Best Long-Range",
    h2Name: "Zero In Ultra Power 600ml",
    tocLabel: "Best Long-Range",
    tocName: "Zero In Ultra Power 600ml",
  },
  {
    anchorId: "best-value",
    asin: "B0082M8TU6",
    rank: 3,
    cardName: "Zero In Wasp Nest Killer Foam 300ml",
    cardLabel: "Best Value",
    features: [
      "Contains permethrin and tetramethrin, per the listing",
      "Listed as reaching up to 2 metres; 2-3 treatments per 300ml can",
      "Listed for indoor and outdoor nests",
      "Listing directions: apply late evening or early morning when wasps are less active",
    ],
    tableCells: ["Zero In Wasp Nest Killer 300ml", "Foam; permethrin + tetramethrin; up to 2m, 2-3 treatments, as listed", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Zero In Wasp Nest Killer Foam",
    tocLabel: "Best Value",
    tocName: "Zero In Wasp Nest Killer Foam",
  },
  {
    anchorId: "best-powder",
    asin: "B0B8HLKZZS",
    rank: 4,
    cardName: "Rentokil Wasp Killer Powder 150g",
    cardLabel: "Best Powder",
    features: [
      "Active ingredient listed as permethrin",
      "Powder, 150g; listed for use in and around the home",
      "Target species listed as Insects",
      "The brand row on the listing reads UKDeals Direct — a reseller; the title reads Rentokil",
    ],
    tableCells: ["Rentokil Wasp Nest Killer Powder 150g", "Powder; permethrin; 150g, as listed", "Best Powder"],
    h2Label: "Best Powder",
    h2Name: "Rentokil Wasp Killer Powder",
    tocLabel: "Best Powder",
    tocName: "Rentokil Wasp Killer Powder",
  },
  {
    anchorId: "best-twin",
    asin: "B01FSDM1E6",
    rank: 5,
    cardName: "Zero In Wasp Nest Control Powder 300g",
    cardLabel: "Permethrin Powder Puffer, 300g",
    features: [
      "Fetched title is a single 300g puffer; unit count listed as 1",
      "Contains permethrin, per the listing; child-resistant cap",
      "Listed with a dip tube and applicator nozzle for nest entrances, cracks and crevices",
      "Listed for roof spaces, wall cavities, sheds, garages and garden areas; best applied early morning or late evening, per the maker",
    ],
    tableCells: ["Zero In Wasp Nest Control Powder 300g", "Powder puffer; permethrin; single 300g, as listed", "Permethrin Powder Puffer, 300g"],
    h2Label: "Permethrin Powder Puffer, 300g",
    h2Name: "Zero In Powder 300g",
    tocLabel: "Permethrin Powder Puffer, 300g",
    tocName: "Zero In Powder 300g",
  },
];

const tocItems = [
  { id: "situation", title: "Where the Nest Is, and When It Ends" },
  { id: "legal", title: "The Legal Position on Wasp Products" },
  { id: "limits", title: "Where a Foam or Powder Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestWaspNestFoamPage() {
  return (
    <GuideLayout
      title="Best Wasp Nest Killer Foam UK 2026"
      subtitle="Wasp nest killer foams and sprays available in the UK, with safety advice and application tips"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Ant Gel Bait UK 2026", href: "/best/ant-gel-bait" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
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
        A nest foam is pointed at a nest. Oxford City Council lists where a nest
        is likely to be:{" "}
        <em>
          &ldquo;Wasps build colonies inside nests made from wood pulp, commonly
          found in buildings&rsquo; roof spaces, airbricks, wall cavities,
          garden sheds, tree holes, and soil banks.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ). Half of those are places a can cannot see into.
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
            <strong>The nest is large, or inside a wall or roof.</strong> The
            council says larger nests may need a professional &mdash;{" "}
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
            <strong>The nest is at the back of a cavity or under a slab.</strong>{" "}
            That is where a powder goes and a foam does not &mdash;{" "}
            <a href="#limits" className="underline">
              where a foam or powder does not help
            </a>
            .
          </li>
          <li>
            <strong>You want the listing that states its reach.</strong> Two of
            the three foams do &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Where the Nest Is, and When It Ends</h2>
      <p>
        The council on size:{" "}
        <em>&ldquo;By early autumn, nests can contain thousands of wasps.&rdquo;</em>{" "}
        And on the end:{" "}
        <em>
          &ldquo;Fertilized queens leave to hibernate, while the rest of the
          colony dies off with the onset of cold weather.&rdquo;
        </em>{" "}
        A nest that is not near people and not being disturbed will end on its
        own.
      </p>
      <p>
        The council&rsquo;s reason for treating one at all is the one health
        sentence on this page:{" "}
        <em>
          &ldquo;Wasps can carry germs and attack when disturbed, posing a risk
          to hypersensitive individuals.&rdquo;
        </em>
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Wasp Products</h2>
      <p>
        All five are insecticides. HSE&rsquo;s guidance on using biocides:{" "}
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
        . The label on the can states which a product is; the listings here do
        not, though one states an HSE-approved formulation.
      </p>
      <p>
        HSE on the label:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>{" "}
        Three listings carry timing directions of their own &mdash; late
        evening, or early morning &mdash; and they are repeated on the cards as
        the makers&rsquo;.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Foam or Powder Does Not Help</h2>
      <p>
        <strong>A foam, beyond its listed reach.</strong> Two foams state a
        reach &mdash; 4 metres and 2 metres. A nest under a roof tile or high
        on a soffit may be beyond both. The council&rsquo;s line:{" "}
        <em>&ldquo;However, larger nests may require professional treatment.&rdquo;</em>
      </p>
      <p>
        <strong>A foam, at an entrance you cannot see the nest behind.</strong>{" "}
        The two powders are listed for exactly that &mdash; nest entrances,
        cracks and crevices, roof spaces and wall cavities, per the Zero In
        powder listing. Which product fits is a fact about where the nest is.
      </p>
      <p>
        <strong>Anything, next year.</strong> Per the council, the colony dies
        with the cold and only the queens overwinter.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Foam or powder, by where the nest is</h3>
      <p>
        Three foams for a nest you can see and reach; two powders for an
        entrance you can only puff into. The table states the form for every
        row.
      </p>
      <h3>2. Reach and treatments per can, as listed</h3>
      <p>
        Zero In Ultra Power: up to 4 metres, 4-7 nests per 600ml. Zero In 300ml:
        up to 2 metres, 2-3 treatments. Rentokil foam: neither stated.
      </p>
      <h3>3. Which active the listing names</h3>
      <p>
        Rentokil foam: d-phenothrin and tetramethrin. Zero In 300ml foam:
        permethrin and tetramethrin. Both powders: permethrin. The 600ml Zero In
        foam names none.
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
                "A 300ml aerosol foam whose listing states d-phenothrin and tetramethrin and nothing else that a reader can use: no reach, no treatments per can, no timing. Those cells read not stated. The one product here whose listing says the least.",
                "A 600ml trigger foam listed as reaching up to 4 metres and, per the maker, treating 4 to 7 nests, for indoor and outdoor use, with directions to apply in the late evening, wear protective clothing and mind the wind. No active substance is named on the listing; the maker's comparisons with professionals are the maker's.",
                "A 300ml foam listed with permethrin and tetramethrin, reaching up to 2 metres, with 2-3 treatments per can, for indoor and outdoor nests, applied late evening or early morning per the maker. The same product is carded on our wasp killers page.",
                "A 150g permethrin powder listed for use in and around the home. The brand row on the listing belongs to a reseller; the title carries the Rentokil name, and the title is what the card reads.",
                "A single 300g permethrin puffer with a dip tube and applicator nozzle, listed for nest entrances, cracks and crevices in roof spaces, wall cavities, sheds and garages, with a child-resistant cap and early-morning or late-evening timing per the maker. The card and its label said twin pack until S68 R2 and R3; the listing's unit count is 1.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Leave it, if it is leaving you alone.</strong> The council&rsquo;s
        lifecycle is above; a nest not near people needs nothing.
      </p>
      <p>
        <strong>A professional, for a large or unreachable nest.</strong> Oxford
        City Council:{" "}
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
          <strong>Decide whether it needs treating.</strong> Near people and
          disturbed, or not.
        </li>
        <li>
          <strong>Match the product to the nest.</strong> Foam for a nest you
          can see within the listed reach; powder for an entrance.
        </li>
        <li>
          <strong>Follow the listing&rsquo;s timing.</strong> Late evening or
          early morning, per three of the five.
        </li>
        <li>
          <strong>Wear what the listing says.</strong> Protective clothing,
          per the Ultra Power listing.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The council&rsquo;s line that larger nests may require professional
            treatment is the one this page defers to. A nest inside a wall or a
            roof is that nest.
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
                Form, actives and reach, as listed
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
        heading="Nest in a wall cavity, a roof space or a soil bank?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
