import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'How to Get Rid of Foxes UK — Humane Deterrents, Prevention & Expert Help | PestPro Index',
    description:
      'Complete guide to fox control in the UK. Learn humane deterrent methods, garden proofing, legal protections, and when to call a professional pest controller.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/how-to-get-rid-of-foxes',
    },
    openGraph: {
      title: 'How to Get Rid of Foxes UK — Humane Deterrents, Prevention & Expert Help | PestPro Index',
      description:
        'Complete guide to fox control in the UK. Learn humane deterrent methods, garden proofing, legal protections, and when to call a professional pest controller.',
      url: 'https://pestproindex.com/guides/how-to-get-rid-of-foxes',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Get Rid of Foxes UK — Humane Deterrents, Prevention & Expert Help',
  description:
    'Complete guide to fox control in the UK. Learn humane deterrent methods, garden proofing, legal protections, and when to call a professional pest controller.',
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
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
    '@id': 'https://pestproindex.com/guides/how-to-get-rid-of-foxes',
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
      name: 'How to Get Rid of Foxes',
      item: 'https://pestproindex.com/guides/how-to-get-rid-of-foxes',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are foxes classed as vermin in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Foxes are wild animals, not classified as vermin under UK law. They are not listed under the Wildlife and Countryside Act 1981 as a pest species. However, they are not protected either (unlike badgers), which means landowners can take legal action to deter or control them using humane methods. Local councils do not classify foxes as pests and will not remove them from your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the council remove a fox from my garden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. UK local councils do not provide fox removal services. Councils classify foxes as wildlife and consider them the responsibility of the property owner. You will need to hire a private pest controller or use DIY deterrent methods. Some councils provide advice leaflets on living with urban foxes, but they will not trap, relocate, or remove foxes from your garden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I poison a fox in my garden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. It is illegal to poison foxes in the UK. Using poison against foxes is an offence under the Wildlife and Countryside Act 1981 and the Animal Welfare Act 2006. Poison also poses serious risks to pets, children, and non-target wildlife. There are no legally approved poisons for fox control in the UK. If you need to control foxes, use humane deterrent methods or hire a professional pest controller who uses legal methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop foxes digging up my lawn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foxes dig lawns primarily to search for chafer grubs and earthworms, or to bury food. The most effective solutions are: apply a scent-based fox repellent (such as Scoot) to the affected area, install a motion-activated sprinkler on the lawn, use an ultrasonic deterrent device near the digging area, and treat the lawn for chafer grubs to remove the food source that attracts foxes. Combining multiple methods is more effective than relying on any single deterrent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most effective fox deterrent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective single fox deterrent is a motion-activated sprinkler, which startles foxes with an unexpected jet of water. However, professional pest controllers recommend combining multiple methods for best results: a motion-activated sprinkler on the fox\'s main entry path, scent repellent (such as Scoot) applied to the lawn and flower beds, and an ultrasonic device near bin areas. Physical exclusion — blocking gaps under fences and securing bins — is the most reliable long-term solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can foxes give diseases to my dog?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The main risk is sarcoptic mange, caused by the Sarcoptes scabiei mite, which can transfer from foxes to dogs through direct contact or contact with contaminated ground. Symptoms in dogs include intense itching, hair loss, and crusty skin. Mange in dogs is treatable with veterinary medication. Fox droppings can also contain Toxocara canis roundworm, which can infect dogs (and humans) if ingested. Keep your dog away from fox droppings and see your vet promptly if your dog shows signs of mange.',
      },
    },
  ],
};

