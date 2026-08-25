import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout, { StatCallout } from "@/components/Callout";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Wasp Nest Killer Foam UK 2026",
    description:
      "Our pick of the best wasp nest killer foams and sprays in the UK for 2026. Long-range foams, powders and aerosols, with safety advice.",
    alternates: { canonical: "https://pestproindex.com/best/wasp-nest-foam" },
    openGraph: {
      title: "Best Wasp Nest Killer Foam UK 2026",
      description:
        "Our pick of the best wasp nest killer foams and sprays in the UK for 2026. Long-range foams, powders and aerosols, with safety advice.",
      url: "https://pestproindex.com/best/wasp-nest-foam",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Wasp Nest Killer Foam UK 2026",
  description:
    "Our pick of the best wasp nest killer foams and sprays in the UK for 2026. Long-range foams, powders and aerosols, with safety advice.",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
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
    "@id": "https://pestproindex.com/best/wasp-nest-foam",
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
      name: "Best Wasp Nest Killer Foam UK 2026",
      item: "https://pestproindex.com/best/wasp-nest-foam",
    },
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best wasp nest killer foam in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rentokil Wasp Nest Killer Foam is the best overall option. It delivers expanding foam that seals the nest entrance and kills wasps through contact with the insecticide, reducing the number of escaping wasps.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to remove a wasp nest yourself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small, accessible nests can be treated safely with the right products and protective clothing. However, nests at height, in enclosed roof spaces, very large nests, and situations where you have a wasp allergy should always be handled by a professional. Professional treatment typically costs £50-£80.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to treat a wasp nest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treat at dusk or dawn when wasps are least active and most of the colony is inside the nest. Never attempt treatment during the middle of the day.",
      },
    },
    {
      "@type": "Question",
      name: "How long does wasp nest foam take to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foam kills wasps within minutes on contact. However, it takes 24-48 hours for the entire colony to die. Do not approach the nest for at least 24 hours after treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to remove the nest after treating it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A treated, dead nest is harmless and will not be reused. Remove it only if you want to for aesthetic reasons, and wait at least 48 hours after treatment before doing so.",
      },
    },
    {
      "@type": "Question",
      name: "Is wasp nest foam or powder better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foam is better for visible nests with clear entrances. Powder is better for cavity nests, wall voids, and underground nests where the transfer effect carries the insecticide deep inside the hidden nest.",
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
    anchorId: "best-overall",
    asin: "B000TAY2EQ",
    rank: 1,
    cardName: "Rentokil Wasp Nest Destroyer Foam 300ml",
    cardLabel: "Best Overall",
    features: [
      "Powerful foam jet treats from 2 metres away",
      "Contains d-phenothrin and tetramethrin for fast kill",
      "One 300ml can treats up to 3 large nests",
      "Effective within 24 hours",
    ],
    tableCells: [
      "Rentokil Wasp Nest Destroyer Foam 300ml",
      "Expanding foam",
      "Best Overall",
    ],
    h2Label: "Best Overall",
    h2Name: "Rentokil Wasp Nest Destroyer Foam",
    tocLabel: "Best Overall",
    tocName: "Rentokil Wasp Nest Destroyer Foam",
  },
  {
    anchorId: "best-range",
    asin: "B077G3YB38",
    rank: 2,
    cardName: "Zero In Ultra Power Wasp & Hornet Nest Killer Foam 600ml",
    cardLabel: "Best Long-Range",
    features: [
      "Professional-strength 600ml trigger aerosol",
      "4-metre spray range — double the safe distance",
      "Treats 4-7 nests per can",
      "Suitable for indoor and outdoor nests",
    ],
    tableCells: [
      "Zero In Ultra Power Wasp & Hornet Nest Killer Foam 600ml",
      "Long-range foam",
      "Best Long-Range",
    ],
    h2Label: "Best Long-Range",
    h2Name: "Zero In Ultra Power 600ml",
    tocLabel: "Best Long-Range",
    tocName: "Zero In Ultra Power 600ml",
  },
  {
    anchorId: "best-value",
    asin: "B0082M8TU6",
    rank: 3,
    cardName: "Zero In Wasp Nest Killer Foam 300ml",
    cardLabel: "Best Value",
    features: [
      "Fast-acting foam from 2 metres",
      "2-3 treatments per 300ml can",
      "Simple to use — spray into nest entrance at dusk",
      "Kills the colony within 24 hours",
    ],
    tableCells: [
      "Zero In Wasp Nest Killer Foam 300ml",
      "Aerosol foam",
      "Best Value",
    ],
    h2Label: "Best Value",
    h2Name: "Zero In Wasp Nest Killer Foam",
    tocLabel: "Best Value",
    tocName: "Zero In Wasp Nest Killer Foam",
  },
  {
    anchorId: "best-powder",
    asin: "B0B8HLKZZS",
    rank: 4,
    cardName: "Rentokil Wasp Killer Powder 150g",
    cardLabel: "Best Powder",
    features: [
      "Powder for nests in vents, eaves and wall cavities",
      "Contains permethrin — effective within 24 hours",
      "Best used alongside foam for comprehensive treatment",
      "Reaches areas foam cannot access",
    ],
    tableCells: [
      "Rentokil Wasp Killer Powder 150g",
      "Insecticidal powder",
      "Best Powder",
    ],
    h2Label: "Best Powder",
    h2Name: "Rentokil Wasp Killer Powder",
    tocLabel: "Best Powder",
    tocName: "Rentokil Wasp Killer Powder",
  },
  {
    anchorId: "best-twin",
    asin: "B01FSDM1E6",
    rank: 5,
    cardName: "Zero In Wasp Nest Control Powder 300g Twin Pack",
    cardLabel: "Best Twin Pack",
    features: [
      "Twin-pack powder with puffer applicator",
      "Apply into gaps in walls, soffits and vents",
      "Child-resistant cap for safety",
      "300g per bottle — two bottles for extended season",
    ],
    tableCells: [
      "Zero In Wasp Nest Control Powder 300g Twin Pack",
      "Powder twin pack",
      "Best Twin Pack",
    ],
    h2Label: "Best Twin Pack",
    h2Name: "Zero In Powder Twin Pack",
    tocLabel: "Best Twin Pack",
    tocName: "Zero In Powder Twin Pack",
  },
];

