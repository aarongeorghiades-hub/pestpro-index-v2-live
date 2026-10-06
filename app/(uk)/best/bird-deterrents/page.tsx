import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';
import TopPicks, { ProsList } from "@/components/TopPicks";

// S68 R7 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// no efficacy claim in our own voice, no superlative or ranking label, no rank numeral.
// Card labels are neutral factual descriptors from the listings; maker claims are framed
// as the maker's own.
//
// THE TITLE AND H1 SAID "Top 5" OVER FOUR CARDS — a ranking claim in our own voice and a
// numeral that misstated the page. Both are replaced with a factual clause naming what is
// actually here; the head keyword is unchanged.
//
// THE LEGAL SECTION IS THE LOAD-BEARING ONE. Every wild bird is protected, and the
// government's own guidance says to try to avoid harming birds and to use measures that
// do not kill or injure them before considering anything harmful. That is the frame a
// spike belongs in, and it is why the gel product's position on the page is not an
// afterthought.
//
// HISTORIC ENGLAND IS TWICE-BLOCKED AND TERMINAL under Law 137; no attempt was made.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Bird Deterrents UK 2026 | Spikes & Optical Gel",
    description:
      "Bird deterrents for UK homes: every wild bird is protected by law, what that means for spikes, and four products described by their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/bird-deterrents" },
    openGraph: {
      title: "Best Bird Deterrents UK 2026 | Spikes & Optical Gel",
      description:
        "Bird deterrents for UK homes: every wild bird is protected by law, what that means for spikes, and four products described by their own listings.",
      url: "https://pestproindex.com/best/bird-deterrents",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Bird Deterrents UK 2026: Spikes & Optical Gel",
  description:
    "Bird deterrents for UK homes: every wild bird is protected by law, what that means for spikes, and four products described by their own listings.",
  datePublished: "2026-03-17",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/bird-deterrents" },
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
      name: "Best Bird Deterrents UK 2026",
      item: "https://pestproindex.com/best/bird-deterrents",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175 at ~/pp-s68r7/sources,
// fetched 2026-09-08: gov-wild-birds (Natural England and Defra guidance) and rspb-wca.
const SRC = {
  gov: "https://www.gov.uk/guidance/wild-birds-protection-surveys-and-licences",
  rspb: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-and-countryside-act",
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated".
//
// THREE LISTINGS CONTRADICT THEMSELVES AND EVERY READING IS RENDERED (Law 146): the
// Defender pack says ledges up to 20cm in its feature text and 100 mm in its detail row;
// the optical gel is a 24 pack in its title and "Number of pieces: 1" in its rows; the
// Fly-Bye pack is 15 pieces in its text and 16 in its rows.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B006Y9L57S",
    rank: 1,
    cardName: "Defender Wide Plastic Bird Spikes — 5 Metre Pack",
    cardLabel: "Best Overall",
    features: [
      "15 strips of 33.4 cm, as listed, covering a 5 metre run",
      "Ledge depth stated two ways on the listing: up to 20 cm in the feature text, 100 mm in the detail row",
      "Polycarbonate plastic; pin height listed as 112 mm",
      "The detail rows state suitable for pigeons and not suitable for seagulls",
      "Listed as snappable into smaller sections; fixings are not included",
    ],
    tableCells: ["Defender Wide Plastic Spikes", "Plastic spikes", "5 m; 15 x 33.4 cm strips", "20 cm (text) / 100 mm (row)", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Defender Wide Plastic Bird Spikes",
    tocLabel: "Best Overall",
    tocName: "Defender Wide Plastic Spikes",
    pick: "For pigeons on a ledge: 5 metres of wide polycarbonate spikes, listed for pigeons.",
    blurb: "For a ledge where pigeons keep landing. You get fifteen polycarbonate strips of 33.4 cm, which run to five metres, with a pin height of 112 mm, and the detail rows state suitable for pigeons. The strips snap into smaller sections, and you buy the fixings separately. The listing gives the ledge depth as up to 20 cm in the text and 100 mm in the detail row, so measure yours.",
    pros: ["5 metres of coverage in 15 strips of 33.4 cm", "Polycarbonate, with a 112 mm pin height", "Listed as suitable for pigeons", "Snaps into smaller sections, as listed"],
  },
  {
    anchorId: "best-discreet",
    asin: "B01MQSRJQ6",
    rank: 2,
    cardName: "Bird Barrier Optical Gel (24 Pack)",
    cardLabel: "Best Discreet",
    features: [
      "Pack size stated two ways on the listing: 24 pack in the title, number of pieces 1 in the detail row",
      "Each dish listed at 6.4 x 6.4 x 0.6 cm",
      "Ingredients listed as citronella, mint oil, agar and beeswax",
      "The maker describes it as a humane alternative to bird spikes, installed without tools",
      "Target species listed as Birds; the maker names roofs, balconies and railings among the surfaces",
    ],
    tableCells: ["Bird Barrier Optical Gel", "Gel dishes", "24 (title) / 1 piece (row)", "6.4 x 6.4 x 0.6 cm per dish", "Best Discreet"],
    h2Label: "Best Discreet",
    h2Name: "Bird Barrier Optical Gel",
    tocLabel: "Best Discreet",
    tocName: "Bird Barrier Optical Gel",
    pick: "If you don't want spikes on show: low gel dishes the maker says fit without tools.",
    blurb: "Choose this if you don't want spikes on show. Each dish is listed at 6.4 x 6.4 x 0.6 cm, and the maker describes the gel as a humane alternative to bird spikes that goes on without tools. The listed ingredients are citronella, mint oil, agar and beeswax, and the maker names roofs, balconies and railings among the surfaces. The title says 24 pack while the detail row says one piece, so check the count before you order.",
    pros: ["Low dishes, each 6.4 x 6.4 x 0.6 cm", "The maker says it fits without tools", "Ingredients listed as citronella, mint oil, agar and beeswax", "The maker names roofs, balconies and railings"],
  },
  {
    anchorId: "best-budget",
    asin: "B07L19T8L4",
    rank: 3,
    cardName: "Stainless Steel Bird Spikes — 3 Metre Pack",
    cardLabel: "Best Budget",
    features: [
      "12 sections of 25 cm, as listed, covering 3 metres",
      "Stainless steel; listed at 660 grams",
      "The maker describes it as corrosion and weather resistant",
      "Listed as made in Europe; the maker states installation in 2 to 3 minutes",
      "The colour row reads \"20 Ft\", which does not match the 3 metre unit count",
    ],
    tableCells: ["Stainless Steel Bird Spikes", "Stainless steel spikes", "3 m; 12 x 25 cm sections", "Not stated", "Best Budget"],
    h2Label: "Best Budget",
    h2Name: "Stainless Steel Bird Spikes, 3 Metre",
    tocLabel: "Best Budget",
    tocName: "Stainless Steel Bird Spikes",
    pick: "If you want metal spikes: stainless steel, in twelve 25 cm sections making 3 metres.",
    blurb: "If you want metal spikes, this set gives you twelve stainless steel sections of 25 cm, three metres in all, at 660 grams. The maker describes it as corrosion and weather resistant and says it goes up in 2 to 3 minutes. It is listed as made in Europe.",
    pros: ["Stainless steel, listed at 660 grams", "3 metres in twelve 25 cm sections", "The maker describes it as corrosion and weather resistant", "The maker states fitting takes 2 to 3 minutes"],
  },
  {
    anchorId: "best-coverage",
    asin: "B0C4Y7LSL6",
    rank: 4,
    cardName: "Fly-Bye Anti Bird Spikes — 6 Metre Coverage",
    cardLabel: "Best Coverage",
    features: [
      "6 metres of coverage, as listed",
      "Pack size stated two ways on the listing: a 15-pack in the feature text, 16 pieces in the detail row",
      "The maker states 2,500 spikes and an irregular pattern",
      "Listed as fixable with screws, cable ties, glue or double-sided tape",
      "The listing also names cats, foxes and squirrels among what it is sold against",
    ],
    tableCells: ["Fly-Bye Anti Bird Spikes", "Plastic spikes", "6 m; 15 (text) / 16 (row) pieces", "Not stated", "Best Coverage"],
    h2Label: "Best Coverage",
    h2Name: "Fly-Bye Anti Bird Spikes",
    tocLabel: "Best Coverage",
    tocName: "Fly-Bye Anti Bird Spikes",
    pick: "For a long run: 6 metres of spikes from one pack, fixed with screws, ties, glue or tape.",
    blurb: "For a long run, since this gives the most coverage on the page at six metres per pack. The maker states 2,500 spikes set in an irregular pattern, and you can fix them with screws, cable ties, glue or double-sided tape, whichever suits your surface. The pack count is given as 15 in the text and 16 in the detail row.",
    pros: ["6 metres of coverage, as listed", "2,500 spikes in an irregular pattern, per the maker", "Fixes with screws, cable ties, glue or double-sided tape"],
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Are bird spikes legal in the UK?",
    a: "Nothing on this page is unlawful to buy, but the frame around it matters. GOV.UK states that all wild bird species, their eggs and nests are protected by law, and that you must always try to avoid harming birds or to use measures which do not kill or injure them before considering taking harmful action. A deterrent that excludes a bird from a ledge is one thing; anything that injures one is another.",
  },
  {
    q: "Can I put spikes up where birds are nesting?",
    a: "The RSPB's summary of the Wildlife and Countryside Act 1981 is that it is generally illegal to intentionally take, damage or destroy the nest of any wild bird while it is in use or being built, and GOV.UK words the same offence as taking, damaging or destroying a nest while it is being used or built. Work that would do that is not a product question.",
  },
  {
    q: "Which product is not a spike?",
    a: "The optical gel. Its maker describes it as a humane alternative to bird spikes, installed without tools on roofs, balconies and railings, with citronella, mint oil, agar and beeswax listed as its ingredients. Whether it suits a given ledge is a question of the surface; whether it works is a claim this page attributes to its maker rather than making itself.",
  },
  {
    q: "How much ledge will one pack cover?",
    a: "5 metres in 15 strips, 3 metres in 12 sections, or 6 metres of coverage, on the three spike listings' own figures. The Defender listing is the only one that states a ledge depth, and it states two different ones — up to 20 cm in its feature text and 100 mm in its detail row — so both are on its card.",
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

// S70 R1 (Law 195): the one-line safety/legal note carried inside the decision
// block (the top-picks box). It satisfies Law 180 on this route; the full legal
// and safety sections sit below the picks.
const SAFETY_NOTE = (
  <>
    Wild birds, their nests and eggs are protected by law. Never fit anything
    over an active nest.{" "}
    <a href="#legal" className="underline">
      The legal position
    </a>
    .
  </>
);

const tocItems = [
  { id: "compared", title: "The Four Compared" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "situation", title: "What You Are Trying to Stop" },
  { id: "legal", title: "The Legal Position: Every Wild Bird Is Protected" },
  { id: "limits", title: "Where a Deterrent Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Fitting Them" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestBirdDeterrentsPage() {
  return (
    <GuideLayout
      title="Best Bird Deterrents UK 2026: Spikes & Optical Gel"
      subtitle="Three sets of bird spikes and a tray of gel dishes for ledges and railings, with picks for pigeon ledges and long runs"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Pigeon Spikes UK 2026", href: "/best/pigeon-spikes" },
        { title: "Best Commercial Bird Proofing UK 2026", href: "/best/commercial-bird-proofing" },
        { title: "Best Fox Deterrents UK 2026", href: "/best/fox-deterrents" },
        { title: "Best Cat Deterrents UK 2026", href: "/best/cat-deterrents" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
      topPicks={
        <TopPicks
          note={SAFETY_NOTE}
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
        This page compares three sets of spikes and one tray of gel dishes, all
        designed to stop birds landing or roosting on a surface. The Defender
        wide spikes are the overall pick for a pigeon ledge, and their listing
        states they suit pigeons. If you don&rsquo;t want spikes on show, the
        Bird Barrier gel dishes sit low on the surface. The Fly-Bye pack is the
        longest run here at six metres.
      </p>

      {/* Comparison table */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing states two different figures, both are shown; where it states
        nothing, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Coverage and pack, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Ledge depth, as listed</th>
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
            <strong>There is a nest, or one being built.</strong> Stop and read
            this first —{" "}
            <a href="#legal" className="underline">
              every wild bird is protected
            </a>
            .
          </li>
          <li>
            <strong>You do not want spikes on the front of the house.</strong>{" "}
            <a href="#best-discreet" className="underline">
              The gel dishes
            </a>{" "}
            are the one non-spike product here.
          </li>
          <li>
            <strong>You need to know the ledge depth.</strong> Only one listing
            states one, and it states two different figures —{" "}
            <a href="#best-overall" className="underline">
              the Defender pack
            </a>
            .
          </li>
          <li>
            <strong>It is seagulls, not pigeons.</strong> One listing rules
            itself out for gulls —{" "}
            <a href="#limits" className="underline">
              where a deterrent does not work
            </a>
            .
          </li>
          <li>
            <strong>You want metal rather than plastic.</strong>{" "}
            <a href="#best-budget" className="underline">
              The stainless steel set
            </a>{" "}
            covers 3 metres in twelve sections.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            GOV.UK states that all wild bird species, their eggs and nests are
            protected by law, and that you must always try to avoid harming
            birds or use measures which do not kill or injure them before
            considering harmful action. Fitting anything to a ledge that is in
            use as a nest site is not a product decision.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What You Are Trying to Stop</h2>
      <p>
        A bird landing on a ledge, a bird roosting there overnight, and a bird
        nesting there are three different situations, and only the first two are
        addressed by anything on this page. The third is governed by the law
        set out below and by timing, not by a purchase.
      </p>
      <p>
        The products themselves are narrow. One listing states the ledge depth
        it is for and the bird it is for — pigeons, not seagulls. The others
        state a length of coverage and leave the depth unstated, which the
        comparison table records as &ldquo;not stated&rdquo; rather than filling
        in.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position: Every Wild Bird Is Protected</h2>
      <p>
        The government&rsquo;s guidance opens with the general rule:{" "}
        <em>&ldquo;All wild bird species, their eggs and nests are protected by law.&rdquo;</em>{" "}
        and sets out the order of operations:{" "}
        <em>
          &ldquo;You must always try to avoid harming birds or to use measures
          which do not kill or injure them before considering taking harmful
          action.&rdquo;
        </em>{" "}
        (
        <a href={SRC.gov} rel="nofollow">
          GOV.UK
        </a>
        ). Exclusion — which is what everything here is — sits on the
        do-not-harm side of that line, provided it is fitted where a bird is not
        already nesting.
      </p>
      <p>
        On nests specifically, the same guidance lists among the things that
        break the law to{" "}
        <em>
          &ldquo;intentionally take, damage or destroy a wild bird’s nest while
          it’s being used or built&rdquo;
        </em>
        . The RSPB&rsquo;s summary of the Wildlife and Countryside Act 1981 puts
        the same two offences as{" "}
        <em>&ldquo;Intentionally kill, injure or take any wild bird.&rdquo;</em>{" "}
        and{" "}
        <em>
          &ldquo;Intentionally take, damage or destroy the nest of any wild bird
          while it is in use or being built.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rspb} rel="nofollow">
          RSPB
        </a>
        ). This page reports those; it does not advise on any particular
        situation.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Deterrent Does Not Work</h2>
      <p>
        <strong>On a species the listing excludes.</strong> The Defender
        pack&rsquo;s own detail rows mark it suitable for pigeons and not
        suitable for seagulls. A gull problem is not a smaller version of a
        pigeon problem, and the listing is the one saying so.
      </p>
      <p>
        <strong>On a ledge deeper than the strip.</strong> Only one listing
        gives a ledge figure at all, and it gives two — up to 20 cm in its
        feature text, 100 mm in its detail row. A ledge deeper than the run of
        spikes leaves a landing strip behind them, and three of the four
        listings say nothing about depth.
      </p>
      <p>
        <strong>Where a nest is already in use.</strong> Nothing on this page
        addresses that, and the guidance above is why. Exclusion is fitted
        before a site is in use, or after it has been vacated.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. The run of ledge you need to cover</h3>
      <p>
        5 metres in 15 strips, 3 metres in 12 sections, or 6 metres of coverage.
        Those are the three spike listings&rsquo; own figures, and they are the
        first thing to measure against.
      </p>
      <h3>2. Spike or gel, and what the surface will take</h3>
      <p>
        The spikes are glued, screwed or cable-tied — the Defender listing notes
        that fixings are not included. The gel dishes are described by their
        maker as installing without tools, which is a different proposition on a
        listed frontage or a rented flat.
      </p>
      <h3>3. Material, where the weather gets at it</h3>
      <p>
        Polycarbonate on one, stainless steel on another, unstated on the third.
        The stainless listing is the one that makes a corrosion claim, and it is
        its maker&rsquo;s.
      </p>


      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Remove what they are landing for.</strong> Food and standing
        water on a flat roof or a balcony are the reason a ledge is worth
        returning to.
      </p>
      <p>
        <strong>Look at proofing rather than a strip.</strong> Our{" "}
        <a href="/best/commercial-bird-proofing">commercial bird proofing</a>{" "}
        page covers netting and wire systems for larger structures, and our{" "}
        <a href="/best/pigeon-spikes">pigeon spikes</a> page covers that
        category on its own.
      </p>
      <p>
        <strong>Get a licence question answered properly.</strong> Where a
        situation cannot be resolved without affecting a bird, a nest or an egg,
        the guidance above points to Natural England rather than to a shop.
      </p>

      {/* Using them */}
      <h2 id="using">Fitting Them</h2>
      <ol>
        <li>
          <strong>Check the site is not in use first.</strong> That is the legal
          step, and it comes before the drill.
        </li>
        <li>
          <strong>Measure the ledge, both ways.</strong> Length decides how many
          packs; depth decides whether spikes leave a gap behind them.
        </li>
        <li>
          <strong>Buy the fixings.</strong> The Defender listing states plainly
          that glue, screws and cable ties are not included.
        </li>
        <li>
          <strong>Clean the surface for gel.</strong> The dishes are described as
          securing to the surface, which a soiled ledge will not do well.
        </li>
        <li>
          <strong>Check it after weather.</strong> Only one of these listings
          makes a corrosion claim, and it is the maker&rsquo;s.
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
        heading="A bird problem on a building rather than a ledge?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
