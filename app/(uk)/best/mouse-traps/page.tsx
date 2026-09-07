import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled. The subtitle's "Our pick
// of the most effective" is held by the standing rule and reported.
//
// Card names were corrected against their listings at S67 R10 and S68 R1 (Trisiki 4-pack,
// AKCHY, UNIQU) and are carried as corrected. The old page's "one in ten UK properties"
// BPCA figure, "spoke with professional pest controllers" and "trusted by pest
// controllers" are gone: 11 unsourced sentences deleted, none softened. Three G3 hits
// cleared.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Mouse Traps UK 2026",
    description:
      "Mouse traps for UK homes: what the spring trap rules say, why a 6mm gap matters more than the trap, and five products compared on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/mouse-traps" },
    openGraph: {
      title: "Best Mouse Traps UK 2026",
      description:
        "Mouse traps for UK homes: what the spring trap rules say, why a 6mm gap matters more than the trap, and five products compared on their own listings.",
      url: "https://pestproindex.com/best/mouse-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Mouse Traps UK 2026",
  description:
    "Mouse traps for UK homes: what the spring trap rules say, why a 6mm gap matters more than the trap, and five products compared on their own listings.",
  datePublished: "2026-03-14",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/mouse-traps" },
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
      name: "Best Mouse Traps UK 2026",
      item: "https://pestproindex.com/best/mouse-traps",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). All four bodies were
