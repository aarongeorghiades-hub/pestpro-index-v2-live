import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Moth Killers UK 2026 — Top 5 Tested & Reviewed | PestPro Index',
    description:
      'The best moth killers for UK homes in 2026. Hanging killers, pheromone traps, carpet sprays and sachets reviewed with honest pros, cons, and buying advice from pest control experts.',
    alternates: {
      canonical: 'https://pestproindex.com/best/moth-killers',
    },
    openGraph: {
      title: 'Best Moth Killers UK 2026 — Top 5 Tested & Reviewed | PestPro Index',
      description:
        'The best moth killers for UK homes in 2026. Hanging killers, pheromone traps, carpet sprays and sachets reviewed with honest pros, cons, and buying advice from pest control experts.',
      url: 'https://pestproindex.com/best/moth-killers',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Moth Killers UK 2026 — Top 5 Tested & Reviewed',
  description:
    'The best moth killers for UK homes in 2026. Hanging killers, pheromone traps, carpet sprays and sachets reviewed with honest pros, cons, and buying advice from pest control experts.',
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  author: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PestPro Index',
    url: 'https://pestproindex.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pestproindex.com/best/moth-killers',
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
      name: 'Best',
      item: 'https://pestproindex.com/best',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Moth Killers UK 2026',
      item: 'https://pestproindex.com/best/moth-killers',
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Moth Killers at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Acana Hanging Moth Killer' },
  { id: 'best-pheromone-trap', title: 'Best Pheromone Trap — London Moth Killer Pheromone Traps' },
  { id: 'best-carpet-spray', title: 'Best Carpet Moth Spray — Acana Carpet & Fabric Moth Killer Spray' },
  { id: 'best-drawers-storage', title: 'Best for Drawers & Storage — Acana Sachet Moth Killer 20 Pack' },
  { id: 'best-budget', title: 'Best Budget Option — Rentokil Moth Killer Hanging Unit Twin Pack' },
  { id: 'how-to-choose', title: 'How to Choose the Right Moth Killer' },
  { id: 'tips', title: 'Moth Killer Tips for Best Results' },
];

