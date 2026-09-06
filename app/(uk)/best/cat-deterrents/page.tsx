import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout, { StatCallout } from "@/components/Callout";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
    description:
      "Cat deterrents for UK gardens: ultrasonic repellers, scent crystals, lion manure pellets and prickle strips, described by their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/cat-deterrents" },
    openGraph: {
      title: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
      description:
        "Cat deterrents for UK gardens: ultrasonic repellers, scent crystals, lion manure pellets and prickle strips, described by their own listings.",
      url: "https://pestproindex.com/best/cat-deterrents",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Cat Deterrents UK 2026 — Ultrasonic & Scent",
  description:
    "Cat deterrents for UK gardens: ultrasonic repellers, scent crystals, lion manure pellets and prickle strips, described by their own listings.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
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
    "@id": "https://pestproindex.com/best/cat-deterrents",
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
      name: "Best Cat Deterrents UK 2026",
      item: "https://pestproindex.com/best/cat-deterrents",
    },
  ],
};
// S67 R6 — ONE ARRAY. The visible block below and the FAQPage schema both render
// from this and only this, so the two surfaces cannot disagree again. The visible
// block was authoritative where they did disagree.
const faqs = [
  {
    q: "Is it legal to deter cats from my garden in the UK?",
    a: "Yes. Humane deterrents — sprinklers, ultrasonic devices, scent repellents and prickle strips — are entirely legal. Trapping, poisoning or harming a cat is an offence under the Animal Welfare Act 2006.",
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
    anchorId: "best-ultrasonic",
    asin: "B075XN4NNB",
    cardName: "PestBye Solar Ultrasonic Cat Repeller (Twin Pack)",
    cardLabel: "Ultrasonic, solar, 2 pack",
    features: [
      "Solar powered — no batteries or wiring needed",
      "Motion-activated PIR with ~7m range",
      "Twin pack covers two entry points",
      "Weatherproof for year-round outdoor use",
    ],
    tableCells: [
      "PestBye Solar Ultrasonic Cat Repeller",
      "Ultrasonic (solar)",
      "Entry points, borders",
    ],
    h2Label: "Ultrasonic, solar, 2 pack",
    h2Name: "PestBye Solar Ultrasonic Cat Repeller",
    tocLabel: "Ultrasonic, solar, 2 pack",
    tocName: "PestBye Solar Cat Repeller",
  },
  {
    anchorId: "best-scent",
    asin: "B00THGEB5S",
    cardName: "Get Off My Garden Cat & Dog Repellent Crystals 240g",
    cardLabel: "Repellent crystals, 240g",
    features: [
      "Jelly-crystal scent deterrent for beds and borders",
      "Non-toxic to plants when used as directed",
      "Long-established UK cat repellent",
    ],
    tableCells: [
      "Get Off My Garden Crystals",
      "Scent deterrent",
      "Flower beds, borders",
    ],
    h2Label: "Repellent crystals, 240g",
    h2Name: "Get Off My Garden Repellent",
    tocLabel: "Repellent crystals, 240g",
    tocName: "Get Off My Garden",
  },
  {
    anchorId: "best-physical",
    asin: "B01I3E0PKY",
    cardName: "Defenders Prickle Strip Dig Stopper (Cat & Dog), 3-Pack",
    cardLabel: "Prickle strips, 3 x 2m",
    features: [
      "Flexible plastic prickle strips — uncomfortable but harmless",
      "Push into soil or pin onto fence tops and ledges",
      "3-pack covers multiple beds or a boundary run",
    ],
    tableCells: [
      "Defenders Prickle Strips",
      "Physical deterrent",
      "Stopping digging & fouling",
    ],
    h2Label: "Prickle strips, 3 x 2m",
    h2Name: "Defenders Prickle Strip Dig Stopper",
    tocLabel: "Prickle strips, 3 x 2m",
    tocName: "Defenders Prickle Strips",
  },
  {
    anchorId: "best-natural",
    asin: "B0002B7OT2",
    cardName: "Silent Roar Lion Manure Cat Repellent Pellets 500g",
    cardLabel: "Lion manure pellets",
    features: [
      "Pellets infused with lion-dung essence",
      "Doubles as a slow-release nitrogen feed for lawns",
    ],
    tableCells: [
      "Silent Roar Lion Manure Pellets",
      "Natural scent deterrent",
      "Beds, lawn edges",
    ],
    h2Label: "Lion manure pellets",
    h2Name: "Silent Roar Lion Manure Pellets",
    tocLabel: "Lion manure pellets",
    tocName: "Silent Roar Pellets",
  },
];