// already banked (S67 R2, S67 R10) and kept under Law 175; none was re-fetched.
const SRC = {
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
  oxford: "https://www.oxford.gov.uk/pest-control-advice/pest-control-advice-mice",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  rrag: "https://static1.squarespace.com/static/5f158ba75e2c117be4a3fc00/t/638637a4cfbdfc639f3829c3/1669740456569/2022_RRAG_RRAG+Mouse+Guideline+2022+PROOF.pdf",
  unl: "https://extensionpubs.unl.edu/publication/g1737/2007/html/view",
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
    asin: "B01NB0QNPI",
    rank: 1,
    cardName: "ROSHIELD 6-Pack Mouse Trap",
    cardLabel: "Best Overall",
    features: [
      "Listed as 6 traps; number of pieces 6; target species Mouse, Rat",
      "The maker describes a high-strength spring, a sensitive trigger and a welded kill bar",
      "The maker says the trigger plate is larger than smaller alternatives",
      "Listed as usable inside Roshield rodent bait stations; indoor and outdoor",
    ],
    tableCells: ["ROSHIELD 6-Pack", "Snap trap; 6, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "ROSHIELD 6-Pack Mouse Trap",
    tocLabel: "Best Overall",
    tocName: "ROSHIELD 6-Pack",
  },
  {
    anchorId: "best-heavy-duty",
    asin: "B08ML78RC5",
    rank: 2,
    cardName: "Trisiki 4-Pack Heavy Duty Mouse Trap",
    cardLabel: "Best Heavy Duty",
    features: [
      "Fetched title: 4 Pack Upgraded Rat Traps; number of pieces 4",
      "Target species listed as Mouse, Rat",
      "Material listed as ABS plastic; 318g",
      "The maker describes it as a larger trap for a range of rodent sizes",
    ],
    tableCells: ["Trisiki 4-Pack", "Snap trap; 4, as listed", "Best Heavy Duty"],
    h2Label: "Best Heavy Duty",
    h2Name: "Trisiki 4-Pack Heavy Duty Mouse Trap",
    tocLabel: "Best Heavy Duty",
    tocName: "Trisiki 4-Pack",
  },
  {
    anchorId: "best-budget",
    asin: "B00HDVUTZA",
    rank: 3,
    cardName: "ASPECTEK 6-Pack Mouse Trap",
    cardLabel: "Best Budget Option",
    features: [
      "Listed as 6 traps; number of pieces 6; target species Mouse",
      "Material listed as plastic; the maker says it resists stains and odours",
      "Listed for indoor and outdoor placement",
      "Product dimensions listed as 9.8 x 4.5 x 5.5 cm",
    ],
    tableCells: ["ASPECTEK 6-Pack", "Snap trap; 6, as listed", "Best Budget"],
    h2Label: "Best Budget",
    h2Name: "ASPECTEK 6-Pack Mouse Trap",
    tocLabel: "Best Budget",
    tocName: "ASPECTEK 6-Pack",
  },
  {
    anchorId: "best-humane",
    asin: "B07L8JNPF2",
    rank: 4,
    cardName: "AKCHY Humane Mouse Trap 2-Pack",
    cardLabel: "Best Humane Option",
    features: [
      "Listed as live catch and release; number of pieces 2",
      "Target species listed as Mouse, Rat; material ABS plastic",
      "The maker says no poison and no glue",
      "Product dimensions listed as 17 x 6.1 x 6.6 cm",
    ],
    tableCells: ["AKCHY Humane 2-Pack", "Live-catch trap; 2, as listed", "Best Humane"],
    h2Label: "Best Humane",
    h2Name: "AKCHY Humane Mouse Trap 2-Pack",
    tocLabel: "Best Humane",
    tocName: "AKCHY Humane 2-Pack",
  },
  {
    anchorId: "best-easy-clean",
    asin: "B09PKWXRGK",
    rank: 5,
    cardName: "UNIQU 2-Pack Humane Mouse Trap",
    cardLabel: "Best Easy-Clean Humane",
    features: [
      "Listed as live catch and release; number of pieces 2",
      "Material listed as wood, with a wire-mesh cage per the maker",
      "Listed for indoor and outdoor use; 210g",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: ["UNIQU 2-Pack", "Live-catch cage; 2, as listed", "Best Easy-Clean"],
    h2Label: "Best Easy-Clean",
    h2Name: "UNIQU 2-Pack Humane Mouse Trap",
    tocLabel: "Best Easy-Clean",
    tocName: "UNIQU 2-Pack",
  },
];

const tocItems = [
  { id: "situation", title: "The Gap Matters More Than the Trap" },
  { id: "legal", title: "The Legal Position on Mouse Traps" },
  { id: "limits", title: "Where a Trap Catches Nothing" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Trapping Is Not the Answer" },
  { id: "using", title: "Setting and Placing Them" },
  { id: "compared", title: "The Five Traps Compared" },
];

export default function BestMouseTrapsPage() {
  return (
    <GuideLayout
      title="Best Mouse Traps UK 2026"
      subtitle="Our pick of the most effective mouse traps available in the UK, from snap traps to humane live-catch options"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Rodent Proofing Products UK 2026", href: "/best/rodent-proofing" },
        { title: "Best Mouse Bait Stations UK 2026", href: "/best/mouse-bait-stations" },
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
        A mouse trap catches the mouse that is in. Oxford City Council&rsquo;s
        advice is about the ones that are not yet:{" "}
        <em>
          &ldquo;Even gaps as small as 6mm, like those around pipes, can allow
          entry, so sealing these is crucial.&rdquo;
        </em>{" "}
        (
        <a href={SRC.oxford} rel="nofollow">
          Oxford City Council
        </a>
        ).
      </p>

      {/* DECISION BLOCK — situation first. The gap line, the legal line and the
          catches-nothing line sit ABOVE the product lines. No Amazon link, no price, no
          image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You keep catching mice and they keep coming.</strong> That
            is a gap, not a trap &mdash;{" "}
            <a href="#situation" className="underline">
              the gap matters more than the trap
            </a>
            .
          </li>
          <li>
            <strong>You want to know what the law allows.</strong> Break-back
            traps sit in a named place in the spring trap rules &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>You are choosing between a trap and poison.</strong> HSE
            asks for other methods first, and RRAG says why mice are a special
            case &mdash;{" "}
            <a href="#alternatives" className="underline">
              if trapping is not the answer
            </a>
            .
          </li>
          <li>
            <strong>You want a trap that does not kill.</strong> Two of the
            five are listed as live-catch &mdash;{" "}
            <a href="#best-humane" className="underline">
              the humane traps
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">The Gap Matters More Than the Trap</h2>
      <p>
        Defra&rsquo;s code describes what you are up against:{" "}
        <em>
          &ldquo;They can pass through very small gaps, and can jump
          significant distances and burrow in soil or other materials.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra
        </a>
        ). And what they do to a gap that is not quite big enough:{" "}
        <em>
          &ldquo;Both rats and mice can gnaw a range of materials including
          concrete, wood, soft metals and plastics and can create gaps below
          house doors to gain easy access.&rdquo;
        </em>{" "}
        Its instruction follows:{" "}
        <em>
          &ldquo;Buildings should be proofed as far as possible against rodent
          ingress&rdquo;
        </em>
        . Our <a href="/best/rodent-proofing">rodent proofing</a> page is that
        job; this page is the trap that comes after it.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Mouse Traps</h2>
      <p>
        Spring traps generally need approval by order before use, and Defra
        names the exception:{" "}
        <em>
          &ldquo;Only spring traps approved under the Spring Traps Approval
          Order (or equivalent in Scotland , Wales and Northern Ireland ) may be
          used, although break back traps commonly used against rats and mice
          are exempt from the requirement to be approved.&rdquo;
        </em>{" "}
        The three snap traps on this page are break-back traps.
      </p>
      <p>
        The two live-catch traps are not spring traps at all. What the law
        says about the animal once caught is not something any source read for
        this page states, and it is not stated here.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Trap Catches Nothing</h2>
      <p>
        <strong>Where the bait is not on the trigger.</strong> Nebraska
        Extension on baited traps:{" "}
        <em>
          &ldquo;For baited traps, secure bait to the trigger with string or
          common glue.&rdquo;
        </em>{" "}
        (
        <a href={SRC.unl} rel="nofollow">
          University of Nebraska&ndash;Lincoln Extension
        </a>
        ). Loose bait is taken without the trap firing.
      </p>
      <p>
        <strong>Where the entry is still open.</strong> A trap in a house with
        a 6mm gap catches this week&rsquo;s mouse and next week&rsquo;s. That is
        the council&rsquo;s point above, and it is not a fault in the trap.
      </p>
      <p>
        <strong>Where it is the wrong size.</strong> Two listings here carry Rat
        as well as Mouse in their target species field, and one maker says its
        trap is larger than smaller alternatives. The listing states the size;
        the mouse does not read it.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Kill or live catch, as listed</h3>
      <p>
        Three snap traps and two live-catch traps. The listing says which,
        and the table carries it.
      </p>
      <h3>2. How many in the pack</h3>
      <p>
        Six, four, six, two and two, per the listings&rsquo; number-of-pieces
        rows. The Trisiki card was corrected from six to four against its
        listing at S67 R10.
      </p>
      <h3>3. What the listing says it is made of</h3>
      <p>
        ABS plastic for the Trisiki and AKCHY, plastic for the ASPECTEK, wood
        with a wire cage for the UNIQU. Roshield&rsquo;s listing states a
        welded kill bar and a high-strength spring rather than a material.
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
                "Six snap traps listed with Mouse and Rat as target species, which the maker describes as having a high-strength spring, a sensitive trigger, a welded kill bar and a trigger plate larger than smaller traps. The listing says they can be set inside Roshield bait stations. The maker's claim about industry use is the maker's.",
                "Four snap traps whose fetched title reads 4 Pack Upgraded Rat Traps, listed for mouse and rat, in ABS plastic at 318g. Carded as a six-pack until S67 R10; the listing's number of pieces reads 4.",
                "Six plastic snap traps listed with Mouse as the only target species, for indoor and outdoor placement, at 9.8 x 4.5 x 5.5 cm. The maker's claim that rodents avoid wooden traps after a kill is the maker's and is not repeated.",
                "Two live-catch traps in ABS plastic listed for mouse and rat, 17 x 6.1 x 6.6 cm, which the maker describes as using no poison and no glue. The brand row reads AKCHY; the card carried another brand's name until S68 R1.",
                "Two live-catch cages in wood with a wire-mesh body, listed for indoor and outdoor use at 210g, target species Mouse, Rat. The brand row reads UNIQU; the card carried another name until S68 R1.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Trapping Is Not the Answer</h2>
      <p>
        <strong>Poison is not the next step by default.</strong> HSE:{" "}
        <em>
          &ldquo;If you need to deal with a rodent problem, it is important to
          remember to consider other available control methods, such as those
          listed above, before reaching for anticoagulant products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). And with mice there is a further reason. RRAG:{" "}
        <em>
          &ldquo;The house mouse (Mus musculus) possesses a degree of natural
          resistance to anticoagulant rodenticides.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rrag} rel="nofollow">
          Rodenticide Resistance Action Group
        </a>
        ). Our <a href="/best/mouse-poison">mouse poison</a> page carries what
        that means for the products.
      </p>
      <p>
        <strong>Proof first.</strong> Defra&rsquo;s instruction is above; the
        materials are on our <a href="/best/rodent-proofing">rodent proofing</a>{" "}
        page.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Setting and Placing Them</h2>
      <ol>
        <li>
          <strong>Find the gap before you set the trap.</strong> Around pipes,
          under doors, per Oxford and Defra.
        </li>
        <li>
          <strong>Secure the bait to the trigger.</strong> String or glue, per
          Nebraska Extension.
        </li>
        <li>
          <strong>Set more than one.</strong> The packs here are six, four,
          six, two and two.
        </li>
        <li>
          <strong>Put a snap trap inside a station if pets or children are about.</strong>{" "}
          The Roshield listing states its traps fit its stations.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            A trap that keeps catching is telling you about a gap. The
            council&rsquo;s 6mm is the figure to check against.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Five Traps Compared</h2>
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
                Type and count, as listed
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
        heading="Still catching mice every week?"
        subtext="An entry you cannot find is a survey job. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
