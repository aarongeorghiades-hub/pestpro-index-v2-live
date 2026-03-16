import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Rats: The Complete UK Guide (2026) | PestPro Index',
    description:
      'Everything you need to know about getting rid of rats in your home and garden. Signs of infestation, DIY methods, when to call a professional, and the best products to use.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-rats',
    },
    openGraph: {
      title: 'How to Get Rid of Rats: The Complete UK Guide (2026) | PestPro Index',
      description:
        'Everything you need to know about getting rid of rats in your home and garden. Signs of infestation, DIY methods, when to call a professional, and the best products to use.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-rats',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Rats: The Complete UK Guide (2026)',
  description:
    'Everything you need to know about getting rid of rats in your home and garden. Signs of infestation, DIY methods, when to call a professional, and the best products to use.',
  datePublished: '2026-03-14',
  dateModified: '2026-03-14',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-rats',
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
      name: 'How to Get Rid of Rats',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-rats',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to get rid of rats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professional pest controller will typically resolve a rat infestation within 2 to 4 weeks, usually across 3 scheduled visits. DIY treatment can take longer, particularly if entry points are not sealed. The timeline depends on the severity of the infestation and the effectiveness of the proofing measures put in place.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get rid of rats without poison?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Snap traps, electronic traps, and thorough proofing are all effective methods that do not involve rodenticide. Many professional pest controllers now offer poison-free treatment programmes, particularly where there is a risk to children, pets, or wildlife.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are rats more common in winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rats are more likely to enter homes and buildings between October and March as they seek warmth, shelter, and reliable food sources. However, rat infestations can occur at any time of year, especially in areas with readily available food waste or harbourage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do rats come back after treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rats can return if the entry points they used are not properly sealed. Proofing is the single most important step in long-term rat control. Without it, new rats from the surrounding area will eventually find the same access routes and re-establish an infestation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is one rat a sign of an infestation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Often, yes. Rats are social animals that live in groups. If you see one rat, there are almost certainly more nearby. A lone sighting, especially during daylight hours, may indicate that the colony is large enough that some rats are being pushed out of hiding by competition for space and food.',
      },
    },
  ],
};

