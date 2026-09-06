import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R8 — ROLLOUT REBUILD. Title and H1 byte-unchanged. Award labels, rank numerals
// and card order UNCHANGED as ruled.
//
// THREE NEVER TOUCH STRINGS ON THIS ROUTE, ALL PRESERVED BYTE-FOR-BYTE. CLAUDE.md
// protects "most effective" x3 on this page, "which are about BAIT" — and all three are
// about peanut butter. They are unsourced superlatives and one of them carries an
// unsourced attribution to "pest control professionals across the UK". A rebuild would
// otherwise delete every one. They are kept exactly as written, in the same three
// places, and reported: a protection given by name is not overridden by a broad
// authorisation, and Law 192 does not reach them because the protected string IS the
// claim rather than a label introducing one.
//
// CLAUDE.md ALSO RECORDS a "four-categories sentence" on this route at line 164. It is
// NOT here — 0 occurrences, measured at S67 R1 and again at S67 R6. It lives on
// /best/cockroach-killers, and the correction of record is in CLAUDE.md's S67 R6 section.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rat Traps UK 2026",
    description:
      "Rat traps for UK homes: what the law says about spring traps, why a trap catches nothing in week one, and three compared on what their listings state.",
    alternates: { canonical: "https://pestproindex.com/best/rat-traps" },
    openGraph: {
      title: "Best Rat Traps UK 2026",
      description:
        "Rat traps for UK homes: what the law says about spring traps, why a trap catches nothing in week one, and three compared on what their listings state.",
      url: "https://pestproindex.com/best/rat-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rat Traps UK 2026",
  description:
    "Rat traps for UK homes: what the law says about spring traps, why a trap catches nothing in week one, and three compared on what their listings state.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/rat-traps" },
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
      name: "Best Rat Traps UK 2026",
      item: "https://pestproindex.com/best/rat-traps",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Both bodies were banked
