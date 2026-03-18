import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Moths: The Complete UK Guide (2026) | PestPro Index',
    description:
      'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, prevention tips, and costs.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-moths',
    },
    openGraph: {
      title: 'How to Get Rid of Moths: The Complete UK Guide (2026) | PestPro Index',
      description:
        'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, prevention tips, and costs.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-moths',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Moths: The Complete UK Guide (2026)',
  description:
    'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, prevention tips, and costs.',
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-moths',
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
      name: 'How to Get Rid of Moths',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-moths',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes moths in the house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clothes moths are attracted to natural animal fibres such as wool, cashmere, silk, and fur. They are drawn to items that are soiled with sweat, food stains, or body oils, as the larvae feed on the keratin protein in animal fibres and the organic residue provides additional nutrition. Moths can enter your home through open windows, on second-hand clothing or furniture, or in contaminated food packaging. Pantry moths arrive almost exclusively via infested food products such as dried fruit, cereals, flour, nuts, and pet food purchased from shops.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I have clothes moths or pantry moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clothes moths (Tineola bisselliella) are small, golden-buff coloured moths approximately 6 to 8 millimetres long that avoid light and scuttle rather than fly. You will find them in wardrobes, drawers, and near carpets. Pantry moths (Plodia interpunctella, the Indian meal moth) are slightly larger at 8 to 10 millimetres with distinctive two-toned wings — copper-brown at the tips and pale grey near the body. They are found in kitchens near food storage areas and are more willing to fly towards light. The key indicator is location: damage to clothing and textiles points to clothes moths, while webbing or larvae in food cupboards indicates pantry moths.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pheromone traps kill moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pheromone traps do not kill moth infestations on their own. They use a synthetic version of the female moth pheromone to attract and trap adult male moths on a sticky pad, which prevents them from mating and helps reduce the next generation. However, pheromone traps do not catch female moths or kill larvae, which are the life stage that causes all the damage. Pheromone traps are best used as a monitoring tool to detect infestations early and to assess the severity of a problem. They should be combined with other treatments such as thorough cleaning, laundering, moth killer sprays, and cedar or lavender deterrents for effective control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can moths damage carpets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The case-bearing clothes moth (Tinea pellionella) and the common clothes moth (Tineola bisselliella) both feed on wool carpets and rugs. Carpet moth larvae eat the wool fibres from the underside of the carpet, creating bare patches that are often first noticed in areas hidden from view — under furniture, along skirting boards, and in corners. A severe carpet moth infestation can cause extensive and expensive damage. Wool-blend carpets with as little as 20 percent wool content can be attacked. Synthetic carpets are not at risk from moth damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does freezing kill moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Freezing is an effective, chemical-free method for killing moth eggs, larvae, and adults in clothing and textiles. Seal the affected items in a plastic bag, removing as much air as possible, and place them in a domestic freezer at minus 18 degrees Celsius or below for a minimum of 72 hours (three full days). The extreme cold kills all life stages of the moth. After removing from the freezer, allow items to return to room temperature before unpacking, as condensation can form on cold fabrics. This method is particularly useful for delicate items that cannot be washed at high temperatures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do cedar balls and lavender actually work against moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar and lavender have some moth-deterrent properties but their effectiveness is limited. Fresh cedar wood releases volatile oils that can repel adult moths and may kill very young larvae in an enclosed space, but the oils diminish over time and the cedar must be sanded or refreshed regularly to remain effective. Lavender sachets produce a scent that adult moths find unappealing, but lavender does not kill moth eggs or larvae. Neither cedar nor lavender is sufficient to treat an active infestation on its own. They work best as a preventive measure in combination with good storage practices — clean clothes stored in sealed garment bags with cedar or lavender inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get rid of moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A clothes moth infestation typically takes 3 to 6 months to fully resolve with consistent DIY treatment, because the moth life cycle from egg to adult takes approximately 6 to 12 weeks depending on temperature, and you need to break this cycle completely. You may see results within the first few weeks as adult moths are trapped and larvae are killed through cleaning and treatment, but it is important to continue monitoring and treating for at least three to four months to catch any eggs or pupae that survive initial treatment. Professional fumigation can resolve an infestation more quickly, often within one to two treatments over a four to six week period.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I throw away clothes with moth holes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. If the damage is limited to a few small holes, the garment can usually be repaired by a tailor or specialist textile repairer. Knitwear can often be invisibly mended. The important thing is to kill any remaining eggs or larvae on the garment before returning it to your wardrobe — either by washing at 60 degrees Celsius, dry cleaning, or freezing for 72 hours at minus 18 degrees Celsius. Only discard garments if the damage is too extensive to repair or if the item is heavily contaminated with larvae and frass.',
      },
    },
  ],
};

