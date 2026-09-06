import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S67 R2 — REBUILD. The title and the H1 are UNCHANGED by PM ruling R-2, including
// the words "Strongest & Most Effective". No sentence in the body asserts a strength
// or effectiveness superlative that is not sourced or traceable to a listing; where
// the page talks about strength it gives the stated concentration and the published
// guidance on which active substance works against house mice, which is what that
// promise actually turns on.
//
// THE DESCRIPTION IS REWRITTEN, AND R-3 IS THE REASON RATHER THAN AN EXCEPTION TO IT.
// R-3 held the old 138-character description unless the rebuild made it inaccurate.
// It did, and the inaccuracy was already there: the description offered "Brodifacoum
// blocks ... and paste formulations", and this page cards NO paste at all, while the
// two brodifacoum products on it are grain sachets, not blocks. The three block
// products are the ones that are not stated brodifacoum.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Mouse Poison UK 2026: Strongest & Most Effective",
    description:
      "Mouse poison for UK homes: which active substance official guidance names for house mice, what the label requires, and five compared on what the listings state.",
    alternates: { canonical: "https://pestproindex.com/best/mouse-poison" },
    openGraph: {
      title: "Best Mouse Poison UK 2026: Strongest & Most Effective",
      description:
        "Mouse poison for UK homes: which active substance official guidance names for house mice, what the label requires, and five compared on what the listings state.",
      url: "https://pestproindex.com/best/mouse-poison",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Mouse Poison UK 2026: Strongest & Most Effective",
  description:
    "Mouse poison for UK homes: which active substance official guidance names for house mice, what the label requires, and five compared on what the listings state.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-06",
  author: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/mouse-poison",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pestproindex.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best",
      item: "https://pestproindex.com/best",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Mouse Poison UK 2026",
      item: "https://pestproindex.com/best/mouse-poison",
    },
  ],
};

// S67 R2 — THE FAQ IS REMOVED, VISIBLE BLOCK AND STRUCTURED DATA TOGETHER. All six
// questions are now answered by the body above, and every one of the six answers
// carried an unsourced figure or an unsourced attribution:
//   "what is the best mouse poison"      -> the whole page, and #what-decides
//   "how long does it take to work"      -> #using; the old 3-to-5-day and 7-day
//                                           figures were attributed to nothing
//   "is it safe around pets"             -> #legal, on HSE's own words
//   "do I need a bait station"           -> #legal; the old answer credited the
//                                           requirement to CRRU guidance when it is
//                                           a legally binding label instruction
//   "can mice become resistant"          -> #resistance, which is now the spine of
//                                           the page rather than a footnote
//   "where should I put poison"          -> #using, on Defra's own words

// SOURCES. Every quotation on this page was extracted by byte range out of a body
// saved under ~/pp-s67r2/sources/ and verified by exact string match before it was
// written here (Law 164). Each citation names the host actually read (S59-A). The
// RRAG guideline was fetched this round; the HSE, CRRU and Defra bodies were banked
// at S66 R8 and are kept under Law 175.
const SRC = {
  rrag: "https://rrag.squarespace.com/s/2022_RRAG_RRAG-Mouse-Guideline-2022-PROOF.pdf",
  hse: "https://www.hse.gov.uk/biocides/using/rodenticides.htm",
  crru:
    "https://thinkwildlife.org/implications-for-rodenticide-users-of-new-label-text-specifying-bait-station-standards/",
  defra:
    "https://www.gov.uk/government/publications/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms/code-of-practice-prevention-and-control-of-rodent-infestations-on-poultry-farms",
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
};

