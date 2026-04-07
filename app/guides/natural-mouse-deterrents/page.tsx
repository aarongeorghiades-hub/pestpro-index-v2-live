import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Natural Mouse Deterrents UK: Keep Mice Away Without Poison',
    description:
      'Deter mice from your home without poison or kill traps. Peppermint oil, steel wool, ultrasonic devices and more natural methods reviewed.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/natural-mouse-deterrents',
    },
    openGraph: {
      title: 'Natural Mouse Deterrents UK: Keep Mice Away Without Poison',
      description:
        'Deter mice from your home without poison or kill traps. Peppermint oil, steel wool, ultrasonic devices and more natural methods reviewed.',
      url: 'https://pestproindex.com/guides/natural-mouse-deterrents',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Natural Mouse Deterrents UK: Keep Mice Away Without Poison',
  description:
    'Deter mice from your home without poison or kill traps. Peppermint oil, steel wool, ultrasonic devices and more natural methods reviewed.',
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
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
    '@id': 'https://pestproindex.com/guides/natural-mouse-deterrents',
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
      name: 'Natural Mouse Deterrents',
      item: 'https://pestproindex.com/guides/natural-mouse-deterrents',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does peppermint oil really repel mice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peppermint oil has moderate evidence as a mouse deterrent. Mice have an extremely sensitive sense of smell, and the strong menthol scent of concentrated peppermint oil can overwhelm their olfactory system. However, it needs to be refreshed every 5 to 7 days and works best as part of a broader strategy that includes physical proofing. Used alone, peppermint oil is unlikely to solve an established mouse problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most effective natural mouse deterrent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Steel wool pushed into gaps and holes is the single most effective natural mouse deterrent because it provides a permanent physical barrier that mice cannot chew through. No scent-based repellent comes close to the effectiveness of proper physical proofing. The best approach combines steel wool in gaps with good food hygiene and peppermint oil as a supplementary deterrent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do ultrasonic mouse repellers work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scientific evidence for ultrasonic mouse repellers is weak. While some laboratory studies show a short-term avoidance response, mice are highly adaptable and tend to habituate to the sound within days to weeks. Most pest control professionals do not recommend relying on ultrasonic devices as a primary method of mouse control. They may have marginal value as a supplementary measure alongside physical proofing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can mice chew through steel wool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, mice cannot chew through steel wool. The metal fibres shred their gums, making it an effective and permanent barrier material. Pack steel wool tightly into gaps and holes, then seal over the top with caulk or expanding foam to hold it in place. Copper mesh is an even more durable alternative as it does not rust.',
      },
    },
    {
      '@type': 'Question',
      name: 'How small a gap can a mouse fit through?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A house mouse can squeeze through a gap as small as 6 to 7 millimetres — roughly the diameter of a pencil. This means that even tiny gaps around pipes, cables, air bricks, and under doors can serve as entry points. Thorough inspection and sealing of all gaps larger than 6mm is essential for effective mouse proofing.',
      },
    },
  ],
};

