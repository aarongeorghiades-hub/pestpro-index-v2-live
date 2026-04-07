import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Damp-Proof Paint & Mould Treatment for Landlords — Awaab's Law 2026 | PestPro Index",
    description:
      'The best anti-mould paint, damp sealers and mould killers for landlords remediating condensation damp and mould in rental properties. Awaab\'s Law compliant solutions.',
    alternates: {
      canonical: 'https://pestproindex.com/best/damp-proof-paint-mould-treatment',
    },
    openGraph: {
      title: "Best Damp-Proof Paint & Mould Treatment for Landlords — Awaab's Law 2026 | PestPro Index",
      description:
        'The best anti-mould paint, damp sealers and mould killers for landlords remediating condensation damp and mould in rental properties. Awaab\'s Law compliant solutions.',
      url: 'https://pestproindex.com/best/damp-proof-paint-mould-treatment',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Damp-Proof Paint & Mould Treatment Products for Landlords (2026)',
  description:
    'The best anti-mould paint, damp sealers and mould killers for landlords remediating condensation damp and mould in rental properties.',
  datePublished: '2026-04-07',
  dateModified: '2026-04-07',
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
    '@id': 'https://pestproindex.com/best/damp-proof-paint-mould-treatment',
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
      name: 'Best Damp-Proof Paint & Mould Treatment for Landlords (2026)',
      item: 'https://pestproindex.com/best/damp-proof-paint-mould-treatment',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I paint over mould without treating it first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Painting over live mould is the single most common mistake landlords make during remediation. The mould will continue to grow beneath the paint film, eventually pushing through and staining the new surface within weeks or months. You must kill the mould first with a biocidal spray, allow the surface to dry completely, then seal any staining with a stain-blocking primer before applying anti-mould paint.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does anti-mould paint last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality anti-mould paints such as Ronseal and Johnstone\'s provide 3-5 years of active mould resistance when applied correctly over a properly treated and primed surface. However, if the underlying cause of damp (poor ventilation, condensation, structural moisture) is not addressed, even the best anti-mould paint will eventually be overwhelmed. Anti-mould paint is a surface treatment, not a substitute for fixing ventilation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Zinsser BIN necessary or can I use a standard primer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard water-based primers will not block mould staining. The dark stains left by mould growth bleed through standard primers and emulsion paints, reappearing within days or weeks. Zinsser BIN is a shellac-based primer that permanently seals staining — nothing bleeds through it. If there is any visible staining after killing the mould, Zinsser BIN or an equivalent solvent-based stain blocker is essential for a lasting finish.',
      },
    },
    {
      '@type': 'Question',
      name: "Does Awaab's Law require landlords to use specific products?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Awaab's Law (Section 42, Social Housing Regulation Act 2023) does not mandate specific products or brands. It requires landlords to investigate damp and mould hazards within 14 days and remediate within prescribed timeframes. The choice of products is left to the landlord, but using professional-grade treatments and documenting the remediation process (products used, dates, before/after photos) demonstrates due diligence and compliance with the spirit of the legislation.",
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'At a Glance' },
  { id: 'mould-killers', title: 'Mould Killer Sprays' },
  { id: 'hg-mould-spray', title: 'Best Mould Killer — HG Mould Spray' },
  { id: 'dryzone-remover', title: 'Best for Porous Surfaces — Dryzone' },
  { id: 'zinsser-killer', title: 'Best Pre-Paint — Zinsser Mould Killer' },
  { id: 'primers', title: 'Damp-Seal Primers & Stain Blockers' },
  { id: 'zinsser-bin', title: 'Best Primer — Zinsser BIN Shellac' },
  { id: 'zinsser-damp-seal', title: 'Best Damp Sealer — Zinsser Damp Seal' },
  { id: 'anti-mould-paints', title: 'Anti-Mould Paints' },
  { id: 'ronseal', title: 'Best All-Rounder — Ronseal Mould Killer Paint' },
  { id: 'polycell', title: 'Best for Small Areas — Polycell Damp Seal' },
  { id: 'johnstones', title: 'Best for Full Rooms — Johnstone\'s Anti Mould' },
  { id: 'three-step', title: 'The Three-Step Remediation System' },
  { id: 'ventilation', title: 'Will Anti-Mould Paint Work Without Ventilation?' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function DampProofPaintMouldTreatmentPage() {
  return (
    <GuideLayout
      title="Best Damp-Proof Paint &amp; Mould Treatment Products for Landlords (2026)"
      subtitle="Mould killer sprays, stain-blocking primers and anti-mould paints for landlords remediating condensation damp and mould in rental properties."
      lastUpdated="April 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Landlord Pest Control Responsibilities', href: '/guides/landlord-pest-control' },
        { title: "Awaab's Law & Pest Control: What Landlords Need to Know", href: '/blog/awaabs-law-pest-control-landlords' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Silverfish: Complete UK Guide', href: '/guides/how-to-get-rid-of-silverfish' },
      ]}
      relatedProducts={[
        { title: 'Best Damp & Mould Equipment for Landlords (Awaab\'s Law)', href: '/best/awaabs-law-damp-mould-equipment' },
        { title: 'Best Commercial Dehumidifiers UK 2026', href: '/best/commercial-dehumidifiers' },
        { title: 'Best Silverfish Treatments UK 2026', href: '/best/silverfish-treatments' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small commission at no extra cost to you. This helps us keep the site running and free for everyone. As an Amazon Associate, PestPro Index earns from qualifying purchases.
        </p>
      </div>

      {/* Intro */}
      <p>
        <Link href="/best/awaabs-law-damp-mould-equipment" className="text-green-600 hover:underline">PIV units and dehumidifiers</Link> address the root cause of condensation damp. But when mould is already established on walls, ceilings and skirting boards, landlords also need to treat the surface &mdash; both to kill the existing spores and to prevent regrowth.
      </p>
      <p>
        Three product categories are needed for a full mould remediation:
      </p>
      <ol>
        <li><strong>Mould killer spray</strong> &mdash; kills existing mould spores on contact</li>
        <li><strong>Mould-resistant primer/sealer</strong> &mdash; seals stained surfaces before repainting</li>
        <li><strong>Anti-mould paint</strong> &mdash; long-lasting mould inhibitor for walls and ceilings</li>
      </ol>
      <p>
        Used together as a system, these products deliver a finish that actively resists mould regrowth for years rather than months &mdash; and provide landlords with a documented remediation record if a complaint is raised under Awaab&apos;s Law or HHSRS.
      </p>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Damp-Proof Paint &amp; Mould Treatment at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HG Mould Spray Extra Strong</td>
            <td>Mould killer spray</td>
            <td>Best overall mould killer</td>
          </tr>
          <tr>
            <td>Dryzone Mould Remover Spray</td>
            <td>Mould killer spray</td>
            <td>Best for porous surfaces</td>
          </tr>
          <tr>
            <td>Zinsser Mould Killer &amp; Remover</td>
            <td>Mould killer spray</td>
            <td>Best pre-paint preparation</td>
          </tr>
          <tr>
            <td>Zinsser BIN Shellac Primer</td>
            <td>Stain-blocking primer</td>
            <td>Best stain blocker</td>
          </tr>
          <tr>
            <td>Zinsser Damp Seal</td>
            <td>Damp sealer</td>
            <td>Best for residual moisture</td>
          </tr>
          <tr>
            <td>Ronseal Mould Killer Paint</td>
            <td>Anti-mould paint</td>
            <td>Best all-rounder</td>
          </tr>
          <tr>
            <td>Polycell Damp Seal Paint</td>
            <td>Anti-mould paint</td>
            <td>Best for small areas</td>
          </tr>
          <tr>
            <td>Johnstone&apos;s Anti Mould Paint</td>
            <td>Anti-mould paint</td>
            <td>Best for full rooms</td>
          </tr>
        </tbody>
      </table>

      {/* Section 1: Mould Killer Sprays */}
      <h2 id="mould-killers">Mould Killer Sprays &mdash; The Essential First Step</h2>
      <p>
        Mould killer sprays contain biocides &mdash; typically bleach-based (sodium hypochlorite) or benzalkonium chloride &mdash; that kill mould and mildew spores on contact. This is the essential first step in any mould remediation: <strong>never paint over live mould</strong>. The spores will continue to grow beneath the paint film, eventually pushing through and staining the new surface within weeks.
      </p>
      <p>
        The correct process is straightforward: spray the affected area generously, leave the product to work for the time specified on the label (typically 15&ndash;30 minutes), then wipe the dead mould away with a damp cloth. Allow the surface to dry fully &mdash; at least 24 hours in a well-ventilated room &mdash; before applying any primer or paint. Professional-grade products have a longer residual biocidal action than supermarket alternatives, which means they continue to kill spores that emerge from deeper within the substrate over the following days.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Always wear gloves and a mask when applying mould killer sprays, and ensure good ventilation. Bleach-based products release fumes that can irritate airways. Open windows and use extraction if available.</p>
        </Callout>
      </div>

      {/* Product 1: HG Mould Spray */}
      <h2 id="hg-mould-spray">Best Mould Killer &mdash; HG Mould Spray Extra Strong 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="HG Mould Spray Extra Strong 500ml"
          rank={1}
          rating={4.4}
          price="Check price"
          asin="B001EO5JMO"
          bestFor="Best Overall"
          features={[
            "UK's best-selling professional mould killer — 15,000+ reviews",
            "Bleach-based formula kills 99.9% of mould spores on contact",
            "No scrubbing required — spray, leave 30 minutes, wipe",
            "Safe on tiles, grout, silicone, painted walls and ceilings",
          ]}
        />
      </div>
      <p>
        HG Mould Spray is the UK&apos;s best-selling mould killer for good reason. The bleach-based formula kills <strong>99.9% of mould and mildew spores</strong> on contact, and the spray-and-leave application means no scrubbing is required. Apply generously, leave for 30 minutes, and wipe away the dead mould with a damp cloth. It works on tiles, grout, silicone sealant, painted walls, ceilings and window frames &mdash; essentially every surface you encounter in a mould-affected rental property.
      </p>
      <p>
        With over <strong>15,000 reviews on Amazon UK</strong>, this is the default choice for landlords dealing with bathroom and kitchen mould. It is also the most cost-effective option for large-area treatment. For landlords who want a single, proven mould killer that works on every surface, HG Mould Spray is the one to keep in the van.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Kills 99.9% of mould spores on contact &mdash; proven formula</li>
        <li>No scrubbing required &mdash; spray-and-leave application</li>
        <li>Works on all common surfaces including silicone sealant</li>
        <li>15,000+ reviews &mdash; the most-trusted mould killer on Amazon UK</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Bleach-based &mdash; strong fumes, requires good ventilation</li>
        <li>Can discolour coloured grout and fabrics</li>
        <li>Less effective on deeply embedded mould in porous masonry</li>
      </ul>

      {/* Product 2: Dryzone Mould Remover */}
      <h2 id="dryzone-remover">Best for Porous Surfaces &mdash; Dryzone Mould Remover Spray 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Dryzone Mould Remover Spray 500ml"
          rank={2}
          rating={4.3}
          price="Check price"
          asin="B0076BQXJQ"
          features={[
            "From the UK's leading damp-proofing brand",
            "Surfactant system breaks down biofilm before biocide penetrates",
            "Excellent for porous surfaces — plaster, render, bare masonry",
            "Professional-grade formula for deep mould penetration",
          ]}
        />
      </div>
      <p>
        The Dryzone Mould Remover is the choice for landlords dealing with mould on <strong>porous surfaces</strong> &mdash; bare plaster, render, exposed masonry and unpainted concrete. Where supermarket sprays sit on the surface and kill only what they touch, the Dryzone formula contains a surfactant system that breaks down the mould&apos;s protective biofilm before the biocide penetrates into the substrate. This deeper penetration is critical on porous materials where mould hyphae extend well below the visible surface.
      </p>
      <p>
        Dryzone is the UK&apos;s leading damp-proofing brand, and their mould remover is formulated specifically for the building materials that professional damp surveyors encounter daily. If your rental properties have exposed brickwork, lime plaster, or unfinished render with mould growth, this is the product to reach for before HG or Zinsser.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Penetrates porous surfaces where other sprays cannot reach</li>
        <li>Surfactant system breaks down biofilm for deeper kill</li>
        <li>From the UK&apos;s most trusted damp-proofing brand</li>
        <li>Effective on plaster, render, masonry and concrete</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less widely available than HG in high-street stores</li>
        <li>Slightly higher price per 500ml</li>
        <li>Not the best choice for smooth, non-porous surfaces like tiles</li>
      </ul>

      {/* Product 3: Zinsser Mould Killer */}
      <h2 id="zinsser-killer">Best Pre-Paint Preparation &mdash; Zinsser Mould Killer &amp; Remover 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zinsser Mould Killer & Remover 500ml"
          rank={3}
          rating={4.2}
          price="Check price"
          asin="B00BJMB2MC"
          features={[
            "From Zinsser — the professional decorators' brand",
            "Specifically formulated for pre-paint surface preparation",
            "Part of the Zinsser three-step system (killer → primer → paint)",
            "Kills mould and mildew before priming and painting",
          ]}
        />
      </div>
      <p>
        The Zinsser Mould Killer is specifically formulated as the <strong>first step in the Zinsser three-step remediation system</strong>: kill with Zinsser Mould Killer, seal with Zinsser BIN Shellac Primer, then finish with anti-mould paint. If you are planning to use Zinsser BIN as your stain-blocking primer (and for serious mould staining, you should), using the matching Zinsser mould killer ensures optimal compatibility between layers.
      </p>
      <p>
        Zinsser is the professional decorators&apos; brand &mdash; the products are formulated for tradespeople who need reliable, predictable results job after job. The mould killer is no exception: it kills mould and mildew effectively and leaves a clean surface ready for primer application without any additional preparation. For landlords who want a complete, matched system from one trusted brand, the Zinsser three-step approach is the professional standard.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Part of a matched three-step system with Zinsser BIN</li>
        <li>Professional decorators&apos; brand &mdash; trusted by tradespeople</li>
        <li>Optimised for pre-paint surface preparation</li>
        <li>Leaves a clean surface ready for immediate priming</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Smaller 500ml bottle &mdash; may need multiples for large areas</li>
        <li>Premium price compared to HG</li>
        <li>Full benefit only realised when used with Zinsser BIN primer</li>
      </ul>

      {/* Section 2: Primers & Stain Blockers */}
      <h2 id="primers">Damp-Seal Primers &amp; Stain Blockers</h2>
      <p>
        After killing mould, dark staining almost always remains on the wall or ceiling. This is where many landlords make their second mistake: painting standard emulsion directly over mould staining. The stains bleed through within days or weeks, even through multiple coats of emulsion &mdash; and even through mould-resistant paint. The only reliable solution is a <strong>shellac or solvent-based stain-blocking primer</strong> that chemically seals the stain before you apply your topcoat.
      </p>
      <p>
        A stain-blocking primer serves two functions. First, it permanently seals mould staining, water marks and discolouration so they cannot bleed through the finished paint. Second, it seals any residual moisture in the substrate, preventing it from pushing through and lifting the topcoat. On previously damp walls, this moisture-sealing function is just as important as the stain-blocking &mdash; it prevents the new paint from blistering or peeling as the wall continues to dry out over the following weeks.
      </p>

      {/* Product 4: Zinsser BIN */}
      <h2 id="zinsser-bin">Best Stain Blocker &mdash; Zinsser BIN Shellac Primer 1L</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zinsser BIN Shellac Primer — Stain Blocker 1L"
          rank={4}
          rating={4.6}
          price="Check price"
          asin="B0002YQMHW"
          bestFor="Best Overall"
          features={[
            "Industry-standard stain blocker — nothing bleeds through",
            "Shellac-based — permanently seals mould staining and water marks",
            "Adheres to all surfaces without sanding",
            "Fast-drying in 45 minutes — prime and paint in the same day",
          ]}
        />
      </div>
      <p>
        Zinsser BIN is the <strong>industry-standard stain-blocking primer</strong> used by professional decorators and property remediators across the UK. It is shellac-based &mdash; not water-based &mdash; which means it creates a permanent, impermeable seal over mould staining, water marks, smoke damage and virtually any other discolouration. Nothing bleeds through Zinsser BIN. This is not marketing &mdash; it is the reason every professional decorator keeps a tin in the van.
      </p>
      <p>
        The primer adheres to all surfaces without sanding, including glossy paint, bare plaster, timber and previously painted surfaces. It dries in just <strong>45 minutes</strong>, which means you can kill mould in the morning, prime with BIN after lunch, and apply your anti-mould topcoat the same afternoon. For landlords who need to turn around a mould-affected property quickly between tenancies, this speed is invaluable. If you take one product recommendation from this entire page, make it Zinsser BIN.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Permanently seals all staining &mdash; the definitive stain blocker</li>
        <li>Shellac-based for true impermeable sealing</li>
        <li>45-minute drying time &mdash; prime and paint same day</li>
        <li>No sanding or surface preparation required</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Strong solvent smell &mdash; requires excellent ventilation during application</li>
        <li>Shellac-based &mdash; brushes must be cleaned with methylated spirits, not water</li>
        <li>Premium price per litre</li>
      </ul>

      {/* Product 5: Zinsser Damp Seal */}
      <h2 id="zinsser-damp-seal">Best Damp Sealer &mdash; Zinsser Damp Seal 1L</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zinsser Damp Seal 1L — Water-Based Damp Sealer"
          rank={5}
          rating={4.3}
          price="Check price"
          asin="B0002YQMHM"
          features={[
            "Water-based damp sealer for walls with residual moisture",
            "Penetrates and seals the surface to prevent moisture bleed-through",
            "White finish — can be overcoated with any emulsion",
            "Use when wall is damp but not actively wet",
          ]}
        />
      </div>
      <p>
        Zinsser Damp Seal is a <strong>water-based damp sealer</strong> designed for walls that show signs of residual moisture ingress. Where Zinsser BIN excels at blocking stains, Damp Seal excels at sealing surfaces where moisture is still present in the substrate. It penetrates the surface and creates a barrier that prevents residual dampness from pushing through your topcoat, which would otherwise cause blistering, peeling and premature paint failure.
      </p>
      <p>
        The white finish can be overcoated with any standard emulsion or anti-mould paint once dry. Use Damp Seal when the wall is damp but not actively wet &mdash; if moisture is visibly running down the surface, you need to dry the wall first with a <Link href="/best/commercial-dehumidifiers" className="text-green-600 hover:underline">dehumidifier</Link> before applying any sealer. For walls that have been dried out but retain some residual moisture (common after a damp complaint has been addressed), Damp Seal provides the moisture barrier your topcoat needs to last.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Seals residual moisture in the substrate</li>
        <li>Water-based &mdash; low odour, easy brush cleanup</li>
        <li>Can be overcoated with any emulsion or anti-mould paint</li>
        <li>From Zinsser &mdash; the trusted professional brand</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Not a stain blocker &mdash; use Zinsser BIN for staining</li>
        <li>Cannot be applied to actively wet surfaces</li>
        <li>Less effective than BIN for severe discolouration</li>
      </ul>

      {/* Section 3: Anti-Mould Paints */}
      <h2 id="anti-mould-paints">Anti-Mould Paints &mdash; Long-Term Protection</h2>
      <p>
        Anti-mould paints contain fungicide additives that actively inhibit mould regrowth on the painted surface. They are <strong>not a substitute for killing mould first</strong> &mdash; the spores must be dead and the staining sealed before any paint is applied. Think of anti-mould paint as the final layer of defence: it protects the treated, sealed surface from recolonisation by airborne spores over the following years.
      </p>
      <p>
        Applied over a properly treated and primed surface, a quality anti-mould paint provides <strong>3&ndash;5 years of active mould resistance</strong>. Most products have a matt or silk white finish, though some can be tinted to pale colours. For rental properties, white or magnolia are the standard choices. The key difference between anti-mould paint and standard emulsion is the fungicide content &mdash; standard emulsion provides zero mould resistance, while anti-mould formulations actively prevent spore germination on the paint surface.
      </p>

      {/* Product 6: Ronseal */}
      <h2 id="ronseal">Best All-Rounder &mdash; Ronseal Mould Killer Paint 750ml (White)</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Ronseal Mould Killer Paint 750ml — White"
          rank={6}
          rating={4.3}
          price="Check price"
          asin="B00BVHU9RI"
          bestFor="Best All-Rounder"
          features={[
            "Kills mould AND prevents regrowth in one product",
            "5-year guarantee against mould regrowth",
            "Can be used as standalone treatment or primer coat",
            "Suitable for walls, ceilings and hard surfaces",
          ]}
        />
      </div>
      <p>
        The Ronseal Mould Killer Paint is the most versatile product on this page. It contains a <strong>fungicidal wash</strong> that can be used as a standalone mould-killing treatment on lightly affected surfaces, or as a primer coat under standard emulsion on more severely affected areas. The <strong>5-year guarantee</strong> against mould regrowth is the longest on this list, and Ronseal backs it with the brand credibility that comes from decades in the UK DIY market.
      </p>
      <p>
        For landlords who want a single product that kills existing mould and prevents regrowth in one application, this is the most practical choice. It is particularly useful for touch-up work on small areas of recurring mould &mdash; bathroom ceilings, window reveals, and behind furniture &mdash; where deploying the full three-step kill/prime/paint system would be excessive. If you only buy one product from this page, make it the Ronseal.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dual function &mdash; kills mould and prevents regrowth</li>
        <li>5-year guarantee against mould regrowth</li>
        <li>Versatile &mdash; standalone treatment or primer coat</li>
        <li>Trusted Ronseal brand, widely available</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>750ml only covers approximately 6m&sup2; &mdash; not enough for full rooms</li>
        <li>White only &mdash; cannot be tinted</li>
        <li>Not a substitute for Zinsser BIN on heavily stained surfaces</li>
      </ul>

      {/* Product 7: Polycell */}
      <h2 id="polycell">Best for Small Areas &mdash; Polycell Damp Seal Paint 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Polycell Damp Seal Paint 500ml"
          rank={7}
          rating={4.1}
          price="Check price"
          asin="B001AMBYYU"
          features={[
            "One-coat damp-sealing paint for small areas",
            "Seals minor damp patches and stains",
            "White finish, can be overcoated once dry",
            "Trusted Polycell brand — widely available in UK stores",
          ]}
        />
      </div>
      <p>
        Polycell Damp Seal Paint is a <strong>one-coat damp-sealing paint</strong> designed for small areas where a full Zinsser BIN system would be excessive. It seals minor damp patches and stains on interior walls and ceilings in a single application, and the white finish can be overcoated with standard emulsion once dry. For isolated damp spots &mdash; a single patch on a bathroom ceiling, a small area around a window reveal, or minor staining behind a radiator &mdash; the Polycell is the quickest and most practical solution.
      </p>
      <p>
        The Polycell brand is trusted and widely available in every UK DIY store, which makes it easy to pick up at short notice when a tenant reports a small damp issue. It is not a substitute for the full three-step system on severely affected rooms, but for reactive maintenance on minor, localised problems, it gets the job done quickly and affordably.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>One-coat application &mdash; fast for small repairs</li>
        <li>Seals minor damp patches and light staining</li>
        <li>Widely available in UK DIY stores</li>
        <li>Affordable for small-area treatment</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>500ml &mdash; not practical for full-room repaints</li>
        <li>Not as effective as Zinsser BIN for severe staining</li>
        <li>Limited mould-killing capability compared to dedicated mould killers</li>
      </ul>

      {/* Product 8: Johnstone's */}
      <h2 id="johnstones">Best for Full Rooms &mdash; Johnstone&apos;s Anti Mould Paint 2.5L (Brilliant White)</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Johnstone's Anti Mould Paint 2.5L — Brilliant White"
          rank={8}
          rating={4.2}
          price="Check price"
          asin="B07V4L7VFW"
          features={[
            "2.5L covers approximately 35m² — enough for a full room",
            "Contains Microban antimicrobial technology",
            "Suitable for bathrooms, kitchens, bedrooms and living rooms",
            "The right-sized product for full-room repaints",
          ]}
        />
      </div>
      <p>
        When you need to repaint an <strong>entire room</strong> after mould remediation, Johnstone&apos;s Anti Mould Paint is the right-sized product. The 2.5L tin covers approximately <strong>35m&sup2;</strong> &mdash; enough for a standard bedroom or bathroom in two coats. It contains <strong>Microban antimicrobial technology</strong>, which provides continuous mould and bacteria resistance that is built into the paint film rather than applied as a surface coating. This means the antimicrobial protection does not wash off or wear away over time.
      </p>
      <p>
        Johnstone&apos;s is a well-established UK paint brand used by professional decorators, and the anti-mould formulation is suitable for bathrooms, kitchens, bedrooms and any room previously affected by condensation mould. For landlords who are repainting a full room as part of a mould remediation or end-of-tenancy turnaround, the 2.5L Johnstone&apos;s is significantly more cost-effective per square metre than buying multiple small tins of Ronseal or Polycell.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>2.5L &mdash; enough for a full room in two coats</li>
        <li>Microban antimicrobial technology for lasting protection</li>
        <li>Cost-effective per square metre for large areas</li>
        <li>Professional decorators&apos; brand</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Brilliant white only &mdash; limited colour options</li>
        <li>Still requires mould killing and priming beforehand</li>
        <li>2.5L tin is larger than needed for small touch-ups</li>
      </ul>

      {/* Three-Step System */}
      <h2 id="three-step">The Three-Step Mould Remediation System</h2>
      <p>
        For a lasting mould remediation that stands up to both future mould pressure and regulatory scrutiny, follow this three-step system:
      </p>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Product Type</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mould killer spray</td>
            <td>Kill all existing spores &mdash; never paint over live mould</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Stain-blocking primer</td>
            <td>Seal staining permanently, prevent bleed-through</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Anti-mould paint</td>
            <td>Prevent regrowth for 3&ndash;5 years</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Timing matters.</strong> Allow the mould killer to work for the full contact time (typically 30 minutes), then wipe and allow at least 24 hours for the surface to dry. Apply stain-blocking primer and allow it to dry (45 minutes for Zinsser BIN). Then apply anti-mould paint in two coats with the manufacturer&apos;s recommended drying time between coats. A single room can typically be completed in two days.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Document every step with dated photographs: before treatment, after mould killing, after priming, and after the finished paint. This documentation is essential evidence of due diligence if a complaint is escalated under Awaab&apos;s Law or HHSRS.</p>
        </Callout>
      </div>

      {/* Ventilation Section */}
      <h2 id="ventilation">Will Anti-Mould Paint Work if I Don&apos;t Fix the Ventilation?</h2>
      <p>
        <strong>No.</strong> Anti-mould paint slows regrowth but does not fix the underlying cause of mould. If humidity in the property stays above 70%, even the best anti-mould paint will eventually be overwhelmed &mdash; typically within 6&ndash;12 months rather than the 3&ndash;5 years you would get in a properly ventilated property. The fungicide in the paint can only resist a certain level of moisture pressure before mould finds a way to colonise the surface.
      </p>
      <p>
        For lasting results, mould treatment products must be combined with ventilation improvements. This means <Link href="/best/awaabs-law-damp-mould-equipment" className="text-green-600 hover:underline">fixing the ventilation first with a PIV unit</Link>, upgrading extractor fans in kitchens and bathrooms, ensuring trickle vents are open, or deploying a dehumidifier. Treat the surface <em>and</em> the cause &mdash; one without the other is a temporary fix at best.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Can I paint over mould without treating it first?</h3>
      <p>
        No. Painting over live mould is the single most common mistake landlords make during remediation. The mould will continue to grow beneath the paint film, eventually pushing through and staining the new surface within weeks or months. You must kill the mould first with a biocidal spray, allow the surface to dry completely, then seal any staining with a stain-blocking primer before applying anti-mould paint.
      </p>

      <h3>How long does anti-mould paint last?</h3>
      <p>
        Quality anti-mould paints such as Ronseal and Johnstone&apos;s provide <strong>3&ndash;5 years</strong> of active mould resistance when applied correctly over a properly treated and primed surface. However, if the underlying cause of damp (poor ventilation, condensation, structural moisture) is not addressed, even the best anti-mould paint will eventually be overwhelmed. Anti-mould paint is a surface treatment, not a substitute for fixing ventilation.
      </p>

      <h3>Is Zinsser BIN necessary or can I use a standard primer?</h3>
      <p>
        Standard water-based primers will not block mould staining. The dark stains left by mould growth bleed through standard primers and emulsion paints, reappearing within days or weeks. <strong>Zinsser BIN is a shellac-based primer</strong> that permanently seals staining &mdash; nothing bleeds through it. If there is any visible staining after killing the mould, Zinsser BIN or an equivalent solvent-based stain blocker is essential for a lasting finish.
      </p>

      <h3>Does Awaab&apos;s Law require landlords to use specific products?</h3>
      <p>
        No. Awaab&apos;s Law (Section 42, Social Housing Regulation Act 2023) does not mandate specific products or brands. It requires landlords to investigate damp and mould hazards within 14 days and remediate within prescribed timeframes. The choice of products is left to the landlord, but using professional-grade treatments and documenting the remediation process (products used, dates, before/after photos) demonstrates due diligence and compliance with the spirit of the legislation.
      </p>

      {/* Closing CTA */}
      <p>
        For the full picture on damp remediation &mdash; including PIV units, dehumidifiers and compliance documentation tools &mdash; see our <Link href="/best/awaabs-law-damp-mould-equipment" className="text-green-600 hover:underline">Awaab&apos;s Law landlord equipment guide</Link>.
      </p>

      {/* FindProviderCTA */}
      <div className="not-prose">
        <FindProviderCTA
          heading="Damp or Mould Problem Beyond DIY?"
          subtext="Compare verified damp remediation and pest control specialists near you — free, no-obligation quotes"
        />
      </div>

      {/* Link buttons */}
      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/best/awaabs-law-damp-mould-equipment"
          className="inline-block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Awaab&apos;s Law Equipment Guide &rarr;
        </Link>
        <Link
          href="/best/commercial-dehumidifiers"
          className="inline-block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Commercial Dehumidifiers &rarr;
        </Link>
      </div>
    </GuideLayout>
  );
}
