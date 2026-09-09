import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S69 R1 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: ZERO. Neither source read for this route makes a
// statement about human health, and none is manufactured to fill the gap. Ants are a
// nuisance and a food-hygiene question here, not a clinical one.
//
// TITLE AND H1: the claim clause was "Baits, Gels & Sprays" and this page cards no
// spray. Replaced with "Bait Stations and Gel", which is what it cards. Head keyword
// "Best Ant Killer Products UK 2026" kept byte-identical (standing title ruling).
//
// STANDING BAR — B000BQT5IG. Permanently barred from carrying any award anywhere on the
// estate. Its compliant neutral descriptor "Gel Bait" is preserved byte-identical on
// cardLabel, h2Label, tocLabel and its comparison cell. No string beginning "Best" is
// applied to it on any surface.
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED. Two own-voice claims were
// cleared from the rank-1 feature list: "UK's #1 ant bait station", a superlative this
// listing does not make, and "Discreet, low-profile design safe around children and
// pets", an own-voice safety claim (standing safety ruling, S68 R5).
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Ant Killer Products UK 2026: Bait Stations and Gel",
    description:
      "Two ant bait stations and a gel bait compared on their own listings, beside what UC IPM says about baits against foundation sprays.",
    alternates: { canonical: "https://pestproindex.com/best/ant-killers" },
    openGraph: {
      title: "Best Ant Killer Products UK 2026: Bait Stations and Gel",
      description:
        "Two ant bait stations and a gel bait compared on their own listings, beside what UC IPM says about baits against foundation sprays.",
      url: "https://pestproindex.com/best/ant-killers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Ant Killer Products UK 2026: Bait Stations and Gel",
  description:
    "Two ant bait stations and a gel bait compared on their own listings, beside what UC IPM says about baits against foundation sprays.",
  datePublished: "2026-03-17",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/ant-killers" },
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
      name: "Best Ant Killers UK 2026",
      item: "https://pestproindex.com/best/ant-killers",
    },
  ],
};

// SOURCES. Every quotation below was extracted by byte range from a body on disk and
// verified by exact string match before it was written here (Law 164). The citation
// names the host actually fetched (Law 194): ipm.ucanr.edu, fetched 2026-09-09, body
// kept at ~/pp-s69r1/sources/ucipm-ants.src.txt under Law 175.
//
// IT IS A CALIFORNIAN SOURCE AND THE PAGE SAYS SO. Its species list is Californian and
// none of it is restated here as a UK fact (Law 135). What is quoted is its account of
// how a bait works and what a perimeter spray does, which is a statement about the
// method rather than about a place.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/ants/",
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

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F) — the rank-1
// listing's title carries a fifty-years trust line and it appears nowhere below.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B001CJ11ZQ",
    rank: 1,
    cardName: "Nippon Ant Bait Station Twin Pack",
    cardLabel: "Best Overall",
    features: [
      "Two pre-baited stations per pack, listed as a twin pack",
      "The maker names the active ingredient as spinosad",
      "Listed as fully enclosed and for both indoor and outdoor use",
      "Item form listed as Liquid; target species Ant",
      "The maker states it acts on the nest, not only on the ants you see",
    ],
    tableCells: [
      "Nippon Ant Bait Station Twin Pack",
      "Pre-baited enclosed station",
      "Spinosad, named by the maker",
      "Two stations; indoor and outdoor, as listed",
    ],
    h2Label: "Best Overall",
    h2Name: "Nippon Ant Bait Station Twin Pack",
    tocLabel: "Best Overall",
    tocName: "Nippon Ant Bait Station",
  },
  {
    anchorId: "best-multi-pack",
    asin: "B08YFJWGX2",
    rank: 2,
    cardName: "NOPE! Ant Killer Bait Station (6 x 5g)",
    cardLabel: "Best Multi-Pack",
    features: [
      "Six stations of 5g each, listed as 6 x 5g",
      "The maker states a systemic insecticide with an insect growth regulator",
      "The maker describes the gel being spread through the colony by trophallaxis",
      "Listed for indoor and outdoor use; target species Ant",
      "No active substance is named in the listing's detail rows",
    ],
    tableCells: [
      "NOPE! Ant Killer Bait Station (6 x 5g)",
      "Gel-baited enclosed station",
      "not stated",
      "Six stations, 5g each; indoor and outdoor, as listed",
    ],
    h2Label: "Best Multi-Pack",
    h2Name: "NOPE! Ant Killer Bait Station (6 x 5g)",
    tocLabel: "Best Multi-Pack",
    tocName: "NOPE! Ant Killer Bait Station",
  },
  {
    anchorId: "best-gel",
    asin: "B000BQT5IG",
    rank: 3,
    cardName: "Combat Ant Killing Gel 27g",
    cardLabel: "Gel Bait",
    features: [
      "A 27 gram syringe, listed for placement in cracks and crevices",
      "Active ingredient listed as fipronil",
      "Item form listed as Gel; target species Ant",
      "A US-market product: the maker's own text gives the size as 0.95 ounce",
      "The maker states it eliminates the colony rather than the foragers alone",
    ],
    tableCells: [
      "Combat Ant Killing Gel 27g",
      "Gel bait in a syringe",
      "Fipronil, named in the listing",
      "27 grams; cracks and crevices, as listed",
    ],
    h2Label: "Gel Bait",
    h2Name: "Combat Ant Killing Gel 27g",
    tocLabel: "Gel Bait",
    tocName: "Combat Ant Killing Gel",
  },
];

