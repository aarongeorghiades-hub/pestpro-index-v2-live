import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import TopPicks, { ProsList } from "@/components/TopPicks";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S69 R1 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: TWO, both quoted and both attributed — one to the NHS
// and one to UC IPM. Neither is in this site's own voice. There is no diagnosis, no
// treatment recommendation and no symptom checklist offered as guidance; where the
// honest answer about a bite is "ask a pharmacist or a GP", the page says that and links
// nothing clinical.
//
// TITLE AND H1 ARE BYTE-UNCHANGED. "Best Bed Bug Mattress Encasement UK 2026" carries no
// claim clause and promises no product type the page does not card, so the standing
// title ruling has nothing to replace.
//
// THE SUBTITLE IS REWRITTEN. It read "Our pick of the most effective bed bug mattress
// encasements available in the UK — zippered protectors that trap and starve bed bugs":
// an own-voice superlative and an own-voice efficacy claim in one line (S68 R3
// ride-along B). What replaces it describes the products and attributes the mechanism.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED. No card label disagrees with
// its own h2 on this route, measured on both surfaces.
//
// FOUR OLD FAQ ANSWERS WERE UNSOURCED OWN-VOICE CLAIMS and are replaced rather than
// softened: "Yes. They trap existing bed bugs inside (where they starve over ~12
// months)", "At least 12-18 months", "Not through a quality encasement with a
// micro-zipper and reinforced seams", and the assertion that fabric density prevents
// biting through. No source read this round states a UK duration figure, and none of the
// four listings states one either; the page now says what UC IPM does say and stops.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Bed Bug Mattress Encasement UK 2026",
    description:
      "Four zipped mattress encasements compared on their own listings, with what UC IPM and the NHS say about bed bugs and encasements.",
    alternates: {
      canonical: "https://pestproindex.com/best/bed-bug-mattress-encasement",
    },
    openGraph: {
      title: "Best Bed Bug Mattress Encasement UK 2026",
      description:
        "Four zipped mattress encasements compared on their own listings, with what UC IPM and the NHS say about bed bugs and encasements.",
      url: "https://pestproindex.com/best/bed-bug-mattress-encasement",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Bed Bug Mattress Encasement UK 2026",
  description:
    "Four zipped mattress encasements compared on their own listings, with what UC IPM and the NHS say about bed bugs and encasements.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/bed-bug-mattress-encasement",
  },
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
      name: "Best Bed Bug Mattress Encasement UK 2026",
      item: "https://pestproindex.com/best/bed-bug-mattress-encasement",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). ipm.ucanr.edu was fetched 2026-09-09 and is kept at
