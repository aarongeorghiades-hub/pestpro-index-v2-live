import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// ONE CARD NAME IS CORRECTED AGAINST ITS LISTING. B008BG6JFK was carded as a 20 Pack. Its
// fetched title reads 16 Pack; its detail rows read Number of Items 20 and "20 sachets".
// The listing disagrees with itself. S50-H makes the fetched title authoritative, so the
// name reads 16 Pack and the card states the detail-row figure beside it (Law 146: a
// disagreement is rendered, not resolved).
//
// The old page's BPCA "significant increase" claim, its "consulted professional
// technicians" line, "most effective consumer-level", "proven" and "a brand you can
// trust" are gone — 10 unsourced sentences, all deleted, none softened.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Moth Killers UK 2026 — Top 5",
    description:
      "Clothes moth control for UK homes: why the larvae do the damage, what freezing and vacuuming do that a hanger cannot, and five products on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/moth-killers" },
    openGraph: {
      title: "Best Moth Killers UK 2026 — Top 5",
      description:
        "Clothes moth control for UK homes: why the larvae do the damage, what freezing and vacuuming do that a hanger cannot, and five products on their own listings.",
      url: "https://pestproindex.com/best/moth-killers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Moth Killers UK 2026 — Top 5",
  description:
    "Clothes moth control for UK homes: why the larvae do the damage, what freezing and vacuuming do that a hanger cannot, and five products on their own listings.",
  datePublished: "2026-03-17",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/moth-killers" },
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
      name: "Best Moth Killers UK 2026 — Top 5",
      item: "https://pestproindex.com/best/moth-killers",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S68 R1 under
// ~/pp-s68r1/sources/ (Law 175).
const SRC = {
  nhm: "https://www.nhm.ac.uk/take-part/identify-nature/common-insect-pest-species-in-homes/clothes-moths-identification-guide.html",
  eh: "https://www.english-heritage.org.uk/learn/conservation/clothes-moth-research/understanding-clothes-moths/",
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/clothes-moths/",
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
    asin: "B00BMO6HKA",
    rank: 1,
    cardName: "Acana Hanging Moth Killer",
    cardLabel: "Best Overall",
    features: [
      "Listed as a 4 pack of hanging units, lavender fragrance, natural oils",
      "Each unit listed as lasting up to 3 months; a date wheel on the front is set at opening",
      "The maker claims it kills moths, eggs and larvae in wardrobes",
      "Listing safety text: contains lavender, a common allergen; keep from skin, children and pets",
    ],
    tableCells: ["Acana Hanging Moth Killer, 4 pack", "Hanging unit; lavender oils; up to 3 months each, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Acana Hanging Moth Killer",
    tocLabel: "Best Overall",
    tocName: "Acana Hanging Moth Killer",
  },
  {
    anchorId: "best-pheromone-trap",
    asin: "B0CGB12XNN",
    rank: 2,
    cardName: "London Moth Killer Pheromone Traps",
    cardLabel: "Best Pheromone Trap",
    features: [
      "Listed as 10 sticky pheromone traps for the common clothes moth",
      "Each trap listed as lasting 4 months once opened",
      "Target species listed as Moth; brand row reads Theo's Home Care",
      "Listed as monitoring, attracting and holding adult moths — it does not treat larvae",
      "Listing includes an e-book; the maker's own claims about it are not repeated here",
    ],
    tableCells: ["London Moth Killer traps, 10", "Sticky pheromone trap; adults only; 4 months each, as listed", "Best Pheromone Trap"],
    h2Label: "Best Pheromone Trap",
    h2Name: "London Moth Killer Pheromone Traps",
    tocLabel: "Best Pheromone Trap",
    tocName: "London Moth Killer Pheromone Traps",
  },
  {
    anchorId: "best-carpet-spray",
    asin: "B00E8I39EE",
    rank: 3,
    cardName: "Acana Carpet & Fabric Moth Killer Spray",
    cardLabel: "Best Carpet Moth Spray",
    features: [
      "500ml spray, listed as covering 25 sq metres",
      "Listed for carpet, curtains and upholstery",
      "The maker claims it kills moths, eggs and larvae",
      "No active substance is named on the listing",
    ],
    tableCells: ["Acana Carpet & Fabric Spray 500ml", "Spray; active not stated; 25 sq m, as listed", "Best Carpet Moth Spray"],
    h2Label: "Best Carpet Moth Spray",
    h2Name: "Acana Carpet & Fabric Moth Killer Spray",
    tocLabel: "Best Carpet Moth Spray",
    tocName: "Acana Carpet & Fabric Moth Killer Spray",
  },
  {
    anchorId: "best-drawers-storage",
    asin: "B008BG6JFK",
    rank: 4,
    cardName: "Acana Sachet Moth Killer 16 Pack",
    cardLabel: "Best for Drawers & Storage",
    features: [
      "Fetched title reads 16 Pack; the detail rows read Number of Items 20 and 20 sachets — the listing disagrees with itself",
      "Each sachet listed as lasting up to 3 months, with an indicator that displays \"end\"",
      "Listing directions: use 2 per drawer",
      "The maker claims it kills moths, eggs and larvae; lavender scent",
      "Listing safety text: use with caution around pets and children",
    ],
    tableCells: ["Acana Sachet Moth Killer", "Sachets; 16 per title, 20 per detail rows; up to 3 months each, as listed", "Best for Drawers & Storage"],
    h2Label: "Best for Drawers & Storage",
    h2Name: "Acana Sachet Moth Killer 16 Pack",
    tocLabel: "Best for Drawers & Storage",
    tocName: "Acana Sachet Moth Killer 16 Pack",
  },
  {
    anchorId: "best-budget",
    asin: "B002DYARYK",
    rank: 5,
    cardName: "Rentokil Moth Killer Hanging Unit Twin Pack",
    cardLabel: "Best Budget Option",
    features: [
      "Fetched title: Moth Killer hanging unit Twin Pack by RENTOKIL",
      "Target species listed as Moth",
      "The listing carries no feature bullets and names no active substance",
      "Number of pieces listed as 1",
    ],
    tableCells: ["Rentokil hanging unit, twin pack", "Hanging unit; active not stated, as listed", "Best Budget Option"],
    h2Label: "Best Budget Option",
    h2Name: "Rentokil Moth Killer Hanging Unit Twin Pack",
    tocLabel: "Best Budget Option",
    tocName: "Rentokil Moth Killer Hanging Unit Twin Pack",
  },
];

const tocItems = [
  { id: "situation", title: "It Is the Larvae" },
  { id: "legal", title: "The Legal Position on Moth Products" },
  { id: "limits", title: "Where a Hanger or a Trap Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Five Products Compared" },
];

export default function BestMothKillersPage() {
  return (
    <GuideLayout
      title="Best Moth Killers UK 2026 — Top 5"
      subtitle="Hanging units, sachets, a spray and pheromone traps for UK homes, described by what their own listings state — and what the Natural History Museum says actually kills every stage"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
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
        The moth you see flying is not the one eating the jumper. The Natural
        History Museum:{" "}
        <em>
          &ldquo;It is the immature larvae, rather than the adult moths, that
          cause the damage to natural fibres such as woollen clothing,
          upholstery, carpets and furs.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhm} rel="nofollow">
          Natural History Museum
        </a>
        ).
      </p>

      {/* DECISION BLOCK — situation first. The larvae line, the legal line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price, no
          image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have holes in wool or a bare patch of carpet.</strong>{" "}
            That is larvae, and the museum says what they eat &mdash;{" "}
            <a href="#situation" className="underline">
              it is the larvae
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
            <strong>You want to kill what is already in a garment.</strong> The
            museum and English Heritage say a freezer does that; a hanger does
            not claim to &mdash;{" "}
            <a href="#limits" className="underline">
              where a hanger or a trap does not help
            </a>
            .
          </li>
          <li>
            <strong>You want to know if you still have moths.</strong> One of
            the five is a monitoring trap &mdash;{" "}
            <a href="#best-pheromone-trap" className="underline">
              the pheromone trap
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">It Is the Larvae</h2>
      <p>
        The museum on what they are after:{" "}
        <em>
          &ldquo;The larvae of clothes moths are adapted to feed on keratin, a
          protein found in natural fibres.&rdquo;
        </em>{" "}
        Wool, fur, feather and hair. Cotton and synthetics are not keratin.
      </p>
      <p>
        Which is why the museum&rsquo;s prevention line is about the fabric,
        not the air around it:{" "}
        <em>
          &ldquo;Freezing to -20°C for a week or heating fabric to temperatures
          of 49°C for over 30 minutes kills all life stages and can be
          accomplished with home appliances, such as a freezer or washing
          machine.&rdquo;
        </em>{" "}
        English Heritage gives the same method with its own figures:{" "}
        <em>
          &ldquo;Seal them in plastic &apos;freezer&apos; bags at -18°C for at
          least two weeks.&rdquo;
        </em>{" "}
        (
        <a href={SRC.eh} rel="nofollow">
          English Heritage
        </a>
        ).
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Moth Products</h2>
      <p>
        Four of the five products are insecticidal by their makers&rsquo; own
        description; the trap is a glue board with a pheromone lure.
        HSE&rsquo;s guidance on using biocides:{" "}
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
        ). And on the label:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>
      </p>
      <p>
        Two Acana listings carry safety text of their own &mdash; a lavender
        allergen warning on the hangers, caution around pets and children on
        the sachets. Both are repeated on the cards as the maker&rsquo;s.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Hanger or a Trap Does Not Help</h2>
      <p>
        <strong>A trap catches adults, and only some of them.</strong> The
        museum:{" "}
        <em>
          &ldquo;Moth traps, adhesive boxes which emit artificial pheromones to
          attract adult moths, can be checked to monitor infestation.&rdquo;
        </em>{" "}
        Monitor is the word. UC IPM adds which species:{" "}
        <em>
          &ldquo;Pheromone traps are available to trap both the webbing clothes
          moth and the casemaking clothes moth.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). The trap here is listed for the common clothes moth.
      </p>
      <p>
        <strong>A hanger does not reach a carpet.</strong> The museum:{" "}
        <em>
          &ldquo;For carpets and upholstery, vacuuming helps to eradicate
          infestations.&rdquo;
        </em>{" "}
        English Heritage:{" "}
        <em>
          &ldquo;Regularly vacuum around the bottom and edges of wardrobes and
          any shelves.&rdquo;
        </em>
      </p>
      <p>
        <strong>Cedar is not settled.</strong> UC IPM:{" "}
        <em>
          &ldquo;The effectiveness of cedar chests and closet floors made of
          cedar is debatable.&rdquo;
        </em>{" "}
        No product on this page is cedar; the sentence is here because the
        question is asked.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Wardrobe, drawer or carpet</h3>
      <p>
        Two hangers, one set of sachets, one carpet spray and one trap. The
        listing states where each goes: hangers on the rail, sachets two per
        drawer, the spray on carpet, curtains and upholstery at 25 sq metres
        per bottle.
      </p>
      <h3>2. Whether the listing names an active substance</h3>
      <p>
        None of the five does. The Acana listings state lavender and natural
        oils; the Rentokil and London Moth listings state nothing. What kills
        the larvae, where a maker claims that, is on the pack.
      </p>
      <h3>3. How long the listing says it lasts</h3>
      <p>
        Acana hangers and sachets: up to 3 months each, with a date wheel or an
        end indicator. London Moth traps: 4 months each once opened. Rentokil:
        not stated.
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
                "Four lavender-scented hanging units listed with natural oils, each with a date wheel set at opening and listed as lasting up to 3 months. The maker claims it kills moths, eggs and larvae; no active substance is named. The listing's own safety text names lavender as a common allergen.",
                "Ten sticky traps baited with a pheromone for the common clothes moth, each listed as lasting 4 months once opened. The listing describes them as monitoring, attracting and holding adult moths, which is what the museum says a trap is for. It does not treat larvae or fabric.",
                "A 500ml spray listed for carpet, curtains and upholstery at 25 sq metres per bottle. The maker claims it kills moths, eggs and larvae; no active substance is named on the listing. The one product on the page aimed at a floor rather than a wardrobe.",
                "Lavender sachets for drawers and storage, listed as two per drawer and up to 3 months each, with an indicator that displays the word end. The fetched title says 16 sachets; the listing's detail rows say 20. Both are stated here because the listing states both. The maker claims it kills moths, eggs and larvae.",
                "A twin pack of Rentokil hanging units whose listing carries no feature bullets, names no active substance and states no duration. Its target species field reads Moth and its number of pieces reads 1. What is in it is on the pack.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>The freezer.</strong> English Heritage:{" "}
        <em>
          &ldquo;The best way of killing adults, eggs and larvae is to deep
          freeze items.&rdquo;
        </em>{" "}
        Sealed in a bag at -18°C for at least two weeks, per the same source.
      </p>
      <p>
        <strong>The vacuum cleaner.</strong> UC IPM:{" "}
        <em>
          &ldquo;The vacuum cleaner is the best tool for most of this
          cleaning.&rdquo;
        </em>{" "}
        Our <a href="/guides/how-to-get-rid-of-moths">moth guide</a> covers the
        clear-out.
      </p>
      <p>
        <strong>A professional, for a carpet that keeps going bare.</strong>{" "}
        HSE:{" "}
        <em>
          &ldquo;If you are not a professional, consider using a professional
          pest controller to deal with the problem.&rdquo;
        </em>
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Deal with what is already infested.</strong> Freeze or wash
          the garment; the museum&rsquo;s figures are above.
        </li>
        <li>
          <strong>Vacuum the wardrobe floor and edges,</strong> per English
          Heritage, before anything is hung.
        </li>
        <li>
          <strong>Set the date wheel or indicator</strong> on the Acana units
          at opening, as the listing directs.
        </li>
        <li>
          <strong>Put a trap where the clothes are</strong> and read it as a
          count, not a cure.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            None of the five listings names an active substance. Where a maker
            claims a product kills eggs and larvae, the claim is the
            maker&rsquo;s and what does it is on the pack.
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
                Form, contents and duration, as listed
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
        heading="Carpet still going bare after the clear-out?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
