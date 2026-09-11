import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R8 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B: the subject carries a
// health question, so health statements are permitted — but only quoted from a named
// public health body, never in our own voice, never as diagnosis or treatment. THIS PAGE
// CARRIES THREE, ALL NHS, all quoted, at #situation and #limits.
//
// THE TITLE AND H1 ARE UNCHANGED. They were corrected at S68 R4 to "Sprays and Kits
// Compared", which is what this page cards: one spray on its own and four kits.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED — this is not a Law 191 route.
// FOUR CARD NAMES ARE CORRECTED TOWARDS THEIR FETCHED TITLES (S50-H), because three of
// the five products are kits rather than sprays and the old names did not always say so.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Bed Bug Spray UK 2026: Sprays and Kits Compared",
    description:
      "Bed bug sprays and kits for UK homes: what the NHS says about treating an infestation yourself, and five compared on what the listings state.",
    alternates: { canonical: "https://pestproindex.com/best/bed-bug-spray" },
    openGraph: {
      title: "Best Bed Bug Spray UK 2026: Sprays and Kits Compared",
      description:
        "Bed bug sprays and kits for UK homes: what the NHS says about treating an infestation yourself, and five compared on what the listings state.",
      url: "https://pestproindex.com/best/bed-bug-spray",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Bed Bug Spray UK 2026: Sprays and Kits Compared",
  description:
    "Bed bug sprays and kits for UK homes: what the NHS says about treating an infestation yourself, and five compared on what the listings state.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/bed-bug-spray" },
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
      name: "Best Bed Bug Spray UK 2026",
      item: "https://pestproindex.com/best/bed-bug-spray",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). The citation names the host
