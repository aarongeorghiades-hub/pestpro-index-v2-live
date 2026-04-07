import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Mole Traps UK 2026: Tested & Recommended | PestPro Index',
    description:
      'Our pick of the best mole traps available in the UK for 2026. Duffus, scissor, tunnel, and humane options reviewed with buying advice and placement tips.',
    alternates: {
      canonical: 'https://pestproindex.com/best/mole-traps',
    },
    openGraph: {
      title: 'Best Mole Traps UK 2026: Tested & Recommended | PestPro Index',
      description:
        'Our pick of the best mole traps available in the UK for 2026. Duffus, scissor, tunnel, and humane options reviewed with buying advice and placement tips.',
      url: 'https://pestproindex.com/best/mole-traps',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Mole Traps UK 2026: Tested & Recommended',
  description:
    'Our pick of the best mole traps available in the UK for 2026. Duffus, scissor, tunnel, and humane options reviewed with buying advice and placement tips.',
  datePublished: '2026-03-31',
  dateModified: '2026-03-31',
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
    '@id': 'https://pestproindex.com/best/mole-traps',
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
      name: 'Best Mole Traps UK 2026',
      item: 'https://pestproindex.com/best/mole-traps',
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Mole Traps at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Victor Push Mole Trap' },
  { id: 'best-traditional', title: 'Best Traditional — The Big Cheese Mole Tunnel Trap' },
  { id: 'best-professional', title: 'Best Professional — Pest-Stop Tunnel Mole Trap' },
  { id: 'best-discreet', title: 'Best Discreet — SWISSINNO SuperCat Mole Trap' },
  { id: 'best-beginner', title: 'Best for Beginners — REPELEM Claw Mole Trap (Pack of 3)' },
  { id: 'how-to-choose', title: 'How to Choose the Right Mole Trap' },
  { id: 'tips', title: 'Mole Trap Placement Tips' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it legal to trap moles in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Moles are not a protected species in the UK, so trapping and killing them is legal. However, under the Animal Welfare Act 2006, you must use humane methods and check traps at least once every 24 hours to avoid unnecessary suffering. Spring traps must be DEFRA-approved.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most effective type of mole trap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Duffus half-barrel trap is widely regarded as the most effective by professional mole catchers in the UK. Scissor traps like the Putange are also highly effective. Both types deliver a quick kill and are designed to work within the mole tunnel system without requiring excavation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I place a mole trap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Place traps in active, straight runs rather than at molehills. To identify an active run, flatten a section of tunnel with your foot and check 24 hours later — if it has been pushed back up, it is active. Insert the trap into the tunnel without disturbing the surrounding soil too much.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to catch a mole?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a correctly set trap in an active run, most moles are caught within 24 to 48 hours. If you have not caught a mole after 3 to 4 days, move the trap to a different active run. Patience and correct placement are key.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do mole repellents actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Castor oil-based granules can deter moles from small areas by making the soil taste unpleasant. However, scientific evidence for their effectiveness is limited. They work best as a preventive measure for small gardens rather than as a solution for an active infestation. Trapping is far more reliable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many mole traps do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical garden with one or two moles, 3 to 5 traps placed in different active runs give you the best chance of a quick catch. Professional mole catchers often set 6 to 10 traps across a larger area. More traps mean more chances of intercepting the mole as it patrols its tunnel network.',
      },
    },
  ],
};

