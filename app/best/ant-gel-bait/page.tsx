import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Ant Killer Gel UK 2026: Kill the Colony, Not Just the Workers | PestPro Index',
    description:
      'Our pick of the best ant killer gels available in the UK for 2026. Borax gels, fipronil baits, and indoxacarb formulations reviewed with application advice and buying guidance.',
    alternates: {
      canonical: 'https://pestproindex.com/best/ant-gel-bait',
    },
    openGraph: {
      title: 'Best Ant Killer Gel UK 2026: Kill the Colony, Not Just the Workers | PestPro Index',
      description:
        'Our pick of the best ant killer gels available in the UK for 2026. Borax gels, fipronil baits, and indoxacarb formulations reviewed with application advice and buying guidance.',
      url: 'https://pestproindex.com/best/ant-gel-bait',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Ant Killer Gel UK 2026: Kill the Colony, Not Just the Workers',
  description:
    'Our pick of the best ant killer gels available in the UK for 2026. Borax gels, fipronil baits, and indoxacarb formulations reviewed with application advice and buying guidance.',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/best/ant-gel-bait' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://pestproindex.com/best' },
    { '@type': 'ListItem', position: 3, name: 'Best Ant Killer Gel UK 2026', item: 'https://pestproindex.com/best/ant-gel-bait' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does ant gel bait work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ant gel bait works by exploiting the ant colony's food-sharing behaviour (trophallaxis). Worker ants find the gel, consume it, and carry it back to the nest where they share it with other workers, larvae, and crucially the queen. The active ingredient kills slowly (24-72 hours), giving the poison time to spread throughout the colony. Once the queen is killed, the colony cannot reproduce and dies out completely.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does ant gel take to kill a colony?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most ant gel baits take 1-2 weeks to eliminate a colony completely. You may initially see more ants around the bait — this is a good sign, as it means workers are actively feeding on the gel and carrying it back to the nest. Ant activity should decrease noticeably within 3-5 days, with the colony eliminated within 7-14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ant gel bait safe around pets and children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most ant gel baits use low concentrations of active ingredients that are designed to be lethal to ants but present minimal risk to larger animals and humans at the doses used. However, you should still place gel in locations that children and pets cannot easily access — behind kitchen units, along skirting boards, and inside cupboards. If you have very young children or curious pets, consider using enclosed bait stations instead of exposed gel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why am I seeing more ants after applying gel bait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is normal and actually a sign that the bait is working. When worker ants find a food source (the gel), they recruit more workers from the nest to help carry it back. This increased activity means more ants are consuming and transporting the poisoned bait to the colony — exactly what you want. Do not disturb the ants or apply spray near the gel, as this will disrupt the baiting process. Activity should decrease within 3-5 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use gel bait or spray for ants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gel bait is far more effective than spray for long-term ant control. Spray only kills the ants you hit directly — it does not reach the queen or the nest, so the colony continues producing new workers. Gel bait is carried back to the nest and kills the entire colony including the queen. Spray can actually make ant problems worse by splitting colonies (budding). Always use gel bait for a permanent solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I place ant gel bait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Place small dots (pea-sized) of gel along ant trails, near entry points (door frames, window sills, cracks in walls), and close to areas where you have seen ant activity. Behind kitchen units, along skirting boards, and near food sources are ideal locations. Do not place gel directly on the ant trail — place it slightly to the side so ants discover it without the trail being blocked.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Ant Gels at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Nippon Ant Killer Gel' },
  { id: 'best-powder', title: 'Best Powder — Nippon Ant Killer Powder' },
  { id: 'best-spray', title: 'Best Spray — Nippon Ant & Crawling Insect Spray' },
  { id: 'best-indoor', title: 'Best Indoor Gel — Raid Ant Killer Gel' },
  { id: 'best-stations', title: 'Best Bait Stations — Terro Liquid Ant Baits' },
  { id: 'buying-guide', title: 'How to Choose the Right Ant Gel' },
  { id: 'application', title: 'How to Apply Ant Gel for Best Results' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestAntGelBaitPage() {
  return (
    <GuideLayout
      title="Best Ant Killer Gel UK 2026: Kill the Colony, Not Just the Workers"
      subtitle="Our pick of the most effective ant killer gels available in the UK — gel baits that eliminate the entire colony including the queen"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
      ]}
      relatedProducts={[
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Cockroach Gel Bait UK 2026', href: '/best/cockroach-gel-bait' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Wasp Nest Foam UK 2026', href: '/best/wasp-nest-foam' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
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
        If you have ever sprayed a line of ants in your kitchen only to see them return the next day, you already know the problem with contact sprays: they kill the workers you can see, but the queen keeps producing more from the safety of the nest. The colony is barely affected. Gel bait takes the opposite approach — it exploits the ant colony's food-sharing behaviour (trophallaxis) to deliver poison directly to the queen and the entire nest, eliminating the colony from the inside out.
      </p>
      <p>
        Ant gel bait works slowly and deliberately. Worker ants discover the gel, feed on it, and carry it back to the nest where they share it with other workers, larvae, and the queen through mouth-to-mouth feeding. The active ingredient kills over 24-72 hours — long enough for the poison to spread throughout the colony before any ants die. Once the queen dies, the colony cannot reproduce and collapses completely within 1-2 weeks. This is the same method used by professional pest controllers for ant colony elimination.
      </p>
      <p>
        To compile this guide, we evaluated the leading ant gel baits on Amazon UK based on <strong>active ingredient effectiveness</strong>, <strong>palatability to UK ant species</strong>, <strong>ease of application</strong>, and <strong>genuine customer reviews</strong>. We also consulted entomological research on bait acceptance by the Black Garden Ant (<em>Lasius niger</em>), which is responsible for the vast majority of ant problems in UK homes. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Do not spray insecticide near gel bait or disturb ants that are feeding on it. You want as many ants as possible to consume the gel and carry it back to the nest. More ants at the bait station = faster colony elimination.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Ant Gels at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Format</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nippon Ant Killer Gel 25g</td>
            <td>Gel</td>
            <td>Best Overall</td>
            <td>~£5</td>
          </tr>
          <tr>
            <td>Nippon Ant Killer Powder 500g</td>
            <td>Powder</td>
            <td>Best Powder</td>
            <td>~£6</td>
          </tr>
          <tr>
            <td>Nippon Ant &amp; Crawling Insect Spray 750ml</td>
            <td>Spray</td>
            <td>Best Spray</td>
            <td>~£7</td>
          </tr>
          <tr>
            <td>Raid Ant Killer Gel</td>
            <td>Gel</td>
            <td>Best Indoor Gel</td>
            <td>~£6</td>
          </tr>
          <tr>
            <td>Terro Liquid Ant Bait Stations</td>
            <td>Bait Stations</td>
            <td>Best Bait Stations</td>
            <td>~£10</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="1–2 weeks" label="Typical time for gel bait to eliminate an entire ant colony" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Nippon Ant Killer Gel 25g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Nippon Ant Killer Gel 25g — Liquid Bait, Colony Elimination"
          rank={1}
          rating={4.4}
          features={[
            'UK market leader for ant gel bait',
            'Sugary liquid bait carried back to the queen',
            'Eliminates entire colony — not just surface ants',
            '25g tube treats multiple ant runs',
          ]}
          price="£5"
          asin="B000TAUBSC"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Nippon Ant Killer Gel is the UK market leader for ant gel bait, and it has earned that position through sheer effectiveness. The sugary liquid bait is irresistible to Black Garden Ants — worker ants feed on the gel, carry it back to the nest, and share it with the colony through trophallaxis. The poison reaches the queen, and once she dies the colony cannot reproduce. You are not just killing the ants you can see; you are eliminating the entire colony from the inside out.
      </p>
      <p>
        The 25g tube treats multiple ant runs, making it excellent value at around £5. Apply pea-sized dots along ant trails, near entry points, and behind kitchen units. The gel remains moist and attractive for days, ensuring continued uptake. For most UK homeowners dealing with a summer ant invasion, this is the first product to reach for — affordable, effective, and safe for indoor use.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>UK market leader — trusted by millions of homeowners</li>
        <li>Eliminates the entire colony including the queen</li>
        <li>25g tube covers multiple ant runs</li>
        <li>Excellent value at around £5</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Gel can dry out in very warm conditions</li>
        <li>Tube nozzle makes precise placement slightly tricky</li>
        <li>Less effective on tropical ant species like Pharaoh Ants</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-powder">Best Powder — Nippon Ant Killer Powder 500g</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Nippon Ant Killer Powder 500g"
          rank={2}
          rating={4.3}
          features={[
            'Permethrin-based powder for direct nest treatment',
            'Apply along ant runs, cracks and garden nest sites',
            'Long-lasting outdoor control',
            '6-month effective residual',
          ]}
          price="£6"
          asin="B000TAW39M"
          bestFor="Best Powder"
        />
      </div>
      <p>
        Nippon Ant Killer Powder is a permethrin-based powder designed for direct nest treatment and perimeter barriers. Where gel bait works through colony food-sharing, powder works through direct contact — ants walk through the treated area, pick up the powder on their bodies, and die within hours. It is particularly effective when you can identify the nest location and apply powder directly into the entrance.
      </p>
      <p>
        Apply along ant runs, into cracks and crevices, and around garden nest sites for long-lasting outdoor control. The 500g container provides generous coverage, and the permethrin residual remains effective for up to six months — meaning treated areas stay protected well beyond the initial application. This is the ideal complement to gel bait: use gel indoors for colony elimination, and powder outdoors to create a barrier and treat visible nests.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Permethrin-based — kills on contact</li>
        <li>6-month effective residual for long-term protection</li>
        <li>500g treats a large area — excellent value</li>
        <li>Ideal for outdoor nests, paths and perimeter barriers</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Not suitable for indoor use on kitchen surfaces</li>
        <li>Rain can wash powder away from outdoor treatment areas</li>
        <li>Does not exploit trophallaxis — kills workers, not the queen directly</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-spray">Best Spray — Nippon Ant &amp; Crawling Insect Killer Spray 750ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Nippon Ant &amp; Crawling Insect Killer Spray 750ml"
          rank={3}
          rating={4.2}
          features={[
            'Ready-to-use residual spray for indoor and outdoor',
            'Kills ants on contact with invisible barrier',
            'Apply around doorframes, skirting boards, paths',
            '750ml treats a full property perimeter',
          ]}
          price="£7"
          asin="B000TAP1R8"
          bestFor="Best Spray"
        />
      </div>
      <p>
        Nippon Ant and Crawling Insect Killer Spray is a ready-to-use residual spray for both indoor and outdoor surfaces. It kills ants on contact and leaves an invisible protective barrier that continues to kill ants crossing the treated surface for weeks after application. Apply around doorframes, windowsills, skirting boards, and garden paths to create a chemical perimeter that ants cannot cross without being poisoned.
      </p>
      <p>
        The 750ml bottle treats a full property perimeter, making it a practical choice for preventing ants from entering your home in the first place. While spray does not offer the colony-killing power of gel bait (it kills workers on contact rather than reaching the queen), it is an excellent defensive measure when used alongside gel. Deploy gel bait at active trails for colony elimination, and spray around entry points to stop new ants getting in while the gel does its work.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Ready-to-use — no mixing or diluting required</li>
        <li>Residual barrier keeps killing for weeks after application</li>
        <li>750ml covers a full property perimeter</li>
        <li>Works on all crawling insects, not just ants</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Does not kill the colony — kills workers on contact only</li>
        <li>Can disrupt gel bait if sprayed near bait placements</li>
        <li>Needs reapplication after rain on outdoor surfaces</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-indoor">Best Indoor Gel — Raid Ant Killer Gel</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Raid Ant Killer Gel"
          rank={4}
          rating={4.1}
          features={[
            'Gel bait format — place drops near ant trails',
            'Ants carry bait back to nest for colony control',
            'Discreet application with no mess',
            'Suitable for kitchens and living areas',
          ]}
          price="£6"
          asin="SEARCH"
          bestFor="Best Indoor Gel"
        />
      </div>
      <p>
        Raid Ant Killer Gel offers a gel bait format that lets you place small drops near ant trails without the mess of spraying. Worker ants feed on the gel and carry the bait back to the nest, spreading the poison through the colony via trophallaxis. The discreet application means you can use it in kitchens, bathrooms, and living areas without unsightly bait stations or powder residue.
      </p>
      <p>
        The gel format is particularly well-suited to indoor use where you want a clean, no-mess solution. Place drops along skirting boards, behind kitchen units, near entry points, and in any cracks or crevices where ants are trailing. Raid is a well-known household brand, and the product is widely available in supermarkets and online. For a straightforward indoor ant problem where convenience matters, Raid gel gets the job done.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Gel bait format — discreet and mess-free</li>
        <li>Colony control through bait transfer, not just contact kill</li>
        <li>Well-known brand — widely available in UK shops</li>
        <li>Suitable for kitchens and food preparation areas</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Smaller tube than Nippon — may need more than one for large infestations</li>
        <li>Gel can dry out if not consumed quickly</li>
        <li>Less established track record than Nippon for UK ant species</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-stations">Best Bait Stations — Terro Liquid Ant Bait Stations</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Terro Liquid Ant Bait Stations"
          rank={5}
          rating={4.3}
          features={[
            'Borax-based liquid bait stations from US market leader',
            'Pre-filled and ready to place',
            'Slow-acting formula for maximum colony spread',
            'Effective on sweet-feeding species common in UK',
          ]}
          price="£10"
          asin="SEARCH"
          bestFor="Best Bait Stations"
        />
      </div>
      <p>
        Terro Liquid Ant Bait Stations use a borax-based liquid bait formula from the US market leader in ant control. Each station comes pre-filled and ready to place — simply position them along ant trails and near entry points. The slow-acting borax formula is specifically designed so that workers have time to share the bait with the colony before dying, ensuring maximum spread through the nest and eventual queen elimination.
      </p>
      <p>
        Terro is particularly effective on sweet-feeding ant species, which includes the Black Garden Ants common in UK kitchens. The enclosed bait station design keeps the liquid contained and protected, making it a clean and child-friendly option. While Terro is a US brand and slightly harder to find in UK shops, it is readily available on Amazon and has a loyal following among UK homeowners who have tried it. For a set-and-forget bait station solution, Terro delivers reliable colony elimination.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Borax-based — naturally occurring active ingredient</li>
        <li>Pre-filled stations — no handling of bait required</li>
        <li>Slow-acting formula maximises colony spread before kill</li>
        <li>Enclosed design — safer around children and pets</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>US brand — less widely available in UK shops</li>
        <li>Liquid can dry out in warm conditions</li>
        <li>May take longer than gel-based products for full colony elimination</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">How to Choose the Right Ant Gel</h2>

      <h3>Gel vs Spray</h3>
      <p>
        Always choose gel over spray for ant problems. Spray kills only the ants you hit directly and does not reach the queen or nest. Worse, spray can cause ant colonies to "bud" (split into multiple colonies), making the problem worse. Gel bait is carried back to the nest and kills the entire colony including the queen — the only approach that provides a permanent solution.
      </p>

      <h3>Active Ingredient</h3>
      <p>
        <strong>Indoxacarb</strong> (Advion): broad-spectrum, highly palatable, professional standard. <strong>Imidacloprid</strong> (Maxforce Quantum): excellent for Pharaoh Ants and resistant populations. <strong>Borax</strong> (Terro): naturally occurring, proven effective, slightly slower acting. <strong>Spinosad</strong> (Nippon): effective for Black Garden Ants, widely available. For most UK ant problems (Black Garden Ants), any of these will work. For Pharaoh Ants, use Advion or Maxforce Quantum.
      </p>

      <h3>Gel Syringe vs Bait Station</h3>
      <p>
        <strong>Gel syringes</strong> allow precise placement in cracks, crevices, and along specific trails — maximum flexibility and effectiveness. <strong>Bait stations</strong> are enclosed, cleaner, and safer around children and pets, but less flexible in placement. For kitchens and bathrooms, gel syringes placed behind units give the best results. For living spaces with children, enclosed stations are safer.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>If you see more ants after placing gel bait, do not panic — this means it is working. Worker ants are recruiting more foragers to collect the bait and take it back to the nest. Activity should decrease significantly within 3-5 days.</p>
        </Callout>
      </div>

      {/* Application Guide */}
      <h2 id="application">How to Apply Ant Gel for Best Results</h2>

      <h3>Step 1: Identify the Ant Trail</h3>
      <p>
        Watch where ants are coming from and going to. Follow the trail in both directions if possible — one direction leads to the nest, the other to their food source. Place gel bait along the trail, near entry points, and close to where the trail disappears into a crack or behind a unit.
      </p>

      <h3>Step 2: Place Small Dots</h3>
      <p>
        Apply pea-sized dots of gel every 30-50cm along the ant trail. Place dots slightly to the side of the trail, not directly on it. This allows ants to discover the bait without the trail being disrupted. Behind kitchen units, along skirting boards, and near entry points are the most effective locations.
      </p>

      <h3>Step 3: Do Not Disturb</h3>
      <p>
        Do not spray insecticide, clean the ant trail, or disturb ants that are feeding on the gel. You want maximum ant traffic to and from the bait. Every ant that feeds and returns to the nest is carrying poison that will spread to more colony members.
      </p>

      <h3>Step 4: Be Patient</h3>
      <p>
        Full colony elimination takes 7-14 days. You will likely see increased ant activity in the first 2-3 days as workers recruit more foragers. Activity should decrease noticeably from day 3-5, with the trail stopping completely within 1-2 weeks. If the gel has been completely consumed, apply more.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>How does ant gel bait work?</h3>
      <p>
        Worker ants find the gel, consume it, and carry it back to the nest where they share it with other workers, larvae, and the queen through trophallaxis (mouth-to-mouth feeding). The poison kills slowly (24-72 hours), allowing it to spread through the entire colony before ants die. Once the queen dies, the colony collapses.
      </p>

      <h3>How long does ant gel take to kill a colony?</h3>
      <p>
        Most ant gel baits eliminate a colony within 1-2 weeks. You may initially see more ants around the bait — this is normal. Activity should decrease within 3-5 days, with full elimination in 7-14 days.
      </p>

      <h3>Is ant gel bait safe around pets and children?</h3>
      <p>
        Ant gels use low concentrations designed to be lethal to ants but minimal risk to larger animals. Still, place gel where children and pets cannot easily access it. For homes with very young children, enclosed bait stations are the safer choice.
      </p>

      <h3>Why am I seeing more ants after applying gel bait?</h3>
      <p>
        This means the bait is working. Worker ants recruit more foragers to collect the poisoned bait and carry it back to the nest. Do not disturb them or apply spray near the gel. Activity should decrease within 3-5 days.
      </p>

      <h3>Should I use gel bait or spray for ants?</h3>
      <p>
        Gel bait is far more effective. Spray kills only visible workers and does not reach the queen. Gel is carried back to the nest and kills the entire colony. Spray can actually worsen problems by causing colonies to split (budding).
      </p>

      <h3>Where should I place ant gel bait?</h3>
      <p>
        Along ant trails, near entry points, behind kitchen units, along skirting boards, and near food sources. Place small pea-sized dots every 30-50cm. Position dots slightly to the side of the trail, not directly on it.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Ants Keep Coming Back?"
          subtext="A professional pest controller can identify species, locate hidden nests, and apply commercial-grade gel bait for permanent colony elimination"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the full picture on ant control?</p>
        <a
          href="/guides/how-to-get-rid-of-ants"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          How to Get Rid of Ants — Complete UK Guide →
        </a>
      </div>
    </GuideLayout>
  );
}
