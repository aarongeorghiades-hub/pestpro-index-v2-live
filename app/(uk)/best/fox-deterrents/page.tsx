import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R7 — ROLLOUT REBUILD to the R8 pattern, on sources. LAW 191 GOVERNS THIS ROUTE:
// no efficacy claim in our own voice, no superlative or ranking label, no rank numeral.
// Card labels are neutral factual descriptors from the listings; maker claims are framed
// as the maker's own.
//
// ONE CARD IS REMOVED UNDER THE S67 R10 STANDING RULING: B0BMNP26FP, carded here as a
// "Coyote Roller Fence Top Spinning Bar". Its fetched title is "Coyote Roller 8 Foot Kit
// - Keep Pets Contained, Coyotes Out - Cats, Dogs, Coyotes, Bird Repellent - Chain Link"
// and its description is about coyotes, made and assembled in the USA, "Effective for
// coyotes, dogs, cats, and even keep birds from landing on your fence". IT NAMES NO FOX
// ANYWHERE. The page previously kept it with a disclosure that "our view that it works on
// a fox rests on the climbing mechanism its maker describes rather than on anything its
// maker says about foxes" — which is exactly the own-voice efficacy inference Law 191
// forbids on this route. The product stays carded on /us/coyotes, where its listing fits.
// Its supporting prose — the aluminium construction, the fox dropping back to the ground,
// the afternoon's DIY — was on no listing and goes with it.
//
// THE <title> IS UNCHANGED and now matches the cards exactly: scent, sprinkler and mesh.
// The H1 and the meta description named the roller and no longer do.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Fox Deterrents UK 2026 — Scent, Sprinkler & Mesh",
    description:
      "Fox deterrents for UK gardens: what the law allows, what the RSPCA advises before any product, and three items described by what their own listings state.",
    alternates: { canonical: "https://pestproindex.com/best/fox-deterrents" },
    openGraph: {
      title: "Best Fox Deterrents UK 2026 — Scent, Sprinkler & Mesh",
      description:
        "Fox deterrents for UK gardens: what the law allows, what the RSPCA advises before any product, and three items described by what their own listings state.",
      url: "https://pestproindex.com/best/fox-deterrents",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Fox Deterrents UK 2026 — Scent, Sprinkler & Mesh",
  description:
    "Fox deterrents for UK gardens: what the law allows, what the RSPCA advises before any product, and three items described by what their own listings state.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/fox-deterrents" },
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
      name: "Best Fox Deterrents UK 2026",
      item: "https://pestproindex.com/best/fox-deterrents",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: asa-pest-repellents at
