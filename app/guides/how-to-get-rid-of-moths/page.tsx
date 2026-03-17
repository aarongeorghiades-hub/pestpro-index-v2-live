import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Moths: The Complete UK Guide (2026) | PestPro Index',
    description:
      'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, and prevention tips.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-moths',
    },
    openGraph: {
      title: 'How to Get Rid of Moths: The Complete UK Guide (2026) | PestPro Index',
      description:
        'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, and prevention tips.',
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
    'A comprehensive UK guide to getting rid of clothes moths, carpet moths, and pantry moths. Identification, DIY treatments, pheromone traps, professional fumigation, and prevention tips.',
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
      name: 'What are the signs of a moth infestation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common signs of a clothes moth infestation are small, irregular holes in woollen, silk, or cashmere garments; fine, sandy-coloured frass (droppings) in the bottom of wardrobes or drawers; silken tubes or cases attached to fabrics; and adult moths fluttering in dark corners of rooms, particularly near wardrobes and clothing storage. For carpet moths, look for threadbare patches on wool carpets, especially under furniture and along skirting boards. Pantry moth signs include webbing or clumping in dry foods such as flour, rice, cereals, and dried fruit, along with small caterpillars crawling on cupboard walls and ceilings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do moths eat cotton or synthetic fabrics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Clothes moth larvae feed exclusively on animal-derived fibres containing the protein keratin. This includes wool, cashmere, silk, fur, feathers, and leather. They cannot digest cotton, polyester, nylon, or other synthetic fabrics. However, moths will sometimes damage blended fabrics that contain a mix of wool and synthetic fibres, and they can damage cotton or synthetic garments that are heavily soiled with food stains, sweat, or body oils, as they feed on the organic residue rather than the fabric itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are moths harmful to humans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moths are not directly harmful to humans. They do not bite, sting, or transmit diseases. The damage they cause is entirely to materials and food. Clothes moth larvae destroy woollen garments, carpets, upholstery, and other animal-fibre textiles, which can result in significant financial loss. Pantry moth larvae contaminate stored food products with webbing, frass, and shed skins, making the food inedible and requiring it to be discarded. The main impact of moths is economic rather than medical.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get rid of moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough DIY moth treatment programme typically takes four to eight weeks to bring an infestation under control, because you need to eliminate not only the adult moths and active larvae but also any eggs that have yet to hatch. The clothes moth life cycle from egg to adult takes approximately four to six weeks in a warm home, so treatment must continue for at least this long to catch newly hatching larvae. Pheromone traps should be left in place for at least three months to monitor for any residual activity. Severe or widespread infestations treated by a professional may require two to three visits spaced several weeks apart to ensure complete eradication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do cedar balls and lavender really repel moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar wood and lavender have some mild moth-repellent properties, and both have a long history of traditional use for protecting stored clothing. Fresh cedar blocks or shavings release aromatic oils that can deter adult moths from laying eggs in the immediate vicinity. Lavender sachets have a similar mild repellent effect. However, neither cedar nor lavender will kill moth eggs or larvae that are already present, and their effectiveness diminishes as the scent fades over time. They are best used as a supplementary preventive measure alongside proper cleaning, sealed storage, and monitoring with pheromone traps rather than relied upon as a standalone treatment for an active infestation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you freeze clothes to kill moths?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Freezing is an effective chemical-free method for killing moth eggs, larvae, and adults on individual garments and textiles. Place the item in a sealed plastic bag, remove as much air as possible, and freeze it at minus 18 degrees Celsius or colder for at least 72 hours. This will kill all life stages of the moth. For maximum effectiveness, some experts recommend a freeze-thaw-freeze cycle: freeze for 72 hours, thaw at room temperature for 24 hours, then freeze again for a further 72 hours. This ensures that any eggs that survived the first freeze in a dormant state are killed during the second cycle. Freezing is ideal for delicate items that cannot be washed at high temperatures, such as cashmere, silk, and fur.',
      },
    },
    {
      '@type': 'Question',
      name: 'What temperature kills moths in a washing machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A wash temperature of 60 degrees Celsius or above will kill moth eggs, larvae, and adults. This is the most practical method for treating washable woollen items, cotton garments contaminated with moth larvae, bedding, and other machine-washable textiles. Items that cannot withstand a 60-degree wash — such as cashmere, silk, and some delicate woolens — should be dry-cleaned or frozen instead. Tumble drying on a hot setting after washing provides an additional thermal kill step.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does professional moth treatment cost in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional moth treatment in the UK typically costs between £120 and £250 for a standard residential property, depending on the size of the affected area and the treatment method used. A single-room treatment with residual insecticide spray may cost £120 to £150, while a whole-house treatment or a heat treatment for severe infestations can cost £200 to £400 or more. Some pest control companies offer follow-up visits included in the price, while others charge separately for each visit. Most domestic moth infestations require at least two professional visits spaced several weeks apart to break the breeding cycle.',
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
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
      ]}
      relatedProducts={[
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
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
        Moth infestations are often well established before they are noticed. Unlike most household pests, moths operate quietly and out of sight &mdash; the adult moths you occasionally see fluttering near a light are not the ones causing the damage. It is the <strong>larvae</strong> (caterpillars) that feed on your clothes, carpets, and food, and they do their work hidden inside wardrobes, drawers, under furniture, and within food packaging. By the time you spot visible damage, the infestation may have been active for weeks or months. Knowing the early signs can help you catch a moth problem before it causes serious harm.
      </p>

      <h3>Holes in Clothing</h3>
      <p>
        The most common sign of a clothes moth infestation is finding small, <strong>irregular holes</strong> in woollen, cashmere, silk, or other animal-fibre garments. Unlike damage caused by snagging or wear, moth holes tend to appear in clusters and are often found on items stored at the back of wardrobes or in drawers that are not opened frequently. Moth larvae prefer to feed in dark, undisturbed locations, so garments that are worn regularly are at lower risk than those in long-term storage. If you find holes in a favourite jumper that has been sitting in a drawer for several months, moths are the most likely culprit.
      </p>

      <h3>Silken Tubes, Cases, and Webbing</h3>
      <p>
        Some moth species produce distinctive silken structures. The <strong>case-bearing clothes moth</strong> (<em>Tinea pellionella</em>) builds a small, portable case from silk and fragments of the material it is feeding on, dragging this case with it as it moves. The <strong>common webbing clothes moth</strong> (<em>Tineola bisselliella</em>) spins silken tubes and patches of webbing on the surface of fabrics, particularly in folds, creases, and seams. Finding these structures on garments or on the surface of a wool carpet is a definitive sign of clothes moth activity. In food cupboards, <strong>pantry moth</strong> larvae produce webbing that clumps dry food products together, creating noticeable sticky masses in flour, rice, or cereal.
      </p>

      <h3>Frass and Shed Skins</h3>
      <p>
        Moth larvae produce <strong>frass</strong> (tiny droppings) as they feed. Clothes moth frass appears as fine, sandy or grain-like particles, often the same colour as the fabric being eaten. You may find small piles of frass in the bottom of wardrobes, in the folds of stored garments, or along the edges of carpets near skirting boards. Larvae also shed their skins multiple times as they grow, and these <strong>translucent, husk-like shed skins</strong> can accumulate in the same areas. Both frass and shed skins are strong indicators of active larval feeding.
      </p>

      <h3>Adult Moths</h3>
      <p>
        Seeing adult moths is often what first alerts homeowners to a problem. Clothes moths are <strong>small, golden-buff coloured moths</strong> approximately 6 to 8 millimetres long. They are poor flyers and tend to scuttle or make short, fluttering hops rather than flying strongly. They actively avoid light and are most often seen in dark corners, on walls near wardrobes, or flying weakly when disturbed by opening a cupboard or drawer. Pantry moths are slightly larger, with distinctive <strong>coppery-brown wing tips</strong> and a wingspan of about 15 to 20 millimetres. They are more confident flyers than clothes moths and are often spotted flying around kitchens in the evening.
      </p>

      <h3>Threadbare Patches on Carpets</h3>
      <p>
        Carpet moth larvae feed on the wool fibres in carpets and rugs, creating <strong>threadbare or bald patches</strong> where the pile has been eaten away down to the backing. This damage typically occurs in areas that are dark and undisturbed &mdash; <strong>under heavy furniture, behind sofas, along the edges of fitted carpets next to skirting boards, and beneath curtains</strong>. If you move a piece of furniture and find a bare patch of carpet underneath, carpet moths are the most likely cause. You may also see live larvae, silken webbing, and frass in the damaged area.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Check stored items regularly.</strong> Moth infestations thrive in undisturbed locations. Garments stored in boxes, suitcases, or at the back of wardrobes for months without being moved are at the highest risk. Make a habit of inspecting stored wool, cashmere, and silk items every two to three months, and check under heavy furniture at least twice a year.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Clothes Moths vs Carpet Moths vs Pantry Moths */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="types">Clothes Moths vs Carpet Moths vs Pantry Moths</h2>

      <p>
        The term &ldquo;moth problem&rdquo; covers several distinct species, and knowing which type you are dealing with determines the correct treatment. The UK&apos;s three main pest moth categories are clothes moths, carpet moths, and pantry moths. Each has different habits, food preferences, and treatment requirements.
      </p>

      <h3>Common Webbing Clothes Moth (<em>Tineola bisselliella</em>)</h3>
      <p>
        The common webbing clothes moth is the single most destructive textile pest in British homes. Adults are <strong>small, golden-buff moths approximately 6 to 8 millimetres long</strong> with a narrow, elongated wing shape and no distinctive markings. They avoid light and prefer dark, undisturbed spaces such as wardrobes, drawers, storage boxes, and the backs of cupboards. Adults do not feed at all &mdash; they have no functional mouthparts &mdash; and live for only two to four weeks, during which time the female lays <strong>50 to 100 eggs</strong> on suitable fabrics. The larvae are creamy-white caterpillars up to 10 millimetres long that feed on <strong>keratin</strong>, the protein found in animal-derived fibres: wool, cashmere, silk, fur, feathers, and leather. They spin a loose web of silk over the feeding area and can cause extensive damage to garments, upholstery, and soft furnishings over several weeks. In a centrally heated UK home, the webbing clothes moth can breed continuously year-round, completing its life cycle from egg to adult in <strong>four to six weeks</strong> in warm conditions.
      </p>

      <h3>Case-Bearing Clothes Moth (<em>Tinea pellionella</em>)</h3>
      <p>
        The case-bearing clothes moth is similar in size to the webbing clothes moth but can be distinguished by <strong>three faint dark spots on each forewing</strong>. Its larvae construct a distinctive portable case made from silk and fragments of the material they are feeding on, and they carry this case with them as they move. The larval case is typically <strong>6 to 10 millimetres long</strong> and is open at both ends, allowing the larva to extend its head to feed while remaining protected inside. The case-bearing clothes moth causes the same type of damage as the webbing clothes moth &mdash; holes in woollen garments, damage to silk and cashmere &mdash; and the treatment methods are identical. It is slightly less common in UK homes than the webbing clothes moth but is still frequently encountered.
      </p>

      <h3>Carpet Moth (<em>Trichophaga tapetzella</em> and others)</h3>
      <p>
        The term &ldquo;carpet moth&rdquo; is used loosely to describe any clothes moth species that infests wool carpets rather than (or in addition to) garments. In practice, the species involved are usually the same webbing and case-bearing clothes moths described above, but they are feeding on the <strong>wool fibres in fitted carpets and rugs</strong> rather than on clothes. Carpet moth damage is distinctive: <strong>bald or threadbare patches</strong> where the pile has been eaten away, concentrated in dark, undisturbed areas beneath furniture, along skirting board edges, and under curtains. Carpet moth infestations have become increasingly common in UK homes in recent years, partly due to the popularity of wool-rich carpets and partly due to warmer, centrally heated homes that allow year-round breeding. Treatment for carpet moths is broadly the same as for clothes moths but with additional emphasis on thorough vacuuming, edge treatment, and potentially professional spray application.
      </p>

      <h3>Indian Meal Moth (<em>Plodia interpunctella</em>)</h3>
      <p>
        The Indian meal moth is the UK&apos;s most common <strong>stored-product pest moth</strong>, also known as the pantry moth. Adults are distinctly different in appearance from clothes moths: they are slightly larger, with a wingspan of approximately <strong>15 to 20 millimetres</strong>, and their forewings have a characteristic two-tone pattern &mdash; <strong>pale greyish-cream at the base and coppery-bronze at the tips</strong>. They are stronger, more confident flyers than clothes moths and are often seen flying around kitchens in the evening. Indian meal moth larvae are small, whitish caterpillars that infest a wide range of dry food products including flour, rice, cereals, pasta, dried fruit, nuts, chocolate, pet food, and birdseed. The larvae produce <strong>silk webbing</strong> that binds food particles together into clumps, and they leave behind frass and shed skins as they feed. Pantry moths do not damage textiles &mdash; their diet is entirely food-based &mdash; so the treatment approach is completely different from clothes moth control.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Quick identification:</strong> If you find small, golden-buff moths hiding in dark corners near wardrobes, you almost certainly have clothes moths. If you see slightly larger moths with coppery-brown wing tips flying in the kitchen, you have pantry moths. The treatments are very different, so correct identification is important.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Moths Are a Problem */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="why-problem">Why Moths Are a Problem</h2>

      <p>
        Moths may seem innocuous compared to rats, wasps, or cockroaches, but the damage they cause can be <strong>financially devastating</strong>. A single undetected clothes moth infestation in a wardrobe can destroy hundreds or thousands of pounds worth of woollen suits, cashmere jumpers, silk garments, and designer clothing. Carpet moth damage to a quality wool carpet can cost thousands to repair or replace. Unlike many pests, moth damage is <strong>irreversible</strong> &mdash; once a garment has been eaten, it cannot be repaired to its original condition. This makes early detection and prompt treatment critically important.
      </p>

      <h3>Damage to Clothing and Textiles</h3>
      <p>
        Clothes moth larvae feed on <strong>wool, cashmere, silk, fur, feathers, and leather</strong> &mdash; essentially any material containing the protein keratin. A moderate infestation in an undisturbed wardrobe can destroy multiple garments over the course of a few weeks. The larvae are particularly attracted to garments that are <strong>soiled with food stains, sweat, or body oils</strong>, as these organic residues provide additional nutrients. Vintage clothing collections, wedding dresses in storage, military uniforms, antique textiles, and museum artefacts are all at particular risk. In the UK, the <strong>estimated annual cost of moth damage to textiles runs into the tens of millions of pounds</strong>.
      </p>

      <h3>Damage to Carpets and Rugs</h3>
      <p>
        Wool and wool-blend carpets are a major target for moth larvae. Damage typically starts in dark, undisturbed areas &mdash; under sofas, beneath beds, along skirting board edges, and behind curtains &mdash; and may go unnoticed for months until furniture is moved or a room is redecorated. Replacing a damaged section of fitted carpet is expensive and often results in a visible repair, while replacing an entire room&apos;s carpet can cost <strong>&pound;500 to &pound;2,000 or more</strong> depending on the size and quality. Valuable antique rugs can suffer catastrophic and irreplaceable damage.
      </p>

      <h3>Food Contamination</h3>
      <p>
        Pantry moth larvae contaminate stored food products with <strong>webbing, frass (droppings), and shed larval skins</strong>. While eating food that has been contaminated by pantry moth larvae is not considered a significant health risk, it is deeply unpleasant, and the affected food must be discarded. A severe pantry moth infestation can require the disposal of large quantities of flour, rice, cereals, pasta, nuts, dried fruit, and other dry goods, which represents a significant waste. The cost of replacing a fully stocked food cupboard can easily exceed <strong>&pound;100 to &pound;200</strong>.
      </p>

      <div className="not-prose">
        <StatCallout value="&pound;3,000+" label="potential cost of replacing a damaged wool carpet and ruined garments from a single moth infestation" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Moth Control Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">DIY Moth Control Methods</h2>

      <p>
        Most moth infestations in UK homes can be resolved with thorough, systematic DIY treatment. The key principle is that you must target <strong>all life stages</strong> &mdash; eggs, larvae, and adults &mdash; because killing only the adults you can see will not stop the infestation. Moth eggs and larvae hidden in fabrics, crevices, and cracks will continue to develop and emerge as new adults within weeks. A comprehensive treatment combines physical removal (vacuuming, washing, freezing), chemical treatment (sprays, moth killers), and monitoring (pheromone traps) to break the breeding cycle. Here are the main DIY options available in the UK.
      </p>

      <h3>Pheromone Moth Traps</h3>
      <p>
        Pheromone traps are <strong>sticky traps impregnated with synthetic female moth pheromones</strong> that attract and catch adult male moths. They are an essential monitoring and control tool. By trapping the males, you reduce the fertilisation of eggs and disrupt the breeding cycle. Pheromone traps also serve a crucial diagnostic purpose: they confirm which moth species you have, indicate the severity of the infestation, and show whether your treatment efforts are working over time. Place traps in wardrobes, drawers, and storage areas for clothes moths, or in food cupboards for pantry moths. Check and replace them every <strong>six to eight weeks</strong>. Popular and effective UK brands include <strong>Acana</strong>, <strong>Moth Stop</strong>, and <strong>London Moth Killer</strong> pheromone traps.
      </p>

      <h3>Moth Killer Sprays and Papers</h3>
      <p>
        Moth killer products containing insecticides such as <strong>permethrin, transfluthrin, or pyrethroids</strong> are available as hanging units for wardrobes, sachets for drawers, and sprays for carpets and fabrics. Hanging moth killers release a slow, continuous vapour that kills adult moths and larvae within the enclosed space of a wardrobe or cupboard. Carpet and fabric sprays can be applied directly to affected areas, along skirting board edges, and into crevices. These products are effective at killing active moths and larvae but should be used in combination with thorough cleaning and vacuuming for the best results. Always follow the manufacturer&apos;s instructions regarding application rates and ventilation.
      </p>

      <h3>Cedar and Lavender</h3>
      <p>
        Cedar wood blocks, balls, and rings have a long history of use as moth deterrents. The aromatic oils in fresh cedar have mild repellent properties that can discourage adult moths from laying eggs in the immediate vicinity. Lavender sachets work on the same principle. However, it is important to understand the limitations: <strong>cedar and lavender will not kill moth eggs or larvae</strong> that are already present, and their repellent effect diminishes as the aromatic oils evaporate over time. Cedar blocks should be lightly sanded every few months to refresh the scent. These natural products are best used as a <strong>supplementary preventive measure</strong> in wardrobes and drawers that have already been cleaned and treated, rather than relied upon to resolve an active infestation.
      </p>

      <h3>Freezing</h3>
      <p>
        Freezing is an effective, chemical-free method for killing moth eggs, larvae, and adults on individual items. Place the infested garment or textile in a <strong>sealed plastic bag</strong>, remove as much air as possible, and freeze at <strong>&minus;18&deg;C or colder for at least 72 hours</strong>. For maximum certainty, use a freeze-thaw-freeze cycle: freeze for 72 hours, thaw at room temperature for 24 hours, then freeze again for a further 72 hours. This approach is particularly useful for delicate items that cannot be washed at high temperatures, such as cashmere, silk, and items with embellishments or beading. Domestic freezers typically maintain &minus;18&deg;C, which is sufficient.
      </p>

      <h3>Hot Washing and Dry Cleaning</h3>
      <p>
        Washing garments and textiles at <strong>60&deg;C or above</strong> will kill all moth life stages, including eggs. This is the most practical treatment for washable woollen items, cotton garments contaminated with larvae, bedding, curtains, and other machine-washable textiles. Items that cannot withstand a 60&deg;C wash should be dry-cleaned instead &mdash; the solvents used in the dry-cleaning process are lethal to moths at all life stages. For items that are neither washable nor suitable for dry cleaning, freezing is the preferred alternative.
      </p>

      <h3>Thorough Vacuuming</h3>
      <p>
        Vacuuming is one of the most important steps in any moth treatment programme. A powerful vacuum cleaner will physically remove <strong>eggs, larvae, pupae, frass, and shed skins</strong> from carpets, rugs, wardrobe floors, drawer interiors, and upholstered furniture. Pay particular attention to <strong>edges, corners, crevices, under furniture, along skirting boards, and in the gaps between floorboards</strong>. Use the crevice nozzle to get into tight spaces. After vacuuming, immediately empty the vacuum bag or canister into an outdoor bin and seal the bag to prevent any captured larvae from crawling back out.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Vacuum before you spray.</strong> Thorough vacuuming before applying any moth killer spray or powder ensures the insecticide reaches the carpet fibres and crevices where eggs and larvae are hiding, rather than being applied on top of a layer of dust and debris. It also physically removes a large proportion of the infestation before chemical treatment begins.</p>
        </Callout>
      </div>

      <p>
        For a detailed comparison of the most effective moth control products available in the UK, including hanging killers, pheromone traps, carpet sprays, and sachets, see our <Link href="/best/moth-killers" className="text-blue-600 hover:underline font-medium">Best Moth Killers UK 2026</Link> review.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for moth killer products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best moth killers, pheromone traps, carpet sprays, and sachets available in the UK.</p>
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
        If you have confirmed a clothes moth infestation in your wardrobe, drawers, or storage areas, follow this systematic step-by-step approach to eliminate it. Half-measures will not work &mdash; clothes moth treatment must be thorough and sustained over several weeks to break the breeding cycle completely.
      </p>

      <h3>Step 1: Empty and Inspect Everything</h3>
      <p>
        Remove every garment and textile from the infested wardrobe, drawer, or storage area. Inspect each item individually for signs of damage, larvae, silken cases, webbing, and frass. Separate items into three groups: <strong>those that need washing or dry cleaning</strong> (any woollen, silk, cashmere, or fur items, plus any visibly contaminated items), <strong>those that need freezing</strong> (delicate items that cannot be washed at 60&deg;C), and <strong>those that are undamaged and can be set aside</strong> after inspection. Do not return any items to the wardrobe until the treatment is complete.
      </p>

      <h3>Step 2: Vacuum Thoroughly</h3>
      <p>
        Vacuum the entire interior of the wardrobe or drawer &mdash; floor, walls, shelves, rails, corners, and crevices &mdash; using the crevice attachment. Moth eggs are tiny (approximately 0.5 millimetres) and can be lodged in the smallest gaps, so take your time and be methodical. If the infestation extends to a carpeted area around the wardrobe, vacuum the carpet thoroughly as well, especially along the edges near the skirting boards. Empty the vacuum immediately into a sealed bin bag and dispose of it outdoors.
      </p>

      <h3>Step 3: Wash, Freeze, or Dry-Clean Affected Items</h3>
      <p>
        Wash all machine-washable items at <strong>60&deg;C or above</strong>. Take delicate woollen, cashmere, and silk items to a dry cleaner, specifying that you are treating a moth infestation. Freeze items that cannot be washed or dry-cleaned by sealing them in plastic bags and placing them in the freezer at &minus;18&deg;C for at least 72 hours (or use the freeze-thaw-freeze method described above). The goal is to ensure that every textile item that was in the infested space has been treated to kill any eggs, larvae, or adults present.
      </p>

      <h3>Step 4: Apply Moth Killer Treatment</h3>
      <p>
        Once the wardrobe or storage area is empty and vacuumed, apply a moth killer spray to all internal surfaces, paying particular attention to corners, joints, and any cracks or crevices. Place <strong>hanging moth killers</strong> inside the wardrobe and <strong>sachets</strong> in drawers. These products release a continuous low-level vapour that kills any remaining moths or newly hatched larvae over the following weeks. Also place <strong>pheromone traps</strong> inside the wardrobe to monitor the situation and catch any adult males that emerge.
      </p>

      <h3>Step 5: Monitor for 8&ndash;12 Weeks</h3>
      <p>
        Do not assume the problem is solved after the initial treatment. The clothes moth life cycle takes <strong>four to six weeks</strong> in a warm home, so eggs laid before your treatment may still hatch over the following weeks. Keep pheromone traps in place and check them weekly. If you are still catching moths after eight weeks, repeat the vacuuming and treatment steps. Most infestations require at least <strong>two treatment cycles</strong> to fully eradicate. Only when the pheromone traps have been empty for four consecutive weeks can you be confident the infestation is over.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Treat the whole wardrobe, not just the damaged items.</strong> Moth eggs can be on any garment in the wardrobe, not just the ones showing visible damage. Treating only the damaged items while leaving the rest untouched is the most common reason moth infestations recur after treatment.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Treat a Pantry Moth Infestation */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="pantry-moth-treatment">How to Treat a Pantry Moth Infestation</h2>

      <p>
        Pantry moth treatment is entirely different from clothes moth treatment because the source is <strong>contaminated food</strong> rather than textiles. The Indian meal moth infests a wide range of dry stored food products, and effective treatment centres on finding and removing the contaminated food, cleaning the storage area, and preventing re-infestation.
      </p>

      <h3>Step 1: Inspect All Dry Food Products</h3>
      <p>
        Check every packet, bag, box, and container of dry food in your kitchen cupboards and pantry. Indian meal moth larvae infest flour, rice, pasta, cereals, oats, dried fruit, nuts, chocolate, spices, tea, pet food, and birdseed. Look for <strong>webbing, clumping, tiny caterpillars, and shed skins</strong> inside packaging. The larvae can chew through thin cardboard and plastic packaging, so even sealed packets may be contaminated. Check particularly the backs of cupboards and items that have been stored for a long time without being used.
      </p>

      <h3>Step 2: Discard All Contaminated Food</h3>
      <p>
        Dispose of every food item that shows any sign of infestation, however slight. If in doubt, throw it out. Place discarded food in sealed bin bags and remove them from the house immediately. It is better to over-discard than to leave a contaminated item behind, as even a small number of surviving larvae can restart the infestation cycle. Many people find it easier to simply discard <strong>all</strong> open dry food products and start fresh, particularly in severe infestations.
      </p>

      <h3>Step 3: Deep-Clean the Cupboards</h3>
      <p>
        Remove shelf liners and vacuum the entire cupboard interior, paying close attention to corners, hinges, crevices, and the gap between shelves and the cupboard walls. Pantry moth larvae can pupate in surprisingly concealed locations &mdash; behind shelf brackets, in the threads of screw holes, in the gap between a shelf and the wall, and even in the hinge mechanisms of cupboard doors. After vacuuming, wipe all surfaces with a solution of warm water and white vinegar or a diluted kitchen disinfectant. Allow the cupboards to dry completely before restocking.
      </p>

      <h3>Step 4: Place Pheromone Traps</h3>
      <p>
        Place pantry moth pheromone traps in the affected cupboards to catch any remaining adult males and to monitor for any recurrence. These traps use a different pheromone from clothes moth traps, so make sure you buy <strong>traps specifically designed for Indian meal moths / pantry moths</strong>. Check the traps weekly and replace them every six to eight weeks.
      </p>

      <h3>Step 5: Store Food Properly Going Forward</h3>
      <p>
        Transfer all dry food products to <strong>airtight, hard-sided containers</strong> &mdash; glass jars with screw-top lids or rigid plastic containers with secure seals. Pantry moth larvae can chew through thin plastic bags, paper, and cardboard, so these materials provide no protection. Airtight containers serve a dual purpose: they prevent moths from reaching the food, and if a food item was already contaminated when you bought it (which is a common source of pantry moth infestations), the container prevents any emerging moths from spreading to other products.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Pantry moths often arrive with the shopping.</strong> Indian meal moth eggs and larvae are frequently already present in food products when you buy them, having entered the packaging at the warehouse or during transport. This is why pantry moth infestations can appear even in very clean kitchens. Transferring all dry food into sealed containers as soon as you get home from the supermarket is the single most effective prevention measure.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Moth-Proof Your Home */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="moth-proofing">How to Moth-Proof Your Home</h2>

      <p>
        Prevention is always cheaper than cure, especially with moths, where the cost of damaged garments and carpets can far exceed the cost of treatment. Once you have dealt with an active infestation, or if you want to protect your home proactively, the following measures will significantly reduce the risk of moth problems.
      </p>

      <h3>Clean Before You Store</h3>
      <p>
        Moth larvae are strongly attracted to garments that carry <strong>food stains, sweat, body oils, and skin cells</strong>. Always wash or dry-clean woollen, silk, and cashmere items before putting them into seasonal storage. This single step removes the organic residues that make garments attractive to egg-laying moths and eliminates any eggs or larvae that may already be on the fabric.
      </p>

      <h3>Use Sealed Storage</h3>
      <p>
        Store out-of-season woollen and natural-fibre garments in <strong>sealed, airtight containers</strong> &mdash; vacuum storage bags, zipped garment bags, or lidded plastic boxes. This physically prevents adult moths from accessing the garments to lay eggs. Ensure items are thoroughly clean before sealing, and add cedar blocks or lavender sachets as an extra deterrent.
      </p>

      <h3>Regular Vacuuming</h3>
      <p>
        Vacuum wool carpets and rugs regularly, and make a point of vacuuming <strong>under and behind furniture</strong> at least once a month. Carpet moth larvae thrive in dark, undisturbed areas, so disrupting these zones with regular vacuuming removes eggs and larvae before they can establish themselves. Pay particular attention to the edges of fitted carpets along skirting boards, beneath sofas and beds, and behind curtains.
      </p>

      <h3>Maintain Pheromone Traps Year-Round</h3>
      <p>
        Even after an infestation has been resolved, keep pheromone traps in wardrobes and storage areas as an early warning system. Catching even a single moth in a trap alerts you to a potential new infestation before any damage occurs, allowing you to take action immediately. Replace traps every eight to twelve weeks to ensure the pheromone lure remains effective.
      </p>

      <h3>Rotate Your Wardrobe</h3>
      <p>
        Moths prefer undisturbed locations. Garments that are worn regularly, moved, and exposed to light are at much lower risk than items sitting untouched at the back of a dark wardrobe for months. Make a habit of rotating your wardrobe &mdash; moving stored items to the front periodically and handling garments regularly. The physical disturbance alone deters moths from establishing themselves.
      </p>

      <h3>Maintain Good Ventilation</h3>
      <p>
        Moths favour warm, humid, still environments. Ensuring good airflow in wardrobes and storage areas &mdash; leaving wardrobe doors slightly ajar when possible, using ventilated garment bags rather than sealed plastic covers for everyday storage, and keeping rooms well ventilated &mdash; makes the environment less attractive to egg-laying moths.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call">When to Call a Professional</h2>

      <p>
        Many moth infestations can be resolved with thorough DIY treatment. However, there are specific situations where professional pest control is strongly recommended or essential. Professional moth treatment involves commercial-grade insecticides, residual sprays, and sometimes specialist heat treatment that is not available to consumers.
      </p>

      <h3>Severe or Widespread Carpet Moth Infestations</h3>
      <p>
        If carpet moth damage is found across multiple rooms, extends over large areas of carpet, or has been established for many months, professional treatment is likely to be more effective than DIY methods alone. A pest controller can apply a <strong>residual insecticide spray</strong> to the entire carpet surface, edges, and underlay, which continues to kill larvae for several weeks after application. For severe infestations, a <strong>heat treatment</strong> may be recommended, which raises the temperature in the affected rooms to a level that is lethal to all moth life stages.
      </p>

      <h3>Recurring Infestations</h3>
      <p>
        If you have treated a moth infestation once but it returns within a few months, there is likely a <strong>hidden reservoir of eggs or larvae</strong> that your treatment missed. Common hiding places include beneath underlay, inside wall cavities, in the gap between fitted carpets and skirting boards, inside upholstered furniture, and within the structure of the building itself. A professional pest controller has the experience and equipment to locate and treat these concealed sources.
      </p>

      <h3>High-Value Items at Risk</h3>
      <p>
        If the infestation threatens <strong>high-value textiles</strong> &mdash; a valuable rug collection, antique tapestries, a wardrobe of designer clothing, vintage or heritage garments &mdash; the cost of professional treatment is typically far less than the cost of the damage that an uncontrolled infestation could cause. Professional-grade treatments are faster-acting and more thorough than consumer products, reducing the risk of further damage while treatment is ongoing.
      </p>

      <h3>Commercial Properties</h3>
      <p>
        Hotels, museums, galleries, theatres, high-end retail stores, and other commercial properties with valuable textiles, costumes, or soft furnishings require professional moth management with documented treatment programmes and ongoing monitoring. The scale and value of the assets at risk make DIY approaches inadequate.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>Professional moth treatment typically costs <strong>&pound;120 to &pound;250</strong> for a standard room. Whole-house treatments or heat treatments for severe infestations can cost <strong>&pound;300 to &pound;500+</strong>. Most infestations require at least two professional visits spaced several weeks apart.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="&pound;120&ndash;&pound;250" label="typical cost for professional moth treatment per room in the UK" />
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Moth Problem Beyond DIY?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How Much Does Moth Control Cost? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">How Much Does Moth Control Cost in the UK?</h2>

      <p>
        The cost of moth control in the UK depends on whether you are using DIY methods or hiring a professional, the size of the infested area, and the severity of the problem.
      </p>

      <h3>DIY Treatment Costs</h3>
      <p>
        A comprehensive DIY moth treatment programme for a single wardrobe or room typically costs between <strong>&pound;25 and &pound;60</strong>. This includes pheromone traps (&pound;5 to &pound;12 for a pack), hanging moth killers (&pound;5 to &pound;10 for a set of four), carpet and fabric moth killer spray (&pound;8 to &pound;15 per can), and sachets for drawers (&pound;5 to &pound;10). Cedar products and lavender sachets add another &pound;5 to &pound;15. The total investment is modest relative to the value of the garments and carpets being protected. DIY treatment requires consistent effort over six to twelve weeks but is effective for the majority of domestic infestations.
      </p>

      <h3>Professional Treatment Costs</h3>
      <p>
        Professional moth treatment in the UK typically costs between <strong>&pound;120 and &pound;250 per room</strong> for a standard residual insecticide spray treatment. A whole-house treatment or a multi-room treatment will cost proportionally more. Specialist <strong>heat treatment</strong>, where the room is heated to approximately 52&ndash;56&deg;C for several hours to kill all moth life stages, costs <strong>&pound;300 to &pound;500+ per room</strong> but provides very high kill rates in a single treatment. Most professional moth treatments include a <strong>follow-up visit</strong> four to six weeks after the initial treatment to check for any recurrence and apply a second treatment if necessary. Some companies offer a guarantee period during which additional treatments are provided at no extra charge if the infestation returns.
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

      <h3>What are the signs of a moth infestation?</h3>
      <p>
        The most common signs of a clothes moth infestation are small, irregular holes in woollen, silk, or cashmere garments; fine, sandy-coloured frass (droppings) in the bottom of wardrobes or drawers; silken tubes or cases attached to fabrics; and adult moths fluttering in dark corners, particularly near wardrobes and clothing storage. For carpet moths, look for <strong>threadbare patches on wool carpets</strong>, especially under furniture and along skirting boards. Pantry moth signs include webbing or clumping in dry foods such as flour, rice, cereals, and dried fruit, along with small caterpillars crawling on cupboard walls and ceilings.
      </p>

      <h3>Do moths eat cotton or synthetic fabrics?</h3>
      <p>
        No. Clothes moth larvae feed exclusively on <strong>animal-derived fibres</strong> containing the protein keratin. This includes wool, cashmere, silk, fur, feathers, and leather. They cannot digest cotton, polyester, nylon, or other synthetic fabrics. However, moths will sometimes damage blended fabrics that contain a mix of wool and synthetic fibres, and they can damage cotton or synthetic garments that are heavily soiled with food stains, sweat, or body oils, as they feed on the <strong>organic residue</strong> rather than the fabric itself.
      </p>

      <h3>Are moths harmful to humans?</h3>
      <p>
        Moths are not directly harmful to humans. They do not bite, sting, or transmit diseases. The damage they cause is entirely to materials and food. Clothes moth larvae destroy woollen garments, carpets, upholstery, and other animal-fibre textiles, which can result in <strong>significant financial loss</strong>. Pantry moth larvae contaminate stored food products with webbing, frass, and shed skins, making the food inedible. The main impact of moths is economic rather than medical.
      </p>

      <h3>How long does it take to get rid of moths?</h3>
      <p>
        A thorough DIY moth treatment programme typically takes <strong>four to eight weeks</strong> to bring an infestation under control, because you need to eliminate not only the adult moths and active larvae but also any eggs that have yet to hatch. The clothes moth life cycle from egg to adult takes approximately four to six weeks in a warm home, so treatment must continue for at least this long to catch newly hatching larvae. Pheromone traps should be left in place for at least <strong>three months</strong> to monitor for residual activity. Severe infestations treated professionally may require two to three visits spaced several weeks apart.
      </p>

      <h3>Do cedar balls and lavender really repel moths?</h3>
      <p>
        Cedar wood and lavender have some <strong>mild moth-repellent properties</strong>, and both have a long history of traditional use for protecting stored clothing. Fresh cedar blocks or shavings release aromatic oils that can deter adult moths from laying eggs in the immediate vicinity. Lavender sachets have a similar mild repellent effect. However, neither cedar nor lavender will kill moth eggs or larvae that are already present, and their effectiveness diminishes as the scent fades over time. They are best used as a supplementary preventive measure alongside proper cleaning, sealed storage, and pheromone traps &mdash; not as a standalone treatment for an active infestation.
      </p>

      <h3>Can you freeze clothes to kill moths?</h3>
      <p>
        Yes. Freezing is an effective chemical-free method for killing moth eggs, larvae, and adults. Place the item in a sealed plastic bag, remove as much air as possible, and freeze at <strong>&minus;18&deg;C or colder for at least 72 hours</strong>. For maximum effectiveness, use a freeze-thaw-freeze cycle: freeze for 72 hours, thaw at room temperature for 24 hours, then freeze again for a further 72 hours. This ensures that any eggs surviving the first freeze in a dormant state are killed during the second cycle. Freezing is ideal for delicate items that cannot be washed at high temperatures, such as cashmere, silk, and fur.
      </p>

      <h3>What temperature kills moths in a washing machine?</h3>
      <p>
        A wash temperature of <strong>60&deg;C or above</strong> will kill moth eggs, larvae, and adults. This is the most practical method for treating washable woollen items, contaminated bedding, and other machine-washable textiles. Items that cannot withstand a 60&deg;C wash &mdash; such as cashmere, silk, and some delicate woollens &mdash; should be dry-cleaned or frozen instead. Tumble drying on a hot setting after washing provides an additional thermal kill step.
      </p>

      <h3>How much does professional moth treatment cost in the UK?</h3>
      <p>
        Professional moth treatment typically costs between <strong>&pound;120 and &pound;250</strong> for a standard residential room, depending on the size of the affected area and the treatment method used. A single-room residual insecticide spray may cost &pound;120 to &pound;150, while a whole-house treatment or specialist heat treatment for severe infestations can cost <strong>&pound;300 to &pound;500+</strong>. Most domestic moth infestations require at least two professional visits spaced several weeks apart to break the breeding cycle. For a full cost breakdown, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>
    </GuideLayout>
  );
}
