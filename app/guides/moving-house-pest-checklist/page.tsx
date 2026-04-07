import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Moving House Pest Checklist UK: What to Check Before You Move In',
    description:
      "Don't inherit someone else's pest problem. Our UK moving house pest checklist covers what to inspect, treat and proof before moving day.",
    alternates: {
      canonical: 'https://pestproindex.com/guides/moving-house-pest-checklist',
    },
    openGraph: {
      title: 'Moving House Pest Checklist UK: What to Check Before You Move In',
      description:
        "Don't inherit someone else's pest problem. Our UK moving house pest checklist covers what to inspect, treat and proof before moving day.",
      url: 'https://pestproindex.com/guides/moving-house-pest-checklist',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Moving House Pest Checklist UK: What to Check Before You Move In',
  description:
    "Don't inherit someone else's pest problem. Our UK moving house pest checklist covers what to inspect, treat and proof before moving day.",
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
    '@id': 'https://pestproindex.com/guides/moving-house-pest-checklist',
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
      name: 'Moving House Pest Checklist',
      item: 'https://pestproindex.com/guides/moving-house-pest-checklist',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I get a pest survey before buying a house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a pre-purchase pest survey is strongly recommended, particularly for older properties. A standard homebuyer survey or mortgage valuation does not include a pest inspection, so any existing infestations or structural pest damage such as woodworm, dry rot, or rodent activity will not be flagged unless you commission a separate survey. A professional pest survey typically costs between 80 and 150 pounds for a standard domestic property and can identify problems that could cost thousands to rectify after purchase. It also gives you valuable negotiating leverage if issues are found — you can request the seller funds treatment before completion or reduce the asking price accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pest signs should I look for when viewing a property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During a property viewing, look for small dark droppings along skirting boards, behind kitchen units, and in cupboards — these indicate mice or rats. Check for gnaw marks on cables, pipes, and woodwork. In bedrooms, inspect the edges of mattresses, bed frames, and headboards for tiny dark spots or shed skins, which are signs of bed bugs. Look at the loft hatch area for cobwebs with droppings caught in them, and ask to inspect the loft space for chewed insulation, nesting material, and wasp nests (old or active). Outside, check the condition of air bricks, door seals, and any gaps where pipes or cables enter the building. Also look for damp patches and mould, which attract a range of pests including silverfish, booklice, and woodlice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to treat for fleas when moving into a property with previous pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you should always treat for fleas if the previous occupants had cats or dogs. Flea pupae can lie dormant in carpets, floorboard gaps, and soft furnishings for several months without a host. When new occupants move in and the vibrations and warmth of foot traffic stimulate the pupae, they hatch simultaneously — often producing a sudden and severe flea infestation that can seem to come from nowhere. The best approach is to treat all carpeted areas and soft flooring with a household flea spray containing an insect growth regulator (IGR) before you move any furniture in. Treat at least twice, with a two-week gap between applications, to catch any pupae that hatch after the first treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can bed bugs be in an empty property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, bed bugs can survive in an empty property for several months. Adult bed bugs can live without feeding for up to 12 months under cool conditions, and they harbour in cracks in walls, behind skirting boards, inside electrical sockets, and in gaps in floorboards — not just in mattresses and bed frames. If the previous occupants had a bed bug problem, the bugs may still be present even if the property has been vacant for some time. Before moving in, inspect all bedrooms carefully using a torch. Check behind loose wallpaper, around plug sockets, along the edges of carpet grippers, and in any cracks in the plaster. If you find evidence, arrange professional heat treatment before moving furniture in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pest-proof a new-build home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. New-build homes are not immune to pest problems. Construction sites attract rats and mice due to the disturbance of their natural habitats and the availability of shelter in partially completed buildings. Ants are particularly common in new-build estates because the landscaping and ground works disturb existing colonies and create new nesting opportunities in compacted soil near foundations. New builds may also have gaps around pipe entry points, poorly sealed service ducts, and gaps at the base of external walls where the render meets the DPC. The snagging period is the ideal time to identify and seal any pest entry points before they are exploited.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a pre-move pest survey cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pre-move pest survey from a BPCA or NPTA-registered pest controller typically costs between 80 and 150 pounds for a standard three-bedroom house. The survey covers the full interior, loft space, exterior perimeter, and any outbuildings. If treatment is needed, this is quoted separately — a flea spray treatment for a whole house typically costs 100 to 180 pounds, a mouse proofing job costs 150 to 400 pounds, and bed bug heat treatment can cost 300 to 600 pounds depending on the number of rooms affected. Some pest control companies offer a combined pre-move inspection and treatment package at a reduced rate. The cost of a survey is small compared to the expense and disruption of discovering an infestation after you have moved all your belongings in.',
      },
    },
  ],
};