const faqs = [
  {
    q: "Why is there no spray on this page?",
    a: "Because the source this page reads says a perimeter spray does not fix the problem. UC IPM writes that spraying around the foundation will not provide permanent control, because it kills only foraging ants without killing the colony and the queens, and that baits are the only type of insecticide it recommends in most situations. Adding a spray to satisfy a title would have been the wrong way round; the title was changed instead.",
  },
  {
    q: "How long should a bait take?",
    a: "UC IPM says control with baits is not immediate and may take several weeks or more to be complete. None of the three listings here states a UK-tested timescale, and the fastest claim any of them makes is the gel maker's three to five days, which is the maker's own figure and not a finding of this page.",
  },
  {
    q: "Is a gel or a station better?",
    a: "They are two placements of the same idea rather than two levels of quality. UC IPM describes gel formulations as being applied in small cracks and crevices where ants are entering, and describes prepackaged stations as the readily available form for residential users. The gel goes where a station will not fit; the station is enclosed.",
  },
  {
    q: "Can I use a bait and a spray together?",
    a: "UC IPM's instruction is not to use insecticide sprays while you are using baits. Nothing on this page is a spray, so the question only arises if you already have one in the cupboard.",
  },
  {
    q: "The bait station is empty and the ants are still coming. What now?",
    a: "UC IPM's own advice is to check and refresh bait stations regularly, and it notes that baits can dry up or become rancid and unattractive over time. Beyond that, it says the persistent case is one for a professional trained in integrated pest management, who has access to materials and equipment a consumer does not.",
  },
  {
    q: "Is UC IPM a UK source?",
    a: "No. It is the University of California's Statewide IPM Program and its species list is Californian, which is why no ant species on it is named as a UK fact on this page. What is quoted from it is its account of how a bait reaches a colony and what a perimeter spray does, which is a statement about the method rather than about a country.",
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
  { id: "situation", title: "Why the Nest Is the Target" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Bait Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Bait Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Three Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestAntKillersPage() {
  return (
    <GuideLayout
      title="Best Ant Killer Products UK 2026: Bait Stations and Gel"
      subtitle="Two enclosed bait stations and one gel, described by what their own listings state — beside the University of California's account of why a bait reaches a nest and a perimeter spray does not"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Ants: Complete UK Guide", href: "/guides/how-to-get-rid-of-ants" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Ant Gel Bait UK 2026", href: "/best/ant-gel-bait" },
        { title: "Best Carpet Beetle Treatments UK 2026", href: "/best/carpet-beetle-treatments" },
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        Three products, all of them baits: two enclosed stations and one gel in
        a syringe. That there is no spray here is deliberate, and it is the
        reason this page&rsquo;s title changed.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>One trail, one room.</strong>{" "}
            <a href="#best-overall" className="underline">
              The twin pack
            </a>{" "}
            is two stations, which is what a single trail needs.
          </li>
          <li>
            <strong>Trails in several rooms at once.</strong>{" "}
            <a href="#best-multi-pack" className="underline">
              The six-pack
            </a>{" "}
            is the same idea at six placements.
          </li>
          <li>
            <strong>The ants enter through a crack a station cannot sit at.</strong>{" "}
            <a href="#best-gel" className="underline">
              The gel
            </a>{" "}
            is applied into the crack itself.
          </li>
          <li>
            <strong>You were about to buy a spray.</strong>{" "}
            <a href="#limits" className="underline">
              Read what a perimeter spray does
            </a>{" "}
            first.
          </li>
          <li>
            <strong>You have baited for weeks and nothing has changed.</strong>{" "}
            <a href="#alternatives" className="underline">
              What is left after a bait
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            All three products are insecticides. Where each may be placed, at
            what rate and with what precautions is set by its own label, and the
            label on the bottle governs over anything written here.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Why the Nest Is the Target</h2>
      <p>
        The ants on the worktop are foragers. The colony that sent them is
        somewhere else, and it is the part that has to be reached. The
        University of California&rsquo;s Statewide IPM Program describes the
        mechanism plainly:{" "}
        <em>
          &ldquo;Workers carry small portions of the bait back to the nest where
          it is transferred mouth to mouth to other workers, larvae, and queens
          to kill the entire colony.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>
      <p>
        That is also why it rates the method above the alternatives:{" "}
        <em>
          &ldquo;Baits are a key tool for managing ants and the only type of
          insecticide recommended in most situations.&rdquo;
        </em>{" "}
        Every product on this page is a bait, and that is not a coincidence of
        sourcing.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        Each of the three is sold with a label that states where it may be
        placed, at what rate, and what has to be kept away from it. That
        document governs; nothing on this page changes it.
      </p>
      <p>
        One of the three is a US-market product. The Combat gel&rsquo;s own text
        gives its size in ounces as well as grams, and its instructions are
        written for a different market&rsquo;s conventions. Read its label
        rather than assuming a UK equivalent.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Bait Does Not Work</h2>
      <p>
        <strong>When you reach for a spray instead.</strong> UC IPM:{" "}
        <em>
          &ldquo;Spraying around the foundation won&rsquo;t provide permanent
          control, because it kills only foraging ants without killing the
          colony and the queens.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). This page cards no spray, and that sentence is the whole reason.
      </p>
      <p>
        <strong>On the timescale you were hoping for.</strong> The same source:{" "}
        <em>
          &ldquo;Control with baits isn&rsquo;t immediate and may take several
          weeks or more to be complete.&rdquo;
        </em>{" "}
        A bait that appears to be doing nothing on day three is not necessarily
        failing.
      </p>
      <p>
        <strong>Where the food is better than the bait.</strong> UC IPM&rsquo;s
        instruction before baiting is to remove particles of food and residues
        of sweet liquids from cracks around sinks and pantries. A station
        competing with a spill loses.
      </p>
      <p>
        <strong>When the bait no longer attracts.</strong> It notes that baits
        can dry up or become rancid and unattractive over time, and that
        stations should be checked and refreshed regularly. None of the three
        listings here states a replacement interval in its detail rows.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the listing names an active substance</h3>
      <p>
        Two of the three do. Nippon names spinosad and Combat names fipronil.
        The NOPE! six-pack describes a systemic insecticide with an insect
        growth regulator in its text but names neither in its detail rows, and
        the comparison table below says so rather than guessing.
      </p>
      <h3>2. Enclosed station or open gel</h3>
      <p>
        UC IPM describes the two forms differently:{" "}
        <em>
          &ldquo;Gel formulations of pesticide baits are packaged in small
          tubes. They are applied in small cracks and crevices where ants are
          entering.&rdquo;
        </em>{" "}
        A station is a container you place; a gel is a bead you put into the
        gap. Which one fits your entry point is the question, not which is
        better.
      </p>
      <h3>3. How many placements you actually need</h3>
      <p>
        Two, six, or one syringe. UC IPM&rsquo;s outdoor spacing guidance is
        every ten to twenty feet around a foundation, which is a Californian
        figure for a Californian garden and is quoted here only to show that the
        answer is a number of placements rather than a quantity of product.
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
                "Two enclosed stations, pre-baited, with the active named on the listing as spinosad and the item form given as Liquid. Its maker describes it as ready to use indoors and outdoors and states that it acts on the nest rather than only the ants in front of you. Nothing on the listing states how long a station stays attractive.",
                "The same enclosed idea at six placements, listed as six stations of five grams. Its maker describes a systemic insecticide paired with an insect growth regulator and delayed action, and describes the gel spreading through the colony by trophallaxis — but no active substance appears in the listing's detail rows, so the table cell reads \"not stated\".",
                "A gel rather than a station: a 27 gram syringe listed for placement into the cracks and crevices ants enter by, with fipronil named as the active ingredient. It is a US-market product and its own text gives the size as 0.95 ounce alongside the grams. This record carries a neutral descriptor rather than an award, by a standing ruling of this site that predates the page.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Bait Is Not the Answer</h2>
      <p>
        <strong>Take the food away first.</strong> UC IPM&rsquo;s exclusion and
        sanitation advice — closed containers, cleaned spills, daily refuse — is
        the step that makes a bait competitive rather than an alternative to it.
      </p>
      <p>
        <strong>Close the entry.</strong> Its advice is to follow a trail back
        to where it enters the building and to caulk cracks and crevices around
        foundations. That is a tube of sealant, not an insecticide.
      </p>
      <p>
        <strong>A gel for the gap a station cannot reach.</strong> Our{" "}
        <a href="/best/ant-gel-bait">ant gel bait</a> page covers that form on
        its own.
      </p>
      <p>
        <strong>A professional.</strong> UC IPM&rsquo;s answer to a persistent
        problem is a pest management professional trained in integrated pest
        management, on the ground that they have access to more effective
        materials and to application equipment. Our{" "}
        <a href="/guides/how-to-get-rid-of-ants">ant guide</a> sets out what
        that involves in the UK.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Clean up first.</strong> Sweet residues around sinks and
          worktops compete directly with whatever you put down.
        </li>
        <li>
          <strong>Follow the trail before you place anything.</strong> The point
          of placement is where the ants already walk, not where you would
          rather they did.
        </li>
        <li>
          <strong>Place, then leave it alone.</strong> Disturbing a trail while
          a bait is working interrupts the journey back to the nest.
        </li>
        <li>
          <strong>Do not add a spray.</strong> UC IPM&rsquo;s instruction is not
          to use insecticide sprays while you are using baits.
        </li>
        <li>
          <strong>Check and refresh.</strong> A dried or spent bait is an empty
          container, and none of these listings states how long that takes.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Three Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Form</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Quantity and use, as listed</th>
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
        heading="An ant problem that outlasts the baits"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