const tocItems = [
  { id: 'signs', title: 'How to Tell If You Have Moths' },
  { id: 'types', title: 'Clothes Moths vs Carpet Moths vs Pantry Moths' },
  { id: 'why-problem', title: 'Why Moths Are a Problem' },
  { id: 'diy-methods', title: 'DIY Moth Control Methods' },
  { id: 'clothes-moth-treatment', title: 'How to Treat a Clothes Moth Infestation' },
  { id: 'pantry-moth-treatment', title: 'How to Treat a Pantry Moth Infestation' },
  { id: 'moth-proofing', title: 'How to Moth-Proof Your Home' },
  { id: 'when-to-call', title: 'When to Call a Professional' },
  { id: 'costs', title: 'How Much Does Moth Control Cost?' },
  { id: 'moth-control-by-city', title: 'Moth Control by City' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfMothsPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Moths: The Complete UK Guide (2026)"
      subtitle="A practical guide to identifying clothes moths, carpet moths, and pantry moths, eliminating infestations with DIY methods, and knowing when to call a professional"
      lastUpdated="March 2026"
      readingTime="16 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Silverfish: Complete UK Guide', href: '/guides/how-to-get-rid-of-silverfish' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Woodworm Treatment: Complete UK Guide', href: '/guides/woodworm-treatment' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
      ]}
      relatedProducts={[
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Woodworm Treatments UK 2026', href: '/best/woodworm-treatments' },
        { title: 'Best Silverfish Treatments UK 2026', href: '/best/silverfish-treatments' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Commercial Fly Killers UK 2026', href: '/best/commercial-fly-killers' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Tell If You Have Moths */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="signs">How to Tell If You Have Moths</h2>

      <p>
        Moth infestations are often well established before homeowners notice them. Unlike most household pests, the adult moths you occasionally see fluttering around your home are not the ones causing damage &mdash; it is their <strong>larvae</strong> that feed on your clothes, carpets, and food. By the time you spot an adult moth, the larvae may have been quietly feeding for weeks or months. Knowing the early signs allows you to act before significant damage occurs.
      </p>

      <h3>Small Holes in Clothing</h3>
      <p>
        The most common first sign of a clothes moth infestation is discovering small, irregular holes in woollen jumpers, cashmere scarves, silk garments, or other natural fibre clothing. The holes are typically <strong>1 to 5 millimetres in diameter</strong> and have rough, uneven edges. They often appear on garments that have been stored unworn for several weeks or months &mdash; the back of a wardrobe, a seasonal storage box, or a rarely opened drawer. Clothes moth larvae prefer soiled fabrics, so items with perspiration stains, food splashes, or body oils are attacked first.
      </p>

      <h3>Bare Patches on Carpets</h3>
      <p>
        Carpet moth larvae eat wool carpet fibres from the underside, creating <strong>threadbare patches</strong> that are often first noticed in areas hidden from view and foot traffic. Check along skirting boards, under heavy furniture, behind curtains, and in the corners of rooms. Carpet moths thrive in undisturbed areas where they can feed without being disturbed by vacuuming. If you lift the edge of a carpet and find bare backing with the wool pile eaten away, carpet moths are the most likely cause.
      </p>

      <h3>Silken Tubes and Cases</h3>
      <p>
        The case-bearing clothes moth (<em>Tinea pellionella</em>) constructs a small <strong>silken tube or case</strong> around itself as it feeds. These tubes are approximately 5 to 10 millimetres long, open at both ends, and often incorporate fibres from whatever material the larva is feeding on, giving them a camouflaged appearance. Finding these tiny silk cases on clothing, in carpet pile, or on upholstered furniture is a strong indication of an active moth infestation.
      </p>

      <h3>Webbing on Clothes or in Wardrobes</h3>
      <p>
        The common clothes moth (<em>Tineola bisselliella</em>), also known as the webbing clothes moth, spins a loose <strong>web of silk</strong> across the surface of fabrics as it feeds. You may notice fine silken webbing on the surface of garments, particularly in the folds of stored clothing. In severe infestations, webbing can be visible across the bottom of wardrobes and inside drawers.
      </p>

      <h3>Moth Larvae</h3>
      <p>
        Clothes moth larvae are small, cream-coloured caterpillars approximately <strong>6 to 10 millimetres long</strong>. They avoid light and are most often found in dark, undisturbed areas &mdash; in the folds of stored garments, under the edges of carpets, and inside drawers. If you see small white or cream larvae on your clothing or carpets, you have an active infestation that requires immediate treatment.
      </p>

      <h3>Adult Moths</h3>
      <p>
        Adult clothes moths are small, <strong>golden-buff coloured moths approximately 6 to 8 millimetres long</strong> with narrow, fringed wings. Unlike most moths, they actively <strong>avoid light</strong> and tend to scuttle or run along surfaces rather than fly. If you disturb a clothes moth in a wardrobe, it will typically run into a dark corner rather than fly towards a window. Seeing adult moths in or near your wardrobe, in drawers, or near carpets confirms an active breeding population.
      </p>

      <h3>Webbing or Larvae in Food Cupboards</h3>
      <p>
        If you find small moths flying in your kitchen, sticky webbing inside food packaging, or small caterpillars crawling across the ceiling near your food cupboards, you likely have <strong>pantry moths</strong> (Indian meal moths). The larvae spin silken webbing through stored food products and leave behind frass (droppings) that contaminate food. Check all dried food products including flour, cereals, rice, pasta, dried fruit, nuts, chocolate, spices, and pet food.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Do not ignore a single moth.</strong> A single adult clothes moth can lay <strong>50 to 100 eggs</strong> over its short lifetime. If you see one moth in your wardrobe, there are almost certainly eggs and larvae already present. Act immediately &mdash; inspect all natural fibre garments, vacuum thoroughly, and begin treatment.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Clothes Moths vs Carpet Moths vs Pantry Moths */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="types">Clothes Moths vs Carpet Moths vs Pantry Moths</h2>

      <p>
        Understanding which type of moth you are dealing with is essential because the treatment approach differs significantly. The UK has three main categories of problem moths found in homes: clothes moths, carpet moths, and pantry moths. Clothes moths and carpet moths are actually the same species behaving differently depending on the food source, while pantry moths are an entirely different family.
      </p>

      <h3>Common Clothes Moth (<em>Tineola bisselliella</em>)</h3>
      <p>
        The common clothes moth, also called the webbing clothes moth, is the most widespread textile pest in the UK. Adults are <strong>6 to 8 millimetres long</strong>, uniformly golden-buff in colour with no markings on their wings, and have a distinctive tuft of reddish-gold hair on the head. They strongly avoid light and prefer to run or hop rather than fly. The larvae are cream-white with a brown head capsule and spin a loose web of silk as they feed. They attack <strong>wool, cashmere, silk, fur, feathers</strong>, and any fabric containing animal-derived fibres. A single generation takes <strong>6 to 12 weeks</strong> in a warm home, but the larvae can survive in cooler conditions for much longer, sometimes taking up to two years to complete development. In centrally heated UK homes, clothes moths can breed continuously throughout the year with no dormant period.
      </p>

      <h3>Case-Bearing Clothes Moth (<em>Tinea pellionella</em>)</h3>
      <p>
        The case-bearing clothes moth is the second most common textile pest in UK homes. Adults are slightly smaller than the common clothes moth at <strong>5 to 7 millimetres long</strong> and have <strong>three dark spots</strong> on each wing, though these can be faint. The key distinguishing feature is the larval behaviour: each larva constructs a portable <strong>silken case</strong> that it drags around as it feeds. The case is open at both ends and is often camouflaged with fibres from the material being consumed. The case-bearing moth attacks the same range of natural fibres as the common clothes moth and is equally destructive. It is also the species most commonly associated with damage to wool carpets.
      </p>

      <h3>Carpet Moths</h3>
      <p>
        &ldquo;Carpet moth&rdquo; is not a separate species but rather a term used to describe clothes moths &mdash; typically the case-bearing clothes moth &mdash; when they infest <strong>wool carpets and rugs</strong> rather than stored clothing. The larvae feed on the wool pile from the underside of the carpet, and carpet moth infestations tend to be concentrated in <strong>undisturbed areas</strong>: under heavy furniture, along skirting boards, behind doors, and in seldom-used rooms. Carpet moth damage can be extensive and expensive to repair. Carpets with as little as <strong>20 percent wool content</strong> can be attacked; fully synthetic carpets are not at risk.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Why carpet moths are harder to treat:</strong> Unlike clothes in a wardrobe, wall-to-wall carpets cannot be easily removed for washing or freezing. Larvae feed underneath the carpet where sprays and vacuuming cannot easily reach them. Professional treatment with residual insecticide applied to the carpet backing is often the most effective approach for carpet moth infestations.</p>
        </Callout>
      </div>

      <h3>Indian Meal Moth (<em>Plodia interpunctella</em>) &mdash; Pantry Moth</h3>
      <p>
        The Indian meal moth is the most common stored-product moth pest in UK homes. Adults are <strong>8 to 10 millimetres long</strong> with distinctive <strong>two-toned wings</strong>: the outer half is coppery-brown or bronze, while the inner half near the body is pale grey or cream. Unlike clothes moths, pantry moths are <strong>attracted to light</strong> and fly readily, so you may see them fluttering around the kitchen in the evening. The larvae are cream or pinkish caterpillars that feed on a wide range of stored dried foods including <strong>flour, cereals, rice, pasta, dried fruit, nuts, chocolate, spices, birdseed, and pet food</strong>. The larvae spin dense, sticky webbing through infested food and leave behind frass (droppings) and shed larval skins. An infestation typically begins when a moth-infested food product is brought home from a shop.
      </p>

      <h3>Brown House Moth (<em>Hofmannophila pseudospretella</em>)</h3>
      <p>
        The brown house moth is less commonly encountered than the species above but is present in UK homes. Adults are <strong>8 to 14 millimetres long</strong> with brown wings flecked with darker spots. The larvae are scavengers that feed on a wide range of materials including wool, fur, feathers, leather, dried food, and even cork and paper. Brown house moth larvae are particularly associated with <strong>bird nests in lofts</strong>, where they feed on feathers and debris. If you have birds nesting under your eaves or in your roof space, brown house moth larvae may be present in the loft and occasionally find their way into the living areas of the home.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Moths Are a Problem */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="why-problem">Why Moths Are a Problem</h2>

      <p>
        Moths are not a health hazard in the way that rats, cockroaches, or bed bugs are &mdash; they do not bite, sting, or transmit diseases. However, the <strong>financial damage</strong> they cause can be substantial, and infestations cause considerable distress.
      </p>

      <h3>Damage to Clothing and Textiles</h3>
      <p>
        Clothes moth larvae feed on <strong>keratin</strong>, the protein found in animal-derived fibres. They will attack wool suits, cashmere jumpers, silk blouses, fur coats, feather-filled pillows and duvets, and any fabric that contains animal fibres. The larvae eat irregular holes through the fabric, and a severe infestation can destroy an entire wardrobe of winter clothing. High-value items such as cashmere, designer knitwear, vintage clothing, and wedding dresses are particularly devastating to lose. A single moth infestation can cause <strong>hundreds or even thousands of pounds</strong> worth of damage to a clothing collection.
      </p>

      <h3>Carpet Damage</h3>
      <p>
        Wool carpet replacement is one of the most expensive consequences of a moth infestation. Carpet moth larvae can eat through the pile of a wool carpet over several months, leaving large <strong>bare patches</strong> that cannot be repaired. Replacing a wool carpet in a single room can cost <strong>&pound;500 to &pound;2,000 or more</strong> depending on the size and quality. In listed buildings, period properties, and homes with fitted heritage carpets, the loss can be even greater.
      </p>

      <h3>Food Contamination</h3>
      <p>
        Pantry moth larvae contaminate stored food with <strong>webbing, frass (droppings), and shed skins</strong>. Infested food is unfit for consumption and must be discarded. A severe pantry moth infestation can affect the entire contents of a food cupboard, requiring you to throw away and replace all dried goods. While pantry moths are not known to transmit disease, consuming food contaminated with larvae, webbing, or frass is unpleasant and unhygienic.
      </p>

      <div className="not-prose">
        <StatCallout value="&pound;500&ndash;&pound;2,000+" label="typical cost to replace a wool carpet destroyed by moth larvae" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Moth Control Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">DIY Moth Control Methods</h2>

      <p>
        Most moth infestations in UK homes can be resolved with thorough, persistent DIY treatment. The key to success is understanding that you are fighting a <strong>lifecycle</strong>, not just the adults you can see. Moth eggs take 4 to 10 days to hatch, larvae feed for 6 to 12 weeks (longer in cool conditions), pupae develop over 1 to 4 weeks, and then adults emerge to mate and lay more eggs. You must break this cycle at every stage. A single round of treatment is rarely enough &mdash; consistent effort over <strong>3 to 6 months</strong> is typically needed.
      </p>

      <h3>Pheromone Traps</h3>
      <p>
        Pheromone traps are sticky traps baited with a synthetic version of the female clothes moth pheromone. They attract and trap <strong>adult male moths</strong>, preventing them from mating with females and thereby reducing the next generation of larvae. Pheromone traps are the single best <strong>monitoring tool</strong> available &mdash; they tell you whether moths are present, where they are most concentrated, and whether your treatment efforts are working. Place traps in wardrobes, near carpets, and in rooms where you have seen signs of moth activity. Check them weekly. However, pheromone traps alone will not eliminate an infestation because they do not catch females or kill larvae. They must be used in combination with other methods.
      </p>

      <h3>Thorough Vacuuming</h3>
      <p>
        Regular, thorough vacuuming is one of the most effective weapons against carpet moths and clothes moths alike. Vacuum <strong>every corner, edge, and hidden area</strong> of your carpeted rooms: along skirting boards, under furniture, behind curtains, and in the corners of rooms where dust and fluff accumulate. Move furniture to vacuum underneath it. Vacuum inside wardrobes, in the bottom of drawers, and on shelves where garments are stored. The vacuum physically removes eggs, larvae, and pupae from carpets and fabrics. For carpets, use the <strong>beater bar</strong> attachment to agitate the pile and dislodge larvae from deep within. Empty the vacuum bag or canister into a sealed bag and dispose of it in an outdoor bin immediately after each session.
      </p>

      <h3>Washing and Dry Cleaning</h3>
      <p>
        Washing garments at <strong>60&deg;C or above</strong> kills moth eggs, larvae, and adults. This is the most reliable method for items that can tolerate high temperatures. For delicate items that cannot be machine washed at 60&deg;C &mdash; cashmere, silk, tailored wool garments, and embellished items &mdash; <strong>professional dry cleaning</strong> is the recommended alternative. The dry cleaning solvent kills all moth life stages. After cleaning, store items in sealed garment bags or vacuum storage bags to prevent re-infestation. Items that have been dry cleaned should not be returned to an infested wardrobe until the wardrobe itself has been treated.
      </p>

      <h3>Freezing</h3>
      <p>
        Freezing is an effective, chemical-free method for killing moths in clothing and small textiles. Seal affected items in a <strong>plastic bag</strong>, removing as much air as possible, and place them in a domestic freezer at <strong>&minus;18&deg;C or below</strong> for a minimum of <strong>72 hours</strong> (three full days). The extreme cold kills eggs, larvae, pupae, and adults. After removing from the freezer, allow items to return to room temperature slowly before unpacking, as rapid temperature changes can cause condensation on the fabric. Freezing is particularly useful for delicate items such as vintage textiles, embroidered pieces, and items with trimmings that might be damaged by washing or dry cleaning.
      </p>

      <h3>Moth Killer Sprays</h3>
      <p>
        Moth killer sprays containing insecticides such as <strong>permethrin or transfluthrin</strong> kill adult moths, larvae, and eggs on contact and provide a residual barrier that continues to kill for several weeks after application. Spray the interior of wardrobes, the underside of shelves, the bottom of drawers, and the surface of carpets &mdash; particularly along edges and under furniture. Allow the spray to dry fully before returning garments or walking on treated carpets. Moth killer sprays are available from most supermarkets and hardware shops. Acana, Zero In, and Rentokil are widely available UK brands.
      </p>

      <h3>Cedar and Lavender</h3>
      <p>
        Cedar wood releases volatile oils that can <strong>repel adult moths</strong> and may kill very young larvae in an enclosed space. Cedar rings, blocks, and balls can be placed in wardrobes and drawers. However, the oils diminish over time, and the cedar must be <strong>sanded or refreshed</strong> every few months to remain effective. Lavender sachets produce a scent that adult moths find unappealing. Neither cedar nor lavender is sufficient to treat an active infestation, but they work well as a <strong>preventive measure</strong> in combination with clean storage practices.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Combine methods for best results.</strong> The most effective DIY approach uses multiple methods simultaneously: pheromone traps to monitor, vacuuming to remove larvae, washing or freezing to treat garments, and moth killer spray to treat wardrobes and carpets. No single method is sufficient on its own. Consistency over 3 to 6 months is key.</p>
        </Callout>
      </div>

      <p>
        For a detailed comparison of the most effective moth control products available in the UK, including hanging moth killers, pheromone traps, carpet sprays, and sachets, see our <Link href="/best/moth-killers" className="text-blue-600 hover:underline font-medium">Best Moth Killers UK 2026</Link> review.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for moth killer products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best moth killers, pheromone traps, sprays, and sachets available in the UK.</p>
        <a
          href="/best/moth-killers"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Moth Killers UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Treat a Clothes Moth Infestation */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="clothes-moth-treatment">How to Treat a Clothes Moth Infestation</h2>

      <p>
        If you have confirmed a clothes moth infestation, follow this step-by-step treatment plan. The process requires time and thoroughness, but it is achievable as a DIY project for most domestic infestations.
      </p>

      <h3>Step 1: Empty Your Wardrobe Completely</h3>
      <p>
        Remove every garment, shoe, bag, scarf, and accessory from the affected wardrobe, drawers, and any nearby storage areas. Lay everything out on a clean surface in a well-lit room so you can inspect each item individually. This is the most labour-intensive step, but it is essential &mdash; you cannot treat what you cannot see.
      </p>

      <h3>Step 2: Inspect All Garments</h3>
      <p>
        Examine every item for signs of moth damage: holes, webbing, larvae, silken cases, or frass. Pay particular attention to <strong>wool, cashmere, silk, and fur</strong> items. Check the seams, folds, collars, and underarms of garments, as larvae prefer dark, concealed areas. Separate items into three categories: items that need washing or dry cleaning, items that need freezing, and items that are beyond repair.
      </p>

      <h3>Step 3: Launder, Dry Clean, or Freeze Everything</h3>
      <p>
        Every garment from the infested wardrobe must be treated, even if it shows no visible damage &mdash; moth eggs are microscopic and invisible to the naked eye. Wash items at <strong>60&deg;C</strong> where the care label permits. Dry clean delicate items. Freeze items that cannot be washed or dry cleaned (sealed in plastic bags at &minus;18&deg;C for 72 hours minimum). Do not return any untreated garment to the wardrobe.
      </p>

      <h3>Step 4: Vacuum and Spray the Empty Wardrobe</h3>
      <p>
        With the wardrobe empty, vacuum the entire interior thoroughly: floor, shelves, hanging rail, corners, and crevices. Use the crevice nozzle attachment to reach into joins and gaps where eggs and pupae may be hiding. After vacuuming, spray the interior of the wardrobe with a <strong>moth killer spray</strong>. Pay close attention to the back corners, shelf undersides, and the floor of the wardrobe. Allow the spray to dry completely before returning any garments.
      </p>

      <h3>Step 5: Set Up Pheromone Traps</h3>
      <p>
        Place at least one pheromone trap in each affected wardrobe and room. These will monitor for any remaining adult males and help you track whether the infestation is declining. Check traps weekly and replace them every <strong>8 to 12 weeks</strong> as the pheromone fades. If traps continue catching moths after 8 weeks, larvae are still present and you need to repeat the cleaning and treatment process.
      </p>

      <h3>Step 6: Maintain Vigilance for 3 to 6 Months</h3>
      <p>
        The moth life cycle means that eggs laid before your treatment may still hatch over the coming weeks. Continue vacuuming weekly, checking pheromone traps, and inspecting garments for new damage. If you see new moths on the traps or new holes in clothing, repeat the spray treatment and consider whether any untreated items may have reintroduced the problem.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Treat a Pantry Moth Infestation */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="pantry-moth-treatment">How to Treat a Pantry Moth Infestation</h2>

      <p>
        Pantry moth treatment is more straightforward than clothes moth treatment because the source is always a food product. The goal is to find and remove the infested food, then clean the cupboard thoroughly to eliminate any eggs or larvae left behind.
      </p>

      <h3>Step 1: Find the Source</h3>
      <p>
        Inspect every dried food product in your kitchen cupboards. Open packets of flour, cereals, rice, pasta, dried fruit, nuts, seeds, chocolate, spices, stock cubes, tea bags, birdseed, and pet food. Look for <strong>webbing, small caterpillars, and frass</strong> inside the packaging. The source is usually a product that has been open for some time, but moth larvae can chew through thin cardboard and plastic packaging to spread to adjacent products. Check everything, including unopened items with damaged packaging.
      </p>

      <h3>Step 2: Discard All Infested Food</h3>
      <p>
        Throw away every contaminated food product. Seal it in a plastic bag before placing it in the outdoor bin to prevent re-infestation. When in doubt, throw it out &mdash; moth eggs are invisible to the naked eye, and apparently uncontaminated food may already contain eggs. It is better to discard <strong>&pound;20 to &pound;50 worth of dried food</strong> than to leave a contaminated product that restarts the infestation.
      </p>

      <h3>Step 3: Clean the Cupboard Thoroughly</h3>
      <p>
        Empty the cupboard completely and vacuum every surface including shelves, corners, shelf supports, hinges, and the back wall. Pantry moth larvae often <strong>pupate in crevices</strong> away from the food source, so check the cupboard joints and any cracks in the woodwork. After vacuuming, wipe down all surfaces with hot, soapy water or a vinegar and water solution. Allow to dry fully.
      </p>

      <h3>Step 4: Store Food in Sealed Containers</h3>
      <p>
        When restocking, transfer all dried food into <strong>airtight glass, metal, or heavy-duty plastic containers</strong> with secure lids. Pantry moth larvae can chew through thin plastic bags and cardboard boxes, so the original packaging is not sufficient protection. Airtight containers serve a dual purpose: they prevent moths from accessing the food, and if a contaminated product does enter your kitchen, the infestation is contained within a single sealed container rather than spreading through your entire cupboard.
      </p>

      <h3>Step 5: Set Up Pantry Moth Traps</h3>
      <p>
        Pantry moth pheromone traps work on the same principle as clothes moth traps but use a pheromone specific to <strong><em>Plodia interpunctella</em></strong>. Place one or two traps in the affected kitchen cupboard to monitor for any remaining adult moths. If traps continue catching moths after three to four weeks, there may be a hidden food source or pupae that you have missed &mdash; repeat the inspection and cleaning process.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Freeze new dried goods as a precaution.</strong> If you have experienced a pantry moth infestation, consider freezing all newly purchased dried food products for 72 hours at &minus;18&deg;C before placing them in your cupboard. This kills any moth eggs or larvae that may be present in the food from the shop, preventing re-infestation.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Moth-Proof Your Home */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="moth-proofing">How to Moth-Proof Your Home</h2>

      <p>
        Prevention is far easier and cheaper than treating an established moth infestation. Once you have eliminated moths from your home, these practices will help prevent their return.
      </p>

      <h3>Wash or Clean Clothes Before Storing</h3>
      <p>
        Moth larvae are attracted to <strong>soiled clothing</strong> &mdash; items stained with sweat, body oils, food, or drink. Always wash or dry clean garments before storing them for the season. Even if a garment looks clean, invisible perspiration and skin oils make it far more attractive to moths. This single habit is the most effective preventive measure against clothes moths.
      </p>

      <h3>Use Sealed Garment Bags</h3>
      <p>
        Store seasonal clothing in <strong>sealed, zipped garment bags</strong> or vacuum-sealed storage bags. This creates a physical barrier that prevents adult moths from reaching the garments to lay eggs. Cotton or canvas garment bags with zip closures are ideal for hanging items. For folded knitwear and off-season clothing, vacuum-sealed compression bags are effective and space-efficient. Ensure items are clean before sealing.
      </p>

      <h3>Regular Vacuuming</h3>
      <p>
        Vacuum carpets, rugs, and upholstered furniture <strong>weekly</strong>, paying particular attention to edges, corners, and areas beneath furniture. Carpet moth larvae thrive in undisturbed areas where fluff, hair, and pet dander accumulate. Regular, thorough vacuuming disturbs potential feeding sites and physically removes eggs and young larvae before they can establish. Use the beater bar attachment on wool carpets to agitate the pile.
      </p>

      <h3>Rotate and Disturb Stored Items</h3>
      <p>
        Moths prefer <strong>undisturbed environments</strong>. Periodically take out stored clothing, shake it, and refold or rehang it. Move furniture occasionally to expose the carpet beneath it. Open drawers and wardrobes to let in light and air. This regular disturbance makes your home a less hospitable environment for moth larvae and allows you to spot early signs of a problem.
      </p>

      <h3>Cedar and Lavender as Deterrents</h3>
      <p>
        Place <strong>cedar rings, blocks, or balls</strong> in wardrobes and drawers. The volatile oils in cedar deter adult moths from entering enclosed spaces to lay eggs. Sand the cedar every two to three months to refresh the oils, or use commercial cedar oil spray. <strong>Lavender sachets</strong> provide a pleasant scent that adult moths dislike. Replace lavender sachets every three to four months as the scent fades. Remember that cedar and lavender are deterrents, not killers &mdash; they reduce the risk of infestation but will not stop one that has already started.
      </p>

      <h3>Seal Food in Airtight Containers</h3>
      <p>
        Store all dried food in <strong>airtight glass, metal, or heavy-duty plastic containers</strong>. This prevents pantry moths from accessing food and limits the spread of any infestation that does occur. Pay particular attention to items bought from bulk bins or market stalls, which are more likely to harbour moth eggs than factory-sealed products.
      </p>

      <h3>Check Second-Hand Purchases</h3>
      <p>
        Clothes moths are frequently introduced to homes via <strong>second-hand clothing, vintage textiles, antique furniture, and charity shop finds</strong>. Always inspect second-hand woollen, silk, or fur items carefully before bringing them into your home. Wash, dry clean, or freeze any second-hand textiles before storing them alongside your existing wardrobe. Upholstered second-hand furniture should be thoroughly vacuumed and ideally treated with moth killer spray before being placed in your home.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call">When to Call a Professional</h2>

      <p>
        Most domestic moth infestations can be resolved with the DIY methods described above, provided you are thorough and persistent. However, there are situations where professional pest control is the better option.
      </p>

      <h3>Severe Carpet Moth Infestations</h3>
      <p>
        If carpet moths have caused visible damage across large areas of fitted carpet, professional treatment is strongly recommended. A pest control technician can apply a <strong>residual insecticide</strong> to the carpet surface and underside, treat the carpet edges and underlay, and apply dust into the gaps between the carpet and the skirting boards where larvae and pupae concentrate. Professional-grade products provide a longer-lasting residual barrier than over-the-counter sprays. The technician may also recommend lifting sections of carpet to treat the underlay and floor beneath.
      </p>

      <h3>Recurring Infestations</h3>
      <p>
        If you have treated a moth infestation yourself but it keeps returning despite thorough cleaning and treatment, a professional survey can identify the <strong>source or harbourage</strong> that you may be missing. Common hidden sources include old bird nests in the loft (a favourite breeding site for brown house moths and case-bearing clothes moths), felt insulation, disused chimney breasts, and forgotten textiles in storage areas such as lofts, cellars, and under-stairs cupboards.
      </p>

      <h3>Large Properties and Valuable Collections</h3>
      <p>
        For large properties with extensive wool carpeting, or homes containing <strong>valuable textile collections</strong> such as vintage clothing, antique rugs, tapestries, or museum-quality pieces, professional moth treatment is a sensible investment. Some pest control companies offer specialist textile pest services that include <strong>fumigation, heat treatment, and ongoing monitoring programmes</strong> designed to protect high-value collections.
      </p>

      <h3>Commercial Premises</h3>
      <p>
        Clothes moths are a significant pest in the hospitality industry (hotels, bed and breakfasts), the fashion industry (retail stores, warehouses), museums, and historic properties. Commercial infestations require professional treatment with documented records and ongoing monitoring contracts. Food businesses affected by pantry moths require professional pest control to comply with food safety regulations.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>Professional moth treatment typically costs <strong>&pound;100 to &pound;250</strong> for a standard domestic property, depending on the size of the area treated and the severity of the infestation. Fumigation for severe or widespread infestations can cost <strong>&pound;300 to &pound;600+</strong>. Ongoing monitoring contracts for commercial premises or large residences typically cost <strong>&pound;200 to &pound;500 per year</strong>.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="&pound;100&ndash;&pound;250" label="typical cost for professional moth treatment in a UK home" />
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Moth Problem Beyond DIY?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose">
        <Callout type="tip">
          <p>Extensive moth damage to fitted carpets may require replacement. If your kitchen is affected during pest treatment, <a href="https://findakitchen.co.uk" target="_blank" rel="noopener" className="underline font-medium">FindAKitchen</a> helps you find temporary kitchen hire while the work is carried out.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How Much Does Moth Control Cost? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">How Much Does Moth Control Cost in the UK?</h2>

      <p>
        The cost of moth control varies depending on whether you take the DIY route or call a professional, and on the severity and type of infestation.
      </p>

      <h3>DIY Treatment Costs</h3>
      <p>
        A comprehensive DIY moth treatment programme typically costs <strong>&pound;30 to &pound;80</strong> in total. This includes pheromone traps (&pound;8 to &pound;15 for a pack), moth killer spray (&pound;5 to &pound;12), hanging moth killers or sachets (&pound;5 to &pound;10), and cedar products (&pound;8 to &pound;15). Dry cleaning costs for affected garments can add &pound;50 to &pound;200+ depending on the number and type of items. The main &ldquo;cost&rdquo; of DIY treatment is your time &mdash; emptying wardrobes, inspecting and treating every garment, and maintaining a consistent treatment regime over several months.
      </p>

      <h3>Professional Treatment Costs</h3>
      <p>
        Professional moth treatment for a <strong>standard domestic property</strong> typically costs <strong>&pound;100 to &pound;250</strong> for an initial treatment. This usually includes a survey, insecticide application to affected areas, and advice on prevention. A follow-up visit four to six weeks later may be included in the price or charged separately at <strong>&pound;60 to &pound;100</strong>. For severe carpet moth infestations requiring extensive treatment of multiple rooms, costs can reach <strong>&pound;300 to &pound;600</strong>. Professional fumigation of a whole property for a severe, widespread infestation costs <strong>&pound;400 to &pound;800+</strong>.
      </p>

      <h3>Carpet Replacement Costs</h3>
      <p>
        If moth larvae have destroyed a wool carpet beyond repair, replacement costs can be substantial. A mid-range wool carpet costs approximately <strong>&pound;30 to &pound;60 per square metre</strong> supplied and fitted. For a typical 4m &times; 5m living room, that equates to <strong>&pound;600 to &pound;1,200</strong> for the carpet alone plus fitting charges. This is why early detection and prompt treatment are so important &mdash; catching a carpet moth infestation early can save hundreds of pounds in replacement costs.
      </p>

      <p>
        For a complete breakdown of pest control costs across all common UK pests, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Moth Control by City */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="moth-control-by-city">Moth Control by City</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find moth control specialists in your area.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/liverpool/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Liverpool
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/nottingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Nottingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/brighton/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Brighton
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/sheffield/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Sheffield
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/bradford/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bradford
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/newcastle/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Newcastle
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/cardiff/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Cardiff
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/leicester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leicester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/hampshire/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Hampshire
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/coventry/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Coventry
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find moth specialists &rarr;</span>
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

      <p>
        For a detailed breakdown of pest control costs across all common UK pests, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide. You might also find our other guides helpful: <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">how to get rid of rats</Link>, <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/wasp-nest-removal" className="text-blue-600 hover:underline font-medium">wasp nest removal</Link>, <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">how to get rid of bed bugs</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, and <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">how to get rid of ants</Link>. For product reviews, browse our <Link href="/best/moth-killers" className="text-blue-600 hover:underline font-medium">best moth killers</Link>, <Link href="/best/rat-traps" className="text-blue-600 hover:underline font-medium">best rat traps</Link>, <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">best mouse traps</Link>, <Link href="/best/wasp-killers" className="text-blue-600 hover:underline font-medium">best wasp killers</Link>, <Link href="/best/cockroach-killers" className="text-blue-600 hover:underline font-medium">best cockroach killers</Link>, and <Link href="/best/flea-treatments" className="text-blue-600 hover:underline font-medium">best flea treatments</Link> guides.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What causes moths in the house?</h3>
      <p>
        Clothes moths are attracted to <strong>natural animal fibres</strong> such as wool, cashmere, silk, and fur. They are drawn to items that are soiled with sweat, food stains, or body oils, as the larvae feed on the keratin protein in animal fibres and the organic residue provides additional nutrition. Moths can enter your home through open windows, on second-hand clothing or furniture, or in contaminated food packaging. Pantry moths arrive almost exclusively via <strong>infested food products</strong> such as dried fruit, cereals, flour, nuts, and pet food purchased from shops.
      </p>

      <h3>How do I know if I have clothes moths or pantry moths?</h3>
      <p>
        Clothes moths (<em>Tineola bisselliella</em>) are small, golden-buff coloured moths approximately 6 to 8 millimetres long that <strong>avoid light</strong> and scuttle rather than fly. You will find them in wardrobes, drawers, and near carpets. Pantry moths (<em>Plodia interpunctella</em>, the Indian meal moth) are slightly larger at 8 to 10 millimetres with distinctive <strong>two-toned wings</strong> &mdash; copper-brown at the tips and pale grey near the body. They are found in kitchens near food storage areas and are more willing to fly towards light. The key indicator is <strong>location</strong>: damage to clothing and textiles points to clothes moths, while webbing or larvae in food cupboards indicates pantry moths.
      </p>

      <h3>Do pheromone traps kill moths?</h3>
      <p>
        Pheromone traps do not kill moth infestations on their own. They use a synthetic version of the female moth pheromone to attract and trap <strong>adult male moths</strong> on a sticky pad, which prevents them from mating and helps reduce the next generation. However, pheromone traps do not catch female moths or kill larvae, which are the life stage that causes all the damage. Pheromone traps are best used as a <strong>monitoring tool</strong> to detect infestations early and to assess the severity of a problem. They should be combined with other treatments such as thorough cleaning, laundering, moth killer sprays, and cedar or lavender deterrents for effective control.
      </p>

      <h3>Can moths damage carpets?</h3>
      <p>
        Yes. The case-bearing clothes moth (<em>Tinea pellionella</em>) and the common clothes moth (<em>Tineola bisselliella</em>) both feed on <strong>wool carpets and rugs</strong>. Carpet moth larvae eat the wool fibres from the underside of the carpet, creating bare patches that are often first noticed in areas hidden from view &mdash; under furniture, along skirting boards, and in corners. A severe carpet moth infestation can cause extensive and expensive damage. Wool-blend carpets with as little as <strong>20 percent wool content</strong> can be attacked. Fully synthetic carpets are not at risk from moth damage.
      </p>

      <h3>Does freezing kill moths?</h3>
      <p>
        Yes. Freezing is an effective, chemical-free method for killing moth eggs, larvae, and adults in clothing and textiles. Seal the affected items in a plastic bag, removing as much air as possible, and place them in a domestic freezer at <strong>&minus;18&deg;C or below</strong> for a minimum of <strong>72 hours</strong> (three full days). The extreme cold kills all life stages of the moth. After removing from the freezer, allow items to return to room temperature before unpacking, as condensation can form on cold fabrics. This method is particularly useful for delicate items that cannot be washed at high temperatures.
      </p>

      <h3>Do cedar balls and lavender actually work against moths?</h3>
      <p>
        Cedar and lavender have some moth-deterrent properties but their effectiveness is <strong>limited</strong>. Fresh cedar wood releases volatile oils that can repel adult moths and may kill very young larvae in an enclosed space, but the oils diminish over time and the cedar must be sanded or refreshed regularly to remain effective. Lavender sachets produce a scent that adult moths find unappealing, but lavender does not kill moth eggs or larvae. Neither cedar nor lavender is sufficient to treat an active infestation on its own. They work best as a <strong>preventive measure</strong> in combination with good storage practices &mdash; clean clothes stored in sealed garment bags with cedar or lavender inside.
      </p>

      <h3>How long does it take to get rid of moths?</h3>
      <p>
        A clothes moth infestation typically takes <strong>3 to 6 months</strong> to fully resolve with consistent DIY treatment, because the moth life cycle from egg to adult takes approximately 6 to 12 weeks depending on temperature, and you need to break this cycle completely. You may see results within the first few weeks as adult moths are trapped and larvae are killed through cleaning and treatment, but it is important to continue monitoring and treating for at least three to four months to catch any eggs or pupae that survive initial treatment. Professional fumigation can resolve an infestation more quickly, often within one to two treatments over a four to six week period.
      </p>

      <h3>Should I throw away clothes with moth holes?</h3>
      <p>
        Not necessarily. If the damage is limited to a few small holes, the garment can usually be <strong>repaired by a tailor</strong> or specialist textile repairer. Knitwear can often be invisibly mended. The important thing is to kill any remaining eggs or larvae on the garment before returning it to your wardrobe &mdash; either by washing at 60&deg;C, dry cleaning, or freezing for 72 hours at &minus;18&deg;C. Only discard garments if the damage is too extensive to repair or if the item is heavily contaminated with larvae and frass.
      </p>
    </GuideLayout>
  );
}