const tocItems = [
  { id: 'why-pest-checks-matter', title: 'Why Pest Checks Matter Before Moving' },
  { id: 'pre-move-inspection', title: 'Pre-Move Inspection Checklist' },
  { id: 'treatment-before-moving', title: 'Treatment Before Moving Furniture In' },
  { id: 'proofing-day-one', title: 'Proofing on Day One' },
  { id: 'shopping-list', title: 'Products Shopping List' },
  { id: 'new-build-vs-old', title: 'New Build vs Old Property' },
  { id: 'professional-survey', title: 'Professional Pre-Move Survey' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function MovingHousePestChecklistPage() {
  return (
    <GuideLayout
      title="Moving House Pest Checklist UK: What to Check Before You Move In"
      subtitle="A comprehensive UK checklist for inspecting, treating and proofing a property before moving day — so you don't inherit someone else's pest problem"
      lastUpdated="March 2026"
      readingTime="10 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Professional Pest Control vs DIY: Which Is Best?', href: '/guides/professional-pest-control-vs-diy' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
      ]}
      relatedProducts={[
        { title: 'Best Flea Sprays for Home UK 2026', href: '/best/flea-spray-for-home' },
        { title: 'Best Bed Bug Sprays UK 2026', href: '/best/bed-bug-spray' },
        { title: 'Best Mouse Repellents UK 2026', href: '/best/mouse-repellent' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
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
      {/* SECTION: Why Pest Checks Matter Before Moving */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="why-pest-checks-matter">Why Pest Checks Matter Before Moving</h2>

      <p>
        Moving house is one of the most stressful experiences in life, and the last thing anyone wants after collecting the keys is to discover that their new home comes with an unwelcome population of mice, bed bugs, or fleas. Yet it happens far more often than most people realise. According to industry surveys, approximately <strong>one in five UK properties</strong> shows evidence of pest activity at any given time &mdash; and that figure is even higher in densely built urban areas and older housing stock. The problem is compounded by the fact that sellers and landlords are under no legal obligation to disclose pest problems unless they are specifically asked, and even then, many are unaware of issues that exist behind walls, under floors, and in loft spaces that are rarely inspected.
      </p>

      <p>
        A pest problem that is already established when you move in is significantly harder and more expensive to deal with than one you catch early or prevent altogether. Mice that have been nesting undisturbed in kitchen voids for months will have created multiple entry routes, contaminated insulation, and gnawed through cables. Fleas left behind by a previous owner&apos;s pets can lie dormant in carpets for months before hatching en masse when they detect the vibrations and warmth of new occupants. Bed bugs can survive in empty properties for up to a year, hiding in cracks around skirting boards, behind wallpaper, and inside electrical sockets &mdash; places that no amount of cleaning will reach. The cost of professional treatment after you have already moved all your furniture in is substantially higher than treating an empty property before moving day.
      </p>

      <p>
        This guide provides a systematic, room-by-room checklist for inspecting a property before you move your belongings in. It covers the pest signs to look for during viewings and after exchange, the treatments you should apply to an empty property before bringing in furniture, the proofing work you should complete on day one, and the products that will help you do it all effectively. Whether you are buying, renting, or moving into a property that has been vacant, this checklist will help you avoid inheriting someone else&apos;s pest problem &mdash; and start your new life in a genuinely clean home.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Do not move furniture into a property with active pest problems.</strong> Moving sofas, beds, wardrobes, and boxes into a home with an existing infestation of mice, bed bugs, or fleas will contaminate your belongings and make treatment far more difficult and expensive. Always inspect and treat an empty property first, then move furniture in once you are confident the property is clear.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="1 in 5" label="UK properties have evidence of pest activity — always inspect before moving in" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Pre-Move Inspection Checklist */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="pre-move-inspection">Pre-Move Inspection Checklist</h2>

      <p>
        The best time to inspect for pest activity is after exchange of contracts (or signing a tenancy agreement) but before moving day &mdash; ideally when the property is empty or nearly empty. An empty property is far easier to inspect than one full of furniture, and any signs of pest activity will be more visible on bare floors and against empty walls. If possible, arrange access to the property for a dedicated inspection visit before the removal van arrives. Bring a torch, a small mirror (for checking behind units and under sills), a pair of rubber gloves, and your phone for photographs.
      </p>

      <p>
        Work through each room systematically using the checklist below. Take photographs of anything you find &mdash; these are useful if you need to contact the seller, landlord, or a pest control professional.
      </p>

      <h3>Kitchen</h3>
      <p>
        The kitchen is the room most likely to harbour evidence of rodent activity because it is where food is stored and prepared. Even thoroughly cleaned kitchens can conceal pest signs in areas that are difficult to reach.
      </p>
      <ul>
        <li>
          <strong>Droppings behind kitchen units:</strong> Pull out any freestanding appliances and check behind fitted units where possible. Mouse droppings are small (3&ndash;8mm), dark, and rice-shaped. Rat droppings are larger (10&ndash;18mm) and more capsule-shaped. Fresh droppings are dark and shiny; older droppings are dry, grey, and crumble when pressed. Concentrate on the gap between the back of units and the wall, along the top of kickboard panels, and inside any cupboards that back onto an external wall.
        </li>
        <li>
          <strong>Gnaw marks on cables and pipes:</strong> Check all visible electrical cables behind the cooker and fridge, as well as gas supply pipes, water pipes, and any plastic waste pipes. Rodent gnaw marks appear as paired grooves or shavings. Gnawed electrical cables are a serious fire risk and should be replaced by an electrician before the property is reoccupied.
        </li>
        <li>
          <strong>Grease trails along skirting boards:</strong> Mice and rats follow the same routes repeatedly, and the oils in their fur leave dark, greasy smear marks along skirting boards, around pipe entry holes, and along the edges of walls. These marks are most visible on light-coloured paintwork and are a reliable indicator of established, repeated activity rather than a one-off visit.
        </li>
        <li>
          <strong>Gaps around pipes and cables:</strong> Check every point where a pipe or cable passes through the kitchen walls or floor. Common problem areas include the void under the sink (where water supply, waste, and gas pipes pass through), behind the cooker (gas supply pipe), and around the boiler flue if the boiler is wall-mounted in the kitchen. Any gap larger than 6mm can admit a mouse.
        </li>
      </ul>

      <h3>Bathroom</h3>
      <p>
        Bathrooms are less attractive to rodents than kitchens because they lack food sources, but they present specific pest risks related to moisture, drainage, and pipe penetrations.
      </p>
      <ul>
        <li>
          <strong>Drain flies:</strong> Check the shower tray, bath overflow, and basin overflow for small, dark, moth-like flies. Drain flies (also called sewer flies or moth flies) breed in the organic slime that builds up inside drainpipes. Their presence indicates that drains need cleaning but can also point to a broken or poorly sealed drain connection that could admit other pests. Run taps that have not been used recently and watch for flies emerging from drains.
        </li>
        <li>
          <strong>Damp and mould:</strong> Inspect the walls, ceiling, window reveals, and the area behind the toilet for signs of damp, condensation damage, or mould growth. Persistent damp attracts silverfish, booklice, woodlice, and plaster beetles &mdash; all of which thrive in humid conditions. Mould on bathroom walls is often a sign of inadequate ventilation, which should be resolved before the damp-loving pest species establish. Check that the extractor fan is working and vents to the outside.
        </li>
        <li>
          <strong>Gaps around pipes:</strong> The bathroom will have multiple pipe penetrations through walls and floors for the toilet waste pipe (soil stack), bath and basin waste pipes, hot and cold water supply pipes, and potentially radiator pipes. Each penetration is a potential pest entry point. Check for gaps around every pipe where it passes through a wall or floor, paying particular attention to the soil pipe, which is often poorly sealed at floor level and is a common route for mice and rats entering from subfloor voids.
        </li>
      </ul>

      <h3>Bedrooms</h3>
      <p>
        Bedrooms are the critical area to check for bed bugs and carpet moths &mdash; two pests that are closely associated with sleeping areas and textile floor coverings.
      </p>
      <ul>
        <li>
          <strong>Bed bug signs on mattresses and bed frames:</strong> If the previous occupants have left a mattress or bed frame (common in furnished rentals or house sales where fixtures are included), inspect them thoroughly before you or your family sleep on them. Check the seams, piping, and tufts of the mattress for tiny dark spots (bed bug excrement), shed skins (translucent, husk-like casings), and live bugs. Bed bugs are flat, oval, reddish-brown, and roughly the size of an apple seed. Also inspect the joints, screw holes, and crevices of the bed frame, and the back of the headboard if it is mounted to the wall. Even if no bed frame is present, check around plug sockets, behind loose skirting boards, and along carpet gripper rods near the bed position &mdash; bed bugs harbour in all of these locations.
        </li>
        <li>
          <strong>Carpet moth damage:</strong> Inspect carpets in bedrooms, particularly along the edges of the room where the carpet meets the skirting board, under furniture positions (where the carpet has been undisturbed), and in any alcoves or fitted wardrobes. Carpet moth damage appears as bare patches where the pile has been eaten away, leaving only the backing. You may also find small cream-coloured larvae (5&ndash;10mm) or silken tubes attached to the carpet fibres. Case-bearing carpet moths (<em>Tinea pellionella</em>) are increasingly common in UK homes and can cause extensive damage to wool and wool-blend carpets.
        </li>
        <li>
          <strong>Windowsill signs:</strong> Check windowsills in bedrooms for dead insects, cluster fly bodies (common in autumn and winter), and spider webs in the corners. A large accumulation of dead flies on a bedroom windowsill, particularly in an upstairs room, may indicate a cluster fly hibernation colony in the loft above.
        </li>
      </ul>

      <h3>Loft</h3>
      <p>
        The loft is one of the most revealing areas to inspect because it is rarely cleaned, rarely disturbed, and accumulates evidence of pest activity over years. Always inspect the loft before moving in &mdash; problems discovered later are much harder to deal with once the house is fully occupied.
      </p>
      <ul>
        <li>
          <strong>Droppings:</strong> Mouse droppings scattered across loft insulation are one of the most common findings during property inspections. Check the areas immediately around the hatch, along the edges of the loft where the eaves meet the wall plate, and around any water tanks, pipes, or stored items. Rat droppings are less common in lofts but not unusual, particularly if there are trees or climbing plants near the roofline that provide access. Squirrel droppings are similar in size to rat droppings but rounder.
        </li>
        <li>
          <strong>Chewed insulation and nesting material:</strong> Rodents and squirrels pull apart loft insulation to create nests. Look for areas where the insulation has been disturbed, tunnelled through, or piled up. Nesting material may also include shredded cardboard, fabric, and plant material brought in from outside. If you find a nest, the animal that built it may still be present &mdash; or may have left an entry point that will be used again.
        </li>
        <li>
          <strong>Wasp nests (old or new):</strong> Old wasp nests appear as grey, papery structures ranging from the size of a golf ball to the size of a football. They are usually attached to rafters, tucked into eaves corners, or built around pipework. An old nest does not mean wasps will return to the same nest (they never reuse old nests), but it does indicate that there is an entry point in the roofline that wasps &mdash; and other pests &mdash; can exploit. A new-season nest (built from spring onwards) will have active wasps coming and going and must be treated before the loft can be safely used.
        </li>
        <li>
          <strong>Squirrel damage:</strong> Grey squirrels cause significant damage in lofts. Check for gnawed timber (rafters, purlins, and stored items), gnawed electrical cables (a serious fire risk), damaged water pipes, and torn or displaced insulation. Squirrel entry points are usually visible as holes in soffit boards, damaged fascia, or gaps where the roof tiles meet the wall. If squirrels have been active, all wiring in the loft should be inspected by an electrician before the property is occupied.
        </li>
      </ul>

      <h3>External</h3>
      <p>
        A walk around the exterior of the property will reveal the entry points that pests are using &mdash; or will use &mdash; to get inside. This is the most important part of the inspection for preventing future problems.
      </p>
      <ul>
        <li>
          <strong>Air bricks:</strong> Check every air brick on the property for cracks, missing sections, or holes larger than 6mm. Damaged or deteriorated air bricks are one of the most common entry points for mice and rats. Older clay air bricks are particularly vulnerable to crumbling and cracking. Note any air bricks that need mesh covers or replacement.
        </li>
        <li>
          <strong>Gaps around pipes and cables:</strong> Inspect every location where a pipe, cable, or duct penetrates the external wall. This includes gas mains, water mains, boiler flues, extractor fan vents, overflow pipes, satellite cables, broadband cables, and alarm wiring. Builders and utility installers frequently leave oversized holes that are poorly sealed with expanding foam alone &mdash; which rodents can chew through. Make a note of every gap that needs sealing.
        </li>
        <li>
          <strong>Condition of door seals:</strong> Check the gap beneath every external door &mdash; front door, back door, side door, patio door, and garage door. If you can see daylight beneath the door when it is closed, the gap is large enough to admit mice, spiders, and insects. Note any doors that need new brush strips, draught excluders, or threshold seals. Garage doors are particularly problematic, as older up-and-over doors often have gaps of 10mm or more along the bottom edge.
        </li>
        <li>
          <strong>Roofline condition:</strong> Look up at the soffit boards, fascia boards, and the junction between the roof tiles and the wall. Gaps, damaged timber, and displaced tiles are entry points for squirrels, birds, wasps, and cluster flies. Check for signs of recent repair (fresh timber or filler) which may indicate that the seller is aware of an existing problem.
        </li>
        <li>
          <strong>Drains and gullies:</strong> Check external drain covers for damage or displacement. Broken drains are one of the primary entry routes for rats into UK properties. If drain covers are missing or damaged, arrange a CCTV drain survey to check for breaks in the underground drainage system.
        </li>
      </ul>

      <div className="not-prose">
        <Callout type="tip">
          <p>Bring a torch, a small mirror, rubber gloves, and your phone camera to your pre-move inspection. Take photographs of every pest sign you find &mdash; these are valuable evidence if you need to negotiate with the seller, make a claim on a homebuyer&apos;s warranty, or brief a pest controller.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Treatment Before Moving Furniture In */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="treatment-before-moving">Treatment Before Moving Furniture In</h2>

      <p>
        Once you have the keys and before the removal van arrives, there is a narrow but crucial window in which you can treat the empty property far more effectively and cheaply than you ever could with furniture in place. An empty property allows full access to every floor surface, every skirting board edge, and every corner &mdash; exactly the areas where pest treatments need to be applied. Taking a few hours to treat the property on the day before moving (or earlier if possible) is one of the best investments you can make in your new home.
      </p>

      <h3>Flea Treatment (If Previous Owners Had Pets)</h3>
      <p>
        If the previous occupants had cats or dogs, treat the entire property for fleas before moving any soft furnishings or carpets in. Flea pupae can remain dormant in carpets, between floorboards, and in floor crevices for <strong>up to six months</strong>. They hatch when they detect vibration, pressure, and warmth &mdash; exactly what happens when new occupants start walking through the house. This can produce a sudden, explosive flea infestation that seems to come from nowhere, with hundreds of freshly hatched fleas biting within hours of moving in.
      </p>
      <p>
        Use a household <Link href="/best/flea-spray-for-home" className="text-green-600 hover:underline">flea spray</Link> that contains both a knockdown insecticide (such as permethrin) and an <strong>insect growth regulator (IGR)</strong>. The IGR is critical because it prevents any flea eggs and larvae in the carpet from developing into biting adults. Spray all carpeted areas, paying particular attention to the edges where the carpet meets the skirting board, under radiators, and in doorways &mdash; these are the areas where flea pupae accumulate most densely. If the property has hard floors, spray along the edges and into any gaps between boards. Ventilate the property thoroughly after treatment and allow it to dry completely before moving furniture in. Plan to repeat the treatment two weeks later to catch any pupae that hatch after the first application.
      </p>

      <div className="not-prose space-y-4">
        <ProductCard
          name="Indorex Household Flea Spray (500ml)"
          rating={4.5}
          features={[
            'Contains permethrin knockdown + IGR for long-lasting flea control',
            'Single can treats an average three-bedroom house',
            'Kills adult fleas on contact and prevents larvae developing for up to 12 months',
            'Ideal for treating an empty property before moving in',
          ]}
          price="&pound;12"
          asin="SEARCH"
          bestFor="Best for Flea Treatment"
          rank={1}
        />
      </div>

      <h3>Bed Bug Precautions</h3>
      <p>
        If your pre-move inspection found any evidence of bed bugs &mdash; or if the property is a rental, a house of multiple occupation (HMO), or if you are bringing in second-hand furniture &mdash; take bed bug precautions seriously. Bed bugs are one of the most difficult pests to eradicate once they are established in a furnished home, and prevention is vastly easier than cure. Even if you did not find visible evidence, it is worth treating the bedroom areas as a precaution if you have any reason to suspect the property may have had a history of bed bug problems.
      </p>
      <p>
        Spray a residual bed bug insecticide along all skirting boards, into cracks around architraves and door frames, around plug sockets (with the electricity off), and along the edges of carpet gripper rods in every bedroom. If you are bringing in a second-hand bed frame or mattress, inspect it meticulously before it enters the property and consider encasing the mattress in a <strong><Link href="/best/bed-bug-mattress-encasement" className="text-green-600 hover:underline">mattress encasement</Link></strong> as an ongoing precaution. If your inspection found definitive bed bug evidence, consider professional heat treatment before moving in &mdash; this is the most effective single-treatment solution for bed bugs in an empty room.
      </p>

      <div className="not-prose space-y-4">
        <ProductCard
          name="Pest Expert Formula C Bed Bug Killer Spray (1L)"
          rating={4.3}
          features={[
            'Professional-strength residual spray for bed bug harbourages',
            'Apply along skirting boards, bed frame joints, and cracks in walls',
            'Residual action continues killing for weeks after application',
            'Ideal for preventive treatment of an empty property before moving furniture in',
          ]}
          price="&pound;15"
          asin="SEARCH"
          bestFor="Best for Bed Bug Prevention"
          rank={2}
        />
      </div>

      <h3>General Insect Treatment</h3>
      <p>
        Even if you did not find specific evidence of fleas or bed bugs, a general insect spray applied to skirting board junctions, dark corners, under-stair cupboards, and around the base of fitted kitchen units provides a useful baseline of protection. General household insect sprays typically contain a broad-spectrum pyrethroid that kills or repels ants, silverfish, carpet beetles, spiders, and other crawling insects on contact and for several weeks afterwards. This is a quick, inexpensive step that takes 20 to 30 minutes in an empty property and gives you peace of mind that the floors and edges are treated before your belongings arrive.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Proofing on Day One */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="proofing-day-one">Proofing on Day One</h2>

      <p>
        Proofing &mdash; the physical sealing of gaps, holes, and entry points &mdash; is the single most effective long-term pest prevention measure you can take. Every gap you seal on moving day is one less route for mice, rats, insects, and spiders to enter your home in the months and years ahead. The work is straightforward, requires only basic materials, and is far easier to do before the property is full of furniture.
      </p>

      <h3>Gap Sealing with Steel Wool and Expanding Foam</h3>
      <p>
        The combination of <strong>steel wool and expanding foam</strong> is the most effective DIY method for sealing pest entry points around pipes, cables, and other wall penetrations. Steel wool alone can be pulled out by determined rodents, and expanding foam alone can be chewed through by mice in a matter of hours. Combined, they create a seal that is durable, weathertight, and rodent-proof. Pack coarse-grade steel wool firmly into each gap, then apply expanding foam over the top to hold it in place and provide a weatherproof finish. Work systematically through the property, sealing every gap identified during your pre-move inspection. Priority areas include pipe entry points under sinks, gaps around boiler flues, cable entry holes on external walls, and any holes in the plasterwork behind kitchen units.
      </p>

      <h3>Air Brick Covers</h3>
      <p>
        Air bricks provide essential ventilation to subfloor voids, but their large openings are one of the most common entry points for mice and rats in UK homes. Fit galvanised steel mesh covers (with a maximum aperture of <strong>6mm</strong>) over every air brick on the property. Pre-made air brick covers are available from builders&apos; merchants and are simple to install with masonry screws. The mesh allows air to flow through for ventilation while preventing even the smallest mouse from entering. Check that the mesh is firmly fixed and cannot be pushed in or pulled away from the wall.
      </p>

      <h3>Door Sweeps and Draught Excluders</h3>
      <p>
        Any external door with a gap visible beneath it when closed is an open invitation for mice, spiders, and crawling insects. Fit brush-strip draught excluders or rubber door sweeps to the bottom of every external door, including the front door, back door, side entrance, and garage door. For internal doors that open onto unheated spaces (such as a door from the house into an attached garage), fit draught excluders as well. Self-adhesive brush strips are the easiest to install and can be trimmed to length with scissors. For a more permanent solution, screw-fix aluminium threshold strips with a built-in rubber seal.
      </p>

      <div className="not-prose space-y-4">
        <ProductCard
          name="Xcluder Rodent Control Steel Wool Fill Fabric"
          rating={4.5}
          features={[
            'Professional-grade stainless steel wool for sealing gaps and holes',
            'Mice and rats cannot chew through the metal fibres',
            'Flexible — pack into irregular gaps around pipes and cables',
            'Use with expanding foam for a permanent, rodent-proof seal',
          ]}
          price="&pound;12"
          asin="B01B3QXQMI"
          bestFor="Best for Gap Sealing"
          rank={3}
        />
      </div>

      <div className="not-prose">
        <Callout type="tip">
          <p>Complete your proofing work <strong>before</strong> the removal van arrives. Once furniture and boxes fill the rooms, access to skirting boards, pipe entry points, and floor-level gaps becomes much more difficult. A couple of hours of proofing in an empty property is worth a full day in a furnished one.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Products Shopping List */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="shopping-list">Products Shopping List</h2>

      <p>
        Below is a summary of the products and materials you should have ready for your pre-move inspection, treatment, and proofing. Most items are available from DIY stores or Amazon and the total cost for a typical three-bedroom house is between <strong>&pound;50 and &pound;120</strong>, depending on the level of treatment needed.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-bold text-gray-900">Product</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Purpose</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Approx. Price</th>
              <th className="text-left py-3 px-4 font-bold text-gray-900">Our Review</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-3 px-4 text-gray-800">Household flea spray (with IGR)</td>
              <td className="py-3 px-4 text-gray-600">Treat carpets if previous owners had pets</td>
              <td className="py-3 px-4 text-gray-600">&pound;10&ndash;&pound;15</td>
              <td className="py-3 px-4"><Link href="/best/flea-spray-for-home" className="text-blue-600 hover:underline text-sm">Best Flea Sprays &rarr;</Link></td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Bed bug spray (residual)</td>
              <td className="py-3 px-4 text-gray-600">Treat skirting boards and cracks in bedrooms</td>
              <td className="py-3 px-4 text-gray-600">&pound;12&ndash;&pound;18</td>
              <td className="py-3 px-4"><Link href="/best/bed-bug-spray" className="text-blue-600 hover:underline text-sm">Best Bed Bug Sprays &rarr;</Link></td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">General insect killer spray</td>
              <td className="py-3 px-4 text-gray-600">Baseline treatment for skirting boards and dark corners</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;10</td>
              <td className="py-3 px-4 text-gray-400 text-sm">&mdash;</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Steel wool (coarse grade)</td>
              <td className="py-3 px-4 text-gray-600">Packing into gaps before foam &mdash; rodent-proof</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;12</td>
              <td className="py-3 px-4"><Link href="/best/mouse-repellent" className="text-blue-600 hover:underline text-sm">Mouse Repellents &rarr;</Link></td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Expanding foam (exterior grade)</td>
              <td className="py-3 px-4 text-gray-600">Sealing gaps around pipes and cables</td>
              <td className="py-3 px-4 text-gray-600">&pound;6&ndash;&pound;10</td>
              <td className="py-3 px-4 text-gray-400 text-sm">&mdash;</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Air brick mesh covers (galvanised)</td>
              <td className="py-3 px-4 text-gray-600">Covering air bricks to prevent rodent entry</td>
              <td className="py-3 px-4 text-gray-600">&pound;3&ndash;&pound;6 each</td>
              <td className="py-3 px-4 text-gray-400 text-sm">&mdash;</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Door brush strips / draught excluders</td>
              <td className="py-3 px-4 text-gray-600">Sealing gaps beneath external doors</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;12</td>
              <td className="py-3 px-4 text-gray-400 text-sm">&mdash;</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Exterior-grade silicone sealant</td>
              <td className="py-3 px-4 text-gray-600">Sealing small cracks around windows and mortar joints</td>
              <td className="py-3 px-4 text-gray-600">&pound;5&ndash;&pound;8</td>
              <td className="py-3 px-4 text-gray-400 text-sm">&mdash;</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Mouse snap traps (pack of 6)</td>
              <td className="py-3 px-4 text-gray-600">Set traps in loft and kitchen void if droppings found</td>
              <td className="py-3 px-4 text-gray-600">&pound;8&ndash;&pound;15</td>
              <td className="py-3 px-4"><Link href="/best/mouse-traps" className="text-blue-600 hover:underline text-sm">Best Mouse Traps &rarr;</Link></td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-gray-800">Rat snap traps (pack of 2&ndash;4)</td>
              <td className="py-3 px-4 text-gray-600">Set in garage or loft if rat droppings found</td>
              <td className="py-3 px-4 text-gray-600">&pound;6&ndash;&pound;12</td>
              <td className="py-3 px-4"><Link href="/best/rat-traps" className="text-blue-600 hover:underline text-sm">Best Rat Traps &rarr;</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: New Build vs Old Property */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="new-build-vs-old">New Build vs Old Property: Different Pest Risks</h2>

      <p>
        The type and age of the property you are moving into significantly affects which pests you are most likely to encounter. New-build homes and older properties each present distinct pest risks, and your inspection and treatment priorities should reflect this.
      </p>

      <h3>New-Build Properties</h3>
      <p>
        Many buyers assume that a brand-new property will be pest-free, but this is not always the case. Construction sites are magnets for rats and mice &mdash; the disturbance of soil and demolition of existing structures displaces local rodent populations, while partially completed buildings provide shelter and warmth. Rats in particular are attracted to construction sites and may already be present in service ducts, drainage runs, and cavity walls before the property is handed over.
      </p>
      <p>
        <strong>Ants</strong> are one of the most common pest problems in new-build estates. The extensive groundworks, landscaping, and soil compaction involved in building a housing development disturb existing ant colonies and create ideal nesting conditions in the compacted soil around foundations. It is not unusual for new homeowners to experience ant invasions within the first summer of occupation, particularly through gaps at the base of external walls and around patio doors.
      </p>
      <p>
        New builds may also have <strong>construction debris</strong> &mdash; plaster dust, timber offcuts, food packaging from builders &mdash; left behind in cavities, ducts, and voids that can attract pests. Check service cupboards, utility voids, and the loft space for debris that should have been cleared during the snagging process.
      </p>
      <p>
        During the snagging period, pay close attention to the sealing around pipe entry points, service ducts, meter boxes, and any gaps where the render, cladding, or brickwork meets the damp-proof course (DPC) at ground level. Report any gaps to the developer for rectification &mdash; these are defects that should be fixed under warranty.
      </p>

      <h3>Older Properties</h3>
      <p>
        Older properties &mdash; particularly Victorian, Edwardian, and pre-war homes &mdash; present a broader range of pest risks. The most common include:
      </p>
      <ul>
        <li>
          <strong>Mice and rats:</strong> Older homes typically have more gaps, deteriorated mortar, damaged air bricks, poorly sealed pipe runs, and worn door seals than newer properties. Subfloor voids in older homes (particularly suspended timber ground floors) provide ideal harbourage for rodents, and the gap between the floorboards and the void beneath is often the primary internal entry route.
        </li>
        <li>
          <strong>Woodworm:</strong> Check exposed timbers in the loft, subfloor, and any period features (such as exposed beams) for the characteristic small, round exit holes produced by woodworm beetles (<em>Anobium punctatum</em>). Fresh woodworm holes have clean, light-coloured edges and may have fine wood dust (frass) beneath them. Old, inactive holes are dark and dusty. Woodworm surveys should be included in any pre-purchase building survey for older properties. See our <Link href="/guides/woodworm-treatment" className="text-blue-600 hover:underline font-medium">woodworm treatment guide</Link> for more detail.
        </li>
        <li>
          <strong>Damp-related pests:</strong> Older properties are more prone to rising damp, penetrating damp, and condensation due to their original construction methods and materials. Persistent damp encourages silverfish, booklice, plaster beetles, woodlice, and mould mites. Addressing the underlying damp problem is essential &mdash; pest treatments will provide only temporary relief if the damp conditions that attract these species are not resolved.
        </li>
        <li>
          <strong>Squirrels and birds:</strong> Older rooflines with deteriorated soffit boards, damaged fascia, and displaced or missing roof tiles provide easy access for grey squirrels and nesting birds such as starlings and house sparrows. In listed buildings and conservation areas, there may be restrictions on how the roofline can be modified, so seek advice from the local authority before carrying out proofing work that alters the external appearance.
        </li>
      </ul>

      <div className="not-prose">
        <Callout type="info">
          <p>Whether you are moving into a new build or a period property, the principle is the same: <strong>inspect the empty property before moving furniture in</strong>. The specific pests may differ, but the window of opportunity to treat and proof an empty house is equally valuable in both cases.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Cross-link to StampDutyBack */}
      {/* ------------------------------------------------------------------ */}
      <p>
        If you are buying a property (rather than renting), it is worth checking whether you are eligible for a <strong>stamp duty refund</strong>. Many homebuyers overpay stamp duty land tax and are entitled to a partial refund &mdash; particularly if the property has unusual features, annexes, or mixed-use elements. Visit <a href="https://stampdutyback.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">StampDutyBack.co.uk</a> to find out if you could claim money back on your purchase.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Professional Pre-Move Survey */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="professional-survey">Professional Pre-Move Pest Survey</h2>

      <p>
        If you would rather have an expert carry out the inspection &mdash; or if your own inspection has revealed signs of activity that you want professionally assessed &mdash; a pre-move pest survey is an excellent investment. A qualified pest controller will systematically inspect the entire property, including areas that are difficult for homeowners to access (such as subfloor voids, cavity walls via inspection hatches, and the full extent of the loft space). They will identify active infestations, evidence of historical pest activity, and every potential entry point on the exterior.
      </p>

      <p>
        A pre-move pest survey typically costs between <strong>&pound;80 and &pound;150</strong> for a standard three-bedroom house. Treatment and proofing work are quoted separately based on the findings. Some pest control companies offer combined inspection-and-treatment packages at a reduced rate, which can be particularly good value if you know the property needs flea treatment or mouse proofing. When choosing a pest controller, look for membership of the <strong>British Pest Control Association (BPCA)</strong> or the <strong>National Pest Technicians Association (NPTA)</strong> &mdash; both organisations require members to hold recognised qualifications and follow a professional code of conduct.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>A pre-move pest survey typically costs <strong>&pound;80&ndash;&pound;150</strong>. Flea treatment for a whole house is <strong>&pound;100&ndash;&pound;180</strong>. Mouse proofing costs <strong>&pound;150&ndash;&pound;400</strong> depending on the number of entry points. Bed bug heat treatment ranges from <strong>&pound;300&ndash;&pound;600</strong> per room. These costs are significantly lower when the property is empty &mdash; treating a furnished home can cost 50% more.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Want a Professional Pre-Move Pest Survey?"
          subtext="Compare BPCA-certified pest control professionals near you — free, no-obligation quotes"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Should I get a pest survey before buying a house?</h3>
      <p>
        Yes, a pre-purchase pest survey is strongly recommended, particularly for older properties. A standard homebuyer survey or mortgage valuation does <strong>not</strong> include a pest inspection, so any existing infestations or structural pest damage &mdash; such as woodworm, dry rot, or rodent activity &mdash; will not be flagged unless you commission a separate survey. A professional pest survey typically costs between <strong>&pound;80 and &pound;150</strong> for a standard domestic property and can identify problems that could cost thousands to rectify after purchase. It also gives you valuable negotiating leverage: if issues are found, you can request the seller funds treatment before completion, or negotiate a price reduction to cover the cost. For full pricing information, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      <h3>What pest signs should I look for when viewing a property?</h3>
      <p>
        During a property viewing, look for small dark droppings along skirting boards, behind kitchen units, and inside cupboards &mdash; these indicate mice or rats. Check for gnaw marks on visible cables, pipes, and woodwork. In bedrooms, inspect any mattresses or bed frames for tiny dark spots or shed skins (signs of bed bugs). Ask to see the loft space if possible and check for droppings, chewed insulation, nesting material, and old wasp nests. Outside, note the condition of air bricks, door seals, and any visible gaps where pipes or cables enter the building. Damp patches and mould on walls or ceilings are also worth noting, as persistent damp attracts silverfish, booklice, and woodlice. Even if you cannot carry out a full inspection during a viewing, these quick checks give you a useful early indication of whether the property has pest issues.
      </p>

      <h3>Do I need to treat for fleas when moving into a property with previous pets?</h3>
      <p>
        <strong>Yes, always.</strong> Flea pupae can lie dormant in carpets, floorboard gaps, and soft furnishings for up to six months without a host. When new occupants move in and the vibrations and warmth of foot traffic stimulate the pupae, they hatch simultaneously &mdash; often producing a sudden and severe infestation within hours of moving in. The best approach is to treat all carpeted areas and soft flooring with a household flea spray containing an <strong>insect growth regulator (IGR)</strong> before you move any furniture in. Treat at least twice, with a two-week gap between applications, to catch any pupae that hatch after the first treatment. If you are unsure whether the previous occupants had pets, treat the property anyway &mdash; the cost of a can of flea spray is negligible compared to the misery of a flea infestation. For product recommendations, see our <Link href="/best/flea-spray-for-home" className="text-blue-600 hover:underline font-medium">Best Flea Sprays for Home UK 2026</Link> review.
      </p>

      <h3>Can bed bugs be in an empty property?</h3>
      <p>
        Yes. Adult bed bugs can survive without feeding for <strong>up to 12 months</strong> under cool conditions. They harbour in cracks in walls, behind skirting boards, inside electrical sockets, in gaps in floorboards, and behind loose wallpaper &mdash; not just in mattresses and bed frames. If the previous occupants had a bed bug problem, the bugs may still be present even if the property has been vacant for some time. Before moving in, inspect all bedrooms carefully using a torch, checking behind loose wallpaper, around plug sockets, along the edges of carpet grippers, and in any cracks in the plaster. Small dark spots (faecal staining) and translucent shed skins are the most common signs. If you find evidence, arrange <strong>professional heat treatment</strong> before moving furniture in &mdash; this is the most effective single-treatment solution for bed bugs. See our <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">complete bed bug guide</Link> for detailed advice.
      </p>

      <h3>Should I pest-proof a new-build home?</h3>
      <p>
        Yes. New-build homes are not immune to pest problems. Construction sites attract rats and mice, and ants are particularly common on new-build estates due to the extensive soil disturbance involved in development. New builds may also have gaps around pipe entry points, poorly sealed service ducts, and gaps at the base of external walls where the render or cladding meets the damp-proof course. The <strong>snagging period</strong> is the ideal time to identify and report these issues &mdash; any gaps that could admit pests are construction defects that should be fixed under warranty. Even if the developer has sealed all penetrations, it is worth applying a general insect spray to skirting boards and kitchen voids as a precaution, and checking air bricks and door seals are properly fitted. See our <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">guide to getting rid of ants</Link> if ants are already a problem.
      </p>

      <h3>How much does a pre-move pest survey cost?</h3>
      <p>
        A pre-move pest survey from a BPCA or NPTA-registered pest controller typically costs between <strong>&pound;80 and &pound;150</strong> for a standard three-bedroom house. The survey covers the full interior (all rooms, cupboards, and voids), loft space, exterior perimeter, and any outbuildings or garages. If treatment is needed, it is quoted separately: flea spraying a whole house typically costs &pound;100&ndash;&pound;180, mouse proofing costs &pound;150&ndash;&pound;400 depending on the number of entry points, and bed bug heat treatment can cost &pound;300&ndash;&pound;600 per room. Some companies offer combined inspection-and-treatment packages at a reduced rate, which is particularly good value if you know the property needs work. The cost of a survey is small compared to the expense and disruption of discovering an infestation after you have moved all your belongings in. For a full breakdown, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* Cross-link box */}
      {/* ------------------------------------------------------------------ */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-3">Related Reviews &amp; Guides</p>
        <p className="text-gray-700 mb-4">Explore our product reviews for the items mentioned in this guide:</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/best/flea-spray-for-home"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Flea Sprays &rarr;
          </Link>
          <Link
            href="/best/bed-bug-spray"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Bed Bug Sprays &rarr;
          </Link>
          <Link
            href="/best/mouse-repellent"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Best Mouse Repellents &rarr;
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
