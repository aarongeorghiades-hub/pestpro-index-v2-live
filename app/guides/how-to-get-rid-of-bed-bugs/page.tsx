import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Bed Bugs: The Complete UK Guide (2026) | PestPro Index',
    description:
      'A comprehensive UK guide to identifying and eliminating bed bugs. Signs of infestation, DIY treatment options, professional heat treatment, costs, and prevention tips.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-bed-bugs',
    },
    openGraph: {
      title: 'How to Get Rid of Bed Bugs: The Complete UK Guide (2026) | PestPro Index',
      description:
        'A comprehensive UK guide to identifying and eliminating bed bugs. Signs of infestation, DIY treatment options, professional heat treatment, costs, and prevention tips.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-bed-bugs',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Bed Bugs: The Complete UK Guide (2026)',
  description:
    'A comprehensive UK guide to identifying and eliminating bed bugs. Signs of infestation, DIY treatment options, professional heat treatment, costs, and prevention tips.',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-bed-bugs',
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
      name: 'How to Get Rid of Bed Bugs',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-bed-bugs',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you see bed bugs with the naked eye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Adult bed bugs are 4 to 7 millimetres long — roughly the size of an apple seed — and are visible to the naked eye. They are flat, oval-shaped, and reddish-brown in colour. However, they are excellent at hiding in cracks and crevices during the day, which is why many people never see a live bug despite having an active infestation. Nymphs (juvenile bed bugs) are smaller and paler, making them harder to spot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do bed bugs transmit diseases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no confirmed evidence that bed bugs transmit diseases to humans. However, their bites cause itching, sleep disruption, and significant psychological distress. Scratching bites can lead to secondary bacterial infections. In severe infestations, the anxiety and insomnia caused by bed bugs can have a serious impact on mental health and quality of life.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can bed bugs survive without feeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bed bugs can survive remarkably long periods without a blood meal. In cool conditions, adult bed bugs have been recorded surviving up to 12 months without feeding. In typical UK room temperatures, they more commonly survive 2 to 6 months. This is one reason why simply leaving a property vacant does not eliminate an infestation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can bed bugs live in your hair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Unlike head lice, bed bugs do not cling to hair or skin. They are not adapted for living on a host. Bed bugs feed for 5 to 10 minutes, typically while the host is sleeping, and then return to their hiding spots in cracks and crevices near the bed. They do not remain on the body between feeds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do bed bugs only live in beds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While beds are their preferred harbourage because of the proximity to a sleeping host, bed bugs can inhabit any crack or crevice near where people rest or sleep. They are commonly found in sofa seams, armchair joints, office chairs, behind skirting boards, inside electrical outlets, behind picture frames, and even in cinema and theatre seats. The name is misleading.',
      },
    },
    {
      '@type': 'Question',
      name: 'How did I get bed bugs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bed bugs are almost always introduced to a property by being carried in on luggage, clothing, second-hand furniture, or from a neighbouring infested property. They are not attracted by dirt or poor hygiene — they are attracted by body heat and carbon dioxide from sleeping humans. Bed bugs are common in hotels, hostels, and public transport, and can easily hitch a ride home in your suitcase or on your clothing.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-are-bed-bugs', title: 'What Are Bed Bugs?' },
  { id: 'signs', title: 'Signs of Bed Bugs' },
  { id: 'where-they-hide', title: 'Where Do Bed Bugs Hide?' },
  { id: 'diy-treatment', title: 'DIY Bed Bug Treatment' },
  { id: 'professional-treatment', title: 'Professional Bed Bug Treatment' },
  { id: 'hotels', title: 'Bed Bugs in Hotels' },
  { id: 'prevention', title: 'How to Prevent Bed Bugs' },
  { id: 'bed-bug-treatment-by-city', title: 'Bed Bug Treatment by City' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfBedBugsPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Bed Bugs: The Complete UK Guide (2026)"
      subtitle="A comprehensive guide to identifying, treating, and preventing bed bug infestations in UK homes and hotels"
      lastUpdated="March 2026"
      readingTime="11 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
      ]}
      relatedProducts={[{ title: 'Best Bed Bug Treatment Products UK 2026', href: '/best/bed-bug-treatments' }]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: What Are Bed Bugs? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="what-are-bed-bugs">What Are Bed Bugs?</h2>

      <p>
        Bed bugs are small, wingless insects that feed exclusively on blood. The species found in the vast majority of UK infestations is <em>Cimex lectularius</em>, the common bed bug. Adults are <strong>4 to 7 millimetres long</strong> &mdash; roughly the size and shape of an apple seed &mdash; with flat, oval bodies and a reddish-brown colour. After feeding, they swell and darken to a deeper mahogany. They are nocturnal parasites, emerging from their hiding places at night to feed on sleeping hosts, drawn by body heat and the carbon dioxide we exhale.
      </p>

      <p>
        Despite their name, bed bugs are not a sign of poor hygiene. They are found in pristine five-star hotels just as readily as in budget hostels. They do not discriminate between clean and dirty homes. What they need is access to a human host and a crack or crevice to hide in during the day &mdash; nothing more. A bed bug infestation is not something to be embarrassed about; it is simply a pest problem that requires prompt, effective treatment.
      </p>

      <p>
        Bed bugs are extraordinary hitchhikers. They cannot fly or jump, but they are expert stowaways, spreading from one location to another by hiding in luggage, clothing, second-hand furniture, bedding, and even books. They can also migrate between adjoining properties through wall voids, cable runs, and shared ducting in blocks of flats. This ability to travel passively on human belongings is the primary reason bed bug infestations have risen so dramatically across the UK and indeed worldwide over the past two decades.
      </p>

      <p>
        The resurgence of bed bugs in the UK is well documented. Pest control companies across the country report year-on-year increases in callouts, driven by several factors: increased international travel, the growth of short-term holiday lets, the popularity of second-hand furniture, and &mdash; critically &mdash; the development of <strong>widespread resistance to pyrethroid insecticides</strong>, which were once the mainstay of bed bug control. Many bed bug populations in the UK now carry genetic mutations that make them virtually immune to the over-the-counter sprays that were formerly effective.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Bed bug infestations in the UK have risen by an estimated 65% over the past decade. London, Manchester, and Birmingham are the most affected cities.</p>
        </Callout>
      </div>

      <p>
        A female bed bug can lay between <strong>200 and 500 eggs</strong> in her lifetime, depositing them in batches of 10 to 50 in cracks and crevices near the host&apos;s sleeping area. The eggs are tiny &mdash; approximately 1 millimetre long &mdash; white, and glued to surfaces with a sticky secretion that makes them difficult to dislodge. Under typical UK room temperatures, eggs hatch in 6 to 10 days, and the emerging nymphs must take a blood meal at each of their five moult stages before reaching adulthood, a process that takes approximately 5 to 8 weeks. This rapid reproductive cycle means that a small, undetected introduction can become a significant infestation within a matter of months.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Signs of Bed Bugs */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="signs">Signs of Bed Bugs</h2>

      <p>
        Bed bugs are masters of concealment. They are flat enough to hide in the narrowest of cracks, and they are most active in the hours before dawn when their hosts are in the deepest stages of sleep. Many people live with an infestation for weeks or even months before recognising the signs. Learning what to look for is the essential first step towards effective treatment.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Check for bed bugs by lifting the mattress and inspecting the seams, piping, and tags with a torch. Pay special attention to the corners and where the mattress sits on the base. Dark spots along the stitching are a telltale sign.</p>
        </Callout>
      </div>

      <h3>Bites</h3>
      <p>
        Bed bug bites are often the first indication that something is wrong. They typically appear as <strong>small, red, itchy welts</strong>, often arranged in lines or clusters of three to five &mdash; sometimes referred to as &ldquo;breakfast, lunch, and dinner&rdquo; because of the characteristic linear pattern. The bites occur on exposed skin &mdash; face, neck, arms, hands, and shoulders &mdash; and tend to appear overnight. They can be intensely itchy and may take a week or more to fade.
      </p>
      <p>
        However, it is important to understand that <strong>not everyone reacts to bed bug bites</strong>. Studies suggest that up to 30% of people show no visible skin reaction at all. This means that the absence of bite marks does not guarantee the absence of bed bugs. Conversely, bed bug bites can easily be mistaken for mosquito bites, flea bites, or other skin conditions. Bites alone are not sufficient for a definitive diagnosis &mdash; you need to find physical evidence of the bugs themselves.
      </p>

      <h3>Blood Spots on Bedding</h3>
      <p>
        Small spots of blood on sheets, pillowcases, and duvet covers are a common sign. These occur when a recently fed bed bug is inadvertently crushed by the sleeper rolling over. The spots are typically dark red or rust-coloured and relatively small &mdash; roughly the size of a pinprick to the size of a small pea. If you are regularly finding small blood spots on your bedding despite having no obvious cuts or scratches, bed bugs should be high on the list of suspected causes.
      </p>

      <h3>Dark Spots and Smears (Faecal Marks)</h3>
      <p>
        Bed bug excrement consists of digested blood and appears as <strong>small, dark brown or black spots</strong>, typically 1 to 2 millimetres in diameter. These faecal marks are one of the most reliable indicators of an infestation. They are commonly found along mattress seams, on the piping and labels of the mattress, on the bed frame joints and slats, on the headboard, and on the wall behind and around the bed. The marks tend to bleed into fabric, similar to ink from a felt-tip pen, which distinguishes them from general dirt or dust. On hard surfaces, they appear as small, dark, slightly raised dots.
      </p>

      <h3>Shed Skins (Cast Exoskeletons)</h3>
      <p>
        As bed bug nymphs grow, they must shed their outer skin &mdash; or exoskeleton &mdash; at each of their <strong>five moult stages</strong>. These cast skins are translucent, shell-like casings that retain the shape of the bug. They accumulate in harbourage areas &mdash; along mattress seams, in the joints of the bed frame, behind the headboard, and in other crevices near the sleeping area. Finding shed skins is strong evidence of an active, breeding population.
      </p>

      <h3>Live Bugs</h3>
      <p>
        Adult bed bugs are visible to the naked eye, but you are unlikely to see them unless you go looking. To inspect for live bugs, strip the bed and examine the mattress seams, piping, and tags carefully, using a torch. Check the joints, screw holes, and staple points of the bed frame and headboard. Look behind skirting boards, behind electrical socket plates, behind picture frames, and in the folds of curtains near the bed. Adult bugs are reddish-brown and flat (or swollen and darker if recently fed). Nymphs are smaller and paler &mdash; almost translucent in their earliest stages &mdash; making them significantly harder to spot.
      </p>

      <h3>A Sweet, Musty Smell</h3>
      <p>
        In heavy infestations, bed bugs produce a distinctive, sweet, sickly, musty odour. This comes from the scent glands on their bodies and is often described as similar to the smell of coriander, overripe raspberries, or damp mouldy clothing. If you can detect this smell in a bedroom, the infestation is likely well established and will require professional treatment.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Where Do Bed Bugs Hide? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="where-they-hide">Where Do Bed Bugs Hide?</h2>

      <p>
        Bed bugs are thigmotactic, meaning they prefer to be in tight contact with surfaces on all sides of their body. This is why they favour narrow cracks and crevices rather than open spaces. Understanding where they hide is essential both for confirming an infestation and for ensuring that any treatment reaches every harbourage area.
      </p>

      <p>
        The primary hiding places are always close to the host&apos;s sleeping position. Bed bugs prefer to nest <strong>within 2 metres of the bed</strong>, though they are capable of travelling up to 30 metres if necessary. In a typical bedroom, the main harbourage sites include:
      </p>

      <ul>
        <li><strong>Mattress seams, piping, labels, and handles</strong> &mdash; the single most common hiding place</li>
        <li><strong>Bed frame joints, screw holes, and slats</strong> &mdash; particularly in wooden frames with multiple joints</li>
        <li><strong>Headboard</strong> &mdash; especially upholstered headboards with tufting, buttons, or piping, and the gap between headboard and wall</li>
        <li><strong>Bedside tables and drawers</strong> &mdash; in drawer joints, underneath, and behind</li>
        <li><strong>Behind skirting boards</strong> &mdash; in the gap between the skirting and the wall or floor</li>
        <li><strong>Carpet edges</strong> &mdash; where the carpet meets the skirting board, particularly near the bed</li>
        <li><strong>Behind electrical socket plates</strong> &mdash; the void behind a face plate provides an ideal harbourage</li>
        <li><strong>Behind picture frames and mirrors</strong> &mdash; particularly those on the wall directly above or adjacent to the bed</li>
        <li><strong>Curtain folds and pelmets</strong> &mdash; especially where curtains hang near or touch the bed</li>
        <li><strong>Wardrobes and chest of drawers</strong> &mdash; in joints, hinges, and behind the unit</li>
        <li><strong>Luggage and bags</strong> &mdash; bed bugs will readily hide in the seams and pockets of suitcases, rucksacks, and handbags</li>
      </ul>

      <div className="not-prose">
        <StatCallout value="2 metres" label="Preferred nesting distance from a sleeping host" />
      </div>

      <p>
        In more severe infestations, bed bugs spread outward from the bed into the wider room and eventually into adjacent rooms or neighbouring properties. In blocks of flats, they can travel through wall cavities, along pipework runs, through gaps around shared service risers, and via cable conduits between units. This makes infestations in multi-occupancy buildings particularly challenging to eradicate, as treatment may need to be coordinated across multiple flats simultaneously.
      </p>

      <p>
        Bed bugs are not confined to bedrooms. They can establish populations in living rooms (particularly in sofas and armchairs where people regularly sit or nap), in office chairs, in cinema and theatre seats, and on public transport. Any location where a human host remains stationary for an extended period can become a feeding site, and any nearby crack or crevice can become a hiding spot.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Bed Bug Treatment */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-treatment">DIY Bed Bug Treatment</h2>

      <p>
        It is important to be honest about the limitations of DIY bed bug treatment. Bed bugs are <strong>one of the most difficult pests to eliminate without professional help</strong>. Their ability to hide in the tiniest cracks, their resistance to many common insecticides, and their capacity to survive months without feeding all work against the homeowner attempting a DIY approach. That said, there are steps you can take to reduce the population, contain the infestation, and support professional treatment if and when it arrives.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Bed bugs are one of the hardest pests to eliminate with DIY methods. Most over-the-counter sprays are ineffective against resistant populations. If you have a confirmed infestation, professional treatment is strongly recommended.</p>
        </Callout>
      </div>

      <h3>Washing and Drying at High Temperature</h3>
      <p>
        Heat is one of the most effective weapons against bed bugs at all life stages. All bedding, clothing, curtains, and washable fabrics that may have been in contact with bed bugs should be washed at a minimum of <strong>60&deg;C</strong> and then tumble dried on the hottest setting for at least <strong>30 minutes</strong>. The sustained heat of the dryer is actually more lethal to bed bugs than the wash cycle itself. Items that cannot be washed &mdash; such as shoes, bags, or delicate fabrics &mdash; can be placed in a domestic freezer at <strong>&minus;18&deg;C for a minimum of 72 hours</strong>, which will kill all life stages including eggs. Place items in sealed plastic bags before freezing.
      </p>

      <h3>Vacuuming</h3>
      <p>
        Thorough vacuuming can physically remove a significant number of bed bugs, nymphs, and eggs from accessible surfaces. Focus on the mattress seams and piping, the bed frame joints, skirting boards, carpet edges, and any cracks and crevices near the sleeping area. Use the crevice attachment on your vacuum cleaner for maximum effectiveness. After vacuuming, <strong>immediately seal the vacuum bag in a plastic bag and dispose of it in an outdoor bin</strong>. If your vacuum uses a bagless canister, empty it into a sealed bag and then wash the canister thoroughly. Vacuuming alone will not eliminate an infestation, but it is a valuable complementary measure that reduces the population and removes visible evidence.
      </p>

      <h3>Bed Bug Sprays</h3>
      <p>
        A wide range of over-the-counter bed bug sprays is available from hardware shops, supermarkets, and online retailers. Most contain <strong>pyrethroid insecticides</strong> such as permethrin or cypermethrin. These sprays kill bed bugs on direct contact, but they have <strong>limited residual effect</strong> and, critically, many UK bed bug populations now carry resistance to pyrethroids. Research published in the Journal of Medical Entomology has shown that some bed bug strains are over 1,000 times more resistant to pyrethroids than susceptible populations. This means that spraying a product that worked perfectly well 20 years ago may now have little or no effect on the bugs in your home.
      </p>
      <p>
        If you do use a spray, apply it directly to harbourage areas &mdash; mattress seams, bed frame joints, skirting boards, and cracks &mdash; rather than misting the general room. Never use a bed bug spray directly on your skin, and always follow the manufacturer&apos;s safety instructions. Do not apply sprays to surfaces that come into direct contact with your face or hands.
      </p>

      <h3>Diatomaceous Earth</h3>
      <p>
        Diatomaceous earth (DE) is a fine powder made from the fossilised remains of tiny aquatic organisms called diatoms. It works by <strong>damaging the waxy outer layer</strong> of the bed bug&apos;s exoskeleton, causing the insect to dehydrate and die over a period of <strong>7 to 14 days</strong>. It is non-toxic to humans and pets, it does not break down over time, and &mdash; crucially &mdash; bed bugs cannot develop resistance to it because it works through a physical rather than a chemical mechanism.
      </p>
      <p>
        Apply a thin, even layer of food-grade diatomaceous earth in harbourage areas: along skirting boards, around bed legs, inside the frames of electrical sockets (with the power off), and along carpet edges. The powder is messy and can be irritating if inhaled in large quantities, so wear a dust mask during application. It is a slow-acting treatment, but it can be effective as part of a broader strategy, particularly against pyrethroid-resistant populations.
      </p>

      <h3>Mattress Encasements</h3>
      <p>
        Bed bug-proof mattress encasements are specially designed zip-up covers that enclose the entire mattress in a sealed fabric barrier. Any bed bugs trapped inside the encasement are unable to feed and will eventually die, while bugs outside are denied access to the harbourage within the mattress seams. Once fitted, <strong>do not remove the encasement for at least 12 months</strong>, as bed bugs can survive for extended periods without a blood meal. Encasements are also available for box springs and pillows. They are a valuable preventive measure as well as a treatment tool, making it much easier to spot and intercept bed bugs on the smooth, light-coloured surface of the encasement.
      </p>

      <h3>Interceptor Traps</h3>
      <p>
        Bed bug interceptor traps are small, shallow dishes placed under each leg of the bed. They work by exploiting the fact that bed bugs must climb up the bed legs to reach a sleeping host. The trap has a textured outer surface that bed bugs can climb up, but a smooth, polished inner well that they cannot escape from. Interceptor traps are an excellent <strong>monitoring tool</strong> &mdash; they confirm the presence and scale of an infestation and help you track whether treatment is working. They also provide a degree of protection by preventing bed bugs in the wider room from reaching the bed, provided the bed frame is not touching the wall and no bedding is trailing on the floor.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for bed bug treatment products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best sprays, powders, and prevention products available in the UK.</p>
        <a
          href="/best/bed-bug-treatments"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Bed Bug Treatment Products UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Professional Bed Bug Treatment */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="professional-treatment">Professional Bed Bug Treatment</h2>

      <p>
        For anything beyond the very earliest stages of a bed bug infestation, professional treatment is strongly recommended. Bed bugs are simply too resilient, too well hidden, and too resistant to over-the-counter products for most DIY approaches to achieve complete eradication. A qualified pest controller has access to professional-grade products, specialised equipment, and the training and experience to apply them effectively. Below are the main professional treatment options available in the UK.
      </p>

      <h3>Insecticide Treatment</h3>
      <p>
        Professional insecticide treatment for bed bugs uses <strong>professional-grade residual sprays and dusts</strong> that are significantly more potent and longer-lasting than anything available to the general public. These products often combine multiple active ingredients to overcome resistance &mdash; for example, a pyrethroid combined with a neonicotinoid or an insect growth regulator. The technician applies the product to all identified harbourage areas, the bed frame, skirting boards, carpet edges, and any other locations where bed bugs have been found or are likely to be hiding.
      </p>
      <p>
        A standard insecticide treatment programme typically involves <strong>2 to 3 visits, spaced 10 to 14 days apart</strong>. The gap between visits allows time for eggs to hatch, as most insecticides do not kill eggs. The follow-up treatments target newly hatched nymphs before they have a chance to mature and reproduce. Preparation is important: the technician will usually ask you to strip the bed, wash all bedding and clothing at 60&deg;C, vacuum thoroughly, and declutter the room before each visit.
      </p>
      <p>
        <strong>Cost:</strong> Typically <strong>&pound;150 to &pound;300 per room</strong> for a full treatment course, depending on the size of the room, the severity of the infestation, and the provider. London and the South East tend to be at the higher end of this range.
      </p>

      <h3>Heat Treatment</h3>
      <p>
        Heat treatment &mdash; also known as thermal treatment &mdash; is widely regarded as the <strong>single most effective method</strong> for eradicating bed bugs. Specialist equipment is used to raise the temperature of the entire room to <strong>56&deg;C or higher</strong> and hold it at that temperature for several hours. This temperature is lethal to bed bugs at every life stage, including eggs. The heat penetrates into cracks, crevices, mattresses, and soft furnishings, reaching bugs that insecticide sprays may not contact.
      </p>
      <p>
        The principal advantage of heat treatment is that it can achieve <strong>complete eradication in a single visit</strong> &mdash; no need for follow-up appointments. There are no chemicals involved, so there is no risk of insecticide resistance and no chemical residue. The room is typically usable again the same day. However, heat treatment does require the removal of heat-sensitive items (candles, certain electronics, pressurised containers) and careful monitoring throughout to ensure every part of the room reaches lethal temperature.
      </p>
      <p>
        <strong>Cost:</strong> Typically <strong>&pound;300 to &pound;600 per room</strong>. This is more expensive than insecticide treatment upfront, but when you factor in the single-visit resolution, the lack of chemical exposure, and the high success rate, it often represents the better value option for established infestations.
      </p>

      <h3>Canine Detection</h3>
      <p>
        Specially trained bed bug detection dogs can identify live bed bugs and viable eggs with an <strong>accuracy of 95% or higher</strong>. A trained dog can survey a room in minutes, detecting bed bugs by scent even when they are hidden deep in cracks and crevices that would take a human inspector much longer to check visually. Canine detection is particularly useful in situations where you suspect bed bugs but cannot find visual evidence, in multi-room or multi-property situations where you need to determine the extent of an infestation quickly, and for post-treatment verification to confirm that a treatment has been successful.
      </p>
      <p>
        <strong>Cost:</strong> Typically <strong>&pound;150 to &pound;300</strong> for a domestic property inspection, depending on the number of rooms and the provider.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>Professional bed bug treatment typically costs &pound;150 to &pound;300 per room for insecticide treatment (2-3 visits) or &pound;300 to &pound;600 per room for single-visit heat treatment.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="56&deg;C" label="Temperature required for heat treatment — kills all bed bug life stages including eggs" />
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Bed Bug Treatment?"
          subtext="Compare specialist pest control providers near you — free, no commissions"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Bed Bugs in Hotels */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="hotels">Bed Bugs in Hotels &mdash; What to Do</h2>

      <p>
        Hotels and short-term holiday lets are among the most common places to encounter bed bugs. The constant turnover of guests from all over the world, combined with shared laundry, upholstered furnishings, and carpeted rooms, creates ideal conditions for bed bugs to establish and spread. Encountering bed bugs in a hotel does not necessarily mean the hotel is dirty or poorly managed &mdash; even the most diligent housekeeping cannot prevent every introduction &mdash; but it does mean you need to take immediate steps to protect yourself and your home.
      </p>

      <h3>Inspect the Room Before Unpacking</h3>
      <p>
        Make it a habit to inspect any hotel room before you unpack your luggage. This takes only a few minutes and can save you months of trouble. Pull back the bedsheets and examine the <strong>mattress seams, piping, and tags</strong>, looking for live bugs, dark faecal spots, shed skins, or blood spots. Check the headboard, particularly the rear surface and any joints or tufting. Open the bedside table drawers and inspect the joints and undersides. If the room has upholstered chairs or a sofa, check the seams and cushion folds. Use the torch on your phone to illuminate dark crevices.
      </p>

      <h3>Protect Your Luggage</h3>
      <p>
        Keep your suitcase on the luggage rack, not on the bed or the floor. Better still, store it in the bathroom &mdash; the hard, tiled floor and lack of soft furnishings make the bathroom the least hospitable environment for bed bugs. <strong>Never place bags, clothing, or personal items directly on the bed.</strong> Use packing cubes or sealable bags within your suitcase to add an extra layer of protection for your clothing.
      </p>

      <h3>If You Find Bed Bugs</h3>
      <p>
        Report the discovery to the hotel management immediately. Request a room change &mdash; but insist on a room that is <strong>not adjacent to or directly above or below</strong> the infested room, as bed bugs frequently spread to neighbouring units. If the hotel is uncooperative or dismissive, consider moving to a different property. Document what you find with photographs and keep a record of your communications &mdash; this may be relevant if you need to make a complaint or claim later.
      </p>

      <h3>When You Return Home</h3>
      <p>
        On returning from any trip &mdash; whether or not you found evidence of bed bugs &mdash; take the following precautions. Unpack your suitcase directly into the <strong>washing machine</strong> and wash everything at 60&deg;C. Items that cannot be washed should go into the tumble dryer on the hottest setting for 30 minutes, or into a sealed bag in the freezer at &minus;18&deg;C for 72 hours. Inspect your suitcase thoroughly, paying attention to the seams, pockets, and zips. <strong>Store suitcases away from bedrooms</strong> &mdash; ideally in a garage, shed, or utility room &mdash; between trips.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>When returning from any trip, unpack directly into the washing machine and inspect your suitcase in the bathroom or garage &mdash; never in the bedroom. This simple habit prevents bed bugs from establishing in your home.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How to Prevent Bed Bugs */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="prevention">How to Prevent Bed Bugs</h2>

      <p>
        Complete prevention of bed bugs is difficult to guarantee, given that they are passively transported by humans and can be introduced to any property at any time. However, there are practical steps you can take to significantly reduce the risk and to catch any introduction early before it becomes an established infestation.
      </p>

      <h3>Be Cautious with Second-Hand Furniture</h3>
      <p>
        Second-hand mattresses, bed frames, sofas, and upholstered armchairs are among the most common vehicles for introducing bed bugs into a home. If you buy used furniture, <strong>inspect it thoroughly before bringing it indoors</strong>. Check all seams, joints, screw holes, and crevices. If possible, treat upholstered items with a steam cleaner before use. Be especially wary of items left on the street or obtained through online marketplaces with no opportunity to inspect before collection. It is generally advisable to avoid buying second-hand mattresses entirely.
      </p>

      <h3>Use Mattress Encasements</h3>
      <p>
        Even if you do not currently have bed bugs, fitting a bed bug-proof mattress encasement is a sensible preventive measure. It eliminates the mattress as a potential harbourage site, makes inspection much easier (bugs are visible on the smooth, light-coloured surface), and protects your mattress investment. Look for encasements that are specifically certified as bed bug-proof, with reinforced zips and bite-proof fabric.
      </p>

      <h3>Reduce Clutter Around Sleeping Areas</h3>
      <p>
        Clutter provides additional hiding places for bed bugs and makes inspection and treatment more difficult. Keep the area around and under the bed clear. Avoid storing items under the bed. Remove unnecessary furniture from the bedroom. The fewer hiding places available, the easier it is to detect an introduction early.
      </p>

      <h3>Seal Cracks and Crevices</h3>
      <p>
        Fill gaps between skirting boards and walls, seal cracks in plaster, and repair any damage to wallpaper near the bed. Fit tight-fitting plates on electrical sockets. These measures reduce the number of available harbourage sites and make it harder for bed bugs to establish a hidden population.
      </p>

      <h3>Be Vigilant When Travelling</h3>
      <p>
        Follow the hotel inspection advice outlined in the previous section on every trip, whether to a luxury resort or a budget hostel. The same applies to any overnight stay away from home &mdash; visiting friends or family, staying in holiday cottages, or sleeping on trains and ferries. Develop the habit of inspecting before you settle in and decontaminating when you return home.
      </p>

      <h3>Check Children&apos;s Belongings</h3>
      <p>
        Children returning from sleepovers, school residential trips, and summer camps can unknowingly bring bed bugs home in their bags, clothing, or bedding. Wash all clothing and bag contents at 60&deg;C as a routine precaution after overnight stays. Inspect bags and rucksacks before storing them in the child&apos;s bedroom.
      </p>

      <h3>Inspect Regularly in Blocks of Flats</h3>
      <p>
        If you live in a flat, you are at higher risk of bed bug introduction from neighbouring properties. Bed bugs can migrate through shared wall voids, along pipework, and through gaps around cable runs. Carry out a brief inspection of your mattress seams and bed frame joints at least once a month. If a neighbour reports a bed bug infestation, alert your building management and consider having your property inspected proactively. Early detection is always easier and cheaper to treat than an established infestation.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Bed Bug Treatment by City */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="bed-bug-treatment-by-city">Bed Bug Treatment by City</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find bed bug specialists in your area.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find bed bug specialists &rarr;</span>
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

      <h3>Can you see bed bugs with the naked eye?</h3>
      <p>
        Yes. Adult bed bugs are <strong>4 to 7 millimetres long</strong> &mdash; roughly the size of an apple seed &mdash; and are visible to the naked eye. They are flat, oval-shaped, and reddish-brown in colour. However, they are excellent at hiding in cracks and crevices during the day, which is why many people never see a live bug despite having an active infestation. Nymphs (juvenile bed bugs) are smaller and paler, making them harder to spot. The earliest nymph stages are almost translucent, though they become more visible after feeding as their bodies fill with blood.
      </p>

      <h3>Do bed bugs transmit diseases?</h3>
      <p>
        There is <strong>no confirmed evidence</strong> that bed bugs transmit diseases to humans. This distinguishes them from many other blood-feeding insects such as mosquitoes and ticks. However, their bites cause itching, sleep disruption, and significant psychological distress. Scratching bites can lead to secondary bacterial infections that may require antibiotic treatment. In severe, prolonged infestations, the anxiety and insomnia caused by bed bugs can have a serious impact on mental health and quality of life &mdash; a burden that should not be underestimated.
      </p>

      <h3>How long can bed bugs survive without feeding?</h3>
      <p>
        Bed bugs can survive remarkably long periods without a blood meal. In cool conditions (below 10&deg;C), adult bed bugs have been recorded surviving <strong>up to 12 months</strong> without feeding. In typical UK room temperatures of 18&deg;C to 22&deg;C, they more commonly survive <strong>2 to 6 months</strong>. This extraordinary resilience is one reason why simply leaving a property vacant does not eliminate an infestation. It also means that bed bugs in furniture stored in garages or sheds can remain viable for many months, ready to re-emerge when the furniture is brought back into use.
      </p>

      <h3>Can bed bugs live in your hair?</h3>
      <p>
        No. Unlike head lice, bed bugs <strong>do not cling to hair or skin</strong>. They are not anatomically adapted for living on a host &mdash; they lack the specialised claws that lice use to grip hair shafts. Bed bugs feed for <strong>5 to 10 minutes</strong>, typically while the host is sleeping, and then retreat to their hiding spots in cracks and crevices near the bed. They do not remain on the body between feeds. If you are experiencing itching on your scalp and suspect parasites, head lice are a far more likely cause than bed bugs.
      </p>

      <h3>Do bed bugs only live in beds?</h3>
      <p>
        No. While beds are their preferred harbourage because of the proximity to a sleeping host, bed bugs can inhabit <strong>any crack or crevice near where people rest or sleep</strong>. They are commonly found in sofa seams, armchair joints, office chairs, behind skirting boards, inside electrical outlets, behind picture frames, and even in cinema and theatre seats. In severe infestations, they can be found in almost any concealed location throughout a property. The name &ldquo;bed bug&rdquo; is somewhat misleading &mdash; &ldquo;harbourage bug&rdquo; would be more accurate, if less memorable.
      </p>

      <h3>How did I get bed bugs?</h3>
      <p>
        Bed bugs are almost always introduced to a property by being <strong>carried in on luggage, clothing, second-hand furniture, or from a neighbouring infested property</strong>. They are not attracted by dirt or poor hygiene &mdash; they are attracted by body heat and carbon dioxide from sleeping humans. Bed bugs are common in hotels, hostels, and public transport, and can easily hitch a ride home in your suitcase or on your clothing. If you live in a flat, they may have migrated from an adjacent unit through wall voids or cable runs. The source of a bed bug introduction is often impossible to identify with certainty, but the important thing is to focus on treatment rather than blame.
      </p>
    </GuideLayout>
  );
}
