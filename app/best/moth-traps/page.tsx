import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout, { StatCallout } from "@/components/Callout";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps",
    description:
      "Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens.",
    alternates: { canonical: "https://pestproindex.com/best/moth-traps" },
    openGraph: {
      title: "Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps",
      description:
        "Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens.",
      url: "https://pestproindex.com/best/moth-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Moth Traps UK 2026: Clothes Moth & Pantry Moth Traps",
  description:
    "Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens.",
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
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
    "@id": "https://pestproindex.com/best/moth-traps",
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
      name: "Best Moth Traps UK 2026",
      item: "https://pestproindex.com/best/moth-traps",
    },
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do pheromone moth traps actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — they are scientifically proven to attract and catch male moths of the target species. They disrupt the breeding cycle, but work best as part of a combined approach with cleaning, spray, and preventative measures.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between clothes moth traps and pantry moth traps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They use different pheromone lures for different species. Clothes moth traps target the Common Clothes Moth; pantry moth traps target the Indian Meal Moth. Using the wrong trap will not catch anything.",
      },
    },
    {
      "@type": "Question",
      name: "How many moth traps do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One per wardrobe or storage area for clothes moths; one per kitchen cupboard for pantry moths. A typical home needs 3-6 clothes moth traps or 2-4 pantry moth traps.",
      },
    },
    {
      "@type": "Question",
      name: "How long do pheromone moth traps last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "6-12 weeks depending on the product. Premium traps last up to 12 weeks; budget options around 6 weeks. Replace when the pheromone fades or the glue board is full.",
      },
    },
    {
      "@type": "Question",
      name: "Do cedar products actually repel moths?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — fresh cedar oil genuinely repels clothes moths and can kill larvae. However, cedar is a preventative, not a treatment. Refresh cedar products every 6-12 months by sanding the surface or applying cedar oil.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I have clothes moths or pantry moths?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clothes moths: small (6-8mm), gold/buff, avoid light, found in wardrobes. Pantry moths: larger (8-10mm), brown/cream wings, fly readily, found in kitchen cupboards near dried food.",
      },
    },
  ],
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
    anchorId: "best-clothes",
    asin: "B0B21S966L",
    rank: 1,
    cardName: "Moth Prevention Clothes Moth Pheromone Traps",
    cardLabel: "Best Overall",
    features: [
      "Premium pheromone lure — strongest attractant available",
      "Targets Common Clothes Moth (Tineola bisselliella)",
      "Lasts up to 12 weeks per trap",
      "Non-toxic and pesticide-free",
    ],
    tableCells: [
      "Moth Prevention Pheromone Traps",
      "Clothes moths",
      "Best Clothes Moth",
    ],
    h2Label: "Best Clothes Moth Trap",
    h2Name: "Moth Prevention Pheromone Traps",
    tocLabel: "Best Clothes Moth Trap",
    tocName: "Moth Prevention Pheromone Traps",
  },
  {
    anchorId: "best-pantry",
    asin: "B0189FU8KO",
    rank: 2,
    cardName: "Demi Diamond Pantry Moth Traps",
    cardLabel: "Best Pantry Moth",
    features: [
      "Pheromone targets Indian Meal Moth specifically",
      "Triangular design fits in kitchen cupboard corners",
      "Non-toxic — safe for use near food",
      "Effective for 8 weeks per trap",
    ],
    tableCells: [
      "Demi Diamond Pantry Moth Traps",
      "Pantry moths",
      "Best Pantry Moth",
    ],
    h2Label: "Best Pantry Moth Trap",
    h2Name: "Demi Diamond Pantry Moth Traps",
    tocLabel: "Best Pantry Moth Trap",
    tocName: "Demi Diamond Pantry Moth Traps",
  },
  {
    anchorId: "best-value",
    asin: "B07SS5DDWH",
    rank: 3,
    cardName: "Zero In Clothes Moth Traps",
    cardLabel: "Best Budget",
    features: [
      "Affordable pheromone traps for clothes moths",
      "Ready-to-use — peel and place",
      "Lasts up to 6 weeks per trap",
      "Widely available in supermarkets and Amazon",
    ],
    tableCells: ["Zero In Clothes Moth Traps", "Clothes moths", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Zero In Clothes Moth Traps",
    tocLabel: "Best Value",
    tocName: "Zero In Clothes Moth Traps",
  },
  {
    anchorId: "best-professional",
    asin: "B01NCZJ2P4",
    rank: 4,
    cardName: "Pest Expert Clothes Moth Pheromone Traps",
    cardLabel: "Best Professional-Grade",
    features: [
      "Professional-grade pheromone lure",
      "Large glue board for high catch capacity",
      "Used by textile conservation professionals",
      "Long-lasting 8-week effectiveness",
    ],
    tableCells: [
      "Pest Expert Moth Traps",
      "Clothes moths",
      "Best Professional",
    ],
    h2Label: "Best Professional",
    h2Name: "Pest Expert Moth Traps",
    tocLabel: "Best Professional",
    tocName: "Pest Expert Moth Traps",
  },
  {
    anchorId: "best-refill",
    asin: "B0086OZO12",
    rank: 5,
    cardName: "SiSi Clothes & Carpet Moth Pheromone Trap Refills (20 Pads)",
    cardLabel: "Best Refills",
    features: [
      "20 replacement pheromone pads for moth traps",
      "Targets clothes and carpet moths",
      "Refreshes worn-out traps without buying new housings",
      "Non-toxic, odourless — cost-effective for ongoing monitoring",
    ],
    tableCells: [
      "SiSi Moth Trap Refill Pads",
      "Clothes & carpet moths",
      "Best Refills",
    ],
    h2Label: "Best Refills",
    h2Name: "SiSi Moth Trap Refill Pads",
    tocLabel: "Best Refills",
    tocName: "SiSi Moth Trap Refill Pads",
  },
  {
    anchorId: "best-repellent",
    asin: "B000LNFINU",
    rank: 6,
    cardName: "Natural Cedar Wood Moth Repellent Balls",
    cardLabel: "Best Repellent",
    features: [
      "Natural cedar oil repels clothes moths",
      "Pleasant scent — not the harsh naphthalene smell of old-fashioned mothballs",
      "Place in wardrobes, drawers, and storage boxes",
      "Refeshable — sand surface to release more cedar oil",
    ],
    tableCells: ["Cedar Wood Moth Balls", "All moths", "Best Repellent"],
    h2Label: "Best Repellent",
    h2Name: "Cedar Wood Moth Balls",
    tocLabel: "Best Repellent",
    tocName: "Cedar Wood Moth Balls",
  },
];

