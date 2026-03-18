import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Squirrels: The Complete UK Guide (2026) | PestPro Index',
    description:
      'Expert guide to squirrel control in UK homes and gardens. Learn about grey squirrel problems, humane deterrents, loft proofing, and when to call a professional.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-squirrels',
    },
    openGraph: {
      title: 'How to Get Rid of Squirrels: The Complete UK Guide (2026) | PestPro Index',
      description:
        'Expert guide to squirrel control in UK homes and gardens. Learn about grey squirrel problems, humane deterrents, loft proofing, and when to call a professional.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-squirrels',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Squirrels: The Complete UK Guide (2026)',
  description:
    'Expert guide to squirrel control in UK homes and gardens. Learn about grey squirrel problems, humane deterrents, loft proofing, and when to call a professional.',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-squirrels',
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
      name: 'How to Get Rid of Squirrels',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-squirrels',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I relocate a grey squirrel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Under the Wildlife and Countryside Act 1981, grey squirrels are listed on Schedule 9 as an Invasive Alien Species. It is illegal to release a captured grey squirrel back into the wild in the UK. If you trap a grey squirrel, it must be humanely dispatched. Releasing it — even in a nearby woodland — is a criminal offence that can result in a fine of up to \u00a35,000 or six months in prison. This law exists because grey squirrels are an invasive non-native species that causes significant ecological damage, particularly to native red squirrel populations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do squirrels get into lofts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grey squirrels are excellent climbers and can exploit surprisingly small gaps to enter loft spaces. They typically gain access through gaps where roof tiles have slipped or lifted, holes around soffit boards and fascia, gaps where pipes or cables enter the roofline, damaged or missing ventilation grilles, and gaps where the roofline meets the wall. A grey squirrel can squeeze through a hole as small as 5 centimetres in diameter. They will also gnaw at wood and plastic to enlarge existing gaps. Overhanging tree branches provide easy access to the roof, so keeping branches trimmed at least 2 metres back from the roofline is an important preventive measure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What damage can squirrels cause in a loft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Squirrels in a loft can cause extensive and costly damage. Their most dangerous behaviour is gnawing electrical wiring, which strips the insulation and creates a serious fire risk. They also gnaw wooden roof timbers, joists, and rafters, weakening the structural integrity of the roof. Squirrels tear up loft insulation to build nests (dreys), reducing your home\'s energy efficiency. They can gnaw through plastic water pipes, causing leaks and water damage to ceilings below. Their urine and droppings contaminate loft insulation and can cause staining and odour problems. A single pair of squirrels can cause thousands of pounds of damage if left unchecked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are squirrels active at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Grey squirrels are diurnal, meaning they are active during the day, primarily around dawn and dusk. This is one of the key ways to distinguish a squirrel infestation from a rat infestation in your loft. If you hear scratching, scurrying, and thumping noises in your loft during daylight hours — particularly in the early morning and late afternoon — it is almost certainly squirrels. Rats, by contrast, are nocturnal and are most active at night. If the noises occur after dark, rats or mice are the more likely culprit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does professional squirrel removal cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional squirrel removal in the UK typically costs between \u00a3150 and \u00a3350 for a standard loft treatment. This usually includes an initial survey, setting traps, humane dispatch, proofing entry points, and two to three follow-up visits to check traps and ensure the problem is resolved. More complex jobs — such as properties with multiple entry points, extensive proofing work, or large loft spaces — can cost \u00a3250 to \u00a3500 or more. Prices vary by region, with London and the South East typically at the higher end of the range.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it legal to trap squirrels in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, it is legal to trap grey squirrels in the UK, but there are strict rules. Live-capture cage traps must be checked at least once every 24 hours, and any grey squirrel caught must be humanely dispatched — it is illegal to release it. Spring traps (kill traps) such as the Fenn Mark 4 may only be used inside a tunnel or covered trap to prevent catching non-target species, and they must also be checked daily. Poison is not approved for use against squirrels in the UK. All trapping must be carried out in a manner that avoids unnecessary suffering. If you are not confident in dispatching a trapped squirrel, you should hire a professional pest controller.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop squirrels digging up my garden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Squirrels dig in gardens mainly to bury and retrieve food caches, particularly nuts and seeds. To deter them, cover newly planted bulbs with chicken wire or wire mesh pegged into the soil. Use squirrel-proof bird feeders that close under the squirrel\'s weight. Remove fallen fruit and nuts from the ground promptly. Apply capsaicin-based (chilli) repellent sprays to areas where squirrels are digging — squirrels dislike the taste and smell. Motion-activated sprinklers and ultrasonic deterrent devices can also discourage squirrels from spending time in your garden, though results vary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\u0027s the difference between squirrel and rat noises in a loft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The key difference is timing. Squirrel noises occur during the day, especially around dawn and dusk, because grey squirrels are diurnal. Rat noises occur at night, as rats are nocturnal. Squirrel noises also tend to be louder and more distinctive — you may hear heavy scurrying, thumping, rolling sounds (from nuts being moved), and loud gnawing. Rats produce lighter scratching and scurrying sounds. Squirrels are larger and heavier than rats, so their movements sound more substantial. If you hear what sounds like something running across the loft floor during daylight hours, squirrels are the most likely cause.',
      },
    },
  ],
};