// at S66 R8 and are kept under Law 175; neither was re-fetched.
const SRC = {
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
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

// Feature text and comparison cells rebuilt from the banked listings, fetched 2026-09-01,
// inside the S45-C window. "Trusted by pest controllers across the UK" is deleted — a G3
// hit, and no listing or source supports it.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B08V918HNB",
    rank: 1,
    cardName: "Rat Reaper XXL Snap Trap",
    cardLabel: "Best Overall",
    features: [
      "Listed as a 2 pack — two traps, not one",
      "Listed as metal, extra large, instant-kill snap design",
      "Listed for indoor and outdoor use",
      "Target species listed as Rat",
      // NEVER TOUCH, RESTORED. This is the third of CLAUDE.md's three protected
      // "most effective" strings on this route. The rebuild dropped the Pros list it
      // used to sit in, which deleted it — a protected string lost as collateral is
      // still a protected string lost. It is put back verbatim, on the same card.
      "Comes with peanut butter bait — the most effective bait available",
    ],
    tableCells: ["Rat Reaper XXL", "Snap trap, metal, 2 pack", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Rat Reaper by Froboo",
    tocLabel: "Best Overall",
    tocName: "Rat Reaper XXL Snap Trap",
  },
  {
    anchorId: "best-safety",
    asin: "B07W9FMLWF",
    rank: 2,
    cardName: "ROSHIELD Rat Bait Station Box",
    cardLabel: "Best for Pet & Child Safety",
    features: [
      "A box with a snap trap inside, not a bait station for poison",
      "Listed as a single unit with a black lid",
      "Target species listed as Rat",
      "Puts the mechanism behind a lid rather than in the open",
    ],
    tableCells: ["ROSHIELD Rat Bait Station Box", "Boxed snap trap, 1 unit", "Best for Safety"],
    h2Label: "Best for Pet & Child Safety",
    h2Name: "ROSHIELD Rat Bait Station Box",
    tocLabel: "Best for Pet & Child Safety",
    tocName: "ROSHIELD Rat Bait Station Box",
  },
  {
    anchorId: "best-professional",
    asin: "B071DJVBT4",
    rank: 3,
    cardName: "ROSHIELD 4-Pack Rat Trap",
    cardLabel: "Best Professional-Grade",
    features: [
      "Four traps in the pack — the most placement points here",
      "Listed as metal and plastic, 150 grams",
      "Listed as reusable and easy to set",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: ["ROSHIELD 4-Pack Rat Trap", "Snap trap, metal-plastic, 4 pack", "Best Professional-Grade"],
    h2Label: "Best Professional-Grade",
    h2Name: "ROSHIELD 4-Pack Rat Trap",
    tocLabel: "Best Professional-Grade",
    tocName: "ROSHIELD 4-Pack Rat Trap",
  },
];

const tocItems = [
  { id: "situation", title: "Trap or Bait" },
  { id: "legal", title: "The Legal Position on Rat Traps" },
  { id: "limits", title: "Where a Trap Catches Nothing" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If Trapping Is Not the Answer" },
  { id: "using", title: "Setting and Placing Them" },
  { id: "compared", title: "The Three Traps Compared" },
];

export default function BestRatTrapsPage() {
  return (
    <GuideLayout
      title="Best Rat Traps UK 2026"
      subtitle="Snap traps and boxed traps for UK homes, described by what their own listings state, with the legal position and the placement that decides whether they work"
      lastUpdated="September 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Mice: Complete UK Guide", href: "/guides/how-to-get-rid-of-mice" },
        { title: "Wasp Nest Removal: Complete UK Guide", href: "/guides/wasp-nest-removal" },
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "How to Get Rid of Fleas: Complete UK Guide", href: "/guides/how-to-get-rid-of-fleas" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "How to Get Rid of Ants: Complete UK Guide", href: "/guides/how-to-get-rid-of-ants" },
        { title: "How to Get Rid of Squirrels: Complete UK Guide", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "How to Get Rid of Moths", href: "/guides/how-to-get-rid-of-moths" },
        { title: "Restaurant Pest Control: UK Compliance Guide", href: "/guides/restaurant-pest-control" },
        { title: "Carpet Beetle Control: Complete UK Guide", href: "/guides/carpet-beetle-control" },
      ]}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Carpet Beetle Treatments UK 2026", href: "/best/carpet-beetle-treatments" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Bed Bug Treatments UK 2026", href: "/best/bed-bug-treatments" },
        { title: "Best Flea Treatments UK 2026", href: "/best/flea-treatments" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Squirrel Deterrents UK 2026", href: "/best/squirrel-deterrents" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Moth Killers UK", href: "/best/moth-killers" },
        { title: "Best Commercial Fly Killers UK 2026", href: "/best/commercial-fly-killers" },
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
        A trap kills the rat it catches and nothing else. That is its whole
        advantage over bait: there is no toxin in the house, nothing for a dog to
        find, and you know immediately whether it worked.
      </p>

      {/* DECISION BLOCK — situation first. The legal line and the catches-nothing line
          sit ABOVE the product lines. No Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are choosing between trapping and poisoning.</strong>{" "}
            HSE asks you to weigh other methods before an anticoagulant (
            <a href={SRC.hse} rel="nofollow" className="underline">
              HSE
            </a>
            ) —{" "}
            <a href="#situation" className="underline">
              trap or bait
            </a>
            .
          </li>
          <li>
            <strong>You want to know what the law allows.</strong> Break-back
            traps sit in a specific place in the spring trap rules —{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>Your traps have been out a week with nothing.</strong> That
            is expected, and Defra says why —{" "}
            <a href="#limits" className="underline">
              where a trap catches nothing
            </a>
            .
          </li>
          <li>
            <strong>You have children or pets in the house.</strong> One of the
            three puts the mechanism inside a box —{" "}
            <a href="#best-safety" className="underline">
              the boxed trap
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Trap or Bait</h2>
      <p>
        Bait is not the default. HSE&rsquo;s own advice before reaching for a
        rodenticide is that{" "}
        <em>
          &ldquo;it is important to remember to consider other available control
          methods, such as those listed above, before reaching for anticoagulant
          products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). Trapping is one of those methods.
      </p>
      <p>
        The trade-off is reach. A trap works where you can put it, on a run you
        can find. Where rats are nesting in a cavity or under a floor you cannot
        open, bait in a locked station reaches further — and that is our{" "}
        <a href="/best/rat-bait-stations">rat bait stations</a> page.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Rat Traps</h2>
      <p>
        Spring traps generally need approval by order before they may be used.
        Break-back rat traps are the documented exception. Defra&rsquo;s code of
        practice for rodent control states that{" "}
        <em>
          &ldquo;Only spring traps approved under the Spring Traps Approval Order
          (or equivalent in Scotland , Wales and Northern Ireland ) may be used,
          although break back traps commonly used against rats and mice are
          exempt from the requirement to be approved.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). All three traps on this page are break-back traps.
      </p>
      <p>
        Where they go is regulated even though the trap is not.{" "}
        <em>
          &ldquo;It is illegal to use any spring traps on outdoor runs or in the
          open unless they are set in natural or artificial tunnels.&rdquo;
        </em>{" "}
        A trap set openly in a garden is not merely a bad idea.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Trap Catches Nothing</h2>
      <p>
        <strong>Rats avoid new objects, and that takes weeks not days.</strong>{" "}
        Defra&rsquo;s guidance on bait boxes applies to any new object in a
        rat&rsquo;s territory: allow two to three weeks before deciding the
        method is not working. A trap moved on day three was never given a
        chance.
      </p>
      <p>
        <strong>Too few traps is the usual fault.</strong> Defra puts the scale
        of monitoring bluntly:{" "}
        <em>
          &ldquo;Absolute rodent counts depend on the number, type and location
          of traps and a minimum of 20 well-placed spring traps per house, baited
          with an attractive allergen-free bait, is recommended to monitor
          progress in mouse control.&rdquo;
        </em>{" "}
        That figure is for monitoring mice in a poultry house, not for a kitchen
        — but the direction of travel is the point: one trap is not a treatment.
      </p>
      <p>
        <strong>A trap does nothing about the way in.</strong> Every rat you
        catch is replaced until the gap is closed.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. How many traps you get</h3>
      <p>
        The packs here are two, one and four. Given that too few traps is the
        commonest reason trapping fails, that is the first column to read.
      </p>
      <h3>2. Open trap or boxed trap</h3>
      <p>
        Two are bare snap traps. One is a snap trap inside a lidded box, which is
        the option that matters in a house with a dog or small children.
      </p>
      <h3>3. What the listing says it is for</h3>
      <p>
        Two list Rat as the target species; the four-pack lists Mouse and Rat.
        Trap size and trigger weight are not stated on any of the three.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>
            Peanut butter is the single most effective bait for rat traps. It is
            sticky, has a strong scent, and forces the rat to interact with the
            trigger plate. Forget cheese — it dries out and is easy for rats to
            steal.
          </p>
        </Callout>
      </div>

      {/* Product 1 */}
      <h2 id={products[0].anchorId}>
        {products[0].h2Label} &mdash; {products[0].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[0].cardName}
          features={products[0].features}
          asin={products[0].asin}
          bestFor={products[0].cardLabel}
          rank={products[0].rank}
        />
      </div>
      <p>
        Listed as a two-pack of extra-large metal snap traps for indoor and
        outdoor use, with Rat as the stated target species. The card name reads
        as a single trap; the listing is explicit that two are supplied. Its
        peanut butter bait is included, and peanut butter
        is genuinely the most effective bait for rats, as confirmed by pest
        control professionals across the UK.
      </p>

      {/* Product 2 */}
      <h2 id={products[1].anchorId}>
        {products[1].h2Label} &mdash; {products[1].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[1].cardName}
          features={products[1].features}
          asin={products[1].asin}
          bestFor={products[1].cardLabel}
          rank={products[1].rank}
        />
      </div>
      <p>
        Despite the name, this is a snap trap inside a box rather than a station
        for poison — the listing describes it as a bait station box with a heavy
        duty snap trap, supplied as a single unit with a black lid. The lid is
        the reason to choose it: the mechanism is not in the open where a dog or
        a child can reach it.
      </p>

      {/* Product 3 */}
      <h2 id={products[2].anchorId}>
        {products[2].h2Label} &mdash; {products[2].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[2].cardName}
          features={products[2].features}
          asin={products[2].asin}
          bestFor={products[2].cardLabel}
          rank={products[2].rank}
        />
      </div>
      <p>
        Four traps in metal and plastic at 150 grams, listed as reusable and easy
        to set, with Mouse and Rat as stated target species. Four placement
        points is the most on this page, which is the practical answer to the
        too-few-traps problem above.
      </p>

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Trapping Is Not the Answer</h2>
      <p>
        <strong>Proof the building.</strong> It is the only step that stops the
        next rat as well as this one.
      </p>
      <p>
        <strong>Bait in a locked station, where you cannot reach the runs.</strong>{" "}
        A cavity or a subfloor is where trapping runs out — see our{" "}
        <a href="/best/rat-bait-stations">rat bait stations</a> and{" "}
        <a href="/best/rat-poison">rat poison</a> pages.
      </p>
      <p>
        <strong>Call someone for anything sustained.</strong> Repeated catches
        over weeks means a population, not a visitor.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Setting and Placing Them</h2>
      <ol>
        <li>
          <strong>Set them along walls, at right angles to the run.</strong> Rats
          travel edges and rarely cross open floor.
        </li>
        <li>
          <strong>Set them in a tunnel or box outdoors.</strong> That is the
          legal requirement quoted above, not a preference.
        </li>
        <li>
          <strong>Use more traps than feels necessary.</strong> Too few is the
          commonest reason a trapping programme fails.
        </li>
        <li>
          <strong>Leave them in place for two to three weeks.</strong> New-object
          avoidance is real and it is the reason week one is quiet.
        </li>
        <li>
          <strong>Check them daily.</strong> A set trap left unchecked is
          indefensible, and an unsprung trap tells you as much as a sprung one.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">The Three Traps Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing —
        none of the three states a trigger weight or a trap size.
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

      <FindProviderCTA
        heading="Still catching rats after a month?"
        subtext="Sustained catches mean a population and a way in, not a visitor. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
