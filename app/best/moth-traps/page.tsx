import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps',
    description: 'Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens reviewed.',
    alternates: { canonical: 'https://pestproindex.com/best/moth-traps' },
    openGraph: {
      title: 'Best Moth Traps UK 2026 | Clothes Moth & Pantry Moth Traps',
      description: 'Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens reviewed.',
      url: 'https://pestproindex.com/best/moth-traps', type: 'article', siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Best Moth Traps UK 2026: Clothes Moth & Pantry Moth Traps',
  description: 'Stop moths ruining your clothes and food with the best moth traps in the UK. Pheromone traps for wardrobes, drawers and kitchens reviewed.',
  datePublished: '2026-03-31', dateModified: '2026-03-31',
  author: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/best/moth-traps' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://pestproindex.com/best' },
    { '@type': 'ListItem', position: 3, name: 'Best Moth Traps UK 2026', item: 'https://pestproindex.com/best/moth-traps' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do pheromone moth traps actually work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — pheromone moth traps are scientifically proven to attract and catch male moths of the target species. The pheromone lure mimics the scent released by female moths, drawing males onto the sticky glue board where they become trapped. This disrupts the breeding cycle by preventing males from mating. However, traps alone may not eliminate an established infestation — they are most effective as part of a combined approach with thorough cleaning, moth spray, and preventative measures like cedar products.' } },
    { '@type': 'Question', name: 'What is the difference between clothes moth traps and pantry moth traps?', acceptedAnswer: { '@type': 'Answer', text: 'Clothes moth traps and pantry moth traps use different pheromone lures to attract different species. Clothes moth traps target the Common Clothes Moth (Tineola bisselliella) and the Case-Bearing Clothes Moth — these eat wool, silk, cashmere, and other natural fibres. Pantry moth traps target the Indian Meal Moth (Plodia interpunctella) — these infest dried food like flour, rice, cereals, and nuts. Using the wrong trap for your moth type will not catch anything, so correct identification is essential.' } },
    { '@type': 'Question', name: 'How many moth traps do I need?', acceptedAnswer: { '@type': 'Answer', text: 'For clothes moths, place one trap per wardrobe or chest of drawers, plus one in each room where you store natural fibre clothing or textiles. For pantry moths, place one trap in each kitchen cupboard that contains dried food. A typical treatment might use 3-6 traps for clothes moths (bedroom wardrobes, linen cupboards, storage areas) and 2-4 traps for pantry moths (kitchen cupboards and pantry).' } },
    { '@type': 'Question', name: 'How long do pheromone moth traps last?', acceptedAnswer: { '@type': 'Answer', text: 'Most pheromone moth traps remain effective for 6-8 weeks before the pheromone lure loses its potency and needs replacing. Some premium traps last up to 12 weeks. The sticky glue board also degrades over time as it collects dust and moth debris. Replace traps according to the manufacturer\'s instructions, or sooner if the glue board is full of caught moths.' } },
    { '@type': 'Question', name: 'Do cedar products actually repel moths?', acceptedAnswer: { '@type': 'Answer', text: 'Cedar wood contains natural oils (primarily cedrol) that repel clothes moths and can kill moth larvae at high concentrations. Fresh cedar balls, rings, and blocks are genuinely effective as a preventative measure when placed in wardrobes and drawers alongside clean clothing. However, cedar loses its potency over time as the oils evaporate — sand the surface lightly or apply cedar oil every 6-12 months to refresh the scent. Cedar is a deterrent, not a treatment — it will not eliminate an existing infestation.' } },
    { '@type': 'Question', name: 'How do I know if I have clothes moths or pantry moths?', acceptedAnswer: { '@type': 'Answer', text: 'Clothes moths are small (6-8mm), gold/buff coloured, and avoid light — you rarely see them flying around. Look for damage to wool, silk, and cashmere garments, small silk tubes or cases on fabric, and tiny cream-coloured larvae. Pantry moths are larger (8-10mm) with distinctive brown and cream wing markings, and they fly readily — you will often see them fluttering around the kitchen. Look for webbing and small larvae in dried food packets.' } },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Moth Traps at a Glance' },
  { id: 'best-clothes', title: 'Best Clothes Moth Trap — Moth Prevention Pheromone Traps' },
  { id: 'best-pantry', title: 'Best Pantry Moth Trap — Demi Diamond Pantry Moth Traps' },
  { id: 'best-value', title: 'Best Value — Zero In Clothes Moth Traps' },
  { id: 'best-professional', title: 'Best Professional — Pest Expert Moth Traps' },
  { id: 'best-refill', title: 'Best Refills — Caraselle Moth Trap Refills' },
  { id: 'best-repellent', title: 'Best Repellent — Cedar Wood Moth Balls' },
  { id: 'buying-guide', title: 'How to Choose the Right Moth Trap' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestMothTrapsPage() {
  return (
    <GuideLayout
      title="Best Moth Traps UK 2026: Clothes Moth & Pantry Moth Traps"
      subtitle="Our pick of the most effective pheromone moth traps for wardrobes, drawers and kitchens — plus cedar repellents for prevention"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Hotel Pest Control: UK Compliance Guide', href: '/guides/hotel-pest-control' },
      ]}
      relatedProducts={[
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small commission at no extra cost to you. As an Amazon Associate, PestPro Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Moths cause more damage to UK homes than most people realise. Clothes moths silently destroy wool jumpers, cashmere scarves, silk garments, and even wool carpets — often without you noticing until the damage is done. Pantry moths infest flour, rice, cereals, and dried goods, contaminating entire cupboards of food. According to English Heritage, moth damage to UK textiles has increased significantly in recent years, driven by warmer, more humid homes and the popularity of natural fibre clothing.
      </p>
      <p>
        Pheromone traps are the cornerstone of effective moth control. They attract male moths using a synthetic version of the female moth's mating scent, trapping them on a sticky glue board. This serves two purposes: it monitors the severity of your moth problem (telling you how many moths are present), and it disrupts the breeding cycle by removing males from the population. When combined with thorough cleaning, moth spray, and preventative measures like cedar products, pheromone traps are a powerful tool for bringing a moth infestation under control.
      </p>
      <p>
        To compile this guide, we evaluated the leading moth traps on Amazon UK based on <strong>pheromone effectiveness</strong>, <strong>glue board quality</strong>, <strong>target species</strong> (clothes moth vs pantry moth), and <strong>genuine customer reviews</strong>. Every product listed is available on Amazon UK.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Clothes moth traps and pantry moth traps use DIFFERENT pheromones. A clothes moth trap will not catch pantry moths and vice versa. Identify your moth type first, then buy the correct trap.</p>
        </Callout>
      </div>

      <h2 id="at-a-glance">Best Moth Traps at a Glance</h2>
      <table>
        <thead>
          <tr><th>Product</th><th>Target Moth</th><th>Best For</th><th>Price</th></tr>
        </thead>
        <tbody>
          <tr><td>Moth Prevention Pheromone Traps</td><td>Clothes moths</td><td>Best Clothes Moth</td><td>~£12</td></tr>
          <tr><td>Demi Diamond Pantry Moth Traps</td><td>Pantry moths</td><td>Best Pantry Moth</td><td>~£10</td></tr>
          <tr><td>Zero In Clothes Moth Traps</td><td>Clothes moths</td><td>Best Value</td><td>~£5</td></tr>
          <tr><td>Pest Expert Moth Traps</td><td>Clothes moths</td><td>Best Professional</td><td>~£10</td></tr>
          <tr><td>Caraselle Moth Trap Refills</td><td>Clothes moths</td><td>Best Refills</td><td>~£8</td></tr>
          <tr><td>Cedar Wood Moth Balls</td><td>All moths</td><td>Best Repellent</td><td>~£8</td></tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="6–8 weeks" label="Effective lifespan of a typical pheromone moth trap before replacement" />
      </div>

      <h2 id="best-clothes">Best Clothes Moth Trap — Moth Prevention Pheromone Traps</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Moth Prevention Clothes Moth Pheromone Traps"
          rank={1}
          rating={4.4}
          features={[
            'Premium pheromone lure — strongest attractant available',
            'Targets Common Clothes Moth (Tineola bisselliella)',
            'Lasts up to 12 weeks per trap',
            'Non-toxic and pesticide-free',
          ]}
          price="£12"
          asin="B00GKHI2PW"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Moth Prevention is the UK's specialist moth control brand, and their pheromone traps are widely regarded as the most effective clothes moth traps available. The premium pheromone lure is stronger and longer-lasting than budget alternatives — attracting male Common Clothes Moths from across a room for up to 12 weeks per trap. The extra-sticky glue board holds caught moths securely, preventing them from escaping.
      </p>
      <p>
        Each trap is designed for placement inside a wardrobe, chest of drawers, or linen cupboard. The flat, discreet design hangs from a rail or sits on a shelf without taking up much space. Because these traps are non-toxic and pesticide-free (they use only a pheromone lure and glue), they are completely safe for use in bedrooms, children's rooms, and anywhere you store clothing.
      </p>
      <p>
        For monitoring purposes, check your traps weekly and count the number of moths caught. If you are catching more than 5-10 moths per trap per week, you likely have an active infestation that requires additional treatment (moth spray, thorough cleaning, and laundering of affected garments at 60°C).
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Premium pheromone — strongest attractant for clothes moths</li>
        <li>Up to 12 weeks effective life</li>
        <li>Non-toxic and pesticide-free</li>
        <li>Specialist brand with expert customer support</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price than budget alternatives</li>
        <li>Only catches male moths — does not kill larvae</li>
        <li>Will not catch pantry moths (different pheromone needed)</li>
      </ul>

      <h2 id="best-pantry">Best Pantry Moth Trap — Demi Diamond Pantry Moth Traps</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Demi Diamond Pantry Moth Traps"
          rank={2}
          rating={4.3}
          features={[
            'Pheromone targets Indian Meal Moth specifically',
            'Triangular design fits in kitchen cupboard corners',
            'Non-toxic — safe for use near food',
            'Effective for 8 weeks per trap',
          ]}
          price="£10"
          asin="B07BFQ1V5L"
          bestFor="Best Pantry Moth"
        />
      </div>
      <p>
        Pantry moths (Indian Meal Moths) require a completely different pheromone from clothes moths. Demi Diamond Pantry Moth Traps are specifically formulated to attract male Indian Meal Moths — the species responsible for infesting flour, rice, cereals, pasta, dried fruit, nuts, and pet food in UK kitchens. The triangular design fits neatly into cupboard corners, and the non-toxic formulation means they are completely safe for use alongside food.
      </p>
      <p>
        Alongside trapping, you must address the source of a pantry moth infestation: inspect all dried food for webbing, larvae, or moth debris, and dispose of any contaminated packets. Clean cupboards thoroughly, including crevices and shelf edges where larvae can pupate. Then place fresh traps to monitor whether the infestation has been eliminated.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Correct pheromone for pantry moths specifically</li>
        <li>Non-toxic and food-safe</li>
        <li>Compact triangular design for cupboard corners</li>
        <li>8 weeks effective life</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Will not catch clothes moths</li>
        <li>Traps alone will not eliminate pantry moths — must remove food source</li>
        <li>Glue board can attract dust in humid kitchens</li>
      </ul>

      <h2 id="best-value">Best Value — Zero In Clothes Moth Traps</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zero In Clothes Moth Traps"
          rank={3}
          rating={4.0}
          features={[
            'Affordable pheromone traps for clothes moths',
            'Ready-to-use — peel and place',
            'Lasts up to 6 weeks per trap',
            'Widely available in supermarkets and Amazon',
          ]}
          price="£5"
          asin="B004US3F1Y"
          bestFor="Best Budget"
        />
      </div>
      <p>
        Zero In Clothes Moth Traps offer genuine pheromone-based trapping at the lowest price on our list. At around £5, they are ideal for initial monitoring — place one in each wardrobe to determine whether you have a moth problem before investing in more expensive treatments. The traps are pre-baited and ready to use: simply peel the protective film from the glue board and place inside your wardrobe.
      </p>
      <p>
        The pheromone lure is effective for approximately 6 weeks — slightly shorter than the premium Moth Prevention traps, but adequate for monitoring and initial control. If your traps are catching moths consistently, escalate to a comprehensive treatment programme including moth spray and thorough cleaning.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Most affordable moth trap on our list</li>
        <li>Ready-to-use — no assembly</li>
        <li>Genuine pheromone lure</li>
        <li>Good for initial monitoring</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Shorter pheromone life (6 weeks vs 12)</li>
        <li>Weaker attractant than premium brands</li>
        <li>Smaller glue board surface area</li>
      </ul>

      <h2 id="best-professional">Best Professional — Pest Expert Moth Traps</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Clothes Moth Pheromone Traps"
          rank={4}
          rating={4.3}
          features={[
            'Professional-grade pheromone lure',
            'Large glue board for high catch capacity',
            'Used by textile conservation professionals',
            'Long-lasting 8-week effectiveness',
          ]}
          price="£10"
          asin="B073JPVRFB"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Pest Expert Moth Traps use a professional-grade pheromone lure that is the same formulation deployed by textile conservation specialists at museums and stately homes — environments where moth damage to irreplaceable historical textiles is a serious concern. The larger glue board provides more surface area for catching moths, which is important in situations where you are dealing with a heavy infestation and need high catch capacity.
      </p>
      <p>
        The 8-week effective life strikes a good balance between the budget 6-week traps and the premium 12-week options. For most UK households, replacing traps every 8 weeks through the main moth season (April to October) provides reliable monitoring and breeding disruption.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade pheromone lure</li>
        <li>Large glue board for heavy infestations</li>
        <li>8-week effectiveness</li>
        <li>Used by conservation professionals</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Mid-range price point</li>
        <li>Larger traps may be more visible in wardrobes</li>
        <li>Only targets clothes moths</li>
      </ul>

      <h2 id="best-refill">Best Refills — Caraselle Moth Trap Refills</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Caraselle Moth Trap Pheromone Refill Strips"
          rank={5}
          rating={4.1}
          features={[
            'Replacement pheromone strips for existing traps',
            'Refreshes worn-out traps without buying new housings',
            'Compatible with most standard moth trap formats',
            'Cost-effective for ongoing monitoring',
          ]}
          price="£8"
          asin="B001MIVFGC"
          bestFor="Best Refills"
        />
      </div>
      <p>
        If you already own moth trap housings from any brand, Caraselle refill strips provide fresh pheromone lures at a lower cost than buying complete new traps. The refill strips are compatible with most standard moth trap formats and provide the same attractant strength as new traps. For ongoing monitoring throughout the moth season, refills are the most cost-effective approach.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Cost-effective for ongoing monitoring</li>
        <li>Compatible with most trap housings</li>
        <li>Fresh pheromone for renewed effectiveness</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Requires existing trap housings</li>
        <li>May not fit all proprietary trap designs</li>
      </ul>

      <h2 id="best-repellent">Best Repellent — Cedar Wood Moth Balls</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Natural Cedar Wood Moth Repellent Balls"
          rank={6}
          rating={4.2}
          features={[
            'Natural cedar oil repels clothes moths',
            'Pleasant scent — not the harsh naphthalene smell of old-fashioned mothballs',
            'Place in wardrobes, drawers, and storage boxes',
            'Refeshable — sand surface to release more cedar oil',
          ]}
          price="£8"
          asin="B010E2GCIM"
          bestFor="Best Repellent"
        />
      </div>
      <p>
        Cedar wood has been used to protect clothing from moths for centuries — and for good reason. The natural oils in cedar (primarily cedrol) genuinely repel clothes moths and can kill moth larvae at high concentrations. Unlike old-fashioned naphthalene mothballs, which have an unpleasant chemical smell and are toxic, cedar balls have a pleasant woody scent and are completely natural and non-toxic.
      </p>
      <p>
        Cedar is a preventative measure, not a treatment. It will not eliminate an existing infestation, but it will discourage moths from settling in protected areas. Place cedar balls in wardrobes, drawers, and storage boxes alongside clean, laundered clothing. The cedar scent fades over time — sand the surface lightly every 6-12 months to release fresh oils, or apply a few drops of cedar essential oil.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Natural and non-toxic</li>
        <li>Pleasant cedar scent</li>
        <li>Long-lasting and refreshable</li>
        <li>Effective preventative measure</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Preventative only — will not kill existing infestations</li>
        <li>Needs refreshing every 6-12 months</li>
        <li>Less effective in open/ventilated spaces</li>
      </ul>

      <h2 id="buying-guide">How to Choose the Right Moth Trap</h2>

      <h3>Clothes Moths vs Pantry Moths</h3>
      <p>
        This is the most important distinction. Clothes moths eat natural fibres (wool, silk, cashmere, fur) and are found in wardrobes, drawers, and carpet edges. Pantry moths eat dried food (flour, rice, cereals, nuts) and are found in kitchen cupboards. They require different pheromone traps — using the wrong one will catch nothing.
      </p>

      <h3>How Pheromone Traps Work</h3>
      <p>
        Pheromone traps attract male moths only. The synthetic pheromone mimics the female's mating scent, drawing males onto the sticky glue board. Removing males from the population disrupts breeding, reducing the next generation of egg-laying females. Traps do not kill larvae — for that, you need spray, cleaning, and heat treatment (washing at 60°C).
      </p>

      <h3>Traps for Monitoring vs Traps for Control</h3>
      <p>
        A single trap in a wardrobe acts as a monitoring tool — it tells you whether moths are present and how severe the problem is. For active control, you need multiple traps combined with other measures: thorough vacuuming, laundering affected garments at 60°C, moth killer spray for carpets and crevices, and cedar products for prevention.
      </p>

      <h3>The Combination Approach</h3>
      <p>
        The most effective moth control uses all available methods together: <strong>pheromone traps</strong> (monitoring + breeding disruption), <strong>moth killer spray</strong> (kills larvae in carpets and crevices), <strong>hot washing</strong> (kills all life stages at 60°C), <strong>vacuuming</strong> (removes eggs and larvae from carpet edges), and <strong>cedar products</strong> (ongoing prevention). No single method is sufficient on its own for an established infestation.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Clothes moths avoid light and rarely fly — if you see small moths fluttering around lights, they are probably not clothes moths. Clothes moths are found in dark, undisturbed areas like wardrobes, under furniture, and along carpet edges.</p>
        </Callout>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Do pheromone moth traps actually work?</h3>
      <p>Yes — they are scientifically proven to attract and catch male moths of the target species. They disrupt the breeding cycle, but work best as part of a combined approach with cleaning, spray, and preventative measures.</p>

      <h3>What is the difference between clothes moth traps and pantry moth traps?</h3>
      <p>They use different pheromone lures for different species. Clothes moth traps target the Common Clothes Moth; pantry moth traps target the Indian Meal Moth. Using the wrong trap will not catch anything.</p>

      <h3>How many moth traps do I need?</h3>
      <p>One per wardrobe or storage area for clothes moths; one per kitchen cupboard for pantry moths. A typical home needs 3-6 clothes moth traps or 2-4 pantry moth traps.</p>

      <h3>How long do pheromone moth traps last?</h3>
      <p>6-12 weeks depending on the product. Premium traps last up to 12 weeks; budget options around 6 weeks. Replace when the pheromone fades or the glue board is full.</p>

      <h3>Do cedar products actually repel moths?</h3>
      <p>Yes — fresh cedar oil genuinely repels clothes moths and can kill larvae. However, cedar is a preventative, not a treatment. Refresh cedar products every 6-12 months by sanding the surface or applying cedar oil.</p>

      <h3>How do I know if I have clothes moths or pantry moths?</h3>
      <p>Clothes moths: small (6-8mm), gold/buff, avoid light, found in wardrobes. Pantry moths: larger (8-10mm), brown/cream wings, fly readily, found in kitchen cupboards near dried food.</p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Serious Moth Infestation?"
          subtext="A professional pest controller can identify the moth species, locate all infestation sites, and apply commercial-grade treatments"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Need moth killer spray alongside traps?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/best/moth-killers" className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Best Moth Killers UK 2026 →</a>
          <a href="/guides/how-to-get-rid-of-moths" className="inline-block px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors text-sm">How to Get Rid of Moths — Complete Guide →</a>
        </div>
      </div>
    </GuideLayout>
  );
}