export default function BestMothKillersPage() {
  return (
    <GuideLayout
      title="Best Moth Killers UK 2026 — Top 5 Tested & Reviewed"
      subtitle="Expert-reviewed moth killer products for UK homes — from hanging killers and pheromone traps to carpet sprays and storage sachets."
      lastUpdated="March 2026"
      readingTime="12 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Moths: Complete UK Guide', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Wasps: Complete UK Guide', href: '/guides/how-to-get-rid-of-wasps' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Silverfish: Complete UK Guide', href: '/guides/how-to-get-rid-of-silverfish' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
      ]}
      relatedProducts={[
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
      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small commission at no extra cost to you. This helps us keep the site running and free for everyone. As an Amazon Associate, PestPro Index earns from qualifying purchases.
        </p>
      </div>

      {/* Intro paragraphs */}
      <p>
        Clothes moths are one of the most destructive household pests in the United Kingdom, and the damage they cause is often discovered long after the infestation has taken hold. Unlike the harmless moths that flutter around outdoor lights on summer evenings, the species responsible for ruining clothing, carpets, and soft furnishings in British homes are small, secretive, and actively avoid light. The two main culprits are the common clothes moth (<em>Tineola bisselliella</em>) and the case-bearing clothes moth (<em>Tinea pellionella</em>), both of which lay their eggs on natural fibres such as wool, silk, cashmere, cotton blends, and fur. It is not the adult moths that cause the damage &mdash; it is their larvae, tiny cream-coloured caterpillars that feed voraciously on keratin, the protein found in animal-based fibres. A single female clothes moth can lay between 40 and 100 eggs in her short lifetime, and in the warm, undisturbed conditions of a modern centrally heated home, those eggs can hatch in as little as four to ten days. The larvae then feed for anywhere from two months to over a year depending on temperature and food availability, leaving behind irregular holes in garments, bald patches on carpets, and silky webbing or tiny cylindrical cases scattered across affected fabrics.
      </p>
      <p>
        The British Pest Control Association (BPCA) has reported a significant increase in clothes moth infestations across the UK over the past two decades, driven primarily by milder winters, increased central heating, and a resurgence of natural fibre use in fashion and interiors. Victorian and Edwardian properties with original wool carpets, underlay, and horsehair plaster are particularly vulnerable, but no home is immune. Moths can arrive on second-hand clothing, vintage rugs, charity shop purchases, or simply fly in through open windows. Once established, an infestation can persist for years if left untreated, with each generation producing more larvae that spread to new food sources throughout the property. The key to effective moth control lies in understanding the lifecycle: you must target both the adult moths (to prevent further egg-laying) and the larvae already feeding within your fabrics and carpets. No single product does both jobs perfectly, which is why a combination approach using traps, sprays, and preventative killers typically delivers the best results.
      </p>
      <p>
        To compile this guide, we evaluated dozens of moth killer products available on Amazon UK based on four criteria: <strong>UK availability and fast Prime delivery</strong>, <strong>genuine verified customer reviews</strong> (we analysed hundreds of reviews, filtering out those that appeared incentivised or inauthentic), <strong>proven effectiveness against common UK clothes moth species</strong>, and <strong>value for money</strong>. We also consulted guidance from the BPCA and professional pest control technicians who specialise in textile pest management. For a complete step-by-step moth removal strategy &mdash; including deep cleaning, freezing techniques, and long-term prevention &mdash; see our companion guide: <Link href="/guides/how-to-get-rid-of-moths" className="text-blue-600 hover:text-blue-800 underline">How to Get Rid of Moths: Complete UK Guide</Link>.
      </p>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Moth Killers at a Glance</h2>
      <p>
        Below is a quick comparison of our five top-rated moth killer products. Each has been selected for a different use case, so the best option for you depends on whether you are protecting wardrobes, treating carpets, monitoring an infestation, or safeguarding stored clothing and blankets. We go into full detail on every product further down the page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Best For</th>
            <th>Price Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acana Hanging Moth Killer</td>
            <td>Hanging killer strip</td>
            <td>Best Overall</td>
            <td>~&pound;8 for 4</td>
          </tr>
          <tr>
            <td>London Moth Killer Pheromone Traps</td>
            <td>Pheromone sticky trap</td>
            <td>Best Pheromone Trap</td>
            <td>~&pound;10 for 6</td>
          </tr>
          <tr>
            <td>Acana Carpet &amp; Fabric Moth Killer Spray</td>
            <td>Aerosol spray</td>
            <td>Best Carpet Moth Spray</td>
            <td>~&pound;9</td>
          </tr>
          <tr>
            <td>Acana Sachet Moth Killer 20 Pack</td>
            <td>Sachet</td>
            <td>Best for Drawers &amp; Storage</td>
            <td>~&pound;8</td>
          </tr>
          <tr>
            <td>Rentokil Moth Killer Hanging Unit Twin Pack</td>
            <td>Hanging killer strip</td>
            <td>Best Budget Option</td>
            <td>~&pound;5</td>
          </tr>
        </tbody>
      </table>

      {/* Best Overall */}
      <h2 id="best-overall">Best Overall &mdash; Acana Hanging Moth Killer</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Acana Hanging Moth Killer"
          rating={4.5}
          features={[
            'Four hanging units protect an entire wardrobe',
            'Kills moths, larvae, and eggs on contact',
            'Fresh linen fragrance — no unpleasant chemical odour',
            'Lasts up to six months per unit',
          ]}
          price="~&pound;8 for 4"
          asin="B00BMO6HKA"
          bestFor="Best Overall"
          rank={1}
        />
      </div>
      <p>
        The Acana Hanging Moth Killer has earned its place as the best overall moth killer product available in the UK thanks to its combination of proven effectiveness, ease of use, and outstanding value for money. Manufactured by Acana, a British brand that has specialised in moth protection products for over two decades, these hanging units are designed to be placed directly inside wardrobes, garment bags, and clothes storage areas where clothes moths are most likely to lay their eggs. Each pack contains four individually sealed units, and each unit provides up to six months of continuous protection &mdash; meaning a single purchase can safeguard your wardrobe for half a year. The active formula kills adult clothes moths on contact, but crucially it also targets moth larvae and eggs, which is where the real damage to your clothing occurs. This three-stage kill action is what sets the Acana product apart from basic moth repellents that merely deter adult moths without addressing the destructive larval stage already present in your garments.
      </p>
      <p>
        Each unit features a simple hook design that allows it to hang from the rail of any standard wardrobe, positioning the active ingredients at garment level where they are most effective. The formula releases a controlled vapour that permeates the enclosed wardrobe space, creating an environment that is lethal to all life stages of the clothes moth while remaining completely safe for your fabrics. Unlike traditional mothballs, which leave a pungent and lingering chemical odour on clothing, the Acana hanging killers are infused with a pleasant fresh linen fragrance that leaves your wardrobe smelling clean and fresh. This is a significant practical advantage &mdash; many people have abandoned effective moth protection products in the past simply because they could not tolerate the smell of naphthalene or paradichlorobenzene on their clothes. Acana has solved this problem without compromising on killing power. At approximately &pound;8 for four units, the cost works out at just &pound;2 per unit, or roughly 33 pence per month of protection &mdash; a trivial expense compared to the cost of replacing a moth-damaged cashmere jumper or wool suit.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Kills adult moths, larvae, and eggs &mdash; full lifecycle protection</li>
        <li>Each unit lasts up to six months, providing long-term wardrobe defence</li>
        <li>Pleasant fresh linen scent rather than harsh chemical mothball odour</li>
        <li>Simple hook design fits any standard wardrobe rail</li>
        <li>Excellent value at approximately &pound;2 per unit</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Most effective in enclosed spaces &mdash; less suitable for open-plan wardrobes or clothes rails without doors</li>
        <li>Fragrance may be too strong for those with scent sensitivities</li>
        <li>Does not treat existing damage to carpets or large fabric areas</li>
        <li>Needs replacing every six months to maintain protection</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Acana Hanging Moth Killer is our top recommendation for protecting wardrobes and stored clothing from moth damage. Its triple-action formula tackles adults, larvae, and eggs simultaneously, and the six-month lifespan means you can hang it and forget about it until the next replacement cycle. If you own valuable wool, cashmere, or silk garments, this product should be a permanent fixture in your wardrobe.
      </p>

      {/* Best Pheromone Trap */}
      <h2 id="best-pheromone-trap">Best Pheromone Trap &mdash; London Moth Killer Pheromone Traps</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="London Moth Killer Pheromone Traps"
          rating={4.4}
          features={[
            'Six traps per pack for whole-home monitoring',
            'Pheromone-based — attracts and traps male moths',
            'Non-toxic and pesticide-free design',
            'Helps identify infestation hotspots before they spread',
          ]}
          price="~&pound;10 for 6"
          asin="B0CGB12XNN"
          bestFor="Best Pheromone Trap"
          rank={2}
        />
      </div>
      <p>
        Pheromone traps occupy a unique and critically important role in any moth control strategy. Unlike hanging killers and sprays that actively destroy moths and larvae through chemical means, pheromone traps work by luring male clothes moths onto a sticky surface using a synthetic version of the female moth&apos;s sex pheromone. When a male moth detects the pheromone, it follows the scent trail to the trap, lands on the adhesive surface, and becomes permanently stuck. This serves two vital purposes: first, it removes male moths from the breeding population, which directly reduces the number of fertilised eggs laid in your home; and second &mdash; arguably more importantly &mdash; it acts as an early warning system that reveals exactly where moth activity is concentrated in your property. Without pheromone traps, many infestations go undetected until significant damage has already occurred, because adult clothes moths are small, pale, and deliberately avoid well-lit areas. The London Moth Killer Pheromone Traps pack of six provides enough traps to monitor every room and storage area in a typical British home simultaneously.
      </p>
      <p>
        The London Moth Killer traps are designed with a fold-out triangular shape that stands discreetly on shelves, inside wardrobes, in airing cupboards, and in loft storage areas. The pheromone lure is pre-applied to the sticky surface inside each trap, so there is no preparation required &mdash; simply fold the trap into shape and position it in the area you wish to monitor. Each trap remains active for approximately eight weeks, after which the pheromone gradually loses its potency and the trap should be replaced. Six traps at around &pound;10 works out at less than &pound;1.70 per trap, which is competitive pricing for a pheromone product. Place traps in wardrobes, chests of drawers, airing cupboards, under beds, in spare bedrooms, and in any room where natural-fibre carpets or rugs are present. After a week, check each trap and note which locations have caught moths &mdash; this tells you precisely where to concentrate your treatment efforts with sprays and hanging killers. A completely non-toxic and pesticide-free product, these traps are safe to use in homes with children, pets, and individuals with chemical sensitivities.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Six traps per pack provide whole-home monitoring coverage</li>
        <li>Identifies infestation hotspots before serious damage occurs</li>
        <li>Completely non-toxic and pesticide-free &mdash; safe for all households</li>
        <li>Disrupts the breeding cycle by removing male moths</li>
        <li>Discreet fold-out design fits neatly into wardrobes and on shelves</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Targets male moths only &mdash; does not kill larvae or eggs</li>
        <li>Pheromone lure loses effectiveness after approximately eight weeks</li>
        <li>Will not resolve an existing infestation on its own &mdash; best used alongside active killers</li>
        <li>Sticky surface can catch dust in open environments, reducing trap life</li>
      </ul>
      <p>
        <strong>Verdict:</strong> Pheromone traps are an essential component of any serious moth control programme, and the London Moth Killer pack of six offers the best combination of value, effectiveness, and coverage. Use them as your first line of defence to detect and locate moth activity, then deploy targeted treatments such as sprays and hanging killers in the areas where the traps catch the most moths. Think of pheromone traps as the intelligence-gathering tool that makes all your other moth killer products more effective.
      </p>

      {/* Best Carpet Moth Spray */}
      <h2 id="best-carpet-spray">Best Carpet Moth Spray &mdash; Acana Carpet &amp; Fabric Moth Killer Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Acana Carpet & Fabric Moth Killer Spray"
          rating={4.3}
          features={[
            'Kills moths, larvae, and eggs on carpets and fabrics',
            'Residual protection lasts up to three months after application',
            'Safe on wool carpets, rugs, upholstery, and curtains',
            'Targeted spray nozzle for treating edges, corners, and under furniture',
          ]}
          price="~&pound;9"
          asin="B00E8I39EE"
          bestFor="Best Carpet Moth Spray"
          rank={3}
        />
      </div>
      <p>
        Carpet moths represent a particularly challenging subset of the clothes moth problem in the UK. While wardrobe moths attack hanging garments and folded knitwear, carpet moth larvae feed on the wool fibres of fitted carpets, rugs, and underlay &mdash; often causing extensive damage in areas that are hidden from view, such as beneath heavy furniture, along skirting boards, and in the corners of rooms that receive little foot traffic. The larvae prefer dark, undisturbed areas where they can feed without interruption, which is why moth damage to carpets is frequently worst under sofas, beds, wardrobes, and bookcases. By the time you notice bald patches appearing on your carpet, the larvae may have been feeding for months. The Acana Carpet and Fabric Moth Killer Spray is specifically formulated to address this problem, delivering an insecticidal treatment directly to the carpet fibres where larvae are actively feeding.
      </p>
      <p>
        The spray contains an active ingredient that kills adult moths, larvae, and eggs on contact, and it leaves a residual treatment in the carpet fibres that continues to kill newly hatched larvae for up to three months after application. This residual effect is crucial because moth eggs can take several weeks to hatch depending on temperature, and a single spray application without residual protection would leave you vulnerable to the next generation of larvae emerging after the spray has dried. The targeted nozzle allows you to direct the spray precisely where it is needed &mdash; along the edges of rooms where carpet meets skirting boards, beneath furniture, in the corners of built-in wardrobes, and on any area of carpet where you have observed damage or found larvae. The formula is safe for use on wool carpets, natural-fibre rugs, upholstery, and curtains, although you should always test on an inconspicuous area first to ensure colour-fastness. A single can provides enough product to treat a large room or several smaller areas, and at approximately &pound;9 it represents a fraction of the cost of professional carpet moth treatment, which typically ranges from &pound;150 to &pound;300 depending on the size of the property.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Specifically designed for carpet and fabric moth treatment</li>
        <li>Kills all life stages &mdash; adults, larvae, and eggs</li>
        <li>Residual protection lasting up to three months prevents reinfestation</li>
        <li>Precision nozzle for targeting edges, corners, and under-furniture zones</li>
        <li>Safe for use on wool carpets and natural-fibre textiles</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Requires moving furniture to access high-risk areas for effective treatment</li>
        <li>Aerosol spray has a chemical odour during application &mdash; ventilate the room well</li>
        <li>Must test on an inconspicuous area first to check colour-fastness</li>
        <li>Single can may not be sufficient for treating an entire large house</li>
      </ul>
      <p>
        <strong>Verdict:</strong> If you have wool carpets, natural-fibre rugs, or fabric upholstery that is showing signs of moth damage, the Acana Carpet and Fabric Moth Killer Spray is the product you need. Its combination of contact kill and three-month residual protection makes it the most effective consumer-level carpet moth treatment on the UK market. For best results, vacuum thoroughly before spraying to remove loose larvae and debris, then apply the spray to all edges, corners, and under-furniture zones where moth activity is concentrated.
      </p>

      {/* Best for Drawers & Storage */}
      <h2 id="best-drawers-storage">Best for Drawers &amp; Storage &mdash; Acana Sachet Moth Killer 20 Pack</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Acana Sachet Moth Killer 20 Pack"
          rating={4.4}
          features={[
            'Twenty sachets per pack — enough for every drawer and storage box',
            'Kills moths, larvae, and eggs within enclosed spaces',
            'Compact size slips easily between folded garments',
            'Fresh floral fragrance protects and freshens simultaneously',
          ]}
          price="~&pound;8"
          asin="B008BG6JFK"
          bestFor="Best for Drawers & Storage"
          rank={4}
        />
      </div>
      <p>
        Wardrobes are not the only place where clothes moths cause havoc. Chest of drawers, ottoman storage beds, vacuum bags, suitcases, and cardboard boxes packed with seasonal clothing are all prime targets for moth larvae &mdash; and they are frequently overlooked during treatment. The Acana Sachet Moth Killer 20 Pack is designed specifically for these smaller, enclosed storage spaces that hanging units cannot adequately protect. Each sachet is compact enough to slip between folded jumpers in a drawer, tuck inside a storage box of winter blankets, or place alongside delicate items in a garment bag. With twenty sachets in every pack, you have more than enough to protect every drawer, shelf, and storage container in your home in a single purchase. The active formula works in the same way as the Acana hanging killers &mdash; it releases a controlled vapour within the enclosed space that kills adult moths, larvae, and eggs &mdash; but the sachet format is optimised for the smaller, shallower volumes of drawers and boxes rather than the taller space of a wardrobe.
      </p>
      <p>
        The sachets are infused with a subtle floral fragrance that keeps your stored clothing smelling fresh without the overwhelming chemical odour associated with traditional mothballs. This makes them particularly well-suited for use with delicate items such as cashmere scarves, silk ties, merino wool base layers, and baby clothes made from natural fibres. Each sachet provides protection for approximately three months, after which it should be replaced. At roughly &pound;8 for twenty sachets &mdash; just 40 pence each &mdash; they offer exceptional value and make it economically feasible to protect every storage location in your home. One of the most common mistakes people make when dealing with a moth infestation is treating their wardrobe while ignoring the drawers, airing cupboard, and seasonal storage where moths may also be breeding. The Acana sachets eliminate this blind spot by making it quick, easy, and affordable to extend protection to every corner of your home where natural fibres are stored.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Twenty sachets per pack &mdash; outstanding coverage at approximately 40p each</li>
        <li>Compact size designed to fit inside drawers, boxes, bags, and suitcases</li>
        <li>Kills adults, larvae, and eggs within enclosed storage spaces</li>
        <li>Pleasant floral fragrance leaves clothing smelling fresh</li>
        <li>Ideal for protecting delicate items such as cashmere, silk, and fine wool</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Three-month lifespan means quarterly replacement is necessary</li>
        <li>Effectiveness is reduced in open or poorly sealed storage spaces</li>
        <li>Sachets are small and can be accidentally discarded when sorting through drawers</li>
        <li>Fragrance is noticeable and may not suit all personal preferences</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Acana Sachet Moth Killer 20 Pack is the ideal companion to wardrobe hanging killers, extending moth protection to every drawer, storage box, and garment bag in your home. At just 40 pence per sachet, there is no excuse for leaving any storage area unprotected. If you are dealing with an active infestation, combine these sachets with pheromone traps and carpet spray for a comprehensive whole-home treatment strategy.
      </p>

      {/* Best Budget Option */}
      <h2 id="best-budget">Best Budget Option &mdash; Rentokil Moth Killer Hanging Unit Twin Pack</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil Moth Killer Hanging Unit Twin Pack"
          rating={4.2}
          features={[
            'Two hanging units from a trusted UK pest control brand',
            'Kills moths and larvae on contact within enclosed wardrobes',
            'Lasts up to six months per unit',
            'Lowest price point of any effective hanging moth killer',
          ]}
          price="~&pound;5"
          asin="B002DYARYK"
          bestFor="Best Budget Option"
          rank={5}
        />
      </div>
      <p>
        Rentokil is one of the most recognised names in pest control across the United Kingdom, and their Moth Killer Hanging Unit Twin Pack brings that professional reputation to a consumer product at an entry-level price. At approximately &pound;5 for two hanging units, this is the most affordable way to get active moth-killing protection inside your wardrobe &mdash; making it an excellent choice for budget-conscious households, students protecting vintage clothing, or anyone who wants to try a hanging moth killer without committing to a larger pack. Each unit hooks onto the wardrobe rail just like the Acana product and releases a moth-killing vapour that eliminates adult moths and larvae within the enclosed wardrobe space. Rentokil states that each unit lasts up to six months, which is consistent with the lifespan of competing hanging killer products, meaning your &pound;5 investment protects a wardrobe for half a year.
      </p>
      <p>
        The Rentokil brand name carries significant weight in the UK pest control market. As one of the largest professional pest control companies operating in Britain, Rentokil has decades of experience dealing with moth infestations in homes, commercial premises, museums, and historic properties. Their consumer products are formulated based on this professional expertise, and the hanging moth killer uses an active ingredient proven to be effective against the common clothes moth (<em>Tineola bisselliella</em>) and the case-bearing clothes moth (<em>Tinea pellionella</em>). The twin pack is ideal for a single wardrobe or for splitting between two smaller wardrobes or garment storage areas. If you have a larger home with multiple wardrobes, the Acana four-pack reviewed above offers better per-unit value, but for a single wardrobe or a trial purchase, the Rentokil twin pack is hard to beat on price. It is worth noting that while the product is effective at killing moths and larvae within the wardrobe, it does not provide the same level of egg-killing action as some premium alternatives, so pairing it with pheromone traps for monitoring is advisable.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Lowest price of any effective hanging moth killer at approximately &pound;5 for two</li>
        <li>Trusted Rentokil brand backed by decades of professional pest control expertise</li>
        <li>Six-month lifespan per unit offers extended protection</li>
        <li>Simple hook-and-hang installation requires no tools or preparation</li>
        <li>Compact packaging makes it easy to purchase as an add-on item</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Only two units per pack &mdash; not enough for homes with multiple wardrobes</li>
        <li>Less effective against moth eggs compared to the Acana hanging killer</li>
        <li>Fragrance is less refined than the Acana fresh linen scent</li>
        <li>Per-unit cost is higher than the Acana four-pack for larger households</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Rentokil Moth Killer Hanging Unit Twin Pack is the best budget entry point for wardrobe moth protection. It delivers genuine moth-killing action from a brand you can trust, at the lowest price of any product in this category. Ideal for single wardrobes, student accommodation, or as a first purchase when you suspect moth activity but want to test the water before investing in a comprehensive treatment programme.
      </p>

      {/* How to Choose the Right Moth Killer */}
      <h2 id="how-to-choose">How to Choose the Right Moth Killer</h2>
      <p>
        With five strong products to choose from, selecting the right moth killer &mdash; or more likely, the right combination of products &mdash; depends on where in your home the moths are active and what stage the infestation has reached. Here are the key factors to consider when building your moth control strategy.
      </p>

      <h3>Wardrobe Protection vs Carpet Treatment</h3>
      <p>
        The first and most important distinction is between <strong>wardrobe moths</strong> and <strong>carpet moths</strong>. If you are finding damage to hanging garments, folded knitwear, or stored textiles, you need hanging killers and sachets that work within enclosed spaces such as wardrobes, drawers, and storage boxes. The Acana Hanging Moth Killer and the Acana Sachet Moth Killer 20 Pack are the products to focus on. If you are finding bald patches on wool carpets, damage to rugs, or larvae in carpet edges and under furniture, you need a dedicated carpet spray such as the Acana Carpet and Fabric Moth Killer Spray. Many homes have both wardrobe and carpet moth problems simultaneously, in which case you need products from both categories working together.
      </p>

      <h3>Monitoring vs Killing</h3>
      <p>
        Pheromone traps do not kill enough moths to resolve an infestation on their own, but they are indispensable for <strong>detecting the problem early</strong> and <strong>identifying where moths are most active</strong>. If you have never had moths before and want a precautionary early warning system, pheromone traps alone may be sufficient as a monitoring tool. However, if you already know you have moths, use pheromone traps alongside active killing products. Place traps in every room and storage area, wait a week, then concentrate your sprays and hanging killers in the areas where the traps catch the most moths. This targeted approach is far more effective than spraying everything blindly.
      </p>

      <h3>Natural Fibres vs Synthetic Fabrics</h3>
      <p>
        Clothes moth larvae feed exclusively on natural animal fibres &mdash; wool, silk, cashmere, angora, mohair, and fur. They cannot digest synthetic materials such as polyester, nylon, or acrylic. However, blended fabrics that contain even a small percentage of wool or silk are vulnerable, and larvae will sometimes damage synthetic items if they are soiled with food, sweat, or body oils, which provide the protein the larvae need. When prioritising which items to protect, focus your moth killers on areas where natural-fibre garments are stored. A wardrobe full of polyester work shirts does not need a hanging moth killer, but a drawer containing cashmere jumpers most certainly does.
      </p>

      <h3>Combination Approach for Established Infestations</h3>
      <p>
        If you are dealing with an active, established moth infestation &mdash; visible adult moths, larvae found in clothing or carpets, and damage already occurring &mdash; no single product will resolve the problem alone. The most effective consumer-level treatment combines all four product types reviewed on this page. Start with <strong>pheromone traps</strong> to identify the worst-affected areas, then <strong>vacuum thoroughly</strong> to remove loose larvae and eggs from carpets and upholstery. Apply <strong>carpet spray</strong> to all wool carpets, rugs, and fabric-covered furniture, paying particular attention to edges, corners, and under-furniture zones. Place <strong>hanging killers</strong> in every wardrobe and <strong>sachets</strong> in every drawer and storage container. Finally, launder or dry-clean all affected garments at temperatures above 60&deg;C to kill any larvae and eggs embedded in the fibres. This multi-pronged approach attacks the infestation at every stage of the moth lifecycle and in every location where moths may be breeding.
      </p>

      {/* Moth Killer Tips for Best Results */}
      <h2 id="tips">Moth Killer Tips for Best Results</h2>
      <p>
        Getting the most out of your moth killer products requires more than simply placing them and hoping for the best. Follow these practical tips to maximise effectiveness and prevent reinfestation.
      </p>

      <h3>Vacuum Before You Spray</h3>
      <p>
        Always vacuum carpets, rugs, and upholstered furniture thoroughly before applying any moth killer spray. Vacuuming physically removes a significant number of larvae, eggs, and pupae from carpet fibres, reducing the population that the spray needs to deal with. Pay particular attention to edges where carpet meets skirting boards, the areas beneath and behind heavy furniture, and any spots where you have noticed damage or found larvae. Empty the vacuum cleaner bag or canister into an outdoor bin immediately after vacuuming to prevent any surviving larvae from crawling back into the house.
      </p>

      <h3>Keep Wardrobes and Drawers Clean</h3>
      <p>
        Moth larvae are attracted to soiled clothing because the food stains, sweat, and body oils on unwashed garments provide additional protein that accelerates larval growth. Never store dirty or worn clothing in wardrobes or drawers alongside clean items. Launder or dry-clean all garments before storing them for the season, and wipe down the inside of wardrobes and drawers with a damp cloth to remove dust, hair, and lint that can harbour moth eggs. A clean storage environment significantly reduces the attractiveness of your wardrobe to egg-laying female moths.
      </p>

      <h3>Replace Products on Schedule</h3>
      <p>
        Hanging moth killers, sachets, and pheromone traps all have a finite active lifespan. Once the active ingredient or pheromone lure is exhausted, the product offers no protection whatsoever &mdash; yet it still looks identical to a fresh one. Set a reminder on your phone or calendar to replace hanging killers every six months, sachets every three months, and pheromone traps every eight weeks. Skipping a replacement cycle creates a window of vulnerability during which moths can re-establish themselves in an area you thought was protected.
      </p>

      <h3>Seal Seasonal Storage Properly</h3>
      <p>
        When packing away winter woolens, cashmere scarves, or other natural-fibre items for the warmer months, ensure they are stored in airtight containers or vacuum-sealed bags with an Acana sachet inside. Cardboard boxes are not moth-proof &mdash; female moths can lay eggs through tiny gaps in the seams. Plastic storage boxes with clip-down lids, vacuum bags, and sealed garment bags are far more effective barriers. Adding a sachet inside the sealed container provides a secondary layer of protection in case any eggs were already present on the garments when they were packed away.
      </p>

      <h3>Consider Temperature Treatments</h3>
      <p>
        Moth larvae and eggs are killed by extremes of temperature. Washing garments at 60&deg;C or above will kill all life stages, but many delicate wool and silk items cannot withstand high wash temperatures. An alternative is freezing: place affected items in a sealed plastic bag and put them in the freezer at minus 18&deg;C for a minimum of 72 hours. This kills larvae and eggs without damaging delicate fibres. For items that are too large to freeze or wash, such as carpets and heavy curtains, professional heat treatment is available from specialist pest control companies and is worth considering for severe infestations that have not responded to consumer products.
      </p>

      <h3>When to Call a Professional</h3>
      <p>
        Most domestic moth infestations can be managed effectively with the consumer products reviewed on this page, provided you follow a thorough, multi-product approach and maintain your treatment programme consistently. However, there are situations where professional intervention is the wisest course of action. If you have been using moth killers for six weeks or more without a significant reduction in moth activity, if the infestation has spread to fitted carpets throughout the property, or if valuable items such as antique rugs, museum-quality textiles, or extensive designer wardrobes are at risk, a professional pest control company can deploy commercial-grade treatments including residual insecticide sprays, ultra-low-volume fogging, and heat treatments that are not available to consumers. The cost of professional moth treatment in the UK typically ranges from &pound;150 to &pound;350 depending on the size of the property and the severity of the infestation &mdash; a worthwhile investment when the alternative is losing hundreds or thousands of pounds worth of clothing and carpets.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Moth Problem Too Big for DIY?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the complete moth removal strategy?</p>
        <a
          href="/guides/how-to-get-rid-of-moths"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Read our full guide: How to Get Rid of Moths &rarr;
        </a>
      </div>
    </GuideLayout>
  );
}
