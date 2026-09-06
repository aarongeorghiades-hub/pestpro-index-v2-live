import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
    description:
      "Rodent proofing materials for UK homes: galvanised wire mesh, stainless steel wool fill fabric, drain guards, door brush strips and proofing paste compared.",
    alternates: {
      canonical: "https://pestproindex.com/best/rodent-proofing",
    },
    openGraph: {
      title:
        "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
      description:
        "Rodent proofing materials for UK homes: galvanised wire mesh, stainless steel wool fill fabric, drain guards, door brush strips and proofing paste compared.",
      url: "https://pestproindex.com/best/rodent-proofing",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rodent Proofing Products UK 2026 | Mesh, Wool & Drain Guards",
  description:
    "Rodent proofing materials for UK homes: galvanised wire mesh, stainless steel wool fill fabric, drain guards, door brush strips and proofing paste compared.",
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
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
    "@id": "https://pestproindex.com/best/rodent-proofing",
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
      name: "Best Rodent Proofing Products UK 2026",
      item: "https://pestproindex.com/best/rodent-proofing",
    },
  ],
};

// S67 R6 — ONE ARRAY. The visible block below and the FAQPage schema both render
// from this and only this, so the two surfaces cannot disagree again. The visible
// block was authoritative where they did disagree.
const faqs = [
  {
    q: "How small a gap can a mouse get through?",
    a: "About 6mm. That is why proofing work is measured in millimetres rather than in obvious holes: the openings that matter are usually the ones nobody notices, around pipework, under doors and behind air bricks. It is also why mesh aperture is the single specification worth checking before you buy anything.",
  },
  {
    q: "Why use steel wool or wire mesh rather than filler on its own?",
    a: "Rodents gnaw. A soft filler used on its own can be worked through, so the usual approach is to pack the gap with a material that resists gnawing and then finish over it. Stainless steel wool fill fabric packs into irregular holes, welded wire mesh covers larger openings, and proofing paste can be applied over wire wool or mesh for extra strength.",
  },
  {
    q: "Do rats really come up through drains?",
    a: "Drains are a recognised route into a property, which is why one-way drain flaps exist. A stainless steel flap fitted to a 4 inch or 110mm pipe lets waste flow out and stops rats moving back up. The bolt on the Roshield guard reverses so the flap can be set to match the direction of flow.",
  },
  {
    q: "Is proofing a replacement for traps or bait?",
    a: "No. Proofing stops new rodents getting in; it does nothing about the ones already inside. The usual order is to deal with the current activity first and then close the entry points so the problem does not simply repeat. Proofing is what stops you buying bait again next winter.",
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

const products: ProductRecord[] = [
  {
    anchorId: "best-mesh",
    asin: "B07GWNN623",
    rank: 1,
    cardName: "Roshield Rodent Proofing Wire Mesh (6m x 900mm)",
    cardLabel: "Best Overall",
    features: [
      "Hot-dipped galvanised welded steel mesh",
      "6mm x 6mm aperture — too small for a mouse to pass through",
      "900mm wide, 6m long — enough for a run of air bricks or a soffit line",
      "Cuts with tin snips or strong scissors and shapes around pipework",
      "Suitable for internal or external use",
    ],
    tableCells: [
      "Roshield Rodent Proofing Wire Mesh",
      "Galvanised welded mesh",
      "Large Openings",
    ],
    h2Label: "Best Overall",
    h2Name: "Roshield Rodent Proofing Wire Mesh (6m × 900mm)",
    tocLabel: "Best Overall",
    tocName: "Roshield Rodent Proofing Wire Mesh",
  },
  {
    anchorId: "best-fill",
    asin: "B09P22PPJ2",
    rank: 2,
    cardName: "Xcluder Rodent Control Steel Wool Fill Fabric",
    cardLabel: "Best for Gaps & Holes",
    features: [
      "Stainless steel wool blend fill fabric supplied on a roll",
      "4 inch by 10 foot roll — tears and packs without tools",
      "Packs into irregular gaps and holes that mesh cannot cover",
      "Will not rust like plain steel wool",
      "Works as a base layer under proofing paste or filler",
    ],
    tableCells: [
      "Xcluder Rodent Control Steel Wool Fill Fabric",
      "Fill fabric roll",
      "Gaps & Holes",
    ],
    h2Label: "Best for Gaps & Holes",
    h2Name: "Xcluder Rodent Control Steel Wool Fill Fabric",
    tocLabel: "Best for Gaps & Holes",
    tocName: "Xcluder Steel Wool Fill Fabric",
  },
  {
    anchorId: "best-drain",
    asin: "B07FKQLPFV",
    rank: 3,
    cardName: "Roshield Rat Drain Guard (Stainless Steel 4 inch / 110mm)",
    cardLabel: "Best for Drains",
    features: [
      "316 marine-grade stainless steel one-way flap",
      "Fits 4 inch / 110mm drain pipe",
      "Lets waste flow out and stops rats moving back up",
      "Installs by hand without tools",
      "Bolt reverses to match the direction of flow — made in the UK",
    ],
    tableCells: ["Roshield Rat Drain Guard", "One-way drain flap", "Drains"],
    h2Label: "Best for Drains",
    h2Name: 'Roshield Rat Drain Guard (Stainless Steel 4"/110mm)',
    tocLabel: "Best for Drains",
    tocName: "Roshield Rat Drain Guard",
  },
  {
    anchorId: "best-door",
    asin: "B00FO7OLA4",
    rank: 4,
    cardName: "Stormguard Door Brush Strip Draught Excluder (914mm)",
    cardLabel: "Best for Door Gaps",
    features: [
      "Aluminium carrier with brush pile",
      "Seals gaps up to 25mm under a door",
      "914mm long and cuts to size",
      "Pre-drilled fixing holes, fixings included",
      "Doubles as a draught excluder on the same fitting",
    ],
    tableCells: [
      "Stormguard Door Brush Strip Draught Excluder",
      "Brush pile strip",
      "Door Gaps",
    ],
    h2Label: "Best for Door Gaps",
    h2Name: "Stormguard Door Brush Strip Draught Excluder (914mm)",
    tocLabel: "Best for Door Gaps",
    tocName: "Stormguard Door Brush Strip",
  },
  {
    anchorId: "best-paste",
    asin: "B07VWCQ647",
    rank: 5,
    cardName: "Roshield Rodent Proofing Control Paste",
    cardLabel: "Best Finishing Seal",
    features: [
      "Non-toxic proofing paste for filling gaps",
      "Made from natural fibres and oils",
      "Soft core deters gnawing",
      "Suitable for food-preparation and storage areas",
      "Can be applied over wire wool or mesh for extra strength",
    ],
    tableCells: [
      "Roshield Rodent Proofing Control Paste",
      "Non-toxic paste",
      "Finishing Seal",
    ],
    h2Label: "Best Finishing Seal",
    h2Name: "Roshield Rodent Proofing Control Paste",
    tocLabel: "Best Finishing Seal",
    tocName: "Roshield Rodent Proofing Paste",
  },
];

const tocItems = [
  { id: "at-a-glance", title: "Rodent Proofing at a Glance" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.tocLabel} — ${p.tocName}`,
  })),
  { id: "buying-guide", title: "Rodent Proofing Buying Guide" },
  { id: "faq", title: "Rodent Proofing FAQ" },
  { id: "when-to-call", title: "When to Contact a Pest Control Professional" },
];

export default function BestRodentProofingPage() {
  return (
    <GuideLayout
      title="Best Rodent Proofing Products UK 2026: Mesh, Steel Wool &amp; Drain Guards"
      subtitle="Our pick of physical rodent proofing materials for UK homes — galvanised wire mesh, stainless steel wool fill fabric, drain guards, door brush strips and proofing paste compared."
      lastUpdated="August 2026"
      readingTime="11 min"
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
          title: "How to Pest-Proof Your Loft",
          href: "/guides/how-to-pest-proof-your-loft",
        },
        {
          title: "How to Pest-Proof Your Shed",
          href: "/guides/how-to-pest-proof-your-shed",
        },
        {
          title: "Autumn Pest Proofing Checklist",
          href: "/guides/autumn-pest-proofing",
        },
        {
          title: "Moving House Pest Checklist",
          href: "/guides/moving-house-pest-checklist",
        },
        {
          title: "Natural Mouse Deterrents",
          href: "/guides/natural-mouse-deterrents",
        },
        {
          title: "Natural Rat Deterrents",
          href: "/guides/natural-rat-deterrents",
        },
        {
          title: "Landlord Pest Control",
          href: "/guides/landlord-pest-control",
        },
      ]}
      relatedProducts={[
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Poison UK 2026", href: "/best/mouse-poison" },
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        {
          title: "Best Mouse Repellent UK 2026",
          href: "/best/mouse-repellent",
        },
        {
          title: "Best Rat Bait Stations UK 2026",
          href: "/best/rat-bait-stations",
        },
        {
          title: "Best Commercial Rodent Bait Stations",
          href: "/best/commercial-rodent-bait-stations",
        },
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

      {/* Intro paragraphs */}
      <p>
        Traps and bait deal with the rodents that are already in the building.
        Proofing deals with the reason they got in, and it is the only part of
        rodent control that stops the problem coming back. Most of the advice on
        this site ends in the same place &mdash; find the entry points and close
        them &mdash; and yet the materials that actually do that job are the
        hardest part of the task to shop for, because they are sold as
        builders&apos; hardware rather than as pest control.
      </p>
      <p>
        A mouse can pass through a gap of about 6mm. That single fact is what
        makes proofing feel unreasonable the first time you attempt it: the
        openings that matter are almost never the obvious ones. They are the
        slot where a waste pipe passes through a wall, the worn strip under a
        back door, the corner of an air brick, the gap behind a soffit where a
        roof meets a wall, and the open mouth of a drain. None of those looks
        like a way into a house until something has used it.
      </p>
      <p>
        This page covers physical barriers only. Nothing here is a poison, a
        repellent or a treatment &mdash; these are materials you cut, pack, fit
        and seal, and they work by geometry rather than by chemistry. That also
        makes them the one part of rodent control that is genuinely permanent: a
        correctly meshed air brick does not wear off, need re-application, or
        stop working when you go on holiday. We selected these five rodent
        proofing products on published specifications, manufacturer information
        and availability on Amazon UK at the time of writing, covering the five
        jobs that account for most domestic entry points: large openings,
        irregular gaps, drains, door thresholds and the finishing seal.
      </p>
      <p>
        If you are still dealing with active rodents, close the entry points
        afterwards rather than instead: see{" "}
        <Link
          href="/guides/how-to-get-rid-of-mice"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          How to Get Rid of Mice
        </Link>{" "}
        and{" "}
        <Link
          href="/guides/how-to-get-rid-of-rats"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          How to Get Rid of Rats
        </Link>{" "}
        for the order of work, or our seasonal{" "}
        <Link
          href="/guides/autumn-pest-proofing"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Autumn Pest Proofing Checklist
        </Link>{" "}
        for a room-by-room sweep.
      </p>

      {/* At a Glance */}
      <h2 id="at-a-glance">Rodent Proofing at a Glance</h2>
      <p>
        Below is a quick comparison of our five recommended rodent proofing
        products. They are not alternatives to one another &mdash; a full
        proofing job on an average house usually uses three or four of them,
        because each is shaped for a different kind of opening. Full details of
        every product follow below.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.asin}>
              <td>{p.tableCells[0]}</td>
              <td>{p.tableCells[1]}</td>
              <td>{p.tableCells[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Product 1: Wire Mesh */}
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
        Wire mesh is the backbone of any proofing job, and it earns the top
        place here because it is the only material on this page that covers an
        opening you cannot simply pack. Air bricks, weep vents, soffit gaps, the
        space where a joist rests on a wall, the cut-out around a soil pipe
        &mdash; these are openings that have to stay open. They are ventilation,
        not defects. You cannot fill them without causing a damp problem, so the
        answer is to cover them with something that lets air through and does
        not let a rodent through.
      </p>
      <p>
        The specification that matters is the aperture. This mesh is 6mm x 6mm,
        which is the point at which the gap stops being a route. Coarser garden
        mesh looks similar in a photograph and is useless for this purpose. The
        hot-dipped galvanised finish is the other half of the specification:
        proofing that goes outside, onto a north-facing wall or under a gutter,
        has to survive years of British weather without the coating failing at
        the cut edges, and hot-dipped galvanising is applied after the mesh is
        welded so the weld points are covered too.
      </p>
      <p>
        In practice the 900mm width is generous for the job. Most proofing cuts
        are strips a few centimetres wide, so a 6m length goes a long way
        &mdash; it will typically cover every air brick on a terraced house with
        plenty left for pipe collars and the odd soffit repair. It cuts with tin
        snips or strong scissors, and because it is welded rather than woven it
        holds the shape you bend it into, which is what makes it possible to
        form a collar around pipework rather than trying to flatten mesh against
        a curved surface.
      </p>
      <p>
        The one thing to plan for is fixings. None are included, so decide
        before you start whether you are screwing the mesh on with washers,
        bedding it into mortar, or packing it behind a cover. That choice is
        usually made for you by the surface: brick takes plugs and screws,
        timber soffits take clout nails or staples, and a pipe collar is
        normally formed and then sealed rather than fixed at all.
      </p>
      <p>
        <strong>Pros:</strong> 6mm aperture is the correct specification for
        mice as well as rats; hot-dipped galvanised for outdoor life; welded
        construction holds a formed shape around pipework; cuts with ordinary
        hand tools; one roll covers a typical house.
      </p>
      <p>
        <strong>Cons:</strong> No fixings included; cut edges are sharp and need
        gloves; overkill for small irregular holes, where fill fabric is faster.
      </p>

      {/* Product 2: Steel Wool Fill Fabric */}
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
        Mesh is for openings with a shape. Fill fabric is for everything else
        &mdash; the ragged hole where a cable enters, the void behind a kitchen
        unit where the pipework was chased in, the gap between a floorboard and
        a skirting, the space under a threshold that is neither flat nor square.
        These are the openings that defeat a sheet material, because there is
        nothing to fix to and no straight edge to work from.
      </p>
      <p>
        The reason this works where ordinary wire wool does not is the blend.
        Plain steel wool rusts, and rusted wool crumbles into orange dust that
        packs down, leaves a void behind it, and stains whatever is underneath.
        A stainless blend keeps its body. That matters most in exactly the
        places you least want to revisit: under a bath, behind a boiler, inside
        a wall void. Proofing that has to be redone in two years is not
        proofing, it is a chore on a timer.
      </p>
      <p>
        It is supplied on a roll, 4 inch by 10 foot, and the format is a large
        part of the appeal. You tear off what you need and push it into the gap
        with a screwdriver or a filling knife &mdash; no cutting, no measuring,
        no tools that need a power socket. The material is deliberately coarse
        and springy so that it grips the sides of the hole rather than falling
        through, which is what allows it to hold in a vertical or overhead gap
        while you finish the job.
      </p>
      <p>
        On any gap that will be seen, treat this as the first of two layers. The
        fabric does the work of stopping the rodent; the paste or filler over
        the top does the work of looking finished and stopping the fabric being
        pulled back out. That combination &mdash; a gnaw-resistant core with a
        sealed face &mdash; is the standard approach to proofing, and it is why
        the paste further down this page is on the list at all.
      </p>
      <p>
        <strong>Pros:</strong> Handles irregular holes nothing else on this page
        can; no tools required; stainless blend will not rust away like plain
        wire wool; springy enough to stay put in vertical gaps; ideal base layer
        under a finishing seal.
      </p>
      <p>
        <strong>Cons:</strong> Untidy on its own, so it needs a face coat where
        it will be seen; wear gloves, the fibres catch skin; not suitable for
        covering a vent that must stay open.
      </p>

      {/* Product 3: Drain Guard */}
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
        The drain is the entry point people forget, and it is the one that most
        often explains a rat problem that will not go away. Every other route on
        this page can be found by walking round the outside of the building with
        a torch. The drain cannot: the run is underground, the damage is usually
        a cracked or disused branch somewhere along it, and the first evidence
        is a rat in a kitchen with no visible way in.
      </p>
      <p>
        A one-way flap answers that by making the pipe work in one direction
        only. Waste flows out and pushes the flap open; a rat pushing the other
        way pushes it shut. It is a mechanical solution with nothing to wear
        out, nothing to power and nothing to replenish, which is why it is the
        standard fitting for this problem rather than a matter of preference.
      </p>
      <p>
        The material specification is the part worth paying attention to. This
        is 316 marine-grade stainless steel, which is the grade specified for
        permanently wet, chemically unfriendly environments &mdash; and the
        inside of a foul drain is exactly that. A flap in a lesser material is a
        component that will fail in a place you cannot inspect, which is the
        worst possible combination.
      </p>
      <p>
        Fitting is by hand and needs no tools, which is unusual for anything
        that goes into a drain. The bolt reverses so the flap can be set to
        match the direction of flow, so the same unit works whichever way the
        chamber runs &mdash; check which way the water goes before you fit it,
        and set the flap to match. It is made in the UK, which for a 110mm
        fitting matters more than it sounds: British drainage runs to 110mm as
        standard, and a part built to that standard sits properly rather than
        approximately.
      </p>
      <p>
        <strong>Pros:</strong> Closes the one entry route you cannot survey; 316
        marine-grade stainless steel for a permanently wet environment; no
        tools, no power, nothing to wear out; reversible bolt suits either
        direction of flow; UK-made to the standard 110mm size.
      </p>
      <p>
        <strong>Cons:</strong> Only addresses the drain, so it is a supplement
        to the rest of the job, not a substitute; you need to be able to reach
        the chamber; only fits 4 inch / 110mm pipe.
      </p>

      {/* Product 4: Door Brush Strip */}
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
        The gap under a back door is the most-used entry point in British
        housing and the least likely to be treated as one, because everybody
        already knows it is there. It is visible, it is tolerated, and it is
        usually filed under draughts rather than under pests. A brush strip
        closes it in both senses at once, which is the reason this product tends
        to be the first thing fitted and the thing people wish they had fitted
        sooner.
      </p>
      <p>
        A brush seal rather than a rubber blade is the right choice for a
        threshold that is not perfectly flat, which describes most back doors,
        garage side doors and shed doors. The pile conforms to an uneven step, a
        worn sill or a slight rise in the floor, and it keeps sealing as the
        door drops on its hinges over the years. It also does not drag, so the
        door still opens the way it did before.
      </p>
      <p>
        The specification here is a gap of up to 25mm, which covers the great
        majority of domestic thresholds including the badly worn ones. The
        carrier is aluminium, so it does not sag along its length or perish the
        way a plastic carrier eventually does, and at 914mm it fits a standard
        domestic door and cuts down for anything narrower. Pre-drilled fixing
        holes and included fixings mean the job is a screwdriver and ten minutes
        rather than a trip to a hardware shop.
      </p>
      <p>
        One point on placement: fit it to the door, not the floor, and check the
        swing before you drill. On an outward-opening door the strip goes on the
        inside face; on an inward-opening door it goes on the outside. Getting
        that wrong is the only common mistake with this product, and it is a
        great deal easier to check first than to re-drill an aluminium carrier
        afterwards.
      </p>
      <p>
        <strong>Pros:</strong> Closes the most common entry point in the house;
        brush pile conforms to uneven and worn thresholds; aluminium carrier
        will not sag or perish; fixings included and pre-drilled; the draught
        reduction is a genuine second benefit.
      </p>
      <p>
        <strong>Cons:</strong> Only covers gaps up to 25mm, so a badly damaged
        threshold needs building work first; needs cutting for a narrow door;
        check the door swing before drilling.
      </p>

      {/* Product 5: Proofing Paste */}
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
        This is the product that finishes the job the other four start. Mesh and
        fill fabric stop rodents but leave an edge; the paste closes that edge,
        holds the fabric in place and gives the repair a face you can live with.
        It is designed to be applied over wire wool or mesh for extra strength,
        which tells you how it is meant to be used &mdash; as the outer layer of
        a two-part seal, not as a filler on its own.
      </p>
      <p>
        It is non-toxic and made from natural fibres and oils, and the soft core
        is the point rather than a compromise. A rodent that starts to gnaw
        meets a material that gives rather than one that presents a hard edge to
        work at, and the fibre content means there is no satisfying progress to
        be made. That is a different mechanism from a hard filler, which offers
        exactly the kind of resistance that invites a second attempt.
      </p>
      <p>
        Because it carries no toxicant, it is suitable for food-preparation and
        storage areas &mdash; kitchens, pantries, the back of a chest freezer, a
        garage where pet food is kept. Those are precisely the rooms where the
        entry points cluster and where you would least want to introduce
        anything else, so a proofing material that raises no question in a food
        area removes a decision rather than adding one.
      </p>
      <p>
        Use it last. Pack the gap with fill fabric or form the mesh first, then
        work the paste over the top and into the margins so there is no lip to
        catch a claw. Applied that way it is a permanent repair. Applied on its
        own to a gap of any size, it is a filler, and rodents are patient with
        fillers.
      </p>
      <p>
        <strong>Pros:</strong> Turns a rough proofing repair into a finished
        one; non-toxic and suitable for food-preparation and storage areas; soft
        core deters gnawing rather than inviting it; designed to layer over wool
        or mesh; no specialist tools.
      </p>
      <p>
        <strong>Cons:</strong> A finishing layer rather than a barrier in its
        own right; not a substitute for mesh on an opening that must stay
        ventilated; best used alongside one of the other products here.
      </p>

      {/* Buying Guide */}
      <h2 id="buying-guide">Rodent Proofing Buying Guide</h2>
      <p>
        Proofing is one of the few pest control jobs where the shopping list is
        decided entirely by the building rather than by the pest. Walk the
        outside first, then the inside, and buy against what you find.
      </p>

      <h3>Work outside to inside, low to high</h3>
      <p>
        Start at ground level on the outside: air bricks, the gap where the
        render stops, pipe entries, the drain, and the threshold of every
        external door including the garage and the shed. Then move up: the
        soffit line, the gap where a flat roof meets a wall, and any point where
        a cable or vent passes through. Inside, look under the kitchen units,
        behind the boiler and the bath, and along the skirting in any room that
        backs onto an external wall. Most houses produce a list of six to a
        dozen openings, and most of that list is closed with mesh, fill fabric
        and paste.
      </p>

      <h3>Match the material to the opening, not to the pest</h3>
      <ul>
        <li>
          <strong>An opening that must stay ventilated</strong> &mdash; air
          brick, weep vent, soffit gap. Cover with 6mm galvanised mesh. Never
          fill it.
        </li>
        <li>
          <strong>An irregular hole with no straight edge</strong> &mdash; cable
          entry, pipe chase, void behind a unit. Pack with stainless steel wool
          fill fabric, then face with paste.
        </li>
        <li>
          <strong>A drain</strong> &mdash; a one-way flap is the only practical
          answer, because you cannot proof what you cannot see.
        </li>
        <li>
          <strong>A door threshold</strong> &mdash; a brush strip, fitted to the
          door rather than the floor.
        </li>
        <li>
          <strong>A finished surface</strong> &mdash; paste over the top of
          whichever of the above you have used.
        </li>
      </ul>

      <h3>Buy for the whole job, not the first hole</h3>
      <p>
        The most common proofing mistake is buying one material and then
        discovering that three of your openings need a different one. A full
        domestic job almost always needs at least mesh and fill fabric, usually
        paste, and a brush strip if there is an external door with a worn
        threshold. The drain guard is the exception: fit it if you have rats, or
        if you have a drain chamber you can reach and want the route closed
        pre-emptively.
      </p>

      <h3>Proofing is permanent, which changes the maths</h3>
      <p>
        Unlike bait and repellents, proofing is a one-off. A meshed air brick
        stays meshed. That is the argument for doing the whole building at once
        rather than closing one hole at a time as evidence appears &mdash; a
        rodent that finds nine of your ten openings sealed simply uses the
        tenth, and you learn nothing from the nine that worked.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>
            <strong>
              Do the proofing after the control, not instead of it.
            </strong>{" "}
            Sealing a building with rodents already inside traps them in with
            you. Deal with the current activity first, then close the entry
            points so the next lot never get in. See our guides on{" "}
            <Link
              href="/guides/how-to-get-rid-of-mice"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              mice
            </Link>{" "}
            and{" "}
            <Link
              href="/guides/how-to-get-rid-of-rats"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              rats
            </Link>{" "}
            for the right order of work.
          </p>
        </Callout>
      </div>

      {/* FAQ */}
      <h2 id="faq">Rodent Proofing FAQ</h2>

      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      {/* When to Contact */}
      <h2 id="when-to-call">When to Contact a Pest Control Professional</h2>
      <p>
        Most domestic proofing is genuinely a DIY job &mdash; the materials on
        this page are hand tools and patience. Call a professional if the entry
        point is at height on a multi-storey building, if you suspect a
        defective underground drain rather than an open one, if the activity
        continues after the visible openings are closed, or if you are a
        landlord or a food business and need the work documented rather than
        simply done. A survey will also find the routes a torch and a Saturday
        afternoon will not, which is usually the difference between proofing
        that holds and proofing that has to be repeated.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need a Professional Proofing Survey?"
          subtext="Compare pest control providers near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">
          Still dealing with active rodents? Start with the control guides, then
          come back and proof.
        </p>
        <a
          href="/guides/how-to-get-rid-of-mice"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          How to Get Rid of Mice &rarr;
        </a>
      </div>
    </GuideLayout>
  );
}