// AWARD LABELS, RANK NUMERALS, CARD ORDER, ANCHOR IDS, h2 LABELS AND h2 NAMES ARE ALL
// UNCHANGED. Only the feature text and the comparison cells are rebuilt, from the
// banked Amazon bodies fetched 2026-09-01 and inside the S45-C window. A property is
// asserted only where the listing's own feature text, detail table or fetched title
// states it (S52-E, S50-H); a cell the listing does not state reads "not stated".
//
// THE SINGLE BIGGEST CHANGE IS WHAT IS NO LONGER CLAIMED. This page used to state that
// both Big Cheese products are difenacoum, on the card, in the prose and in the
// comparison table. NEITHER LISTING STATES AN ACTIVE SUBSTANCE ANYWHERE — not in the
// title, not in a bullet, not in the detail table. Measured on both banked bodies:
// zero occurrences of difenacoum, bromadiolone or brodifacoum in either. That was an
// invented fact about a rodenticide, and on this page the active substance is the one
// thing that decides whether the product works at all, so it is now reported as
// "not stated" and the reader is told to read the pack.
//
// FOUR TRUST ASSERTIONS WERE REMOVED with the rest (G3, 8 served / 4 rendered): "a
// trusted UK brand", "the same product trusted by professional pest controllers", "a
// brand you can trust", "Trusted Big Cheese brand".
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B07B51YPRR",
    rank: 1,
    cardName: "Pest Expert Formula B+ Rat & Mouse Killer Poison 900g (15x60g)",
    cardLabel: "Best Overall",
    features: [
      "Active substance stated on the listing: brodifacoum 0.0029%",
      "15 x 60g sachets",
      "Listed as killing in a single feed",
      "Listed as wholewheat grain with no wax content",
      "Target species listed as Mouse",
    ],
    tableCells: [
      "Pest Expert Formula B+ 900g",
      "Best Overall",
      "Brodifacoum 0.0029%",
      "15 x 60g sachets",
      "Grain sachet",
      "Mouse",
    ],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Formula B+ Rat & Mouse Killer Poison 900g",
  },
  {
    anchorId: "best-starter",
    asin: "B07TLY5CGS",
    rank: 2,
    cardName: "Pest Expert Formula B+ Mouse & Rat Poison 360g (6x60g)",
    cardLabel: "Best Starter Pack",
    features: [
      "Same stated active substance as the 900g pack: brodifacoum 0.0029%",
      "6 x 60g sachets",
      "Listed as killing in a single feed",
      "Listed as wholewheat grain with no wax content",
      "Listing describes the pack as covering 6 bait points",
    ],
    tableCells: [
      "Pest Expert Formula B+ 360g",
      "Best Starter Pack",
      "Brodifacoum 0.0029%",
      "6 x 60g sachets",
      "Grain sachet",
      "not stated",
    ],
    h2Label: "Best Starter Pack",
    h2Name: "Pest Expert Formula B+ Mouse & Rat Poison 360g",
  },
  {
    anchorId: "best-blocks",
    asin: "B077MH6BVS",
    rank: 3,
    cardName: "The Big Cheese All-Weather Bait Block 15x10g",
    cardLabel: "Best Blocks",
    features: [
      "No active substance stated anywhere on the listing",
      "15 x 10g ready-to-use blocks",
      "Listed as moisture-resistant, for indoor and outdoor use",
      "Listing states 2-3 blocks every 2-5 metres for mice",
      "Target species listed as Rodents; gloves listed as included",
    ],
    tableCells: [
      "The Big Cheese All-Weather 15x10g",
      "Best Blocks",
      "not stated",
      "15 x 10g blocks",
      "Block",
      "Rodents",
    ],
    h2Label: "Best Blocks",
    h2Name: "The Big Cheese All-Weather Bait Block 15x10g",
  },
  {
    anchorId: "best-bulk",
    asin: "B077MBL7MS",
    rank: 4,
    cardName: "The Big Cheese All-Weather Rodent Block 30x10g",
    cardLabel: "Best Bulk Pack",
    features: [
      "No active substance stated anywhere on the listing",
      "30 x 10g blocks, listed as wax block, blue",
      "Listed as infused with a bitter taste to deter accidental ingestion",
      "Listed as moisture-resistant, for indoor and outdoor use",
      "Target species listed as Rodents",
    ],
    tableCells: [
      "The Big Cheese All-Weather 30x10g",
      "Best Bulk",
      "not stated",
      "30 x 10g blocks",
      "Wax block",
      "Rodents",
    ],
    h2Label: "Best Bulk",
    h2Name: "The Big Cheese All-Weather Rodent Block 30x10g",
  },
  {
    anchorId: "best-professional",
    asin: "B076QFPHLH",
    rank: 5,
    cardName: "Roshield Wax Block Bait 600g (2x300g Bromadiolone)",
    cardLabel: "Best Professional",
    features: [
      "Active substance stated on the listing: bromadiolone 0.0025%",
      "Listing gives the product authorisation number UK-2016-0986-0007",
      "2 x 300g packs, 600g in total",
      "Listed as containing denatonium benzoate, a bitter substance",
      "Target species listed as Mouse, Rat",
    ],
    tableCells: [
      "Roshield Wax Block Bait 600g",
      "Best Professional",
      "Bromadiolone 0.0025%",
      "2 x 300g",
      "Wax block",
      "Mouse, Rat",
    ],
    h2Label: "Best Professional",
    h2Name: "Roshield Wax Block Bait 600g",
  },
];

