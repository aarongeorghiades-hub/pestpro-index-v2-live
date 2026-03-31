import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Autumn Pest Proofing: Stop Mice, Rats & Spiders Getting In | UK Guide',
    description:
      'Autumn is when pests move indoors. Our UK guide covers how to pest-proof your home before winter with a room-by-room checklist.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/autumn-pest-proofing',
    },
    openGraph: {
      title: 'Autumn Pest Proofing: Stop Mice, Rats & Spiders Getting In | UK Guide',
      description:
        'Autumn is when pests move indoors. Our UK guide covers how to pest-proof your home before winter with a room-by-room checklist.',
      url: 'https://pestproindex.com/guides/autumn-pest-proofing',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Autumn Pest Proofing: Stop Mice, Rats & Spiders Getting In | UK Guide',
  description:
    'Autumn is when pests move indoors. Our UK guide covers how to pest-proof your home before winter with a room-by-room checklist.',
  datePublished: '2026-03-31',
  dateModified: '2026-03-31',
  author: {
    '@type': 'Organization',
    name: 'PestPro Index',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pestproindex.com/guides/autumn-pest-proofing',
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
      name: 'Guides',
      item: 'https://pestproindex.com/guides',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Autumn Pest Proofing',
      item: 'https://pestproindex.com/guides/autumn-pest-proofing',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When should I start autumn pest proofing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideally, start pest proofing your home in late August or early September, before temperatures begin to drop consistently. Most pests begin seeking indoor shelter once nighttime temperatures fall below 10 degrees Celsius, which in much of the UK happens from mid-September onwards. Completing your proofing before this point means you are ahead of the migration rather than reacting to it. However, any time during autumn is better than not proofing at all — even October and November work will reduce the number of pests that make it indoors.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pests are most common in autumn UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five most common autumn pest invaders in UK homes are mice, rats, spiders, cluster flies, and grey squirrels. Mice are by far the most frequent, with pest controllers reporting a significant spike in callouts from September through to November. Spiders become particularly noticeable in September during their mating season, when males come indoors searching for females. Cluster flies seek out warm loft spaces to hibernate in large numbers, and grey squirrels enter lofts to nest for the winter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop mice getting in during autumn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective way to stop mice entering your home in autumn is to seal every gap larger than 6 millimetres on the exterior of your property. Use a combination of steel wool and expanding foam for small gaps, and galvanised wire mesh or metal plates for larger openings. Pay particular attention to gaps around pipes under sinks, air bricks, door thresholds, cable entry points, and where different building materials meet. Remove outdoor food sources such as fallen fruit, open compost bins, and accessible bird feeders. Inside, store all food in sealed containers and keep floors and worktops clean.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to pest-proof my loft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The loft is one of the most vulnerable areas of any UK home when it comes to autumn pest invasions. Grey squirrels frequently enter through gaps in soffits, damaged fascia boards, or where roof tiles have shifted. Cluster flies hibernate in loft spaces in large numbers. Mice and rats access lofts by climbing exterior walls and entering through gaps at the roofline. You should inspect your loft before autumn and check for gaps around eaves, damaged soffit boards, unscreened vents, and any signs of existing pest activity such as droppings or gnaw marks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I use poison or traps for autumn mice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most domestic situations, traps are the recommended first choice. Snap traps are inexpensive, highly effective, and deliver an instant kill — making them the most humane lethal option. They also allow you to confirm catches, monitor progress, and dispose of the carcass properly. Poison (rodenticide) carries the risk of mice dying in inaccessible locations such as wall cavities, creating a persistent and unpleasant smell. There is also a real risk of secondary poisoning to pets and wildlife. If the infestation is too large for traps alone, a professional pest controller can use restricted-access rodenticides safely and in accordance with CRRU guidelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a professional pest survey cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional autumn pest survey typically costs between 50 and 100 pounds for a standard domestic property. Some pest control companies offer a free initial inspection as part of a treatment package. A comprehensive survey will cover the full exterior perimeter, loft space, garage, and all internal rooms, identifying existing pest activity and potential entry points. If proofing work is needed, this is usually quoted separately and can range from 100 to 400 pounds depending on the number of gaps and the complexity of the work. The investment is often worthwhile because professional surveyors identify entry points that homeowners frequently miss.',
      },
    },
  ],
};

