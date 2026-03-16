import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Cockroaches: The Complete UK Guide (2026) | PestPro Index',
    description:
      'A comprehensive UK guide to identifying and eliminating cockroaches. Species identification, signs of infestation, DIY treatments, professional solutions, and how to keep them out for good.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-cockroaches',
    },
    openGraph: {
      title: 'How to Get Rid of Cockroaches: The Complete UK Guide (2026) | PestPro Index',
      description:
        'A comprehensive UK guide to identifying and eliminating cockroaches. Species identification, signs of infestation, DIY treatments, professional solutions, and how to keep them out for good.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-cockroaches',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Cockroaches: The Complete UK Guide (2026)',
  description:
    'A comprehensive UK guide to identifying and eliminating cockroaches. Species identification, signs of infestation, DIY treatments, professional solutions, and how to keep them out for good.',
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-cockroaches',
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
      name: 'How to Get Rid of Cockroaches',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-cockroaches',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are cockroaches common in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cockroaches are less common in the UK than in warmer climates, but they are far from rare. The German cockroach is the most frequently encountered species in UK homes, restaurants, and commercial kitchens. Oriental cockroaches are also widespread, particularly in older properties with basements, cellars, and ageing drainage systems. Infestations are most prevalent in densely populated urban areas such as London, Birmingham, Manchester, and Glasgow, and in properties with shared walls, communal heating systems, or commercial food preparation on the premises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can cockroaches fly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The German cockroach, which is the most common indoor species in the UK, has wings but rarely flies. It is primarily a runner and climber. The Oriental cockroach has reduced wings and cannot fly at all. The American cockroach, which is very rare in the UK, is capable of short gliding flights in warm conditions but does not fly in the way that, say, a housefly does. In practical terms, cockroaches in UK homes are extremely unlikely to fly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do cockroaches bite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cockroaches are capable of biting humans, but it is extremely rare. Bites are only likely to occur in cases of severe, long-established infestations where the cockroach population has outgrown the available food supply. In such circumstances, cockroaches may nibble on fingernails, eyelashes, or skin during the night. The far greater health risk from cockroaches is the diseases they carry and the allergens they produce, not bites.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can one cockroach mean an infestation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you see a single German cockroach, it is highly likely that there are many more hidden nearby. German cockroaches are social insects that live in aggregations, and they are nocturnal. Seeing even one during the day strongly suggests an overcrowded harbourage. A single Oriental cockroach, particularly in a basement or near a drain, may be a lone explorer that has wandered in from outside, but it should still prompt a thorough inspection. As a rule, never assume that one cockroach is a one-off occurrence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast do cockroaches breed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'German cockroaches breed extremely fast. A single female produces 4 to 8 egg cases (oothecae) in her lifetime, each containing 30 to 40 eggs. Under ideal warm, humid conditions, the lifecycle from egg to reproductive adult takes as little as 6 to 8 weeks. This means a single pregnant female introduced into a warm kitchen can produce a population of several hundred within a few months. Oriental cockroaches breed more slowly, with a lifecycle of around 6 to 12 months from egg to adult.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do cockroaches come up through drains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oriental cockroaches commonly enter properties through drains, particularly through broken or poorly maintained drainage systems, dry U-bends, and gaps around pipe entry points. They thrive in the damp, dark conditions found in sewers and drainage systems. German cockroaches, by contrast, do not typically enter through drains. They are almost always introduced via infested goods, second-hand appliances, deliveries, or from neighbouring infested properties. If you are finding cockroaches near drains or in the basement, they are most likely Oriental cockroaches.',
      },
    },
  ],
};

const tocItems = [
  { id: 'types', title: 'Types of Cockroaches in the UK' },
  { id: 'signs', title: 'Signs of Infestation' },
  { id: 'dangers', title: 'Why Cockroaches Are Dangerous' },
  { id: 'diy-methods', title: 'DIY Methods' },
  { id: 'professional-treatment', title: 'Professional Treatment' },
  { id: 'cockroach-proofing', title: 'Cockroach-Proofing Your Home' },
  { id: 'costs', title: 'Treatment Costs' },
  { id: 'cockroach-control-by-city', title: 'Control by City' },
  { id: 'faq', title: 'FAQ' },
];

export default function HowToGetRidOfCockroachesPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Cockroaches: The Complete UK Guide (2026)"
      subtitle="Everything you need to know about identifying, treating, and preventing cockroach infestations in UK homes and businesses."
      lastUpdated="March 2026"
      readingTime="12 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
      ]}
      relatedProducts={[
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
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
      {/* SECTION: Types of Cockroaches Found in the UK */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="types">Types of Cockroaches Found in the UK</h2>

      <p>
        The United Kingdom is home to a surprisingly diverse range of cockroach species, though the vast majority of domestic and commercial infestations are caused by just two: the German cockroach and the Oriental cockroach. Understanding which species you are dealing with is not merely an academic exercise &mdash; it directly affects the choice of treatment, the likely harbourage sites, and the long-term prevention strategy. A pest controller&apos;s first task on any cockroach callout is species identification, because the biology and behaviour of each species demand a different approach.
      </p>

      <h3>German Cockroach (<em>Blattella germanica</em>)</h3>

      <p>
        The German cockroach is by far the <strong>most common indoor cockroach species in the UK</strong> and is the one responsible for the overwhelming majority of infestations in homes, restaurants, hotels, hospitals, and food processing facilities. Adults are <strong>12 to 15 millimetres long</strong>, light brown or tan in colour, with two distinctive dark parallel stripes running lengthwise behind the head on the pronotum. They have wings but rarely fly, preferring to run at remarkable speed across surfaces &mdash; which is often the first sign that alerts a homeowner to their presence.
      </p>

      <p>
        German cockroaches are strongly attracted to <strong>warm, humid environments</strong> and are almost exclusively found indoors in the UK climate. Their preferred harbourages include the backs and undersides of kitchen appliances (fridges, cookers, dishwashers, microwaves), the interiors of kitchen cupboards (especially near hinges and corners), behind and beneath sinks, around boiler cupboards and hot water pipes, inside electrical equipment and control panels, and in the warm, moist environment of bathrooms. They are thigmotactic, meaning they prefer to squeeze into tight crevices where their body is in contact with surfaces on all sides &mdash; which is why they are so often found in the gaps between kitchen units and walls, in the hinges of cupboard doors, and inside the casings of appliances.
      </p>

      <p>
        What makes the German cockroach so formidable as a pest is its <strong>extraordinary reproductive capacity</strong>. A single female produces between <strong>4 and 8 oothecae</strong> (egg cases) during her lifetime, and each ootheca contains <strong>30 to 40 eggs</strong>. Unlike most other cockroach species, the female German cockroach carries the ootheca attached to her abdomen until just before the eggs are ready to hatch, which gives the developing embryos maximum protection. Under ideal conditions of warmth and humidity &mdash; precisely the conditions found in a UK kitchen &mdash; the lifecycle from egg to reproductive adult can be completed in as little as <strong>6 to 8 weeks</strong>. This means a single pregnant female introduced into a warm kitchen can give rise to a population of several hundred within a few months, and potentially thousands within a year if left unchecked.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Cockroach infestations in the UK are most commonly caused by the German cockroach. A single female can produce up to 300 offspring in her lifetime, making early detection and treatment critical.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="300" label="potential offspring from a single female German cockroach" />
      </div>

      <h3>Oriental Cockroach (<em>Blatta orientalis</em>)</h3>

      <p>
        The Oriental cockroach is the second most common species encountered in UK properties and is sometimes colloquially known as the <strong>&ldquo;black beetle&rdquo;</strong> or <strong>&ldquo;water bug&rdquo;</strong> &mdash; though it is neither a beetle nor truly aquatic. Adults are <strong>20 to 25 millimetres long</strong>, dark brown to almost black in colour, with a glossy, somewhat greasy-looking body. Males have shortened wings that cover about two-thirds of the abdomen, while females have only tiny vestigial wing stubs. Neither sex can fly.
      </p>

      <p>
        Unlike the German cockroach, the Oriental cockroach <strong>prefers cooler, damper conditions</strong> and is frequently found in basements, cellars, drains, utility rooms, garages, and the void spaces beneath ground-floor properties. It is closely associated with drainage systems and commonly enters buildings through <strong>broken drains, gaps around pipe entry points, air bricks, and poorly sealed utility entrances</strong>. It is more tolerant of cold than the German cockroach and can survive outdoors in the UK for much of the year, sheltering under debris, in leaf litter, and around refuse areas before migrating indoors during colder months.
      </p>

      <p>
        Oriental cockroaches are <strong>slower breeders</strong> than German cockroaches, with a lifecycle from egg to adult of approximately <strong>6 to 12 months</strong> depending on temperature. The female deposits her ootheca in a sheltered location and then abandons it, unlike the German cockroach which carries hers. Each ootheca contains around 16 eggs. While an Oriental cockroach infestation may develop more slowly than a German cockroach problem, it can still reach significant numbers in properties with persistent damp, drain defects, or abundant harbourage in basements and cellars.
      </p>

      <h3>Brown-Banded Cockroach (<em>Supella longipalpa</em>)</h3>

      <p>
        The brown-banded cockroach is <strong>rare in the UK</strong> but is occasionally encountered, particularly in centrally heated flats and commercial premises. It is smaller than the German cockroach &mdash; around <strong>10 to 14 millimetres</strong> &mdash; and is distinguished by two lighter bands running across the wings and abdomen. Unlike the German cockroach, which prefers kitchens and bathrooms, the brown-banded cockroach favours <strong>higher, drier locations</strong> and is more likely to be found in living rooms, bedrooms, and offices &mdash; behind picture frames, inside wardrobes, and around the tops of cupboards. It requires less moisture than other species and is less dependent on food preparation areas.
      </p>

      <h3>American Cockroach (<em>Periplaneta americana</em>)</h3>

      <p>
        The American cockroach is the largest species found in the UK, with adults reaching <strong>30 to 40 millimetres in length</strong>. It is reddish-brown with a pale yellowish marking on the pronotum. Despite its name, it is believed to have originated in Africa and was introduced to the Americas and subsequently to Europe through trade. In the UK, it is <strong>very rare</strong> and is almost exclusively found in <strong>large heated commercial buildings</strong> such as bakeries, food processing plants, zoos, tropical greenhouses, and the boiler rooms of large institutional buildings. It is unlikely to be encountered in a typical UK home.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Signs of a Cockroach Infestation */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="signs">Signs of a Cockroach Infestation</h2>

      <p>
        Cockroaches are <strong>nocturnal creatures</strong> that spend the daylight hours hidden in cracks, crevices, and voids, emerging only under cover of darkness to forage for food and water. This means that an infestation can be well established before a homeowner or business owner becomes aware of it. The key to effective cockroach control is early detection, and that requires knowing what to look for. Below are the most reliable indicators of cockroach activity.
      </p>

      <h3>Live Cockroaches</h3>

      <p>
        Seeing a live cockroach is the most obvious sign, but the circumstances matter enormously. A cockroach spotted at night when you switch on the kitchen light is concerning but not unusual &mdash; cockroaches naturally forage in the dark. However, seeing cockroaches <strong>during the daytime</strong> is a much more serious indicator. Cockroaches are strongly photophobic and avoid light. If they are active during the day, it almost certainly means that the harbourage areas are <strong>severely overcrowded</strong> and individuals are being forced out to find food and space. Daytime sightings should be treated as an urgent signal that the infestation requires immediate professional treatment.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>If you see cockroaches during the daytime, the infestation is likely already severe. Cockroaches are nocturnal &mdash; daytime activity means the harbourage is overcrowded and they are being forced out to find food and space.</p>
        </Callout>
      </div>

      <h3>Droppings</h3>

      <p>
        Cockroach droppings are one of the most reliable indicators of an active infestation. <strong>German cockroach droppings</strong> are small, dark, and pellet-like, approximately <strong>1 to 2 millimetres</strong> in size, and are often described as resembling coarse ground black pepper or coffee grounds. They are typically found in clusters near harbourage areas &mdash; in kitchen cupboard corners, along the tops of door frames, behind appliances, and around the hinges of kitchen drawers and cabinets.
      </p>

      <p>
        <strong>Oriental cockroach droppings</strong> are larger and appear as dark, irregular smears or cylindrical pellets. They are commonly found near drains, in basements, along skirting boards, and in areas with persistent dampness. In both cases, the quantity of droppings gives a rough indication of the severity of the infestation &mdash; heavy accumulations suggest a well-established population.
      </p>

      <h3>Egg Cases (Oothecae)</h3>

      <p>
        Cockroach egg cases, known as oothecae, are distinctive and easily identifiable once you know what to look for. They are <strong>approximately 8 millimetres long</strong>, brown, ridged, and capsule-shaped &mdash; somewhat resembling a small dried kidney bean. German cockroach oothecae are lighter in colour and may be found attached to surfaces in hidden areas near food and warmth. Oriental cockroach oothecae are darker and are typically deposited in sheltered, damp locations. Finding oothecae confirms not only the presence of cockroaches but also that a breeding population is established.
      </p>

      <h3>Shed Skins</h3>

      <p>
        Cockroaches moult between <strong>5 and 8 times</strong> as they grow from nymph to adult, shedding their outer exoskeleton at each stage. These cast skins are translucent, pale brown, and retain the shape of the cockroach. They accumulate in harbourage areas and near food sources. A significant quantity of shed skins indicates a large, active, breeding population that has been present for some time.
      </p>

      <h3>Musty Odour</h3>

      <p>
        Cockroach infestations produce a distinctive, unpleasant, <strong>oily, musty smell</strong> that becomes more intense as the population grows. This odour comes from pheromones secreted by the cockroaches, combined with the smell of accumulated droppings, shed skins, and dead insects. In a German cockroach infestation concentrated behind a kitchen appliance or inside a wall void, the smell can be surprisingly strong and is often the first thing that alerts a homeowner to the problem. The odour can also taint food and packaging stored nearby.
      </p>

      <h3>Smear Marks</h3>

      <p>
        In areas with high moisture &mdash; such as kitchens, bathrooms, and basements &mdash; cockroaches produce <strong>dark, irregular smear marks</strong> as they crawl along surfaces. These are caused by the oily secretion on their bodies and are typically found along the junction between walls and floors, around pipe entry points, near water sources, and along the edges of worktops and shelves. The smears tend to follow regular cockroach pathways and can help identify the routes between harbourage and food or water.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Cockroaches Are Dangerous */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="dangers">Why Cockroaches Are Dangerous</h2>

      <p>
        Cockroaches are not simply unpleasant to look at &mdash; they pose genuine risks to human health and can have severe consequences for businesses. Their biology, behaviour, and preferred habitats make them exceptionally effective vectors of disease and contamination. Understanding the risks they present reinforces the importance of treating any infestation promptly and thoroughly.
      </p>

      <h3>Disease Transmission</h3>

      <p>
        Cockroaches are known to carry and transmit a wide range of <strong>pathogenic bacteria, viruses, and parasites</strong>. As they move between sewers, drains, waste bins, and food preparation surfaces, they pick up pathogens on their legs, bodies, and in their digestive systems, and then deposit them on food, utensils, worktops, and cooking equipment. Diseases associated with cockroaches include <strong>salmonella, E. coli, dysentery, gastroenteritis, and typhoid fever</strong>. Research has identified over 30 species of bacteria, 7 species of helminth (parasitic worm), and numerous other pathogens on or within cockroach specimens collected from domestic and commercial premises. The risk is particularly acute in kitchens and food storage areas where cockroaches come into direct contact with items that will be consumed by humans.
      </p>

      <h3>Allergens and Asthma</h3>

      <p>
        Cockroach droppings, shed skins, saliva, and decomposing bodies contain <strong>potent allergens</strong> that are a well-documented trigger for allergic reactions and asthma. Studies published in the British Medical Journal and the Journal of Allergy and Clinical Immunology have consistently shown that cockroach allergen exposure is a significant risk factor for childhood asthma, particularly in urban environments. In homes with cockroach infestations, airborne allergen levels can be high enough to cause chronic respiratory symptoms, including wheezing, coughing, nasal congestion, and skin rashes. Children, the elderly, and individuals with pre-existing respiratory conditions are most vulnerable.
      </p>

      <h3>Food Contamination</h3>

      <p>
        Cockroaches are indiscriminate feeders that consume virtually anything organic, from food scraps and grease to soap, glue, and book bindings. When they feed, they <strong>regurgitate digestive fluids onto the food surface</strong> before consuming it, and they defecate freely as they move. This means that any food or food preparation surface that cockroaches have accessed is contaminated not only with bacteria but also with cockroach saliva and faeces. Even sealed food packaging is not immune &mdash; cockroaches can chew through thin plastic and cardboard to reach the contents within.
      </p>

      <h3>Commercial Impact</h3>

      <p>
        For restaurants, takeaways, hotels, food manufacturers, and any business that handles food, a cockroach infestation can be <strong>catastrophic</strong>. Under the <strong>Food Safety Act 1990</strong> and the Food Safety and Hygiene (England) Regulations 2013, Environmental Health Officers (EHOs) have the power to serve improvement notices, issue prohibition orders, and ultimately <strong>close a business</strong> that presents an imminent risk to health. A cockroach infestation in a commercial kitchen is grounds for immediate enforcement action. Beyond the legal consequences, the reputational damage from a publicised cockroach problem &mdash; particularly in the age of online reviews and social media &mdash; can be devastating and long-lasting.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>A restaurant shut down due to cockroach infestation typically loses &pound;5,000&ndash;&pound;20,000 or more in lost revenue, emergency pest treatment, deep cleaning, and reputational damage.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Get Rid of Cockroaches — DIY Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">How to Get Rid of Cockroaches &mdash; DIY Methods</h2>

      <p>
        While professional treatment is strongly recommended for established cockroach infestations &mdash; particularly German cockroaches &mdash; there are several DIY methods that can be effective for early-stage problems or as a complement to professional treatment. The key to success with any DIY approach is choosing the right method, applying it correctly, and maintaining rigorous hygiene to deprive the cockroaches of food and water.
      </p>

      <h3>Cockroach Gel Bait</h3>

      <p>
        Cockroach gel bait is widely regarded as the <strong>most effective DIY method</strong> for controlling cockroaches, and it is the same basic approach used by professional pest controllers. The gel contains a slow-acting insecticide &mdash; typically <strong>fipronil or imidacloprid</strong> &mdash; combined with a highly attractive food-based matrix that cockroaches find irresistible. The cockroach feeds on the gel, returns to its harbourage, and dies within 24 to 72 hours. Crucially, other cockroaches in the harbourage then feed on the dead or dying individual&apos;s droppings and body, ingesting the insecticide themselves. This is known as the <strong>cascade effect</strong> or secondary kill, and it allows a single application to eliminate cockroaches deep within a harbourage that could never be reached by a spray.
      </p>

      <p>
        Leading gel bait products available in the UK include <strong>Advion Cockroach Gel</strong> (active ingredient: indoxacarb) and <strong>Goliath Gel</strong> (active ingredient: fipronil). Both are professional-grade products that are available to the public through specialist pest control suppliers and online retailers. Apply tiny, <strong>rice-grain-sized dots</strong> of gel in the corners of kitchen cupboards, along the edges of worktops where they meet the wall, around pipe entry points under the sink, in the hinges of kitchen drawers and cabinets, behind and beneath the fridge and cooker, and in any other crevices near food and warmth. Do not apply large blobs &mdash; many small dots are far more effective than a few large deposits, because they create more feeding stations and increase the chances of cockroaches encountering the bait. Replace the gel every <strong>2 to 3 weeks</strong> as it dries out and loses its attractiveness.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Cockroach gel bait is far more effective than sprays. Apply tiny dots (rice-grain sized) in the corners of kitchen cupboards, around pipe entry points under the sink, in the hinges of kitchen drawers, and behind the fridge and cooker. Replace every 2-3 weeks.</p>
        </Callout>
      </div>

      <h3>Insecticidal Spray</h3>

      <p>
        Aerosol and trigger-spray insecticides are the product most people reach for first, but for German cockroach infestations they are <strong>not recommended as a primary treatment</strong>. While sprays will kill cockroaches on direct contact, they have several significant drawbacks. First, they have <strong>limited residual effect</strong>, meaning cockroaches that emerge after the spray has dried are unaffected. Second, sprays cause a <strong>flushing and scattering effect</strong> that drives cockroaches away from the treated area into new hiding places, potentially spreading the infestation to other rooms or neighbouring properties. Third, pyrethroid-based sprays &mdash; which constitute the vast majority of over-the-counter products &mdash; face growing resistance in German cockroach populations.
      </p>

      <p>
        Sprays can be useful as a supplementary measure for Oriental cockroaches, particularly when applied around entry points such as drains, air bricks, and pipe gaps, where they create a contact barrier. For German cockroaches, however, gel bait is the far superior choice.
      </p>

      <h3>Boric Acid Powder</h3>

      <p>
        Boric acid (also sold as borax powder) is a long-established cockroach control method that remains effective. When a cockroach walks through boric acid, the fine particles <strong>adhere to its legs and body</strong>. The cockroach then ingests the powder during grooming, and the boric acid damages its digestive system, leading to death within <strong>3 to 7 days</strong>. As with gel bait, dead cockroaches are consumed by others in the harbourage, producing a secondary kill effect.
      </p>

      <p>
        Apply boric acid as a <strong>very thin, barely visible layer</strong> in crevices, behind appliances, under sinks, and along skirting boards. Cockroaches will avoid thick deposits of powder, so less is genuinely more in this case. The major drawback of boric acid is that it is <strong>toxic to children and pets</strong> if ingested in significant quantities, so it must be applied with care in households with young children or animals, and it should never be applied to food preparation surfaces.
      </p>

      <h3>Cockroach Traps and Sticky Boards</h3>

      <p>
        Glue-based sticky traps are useful as a <strong>monitoring tool</strong> rather than a primary elimination method. Place them along skirting boards, behind appliances, and near suspected harbourage areas. The number and species of cockroaches caught on the traps over a given period provides valuable information about the severity of the infestation, the most active areas, and whether treatment is reducing the population. Traps alone will not eliminate a cockroach infestation &mdash; they simply catch individuals that happen to walk across them &mdash; but they are an important part of an integrated approach.
      </p>

      <h3>Diatomaceous Earth</h3>

      <p>
        Diatomaceous earth (DE) is a fine powder made from the fossilised remains of microscopic aquatic organisms called diatoms. It works by <strong>damaging the waxy outer layer of the cockroach&apos;s exoskeleton</strong>, causing the insect to lose moisture and die from dehydration over a period of several days to two weeks. It is <strong>non-toxic to humans and pets</strong> (food-grade DE only), does not degrade over time, and cockroaches cannot develop resistance to it because it works through a physical rather than a chemical mechanism. Apply a thin, even layer in dry crevices, behind appliances, and along entry points. It is less effective in damp environments, which limits its usefulness against Oriental cockroaches in basements and near drains.
      </p>

      <h3>Cleaning and Hygiene</h3>

      <p>
        No cockroach treatment &mdash; whether DIY or professional &mdash; will succeed in the long term without rigorous hygiene. Cockroaches need food, water, and harbourage to survive. While you may not be able to eliminate all harbourage (the gaps behind your kitchen units are always going to be there), you can deprive them of food and water. <strong>Clean behind and beneath kitchen appliances regularly</strong> &mdash; the grease and crumbs that accumulate behind the cooker and under the fridge are a cockroach buffet. Wipe down worktops every evening. Store all food in sealed containers &mdash; glass, metal, or heavy-duty plastic. Empty kitchen bins daily. Do not leave pet food out overnight. Fix dripping taps and leaking pipes. Wash up before going to bed rather than leaving dirty dishes in the sink overnight. These measures alone will not eliminate an infestation, but they are an <strong>essential complement</strong> to any treatment method.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for cockroach control products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best gel baits, sprays, powders, and traps available in the UK.</p>
        <a
          href="/best/cockroach-killers"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Cockroach Killers UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Professional Cockroach Treatment */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="professional-treatment">Professional Cockroach Treatment</h2>

      <p>
        For established German cockroach infestations, and for any commercial premises with a cockroach problem, professional treatment is the recommended course of action. German cockroaches breed so rapidly, hide so effectively, and are so resistant to many over-the-counter products that DIY methods alone are unlikely to achieve complete eradication. A qualified, experienced pest controller brings professional-grade products, specialist application equipment, and &mdash; critically &mdash; the knowledge of cockroach biology and behaviour needed to target every harbourage area.
      </p>

      <h3>Species Identification and Survey</h3>

      <p>
        The first step in any professional treatment is a thorough survey and species identification. This determines the species present, the severity of the infestation, the location of harbourage areas, and the likely route of introduction. The treatment strategy for German cockroaches differs significantly from that for Oriental cockroaches, so correct identification is essential. The surveyor will inspect kitchens, bathrooms, utility areas, basements, and any other warm or damp spaces, using sticky monitoring traps and a torch to assess activity levels.
      </p>

      <h3>Professional Gel Bait Placement</h3>

      <p>
        Professional cockroach gel bait is the cornerstone of modern cockroach treatment. The products available to professionals &mdash; such as <strong>Advion, Goliath Gel, and Maxforce Prime</strong> &mdash; contain highly effective active ingredients (indoxacarb, fipronil, imidacloprid) in formulations that are optimised for maximum palatability and cascade effect. A trained technician knows precisely where to place the gel for maximum impact: inside the hinges and adjustment holes of kitchen cabinets, in the motor housings of appliances, in cable trunking and conduit, behind tiling, and in every micro-crevice that a homeowner would never think to check. The number and placement of gel bait dots can make the difference between success and failure.
      </p>

      <h3>Residual Spray Treatment</h3>

      <p>
        In conjunction with gel bait, a professional may apply a <strong>residual insecticidal spray</strong> to surfaces along cockroach pathways and around entry points. Professional residual sprays use active ingredients and formulations that provide effective kill on contact for weeks or even months after application &mdash; far longer than any product available over the counter. The spray creates a chemical barrier that cockroaches must cross to reach food and water, ensuring that even individuals that do not feed directly on the gel bait are still exposed to lethal doses of insecticide.
      </p>

      <h3>Insect Growth Regulators (IGRs)</h3>

      <p>
        Insect growth regulators are a sophisticated class of chemical that <strong>disrupts the cockroach&apos;s development cycle</strong>. IGRs mimic or interfere with the hormones that regulate moulting and reproduction, preventing nymphs from developing into reproductive adults and causing females to produce inviable oothecae. They do not kill adult cockroaches directly, but they effectively sterilise the population and prevent the next generation from maturing. Used in combination with gel bait and residual spray, IGRs provide a powerful multi-pronged attack that addresses both the current population and its reproductive potential.
      </p>

      <h3>Flushing Agents</h3>

      <p>
        Professional pest controllers sometimes use <strong>flushing agents</strong> &mdash; fast-acting pyrethroid sprays injected into harbourage areas &mdash; to drive cockroaches out of their hiding places so they can be identified, counted, and forced into contact with treated surfaces or gel bait. Flushing is particularly useful during the initial survey to determine the extent of an infestation and to confirm the species present.
      </p>

      <h3>Treatment Programme</h3>

      <p>
        A typical professional treatment programme for German cockroaches involves <strong>2 to 3 visits over a period of 4 to 6 weeks</strong>. The first visit includes the full survey, initial gel bait placement, and spray treatment. The second visit (usually 2 to 3 weeks later) assesses the effectiveness of the initial treatment, replaces gel bait, and targets any remaining activity. A third visit may be required for severe infestations. Monitoring traps are placed throughout the treatment programme to provide an objective measure of cockroach activity and confirm when the infestation has been eliminated.
      </p>

      <p>
        For <strong>commercial premises</strong> &mdash; particularly restaurants, hotels, food manufacturers, and healthcare facilities &mdash; ongoing pest control contracts are standard practice. These typically involve scheduled monthly or quarterly visits for inspection, monitoring, and preventive treatment, ensuring that any new introduction is detected and dealt with before it can become established. This proactive approach is not only good practice but is often required to demonstrate compliance with food safety regulations and due diligence to Environmental Health Officers.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Cockroach Problem Too Big for DIY?"
          subtext="Compare verified pest control providers in your area — free, no-obligation quotes."
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Cockroach-Proof Your Home */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="cockroach-proofing">How to Cockroach-Proof Your Home</h2>

      <p>
        Effective cockroach-proofing is about eliminating the three things cockroaches need to survive: <strong>food, water, and harbourage</strong>. No treatment &mdash; however thorough &mdash; will provide lasting results if the conditions that attracted cockroaches in the first place remain unchanged. The following measures are essential both as a prevention strategy and as a complement to active treatment.
      </p>

      <h3>Seal Pipe Gaps and Service Entry Points</h3>

      <p>
        Gaps around pipes where they pass through walls, floors, and kitchen units are among the most common entry and migration routes for both German and Oriental cockroaches. Seal these gaps using a combination of <strong>expanding foam and wire mesh</strong> &mdash; foam alone can be chewed through over time, but backing it with fine wire mesh provides a durable, cockroach-proof seal. Pay particular attention to the gaps around waste pipes under kitchen and bathroom sinks, around the central heating pipework where it enters from a boiler cupboard, and around any cable or conduit entry points.
      </p>

      <h3>Fix Drains and Install Drain Covers</h3>

      <p>
        Oriental cockroaches commonly enter properties through the drainage system. Have your drains inspected for cracks, breaks, or displaced joints &mdash; a <strong>CCTV drain survey</strong> is relatively inexpensive and can identify defects that provide cockroach access. Ensure that all drain gullies have covers in place and that U-bends are functioning correctly (a dry U-bend provides an open highway from the sewer into your property). Run water regularly through any drains that are not in frequent use to keep the water seal intact.
      </p>

      <h3>Seal Door and Window Gaps</h3>

      <p>
        Check the seals around external doors and windows, particularly at ground level. Cockroaches can squeeze through surprisingly narrow gaps &mdash; a German cockroach nymph can pass through a gap as narrow as <strong>1.5 millimetres</strong>. Fit draught excluders or brush strips to the base of external doors. Repair or replace damaged window seals. Ensure that any gaps around door and window frames are filled with mastic or expanding foam.
      </p>

      <h3>Mesh Over Air Bricks</h3>

      <p>
        Air bricks provide essential ventilation to sub-floor voids and are an important feature of UK building design. However, the standard air brick pattern has openings large enough for cockroaches (and other pests) to pass through. Fitting <strong>fine mesh covers</strong> over air bricks prevents insect ingress while maintaining airflow. Stainless steel mesh with a maximum aperture of 3 millimetres is ideal.
      </p>

      <h3>Kitchen Hygiene</h3>

      <p>
        Clean your kitchen thoroughly and regularly. Pull out the fridge, cooker, and other freestanding appliances at least once every few months to clean the floor, walls, and the backs of the appliances where grease and food debris accumulate. Wipe down worktops every evening. Clean the inside of cupboards periodically, paying attention to the corners and hinge areas where crumbs collect. Keep the area around and beneath the bin clean.
      </p>

      <h3>Fix Taps and Leaks</h3>

      <p>
        Cockroaches need water to survive, and a dripping tap or leaking pipe provides a reliable water source that will sustain a population even in an otherwise clean kitchen. Repair leaking taps, pipes, and radiator valves promptly. Wipe down sinks and basins before bed. Ensure that washing machines and dishwashers are not leaking from hoses or seals.
      </p>

      <h3>Sealed Food Containers</h3>

      <p>
        Store all dry food &mdash; cereals, flour, sugar, pasta, rice, pet food &mdash; in <strong>airtight containers</strong> made of glass, metal, or heavy-duty plastic. Cockroaches can chew through thin plastic bags and cardboard packaging with ease. Transfer food from its original packaging into sealed containers as soon as you bring it home. This single measure removes one of the primary food sources that sustains cockroach populations in domestic kitchens.
      </p>

      <h3>Empty Bins Daily and Remove Pet Food Overnight</h3>

      <p>
        Kitchen bins should be emptied daily, and the bin itself cleaned regularly to remove residue. Do not leave pet food bowls out overnight &mdash; a bowl of cat or dog food on the kitchen floor is an open invitation for cockroaches. Feed pets at set times and remove uneaten food before evening.
      </p>

      <h3>Ventilate to Reduce Humidity</h3>

      <p>
        German cockroaches thrive in humid conditions. Use extractor fans in kitchens and bathrooms, open windows when cooking or showering, and consider using a dehumidifier in properties that suffer from persistent condensation or dampness. Reducing humidity makes the environment less hospitable for cockroaches and also helps to prevent mould, which is itself a food source for cockroaches.
      </p>

      <h3>Be Cautious with Second-Hand Appliances</h3>

      <p>
        German cockroach infestations are frequently introduced into homes via <strong>second-hand kitchen appliances</strong> &mdash; particularly fridges, cookers, microwaves, and coffee machines. The warm motor housings and electronic control panels of these appliances provide ideal harbourage, and cockroaches can survive for extended periods inside them even when unplugged. Before bringing any second-hand kitchen appliance into your home, inspect it thoroughly, paying particular attention to the back panel, motor housing, and any crevices around hinges, seals, and cable entry points. If possible, clean it with hot soapy water and leave it in a cold garage or shed for several days before use &mdash; cockroaches become sluggish and more visible in cold conditions.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>German cockroach infestations are almost always introduced &mdash; via second-hand appliances, deliveries, or visitors&apos; belongings. They do not typically enter from outdoors like Oriental cockroaches. Inspect any second-hand kitchen appliances thoroughly before bringing them into your home.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How Much Does Cockroach Treatment Cost in the UK? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">How Much Does Cockroach Treatment Cost in the UK?</h2>

      <p>
        The cost of professional cockroach treatment in the UK varies depending on the species involved, the severity of the infestation, the size of the property, and the region. Below is a general guide to what you can expect to pay in 2026.
      </p>

      <p>
        <strong>Domestic treatment</strong> for a typical German cockroach infestation in a house or flat costs between <strong>&pound;100 and &pound;250</strong> for a full treatment programme of <strong>2 to 3 visits</strong>. This includes the initial survey, gel bait placement, residual spray treatment, and follow-up visits to assess and retreat as necessary. London and the South East tend to be at the upper end of this range, while the Midlands, North, and Scotland are typically more affordable.
      </p>

      <p>
        <strong>Commercial treatment</strong> for restaurants, hotels, and food businesses typically costs <strong>&pound;200 to &pound;500 or more</strong>, depending on the size of the premises and the complexity of the infestation. Commercial kitchens with extensive pipe runs, multiple appliances, and wall-mounted equipment require more time and product than a standard domestic kitchen.
      </p>

      <p>
        <strong>Ongoing pest control contracts</strong> for commercial premises typically cost <strong>&pound;50 to &pound;150 per month</strong>, depending on the size of the property and the frequency of visits. These contracts cover regular inspections, monitoring trap checks, preventive treatments, and emergency callouts if activity is detected between scheduled visits.
      </p>

      <p>
        Several factors influence the final cost. The <strong>species</strong> matters &mdash; German cockroach treatments often require more visits and more product than Oriental cockroach treatments because of the German cockroach&apos;s faster breeding rate and more concealed harbourage. The <strong>severity</strong> of the infestation affects how much product is needed and how many visits are required. The <strong>size and layout of the property</strong> determines the time needed for each visit. And if <strong>structural proofing work</strong> is needed &mdash; sealing pipe gaps, repairing drains, fitting mesh to air bricks &mdash; this will be quoted separately or recommended for you to arrange.
      </p>

      <p>
        It is worth noting that <strong>some local councils</strong> in the UK still provide pest control services for cockroaches, either free of charge or at a subsidised rate. Availability and charging policies vary significantly from council to council, so it is worth checking with your local authority before paying for private treatment. Where council services are available, they are typically limited to domestic properties and may have longer waiting times than private providers.
      </p>

      <div className="not-prose">
        <StatCallout value="&pound;100&ndash;&pound;250" label="typical cost for domestic cockroach treatment (2&ndash;3 visits)" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Cockroach Control by City */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="cockroach-control-by-city">Cockroach Control by City</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find cockroach control specialists in your area.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/bradford/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bradford
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/brighton/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Brighton
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/cardiff/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Cardiff
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/coventry/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Coventry
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/hampshire/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Hampshire
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/leicester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leicester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/liverpool/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Liverpool
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/newcastle/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Newcastle
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/nottingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Nottingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
        </Link>
        <Link
          href="/sheffield/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Sheffield
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find cockroach specialists &rarr;</span>
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

      <h3>Are cockroaches common in the UK?</h3>
      <p>
        Cockroaches are less common in the UK than in warmer climates such as southern Europe, Asia, or the Americas, but they are <strong>far from rare</strong>. The German cockroach is the most frequently encountered species in UK homes, restaurants, and commercial kitchens. It thrives indoors where central heating and modern insulation provide the warm, humid conditions it needs year-round. Oriental cockroaches are also widespread, particularly in older properties with basements, cellars, and ageing drainage systems. Infestations are most prevalent in <strong>densely populated urban areas</strong> such as London, Birmingham, Manchester, and Glasgow, and in properties with shared walls, communal heating systems, or commercial food preparation on the premises. The British Pest Control Association (BPCA) reports that cockroach callouts have remained consistently high across the UK in recent years, with German cockroach infestations showing a particular increase in multi-occupancy residential buildings and food service businesses.
      </p>

      <h3>Can cockroaches fly?</h3>
      <p>
        The German cockroach, which is the most common indoor species in the UK, <strong>has wings but rarely flies</strong>. It is primarily a runner and climber, capable of moving at speeds of up to 1.5 metres per second &mdash; which is why they seem to vanish almost instantly when you switch on the kitchen light. The Oriental cockroach has reduced wings and <strong>cannot fly at all</strong>. The American cockroach, which is very rare in the UK, is capable of short gliding flights in warm conditions but does not fly in the sustained, directional way that a housefly or moth does. In practical terms, cockroaches in UK homes are extremely unlikely to fly. If you see a flying insect in your kitchen that you suspect is a cockroach, it is more likely to be a different species of beetle or moth.
      </p>

      <h3>Do cockroaches bite?</h3>
      <p>
        Cockroaches are technically capable of biting humans, but it is <strong>extremely rare</strong>. Bites are only likely to occur in cases of severe, long-established infestations where the cockroach population has dramatically outgrown the available food supply. In such extreme circumstances, cockroaches may nibble on fingernails, eyelashes, or the skin of sleeping individuals &mdash; particularly on the hands and face. The bites are usually minor and may cause slight redness or irritation. However, the far greater health risk from cockroaches is the <strong>diseases they carry and the allergens they produce</strong>, not bites. If you are being bitten by insects at night, bed bugs, fleas, or mosquitoes are statistically far more likely culprits than cockroaches.
      </p>

      <h3>Can one cockroach mean an infestation?</h3>
      <p>
        If you see a single <strong>German cockroach</strong>, it is highly likely that there are many more hidden nearby. German cockroaches are social insects that live in aggregations guided by pheromones, and they are strictly nocturnal. Seeing even one during the day strongly suggests an overcrowded harbourage where individuals are being forced out. A single German cockroach found at night is less alarming but should still prompt a thorough inspection, because where there is one, there are almost certainly dozens or hundreds concealed in nearby crevices.
      </p>
      <p>
        A single <strong>Oriental cockroach</strong>, particularly found in a basement or near a drain, may genuinely be a lone explorer that has wandered in from outside through a drain defect or gap around a pipe. However, it should still prompt a check of the drainage system and a search for other signs of activity. As a general rule, <strong>never assume that one cockroach is a one-off occurrence</strong>. Treat it as a warning sign and investigate promptly.
      </p>

      <h3>How fast do cockroaches breed?</h3>
      <p>
        German cockroaches breed <strong>extremely fast</strong> &mdash; which is the primary reason they are so difficult to control once established. A single female produces between <strong>4 and 8 oothecae</strong> (egg cases) during her 6-to-9-month adult lifespan, and each ootheca contains <strong>30 to 40 eggs</strong>. Under ideal warm, humid conditions &mdash; exactly the conditions found in a UK kitchen &mdash; the lifecycle from egg to reproductive adult takes as little as <strong>6 to 8 weeks</strong>. This means that a single pregnant female introduced into a warm kitchen can produce a population of several hundred within a few months, and potentially thousands within six months to a year.
      </p>
      <p>
        Oriental cockroaches breed more slowly, with a lifecycle of approximately <strong>6 to 12 months</strong> from egg to adult, and each ootheca contains only about 16 eggs. This slower reproductive rate means that Oriental cockroach infestations tend to build up more gradually, but they can still reach significant numbers over time, particularly in properties with persistent damp and drain defects.
      </p>

      <h3>Do cockroaches come up through drains?</h3>
      <p>
        <strong>Oriental cockroaches</strong> commonly enter properties through drains. They thrive in the dark, damp conditions of sewers and drainage systems and can migrate into buildings through <strong>broken or cracked drain pipes, displaced pipe joints, dry U-bends, and gaps around pipe entry points</strong> where drainage connects to the interior of the property. If you are finding large, dark cockroaches in your basement, utility room, or ground-floor bathroom, there is a strong possibility that they are entering through a drain defect. A CCTV drain survey can identify the point of entry.
      </p>
      <p>
        <strong>German cockroaches</strong>, by contrast, do <strong>not</strong> typically enter through drains. They are almost always introduced via infested goods &mdash; second-hand appliances, deliveries, food packaging from wholesale suppliers, or from neighbouring infested properties through shared wall voids, cable runs, and service risers. If you have German cockroaches in your kitchen, the source of introduction is far more likely to be a second-hand microwave or a cardboard box from a supplier than the drains beneath your property.
      </p>
    </GuideLayout>
  );
}