const tocItems = [
  { id: 'natural-methods', title: 'Natural Mouse Deterrent Methods' },
  { id: 'physical-proofing', title: 'Physical Proofing (What Actually Works)' },
  { id: 'deterrent-products', title: 'Best Natural Deterrent Products' },
  { id: 'prevention', title: 'Preventing Mice Naturally' },
  { id: 'when-natural-isnt-enough', title: 'When Natural Methods Aren\'t Enough' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function NaturalMouseDeterrentsPage() {
  return (
    <GuideLayout
      title="Natural Mouse Deterrents UK: Keep Mice Away Without Poison"
      subtitle="Evidence-based guide to deterring mice from your home using natural, non-toxic methods — from peppermint oil to steel wool proofing"
      lastUpdated="April 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Humane Mouse Traps vs Kill Traps', href: '/guides/humane-mouse-traps-vs-kill-traps' },
        { title: 'How to Pest-Proof Your Loft', href: '/guides/how-to-pest-proof-your-loft' },
        { title: 'Essential Oils for Pest Control', href: '/guides/essential-oils-for-pest-control' },
        { title: 'Plants That Repel Pests', href: '/guides/plants-that-repel-pests' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Repellent UK 2026', href: '/best/mouse-repellent' },
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

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Natural Methods */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="natural-methods">Natural Mouse Deterrent Methods</h2>

      <p>
        If you have heard scratching in the walls at night or found small, dark droppings behind the cooker, you are not alone. The house mouse (<em>Mus musculus</em>) is the most common rodent pest in UK homes, and many people &mdash; understandably &mdash; want to deal with the problem without resorting to poison or kill traps. Whether your motivation is concern for pets and children, a preference for humane solutions, or simple reluctance to handle dead mice, natural deterrents are a legitimate starting point.
      </p>
      <p>
        This guide covers every widely recommended natural mouse deterrent, rates the evidence behind each one honestly, and helps you understand which methods genuinely work, which are folklore, and &mdash; crucially &mdash; which situations require you to escalate to stronger measures.
      </p>

      <div className="not-prose">
        <StatCallout value="6mm" label="The gap size a mouse can squeeze through — roughly the width of a pencil" />
      </div>

      <h3>Peppermint Oil (Effectiveness: Moderate)</h3>
      <p>
        Peppermint oil is the most widely recommended natural mouse deterrent, and there is reasonable evidence to support its use. Mice have an <strong>extremely sensitive sense of smell</strong> &mdash; roughly 14 times more sensitive than a human&apos;s &mdash; and the intense menthol in concentrated peppermint oil can overwhelm their olfactory system, making treated areas uncomfortable to navigate.
      </p>
      <p>
        <strong>How to use it:</strong> Soak cotton wool balls in pure peppermint essential oil (not peppermint extract or flavouring) and place them near suspected entry points: behind kitchen appliances, inside airing cupboards, in loft hatches, behind the toilet, and near any gaps in skirting boards. Replace the cotton wool every 5 to 7 days as the scent fades. For wider coverage, mix 20 to 30 drops of peppermint oil with 250ml of water and a teaspoon of washing-up liquid in a spray bottle, shake well, and spray along skirting boards and around potential entry points.
      </p>
      <p>
        <strong>Limitations:</strong> Peppermint oil is a deterrent, not a solution. It may discourage mice from crossing a treated area, but a hungry or determined mouse with an established route into your home is unlikely to be permanently deterred by scent alone. The oil evaporates and needs constant refreshing. It is most effective when used alongside physical proofing measures. <strong>Important:</strong> peppermint oil can be harmful to cats &mdash; use with caution in homes with feline pets.
      </p>

      <h3>Cloves and Clove Oil (Effectiveness: Low to Moderate)</h3>
      <p>
        Cloves contain <strong>eugenol</strong>, a pungent compound that mice find unpleasant. Whole cloves or clove essential oil can be used in the same way as peppermint oil &mdash; placed near entry points and in areas where you have found evidence of mouse activity. The sharp, spicy scent is strong enough to be noticeable to the human nose, and it is significantly more intense to a mouse.
      </p>
      <p>
        <strong>How to use it:</strong> Place whole cloves in small muslin bags or directly on shelves, inside cupboards, and near gaps. For clove oil, apply a few drops to cotton wool balls and position them at entry points. You can also combine clove oil with peppermint oil for a stronger effect.
      </p>
      <p>
        <strong>Limitations:</strong> The evidence for cloves as a mouse deterrent is weaker than for peppermint. It works as a mild repellent but is unlikely to deter mice on its own, particularly in colder months when the motivation to find warmth and food indoors is strongest.
      </p>

      <h3>Cayenne Pepper and Chilli Flakes (Effectiveness: Low to Moderate)</h3>
      <p>
        Capsaicin, the compound that makes chillies hot, is an irritant to mice and other small mammals. Sprinkling cayenne pepper or dried chilli flakes around entry points creates an unpleasant sensory barrier. When a mouse walks through the powder, the capsaicin irritates its paws and, when it grooms, its mouth and nose.
      </p>
      <p>
        <strong>How to use it:</strong> Sprinkle a generous line of cayenne pepper or crushed chilli flakes across doorways, along the base of walls, and around any holes or gaps. Reapply after cleaning or if the area gets damp.
      </p>
      <p>
        <strong>Limitations:</strong> Cayenne pepper is messy, can stain surfaces, and irritates human skin and eyes if disturbed. It is not suitable for areas where small children or pets crawl on the floor. The effect is short-lived once the powder is cleaned up or blown away. A mild deterrent at best.
      </p>

      <h3>Dryer Sheets (Effectiveness: Low)</h3>
      <p>
        Dryer sheets (tumble dryer sheets) are occasionally recommended as a mouse deterrent due to their strong fragrance. The theory is that the perfume overwhelms the mouse&apos;s sense of smell and makes the area unappealing.
      </p>
      <p>
        <strong>Honest assessment:</strong> There is very little scientific evidence for dryer sheets as a mouse deterrent. While a fresh sheet may temporarily confuse a mouse, the scent fades quickly and mice are highly adaptable. This is one of the weaker natural methods and should not be relied upon.
      </p>

      <h3>Aluminium Foil (Effectiveness: Low)</h3>
      <p>
        Some sources suggest that mice dislike walking on aluminium foil due to the unfamiliar texture and sound. Placing sheets of foil across areas where mice travel is said to discourage them.
      </p>
      <p>
        <strong>Honest assessment:</strong> Largely anecdotal. While mice may initially be cautious around foil, they are remarkably adaptable and are likely to overcome this hesitation quickly, especially if food is available on the other side. This is not a reliable method.
      </p>

      <h3>Used Cat Litter (Effectiveness: Moderate)</h3>
      <p>
        This one sounds unpleasant, but it has genuine logic behind it. Mice have evolved to avoid predators, and the scent of cat urine triggers a <strong>hardwired fear response</strong> in mice. Placing small amounts of used cat litter (in a breathable container such as a mesh bag) near known entry points can make mice believe a predator is present.
      </p>
      <p>
        <strong>How to use it:</strong> Place small amounts of used cat litter in breathable containers near gaps, in the loft, or near the base of exterior walls. Obviously, this method is only practical in areas that are not living spaces &mdash; lofts, garages, sheds, and crawl spaces. Replace the litter regularly.
      </p>
      <p>
        <strong>Limitations:</strong> Not suitable for kitchens or living areas due to hygiene and smell. The effect can diminish over time as mice may habituate if no actual predator appears. Genuinely owning a cat is far more effective than placing cat litter.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Owning an active, hunting cat is genuinely one of the most effective natural mouse deterrents. The combination of scent, sound, and actual predation pressure makes cats a powerful deterrent that mice take very seriously.</p>
        </Callout>
      </div>

      <h3>Ultrasonic Devices (Effectiveness: Low)</h3>
      <p>
        Ultrasonic mouse repellers plug into a mains socket and emit high-frequency sound waves that are marketed as being uncomfortable for mice and rats. They are widely sold in the UK, relatively affordable, and easy to use &mdash; which explains their popularity. However, the <strong>scientific evidence is weak</strong>.
      </p>
      <p>
        Several independent studies have found that while mice may show a short-term avoidance response to ultrasonic sound, they typically <strong>habituate within days to two weeks</strong>. The sound does not penetrate walls, furniture, or soft furnishings, limiting its coverage. Most professional pest control organisations, including the British Pest Control Association, do not endorse ultrasonic devices as a reliable method of rodent control.
      </p>
      <p>
        <strong>Our recommendation:</strong> If you want to try an ultrasonic device, treat it as a supplementary measure alongside physical proofing rather than a primary solution. Do not spend a large amount on expensive models &mdash; the evidence does not justify the investment.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Physical Proofing */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="physical-proofing">Physical Proofing: What Actually Works</h2>

      <p>
        If there is one message to take away from this entire guide, it is this: <strong>physical proofing is by far the most effective natural mouse deterrent</strong>. A mouse does not care how bad something smells if there is food and warmth on the other side. But a mouse cannot walk through a solid barrier.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Physical proofing with steel wool and sealant is the single most effective natural mouse deterrent. Every other method on this page works better when combined with proper proofing.</p>
        </Callout>
      </div>

      <h3>Steel Wool</h3>
      <p>
        Steel wool is the gold standard for mouse-proofing gaps and holes. Mice <strong>cannot chew through it</strong> &mdash; the metal fibres shred their gums if they try, and they quickly learn to avoid it. Pack steel wool tightly into any gap, hole, or crack larger than 6mm (the minimum gap a mouse can squeeze through). For the best seal, pack the steel wool in first, then cover with expanding foam, caulk, or cement to hold it in place and prevent the steel wool from being pulled out.
      </p>
      <p>
        Pay particular attention to these common entry points: gaps around pipes where they enter the building, spaces beneath doors (especially garage doors and external doors), holes around cables and conduits, damaged air bricks, gaps where the roofline meets the wall, and spaces behind kitchen units where pipes enter the wall.
      </p>

      <h3>Copper Mesh</h3>
      <p>
        Copper mesh serves the same purpose as steel wool but with two advantages: it <strong>does not rust</strong> (making it suitable for exterior use and damp areas) and it is slightly more resistant to being pulled out by persistent rodents. Copper mesh is more expensive than steel wool but is a superior long-term solution for permanent proofing.
      </p>

      <h3>Expanding Foam with Wire Wool</h3>
      <p>
        Expanding polyurethane foam on its own is <strong>useless</strong> as a mouse barrier &mdash; mice chew straight through it. However, when combined with steel wool or copper mesh packed into the gap first, expanding foam creates an excellent seal that is both rodent-proof and draught-proof. Some pest-specific expanding foams are now available that incorporate wire fibres within the foam itself.
      </p>

      <h3>Door Brush Strips and Draught Excluders</h3>
      <p>
        If there is a gap of more than 6mm beneath your external doors, fit a <strong>brush strip draught excluder</strong> to close it. Purpose-made door brush strips are widely available from hardware stores and are simple to install. They allow the door to open and close normally while blocking the gap that mice use to walk in.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Deterrent Products */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="deterrent-products">Best Natural Deterrent Products</h2>

      <p>
        These are the top-rated natural mouse deterrent products available in the UK &mdash; a combination of scent-based repellents and physical proofing materials. We have prioritised products that are genuinely non-toxic and humane.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="REPELEM Peppermint Mouse Repellent Spray (250ml)"
          rating={4.2}
          features={[
            'Concentrated peppermint essential oil formula',
            'Ready-to-use spray for skirting boards, lofts, garages',
            'Non-toxic and safe around children when dry',
            'Lasts up to 2 weeks per application indoors',
          ]}
          price="£12.99"
          asin="B0CRRSTHNG"
          bestFor="Best Natural Spray"
        />

        <ProductCard
          name="The Big Cheese Steel Wool Mouse Proofing Kit"
          rating={4.5}
          features={[
            '8 steel wool pads for filling gaps and holes',
            'Mice cannot chew through steel wool — permanent barrier',
            'Includes peppermint oil spray as a bonus deterrent',
            'Simple to push into gaps, cover with foam or caulk',
          ]}
          price="£9.99"
          asin="B0DG63BNGT"
          bestFor="Best Physical Proofing"
        />

        <ProductCard
          name="Ultrasonic Pest Repeller Plug-In (115m² Coverage)"
          rating={3.8}
          features={[
            'Covers up to 115 square metres per unit',
            'Simply plug into any mains socket',
            'Inaudible to humans and most pets',
            'Chemical-free — use as supplementary deterrent',
          ]}
          price="£24.99"
          asin="B0CN69X7GT"
          bestFor="Best Supplementary Device"
        />

        <ProductCard
          name="Copper Mesh Mouse-Proof Gap Filler (20 Feet)"
          rating={4.4}
          features={[
            'Double-layer knitted copper mesh — mice cannot chew through',
            'Does not rust — suitable for exterior and damp areas',
            '20 feet of material — enough for a whole house',
            'Cut to size with scissors, pack tightly into gaps',
          ]}
          price="£12.99"
          asin="B0BL14WK6V"
          bestFor="Best Rust-Proof Barrier"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Prevention */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="prevention">Preventing Mice Naturally: The Fundamentals</h2>

      <p>
        The most effective natural mouse deterrent is not a product you buy &mdash; it is a set of habits that make your home unattractive and inaccessible to mice in the first place. Mice enter homes for three reasons: <strong>food, warmth, and shelter</strong>. Address these, and you dramatically reduce your risk.
      </p>

      <h3>Food Hygiene</h3>
      <p>
        A mouse needs only <strong>3 to 4 grams of food per day</strong> to survive &mdash; a few crumbs under the toaster is a feast. Store all dry food (cereals, rice, pasta, flour, sugar, biscuits) in sealed glass, metal, or heavy-duty plastic containers. Mice can chew through cardboard boxes and thin plastic bags with ease. Wipe down kitchen surfaces every evening. Sweep or vacuum under kitchen units and behind appliances regularly. Do not leave pet food bowls out overnight &mdash; pick them up after your pet has finished eating.
      </p>

      <div className="not-prose">
        <StatCallout value="3-4g" label="Daily food intake a mouse needs to survive — a few crumbs is enough" />
      </div>

      <h3>Waste Management</h3>
      <p>
        Ensure all kitchen bins have tight-fitting lids. Take waste out regularly, particularly food waste. If your council provides open-topped recycling boxes, keep them clean and free from food residue. Exterior bins should be positioned away from the building and have secure lids.
      </p>

      <h3>Garden and Exterior Maintenance</h3>
      <p>
        Trim vegetation away from the building by at least 30cm to remove cover that mice use to approach unseen. Clear piles of wood, garden waste, and building materials that provide harbourage. If you have a compost heap, use a sealed bin rather than an open heap and avoid composting cooked food. Remove fallen fruit from the ground beneath fruit trees.
      </p>

      <h3>Bird Feeders</h3>
      <p>
        Bird feeders are one of the most common attractants for mice and rats in UK gardens. The seed spillage that accumulates beneath feeders provides a reliable food source throughout the year. If you have a mouse problem, consider temporarily removing bird feeders or switching to <strong>squirrel-proof, caged designs</strong> that minimise spillage. Place feeders as far from the house as possible.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Mice Proving Hard to Deter?"
          subtext="Compare BPCA-certified pest control providers who offer humane, poison-free mouse treatments"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: When Natural Isn't Enough */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="when-natural-isnt-enough">When Natural Methods Aren&apos;t Enough</h2>

      <p>
        Natural deterrents and physical proofing are excellent for <strong>prevention</strong> and for dealing with the very early stages of mouse activity &mdash; the occasional scout mouse exploring a new route into your home. However, if mice have already established themselves inside your property, natural repellents alone are very unlikely to persuade them to leave. Here are the signs that you need to escalate:
      </p>

      <ul>
        <li><strong>Droppings in multiple rooms</strong> &mdash; indicates established activity, not just exploration</li>
        <li><strong>Nesting material found</strong> (shredded paper, fabric, insulation) &mdash; mice have moved in and are breeding</li>
        <li><strong>Scratching noises every night</strong> &mdash; a regular presence, not a one-off visitor</li>
        <li><strong>Gnaw marks on food packaging</strong> &mdash; mice are feeding inside your home</li>
        <li><strong>Strong, musty ammonia smell</strong> &mdash; indicates a significant population</li>
      </ul>

      <p>
        For an established mouse problem, <strong>humane live-catch traps</strong> are the next step that stays aligned with a non-lethal approach. These traps capture mice alive so you can release them at a distance from your home. If live-catch traps prove insufficient, snap traps provide a quick, humane kill and are the method recommended by most pest control professionals as the standard for DIY mouse control. For persistent infestations, combine <Link href="/best/mouse-repellent" className="text-green-600 hover:underline">mouse repellent sprays</Link> with <Link href="/best/mouse-bait-stations" className="text-green-600 hover:underline">mouse bait stations</Link> for a complete approach.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Need to escalate?</p>
        <p className="text-gray-700 mb-3">Our in-depth reviews cover both humane and standard mouse traps for every situation.</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/best/mouse-traps"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Mouse Traps UK 2026 &rarr;
          </Link>
          <Link
            href="/best/mouse-repellent"
            className="inline-block px-6 py-2.5 bg-white border border-blue-300 hover:bg-blue-50 text-blue-700 font-bold rounded-lg transition-colors text-sm"
          >
            Best Mouse Repellent &rarr;
          </Link>
        </div>
      </div>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="B-Free Humane Mouse Trap — Live Catch & Release"
          rating={4.3}
          features={[
            'Catches mice alive for humane release at a distance',
            'Reusable design — just open, release, and reset',
            'No poison, no kill — fully humane approach',
            'Suitable for indoor and outdoor use',
          ]}
          price="£8.49"
          asin="B09FKLKNV7"
          bestFor="Best Humane Option"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Does peppermint oil really repel mice?</h3>
      <p>
        Peppermint oil has moderate evidence as a mouse deterrent. Mice have an extremely sensitive sense of smell &mdash; roughly 14 times more sensitive than a human&apos;s &mdash; and the strong menthol scent of concentrated peppermint oil can overwhelm their olfactory system. However, it needs to be refreshed every 5 to 7 days and works best as part of a broader strategy that includes physical proofing. Used alone, peppermint oil is unlikely to solve an established mouse problem.
      </p>

      <h3>What is the most effective natural mouse deterrent?</h3>
      <p>
        Steel wool pushed into gaps and holes is the single most effective natural mouse deterrent because it provides a permanent physical barrier that mice cannot chew through. No scent-based repellent comes close to the effectiveness of proper physical proofing. The best approach combines steel wool in gaps with good food hygiene and peppermint oil as a supplementary deterrent.
      </p>

      <h3>Do ultrasonic mouse repellers work?</h3>
      <p>
        The scientific evidence for ultrasonic mouse repellers is weak. While some laboratory studies show a short-term avoidance response, mice are highly adaptable and tend to habituate to the sound within days to two weeks. Most pest control professionals, including the British Pest Control Association, do not endorse ultrasonic devices as a reliable method of rodent control. They may have marginal value as a supplementary measure alongside physical proofing.
      </p>

      <h3>Can mice chew through steel wool?</h3>
      <p>
        No, mice cannot chew through steel wool. The metal fibres shred their gums, making it an extremely effective and permanent barrier material. Pack steel wool tightly into gaps and holes, then seal over the top with caulk or expanding foam to hold it securely in place. Copper mesh is an even more durable alternative as it does not rust, making it particularly suitable for exterior use and damp areas such as under kitchen sinks.
      </p>

      <h3>How small a gap can a mouse fit through?</h3>
      <p>
        A house mouse can squeeze through a gap as small as <strong>6 to 7 millimetres</strong> &mdash; roughly the diameter of a pencil. This is smaller than most people expect, and it means that even tiny gaps around pipes, cables, air bricks, and under doors can serve as entry points. Thorough inspection and sealing of all gaps larger than 6mm is essential for effective mouse proofing. Use a pencil as a guide: if you can push a pencil into a gap, a mouse can fit through it.
      </p>
    </GuideLayout>
  );
}