// actually fetched (Law 194). Body kept under Law 175: nhs-bedbugs at ~/pp-s68r8/sources,
// fetched 2026-09-09.
const SRC = {
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
};

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated". Every one of these
// listings opens with "THE STRONGEST BED BUG SPRAY ON THE MARKET"; that is the maker's
// own line on all five and it is restated on none of them (S47-F).
//
// TWO LISTINGS CONTRADICT THEMSELVES ON ITEM FORM AND BOTH READINGS ARE RENDERED
// (Law 146): the 2 x 1L kit lists its item form as Powder, and the 5 litre spray lists
// its item form as Aerosol.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B013K87W4A",
    rank: 1,
    cardName: "Pest Expert Formula C+ Bed Bug Spray 1L + Killer Powder 300g",
    cardLabel: "Best Overall",
    features: [
      "A kit, not a spray alone: 1 litre of spray with a 300g XL powder, as listed",
      "The maker states three active ingredients including an insect growth regulator",
      "The maker states coverage of 50 square metres in a single application",
      "Listed as ready-to-use, water-based, non-staining and low-odour",
      "Unit count listed as 1,300 grams; target species Bed Bugs",
    ],
    tableCells: ["Formula C+ 1L + powder 300g", "Spray + powder kit", "Three actives incl. an IGR, per the maker", "50 m² per application, per the maker"],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Formula C+ Spray 1L + Powder 300g",
    tocLabel: "Best Overall",
    tocName: "Formula C+ Spray + Powder",
  },
  {
    anchorId: "best-multi-room",
    asin: "B01GJIBI4S",
    rank: 2,
    cardName: "Pest Expert Formula C+ Bed Bug Spray 2 x 1L + Powder 2 x 300g",
    cardLabel: "Best Multi-Room",
    features: [
      "Two litres of spray with two 300g powders, as listed",
      "Item form stated two ways on the listing: Powder in the detail row, spray throughout the text",
      "The maker states three active ingredients including an insect growth regulator",
      "Unit count listed as 2,600 grams — the largest kit here by weight",
      "Listed for application to any surface, furniture and carpets",
    ],
    tableCells: ["Formula C+ 2 x 1L + 2 x 300g", "Spray + powder kit", "Three actives incl. an IGR, per the maker", "2,600 g total, as listed"],
    h2Label: "Best Multi-Room",
    h2Name: "Pest Expert Formula C+ Spray 2 x 1L + Powder 2 x 300g",
    tocLabel: "Best Multi-Room",
    tocName: "Formula C+ Twin Kit",
  },
  {
    anchorId: "best-kit",
    asin: "B01E724WFK",
    rank: 3,
    cardName: "Pest Expert Bed Bug Killer Treatment Kit — Spray 1L, Powder 300g, Fogger",
    cardLabel: "Best Treatment Kit",
    features: [
      "1 litre of spray, 300g of powder and one fogger bomb, as listed",
      "The maker states the kit will treat one room",
      "Item form listed as Aerosol; a step-by-step advice sheet is listed as included",
      "Listed as low-odour and non-staining",
      "Unit count listed as 2,000 grams; target species Bed Bug",
    ],
    tableCells: ["Treatment kit: spray, powder, fogger", "Three-part kit", "Not named in the detail rows", "One room, per the maker"],
    h2Label: "Best Treatment Kit",
    h2Name: "Pest Expert Bed Bug Killer Treatment Kit",
    tocLabel: "Best Treatment Kit",
    tocName: "Pest Expert Treatment Kit",
  },
  {
    anchorId: "best-combo",
    asin: "B07VRQ8XCT",
    rank: 4,
    cardName: "Pest Expert Formula C Bed Bug Spray 1L + Smoke Bomb 11g",
    cardLabel: "Best Spray + Fumigator Combo",
    features: [
      "1 litre of spray with an 11g smoke bomb, as listed",
      "Active listed as permethrin",
      "The maker describes the smoke bomb as a fumigation device for rapid knockdown",
      "Listed as ready-to-use and water-based, for bed frames and mattresses",
      "Target species listed as Bed Bugs; country of origin United Kingdom",
    ],
    tableCells: ["Formula C 1L + smoke bomb 11g", "Spray + fumigator", "Permethrin, as listed", "Not stated"],
    h2Label: "Best Spray + Fumigator Combo",
    h2Name: "Pest Expert Formula C Spray 1L + Smoke Bomb",
    tocLabel: "Best Combo",
    tocName: "Formula C + Smoke Bomb",
  },
  {
    anchorId: "best-trade",
    asin: "B010E2GQ6K",
    rank: 5,
    cardName: "Pest Expert Formula C+ Bed Bug Killer Spray 5L",
    cardLabel: "Best Trade-Size",
    features: [
      "5 litres, as listed — the largest single container here",
      "Item form listed as Aerosol on a five-litre container; the text describes a ready-to-use spray",
      "The maker states three active ingredients including an insect growth regulator",
      "The maker states coverage of 50 square metres in a single application",
      "Target species listed as Bed Bugs; country of origin United Kingdom",
    ],
    tableCells: ["Formula C+ 5 litre", "Spray", "Three actives incl. an IGR, per the maker", "50 m² per application, per the maker"],
    h2Label: "Best Trade-Size",
    h2Name: "Pest Expert Formula C+ Bed Bug Killer Spray 5L",
    tocLabel: "Best Trade-Size",
    tocName: "Formula C+ 5 Litre",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Will a spray on its own clear an infestation?",
    a: "The NHS states that there are some things you can try yourself, but these are unlikely to get rid of bedbugs completely, and that it is very difficult to get rid of bedbugs yourself because they can be hard to find and may be resistant to some insecticides. Four of the five products here are kits rather than single sprays, which is the makers' own answer to the same question.",
  },
  {
    q: "Should I call someone instead?",
    a: "The NHS says that if you think you have bedbugs you should contact your local council or pest control service. That is its first instruction, not its last resort, and nothing on this page displaces it.",
  },
  {
    q: "What is the difference between a smoke bomb and a fogger?",
    a: "On these listings, one kit includes an 11g smoke bomb described by its maker as a fumigation device for rapid knockdown, and another includes a fogger bomb as the third item alongside a spray and a powder. Neither listing states a room size for the device itself; the fogger kit's maker states that the kit as a whole treats one room.",
  },
  {
    q: "What should I do about the bedding?",
    a: "The NHS lists washing affected bedding and clothing on a hot wash (60C) and tumble drying on a hot setting for at least 30 minutes, putting what cannot be washed into a plastic bag in the freezer for two to three weeks, and cleaning and vacuuming regularly. None of that is sold on this page.",
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
  { id: "situation", title: "What the NHS Says to Do First" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Spray Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Five Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestBedBugSprayPage() {
  return (
    <GuideLayout
      title="Best Bed Bug Spray UK 2026: Sprays and Kits Compared"
      subtitle="One spray on its own and four kits that pair it with a powder, a fogger or a smoke bomb, described by what their own listings state — beside the NHS position on treating bedbugs yourself"
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
        { title: "Best Bed Bug Mattress Encasement UK 2026", href: "/best/bed-bug-mattress-encasement" },
        { title: "Best Professional Bed Bug Steamers UK 2026", href: "/best/professional-bed-bug-steamers" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
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
        Five products from one maker: a single 5 litre spray and four kits that
        pair a spray with a powder, a fogger or a smoke bomb. That so many are
        kits is itself the answer to the question most readers arrive with —
        whether a spray on its own is enough.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have just found them.</strong> The NHS's first
            instruction is not a purchase —{" "}
            <a href="#situation" className="underline">
              what the NHS says to do first
            </a>
            .
          </li>
          <li>
            <strong>You are treating one room.</strong>{" "}
            <a href="#best-kit" className="underline">
              The three-part kit
            </a>{" "}
            is the one whose maker states a room count.
          </li>
          <li>
            <strong>You have more than one room to do.</strong>{" "}
            <a href="#best-multi-room" className="underline">
              The twin kit
            </a>{" "}
            at 2,600 grams, or{" "}
            <a href="#best-trade" className="underline">
              the 5 litre
            </a>
            .
          </li>
          <li>
            <strong>You want the active named on the listing.</strong> Only{" "}
            <a href="#best-combo" className="underline">
              the smoke bomb combo
            </a>{" "}
            names one: permethrin.
          </li>
          <li>
            <strong>You have treated once already and they are back.</strong>{" "}
            The NHS notes resistance to some insecticides —{" "}
            <a href="#limits" className="underline">
              where a spray does not work
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The NHS states that it is very difficult to get rid of bedbugs
            yourself, that they may be resistant to some insecticides, and that
            you should contact your local council or pest control service.
            Everything on this page is an insecticide whose label governs where
            and how it may be used.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What the NHS Says to Do First</h2>
      <p>
        The NHS describes the pest in one sentence and this page repeats no more
        of it than that:{" "}
        <em>
          &ldquo;Bedbugs are small insects that often live on furniture or
          bedding. Their bites can be itchy but do not usually cause other
          health problems.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). Anything about your own skin belongs with a pharmacist or a GP, and
        the NHS page is where to read it.
      </p>
      <p>
        On the infestation, its instruction is plain:{" "}
        <em>
          &ldquo;If you think you have bedbugs, you should contact your local
          council or pest control service.&rdquo;
        </em>{" "}
        A page comparing five insecticide products leads with that sentence
        because a reader deciding what to buy deserves to know the health
        service's answer before they decide.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        All five products here are insecticides. Where each may be applied, on
        what surfaces, at what rate and with what ventilation is set by its own
        label — and two of them include a fumigation device, which carries its
        own separate instructions about leaving and re-entering the room.
      </p>
      <p>
        Two listings also disagree with themselves about what they are: the twin
        kit lists its item form as Powder, and the five-litre lists its item
        form as Aerosol. Neither reading changes the label on the bottle, which
        is the document that governs.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Spray Does Not Work</h2>
      <p>
        <strong>Against a resistant population.</strong> The NHS states it is{" "}
        <em>
          &ldquo;very difficult to get rid of bedbugs yourself because they can
          be hard to find and may be resistant to some insecticides.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). No listing on this page addresses resistance, and none could.
      </p>
      <p>
        <strong>As a complete treatment on its own.</strong> The same page:{" "}
        <em>
          &ldquo;There are some things you can try yourself, but these are
          unlikely to get rid of bedbugs completely.&rdquo;
        </em>{" "}
        Four of the five products here are kits precisely because one product
        type is not the whole job.
      </p>
      <p>
        <strong>Where the bugs are not.</strong> Coverage figures of 50 square
        metres describe area treated, not area searched. The NHS's phrase is
        "hard to find", and a treated surface a bed bug never crosses has done
        nothing.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Spray alone, or a kit</h3>
      <p>
        One product here is a spray on its own. The other four add a powder, a
        fogger or a smoke bomb, which is the makers' own view of what a single
        spray leaves undone.
      </p>
      <h3>2. How much you actually need</h3>
      <p>
        1,300 grams, 2,600 grams, 2,000 grams, a 1 litre plus a smoke bomb, or 5
        litres. The one room-count on the page belongs to the three-part kit;
        everything else is stated by weight, volume or a maker's coverage
        figure.
      </p>
      <h3>3. Whether the listing names an active</h3>
      <p>
        Only one of the five names an active substance in its detail rows —
        permethrin, on the smoke bomb combo. The others describe three actives
        including a growth regulator in their text without naming them, and the
        cards say exactly that.
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
                "A kit rather than a bottle: one litre of ready-to-use spray with a 300g XL powder, listed at 1,300 grams in total. Its maker states three actives including a growth regulator and 50 square metres per application, and describes it as water-based, non-staining and low-odour.",
                "The same pairing doubled — two litres of spray and two 300g powders, 2,600 grams in total, the largest kit here by weight and listed for any surface, furniture and carpets. Its detail row calls the item form Powder while its text describes a spray; the card carries both.",
                "The one product whose maker states a room count: a litre of spray, 300g of powder and a fogger bomb, described as providing an effective treatment in one room, with a step-by-step advice sheet included. Its item form is listed as Aerosol and no active is named in its detail rows.",
                "A litre of spray with an 11g smoke bomb, and the only listing here that names an active substance in its detail rows: permethrin. Its maker describes the smoke bomb as a fumigation device for rapid knockdown; the spray is listed for bed frames and mattresses.",
                "The largest single container on the page at five litres, with the maker's 50 square metre coverage claim and the same three-actives description as the kits. Its detail row lists the item form as Aerosol, which a five-litre container is not; both readings are on the card.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>Heat and cold.</strong> The NHS names a 60C wash with 30 minutes
        in a hot tumble dryer, and two to three weeks in a freezer for what
        cannot be washed.
      </p>
      <p>
        <strong>A barrier over the mattress.</strong> Our{" "}
        <a href="/best/bed-bug-mattress-encasement">mattress encasement</a> page
        covers the zipped covers, which carry no insecticide at all.
      </p>
      <p>
        <strong>The council or a professional.</strong> The NHS's first
        instruction; our{" "}
        <a href="/guides/how-to-get-rid-of-bed-bugs">bed bug guide</a> sets out
        what that involves.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Read the label, then the NHS page.</strong> One governs the
          bottle; the other sets a realistic expectation of the outcome.
        </li>
        <li>
          <strong>Launder first.</strong> The 60C wash and the hot tumble dry
          come before any treatment, not instead of it.
        </li>
        <li>
          <strong>Treat frames and seams.</strong> Every spray listing here
          describes bed frames and mattresses rather than open floor.
        </li>
        <li>
          <strong>Follow the fumigator's own instructions.</strong> Two kits
          include one, and leaving and re-entering the room is governed by that
          device's label, not by the spray's.
        </li>
        <li>
          <strong>Expect to repeat, and to check.</strong> The NHS's "unlikely
          to get rid of bedbugs completely" is about exactly this.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Five Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        coverage figure attributed to the maker who claims it. Where a listing
        does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">What is in the box</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Coverage or size, as listed</th>
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