const tocItems = [
  { id: 'why-foxes-problem', title: 'Why Foxes Are a Growing Problem' },
  { id: 'understanding-behaviour', title: 'Understanding Fox Behaviour' },
  { id: 'legal-position', title: 'Legal Position: Foxes in the UK' },
  { id: 'diy-deterrents', title: 'DIY Fox Deterrent Methods' },
  { id: 'when-to-call', title: 'When to Call a Professional' },
  { id: 'fox-proofing-checklist', title: 'Fox-Proofing Your Garden' },
  { id: 'fox-mange', title: 'Fox Mange' },
  { id: 'products', title: 'Recommended Products' },
  { id: 'find-provider', title: 'Find a Pest Control Provider' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function HowToGetRidOfFoxesPage() {
  return (
    <GuideLayout
      title="How to Get Rid of Foxes UK &mdash; Humane Deterrents, Prevention &amp; Expert Help"
      subtitle="A practical guide to fox control in UK gardens &mdash; humane deterrents, garden proofing, legal rights, mange awareness, and when to call a professional pest controller"
      lastUpdated="March 2026"
      readingTime="18 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Landlord Pest Control: Complete UK Guide', href: '/guides/landlord-pest-control' },
        { title: 'Commercial Pest Control: Complete UK Guide', href: '/guides/commercial-pest-control' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
      ]}
      relatedProducts={[
        { title: 'Best Fox Deterrents UK 2026', href: '/best/fox-deterrents' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Moth Killers UK', href: '/best/moth-killers' },
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
      {/* INTRODUCTION */}
      {/* ------------------------------------------------------------------ */}

      <p>
        The red fox (<em>Vulpes vulpes</em>) is one of the most adaptable mammals in the United Kingdom. Over the past century it has moved steadily from the countryside into our towns and cities, and today urban foxes are a fact of life in virtually every major conurbation in England, Wales, and Scotland. While many people enjoy seeing foxes in their gardens, a growing number of homeowners find themselves dealing with the less welcome side of fox behaviour &mdash; dug-up lawns, scattered bin bags, foul-smelling droppings, killed pets, dens under decking, and the nerve-shredding screaming that accompanies the mating season every January and February.
      </p>

      <p>
        This guide provides a comprehensive, UK-focused overview of fox control. It covers why foxes are increasingly problematic in residential areas, the legal framework that governs what you can and cannot do, the most effective humane deterrent methods, practical garden proofing measures, when it makes sense to call in a professional pest controller, and what to do about fox mange. Whether you are dealing with a single bold fox raiding your bins or a family of foxes that has denned under your shed, the information below will help you take the right approach.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Why Foxes Are a Growing Problem */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="why-foxes-problem">Why Foxes Are a Growing Problem in UK Gardens</h2>

      <p>
        Urban foxes have been present in British cities since the 1930s, when suburban expansion created a patchwork of gardens, parks, and railway embankments that provided ideal habitat. Since then, urban fox populations have grown steadily. Current estimates suggest there are <strong>over 150,000 urban foxes in England alone</strong>, with the highest densities in London, Bristol, Brighton, Birmingham, and Manchester. Some London boroughs have fox densities exceeding <strong>30 adults per square kilometre</strong> &mdash; far higher than typical rural populations.
      </p>

      <p>
        For homeowners, foxes cause a range of problems. They <strong>dig up lawns and flower beds</strong>, primarily to search for chafer grubs and earthworms, leaving unsightly holes and bare patches across carefully maintained gardens. They <strong>scatter bin bags</strong> in search of food waste, spreading rubbish across driveways and pavements. They leave <strong>droppings in prominent locations</strong> &mdash; on lawns, paths, patios, and garden furniture &mdash; as territorial markers. Fox droppings carry <em>Toxocara canis</em> roundworm, which can cause toxocariasis in humans, particularly children, if eggs are accidentally ingested from contaminated soil. They <strong>kill chickens, rabbits, guinea pigs</strong>, and other small pets that are not adequately protected, sometimes taking multiple animals in a single visit even when they cannot eat them all &mdash; a behaviour known as surplus killing.
      </p>

      <p>
        Foxes <strong>den under sheds, decking, and outbuildings</strong>, digging extensive earth beneath structures and creating entry holes that undermine foundations. During the <strong>mating season in January and February</strong>, foxes produce loud, blood-curdling screaming calls &mdash; often described as sounding like a woman or child in distress &mdash; that can wake entire households and continue for hours. Vixens also produce a distinctive three-syllable bark. These vocalisations are among the most common complaints about urban foxes. In recent years, foxes have become <strong>increasingly bold</strong>, entering houses through open doors and cat flaps, taking food from kitchen surfaces, and in rare but well-documented cases, entering bedrooms where children are sleeping. While fox attacks on humans are extremely rare, they are not unheard of, and the presence of a bold fox inside a home is understandably alarming.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Toxocara risk from fox droppings.</strong> Fox faeces can contain <em>Toxocara canis</em> roundworm eggs, which survive in soil for months and can cause toxocariasis in humans &mdash; particularly children &mdash; if accidentally ingested. Always wear gloves when removing fox droppings from your garden. Wash children&apos;s hands after outdoor play, and cover sandpits when not in use. Do not compost fox droppings.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="150,000+" label="estimated urban foxes in England" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Understanding Fox Behaviour */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="understanding-behaviour">Understanding Fox Behaviour</h2>

      <p>
        Understanding how foxes live and behave is essential if you want to deter them effectively. Foxes are <strong>territorial animals</strong>. In urban areas, a fox family group typically occupies a territory of <strong>20 to 40 hectares</strong>, though territories can be smaller in areas where food is abundant and fox density is high. A territory is usually held by a dominant dog fox and vixen, along with one or more subordinate vixens (often daughters from previous years) and their cubs. Foxes mark their territory boundaries with urine, droppings, and scent from glands on their feet and at the base of their tail. The musky, pungent smell that many homeowners associate with foxes is primarily from this scent-marking behaviour.
      </p>

      <p>
        Foxes are <strong>creatures of habit</strong>. They use the same paths, entry points, and routes through gardens night after night. If a fox is entering your garden through a specific gap in the fence, it will almost certainly use that same gap every time. This predictability is useful for deterrence &mdash; if you can identify the fox&apos;s habitual entry point and main path through your garden, you can target your deterrent measures precisely where they will have the most impact.
      </p>

      <p>
        Peak fox activity occurs from <strong>dusk to dawn</strong>, with most feeding and territorial behaviour taking place after dark. However, urban foxes are regularly seen during daylight hours, particularly in quiet gardens, and a fox seen during the day is not necessarily sick or dangerous &mdash; it is simply comfortable in its surroundings. The <strong>mating season runs from late December through February</strong>, with a peak in January. This is when the infamous screaming vocalisations are loudest and most frequent. Cubs are born in <strong>March and April</strong>, typically in an underground earth (den) beneath a shed, decking, or in dense undergrowth. Litters usually contain four to five cubs. The cubs emerge above ground at around four weeks of age and are weaned by eight to ten weeks. By <strong>September to November</strong>, young foxes disperse from the family territory to find their own range, and this dispersal period often brings new foxes into gardens that previously had no fox activity.
      </p>

      <p>
        Foxes are <strong>omnivorous scavengers</strong> with an extremely varied diet. In urban areas they eat pet food left outdoors, food scraps from bins and compost heaps, bird food from ground feeders, fallen fruit from trees, earthworms, insects, rats, mice, rabbits, and occasionally small pets. Removing food sources is the single most effective way to make your garden less attractive to foxes.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Remove food sources first.</strong> The most effective fox deterrent is removing the reason foxes visit your garden in the first place. Secure your bins, bring in pet food bowls at night, use hanging bird feeders instead of ground feeders, pick up fallen fruit, and keep compost bins sealed. A garden with no food is far less attractive to a fox than one with multiple easy meals.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Legal Position */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="legal-position">Legal Position: Foxes in the UK</h2>

      <p>
        The legal status of foxes in the UK is often misunderstood, and it is important to know what you can and cannot do before taking any action. Foxes occupy an unusual position in UK wildlife law: they are <strong>not classified as vermin</strong>, but they are also <strong>not a protected species</strong> in the way that badgers, bats, and red squirrels are. This means that while there is no obligation on councils or landowners to control foxes, certain methods of control are legally available &mdash; subject to strict rules on humane treatment.
      </p>

      <p>
        Foxes are <strong>not listed under the Wildlife and Countryside Act 1981</strong> as either a pest species or a protected species. They are simply classified as wild animals. Unlike rats and mice, which are covered by specific public health legislation, foxes have no special legal status that requires their control. Unlike badgers, which are protected under the Protection of Badgers Act 1992, foxes have no specific legislation protecting them from being killed. However, all wild animals &mdash; including foxes &mdash; are protected from <strong>unnecessary suffering</strong> under the <strong>Animal Welfare Act 2006</strong> (England and Wales) and the <strong>Animal Health and Welfare (Scotland) Act 2006</strong>.
      </p>

      <p>
        <strong>What you CANNOT do:</strong> It is illegal to <strong>poison foxes</strong> in the UK. There are no legally approved poisons for fox control, and using any toxic substance against a fox is an offence under both the Wildlife and Countryside Act 1981 (which prohibits the use of poison against wild animals except where specifically authorised) and the Animal Welfare Act 2006. It is illegal to use <strong>self-locking snares</strong> &mdash; only free-running snares are legal, and even these are heavily restricted and controversial. It is illegal to use <strong>gin traps</strong> or any other trap that is designed to grip the animal&apos;s body. It is an offence to cause <strong>unnecessary suffering</strong> to a fox through any method of control.
      </p>

      <p>
        <strong>What you CAN do:</strong> Landowners or their authorised agents can legally <strong>shoot foxes on their own land</strong> using a suitable firearm, though this is impractical and generally unsafe in urban and suburban settings. You can use <strong>cage traps</strong> to catch foxes, but trapped foxes must be checked at least <strong>every 12 hours</strong>, and any fox caught must be humanely dispatched. It is <strong>illegal to relocate a trapped fox</strong> under the Abandonment of Animals Act 1960 &mdash; releasing a trapped fox into unfamiliar territory is considered abandonment. You can use humane deterrent methods including scent repellents, ultrasonic devices, motion-activated sprinklers, and physical exclusion measures. Professional pest controllers can carry out fox management using legal methods including cage trapping and shooting (where safe and appropriate).
      </p>

      <p>
        <strong>Councils do NOT provide fox control.</strong> This is one of the most common misconceptions among homeowners. UK local councils do not trap, remove, or control foxes. They classify foxes as wildlife and consider them the property owner&apos;s responsibility. Some councils publish advice leaflets on living alongside urban foxes, but they will not send someone to remove a fox from your garden, even if it has denned under your shed or is causing significant nuisance. If you need active fox management, you will need to hire a private pest control company or use DIY deterrent methods.
      </p>

      <p>
        The <strong>RSPCA opposes lethal fox control</strong> and will not assist with fox removal. They will, however, attend to injured or sick foxes, and they can be contacted on <strong>0300 1234 999</strong> if you find a fox that appears to be in distress or suffering from severe mange.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Your council will not remove foxes.</strong> UK local councils do not provide fox trapping, removal, or deterrent services. Foxes are classified as wildlife, not pests, and their management is considered the responsibility of the property owner. You will need to use DIY deterrent methods or hire a private pest controller.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Fox Deterrent Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-deterrents">DIY Fox Deterrent Methods</h2>

      <p>
        There are several humane deterrent methods available to homeowners, ranging from scent-based repellents to electronic devices and physical barriers. No single method works perfectly in isolation &mdash; professional pest controllers consistently advise that <strong>combining two or three methods simultaneously</strong> produces the best results. Foxes are intelligent and adaptable animals, and they can become habituated to a single deterrent over time, so using a multi-layered approach is key.
      </p>

      <h3>Scent Deterrents</h3>
      <p>
        Scent-based fox repellents work by mimicking the scent of a rival fox or by creating an odour that foxes find unpleasant. The most widely used product is <strong>Scoot Fox Repellent</strong>, which is a powder that you dissolve in water and spray onto lawns, flower beds, paths, and other areas where foxes are active. Scoot works by mimicking territorial scent marks, signalling to the visiting fox that another fox has already claimed the territory. <strong>Get Off My Garden</strong> is another popular option, available as crystals or a spray, which uses a strong citronella-based scent to deter foxes. Some homeowners also use <strong>chilli pepper sprays</strong>, garlic sprays, or <strong>citrus peel</strong> scattered around garden borders, though these home remedies are generally less effective and less long-lasting than commercial products.
      </p>
      <p>
        The key limitation of all scent deterrents is that they <strong>wash off in rain</strong> and need to be <strong>reapplied regularly</strong> &mdash; typically every one to two weeks, or after heavy rainfall. They are best used as part of a combined approach rather than as a standalone solution. Apply scent deterrents to the specific areas where foxes are causing problems: the lawn if foxes are digging, the patio if foxes are fouling, or the fence line and entry points if you are trying to discourage foxes from entering the garden altogether.
      </p>

      <h3>Ultrasonic Deterrents</h3>
      <p>
        Ultrasonic fox deterrent devices emit a high-frequency sound when triggered by a <strong>passive infrared (PIR) motion sensor</strong>. The sound is inaudible or barely audible to humans but is intended to be unpleasant to foxes, discouraging them from remaining in the area. Most ultrasonic devices are <strong>solar-powered</strong>, making them maintenance-free once installed, and they can be staked into the ground or mounted on a fence or wall. Position ultrasonic deterrents at the fox&apos;s known entry points or along its habitual path through your garden for maximum effect.
      </p>
      <p>
        The effectiveness of ultrasonic devices is debated. Some homeowners report excellent results, while others find that foxes quickly <strong>habituate</strong> to the sound and begin to ignore it. Pest control professionals generally consider ultrasonic devices a useful <strong>supplementary measure</strong> rather than a primary solution. They work best when combined with scent deterrents and physical exclusion. Rotating the position of the device every few weeks can help prevent habituation.
      </p>

      <h3>Motion-Activated Sprinklers</h3>
      <p>
        Motion-activated sprinklers are widely considered the <strong>single most effective DIY fox deterrent</strong>. They work by detecting movement via an infrared sensor and releasing a sudden, short burst of water accompanied by a clicking noise. Foxes are startled by the unexpected combination of noise and water and will typically flee immediately. Unlike ultrasonic devices, the physical sensation of being sprayed with water is much harder for foxes to habituate to, and many homeowners report sustained effectiveness over months and even years.
      </p>
      <p>
        Position the sprinkler on the fox&apos;s main entry path or near the area where it is causing the most damage (bin area, chicken coop, dug-up lawn). Connect it to a standard garden hose. Most motion-activated sprinklers cover an arc of <strong>100 to 120 degrees</strong> and a range of <strong>up to 10 metres</strong>, so a single unit can protect a significant portion of a typical garden. They are battery-powered (sensor unit) and use mains water pressure for the spray. Keep the sprinkler active at night when fox activity is at its peak.
      </p>

      <h3>Garden Proofing and Physical Exclusion</h3>
      <p>
        Physical exclusion is the <strong>most reliable long-term fox deterrent</strong>, but it requires more effort and investment than other methods. Foxes are excellent climbers and can scale a standard <strong>6-foot (1.8-metre) garden fence</strong> with ease. To make fences fox-proof, consider adding <strong>roller bars</strong> (rotating cylinders mounted on brackets along the top of the fence) which prevent foxes from gaining a grip to pull themselves over. Alternatively, add an <strong>inward-angled overhang</strong> of 45 degrees using taut wire or mesh at the top of the fence.
      </p>
      <p>
        Foxes also enter gardens through gaps at the <strong>base of fences and gates</strong>. A fox can squeeze through a gap as small as <strong>10 centimetres (4 inches)</strong>. Block gaps with <strong>welded wire mesh of at least 2.5 mm gauge</strong> &mdash; do not use chicken wire, which foxes can easily tear through with their teeth. Bury the mesh at least <strong>30 centimetres below ground level</strong> and bend the bottom outward in an L-shape to prevent foxes from digging underneath. Secure compost bins with lids and bungee cords, and ensure garden gates close fully with no gaps at the base.
      </p>

      <h3>Den Exclusion</h3>
      <p>
        If foxes have denned under your shed, decking, or outbuilding, you can block the entrance to prevent them from returning &mdash; but <strong>only when the den is vacant</strong>. Before blocking a den entrance, place a loose ball of newspaper or a thin layer of sand across the opening and check it daily for three to five days. If the newspaper is undisturbed or the sand shows no paw prints, the den is likely empty and can be blocked. Use heavy-gauge welded wire mesh buried at least 30 centimetres into the ground. You can also use <strong>one-way fox gates</strong> (commercially available) that allow foxes to leave but not re-enter.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Never block a fox den between March and August.</strong> This is the breeding season when cubs may be present underground. Blocking a den entrance while cubs are inside will cause them to starve to death &mdash; a slow, distressing death that is both inhumane and potentially illegal under the Animal Welfare Act 2006. Always confirm a den is empty before blocking it. If you are unsure, consult a professional pest controller or wildlife adviser.</p>
        </Callout>
      </div>

      <h3>Lighting</h3>
      <p>
        Motion-activated security lights are sometimes suggested as fox deterrents. In practice, lighting is the <strong>least effective method</strong>. Urban foxes are thoroughly accustomed to artificial light and are not significantly deterred by security lights or floodlights. While a sudden bright light may startle a fox on its first visit, it will quickly learn to ignore it. Lighting is best considered a supplementary measure for human security rather than a serious fox deterrent. If you do use motion-activated lights, combine them with other methods such as a sprinkler or scent repellent for any meaningful deterrent effect.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for fox deterrent products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best fox deterrents, repellents, and motion-activated sprinklers available in the UK.</p>
        <a
          href="/best/fox-deterrents"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Fox Deterrents UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When to Call a Professional */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-to-call">When to Call a Professional</h2>

      <p>
        Many fox problems can be managed with DIY deterrent methods, but there are situations where professional help is the more practical and effective option. A qualified pest controller who specialises in fox management will have access to commercial-grade deterrents, cage traps, and exclusion materials, and will be experienced in assessing fox behaviour and targeting the most effective intervention for your specific situation.
      </p>

      <p>
        <strong>Consider calling a professional if:</strong> a fox has denned directly under your house (rather than an outbuilding) and you have young children or vulnerable pets, as excavating or excluding a den in this location requires careful assessment. If you are seeing <strong>signs of mange</strong> &mdash; a fox with significant hair loss, crusty or scabbed skin, and a generally emaciated appearance &mdash; a professional can advise on the risk to pets and assist with management. If foxes are <strong>repeatedly attacking livestock</strong> such as chickens, ducks, or rabbits despite your existing enclosure, a pest controller can assess the enclosure and install professional-grade fox-proof fencing using welded mesh and anti-dig barriers. If a <strong>fox is entering your house</strong> through a cat flap or open door, this is a serious situation that requires immediate deterrent action and potentially a lockable or microchip-activated cat flap. If you have been using <strong>DIY deterrent methods for four or more weeks</strong> without success, the situation may require a more comprehensive, professionally managed approach. If you find an <strong>injured fox</strong>, do not attempt to handle it yourself &mdash; call the <strong>RSPCA on 0300 1234 999</strong> or contact a local wildlife rescue centre.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>Professional fox control costs in the UK: <strong>Deterrent installation &pound;150&ndash;&pound;400</strong> (ultrasonic devices, scent application, and sprinkler setup). <strong>Fox-proofing a chicken enclosure &pound;200&ndash;&pound;500</strong> (welded mesh, anti-dig barriers, secure roof). <strong>Ongoing management &pound;300&ndash;&pound;800/year</strong> (regular visits, deterrent reapplication, monitoring). <strong>One-off callout &pound;100&ndash;&pound;250</strong> (assessment, advice, and initial deterrent treatment).</p>
        </Callout>
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Fox Problem in Your Garden?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Fox-Proofing Your Garden: A Checklist */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="fox-proofing-checklist">Fox-Proofing Your Garden: A Checklist</h2>

      <p>
        The following checklist covers the most important steps you can take to make your garden less attractive and less accessible to foxes. Work through each item systematically &mdash; the more steps you complete, the more effective your overall fox-proofing will be.
      </p>

      <ol>
        <li><strong>Secure your bins.</strong> Use wheelie bins with lids that clip shut, or secure bin lids with bungee cords. Never leave bin bags loose on the ground overnight. If your council uses open-top recycling boxes, store them in a locked shed or garage until collection morning.</li>
        <li><strong>Remove pet food.</strong> Bring all pet food bowls indoors before dusk. Foxes are strongly attracted to cat and dog food left outside, and a single accessible food bowl can be enough to establish a fox&apos;s nightly route through your garden.</li>
        <li><strong>Use a bird feeder tray or hanging feeders.</strong> Avoid scattering bird food directly on the ground, as foxes will eat it. Use hanging feeders with trays to catch fallen seed, and sweep up any spillage at the end of the day.</li>
        <li><strong>Pick up fallen fruit.</strong> If you have fruit trees (apple, pear, plum), collect fallen fruit regularly. Rotting fruit on the ground is a food source that attracts foxes, as well as rats and wasps.</li>
        <li><strong>Secure your compost bin.</strong> Use an enclosed compost bin with a tight-fitting lid rather than an open heap. Do not compost cooked food, meat, fish, or dairy products, as these are highly attractive to foxes.</li>
        <li><strong>Block gaps under and at the base of fences.</strong> Inspect every fence panel, gate, and wall boundary for gaps at ground level. Block any gap larger than 10 centimetres with welded wire mesh (2.5 mm gauge minimum) secured with U-nails or fence clips. Bury mesh 30 centimetres below ground with an outward-facing L-bend to prevent digging.</li>
        <li><strong>Reinforce chicken runs and rabbit hutches.</strong> Use <strong>welded wire mesh</strong> (not chicken wire, which foxes can tear through) with a maximum hole size of 25 millimetres. Ensure the run has a secure roof, and bury mesh around the perimeter to prevent digging. Lock all latches &mdash; foxes can open simple bolt catches.</li>
        <li><strong>Install a motion-activated sprinkler.</strong> Position it to cover the fox&apos;s main entry point or the area where it causes the most damage. Connect to a garden hose and leave active overnight.</li>
        <li><strong>Apply a scent-based fox repellent.</strong> Use Scoot or a similar product on lawns, flower beds, and along fence lines. Reapply every one to two weeks and after heavy rain.</li>
        <li><strong>Cut back overgrown areas.</strong> Dense undergrowth, long grass, bramble patches, and overgrown shrub borders provide cover and potential denning sites for foxes. Keep the garden tidy and open, particularly around sheds and outbuildings, to remove hiding spots.</li>
        <li><strong>Check under sheds and decking.</strong> Inspect the space beneath sheds, decking, and raised outbuildings for signs of fox activity &mdash; dug earth, fox droppings, a strong musky smell, or trodden paths. If no foxes are present, block access with buried welded mesh. If foxes are already denned, wait until the den is confirmed empty (outside the March&ndash;August breeding season) before blocking.</li>
      </ol>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Fox Mange */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="fox-mange">Fox Mange: What Homeowners Need to Know</h2>

      <p>
        <strong>Sarcoptic mange</strong> is a skin disease caused by the parasitic mite <em>Sarcoptes scabiei</em>, and it is extremely common in urban fox populations. An affected fox will show progressive <strong>hair loss</strong>, starting from the tail and rump and spreading across the body. The skin becomes <strong>thickened, crusty, and scabbed</strong>, and severely affected foxes may appear almost completely bald, emaciated, and lethargic. Without treatment, mange is eventually fatal, as the fox loses its ability to regulate body temperature and becomes susceptible to secondary infections.
      </p>

      <p>
        Mange is <strong>treatable</strong>. The <strong>National Fox Welfare Society</strong> provides mange treatment packs containing the drug ivermectin, which can be administered by mixing it with food left out for the affected fox. This approach is somewhat controversial &mdash; wildlife organisations have differing views on whether treating individual wild animals is appropriate &mdash; but many homeowners have successfully treated mangy foxes in their gardens using this method. If you see a fox with severe mange (large areas of bare skin, inability to walk properly, or obvious distress), contact a <strong>local wildlife rescue centre</strong> or the <strong>RSPCA on 0300 1234 999</strong>, who may be able to attend and provide treatment or, in severe cases, humanely euthanise the animal to prevent further suffering.
      </p>

      <p>
        For homeowners with <strong>dogs</strong>, mange is a particular concern. The <em>Sarcoptes scabiei</em> mite <strong>can transfer from foxes to dogs</strong>, either through direct contact or through contact with contaminated ground where a mangy fox has been resting. Symptoms in dogs include intense itching, hair loss, and crusty, reddened skin, particularly on the ears, elbows, and belly. If your dog develops these symptoms and foxes are active in your area, see your vet promptly. Mange in dogs is readily treatable with veterinary medication (typically a spot-on treatment or injection), but early treatment produces the best outcome. Cats are generally not affected by sarcoptic mange from foxes.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Recommended Products */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="products">Recommended Fox Deterrent Products</h2>

      <p>
        Below are two of the most effective and popular fox deterrent products available in the UK. For a comprehensive comparison of all the best fox deterrents &mdash; including scent repellents, ultrasonic devices, and motion-activated sprinklers &mdash; see our dedicated <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">Best Fox Deterrents UK 2026</Link> review page.
      </p>

      <div className="not-prose">
        <ProductCard
          name="PestBye Solar Ultrasonic Fox Repeller"
          rating={4.0}
          features={[
            'Solar powered — no batteries needed',
            'Motion-activated PIR sensor',
            'Adjustable frequency range',
            'Weatherproof for year-round use',
          ]}
          price="~&pound;20&ndash;&pound;30"
          asin="B075XMS835"
          bestFor="Best Ultrasonic Deterrent"
          rank={1}
        />
        <ProductCard
          name="PestBye Jet Spray Motion-Activated Sprinkler"
          rating={4.5}
          features={[
            '120-degree detection arc',
            'Covers up to 100 sqm',
            'Connects to standard garden hose',
            'Battery-powered sensor',
          ]}
          price="~&pound;19&ndash;&pound;25"
          asin="B0153BJ7NQ"
          bestFor="Best Overall Deterrent"
          rank={2}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Find a Pest Control Provider */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="find-provider">Find a Pest Control Provider</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. If you need help with a fox problem &mdash; whether it&apos;s deterrent installation, garden proofing, den exclusion, or livestock protection &mdash; use the links below to find fox control specialists in your area.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Fox Control?"
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
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/liverpool/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Liverpool
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/nottingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Nottingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/brighton/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Brighton
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/sheffield/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Sheffield
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/bradford/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bradford
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/newcastle/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Newcastle
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/cardiff/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Cardiff
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/leicester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leicester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/hampshire/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Hampshire
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/coventry/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Coventry
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find fox control specialists &rarr;</span>
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
        For a detailed breakdown of pest control costs across all common UK pests, including fox deterrent installation and garden proofing, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide. If foxes are not the only pest you are dealing with, you may also find our other guides helpful: <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">how to get rid of rats</Link>, <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/how-to-get-rid-of-squirrels" className="text-blue-600 hover:underline font-medium">how to get rid of squirrels</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, and <Link href="/guides/pigeon-control" className="text-blue-600 hover:underline font-medium">pigeon control</Link>. Landlords dealing with fox issues in rental properties should consult our <Link href="/guides/landlord-pest-control" className="text-blue-600 hover:underline font-medium">landlord pest control</Link> guide, and businesses may benefit from our <Link href="/guides/commercial-pest-control" className="text-blue-600 hover:underline font-medium">commercial pest control</Link> guide. For product reviews, browse our <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">best fox deterrents</Link>, <Link href="/best/rat-traps" className="text-blue-600 hover:underline font-medium">best rat traps</Link>, <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">best mouse traps</Link>, <Link href="/best/squirrel-deterrents" className="text-blue-600 hover:underline font-medium">best squirrel deterrents</Link>, <Link href="/best/bird-deterrents" className="text-blue-600 hover:underline font-medium">best bird deterrents</Link>, and <Link href="/best/ant-killers" className="text-blue-600 hover:underline font-medium">best ant killers</Link> guides.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Are foxes classed as vermin in the UK?</h3>
      <p>
        No. Foxes are <strong>wild animals, not classified as vermin</strong> under UK law. They are not listed under the Wildlife and Countryside Act 1981 as a pest species. However, they are <strong>not protected either</strong> (unlike badgers, which are protected under the Protection of Badgers Act 1992), which means landowners can take legal action to deter or control them using humane methods. Local councils do not classify foxes as pests and will not remove them from your property. If you need help managing foxes, you will need to use <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">DIY deterrent methods</Link> or hire a private pest controller.
      </p>

      <h3>Will the council remove a fox from my garden?</h3>
      <p>
        No. <strong>UK local councils do not provide fox removal services.</strong> Councils classify foxes as wildlife and consider them the responsibility of the property owner. You will need to hire a <strong>private pest controller</strong> or use DIY deterrent methods. Some councils provide advice leaflets on living with urban foxes, but they will not trap, relocate, or remove foxes from your garden. This applies to all UK councils &mdash; including London boroughs, which have the highest urban fox populations in the country.
      </p>

      <h3>Can I poison a fox in my garden?</h3>
      <p>
        <strong>No. It is illegal to poison foxes in the UK.</strong> Using poison against foxes is an offence under the <strong>Wildlife and Countryside Act 1981</strong> and the <strong>Animal Welfare Act 2006</strong>. Poison also poses serious risks to pets, children, and non-target wildlife such as hedgehogs, birds of prey, and domestic cats. There are <strong>no legally approved poisons</strong> for fox control in the UK. If you need to control foxes, use humane deterrent methods or hire a professional pest controller who uses legal methods. For a guide to effective legal deterrents, see our <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">Best Fox Deterrents UK 2026</Link> review.
      </p>

      <h3>How do I stop foxes digging up my lawn?</h3>
      <p>
        Foxes dig lawns primarily to <strong>search for chafer grubs and earthworms</strong>, or to bury food for later retrieval. The most effective solutions are: apply a <strong>scent-based fox repellent</strong> (such as Scoot) to the affected area, install a <strong>motion-activated sprinkler</strong> on the lawn, use an <strong>ultrasonic deterrent device</strong> near the digging area, and <strong>treat the lawn for chafer grubs</strong> (using nematodes, available from garden centres) to remove the food source that attracts foxes in the first place. Combining multiple methods is significantly more effective than relying on any single deterrent. Reapply scent repellents after rain.
      </p>

      <h3>What is the most effective fox deterrent?</h3>
      <p>
        The most effective <strong>single</strong> fox deterrent is a <strong>motion-activated sprinkler</strong>, which startles foxes with an unexpected jet of water. Foxes strongly dislike being sprayed with water, and the deterrent effect tends to be more durable than scent or ultrasonic methods because the physical sensation is harder to habituate to. However, professional pest controllers recommend <strong>combining multiple methods</strong> for best results: a motion-activated sprinkler on the fox&apos;s main entry path, <strong>scent repellent</strong> (such as Scoot) applied to the lawn and flower beds, and an <strong>ultrasonic device</strong> near bin areas. <strong>Physical exclusion</strong> &mdash; blocking gaps under fences with welded mesh and securing bins &mdash; is the most reliable long-term solution. See our <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">Best Fox Deterrents UK 2026</Link> review for detailed product recommendations.
      </p>

      <h3>Can foxes give diseases to my dog?</h3>
      <p>
        Yes. The main risk is <strong>sarcoptic mange</strong>, caused by the <em>Sarcoptes scabiei</em> mite, which can transfer from foxes to dogs through direct contact or contact with contaminated ground where a mangy fox has been lying. Symptoms in dogs include <strong>intense itching, hair loss, and crusty skin</strong>, particularly on the ears, elbows, and belly. Mange in dogs is treatable with veterinary medication, but early treatment is important for the best outcome. Fox droppings can also contain <strong><em>Toxocara canis</em> roundworm</strong>, which can infect dogs (and humans) if ingested. Keep your dog away from fox droppings and see your vet promptly if your dog shows signs of mange. For more information on how foxes interact with pets, see our main guide sections on <a href="#fox-mange" className="text-blue-600 hover:underline font-medium">fox mange</a> and <a href="#understanding-behaviour" className="text-blue-600 hover:underline font-medium">understanding fox behaviour</a>.
      </p>
    </GuideLayout>
  );
}