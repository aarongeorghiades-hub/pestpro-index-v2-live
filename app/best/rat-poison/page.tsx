import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Rat Poison UK 2026: Strongest & Most Effective | PestPro Index',
    description:
      'Our pick of the best rat poison available in the UK for 2026. Brodifacoum blocks, bromadiolone grain bait, and paste formulations reviewed with safety advice and buying guidance.',
    alternates: {
      canonical: 'https://pestproindex.com/best/rat-poison',
    },
    openGraph: {
      title: 'Best Rat Poison UK 2026: Strongest & Most Effective | PestPro Index',
      description:
        'Our pick of the best rat poison available in the UK for 2026. Brodifacoum blocks, bromadiolone grain bait, and paste formulations reviewed with safety advice and buying guidance.',
      url: 'https://pestproindex.com/best/rat-poison',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Rat Poison UK 2026: Strongest & Most Effective',
  description:
    'Our pick of the best rat poison available in the UK for 2026. Brodifacoum blocks, bromadiolone grain bait, and paste formulations reviewed with safety advice and buying guidance.',
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
    '@id': 'https://pestproindex.com/best/rat-poison',
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
      name: 'Best Rat Poison UK 2026',
      item: 'https://pestproindex.com/best/rat-poison',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it legal to buy rat poison in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can legally buy rat poison in the UK for use on your own property. However, since 2018, the Campaign for Responsible Rodenticide Use (CRRU) requires that all second-generation anticoagulant rodenticides (SGARs) such as brodifacoum and bromadiolone are used inside tamper-resistant bait stations. You must also follow the label instructions carefully and take reasonable steps to prevent access by children, pets, and non-target wildlife.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the strongest rat poison available in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brodifacoum is the most potent anticoagulant rodenticide available to UK consumers. It is a second-generation anticoagulant that typically delivers a lethal dose in a single feed. Products containing brodifacoum, such as Roshield blocks, are the strongest rat poisons you can buy without a professional licence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does rat poison take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most anticoagulant rat poisons take 3 to 7 days to kill a rat after ingestion. This delayed action is intentional — it prevents bait shyness, as rats cannot associate the bait with the illness. Brodifacoum-based products tend to work faster (3-5 days), while bromadiolone and difenacoum may take up to 7 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is rat poison safe around pets and children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rat poison is toxic to all mammals, including dogs, cats, and humans. You must always use rat poison inside a locked, tamper-resistant bait station to prevent access by children and pets. If you suspect a pet or child has ingested rat poison, seek immediate medical or veterinary attention. The antidote for anticoagulant poisoning is Vitamin K1.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a bait station for rat poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under CRRU guidelines, all second-generation anticoagulant rodenticides (SGARs) must be used inside tamper-resistant bait stations in the UK. This applies to both indoor and outdoor use. Using loose poison without a bait station is not only dangerous but also non-compliant with UK best practice and potentially illegal if it results in harm to non-target animals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I place rat poison bait stations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Place bait stations along known rat runs — typically against walls, along fence lines, near burrow entrances, and close to signs of activity such as droppings and gnaw marks. Rats are thigmotactic (they like to travel along edges), so positioning stations flush against a wall or structure maximises the chance of rats finding and entering them. Check stations every 2-3 days and replace consumed bait.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I call a professional instead of using rat poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should call a professional pest controller if: the infestation persists after 2-3 weeks of baiting, you are seeing rats during the daytime (a sign of a large population), the rats are in a location that is difficult to access (such as inside wall cavities or under floorboards), or you are uncomfortable handling rodenticides. A BPCA-certified technician has access to professional-strength products and can implement a comprehensive treatment plan.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Rat Poison at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Roshield Brodifacoum Blocks' },
  { id: 'best-professional', title: 'Best Professional-Strength — Pest Expert Formula B+' },
  { id: 'best-value', title: 'Best Value — Elixir Gardens Rodex Sachets' },
  { id: 'best-brand', title: 'Best Trusted Brand — Rentokil Rodine Grain Bait' },
  { id: 'best-paste', title: 'Best Paste Bait — Racan Force Paste' },
  { id: 'best-kit', title: 'Best Combo Kit — Pest Expert Bait Block Kit' },
  { id: 'buying-guide', title: 'How to Choose the Right Rat Poison' },
  { id: 'safety', title: 'Safety and Legal Requirements' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestRatPoisonPage() {
  return (
    <GuideLayout
      title="Best Rat Poison UK 2026: Strongest & Most Effective"
      subtitle="Our pick of the most effective rat poisons available in the UK, from brodifacoum blocks to grain bait and paste formulations"
      lastUpdated="March 2026"
      readingTime="10 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
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
      ]}
      relatedProducts={[
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Rat Bait Stations UK 2026', href: '/best/rat-bait-stations' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Mouse Poison UK 2026', href: '/best/mouse-poison' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
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
        Rat poison — known in the pest control industry as rodenticide — remains the most widely used method for controlling rat populations in the UK. According to the British Pest Control Association (BPCA), rats cause an estimated £1.2 billion in damage to UK properties each year, gnawing through electrical cables, contaminating food stores, and spreading diseases including leptospirosis (Weil's disease) and salmonella. When traps alone are not enough, or when you are dealing with a large infestation in a hard-to-reach location, poison is often the most practical and effective solution.
      </p>
      <p>
        However, buying rat poison in the UK is not as straightforward as it used to be. Since 2018, the Campaign for Responsible Rodenticide Use (CRRU) has tightened the rules around second-generation anticoagulant rodenticides (SGARs) — the most effective class of rat poison. All SGARs must now be used inside tamper-resistant bait stations, and users are expected to follow strict label instructions to minimise the risk to non-target wildlife, pets, and children. Understanding the different active ingredients, formulations, and legal requirements is essential before you buy.
      </p>
      <p>
        To compile this guide, we evaluated dozens of rat poison products available on Amazon UK based on four criteria: <strong>active ingredient potency</strong>, <strong>formulation type</strong> (blocks, grain, paste), <strong>genuine customer reviews</strong>, and <strong>value for money</strong>. We also consulted CRRU guidance and BPCA best practice to ensure every recommendation is safe, legal, and effective when used correctly. Every product on this page is available for delivery via Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Rat poison is toxic to all mammals, including dogs, cats, and humans. Always use rodenticide inside a locked, tamper-resistant bait station. Keep out of reach of children and pets. If accidental ingestion is suspected, seek immediate medical or veterinary attention.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Rat Poison at a Glance</h2>
      <p>
        Here is a quick comparison of our top six picks. Each product has been selected for a different use case, so the best choice depends on the severity of your infestation, your budget, and where you need to place the bait.
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
            <td>Roshield Brodifacoum Blocks</td>
            <td>Brodifacoum (0.005%)</td>
            <td>Best Overall</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>Pest Expert Formula B+ Grain Bait</td>
            <td>Brodifacoum (0.005%)</td>
            <td>Best Professional-Strength</td>
            <td>~£20</td>
          </tr>
          <tr>
            <td>Elixir Gardens Rodex Sachets</td>
            <td>Bromadiolone (0.005%)</td>
            <td>Best Value</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>Rentokil Rodine Grain Bait</td>
            <td>Difenacoum (0.005%)</td>
            <td>Best Trusted Brand</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Racan Force Paste</td>
            <td>Brodifacoum (0.005%)</td>
            <td>Best Paste Bait</td>
            <td>~£18</td>
          </tr>
          <tr>
            <td>Pest Expert Bait Block Kit</td>
            <td>Brodifacoum (0.005%)</td>
            <td>Best Combo Kit</td>
            <td>~£25</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="3–7 days" label="Time for anticoagulant rat poison to take effect after ingestion" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Roshield Brodifacoum Blocks</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Roshield Brodifacoum Wax Blocks"
          rank={1}
          rating={4.5}
          features={[
            'Contains brodifacoum 0.005% — the strongest SGAR available',
            'Wax block formulation resists moisture and mould',
            'Single-feed lethal dose for rapid results',
            'Suitable for indoor and outdoor use in bait stations',
          ]}
          price="£15"
          asin="B0DL2SLHTM"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Roshield Brodifacoum Wax Blocks take our top spot because they combine the most potent active ingredient available to UK consumers with a durable, weather-resistant formulation. Brodifacoum is classified as a second-generation anticoagulant rodenticide (SGAR) and is the strongest rat poison you can buy without a professional licence. It works by preventing blood clotting, and a single feed is typically enough to deliver a lethal dose — meaning the rat does not need to return to the bait multiple times.
      </p>
      <p>
        The wax block formulation is a significant advantage over loose grain or pellet baits. Wax blocks are virtually waterproof, so they do not absorb moisture, go mouldy, or deteriorate when used outdoors in the UK's consistently damp climate. They also hold their shape inside bait stations, making them easy to secure on the bait rod or peg that most stations include. This means the blocks stay in place, and you can clearly see how much has been consumed when you check the station.
      </p>
      <p>
        Each block includes a central hole for threading onto a bait station rod, which prevents rats from dragging the bait out of the station and carrying it to an uncontrolled location. This is an important safety feature — loose bait that gets scattered outside the station poses a serious risk to non-target animals including birds, hedgehogs, and domestic pets. Roshield blocks stay put, and the bait is consumed in situ.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Brodifacoum — the most potent SGAR available to consumers</li>
        <li>Single-feed lethal dose means faster colony control</li>
        <li>Wax block formulation is waterproof and weather-resistant</li>
        <li>Central hole for secure mounting inside bait stations</li>
        <li>Trusted brand with strong Amazon reviews</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Must be used inside a tamper-resistant bait station (not sold with one)</li>
        <li>Higher toxicity means greater risk if mishandled</li>
        <li>Takes 3-5 days to work — not instant</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-professional">Best Professional-Strength — Pest Expert Formula B+ Grain Bait</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula B+ Grain Bait"
          rank={2}
          rating={4.4}
          features={[
            'Professional-strength brodifacoum grain bait',
            'Highly palatable wheat-based formula rats prefer',
            'Fast-acting single-feed formulation',
            'Used by professional pest controllers across the UK',
          ]}
          price="£20"
          asin="B010E2GCIM"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Pest Expert Formula B+ is the grain bait of choice for many professional pest controllers in the UK, and for good reason. It combines brodifacoum — the strongest available active ingredient — with a highly palatable wheat grain formulation that rats find irresistible. Grain bait has a natural advantage over blocks in terms of palatability: rats are grain eaters by nature, and a wheat-based bait closely mimics their preferred food sources, which encourages faster and more complete uptake.
      </p>
      <p>
        The "Formula B+" formulation includes bittering agents (Bitrex) as a safety measure to deter accidental ingestion by children, while remaining highly attractive to rodents. The grain is dyed a distinctive blue-green colour, making it easy to identify if it is found outside a bait station and allowing you to monitor consumption levels at a glance. This colouring also serves as a visual deterrent to humans and is a standard safety feature across professional-grade rodenticides.
      </p>
      <p>
        For serious infestations where you need maximum potency and fast knockdown, Formula B+ is the product professionals reach for. Each grain contains a precisely measured dose of brodifacoum, ensuring consistent performance across the entire packet. The grain format also flows easily into bait stations and can be used in bait trays inside locked stations, giving you flexibility in how you deploy it.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade brodifacoum at maximum permitted strength</li>
        <li>Wheat grain formulation that rats naturally prefer</li>
        <li>Includes Bitrex bittering agent for child safety</li>
        <li>Easy to pour into bait stations and monitor consumption</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Grain can absorb moisture if station is not waterproof</li>
        <li>Higher price point than basic rodenticides</li>
        <li>Loose grain requires careful handling and containment</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-value">Best Value — Elixir Gardens Rodex Whole Wheat</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Elixir Gardens Rodex Whole Wheat Sachets"
          rank={3}
          rating={4.3}
          features={[
            'Bromadiolone 0.005% whole wheat bait',
            'Individual sachets for easy, mess-free deployment',
            'Excellent value — large quantity for the price',
            'Highly palatable to rats and mice',
          ]}
          price="£12"
          asin="B071K8WQZB"
          bestFor="Best Budget"
        />
      </div>
      <p>
        If you need to bait multiple stations across a large area — perhaps around a garden perimeter, along a fence line, or across an outbuilding — the Elixir Gardens Rodex sachets offer outstanding value for money. You get a substantial quantity of bromadiolone-based whole wheat bait at a fraction of the cost of premium brodifacoum products, making this the smart choice when you need volume.
      </p>
      <p>
        Bromadiolone is a second-generation anticoagulant like brodifacoum, though slightly less potent — it may require multiple feeds to deliver a lethal dose in some cases, particularly with larger rats. In practice, however, the difference is often minimal because the highly palatable whole wheat formulation encourages repeated feeding. Rats will return to a food source they find attractive, and the Rodex formulation is specifically designed to be as appealing as possible.
      </p>
      <p>
        The individual sachet format is a practical touch. Each sachet can be placed directly inside a bait station without the need to handle loose grain — reducing mess, minimising human contact with the rodenticide, and making it easy to count how many sachets have been consumed. Simply place 2-3 sachets per station, check every few days, and replace as needed.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Excellent value — generous quantity for the price</li>
        <li>Individual sachets are clean and easy to deploy</li>
        <li>Bromadiolone is effective against most UK rat populations</li>
        <li>Whole wheat formulation is highly palatable</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Slightly less potent than brodifacoum products</li>
        <li>May require multiple feeds for large rats</li>
        <li>Sachets can absorb moisture in poorly sealed stations</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-brand">Best Trusted Brand — Rentokil Rodine Grain Bait</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil Rodine Mouse & Rat Killer Grain Bait"
          rank={4}
          rating={4.1}
          features={[
            'From Rentokil — the UK\'s most recognised pest control brand',
            'Difenacoum-based grain bait',
            'Ready-to-use sachets with clear instructions',
            'Widely available and trusted by UK consumers',
          ]}
          price="£8"
          asin="B07BFQ1V5L"
          bestFor="Best Trusted Brand"
        />
      </div>
      <p>
        Rentokil is the most recognised pest control brand in the UK, and their Rodine grain bait is the product most people reach for when they first discover a rat problem. Available in virtually every hardware store, supermarket, and of course Amazon, it offers the reassurance of a household name backed by decades of pest control expertise. If you want a straightforward, well-established product from a brand you know and trust, Rodine is a solid choice.
      </p>
      <p>
        The active ingredient is difenacoum, a second-generation anticoagulant that is effective against both rats and mice. Difenacoum is less potent than brodifacoum, which means it may take multiple feeds and a slightly longer timeframe (5-7 days) to achieve a lethal dose. However, this lower potency also means it carries a marginally lower risk of secondary poisoning to non-target predators such as owls and kestrels, which has led some conservation groups to recommend difenacoum as a more environmentally responsible choice.
      </p>
      <p>
        The ready-to-use sachets come with clear, easy-to-follow instructions — particularly useful if you have never used rodenticide before. The packaging includes safety information, dosage guidance, and placement advice, making Rodine the most beginner-friendly option on our list.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Trusted Rentokil brand with strong consumer recognition</li>
        <li>Clear, beginner-friendly instructions included</li>
        <li>Lower secondary poisoning risk with difenacoum</li>
        <li>Most affordable option on our list</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less potent than brodifacoum products — slower acting</li>
        <li>May not control severe or resistant infestations</li>
        <li>Smaller quantity per pack than specialist brands</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-paste">Best Paste Bait — Racan Force Paste</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Racan Force Rat & Mouse Killer Paste"
          rank={5}
          rating={4.2}
          features={[
            'Brodifacoum paste formulation — highly palatable',
            'Individual foil sachets for easy deployment',
            'Strong single-feed formulation for rapid results',
            'Moisture-resistant paste ideal for damp locations',
          ]}
          price="£18"
          asin="B07H8NZGH7"
          bestFor="Best Paste Bait"
        />
      </div>
      <p>
        Paste bait occupies a useful niche in the rodenticide market. While blocks and grain are the most common formulations, paste offers distinct advantages in certain situations — particularly in damp environments where grain would absorb moisture and in locations where rats have alternative food sources and need an especially palatable bait to tempt them away. Racan Force is the best paste option we have found on Amazon UK.
      </p>
      <p>
        The brodifacoum-based paste comes in individual foil sachets that can be placed directly inside bait stations. The paste is soft, sticky, and has a strong scent that rats find highly attractive — even in environments where they have access to other food. This makes paste particularly effective in kitchens, food storage areas, and farm buildings where rats may ignore less appealing bait types. The foil sachet format means no mess and no direct handling of the rodenticide.
      </p>
      <p>
        Because it is a brodifacoum product, Racan Force delivers a lethal dose in a single feed — making it as potent as the Roshield blocks and Pest Expert grain at the top of our list, but in a different formulation that may work better depending on your specific situation. If blocks and grain have not been attracting rats to your stations, switching to paste is a well-established professional trick that often breaks the deadlock.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Paste formulation is extremely palatable — great for fussy rats</li>
        <li>Brodifacoum strength for single-feed lethality</li>
        <li>Moisture-resistant — ideal for damp cellars, outbuildings, drains</li>
        <li>Individual sachets for clean, no-contact deployment</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price per gram than block or grain alternatives</li>
        <li>Paste can melt in very hot conditions (less of a UK concern)</li>
        <li>Smaller pack sizes than bulk grain options</li>
      </ul>

      {/* Product 6 */}
      <h2 id="best-kit">Best Combo Kit — Pest Expert Bait Block Kit</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Rat Poison Bait Block Kit"
          rank={6}
          rating={4.3}
          features={[
            'Complete kit: bait blocks + tamper-resistant bait station',
            'Brodifacoum blocks for maximum strength',
            'Professional-quality lockable station included',
            'Everything you need in one purchase — no extras required',
          ]}
          price="£25"
          asin="B010E2H7KY"
          bestFor="Best Combo Kit"
        />
      </div>
      <p>
        If you are new to rodenticide and want a single purchase that includes everything you need, the Pest Expert Bait Block Kit is the one to buy. It comes with brodifacoum bait blocks and a professional-quality tamper-resistant bait station — meaning you do not need to buy the poison and station separately. Open the box, load the blocks into the station, lock it, and place it. It genuinely is that simple.
      </p>
      <p>
        The included bait station is a proper lockable unit, not a flimsy plastic box. It requires a key to open, has restricted entry points sized for rats but inaccessible to larger non-target animals, and is weather-resistant for outdoor use. This is the same type of station that professional pest controllers use, and the fact that it comes bundled with the bait means you are getting professional-grade equipment at a fraction of the cost of hiring a technician.
      </p>
      <p>
        The brodifacoum blocks included are the same professional-strength formulation used in the Pest Expert range — so you are not sacrificing potency for convenience. For a first-time user who wants to get started immediately without researching which station to pair with which bait, this kit removes all the guesswork and gives you a proven, effective combination out of the box.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Complete all-in-one kit — nothing else to buy</li>
        <li>Professional-quality lockable bait station included</li>
        <li>Brodifacoum blocks at maximum permitted strength</li>
        <li>Ideal for beginners — no compatibility guesswork</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher upfront cost than buying bait alone</li>
        <li>Only one station included — you may need more for larger areas</li>
        <li>Less flexible than choosing your own bait and station separately</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">How to Choose the Right Rat Poison</h2>
      <p>
        With six strong options on the table, choosing the right rat poison comes down to your specific circumstances. Here are the key factors to consider.
      </p>

      <h3>Active Ingredient: Brodifacoum vs Bromadiolone vs Difenacoum</h3>
      <p>
        All three are second-generation anticoagulants (SGARs), but they differ in potency. <strong>Brodifacoum</strong> is the strongest — a single feed delivers a lethal dose. <strong>Bromadiolone</strong> is slightly less potent but still highly effective, and may require 2-3 feeds. <strong>Difenacoum</strong> is the mildest SGAR, often requiring multiple feeds over several days. For severe infestations or rats that are not taking bait readily, brodifacoum is the most reliable choice. For smaller problems or where you want to reduce secondary poisoning risk, difenacoum is a more conservative option.
      </p>

      <h3>Formulation: Blocks, Grain, or Paste</h3>
      <p>
        <strong>Wax blocks</strong> are the most versatile and durable — waterproof, long-lasting, and easy to secure inside bait stations. <strong>Grain bait</strong> is the most palatable (rats are natural grain eaters) but can absorb moisture and degrade in damp conditions. <strong>Paste</strong> is extremely palatable and moisture-resistant, making it ideal for damp locations, but comes in smaller quantities and is more expensive per gram. For most situations, blocks are the default choice. Switch to grain or paste if rats are not taking the blocks.
      </p>

      <h3>Indoor vs Outdoor Use</h3>
      <p>
        For outdoor use, choose waterproof formulations (wax blocks or paste) and ensure your bait station is weather-resistant with drainage holes. For indoor use, any formulation works well, but grain is often preferred for its superior palatability. Always use bait stations — never place loose poison in any location, indoors or outdoors.
      </p>

      <h3>Budget</h3>
      <p>
        Prices range from around £8 for a basic Rentokil pack to £25 for a complete kit with station. If you already own bait stations, buying bait alone (Roshield blocks or Elixir Gardens sachets) is the most cost-effective approach. If you are starting from scratch, the Pest Expert kit at £25 gives you everything you need in one purchase and represents better value than buying components separately.
      </p>

      {/* Safety */}
      <h2 id="safety">Safety and Legal Requirements</h2>
      <p>
        Using rat poison responsibly is not just good practice — it is a legal requirement. Here is what you need to know.
      </p>

      <h3>CRRU Code of Best Practice</h3>
      <p>
        The Campaign for Responsible Rodenticide Use (CRRU) sets the standard for rodenticide use in the UK. Key requirements include: all SGARs must be used inside tamper-resistant bait stations; you must search for and dispose of any dead rodents found during and after treatment; and you must not leave bait down indefinitely — remove it once the infestation is controlled. These are not optional guidelines; failure to follow them can result in enforcement action under wildlife protection legislation.
      </p>

      <h3>Protecting Non-Target Wildlife</h3>
      <p>
        Secondary poisoning occurs when a predator (such as an owl, kestrel, or fox) eats a rat that has consumed poison. Brodifacoum poses the highest secondary poisoning risk due to its potency and persistence in tissue. To minimise this risk: always use tamper-resistant stations, search for and collect dead rats daily, and consider using difenacoum (which has a lower secondary poisoning risk) in areas where raptors and other predators are active.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Always search for and collect dead rodents during and after a baiting programme. A poisoned rat that dies in the open can be eaten by owls, kestrels, foxes, and domestic pets — causing secondary poisoning. Dispose of dead rats in a tied plastic bag in your general waste bin.</p>
        </Callout>
      </div>

      <h3>Pets and Children</h3>
      <p>
        All rat poisons on this page are toxic to dogs, cats, and humans. A locked, tamper-resistant bait station is your primary line of defence. Place stations in locations that children cannot reach and pets cannot access — behind heavy furniture, inside locked cupboards, or in areas fenced off from animals. If you suspect a pet has consumed rat poison, contact your vet immediately. The antidote is Vitamin K1, which is highly effective when administered promptly.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is it legal to buy rat poison in the UK?</h3>
      <p>
        Yes, you can legally buy rat poison in the UK for use on your own property. However, since 2018, the Campaign for Responsible Rodenticide Use (CRRU) requires that all second-generation anticoagulant rodenticides (SGARs) such as brodifacoum and bromadiolone are used inside tamper-resistant bait stations. You must also follow the label instructions carefully and take reasonable steps to prevent access by children, pets, and non-target wildlife.
      </p>

      <h3>What is the strongest rat poison available in the UK?</h3>
      <p>
        Brodifacoum is the most potent anticoagulant rodenticide available to UK consumers. It is a second-generation anticoagulant that typically delivers a lethal dose in a single feed. Products containing brodifacoum, such as Roshield blocks, are the strongest rat poisons you can buy without a professional licence.
      </p>

      <h3>How long does rat poison take to work?</h3>
      <p>
        Most anticoagulant rat poisons take 3 to 7 days to kill a rat after ingestion. This delayed action is intentional — it prevents bait shyness, as rats cannot associate the bait with the illness. Brodifacoum-based products tend to work faster (3-5 days), while bromadiolone and difenacoum may take up to 7 days.
      </p>

      <h3>Is rat poison safe around pets and children?</h3>
      <p>
        Rat poison is toxic to all mammals, including dogs, cats, and humans. You must always use rat poison inside a locked, tamper-resistant bait station to prevent access by children and pets. If you suspect a pet or child has ingested rat poison, seek immediate medical or veterinary attention. The antidote for anticoagulant poisoning is Vitamin K1.
      </p>

      <h3>Do I need a bait station for rat poison?</h3>
      <p>
        Yes. Under CRRU guidelines, all second-generation anticoagulant rodenticides must be used inside tamper-resistant bait stations in the UK. This applies to both indoor and outdoor use. Using loose poison without a bait station is not only dangerous but also non-compliant with UK best practice.
      </p>

      <h3>Where should I place rat poison bait stations?</h3>
      <p>
        Place bait stations along known rat runs — typically against walls, along fence lines, near burrow entrances, and close to signs of activity such as droppings and gnaw marks. Rats are thigmotactic (they like to travel along edges), so positioning stations flush against a wall or structure maximises the chance of rats finding and entering them. Check stations every 2-3 days and replace consumed bait.
      </p>

      <h3>When should I call a professional instead of using rat poison?</h3>
      <p>
        You should call a professional pest controller if: the infestation persists after 2-3 weeks of baiting, you are seeing rats during the daytime (a sign of a large population), the rats are in a location that is difficult to access (such as inside wall cavities or under floorboards), or you are uncomfortable handling rodenticides. A BPCA-certified technician has access to professional-strength products and can implement a comprehensive treatment plan.
      </p>

      <p>Remember: UK regulations require all rodenticide to be used inside a tamper-resistant bait station. See our guide to <a href="/best/professional-bait-station-kits" className="text-green-600 hover:underline">professional bait station kits</a> for compliant options.</p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Rather Leave It to a Professional?"
          subtext="If DIY poison hasn't solved the problem, a certified pest controller can handle it safely and effectively"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Looking for traps instead of poison?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/best/rat-traps"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Rat Traps UK 2026 →
          </a>
          <a
            href="/best/rat-bait-stations"
            className="inline-block px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Rat Bait Stations UK 2026 →
          </a>
        </div>
      </div>
    </GuideLayout>
  );
}
