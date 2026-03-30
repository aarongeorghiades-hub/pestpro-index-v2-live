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
  { id: 'best-overall', title: 'Best Overall — Pest Expert Formula B+ Grain Bait' },
  { id: 'best-blocks', title: 'Best Blocks — Roshield Brodifacoum Blocks' },
  { id: 'best-value', title: 'Best Value — The Big Cheese Mouse Killer Grain' },
  { id: 'best-paste', title: 'Best Paste — Racan Force Paste Sachets' },
  { id: 'best-kit', title: 'Best Complete Kit — Pest Expert Mouse Poison Kit' },
  { id: 'best-brand', title: 'Best Trusted Brand — Rentokil Mouse Killer' },
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
        Here is a quick comparison of our top six picks. Each product targets a different use case, so the best choice depends on your situation.
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
            <td>Pest Expert Formula B+ Grain Bait</td>
            <td>Brodifacoum</td>
            <td>Best Overall</td>
            <td>~£14</td>
          </tr>
          <tr>
            <td>Roshield Brodifacoum Blocks</td>
            <td>Brodifacoum</td>
            <td>Best Blocks</td>
            <td>~£13</td>
          </tr>
          <tr>
            <td>The Big Cheese Mouse Killer Grain</td>
            <td>Alphachloralose</td>
            <td>Best Value</td>
            <td>~£6</td>
          </tr>
          <tr>
            <td>Racan Force Paste Sachets</td>
            <td>Brodifacoum</td>
            <td>Best Paste</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>Pest Expert Mouse Poison Kit</td>
            <td>Brodifacoum</td>
            <td>Best Complete Kit</td>
            <td>~£22</td>
          </tr>
          <tr>
            <td>Rentokil Mouse Killer Grain</td>
            <td>Difenacoum</td>
            <td>Best Trusted Brand</td>
            <td>~£6</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="900,000" label="UK homes infested with mice each year (BPCA estimate)" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Pest Expert Formula B+ Grain Bait</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula B+ Mouse Killer Grain Bait"
          rank={1}
          rating={4.5}
          features={[
            'Professional-strength brodifacoum grain bait',
            'Highly palatable wheat-based formula mice prefer',
            'Single-feed lethal dose for fast results',
            'Blue-dyed grains for easy monitoring',
          ]}
          price="£14"
          asin="B010E2GCIM"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Pest Expert Formula B+ takes our top spot for mouse poison because it combines the strongest available active ingredient with the most palatable formulation. Brodifacoum delivers a lethal dose in a single feed, and the wheat grain format is exactly what mice prefer to eat — making this the fastest, most effective option for eliminating a mouse infestation.
      </p>
      <p>
        Mice are primarily grain and seed eaters, so a wheat-based bait has a natural advantage over blocks or paste. The Formula B+ grains are treated with a bittering agent (Bitrex) to deter accidental ingestion by children while remaining highly attractive to rodents. The distinctive blue-green dye makes it easy to spot consumed bait and monitor uptake levels inside your bait station.
      </p>
      <p>
        This is the same product used by professional pest controllers across the UK. The grain flows easily into mouse bait stations and can be deployed in bait trays or directly on the station floor. For maximum effect, place 10-20g of grain per station and check every 2-3 days, topping up as needed until consumption stops — which indicates the colony has been controlled.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Brodifacoum — the most potent SGAR available to consumers</li>
        <li>Wheat grain format that mice naturally prefer</li>
        <li>Single-feed lethality for fastest colony knockdown</li>
        <li>Professional-grade product with strong reviews</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Grain can absorb moisture in damp locations</li>
        <li>Must be used inside a tamper-resistant bait station</li>
        <li>Higher price than basic alternatives</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-blocks">Best Blocks — Roshield Brodifacoum Wax Blocks</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Roshield Brodifacoum Wax Blocks"
          rank={2}
          rating={4.4}
          features={[
            'Brodifacoum 0.005% wax block formulation',
            'Waterproof and mould-resistant for any location',
            'Central hole for secure mounting in bait stations',
            'Long-lasting — ideal for ongoing prevention',
          ]}
          price="£13"
          asin="B0DL2SLHTM"
          bestFor="Best Blocks"
        />
      </div>
      <p>
        If you need a mouse poison that works reliably in damp or outdoor locations, Roshield wax blocks are the best choice. The wax formulation is completely waterproof — it will not absorb moisture, go mouldy, or deteriorate in the UK's persistently damp climate. This makes blocks the go-to formulation for garages, sheds, outbuildings, and any location where grain bait would degrade.
      </p>
      <p>
        Each block contains brodifacoum at the maximum permitted concentration (0.005%), delivering the same single-feed lethality as the grain bait above but in a more durable format. The central hole allows you to thread blocks onto the bait rod inside your station, preventing mice from dragging bait out — an important safety feature that keeps the rodenticide contained within the station.
      </p>
      <p>
        Blocks are also easier to monitor than grain. You can clearly see gnaw marks and estimate how much has been consumed at each check, which helps you track the progress of your baiting programme and judge when the infestation is under control. For long-term preventative baiting around the perimeter of a property, blocks are the professional's choice because of their durability and longevity.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Completely waterproof and mould-resistant</li>
        <li>Brodifacoum strength with single-feed lethality</li>
        <li>Secure mounting prevents bait being dragged away</li>
        <li>Easy to monitor consumption levels</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Slightly less palatable to mice than grain</li>
        <li>Bait station not included — must buy separately</li>
        <li>Takes 3-5 days to take effect</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-value">Best Value — The Big Cheese Mouse Killer Grain</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="The Big Cheese Mouse Killer Grain Sachets"
          rank={3}
          rating={4.0}
          features={[
            'Alphachloralose-based — fast-acting narcotic poison',
            'Works in as little as 24 hours',
            'Pre-measured sachets for easy use',
            'Excellent value at under £6',
          ]}
          price="£6"
          asin="B088TH1XCS"
          bestFor="Best Budget"
        />
      </div>
      <p>
        The Big Cheese is one of the UK's most popular pest control brands, and their mouse killer grain sachets offer an affordable entry point for tackling a mouse problem. Unlike the other products on this list, these sachets use alphachloralose rather than an anticoagulant — a narcotic agent that works by lowering the mouse's body temperature, causing it to fall into a deep sleep from which it does not wake.
      </p>
      <p>
        The advantage of alphachloralose is speed. While anticoagulant poisons take 3-7 days to work, alphachloralose can kill mice within 24 hours. However, it is only effective on mice — it is not potent enough to kill rats, and it works best in cooler environments (it is less effective in warm conditions where the mouse's body temperature does not drop sufficiently). For a straightforward mouse problem in a typical UK home during autumn or winter, it is a highly effective and affordable option.
      </p>
      <p>
        The pre-measured sachets make deployment simple — place one or two sachets per bait station and check daily. At under £6 per pack, this is by far the most budget-friendly option on our list, making it ideal for people dealing with a minor mouse problem who want a quick, affordable solution.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Fast-acting — can work within 24 hours</li>
        <li>Excellent value at under £6</li>
        <li>Pre-measured sachets for easy, mess-free use</li>
        <li>Well-known, trusted brand</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Only effective on mice, not rats</li>
        <li>Less effective in warm environments</li>
        <li>Not as potent as brodifacoum for severe infestations</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-paste">Best Paste — Racan Force Paste Sachets</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Racan Force Mouse & Rat Killer Paste"
          rank={4}
          rating={4.2}
          features={[
            'Brodifacoum paste — extremely palatable to mice',
            'Moisture-resistant for damp locations',
            'Individual foil sachets for clean deployment',
            'Ideal when mice reject other bait types',
          ]}
          price="£15"
          asin="B07H8NZGH7"
          bestFor="Best Paste Bait"
        />
      </div>
      <p>
        If mice in your property have been ignoring grain bait or blocks — a frustrating but not uncommon scenario — paste is often the solution. Racan Force paste is extremely palatable, with a soft texture and strong scent that mice find irresistible even in environments where they have access to other food sources. Professional pest controllers frequently switch to paste as a "second line" treatment when standard formulations are not being taken.
      </p>
      <p>
        The brodifacoum content means this paste is just as potent as the top-ranked grain and block products — delivering a lethal dose in a single feed. The moisture-resistant formulation also makes it suitable for damp areas like cellars, underfloor voids, and external bait stations, where grain bait would quickly degrade. Each foil sachet can be placed directly inside a bait station without any handling of the poison itself.
      </p>
      <p>
        Paste is more expensive per gram than grain or block alternatives, so it is not the most cost-effective choice for large-scale baiting. But for targeted use in areas where other formulations have failed, it is often the breakthrough product that finally gets results.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Extremely palatable — works when other baits fail</li>
        <li>Brodifacoum strength for single-feed lethality</li>
        <li>Moisture-resistant for damp environments</li>
        <li>Clean foil sachet deployment</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>More expensive per gram than grain or blocks</li>
        <li>Smaller pack sizes</li>
        <li>Overkill for a basic mouse problem that standard bait would solve</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-kit">Best Complete Kit — Pest Expert Mouse Poison Kit</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Mouse Poison Bait Box Kit"
          rank={5}
          rating={4.3}
          features={[
            'Complete kit: brodifacoum grain + tamper-resistant bait stations',
            'Professional-quality lockable stations included',
            'Everything needed for immediate deployment',
            'Ideal for beginners — no separate purchases needed',
          ]}
          price="£22"
          asin="B010E2H7KY"
          bestFor="Best Complete Kit"
        />
      </div>
      <p>
        For anyone new to rodenticide, the Pest Expert Mouse Poison Kit eliminates all the guesswork. It includes both the poison (professional-strength brodifacoum grain) and tamper-resistant bait stations — everything you need to start baiting immediately. No need to research which station is compatible with which bait, or whether you have the right size for mice versus rats.
      </p>
      <p>
        The included stations are proper lockable units with small entry holes sized for mice. They require a key to open, are made from durable plastic that will withstand outdoor conditions, and have restricted access points that prevent children, pets, and non-target animals from reaching the bait inside. These are the same type of stations that professional pest controllers deploy.
      </p>
      <p>
        At £22, the kit represents good value compared to buying components separately — especially when you factor in that you get multiple stations plus a generous supply of grain bait. For a first-time user who wants a reliable, one-purchase solution, this is the most convenient option on our list.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Everything included — poison, stations, and instructions</li>
        <li>Professional-quality lockable bait stations</li>
        <li>Brodifacoum grain for maximum effectiveness</li>
        <li>Great value as a complete package</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher upfront cost than buying bait alone</li>
        <li>May not need the stations if you already own them</li>
        <li>Kit contents are fixed — no customisation</li>
      </ul>

      {/* Product 6 */}
      <h2 id="best-brand">Best Trusted Brand — Rentokil Mouse Killer</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil Mouse Killer Grain Bait"
          rank={6}
          rating={4.0}
          features={[
            'From Rentokil — the UK\'s most trusted pest brand',
            'Difenacoum-based grain bait',
            'Clear, beginner-friendly instructions',
            'Available everywhere — supermarkets, hardware stores, Amazon',
          ]}
          price="£6"
          asin="B07BFQ1V5L"
          bestFor="Best Trusted Brand"
        />
      </div>
      <p>
        Rentokil is the name most people think of when they think of pest control in the UK, and their mouse killer grain bait is the go-to product for first-time users who want a familiar, trusted brand. Available in virtually every hardware store and supermarket, it is the most accessible mouse poison on the market.
      </p>
      <p>
        The active ingredient is difenacoum, a second-generation anticoagulant that is effective but less potent than brodifacoum. This means it may take multiple feeds and 5-7 days to achieve a lethal dose, rather than the single-feed action of brodifacoum products. However, difenacoum carries a lower secondary poisoning risk, making it a more conservative choice in areas where owls, kestrels, or other predators might consume poisoned mice.
      </p>
      <p>
        The packaging includes clear, step-by-step instructions that are particularly helpful for beginners. Rentokil also provides a customer support line for product queries, which is reassuring if you have never used rodenticide before. For a minor mouse problem in a standard UK home, Rentokil grain bait is a perfectly adequate and affordable solution.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Trusted Rentokil brand name</li>
        <li>Clear instructions for beginners</li>
        <li>Lower secondary poisoning risk with difenacoum</li>
        <li>Very affordable at around £6</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less potent than brodifacoum — slower acting</li>
        <li>May not control severe or resistant infestations</li>
        <li>Smaller quantity per pack</li>
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