const tocItems = [
  { id: "at-a-glance", title: "Best Wasp Nest Killers at a Glance" },
  ...products.map((p) => ({
    id: p.anchorId,
    title: `${p.tocLabel} — ${p.tocName}`,
  })),
  { id: "buying-guide", title: "How to Choose the Right Wasp Nest Killer" },
  { id: "safety", title: "Safety: How to Treat a Wasp Nest Safely" },
  { id: "faq", title: "Frequently Asked Questions" },
];
export default function BestWaspNestFoamPage() {
  return (
    <GuideLayout
      title="Best Wasp Nest Killer Foam UK 2026"
      subtitle="Our pick of the most effective wasp nest killer foams and sprays available in the UK, with safety advice and application tips"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "Wasp Nest Removal: Complete UK Guide",
          href: "/guides/wasp-nest-removal",
        },
        {
          title: "How to Get Rid of Ants: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-ants",
        },
        {
          title: "How to Get Rid of Cockroaches: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-cockroaches",
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
        {
          title: "How to Get Rid of Bed Bugs: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-bed-bugs",
        },
        {
          title: "How to Get Rid of Fleas: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-fleas",
        },
        {
          title: "How to Get Rid of Moths",
          href: "/guides/how-to-get-rid-of-moths",
        },
        {
          title: "Restaurant Pest Control: UK Compliance Guide",
          href: "/guides/restaurant-pest-control",
        },
        {
          title: "Pigeon Control: Complete UK Guide",
          href: "/guides/pigeon-control",
        },
        {
          title: "Carpet Beetle Control: Complete UK Guide",
          href: "/guides/carpet-beetle-control",
        },
        {
          title: "How to Get Rid of Squirrels: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-squirrels",
        },
      ]}
      relatedProducts={[
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Ant Gel Bait UK 2026", href: "/best/ant-gel-bait" },
        {
          title: "Best Cockroach Killers UK 2026",
          href: "/best/cockroach-killers",
        },
        {
          title: "Best Flea Treatments UK 2026",
          href: "/best/flea-treatments",
        },
        {
          title: "Best Bed Bug Treatments UK 2026",
          href: "/best/bed-bug-treatments",
        },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        {
          title: "Best Bird Deterrents UK 2026",
          href: "/best/bird-deterrents",
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
      {/* Affiliate disclosure */}{" "}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        {" "}
        <p className="text-sm text-amber-800">
          {" "}
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.{" "}
        </p>{" "}
      </div>{" "}
      <p>
        {" "}
        Wasp nests are one of the most common summer pest problems in the UK. By
        late July and August, a mature Common Wasp (<em>Vespula vulgaris</em>)
        nest can contain 5,000-10,000 workers, all of which become increasingly
        aggressive as the colony reaches peak size. According to the British
        Pest Control Association, wasp-related callouts spike dramatically
        between June and September each year, with thousands of homeowners stung
        while attempting DIY nest removal.{" "}
      </p>{" "}
      <p>
        {" "}
        The safest and most effective way to destroy a wasp nest yourself is
        with a specialist nest killer product — either an expanding foam that
        seals the entrance and delivers insecticide directly into the nest, or
        an insecticidal powder that returning wasps carry inside on their
        bodies. Both approaches kill the colony from within, which is far more
        effective and safer than trying to knock down or physically remove the
        nest.{" "}
      </p>{" "}
      <p>
        {" "}
        We selected these wasp nest killer products on published specifications
        and manufacturer information, looking at{" "}
        <strong>killing effectiveness</strong>,{" "}
        <strong>application range</strong> (how far you can stand from the
        nest), <strong>safety features</strong>. We also consulted BPCA guidance
        on safe wasp nest treatment. Every product listed is available on Amazon
        UK at the time of writing.{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="warning">
          {" "}
          <p>
            If you are allergic to wasp stings, do NOT attempt to treat a nest
            yourself — even with protective clothing. Call a professional pest
            controller. A single sting can cause anaphylaxis in allergic
            individuals, which is a life-threatening medical emergency.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      {/* At a Glance */}{" "}
      <h2 id="at-a-glance">Best Wasp Nest Killers at a Glance</h2>{" "}
      <table>
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Product</th> <th>Type</th> <th>Best For</th>{" "}
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
          value="£50–£80"
          label="Typical cost of professional wasp nest treatment in the UK"
        />{" "}
      </div>{" "}
      {/* Product 1 */}{" "}
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
        The Rentokil Wasp Nest Destroyer Foam is a UK household name for good
        reason. The powerful foam jet lets you treat from 2 metres away — enough
        distance to stay safe while delivering insecticide directly into the
        nest entrance. The active ingredients, d-phenothrin and tetramethrin,
        provide fast contact kill on wasps inside the nest. One 300ml can is
        enough to treat up to 3 large nests, making it excellent value for
        properties with multiple problem areas.{" "}
      </p>{" "}
      <p>
        {" "}
        The foam format is the key advantage here. When sprayed into the nest
        entrance, the foam expands to seal the opening, trapping wasps inside
        with the insecticide. This means fewer wasps escape during treatment,
        significantly reducing the risk of stings. The colony is typically dead
        within 24 hours. Rentokil delivers a reliable, trusted product that
        resolves most wasp nest problems in a single application.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Expanding foam seals entrance — fewer escaping wasps</li>{" "}
        <li>Dual active ingredients for fast contact kill</li>{" "}
        <li>One can treats up to 3 large nests</li>{" "}
        <li>Trusted Rentokil brand with clear instructions</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>2-metre range limits use on elevated nests</li>{" "}
        <li>Foam can be messy on surrounding surfaces</li>{" "}
        <li>Not ideal for hidden cavity nests — use powder instead</li>{" "}
      </ul>{" "}
      {/* Product 2 */}{" "}
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
        When you need maximum distance between you and the nest, the Zero In
        Ultra Power delivers a 4-metre spray range — double the safe distance of
        standard 2-metre foam cans. This extra reach provides a critical safety
        margin, especially for nests that are slightly elevated or in locations
        where you cannot easily retreat. The professional-strength 600ml trigger
        aerosol is noticeably larger than standard cans, providing enough
        product to treat 4-7 nests per can.{" "}
      </p>{" "}
      <p>
        {" "}
        The Ultra Power is suitable for both indoor and outdoor nests, including
        lofts, wall cavities, and roof eaves. The trigger mechanism gives you
        more control over the spray direction compared to standard push-button
        aerosols, allowing precise application even at maximum range. The larger
        can size and extended range make this the best option when you need to
        treat from further away or have multiple nests to deal with across a
        property.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>4-metre range — double the safe distance of standard cans</li>{" "}
        <li>Large 600ml can treats 4-7 nests</li>{" "}
        <li>Trigger aerosol for precise, controlled application</li>{" "}
        <li>Suitable for both indoor and outdoor use</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Bulkier can is harder to handle in tight spaces</li>{" "}
        <li>Larger 600ml can is bulkier to handle</li>{" "}
        <li>Trigger mechanism requires a firm grip</li>{" "}
      </ul>{" "}
      {/* Product 3 */}{" "}
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
        The Zero In Wasp Nest Killer Foam does the job effectively for small to
        medium nests. The fast-acting foam reaches 2 metres and provides 2-3
        treatments per 300ml can. The application is straightforward: spray
        directly into the nest entrance at dusk when wasps are less active, and
        the colony is killed within 24 hours.{" "}
      </p>{" "}
      <p>
        {" "}
        This is a no-frills product that works well for accessible, ground-level
        nests in sheds, garden walls, and air bricks. For homeowners dealing
        with a single small nest that they can approach safely, Zero In offers
        genuine value without compromising on effectiveness.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Fast-acting foam kills colony within 24 hours</li>{" "}
        <li>Simple application — no special technique needed</li>{" "}
        <li>2-3 treatments per can</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Shorter range than the Ultra Power version</li>{" "}
        <li>Smaller can may not be enough for very large nests</li>{" "}
        <li>Fewer features than premium alternatives</li>{" "}
      </ul>{" "}
      {/* Product 4 */}{" "}
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
        Powder is the right choice for wasp nests that are not visible or easily
        accessible — inside air vents, roof eaves, and wall cavities where foam
        simply cannot reach. The Rentokil Wasp Killer Powder contains
        permethrin, a proven insecticide that kills wasps within 24 hours. You
        inject the powder into the entrance hole, and returning wasps walk
        through it, picking it up on their bodies and carrying it deep into the
        nest where it spreads to the queen and other workers.{" "}
      </p>{" "}
      <p>
        {" "}
        This "transfer effect" is what makes powder so effective for hidden
        nests. You do not need to see or reach the nest itself — just treat the
        entrance. Rentokil recommends using the powder alongside foam spray for
        comprehensive treatment: foam for the visible entrance and powder for
        any secondary access points. It is a useful addition to your wasp
        control toolkit and an essential product when dealing with cavity
        nests.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Reaches cavity nests that foam cannot access</li>{" "}
        <li>Permethrin provides effective kill within 24 hours</li>{" "}
        <li>Transfer effect spreads insecticide through the colony</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Not suitable for visible hanging nests — use foam instead</li>{" "}
        <li>150g container is relatively small</li>{" "}
        <li>Needs careful application to avoid inhaling powder</li>{" "}
      </ul>{" "}
      {/* Product 5 */}{" "}
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
        The Zero In twin pack is the practical choice when you can see wasp
        activity but cannot access the nest directly. The included puffer
        applicator lets you accurately inject powder into gaps in walls,
        soffits, and vents where wasps are entering and exiting. Returning wasps
        walk through the powder and carry it into the hidden nest, killing the
        colony from within through the transfer effect.{" "}
      </p>{" "}
      <p>
        {" "}
        Each bottle contains 300g of powder, and the twin pack gives you two
        bottles for extended season use — enough to treat multiple nests across
        the summer months. The child-resistant cap is a welcome safety feature
        for households with young children. This twin pack is the one to choose
        if you need powder rather than foam, particularly for homeowners dealing
        with recurring wasp problems in cavity walls or similar locations.{" "}
      </p>{" "}
      <p>
        <strong>Pros:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Two 300g bottles for extended season coverage</li>{" "}
        <li>Puffer applicator for accurate powder delivery</li>{" "}
        <li>Child-resistant cap for household safety</li>{" "}
        <li>Two cans supplied in one pack</li>{" "}
      </ul>{" "}
      <p>
        <strong>Cons:</strong>
      </p>{" "}
      <ul>
        {" "}
        <li>Powder only — not a substitute for foam on visible nests</li>{" "}
        <li>Takes 24-48 hours for full colony kill</li>{" "}
        <li>Requires dry conditions for best results</li>{" "}
      </ul>{" "}
      {/* Buying Guide */}{" "}
      <h2 id="buying-guide">How to Choose the Right Wasp Nest Killer</h2>{" "}
      <h3>Foam vs Spray vs Powder</h3>{" "}
      <p>
        {" "}
        <strong>Foam</strong> is best for visible nests with a clear entrance —
        the expanding foam seals the hole and traps wasps inside with the
        insecticide. <strong>Jet spray</strong> is best when you need maximum
        range (4+ metres) or cannot approach the nest closely.{" "}
        <strong>Powder</strong> is best for cavity nests (in walls, underground,
        under roof tiles) where the transfer effect kills the hidden colony. For
        most above-ground nests, foam is the safest and most effective
        option.{" "}
      </p>{" "}
      <h3>Spray Range</h3>{" "}
      <p>
        {" "}
        The further you can stand from the nest, the safer you are. Foam
        products typically reach 1-2 metres, while jet sprays can reach 3-4
        metres. If the nest is at height or in a difficult-to-approach location,
        choose a long-range jet spray. For ground-level nests that you can
        safely approach, foam provides better nest penetration and sealing.{" "}
      </p>{" "}
      <h3>Nest Location</h3>{" "}
      <p>
        {" "}
        Ground-level or low-level nests (under sheds, in garden walls, air
        bricks): foam or powder. High-level nests (under eaves, in soffits):
        long-range jet spray. Underground nests: powder. Cavity nests (inside
        walls): powder. Visible hanging nests: foam or jet spray.{" "}
      </p>{" "}
      {/* Safety */}{" "}
      <h2 id="safety">Safety: How to Treat a Wasp Nest Safely</h2>{" "}
      <h3>Timing</h3>{" "}
      <p>
        {" "}
        Always treat at dusk or dawn — wasps are least active and most of the
        colony is inside the nest. Never treat during the day when wasps are
        actively foraging and at their most aggressive.{" "}
      </p>{" "}
      <h3>Protective Clothing</h3>{" "}
      <p>
        {" "}
        Wear long sleeves, trousers tucked into socks, closed shoes, gloves, and
        a hat. A beekeeping veil is ideal if you have one, but not essential.
        Avoid dark clothing — wasps are more aggressive towards dark colours.
        Light-coloured, smooth-textured clothing is least likely to provoke a
        sting.{" "}
      </p>{" "}
      <h3>Plan Your Escape Route</h3>{" "}
      <p>
        {" "}
        Before treating, identify a clear path to retreat to if wasps become
        aggressive. Never use a ladder to treat a wasp nest — if wasps attack,
        you cannot retreat safely from a ladder. If the nest requires a ladder
        to reach, call a professional.{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <Callout type="warning">
          {" "}
          <p>
            Never use a ladder to treat a wasp nest. If wasps become aggressive
            while you are on a ladder, you cannot retreat safely. Nests at
            height should always be treated by a professional pest controller.
          </p>{" "}
        </Callout>{" "}
      </div>{" "}
      <h3>After Treatment</h3>{" "}
      <p>
        {" "}
        Do not approach the nest for at least 24 hours after treatment. Some
        wasps may still be alive and aggressive. After 24-48 hours, observe from
        a distance — if there is no wasp activity at the entrance, the colony is
        dead. You do not need to remove the nest unless you want to for
        aesthetic reasons.{" "}
      </p>{" "}
      {/* FAQ */} <h2 id="faq">Frequently Asked Questions</h2>{" "}
      <h3>What is the best wasp nest killer foam in the UK?</h3>{" "}
      <p>
        {" "}
        Rentokil Wasp Nest Killer Foam is the best overall option. It delivers
        expanding foam that seals the nest entrance and kills wasps through
        contact with the insecticide, reducing the number of escaping
        wasps.{" "}
      </p>{" "}
      <h3>Is it safe to remove a wasp nest yourself?</h3>{" "}
      <p>
        {" "}
        Small, accessible nests can be treated safely with the right products
        and protective clothing. However, nests at height, in enclosed roof
        spaces, very large nests, and situations where you have a wasp allergy
        should always be handled by a professional. Professional treatment
        typically costs £50-£80.{" "}
      </p>{" "}
      <h3>When is the best time to treat a wasp nest?</h3>{" "}
      <p>
        {" "}
        Treat at dusk or dawn when wasps are least active and most of the colony
        is inside the nest. Never attempt treatment during the middle of the
        day.{" "}
      </p>{" "}
      <h3>How long does wasp nest foam take to work?</h3>{" "}
      <p>
        {" "}
        Foam kills wasps within minutes on contact. However, it takes 24-48
        hours for the entire colony to die. Do not approach the nest for at
        least 24 hours after treatment.{" "}
      </p>{" "}
      <h3>Do I need to remove the nest after treating it?</h3>{" "}
      <p>
        {" "}
        No. A treated, dead nest is harmless and will not be reused. Remove it
        only if you want to for aesthetic reasons, and wait at least 48 hours
        after treatment before doing so.{" "}
      </p>{" "}
      <h3>Is wasp nest foam or powder better?</h3>{" "}
      <p>
        {" "}
        Foam is better for visible nests with clear entrances. Powder is better
        for cavity nests, wall voids, and underground nests where the transfer
        effect carries the insecticide deep inside the hidden nest.{" "}
      </p>{" "}
      <div className="not-prose">
        {" "}
        <FindProviderCTA
          heading="Nest Too Big or Too High?"
          subtext="A professional pest controller can safely treat wasp nests at height, in roof spaces, and in other difficult locations — typically for £50-£80"
        />{" "}
      </div>{" "}
      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        {" "}
        <p className="text-gray-700 mb-3">
          Want the full picture on wasp nest removal?
        </p>{" "}
        <a
          href="/guides/wasp-nest-removal"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          {" "}
          Wasp Nest Removal — Complete UK Guide →{" "}
        </a>{" "}
      </div>{" "}
    </GuideLayout>
  );
}