const tocItems = [
  { id: 'why-autumn', title: 'Why Autumn Is the Critical Season' },
  { id: 'top-5-pests', title: 'The Autumn Pest Top 5' },
  { id: 'room-by-room', title: 'Room-by-Room Proofing Checklist' },
  { id: 'products', title: 'Products for Autumn Pest Proofing' },
  { id: 'garden', title: 'Garden Preparation' },
  { id: 'shopping-list', title: 'Quick-Win Shopping List' },
  { id: 'professional-survey', title: 'Professional Autumn Survey' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function AutumnPestProofingPage() {
  return (
    <GuideLayout
      title="Autumn Pest Proofing: Stop Mice, Rats & Spiders Getting In"
      subtitle="A room-by-room UK guide to sealing your home against the autumn pest invasion — before winter makes it worse"
      lastUpdated="March 2026"
      readingTime="11 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Spring Pest Prevention Guide', href: '/guides/spring-pest-prevention' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Repellents UK 2026', href: '/best/mouse-repellent' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Spider Repellents UK 2026', href: '/best/spider-repellent' },
        { title: 'Best Rat Poison UK 2026', href: '/best/rat-poison' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate Disclosure */}
      <div className="not-prose">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-sm text-gray-600">
          <p><strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small affiliate commission from Amazon at no extra cost to you. This helps fund our independent research and testing. We only recommend products we believe in. <Link href="/about" className="text-blue-600 hover:underline">Learn more</Link>.</p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Autumn */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="why-autumn">Why Autumn Is the Critical Season for Pest Proofing</h2>

      <p>
        Every autumn, as temperatures fall and daylight hours shorten, millions of pests across the UK begin looking for somewhere warmer to spend the winter. Your home &mdash; with its central heating, food stores, and sheltered cavities &mdash; is exactly what they are searching for. September through November is the peak period for pest invasions, and the species that cause the most problems during this window are mice, rats, spiders, cluster flies, and grey squirrels. All of them are driven indoors by the same basic instinct: survival through the cold months.
      </p>

      <p>
        The problem is that most homeowners do not think about pest proofing until they find droppings in the kitchen cupboard or hear scratching in the loft at two in the morning. By that point, the pests are already established, and removal becomes significantly more difficult and expensive than prevention would have been. A few hours of proofing work in early September can save you weeks of disruption and hundreds of pounds in pest control costs later in the year. Prevention is always cheaper than cure, and autumn is the season when prevention matters most.
      </p>

      <p>
        This guide walks you through everything you need to do to pest-proof your home before winter. We cover the five most common autumn pest invaders, provide a room-by-room proofing checklist, recommend specific products for each threat, and explain how to prepare your garden to reduce the risk. Whether you do the work yourself or hire a professional to carry out a survey, the information here will help you understand what needs to be done and why it matters.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Pest controllers across the UK report that callouts for mice and rats increase by up to 40% between September and November. The best time to proof your home is <strong>before</strong> temperatures drop consistently below 10&deg;C &mdash; typically late August or early September.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Top 5 Pests */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="top-5-pests">The Autumn Pest Top 5</h2>

      <p>
        Not every pest is equally likely to invade your home in autumn. The five species below are responsible for the vast majority of autumn and early-winter pest callouts in the UK. Understanding their behaviour helps you target your proofing efforts where they will have the greatest impact.
      </p>

      <h3>1. Mice</h3>
      <p>
        The house mouse (<em>Mus musculus</em>) is the single most common pest to enter UK homes during autumn. Mice are commensal animals &mdash; they have evolved to live alongside humans and are specifically adapted to exploit the warmth, shelter, and food that our homes provide. As outdoor temperatures drop, mice that have been living in hedgerows, fields, outbuildings, and garden sheds during the summer begin actively seeking access to heated buildings. A mouse can squeeze through any gap as small as <strong>6 millimetres</strong> &mdash; roughly the width of a pencil &mdash; which means that even minor cracks, unsealed pipe entry points, and gaps beneath doors can serve as entry routes. Once inside, mice breed rapidly. A single pair can produce <strong>over 60 offspring per year</strong> under ideal conditions, which means a small autumn incursion can become a full-blown infestation by Christmas. For detailed control advice, see our <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">complete guide to getting rid of mice</Link>.
      </p>

      <h3>2. Rats</h3>
      <p>
        The brown rat (<em>Rattus norvegicus</em>) also becomes more active around homes and outbuildings during autumn. While rats are less likely than mice to enter the main living areas of a well-maintained house, they readily move into garages, basements, sheds, compost areas, and subfloor voids when the weather turns cold. Rats need a larger gap than mice &mdash; approximately <strong>25 millimetres</strong> &mdash; but they are powerful gnawers and can enlarge smaller holes if they detect warmth or food on the other side. Autumn is also when rat populations are at their annual peak following summer breeding, so there are simply more of them looking for winter shelter. Damaged drains and sewer systems are a particularly common entry route into UK homes. See our <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">guide to getting rid of rats</Link> for full control advice.
      </p>

      <h3>3. Spiders</h3>
      <p>
        September is spider season in the UK. The large house spiders you notice scuttling across the living room floor are almost always <strong>male spiders searching for mates</strong>. Species such as the giant house spider (<em>Eratigena atrica</em>) and the common house spider (<em>Parasteatoda tepidariorum</em>) become dramatically more visible in early autumn as males leave their webs and wander indoors looking for females. While UK spiders are not dangerous (the false widow being the only species with a medically significant bite, and even that is extremely rare), their sudden appearance alarms many people. Proofing against spiders involves sealing gaps around windows and doors, fitting draught excluders, and reducing outdoor lighting that attracts the insects spiders feed on.
      </p>

      <h3>4. Cluster Flies</h3>
      <p>
        Cluster flies (<em>Pollenia rudis</em> and related species) are a particular nuisance in rural and semi-rural UK properties. Unlike common houseflies, cluster flies do not breed indoors &mdash; their larvae are parasites of earthworms in garden soil. However, adult cluster flies enter buildings in autumn to <strong>hibernate through the winter</strong>, often in enormous numbers. They are attracted to the south- and west-facing walls of buildings (which receive the most warmth from afternoon sun) and squeeze through tiny gaps into loft spaces, wall cavities, and around window frames. On warm winter days, they may emerge in large numbers inside rooms, creating a persistent and frustrating problem. Loft proofing is the primary defence against cluster flies.
      </p>

      <h3>5. Grey Squirrels</h3>
      <p>
        Grey squirrels (<em>Sciurus carolinensis</em>) frequently enter UK loft spaces during autumn to build nests (dreys) for the winter. They are agile climbers and can access roofs via overhanging branches, drainpipes, and climbing plants. Once inside a loft, squirrels cause significant damage &mdash; they gnaw through timber, electrical cables, water pipes, and stored belongings. Squirrel-damaged wiring is a serious fire risk. They also create noise disturbance, particularly in the early morning. The key proofing measures are trimming overhanging branches (maintaining a gap of at least 2 metres between branches and the roofline), securing soffit boards, and fitting mesh over any gaps in the eaves. For detailed advice, see our <Link href="/guides/how-to-get-rid-of-squirrels" className="text-blue-600 hover:underline font-medium">guide to getting rid of squirrels</Link>.
      </p>

      <div className="not-prose">
        <StatCallout value="6mm" label="the gap size a mouse needs to enter your home — roughly the width of a pencil" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Room-by-Room Proofing Checklist */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="room-by-room">Room-by-Room Proofing Checklist</h2>

      <p>
        The most effective approach to autumn pest proofing is systematic. Rather than trying to address the entire property at once, work through each area methodically. The checklist below covers the five areas that matter most, starting with the rooms and zones where pests are most commonly found.
      </p>

      <h3>Kitchen</h3>
      <p>
        The kitchen is the primary target for mice and rats because it is where food is stored and prepared. Even small amounts of spilled food, crumbs behind appliances, or unsealed cereal packets provide enough sustenance to sustain a mouse population.
      </p>
      <ul>
        <li>
          <strong>Store all food in sealed containers:</strong> Transfer cereals, rice, pasta, flour, pet food, and biscuits from their original packaging into airtight plastic, glass, or metal containers. Mice can chew through cardboard and thin plastic bags with ease.
        </li>
        <li>
          <strong>Seal gaps around pipes under the sink:</strong> The void under the kitchen sink is one of the most common mouse entry points in UK homes. Where water pipes, waste pipes, and gas supply pipes pass through the wall or floor, there are almost always gaps. Pack these with steel wool and seal with expanding foam or a suitable sealant.
        </li>
        <li>
          <strong>Pull out appliances and check behind them:</strong> Move the cooker, fridge, and dishwasher (if possible) to inspect the wall behind. Look for gaps around gas pipes, electrical cables, and any holes in the plasterwork. Clean up any accumulated food debris while the appliances are pulled out &mdash; this is a common food source for mice that is easy to overlook.
        </li>
        <li>
          <strong>Fit a pedal bin or sealed bin:</strong> Open-top kitchen bins are an invitation for mice. Switch to a bin with a secure lid. Empty the bin regularly and do not leave food waste sitting overnight.
        </li>
        <li>
          <strong>Keep worktops and floors clean:</strong> Wipe down worktops after preparing food and sweep or vacuum the kitchen floor daily, paying particular attention to areas around and beneath the cooker, toaster, and kitchen table.
        </li>
      </ul>

      <h3>Loft</h3>
      <p>
        The loft is vulnerable to squirrels, cluster flies, mice, and even rats. It is the area most homeowners neglect when it comes to proofing because it is out of sight and often difficult to access.
      </p>
      <ul>
        <li>
          <strong>Fit mesh over eaves gaps and roof vents:</strong> Use galvanised wire mesh with a maximum aperture of 6 millimetres to cover any gaps where the eaves meet the wall, around roof tile vents, and at any other opening in the roofline. This allows ventilation while preventing pest access.
        </li>
        <li>
          <strong>Check for squirrel damage:</strong> Inspect soffit boards, fascia boards, and the felt under the roof tiles for signs of gnawing or forced entry. Squirrels can create surprisingly large holes in soft timber and roofing felt. Repair any damage with metal plates or heavy-gauge mesh that squirrels cannot chew through.
        </li>
        <li>
          <strong>Inspect insulation for droppings:</strong> Carefully examine loft insulation for mouse or rat droppings, squirrel droppings, or nesting material. If you find evidence of activity, it means pests have already found a way in and you need to identify and seal the entry point before the situation worsens. Contaminated insulation may need to be replaced.
        </li>
        <li>
          <strong>Trim overhanging branches:</strong> Any tree branches that overhang the roof or come within 2 metres of it provide a bridge for squirrels. Cut them back before autumn to remove this access route.
        </li>
      </ul>

      <h3>Garage</h3>
      <p>
        Garages are a common harbourage for rats and mice because they typically have more gaps, less foot traffic, and more clutter than the main house. Many UK garages have poor-fitting doors and unscreened ventilation openings.
      </p>
      <ul>
        <li>
          <strong>Check and replace door seals:</strong> Run your hand along the bottom edge of the garage door when it is closed. If you can feel a draught or see daylight, fit a new rubber or brush strip seal. Many older up-and-over garage doors have gaps of 10 millimetres or more along the bottom and sides &mdash; more than enough for mice.
        </li>
        <li>
          <strong>Cover air bricks:</strong> Fit 6mm galvanised mesh covers over all air bricks in the garage walls. Pre-made air brick covers are available from builders&apos; merchants and are easy to install with masonry screws.
        </li>
        <li>
          <strong>Clear clutter from the floor:</strong> Boxes, bags, old newspapers, and stored materials piled on the garage floor create perfect nesting sites for rodents. Store items on shelving at least 30 centimetres off the ground and away from the walls. This makes it easier to spot signs of activity and harder for pests to nest undisturbed.
        </li>
        <li>
          <strong>Store pet food and bird seed in sealed containers:</strong> Bags of pet food and bird seed stored in the garage are one of the most common attractants for rodents. Transfer them into metal or heavy-duty plastic bins with secure lids.
        </li>
      </ul>

      <h3>Bathroom</h3>
      <p>
        The bathroom is less of a food source than the kitchen, but it provides water and has multiple pipe penetrations through walls and floors that can serve as entry points.
      </p>
      <ul>
        <li>
          <strong>Seal gaps around pipes:</strong> Check where the water supply pipes, waste pipes, and soil stack pass through the bathroom walls and floor. Seal any gaps with steel wool packed into expanding foam. Pay particular attention to the gap around the soil pipe where it passes through the floor &mdash; this is a common mouse route.
        </li>
        <li>
          <strong>Check the extractor fan vent:</strong> If your bathroom extractor fan vents to the outside through a wall or soffit, check that the external vent has a functioning flap or louvre that closes when the fan is off. An open vent pipe is an easy access route for cluster flies, spiders, and even mice. Fit a pest-proof vent cover if the existing one is damaged or missing.
        </li>
        <li>
          <strong>Check behind the bath panel:</strong> If your bath has a removable side panel, take it off and inspect the void behind. This area is warm, dark, and undisturbed &mdash; ideal nesting conditions for mice. Look for droppings, gnaw marks, and shredded material.
        </li>
      </ul>

      <h3>External Perimeter</h3>
      <p>
        The external perimeter of your property is your first and most important line of defence. A thorough walk around the outside of the building, systematically checking every potential entry point, is the single most valuable thing you can do for autumn pest proofing.
      </p>
      <ul>
        <li>
          <strong>Air bricks:</strong> Check every air brick for cracks, missing sections, or openings larger than 6 millimetres. Fit galvanised mesh covers to all air bricks. In older properties, original clay air bricks may have deteriorated significantly.
        </li>
        <li>
          <strong>Pipe entry points:</strong> Inspect every location where a pipe or cable enters the building &mdash; gas mains, water mains, electrical cables, broadband cables, boiler flue, and overflow pipes. Seal any gaps with a combination of steel wool and appropriate external-grade sealant.
        </li>
        <li>
          <strong>Door thresholds:</strong> Check the gap beneath all external doors including the front door, back door, side door, and any utility room door. Fit brush strips or door sweeps to any door where you can see daylight underneath.
        </li>
        <li>
          <strong>Cable and pipe gaps:</strong> Where builders or utility companies have drilled through external walls for cables or pipes, the holes are frequently oversized and poorly sealed. Check for gaps around satellite dish cables, telephone lines, alarm cables, and any recent installations.
        </li>
        <li>
          <strong>Weep holes and mortar gaps:</strong> In cavity wall construction, weep holes allow moisture to drain from the cavity. These small openings can be exploited by mice. Fit stainless steel weep hole covers that allow drainage while preventing pest entry. Also check for deteriorating mortar between bricks, particularly at ground level, and re-point any gaps.
        </li>
      </ul>

      <div className="not-prose">
        <Callout type="tip">
          <p>Carry out your external perimeter check on a dry day when you have at least an hour of daylight. Bring a tube of exterior-grade sealant, a bag of steel wool, a torch, and a small mirror (for checking beneath sills and behind downpipes). Fix small gaps as you find them.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Products */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="products">Products for Autumn Pest Proofing</h2>

      <p>
        The right products make pest proofing faster and more effective. Below are our recommended picks for the most common autumn pest threats. For full reviews and comparisons, see our dedicated product pages: <Link href="/best/mouse-repellent" className="text-blue-600 hover:underline font-medium">Best Mouse Repellents</Link>, <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">Best Mouse Traps</Link>, and <Link href="/best/spider-repellent" className="text-blue-600 hover:underline font-medium">Best Spider Repellents</Link>.
      </p>

      <div className="not-prose space-y-4">
        <ProductCard
          name="Xcluder Rodent Control Steel Wool Fill Fabric"
          rating={4.5}
          features={[
            'Professional-grade stainless steel wool for sealing gaps and holes',
            'Mice and rats cannot chew through the metal fibres',
            'Flexible — can be packed into irregular gaps around pipes and cables',
            'Use with expanding foam for a permanent, weathertight seal',
          ]}
          price="&pound;12"
          asin="B01B3QXQMI"
          bestFor="Best for Gap Sealing"
          rank={1}
        />
        <ProductCard
          name="Rentokil Mouse Traps Twin Pack"
          rating={4.3}
          features={[
            'Classic snap trap design with easy-set mechanism',
            'Instant kill — considered the most humane lethal trap type',
            'Reusable and affordable for setting multiple traps at once',
            'Place perpendicular to walls with trigger end against skirting board',
          ]}
          price="&pound;4"
          asin="SEARCH"
          bestFor="Best Budget Trap"
          rank={2}
        />
        <ProductCard
          name="Karlsten Spider Repellent Spray (500ml)"
          rating={4.1}
          features={[
            'Peppermint-based formula creates a barrier spiders avoid',
            'Spray around window frames, door thresholds, and air vents',
            'Non-toxic and safe for use around children and pets',
            'Reapply every 2 to 4 weeks during spider season (September-October)',
          ]}
          price="&pound;10"
          asin="SEARCH"
          bestFor="Best Spider Deterrent"
          rank={3}
        />
      </div>

      <p>
        For a full comparison of mouse control products, see our <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">Best Mouse Traps UK 2026</Link> and <Link href="/best/mouse-repellent" className="text-blue-600 hover:underline font-medium">Best Mouse Repellents UK 2026</Link> reviews. If rats are your primary concern, our <Link href="/best/rat-poison" className="text-blue-600 hover:underline font-medium">Best Rat Poison UK 2026</Link> review covers the most effective options.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Garden Preparation */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="garden">Garden Preparation</h2>

      <p>
        Your garden can either help or hinder your autumn pest proofing efforts. A garden with accessible food sources, dense ground cover near the house, and undisturbed clutter provides ideal harbourage for rodents and insects right next to your home &mdash; making it far more likely that they will eventually find their way inside. Taking the following steps in early autumn significantly reduces the risk.
      </p>

      <h3>Compost Bins</h3>
      <p>
        Open compost heaps are a magnet for rats. The decomposing organic matter generates warmth and provides a food source, and the heap itself offers excellent shelter. To reduce the risk, <strong>turn your compost regularly</strong> (at least once a fortnight) to disturb any nesting rodents. If possible, switch to an <strong>enclosed tumbler composter</strong> that rats cannot access. If you use a traditional open-bottomed bin, fit a panel of galvanised wire mesh across the base to prevent rats burrowing in from below. Most importantly, <strong>move the compost bin at least 3 metres away from the house</strong>. Having a rat-attracting food source right against an external wall is an invitation for problems.
      </p>

      <h3>Wood Piles</h3>
      <p>
        Stacked firewood and logs stored against the wall of the house provide perfect shelter for rodents and spiders. Rats and mice will nest inside the stack, and spiders are attracted to the crevices and dark spaces between logs. Store wood piles <strong>at least 1.5 metres away from any external wall</strong> and elevate the bottom of the stack at least 15 centimetres off the ground using a purpose-built log store or simple timber bearers. This removes ground-level cover and makes the stack less attractive as a nesting site. Only bring in the amount of firewood you need for the next day or two &mdash; do not stockpile large quantities inside the house.
      </p>

      <h3>Clearing Debris</h3>
      <p>
        Autumn generates large amounts of garden debris &mdash; fallen leaves, dead plants, pruning waste, and general clutter. When this material accumulates against the walls of the house or in corners of the garden, it creates damp, sheltered conditions that attract slugs, woodlice, spiders, and rodents. Clear leaf piles from against the house, remove any old furniture, pots, or building materials that have been left outside, and cut back any ground cover or climbers that are growing directly against the walls. Ivy and other climbing plants growing up the walls of the house provide a direct climbing route for mice and squirrels to reach the roofline &mdash; cut it back below the level of the first-floor windows at the very least.
      </p>

      <h3>Bird Feeders</h3>
      <p>
        Bird feeders are a well-known attractant for rats and mice. Spilled seed on the ground beneath hanging feeders provides a reliable food source for rodents, particularly during autumn when natural food sources are declining. Use feeders with <strong>seed catchers or trays</strong> to minimise spillage, clean up fallen seed daily, and consider removing feeders entirely during September and October if you have a known rodent problem. Position feeders well away from the house and avoid scattering seed directly on the ground.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Quick-Win Shopping List */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="shopping-list">Quick-Win Shopping List</h2>

      <p>
        Below is a summary of the essential products for a thorough autumn pest proofing session. Most items are available from DIY stores or online and the total cost for a typical three-bedroom house is between <strong>&pound;40 and &pound;80</strong>.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold text-gray-900">Product</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Purpose</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Approx. Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-3 px-4 text-gray-800">Steel wool (coarse grade)</td>
              <td className="py-3 px-4 text-gray-600">Packing into gaps before foam &mdash; mice cannot chew through</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;12</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Expanding foam (exterior grade)</td>
              <td className="py-3 px-4 text-gray-600">Sealing gaps around pipes, cables, and wall penetrations</td>
              <td className="py-3 px-4 text-gray-600">&pound;6&ndash;&pound;10</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Galvanised wire mesh (6mm aperture)</td>
              <td className="py-3 px-4 text-gray-600">Covering air bricks, eaves gaps, and larger openings</td>
              <td className="py-3 px-4 text-gray-600">&pound;8&ndash;&pound;15</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Door brush strips / draught excluders</td>
              <td className="py-3 px-4 text-gray-600">Sealing gaps beneath external doors and garage doors</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;12</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Mouse snap traps (pack of 6&ndash;12)</td>
              <td className="py-3 px-4 text-gray-600">Catching any mice that are already inside</td>
              <td className="py-3 px-4 text-gray-600">&pound;8&ndash;&pound;15</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Spider repellent spray</td>
              <td className="py-3 px-4 text-gray-600">Barrier spray for window frames, door thresholds, and vents</td>
              <td className="py-3 px-4 text-gray-600">&pound;8&ndash;&pound;12</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Exterior-grade silicone sealant</td>
              <td className="py-3 px-4 text-gray-600">Sealing small cracks in mortar and around window frames</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;8</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Air brick covers (galvanised mesh)</td>
              <td className="py-3 px-4 text-gray-600">Preventing mice, rats, and cluster flies entering via air bricks</td>
              <td className="py-3 px-4 text-gray-600">&pound;3&ndash;&pound;6 each</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Pest-proof vent covers</td>
              <td className="py-3 px-4 text-gray-600">Replacing damaged or missing extractor fan and tumble dryer vent flaps</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose">
        <Callout type="tip">
          <p>Buy steel wool and expanding foam together &mdash; they work as a pair. Steel wool alone can be pulled out by determined rodents, and expanding foam alone can be chewed through. Combined, they create a durable, rodent-proof seal for gaps around pipes and cables.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Professional Survey */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="professional-survey">Prefer a Professional Autumn Pest Survey?</h2>

      <p>
        If you would rather have a trained professional inspect your property and carry out the proofing work, an autumn pest survey is an excellent investment. A qualified pest controller will systematically check the entire exterior perimeter, loft space, subfloor void (where accessible), garage, and all internal areas for existing pest activity and potential entry points. They will identify gaps and vulnerabilities that homeowners commonly miss &mdash; particularly around the roofline, in cavity walls, and beneath the property.
      </p>

      <p>
        A standard domestic pest survey typically costs <strong>&pound;50 to &pound;100</strong>, with proofing work quoted separately depending on what needs to be done. Some companies offer combined survey-and-proofing packages. When choosing a provider, look for membership of the <strong>British Pest Control Association (BPCA)</strong> or the <strong>National Pest Technicians Association (NPTA)</strong>, which confirms that the technician has undergone formal training and follows a professional code of practice.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Prefer a Professional Autumn Pest Survey?"
          subtext="Compare BPCA-certified pest control professionals near you — free, no-obligation quotes"
        />
      </div>

      <div className="not-prose">
        <Callout type="cost">
          <p>A professional autumn pest survey typically costs <strong>&pound;50&ndash;&pound;100</strong> for a standard domestic property. Proofing work is usually quoted separately at <strong>&pound;100&ndash;&pound;400</strong> depending on the number of entry points and the complexity of the work. Many homeowners find this is significantly cheaper than dealing with an established infestation later in the winter.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>When should I start autumn pest proofing?</h3>
      <p>
        Ideally, start in late August or early September &mdash; before temperatures begin to drop consistently. Most pests begin seeking indoor shelter once nighttime temperatures fall below <strong>10 degrees Celsius</strong>, which across much of the UK happens from mid-September onwards. Completing your proofing work before this point means you are ahead of the migration rather than reacting to pests that have already moved in. However, any time during autumn is better than not proofing at all. Even work carried out in October or November will reduce the number of pests that make it indoors and limit the scale of any infestation that does develop.
      </p>

      <h3>What pests are most common in autumn UK?</h3>
      <p>
        The five most common autumn pest invaders in UK homes are <strong>mice, rats, spiders, cluster flies, and grey squirrels</strong>. Mice are by far the most frequent &mdash; pest controllers consistently report that mouse callouts spike dramatically between September and November. Spiders become particularly visible in September during their mating season, when large male house spiders wander indoors searching for females. Cluster flies enter loft spaces and wall cavities in large numbers to hibernate for the winter. Grey squirrels access lofts through gaps in soffits and fascia boards to build winter nests. Rats tend to move into garages, outbuildings, and subfloor voids rather than the main living areas.
      </p>

      <h3>How do I stop mice getting in during autumn?</h3>
      <p>
        The most effective method is <strong>physical proofing</strong> &mdash; sealing every external gap larger than 6 millimetres. Use a combination of steel wool and expanding foam for small gaps around pipes and cables, galvanised wire mesh (6mm aperture) for air bricks and larger openings, and brush strips or door sweeps beneath external doors. Pay particular attention to pipe entry points under sinks, air bricks at ground level, garage door seals, and gaps where different building materials meet. Inside, store all food in sealed containers and keep kitchen areas clean. Remove outdoor attractants such as fallen fruit, open compost, and accessible bird feeders. For active infestations, snap traps baited with peanut butter are the most effective and humane DIY control method. See our <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">complete mouse guide</Link> for detailed advice.
      </p>

      <h3>Do I need to pest-proof my loft?</h3>
      <p>
        <strong>Yes, absolutely.</strong> The loft is one of the most vulnerable areas of any UK home during autumn. Grey squirrels enter through gaps in soffits, damaged fascia boards, or where roof tiles have shifted &mdash; and once inside, they cause significant damage to wiring, timber, and insulation. Cluster flies hibernate in loft spaces in enormous numbers, emerging on warm winter days and causing a persistent nuisance. Mice access lofts by climbing exterior walls and entering through gaps at the roofline. Before autumn, inspect your loft for gaps around eaves, damaged soffit boards, unscreened vents, and any signs of existing pest activity. Fit 6mm galvanised mesh over any openings and repair any timber damage.
      </p>

      <h3>Should I use poison or traps for autumn mice?</h3>
      <p>
        For most domestic situations, <strong>traps are the recommended first choice</strong>. Snap traps are inexpensive (typically under &pound;2 each), highly effective when placed correctly, and deliver an instant kill &mdash; making them the most humane lethal option. They also allow you to confirm catches, monitor your progress, and dispose of each carcass properly. Poison (rodenticide) carries the risk of mice dying in inaccessible locations such as wall cavities and beneath floorboards, creating a <strong>persistent and extremely unpleasant smell</strong> that can last for several weeks. There is also a real risk of secondary poisoning to pets &mdash; particularly cats &mdash; and to wildlife such as owls and birds of prey. If the infestation is too large for traps alone, call a professional pest controller who can use restricted-access second-generation rodenticides safely and in accordance with <strong>CRRU guidelines</strong>. For a detailed comparison, see our <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">Best Mouse Traps UK 2026</Link> review.
      </p>

      <h3>How much does a professional pest survey cost?</h3>
      <p>
        A professional autumn pest survey typically costs between <strong>&pound;50 and &pound;100</strong> for a standard domestic property. Some pest control companies include a free initial inspection as part of a treatment package. The survey will cover the full exterior perimeter, loft space, garage, and all internal rooms, identifying both existing pest activity and potential entry points that need proofing. If proofing work is needed, this is usually quoted separately and can range from <strong>&pound;100 to &pound;400</strong> depending on the number of gaps and the complexity of the work. While this represents an upfront cost, it is often significantly cheaper than dealing with an established infestation later in the winter &mdash; a standard mouse treatment alone typically costs &pound;80 to &pound;150, plus proofing on top. For full pricing details, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* Cross-link box */}
      {/* ------------------------------------------------------------------ */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-3">Related Reviews &amp; Guides</p>
        <p className="text-gray-700 mb-4">Explore our product reviews for the items mentioned in this guide:</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/best/mouse-repellent"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Mouse Repellents &rarr;
          </Link>
          <Link
            href="/best/mouse-traps"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Mouse Traps &rarr;
          </Link>
          <Link
            href="/best/spider-repellent"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Spider Repellents &rarr;
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