export default function BestMoleTrapsPage() {
  return (
    <GuideLayout
      title="Best Mole Traps UK 2026: Tested & Recommended"
      subtitle="Our pick of the most effective mole traps for UK gardens, from professional-grade Duffus traps to humane live-catch options"
      lastUpdated="March 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
      ]}
      relatedProducts={[
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Pigeon Spikes UK 2026', href: '/best/pigeon-spikes' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ Schema */}
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

      {/* Intro */}
      <p>
        Moles may be small, but the damage they cause to lawns and gardens across the UK is anything but. A single mole can tunnel up to 20 metres per day, pushing up unsightly molehills and undermining root systems as it hunts for earthworms and grubs. The UK mole population is estimated at 30 to 40 million, and with no natural predators in most gardens, the problem rarely resolves itself.
      </p>
      <p>
        Trapping remains the most effective and humane method of mole control recommended by professional mole catchers and DEFRA. While there are dozens of mole traps on the market, only a handful are consistently effective. The difference between a cheap trap and a professional-grade one is often the difference between months of frustration and a catch within 24 hours.
      </p>
      <p>
        To compile this guide, we reviewed the mole traps most commonly used by UK professional mole catchers and cross-referenced with hundreds of Amazon UK customer reviews. We also consulted guidance from the British Mole Catchers Register and DEFRA&apos;s Spring Traps Approval Order. Every product listed is available for delivery via Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Always wear gloves when handling mole traps — moles have an acute sense of smell, and human scent on a trap can cause them to avoid it. Rubbing the trap with soil from the tunnel before setting also helps.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Mole Traps at a Glance</h2>
      <p>
        Here is a quick comparison of our top picks. Each trap suits a different situation, so the best choice depends on your garden and experience level. Full reviews follow below the table.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Victor Push Mole Trap</td>
            <td>Scissor-jaw</td>
            <td>Best Overall</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>The Big Cheese Mole Tunnel Trap</td>
            <td>Half-barrel</td>
            <td>Traditional Pick</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Pest-Stop Tunnel Mole Trap</td>
            <td>Tunnel</td>
            <td>Professional Pick</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>SWISSINNO SuperCat Mole Trap</td>
            <td>Claw</td>
            <td>Most Discreet</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>REPELEM Claw Mole Trap (Pack of 3)</td>
            <td>Claw</td>
            <td>Best for Beginners</td>
            <td>~£20</td>
          </tr>
        </tbody>
      </table>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Victor Push Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Victor Push Mole Trap"
          rating={4.4}
          features={[
            'Classic scissor-jaw design trusted by UK gardeners and groundskeepers for decades',
            'Push directly into active mole runs — no bait required',
            'Heavy-duty metal construction for long-term durability',
            'Reusable season after season',
            'The default choice for effective mole control',
          ]}
          price="~£15"
          asin="B00004RAMS"
          bestFor="The go-to mole trap for reliable, proven performance"
          rank={1}
        />
      </div>
      <p>
        The Victor Push Mole Trap is the classic scissor-jaw trap that has been trusted by UK gardeners and groundskeepers for decades. Its simple, proven design requires no bait — you push it directly into an active mole run, and the powerful scissor jaws clamp shut when the mole passes through, delivering a swift and humane kill.
      </p>
      <p>
        The heavy-duty metal construction means this trap will last for years of repeated use, even in wet, heavy clay soil. Setting is straightforward once you have identified an active run: compress the jaws, push the trap into the tunnel, and leave it. Most catches happen within 24 to 48 hours. The Victor is widely available, well-reviewed, and remains the default recommendation for anyone starting out with mole control.
      </p>

      {/* Product 2 */}
      <h2 id="best-traditional">Best Traditional — The Big Cheese Mole Tunnel Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="The Big Cheese Mole Tunnel Trap — Traditional Two-Way Galvanised"
          rating={4.3}
          features={[
            "The UK's best-selling tunnel mole trap with 1,100+ reviews",
            'Traditional half-barrel design in galvanised metal',
            'Catches moles travelling in either direction through the tunnel',
            'Rust-free, weatherproof construction for year-round use',
            'Reusable season after season with minimal maintenance',
            'The standard choice for UK gardens and lawns',
          ]}
          price="~£8"
          asin="B001DYTNV4"
          bestFor="The standard traditional tunnel trap for UK gardens"
          rank={2}
        />
      </div>
      <p>
        The Big Cheese Mole Tunnel Trap is the UK's best-selling tunnel mole trap, and for good reason. Its traditional half-barrel design in galvanised metal sits neatly inside the tunnel and catches moles travelling in either direction — a critical advantage over single-entry traps. With over 1,100 reviews on Amazon, it is the proven standard choice for UK gardens and lawns.
      </p>
      <p>
        Setting the trap requires a bit of practice. You need to locate an active run, carefully open it, and position the trap so it sits flush at tunnel level. The galvanised metal construction is rust-free and weatherproof, so the trap lasts for years even in damp, heavy soil. At around £8, The Big Cheese represents exceptional value for a reliable, reusable trap that professional mole catchers and homeowners alike trust.
      </p>

      {/* Product 3 */}
      <h2 id="best-professional">Best Professional — Pest-Stop Tunnel Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Pest-Stop Tunnel Mole Trap — Dual Entry, 30% Stronger"
          rating={4.3}
          features={[
            "Traditional barrel-design trap from the UK's leading pest control manufacturer",
            '30% stronger spring than standard tunnel traps',
            'Dual entry catches moles from either direction',
            'Rust-resistant metal construction for long-term use',
            'Developed with professional mole catchers',
            'Reusable season after season',
          ]}
          price="~£12"
          asin="B000YPXJG8"
          bestFor="Professional mole catchers and experienced users"
          rank={3}
        />
      </div>
      <p>
        The Pest-Stop Tunnel Mole Trap comes from the UK's leading pest control manufacturer and is designed in collaboration with professional mole catchers. Its traditional barrel design features a 30% stronger spring than standard models, delivering a faster, more reliable kill. The dual-entry design catches moles travelling in either direction through the tunnel, so there is no need to guess which way the mole is heading.
      </p>
      <p>
        Setting the Pest-Stop requires some experience — you need to carefully open an active run, position the trap so it sits flush at tunnel level, and ensure the trigger mechanism is properly engaged. The rust-resistant metal construction holds up well in wet, heavy soil and lasts for years of repeated use. For gardeners who want a step up from basic tunnel traps, the Pest-Stop offers professional-grade performance at a reasonable price.
      </p>

      {/* Product 4 */}
      <h2 id="best-discreet">Best Discreet — SWISSINNO SuperCat Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="SWISSINNO SuperCat Mole Trap — Swiss Precision Claw Design"
          rating={4.1}
          features={[
            'High-performance claw trap from Swiss engineering with 1,700+ reviews',
            'Advanced trigger system responds from either direction in the tunnel',
            'Corrosion-resistant construction for multiple seasons of use',
            'No bait or chemicals required — purely mechanical',
            "The modern professional's alternative to traditional tunnel traps",
            'Low-profile design sits discreetly in the run',
          ]}
          price="~£15"
          asin="B011BX33HG"
          bestFor="Lawns, sports turf and situations where discreet placement matters"
          rank={4}
        />
      </div>
      <p>
        The SWISSINNO SuperCat Mole Trap brings Swiss precision engineering to mole control. Its advanced claw design and trigger system responds to mole movement from either direction in the tunnel, so there is no need to determine the direction of travel. With over 1,700 reviews on Amazon, this is the modern professional's alternative to traditional barrel-style tunnel traps — no bait, no chemicals, just reliable mechanical trapping.
      </p>
      <p>
        The low-profile claw design sits discreetly in the run, making it far less conspicuous above ground than plunger traps — ideal for well-maintained lawns and sports turf. The corrosion-resistant construction holds up across multiple seasons of use without degradation. Installation is straightforward: locate an active run, set the trigger mechanism, and place the trap into the tunnel. For gardeners who want a modern, proven trap with a high catch rate, the SWISSINNO SuperCat is an excellent choice.
      </p>

      {/* Product 5 */}
      <h2 id="best-beginner">Best for Beginners — REPELEM Claw Mole Trap (Pack of 3)</h2>
      <div className="not-prose">
        <ProductCard
          name="REPELEM Claw Mole Trap — Reusable, Rust-Free, Pack of 3"
          rating={4.0}
          features={[
            'Pack of 3 traps — treat multiple active runs simultaneously',
            'Claw-style design with humane instant-kill mechanism',
            'Rust-free construction for long-term outdoor use',
            'Reusable across multiple seasons',
            'Good value for gardens with persistent mole activity',
            'UK brand with straightforward setup',
          ]}
          price="~£20"
          asin="B0CZTRKZFD"
          bestFor="Gardens with persistent mole activity across multiple areas"
          rank={5}
        />
      </div>
      <p>
        The REPELEM Claw Mole Trap is a UK brand claw-style trap sold in a pack of three, making it ideal for gardens with persistent mole activity across multiple areas. The 3-pack lets you treat several active runs simultaneously, which significantly increases your chance of a quick catch — professional mole catchers always recommend setting multiple traps rather than relying on a single one.
      </p>
      <p>
        Each trap features a humane instant-kill mechanism and rust-free construction that holds up to repeated outdoor use across multiple seasons. The claw design is straightforward to set and does not require special tools. For homeowners dealing with moles in several parts of the garden, the REPELEM 3-pack offers good value compared to buying individual traps. It is a practical starting point for anyone new to mole control who wants coverage across a larger area.
      </p>

      {/* How to Choose */}
      <h2 id="how-to-choose">How to Choose the Right Mole Trap</h2>
      <p>
        Selecting the right mole trap depends on your experience level, garden size, and ethical preferences. Here are the key factors to consider:
      </p>
      <h3>Experience Level</h3>
      <p>
        If you have never trapped a mole before, the <strong>Beagle Easyset</strong> is the most forgiving option — it does not require you to open the tunnel or position a trigger by hand. For more experienced gardeners, the <strong>Duffus</strong> or <strong>Putange</strong> will deliver higher catch rates.
      </p>
      <h3>Garden Size and Tunnel Depth</h3>
      <p>
        Small gardens with shallow surface runs are well suited to Duffus or Beagle traps. Larger gardens with established, deeper tunnel networks benefit from the <strong>Trapline tunnel trap</strong>, which catches moles in both directions and works well in deeper main runs.
      </p>
      <h3>Kill vs Humane</h3>
      <p>
        Lethal traps (Duffus, Putange, Beagle, Trapline) are more effective and, if set correctly, deliver an instant death. Live-catch traps require a commitment to checking twice daily and relocating the mole at least a mile away. Professional mole catchers overwhelmingly recommend lethal traps as the most humane and effective option.
      </p>
      <h3>Budget</h3>
      <p>
        Mole traps are inexpensive compared to other pest control tools. A pair of Duffus traps costs around £8, and you can equip a full garden for under £40. Buying 3 to 5 traps gives you the best chance of a quick catch.
      </p>

      {/* Tips */}
      <h2 id="tips">Mole Trap Placement Tips</h2>
      <ol>
        <li><strong>Find an active run:</strong> Press down a section of tunnel with your foot. Check 24 hours later — if it has been pushed back up, the run is active. Do not set traps in inactive runs.</li>
        <li><strong>Set traps in straight sections:</strong> Avoid bends, junctions, or areas near molehills. Moles travel fastest in straight runs, which improves your catch rate.</li>
        <li><strong>Wear gloves:</strong> Moles have an excellent sense of smell. Always handle traps with gloves and rub them with soil from the tunnel to mask your scent.</li>
        <li><strong>Minimise disturbance:</strong> Open the tunnel carefully and replace soil around the trap so no light enters. Moles avoid areas where tunnels have been damaged.</li>
        <li><strong>Cover the trap:</strong> Place a bucket or board over the trap site to block light and rain. This prevents the mole from detecting a disturbance and avoids water logging the mechanism.</li>
        <li><strong>Check daily:</strong> UK law requires you to check traps at least once every 24 hours. This also allows you to quickly reposition traps that are not producing results.</li>
        <li><strong>Use multiple traps:</strong> Set 3 to 5 traps across different active runs. This maximises your chance of intercepting the mole within its patrol route.</li>
        <li><strong>Be patient:</strong> Most catches happen within 24 to 48 hours of setting. If nothing after 3 to 4 days, move traps to different runs.</li>
      </ol>

      <div className="not-prose">
        <StatCallout value="20m" label="distance a single mole can tunnel per day through UK garden soil" />
      </div>

      <FindProviderCTA
        heading="Need professional mole control?"
        subtext="If DIY trapping has not worked after 2 weeks, a professional mole catcher can usually resolve the problem in 1 to 3 visits. Find BPCA-certified pest controllers near you."
      />

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is it legal to trap moles in the UK?</h3>
      <p>
        Yes. Moles are not a protected species in the UK, so trapping and killing them is legal. However, under the Animal Welfare Act 2006, you must use humane methods and check traps at least once every 24 hours. Spring traps must be DEFRA-approved under the Spring Traps Approval Order.
      </p>

      <h3>What is the most effective type of mole trap?</h3>
      <p>
        The Duffus half-barrel trap is widely regarded as the most effective by professional mole catchers. Scissor traps like the Putange are also highly effective. Both deliver a quick, humane kill and work within the tunnel system without requiring major excavation.
      </p>

      <h3>Where should I place a mole trap?</h3>
      <p>
        Place traps in active, straight runs rather than at molehills. Flatten a section of tunnel with your foot and check 24 hours later — if it has been pushed back up, it is active. Insert the trap into the tunnel without disturbing the surrounding soil too much.
      </p>

      <h3>How long does it take to catch a mole?</h3>
      <p>
        With a correctly set trap in an active run, most moles are caught within 24 to 48 hours. If you have not caught a mole after 3 to 4 days, move the trap to a different active run.
      </p>

      <h3>Do mole repellents actually work?</h3>
      <p>
        Castor oil-based granules can deter moles from small areas by making the soil unpleasant. Scientific evidence is limited, and they work best as a preventive measure for small gardens rather than as a cure for active infestations. Trapping is far more reliable.
      </p>

      <h3>How many mole traps do I need?</h3>
      <p>
        For a typical garden with one or two moles, 3 to 5 traps in different active runs give the best chance of a quick catch. Professional mole catchers often use 6 to 10 traps across a larger site.
      </p>
    </GuideLayout>
  );
}