const tocItems = [
  { id: 'identifying', title: 'Identifying a Squirrel Problem' },
  { id: 'dangers', title: 'Why Squirrels Are Dangerous' },
  { id: 'diy-methods', title: 'DIY Squirrel Deterrent Methods' },
  { id: 'proofing', title: 'Squirrel-Proofing Your Property' },
  { id: 'when-to-call', title: 'When to Call a Professional' },
  { id: 'costs', title: 'Squirrel Control Costs UK' },
  { id: 'law', title: 'The Law on Squirrels in the UK' },
  { id: 'squirrel-control-by-city', title: 'Find a Squirrel Control Expert' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfSquirrelsPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Squirrels: The Complete UK Guide (2026)"
      subtitle="A practical guide to grey squirrel control in UK homes and gardens &mdash; identification, deterrents, loft proofing, legal requirements, and when to call a professional"
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
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Foxes: Complete UK Guide', href: '/guides/how-to-get-rid-of-foxes' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
      ]}
      relatedProducts={[
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Fox Deterrents UK 2026', href: '/best/fox-deterrents' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Moth Killers UK', href: '/best/moth-killers' },
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
      {/* INTRODUCTION */}
      {/* ------------------------------------------------------------------ */}

      <p>
        The grey squirrel (<em>Sciurus carolinensis</em>) is the UK&apos;s most common nuisance wildlife pest. Originally introduced from North America in the 1870s as a fashionable addition to country estates, the grey squirrel has since spread to every corner of mainland Britain. There are now an estimated <strong>2.7 million grey squirrels</strong> in the UK &mdash; vastly outnumbering the native red squirrel (<em>Sciurus vulgaris</em>), whose population has declined to approximately 140,000 and is now largely confined to parts of Scotland, Northumberland, Cumbria, and a handful of isolated reserves. The grey squirrel is directly responsible for this decline through competition for food and habitat, and through carrying the squirrelpox virus, which is fatal to reds but harmless to greys.
      </p>

      <p>
        For homeowners, grey squirrels present a different but equally serious set of problems. They are highly adept at entering loft spaces through remarkably small gaps and, once inside, they gnaw electrical wiring, tear up insulation, damage roof timbers, and can cause water damage by chewing through plastic pipes. A squirrel infestation in a loft is not merely an annoyance &mdash; it is a genuine fire hazard and a structural risk that can lead to thousands of pounds in repair costs if left unaddressed. In gardens, grey squirrels strip bark from trees, dig up newly planted bulbs, raid bird feeders, and take fruit and vegetables from allotments and growing beds.
      </p>

      <p>
        It is important to understand the legal distinction between grey and red squirrels in the UK. Grey squirrels are classified as an <strong>Invasive Alien Species</strong> under the Wildlife and Countryside Act 1981 and are listed on Schedule 9. This means they have no legal protection, and in fact it is <strong>illegal to release a captured grey squirrel back into the wild</strong>. If you catch a grey squirrel in a trap, you are legally required to humanely dispatch it. Releasing it &mdash; even relocating it to a woodland a few miles away &mdash; is a criminal offence. Red squirrels, by contrast, are fully protected under the same Act, and it is an offence to intentionally kill, injure, or take a red squirrel, with penalties of up to an unlimited fine and six months&apos; imprisonment.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Grey squirrels are classified as an Invasive Alien Species in the UK.</strong> Under the Wildlife and Countryside Act 1981, it is illegal to release a captured grey squirrel back into the wild. They must be humanely dispatched. Releasing one &mdash; even into a nearby park or woodland &mdash; is a criminal offence carrying a fine of up to &pound;5,000 or six months in prison.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Identifying a Squirrel Problem */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="identifying">Identifying a Squirrel Problem</h2>

      <p>
        Grey squirrels are bold, conspicuous animals, and their presence is usually easier to detect than that of rats or mice. However, recognising the early signs of a squirrel problem &mdash; particularly when they have entered your loft &mdash; allows you to act before serious damage occurs. Here are the key indicators to watch for.
      </p>

      <h3>Scratching and Scurrying Noises in the Loft</h3>
      <p>
        The most common first sign of squirrels in a loft is <strong>noise</strong>. Grey squirrels are surprisingly loud once inside a roof space. You may hear rapid scurrying across the loft floor, scratching at wood and timbers, gnawing sounds, and occasional heavy thumping as squirrels jump between rafters or move objects. The crucial detail is <strong>timing</strong>: grey squirrels are diurnal animals, most active around dawn and dusk. If you are hearing noises in your loft during the early morning or late afternoon, squirrels are the most likely cause. Rats, by contrast, are nocturnal and active predominantly after dark. This timing distinction is one of the most reliable ways to identify which animal has taken up residence in your roof space.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Hearing scratching in your loft during DAYTIME?</strong> That&apos;s the key clue it&apos;s squirrels, not rats. Rats are nocturnal &mdash; squirrels are active from dawn to dusk. If the scurrying and gnawing happens in the early morning or late afternoon, you almost certainly have squirrels.</p>
        </Callout>
      </div>

      <h3>Droppings</h3>
      <p>
        Grey squirrel droppings are <strong>cylindrical, roughly 8 to 12 millimetres long</strong>, and dark brown to black in colour. They are slightly larger and rounder than rat droppings and are often found scattered around loft spaces, along roof timbers, near entry points, and around nesting sites. Fresh droppings are dark and moist; older droppings become lighter and dry. If you find droppings in your loft alongside daytime noises, a squirrel infestation is very likely.
      </p>

      <h3>Gnawed Wood and Wiring</h3>
      <p>
        Grey squirrels have strong, continuously growing incisor teeth that they must keep worn down by gnawing. In a loft, they gnaw on <strong>roof timbers, joists, rafters, stored items, and &mdash; most dangerously &mdash; electrical wiring</strong>. Look for fresh gnaw marks on wooden beams (these appear lighter in colour than the surrounding aged wood), chewed edges on boxes or stored possessions, and stripped or damaged cables. Any signs of gnawed wiring should be treated as an emergency due to the fire risk.
      </p>

      <h3>Disturbed Insulation and Nesting Material</h3>
      <p>
        Squirrels build large, untidy nests called <strong>dreys</strong> using whatever materials are available. In a loft, they will tear up fibreglass loft insulation, cardboard, fabric, and paper to construct their nests. If you inspect your loft and find insulation pulled apart, bunched up, or dragged into a corner, and you see a collection of shredded material forming a rough ball or mound, a squirrel has been nesting. Squirrel dreys in lofts are typically larger and more conspicuous than mouse or rat nests.
      </p>

      <h3>Entry Holes on the Roofline</h3>
      <p>
        Grey squirrels can squeeze through a gap as small as <strong>5 centimetres in diameter</strong> &mdash; roughly the size of a tennis ball. Inspect the exterior of your property for holes in soffit boards, gaps where fascia boards meet the roof, displaced or broken roof tiles, damaged ventilation grilles, and any other openings along the roofline. Squirrels will also gnaw at wood, plastic, and even lead flashing to enlarge existing gaps. Fresh gnaw marks around a hole on the roofline are a strong indicator that squirrels are using it as an entry point.
      </p>

      <h3>Bark Stripping on Trees</h3>
      <p>
        In gardens, grey squirrels strip bark from the trunks and branches of trees, particularly broadleaf species such as beech, oak, sycamore, and maple. They do this to access the sweet, sap-rich layer (cambium) beneath the bark. Bark stripping typically occurs in <strong>late spring and summer</strong> when sap flow is at its peak. Look for patches of exposed white wood on trunks and branches, with strips and shreds of bark on the ground below. Severe bark stripping can girdle a branch or trunk, killing it above the damaged area. Young trees are particularly vulnerable.
      </p>

      <h3>Raided Bird Feeders</h3>
      <p>
        If your bird feeders are being emptied unusually quickly, if feeders are found knocked to the ground, or if you see squirrels hanging acrobatically from feeders, you have a squirrel problem in your garden. Grey squirrels are persistent and ingenious at accessing bird feeders, and they can consume large quantities of seed, nuts, and fat balls in a single visit. Squirrel-proof feeders are available and are one of the most effective ways to reduce garden squirrel activity.
      </p>

      <h3>Grey Squirrel Appearance</h3>
      <p>
        The grey squirrel is a medium-sized rodent with a <strong>head-and-body length of approximately 25 centimetres</strong> and a bushy tail of a similar length. Its fur is predominantly grey on the back and flanks with a white or pale grey underside. Some individuals show brownish tones, particularly along the flanks and on the top of the head. The ears are rounded and lack the prominent tufts seen on red squirrels. Grey squirrels are significantly larger and heavier than red squirrels, weighing between <strong>400 and 650 grams</strong> compared to the red squirrel&apos;s 250 to 340 grams.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Squirrels Are Dangerous */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="dangers">Why Squirrels Are Dangerous</h2>

      <p>
        Grey squirrels may look harmless, even charming, but they are capable of causing serious and expensive damage to residential properties, and their behaviour poses genuine safety risks that homeowners should not underestimate.
      </p>

      <h3>Fire Risk from Gnawed Wiring</h3>
      <p>
        The single most dangerous behaviour of grey squirrels in a domestic setting is their habit of <strong>gnawing electrical wiring</strong>. Like all rodents, squirrels must gnaw constantly to keep their incisors from overgrowing, and electrical cables in loft spaces are a frequent target. When a squirrel strips the insulation from a live cable, it creates an exposed wire that can arc, short-circuit, or overheat, potentially starting a fire within the roof structure. House fires caused by rodent-damaged wiring are well documented in the UK, and squirrels are considered a more significant risk than rats in this regard because they are more likely to inhabit loft spaces where wiring is concentrated. Any evidence of gnawed cables in your loft should be treated as an urgent safety hazard, and an electrician should inspect the wiring before power is restored to affected circuits.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Squirrels gnawing electrical wiring is a serious fire risk.</strong> Exposed or damaged cables in your loft can arc and ignite surrounding insulation or timber. If you find any signs of gnawed wiring, switch off the circuit at the consumer unit and call a qualified electrician immediately. Do not ignore this &mdash; it is one of the most common causes of unexplained loft fires in the UK.</p>
        </Callout>
      </div>

      <h3>Structural Damage</h3>
      <p>
        Grey squirrels gnaw on <strong>roof timbers, joists, rafters, and supporting beams</strong> within loft spaces. Over time, this weakens the structural integrity of the roof. They can also gnaw through plasterboard, skirting boards, and even brickwork mortar in their efforts to access or move within a property. Damage to load-bearing timbers may require costly structural repairs, particularly if the problem has been present for an extended period without detection.
      </p>

      <h3>Water Damage</h3>
      <p>
        Squirrels will gnaw through <strong>plastic water pipes and water tank fittings</strong> in loft spaces, causing leaks that can result in significant water damage to ceilings, walls, and flooring in the rooms below. A slow leak from a gnawed pipe may go unnoticed for weeks, especially if the loft is not regularly inspected, leading to damp, mould growth, and staining that is expensive to repair.
      </p>

      <h3>Disease and Contamination</h3>
      <p>
        While grey squirrels are not considered a major disease vector in the way that rats are, they can carry <strong>fleas, ticks, and mites</strong> that may infest a home, and their urine and droppings contaminate loft insulation and stored items. Squirrel urine has a strong, unpleasant odour that can permeate into the rooms below. The bacteria <em>Leptospira</em>, which causes leptospirosis, has been found in grey squirrel populations, though transmission to humans is extremely rare compared to transmission from rats. The squirrelpox virus carried by greys is devastating to red squirrels but poses no risk to humans.
      </p>

      <h3>Garden and Ecological Damage</h3>
      <p>
        In the wider environment, grey squirrels cause enormous damage. They <strong>strip bark from trees</strong>, killing branches and sometimes entire trees. They raid bird nests, taking eggs and chicks of woodland species. They compete with native red squirrels for food and habitat, and they transmit squirrelpox, which has been the primary driver of red squirrel decline across England and Wales. In gardens, they dig up bulbs, take fruit and vegetables, and can destroy young trees and shrubs. The economic cost of grey squirrel damage to UK forestry alone is estimated at <strong>&pound;6 to &pound;10 million per year</strong>.
      </p>

      <div className="not-prose">
        <StatCallout value="50 trees" label="A single grey squirrel can strip bark from up to 50 trees in one season" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Squirrel Deterrent Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">DIY Squirrel Deterrent Methods</h2>

      <p>
        If you have squirrels in your garden or are trying to prevent them from entering your loft, there are several DIY methods available. It is important to understand, however, that once squirrels have established themselves inside a loft space, DIY methods are often insufficient, and professional help is usually necessary to resolve the problem safely and legally. The methods below are most effective for <strong>garden deterrence and prevention</strong>, or as a complement to professional loft treatment.
      </p>

      <h3>Squirrel-Proof Bird Feeders</h3>
      <p>
        If bird feeders are attracting squirrels to your garden, switching to <strong>squirrel-proof feeders</strong> is one of the most effective steps you can take. These feeders use weight-activated mechanisms that close the feeding ports when a squirrel (heavier than a bird) climbs onto them, or enclose the feeder in a cage with gaps large enough for small birds but too narrow for a squirrel. Pole-mounted feeders with baffles (cone-shaped guards) beneath them are also effective. Position feeders at least <strong>2.5 metres from any branch, fence, or structure</strong> that a squirrel could jump from &mdash; grey squirrels can leap horizontally up to 3 metres and vertically up to 1.5 metres. For a detailed comparison of the most effective products, see our <Link href="/best/squirrel-deterrents" className="text-blue-600 hover:underline font-medium">Best Squirrel Deterrents UK 2026</Link> review.
      </p>

      <h3>Capsaicin (Chilli) Repellent Sprays</h3>
      <p>
        Repellent sprays containing <strong>capsaicin</strong> &mdash; the active compound in chilli peppers &mdash; can be applied to bird seed, bulb plantings, and areas where squirrels are feeding or digging. Squirrels find the taste and smell of capsaicin highly unpleasant and will typically avoid treated areas. Birds, by contrast, are not sensitive to capsaicin, so treated bird food remains attractive to them. Capsaicin-based sprays need to be <strong>reapplied regularly</strong>, especially after rain, as they wash off quickly. They are a deterrent rather than a permanent solution, but they can be effective at reducing squirrel activity in specific locations such as flower beds, vegetable patches, and around feeders.
      </p>

      <h3>Motion-Activated Deterrents</h3>
      <p>
        Motion-activated sprinklers and ultrasonic devices can deter squirrels from gardens. <strong>Motion-activated sprinklers</strong> detect movement and release a short burst of water, which startles squirrels and discourages them from returning. These are most effective in specific areas such as vegetable beds or around bird feeders. <strong>Ultrasonic deterrent devices</strong> emit high-frequency sounds intended to be unpleasant to squirrels. Their effectiveness is debated, and many pest control professionals consider them unreliable, but some homeowners report positive results. Neither method will prevent squirrels from entering a loft, and they should be considered garden-level deterrents only.
      </p>

      <h3>Wire Mesh on Bulb Plantings</h3>
      <p>
        If squirrels are digging up newly planted bulbs in your garden, cover the planting area with <strong>chicken wire or galvanised wire mesh</strong> pegged flat against the soil surface. The mesh allows plants to grow through but prevents squirrels from digging. This is a simple, effective, and inexpensive solution that works well for tulip, crocus, and daffodil plantings, all of which are commonly targeted by grey squirrels.
      </p>

      <h3>Trapping &mdash; Legal Requirements</h3>
      <p>
        DIY trapping of grey squirrels is legal in the UK, but it comes with significant legal and ethical responsibilities. <strong>Live-capture cage traps</strong> must be checked at least once every 24 hours, and any grey squirrel caught must be <strong>humanely dispatched</strong> &mdash; it is illegal to release it. Approved <strong>spring traps</strong> (kill traps) such as the <strong>Fenn Mark 4</strong>, <strong>Fenn Mark 6</strong>, and <strong>Springer Mark 4</strong> may be used, but they must be set inside a tunnel or covered trap to prevent catching non-target species such as birds and hedgehogs, and they must also be checked daily. Poison is <strong>not approved</strong> for use against squirrels in the UK. If you are not comfortable with the responsibility of dispatching a trapped squirrel, you should engage a professional pest controller rather than attempting to trap them yourself.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Use 16-gauge galvanised wire mesh with 25mm holes</strong> to proof entry points and protect vulnerable areas. Squirrels can gnaw through chicken wire, plastic mesh, and expanding foam with ease &mdash; only metal mesh of sufficient gauge will stop them. Galvanised steel resists corrosion and lasts for years without maintenance.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Never use expanding foam to block squirrel entry holes.</strong> Squirrels can gnaw through expanding foam in minutes. Using it gives a false sense of security and delays proper proofing. Always use galvanised wire mesh (16-gauge, 25mm holes) secured with screws or masonry fixings for any hole that squirrels have been using.</p>
        </Callout>
      </div>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for squirrel deterrent products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best squirrel deterrents, repellents, and squirrel-proof bird feeders available in the UK.</p>
        <a
          href="/best/squirrel-deterrents"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Squirrel Deterrents UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Squirrel-Proofing Your Property */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="proofing">Squirrel-Proofing Your Property</h2>

      <p>
        Proofing &mdash; physically blocking squirrels from entering your property &mdash; is the single most important and effective long-term solution to a squirrel problem. Trapping and deterrents can reduce squirrel numbers temporarily, but unless the entry points are sealed, new squirrels will move in. Grey squirrels are territorial, and an empty territory with an accessible loft will be claimed by a new squirrel within days or weeks. Proper proofing, done correctly, provides a permanent fix.
      </p>

      <h3>Step 1: Survey Your Roofline</h3>
      <p>
        Before any proofing work, carry out a thorough external survey of your roofline. Using binoculars from ground level, or carefully from a ladder, inspect every inch of the soffit boards, fascia, roof tiles, ridge tiles, ventilation grilles, and the junctions where the roof meets walls. Look for gaps, holes, gnaw marks, displaced tiles, and damaged or missing vent covers. Mark every potential entry point. Grey squirrels often use <strong>multiple entry and exit points</strong>, so identifying all of them is essential before any sealing work begins.
      </p>

      <h3>Step 2: Confirm All Squirrels Have Left</h3>
      <p>
        <strong>Before sealing any entry points, you must ensure that no squirrels are still inside the loft.</strong> Sealing a squirrel inside will cause it to gnaw frantically at the roof structure and wiring in an attempt to escape, potentially causing far more damage than if left alone. It will also die inside your roof space, creating a severe odour problem. To confirm the loft is empty, loosely stuff newspaper or tissue paper into the entry holes and check the following day. If the paper has been pushed out, squirrels are still coming and going. Repeat until the paper remains undisturbed for at least <strong>48 hours</strong>, which indicates that the squirrels are outside. You can then proceed to seal the holes permanently.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Check for young before sealing.</strong> Grey squirrels breed twice a year, with litters born in <strong>February to March</strong> and <strong>June to July</strong>. Baby squirrels (kittens) are blind, hairless, and completely dependent on their mother for the first 7 to 10 weeks. If you seal entry points while young are inside, the mother will cause extensive damage trying to reach them, and the young will die. Always check for nesting activity and young before proofing, particularly during these breeding periods. If you suspect young are present, wait until they are old enough to leave the nest (around 10 to 12 weeks old) before proofing, or call a professional who can handle the situation safely.</p>
        </Callout>
      </div>

      <h3>Step 3: Seal Entry Points with Wire Mesh</h3>
      <p>
        Use <strong>16-gauge galvanised wire mesh with 25-millimetre holes</strong> to cover all identified entry points. Cut the mesh to size with tin snips and secure it firmly using <strong>screws and washers</strong> (for timber) or <strong>masonry fixings</strong> (for brickwork and render). The mesh must be fixed securely around all edges &mdash; squirrels are strong and will pull at any loose section. Do not use chicken wire (too flimsy), plastic mesh (squirrels gnaw through it), expanding foam (chewed through in minutes), or wood filler (easily gnawed). Only galvanised steel mesh of sufficient gauge will reliably exclude squirrels.
      </p>

      <h3>Step 4: Repair or Replace Damaged Vent Covers</h3>
      <p>
        Roof ventilation grilles are a very common entry point. Many older properties have plastic vent covers that squirrels can gnaw through or break. Replace any damaged plastic vent covers with <strong>metal mesh vent covers</strong> or fit galvanised wire mesh behind existing vents. Ensure the replacement covers still allow adequate ventilation &mdash; blocking roof ventilation entirely can lead to condensation problems in the loft.
      </p>

      <h3>Step 5: Trim Overhanging Trees</h3>
      <p>
        Grey squirrels are exceptional climbers and jumpers. They routinely use <strong>overhanging tree branches</strong> as a highway to reach rooflines. Cut back any branches that come within <strong>2 metres</strong> of your roof, walls, or guttering. This removes the squirrel&apos;s easiest access route and forces it to climb the building from ground level, which is much more difficult and can be further deterred with physical barriers. Regularly check for regrowth and trim again as needed.
      </p>

      <h3>Step 6: Check and Maintain</h3>
      <p>
        After proofing, inspect your roofline at least <strong>twice a year</strong> &mdash; ideally in spring and autumn &mdash; to check that all mesh and seals remain intact. Squirrels are persistent and will test proofed areas repeatedly, looking for weaknesses. Replace any mesh that shows signs of corrosion, loosening, or gnaw damage. Early maintenance prevents a small failure from becoming a new entry point.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call">When to Call a Professional</h2>

      <p>
        While garden-level squirrel deterrence can often be managed with DIY methods, a squirrel infestation inside your property &mdash; particularly in the loft &mdash; is a situation where professional pest control is strongly recommended. The combination of legal requirements (the obligation to humanely dispatch trapped grey squirrels), the risk of serious damage (gnawed wiring, structural timber, water pipes), and the difficulty of effective proofing at height make this a job best handled by experienced professionals. Here are the specific scenarios where you should call a pest controller.
      </p>

      <h3>Squirrels in Your Loft</h3>
      <p>
        If you have confirmed that squirrels are living in your loft &mdash; through daytime noises, droppings, gnawed materials, or visual sighting &mdash; a professional pest controller can survey the property, identify all entry points, set traps, carry out humane dispatch in accordance with the law, proof all entry points with appropriate materials, and conduct follow-up visits to ensure the problem is fully resolved. A typical programme involves <strong>two to three visits</strong> over a period of one to two weeks.
      </p>

      <h3>Evidence of Gnawed Wiring</h3>
      <p>
        If you find gnawed electrical cables in your loft, this is a <strong>fire safety emergency</strong>. Do not attempt to repair the wiring yourself. Switch off the affected circuits at the consumer unit, call a qualified electrician to assess and repair the damage, and engage a pest controller to remove the squirrels and proof the loft against re-entry. Do not delay &mdash; stripped wiring in close proximity to dry loft insulation and timber is a serious ignition risk.
      </p>

      <h3>Multiple Entry Points</h3>
      <p>
        If squirrels are entering your property through several different holes or gaps &mdash; which is common in older properties with deteriorating rooflines &mdash; comprehensive proofing requires working at height, often with scaffolding or a long ladder, and sealing every gap with appropriate materials. This is specialist work that is safest and most effectively carried out by a professional who has the equipment, materials, and expertise to do the job thoroughly.
      </p>

      <h3>You Are Not Comfortable with Dispatch</h3>
      <p>
        The legal requirement to humanely dispatch trapped grey squirrels is a significant responsibility. If you are not comfortable with this aspect of squirrel control &mdash; and many people are not &mdash; a professional pest controller will handle it as part of their service. There is no shame in this; it is one of the most common reasons homeowners choose professional squirrel control over DIY trapping.
      </p>

      <h3>Squirrels During Breeding Season</h3>
      <p>
        If squirrels are in your loft during the breeding periods (<strong>February to March</strong> or <strong>June to July</strong>), there may be dependent young in the nest. A professional can assess whether young are present, advise on the best timing for intervention, and manage the situation in a way that avoids unnecessary suffering while still resolving the infestation.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Squirrel Problem in Your Loft?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose">
        <Callout type="cost">
          <p>Professional squirrel removal typically costs <strong>&pound;150&ndash;&pound;350</strong> for a standard loft treatment including proofing, trapping, and 2&ndash;3 follow-up visits. More complex jobs with multiple entry points or extensive proofing may cost <strong>&pound;250&ndash;&pound;500+</strong>. Prices are typically higher in London and the South East.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="&pound;150&ndash;&pound;350" label="typical cost for professional squirrel removal in the UK" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Squirrel Control Costs UK */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">Squirrel Control Costs UK</h2>

      <p>
        Understanding the costs involved in squirrel control helps you budget appropriately and compare quotes from pest control companies. Prices vary depending on the method used, the complexity of the job, the number of visits required, and your location within the UK.
      </p>

      <h3>DIY Costs</h3>
      <p>
        DIY squirrel deterrent products are relatively inexpensive. <strong>Capsaicin repellent sprays</strong> cost approximately <strong>&pound;8 to &pound;15</strong> per bottle. <strong>Ultrasonic deterrent devices</strong> range from <strong>&pound;15 to &pound;40</strong>. <strong>Motion-activated sprinklers</strong> cost around <strong>&pound;20 to &pound;50</strong>. <strong>Squirrel-proof bird feeders</strong> range from <strong>&pound;20 to &pound;60</strong> depending on the design and capacity. <strong>Cage traps</strong> for live capture cost approximately <strong>&pound;15 to &pound;35</strong>. <strong>Galvanised wire mesh</strong> for proofing costs around <strong>&pound;10 to &pound;25</strong> per metre depending on gauge and width. In total, a DIY approach to garden squirrel deterrence typically costs between <strong>&pound;10 and &pound;50</strong>, while DIY proofing materials for a loft might cost <strong>&pound;30 to &pound;80</strong> depending on the extent of work needed.
      </p>

      <h3>Professional Costs</h3>
      <p>
        Professional squirrel control for a standard loft infestation typically costs between <strong>&pound;150 and &pound;350</strong>. This usually includes an initial survey and assessment, setting traps (cage or spring traps), humane dispatch, proofing of entry points with galvanised wire mesh, and <strong>two to three follow-up visits</strong> to check traps and confirm the problem is resolved. More complex jobs &mdash; those requiring extensive proofing, work at height with scaffolding, multiple entry points, or large loft spaces in detached properties &mdash; can cost <strong>&pound;250 to &pound;500 or more</strong>. Prices tend to be higher in London and the South East, and lower in the Midlands, North, and Scotland.
      </p>

      <h3>Additional Costs to Consider</h3>
      <p>
        Beyond the pest controller&apos;s fees, you may need to budget for related repairs. If squirrels have damaged electrical wiring, an <strong>electrician&apos;s inspection and repair</strong> typically costs <strong>&pound;100 to &pound;300</strong> depending on the extent of the damage. Replacing contaminated or damaged <strong>loft insulation</strong> costs approximately <strong>&pound;300 to &pound;600</strong> for a standard semi-detached house. If water pipes have been gnawed, <strong>plumbing repairs</strong> and any associated water damage remediation will add further costs. These ancillary expenses underscore the importance of addressing a squirrel infestation promptly before the damage escalates.
      </p>

      <p>
        For a detailed breakdown of pest control costs across all common UK pests, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: The Law on Squirrels in the UK */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="law">The Law on Squirrels in the UK</h2>

      <p>
        Squirrel control in the UK is governed by specific legislation, and it is essential that anyone dealing with squirrels &mdash; whether as a homeowner or a professional &mdash; understands the legal framework. The law treats grey squirrels and red squirrels very differently.
      </p>

      <h3>Grey Squirrels &mdash; Invasive Alien Species</h3>
      <p>
        The grey squirrel is listed on <strong>Schedule 9 of the Wildlife and Countryside Act 1981</strong>, which means it is classified as an Invasive Alien Species. Under this Act, it is <strong>illegal to release a grey squirrel into the wild</strong>. If you trap a grey squirrel using a live-capture cage trap, you are legally required to humanely dispatch it. You may not release it into your garden, into a park, into a woodland, or anywhere else. Releasing a trapped grey squirrel is a criminal offence punishable by a fine of up to <strong>&pound;5,000</strong> or up to <strong>six months&apos; imprisonment</strong>. This law exists to prevent the further spread and establishment of grey squirrels, which cause severe ecological damage to native wildlife and habitats.
      </p>

      <h3>Trapping Rules</h3>
      <p>
        <strong>Live-capture cage traps</strong> are legal for use against grey squirrels. They must be checked at least <strong>once every 24 hours</strong>, and any grey squirrel caught must be humanely dispatched. Non-target species (such as birds, hedgehogs, or red squirrels) caught accidentally must be released unharmed.
      </p>
      <p>
        <strong>Spring traps</strong> (kill traps) such as the Fenn Mark 4, Fenn Mark 6, and Springer Mark 4 are approved for use against grey squirrels under the <strong>Spring Traps Approval (England) Order 2018</strong> (with equivalent orders in Scotland and Wales). Spring traps must always be set <strong>inside a tunnel or covered run</strong> designed to exclude non-target animals. They must be checked at least once every 24 hours. Setting an unenclosed spring trap in the open is illegal, as it could catch and injure birds, hedgehogs, and other wildlife.
      </p>
      <p>
        <strong>Poison</strong> is <strong>not approved</strong> for use against grey squirrels in the UK. There is currently no legally approved rodenticide or toxin labelled for grey squirrel control available to either professionals or the public. Any use of poison against squirrels is illegal and can also pose serious risks to non-target wildlife, pets, and birds of prey.
      </p>

      <h3>Red Squirrels &mdash; Fully Protected</h3>
      <p>
        The native red squirrel (<em>Sciurus vulgaris</em>) is <strong>fully protected</strong> under the Wildlife and Countryside Act 1981. It is an offence to intentionally kill, injure, or take a red squirrel, or to damage, destroy, or obstruct access to a red squirrel drey (nest). Penalties for offences against red squirrels include an <strong>unlimited fine and up to six months&apos; imprisonment</strong>. Red squirrels are found in parts of Scotland, Northumberland, Cumbria, the Isle of Wight, Brownsea Island, Formby, and a small number of other reserves and islands. If you live in or near a red squirrel area, you must take particular care when carrying out any squirrel control to ensure that you do not inadvertently harm a red squirrel. If in any doubt, consult a professional pest controller or your local wildlife trust.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Red squirrels are FULLY PROTECTED by law.</strong> It is a criminal offence to intentionally kill, injure, or take a red squirrel, or to damage or destroy its nest. Penalties include an unlimited fine and up to six months in prison. If you live in an area where red squirrels are present, take extreme care to ensure that any grey squirrel control measures do not affect red squirrels. When in doubt, seek professional advice.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Find a Squirrel Control Expert */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="squirrel-control-by-city">Find a Squirrel Control Expert</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find squirrel control specialists in your area.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Squirrel Control?"
          subtext="Compare BPCA-certified pest control professionals near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/liverpool/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Liverpool
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/nottingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Nottingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/brighton/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Brighton
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/sheffield/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Sheffield
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/bradford/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bradford
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/newcastle/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Newcastle
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/cardiff/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Cardiff
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/leicester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leicester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/hampshire/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Hampshire
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/coventry/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Coventry
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find squirrel specialists &rarr;</span>
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
        For a detailed breakdown of pest control costs across all common UK pests, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide. You might also find our other guides helpful: <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">how to get rid of rats</Link>, <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/wasp-nest-removal" className="text-blue-600 hover:underline font-medium">wasp nest removal</Link>, <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">how to get rid of bed bugs</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, and <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">how to get rid of ants</Link>. For product reviews, browse our <Link href="/best/squirrel-deterrents" className="text-blue-600 hover:underline font-medium">best squirrel deterrents</Link>, <Link href="/best/rat-traps" className="text-blue-600 hover:underline font-medium">best rat traps</Link>, <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">best mouse traps</Link>, <Link href="/best/wasp-killers" className="text-blue-600 hover:underline font-medium">best wasp killers</Link>, <Link href="/best/cockroach-killers" className="text-blue-600 hover:underline font-medium">best cockroach killers</Link>, <Link href="/best/flea-treatments" className="text-blue-600 hover:underline font-medium">best flea treatments</Link>, and <Link href="/best/ant-killers" className="text-blue-600 hover:underline font-medium">best ant killers</Link> guides.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Can I relocate a grey squirrel?</h3>
      <p>
        No. Under the <strong>Wildlife and Countryside Act 1981</strong>, grey squirrels are listed on Schedule 9 as an Invasive Alien Species. It is <strong>illegal to release a captured grey squirrel back into the wild</strong> in the UK. If you trap a grey squirrel using a live-capture cage trap, you are legally required to humanely dispatch it. You may not release it into your garden, into a park, into a woodland, or anywhere else. Releasing a trapped grey squirrel is a criminal offence punishable by a fine of up to <strong>&pound;5,000</strong> or up to <strong>six months&apos; imprisonment</strong>. This law exists because grey squirrels are an invasive non-native species that causes significant ecological damage, particularly to native red squirrel populations and broadleaf woodland.
      </p>

      <h3>How do squirrels get into lofts?</h3>
      <p>
        Grey squirrels are excellent climbers and can exploit surprisingly small gaps to enter loft spaces. They typically gain access through gaps where <strong>roof tiles have slipped or lifted</strong>, holes around soffit boards and fascia, gaps where pipes or cables enter the roofline, damaged or missing ventilation grilles, and gaps where the roofline meets the wall. A grey squirrel can squeeze through a hole as small as <strong>5 centimetres in diameter</strong> &mdash; roughly the size of a tennis ball. They will also gnaw at wood, plastic, and even lead flashing to enlarge existing gaps. Overhanging tree branches provide easy access to the roof, so keeping branches trimmed at least <strong>2 metres</strong> back from the roofline is an important preventive measure.
      </p>

      <h3>What damage can squirrels cause in a loft?</h3>
      <p>
        Squirrels in a loft can cause <strong>extensive and costly damage</strong>. Their most dangerous behaviour is gnawing electrical wiring, which strips the insulation and creates a serious fire risk. They also gnaw wooden roof timbers, joists, and rafters, weakening the structural integrity of the roof. Squirrels tear up loft insulation to build nests (dreys), reducing your home&apos;s energy efficiency. They can gnaw through plastic water pipes, causing leaks and water damage to ceilings below. Their urine and droppings contaminate loft insulation and can cause staining and odour problems. A single pair of squirrels can cause <strong>thousands of pounds of damage</strong> if left unchecked for even a few months.
      </p>

      <h3>Are squirrels active at night?</h3>
      <p>
        No. Grey squirrels are <strong>diurnal</strong>, meaning they are active during the day, primarily around dawn and dusk. This is one of the key ways to distinguish a squirrel infestation from a rat infestation in your loft. If you hear scratching, scurrying, and thumping noises in your loft during <strong>daylight hours</strong> &mdash; particularly in the early morning and late afternoon &mdash; it is almost certainly squirrels. Rats, by contrast, are nocturnal and are most active at night. If the noises occur after dark, rats or mice are the more likely culprit.
      </p>

      <h3>How much does professional squirrel removal cost?</h3>
      <p>
        Professional squirrel removal in the UK typically costs between <strong>&pound;150 and &pound;350</strong> for a standard loft treatment. This usually includes an initial survey, setting traps, humane dispatch, proofing entry points with galvanised wire mesh, and two to three follow-up visits to check traps and ensure the problem is resolved. More complex jobs &mdash; such as properties with multiple entry points, extensive proofing work, or large loft spaces in detached properties &mdash; can cost <strong>&pound;250 to &pound;500 or more</strong>. Prices vary by region, with London and the South East typically at the higher end of the range. For a full cost breakdown, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      <h3>Is it legal to trap squirrels in the UK?</h3>
      <p>
        Yes, it is legal to trap grey squirrels in the UK, but there are <strong>strict rules</strong>. Live-capture cage traps must be checked at least once every <strong>24 hours</strong>, and any grey squirrel caught must be humanely dispatched &mdash; it is illegal to release it. Spring traps (kill traps) such as the <strong>Fenn Mark 4</strong> may only be used inside a tunnel or covered trap to prevent catching non-target species, and they must also be checked daily. <strong>Poison is not approved</strong> for use against squirrels in the UK. All trapping must be carried out in a manner that avoids unnecessary suffering. If you are not confident in dispatching a trapped squirrel humanely, you should hire a professional pest controller to handle the job.
      </p>

      <h3>How do I stop squirrels digging up my garden?</h3>
      <p>
        Squirrels dig in gardens mainly to bury and retrieve food caches, particularly nuts and seeds. To deter them, <strong>cover newly planted bulbs with chicken wire or wire mesh</strong> pegged into the soil. Use squirrel-proof bird feeders that close under the squirrel&apos;s weight. Remove fallen fruit and nuts from the ground promptly. Apply <strong>capsaicin-based (chilli) repellent sprays</strong> to areas where squirrels are digging &mdash; squirrels dislike the taste and smell, while birds are unaffected. Motion-activated sprinklers and ultrasonic deterrent devices can also discourage squirrels from spending time in your garden, though results with ultrasonic devices are inconsistent. For recommended products, see our <Link href="/best/squirrel-deterrents" className="text-blue-600 hover:underline font-medium">Best Squirrel Deterrents UK 2026</Link> review.
      </p>

      <h3>What&apos;s the difference between squirrel and rat noises in a loft?</h3>
      <p>
        The key difference is <strong>timing</strong>. Squirrel noises occur during the day, especially around dawn and dusk, because grey squirrels are diurnal. Rat noises occur at night, as rats are nocturnal. Squirrel noises also tend to be <strong>louder and more distinctive</strong> &mdash; you may hear heavy scurrying, thumping, rolling sounds (from nuts being moved), and loud gnawing. Rats produce lighter scratching and scurrying sounds. Squirrels are larger and heavier than rats, so their movements sound more substantial and easier to hear from the rooms below. If you hear what sounds like something running across the loft floor during daylight hours, with occasional heavy thuds, squirrels are the most likely cause.
      </p>
    </GuideLayout>
  );
}
