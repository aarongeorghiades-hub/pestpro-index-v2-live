import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Mouse Poison UK 2026: Strongest & Most Effective | PestPro Index',
    description:
      'Our pick of the best mouse poison available in the UK for 2026. Brodifacoum blocks, grain bait, and paste formulations reviewed with safety advice and buying guidance.',
    alternates: {
      canonical: 'https://pestproindex.com/best/mouse-poison',
    },
    openGraph: {
      title: 'Best Mouse Poison UK 2026: Strongest & Most Effective | PestPro Index',
      description:
        'Our pick of the best mouse poison available in the UK for 2026. Brodifacoum blocks, grain bait, and paste formulations reviewed with safety advice and buying guidance.',
      url: 'https://pestproindex.com/best/mouse-poison',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Mouse Poison UK 2026: Strongest & Most Effective',
  description:
    'Our pick of the best mouse poison available in the UK for 2026. Brodifacoum blocks, grain bait, and paste formulations reviewed with safety advice and buying guidance.',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pestproindex.com/best/mouse-poison',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://pestproindex.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Best',
      item: 'https://pestproindex.com/best',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Mouse Poison UK 2026',
      item: 'https://pestproindex.com/best/mouse-poison',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best mouse poison in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best mouse poison for most UK households is a brodifacoum-based product such as Pest Expert Formula B+ or Roshield blocks. Brodifacoum is the most potent anticoagulant rodenticide available to consumers and delivers a lethal dose in a single feed, making it the fastest-acting option for mouse control.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does mouse poison take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anticoagulant mouse poison typically takes 3 to 5 days to work after ingestion. Brodifacoum-based products tend to work at the faster end of this range, while difenacoum products may take up to 7 days. The delayed action is intentional — it prevents bait shyness so that other mice in the colony continue to feed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mouse poison safe around pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mouse poison is toxic to all mammals, including dogs and cats. You must always use mouse poison inside a tamper-resistant bait station that prevents pet access. Mouse bait stations have smaller entry holes than rat stations, but a determined dog could still chew through a poorly made station. Always use a lockable, professional-quality station and place it where pets cannot reach it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a bait station for mouse poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under CRRU (Campaign for Responsible Rodenticide Use) guidelines, all second-generation anticoagulant rodenticides must be used inside tamper-resistant bait stations in the UK. This protects children, pets, and non-target wildlife from accidental poisoning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can mice become resistant to poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, some mouse populations in the UK have developed genetic resistance to first-generation anticoagulants and, in some areas, to certain second-generation anticoagulants like bromadiolone. If you suspect resistance, switch to a brodifacoum-based product, which remains effective against all known resistant populations. If poison is still not working after 2-3 weeks, call a professional pest controller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I put mouse poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Place mouse bait stations along walls, behind kitchen units, under appliances, near entry points, and close to signs of mouse activity such as droppings, gnaw marks, and grease smears. Mice travel along edges and rarely cross open spaces, so placing stations flush against a wall gives the best results. Check and replenish stations every 2-3 days.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Mouse Poison at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Pest Expert Formula B+ 900g' },
  { id: 'best-starter', title: 'Best Starter Pack — Pest Expert Formula B+ 360g' },
  { id: 'best-blocks', title: 'Best Blocks — The Big Cheese All-Weather 15x10g' },
  { id: 'best-bulk', title: 'Best Bulk — The Big Cheese All-Weather 30x10g' },
  { id: 'best-professional', title: 'Best Professional — Roshield Wax Block Bait 600g' },
  { id: 'buying-guide', title: 'How to Choose the Right Mouse Poison' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestMousePoisonPage() {
  return (
    <GuideLayout
      title="Best Mouse Poison UK 2026: Strongest & Most Effective"
      subtitle="Our pick of the most effective mouse poisons available in the UK, from grain bait to wax blocks and paste formulations"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Rat Poison UK 2026', href: '/best/rat-poison' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Rat Bait Stations UK 2026', href: '/best/rat-bait-stations' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
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
          <strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small commission at no extra cost to you. This helps us keep the site running and free for everyone. As an Amazon Associate, PestPro Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Mice are the most common pest in UK homes. According to the British Pest Control Association (BPCA), house mice infest an estimated 900,000 UK properties each year, with numbers peaking in autumn and winter as mice move indoors seeking warmth and food. A single pair of mice can produce up to 80 offspring in a year, meaning a small problem can escalate into a serious infestation within weeks if left unchecked.
      </p>
      <p>
        While traps are effective for small numbers, mouse poison (rodenticide) is often the most practical solution for larger infestations or situations where mice are nesting in inaccessible locations such as wall cavities, under floorboards, or behind fitted kitchens. Modern anticoagulant rodenticides are highly effective when used correctly — but understanding the different active ingredients, formulations, and safety requirements is essential before you buy.
      </p>
      <p>
        To compile this guide, we evaluated dozens of mouse poison products on Amazon UK based on <strong>active ingredient potency</strong>, <strong>formulation type</strong>, <strong>genuine customer reviews</strong>, and <strong>value for money</strong>. We also consulted CRRU (Campaign for Responsible Rodenticide Use) guidance to ensure every recommendation is safe and compliant with UK regulations. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Mouse poison is toxic to all mammals, including pets and children. Always use rodenticide inside a tamper-resistant bait station. Never place loose poison where children or animals can access it.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Mouse Poison at a Glance</h2>
      <p>
        Here is a quick comparison of our top five picks. Each product targets a different use case, so the best choice depends on your situation.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Active Ingredient</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pest Expert Formula B+ 900g</td>
            <td>Brodifacoum</td>
            <td>Best Overall</td>
            <td>~£25</td>
          </tr>
          <tr>
            <td>Pest Expert Formula B+ 360g</td>
            <td>Brodifacoum</td>
            <td>Best Starter Pack</td>
            <td>~£14</td>
          </tr>
          <tr>
            <td>The Big Cheese All-Weather 15x10g</td>
            <td>Difenacoum</td>
            <td>Best Blocks</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>The Big Cheese All-Weather 30x10g</td>
            <td>Difenacoum</td>
            <td>Best Bulk</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>Roshield Wax Block Bait 600g</td>
            <td>Bromadiolone</td>
            <td>Best Professional</td>
            <td>~£15</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="900,000" label="UK homes infested with mice each year (BPCA estimate)" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Pest Expert Formula B+ Rat & Mouse Killer Poison 900g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula B+ Rat & Mouse Killer Poison 900g (15x60g)"
          rank={1}
          rating={4.5}
          features={[
            "Maximum-strength Brodifacoum 0.0029% — single-feed kills",
            '15 x 60g sachets for thorough whole-property baiting',
            'Effective indoors and outdoors in bait stations',
            "The UK's strongest mouse poison available to the amateur market",
          ]}
          price="£25"
          asin="B07B51YPRR"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Pest Expert Formula B+ takes our top spot because it is the strongest mouse poison you can buy in the UK without a professional licence. The active ingredient is Brodifacoum at 0.0029% — the maximum concentration permitted for amateur use — and it delivers a lethal dose in a single feed. That single-feed action is critical: mice are cautious nibblers that sample small amounts from multiple food sources, so a poison that kills after one feed is far more reliable than one that requires repeat visits.
      </p>
      <p>
        This 900g pack contains 15 individually wrapped 60g sachets, giving you enough bait to load multiple stations across an entire property. The sachets are ready to use — simply drop one into each tamper-resistant bait station and place along walls, behind kitchen units, and near entry points. Check and replace every 2-3 days until consumption stops, which typically indicates the colony has been eliminated.
      </p>
      <p>
        Formula B+ is the same product trusted by professional pest controllers throughout the UK. It works equally well indoors and outdoors when used inside a bait station, and the generous 900g quantity means you will not run out mid-treatment even on a larger property. For a serious mouse infestation, this is the product to reach for first.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Brodifacoum — the most potent SGAR available to consumers</li>
        <li>Single-feed lethality for fastest colony knockdown</li>
        <li>Generous 15-sachet pack covers a whole property</li>
        <li>Professional-grade product with strong reviews</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Must be used inside a tamper-resistant bait station</li>
        <li>Higher price than basic alternatives</li>
        <li>Sachets can absorb moisture in very damp locations</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-starter">Best Starter Pack — Pest Expert Formula B+ Mouse & Rat Poison 360g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula B+ Mouse & Rat Poison 360g (6x60g)"
          rank={2}
          rating={4.4}
          features={[
            'Same single-feed Brodifacoum formula as the 900g pack',
            '6 x 60g sachets — ideal for a small infestation',
            'Best value entry point for homeowners',
            'Perfect for a single property or targeted baiting',
          ]}
          price="£14"
          asin="B07TLY5CGS"
          bestFor="Best Starter Pack"
        />
      </div>
      <p>
        If you are dealing with a small mouse problem — perhaps a few droppings in the kitchen or a single mouse spotted at night — the 360g starter pack of Formula B+ is the most cost-effective way to deploy the strongest amateur-grade poison. It contains the identical Brodifacoum formulation as the 900g pack above, just in a smaller quantity: six 60g sachets, enough to load 2-3 bait stations for a targeted treatment.
      </p>
      <p>
        This is the pack to choose when you want maximum potency without committing to a bulk purchase. Six sachets is typically sufficient for a single property with a localised infestation — place stations in the kitchen, utility room, and any other area showing signs of activity. If you find you need more, you can always step up to the 900g pack for a follow-up treatment.
      </p>
      <p>
        At around £14, the 360g pack represents the best value entry point for homeowners who want professional-grade results. The single-feed Brodifacoum action means you are not relying on mice returning for multiple feeds, which is especially important in kitchens where competing food sources can distract rodents from bait stations.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Identical Brodifacoum formula to the full-size pack</li>
        <li>Affordable entry point at around £14</li>
        <li>Ideal quantity for a small or localised infestation</li>
        <li>Single-feed lethality — no repeat visits needed</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Only 6 sachets — may not be enough for larger properties</li>
        <li>Higher cost per gram than the 900g pack</li>
        <li>Bait station not included — must buy separately</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-blocks">Best Blocks — The Big Cheese All-Weather Bait Block 15x10g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="The Big Cheese All-Weather Bait Block 15x10g"
          rank={3}
          rating={4.1}
          features={[
            'Multi-feed difenacoum bait blocks',
            'Moisture-resistant — suitable for damp conditions',
            '15 ready-to-use blocks from a trusted UK brand',
            'Must be used with a tamper-resistant bait station',
          ]}
          price="£8"
          asin="B077MH6BVS"
          bestFor="Best Blocks"
        />
      </div>
      <p>
        The Big Cheese is one of the UK's best-known rodent control brands, and their All-Weather Bait Blocks are a reliable, affordable option for mouse control in damp or challenging environments. The blocks use difenacoum as their active ingredient — a second-generation anticoagulant that requires multiple feeds to deliver a lethal dose but carries a lower secondary poisoning risk than brodifacoum, making it a more conservative choice in areas with active wildlife.
      </p>
      <p>
        The key advantage of these blocks is their moisture resistance. Unlike grain or paste baits that can absorb water and deteriorate, the wax-bound block formulation holds up in damp garages, sheds, outbuildings, and outdoor bait stations. The 15 pre-formed 10g blocks are ready to use straight from the pack — simply place inside a tamper-resistant bait station and check every few days for signs of feeding.
      </p>
      <p>
        At around £8 for 15 blocks, this is an excellent-value option from a brand you can trust. The blocks are easy to handle and monitor — gnaw marks are clearly visible, so you can track consumption and judge when the infestation is coming under control. For standard mouse problems in typical UK conditions, these blocks offer a solid balance of effectiveness, safety, and affordability.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Moisture-resistant for damp and outdoor locations</li>
        <li>Trusted Big Cheese brand with strong market presence</li>
        <li>Affordable at around £8 for 15 blocks</li>
        <li>Easy to monitor consumption via gnaw marks</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Difenacoum requires multiple feeds — slower than brodifacoum</li>
        <li>Less palatable to mice than grain-based baits</li>
        <li>Bait station not included — must buy separately</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-bulk">Best Bulk — The Big Cheese All-Weather Rodent Block 30x10g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="The Big Cheese All-Weather Rodent Block 30x10g"
          rank={4}
          rating={4.1}
          features={[
            'Bulk pack — 30 bait blocks for larger infestations',
            'Same damp-proof difenacoum formula as the 15-pack',
            'Excellent value for landlords or repeat users',
            'Suitable for multiple bait stations across a property',
          ]}
          price="£12"
          asin="B077MBL7MS"
          bestFor="Best Bulk Pack"
        />
      </div>
      <p>
        The 30-block bulk pack is the same proven All-Weather formula as the standard 15-pack above, doubled up for larger infestations or properties that need multiple bait stations. At around £12, you are getting twice the bait for significantly less than twice the price — making this the obvious choice for landlords managing multiple properties, homeowners with extensive outbuildings, or anyone who wants spare bait on hand for ongoing preventative baiting.
      </p>
      <p>
        The damp-proof wax formulation holds up in any UK climate condition, from draughty loft spaces to damp cellars and external bait stations. Each 10g block fits neatly into standard mouse bait stations, and the 30-block quantity allows you to maintain a comprehensive baiting programme with stations placed at every potential entry point and activity hotspot around the property.
      </p>
      <p>
        For repeat users who already know the product works, the bulk pack eliminates the frustration of running out mid-treatment. It is also the most practical option if you are maintaining bait stations year-round as a preventative measure — topping up stations every few months to intercept new mice before they have a chance to establish inside the property.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Excellent value — nearly double the bait for less than double the price</li>
        <li>Same proven damp-proof formula as the standard pack</li>
        <li>Enough bait for multiple stations across a large property</li>
        <li>Ideal for ongoing preventative baiting programmes</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Difenacoum is slower-acting than brodifacoum</li>
        <li>May be more than needed for a single small infestation</li>
        <li>Requires tamper-resistant bait stations (not included)</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-professional">Best Professional — Roshield Wax Block Bait 600g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Roshield Wax Block Bait 600g (2x300g Bromadiolone)"
          rank={5}
          rating={4.3}
          features={[
            "UK-made bromadiolone wax blocks from the professional pest control industry's preferred brand",
            'Chocolatey scent for excellent rodent uptake',
            'Threads onto bait station rod for secure mounting',
            '2 x 300g packs for sustained control',
          ]}
          price="£15"
          asin="B076QFPHLH"
          bestFor="Best Professional"
        />
      </div>
      <p>
        Roshield is the brand most frequently specified by professional pest controllers in the UK, and their bromadiolone wax blocks bring that professional pedigree to the consumer market. The blocks are UK-made and use bromadiolone — a potent second-generation anticoagulant that sits between difenacoum and brodifacoum in terms of strength. Bromadiolone is effective against most mouse populations, though some resistant strains in parts of the UK may require brodifacoum instead.
      </p>
      <p>
        The standout feature of these blocks is their palatability. The wax formulation includes a chocolatey scent that rodents find extremely attractive, resulting in excellent bait uptake even in environments where mice have access to competing food sources. Each block has a central hole for threading onto the bait rod inside your station, which prevents mice from carrying chunks of bait away — keeping the poison safely contained within the station.
      </p>
      <p>
        The 600g pack (2 x 300g bags) provides plenty of bait for sustained control across multiple stations. The wax formulation is durable and weather-resistant, making it suitable for both indoor and outdoor use. For anyone who wants a professional-specification product with proven field performance, Roshield delivers exactly what pest controllers rely on every day.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional pest control industry standard brand</li>
        <li>Chocolatey scent for excellent rodent uptake</li>
        <li>Weatherproof wax blocks suitable indoors and outdoors</li>
        <li>Secure bait rod mounting prevents bait displacement</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Bromadiolone may not work on resistant mouse populations</li>
        <li>Blocks are less palatable to mice than grain-based baits</li>
        <li>Bait station not included — must buy separately</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">How to Choose the Right Mouse Poison</h2>

      <h3>Active Ingredient</h3>
      <p>
        <strong>Brodifacoum</strong> is the strongest and fastest-acting option — choose this for severe infestations or resistant mouse populations. <strong>Difenacoum</strong> is gentler but still effective — suitable for minor problems and areas with active wildlife. <strong>Alphachloralose</strong> is a non-anticoagulant option that works fast (24 hours) but only on mice, not rats.
      </p>

      <h3>Formulation</h3>
      <p>
        <strong>Grain</strong> is the most palatable for mice. <strong>Blocks</strong> are the most durable and weather-resistant. <strong>Paste</strong> is the most palatable overall and best for when other formulations are being ignored. For most indoor mouse problems, grain is the default. For outdoor or damp locations, blocks or paste are better choices.
      </p>

      <h3>Bait Stations</h3>
      <p>
        You must use a tamper-resistant bait station with all SGAR rodenticides. If you do not already own stations, buy a complete kit (like the Pest Expert kit) rather than purchasing bait and stations separately — it is usually cheaper and guarantees compatibility. Mouse bait stations are smaller than rat stations, with appropriately sized entry holes.
      </p>

      <h3>Location</h3>
      <p>
        Place bait stations where you have seen signs of mouse activity — droppings (small, dark, rice-grain-sized pellets), gnaw marks, grease smears along skirting boards, and nesting material. Common hotspots include behind kitchen units, under appliances, in airing cupboards, loft spaces, and garages. Place stations flush against walls where mice travel.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Mice are nibblers — they take small amounts from many food sources rather than eating a full meal in one place. Use several bait stations with small amounts of poison rather than one station with a large amount. This maximises the chance that every mouse in the colony encounters the bait.</p>
        </Callout>
      </div>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best mouse poison in the UK?</h3>
      <p>
        The best mouse poison for most UK households is a brodifacoum-based product such as Pest Expert Formula B+ or Roshield blocks. Brodifacoum is the most potent anticoagulant rodenticide available to consumers and delivers a lethal dose in a single feed, making it the fastest-acting option for mouse control.
      </p>

      <h3>How long does mouse poison take to work?</h3>
      <p>
        Anticoagulant mouse poison typically takes 3 to 5 days to work after ingestion. Brodifacoum-based products tend to work at the faster end of this range, while difenacoum products may take up to 7 days. The delayed action is intentional — it prevents bait shyness so that other mice in the colony continue to feed.
      </p>

      <h3>Is mouse poison safe around pets?</h3>
      <p>
        Mouse poison is toxic to all mammals, including dogs and cats. You must always use mouse poison inside a tamper-resistant bait station that prevents pet access. Always use a lockable, professional-quality station and place it where pets cannot reach it. If you suspect a pet has ingested mouse poison, contact your vet immediately.
      </p>

      <h3>Do I need a bait station for mouse poison?</h3>
      <p>
        Yes. Under CRRU guidelines, all second-generation anticoagulant rodenticides must be used inside tamper-resistant bait stations in the UK. This protects children, pets, and non-target wildlife from accidental poisoning.
      </p>

      <h3>Can mice become resistant to poison?</h3>
      <p>
        Yes, some mouse populations in the UK have developed genetic resistance to certain anticoagulants. If you suspect resistance, switch to a brodifacoum-based product, which remains effective against all known resistant populations. If poison is still not working after 2-3 weeks, call a professional pest controller.
      </p>

      <h3>Where should I put mouse poison?</h3>
      <p>
        Place mouse bait stations along walls, behind kitchen units, under appliances, near entry points, and close to signs of mouse activity such as droppings, gnaw marks, and grease smears. Mice travel along edges and rarely cross open spaces, so placing stations flush against a wall gives the best results.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Mice Still Coming Back?"
          subtext="If DIY poison hasn't solved the problem, a professional pest controller can identify entry points and implement a long-term solution"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Prefer traps over poison?</p>
        <a
          href="/best/mouse-traps"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Mouse Traps UK 2026 →
        </a>
      </div>
    </GuideLayout>
  );
}