// ~/pp-s67r2/sources (banked S67 R2); rspca-foxes-garden at ~/pp-s68r7/sources, fetched
// 2026-09-08.
const SRC = {
  asa: "https://www.asa.org.uk/advice-online/pest-repellents.html",
  rspca: "https://www.rspca.org.uk/adviceandwelfare/wildlife/foxes/garden",
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
// S50-H); a cell the listing does not state reads "not stated".
//
// THE MESH LISTING CONTRADICTS ITSELF ON ONE POINT AND BOTH READINGS ARE RENDERED
// (Law 146): its title says "Welded Mesh Wire ... Hexagonal Wire" and its description
// calls it a "Hexagonal Welded Wire Mesh Roll". Its detail table also carries a different
// ASIN, B0C8NLCKJK — a variant listing — which is stated on the card rather than hidden.
const products: ProductRecord[] = [
  {
    anchorId: "best-scent",
    asin: "B00FAMLXAE",
    cardName: "Scoot Fox Repellent Concentrate 100g",
    cardLabel: "Scent concentrate, 100g",
    features: [
      "100g of concentrate, listed as two sachets treating up to 34 sqm",
      "Active listed as aluminium ammonium sulphate",
      "The maker describes it as working by creating an artificial scentmark in the problem fox's territory",
      "Listed for lawns, trees, shrubs, seeds, bulbs and hard surfaces; outdoor use",
      "The listing also names badgers, cats, deer, mink and rabbits",
    ],
    tableCells: ["Scoot Fox Repellent 100g", "Scent, applied to ground", "Aluminium ammonium sulphate", "Up to 34 sqm, per the maker"],
    h2Label: "Scent concentrate, 100g",
    h2Name: "Scoot Fox Repellent Concentrate",
    tocLabel: "Scent concentrate, 100g",
    tocName: "Scoot Fox Repellent",
  },
  {
    anchorId: "best-sprinkler",
    asin: "B0153BJ7NQ",
    cardName: "PestBye Jet Spray Repeller — Motion Activated, Hose-Fed",
    cardLabel: "Motion sprinkler, hose-fed",
    features: [
      "Connects to a garden hose; battery powered, as listed",
      "The maker states a range of up to 10m across a 120-degree arc, covering at least 100 sqm",
      "The maker states a 5-second burst of water on each trigger, and that it resets itself",
      "Adjustable sensitivity, as listed; 2 year warranty",
      "Listed at 20 x 7 x 71 cm and 0.7 kg",
    ],
    tableCells: ["PestBye Jet Spray Repeller", "Water, motion-triggered", "None — water only", "At least 100 sqm, per the maker"],
    h2Label: "Motion sprinkler, hose-fed",
    h2Name: "PestBye Jet Spray Motion-Activated Repeller",
    tocLabel: "Motion sprinkler",
    tocName: "PestBye Jet Spray",
  },
  {
    anchorId: "best-mesh",
    asin: "B08MWB89CB",
    cardName: "Galvanised Welded Wire Mesh 0.6m x 5m, 25mm Holes",
    cardLabel: "Galvanised mesh, 0.6 x 5m",
    features: [
      "0.6m high by 5m long, as listed; 25mm x 25mm holes",
      "Galvanised steel, wire diameter listed as 0.7mm",
      "Listed as cuttable and bendable with wire cutters, for indoor or outdoor use",
      "The listing calls it both welded and hexagonal — its title says welded, its description says Hexagonal Welded Wire Mesh Roll",
      "The detail table carries a different ASIN, B0C8NLCKJK — a variant listing",
    ],
    tableCells: ["Galvanised welded mesh 0.6 x 5m", "Physical barrier", "None", "0.6m x 5m, 25mm holes, as listed"],
    h2Label: "Galvanised mesh, 0.6 x 5m",
    h2Name: "Galvanised Welded Wire Mesh, 25mm Holes",
    tocLabel: "Galvanised mesh",
    tocName: "Galvanised Welded Mesh",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "Is it legal to deter foxes from my garden?",
    a: "Deterring is not the problem; harming is. The RSPCA states that foxes are protected by the Wild Mammals (Protection) Act 1996, that it is illegal to cruelly mistreat or get rid of a fox by harming it in any way, and — the line that matters most on a page selling deterrents — that it is also against the law to use any substance as a deterrent that has not been approved for such use.",
  },
  {
    q: "Do fox repellents work?",
    a: "This page does not say so in its own voice. The ASA reports that it has yet to accept any claim of efficacy for pest repellent devices, and that marketers without UK-based trial evidence should not state or imply efficacy. What each maker claims for its own product is on its card, framed as the maker's.",
  },
  {
    q: "What does the RSPCA suggest before any product?",
    a: "Removing the food. Its garden page lists using bird feeders that stop food spilling onto the ground, sealing bins and composters securely, clearing fallen fruit and pet food, and keeping rabbits and other pets in a secure enclosure at night. None of that is a purchase.",
  },
  {
    q: "Will 25mm mesh keep a fox out?",
    a: "The mesh here is 0.6m high with 25mm holes, and the RSPCA's own suggestion for protecting crops is fences or solid weld-mesh with holes at least 4cm wide, avoiding flexible netting because wildlife can become tangled in it. The mesh on this page has smaller holes than that figure and is a 0.6m roll rather than a fence; it is stated here as what it is.",
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
  { id: "situation", title: "Start With the Food" },
  { id: "legal", title: "The Legal Position" },
  { id: "limits", title: "Where a Deterrent Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Placing Them" },
  { id: "compared", title: "The Three Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestFoxDeterrentsPage() {
  return (
    <GuideLayout
      title="Best Fox Deterrents UK 2026 &mdash; Scent, Sprinkler & Mesh"
      subtitle="A scent concentrate, a motion-activated sprinkler and a roll of galvanised mesh, described by what their own listings state — beside what the law allows and what the RSPCA suggests doing first"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Foxes: Complete UK Guide", href: "/guides/how-to-get-rid-of-foxes" },
        { title: "How to Get Rid of Rats: Complete UK Guide", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Squirrels: Complete UK Guide", href: "/guides/how-to-get-rid-of-squirrels" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Pigeon Control: Complete UK Guide", href: "/guides/pigeon-control" },
      ]}
      relatedProducts={[
        { title: "Best Cat Deterrents UK 2026", href: "/best/cat-deterrents" },
        { title: "Best Squirrel Deterrents UK 2026", href: "/best/squirrel-deterrents" },
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
        Three things: a scent concentrate applied to the ground, a sprinkler
        that fires when something moves, and a roll of galvanised mesh. Two ask
        a fox to go elsewhere and one is a physical barrier. Before any of
        them, there is a legal line and a piece of RSPCA advice that costs
        nothing.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You want to know what you may lawfully use.</strong> An
            unapproved substance used as a deterrent is against the law —{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>Something is drawing them in.</strong> The RSPCA puts food
            first, and it is free —{" "}
            <a href="#situation" className="underline">
              start with the food
            </a>
            .
          </li>
          <li>
            <strong>You want a scent product with a named active.</strong>{" "}
            <a href="#best-scent" className="underline">
              The Scoot concentrate
            </a>{" "}
            names aluminium ammonium sulphate and a treated area.
          </li>
          <li>
            <strong>You have a hose and a run they use.</strong>{" "}
            <a href="#best-sprinkler" className="underline">
              The motion sprinkler
            </a>{" "}
            claims 10m across a 120-degree arc.
          </li>
          <li>
            <strong>You need to protect a specific bed or run.</strong>{" "}
            <a href="#best-mesh" className="underline">
              The mesh
            </a>{" "}
            is the only physical item here — and read the RSPCA&rsquo;s own
            figure on hole size before you buy it.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The RSPCA states that foxes are protected by the Wild Mammals
            (Protection) Act 1996, and that it is against the law to use any
            substance as a deterrent that has not been approved for such use.
            That applies to anything you might mix yourself as much as to
            anything sold for the purpose.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Start With the Food</h2>
      <p>
        The RSPCA&rsquo;s garden page puts removing the food source ahead of
        any purchase, and its list is specific:{" "}
        <em>&ldquo;Use bird feeders that stop food from spilling onto the ground.&rdquo;</em>{" "}
        and{" "}
        <em>&ldquo;Seal bins and composters securely, to prevent access to scraps.&rdquo;</em>{" "}
        (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ). Fallen fruit and pet food left out are on the same list.
      </p>
      <p>
        None of that is a product, and none of it is on this page to sell. It
        is first because a garden that still offers food is a garden a fox has
        a reason to return to, whatever else is in it.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position</h2>
      <p>
        <em>&ldquo;Foxes are protected by the Wild Mammals (Protection) Act 1996&rdquo;</em>,
        the RSPCA states, and it is illegal to cruelly mistreat one or to get
        rid of a fox from a garden by harming it in any way (
        <a href={SRC.rspca} rel="nofollow">
          RSPCA
        </a>
        ).
      </p>
      <p>
        The sentence that bears directly on this page is the next one:{" "}
        <em>
          &ldquo;It’s also against the law to use any substance as a deterrent
          that hasn’t been approved for such use.&rdquo;
        </em>{" "}
        A repellent bought for the purpose is one thing; a homemade mixture,
        or a product sold for something else and repurposed, is another. The
        one scent product here names its active substance on its listing, which
        is the minimum a reader needs to check that question at all.
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
        and that{" "}
        <em>
          &ldquo;Marketers who do not hold evidence in the form of UK-based
          trials should not state or imply efficacy for the products, through
          either claims, visuals or product names.&rdquo;
        </em>{" "}
        (
        <a href={SRC.asa} rel="nofollow">
          ASA
        </a>
        ). That is about evidence accepted by a regulator; it is not a finding
        that these products do nothing, and this page does not make that
        finding.
      </p>
      <p>
        <strong>On mesh, at this hole size.</strong> The RSPCA&rsquo;s own
        suggestion for protecting crops is{" "}
        <em>
          &ldquo;Protect fruit or vegetable crops using fences or solid
          weld-mesh, with holes at least 4cm wide (don’t use flexible netting as
          there’s a risk of wildlife getting tangled or caught in it).&rdquo;
        </em>{" "}
        The mesh carded here has 25mm holes — smaller than that figure — and
        stands 0.6m high. It is a roll for protecting a bed or a run, not a
        fence, and the card says so.
      </p>
      <p>
        <strong>Beyond the area it covers.</strong> Two sachets treating up to
        34 sqm, and a sprinkler arc of at least 100 sqm, are the makers&rsquo;
        own figures for their own products. A fox entering somewhere else has
        not defeated the product; it never met it.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Scent, water or barrier</h3>
      <p>
        Only one of the three is physical. The other two depend on a fox
        choosing to go elsewhere, which is the question the ASA&rsquo;s position
        above is about.
      </p>
      <h3>2. What has to be renewed</h3>
      <p>
        The scent concentrate is applied and reapplied; the sprinkler needs a
        hose connection and batteries; the mesh needs nothing once it is up.
        That is a running-cost difference the listings state plainly.
      </p>
      <h3>3. The area each listing claims</h3>
      <p>
        Up to 34 sqm from two sachets, at least 100 sqm for the sprinkler, and
        0.6m by 5m of mesh. Those are three different kinds of figure and the
        comparison table keeps them apart rather than adding them up.
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
                "A 100g concentrate in two sachets, listed as treating up to 34 sqm of lawn, trees, shrubs, seeds, bulbs or hard surfaces, with aluminium ammonium sulphate named as the active. Its maker describes the mechanism as an artificial scentmark placed in the problem fox's territory; the listing also names badgers, cats, deer, mink and rabbits.",
                "A battery-powered sprinkler that connects to a garden hose and fires a five-second burst when its sensor triggers, which the maker rates at up to 10m across a 120-degree arc and at least 100 sqm. Sensitivity is adjustable and the unit resets itself, per the listing; it is 71cm tall and carries a two-year warranty.",
                "A 0.6m by 5m roll of galvanised steel mesh with 25mm holes and 0.7mm wire, listed as cuttable to size for indoor or outdoor use. The listing calls it welded in its title and hexagonal in its description, and its detail table carries a different ASIN; both are stated on the card rather than resolved here.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Take the food away first.</strong> Feeders that do not spill,
        sealed bins and composters, fallen fruit cleared — the RSPCA&rsquo;s own
        list, quoted above.
      </p>
      <p>
        <strong>Secure what you are protecting.</strong> The RSPCA advises
        keeping pets such as rabbits indoors or in a secure enclosure with a
        solid roof at night. That is a stronger measure than any scent.
      </p>
      <p>
        <strong>Deal with an earth properly.</strong> The RSPCA describes
        checking a hole is unoccupied before blocking it — loose soil or sticks
        first, and only packing it once undisturbed for several days. Our{" "}
        <a href="/guides/how-to-get-rid-of-foxes">fox guide</a> covers that
        sequence.
      </p>

      {/* Using them */}
      <h2 id="using">Placing Them</h2>
      <ol>
        <li>
          <strong>Check the product is approved for the use.</strong> That is
          the RSPCA&rsquo;s legal line and it comes before placement.
        </li>
        <li>
          <strong>Treat the run, not the lawn.</strong> The scent listing names
          the fox&rsquo;s territory and the surfaces it may go on; the sprinkler
          covers an arc from where it stands.
        </li>
        <li>
          <strong>Connect the sprinkler to a live hose.</strong> It has no
          reservoir; without water it does nothing at all.
        </li>
        <li>
          <strong>Fix the mesh to something.</strong> A 0.6m roll protects a bed
          or a run when it is fixed to a frame, and does nothing loose.
        </li>
        <li>
          <strong>Reapply the scent.</strong> Both sachets treat up to 34 sqm
          once; rain and time are why this is a consumable.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Three Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        coverage figure attributed to the maker who claims it. Where a listing
        does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Area or size, as listed</th>
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
        heading="A fox problem you cannot resolve yourself?"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
