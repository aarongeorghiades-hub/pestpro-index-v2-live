import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Flea Spray for Home UK 2026: Kill Fleas Fast | PestPro Index',
    description:
      'Our pick of the best flea sprays for the home available in the UK for 2026. IGR sprays, aerosols, and natural options reviewed with application tips and buying advice.',
    alternates: {
      canonical: 'https://pestproindex.com/best/flea-spray-for-home',
    },
    openGraph: {
      title: 'Best Flea Spray for Home UK 2026: Kill Fleas Fast | PestPro Index',
      description:
        'Our pick of the best flea sprays for the home available in the UK for 2026. IGR sprays, aerosols, and natural options reviewed with application tips and buying advice.',
      url: 'https://pestproindex.com/best/flea-spray-for-home',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Flea Spray for Home UK 2026: Kill Fleas Fast',
  description:
    'Our pick of the best flea sprays for the home available in the UK for 2026. IGR sprays, aerosols, and natural options reviewed with application tips and buying advice.',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/best/flea-spray-for-home' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://pestproindex.com/best' },
    { '@type': 'ListItem', position: 3, name: 'Best Flea Spray for Home UK 2026', item: 'https://pestproindex.com/best/flea-spray-for-home' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best flea spray for the home in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indorex Defence Household Flea Spray is widely regarded as the best flea spray for UK homes. It combines permethrin (kills adult fleas on contact) with pyriproxyfen, an insect growth regulator (IGR) that prevents flea eggs and larvae from developing for up to 12 months. This dual-action formula is the same product used by many professional pest controllers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does flea spray take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flea spray kills adult fleas on contact within minutes. However, you may continue to see fleas for 2-4 weeks after treatment because flea pupae (cocoons) are resistant to all insecticides. When new adults emerge from pupae, they are killed by the residual spray on your carpets and soft furnishings. The IGR component prevents any surviving eggs or larvae from developing into new adults.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is flea spray safe for pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Household flea sprays are designed for carpets, soft furnishings, and hard floors — not for direct application to pets. Remove pets (including fish tanks and bird cages) from the room before spraying, and do not allow pets back until the spray has fully dried (typically 1-2 hours). Once dry, the residual layer is safe for pets to walk on. Always treat your pet with a vet-approved flea treatment alongside treating the home.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I spray my house for fleas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a quality IGR spray like Indorex, a single application provides up to 12 months of protection. For active infestations, one thorough application should be sufficient — but you may need to reapply after 2-3 weeks if you are still seeing significant numbers of fleas. Regular vacuuming is essential alongside spraying, as it stimulates flea pupae to hatch and exposes the emerging adults to the residual spray.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I vacuum before or after flea spraying?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vacuum thoroughly before spraying to remove flea eggs, larvae, and debris from carpet fibres, which helps the spray penetrate deeper. After spraying, vacuum daily for at least 2 weeks — this stimulates flea pupae to hatch, and the newly emerged adults are immediately killed by the residual spray on the carpet. Empty the vacuum bag or canister into an outdoor bin after each session.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to treat my whole house or just the rooms with pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treat every carpeted room and any room your pet has access to, even if you have not seen fleas there. Flea eggs fall off pets as they move through the house, and larvae can crawl into adjacent rooms. Pay particular attention to areas where your pet sleeps, rests, or spends the most time — these are the highest concentration areas.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Flea Sprays at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Indorex Defence 500ml' },
  { id: 'best-twin', title: 'Best Twin Pack — Indorex Defence 2x500ml' },
  { id: 'best-professional', title: 'Best Professional — Pest Expert Formula C+ 1L' },
  { id: 'best-fast', title: 'Best Fast-Acting — RIP Fleas Extra' },
  { id: 'best-value', title: 'Best Value — Bob Martin Home Flea Spray' },
  { id: 'buying-guide', title: 'How to Choose the Right Flea Spray' },
  { id: 'application', title: 'How to Apply Flea Spray for Best Results' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestFleaSprayPage() {
  return (
    <GuideLayout
      title="Best Flea Spray for Home UK 2026: Kill Fleas Fast"
      subtitle="Our pick of the most effective household flea sprays available in the UK, from professional IGR sprays to natural options"
      lastUpdated="March 2026"
      readingTime="10 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Landlord Pest Control: UK Compliance Guide', href: '/guides/landlord-pest-control' },
        { title: 'Hotel Pest Control: UK Compliance Guide', href: '/guides/hotel-pest-control' },
      ]}
      relatedProducts={[
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Flea Fogger UK 2026', href: '/best/flea-fogger' },
        { title: 'Best Bed Bug Spray UK 2026', href: '/best/bed-bug-spray' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
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

      <p>
        A flea infestation in your home is one of the most frustrating pest problems you can face. Fleas breed rapidly — a single female can lay up to 50 eggs per day — and their eggs and pupae can survive for months in carpet fibres, making them incredibly difficult to eliminate completely. According to the British Pest Control Association (BPCA), flea callouts spike dramatically between June and October each year as warmer weather accelerates the flea lifecycle.
      </p>
      <p>
        The key to effective flea treatment is understanding the flea lifecycle. Only 5% of a flea infestation consists of adult fleas — the other 95% is made up of eggs, larvae, and pupae hidden in your carpets, soft furnishings, and floorboard gaps. A spray that only kills adult fleas will provide temporary relief but will not break the cycle. The most effective household flea sprays contain an <strong>insect growth regulator (IGR)</strong> that prevents eggs and larvae from developing into new adults, providing long-term protection for months after a single application.
      </p>
      <p>
        To compile this guide, we evaluated dozens of household flea sprays on Amazon UK based on <strong>active ingredients</strong> (particularly whether they include an IGR), <strong>residual duration</strong>, <strong>ease of use</strong>, and <strong>genuine customer reviews</strong>. We also consulted veterinary and entomological guidance on effective flea control. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Always treat your pet with a vet-approved flea treatment at the same time as treating your home. Spraying the house without treating the pet — or vice versa — will not break the infestation cycle.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Flea Sprays at a Glance</h2>
      <p>Here is a quick comparison of our top five picks.</p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Key Feature</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Indorex Defence 500ml</td>
            <td>IGR — 12 months protection</td>
            <td>Best Overall</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>Indorex Defence 2x500ml</td>
            <td>Twin pack — whole-home treatment</td>
            <td>Best Twin Pack</td>
            <td>~£25</td>
          </tr>
          <tr>
            <td>Pest Expert Formula C+ 1L</td>
            <td>Triple-action — 12-week residual</td>
            <td>Best Professional</td>
            <td>~£18</td>
          </tr>
          <tr>
            <td>RIP Fleas Extra</td>
            <td>Fast knockdown + IGR</td>
            <td>Best Fast-Acting</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>Bob Martin Home Flea Spray</td>
            <td>Trusted brand — easy aerosol</td>
            <td>Best Value</td>
            <td>~£7</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="12 months" label="Protection from a single application of top-rated IGR flea sprays" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Indorex Defence Flea Spray 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Indorex Defence Flea Spray 500ml"
          rank={1}
          rating={4.5}
          features={[
            'Permethrin + pyriproxyfen IGR dual-action formula',
            '10-time Best Flea Product award winner',
            'Up to 12 months residual protection from one application',
            'One can treats a 3-4 bedroom house',
          ]}
          price="£15"
          asin="B00GKHI2PW"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Indorex Defence is the household flea spray recommended by more UK vets and pest controllers than any other product — and with 10 Best Flea Product awards to its name, the reputation is well-earned. It combines permethrin (a fast-acting insecticide that kills adult fleas on contact) with pyriproxyfen (an insect growth regulator that prevents flea eggs and larvae from developing for up to 12 months). This dual-action formula tackles both the visible adult fleas and the hidden 95% of the infestation — eggs, larvae, and pupae — in a single treatment.
      </p>
      <p>
        The 12-month residual protection is the standout feature. After spraying, the IGR continues to work in your carpet fibres for up to a year, preventing any eggs or larvae that you missed from ever developing into biting adults. This is why Indorex is so effective at breaking the flea lifecycle and preventing re-infestation — even if a few eggs survive the initial treatment, they cannot mature while the IGR is active.
      </p>
      <p>
        One 500ml can treats a 3-4 bedroom house. The aerosol provides even coverage when sprayed at arm's length from the floor, and the fine mist settles into carpet fibres where flea eggs and larvae are concentrated. After spraying, ventilate the room and allow it to dry for 1-2 hours before allowing pets and children back in. For a standard household flea problem, this single can is the professional standard for treatment.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dual-action: kills adults and prevents egg/larva development</li>
        <li>Up to 12 months of residual IGR protection</li>
        <li>10-time award winner — the professional standard</li>
        <li>One can covers a 3-4 bed house</li>
        <li>Fast-acting permethrin kills adult fleas on contact</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Must remove pets from the room during application</li>
        <li>Strong aerosol — requires good ventilation</li>
        <li>Slightly higher price than basic alternatives</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-twin">Best Twin Pack — Indorex Defence Flea Spray 2x500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Indorex Defence Flea Spray 2x500ml Twin Pack"
          rank={2}
          rating={4.5}
          features={[
            'Same award-winning Indorex formula — two full cans',
            'Complete whole-home treatment with enough for follow-up',
            'Ideal for larger homes or recurring infestations',
            'Better value per ml than buying single cans',
          ]}
          price="£25"
          asin="B07D19P8S2"
          bestFor="Best Twin Pack"
        />
      </div>
      <p>
        The Indorex twin pack is the smart buy for larger homes or anyone dealing with a recurring flea problem. You get two full 500ml cans of the same award-winning Indorex Defence formula — enough to treat a large property thoroughly with spare left over for a follow-up application if needed. Buying the twin pack also works out cheaper per millilitre than purchasing two single cans separately.
      </p>
      <p>
        Two cans gives you the flexibility to treat every room comprehensively on day one, and then re-treat high-traffic pet areas 2-3 weeks later if you are still seeing fleas emerging from pupae. This two-pass approach is exactly what professional pest controllers recommend for severe infestations, and having both cans ready from the start means you will not lose momentum waiting for a second order to arrive.
      </p>
      <p>
        For households with multiple pets, large carpeted areas, or a history of seasonal flea problems, the twin pack provides peace of mind. The second can also serves as insurance — if your initial treatment does not fully break the cycle (often because flea pupae are resistant to all sprays and continue hatching for weeks), you have immediate backup without needing to reorder.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Two cans for complete whole-home coverage</li>
        <li>Better value per ml than single cans</li>
        <li>Spare can for follow-up treatment or high-traffic areas</li>
        <li>Same proven 12-month IGR protection per application</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher upfront cost than a single can</li>
        <li>May be more than needed for a small, localised problem</li>
        <li>Same aerosol format — still requires room ventilation</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-professional">Best Professional — Pest Expert Formula C+ Flea Killer Spray 1L</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula C+ Flea Killer Spray 1L"
          rank={3}
          rating={4.4}
          features={[
            'Triple-action: cypermethrin, pyriproxyfen IGR, and natural pyrethrum',
            'Maximum-strength formula from a leading UK pest control brand',
            '12-week residual protection on treated surfaces',
            'Water-based — safe for carpets, furnishings, and pet bedding once dry',
          ]}
          price="£18"
          asin="B09GYGC5FL"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Pest Expert Formula C+ is the most comprehensively formulated flea spray on our list. It combines three active ingredients — cypermethrin for long-lasting residual kill, pyriproxyfen IGR to prevent egg and larval development, and natural pyrethrum for immediate knockdown. This triple-action approach means it tackles every stage of the flea lifecycle: adults die on contact from the pyrethrum, the cypermethrin continues killing for weeks after application, and the IGR ensures no new adults develop from surviving eggs or larvae.
      </p>
      <p>
        The water-based formula is a significant advantage over solvent-based aerosols. It is safe for use on carpets, soft furnishings, curtains, and pet bedding once dry, and it does not leave the strong chemical odour that many aerosol sprays produce. The 1-litre bottle provides generous coverage, and the 12-week residual protection means you get sustained control throughout the peak of flea season.
      </p>
      <p>
        This is the product to choose when you want a professional-grade treatment that goes beyond what a standard aerosol offers. The inclusion of an IGR alongside the contact and residual insecticides makes Formula C+ a genuine all-in-one solution — no need to layer multiple products for comprehensive coverage. For severe infestations or homes where previous treatments have failed, this is the step up.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Triple-action formula covers all flea lifecycle stages</li>
        <li>Includes IGR — prevents egg and larval development</li>
        <li>Water-based and safe for soft furnishings once dry</li>
        <li>12-week residual protection from a single application</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Shorter residual than Indorex (12 weeks vs 12 months)</li>
        <li>Requires a trigger sprayer or pump sprayer</li>
        <li>Higher price than basic aerosol alternatives</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-fast">Best Fast-Acting — RIP Fleas Extra Household Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="RIP Fleas Extra Household Spray"
          rank={4}
          rating={4.2}
          features={[
            'Fast-acting residual flea spray for carpets and furnishings',
            'Contains permethrin and an IGR for long-lasting protection',
            'Popular choice for homes with cats and dogs',
            'Works on carpets, furniture, and pet bedding',
          ]}
          price="£12"
          asin="SEARCH"
          bestFor="Best Fast-Acting"
        />
      </div>
      <p>
        RIP Fleas Extra is formulated for rapid knockdown — it kills adult fleas within minutes of application while also containing an IGR for long-term control. This makes it the best choice when you are dealing with an active infestation and need immediate relief from biting fleas. The fast-acting permethrin component provides that satisfying "kill on contact" effect that gives you confidence the treatment is working.
      </p>
      <p>
        The combined permethrin + IGR formula is essentially the same dual-action approach used by Indorex, just from a different brand. RIP Fleas Extra can be sprayed on carpets, rugs, soft furnishings, and pet bedding (once dry, it is safe for pets). It is a particularly popular choice among cat and dog owners who want a trusted product that provides both immediate relief and ongoing protection against re-infestation.
      </p>
      <p>
        At around £12, it slots in below the premium options and offers genuine value, particularly for treating specific areas rather than an entire house. The residual protection lasts several months, making it effective through the peak of flea season. If you need fast results at a reasonable price, RIP Fleas Extra delivers on both counts.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Very fast knockdown of adult fleas</li>
        <li>Contains IGR for long-term cycle control</li>
        <li>Safe for pet bedding once dry</li>
        <li>Good value at around £12</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Shorter residual protection than Indorex</li>
        <li>Smaller coverage area than premium options</li>
        <li>May need 2 cans for a whole house</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-value">Best Value — Bob Martin Home Flea Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Bob Martin Home Flea Spray"
          rank={5}
          rating={4.0}
          features={[
            'Trusted UK pet brand household flea spray',
            'Kills fleas and larvae in carpets, upholstery, and pet bedding',
            'Easy-to-use aerosol format',
            'Available at most pet shops and online',
          ]}
          price="£7"
          asin="SEARCH"
          bestFor="Best Budget"
        />
      </div>
      <p>
        Bob Martin is one of the most recognised pet care brands in the UK, and their Home Flea Spray offers an affordable, accessible option for tackling household fleas. Available at most pet shops, supermarkets, and online, it is the product many pet owners reach for first because of the familiar brand name and straightforward aerosol format — shake, spray, and let dry.
      </p>
      <p>
        The spray kills fleas and larvae on contact in carpets, upholstery, and pet bedding areas. The easy-to-use aerosol delivers even coverage without the need for mixing or additional equipment. At around £7, it is the most budget-friendly option on our list, making it an accessible starting point for pet owners dealing with their first flea problem.
      </p>
      <p>
        For budget-conscious pet owners who want a trusted brand at a low price, Bob Martin gets the job done for minor flea problems. If you are dealing with a more severe or persistent infestation, however, stepping up to an IGR-containing spray like Indorex will provide significantly longer-lasting protection by breaking the flea lifecycle at the egg and larval stage.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Trusted Bob Martin brand — widely available</li>
        <li>Very affordable at around £7</li>
        <li>Easy-to-use aerosol format</li>
        <li>Kills fleas and larvae on contact</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less coverage per can than premium sprays</li>
        <li>Shorter residual protection than IGR sprays</li>
        <li>May need 2 cans for a larger house</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">How to Choose the Right Flea Spray</h2>

      <h3>Look for an IGR (Insect Growth Regulator)</h3>
      <p>
        This is the single most important factor. An IGR prevents flea eggs and larvae from developing into biting adults, breaking the infestation cycle for months after a single application. Without an IGR, you are only killing adult fleas — and the other 95% of the infestation (eggs, larvae, pupae) will continue producing new adults. Products with an IGR include Indorex, Acclaim, RIP Fleas Extra, and Bob Martin.
      </p>

      <h3>Coverage Area</h3>
      <p>
        Check how many square metres each product covers. A 500ml aerosol typically covers 50-80 sq m — enough for a small to medium house. If you have a larger property or multiple carpeted rooms, you may need two cans or should consider a concentrate like Pest Expert Formula C for maximum coverage.
      </p>

      <h3>Aerosol vs Concentrate</h3>
      <p>
        Aerosols are convenient — shake, spray, done. Concentrates require mixing and a pump sprayer but provide far more coverage per pound and a more controllable application. For a typical household treatment, aerosol is usually sufficient. For large properties or professional-level treatment, concentrate is more practical.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Always remove fish tanks (or cover and turn off air pumps), bird cages, and reptile enclosures from the room before spraying. Pyrethroids are highly toxic to fish and aquatic invertebrates, even in tiny amounts.</p>
        </Callout>
      </div>

      {/* Application Guide */}
      <h2 id="application">How to Apply Flea Spray for Best Results</h2>

      <h3>Step 1: Treat Your Pet First</h3>
      <p>
        Apply a vet-approved spot-on flea treatment or oral tablet to your pet before treating the home. Your pet is the fleas' food source — if the pet is not treated, fleas will simply re-infest the home after your spray treatment wears off.
      </p>

      <h3>Step 2: Vacuum Thoroughly</h3>
      <p>
        Vacuum every carpeted area, under furniture, along skirting boards, and in corners. This removes flea eggs, larvae, and debris, and helps the spray penetrate deeper into carpet fibres. Pay special attention to areas where your pet rests. Dispose of the vacuum contents in an outdoor bin immediately.
      </p>

      <h3>Step 3: Hot-Wash Pet Bedding</h3>
      <p>
        Wash all pet bedding, blankets, and removable covers at 60°C minimum. This kills all flea life stages on contact. Tumble dry on high heat for at least 30 minutes for added certainty.
      </p>

      <h3>Step 4: Spray Systematically</h3>
      <p>
        Work room by room, spraying all carpeted areas, rugs, soft furnishings, under furniture, and along skirting boards. Hold the can at arm's length and spray in a sweeping motion at floor level. Do not forget under sofas, beds, and other furniture where flea larvae congregate in the dark.
      </p>

      <h3>Step 5: Ventilate and Dry</h3>
      <p>
        Open windows and leave the room for 1-2 hours until surfaces are completely dry. Once dry, the treated surfaces are safe for pets and children to walk on.
      </p>

      <h3>Step 6: Vacuum Daily for 2 Weeks</h3>
      <p>
        Daily vacuuming for at least 2 weeks after treatment is essential. Vacuuming stimulates flea pupae to hatch — and the newly emerged adults walk straight into the residual spray layer on your carpet and die. Without regular vacuuming, pupae can remain dormant for months and hatch long after your spray treatment has worn off.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best flea spray for the home in the UK?</h3>
      <p>
        Indorex Defence is widely regarded as the best flea spray for UK homes. It combines permethrin with pyriproxyfen (an IGR) that prevents flea eggs and larvae from developing for up to 12 months. This dual-action formula is the same product used by many professional pest controllers.
      </p>

      <h3>How long does flea spray take to work?</h3>
      <p>
        Flea spray kills adult fleas on contact within minutes. However, you may continue to see fleas for 2-4 weeks because flea pupae are resistant to all insecticides. When new adults emerge, they are killed by the residual spray. The IGR prevents surviving eggs or larvae from developing into new adults.
      </p>

      <h3>Is flea spray safe for pets?</h3>
      <p>
        Household flea sprays are for carpets and furnishings, not direct pet application. Remove pets from the room before spraying and do not allow them back until the spray has fully dried (1-2 hours). Once dry, the residual layer is safe for pets to walk on.
      </p>

      <h3>How often should I spray my house for fleas?</h3>
      <p>
        With a quality IGR spray like Indorex, a single application provides up to 12 months of protection. You may need to reapply after 2-3 weeks if you are still seeing significant numbers. Regular vacuuming is essential alongside spraying.
      </p>

      <h3>Should I vacuum before or after flea spraying?</h3>
      <p>
        Both. Vacuum thoroughly before spraying to remove debris and help the spray penetrate. After spraying, vacuum daily for at least 2 weeks to stimulate pupae to hatch and expose emerging adults to the residual spray.
      </p>

      <h3>Do I need to treat my whole house?</h3>
      <p>
        Yes — treat every carpeted room and any room your pet has access to. Flea eggs fall off pets as they move through the house, and larvae can crawl into adjacent rooms. Focus particularly on areas where your pet sleeps and rests.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Fleas Keep Coming Back?"
          subtext="If DIY sprays haven't broken the cycle, a professional pest controller can apply commercial-grade treatments that eliminate even severe infestations"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the full picture on flea control?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/guides/how-to-get-rid-of-fleas"
            className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
          >
            How to Get Rid of Fleas — Complete Guide →
          </a>
          <a
            href="/best/flea-fogger"
            className="inline-block px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors text-sm"
          >
            Best Flea Foggers UK 2026 →
          </a>
        </div>
      </div>
    </GuideLayout>
  );
}