// ~/pp-s69r1/sources/ucipm-bedbugs.src.txt; www.nhs.uk was fetched 2026-09-09 and is
// kept at ~/pp-s68r8/sources/nhs-bedbugs.src.txt. Both under Law 175.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7454.html",
  nhs: "https://www.nhs.uk/conditions/bedbugs/",
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

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated".
//
// LAW 146 — TWO LISTINGS CONTRADICT THEMSELVES AND BOTH READINGS ARE RENDERED. The
// Utopia listing's title says US King while its size row says Double and its own bullet
// describes a 78 by 80 inch mattress. The Protect-A-Bed listing's feature bullets call it
// a fitted sheet style protector while its own product description calls it a six-sided
// encasement with a three-sided zipper.
//
// ALL FOUR ARE SOLD IN US SIZES on these listings — Full, US King, Full 54" x 75", Twin.
// That is stated on every card rather than converted, because a converted size is our
// arithmetic and not the listing's fact.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B004BAB28O",
    rank: 1,
    cardName: "SafeRest Premium Zippered Mattress Encasement",
    cardLabel: "Best Overall",
    features: [
      "The maker states it is independently lab tested and certified bed bug entry, escape and bite proof",
      "Six-sided cover with a micro-zipper the maker says bed bugs cannot pass through",
      "A velcro flap over the zipper end, described by the maker as preventing accidental openings",
      "Cotton terry surface over a membrane backing, per the listing",
      "Listed in US sizing: Full Size, fits 6 to 9 inches deep",
    ],
    tableCells: [
      "SafeRest Premium Zippered Mattress Encasement",
      "Six-sided, zipped",
      "Lab tested and certified bed bug proof, per the maker",
      "Full Size; fits 6–9 in. deep, as listed",
      "Best Overall",
    ],
    h2Label: "Best Overall",
    h2Name: "SafeRest Premium Mattress Encasement",
    tocLabel: "Best Overall",
    tocName: "SafeRest Premium Encasement",
    pick: "For the strongest bed bug claim: lab tested and certified bite proof, per the maker.",
    blurb: "If the bed bug claim is what you are buying for, this carries the strongest of the four: the maker says it is independently lab tested and certified bed bug entry, escape and bite proof. The micro-zipper is covered by a velcro flap at the end, which the maker says stops it opening by accident, and you sleep on cotton terry over a membrane backing. It is listed in US sizing as Full, for a mattress 6 to 9 inches deep, so measure yours first.",
    pros: ["Lab tested and certified bed bug proof, per the maker", "Six-sided cover with a micro-zipper", "Velcro flap over the zipper end", "Cotton terry surface"],
  },
  {
    anchorId: "best-value",
    asin: "B00MRH58V0",
    rank: 2,
    cardName: "Utopia Bedding Zippered Mattress Encasement",
    cardLabel: "Best Value",
    features: [
      "Six-sided cover with a wrap-around zipper, per the listing",
      "The maker states it is bed bug and dust mite proof",
      "Knitted polyester with a waterproof backing, machine washable and tumble dryable",
      "Its title says US King and its size row says Double — the listing disagrees with itself",
      "Its own bullet describes a 78 by 80 inch mattress up to 15 inches deep",
    ],
    tableCells: [
      "Utopia Bedding Zippered Mattress Encasement",
      "Six-sided, zipped",
      "Bed bug and dust mite proof, per the maker",
      "US King in the title, Double in the size row",
      "Best Value",
    ],
    h2Label: "Best Value",
    h2Name: "Utopia Bedding Mattress Encasement",
    tocLabel: "Best Value",
    tocName: "Utopia Bedding Encasement",
    pick: "For a cover you can wash often: six-sided, machine washable and tumble dryable.",
    blurb: "For a cover you want to wash often, since it goes in the washing machine and the tumble dryer. It is six-sided, with a wrap-around zipper, knitted polyester on top and a waterproof backing, and the maker states it is bed bug and dust mite proof. Check the size with care: the title says US King, the size row says Double, and a bullet describes a 78 by 80 inch mattress up to 15 inches deep.",
    pros: ["Six-sided with a wrap-around zipper", "Bed bug and dust mite proof, per the maker", "Machine washable and tumble dryable", "Waterproof backing"],
  },
  {
    anchorId: "best-comfort",
    asin: "B00WI0D5A2",
    rank: 3,
    cardName: "SureGuard Premium Mattress Encasement",
    cardLabel: "Best for Comfort",
    features: [
      "Six-sided cover with what the maker calls a superfine zipper and a sealing system",
      "The maker states the bed bug seal requires its matching box spring cover as well",
      "Cotton terry surface, described by the maker as noiseless and moisture-wicking",
      "The maker states it is free from vinyl, PVC, phthalates and flame retardants",
      "Listed in US sizing: Full, 54 by 75 inches, fits 9 to 12 inches deep",
    ],
    tableCells: [
      "SureGuard Premium Mattress Encasement",
      "Six-sided, zipped",
      "Bed bug proof with the matching box spring cover, per the maker",
      "Full, 54\" x 75\"; fits 9–12 in. deep, as listed",
      "Best for Comfort",
    ],
    h2Label: "Best for Comfort",
    h2Name: "SureGuard Mattress Encasement",
    tocLabel: "Best for Comfort",
    tocName: "SureGuard Encasement",
    pick: "For comfort: a cotton terry surface the maker calls noiseless, free of vinyl and PVC.",
    blurb: "The one to look at if comfort is what you are buying for. The surface is cotton terry, which the maker describes as noiseless and moisture-wicking, and the maker states it is free from vinyl, PVC, phthalates and flame retardants. It is listed as Full, 54 by 75 inches, for a mattress 9 to 12 inches deep. The maker says its bed bug seal needs the matching box spring cover as well, so plan on both.",
    pros: ["Cotton terry surface, noiseless per the maker", "Free from vinyl, PVC, phthalates and flame retardants, per the maker", "Superfine zipper with a sealing system, per the maker", "Fits mattresses 9 to 12 inches deep, as listed"],
  },
  {
    anchorId: "best-heavy",
    asin: "B004P1I4US",
    rank: 4,
    cardName: "Protect-A-Bed AllerZip Smooth Encasement",
    cardLabel: "Best Machine-Washable",
    features: [
      "Its product description calls it a six-sided encasement with a three-sided zipper",
      "Its feature bullets call it fitted sheet style — the listing disagrees with itself",
      "Jersey knit polyester over the maker's membrane, machine washable",
      "The only listing of the four that makes no bed bug claim in its own text",
      "Listed in US sizing: Twin, 4 to 8 inches deep",
    ],
    tableCells: [
      "Protect-A-Bed AllerZip Smooth Encasement",
      "Six-sided per its description, fitted sheet per its bullets",
      "not stated",
      "Twin; 4–8 in. deep, as listed",
      "Best Machine-Washable",
    ],
    h2Label: "Best Machine-Washable",
    h2Name: "Protect-A-Bed AllerZip",
    tocLabel: "Best Machine-Washable",
    tocName: "Protect-A-Bed AllerZip",
    pick: "For a smooth surface you can machine wash: jersey knit over the maker's membrane.",
    blurb: "For a smooth jersey knit surface you can machine wash. The polyester sits over the maker's membrane, and its product description calls it a six-sided encasement with a three-sided zipper. It is listed as Twin, for a mattress 4 to 8 inches deep. It makes no bed bug claim in its own text, so choose another if that claim matters to you.",
    pros: ["Jersey knit polyester over a membrane", "Machine washable", "Six-sided with a three-sided zipper, per its description"],
  },
];

