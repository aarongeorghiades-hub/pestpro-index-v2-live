import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Mice: The Complete UK Guide (2026) | PestPro Index',
    description:
      'A comprehensive UK guide to getting rid of mice in your home. How to spot them, DIY control methods, the best mouse traps, when to call a professional, and how to keep them out for good.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-mice',
    },
    openGraph: {
      title: 'How to Get Rid of Mice: The Complete UK Guide (2026) | PestPro Index',
      description:
        'A comprehensive UK guide to getting rid of mice in your home. How to spot them, DIY control methods, the best mouse traps, when to call a professional, and how to keep them out for good.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-mice',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Mice: The Complete UK Guide (2026)',
  description:
    'A comprehensive UK guide to getting rid of mice in your home. How to spot them, DIY control methods, the best mouse traps, when to call a professional, and how to keep them out for good.',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-mice',
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
      name: 'How to Get Rid of Mice',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-mice',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can mice multiply?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single pair of mice can produce over 60 offspring in a year under ideal conditions. A female mouse can have 5 to 10 litters per year, each containing 4 to 12 pups. Pups reach sexual maturity at just 6 weeks old, so the population can grow exponentially if left unchecked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can mice climb walls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mice are excellent climbers and can scale rough vertical surfaces including brick, concrete, wood, and textured plaster with ease. They can also jump up to 25 centimetres high, squeeze through gaps as small as 6 millimetres, and run along cables and pipes. This is why mouse activity is commonly found in loft spaces and upper floors as well as at ground level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do mice come out during the day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mice are primarily nocturnal and most active between dusk and dawn. If you are seeing mice during daylight hours, it usually indicates either a very large infestation where competition for food is forcing some individuals to forage at unusual times, or the mice have been severely disturbed from their nesting site.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will mice leave on their own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Very rarely. If a property provides food, water, and shelter, mice have no reason to leave. Unlike some pests that are seasonal visitors, mice will happily remain in a building year-round. Without active intervention — trapping, poisoning, or proofing — a mouse population will typically grow rather than diminish.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many mice is considered an infestation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any confirmed mouse presence should be treated as a potential infestation. Mice are social, prolific breeders, and if you are seeing signs of one mouse, there are almost certainly more. A single mouse can produce 40 to 100 droppings per day, so even a small number of mice can generate significant evidence. Pest controllers generally recommend treating any confirmed mouse activity promptly rather than waiting to determine numbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a cat to control mice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cats can act as a deterrent and may catch occasional mice, but they rarely eliminate an established infestation. Many domestic cats are not efficient hunters, and mice quickly learn to avoid areas where the cat is active while continuing to use routes behind walls, under floors, and in ceiling voids that the cat cannot access. A cat should not be relied upon as a primary mouse control method.',
      },
    },
  ],
};