// The contents entry is DERIVED from the same fields the h2 renders, so an entry
// cannot say something the heading does not (the S66 R4 pattern).
const tocItems = [
  { id: "situation", title: "When Poison Is the Right Answer" },
  { id: "legal", title: "What You May Buy, and What the Label Requires" },
  { id: "resistance", title: "Where Mouse Poison Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.h2Label} — ${p.h2Name}`,
  })),
  { id: "alternatives", title: "If Poison Is Not the Answer" },
  { id: "using", title: "Placing and Checking Bait" },
  { id: "compared", title: "Best Mouse Poison Compared" },
];

export default function BestMousePoisonPage() {
  return (
    <GuideLayout
      title="Best Mouse Poison UK 2026: Strongest & Most Effective"
      subtitle="Which active substance works against house mice, what the label legally requires of you, and five products compared on what their listings actually state"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "How to Get Rid of Mice: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-mice",
        },
        {
          title: "How to Get Rid of Rats: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-rats",
        },
        {
          title: "How to Get Rid of Bed Bugs: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-bed-bugs",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
        },
        {
          title: "How to Get Rid of Fleas: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-fleas",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
        {
          title: "How to Get Rid of Ants: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-ants",
        },
        {
          title: "How to Get Rid of Squirrels: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-squirrels",
        },
        {
          title: "Pigeon Control: Complete UK Guide",
          href: "/guides/pigeon-control",
        },
        {
          title: "How to Get Rid of Moths",
          href: "/guides/how-to-get-rid-of-moths",
        },
        {
          title: "Restaurant Pest Control: UK Compliance Guide",
          href: "/guides/restaurant-pest-control",
        },
        {
          title: "Carpet Beetle Control: Complete UK Guide",
          href: "/guides/carpet-beetle-control",
        },
        {
          title: "Wasp Nest Removal: Complete UK Guide",
          href: "/guides/wasp-nest-removal",
        },
      ]}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        {
          title: "Best Rat Bait Stations UK 2026",
          href: "/best/rat-bait-stations",
        },
        {
          title: "Best Bed Bug Treatments UK 2026",
          href: "/best/bed-bug-treatments",
        },
        {
          title: "Best Flea Treatments UK 2026",
          href: "/best/flea-treatments",
        },
        {
          title: "Best Cockroach Killers UK 2026",
          href: "/best/cockroach-killers",
        },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        {
          title: "Best Carpet Beetle Treatments UK 2026",
          href: "/best/carpet-beetle-treatments",
        },
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
        Mouse poison is one decision, not two. Almost everything that determines
        whether it works is settled by which active substance is in the pack —
        and on three of the five products below, the Amazon listing does not tell
        you what that substance is.
      </p>

      {/* DECISION BLOCK — situation first, product second, every line. The legal
          line and the does-not-work line sit ABOVE the product lines.
          NOT a card: no Amazon link, no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are not sure poison is the right answer at all.</strong>{" "}
            HSE asks you to consider other control methods before reaching for
            an anticoagulant (
            <a href={SRC.hse} rel="nofollow" className="underline">
              HSE
            </a>
            ) —{" "}
            <a href="#situation" className="underline">
              when poison is the right answer
            </a>
            .
          </li>
          <li>
            <strong>
              You do not know what you are allowed to buy or how you must use
              it.
            </strong>{" "}
            The bait station requirement is a legally binding label instruction,
            not advice —{" "}
            <a href="#legal" className="underline">
              what the label requires
            </a>
            .
          </li>
          <li>
            <strong>You have baited before and the mice kept coming.</strong>{" "}
            Anticoagulant resistance in UK house mice is widespread, and two
            common active substances are not recommended against them —{" "}
            <a href="#resistance" className="underline">
              where mouse poison does not work
            </a>
            .
          </li>
          <li>
            <strong>
              You want the substance the published guidance actually names for
              mice.
            </strong>{" "}
            Two products here state brodifacoum on the listing —{" "}
            <a href="#best-overall" className="underline">
              the 900g grain pack
            </a>{" "}
            and{" "}
            <a href="#best-starter" className="underline">
              the 360g pack
            </a>
            .
          </li>
          <li>
            <strong>You want blocks rather than loose grain sachets.</strong>{" "}
            Three here are blocks, and{" "}
            <a href="#best-professional" className="underline">
              only one of them states its active substance
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Rodenticide is toxic to mammals generally, not only to mice. Every
            product on this page must be used inside a tamper-resistant bait
            station, and that is a condition of the product&rsquo;s label rather
            than a recommendation. If you do not already have one, see our guide
            to{" "}
            <a href="/best/mouse-bait-stations" className="underline font-semibold">
              mouse bait stations
            </a>{" "}
            before you buy bait.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">When Poison Is the Right Answer</h2>
      <p>
        Bait is not the default and the regulator does not treat it as one. HSE
        states that{" "}
        <em>
          &ldquo;Risk assessments carried out by regulators, including HSE, have
          shown that anticoagulants present a higher risk to people and
          non-target animals than is normally acceptable for authorisation in
          Great Britain and Northern Ireland.&rdquo;
        </em>{" "}
        They are authorised anyway, under controls, because the alternative is
        worse — but HSE&rsquo;s own advice before you buy is that{" "}
        <em>
          &ldquo;it is important to remember to consider other available control
          methods, such as those listed above, before reaching for anticoagulant
          products.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ).
      </p>
      <p>
        In practice poison earns its place when mice are nesting somewhere you
        cannot reach — a wall cavity, under floorboards, behind a fitted kitchen
        — so that traps cannot be put where the animals actually are. If you can
        reach the runs, traps are the lower-risk tool and there is a separate
        page for them.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What You May Buy, and What the Label Requires</h2>
      <p>
        Rodenticides sold to the public are authorised on different terms from
        those sold to professionals. HSE says products for the general public
        may be restricted in the amount of active substance they contain, in
        where they can be used — for example only within a bait box — and in the
        maximum pack size that can be sold (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). That is why an amateur pack can carry less active substance than a
        professional one, and it is the honest answer to what
        &ldquo;strongest&rdquo; can mean on a shelf a householder can reach.
      </p>
      <p>
        The bait station requirement is not guidance. CRRU UK, which co-ordinates
        UK rodenticide stewardship, reported that{" "}
        <em>
          &ldquo;Changes required by Health and Safety Executive to legally
          binding instructions on rodenticide product labels have significant
          implications for users in pest control, farming and
          gamekeeping.&rdquo;
        </em>{" "}
        Those instructions require a tamper-resistant station to be{" "}
        <em>
          &ldquo;Strong enough to prevent entry or destruction by dogs.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;Lockable or sealable so that children and dogs cannot gain
          access through the opening or mechanisms used to fill the bait
          compartments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.crru} rel="nofollow">
          CRRU UK
        </a>
        ). One of the five products here says so itself: the Big Cheese blocks
        listing states that a tamper-resistant bait station is required by law.
      </p>
      <p>
        And the box is your responsibility, not the bait manufacturer&rsquo;s.
        CRRU is explicit that{" "}
        <em>
          &ldquo;It is the responsibility of the end user to ensure the bait
          station employed complies with the new label requirements.&rdquo;
        </em>{" "}
        Read the label on the pack you actually buy, and use it only as that
        label says.
      </p>

      {/* [2] Where it does not work */}
      <h2 id="resistance">Where Mouse Poison Does Not Work</h2>
      <p>
        This is the part most mouse poison pages leave out, and it is the reason
        baiting fails. House mice in the UK are widely resistant to
        anticoagulants. The Rodenticide Resistance Action Group puts it plainly:{" "}
        <em>
          &ldquo;Resistance is now so widespread it is often said that it is
          harder to find susceptible house mice than resistant ones.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rrag} rel="nofollow">
          RRAG House Mouse Resistance Guideline
        </a>
        ).
      </p>
      <p>
        That has a direct consequence for which substance to buy. Defra&rsquo;s
        code of practice for rodent control states that{" "}
        <em>
          &ldquo;Resistance to the first-generation anticoagulants, and to the
          second-generation substances bromadiolone and difenacoum, is now so
          widespread in-house mice that, among the anticoagulant substances, only
          brodifacoum, difethialone and flocoumafen should be used against
          them.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). That code is written for poultry units and we have not altered its
        wording, including its own typo at &ldquo;in-house mice&rdquo;; the
        animal it describes is the same one in a kitchen.
      </p>
      <p>
        RRAG reaches the same conclusion independently, in its own words rather
        than by repeating Defra&rsquo;s. On difenacoum it advises that{" "}
        <em>
          &ldquo;It would therefore be prudent, in areas where resistance in
          house mice is suspected, not to use products that contain
          difenacoum.&rdquo;
        </em>{" "}
        On bromadiolone it goes further, saying its use against house mice in the
        UK is not recommended because it may not achieve adequate control and
        will make resistance worse. And on what to use instead:{" "}
        <em>
          &ldquo;products containing brodifacoum and flocoumafen should be the
          rodenticides of choice when carrying out control treatments against
          house mice in the UK.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rrag} rel="nofollow">
          RRAG
        </a>
        ).
      </p>
      <p>
        Read against the five products below, that is uncomfortable and we are
        not going to soften it. Two state brodifacoum. One states bromadiolone,
        the substance RRAG advises against for this species. Two state nothing at
        all, so you cannot tell from the listing whether you are buying a
        substance the guidance names or one it warns off.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. The active substance, before anything else</h3>
      <p>
        Pack size, block or grain, indoor or outdoor: none of it matters if the
        substance is one that resistant mice survive. Both sources above name
        brodifacoum among the substances to use against house mice, and both name
        bromadiolone and difenacoum among those to avoid. That single fact
        outranks every other column in the table at the bottom of this page.
      </p>
      <h3>2. Whether the listing states the substance at all</h3>
      <p>
        Three of the five products here are blocks, and only one of those three
        names its active substance on the Amazon listing. For the other two,
        neither the title, nor any feature bullet, nor the detail table gives it.
        A pack whose substance you cannot establish before buying is a pack you
        cannot check against the guidance above — the substance will be on the
        physical label, but by then you have bought it.
      </p>
      <h3>3. What &ldquo;strongest&rdquo; is actually available to you</h3>
      <p>
        RRAG uses the term low-strength bait for one{" "}
        <em>
          &ldquo;containing less than 30 ppm of the anticoagulant active
          substances&rdquo;
        </em>
        , notes that such baits{" "}
        <em>
          &ldquo;are available both to the general public and to professional
          pest control practitioners&rdquo;
        </em>
        , and advises that, where the labelling classification is not a factor,{" "}
        <em>
          &ldquo;formulations containing the highest available concentration of
          an active substance should always be used&rdquo;
        </em>{" "}
        (
        <a href={SRC.rrag} rel="nofollow">
          RRAG
        </a>
        ). The highest concentration any listing here states is 0.0029%
        brodifacoum, which is 29 parts per million — inside RRAG&rsquo;s
        low-strength band. That is not a criticism of the product; it is what the
        amateur market is, and it is the honest reading of the word in this
        page&rsquo;s title.
      </p>

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
        The listing states brodifacoum at 0.0029%, which is the substance both
        RRAG and Defra name for house mice, and it states that the bait kills in
        a single feed. Defra supports that property for this group of
        substances, with a condition worth keeping:{" "}
        <em>
          &ldquo;The increased toxicity of difethialone, brodifacoum and
          flocoumafen means that they can kill both rats and mice following only
          one feed on the bait, if enough bait is consumed.&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ). Single-feed does not mean one visit is enough if the mouse only
        nibbles. Fifteen 60g sachets is a lot of bait points for one house, which
        is the argument for the smaller pack below rather than against this one.
        The manufacturer&rsquo;s own comparative strength claims are not repeated
        here.
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
        The same stated formulation — brodifacoum 0.0029% — in six 60g sachets
        instead of fifteen, and the listing describes the pack in terms of the
        six bait points it covers. For one house, six baited points placed where
        you have actually seen activity is a realistic treatment rather than a
        reduced one. If the substance is the thing that matters, this pack and
        the one above are identical on it.
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
        Fifteen ready-to-use 10g blocks, listed as moisture-resistant for indoor
        and outdoor use, and the listing is unusually specific about placement:
        two to three blocks every two to five metres for mice. It is also the one
        listing here that states the bait station requirement is a legal one.
        What it does not state, anywhere, is the active substance. This page
        previously told you it was difenacoum. That was not on the listing and we
        should not have said it — and if it is difenacoum, it is one of the two
        substances the guidance above advises against for house mice. Read the
        pack before you use it.
      </p>

      {/* Product 4 */}
      <h2 id={products[3].anchorId}>
        {products[3].h2Label} &mdash; {products[3].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[3].cardName}
          features={products[3].features}
          asin={products[3].asin}
          bestFor={products[3].cardLabel}
          rank={products[3].rank}
        />
      </div>
      <p>
        Thirty 10g wax blocks, blue, listed as carrying a bitter taste to deter
        accidental ingestion. The same gap applies: no active substance is stated
        on the listing. One inconsistency is worth flagging because it is on the
        listing itself — the title, the detail table and the pack description all
        say thirty blocks, while one feature bullet says the pack contains
        fifteen. We have taken the figure the detail table gives.
      </p>

      {/* Product 5 */}
      <h2 id={products[4].anchorId}>
        {products[4].h2Label} &mdash; {products[4].h2Name}
      </h2>
      <div className="not-prose my-6">
        <ProductCard
          name={products[4].cardName}
          features={products[4].features}
          asin={products[4].asin}
          bestFor={products[4].cardLabel}
          rank={products[4].rank}
        />
      </div>
      <p>
        This is the only one of the five whose listing gives a product
        authorisation number — UK-2016-0986-0007 — alongside its active
        substance, bromadiolone 0.0025%, and it names denatonium benzoate as the
        bitter agent. It is also the product
        whose stated substance the guidance above specifically advises against
        for house mice — RRAG says bromadiolone may not achieve adequate control
        of them and will worsen resistance. Against rats that reasoning does not
        apply in the same way, and the listing gives both as target species. For
        mice specifically, the two brodifacoum packs are what the sources point
        to.
      </p>

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Poison Is Not the Answer</h2>
      <p>
        <strong>Proof the building.</strong> Bait removes the mice that are here;
        it does nothing about the gap they came through. Defra&rsquo;s code is
        blunt about that order of work: its overall aim is to stop infestations
        becoming established in the first place, and it calls it unacceptable to
        keep making remedial applications of rodenticide on premises where too
        little attention is paid to keeping rodents out. It also records that
        proofing against mouse entry is often extremely difficult, because of how
        small a gap a mouse can pass through (
        <a href={SRC.defra} rel="nofollow">
          Defra code of practice
        </a>
        ).
      </p>
      <p>
        <strong>Traps, where you can reach the runs.</strong> If there are
        children, pets or non-target animals in the house and you would rather
        not have an anticoagulant in it at all, a trap is a different trade-off —
        see our <a href="/best/mouse-traps">mouse traps</a> page.
      </p>
      <p>
        <strong>A professional, if baiting has already failed once.</strong>{" "}
        Given how widespread resistance is, a treatment that has not worked is
        more likely to be a substance problem than a technique problem, and the
        substances that answer it are not sold to the public.
      </p>

      {/* [15] Using it */}
      <h2 id="using">Placing and Checking Bait</h2>
      <ol>
        <li>
          <strong>Use enough bait points, and put them on the runs.</strong>{" "}
          Defra:{" "}
          <em>
            &ldquo;Mice live in small social groups and their erratic feeding
            behaviour results in them visiting several different food sources
            during periods of activity. Consequently, it is necessary to provide
            an adequate number of bait points in places where rodents are living
            or moving.&rdquo;
          </em>{" "}
          One station in one corner is not a treatment.
        </li>
        <li>
          <strong>Every point goes in a locked station.</strong> This is the
          label condition, not a preference.
        </li>
        <li>
          <strong>Do not let a point run empty.</strong> Defra:{" "}
          <em>
            &ldquo;If bait is allowed to run out (except in pulsed baiting),
            become unpalatable, or there are insufficient bait points, then
            control is likely to be unsuccessful.&rdquo;
          </em>
        </li>
        <li>
          <strong>Move points that stop being touched.</strong> Defra:{" "}
          <em>
            &ldquo;For mice, regularly moving the location of bait points may
            help to maintain rodent interest.&rdquo;
          </em>
        </li>
        <li>
          <strong>Judge it on bait taken, not on time passed.</strong> You cannot
          tell whether anything is feeding without opening the station, so keep
          the key and check it.
        </li>
        <li>
          <strong>
            If consumption continues with no reduction in activity, stop and
            reconsider the substance.
          </strong>{" "}
          That is what resistance looks like from the outside, and adding more of
          the same bait does not answer it.
        </li>
      </ol>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Mouse Poison Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing —
        and on this page the &ldquo;not stated&rdquo; cells in the active
        substance column are the most important thing in the table.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
              <th className="text-left p-2 border-b font-semibold">
                Active substance as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Pack as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Format as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">
                Target species as listed
              </th>
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
        heading="Baited already, and the mice are still there?"
        subtext="Resistance is widespread enough that a failed treatment is often the substance rather than the method. Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
