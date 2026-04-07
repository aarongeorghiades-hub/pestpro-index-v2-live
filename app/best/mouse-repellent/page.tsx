import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Mouse Repellent UK 2026 | Prevention Products That Work',
    description:
      'Keep mice out of your home with the best mouse repellents and proofing products. Steel wool, peppermint sprays and sealants reviewed.',
    alternates: {
      canonical: 'https://pestproindex.com/best/mouse-repellent',
    },
    openGraph: {
      title: 'Best Mouse Repellent UK 2026 | Prevention Products That Work',
      description:
        'Keep mice out of your home with the best mouse repellents and proofing products. Steel wool, peppermint sprays and sealants reviewed.',
      url: 'https://pestproindex.com/best/mouse-repellent',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Mouse Repellent UK 2026 | Prevention Products That Work',
  description:
    'Keep mice out of your home with the best mouse repellents and proofing products. Steel wool, peppermint sprays and sealants reviewed.',
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
    '@id': 'https://pestproindex.com/best/mouse-repellent',
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
      name: 'Best Mouse Repellent UK 2026',
      item: 'https://pestproindex.com/best/mouse-repellent',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to stop mice getting into my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physical proofing is the most effective method. Use steel wool, copper mesh, or expanding foam to seal every gap 6mm or larger around your property. Focus on air bricks, pipe entry points, door bottoms, cable gaps, and garage door seals. Proofing prevents mice from entering in the first place, which is far more reliable than repellents alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does peppermint oil repel mice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is limited scientific evidence that peppermint oil repels mice. Some homeowners report temporary success, and the strong scent may deter mice from specific areas in the short term. However, peppermint oil is not a reliable solution for an active infestation and should never be used as a standalone treatment. Physical proofing is far more effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gaps should I seal to keep mice out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seal all gaps 6mm or larger. The most common mouse entry points are air bricks, gaps around pipes where they enter the building, the gap under exterior doors, spaces around cables and wiring, garage door seals, and cracks in brickwork or mortar. A mouse can fit through any gap it can get its skull through.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is steel wool or copper mesh better for mouse proofing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are highly effective. Steel wool is cheaper and widely available, but it can rust over time when exposed to moisture. Copper mesh will not rust, maintains its shape better, and is ideal for exterior use. For interior gaps, steel wool is excellent value. For exterior gaps exposed to rain, copper mesh is the better long-term choice. Pack either material tightly into the gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I mouse-proof my house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to mouse-proof your house is before autumn. Mice begin seeking warmth indoors from October as temperatures drop, so completing your proofing in September or early October gives you the best chance of preventing an infestation before it starts. However, proofing is worthwhile at any time of year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use repellents alongside traps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The best approach is to proof your home first by sealing all entry points with steel wool, copper mesh, or expanding foam. Then place traps as a backup to catch any mice that are already inside. Physical proofing stops new mice from getting in, while traps deal with those already present. Repellent sprays can be used as an additional layer but should not replace physical barriers.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Mouse Repellents at a Glance' },
  { id: 'best-ultrasonic', title: 'Best Overall — EcoMyLife Ultrasonic Repeller' },
  { id: 'best-spray', title: 'Best Spray — RepellShield Made in Germany' },
  { id: 'best-premium-spray', title: 'Best Premium Spray — REPELEM Peppermint Oil Spray' },
  { id: 'best-battery', title: 'Best Battery-Powered — Pestbye Repeller' },
  { id: 'best-natural', title: 'Best Natural — REPELEM Peppermint Oil Sachets' },
  { id: 'buying-guide', title: 'Mouse Proofing Buying Guide' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestMouseRepellentPage() {
  return (
    <GuideLayout
      title="Best Mouse Repellent UK 2026 | Prevention Products That Work"
      subtitle="Our pick of the most effective mouse repellents and proofing products to keep mice out of your home for good"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Professional Pest Control vs DIY', href: '/guides/professional-pest-control-vs-diy' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Autumn Pest Proofing: Complete UK Guide', href: '/guides/autumn-pest-proofing' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'Landlord Pest Control Responsibilities', href: '/guides/landlord-pest-control' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Mouse Poison UK 2026', href: '/best/mouse-poison' },
        { title: 'Best Mouse Bait Stations UK 2026', href: '/best/mouse-bait-stations' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Rat Poison UK 2026', href: '/best/rat-poison' },
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

      {/* Intro paragraphs */}
      <p>
        Mice are the most common pest in UK homes, and every autumn the problem intensifies as temperatures drop and house mice seek warmth, shelter, and food indoors. The British Pest Control Association estimates that mice infest close to a million UK properties each year, with the majority of new infestations beginning between October and December. Once inside, mice breed rapidly &mdash; a single pair can produce up to eighty offspring in a year &mdash; which means that a small problem in November can become a serious infestation by January if nothing is done. The most effective long-term solution is not traps, not poison, and not ultrasonic devices. It is <strong>physical proofing</strong>: sealing every gap, crack, and hole that a mouse could use to enter your home in the first place.
      </p>
      <p>
        The reason proofing works so well is simple biology. A house mouse can squeeze through any gap it can fit its skull through &mdash; and a mouse&apos;s skull is remarkably small. The critical measurement is <strong>6mm</strong>, roughly the width of a standard pencil. That means gaps around pipes where they enter the building, the space under a poorly fitted exterior door, uncovered air bricks, cracks in mortar, and openings around cables and wiring are all potential entry points. Most UK homes, particularly older properties, have dozens of these small gaps that homeowners never notice but mice exploit readily. A thorough proofing job &mdash; systematically inspecting and sealing every one of these entry points &mdash; is the single most cost-effective step you can take to prevent a mouse problem before it starts.
      </p>
      <p>
        To compile this guide, we evaluated the most popular and effective mouse repellent and proofing products available on Amazon UK, assessing each on four criteria: <strong>proven effectiveness</strong> at preventing mouse entry, <strong>durability and longevity</strong> in real-world conditions, <strong>genuine customer reviews</strong> (filtering out incentivised or inauthentic feedback), and <strong>value for money</strong>. We also consulted BPCA guidance and spoke to professional pest controllers who carry out mouse proofing work daily. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>The most effective mouse prevention is physical proofing. A mouse can fit through any gap it can get its skull through &mdash; just 6mm wide. Before spending money on sprays or repellents, walk your property and seal every gap you find with steel wool or copper mesh.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Mouse Repellents at a Glance</h2>
      <p>
        Below is a quick comparison of our five recommended mouse repellent products. Each takes a different approach to deterring mice, and for the best results you should combine repellents with physical proofing to cover every potential entry point around your property.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EcoMyLife Ultrasonic Pest Repeller 2 Pack</td>
            <td>Ultrasonic plug-in</td>
            <td>Best Overall</td>
          </tr>
          <tr>
            <td>RepellShield Rat &amp; Mouse Repellent Spray 250ml — Made in Germany</td>
            <td>Peppermint spray</td>
            <td>Best Spray</td>
          </tr>
          <tr>
            <td>REPELEM Rat &amp; Mouse Repellent Spray 250ml — Peppermint Oil</td>
            <td>Peppermint spray</td>
            <td>Best Premium Spray</td>
          </tr>
          <tr>
            <td>Pestbye Battery Operated Spider &amp; Mouse Repeller</td>
            <td>Ultrasonic battery-powered</td>
            <td>Best Battery-Powered</td>
          </tr>
          <tr>
            <td>REPELEM Rat &amp; Mouse Repellent Peppermint Oil Sachets — 6 Pack</td>
            <td>Peppermint oil sachets</td>
            <td>Best Natural</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="6mm" label="the size of gap a mouse can squeeze through — roughly the width of a pencil" />
      </div>

      {/* Product 1 */}
      <h2 id="best-ultrasonic">Best Overall &mdash; EcoMyLife Ultrasonic Pest Repeller 2 Pack</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="EcoMyLife Ultrasonic Pest Repeller 2 Pack"
          rank={1}
          rating={4.3}
          features={[
            'Plug-in ultrasonic repeller — no chemicals, no traps',
            '2-pack for treating two rooms simultaneously',
            'Covers up to 80-120m² per unit',
            'Safe around children and pets',
          ]}
          price="£15"
          asin="B0B8VQ6C76"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Plug-in ultrasonic repeller emitting frequencies that disorient rodents without harm to humans or pets. The EcoMyLife 2-pack allows you to treat two rooms simultaneously &mdash; kitchen and utility room, or loft conversion and garage &mdash; providing broader coverage from a single purchase. Each unit covers up to 80-120m&sup2;, which is sufficient for most standard UK rooms. No chemicals, no traps, and no ongoing bait costs make this a genuinely low-maintenance approach to mouse deterrence.
      </p>
      <p>
        Simply plug each unit into a mains socket and it begins emitting high-frequency sound waves that are inaudible to humans but deeply unpleasant for rodents. The frequencies cycle through different patterns to reduce the risk of mice becoming habituated to a single tone. Position the units in rooms where you have seen signs of mouse activity &mdash; droppings, gnaw marks, or scratching sounds &mdash; and ensure the sound path is not blocked by large furniture, as ultrasonic waves do not penetrate solid objects or travel around corners effectively.
      </p>
      <p>
        An important caveat: the scientific evidence for ultrasonic pest repellers remains mixed. Some users report noticeable reductions in mouse activity, while independent studies have found limited long-term effectiveness. We recommend using ultrasonic repellers as one layer in a broader prevention strategy &mdash; alongside physical proofing and traps &mdash; rather than relying on them as a standalone solution. That said, for a chemical-free, set-and-forget deterrent that requires zero maintenance, the EcoMyLife 2-pack is the best option in the category.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Chemical-free and completely safe around children and pets</li>
        <li>2-pack covers two rooms from a single purchase</li>
        <li>No ongoing costs &mdash; plug in and leave</li>
        <li>Covers up to 80-120m&sup2; per unit</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Mixed scientific evidence for ultrasonic repellers</li>
        <li>Ultrasonic waves do not pass through walls or solid furniture</li>
        <li>Mice may habituate to the frequencies over time</li>
        <li>Not recommended as a standalone solution for active infestations</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-spray">Best Spray &mdash; RepellShield Rat &amp; Mouse Repellent Spray 250ml — Made in Germany</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="RepellShield Rat & Mouse Repellent Spray 250ml — Made in Germany"
          rank={2}
          rating={4.2}
          features={[
            "Germany's best-selling peppermint oil mouse repellent spray",
            'Non-staining formula — safe for kitchens, lofts and skirting boards',
            "Peppermint and geraniol formula irritates rodents' sensitive noses",
            'Family and pet safe — 11,000+ reviews on Amazon',
          ]}
          price="£12"
          asin="B08DKSX32W"
          bestFor="Best Spray"
        />
      </div>
      <p>
        Germany's best-selling peppermint oil mouse repellent spray, and for good reason. RepellShield combines peppermint oil with geraniol to create a dual-action formula that irritates rodents' sensitive noses far more effectively than peppermint alone. The 250ml bottle is ready to use straight out of the box &mdash; simply spray at entry points, under sinks, along skirting boards, in loft spaces, and anywhere else you have seen signs of mouse activity. The formula is non-staining, so you can apply it directly to kitchen units, carpets, and soft furnishings without worrying about marks or residue.
      </p>
      <p>
        With over 11,000 reviews on Amazon, RepellShield has built a strong following among UK homeowners looking for a chemical-free mouse deterrent. The spray is completely family and pet safe, making it a practical choice for homes with young children, cats, and dogs. Apply generously to known entry points and refresh every 3-5 days to maintain scent strength. The geraniol component adds a secondary layer of deterrence that pure peppermint sprays lack, which may explain the consistently positive customer feedback compared to cheaper alternatives.
      </p>
      <p>
        As with all scent-based repellents, RepellShield works best as a supporting measure alongside physical proofing. Seal entry points with steel wool or copper mesh first, then apply the spray as an additional deterrent layer. On its own, no peppermint spray is likely to resolve an established mouse infestation &mdash; but as part of a combined approach, RepellShield adds a genuine extra barrier. The German manufacturing quality and the peppermint-geraniol formulation set it apart from generic peppermint sprays in the category.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Peppermint and geraniol dual-action formula</li>
        <li>Non-staining &mdash; safe for kitchens, carpets, and soft furnishings</li>
        <li>Family and pet safe with 11,000+ positive reviews</li>
        <li>German-made with higher quality formulation than most competitors</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Limited scientific evidence for peppermint oil as a mouse repellent</li>
        <li>Scent fades within 3-5 days &mdash; needs regular reapplication</li>
        <li>Not effective as a standalone solution for active infestations</li>
      </ul>

      <div className="not-prose">
        <Callout type="info">
          <p>Peppermint oil may provide some short-term deterrence, but it is not a substitute for physical proofing. If you have an active mouse problem, seal the entry points first with steel wool or copper mesh, then use peppermint spray as an additional layer of prevention.</p>
        </Callout>
      </div>

      {/* Product 3 */}
      <h2 id="best-premium-spray">Best Premium Spray &mdash; REPELEM Rat &amp; Mouse Repellent Spray 250ml — Peppermint Oil</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="REPELEM Rat & Mouse Repellent Spray 250ml — Peppermint Oil"
          rank={3}
          rating={4.1}
          features={[
            'UK brand peppermint oil rodent deterrent',
            'Fast-acting, non-toxic and safe around pets',
            'Mist and squirt modes for different surfaces',
            'Effective in kitchens, lofts, garages and car engines',
          ]}
          price="£10"
          asin="B0CRRSTHNG"
          bestFor="Best Premium Spray"
        />
      </div>
      <p>
        UK brand peppermint oil rodent deterrent with a practical dual-mode spray nozzle. REPELEM offers both mist and squirt settings, letting you switch between a fine mist for broad coverage on open surfaces and a targeted squirt for getting into tight gaps, crevices, and hard-to-reach areas behind appliances. The 250ml bottle is non-toxic and completely safe around pets, making it suitable for kitchens, utility rooms, lofts, garages, and even inside car engine bays where mice commonly nest.
      </p>
      <p>
        The recommended application method is straightforward: spray generously at entry points and along known mouse routes twice daily for the first 3-7 days to build up scent saturation and drive mice out of treated areas. Once the initial treatment period is complete, switch to monthly reapplication for ongoing prevention. This two-phase approach &mdash; intensive treatment followed by maintenance &mdash; is more structured than most competing sprays, which simply recommend reapplication "as needed" without clear guidance.
      </p>
      <p>
        REPELEM is a fast-acting formula designed for immediate deterrence. The peppermint oil concentration is strong enough that you will notice the scent immediately upon application, and rodents find it intensely unpleasant. The spray is effective across a wide range of locations &mdash; kitchens, lofts, garages, sheds, caravans, and car engines are all suitable. As with all peppermint-based products, combine with physical proofing for the best results. The spray adds a scent barrier, but steel wool and copper mesh provide the permanent physical barrier that actually prevents entry.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dual mist and squirt modes for versatile application</li>
        <li>Clear two-phase treatment plan &mdash; intensive then monthly maintenance</li>
        <li>Non-toxic and safe around pets and children</li>
        <li>UK brand with responsive customer support</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Requires twice-daily application during the initial 3-7 day phase</li>
        <li>Limited scientific evidence for peppermint oil as a long-term repellent</li>
        <li>Not a standalone solution &mdash; combine with physical proofing</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-battery">Best Battery-Powered &mdash; Pestbye Battery Operated Spider &amp; Mouse Repeller</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pestbye Battery Operated Spider & Mouse Repeller"
          rank={4}
          rating={4.1}
          features={[
            'Battery-powered ultrasonic repeller from UK-based Pestbye',
            'Ideal for garages, sheds and loft spaces without mains power',
            'Repels mice and spiders',
            'Hang from ceiling or fix to wall for maximum coverage',
          ]}
          price="£12"
          asin="B0072H60MG"
          bestFor="Best Battery-Powered"
        />
      </div>
      <p>
        Battery-powered ultrasonic repeller from UK-based Pestbye. The key advantage of this unit over mains-powered alternatives is that it works anywhere &mdash; including garages, sheds, loft spaces, and outbuildings where mains power is not available. These are exactly the locations where mice are most likely to nest undisturbed, and where a plug-in repeller simply cannot reach. The Pestbye unit runs on standard batteries and can be hung from a ceiling joist or fixed to a wall for maximum coverage.
      </p>
      <p>
        The device repels both mice and spiders, which is a useful dual function for loft spaces and garden sheds where both pests are commonly found. The ultrasonic frequencies emitted are inaudible to humans and safe around pets (though it is worth noting that hamsters, gerbils, and other small rodent pets may be affected &mdash; do not use in the same room as pet rodents). The Pestbye brand is UK-based with a responsive customer service team, which provides added confidence compared to unbranded imports.
      </p>
      <p>
        Battery life varies depending on the brand and type of batteries used, but expect around 3-6 months of continuous operation from a set of quality alkaline batteries. This makes the running cost very low. For best results in a loft space, position the unit centrally and ensure it has a clear line of sight to the main roof void area &mdash; ultrasonic waves are directional and will not travel around corners or through solid partitions. In sheds and garages, mount it on the wall opposite the main entry point.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Battery-powered &mdash; works in spaces without mains electricity</li>
        <li>Ideal for lofts, sheds, garages, and outbuildings</li>
        <li>Dual function &mdash; repels mice and spiders</li>
        <li>UK-based brand with good customer support</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Batteries need replacing every 3-6 months</li>
        <li>Mixed evidence for ultrasonic repeller effectiveness</li>
        <li>Not suitable for rooms with pet hamsters, gerbils, or other rodents</li>
        <li>Directional output &mdash; does not cover around corners</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-natural">Best Natural &mdash; REPELEM Rat &amp; Mouse Repellent Peppermint Oil Sachets — 6 Pack</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="REPELEM Rat & Mouse Repellent Peppermint Oil Sachets — 6 Pack"
          rank={5}
          rating={4.0}
          features={[
            'Long-lasting peppermint oil sachets — just place and leave',
            'Ideal for enclosed spaces where spray cannot reach',
            'Each sachet lasts months with no mess or reapplication',
            '6-pack covers multiple locations around the home',
          ]}
          price="£10"
          asin="B0CNV2CWQS"
          bestFor="Best Natural"
        />
      </div>
      <p>
        Long-lasting peppermint oil sachets that you simply place in enclosed spaces and leave. The REPELEM 6-pack solves a genuine problem with spray-based repellents: they cannot reach the enclosed, hidden voids where mice actually nest and travel. These sachets are designed to be placed behind appliances, in loft voids, under floorboards, inside car engines, in caravans, and in any other tight, enclosed space where a spray bottle simply cannot reach or where liquid application is impractical. No mess, no dripping, no application skill required &mdash; just place the sachet and let the peppermint oil do the work.
      </p>
      <p>
        Each sachet lasts for months, which is a significant advantage over sprays that need reapplication every few days. The slow-release design means the peppermint oil diffuses gradually over time, maintaining a consistent scent level in the surrounding area without the peaks and troughs you get with spray application. The 6-pack provides enough sachets to cover the most common problem areas in a typical UK home &mdash; one behind the washing machine, one under the kitchen sink, one in the loft hatch area, one in the garage, and two more for wherever you have seen signs of activity.
      </p>
      <p>
        The sachets are particularly effective in combination with the REPELEM spray (reviewed above). Use the spray for open, accessible areas like skirting boards, kitchen worktops, and visible entry points, then place sachets in the hidden, enclosed spaces that spray cannot reach. This combination gives you scent-based coverage across both visible and concealed areas of your home. As always, combine with physical proofing for the most effective mouse prevention &mdash; sachets and sprays add a deterrent layer, but steel wool and copper mesh provide the permanent physical barrier.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Place and leave &mdash; no application, no mess, no respraying</li>
        <li>Each sachet lasts months, far longer than any spray</li>
        <li>Ideal for enclosed spaces spray cannot reach</li>
        <li>6-pack covers multiple locations around the home</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less effective in open, well-ventilated areas where scent disperses</li>
        <li>Same limited evidence base as all peppermint repellents</li>
        <li>Cannot target specific narrow gaps like a spray can</li>
        <li>Not a standalone solution &mdash; combine with proofing and spray</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">Mouse Proofing Buying Guide</h2>
      <p>
        With six effective products covering different aspects of mouse prevention, the most important thing to understand is that no single product will solve the problem on its own. The best results come from combining several of these products to create a comprehensive barrier around your property. Here is the guidance you need to plan and execute your proofing strategy.
      </p>

      <h3>Why Prevention Beats Treatment</h3>
      <p>
        There is a reason every professional pest controller will tell you that proofing is the most important part of mouse control: it is the only approach that addresses the root cause. Traps and poison deal with mice that are already inside your home, but unless you seal the entry points, new mice will simply replace the ones you have removed. This is the cycle that traps millions of UK homeowners every autumn &mdash; catch a few mice, think the problem is solved, then find droppings in the kitchen again two weeks later when the next wave arrives. Proofing breaks this cycle. Seal the gaps, and the mice simply cannot get in. It is the only permanent solution.
      </p>

      <h3>Common Mouse Entry Points</h3>
      <p>
        To proof your home effectively, you need to know where to look. The most common mouse entry points in UK homes are: <strong>air bricks</strong> (the number one culprit &mdash; uncovered air bricks are an open invitation), <strong>gaps around pipes</strong> where water, gas, or waste pipes pass through external walls, <strong>the gap under exterior doors</strong> (particularly side doors and garage doors that are often poorly sealed), <strong>gaps around cables and wiring</strong> where they enter from outside, <strong>garage door seals</strong> that have perished or become damaged, <strong>gaps in brickwork or mortar</strong> on older properties, and <strong>where roof tiles meet the wall</strong> at eaves level. Walk around the outside of your property with a torch and inspect every potential entry point at ground level. Then check inside &mdash; look behind kitchen units, under the bath, around the boiler, and anywhere else that pipes or cables pass through the wall.
      </p>

      <h3>Steel Wool vs Copper Mesh vs Expanding Foam</h3>
      <p>
        These three materials are the workhorses of mouse proofing, and each has specific strengths. <strong>Steel wool</strong> is the most affordable and versatile option &mdash; it can be shaped to fit any gap, is easy to cut, and mice cannot chew through it. Use it for interior gaps around pipes and cables. <strong>Copper mesh</strong> offers the same gnaw-proof protection but will not rust, making it the better choice for exterior gaps that are exposed to rain and moisture, such as air bricks, weep holes, and gaps around external pipe entries. <strong>Expanding foam</strong> fills large voids and sets hard, but it is not fully mouse-proof on its own &mdash; always combine it with steel wool or copper mesh for a gnaw-proof barrier. The professional approach is to use steel wool or copper mesh as the core barrier, with expanding foam or silicone sealant as the finishing layer to hold everything in place and create an airtight seal.
      </p>

      <h3>The Peppermint Oil Myth</h3>
      <p>
        We included peppermint oil spray on this list because it is the single most searched-for mouse repellent in the UK, and people deserve an honest assessment. The reality is that there is <strong>very limited scientific evidence</strong> that peppermint oil effectively repels mice in real-world conditions. Laboratory studies have shown a mild short-term deterrent effect at high concentrations, but the scent dissipates within a day or two, and there is no credible research showing that peppermint oil can prevent mice from entering a property or deter them from an established nesting site. Anecdotal reports of success exist, and some homeowners swear by it &mdash; but anecdote is not evidence, and for every success story there are many more people who tried peppermint oil and still had mice. If you want to use it as one layer in a broader prevention strategy, it will do no harm. But do not rely on it as your primary defence. Physical proofing is what actually works.
      </p>

      <h3>Inspecting Your Property for Gaps</h3>
      <p>
        A thorough property inspection is the essential first step before buying any proofing materials. Remember: <strong>6mm is all a mouse needs</strong> &mdash; the width of a pencil. Carry a pencil with you during your inspection and use it as a measuring tool. If you can push the pencil into a gap, a mouse can get through it. Start outside at ground level and work your way around the entire perimeter of the building. Check every air brick, pipe entry, cable hole, door threshold, and mortar joint. Then move inside and inspect behind kitchen appliances, under the bath, around the boiler, in the airing cupboard, and anywhere else that services pass through walls or floors. Make a list of every gap you find, then work through it systematically with the appropriate proofing material for each location.
      </p>

      <h3>Seasonal Prevention &mdash; Autumn Is Key</h3>
      <p>
        Timing matters. The majority of new mouse infestations in UK homes begin between October and December, when falling temperatures drive mice indoors in search of warmth. A property that is fully proofed by the end of September is far less likely to develop a mouse problem than one that is left unsealed over winter. If you are reading this in spring or summer, that is actually the ideal time to carry out proofing work &mdash; you can work in better weather, take your time, and have everything sealed before the autumn migration begins. If you are reading this during an active infestation in winter, proof what you can immediately and use traps to deal with the mice already inside. The combination of proofing and trapping is the fastest route to a mouse-free home.
      </p>

      <h3>Combining Repellents With Traps as Backup</h3>
      <p>
        The most effective mouse control strategy uses a layered approach: proof first, then trap as insurance. Start by sealing every entry point you can find using steel wool, copper mesh, expanding foam, draught excluders, and air brick covers. Once the building envelope is sealed, deploy snap traps or humane traps along walls and in known activity areas to catch any mice that were already inside when you sealed up. This two-pronged approach stops new mice from entering while simultaneously removing those already present. Once traps have been in place for two to three weeks without catching anything, you can be reasonably confident the infestation is cleared &mdash; but leave the proofing in place permanently. It is your long-term insurance policy against future invasions.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best way to stop mice getting into my house?</h3>
      <p>
        Physical proofing is the most effective method by far. Use steel wool, copper mesh, or expanding foam to seal every gap 6mm or larger around your property. Focus on air bricks, pipe entry points, door bottoms, cable gaps, and garage door seals. A thorough proofing job prevents mice from entering in the first place, which is far more reliable than relying on repellents, sprays, or ultrasonic devices alone.
      </p>

      <h3>Does peppermint oil repel mice?</h3>
      <p>
        There is limited scientific evidence that peppermint oil repels mice. Some homeowners report temporary success, and the strong menthol scent may deter mice from specific areas in the short term. However, the effect fades within 24 to 48 hours, and peppermint oil is not a reliable solution for an active infestation. It should never be used as a standalone treatment &mdash; physical proofing with steel wool and copper mesh is far more effective.
      </p>

      <h3>What gaps should I seal to keep mice out?</h3>
      <p>
        Seal all gaps 6mm or larger. The most common mouse entry points are air bricks, gaps around pipes where they enter the building, the space under exterior doors, gaps around cables and wiring, garage door seals, cracks in brickwork or deteriorating mortar, and where roof tiles meet the wall. Walk around your entire property with a pencil &mdash; if the pencil fits into a gap, a mouse can fit through it.
      </p>

      <h3>Is steel wool or copper mesh better for mouse proofing?</h3>
      <p>
        Both are highly effective &mdash; mice cannot chew through either material. Steel wool is cheaper and widely available, making it excellent value for interior gaps. However, steel wool can rust over time when exposed to persistent moisture. Copper mesh will not rust, holds its shape better, and is the superior choice for exterior gaps exposed to rain and damp. For most homes, use steel wool inside and copper mesh outside. Pack either material tightly into the gap for best results.
      </p>

      <h3>When should I mouse-proof my house?</h3>
      <p>
        The ideal time is before autumn. Mice begin seeking warmth indoors from October as temperatures drop, so completing your proofing in September or early October gives you the best chance of preventing an infestation before it starts. Spring and summer are actually the most practical time to do the work &mdash; better weather makes outdoor inspection and sealing much easier. However, proofing is worthwhile at any time of year, including during an active winter infestation.
      </p>

      <h3>Should I use repellents alongside traps?</h3>
      <p>
        Yes &mdash; the best approach combines prevention and treatment. Proof your home first by sealing all entry points with steel wool, copper mesh, or expanding foam. Then place snap traps or humane traps as a backup to catch any mice that are already inside the property. Physical proofing stops new mice from getting in, while traps deal with those already present. Repellent sprays such as peppermint oil can be used as an additional layer of deterrence but should not replace physical barriers or trapping.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Mice Still Getting In?"
          subtext="If DIY proofing hasn't solved the problem, find a BPCA-certified pest controller near you"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <p className="text-gray-900 font-bold text-lg mb-2">Looking for Traps or Poison Instead?</p>
        <p className="text-gray-700 text-sm mb-3">If mice are already inside, you may need traps or rodenticide alongside proofing.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/best/mouse-traps" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Best Mouse Traps UK 2026 &rarr;</Link>
          <Link href="/best/mouse-poison" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Best Mouse Poison UK 2026 &rarr;</Link>
          <Link href="/best/mouse-bait-stations" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Best Mouse Bait Stations UK 2026 &rarr;</Link>
        </div>
      </div>
    </GuideLayout>
  );
}