const tocItems = [
  { id: 'signs', title: 'How to Tell If You Have Rats' },
  { id: 'dangers', title: 'Why Rats Are Dangerous' },
  { id: 'diy-methods', title: 'DIY Rat Control Methods' },
  { id: 'rat-proofing', title: 'How to Rat-Proof Your Home' },
  { id: 'when-to-call-professional', title: 'When to Call a Professional' },
  { id: 'costs', title: 'How Much Does Rat Control Cost?' },
  { id: 'rat-control-by-city', title: 'Rat Control by City' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfRatsPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Rats: The Complete UK Guide (2026)"
      subtitle="Everything you need to know about identifying, treating, and preventing rat infestations in UK homes and gardens"
      lastUpdated="March 2026"
      readingTime="12 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[{ title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' }, { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' }, { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' }]}
      relatedProducts={[{ title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' }, { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' }, { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' }, { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' }]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Signs */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="signs">How to Tell If You Have Rats</h2>

      <p>
        Rats are cautious, largely nocturnal animals. You are far more likely to notice the evidence they leave behind than to see a live rat in your home. Learning to recognise the telltale signs early is crucial, because the sooner you act, the easier and cheaper the problem is to resolve. Below are the key indicators to look for.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>If you see a rat during daylight hours, it often means the colony is large and overcrowded. Act immediately — the problem is likely more serious than you think.</p>
        </Callout>
      </div>

      <h3>Droppings</h3>
      <p>
        Rat droppings are the single most common and reliable sign of an infestation. Brown rat droppings are typically <strong>10 to 20 millimetres long</strong> &mdash; roughly the size and shape of an olive or a large grain of rice. They are dark brown or black, tapered at the ends, and often found in clusters of 20 to 50 pellets. Fresh droppings are dark, moist, and shiny. As they age, they turn grey, dry, and crumbly. Finding fresh droppings means that rats are still actively using that area.
      </p>
      <p>
        It is important to distinguish rat droppings from mouse droppings, since the treatment approach can differ. Mouse droppings are much smaller &mdash; only <strong>3 to 6 millimetres long</strong>, about the size of a grain of rice &mdash; and are scattered randomly rather than deposited in concentrated groups. If you are finding droppings larger than a centimetre, you are almost certainly dealing with rats, not mice.
      </p>

      <h3>Gnaw Marks</h3>
      <p>
        Rats have powerful incisor teeth that grow continuously throughout their lives. They must gnaw constantly to keep these teeth worn down, and they will chew through an extraordinary range of materials: wood, plastic, soft metal such as aluminium, rubber, and even concrete in some cases. Look for fresh gnaw marks on skirting boards, door frames, furniture legs, food packaging, plastic storage boxes, and &mdash; critically &mdash; electrical cables. Fresh gnaw marks are lighter in colour; older ones darken over time. If you find gnawed cables, this is a serious fire hazard that should be addressed immediately.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Gnawed electrical cables are a serious fire hazard. If you find evidence of rats chewing through wiring, contact an electrician to inspect the damage before it causes a fire.</p>
        </Callout>
      </div>

      <h3>Scratching and Scurrying Noises</h3>
      <p>
        Because rats are most active between dusk and dawn, many homeowners first become aware of a problem when they hear scratching, scurrying, or scrabbling noises in the walls, ceilings, or under floorboards at night. Brown rats are excellent climbers and frequently access loft spaces via cavity walls. If you hear noises primarily in the loft, rats may be running along joists and through insulation. The sounds are notably louder and heavier than those made by mice.
      </p>

      <h3>Smear Marks</h3>
      <p>
        Rats tend to follow the same routes repeatedly, keeping close to walls and skirting boards. Their fur is oily, and over time this creates distinctive dark, greasy smear marks &mdash; sometimes called rub marks &mdash; along walls, pipes, and beams where they regularly pass. These marks can be particularly visible on lighter-coloured surfaces and around holes or gaps that the rats use to enter and exit. If the smear marks are still wet or tacky, the route is being actively used.
      </p>

      <h3>Burrows</h3>
      <p>
        Brown rats are accomplished diggers. Outdoors, look for burrow entrances approximately 6 to 9 centimetres in diameter in garden borders, beneath sheds, alongside foundations, under compost heaps, and near bin stores. Active burrows will have smooth, well-worn entrances, often with a small fan of freshly excavated soil nearby. Disused burrows tend to have cobwebs or leaves blocking the entrance.
      </p>

      <h3>Footprints and Tail Marks</h3>
      <p>
        In dusty or seldom-used areas such as lofts, cellars, and behind kitchen appliances, you may spot rat footprints or tail drag marks in the dust. You can test for activity by sprinkling a thin layer of flour or talcum powder across a suspected rat run and checking for prints the following morning. Rat footprints show four toes on the front feet and five on the back, and are noticeably larger than mouse prints.
      </p>

      <h3>Rat Runs</h3>
      <p>
        In gardens, rats create well-worn pathways &mdash; known as rat runs &mdash; through grass, along fence lines, and between vegetation and buildings. These paths are typically 5 to 10 centimetres wide and can be identified by flattened grass and the absence of plant growth. Indoors, the equivalent is the smear-marked route along skirting boards and behind furniture.
      </p>

      <h3>A Strong, Unpleasant Smell</h3>
      <p>
        A rat infestation often produces a persistent, stale, ammonia-like odour. This comes primarily from rat urine, which is deposited continuously as rats move around. The smell is strongest in enclosed spaces such as cupboards, loft spaces, and wall cavities, and tends to intensify as the infestation grows. Pets &mdash; particularly cats and dogs &mdash; may become agitated or fixated on areas where the smell is concentrated.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Dangers */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="dangers">Why Rats Are Dangerous</h2>

      <p>
        Rats are not simply a nuisance. They pose genuine risks to human health, property, and safety. The UK is home predominantly to the brown rat (<em>Rattus norvegicus</em>), a robust and adaptable species that thrives in both urban and rural environments. Understanding the specific dangers they present helps explain why prompt action is so important.
      </p>

      <h3>Disease Transmission</h3>
      <p>
        Rats are vectors for a number of serious diseases. The most significant in the UK context is <strong>Weil&apos;s disease</strong> (leptospirosis), a bacterial infection transmitted through contact with rat urine, contaminated water, or contaminated soil. Leptospirosis can cause flu-like symptoms that, in severe cases, progress to organ failure and can be fatal. The bacteria can enter the body through cuts or abrasions in the skin, or through the mucous membranes of the eyes, nose, or mouth. Anyone who works near waterways, farms, or drainage systems is at particular risk.
      </p>
      <p>
        Rats also carry and transmit <strong>salmonella</strong> through their droppings, which can contaminate food preparation surfaces and stored food. <strong>Hantavirus</strong>, though less common in the UK than in some parts of Europe and the Americas, has been detected in British wild rat populations and can cause a serious respiratory illness. <strong>Rat-bite fever</strong>, caused by the bacterium <em>Streptobacillus moniliformis</em>, can be transmitted through bites, scratches, or contact with rat saliva.
      </p>

      <div className="not-prose">
        <StatCallout value="40+" label="Droppings produced by a single rat every day" />
      </div>

      <h3>Property Damage</h3>
      <p>
        The financial cost of rat damage to UK properties runs into millions of pounds each year. Rats gnaw through electrical cables, which creates a very real fire risk &mdash; damaged wiring behind walls or in loft spaces can spark and ignite insulation or timber without any visible warning. They chew through plastic water pipes, causing leaks and, in the worst cases, flooding that can result in thousands of pounds of damage. They destroy insulation in lofts and cavity walls, reducing energy efficiency. They undermine building foundations through burrowing. And they damage stored goods, furniture, and personal possessions.
      </p>

      <h3>Food Contamination</h3>
      <p>
        Rats contaminate far more food than they eat. Their droppings, urine, and hair are deposited continuously as they forage, and a single rat produces approximately 40 droppings per day. In domestic kitchens, rats will gnaw through packaging to reach food, contaminating anything they touch. In commercial food premises, a rat infestation can result in an immediate closure notice from the local authority&apos;s Environmental Health department.
      </p>

      <h3>Rapid Breeding</h3>
      <p>
        Rats breed at a remarkable rate. A female brown rat reaches sexual maturity at around 5 weeks of age and can produce a litter of 6 to 12 pups every 3 to 4 weeks. Under ideal conditions (ample food, warmth, and shelter), a single breeding pair can theoretically produce up to <strong>2,000 descendants in a single year</strong>. This is why small rat problems become large ones very quickly if not addressed. Waiting and hoping the problem will resolve itself is never a sound strategy.
      </p>

      <div className="not-prose">
        <StatCallout value="2,000+" label="Potential descendants from a single breeding pair in one year" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">DIY Rat Control Methods</h2>

      <p>
        If you have caught the problem early &mdash; perhaps you have found a small number of droppings in one area, or heard occasional scratching &mdash; it may be possible to deal with the rats yourself before the infestation becomes established. Below are the main DIY methods available, with an honest assessment of each.
      </p>

      <h3>Snap Traps</h3>
      <p>
        The traditional rat snap trap remains the single most effective DIY method for catching and killing individual rats. Modern designs are considerably more powerful and easier to set than the wooden-and-wire traps of decades past. The key to success is placement: snap traps should be positioned <strong>at right angles to walls</strong>, with the trigger plate facing the wall, along known rat runs. Rats tend to travel along edges rather than across open spaces.
      </p>
      <p>
        Contrary to popular belief, cheese is not the best bait for rats. <strong>Peanut butter</strong> is far more effective because it has a strong scent, it is difficult for the rat to remove without triggering the trap, and it is inexpensive. Other good bait options include chocolate spread, hazelnut spread, and small pieces of dried fruit.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Peanut butter is far more effective than cheese as rat bait. It has a strong scent and is sticky enough that the rat must work at it, increasing the chance of triggering the trap.</p>
        </Callout>
      </div>

      <p>
        Set multiple traps &mdash; at least three or four &mdash; rather than relying on a single trap. Rats are neophobic, meaning they are suspicious of new objects in their environment, so it can take a day or two before they approach the trap. Some experienced pest controllers recommend leaving traps unset but baited for the first night to allow the rats to become accustomed to feeding from them, then setting them the following evening.
      </p>
      <p>
        <strong>Pros:</strong> Instant, humane kill when used correctly. No poison involved, so no risk to children, pets, or wildlife. Reusable. Inexpensive. You can confirm kills immediately.
      </p>
      <p>
        <strong>Cons:</strong> Requires you to handle and dispose of dead rats (use gloves and a sealed bag). Each trap catches only one rat at a time. Less effective for large infestations. Traps must be checked daily.
      </p>

      <h3>Bait Stations with Rodenticide</h3>
      <p>
        Rodenticide &mdash; rat poison &mdash; is available to the general public in the UK in the form of first-generation anticoagulant bait blocks, which must be placed inside <strong>tamper-resistant bait stations</strong>. These are sturdy plastic boxes designed so that rats can enter and feed on the bait, but children, pets, and non-target wildlife cannot access it. Using poison bait without a proper station is both dangerous and irresponsible.
      </p>
      <p>
        If you choose this method, follow the <strong>Campaign for Responsible Rodenticide Use (CRRU)</strong> guidelines closely. Place bait stations along walls and near known activity points. Check and replenish bait regularly. Remove all bait once the infestation is resolved &mdash; never leave poison out as a &ldquo;preventative&rdquo; measure.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Poisoned rats often die in inaccessible locations — inside walls or under floors — causing an extremely unpleasant smell lasting weeks. There is also a real risk of secondary poisoning to pets and wildlife.</p>
        </Callout>
      </div>

      <p>
        <strong>Pros:</strong> Effective for tackling multiple rats. Bait stations are reasonably affordable. Can treat larger infestations than traps alone.
      </p>
      <p>
        <strong>Cons:</strong> Poisoned rats frequently die in inaccessible locations &mdash; inside wall cavities, beneath floorboards, or in loft insulation &mdash; causing a persistent and extremely unpleasant smell that can last for weeks. There is a real risk of <strong>secondary poisoning</strong>: if a pet, owl, or other predator consumes a poisoned rat, the predator may also be poisoned. This is a significant ecological concern and one reason many pest professionals are now moving away from routine rodenticide use.
      </p>

      <h3>Electronic Traps</h3>
      <p>
        Electronic rat traps are battery-powered devices that deliver a high-voltage electric shock when a rat enters the trap, resulting in a quick kill &mdash; typically within a few seconds. The rat is attracted in by bait placed at the back of the trap, and the kill is triggered by a sensor plate. Most models have an indicator light that shows when a rat has been caught, so you do not need to check the trap by peering inside.
      </p>
      <p>
        <strong>Pros:</strong> Clean and hygienic &mdash; you can dispose of the rat without touching it by tipping the trap over a bin. Considered a humane kill method. Reusable. No poison involved.
      </p>
      <p>
        <strong>Cons:</strong> Significantly more expensive than snap traps, typically between 25 and 50 pounds per unit. Each trap catches only one rat at a time and must be emptied and reset before it can catch another. Requires batteries.
      </p>

      <h3>Live Catch Traps</h3>
      <p>
        Live catch traps, also known as cage traps, capture the rat alive inside a wire mesh cage. While they may seem like the most humane option, there are important practical and legal considerations. Under the <strong>Animal Welfare Act 2006</strong>, any trap capable of catching a live animal must be checked at least twice every 24 hours, and any animal caught must be dealt with humanely and without unnecessary suffering. In practice, this means you must either release the rat at a distant location (where it may not survive in unfamiliar territory) or have it humanely dispatched.
      </p>
      <p>
        <strong>Pros:</strong> No kill involved at the point of capture. Allows identification of the animal.
      </p>
      <p>
        <strong>Cons:</strong> Rats released nearby will almost certainly return. Trapping and relocation is extremely stressful for the animal and has low survival rates. Legal obligations to check traps twice daily are burdensome. Not practical for anything beyond a single rat.
      </p>

      <h3>Ultrasonic Repellers</h3>
      <p>
        Ultrasonic repeller devices plug into a mains socket and emit high-frequency sound waves that are claimed to be uncomfortable for rats and other rodents. The evidence for their effectiveness is, at best, mixed. Some laboratory studies have shown a short-term avoidance response, but rats are highly adaptable and tend to <strong>habituate to the sound within days</strong>. There is no robust, peer-reviewed evidence that ultrasonic devices provide reliable, long-term rat control.
      </p>
      <p>
        <strong>Our recommendation:</strong> Do not rely on ultrasonic repellers as a primary method of rat control. They may have marginal value as a supplementary deterrent in combination with other methods, but used alone they are unlikely to resolve an infestation.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for the right trap?</p>
        <p className="text-gray-700 mb-3">We&apos;ve tested and reviewed the best options available in the UK.</p>
        <a
          href="/best/rat-traps"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Rat Traps UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Rat-Proofing */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="rat-proofing">How to Rat-Proof Your Home</h2>

      <p>
        Killing or removing rats without sealing the entry points they used is a temporary fix at best. New rats from the surrounding area will find the same access routes and move in within weeks. <strong>Proofing is the single most important step in long-term rat control</strong>, and any reputable pest controller will include it as part of a comprehensive treatment plan.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>A brown rat can squeeze through a gap as small as 25mm — roughly the size of a one-pound coin. Systematic inspection and sealing of all entry points is essential.</p>
        </Callout>
      </div>

      <h3>Seal Entry Points</h3>
      <p>
        A rat can squeeze through any gap that its skull can fit through. In practice, this means that a brown rat can pass through a hole as small as <strong>25 millimetres in diameter</strong> &mdash; roughly the size of a one-pound coin. Systematically inspect the exterior of your property for gaps, cracks, and holes, paying particular attention to the following areas:
      </p>
      <ul>
        <li>Where pipes, cables, or conduits enter the building &mdash; there is often a gap around the penetration that has been poorly sealed or not sealed at all</li>
        <li>Air bricks and ventilation grilles &mdash; check for damage or missing covers</li>
        <li>Gaps beneath doors, particularly garage and shed doors</li>
        <li>Damaged or missing mortar between bricks, especially at ground level</li>
        <li>Gaps where roofline timbers meet the wall (soffit and fascia boards)</li>
        <li>Holes in external walls where old pipes or cables have been removed</li>
      </ul>

      <h3>Use Wire Wool and Expanding Foam</h3>
      <p>
        The most effective way to fill small to medium-sized gaps is to pack them tightly with <strong>wire wool</strong> (also sold as steel wool) and then cover or seal with expanding polyurethane foam. Wire wool is critical because rats cannot gnaw through it &mdash; the metal fibres shred their gums. Expanding foam alone is useless as a rat barrier; rats chew straight through it. The combination of the two materials creates a barrier that is both physically impenetrable and sealed against draughts and moisture.
      </p>

      <h3>Check Your Drains</h3>
      <p>
        Broken or damaged drains are one of the most common entry routes for rats into UK properties. Rats living in the sewer system can access broken pipes and climb up through the drainage network into your home &mdash; even emerging through toilet bowls in extreme cases. If you suspect drain access, consider commissioning a <strong>CCTV drain survey</strong>. A specialist will run a camera through your drainage system to identify cracks, collapses, or missing sections of pipe. Repairing damaged drains can be expensive, but it is often the only way to permanently resolve a persistent rat problem in older properties.
      </p>

      <h3>Manage Food and Waste</h3>
      <p>
        Remove the food sources that attract rats in the first place. Secure all exterior bins with <strong>lockable lids</strong> that cannot be knocked off. If your council uses open-topped recycling bins, keep them clean and free from food residue. Store pet food in sealed containers, not open bags. If you have bird feeders in the garden, be aware that the seed spillage beneath them is a major attractant for rats &mdash; consider removing feeders entirely, or switching to squirrel-proof, caged designs that limit spillage.
      </p>

      <h3>Keep Gardens Tidy</h3>
      <p>
        Rats need cover and harbourage. Clear garden debris, piles of wood or building materials, dense undergrowth, and overgrown borders that provide hiding places. Compost heaps are particularly attractive to rats because they offer warmth and food scraps &mdash; use a sealed compost bin rather than an open heap, and avoid composting cooked food. Trim all vegetation back from the building by at least <strong>30 centimetres</strong> to create a clear gap that rats are reluctant to cross in the open.
      </p>

      <h3>Repair Air Bricks and Install Mesh</h3>
      <p>
        Air bricks are essential for ventilating sub-floor spaces and preventing damp, but damaged or missing air brick covers create open invitations for rats. Replace any damaged air bricks with <strong>mesh-covered versions</strong> that allow airflow while preventing rodent access. Use galvanised wire mesh with a maximum aperture of 6 millimetres. Similarly, fit mesh covers over any open pipe ends, disused waste outlets, or gaps around soil pipe collars.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call-professional">When to Call a Professional</h2>

      <p>
        There is no shame in calling in a professional pest controller. Rats are intelligent, cautious, and prolific breeders, and there are situations where DIY methods are simply not going to be enough. Knowing when to escalate is the mark of a sensible homeowner, not a defeated one.
      </p>

      <div className="not-prose">
        <StatCallout value="3 visits" label="Standard professional treatment plan over 2-3 weeks" />
      </div>

      <h3>Signs the Problem Is Beyond DIY</h3>
      <ul>
        <li>
          <strong>Seeing rats during daylight hours:</strong> Rats are nocturnal. If you are seeing them during the day, it typically means the colony is so large that some individuals are being forced out of hiding by competition for food and space. This is a strong indicator of a severe infestation.
        </li>
        <li>
          <strong>Droppings in multiple rooms or on multiple floors:</strong> This suggests an established infestation with multiple access points and routes through the property, rather than a single rat exploring from one entry point.
        </li>
        <li>
          <strong>Persistent problem despite 2 or more weeks of trapping:</strong> If you have been setting traps correctly, using good bait, and checking daily but are still catching rats or finding new droppings after a fortnight, the population is larger than traps alone can handle.
        </li>
        <li>
          <strong>Rats in wall cavities or drains:</strong> These are extremely difficult to treat without professional equipment and expertise. Drain rats in particular require a CCTV survey and potential drainage repairs.
        </li>
        <li>
          <strong>Commercial premises:</strong> Businesses that handle or store food have strict legal obligations under the Food Safety Act 1990 and associated regulations. A rat infestation in a commercial food premises can result in prosecution. Professional pest control with documented treatment records is essential.
        </li>
      </ul>

      <h3>What a Professional Does Differently</h3>
      <p>
        A qualified, accredited pest controller brings several advantages that are simply not available to the householder:
      </p>
      <ul>
        <li>
          <strong>Access to restricted-use rodenticides:</strong> Professional pest controllers can use <strong>second-generation anticoagulant rodenticides</strong> that are significantly more potent than the first-generation products available to the public. These are restricted-use products that require professional training and certification.
        </li>
        <li>
          <strong>CCTV drain surveys:</strong> Many pest control companies offer integrated drain inspection services to identify and address below-ground access routes.
        </li>
        <li>
          <strong>Proofing expertise:</strong> A good pest controller will not only eliminate the current infestation but will identify and seal all entry points to prevent recurrence. This proofing work is often the most valuable part of the service.
        </li>
        <li>
          <strong>Multiple-visit treatment plans:</strong> A standard professional treatment for a domestic rat infestation typically involves <strong>3 visits over 2 to 3 weeks</strong>. The initial visit involves a thorough survey, identification of activity areas and access points, and placement of bait or traps. Follow-up visits monitor progress, replenish treatment, and carry out proofing work.
        </li>
        <li>
          <strong>Accreditation and insurance:</strong> Look for membership of the <strong>British Pest Control Association (BPCA)</strong> or the <strong>National Pest Technicians Association (NPTA)</strong>. These accreditations confirm that the technician has undergone formal training, follows a code of practice, and carries appropriate professional indemnity and public liability insurance.
        </li>
      </ul>

      {/* FindProviderCTA */}
      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Rat Control?"
          subtext="Compare BPCA-certified pest control providers near you — free, no commissions"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Costs */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">How Much Does Rat Control Cost in the UK?</h2>

      <p>
        The cost of professional rat control varies depending on the severity of the infestation, the size and type of property, the accessibility of the affected areas, and the extent of proofing work required. Below are typical price ranges for 2026, based on our research across hundreds of UK pest control providers.
      </p>

      <h3>Typical Domestic Treatment Costs</h3>

      <div className="not-prose">
        <Callout type="cost">
          <p>A standard domestic rat treatment with 2-3 visits typically costs £80 to £150 across most of the UK, with London and the South East at the higher end.</p>
        </Callout>
      </div>

      <ul>
        <li>
          <strong>Initial survey:</strong> Often free from reputable companies, or included in the treatment price. Some companies charge a survey fee of 30 to 50 pounds that is then deducted from the treatment cost if you proceed.
        </li>
        <li>
          <strong>Standard domestic treatment (2 to 3 visits):</strong> Typically <strong>80 to 150 pounds</strong> in most parts of England, Scotland, and Wales. Prices in London and the South East tend to be at the higher end of this range, while prices in the North of England, Scotland, Wales, and Northern Ireland are often lower.
        </li>
        <li>
          <strong>CCTV drain survey:</strong> <strong>100 to 200 pounds</strong> for a standard domestic property. This is usually charged as a separate service and may be recommended if the pest controller suspects the rats are entering through the drainage system.
        </li>
        <li>
          <strong>Proofing work:</strong> <strong>150 to 500 pounds or more</strong>, depending on the scope. Simple proofing &mdash; sealing a few gaps with wire wool and mesh &mdash; may be included in the treatment price. More extensive work, such as replacing damaged air bricks, fitting drain guards, or repairing brickwork, is usually quoted separately.
        </li>
      </ul>

      <h3>Council Pest Control Services</h3>
      <p>
        The availability and cost of council-provided pest control services varies enormously across the UK. Some councils still offer <strong>free rat treatment</strong> for domestic properties &mdash; for example, some Belfast City Council treatments are provided at no charge to residents. Other councils offer a <strong>subsidised service</strong> at below-market rates, typically 30 to 60 pounds for a treatment course. However, an increasing number of local authorities have stopped offering pest control services entirely due to budget pressures, and instead refer residents to private companies.
      </p>
      <p>
        London borough councils vary particularly widely. Some offer free or heavily subsidised treatments, while others have contracted the service out to private providers. It is worth checking your local council&apos;s website to see what is available in your area before paying for private treatment.
      </p>

      <h3>Getting Good Value</h3>
      <p>
        Always get at least <strong>2 to 3 quotes</strong> from different providers before committing. When comparing quotes, check what is included: does the price cover multiple visits, or only a single treatment? Is proofing work included or extra? Is there a guarantee or follow-up service if the rats return within a specified period? Be wary of any company that quotes a very low price for a single visit with no follow-up &mdash; effective rat control almost always requires more than one visit.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Rat Control by City */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="rat-control-by-city">Rat Control by City</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find rat control experts in your area.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find rat control experts &rarr;</span>
        </Link>
        <Link
          href="/pest-control/regions"
          className="block p-5 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-md hover:border-blue-400 transition-all group sm:col-span-2 lg:col-span-3"
        >
          <span className="font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
            Browse all 18 locations &rarr;
          </span>
        </Link>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>How long does it take to get rid of rats?</h3>
      <p>
        With professional treatment, a typical rat infestation can be resolved within <strong>2 to 4 weeks</strong>, usually involving 3 scheduled visits. The first visit covers the survey, identification of access points, and initial treatment placement. The second visit (usually 5 to 7 days later) assesses the level of take-up and replenishes bait or resets traps. The third visit confirms that activity has ceased and completes any proofing work.
      </p>
      <p>
        DIY treatment can take longer, particularly if entry points are not identified and sealed. If you are trapping rats but the population does not seem to be declining after 2 weeks, the infestation is likely larger than traps alone can manage, and it is time to call a professional.
      </p>

      <h3>Can I get rid of rats without poison?</h3>
      <p>
        Yes, absolutely. Snap traps, electronic traps, and thorough proofing are all effective methods that do not involve rodenticide. In fact, there is a growing movement within the UK pest control industry towards <strong>poison-free treatments</strong>, driven by concerns about secondary poisoning of wildlife &mdash; particularly birds of prey such as barn owls and red kites, which have been found with high levels of anticoagulant rodenticides in their systems.
      </p>
      <p>
        Many professional pest controllers now offer integrated pest management (IPM) approaches that prioritise trapping and proofing over routine poison use. If this is important to you, ask potential providers whether they offer non-toxic treatment options before booking.
      </p>

      <h3>Are rats more common in winter?</h3>
      <p>
        Yes. Rat activity inside homes and other buildings increases significantly between <strong>October and March</strong> as falling temperatures drive rats to seek warmth, shelter, and reliable food sources indoors. This is when most homeowners first become aware of a rat problem &mdash; the scratching in the loft at 2am, the droppings behind the cooker, the chewed food packaging in the garage.
      </p>
      <p>
        However, rats can be a year-round problem, especially in urban areas where food waste is abundant and harbourage is plentiful. The best time to carry out proofing work is in the late summer or early autumn, before rats start looking for winter shelter.
      </p>

      <h3>Do rats come back after treatment?</h3>
      <p>
        They can, and they often do if the property has not been properly proofed. Killing the existing rats without sealing the entry points they used is a short-term fix. New rats from the surrounding area &mdash; the garden, neighbouring properties, the sewer system &mdash; will eventually find the same access routes and move in. This is why <strong>proofing is the single most important step</strong> in any rat treatment programme. A good pest controller will always include proofing as part of their service, or at minimum will provide a report of recommended proofing work for you to carry out or commission.
      </p>

      <h3>Is one rat a sign of an infestation?</h3>
      <p>
        In most cases, yes. Rats are social animals that live in colonies. They do not typically operate alone. If you see one rat &mdash; particularly inside your home &mdash; there are almost certainly more nearby. A lone rat sighting during daylight hours is an especially strong indicator of a significant infestation, because it suggests that the colony is large enough that some individuals are being displaced from preferred feeding and resting areas.
      </p>
      <p>
        Even if you have genuinely encountered a single, solitary rat (which does occasionally happen &mdash; a young rat dispersing from its birth colony, for example), it makes sense to treat it as the potential beginning of an infestation rather than an isolated incident. Set traps, check for droppings and other signs, and inspect for possible entry points. Early action is always easier and cheaper than dealing with an established population.
      </p>
    </GuideLayout>
  );
}
