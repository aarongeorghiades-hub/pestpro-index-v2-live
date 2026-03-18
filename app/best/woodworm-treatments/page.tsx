import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Woodworm Treatments UK 2026 — Sprays, Gels & Professional Products | PestPro Index',
    description:
      'Expert reviews of the best woodworm treatment products available in the UK. Compare permethrin sprays, boron gels, injection kits, and timber preservers for DIY woodworm treatment.',
    alternates: {
      canonical: 'https://pestproindex.com/best/woodworm-treatments',
    },
    openGraph: {
      title: 'Best Woodworm Treatments UK 2026 — Sprays, Gels & Professional Products | PestPro Index',
      description:
        'Expert reviews of the best woodworm treatment products available in the UK. Compare permethrin sprays, boron gels, injection kits, and timber preservers for DIY woodworm treatment.',
      url: 'https://pestproindex.com/best/woodworm-treatments',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Woodworm Treatments UK 2026 — Sprays, Gels & Professional Products',
  description:
    'Expert reviews of the best woodworm treatment products available in the UK. Compare permethrin sprays, boron gels, injection kits, and timber preservers for DIY woodworm treatment.',
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
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
    '@id': 'https://pestproindex.com/best/woodworm-treatments',
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
      name: 'Best Woodworm Treatments UK 2026',
      item: 'https://pestproindex.com/best/woodworm-treatments',
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Woodworm Treatments at a Glance' },
  { id: 'best-fluid', title: 'Best Treatment Fluid — Barrettine Woodworm Killer' },
  { id: 'best-water-based', title: 'Best Water-Based Treatment — Rempro Woodwyse' },
  { id: 'best-spray', title: 'Best Spray Can — Rentokil Woodworm Spray' },
  { id: 'best-injector', title: 'Best Injection Applicator — Rentokil PSW92' },
  { id: 'best-meter', title: 'Best Moisture Meter — Stanley 0-77-030' },
  { id: 'buying-guide', title: 'Woodworm Treatment Buying Guide' },
  { id: 'when-to-call', title: 'When to Call a Professional' },
];

