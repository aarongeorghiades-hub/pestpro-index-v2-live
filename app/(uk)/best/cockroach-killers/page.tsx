import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R8 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B: the subject carries a
// health risk, so health statements are permitted here — but only quoted from or closely
// attributed to a named public health body or university extension service, never in our
// own voice, and never as diagnosis or treatment. THIS PAGE CARRIES ONE, and it is UC
// IPM's, quoted in full at #situation.
//
// TWO NEVER TOUCH PASSAGES LIVE ON THIS ROUTE AND BOTH SURVIVE BYTE-IDENTICAL:
//   1. the paragraph dividing cockroach control into four categories and naming gel bait
//      as the most effective of them (CLAUDE.md NEVER TOUCH, located here by the S67 R6
//      correction of record);
//   2. the paragraph arguing against picking the highest-rated product on Amazon.
// Both are reproduced below exactly as they stood, character for character.
//
// THE TITLE PROMISED SPRAYS THE PAGE DOES NOT CARD, and this time the answer is NOT to
// add one. UC IPM's guidance is that baits give better control than sprays, that
// insecticide sprays do not provide long-term control, and that aerosol sprays should be
// avoided because they can disperse cockroaches without killing them. Carding a spray to
// make a title true would put a product on the page that the page's own source advises
// against, so the clause changes instead and the reason is stated at #what-decides.
//
// GONE, BY NAME: "Data from local authority environmental health departments suggests",
// "we consulted the BPCA, the Chartered Institute of Environmental Health (CIEH), and
// peer-reviewed entomological", and the unsourced own-voice sentence naming Salmonella
// and E. coli. None was traceable to any body this page has read.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Cockroach Killer Products UK 2026: Gel Bait & Monitoring Traps",
    description:
      "Cockroach control in UK homes: what the extension guidance rates above spraying, the allergen risk it names, and two products described by their listings.",
    alternates: { canonical: "https://pestproindex.com/best/cockroach-killers" },
    openGraph: {
      title: "Best Cockroach Killer Products UK 2026: Gel Bait & Monitoring Traps",
      description:
        "Cockroach control in UK homes: what the extension guidance rates above spraying, the allergen risk it names, and two products described by their listings.",
      url: "https://pestproindex.com/best/cockroach-killers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Cockroach Killer Products UK 2026: Gel Bait & Monitoring Traps",
  description:
    "Cockroach control in UK homes: what the extension guidance rates above spraying, the allergen risk it names, and two products described by their listings.",
  datePublished: "2026-03-16",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/cockroach-killers" },
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
      name: "Best Cockroach Killer Products UK 2026",
      item: "https://pestproindex.com/best/cockroach-killers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Body kept under Law 175: ucipm-cockroaches at
// ~/pp-s68r8/sources, fetched 2026-09-09. UC IPM writes about California; what is taken
// from it here is control method and the allergen finding, both of which it states
// generally, and it is named as the source of every one of them (Law 135).
const SRC = {
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/cockroaches/",
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, both
// inside the S45-C window. A property is asserted only where the listing states it
// (S52-E, S50-H); a cell the listing does not state reads "not stated". "The strongest
// cockroach gel on the market" and "total eradication" are the maker's own words and are
// not restated (S47-F).
//
// AWARD LABELS, RANK NUMERALS AND CARD ORDER ARE UNCHANGED: this is not a Law 191 route,
// so the existing labels stand. ONE CARD NAME IS CORRECTED TO ITS FETCHED TITLE (S50-H):
// the sticky traps are a 12-pack whose listing brand row reads Rentokil while its
// manufacturer row reads Trapro, and the card now says so rather than picking one.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B07ZZGKQ55",
    rank: 1,
    cardName: "Pest Expert Formula IC Cockroach Killer Gel 6 x 10g",
    cardLabel: "Best Overall",
    features: [
      "Six 10g syringes of gel, as listed",
      "Active listed as imidacloprid",
      "Supplied with a ready-to-use syringe applicator, as listed",
      "Target species listed as Cockroach",
      "The listing's detail table shows a different ASIN (B07ZZCZRXG) from the page fetched — a variant listing",
    ],
    tableCells: ["Pest Expert Formula IC Gel", "Gel bait", "Imidacloprid, as listed", "6 x 10g syringes"],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Formula IC Cockroach Killer Gel",
    tocLabel: "Best Overall",
    tocName: "Pest Expert Formula IC Gel",
  },
  {
    anchorId: "best-monitoring",
    asin: "B075FM7TST",
    rank: 2,
    cardName: "Cockroach Sticky Traps with Bait — 12 Pack",
    cardLabel: "Best for Monitoring",
    features: [
      "12 fold-together sticky traps, with bait pellets included, as listed",
      "Target species listed as Ant, Cockroach, Spider",
      "The maker describes the glue coating as BASF and the trap material as non-toxic",
      "Listed for corners of kitchens, cupboards, cabinets and behind furniture",
      "Brand row reads Rentokil while the manufacturer row reads Trapro — the listing gives both",
    ],
    tableCells: ["Cockroach sticky traps, 12 pack", "Monitoring trap", "None — glue and bait pellet", "12 traps"],
    h2Label: "Best for Monitoring",
    h2Name: "Cockroach Sticky Traps, 12 Pack",
    tocLabel: "Best for Monitoring",
    tocName: "Cockroach Sticky Traps",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Are cockroaches a health risk?",
    a: "That is not a question a product page should answer in its own voice, so this one quotes a source and stops there. UC IPM states that indoor infestations of cockroaches are also important sources of allergens and have been identified as risk factors for development of asthma in children, especially within multi-unit housing environments. If anyone in the household is unwell, that is a matter for a GP or NHS 111, not for anything on this page.",
  },
  {
    q: "Why is there no spray on this page?",
    a: "Because the guidance this page reads advises against it. UC IPM states that when using insecticides, baits provide better control than sprays; that insecticide sprays do not provide long-term control; and that foggers, bombs and aerosol sprays should be avoided because they can be hazardous and may repel and disperse cockroaches to other areas without actually killing them. The page title used to promise sprays and no longer does.",
  },
  {
    q: "How do I know whether the treatment is working?",
    a: "By counting what the traps catch. UC IPM's advice is to use traps to monitor cockroach populations, placing sticky traps and checking them until you can tell where the most cockroaches are being caught. That is what the second product here is for; it is not a treatment.",
  },
  {
    q: "Will cleaning alone get rid of them?",
    a: "UC IPM puts sanitation and exclusion at the centre of control and says pesticides alone will not solve cockroach problems — sealing cracks, fixing leaks, storing food in sealed containers and vacuuming crevices are all on its list. Cleaning is not the whole answer either; the point is that neither half works without the other.",
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
  { id: "situation", title: "What You Are Dealing With" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Product Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Placing Them" },
  { id: "compared", title: "The Two Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestCockroachKillersPage() {
  return (
    <GuideLayout
      title="Best Cockroach Killer Products UK 2026: Gel Bait &amp; Monitoring Traps"
      subtitle="One gel bait and one set of monitoring traps, described by what their own listings state — beside what UC IPM's published guidance says about baits, sprays and sanitation"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Cockroaches: Complete UK Guide", href: "/guides/how-to-get-rid-of-cockroaches" },
        { title: "Restaurant Pest Control: Complete UK Guide", href: "/guides/restaurant-pest-control" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Cockroach Gel Bait UK 2026", href: "/best/cockroach-gel-bait" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
        { title: "Best Silverfish Treatments UK 2026", href: "/best/silverfish-treatments" },
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
        Two products: a gel bait and a set of monitoring traps. There is no
        spray here, and that is deliberate — the published guidance this page
        reads rates baits above sprays and advises against aerosols
        specifically. What the traps are for is finding out whether the bait is
        working.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>Someone in the house has asthma or an allergy.</strong> UC
            IPM names cockroach infestations as a source of allergens —{" "}
            <a href="#situation" className="underline">
              what you are dealing with
            </a>
            .
          </li>
          <li>
            <strong>You were about to buy a spray or a fogger.</strong> Read the
            guidance on that first —{" "}
            <a href="#limits" className="underline">
              where a product does not work
            </a>
            .
          </li>
          <li>
            <strong>You are not certain you have cockroaches at all.</strong>{" "}
            <a href="#best-monitoring" className="underline">
              The sticky traps
            </a>{" "}
            are the identification step, not the treatment.
          </li>
          <li>
            <strong>You want the product type the guidance rates first.</strong>{" "}
            <a href="#best-overall" className="underline">
              The gel bait
            </a>{" "}
            names imidacloprid as its active.
          </li>
          <li>
            <strong>It is a rented or shared building.</strong> UC IPM ties heavy
            infestations to housing disrepair, which is a landlord matter as much
            as a product one —{" "}
            <a href="#legal" className="underline">
              what the label governs
            </a>
            .
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The gel here is an insecticide containing imidacloprid. Its label
            governs where it may be placed and in what quantity, and nothing on
            this page changes that. If anyone in the household is unwell, that
            is a matter for a GP or NHS 111 rather than for a product page.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What You Are Dealing With</h2>
      <p>
        The one health statement on this page is not ours. UC IPM writes:{" "}
        <em>
          &ldquo;Indoor infestations of cockroaches are also important sources of
          allergens and have been identified as risk factors for development of
          asthma in children, especially within multi-unit housing
          environments.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). It adds that the level of allergen present tracks both cockroach
        density and the conditions behind a heavy infestation, naming housing
        disrepair and poor sanitary conditions. This page reports that and goes
        no further into health: it is not a diagnosis and it is not advice about
        anyone&rsquo;s symptoms.
      </p>
      {/* NEVER TOUCH — the four-categories paragraph, reproduced byte-for-byte. */}
      <p>
        The cockroach treatment products available to UK consumers broadly fall
        into four categories: <strong>gel baits</strong> (which cockroaches eat
        and carry back to the colony, creating a cascade effect that eliminates
        the entire population), <strong>contact sprays</strong> (aerosols that
        kill cockroaches on direct contact but do little to address the wider
        colony), <strong>powders and dusts</strong> (such as diatomaceous earth,
        which damages the cockroach exoskeleton through physical action), and{" "}
        <strong>monitoring traps</strong> (sticky traps used to assess
        infestation levels and confirm whether treatment has been successful).
        Of these four categories, gel bait is by far the most effective for
        eliminating an established cockroach population, and it is the product
        type that professional pest controllers rely on for the vast majority of
        cockroach call-outs in the UK.
      </p>
      <p>
        Of those four, this page cards two: a gel bait and monitoring traps. The
        reason the other two are absent is set out below.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        The gel is an insecticide, and the conditions on its own label — where
        it may be placed, how much, and in what kind of room — are binding in a
        way nothing on this page is. Read it before the first application rather
        than after.
      </p>
      <p>
        UC IPM also identifies who the problem often belongs to. It ties the
        allergen levels quoted above to{" "}
        <em>
          &ldquo;housing disrepair and poor sanitary conditions&rdquo;
        </em>{" "}
        in multi-unit housing. In a rented flat that is a repairing question for
        the landlord as much as a shopping question for the tenant, and our{" "}
        <a href="/guides/landlord-pest-control">landlord guide</a> covers that
        side of it.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Product Does Not Work</h2>
      <p>
        <strong>As a spray or a fogger.</strong> UC IPM is direct:{" "}
        <em>
          &ldquo;Avoid using foggers, bombs, or aerosol sprays; these products
          can be hazardous and may repel and disperse cockroaches to other areas
          without actually killing them.&rdquo;
        </em>{" "}
        and{" "}
        <em>&ldquo;Insecticide sprays do not provide long-term control.&rdquo;</em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). That is why no spray is carded here.
      </p>
      <p>
        <strong>Without the cleaning and the sealing.</strong>{" "}
        <em>
          &ldquo;Good sanitation and exclusion are important for effective
          control; pesticides alone will not solve cockroach problems.&rdquo;
        </em>{" "}
        A gel placed in a kitchen that still offers food and water is competing
        with the food and the water.
      </p>
      <p>
        <strong>As proof of anything, on its own.</strong> The traps tell you
        where activity is and whether it is falling. They do not treat, and a
        trap catching nothing in the wrong place is not evidence of success.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Bait or monitor — they do different jobs</h3>
      <p>
        One product treats and one measures. UC IPM&rsquo;s guidance is to use
        traps to monitor populations and to check them until you can tell where
        the most cockroaches are being caught; the gel is what acts on the
        population once you know.
      </p>
      <h3>2. Why the third category is not here</h3>
      <p>
        The title of this page used to promise sprays. UC IPM states that{" "}
        <em>&ldquo;When using insecticides, baits provide better control than sprays.&rdquo;</em>{" "}
        Carding a spray to make a page title true would put a product here that
        the page&rsquo;s own source advises against, so the title changed
        instead.
      </p>
      <h3>3. What the listing states about the active</h3>
      <p>
        The gel names imidacloprid; the traps name no active at all, because a
        glue board has none. That is the difference between a product with label
        conditions and one without.
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
                "Six 10g syringes of gel with imidacloprid named as the active and cockroach as the listed target species, supplied with a ready-to-use applicator. Its maker's claims about strength and eradication are its own and are not restated here; its detail table carries a different ASIN from the page fetched, which the card says.",
                "Twelve fold-together sticky traps supplied with bait pellets, listed for ants, cockroaches and spiders and for placing in kitchen corners, cupboards and behind furniture. Its brand row reads Rentokil and its manufacturer row reads Trapro; both are on the listing and both are on the card.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      {/* NEVER TOUCH — the highest-rated-product paragraph, reproduced byte-for-byte. */}
      <p>
        Choosing the right cockroach killer is not simply a matter of picking
        the highest-rated product on Amazon. The effectiveness of your treatment
        depends on understanding how different product types work, which species
        you are dealing with, and how to apply products correctly. Here are the
        key factors to consider before making your purchase.
      </p>
      <p>
        <strong>Take away the food and the water.</strong> UC IPM&rsquo;s list is
        specific: store food in sealed containers, keep trash in bins with
        tight-fitting lids, fix plumbing leaks, and vacuum cracks and crevices
        where crumbs collect.
      </p>
      <p>
        <strong>Seal the ways in.</strong> Its exclusion advice names sealing
        cracks and openings and fitting door sweeps and weather stripping — the
        same measures that keep out most of what else walks in.
      </p>
      <p>
        <strong>Get an identification.</strong> UC IPM says to identify the
        species before taking action, because effective management varies by
        species, and that sticky traps are useful for catching roaches for
        identification.
      </p>

      {/* Using them */}
      <h2 id="using">Placing Them</h2>
      <ol>
        <li>
          <strong>Trap first, then treat.</strong> Place the sticky traps and
          check them until you can see where the activity is.
        </li>
        <li>
          <strong>Read the gel&rsquo;s label.</strong> It governs placement and
          quantity; the card is a description, not an instruction.
        </li>
        <li>
          <strong>Put bait near harbourage, not in the open.</strong> UC IPM
          describes cockroaches hiding by day in warm, dark, moist cracks and
          coming out at night to feed.
        </li>
        <li>
          <strong>Do the sanitation at the same time.</strong> Pesticides alone
          will not solve it, on the same source&rsquo;s account.
        </li>
        <li>
          <strong>Give it time and keep counting.</strong> UC IPM notes it may
          take 7 days or longer before you see fewer cockroaches.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Two Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Pack, as listed</th>
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
        heading="A cockroach problem in a shared or rented building?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