const tocItems = [
  { id: "at-a-glance", title: "Best Moth Traps at a Glance" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.tocLabel} — ${p.tocName}`,
  })),
  { id: "buying-guide", title: "How to Choose the Right Moth Trap" },
  { id: "faq", title: "Frequently Asked Questions" },
];
export default function BestMothTrapsPage() {
  return (
    <GuideLayout
      title="Best Moth Traps UK 2026: Clothes Moth & Pantry Moth Traps"
      subtitle="Our pick of the most effective pheromone moth traps for wardrobes, drawers and kitchens — plus cedar repellents for prevention"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "How to Get Rid of Moths",
          href: "/guides/how-to-get-rid-of-moths",
        },
        {
          title: "Carpet Beetle Control: Complete UK Guide",
          href: "/guides/carpet-beetle-control",
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
          title: "How to Get Rid of Bed Bugs: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-bed-bugs",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
        },
        {
          title: "Restaurant Pest Control: UK Compliance Guide",
          href: "/guides/restaurant-pest-control",
        },
        {
          title: "Hotel Pest Control: UK Compliance Guide",
          href: "/guides/hotel-pest-control",
        },
      ]}
      relatedProducts={[
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
        {
          title: "Best Carpet Beetle Treatments UK 2026",
          href: "/best/carpet-beetle-treatments",
        },
        {
          title: "Best Flea Treatments UK 2026",
          href: "/best/flea-treatments",
        },
        {
          title: "Best Bed Bug Treatments UK 2026",
          href: "/best/bed-bug-treatments",
        },
        {
          title: "Best Cockroach Killers UK 2026",
          href: "/best/cockroach-killers",
        },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />{" "}
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
        Moths cause more damage to UK homes than most people realise. Clothes
        moths silently destroy wool jumpers, cashmere scarves, silk garments,
        and even wool carpets — often without you noticing until the damage is
        done. Pantry moths infest flour, rice, cereals, and dried goods,
        contaminating entire cupboards of food. According to English Heritage,
        moth damage to UK textiles has increased significantly in recent years,
        driven by warmer, more humid homes and the popularity of natural fibre
        clothing.{" "}
      </p>{" "}
      <p>
        {" "}
        Pheromone traps are the cornerstone of effective moth control. They
        attract male moths using a synthetic version of the female moth's mating
        scent, trapping them on a sticky glue board. This serves two purposes:
        it monitors the severity of your moth problem (telling you how many
        moths are present), and it disrupts the breeding cycle by removing males
        from the population. When combined with thorough cleaning, moth spray,
        and preventative measures like cedar products, pheromone traps are a
        powerful tool for bringing a moth infestation under control.{" "}
      </p>{" "}
      <p>
        {" "}
        We selected these moth traps on published specifications and
        manufacturer information, looking at{" "}
        <strong>pheromone effectiveness</strong>,{" "}
        <strong>glue board quality</strong>, and <strong>target species</strong>{" "}
        (clothes moth vs pantry moth). Every product listed is available on
        Amazon UK.{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="info">
          {" "}
          <p>
            Clothes moth traps and pantry moth traps use DIFFERENT pheromones. A
            clothes moth trap will not catch pantry moths and vice versa.
            Identify your moth type first, then buy the correct trap.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      <h2 id="at-a-glance">Best Moth Traps at a Glance</h2>{" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            <th>Product</th>
            <th>Target Moth</th>
            <th>Best For</th>
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
      <div className="not-prose">
        {" "}
        <StatCallout
          value="6–8 weeks"
          label="Effective lifespan of a typical pheromone moth trap before replacement"
        />{" "}
      </div>{" "}
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
          rank={products[0].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Moth Prevention is the UK's specialist moth control brand, and their
        pheromone traps are widely regarded as the most effective clothes moth
        traps available. The premium pheromone lure is stronger and
        longer-lasting than budget alternatives — attracting male Common Clothes
        Moths from across a room for up to 12 weeks per trap. The extra-sticky
        glue board holds caught moths securely, preventing them from
        escaping.{" "}
      </p>{" "}
      <p>
        {" "}
        Each trap is designed for placement inside a wardrobe, chest of drawers,
        or linen cupboard. The flat, discreet design hangs from a rail or sits
        on a shelf without taking up much space. Because these traps are
        non-toxic and pesticide-free (they use only a pheromone lure and glue),
        they are completely safe for use in bedrooms, children's rooms, and
        anywhere you store clothing.{" "}
      </p>{" "}
      <p>
        {" "}
        For monitoring purposes, check your traps weekly and count the number of
        moths caught. If you are catching more than 5-10 moths per trap per
        week, you likely have an active infestation that requires additional
        treatment (moth spray, thorough cleaning, and laundering of affected
        garments at 60°C).{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Premium pheromone — strongest attractant for clothes moths</li>{" "}
        <li>Up to 12 weeks effective life</li>{" "}
        <li>Non-toxic and pesticide-free</li>{" "}
        <li>Specialist brand with expert customer support</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Higher price than budget alternatives</li>{" "}
        <li>Only catches male moths — does not kill larvae</li>{" "}
        <li>Will not catch pantry moths (different pheromone needed)</li>{" "}
      </ul>{" "}
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
          rank={products[1].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Pantry moths (Indian Meal Moths) require a completely different
        pheromone from clothes moths. Demi Diamond Pantry Moth Traps are
        specifically formulated to attract male Indian Meal Moths — the species
        responsible for infesting flour, rice, cereals, pasta, dried fruit,
        nuts, and pet food in UK kitchens. The triangular design fits neatly
        into cupboard corners, and the non-toxic formulation means they are
        completely safe for use alongside food.{" "}
      </p>{" "}
      <p>
        {" "}
        Alongside trapping, you must address the source of a pantry moth
        infestation: inspect all dried food for webbing, larvae, or moth debris,
        and dispose of any contaminated packets. Clean cupboards thoroughly,
        including crevices and shelf edges where larvae can pupate. Then place
        fresh traps to monitor whether the infestation has been eliminated.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Correct pheromone for pantry moths specifically</li>{" "}
        <li>Non-toxic and food-safe</li>{" "}
        <li>Compact triangular design for cupboard corners</li>{" "}
        <li>8 weeks effective life</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Will not catch clothes moths</li>{" "}
        <li>
          Traps alone will not eliminate pantry moths — must remove food source
        </li>{" "}
        <li>Glue board can attract dust in humid kitchens</li>{" "}
      </ul>{" "}
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
          rank={products[2].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Zero In Clothes Moth Traps offer genuine pheromone-based trapping. They
        are ideal for initial monitoring — place one in each wardrobe to
        determine whether you have a moth problem before investing in more
        expensive treatments. The traps are pre-baited and ready to use: simply
        peel the protective film from the glue board and place inside your
        wardrobe.{" "}
      </p>{" "}
      <p>
        {" "}
        The pheromone lure is effective for approximately 6 weeks — slightly
        shorter than the premium Moth Prevention traps, but adequate for
        monitoring and initial control. If your traps are catching moths
        consistently, escalate to a comprehensive treatment programme including
        moth spray and thorough cleaning.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Ready-to-use — no assembly</li> <li>Genuine pheromone lure</li>{" "}
        <li>Good for initial monitoring</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Shorter pheromone life (6 weeks vs 12)</li>{" "}
        <li>Weaker attractant than premium brands</li>{" "}
        <li>Smaller glue board surface area</li>{" "}
      </ul>{" "}
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
          rank={products[3].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Pest Expert Moth Traps use a professional-grade pheromone lure that is
        the same formulation deployed by textile conservation specialists at
        museums and stately homes — environments where moth damage to
        irreplaceable historical textiles is a serious concern. The larger glue
        board provides more surface area for catching moths, which is important
        in situations where you are dealing with a heavy infestation and need
        high catch capacity.{" "}
      </p>{" "}
      <p>
        {" "}
        The 8-week effective life strikes a good balance between the budget
        6-week traps and the premium 12-week options. For most UK households,
        replacing traps every 8 weeks through the main moth season (April to
        October) provides reliable monitoring and breeding disruption.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Professional-grade pheromone lure</li>{" "}
        <li>Large glue board for heavy infestations</li>{" "}
        <li>8-week effectiveness</li>{" "}
        <li>Used by conservation professionals</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Mid-range price point</li>{" "}
        <li>Larger traps may be more visible in wardrobes</li>{" "}
        <li>Only targets clothes moths</li>{" "}
      </ul>{" "}
      <h2 id={products[4].anchorId}>
        {products[4].h2Label} &mdash; {products[4].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[4].cardName}
          features={products[4].features}
          asin={products[4].asin}
          bestFor={products[4].cardLabel}
          rank={products[4].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        If you already own moth trap housings, SiSi refill pads provide fresh
        pheromone lures at a lower cost than buying complete new traps. The pads
        suit most standard clothes and carpet moth trap formats and provide the
        same attractant strength as new traps. For ongoing monitoring throughout
        the moth season, refills are the most cost-effective approach.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Cost-effective for ongoing monitoring</li>{" "}
        <li>Compatible with most trap housings</li>{" "}
        <li>Fresh pheromone for renewed effectiveness</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Requires existing trap housings</li>{" "}
        <li>May not fit all proprietary trap designs</li>{" "}
      </ul>{" "}
      <h2 id={products[5].anchorId}>
        {products[5].h2Label} &mdash; {products[5].h2Name}
      </h2>{" "}
      <div className="not-prose my-6">
        {" "}
        <ProductCard
          name={products[5].cardName}
          features={products[5].features}
          asin={products[5].asin}
          bestFor={products[5].cardLabel}
          rank={products[5].rank}
        />{" "}
      </div>{" "}
      <p>
        {" "}
        Cedar wood has been used to protect clothing from moths for centuries —
        and for good reason. The natural oils in cedar (primarily cedrol)
        genuinely repel clothes moths and can kill moth larvae at high
        concentrations. Unlike old-fashioned naphthalene mothballs, which have
        an unpleasant chemical smell and are toxic, cedar balls have a pleasant
        woody scent and are completely natural and non-toxic.{" "}
      </p>{" "}
      <p>
        {" "}
        Cedar is a preventative measure, not a treatment. It will not eliminate
        an existing infestation, but it will discourage moths from settling in
        protected areas. Place cedar balls in wardrobes, drawers, and storage
        boxes alongside clean, laundered clothing. The cedar scent fades over
        time — sand the surface lightly every 6-12 months to release fresh oils,
        or apply a few drops of cedar essential oil.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Natural and non-toxic</li> <li>Pleasant cedar scent</li>{" "}
        <li>Long-lasting and refreshable</li>{" "}
        <li>Effective preventative measure</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Preventative only — will not kill existing infestations</li>{" "}
        <li>Needs refreshing every 6-12 months</li>{" "}
        <li>Less effective in open/ventilated spaces</li>{" "}
      </ul>{" "}
      <h2 id="buying-guide">How to Choose the Right Moth Trap</h2>{" "}
      <h3>Clothes Moths vs Pantry Moths</h3>{" "}
      <p>
        {" "}
        This is the most important distinction. Clothes moths eat natural fibres
        (wool, silk, cashmere, fur) and are found in wardrobes, drawers, and
        carpet edges. Pantry moths eat dried food (flour, rice, cereals, nuts)
        and are found in kitchen cupboards. They require different pheromone
        traps — using the wrong one will catch nothing.{" "}
      </p>{" "}
      <h3>How Pheromone Traps Work</h3>{" "}
      <p>
        {" "}
        Pheromone traps attract male moths only. The synthetic pheromone mimics
        the female's mating scent, drawing males onto the sticky glue board.
        Removing males from the population disrupts breeding, reducing the next
        generation of egg-laying females. Traps do not kill larvae — for that,
        you need spray, cleaning, and heat treatment (washing at 60°C).{" "}
      </p>{" "}
      <h3>Traps for Monitoring vs Traps for Control</h3>{" "}
      <p>
        {" "}
        A single trap in a wardrobe acts as a monitoring tool — it tells you
        whether moths are present and how severe the problem is. For active
        control, you need multiple traps combined with other measures: thorough
        vacuuming, laundering affected garments at 60°C, moth killer spray for
        carpets and crevices, and cedar products for prevention.{" "}
      </p>{" "}
      <h3>The Combination Approach</h3>{" "}
      <p>
        {" "}
        The most effective moth control uses all available methods together:{" "}
        <strong>pheromone traps</strong> (monitoring + breeding disruption),{" "}
        <strong>moth killer spray</strong> (kills larvae in carpets and
        crevices), <strong>hot washing</strong> (kills all life stages at 60°C),{" "}
        <strong>vacuuming</strong> (removes eggs and larvae from carpet edges),
        and <strong>cedar products</strong> (ongoing prevention). No single
        method is sufficient on its own for an established infestation.{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="tip">
          {" "}
          <p>
            Clothes moths avoid light and rarely fly — if you see small moths
            fluttering around lights, they are probably not clothes moths.
            Clothes moths are found in dark, undisturbed areas like wardrobes,
            under furniture, and along carpet edges.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      <h2 id="faq">Frequently Asked Questions</h2>{" "}
      <h3>Do pheromone moth traps actually work?</h3>{" "}
      <p>
        Yes — they are scientifically proven to attract and catch male moths of
        the target species. They disrupt the breeding cycle, but work best as
        part of a combined approach with cleaning, spray, and preventative
        measures.
      </p>{" "}
      <h3>
        What is the difference between clothes moth traps and pantry moth traps?
      </h3>{" "}
      <p>
        They use different pheromone lures for different species. Clothes moth
        traps target the Common Clothes Moth; pantry moth traps target the
        Indian Meal Moth. Using the wrong trap will not catch anything.
      </p>{" "}
      <h3>How many moth traps do I need?</h3>{" "}
      <p>
        One per wardrobe or storage area for clothes moths; one per kitchen
        cupboard for pantry moths. A typical home needs 3-6 clothes moth traps
        or 2-4 pantry moth traps.
      </p>{" "}
      <h3>How long do pheromone moth traps last?</h3>{" "}
      <p>
        6-12 weeks depending on the product. Premium traps last up to 12 weeks;
        budget options around 6 weeks. Replace when the pheromone fades or the
        glue board is full.
      </p>{" "}
      <h3>Do cedar products actually repel moths?</h3>{" "}
      <p>
        Yes — fresh cedar oil genuinely repels clothes moths and can kill
        larvae. However, cedar is a preventative, not a treatment. Refresh cedar
        products every 6-12 months by sanding the surface or applying cedar oil.
      </p>{" "}
      <h3>How do I know if I have clothes moths or pantry moths?</h3>{" "}
      <p>
        Clothes moths: small (6-8mm), gold/buff, avoid light, found in
        wardrobes. Pantry moths: larger (8-10mm), brown/cream wings, fly
        readily, found in kitchen cupboards near dried food.
      </p>{" "}
      <div className="not-prose">
        {" "}
        <FindProviderCTA
          heading="Serious Moth Infestation?"
          subtext="A professional pest controller can identify the moth species, locate all infestation sites, and apply commercial-grade treatments"
        />{" "}
      </div>{" "}
      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        {" "}
        <p className="text-gray-700 mb-3">
          Need moth killer spray alongside traps?
        </p>{" "}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {" "}
          <a
            href="/best/moth-killers"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Moth Killers UK 2026 →
          </a>{" "}
          <a
            href="/guides/how-to-get-rid-of-moths"
            className="inline-block px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors text-sm"
          >
            How to Get Rid of Moths — Complete Guide →
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </GuideLayout>
  );
}
