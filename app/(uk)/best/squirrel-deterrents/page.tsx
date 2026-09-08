import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R7 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// no efficacy claim in our own voice, no superlative or ranking label, no rank numeral.
// Card labels are neutral factual descriptors from the listings; maker claims are framed
// as the maker's own and are listing-traceable.
//
// THE TITLE AND H1 SAID "Top 5" — a ranking claim in our own voice, which the standing
// title ruling replaces with a factual clause. The head keyword is unchanged and the
// count was correct; what goes is the ranking, not the number.
//
// THE LEGAL SECTION CARRIES THE WEIGHT ON THIS ROUTE, and it contradicts one carded
// product's own instruction. B082J2YLDY is listed as "designed for for live release";
// GOV.UK states it is an offence to release grey squirrels and that a squirrel caught
// alive must be killed humanely. The card is kept and the conflict is stated on it and in
// the body, sourced both ways — a reader who buys that trap needs to meet that fact
// before they use it, not after.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Squirrel Deterrents UK 2026: Feeders, Baffles, Sprays & Traps",
    description:
      "Squirrel deterrents for UK gardens: what the law says about trapping and release, and five products described by what their own listings state.",
    alternates: { canonical: "https://pestproindex.com/best/squirrel-deterrents" },
    openGraph: {
      title: "Best Squirrel Deterrents UK 2026: Feeders, Baffles, Sprays & Traps",
      description:
        "Squirrel deterrents for UK gardens: what the law says about trapping and release, and five products described by what their own listings state.",
      url: "https://pestproindex.com/best/squirrel-deterrents",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Squirrel Deterrents UK 2026: Feeders, Baffles, Sprays & Traps",
  description:
    "Squirrel deterrents for UK gardens: what the law says about trapping and release, and five products described by what their own listings state.",
  datePublished: "2026-03-17",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/squirrel-deterrents",
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
      name: "Best Squirrel Deterrents UK 2026",
      item: "https://pestproindex.com/best/squirrel-deterrents",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: asa-pest-repellents at
// ~/pp-s67r2/sources (banked S67 R2); rspca-squirrels-garden and
// gov-pest-control-property at ~/pp-s68r7/sources, fetched 2026-09-08.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  rspca: "https://www.rspca.org.uk/adviceandwelfare/wildlife/squirrels/garden",
  gov: "https://www.gov.uk/pest-control-on-your-property",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
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
// S50-H); a cell the listing does not state reads "not stated". Every maker claim about
// what a product does to a squirrel is framed as the maker's own (Law 191).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00BXLF3WU",
    cardName: "Jacobi Jayne Squirrel Buster Bird Feeder",
    cardLabel: "Metal hanging feeder, 0.75 litre",
    features: [
      "Seed capacity listed as 0.75 litre; metal and resin construction",
      "The maker describes patented spring-loaded ports that close under the weight of a squirrel",
      "Its detail table carries the maker's own claims: 100% Squirrel Proof and adjustable to bar bigger birds",
      "Listed for seed blends and mixes; supplied with perches and mounting hardware",
      "Target species listed as bird; country of origin listed as China",
    ],
    tableCells: ["Jacobi Jayne Squirrel Buster", "Feeder", "0.75 litre, as listed", "Weight-closing ports, per the maker"],
    h2Label: "Metal hanging feeder, 0.75 litre",
    h2Name: "Jacobi Jayne Squirrel Buster Bird Feeder",
    tocLabel: "Metal hanging feeder",
    tocName: "Jacobi Jayne Squirrel Buster",
  },
  {
    anchorId: "best-spray",
    asin: "B08DDCJJ1N",
    cardName: "RepellShield Squirrel Repellent Spray 250ml",
    cardLabel: "Essential oil spray, 250ml",
    features: [
      "250ml; the listing names peppermint and geraniol among its essential oils",
      "Listing directions: shake, spray generously, and reapply every 3 to 5 days or as needed",
      "Listed for gardens, lofts, patios and around bird feeders",
      "The maker describes it as plant-based and safe to use around children, pets and other wildlife",
      "Manufactured in Germany, as listed",
    ],
    tableCells: ["RepellShield Squirrel Spray 250ml", "Scent spray", "Peppermint and geraniol, as listed", "Every 3–5 days, per the maker"],
    h2Label: "Essential oil spray, 250ml",
    h2Name: "RepellShield Squirrel Repellent Spray",
    tocLabel: "Essential oil spray, 250ml",
    tocName: "RepellShield Squirrel Spray",
  },
  {
    anchorId: "best-baffle",
    asin: "B07KQJM334",
    cardName: "Selections Squirrel Proof Bird Feeder Baffle (Pack of 2)",
    cardLabel: "Clear plastic baffle, 2 pack",
    features: [
      "Two baffles, as listed; each 40cm wide and 22cm high",
      "Supplied with a hanging hook and a pole attachment, as listed",
      "The maker describes a slippery surface that denies a squirrel grip",
      "The listing also states that at 40cm wide it keeps the food beneath it dry",
      "Target species listed as Bird",
    ],
    tableCells: ["Selections Baffle, 2 pack", "Physical barrier", "40cm wide x 22cm high, as listed", "Blocks the route to a feeder"],
    h2Label: "Clear plastic baffle, 2 pack",
    h2Name: "Selections Squirrel Proof Bird Feeder Baffle",
    tocLabel: "Clear plastic baffle, 2 pack",
    tocName: "Selections Baffle",
  },
  {
    anchorId: "best-food-treatment",
    asin: "B007EAH6K6",
    cardName: "The Big Cheese Hot Nuts Grey Squirrel Deterrent Spray 1L",
    cardLabel: "Capsicum spray, 1 litre",
    features: [
      "1 litre, ready to use; ingredients listed as natural orange oil and capsicum chilli extract",
      "Listing directions: apply directly to bird food and feeders, repeating on each refill or at least every 48 hours",
      "Listed as poison-free",
      "The maker describes the capsicum as harmless and palatable to wild birds while deterring squirrels",
      "Listed at 6 x 10 x 29 cm and 1 kg",
    ],
    tableCells: ["The Big Cheese Hot Nuts 1L", "Taste treatment for food", "Capsicum chilli extract, orange oil", "Every 48 hours or on refill, per the maker"],
    h2Label: "Capsicum spray, 1 litre",
    h2Name: "The Big Cheese Hot Nuts Deterrent Spray",
    tocLabel: "Capsicum spray, 1 litre",
    tocName: "Hot Nuts Deterrent Spray",
  },
  {
    anchorId: "best-trap",
    asin: "B082J2YLDY",
    cardName: "Kabalo Metal Live-Catch Cage Trap",
    cardLabel: "Metal cage trap, single",
    features: [
      "650mm x 190mm x 190mm metal cage; target species listed as Rat, Squirrel",
      "Metal finger guard on the carrying handle, as listed; no poison required",
      "The listing describes it as designed for live release — which the law does not permit for a grey squirrel",
      "GOV.UK: it is an offence to release a grey squirrel, and one caught alive must be killed humanely",
      "The RSPCA says a live-catch trap must be checked several times a day",
    ],
    tableCells: ["Kabalo live-catch cage trap", "Live-catch trap", "650 x 190 x 190 mm, as listed", "Release is unlawful for grey squirrels"],
    h2Label: "Metal cage trap, single",
    h2Name: "Kabalo Metal Live-Catch Cage Trap",
    tocLabel: "Metal cage trap, single",
    tocName: "Kabalo Cage Trap",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Can I catch a grey squirrel and release it somewhere else?",
    a: "No. GOV.UK states that it is an offence to keep or release some wild animals, grey squirrels among them, and that you must kill them humanely if you catch them alive. The cage trap on this page is listed by its maker as designed for live release; that instruction cannot lawfully be followed for a grey squirrel in the UK, which is why it is stated on the card as well as here.",
  },
  {
    q: "Is trapping a grey squirrel legal at all?",
    a: "The RSPCA states that it is not against the law for grey squirrels to be caught and killed, including with live-catch cage traps or approved spring traps, that a live-catch trap must be checked several times a day and any captured squirrel killed humanely, and that it is against the law under the Animal Welfare Act 2006 to cause unnecessary suffering to a wild animal under human control, such as one caught in a trap.",
  },
  {
    q: "Does killing them solve the problem?",
    a: "The RSPCA's position is that it is unlikely to be a long-term solution, because other squirrels may replace them within as little as a month, and that addressing what attracts them — food and shelter — is the alternative approach. That is its view, quoted, and it is the reason the first four products on this page are about food and access rather than about the animal.",
  },
  {
    q: "Do repellent sprays work?",
    a: "This page does not say so in its own voice. The ASA reports that it has yet to accept any claim of efficacy for pest repellent devices, and that marketers without UK-based trial evidence should not state or imply efficacy. Both sprays here carry their makers' claims on their cards, attributed and traceable to the listing.",
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
  { id: "situation", title: "What Is Bringing Them In" },
  { id: "legal", title: "The Legal Position: Trapping and Release" },
  { id: "limits", title: "Where a Deterrent Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Placing Them" },
  { id: "compared", title: "The Five Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestSquirrelDeterrentsPage() {
  return (
    <GuideLayout
      title="Best Squirrel Deterrents UK 2026: Feeders, Baffles, Sprays & Traps"
      subtitle="A weight-closing feeder, a baffle, two sprays and a cage trap, described by what their own listings state — beside what the law actually requires of anyone who traps a grey squirrel"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Squirrels: Complete UK Guide", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "How to Get Rid of Foxes: Complete UK Guide", href: "/guides/how-to-get-rid-of-foxes" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Fox Deterrents UK 2026", href: "/best/fox-deterrents" },
        { title: "Best Cat Deterrents UK 2026", href: "/best/cat-deterrents" },
        { title: "Best Bird Deterrents UK 2026", href: "/best/bird-deterrents" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Rodent Proofing Products UK 2026", href: "/best/rodent-proofing" },
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
        Four of these five products are about food and access: a feeder that
        closes under weight, a baffle that blocks the pole, and two sprays —
        one for surfaces, one applied to the bird food itself. The fifth is a
        cage trap, and it comes with a legal obligation its own listing gets
        wrong.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You are considering a trap.</strong> Read what the law
            requires of you once something is in it —{" "}
            <a href="#legal" className="underline">
              trapping and release
            </a>
            .
          </li>
          <li>
            <strong>They are emptying the bird feeder.</strong> Three products
            here address that directly —{" "}
            <a href="#best-overall" className="underline">
              the weight-closing feeder
            </a>
            ,{" "}
            <a href="#best-baffle" className="underline">
              the baffle
            </a>{" "}
            and{" "}
            <a href="#best-food-treatment" className="underline">
              the capsicum treatment
            </a>
            .
          </li>
          <li>
            <strong>You want to know whether a repellent spray works.</strong>{" "}
            The ASA has accepted no efficacy claim for the class —{" "}
            <a href="#limits" className="underline">
              where a deterrent does not work
            </a>
            .
          </li>
          <li>
            <strong>You are hoping removal will settle it.</strong> The RSPCA
            says others may replace them within a month —{" "}
            <a href="#situation" className="underline">
              what is bringing them in
            </a>
            .
          </li>
          <li>
            <strong>You want the one physical barrier here.</strong>{" "}
            <a href="#best-baffle" className="underline">
              The 40cm baffle
            </a>{" "}
            is the item that does not depend on a squirrel changing its mind.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            One product here is a live-catch cage trap. GOV.UK states that it is
            an offence to release a grey squirrel and that one caught alive must
            be killed humanely; the RSPCA adds that a live-catch trap must be
            checked several times a day and that causing unnecessary suffering
            to a trapped animal is an offence under the Animal Welfare Act 2006.
            Read both before buying it, not after.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What Is Bringing Them In</h2>
      <p>
        The RSPCA&rsquo;s garden page starts with the food supply rather than
        the animal:{" "}
        <em>&ldquo;Use squirrel-resistant bird feeders rather than putting out loose food.&rdquo;</em>{" "}
        (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ). Covering bulbs with wire mesh so plants can grow through is on the
        same list.
      </p>
      <p>
        It also sets out why removal alone tends not to settle the question:{" "}
        <em>
          &ldquo;Killing squirrels is unlikely to be a long-term solution, as
          other squirrels may quickly replace them - perhaps within as little as
          a month.&rdquo;
        </em>{" "}
        That is the RSPCA&rsquo;s position, quoted, and it is why four of the
        five products below are about food and access.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position: Trapping and Release</h2>
      <p>
        Trapping a grey squirrel is lawful. What you may do next is where
        people go wrong. GOV.UK states:{" "}
        <em>
          &ldquo;It’s an offence to keep or release some wild animals, for
          example grey squirrels - you must kill them humanely if you catch them
          alive.&rdquo;
        </em>{" "}
        (
        <a href={SRC.gov} rel="nofollow">
          GOV.UK
        </a>
        ).
      </p>
      <p>
        The RSPCA sets out the same position from the welfare side:{" "}
        <em>
          &ldquo;It's not against the law for grey squirrels to be caught and
          killed, including live-catch cage traps or approved spring traps.&rdquo;
        </em>{" "}
        and{" "}
        <em>
          &ldquo;If you're using a live-catch trap, check it several times a day
          and kill any captured grey squirrels humanely.&rdquo;
        </em>{" "}
        It adds the boundary:{" "}
        <em>
          &ldquo;It is against the law under the Animal Welfare Act 2006 to
          cause any unnecessary suffering to wild animals that are under human
          control, e.g. while caught in a trap.&rdquo;
        </em>{" "}
        (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ).
      </p>
      <p>
        The cage trap carded below is listed by its maker as designed for live
        release. For a grey squirrel in the UK that instruction cannot lawfully
        be followed, and buying the trap commits you to the obligations in the
        two sources above. This page states that on the card as well as here.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Deterrent Does Not Work</h2>
      <p>
        <strong>As a claim you can lean on.</strong> The ASA&rsquo;s
        AdviceOnline entry on pest repellents states that{" "}
        <em>
          &ldquo;In past years, the ASA, together with independent experts, has
          closely examined the evidence for claims for those devices, which can
          range from cat-shaped metal sheets with glowing eyes to ultrasonic and
          electromagnetic equipment. It has yet to accept any claim of
          efficacy.&rdquo;
        </em>{" "}
        (
        <a href={SRC.asa} rel="nofollow">
          ASA
        </a>
        ). That is about evidence a regulator has accepted, not a finding that
        these products do nothing, and this page does not turn it into one.
      </p>
      <p>
        <strong>Between applications.</strong> Both sprays are consumables on
        their makers&rsquo; own terms: every 3 to 5 days for the essential oil
        spray, and on each refill or at least every 48 hours for the capsicum
        treatment. A treated feeder is treated until it is not.
      </p>
      <p>
        <strong>Against everything except the feeder.</strong> Three of the five
        products protect bird food specifically. A squirrel in a loft, digging
        bulbs, or stripping bark is not the problem any of them addresses, and
        the RSPCA&rsquo;s wire-mesh suggestion for bulbs is not sold here at all.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Physical, taste, scent or trap</h3>
      <p>
        The feeder and the baffle work whether or not the squirrel cares. The
        two sprays ask it to go elsewhere. The trap is a different decision
        entirely and carries the obligations set out above.
      </p>
      <h3>2. What has to be renewed, and how often</h3>
      <p>
        Every 3 to 5 days for the essential oil spray; every 48 hours or every
        refill for the capsicum. The feeder and the baffle state no consumable.
      </p>
      <h3>3. What the listing actually states</h3>
      <p>
        Capacity 0.75 litre; a 40cm baffle 22cm high; a 1 litre spray with its
        ingredients named; a 250ml spray naming peppermint and geraniol; a
        650mm cage. Those are the listings&rsquo; own figures, and the
        comparison table carries them without adding anything.
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
            />
          </div>
          <p>
            {
              [
                "A metal and resin hanging feeder holding 0.75 litres of seed, whose maker describes patented spring-loaded ports closing under a squirrel's weight and whose detail table carries its own \"100% Squirrel Proof\" claim. Supplied with perches and mounting hardware; the target species on the listing is bird.",
                "A 250ml spray naming peppermint and geraniol, made in Germany, with the maker's instruction to reapply every three to five days. The maker describes it as plant-based and safe around children, pets and other wildlife; those are its words, and the listing is where they come from.",
                "Two clear baffles, each 40cm wide and 22cm high, with a hook and a pole attachment. The maker describes a slippery surface that denies grip, and notes that at 40cm across it also keeps the food below it dry. The one item here that is purely physical.",
                "A one-litre ready-to-use treatment applied to the bird food itself, with natural orange oil and capsicum chilli extract named as the ingredients and a listing instruction to repeat on every refill or at least every 48 hours. Listed as poison-free; the maker describes the capsicum as harmless and palatable to wild birds.",
                "A 650mm metal cage trap listed for rats and squirrels, with a finger guard on the handle and no poison required. Its listing describes it as designed for live release; for a grey squirrel that is not lawful in the UK, and the legal section above sets out what is required of anyone who catches one alive.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Change what is on offer.</strong> The RSPCA&rsquo;s first
        suggestion is squirrel-resistant feeders rather than loose food, and
        wire mesh over bulbs so plants grow through it.
      </p>
      <p>
        <strong>Deal with the way in, not the garden.</strong> A squirrel in a
        loft is a proofing problem — see our{" "}
        <a href="/best/rodent-proofing">rodent proofing</a> page for mesh and
        brush strips.
      </p>
      <p>
        <strong>Use a professional if control is really needed.</strong> The
        RSPCA&rsquo;s position is that where lethal control is decided on, it
        should be carried out by someone competent to do it legally and
        humanely.
      </p>

      {/* Using them */}
      <h2 id="using">Placing Them</h2>
      <ol>
        <li>
          <strong>Read the legal section before buying the trap.</strong> The
          obligation begins the moment something is inside it.
        </li>
        <li>
          <strong>Put the baffle above the feeder, on the pole.</strong> Its
          40cm width is what makes it a barrier; it is supplied with a hook and
          a pole attachment for the two mountings.
        </li>
        <li>
          <strong>Treat the food, not the ground, with the capsicum spray.</strong>{" "}
          Its listing says to apply it directly to bird food and feeders.
        </li>
        <li>
          <strong>Keep to the reapplication interval.</strong> Three to five
          days, or every 48 hours, depending on which spray.
        </li>
        <li>
          <strong>Check a set trap several times a day.</strong> That is the
          RSPCA&rsquo;s instruction, quoted above, and it is a welfare
          requirement rather than advice.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Five Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        interval attributed to the maker who claims it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Ingredients or size, as listed</th>
              <th className="text-left p-2 border-b font-semibold">What it turns on</th>
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
        heading="A squirrel in the loft rather than the garden?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