const faqs = [
  {
    q: "Do bed bug mattress encasements actually work?",
    a: "UC IPM says that mattress encasements specifically designed to prevent bed bugs from establishing harbourages on mattresses are commercially available and have been shown to be effective through laboratory research, and that bugs trapped inside encasements will eventually die due to starvation. That is the source's finding about the product class, quoted; it is not a claim by this page about any of the four covers below.",
  },
  {
    q: "How long should I leave one on?",
    a: "No source read for this page states a figure, and none of the four listings states one either. UC IPM says trapped bugs die of starvation without giving a period. A number we invented would look exactly like a number we had measured, so there is no number here.",
  },
  {
    q: "What size do I need?",
    a: "Measure the depth of your mattress and match it against the depth range in the listing. Note that all four covers here are listed in US sizes — Full, US King, Full 54 by 75 inches, and Twin — and one of them gives a different size in its title than in its size row. Read the listing's own measurements rather than assuming a UK equivalent.",
  },
  {
    q: "Is an encasement enough on its own?",
    a: "The NHS's position on the infestation is that it is very difficult to get rid of bedbugs yourself because they can be hard to find and may be resistant to some insecticides, and that you should contact your local council or pest control service. UC IPM adds that bed bugs hide in bed frames, headboards, baseboards and furniture as well as in mattresses. A mattress cover covers a mattress.",
  },
  {
    q: "Why not just spray the mattress?",
    a: "UC IPM says pesticides are not generally applied to mattresses or bedding because of potential risk to people, and that insecticide applications alone will not control bed bug infestations. An encasement is the option that puts a barrier where a pesticide is not meant to go.",
  },
  {
    q: "Are the bites dangerous?",
    a: "The NHS says bedbug bites can be itchy but do not usually cause other health problems, and UC IPM says bed bugs are not known to spread diseases although scratching bites can lead to infections. Anything about your own skin is a question for a pharmacist or a GP, and the NHS page on bedbugs is where to read its own advice on that.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tocItems = [
  { id: "compared", title: "The Four Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "What an Encasement Is For" },
  { id: "health", title: "What the NHS and UC IPM Say About the Bites" },
  { id: "limits", title: "Where an Encasement Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Cover Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestBedBugMattressEncasementPage() {
  return (
    <GuideLayout
      title="Best Bed Bug Mattress Encasement UK 2026"
      subtitle="Four zipped mattress encasements, with picks for the strongest bed bug claim on a listing and for a soft cotton terry surface"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Bed Bug Treatments UK 2026", href: "/best/bed-bug-treatments" },
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
        { title: "Best Professional Bed Bug Steamers UK 2026", href: "/best/professional-bed-bug-steamers" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        This page compares four zipped encasements that cover the whole
        mattress. The SafeRest carries the strongest bed bug claim, which the
        maker says is lab tested and certified. The Utopia goes in the washing
        machine and tumble dryer, and the SureGuard has a cotton terry surface
        the maker calls noiseless. All four give US sizes, so measure your
        mattress before you order.
      </p>

      {/* Comparison table */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Construction</th>
              <th className="text-left p-2 border-b font-semibold">Bed bug claim, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Size and depth, as listed</th>
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
      <p>
        A cover protects the mattress only, and for an infestation the NHS
        advises contacting your local council or a pest control service (
        <a href={SRC.nhs} rel="nofollow">
          NHS
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

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have an active infestation.</strong>{" "}
            <a href="#limits" className="underline">
              Read what a cover does not do
            </a>{" "}
            before you read the cards.
          </li>
          <li>
            <strong>You want the strongest claim on the listing.</strong>{" "}
            <a href="#best-overall" className="underline">
              The SafeRest
            </a>{" "}
            is the one that states lab certification.
          </li>
          <li>
            <strong>You are protecting a mattress rather than treating one.</strong>{" "}
            <a href="#best-value" className="underline">
              The Utopia
            </a>{" "}
            is the plainest of the four.
          </li>
          <li>
            <strong>You mind what it feels like to sleep on.</strong>{" "}
            <a href="#best-comfort" className="underline">
              The SureGuard
            </a>{" "}
            states a cotton terry surface and a materials exclusion list.
          </li>
          <li>
            <strong>Your skin is the reason you are here.</strong>{" "}
            <a href="#health" className="underline">
              What the NHS and UC IPM say
            </a>
            , and then a pharmacist or a GP.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The NHS says it is very difficult to get rid of bedbugs yourself and
            that you should contact your local council or pest control service.
            A mattress cover is not a substitute for that, and nothing on this
            page treats a room.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What an Encasement Is For</h2>
      <p>
        The University of California&rsquo;s Statewide IPM Program describes the
        product class, and it is the clearest statement of what these covers do:{" "}
        <em>
          &ldquo;Mattress encasements specifically designed to prevent bed bugs
          from establishing harborages on mattresses are commercially available
          and have been shown to be effective through laboratory research.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        And the mechanism, in one sentence:{" "}
        <em>&ldquo;Bugs trapped inside encasements will eventually die due to starvation.&rdquo;</em>{" "}
        It gives no period for that, and neither does any of the four listings
        below, so no period appears on this page.
      </p>
      <p>
        There is a second reason these exist. UC IPM:{" "}
        <em>
          &ldquo;Pesticides aren&rsquo;t generally applied to mattresses or
          bedding because of potential risk to people.&rdquo;
        </em>{" "}
        A cover is the option for the one surface a spray is not meant to reach.
      </p>

      {/* [1] Health — attributed, quoted, no diagnosis, no treatment advice */}
      <h2 id="health">What the NHS and UC IPM Say About the Bites</h2>
      <p>
        The NHS describes the pest and its bites in one sentence, and this page
        adds nothing to it:{" "}
        <em>
          &ldquo;Bedbugs are small insects that often live on furniture or
          bedding. Their bites can be itchy but do not usually cause other
          health problems.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ).
      </p>
      <p>
        UC IPM says the same thing about disease, with one qualification:{" "}
        <em>
          &ldquo;Bed bugs aren&rsquo;t known to spread diseases, but scratching
          bites can lead to infections.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        That is the whole of it. A page selling mattress covers is not the place
        to work out what is on your skin, and there is no symptom list here to
        check yourself against. If the bites are the reason you are reading
        this, a pharmacist or a GP is where that question goes.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where an Encasement Does Not Work</h2>
      <p>
        <strong>Everywhere that is not the mattress.</strong> The NHS:{" "}
        <em>
          &ldquo;Bedbugs can hide in many places, including on bed frames,
          mattresses, clothing, furniture, behind pictures and under loose
          wallpaper.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). A cover addresses exactly one item on that list.
      </p>
      <p>
        <strong>As the whole of a treatment.</strong> UC IPM:{" "}
        <em>&ldquo;Insecticide applications alone won&rsquo;t control bed bug infestations.&rdquo;</em>{" "}
        If that is true of the insecticides, it is true of a barrier that
        carries none.
      </p>
      <p>
        <strong>Against a population you have not found.</strong> The NHS says
        it is{" "}
        <em>
          &ldquo;very difficult to get rid of bedbugs yourself because they can
          be hard to find and may be resistant to some insecticides.&rdquo;
        </em>{" "}
        Its instruction is:{" "}
        <em>
          &ldquo;If you think you have bedbugs, you should contact your local
          council or pest control service.&rdquo;
        </em>
      </p>
      <p>
        <strong>Once it is opened.</strong> Every one of these four works by
        being closed and staying closed. An unzipped cover is a bedsheet.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. What the listing claims about bed bugs, and how strongly</h3>
      <p>
        Three of the four make a bed bug claim in their own text and one makes
        none at all. Of the three, one states independent lab testing and
        certification, one states bed bug and dust mite proof without naming a
        test, and one states the seal only in combination with the same
        maker&rsquo;s box spring cover. Those are three different claims and the
        cards keep them apart.
      </p>
      <h3>2. Depth, which is the measurement that actually fails</h3>
      <p>
        6 to 9 inches, up to 15 inches, 9 to 12 inches, 4 to 8 inches. A cover
        that will not close over the mattress does not work at all, and this is
        the number to check before any other.
      </p>
      <h3>3. That all four are listed in US sizes</h3>
      <p>
        Full, US King, Full 54 by 75 inches, Twin. One of them gives a different
        size in its title than in its own size row. No conversion appears on
        this page, because a converted figure would be our arithmetic rather
        than the listing&rsquo;s fact.
      </p>
      <h3>4. The surface you will actually sleep on</h3>
      <p>
        Two state cotton terry, one states knitted polyester, one states jersey
        knit polyester. One of the four also states what it is free from —
        vinyl, PVC, phthalates and flame retardants — which is the maker&rsquo;s
        own claim about its own materials.
      </p>


      {/* Alternatives */}
      <h2 id="alternatives">If a Cover Is Not the Answer</h2>
      <p>
        <strong>Heat and cold.</strong> The NHS names a 60C wash with at least
        30 minutes in a hot tumble dryer, and two to three weeks in a freezer
        for what cannot be washed.
      </p>
      <p>
        <strong>Monitors under the bed legs.</strong> UC IPM describes
        commercially available double-cupped monitors installed under bed legs
        as a temporary exclusion measure. Our{" "}
        <a href="/best/commercial-insect-monitors">insect monitors</a> page
        covers that class.
      </p>
      <p>
        <strong>Treating the room rather than the mattress.</strong> Our{" "}
        <a href="/best/bed-bug-spray">bed bug spray</a> and{" "}
        <a href="/best/bed-bug-treatments">bed bug treatments</a> pages cover the
        insecticides, with the same NHS caveat attached to both.
      </p>
      <p>
        <strong>The council or a professional.</strong> The NHS&rsquo;s first
        instruction. Our{" "}
        <a href="/guides/how-to-get-rid-of-bed-bugs">bed bug guide</a> sets out
        what that involves.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Measure the depth first.</strong> Every one of these four
          states a depth range, and it is the specification that decides whether
          the cover closes at all.
        </li>
        <li>
          <strong>Read the size in the listing, not the name.</strong> All four
          are given in US sizes and one contradicts itself.
        </li>
        <li>
          <strong>Launder the bedding before you fit it.</strong> The NHS&rsquo;s
          60C wash and hot tumble dry come first, or you seal a clean mattress
          under dirty sheets.
        </li>
        <li>
          <strong>Close it fully and leave it closed.</strong> The mechanism UC
          IPM describes is containment, and it stops the moment the zip opens.
        </li>
        <li>
          <strong>Treat the rest of the room separately.</strong> Frames,
          headboards, skirting and furniture are on the NHS&rsquo;s own list of
          hiding places and none of them is covered by a mattress cover.
        </li>
      </ol>


      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="Bed bugs are the pest the NHS says to get help with"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
