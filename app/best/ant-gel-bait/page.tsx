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
        text: 'Ant gel bait works by exploiting the ant colony\'s food-sharing behaviour (trophallaxis). Worker ants find the gel, consume it, and carry it back to the nest where they share it with other workers, larvae, and crucially the queen. The active ingredient kills slowly (24-72 hours), giving the poison time to spread throughout the colony. Once the queen is killed, the colony cannot reproduce and dies out completely.',
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
  { id: 'best-overall', title: 'Best Overall — Advion Ant Gel' },
  { id: 'best-value', title: 'Best Value — Nippon Ant Killer Liquid' },
  { id: 'best-indoor', title: 'Best Indoor — Raid Ant Gel' },
  { id: 'best-stations', title: 'Best Bait Stations — Terro Liquid Ant Baits' },
  { id: 'best-professional', title: 'Best Professional — Maxforce Quantum' },
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
            <th>Active Ingredient</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Advion Ant Gel</td>
            <td>Indoxacarb</td>
            <td>Best Overall</td>
            <td>~£18</td>
          </tr>
          <tr>
            <td>Nippon Ant Killer Liquid</td>
            <td>Spinosad</td>
            <td>Best Value</td>
            <td>~£5</td>
          </tr>
          <tr>
            <td>Raid Ant Killer Gel</td>
            <td>D-Glucitol/Permethrin</td>
            <td>Best Indoor</td>
            <td>~£6</td>
          </tr>
          <tr>
            <td>Terro Liquid Ant Baits</td>
            <td>Borax</td>
            <td>Best Bait Stations</td>
            <td>~£10</td>
          </tr>
          <tr>
            <td>Maxforce Quantum</td>
            <td>Imidacloprid</td>
            <td>Best Professional</td>
            <td>~£25</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="1–2 weeks" label="Typical time for gel bait to eliminate an entire ant colony" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Advion Ant Gel</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Advion Ant Gel Bait"
          rank={1}
          rating={4.5}
          features={[
            'Indoxacarb active — highly palatable to all UK ant species',
            'Professional-grade gel used by pest controllers',
            'Syringe applicator for precise placement',
            'Eliminates entire colonies including the queen',
          ]}
          price="£18"
          asin="B00GKHI2PW"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Advion Ant Gel is the gold standard in ant gel bait — the product that professional pest controllers use more than any other for indoor ant infestations. The active ingredient, indoxacarb, has two key properties that make it devastatingly effective: it is highly palatable to all common UK ant species (Black Garden Ants, Pharaoh Ants, and Ghost Ants), and it kills with a delayed action that allows maximum transfer through the colony before any ants die.
      </p>
      <p>
        The syringe applicator allows you to place precise, pea-sized dots of gel exactly where ants are trailing — along skirting boards, behind kitchen units, near entry points, and in cracks and crevices. The gel remains moist and attractive for weeks, ensuring continued uptake even if it takes time for worker ants to discover it. Once they do find it, the feeding frenzy begins: scouts recruit more workers, and the gel is carried deep into the nest.
      </p>
      <p>
        In professional pest control circles, Advion is considered the most reliable ant gel on the market. It consistently achieves full colony elimination within 7-14 days, and its broad-spectrum palatability means it works on all the ant species you are likely to encounter in a UK home. If you want the same product that a BPCA-certified technician would use, this is it.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade indoxacarb formula</li>
        <li>Highly palatable to all UK ant species</li>
        <li>Precise syringe applicator for targeted placement</li>
        <li>Reliable full colony elimination in 7-14 days</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price than consumer alternatives</li>
        <li>Single syringe — may need multiple for severe infestations</li>
        <li>Professional product — less consumer-friendly packaging</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-value">Best Value — Nippon Ant Killer Liquid</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Nippon Ant Killer Liquid Bait"
          rank={2}
          rating={4.3}
          features={[
            'The UK\'s best-selling ant killer for decades',
            'Liquid bait formula ants carry back to the nest',
            'Includes bait station trays for clean deployment',
            'Affordable and widely available',
          ]}
          price="£5"
          asin="B001MIVFGC"
          bestFor="Best Budget"
        />
      </div>
      <p>
        Nippon has been the UK's go-to ant killer for decades, and for good reason. The liquid bait formula is highly attractive to Black Garden Ants — by far the most common species causing problems in UK homes. Worker ants drink the liquid, carry it back to the nest, and share it with the colony through trophallaxis. The result is the same as gel bait: the poison spreads through the colony and kills the queen, ending the infestation at its source.
      </p>
      <p>
        At around £5, Nippon offers exceptional value. The kit includes small bait station trays where you deposit drops of the liquid, keeping the poison contained and off your kitchen surfaces. The trays can be placed along ant trails, near entry points, and behind appliances. The liquid remains attractive for several days, though you may need to refresh it if it dries out in warm conditions.
      </p>
      <p>
        Nippon is available in virtually every hardware store, supermarket, and garden centre in the UK, making it the most accessible option on our list. For a straightforward Black Garden Ant problem — ants trailing across your kitchen floor in summer — Nippon is the affordable, proven solution that millions of UK homeowners reach for every year.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>UK's best-selling ant killer — proven over decades</li>
        <li>Very affordable at around £5</li>
        <li>Includes bait station trays</li>
        <li>Effective against Black Garden Ants</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Liquid can dry out in warm conditions</li>
        <li>Less effective on tropical ant species (Pharaoh Ants)</li>
        <li>Not as potent as professional-grade indoxacarb gels</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-indoor">Best Indoor — Raid Ant Killer Gel</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Raid Ant Killer Gel Bait Stations"
          rank={3}
          rating={4.1}
          features={[
            'Pre-filled enclosed bait stations — no mess',
            'Child and pet-resistant design',
            'Place and forget — no refilling needed',
            'Kills the colony through bait transfer',
          ]}
          price="£6"
          asin="B004US3F1Y"
          bestFor="Best Indoor"
        />
      </div>
      <p>
        Raid Ant Killer Gel Bait Stations are the most convenient option for indoor use. Each station comes pre-filled with ant gel bait inside an enclosed plastic housing — you simply peel off the adhesive backing, place the station along an ant trail, and walk away. There is no mess, no exposed gel, and no need to handle the bait directly. The enclosed design also makes these stations the safest choice for homes with young children or pets who might touch exposed gel.
      </p>
      <p>
        The stations work on the same principle as all gel baits: worker ants enter the station through small openings, feed on the gel inside, and carry the poisoned bait back to the colony. The enclosed format does not reduce effectiveness — ants readily enter the stations and feed. The stations are discreet enough to place in visible areas (along skirting boards, behind appliances, on window sills) without them being particularly noticeable.
      </p>
      <p>
        For a clean, hassle-free indoor solution — particularly in kitchens where you do not want exposed gel near food preparation areas — Raid bait stations are the best option. They are also ideal for rental properties where you want to address an ant problem without leaving visible bait marks on surfaces.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Pre-filled and enclosed — no mess or handling</li>
        <li>Child and pet-resistant design</li>
        <li>Discreet placement — barely noticeable</li>
        <li>Place and forget — no maintenance needed</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Cannot target specific cracks and crevices like a syringe</li>
        <li>Fixed gel amount — cannot increase dose for severe problems</li>
        <li>Less effective than professional-grade gel for serious infestations</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-stations">Best Bait Stations — Terro Liquid Ant Baits</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Terro Liquid Ant Bait Stations"
          rank={4}
          rating={4.3}
          features={[
            'Borax-based liquid bait — proven effective',
            'Pre-filled snap-off stations for easy placement',
            'Attracts and kills all common household ants',
            'Multi-pack for treating multiple locations',
          ]}
          price="£10"
          asin="B07BFQ1V5L"
          bestFor="Best Bait Stations"
        />
      </div>
      <p>
        Terro is one of the world's most popular ant bait brands, and their liquid bait stations use a tried-and-tested borax formula that has been eliminating ant colonies for over a century. Borax works as a slow-acting stomach poison — ants consume the sweet liquid eagerly, share it with the colony, and the borax gradually disrupts their digestive systems over 24-48 hours. The delayed action is perfectly calibrated: fast enough to kill, slow enough to allow maximum spread through the colony.
      </p>
      <p>
        The snap-off bait station design is clever — you twist the tab to open the station, and the liquid flows into a small tray that ants access through openings in the base. The stations can be placed flat or against walls, and the enclosed design keeps the liquid contained and protected from dust and debris. A multi-pack provides enough stations to treat multiple rooms or multiple ant trails simultaneously.
      </p>
      <p>
        Borax is a naturally occurring mineral compound, which makes Terro a good choice for people who prefer a less synthetic approach. While it is still toxic and should be kept away from children and pets, it has a well-established safety profile and has been used in household ant control for generations.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Borax — proven effective for over a century</li>
        <li>Multi-pack for comprehensive treatment</li>
        <li>Snap-off design is easy and mess-free</li>
        <li>Naturally occurring active ingredient</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Liquid can dry out in warm conditions</li>
        <li>Stations are visible and not the most discreet</li>
        <li>May take longer to work than professional-grade products</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-professional">Best Professional — Maxforce Quantum</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Maxforce Quantum Ant Gel"
          rank={5}
          rating={4.6}
          features={[
            'Imidacloprid active — professional-grade formula',
            'Moisture-resistant gel stays attractive for weeks',
            'Effective on all UK ant species including Pharaoh Ants',
            'Used by professional pest controllers worldwide',
          ]}
          price="£25"
          asin="B073JPVRFB"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Maxforce Quantum is the other professional-grade ant gel alongside Advion, and many pest controllers consider it the superior product for certain ant species — particularly Pharaoh Ants, which are notoriously difficult to control and are becoming increasingly common in UK flats, hospitals, and heated buildings. The imidacloprid active ingredient provides a unique mode of action that is different from indoxacarb, making Maxforce Quantum an excellent alternative if other products have not worked.
      </p>
      <p>
        The gel formulation is specifically engineered to remain moist and attractive for extended periods — a critical feature because ant bait gels that dry out stop attracting ants. Maxforce Quantum uses a unique moisture-retention technology that keeps the gel palatable for weeks, even in dry indoor environments. This extended attractiveness means the gel continues working long after application, catching late-discovering ant trails.
      </p>
      <p>
        At £25, this is the most expensive product on our list — but for persistent or severe ant problems, particularly those involving Pharaoh Ants or multiple colonies, it is often the product that finally resolves the issue. Professional pest controllers routinely deploy Maxforce Quantum in commercial environments (restaurants, hospitals, food factories) where reliable colony elimination is essential.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade imidacloprid formula</li>
        <li>Moisture-resistant — stays attractive for weeks</li>
        <li>Effective on all UK ant species including Pharaoh Ants</li>
        <li>Different mode of action from Advion — good alternative</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Most expensive option on our list</li>
        <li>Professional product — less consumer-friendly packaging</li>
        <li>Overkill for a basic Black Garden Ant problem</li>
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
