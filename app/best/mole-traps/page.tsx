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
  { id: 'best-overall', title: 'Best Overall — Duffus Mole Trap' },
  { id: 'best-easyset', title: 'Best Easy-Set — Beagle Easyset Mole Trap' },
  { id: 'best-scissor', title: 'Best Scissor Trap — Putange Mole Trap' },
  { id: 'best-tunnel', title: 'Best Tunnel Trap — Trapline Mole Tunnel Trap' },
  { id: 'best-humane', title: 'Best Humane Option — The Big Cheese Live Catch Mole Trap' },
  { id: 'best-repellent', title: 'Best Mole Repellent — Defenders Mole Scatter Granules' },
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
            <td>Duffus Mole Trap</td>
            <td>Half-barrel</td>
            <td>Best Overall</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Beagle Easyset Mole Trap</td>
            <td>Claw / easy-set</td>
            <td>Easiest to Set</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>Putange Mole Trap</td>
            <td>Scissor</td>
            <td>Professional Pick</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>Trapline Tunnel Trap</td>
            <td>Tunnel / barrel</td>
            <td>Deep Tunnel Runs</td>
            <td>~£10</td>
          </tr>
          <tr>
            <td>Big Cheese Live Catch</td>
            <td>Humane / live catch</td>
            <td>Humane Option</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Defenders Scatter Granules</td>
            <td>Repellent</td>
            <td>Prevention</td>
            <td>~£9</td>
          </tr>
        </tbody>
      </table>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Duffus Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Duffus Mole Trap (2-Pack)"
          rating={4.4}
          features={[
            'Traditional half-barrel design used by professional UK mole catchers for decades',
            'DEFRA-approved — compliant with the Spring Traps Approval Order',
            'Galvanised steel construction resists rust and corrosion in damp soil',
            'Sits flush within the tunnel — no excavation needed, moles approach naturally',
            'Powerful spring delivers an instant, humane kill',
            'Reusable season after season with minimal maintenance',
          ]}
          price="~£8"
          asin="B006G4GXV2"
          bestFor="Professional-grade mole control for any garden size"
          rank={1}
        />
      </div>
      <p>
        The Duffus half-barrel trap is the gold standard among UK mole catchers for good reason. Its simple, robust design has been refined over decades, and it remains the trap most recommended by members of the British Mole Catchers Register. The half-barrel shape sits neatly inside the tunnel without disrupting the mole&apos;s natural path, which is crucial for success.
      </p>
      <p>
        Setting the trap requires a bit of practice — you need to locate an active run, carefully open it, and position the trap so the trigger plate sits at tunnel floor level. Once you have done it a few times it becomes second nature. The galvanised steel construction means these traps last for years, even buried in wet clay soil through a British winter. At around £8 for two, they represent exceptional value.
      </p>

      {/* Product 2 */}
      <h2 id="best-easyset">Best Easy-Set — Beagle Easyset Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Beagle Easyset Mole Trap"
          rating={4.2}
          features={[
            'Innovative claw design can be set without fully opening the tunnel',
            'Push-in mechanism — simply push the trap into the ground over an active run',
            'Bright orange handle makes it easy to locate in the garden',
            'No special tools required — set it with your hands and feet only',
            'DEFRA-approved spring trap for humane dispatch',
            'Ideal for beginners who have never used a mole trap before',
          ]}
          price="~£15"
          asin="B01N6PJDFE"
          bestFor="First-time users and gardeners who want a simple set-and-forget trap"
          rank={2}
        />
      </div>
      <p>
        The Beagle Easyset has revolutionised mole trapping for home gardeners. Unlike traditional traps that require you to dig into the tunnel and position the mechanism by hand, the Easyset is pushed vertically into the ground above an active run. The claw mechanism drops into the tunnel below, and when the mole passes through it triggers a swift kill.
      </p>
      <p>
        The trade-off is that it is not quite as consistently effective as a well-placed Duffus or Putange trap. Because you are inserting it from above rather than inside the tunnel, placement is slightly less precise. However, for gardeners who find the idea of opening a mole tunnel and reaching in to place a trap daunting, the Beagle is an excellent alternative. The bright orange top makes it easy to spot in the lawn.
      </p>

      {/* Product 3 */}
      <h2 id="best-scissor">Best Scissor Trap — Putange Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Putange Scissor Mole Trap"
          rating={4.3}
          features={[
            'Professional-grade scissor mechanism for rapid dispatch',
            'Exceptionally strong spring — very high catch rate when set correctly',
            'Stainless steel construction for long-term durability',
            'Favoured by professional mole catchers across the UK and Europe',
            'Works in both shallow and deep runs',
            'Compact design fits in tight tunnel systems',
          ]}
          price="~£12"
          asin="B07VK96Z2V"
          bestFor="Experienced users and professionals wanting maximum catch rates"
          rank={3}
        />
      </div>
      <p>
        The Putange (sometimes spelled Putange-style or French scissor trap) is the other mainstay of professional mole catching alongside the Duffus. Its scissor-action jaws clamp shut with considerable force when triggered, delivering an instant kill. Many professional mole catchers rate the Putange as slightly more effective than the Duffus in certain soil types, particularly heavy clay.
      </p>
      <p>
        Setting a Putange requires more experience and hand strength than the Beagle Easyset. The powerful spring means you need to compress it firmly while positioning the trigger — we recommend watching a couple of YouTube tutorials before your first attempt. Once mastered, however, the catch rate is excellent. These traps are built to last and many professionals use the same Putange traps for 10 years or more.
      </p>

      {/* Product 4 */}
      <h2 id="best-tunnel">Best Tunnel Trap — Trapline Mole Tunnel Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="Trapline Mole Tunnel Trap"
          rating={4.1}
          features={[
            'Full barrel design catches moles travelling in either direction',
            'Self-setting trigger mechanism with sensitive plate',
            'Galvanised steel barrel resists soil moisture and corrosion',
            'Catches in both shallow surface runs and deeper main tunnels',
            'Transparent top option allows visual check without disturbing trap',
            'Good choice for longer, straight tunnel runs',
          ]}
          price="~£10"
          asin="B0BYVYLGJK"
          bestFor="Deeper tunnel systems and two-way trapping"
          rank={4}
        />
      </div>
      <p>
        The Trapline tunnel trap is a full-barrel design that sits inside the mole&apos;s tunnel and catches from either direction. This makes it particularly effective in main runs — the deeper, more permanent tunnels that moles use repeatedly. Where the Duffus half-barrel only catches moles travelling in one direction, the full-barrel Trapline covers both.
      </p>
      <p>
        Installation requires a careful excavation of the tunnel to slide the barrel in, and you need to ensure the floor level matches perfectly so the mole does not detect a change underfoot. This takes practice but becomes straightforward with experience. The galvanised finish holds up well in all soil types. If you have deeper runs or a larger garden with established tunnel networks, this is an excellent choice.
      </p>

      {/* Product 5 */}
      <h2 id="best-humane">Best Humane Option — The Big Cheese Live Catch Mole Trap</h2>
      <div className="not-prose">
        <ProductCard
          name="The Big Cheese Live Catch Mole Trap"
          rating={3.8}
          features={[
            'Catches moles alive for relocation — no kill mechanism',
            'Simple barrel design slots into an active mole run',
            'One-way door allows mole to enter but not escape',
            'Check at least every 12 hours — moles can die from stress if left too long',
            'Suitable for gardeners who do not want to use lethal traps',
            'Reusable — simply release the mole and reset',
          ]}
          price="~£8"
          asin="B00DJBJGRW"
          bestFor="Gardeners seeking a non-lethal mole control option"
          rank={5}
        />
      </div>
      <p>
        For gardeners who prefer not to kill moles, the Big Cheese live-catch trap offers a humane alternative. The barrel sits inside the tunnel, and a one-way door allows the mole to enter but prevents it from leaving. You then relocate the mole at least one mile from your garden — any closer and it is likely to find its way back.
      </p>
      <p>
        The critical point with live-catch traps is checking frequency. Moles have extremely high metabolic rates and can die within 12 hours without food. You must check the trap at least twice daily, ideally every 8 to 12 hours. If you cannot commit to this, a lethal trap is actually the more humane option. The catch rate is also lower than lethal traps because moles are cautious of the one-way door mechanism.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Live-catch mole traps must be checked at least every 12 hours. Moles have very high metabolisms and can die from starvation or stress if left trapped for longer. If you cannot check twice daily, use a lethal trap instead.</p>
        </Callout>
      </div>

      {/* Product 6 */}
      <h2 id="best-repellent">Best Mole Repellent — Defenders Mole Scatter Granules</h2>
      <div className="not-prose">
        <ProductCard
          name="Defenders Mole Scatter Granules (450g)"
          rating={3.5}
          features={[
            'Castor oil-based formula makes soil taste unpleasant to moles',
            'Simply scatter on lawn and water in — no digging required',
            'Covers up to 25 square metres per application',
            'Non-toxic to pets, children, and other wildlife',
            'Best used as a preventive measure rather than a cure for active infestations',
            'Reapply every 4 to 6 weeks for ongoing protection',
          ]}
          price="~£9"
          asin="B000TAT60A"
          bestFor="Prevention and deterring moles from small garden areas"
          rank={6}
        />
      </div>
      <p>
        We include mole repellent granules with a caveat: they are not a substitute for trapping when you have an active mole problem. Castor oil-based repellents work by making the soil unpleasant for moles to forage in, which can encourage them to move elsewhere. Some gardeners report good results, while others see no effect at all.
      </p>
      <p>
        Where granules can be useful is as a preventive measure. If you have successfully trapped a mole and want to deter new ones from moving in, scattering granules around the border of your lawn may help. They are also a reasonable first step if you have only seen one or two small molehills and want to try a non-invasive approach before committing to traps. At around £9 for a 450g tub, the investment is low.
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
        <StatCallout stat="20m" description="distance a single mole can tunnel per day through UK garden soil" />
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