const tocItems = [
  { id: "at-a-glance", title: "Best Cat Deterrents at a Glance" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.tocLabel} — ${p.tocName}`,
  })),
  { id: "buying-guide", title: "Cat Deterrent Buying Guide" },
  { id: "faq", title: "Frequently Asked Questions" },
];
export default function BestCatDeterrentsPage() {
  return (
    <GuideLayout
      title="Best Cat Deterrents UK 2026 &mdash; Ultrasonic, Scent & Sprinkler Repellents"
      subtitle="Five cat deterrents for UK gardens &mdash; sprinkler, ultrasonic, scent and physical &mdash; described by what their own listings state"
      lastUpdated="June 2026"
      readingTime="11 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "How to Get Rid of Foxes: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-foxes",
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
          title: "Plants That Repel Pests: A UK Gardener’s Guide",
          href: "/guides/plants-that-repel-pests",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
        {
          title: "How to Get Rid of Rats: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-rats",
        },
        {
          title: "How to Get Rid of Mice: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-mice",
        },
      ]}
      relatedProducts={[
        { title: "Best Fox Deterrents UK 2026", href: "/best/fox-deterrents" },
        {
          title: "Best Squirrel Deterrents UK 2026",
          href: "/best/squirrel-deterrents",
        },
        {
          title: "Best Bird Deterrents UK 2026",
          href: "/best/bird-deterrents",
        },
        { title: "Best Pigeon Spikes UK 2026", href: "/best/pigeon-spikes" },
        {
          title: "Best Ultrasonic Pest Repellers UK 2026",
          href: "/best/ultrasonic-pest-repellers",
        },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />{" "}
      {/* Affiliate disclosure */}{" "}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        {" "}
        <p className="text-sm text-amber-800">
          {" "}
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. As an Amazon Associate,
          PestPro Index earns from qualifying purchases.{" "}
        </p>{" "}
      </div>{" "}
      <p>
        {" "}
        Neighbourhood cats are one of the most common garden complaints in the
        UK &mdash; fouling in flower beds, digging up seedlings, spraying on
        doorways, stalking birds at feeders, and triggering territorial
        stand-offs with resident pets. With an estimated 11 million pet cats in
        the country and no legal &ldquo;trespass&rdquo; concept that applies to
        roaming cats, the only practical and lawful response is{" "}
        <strong>humane deterrence</strong>: making your garden an unwelcoming,
        unrewarding place so that visiting cats choose to go elsewhere.
        Crucially, it is an offence under the Animal Welfare Act 2006 to trap,
        poison, or harm a cat &mdash; so every product on this page is designed
        to discourage cats safely, never to injure them.{" "}
      </p>{" "}
      <p>
        {" "}
        As with foxes, the secret to success is that{" "}
        <strong>no single cat deterrent works reliably on its own</strong>. Cats
        are intelligent, territorial and quick to learn which threats are real.
        An ultrasonic device that sends a cat scrambling in week one can fade
        into background noise by week three if nothing else changes.{" "}
      </p>{" "}
      <p>
        {" "}
        Each is available on Amazon UK. For
        wildlife problems beyond cats, see our companion guides to{" "}
        <Link
          href="/best/fox-deterrents"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          fox deterrents
        </Link>{" "}
        and{" "}
        <Link
          href="/best/squirrel-deterrents"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          squirrel deterrents
        </Link>
        .{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="info">
          {" "}
          <p>
            Deterring cats is legal; harming them is not. Under the Animal
            Welfare Act 2006 it is an offence to trap, poison, or cause
            unnecessary suffering to a cat &mdash; even one that is not yours.
            Stick to humane deterrents like the ones on this page.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      <h2 id="at-a-glance">Best Cat Deterrents at a Glance</h2>{" "}
      <p>
        {" "}
        Below is a quick comparison of our five cat deterrents. Each targets a
        different mechanism &mdash; water, sound, scent and physical &mdash; so
        the strongest setup combines two or three rather than relying on one. We
        cover each in full detail further down the page.{" "}
      </p>{" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>What it is</th>
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {products.map((p) => (
            <tr key={p.asin}>
              <td>{p.tableCells[0]}</td>
              <td>{p.tableCells[1]}</td>
              <td>{p.tableCells[2]}</td>
            </tr>
          ))}
        </tbody>{" "}
      </table>{" "}
      {/* Best Ultrasonic */}{" "}
      <h2 id={products[0].anchorId}>
        {products[0].h2Label} &mdash; {products[0].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[0].cardName}
          features={products[0].features}
          asin={products[0].asin}
          bestFor={products[0].cardLabel}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Each unit charges itself from
        daylight and runs autonomously, emitting a burst of high-frequency sound
        &mdash; unpleasant to cats but largely inaudible to most adults &mdash;
        whenever its motion sensor detects movement within roughly 7 metres.
        Because it is solar, there are no batteries to change and no mains
        wiring; you simply push the ground stake in at the cat&rsquo;s entry
        point and forget about it.{" "}
      </p>{" "}
      <p>
        {" "}
        To get the most from them, place one unit at each main access point
        &mdash; the gap under the fence and the route in from next door, for
        example &mdash; with the sensor facing along the path the cat uses, and
        keep the detection arc clear of tall grass or foliage that could block
        it.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>
          Solar powered &mdash; zero running costs and fully autonomous
        </li>{" "}
        <li>Motion-activated, so it only fires when needed</li>{" "}
        <li>Weatherproof for all-year UK use</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>
          Some cats habituate &mdash; reposition every 2&ndash;3 weeks
        </li>{" "}
        <li>
          Solar panel needs reasonable daylight; struggles in deep shade in
          winter
        </li>{" "}
        <li>Best as part of a layered approach, not a standalone fix</li>{" "}
      </ul>{" "}
      {/* Best Scent Crystals */}{" "}
      <h2 id={products[1].anchorId}>
        {products[1].h2Label} &mdash; {products[1].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[1].cardName}
          features={products[1].features}
          asin={products[1].asin}
          bestFor={products[1].cardLabel}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Get Off My Garden is one of the UK&rsquo;s best-known scent-based cat
        deterrents, sold as small jelly crystals you scatter along the areas you
        want cats to avoid &mdash; flower beds, borders, the base of fences,
        doorways and bin areas.{" "}
      </p>{" "}
      <p>
        {" "}
        Scatter the crystals thinly and reapply roughly weekly, and always after
        heavy rain, since the scent washes out over time. The product is
        designed to be safe for use around established plants and is non-toxic
        to pets when applied as directed, but as with any garden product keep it
        away from food crops and out of reach of pets indoors.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>
          Cheap, simple and ideal for borders and beds where sprinklers
          can&rsquo;t reach
        </li>{" "}
        <li>
          Safe for use around established garden plants when used as directed
        </li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Must be reapplied weekly and after rain</li>{" "}
        <li>Scent-based deterrents vary in effect between individual cats</li>{" "}
        <li>
          Best on soil/borders &mdash; less effective on hard surfaces
        </li>{" "}
      </ul>{" "}
      {/* Best Physical */}{" "}
      <h2 id={products[2].anchorId}>
        {products[2].h2Label} &mdash; {products[2].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[2].cardName}
          features={products[2].features}
          asin={products[2].asin}
          bestFor={products[2].cardLabel}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Where a cat has a fixed habit &mdash; a particular flower bed it digs
        in, a favoured warm spot on top of a wall, or a raised planter it
        toilets in.
        Defenders Prickle Strips are flexible plastic strips covered in blunt
        spikes that are deeply uncomfortable for a cat to stand or dig on, but
        completely harmless: they do not pierce or injure paws, they simply make
        the surface unpleasant. Push them into the soil of a bed (spikes up,
        just below the surface), pin them along fence tops and ledges, or lay
        them around the base of plants you want to protect. The 3-pack is enough
        to cover several beds or a short boundary run.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Humane: uncomfortable to stand on but cannot injure paws</li>{" "}
        <li>Versatile &mdash; beds, pots, fence tops, ledges and gaps</li>{" "}
        <li>No power, batteries or reapplication needed</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Only protects the specific spots you cover</li>{" "}
        <li>Can be fiddly to position invisibly in planted beds</li>{" "}
        <li>Does not deter cats from the wider garden</li>{" "}
      </ul>{" "}
      {/* Best Natural Scent */}{" "}
      <h2 id={products[3].anchorId}>
        {products[3].h2Label} &mdash; {products[3].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[3].cardName}
          features={products[3].features}
          asin={products[3].asin}
          bestFor={products[3].cardLabel}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Silent Roar is lightweight pellets infused with the scent of lion dung.
        Scatter the pellets
        along borders, lawn edges and the cat&rsquo;s favourite spots; an added
        bonus is that the pellets act as a slow-release nitrogen feed, so
        treated lawns often green up as a side effect.{" "}
      </p>{" "}
      <p>
        {" "}
        Like all scent deterrents, Silent Roar needs topping up periodically and
        reapplying after heavy rain, and its strength varies between individual
        cats.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>
          Natural, distinctive scent mechanism cats instinctively avoid
        </li>{" "}
        <li>Doubles as a slow-release lawn feed</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Needs reapplying after rain and over time</li>{" "}
        <li>Distinct odour on application (fades quickly)</li>{" "}
        <li>Effect varies between individual cats</li>{" "}
      </ul>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="tip">
          {" "}
          <p>
            Rotate positions every few weeks so cats can&rsquo;t learn to
            predict them.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      {/* Buying Guide */} <h2 id="buying-guide">Cat Deterrent Buying Guide</h2>{" "}
      <p>
        {" "}
        With four mechanisms to choose from, the right combination depends on
        your garden and the specific behaviour you want to stop. Here are the
        key factors.{" "}
      </p>{" "}
      <h3>Match the Deterrent to the Problem</h3>{" "}
      <p>
        {" "}
        A motion sprinkler suits open lawns and paths; prickle strips suit
        specific beds; a solar ultrasonic unit is aimed along a known entry
        route; scent products suit borders and dug-over soil.{" "}
      </p>{" "}
      <h3>Layer and Rotate</h3>{" "}
      <p>
        {" "}
        Cats are intelligent and territorial, and any single deterrent loses its
        edge once the cat decides it is harmless. Layering different mechanisms
        &mdash; water, sound, scent and physical &mdash; means the cat faces
        unpredictable, overlapping deterrents it cannot rationalise. Reposition
        devices and vary where you apply scent every two to three weeks to keep
        the effect fresh.{" "}
      </p>{" "}
      <h3>Keep It Humane and Legal</h3>{" "}
      <p>
        {" "}
        Every product here is designed to discourage cats without harming them,
        which keeps you firmly on the right side of the Animal Welfare Act 2006.
        Avoid anything that could trap, injure or poison a cat. If a cat is unwell, injured, or appears
        stray, contact a local rescue rather than trying to remove it
        yourself.{" "}
      </p>{" "}
      <h3>Protecting Birds and Wildlife</h3>{" "}
      <p>
        {" "}
        If your main concern is cats hunting at bird feeders, combine these
        deterrents with feeder placement: site feeders high and away from launch
        points like walls and dense low cover, and use a scent deterrent or
        prickle strips around the base. Reducing ambush opportunities is as
        important as deterring the cat.{" "}
      </p>{" "}
      <h2 id="faq">Frequently Asked Questions</h2>{" "}
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <div className="not-prose">
        {" "}
        <FindProviderCTA
          heading="Persistent Garden Pest Problem?"
          subtext="Compare pest control providers near you — free, no-obligation quotes."
        />{" "}
      </div>{" "}
      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        {" "}
        <p className="text-gray-700 mb-3">
          Dealing with other garden visitors?
        </p>{" "}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {" "}
          <a
            href="/best/fox-deterrents"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Fox Deterrents UK 2026 &rarr;
          </a>{" "}
          <a
            href="/best/squirrel-deterrents"
            className="inline-block px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Squirrel Deterrents UK 2026 &rarr;
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </GuideLayout>
  );
}