export default function BestWoodwormTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Woodworm Treatments UK 2026 &mdash; Sprays, Gels &amp; Professional Products"
      subtitle="Expert-reviewed woodworm treatment products for UK homes &mdash; from permethrin fluids and boron gels to spray cans, injection applicators, and diagnostic moisture meters."
      lastUpdated="March 2026"
      readingTime="14 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Woodworm Treatment: Complete UK Guide', href: '/guides/woodworm-treatment' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Silverfish: Complete UK Guide', href: '/guides/how-to-get-rid-of-silverfish' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'How to Get Rid of Foxes: Complete UK Guide', href: '/guides/how-to-get-rid-of-foxes' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Landlord Pest Control Responsibilities', href: '/guides/landlord-pest-control' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
      ]}
      relatedProducts={[
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Silverfish Treatments UK 2026', href: '/best/silverfish-treatments' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Moth Killers UK', href: '/best/moth-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Fox Deterrents UK 2026', href: '/best/fox-deterrents' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
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
        Woodworm &mdash; the larval stage of wood-boring beetles &mdash; has been damaging timber in British homes for centuries. The most common species is the Common Furniture Beetle (<em>Anobium punctatum</em>), responsible for approximately 75% of all woodworm cases in the UK. These small, cream-coloured larvae bore through softwood and hardwood alike, leaving behind the characteristic 1&ndash;2mm exit holes that most homeowners recognise as the telltale sign of infestation. The good news is that for most residential infestations, effective DIY treatment is straightforward if you choose the right products and apply them correctly. Active woodworm is identified by fresh exit holes with sharp edges and fine bore dust (frass) beneath them &mdash; if the holes are dark, rounded, and dust-free, the infestation may already be historic and no treatment is necessary.
      </p>
      <p>
        The products reviewed below range from industry-standard permethrin-based treatment fluids to water-based boron alternatives, convenient aerosol sprays, injection applicators for targeted treatment, and a diagnostic moisture meter that may save you the cost of unnecessary chemical treatment altogether. We have selected products that are genuinely available in the UK, with verified prices and real customer reviews. Each product was evaluated against four criteria: <strong>proven effectiveness</strong> against <em>Anobium punctatum</em> and related species, <strong>safety for UK households</strong> including appropriate PPE requirements, <strong>genuine verified customer reviews</strong> from Amazon UK (filtering out incentivised or inauthentic feedback), and <strong>value for money</strong> relative to the coverage and protection provided.
      </p>
      <p>
        The single most important thing to understand before buying any woodworm treatment product is this: <strong>moisture is the root cause of almost every active woodworm infestation</strong>. Wood-boring beetle larvae require timber moisture content above 18% to survive and complete their life cycle. If you can reduce timber moisture below 12% &mdash; by fixing leaks, improving ventilation, and clearing blocked airbricks &mdash; the larvae die without any chemical treatment at all. A moisture meter is therefore arguably the most valuable product on this entire page, because it tells you whether you actually need chemical treatment in the first place. For a complete step-by-step woodworm elimination strategy &mdash; including identification, prevention, and long-term environmental management &mdash; see our companion guide: <Link href="/guides/woodworm-treatment" className="text-blue-600 hover:text-blue-800 underline">Woodworm Treatment: Complete UK Guide</Link>.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Before spending money on chemical treatments, check your timber moisture content with a meter. If it&apos;s below 12%, any existing woodworm larvae will already be dying. Above 18% means the timber is vulnerable and you need to fix the damp problem first, then treat.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Woodworm Treatments at a Glance</h2>
      <p>
        Below is a quick comparison of our five top-rated woodworm treatment products. Each addresses the problem from a different angle &mdash; professional-grade treatment fluid, water-based low-toxicity alternative, convenient aerosol spray, precision injection applicator, and diagnostic moisture meter &mdash; and the most effective strategy often combines several of these approaches depending on the severity and location of the infestation. We go into full detail on every product further down the page.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Best For</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Barrettine Premier Woodworm Killer 1L</td>
            <td>Best Treatment Fluid</td>
            <td>~&pound;10&ndash;&pound;15</td>
            <td>4.5/5</td>
          </tr>
          <tr>
            <td>Rempro Woodwyse Internal Wood Treatment</td>
            <td>Best Water-Based Treatment</td>
            <td>~&pound;15&ndash;&pound;25</td>
            <td>4.0/5</td>
          </tr>
          <tr>
            <td>Rentokil PSW85 Woodworm Treatment Spray 300ml</td>
            <td>Best Spray Can</td>
            <td>~&pound;8&ndash;&pound;12</td>
            <td>4.0/5</td>
          </tr>
          <tr>
            <td>Rentokil PSW92 Woodworm Treatment 250ml</td>
            <td>Best Injection Applicator</td>
            <td>~&pound;8&ndash;&pound;12</td>
            <td>4.0/5</td>
          </tr>
          <tr>
            <td>Stanley 0-77-030 Moisture Meter</td>
            <td>Best Diagnostic Tool</td>
            <td>~&pound;22&ndash;&pound;25</td>
            <td>4.5/5</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="&pound;8 &ndash; &pound;25" label="Price range for DIY woodworm treatment products" />
      </div>

      {/* Best Treatment Fluid */}
      <h2 id="best-fluid">Best Treatment Fluid &mdash; Barrettine Premier Woodworm Killer 1L</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Barrettine Premier Woodworm Killer 1L"
          rating={4.5}
          features={[
            'Permethrin-based solvent formula',
            'Industry-standard professional treatment',
            'Creates 20+ year residual barrier',
            'Suitable for brush or spray application',
          ]}
          price="~&pound;10&ndash;&pound;15"
          asin="B0041WB2E6"
          bestFor="Best Treatment Fluid"
          rank={1}
        />
      </div>
      <p>
        Barrettine Premier Woodworm Killer is the industry-standard permethrin-based solvent treatment used by the majority of professional woodworm treatment companies in the UK, and it is the product that underpins most 20&ndash;30 year woodworm treatment guarantees issued by timber treatment specialists. The active ingredient is <strong>permethrin</strong>, a synthetic pyrethroid insecticide that kills woodworm larvae on contact and creates a long-lasting residual chemical barrier within the timber that remains toxic to wood-boring beetle larvae for <strong>over 20 years</strong> after application. When a female Common Furniture Beetle lays eggs on treated timber, the larvae that hatch bore into wood that is saturated with permethrin and die before they can cause significant structural damage. This residual protection is what makes solvent-based permethrin treatment the gold standard for woodworm control &mdash; it does not merely kill the current generation of larvae but prevents re-infestation for decades.
      </p>
      <p>
        Application is straightforward. For large areas such as loft rafters, floor joists, and subfloor timbers, apply the fluid using a low-pressure garden sprayer &mdash; the fine mist ensures even coverage across all timber surfaces including difficult-to-reach areas. For smaller, targeted areas such as individual pieces of furniture, skirting boards, or isolated sections of timber framing, brush application provides better control and less overspray. Apply two coats approximately 24 hours apart, allowing the first coat to soak in fully before applying the second. Coverage rates are approximately 3&ndash;4 square metres per litre by brush and 5&ndash;6 square metres per litre by sprayer. The product is also available in 5-litre containers, which is the most economical option for treating an entire loft space or subfloor area. Be aware that this is a solvent-based product with a strong petrochemical smell &mdash; you <strong>must</strong> wear a respirator with organic vapour cartridges (A1/A2 rated), safety goggles, and chemical-resistant gloves during application. Ensure maximum ventilation by opening all windows and loft hatches, and allow a minimum of 48 hours drying time before re-entering the treated space without respiratory protection.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Industry-standard treatment used by professional woodworm companies &mdash; proven track record over decades</li>
        <li>Creates a residual chemical barrier lasting 20+ years, preventing re-infestation</li>
        <li>Deep penetration into timber &mdash; kills larvae inside the wood, not just on the surface</li>
        <li>Affordable at &pound;10&ndash;&pound;15 per litre, with 5L options for larger projects</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Strong solvent smell &mdash; requires a proper respirator with organic vapour cartridges</li>
        <li>48-hour drying time before the treated area can be safely re-entered</li>
        <li>Not suitable for occupied rooms during application &mdash; clear the area completely</li>
        <li>Solvent-based formula not suitable for use near naked flames or ignition sources</li>
      </ul>
      <p>
        <strong>Verdict:</strong> Barrettine Premier Woodworm Killer is the product that backs the vast majority of professional woodworm treatment guarantees in the UK, and for good reason. Its combination of deep timber penetration, immediate larval kill, and 20+ year residual protection makes it the most effective single product for treating active woodworm infestations in loft spaces, subfloors, and other unoccupied areas. If you are treating a loft or crawl space, this is the product to buy.
      </p>

      {/* Best Water-Based Treatment */}
      <h2 id="best-water-based">Best Water-Based Treatment &mdash; Rempro Woodwyse Internal Wood Treatment</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rempro Woodwyse Internal Wood Treatment"
          rating={4.0}
          features={[
            'Water-based low-toxicity formula',
            'Dual action: woodworm + dry rot',
            'Suitable for occupied spaces',
            'Low odour — no solvent fumes',
          ]}
          price="~&pound;15&ndash;&pound;25"
          asin="B01MZ7ZB2V"
          bestFor="Best Water-Based Treatment"
          rank={2}
        />
      </div>
      <p>
        Rempro Woodwyse is a water-based concentrate that treats both woodworm and dry rot/wet rot fungi in a single application, making it a versatile choice for properties where both problems coexist &mdash; which is common, since the high moisture conditions that attract woodworm also encourage fungal decay. The formula has <strong>much lower toxicity</strong> than solvent-based permethrin treatments, producing no strong petrochemical fumes and requiring no respirator for application (though protective gloves are still recommended). This makes Woodwyse the go-to product for treating woodworm in <strong>occupied living spaces</strong> &mdash; bedrooms, living rooms, studies, and other rooms where you cannot evacuate the area for 48 hours while solvent fumes dissipate. The low-odour formula means you can treat exposed beams in a living room or bedroom floorboards without making the room uninhabitable during the drying period.
      </p>
      <p>
        Apply Rempro Woodwyse by brush or low-pressure sprayer, diluting the concentrate according to the manufacturer&apos;s instructions. The concentrate makes approximately 25 litres of ready-to-use solution, providing excellent coverage and making it highly economical for large treatment areas. Two coats are recommended, with the first allowed to soak in fully before the second is applied. While water-based treatments do not penetrate as deeply into timber as solvent-based products, the penetration depth is sufficient for treating <strong>surface sapwood infestations</strong> &mdash; which is where the vast majority of Common Furniture Beetle larvae reside, as they prefer the nutrient-rich sapwood over the denser heartwood. Woodwyse is increasingly recommended by <strong>conservation specialists</strong> for treating timber in listed buildings and heritage properties, where the solvent residues left by permethrin-based treatments are considered undesirable and potentially damaging to historic fabric. The dual action against rot fungi makes it particularly valuable in damp properties where woodworm and timber decay coexist.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Low toxicity and low odour &mdash; no strong solvent fumes, no respirator required</li>
        <li>Safe for use in occupied living spaces including bedrooms and living rooms</li>
        <li>Dual woodworm + rot fungi action treats both problems simultaneously</li>
        <li>Excellent coverage from concentrate &mdash; makes 25 litres of ready-to-use solution</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Less deep penetration into timber than solvent-based permethrin treatments</li>
        <li>May require additional coats for effective treatment of heavily infested timber</li>
        <li>Not recommended for severe or structurally significant deep infestations</li>
        <li>Shorter residual protection period compared to solvent-based alternatives</li>
      </ul>
      <p>
        <strong>Verdict:</strong> Rempro Woodwyse is the best choice for treating woodworm in occupied living spaces where solvent fumes are unacceptable. Its dual action against both woodworm and rot fungi provides genuine added value, and the concentrate format makes it highly economical. For loft spaces and subfloors, the Barrettine permethrin fluid is the better option &mdash; but for exposed beams in living rooms, bedroom floorboards, and heritage properties, Woodwyse is the product to use.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>For most loft spaces with accessible rafters, the permethrin-based Barrettine fluid is the best choice &mdash; it provides the deepest penetration and longest-lasting protection. For bedrooms, living rooms, or other occupied spaces where you cannot tolerate solvent fumes, the water-based Rempro Woodwyse is the safer alternative.</p>
        </Callout>
      </div>

      {/* Best Spray Can */}
      <h2 id="best-spray">Best Spray Can &mdash; Rentokil PSW85 Woodworm Treatment Spray 300ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil PSW85 Woodworm Treatment Spray 300ml"
          rating={4.0}
          features={[
            'Aerosol format — ready to use',
            'Kills eggs, larvae and adult beetles',
            'Straw nozzle for hole injection',
            'Ideal for small areas and furniture',
          ]}
          price="~&pound;8&ndash;&pound;12"
          asin="B000TVLY1O"
          bestFor="Best Spray Can"
          rank={3}
        />
      </div>
      <p>
        The Rentokil PSW85 is a convenient aerosol spray designed for small-scale woodworm treatment where the bulk application of treatment fluid is neither necessary nor practical. The permethrin-based formula kills eggs, larvae, and adult beetles on contact, and the included straw nozzle allows you to inject treatment directly into individual exit holes for targeted delivery deep into the timber. This makes it an excellent choice for treating individual furniture pieces &mdash; an antique chair, a wooden chest, a picture frame &mdash; where you need precise application without the mess and setup of a brush-on fluid or garden sprayer. It is also ideal for spot-treating small sections of skirting board, door frames, or window sills where you have noticed fresh exit holes, providing a quick first response while you assess whether a more comprehensive treatment is needed.
      </p>
      <p>
        The key limitation of the PSW85 is its <strong>300ml volume</strong>, which makes it wholly impractical for treating larger areas such as loft rafters, floor joists, or subfloor timbers. For those applications, the 1L or 5L Barrettine fluid applied by garden sprayer is far more economical and provides better, more even coverage. Think of the PSW85 as a precision tool rather than a broad-spectrum treatment &mdash; it excels at treating individual pieces of furniture, filling specific exit holes with treatment fluid, and providing targeted protection to small timber sections. It also works well as a first-response product: if you discover fresh woodworm holes on a Saturday afternoon, you can treat the affected area immediately with the PSW85 while researching and ordering a comprehensive treatment solution for delivery during the week. The Rentokil brand provides reassurance &mdash; they are the UK&apos;s largest pest control company and their products are formulated to the same standards as their professional treatment range.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Convenient ready-to-use aerosol format &mdash; no mixing, no sprayer, no brushes</li>
        <li>Straw nozzle for injecting treatment directly into exit holes and tunnels</li>
        <li>Trusted Rentokil brand with professional-grade formulation</li>
        <li>Affordable at &pound;8&ndash;&pound;12 &mdash; ideal as a first-response purchase</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Not economical for treating large areas &mdash; use Barrettine fluid for lofts and subfloors</li>
        <li>Small 300ml volume limits coverage to individual furniture pieces and spot treatments</li>
        <li>Aerosol propellant adds to fume concerns &mdash; use in well-ventilated areas</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Rentokil PSW85 is the best woodworm spray can for small-scale, targeted treatment. Keep one in the cupboard as a first-response product for when you discover fresh woodworm holes, and use it for treating individual furniture pieces and small timber sections. For whole-room or whole-loft treatment, switch to the Barrettine fluid in bulk format.
      </p>

      {/* Best Injection Applicator */}
      <h2 id="best-injector">Best Injection Applicator &mdash; Rentokil PSW92 Woodworm Treatment 250ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil PSW92 Woodworm Treatment 250ml"
          rating={4.0}
          features={[
            'Built-in injection nozzle',
            'Targets treatment deep into tunnels',
            'Permethrin-based formula',
            'Most thorough DIY approach',
          ]}
          price="~&pound;8&ndash;&pound;12"
          asin="B000TVIXZY"
          bestFor="Best Injection Applicator"
          rank={4}
        />
      </div>
      <p>
        The Rentokil PSW92 is a purpose-designed injector bottle with a fine nozzle built specifically for pushing treatment fluid directly into woodworm exit holes and larval tunnels. This is the most <strong>thorough DIY approach</strong> to woodworm treatment because it delivers the active ingredient exactly where it needs to be &mdash; inside the timber, in direct contact with the tunnels where larvae are actively feeding. Surface spraying and brushing apply treatment to the outside of the timber and rely on the fluid soaking in, but injection gets the permethrin-based formula deep into the existing tunnel network. Insert the nozzle into each exit hole and inject steadily until treatment fluid seeps from adjacent holes, indicating that the interconnected tunnel network is filled with insecticide. This method ensures that larvae deep inside the wood are exposed to a lethal dose of permethrin, even those that are several centimetres below the timber surface.
      </p>
      <p>
        The injection approach is particularly valuable for <strong>valuable furniture</strong>, <strong>structural timbers</strong> where you need certainty that every larva has been reached, and <strong>pieces where surface treatment alone is insufficient</strong> due to heavy infestation with numerous exit holes suggesting an extensive internal tunnel network. The main drawback is that injection is <strong>time-consuming</strong> &mdash; each hole must be treated individually, and a heavily infested rafter with dozens of exit holes can take considerable time to inject thoroughly. For this reason, injection treatment works best as a <strong>complement to surface treatment</strong> rather than a replacement for it. The most effective approach is to inject the PSW92 into all visible exit holes and then follow up with a thorough surface application of Barrettine fluid by brush or sprayer to create the residual chemical barrier that prevents re-infestation. At &pound;8&ndash;&pound;12 for 250ml, the volume is limited, so for timbers with extensive exit holes you may need multiple bottles.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>Delivers treatment deep into larval tunnels &mdash; the most thorough DIY method</li>
        <li>Purpose-built injection nozzle designed specifically for woodworm exit holes</li>
        <li>Ideal for valuable furniture and structural timbers requiring thorough treatment</li>
        <li>Affordable at &pound;8&ndash;&pound;12 &mdash; a worthwhile addition to any treatment plan</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Time-consuming for large areas with many exit holes &mdash; each hole treated individually</li>
        <li>Small 250ml volume &mdash; may need multiple bottles for heavily infested timbers</li>
        <li>Nozzle is slightly oversized for the smallest exit holes (under 1mm diameter)</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Rentokil PSW92 is the best injection applicator for thorough, targeted woodworm treatment. Use it to inject every visible exit hole before applying surface treatment with Barrettine fluid. This two-step approach &mdash; injection into tunnels followed by surface barrier &mdash; is the most comprehensive DIY woodworm treatment method available and mirrors the approach used by professional timber treatment companies.
      </p>

      {/* Best Moisture Meter */}
      <h2 id="best-meter">Best Moisture Meter &mdash; Stanley 0-77-030</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Stanley 0-77-030 Moisture Meter"
          rating={4.5}
          features={[
            'Pin-type timber moisture measurement',
            'LCD screen with clear readout',
            'Measures 6-44% moisture range',
            'Trusted Stanley brand',
          ]}
          price="~&pound;22&ndash;&pound;25"
          asin="B003ASOBG8"
          bestFor="Best Diagnostic Tool"
          rank={5}
        />
      </div>
      <p>
        The Stanley 0-77-030 is a pin-type moisture meter that may be the single most valuable product on this entire page &mdash; not because it treats woodworm, but because it tells you <strong>whether you actually need to treat woodworm at all</strong>. The meter works by pushing two sharp metal pins into the timber surface and measuring the electrical resistance between them, which varies directly with the timber&apos;s moisture content. The LCD screen displays a clear percentage reading: <strong>below 12%</strong> means the timber is safe and any existing woodworm larvae will already be dying or dead (larvae cannot survive in timber this dry); <strong>12&ndash;18%</strong> is a borderline zone where larvae may survive but cannot thrive; and <strong>above 18%</strong> means the timber is at risk of active infestation because conditions are ideal for larval survival and beetle breeding. This single reading can save you hundreds of pounds in unnecessary chemical treatment &mdash; if your timber is consistently below 12% moisture, you do not need to buy or apply any of the chemical products on this page.
      </p>
      <p>
        Professional timber surveyors use pin-type moisture meters as their standard diagnostic tool when assessing woodworm infestations, and the Stanley 0-77-030 provides the same core functionality at a fraction of the cost of professional survey-grade instruments. Take readings at multiple points on each timber &mdash; at least three readings per rafter or joist, including near the wall plate (where moisture is often highest due to proximity to the external wall) and in the middle of the span. Record the readings so you can track changes over time. After fixing ventilation issues, unblocking airbricks, or repairing leaks, use the meter monthly to monitor timber drying progress. The drying process can take several months for thick structural timbers, so patience is essential. Beyond woodworm diagnostics, the meter is invaluable for detecting hidden damp problems, checking firewood dryness before burning, monitoring timber conditions in any part of your home, and assessing whether damp-proofing work has been effective. At &pound;22&ndash;&pound;25, it is an investment that pays for itself the first time it saves you from buying chemical treatment you do not need.
      </p>
      <p>
        <strong>Pros:</strong>
      </p>
      <ul>
        <li>May save you hundreds in unnecessary chemical treatment &mdash; diagnose before you treat</li>
        <li>Professional-grade diagnostic capability at an affordable price</li>
        <li>Trusted Stanley brand with reliable, consistent readings</li>
        <li>Wide 6&ndash;44% measurement range covers all timber conditions</li>
        <li>Invaluable beyond woodworm &mdash; detects damp, checks firewood, monitors timber health</li>
      </ul>
      <p>
        <strong>Cons:</strong>
      </p>
      <ul>
        <li>Only measures moisture at the exact point of pin insertion &mdash; take multiple readings</li>
        <li>Requires good pin contact with clean timber surface for accurate readings</li>
        <li>Batteries required (included) &mdash; keep spares available for extended surveys</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The Stanley 0-77-030 Moisture Meter is the most important diagnostic tool you can own when dealing with a suspected woodworm problem. Check moisture before spending money on chemical treatments &mdash; you may discover that fixing a ventilation issue or repairing a leak is all that is needed to eliminate the infestation naturally. Every professional surveyor uses a pin-type moisture meter, and at &pound;22&ndash;&pound;25 this Stanley model provides genuine professional-grade diagnosis at a DIY-friendly price.
      </p>

      {/* Buying Guide */}
      <h2 id="buying-guide">Woodworm Treatment Buying Guide</h2>
      <p>
        With five effective products to choose from, selecting the right combination depends on where the infestation is located, how severe it is, and whether the affected timbers are in occupied or unoccupied areas. Here are the key principles to guide your decisions.
      </p>

      <h3>Check Moisture Content First</h3>
      <p>
        Before buying any chemical treatment, invest &pound;22&ndash;&pound;25 in a moisture meter and take readings on the affected timbers. If the moisture content is <strong>consistently below 12%</strong>, the timber is too dry for woodworm larvae to survive. The exit holes you are seeing may be historic &mdash; evidence of a past infestation that is already over. In this scenario, no chemical treatment is necessary. Simply monitor the timber periodically with the moisture meter to ensure conditions remain dry. If readings are in the <strong>12&ndash;18% borderline zone</strong>, focus on improving ventilation and fixing any moisture sources before deciding whether chemical treatment is needed. Only when timber moisture is <strong>above 18%</strong> is chemical treatment definitively required &mdash; and even then, fixing the moisture problem is essential, because chemical treatment alone will not prevent re-infestation if the timber remains damp.
      </p>

      <h3>Choose the Right Product for the Job</h3>
      <p>
        For <strong>loft spaces, subfloors, and other unoccupied areas</strong>, the Barrettine permethrin fluid applied by garden sprayer is the gold standard &mdash; it provides the deepest penetration and longest-lasting residual protection. For <strong>occupied rooms</strong> with exposed beams or accessible timber, the water-based Rempro Woodwyse is the safer alternative because it produces no solvent fumes. For <strong>individual furniture pieces</strong> and small-scale spot treatment, the Rentokil aerosol spray and injection applicator provide convenient, targeted treatment without the setup required for bulk fluid application. The most thorough approach for heavily infested structural timbers combines <strong>injection into exit holes</strong> (PSW92) followed by <strong>surface application</strong> (Barrettine fluid) to create both internal tunnel treatment and an external residual barrier.
      </p>

      <h3>Treat in Spring</h3>
      <p>
        The ideal window for woodworm treatment is <strong>March to May</strong>, before the adult beetle emergence period that typically runs from June to August. Treating in spring means the chemical barrier is fresh and at maximum potency when adult beetles emerge, mate, and attempt to lay eggs on the treated timber. However, treatment can be applied at any time of year &mdash; the residual protection lasts for years, so even autumn or winter treatment will be fully effective by the following spring. If you discover fresh exit holes and frass in summer, do not wait until the following spring &mdash; treat immediately to minimise further damage.
      </p>

      <h3>PPE is Non-Negotiable</h3>
      <p>
        When applying solvent-based woodworm treatment fluids (Barrettine), you <strong>must</strong> wear a proper respirator with organic vapour cartridges (A1 or A2 rated), safety goggles, and chemical-resistant gloves. A regular dust mask is <strong>not</strong> sufficient &mdash; it does not filter organic solvent vapours. Solvent fumes in an enclosed loft space accumulate rapidly and can cause dizziness, nausea, headaches, and respiratory damage. Budget &pound;15&ndash;&pound;25 for a half-face respirator with replaceable cartridges &mdash; models from 3M and Moldex are widely available on Amazon UK. Wear old clothing that covers all skin, and shower immediately after treatment. For water-based treatments (Rempro Woodwyse), a respirator is not required, but protective gloves should still be worn.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Do NOT use a regular dust mask when applying solvent-based woodworm treatment. You need a proper respirator with organic vapour cartridges (A1 or A2 rated). Solvent fumes in an enclosed loft space can cause dizziness, nausea, and respiratory damage. Budget &pound;15&ndash;&pound;25 for a respirator &mdash; it&apos;s the most important purchase you&apos;ll make.</p>
        </Callout>
      </div>

      {/* When to Call a Professional */}
      <h2 id="when-to-call">When to Call a Professional</h2>
      <p>
        The DIY products reviewed on this page will resolve the majority of Common Furniture Beetle infestations in UK homes, particularly when combined with moisture management. However, there are several situations where professional intervention is strongly recommended &mdash; and in some cases, absolutely essential. If you have identified <strong>Deathwatch Beetle</strong> (<em>Xestobium rufovillosum</em>) &mdash; recognised by its larger 3mm exit holes and its association with hardwood timbers, particularly oak &mdash; you need a specialist timber treatment company. Deathwatch Beetle infestations are more complex to treat than Common Furniture Beetle, often affecting structural heartwood rather than surface sapwood, and require professional assessment of the timber&apos;s structural integrity before treatment can begin.
      </p>
      <p>
        Similarly, if you suspect <strong>House Longhorn Beetle</strong> (<em>Hylotrupes bajulus</em>) &mdash; identified by oval exit holes up to 10mm across and found primarily in roof timbers in southern England &mdash; professional treatment is mandatory. House Longhorn Beetle is a <strong>notifiable pest</strong> in certain UK local authority areas, and the damage it causes to structural timbers can be severe and rapid. Professional treatment is also essential when woodworm has caused <strong>visible structural damage</strong> &mdash; timbers that are visibly weakened, sagging, crumbling when probed with a screwdriver, or showing extensive surface damage with hundreds of exit holes may require structural reinforcement or replacement in addition to chemical treatment. A structural engineer or specialist timber surveyor should assess any timber that you suspect has lost structural integrity.
      </p>
      <p>
        Other situations that warrant professional involvement include: <strong>failed DIY treatment</strong> where fresh exit holes and frass continue to appear despite thorough chemical application (this may indicate a moisture problem you have not identified, or a species requiring different treatment); <strong>listed buildings</strong> where chemical treatments must be compatible with conservation requirements and approved by the local conservation officer; and <strong>property sale situations</strong> where a buyer&apos;s mortgage lender requires a formal woodworm treatment guarantee from a Property Care Association (PCA) member company &mdash; DIY treatment, no matter how thorough, will not satisfy this requirement. Professional woodworm treatment typically costs <strong>&pound;500&ndash;&pound;1,500</strong> for a standard spray treatment of a typical loft space, including a 20&ndash;30 year guarantee. For listed buildings and complex infestations, costs can reach <strong>&pound;5,000 or more</strong> depending on the extent of work and any structural repairs required.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Woodworm Problem Too Big for DIY?"
          subtext="Compare verified pest control providers near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the complete woodworm elimination strategy?</p>
        <a
          href="/guides/woodworm-treatment"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Read our full guide: Woodworm Treatment &rarr;
        </a>
      </div>
    </GuideLayout>
  );
}
