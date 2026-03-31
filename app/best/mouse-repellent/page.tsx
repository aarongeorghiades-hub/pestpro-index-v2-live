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
  { id: 'steel-wool', title: 'Best Overall — Xcluder Steel Wool Kit' },
  { id: 'expanding-foam', title: 'Best for Large Gaps — Expanding Foam' },
  { id: 'peppermint-spray', title: 'Best Natural — Peppermint Oil Spray' },
  { id: 'copper-mesh', title: 'Best for Exterior — Copper Mesh' },
  { id: 'draught-excluder', title: 'Best for Door Gaps — Draught Excluder' },
  { id: 'air-brick-covers', title: 'Best for Air Bricks — Steel Mesh Covers' },
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
        Below is a quick comparison of our six recommended products. Each tackles a different aspect of mouse prevention, and for the best results you should combine several of them to cover every potential entry point around your property.
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
            <td>Xcluder Steel Wool Mouse Proofing Kit</td>
            <td>Steel wool</td>
            <td>Best Overall</td>
            <td>~&pound;12</td>
          </tr>
          <tr>
            <td>Expanding Foam Mouse Gap Filler</td>
            <td>Expanding foam</td>
            <td>Best for Large Gaps</td>
            <td>~&pound;8</td>
          </tr>
          <tr>
            <td>Peppermint Oil Mouse Repellent Spray</td>
            <td>Natural spray</td>
            <td>Best Natural Option</td>
            <td>~&pound;10</td>
          </tr>
          <tr>
            <td>Copper Mesh Mouse Proofing</td>
            <td>Copper mesh</td>
            <td>Best for Exterior Gaps</td>
            <td>~&pound;14</td>
          </tr>
          <tr>
            <td>Draught Excluder Brush Strips</td>
            <td>Brush strip</td>
            <td>Best for Door Gaps</td>
            <td>~&pound;6</td>
          </tr>
          <tr>
            <td>Mouse-Proof Air Brick Covers</td>
            <td>Steel mesh cover</td>
            <td>Best for Air Bricks</td>
            <td>~&pound;4</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="6mm" label="the size of gap a mouse can squeeze through — roughly the width of a pencil" />
      </div>

      {/* Product 1 */}
      <h2 id="steel-wool">Best Overall &mdash; Xcluder Steel Wool Mouse Proofing Kit</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Xcluder Steel Wool Mouse Proofing Kit"
          rank={1}
          rating={4.5}
          features={[
            'Stainless steel wool that mice cannot chew through',
            'Easy to push into gaps around pipes and cables',
            'Long-lasting — won\'t rust or degrade',
            'The single most effective mouse prevention product',
          ]}
          price="£12"
          asin="B01B3QXQMI"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Xcluder steel wool takes our top spot because it addresses the root cause of mouse infestations &mdash; the gaps they use to get inside. This is not ordinary steel wool from the supermarket cleaning aisle. Xcluder is made from stainless steel fibres specifically designed to resist rodent gnawing. Regular steel wool can be pulled apart by a determined mouse over time, and it rusts quickly in damp conditions. Xcluder&apos;s stainless steel construction means it will not corrode, will not degrade, and mice simply cannot chew through it. Professional pest controllers across the UK use this exact approach &mdash; packing steel wool into gaps &mdash; as the primary method of mouse proofing.
      </p>
      <p>
        Using it is straightforward. Identify every gap around your property where a pipe, cable, or conduit enters the building. Pull off a section of wool, roll it into a tight plug, and push it firmly into the gap using a screwdriver or the end of a pencil. Pack it tightly &mdash; loose steel wool is less effective because mice can pull at it and create a gap. For the best results, combine steel wool with a bead of expanding foam or silicone sealant over the top, which holds the wool firmly in place and creates a double barrier. Focus on the gaps around boiler flues, water pipes under the kitchen sink, central heating pipes entering from the floor, and any cable entry points on exterior walls.
      </p>
      <p>
        At around &pound;12, the Xcluder kit provides enough material to proof a typical three-bedroom house. Compare that to the cost of a professional pest control callout (&pound;100&ndash;&pound;250 for a mouse treatment) or the ongoing expense of traps and poison, and proofing with steel wool is extraordinarily cost-effective. It is a one-time investment that provides permanent protection &mdash; once a gap is properly sealed, it stays sealed. This is why every professional pest controller will tell you that proofing is the most important step in mouse control, and steel wool is the single most useful product in their toolkit.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Mice cannot chew through stainless steel fibres</li>
        <li>Will not rust, corrode, or degrade over time</li>
        <li>Easy to cut and push into any size gap</li>
        <li>Enough in one kit to proof a typical house</li>
        <li>Used by professional pest controllers daily</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Must be packed tightly &mdash; loose wool is less effective</li>
        <li>Best combined with sealant for a permanent fix</li>
        <li>Not suitable for very large gaps on its own</li>
      </ul>

      {/* Product 2 */}
      <h2 id="expanding-foam">Best for Large Gaps &mdash; Expanding Foam Mouse Gap Filler</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Expanding Foam Mouse Gap Filler"
          rank={2}
          rating={4.2}
          features={[
            'Fills larger gaps around pipes and under units',
            'Sets hard to prevent gnawing',
            'Paintable once cured',
            'Combine with steel wool for maximum effectiveness',
          ]}
          price="£8"
          asin="SEARCH"
          bestFor="Best for Large Gaps"
        />
      </div>
      <p>
        When gaps are too large for steel wool alone &mdash; such as the space around a waste pipe under the kitchen sink, a hole where old cable trunking has been removed, or a gap beneath a kitchen unit &mdash; expanding foam is the practical solution. The foam expands to fill irregularly shaped voids and sets hard within a few hours, creating a solid barrier that is difficult for mice to gnaw through. Once cured, it can be trimmed with a knife and painted to match the surrounding surface, making for a neat and professional-looking finish.
      </p>
      <p>
        There is an important caveat, however. Standard expanding foam on its own is not completely mouse-proof. A determined mouse can gnaw through cured foam over time, particularly if it can detect warmth or food odours coming through the barrier. The most effective approach &mdash; and the one used by professional pest controllers &mdash; is to <strong>combine expanding foam with steel wool</strong>. Pack steel wool into the gap first, then apply expanding foam over the top. The steel wool provides the gnaw-proof core, while the foam fills the remaining voids, holds the wool in place, and creates a smooth, sealed surface. This combination is virtually impenetrable to mice and is the gold standard for proofing larger gaps.
      </p>
      <p>
        Application is simple with the included nozzle. Shake the can, apply the foam in short bursts (it expands significantly, so use less than you think), and allow it to cure for at least four hours before trimming. Wear gloves &mdash; uncured expanding foam is extremely difficult to remove from skin and clothing. At around &pound;8 per can, a single tin will fill numerous gaps around a typical property, making it excellent value for the coverage it provides.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Fills large, irregular gaps that steel wool cannot cover alone</li>
        <li>Sets hard and can be trimmed and painted</li>
        <li>Very affordable at around &pound;8 per can</li>
        <li>Easy to apply with no specialist tools needed</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Not fully mouse-proof on its own &mdash; combine with steel wool</li>
        <li>Messy to apply &mdash; wear gloves and protect surfaces</li>
        <li>Cannot be repositioned once it begins to expand</li>
      </ul>

      {/* Product 3 */}
      <h2 id="peppermint-spray">Best Natural Option &mdash; Peppermint Oil Mouse Repellent Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Peppermint Oil Mouse Repellent Spray"
          rank={3}
          rating={3.7}
          features={[
            'Pure peppermint oil formula',
            'Pleasant scent for humans',
            'Non-toxic and safe around children',
            'Limited scientific evidence but popular choice',
          ]}
          price="£10"
          asin="SEARCH"
          bestFor="Best Natural Option"
        />
      </div>
      <p>
        Peppermint oil is by far the most popular natural mouse repellent, and it is the product most people search for when they want a chemical-free approach. The theory is straightforward: mice have a highly sensitive sense of smell, and the intense menthol in concentrated peppermint oil is thought to overwhelm their olfactory receptors, making treated areas unpleasant for them to occupy. There is some anecdotal support for this &mdash; many homeowners report that mice seem to avoid areas where peppermint oil has been freshly applied &mdash; and the spray is genuinely pleasant-smelling, non-toxic, and completely safe around children and pets.
      </p>
      <p>
        However, <strong>we need to be honest about the evidence</strong>. Scientific research on peppermint oil as a mouse repellent is limited and inconclusive. Laboratory studies have shown that high concentrations of peppermint oil can have a short-term deterrent effect, but the effect diminishes rapidly as the scent fades &mdash; typically within 24 to 48 hours. In real-world conditions, where mice are motivated by hunger, warmth, and established nesting sites, there is no reliable evidence that peppermint oil provides lasting protection against determined mice. The British Pest Control Association does not list peppermint oil among its recommended mouse prevention methods.
      </p>
      <p>
        That said, peppermint oil spray can play a supporting role as part of a broader prevention strategy. Use it alongside physical proofing &mdash; seal all entry points with steel wool and copper mesh first, then apply peppermint spray to areas where you have seen signs of mouse activity as an additional deterrent. On its own, it is unlikely to solve a mouse problem. But as a supplementary measure, combined with proper proofing and traps, it adds one more layer of discouragement. Apply it every two to three days to maintain the scent strength, focusing on entry points, skirting boards, and areas behind appliances.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>100% natural and non-toxic</li>
        <li>Safe around children and pets</li>
        <li>Pleasant peppermint scent for humans</li>
        <li>Easy to spray in targeted areas</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Limited scientific evidence of effectiveness</li>
        <li>Scent fades within 24&ndash;48 hours &mdash; needs frequent reapplication</li>
        <li>Not a standalone solution for active infestations</li>
        <li>Will not stop determined, hungry mice</li>
      </ul>

      <div className="not-prose">
        <Callout type="info">
          <p>Peppermint oil may provide some short-term deterrence, but it is not a substitute for physical proofing. If you have an active mouse problem, seal the entry points first with steel wool or copper mesh, then use peppermint spray as an additional layer of prevention.</p>
        </Callout>
      </div>

      {/* Product 4 */}
      <h2 id="copper-mesh">Best for Exterior Gaps &mdash; Copper Mesh Mouse Proofing</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Copper Mesh Mouse Proofing"
          rank={4}
          rating={4.4}
          features={[
            'Copper won\'t rust like steel wool',
            'Maintains shape when packed into gaps',
            'Ideal for external air bricks and weep holes',
            'Rodents cannot chew through copper',
          ]}
          price="£14"
          asin="SEARCH"
          bestFor="Best for Exterior Gaps"
        />
      </div>
      <p>
        Copper mesh serves the same purpose as steel wool &mdash; it is packed into gaps to create a physical barrier that mice cannot chew through &mdash; but it has one critical advantage for exterior use: <strong>copper does not rust</strong>. Standard steel wool, even stainless steel varieties, can eventually corrode when exposed to persistent moisture, rain, and the damp British climate. Copper mesh is completely immune to rust and corrosion, which makes it the superior choice for any gap that is exposed to the elements. Air brick openings, weep holes in cavity walls, gaps around external pipe entries, and spaces under fascia boards are all prime candidates for copper mesh proofing.
      </p>
      <p>
        Copper mesh also holds its shape better than steel wool when packed into a gap. The slightly stiffer structure of woven copper means that once you push it into a hole, it stays put without sagging, compressing, or working loose over time. This structural stability makes it particularly effective for vertical gaps and overhead positions where steel wool might gradually sag under its own weight. Mice, rats, and squirrels are all unable to chew through copper &mdash; the metal is too hard for rodent teeth, and the woven mesh construction means they cannot gain purchase to pull it apart.
      </p>
      <p>
        Installation follows the same technique as steel wool. Cut a piece of mesh slightly larger than the gap, roll or fold it into a plug, and push it firmly into the opening. Pack it tightly so there are no loose edges that a mouse could hook a tooth around. For a permanent seal, apply a bead of exterior-grade silicone sealant over the copper mesh to lock it in place. The mesh remains hidden behind the sealant but continues to provide its gnaw-proof barrier underneath. At &pound;14 for a roll, copper mesh is more expensive than steel wool, but for exterior use where durability matters, it is the better long-term investment.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Completely rust-proof &mdash; ideal for exterior use</li>
        <li>Holds its shape when packed into gaps</li>
        <li>Rodents cannot chew through copper</li>
        <li>Long-lasting &mdash; will not degrade in the British climate</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>More expensive than steel wool</li>
        <li>Slightly harder to cut and shape than soft steel wool</li>
        <li>Copper tarnishes (turns green) over time if left exposed</li>
      </ul>

      {/* Product 5 */}
      <h2 id="draught-excluder">Best for Door Gaps &mdash; Draught Excluder Brush Strips</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Draught Excluder Brush Strips"
          rank={5}
          rating={4.3}
          features={[
            'Seals the gap under exterior doors',
            'Self-adhesive for easy fitting',
            'Also reduces draughts and energy bills',
            'Brown or white to match door colour',
          ]}
          price="£6"
          asin="B001FWYHN8"
          bestFor="Best for Door Gaps"
        />
      </div>
      <p>
        The gap under an exterior door is one of the most commonly overlooked mouse entry points in UK homes. Many front doors, back doors, and particularly side doors and garage doors have a gap of 10mm or more between the bottom of the door and the threshold &mdash; more than enough for a mouse to walk straight underneath. A draught excluder brush strip is the simplest and most effective way to seal this gap. The strip consists of a rigid aluminium or plastic carrier fitted with a dense row of nylon bristles that brush against the floor when the door is closed, sealing the gap without impeding the door&apos;s operation.
      </p>
      <p>
        Installation takes less than ten minutes. The self-adhesive backing means no drilling, screwing, or specialist tools are required. Clean the bottom edge of the door, peel off the backing, and press the strip firmly into place. The bristles should just touch the floor or threshold when the door is fully closed &mdash; tight enough to block a mouse but not so tight that the door becomes difficult to open. Most strips can be trimmed to length with scissors or a hacksaw to fit any standard door width. Available in brown and white to match the most common door finishes.
      </p>
      <p>
        Beyond mouse prevention, draught excluder strips provide a genuine secondary benefit. Sealing the gap under an exterior door significantly reduces heat loss, cuts draughts, and can make a noticeable difference to your energy bills &mdash; particularly on older properties where doors have settled and the gap has widened over the years. At just &pound;6, this is one of the cheapest and most practical home improvements you can make, and it serves double duty as mouse proofing. Every exterior door on your property should have one.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Seals the most commonly overlooked mouse entry point</li>
        <li>Self-adhesive &mdash; no drilling or tools needed</li>
        <li>Also reduces draughts and lowers energy bills</li>
        <li>Extremely affordable at around &pound;6</li>
        <li>Available in brown or white to match door finish</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Adhesive can fail on dirty or damp surfaces &mdash; clean door first</li>
        <li>Bristles wear down over time and may need replacing after 2&ndash;3 years</li>
        <li>Not effective for very large gaps (over 15mm)</li>
      </ul>

      {/* Product 6 */}
      <h2 id="air-brick-covers">Best for Air Bricks &mdash; Mouse-Proof Air Brick Covers</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Mouse-Proof Air Brick Covers"
          rank={6}
          rating={4.1}
          features={[
            'Stainless steel mesh covers for air bricks',
            'Maintains ventilation while blocking mice',
            'Easy screw-fit installation',
            'Prevents the most common mouse entry point',
          ]}
          price="£4"
          asin="SEARCH"
          bestFor="Best for Air Bricks"
        />
      </div>
      <p>
        Air bricks are arguably the single most common entry point for mice in UK homes. These ventilation bricks are built into the external walls of most British houses to provide airflow beneath suspended timber floors, preventing moisture build-up and rot. The problem is that the openings in standard air bricks are large enough for mice to walk straight through them &mdash; and the warm air flowing out from under the house acts as an irresistible beacon on a cold autumn evening. Professional pest controllers consistently identify uncovered air bricks as the number one cause of recurring mouse infestations.
      </p>
      <p>
        Mouse-proof air brick covers solve this problem elegantly. Each cover is a flat panel of fine stainless steel mesh &mdash; small enough to block mice (and insects) but open enough to maintain the ventilation that the air brick is designed to provide. The covers attach directly over the existing air brick using stainless steel screws into the surrounding mortar. Installation takes a few minutes per brick with a drill and a masonry bit. The stainless steel construction means the covers will not rust, and the mesh is too fine and too strong for mice to chew through or push past.
      </p>
      <p>
        At just &pound;4 per cover, these are exceptionally affordable considering the protection they provide. A typical semi-detached house has four to eight air bricks, so the total cost to cover every one is &pound;16&ndash;&pound;32 &mdash; a trivial investment compared to the cost of dealing with a mouse infestation. Walk around the outside of your property and count every air brick. If any of them are uncovered, fitting mesh covers should be the very first item on your mouse-proofing checklist. This single measure alone can make the difference between a mouse-free home and one with an annual autumn invasion.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Covers the most common mouse entry point in UK homes</li>
        <li>Stainless steel will not rust or degrade</li>
        <li>Maintains essential underfloor ventilation</li>
        <li>Remarkably cheap at around &pound;4 per cover</li>
        <li>Simple screw-fit installation</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Requires a drill and masonry bit for installation</li>
        <li>Must be checked periodically for leaf debris blocking the mesh</li>
        <li>Not all air bricks are standard size &mdash; measure before buying</li>
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