const tocItems = [
  { id: 'signs', title: 'Signs You Have Mice' },
  { id: 'mouse-vs-rat', title: 'Mouse vs Rat' },
  { id: 'dangers', title: 'Why Mice Are a Serious Problem' },
  { id: 'diy-methods', title: 'DIY Mouse Control Methods' },
  { id: 'mouse-proofing', title: 'How to Mouse-Proof Your Home' },
  { id: 'when-to-call-professional', title: 'When to Call a Professional' },
  { id: 'costs', title: 'How Much Does Mouse Control Cost?' },
  { id: 'mouse-control-by-city', title: 'Mouse Control by City' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfMicePage() {
  return (
    <GuideLayout
      title="How to Get Rid of Mice: The Complete UK Guide (2026)"
      subtitle="Everything you need to know about identifying, treating, and preventing mouse infestations in UK homes"
      lastUpdated="March 2026"
      readingTime="12 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[{ title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' }, { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' }]}
      relatedProducts={[{ title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' }, { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' }]}
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
      <h2 id="signs">Signs You Have Mice in Your Home</h2>

      <p>
        Mice are small, fast, and predominantly nocturnal. The house mouse (<em>Mus musculus</em>) is by far the most common species found inside UK homes, and it is remarkably well adapted to living alongside humans. Because of their size and speed, you will almost always notice the evidence they leave behind long before you see a live mouse. Recognising these signs early is essential &mdash; the sooner you identify a mouse problem, the easier and cheaper it is to resolve. Here are the key indicators to watch for.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>A single mouse produces between 40 and 100 droppings per day, making droppings the most common first sign of an infestation. Check kitchen cupboards, behind appliances, and along skirting boards.</p>
        </Callout>
      </div>

      <h3>Droppings</h3>
      <p>
        Mouse droppings are the most common and reliable sign of activity. They are small &mdash; typically <strong>3 to 6 millimetres long</strong> &mdash; dark brown or black, and roughly the shape of a grain of rice. This is significantly smaller than rat droppings, which measure 10 to 20 millimetres and are more capsule-shaped. A single mouse produces between <strong>40 and 100 droppings per day</strong>, so even a small number of mice can leave a substantial trail of evidence. Fresh droppings are dark, soft, and shiny. As they age, they dry out, lighten in colour, and become crumbly. Finding fresh droppings means that mice are actively using that area. Look in kitchen cupboards, behind appliances, along skirting boards, in airing cupboards, under sinks, and in loft spaces.
      </p>

      <h3>Urine Pillars</h3>
      <p>
        In heavier or longer-standing infestations, you may find small mounds of grease, dirt, and urine that have built up over time. These are known as <strong>urine pillars</strong>, and they can reach up to 4 centimetres in height in severe cases. Mice urinate constantly as they travel along their routes, and the urine combines with dirt, body grease, and dust to form these distinctive mounds. They are typically found along well-used runs and are a strong indicator that the infestation has been present for some time.
      </p>

      <h3>Gnaw Marks</h3>
      <p>
        Like all rodents, mice have incisor teeth that grow continuously, and they must gnaw to keep them worn down. Mouse gnaw marks are considerably smaller than those made by rats, but they can still cause serious damage. Look for tooth marks on food packaging (mice will chew through cardboard, plastic bags, and even thin plastic containers to reach food), electrical cables, wooden furniture, skirting boards, and plasterboard. Gnawed electrical cables are a genuine fire risk, and this alone makes mouse infestations a safety concern that should not be ignored.
      </p>

      <h3>Scratching and Scurrying Noises</h3>
      <p>
        Many homeowners first become aware of a mouse problem when they hear scratching, scurrying, or rustling noises at night. Mice are most active between dusk and dawn, and you may hear them running inside wall cavities, above ceiling boards, under floorboards, or behind kitchen units. The sounds are lighter and faster than those made by rats &mdash; more of a rapid patter than a heavy scraping. In loft spaces, you may hear them running across insulation or along joists. If you hear these noises consistently over several nights, it is very likely that mice are present.
      </p>

      <h3>Nests</h3>
      <p>
        Mice build nests from shredded materials &mdash; paper, fabric, loft insulation, cardboard, and any other soft material they can find. The nests are roughly spherical, about the size of a tennis ball or larger, and are typically found in warm, hidden, undisturbed locations. Common nesting sites include behind kitchen appliances (especially fridges and ovens, which generate warmth), inside airing cupboards, in loft insulation, behind bath panels, inside cavity walls, in the backs of seldom-used drawers or cupboards, and among stored boxes or belongings. Finding a nest confirms not only that mice are present but that they are established and likely breeding.
      </p>

      <h3>Smear Marks</h3>
      <p>
        Mice are creatures of habit and tend to follow the same routes repeatedly, usually running along the base of walls and skirting boards. Their fur carries natural oils and dirt, and over time this leaves dark, greasy streaks &mdash; known as smear marks or rub marks &mdash; along walls, pipes, and other surfaces they regularly brush against. These marks are often visible around holes or gaps that the mice use to enter and exit rooms. The marks are less pronounced than those left by rats (because mice are smaller), but they are still identifiable on lighter surfaces.
      </p>

      <h3>Strong Ammonia-Like Smell</h3>
      <p>
        A mouse infestation produces a distinctive, stale, ammonia-like odour that comes primarily from mouse urine. Because mice urinate constantly as they move around, the smell can build up quickly in enclosed spaces such as kitchen cupboards, loft spaces, and wall cavities. The smell tends to intensify as the infestation grows and is often most noticeable when you first open a cupboard or enter a room that has been closed up. Cats and dogs may become unusually interested in or agitated by areas where the scent is strong.
      </p>

      <h3>Footprints in Dusty Areas</h3>
      <p>
        In seldom-disturbed areas such as lofts, cellars, storage rooms, and behind appliances, you may spot tiny mouse footprints in the dust. Mouse footprints are small and delicate, showing <strong>four toes on the front feet and five on the back feet</strong>. You can test for activity by sprinkling a thin layer of flour or talcum powder along a suspected route and checking for prints the following morning. This is a useful technique when you suspect mice but have not found other clear evidence.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Mouse vs Rat */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="mouse-vs-rat">Mouse vs Rat &mdash; How to Tell the Difference</h2>

      <p>
        Correctly identifying whether you are dealing with mice or rats is important because the treatment approach can differ. While the two species share many habits, there are key physical and behavioural differences that are straightforward to spot once you know what to look for.
      </p>

      <h3>Size</h3>
      <p>
        The most obvious difference is size. An adult house mouse has a body length of <strong>3 to 10 centimetres</strong> (excluding the tail), whereas an adult brown rat measures <strong>15 to 27 centimetres</strong>. A young rat can sometimes be mistaken for an adult mouse, but there are other distinguishing features that help with identification.
      </p>

      <h3>Droppings</h3>
      <p>
        Mouse droppings are <strong>3 to 6 millimetres long</strong>, thin, and pointed at both ends &mdash; roughly the size and shape of a grain of rice. Rat droppings are substantially larger at <strong>10 to 20 millimetres</strong>, wider, and more capsule-shaped with blunt ends. If the droppings you are finding are smaller than a centimetre, you are almost certainly dealing with mice.
      </p>

      <h3>Tail and Ears</h3>
      <p>
        A mouse&apos;s tail is thin, flexible, and roughly as long as its body. A rat&apos;s tail is thicker, scalier, and proportionally shorter than its body. Mouse ears are large and prominent relative to the size of the head, giving the animal a distinctive rounded appearance. Rat ears are smaller relative to the head. If you catch a glimpse of the animal, these features can help you make a quick identification.
      </p>

      <h3>Behaviour</h3>
      <p>
        This is a crucial difference for control purposes. Mice are naturally <strong>curious</strong> and will investigate new objects in their environment relatively quickly. This is good news for trapping &mdash; mice will often approach and trigger a newly placed trap within the first night or two. Rats, by contrast, are <strong>neophobic</strong>, meaning they are inherently suspicious of new objects and may avoid a newly placed trap for several days before approaching it. This means that mouse trapping tends to produce faster results than rat trapping, and the pre-baiting strategies sometimes needed for rats are generally unnecessary for mice.
      </p>

      <h3>Why It Matters</h3>
      <p>
        Mice can squeeze through a gap as small as 6 millimetres, whereas rats need a gap of around 25 millimetres. This means the proofing standards for mice are considerably more demanding. The trap sizes differ too &mdash; mouse snap traps are much smaller and less powerful than rat traps, and using the wrong size will either fail to catch the target or damage the trap mechanism. If you are uncertain which species you are dealing with, the droppings are typically the most reliable indicator.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Mice can squeeze through gaps as small as 6mm — the width of a pencil. Rat-proofing standards (25mm) are not sufficient for mice.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Dangers */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="dangers">Why Mice Are a Serious Problem</h2>

      <p>
        It is easy to underestimate a mouse infestation. Mice are small, often unseen, and many people regard them as a minor annoyance rather than a genuine threat. This is a mistake. Mice pose real risks to human health, property, and safety, and these risks increase rapidly as the population grows.
      </p>

      <h3>Health Risks</h3>
      <p>
        Mice contaminate surfaces, food, and stored goods with their droppings and urine continuously as they move around a property. They do not have a designated toilet area &mdash; they excrete constantly along their routes. This means that any surface a mouse has walked across is potentially contaminated. The diseases associated with mice in the UK include:
      </p>
      <ul>
        <li>
          <strong>Salmonella:</strong> Mouse droppings and urine on food preparation surfaces or on food itself can transmit salmonella bacteria, causing food poisoning with symptoms including diarrhoea, vomiting, fever, and abdominal cramps.
        </li>
        <li>
          <strong>Hantavirus:</strong> Transmitted through contact with mouse droppings, urine, or saliva, or by inhaling dust contaminated with these. While relatively rare in the UK, hantavirus can cause a serious and potentially fatal respiratory illness.
        </li>
        <li>
          <strong>Leptospirosis:</strong> Also known as Weil&apos;s disease in its severe form, this bacterial infection is transmitted through contact with mouse urine or urine-contaminated water. It can cause flu-like symptoms that, in severe cases, progress to organ failure.
        </li>
      </ul>
      <p>
        Beyond specific diseases, mice can trigger allergic reactions and exacerbate asthma. Mouse urine, droppings, and shed skin contain proteins that are known allergens, and in homes with significant infestations these allergens can accumulate to levels that affect sensitive individuals &mdash; particularly children.
      </p>

      <h3>Property Damage</h3>
      <p>
        Mice gnaw constantly to keep their ever-growing incisors worn down, and they are remarkably indiscriminate about what they chew. Electrical cables are a particular concern &mdash; mice frequently gnaw through the plastic insulation around wiring, exposing live conductors. <strong>UK fire services have attributed house fires to rodent-damaged wiring</strong>, and this risk is especially acute in loft spaces and wall cavities where the damage is hidden and the gnawed cable sits close to combustible insulation or timber. Mice also chew through plastic water pipes (causing leaks and, potentially, flooding), damage insulation in lofts and walls, and destroy stored belongings, books, clothing, and documents. The cumulative cost of mouse damage to UK homes each year is substantial, though it often goes unreported because individual incidents are small in scale.
      </p>

      <h3>Speed of Breeding</h3>
      <p>
        The reproductive rate of mice is staggering and is the single biggest reason why mouse problems escalate so rapidly. A female house mouse can produce <strong>5 to 10 litters per year</strong>, with each litter containing <strong>4 to 12 pups</strong>. The gestation period is just 19 to 21 days. Pups are weaned at around 3 weeks and reach sexual maturity at approximately <strong>6 weeks of age</strong>. This means that the offspring from a single litter can themselves be breeding within two months of being born. Under ideal conditions &mdash; warmth, shelter, and plentiful food, exactly what a UK home provides &mdash; a single pair of mice can theoretically produce <strong>hundreds of descendants in a single year</strong>. This exponential growth is why a mouse problem that seems small in October can become a full-blown infestation by Christmas.
      </p>

      <div className="not-prose">
        <StatCallout value="6 weeks" label="Time for a mouse to reach sexual maturity — populations grow exponentially" />
      </div>

      <h3>Food Contamination</h3>
      <p>
        A single mouse produces <strong>40 to 100 droppings per day</strong> and urinates constantly along its routes. Mice forage widely, visiting multiple food sources in a single night and contaminating far more food than they actually consume. In a domestic kitchen, this means any unsealed food in cupboards is at risk. In commercial food premises, a mouse infestation is an immediate threat to food safety standards and can result in enforcement action from Environmental Health officers.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-methods">How to Get Rid of Mice &mdash; DIY Methods</h2>

      <p>
        If you have caught the problem early &mdash; perhaps you have found a small number of droppings in one kitchen cupboard, or heard scratching behind the skirting board on a couple of nights &mdash; it may well be possible to deal with the mice yourself. Below are the main DIY methods available in the UK, with an honest assessment of the strengths and weaknesses of each.
      </p>

      <h3>Snap Traps</h3>
      <p>
        The snap trap is the most effective and most humane DIY method for dealing with a small to moderate mouse infestation. Modern mouse snap traps are inexpensive (typically under two pounds each), easy to set, and deliver an instant kill when triggered correctly. The key to success is placement and quantity. Place traps <strong>perpendicular to walls</strong>, with the trigger end touching the skirting board. Mice run along edges rather than across open floor space, so placing traps in the middle of a room is ineffective.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Set at least 6 to 12 traps for a typical infestation. Unlike rats, mice are naturally curious and will often approach traps on the first night.</p>
        </Callout>
      </div>

      <p>
        Use <strong>peanut butter</strong> as bait &mdash; it has a strong scent that attracts mice, it is sticky enough that the mouse must work at it (which increases the chance of triggering the trap), and it is cheap. Chocolate spread and hazelnut spread also work well. Avoid cheese, which dries out quickly and is easy for mice to steal without triggering the mechanism.
      </p>
      <p>
        Set <strong>multiple traps</strong> rather than relying on one or two. For a typical house, set at least <strong>6 to 12 traps</strong>, concentrating them in areas where you have found droppings or other signs of activity. Because mice are naturally curious (unlike rats, which are suspicious of new objects), traps often produce catches within the first night or two. Check all traps daily.
      </p>
      <p>
        <strong>Pros:</strong> Instant kill &mdash; the most humane lethal method available. Cheap and reusable. No poison, so no risk to children, pets, or wildlife. Allows you to confirm catches and monitor progress.
      </p>
      <p>
        <strong>Cons:</strong> You must handle and dispose of dead mice (wear gloves, double-bag the carcass). Each trap catches only one mouse per setting, so traps must be reset after each catch. Less practical for very large infestations.
      </p>

      <h3>Electronic Traps</h3>
      <p>
        Electronic mouse traps are battery-powered enclosed boxes that deliver a lethal high-voltage shock when a mouse enters and steps on the sensor plate inside. The mouse is attracted by bait placed at the back of the chamber. Most models have an <strong>LED indicator light</strong> that shows when a kill has occurred, so you do not need to peer inside to check. Disposal is clean &mdash; simply tip the trap over a bin without touching the mouse.
      </p>
      <p>
        <strong>Pros:</strong> Clean, hygienic, no-see no-touch disposal. Considered a humane instant kill. Reusable for many catches. No poison involved.
      </p>
      <p>
        <strong>Cons:</strong> Significantly more expensive than snap traps, typically <strong>20 to 40 pounds</strong> per unit. Catches only one mouse at a time and must be emptied and reset before it can catch another. Requires batteries, which must be checked and replaced regularly.
      </p>

      <h3>Live Catch Traps</h3>
      <p>
        Live catch mouse traps come in two main types: small tunnel traps (which can hold multiple mice) and individual cage traps. They work by allowing the mouse to enter but not to exit &mdash; typically via a one-way door or tilting mechanism. Bait with peanut butter or a small piece of chocolate. If you choose this method, be aware of several important practical points.
      </p>
      <p>
        You <strong>must check live traps at least every 12 hours</strong>, and ideally more frequently. Mice are small animals with a high metabolic rate, and they can become dehydrated, hypothermic, and severely stressed very quickly when trapped. Under the Animal Welfare Act 2006, causing unnecessary suffering to a trapped animal is an offence. If you catch a mouse alive, it should be released at least <strong>2 miles from your home</strong> and away from other residential properties.
      </p>
      <p>
        <strong>Pros:</strong> No killing at the point of capture. Some people prefer this for ethical reasons.
      </p>
      <p>
        <strong>Cons:</strong> Mice released nearby will frequently return &mdash; they have excellent homing abilities over short distances. Trapping and relocation is stressful for the animal and has low survival rates in unfamiliar territory. Frequent checking is burdensome. Not practical for anything beyond one or two mice.
      </p>

      <h3>Bait Stations with Poison</h3>
      <p>
        Rodenticide bait for mice is available to the general public in the UK as first-generation anticoagulant blocks, which must be used inside <strong>tamper-resistant bait stations</strong>. These are sturdy plastic boxes that allow mice to enter and feed on the bait but prevent access by children, pets, and non-target animals. Using loose poison without a proper bait station is both dangerous and irresponsible.
      </p>
      <p>
        If you use this method, follow the <strong>Campaign for Responsible Rodenticide Use (CRRU)</strong> guidelines carefully. Place stations along walls and near areas of known activity. Anticoagulant poisons typically take <strong>3 to 7 days</strong> to take effect. Check and replenish bait regularly, and remove all bait once signs of activity have ceased.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Poisoned mice frequently die inside wall cavities or under floors, creating a persistent smell lasting weeks. There is also a risk of secondary poisoning to pets — especially cats — and wildlife.</p>
        </Callout>
      </div>

      <p>
        <strong>Pros:</strong> Can deal with multiple mice simultaneously. Bait stations are reasonably affordable.
      </p>
      <p>
        <strong>Cons:</strong> Poisoned mice frequently die in inaccessible locations &mdash; inside wall cavities, beneath floorboards, or in loft insulation &mdash; causing a <strong>persistent and extremely unpleasant smell</strong> that can last for several weeks. There is a real risk of secondary poisoning: if a pet (especially a cat) or a wild predator (particularly owls and birds of prey) consumes a poisoned mouse, the predator may also be poisoned. This secondary poisoning risk is a significant ecological concern and one reason many pest professionals are now moving towards non-toxic methods where possible.
      </p>

      <h3>Ultrasonic Repellers</h3>
      <p>
        Ultrasonic plug-in devices emit high-frequency sound waves that are claimed to deter mice. The evidence for their effectiveness is limited at best. While some studies have shown a short-term avoidance response in laboratory conditions, <strong>mice tend to habituate to the sound within days</strong> in real-world settings. There is no robust, peer-reviewed evidence that ultrasonic devices provide reliable, long-term mouse control. We do not recommend them as a sole method and would advise treating any claims of guaranteed effectiveness with scepticism.
      </p>

      <h3>Peppermint Oil</h3>
      <p>
        Peppermint oil is widely promoted online as a natural mouse deterrent. The theory is that the strong menthol scent is unpleasant to mice and will discourage them from entering treated areas. There is some anecdotal evidence that cotton wool balls soaked in peppermint oil placed near entry points may have a mild deterrent effect, but <strong>this has not been scientifically proven</strong> in any rigorous study. The scent dissipates quickly and needs constant reapplication. Peppermint oil may have marginal value as one element of a broader prevention strategy, but it should absolutely not be relied upon as a primary mouse control method. If you have an active infestation, peppermint oil will not resolve it.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for the right mouse trap?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best options available in the UK.</p>
        <a
          href="/best/mouse-traps"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Mouse Traps UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Mouse-Proofing */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="mouse-proofing">How to Mouse-Proof Your Home</h2>

      <p>
        If trapping and baiting deal with the mice that are already inside, proofing deals with the reason they got in. <strong>Proofing is the single most important step in long-term mouse control.</strong> Without it, new mice from the surrounding area will find the same access routes and move in within weeks. A mouse can squeeze through any gap that it can get its skull through, and for a house mouse that means a hole as small as <strong>6 millimetres</strong> &mdash; roughly the width of a pencil. This makes mouse-proofing considerably more demanding than rat-proofing, and it requires careful, systematic attention to detail.
      </p>

      <div className="not-prose">
        <StatCallout value="6mm" label="Minimum gap size a mouse can squeeze through — the width of a pencil" />
      </div>

      <h3>Inspect All External Walls at Ground Level</h3>
      <p>
        Walk the full perimeter of your property and examine every external wall at ground level. Look for cracks in mortar, gaps where different building materials meet, holes where old pipes or cables have been removed, and any opening larger than 6 millimetres. Pay particular attention to the junction between the wall and the ground, where settlement and weathering often create gaps. In older UK properties, mortar deterioration between bricks is common and provides easy access for mice.
      </p>

      <h3>Check Where Pipes and Cables Enter the Building</h3>
      <p>
        Every point where a pipe, cable, or conduit passes through an external wall is a potential entry point. Builders and utility installers frequently leave gaps around these penetrations, and even where sealant was originally applied, it may have cracked, shrunk, or deteriorated over time. Check gas pipes, water mains entry points, electrical cable entry points, telephone and broadband cables, boiler flue penetrations, and extractor fan vents. Any gap around these should be sealed.
      </p>

      <h3>Air Bricks</h3>
      <p>
        Air bricks are essential for ventilating sub-floor spaces and preventing damp in older UK properties, but they are a common entry point for mice. Check all air bricks for damage &mdash; cracked, broken, or missing bricks create openings that mice will exploit. Fit <strong>fine mesh covers</strong> (galvanised wire mesh with a maximum aperture of 6 millimetres) over all air bricks. This allows the necessary airflow while preventing mouse access. Pre-made air brick covers are widely available from builders&apos; merchants and online.
      </p>

      <h3>Doors and Garage Doors</h3>
      <p>
        Check the gap beneath all external doors. If you can see daylight under a door, a mouse can get through it. Fit <strong>brush strips</strong> or door sweeps to the bottom of all external doors, paying particular attention to garage doors, back doors, and side doors. Garage doors are frequently the weakest point &mdash; many older up-and-over garage doors have gaps of 10 millimetres or more along the bottom and sides when closed.
      </p>

      <h3>Roof Line and Soffits</h3>
      <p>
        Mice are excellent climbers and can easily scale rough brick walls, drainpipes, and climbing plants to reach roof level. Inspect your roof line for gaps where soffits meet the wall, damaged or missing soffit boards, gaps around roof tile vents, and openings where TV aerials or satellite cables enter the building. These upper-level entry points are often overlooked because they are difficult to see from ground level, but they are a common route into loft spaces.
      </p>

      <h3>Sealing Gaps: Wire Wool and Expanding Foam</h3>
      <p>
        The most effective way to seal small to medium-sized gaps is with a combination of <strong>wire wool (steel wool) pressed into expanding polyurethane foam</strong>. Wire wool is essential because mice can gnaw through expanding foam alone &mdash; it offers almost no resistance to their teeth. However, they cannot chew through wire wool because the metal fibres cut into their gums. Pack the wire wool tightly into the gap first, then apply expanding foam over and around it to hold it in place and create a weathertight seal. For larger holes, use galvanised steel mesh or metal plates fixed with screws. For gaps around pipes under sinks, steel wool wrapped tightly around the pipe at the point where it passes through the wall is effective.
      </p>

      <h3>Internal Routes</h3>
      <p>
        Proofing the exterior is essential, but do not neglect internal routes. Once inside the building structure, mice travel through wall cavities, along pipe runs, and through gaps in floorboards to reach different rooms. Check for gaps around pipework under kitchen and bathroom sinks, around boiler pipes where they pass through walls or floors, behind cookers where gas pipes enter, around the soil pipe where it passes through the floor, and at any point where built-in units or cabinets have gaps at the back that connect to the wall cavity.
      </p>

      <h3>Older UK Properties: Subfloor Voids and Cavity Walls</h3>
      <p>
        In older UK homes &mdash; particularly Victorian and Edwardian terraces and semi-detached houses &mdash; mice frequently enter through the subfloor void via damaged or unprotected air bricks and then travel upwards through the building via gaps in floorboards around pipe runs. <strong>Cavity walls can act as highways between floors</strong>, allowing mice to move from ground level to the loft without ever entering a living space. This is why you may hear mice in the ceiling but find droppings only in the kitchen &mdash; the entry point could be several rooms and a floor away from the most visible activity. Understanding this vertical movement is key to effective proofing.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call-professional">When to Call a Professional</h2>

      <p>
        Many small mouse problems can be resolved with a combination of good trapping and thorough proofing. However, there are situations where DIY methods are unlikely to be enough, and calling a professional pest controller is the sensible and cost-effective choice.
      </p>

      <h3>Signs the Problem Is Beyond DIY</h3>
      <ul>
        <li>
          <strong>Droppings in multiple rooms or on multiple floors:</strong> This indicates an established infestation with multiple access routes through the property, not a single mouse exploring from one entry point. The mice are likely nesting within the building structure.
        </li>
        <li>
          <strong>Noises in walls or ceilings you cannot access:</strong> If mice are active in wall cavities, ceiling voids, or subfloor spaces that you cannot physically reach to place traps or carry out proofing, professional equipment and expertise are needed.
        </li>
        <li>
          <strong>Traps are not catching despite continued signs:</strong> If you have been setting traps correctly with good bait, placing them along known routes, and checking daily, but you are still finding fresh droppings or hearing noises after 7 to 10 days, the infestation is likely larger than traps alone can handle, or the mice have alternative food sources that make the bait less attractive.
        </li>
        <li>
          <strong>Recurring infestations:</strong> If you have dealt with mice once before and they have come back, the entry points have not been properly identified and sealed. A professional survey will find access routes that you may have missed.
        </li>
        <li>
          <strong>Commercial food premises:</strong> Businesses that prepare, store, or sell food have a legal obligation under the <strong>Food Safety Act 1990</strong> and associated regulations to maintain effective pest control measures. A mouse infestation in a commercial food premises can result in a closure notice and prosecution. Professional pest control with documented treatment records is essential.
        </li>
      </ul>

      <h3>What a Professional Does Differently</h3>
      <p>
        A qualified pest controller brings training, experience, equipment, and access to restricted products that are not available to the householder:
      </p>
      <ul>
        <li>
          <strong>Thorough survey:</strong> A professional will inspect the entire property systematically, including the loft, subfloor void (where accessible), wall cavities, and all internal and external potential entry points. This comprehensive approach often identifies access routes that homeowners miss.
        </li>
        <li>
          <strong>Combination approach:</strong> Professionals use a combination of trapping, baiting, and proofing tailored to the specific situation. They may use commercial-grade snap traps, professional bait stations, tracking powders, and monitoring equipment.
        </li>
        <li>
          <strong>Multiple visits:</strong> A standard domestic mouse treatment typically involves <strong>2 to 3 visits over 2 to 4 weeks</strong>. The initial visit covers the survey and placement of treatment. Follow-up visits monitor progress, adjust the approach if needed, and complete proofing work.
        </li>
        <li>
          <strong>Restricted-use rodenticides:</strong> Professional pest controllers have access to <strong>second-generation anticoagulant rodenticides</strong> that are considerably more potent than the first-generation products available to the public. These are restricted-use products requiring professional training and CRRU certification.
        </li>
        <li>
          <strong>Accreditation:</strong> Look for membership of the <strong>British Pest Control Association (BPCA)</strong> or the <strong>National Pest Technicians Association (NPTA)</strong>. These accreditations confirm that the technician has undergone formal training, follows a code of practice, and carries professional indemnity and public liability insurance.
        </li>
      </ul>

      {/* FindProviderCTA */}
      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Mouse Control?"
          subtext="Compare qualified pest control providers near you — free, no commissions"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Costs */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="costs">How Much Does Mouse Control Cost in the UK?</h2>

      <p>
        The cost of professional mouse control depends on the severity of the infestation, the size of the property, the accessibility of affected areas, and the extent of proofing work required. Below are typical price ranges for 2026, based on our research across UK pest control providers.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>A standard domestic mouse treatment with 2-3 visits typically costs £80 to £150 across most of the UK. Proofing work adds £100 to £400 depending on the property.</p>
        </Callout>
      </div>

      <h3>Typical Domestic Treatment Costs</h3>
      <ul>
        <li>
          <strong>Standard domestic treatment (2 to 3 visits):</strong> Typically <strong>&pound;80 to &pound;150</strong> in most parts of England, Scotland, and Wales. Prices in London and the South East are generally at the upper end of this range, while providers in the North of England, Scotland, Wales, and Northern Ireland tend to charge less.
        </li>
        <li>
          <strong>Proofing work:</strong> <strong>&pound;100 to &pound;400</strong> depending on the number and complexity of entry points. Simple proofing &mdash; sealing a handful of gaps with wire wool and mesh &mdash; may be included in the treatment price. More extensive work, such as fitting mesh covers to multiple air bricks, replacing damaged soffits, or sealing gaps around pipe runs throughout the property, will be quoted as an additional cost.
        </li>
        <li>
          <strong>Loft clearance after infestation:</strong> <strong>&pound;200 to &pound;500</strong> for a standard domestic loft. If mice have nested in loft insulation, the contaminated insulation may need to be removed and replaced. This is a specialist job because of the health risks associated with disturbing dried mouse droppings and urine (which can release harmful particles into the air).
        </li>
      </ul>

      <h3>Council Pest Control Services</h3>
      <p>
        The availability of council-provided pest control varies widely across the UK. Some councils still offer <strong>free or subsidised rodent control</strong> for domestic properties. For example, <strong>Belfast City Council offers free rodent control</strong> for residents. Other councils provide a subsidised service at below-market rates, typically 30 to 60 pounds for a treatment course. However, many local authorities have cut pest control services due to budget pressures and instead refer residents to private companies. It is always worth checking your local council&apos;s website to see what is available before paying for private treatment.
      </p>

      <h3>Factors That Affect Price</h3>
      <p>
        The main factors that influence the cost of professional mouse control are: <strong>property size</strong> (a large detached house will cost more to survey and treat than a small flat), <strong>severity of infestation</strong> (a well-established colony across multiple rooms requires more time and resources), <strong>access</strong> (if affected areas are difficult to reach &mdash; such as an unboarded loft or a tight crawl space &mdash; this adds to the labour time), and <strong>proofing requirements</strong> (a Victorian terrace with numerous gaps and deteriorating mortar will need more proofing work than a modern build). When comparing quotes, always check what is included: number of visits, proofing, guarantee period, and any follow-up service.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Mouse Control by City */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="mouse-control-by-city">Mouse Control by City</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. Use the links below to find mouse control experts in your area.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find mouse control experts &rarr;</span>
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

      <h3>How quickly can mice multiply?</h3>
      <p>
        Extremely quickly. A female house mouse can produce 5 to 10 litters per year, with each litter containing 4 to 12 pups. The gestation period is just 19 to 21 days, and pups reach sexual maturity at approximately 6 weeks of age. Under ideal conditions &mdash; warmth, shelter, and plentiful food &mdash; a single pair of mice can produce <strong>over 60 direct offspring in a year</strong>, and when you factor in the offspring of those offspring, the numbers can reach into the hundreds. This exponential breeding rate is the main reason why mouse problems escalate so rapidly and why early intervention is so important.
      </p>

      <h3>Can mice climb walls?</h3>
      <p>
        Yes. Mice are <strong>excellent climbers</strong> and can scale rough vertical surfaces including brick, concrete, wood, and textured plasterwork with relative ease. They can also climb along cables, pipes, and even the outside of drainpipes. In addition, they can jump vertically up to around 25 centimetres and horizontally across gaps of a similar distance. This climbing ability is why mouse activity is commonly found in loft spaces and upper-floor rooms, not just at ground level. Smooth, polished surfaces such as glass, polished metal, and high-gloss painted walls are the only surfaces that mice cannot climb.
      </p>

      <h3>Do mice come out during the day?</h3>
      <p>
        Mice are primarily nocturnal and are most active between dusk and dawn. Daytime sightings are unusual and typically indicate one of two things: either the infestation is large enough that <strong>competition for food is forcing some mice to forage at atypical times</strong>, or the mice have been severely disturbed from their nesting site (for example, by building work or a sudden change in the environment). If you are regularly seeing mice during daylight hours, this is a strong indicator of a significant infestation that is likely beyond DIY treatment.
      </p>

      <h3>Will mice leave on their own?</h3>
      <p>
        Very rarely. If your home provides food, water, and shelter &mdash; and virtually all occupied homes do &mdash; mice have no incentive to leave. Unlike some seasonal visitors, house mice are commensal animals, meaning they have evolved to live alongside humans and are specifically adapted to thrive in the domestic environment. Without active intervention &mdash; trapping, baiting, proofing, or a combination of all three &mdash; a mouse population will almost always <strong>grow rather than diminish</strong>. Waiting and hoping the problem will resolve itself is not a viable strategy.
      </p>

      <h3>How many mice is considered an infestation?</h3>
      <p>
        There is no magic number. <strong>Any confirmed mouse presence should be treated promptly</strong>, because where there is one mouse there are almost certainly more. Mice are social animals, they breed prolifically, and they are skilled at remaining hidden. By the time you are finding droppings or hearing noises, the actual population is likely larger than you think. A single mouse can produce 40 to 100 droppings per day, so even two or three mice can generate enough droppings to make the problem seem substantial. Pest controllers generally recommend treating any confirmed mouse activity rather than attempting to estimate numbers first.
      </p>

      <h3>Can I use a cat to control mice?</h3>
      <p>
        A cat can act as a <strong>deterrent</strong> and may catch the occasional mouse, but cats are unlikely to eliminate an established infestation. Many domestic cats are simply not efficient or motivated hunters &mdash; well-fed cats in particular often show little interest in actively pursuing mice. More importantly, even a keen hunting cat cannot access the places where mice spend most of their time: inside wall cavities, above ceiling boards, beneath floorboards, and in loft insulation. Mice quickly learn to avoid the areas where the cat is active and continue to use their concealed routes undisturbed. A cat is a nice bonus if you already have one, but it should not be considered a primary mouse control strategy.
      </p>
    </GuideLayout>
  );
}
