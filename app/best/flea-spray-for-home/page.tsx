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
  { id: 'best-overall', title: 'Best Overall — Indorex Defence' },
  { id: 'best-professional', title: 'Best Professional — Acclaim Household Flea Spray' },
  { id: 'best-fast', title: 'Best Fast-Acting — RIP Fleas Extra' },
  { id: 'best-concentrate', title: 'Best Concentrate — Pest Expert Formula C' },
  { id: 'best-natural', title: 'Best Natural — Johnson\'s Flea Spray' },
  { id: 'best-value', title: 'Best Value — Bob Martin Flea Spray' },
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
      <p>Here is a quick comparison of our top six picks.</p>
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
            <td>Indorex Defence</td>
            <td>IGR — 12 months protection</td>
            <td>Best Overall</td>
            <td>~£15</td>
          </tr>
          <tr>
            <td>Acclaim Household Flea Spray</td>
            <td>IGR — professional formula</td>
            <td>Best Professional</td>
            <td>~£14</td>
          </tr>
          <tr>
            <td>RIP Fleas Extra</td>
            <td>Fast knockdown + IGR</td>
            <td>Best Fast-Acting</td>
            <td>~£12</td>
          </tr>
          <tr>
            <td>Pest Expert Formula C</td>
            <td>Concentrate — large coverage</td>
            <td>Best Concentrate</td>
            <td>~£18</td>
          </tr>
          <tr>
            <td>Johnson's Household Flea Spray</td>
            <td>Plant-based formula</td>
            <td>Best Natural</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Bob Martin Flea Spray</td>
            <td>Budget-friendly with IGR</td>
            <td>Best Value</td>
            <td>~£7</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="12 months" label="Protection from a single application of top-rated IGR flea sprays" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Indorex Defence Household Flea Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Indorex Defence Household Flea Spray"
          rank={1}
          rating={4.5}
          features={[
            'Permethrin + pyriproxyfen IGR dual-action formula',
            'Kills adult fleas on contact and prevents re-infestation',
            'Up to 12 months residual protection from one application',
            'Used by vets and professional pest controllers across the UK',
          ]}
          price="£15"
          asin="B00GKHI2PW"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Indorex Defence is the household flea spray recommended by more UK vets and pest controllers than any other product. It combines permethrin (a fast-acting insecticide that kills adult fleas on contact) with pyriproxyfen (an insect growth regulator that prevents flea eggs and larvae from developing for up to 12 months). This dual-action formula tackles both the visible adult fleas and the hidden 95% of the infestation — eggs, larvae, and pupae — in a single treatment.
      </p>
      <p>
        The 12-month residual protection is the standout feature. After spraying, the IGR continues to work in your carpet fibres for up to a year, preventing any eggs or larvae that you missed from ever developing into biting adults. This is why Indorex is so effective at breaking the flea lifecycle and preventing re-infestation — even if a few eggs survive the initial treatment, they cannot mature while the IGR is active.
      </p>
      <p>
        One 500ml can treats approximately 79 square metres — enough for an average three-bedroom house. The aerosol provides even coverage when sprayed at arm's length from the floor, and the fine mist settles into carpet fibres where flea eggs and larvae are concentrated. After spraying, ventilate the room and allow it to dry for 1-2 hours before allowing pets and children back in.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dual-action: kills adults and prevents egg/larva development</li>
        <li>Up to 12 months of residual IGR protection</li>
        <li>Recommended by UK vets and pest controllers</li>
        <li>One can covers an average 3-bed house</li>
        <li>Fast-acting permethrin kills adult fleas on contact</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Must remove pets from the room during application</li>
        <li>Strong aerosol — requires good ventilation</li>
        <li>Slightly higher price than basic alternatives</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-professional">Best Professional — Acclaim Household Flea Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Acclaim Household Flea Spray"
          rank={2}
          rating={4.4}
          features={[
            'Professional-strength IGR formula (S-methoprene)',
            'Kills fleas, eggs, and larvae in one application',
            'Up to 12 months protection',
            'Trusted by professional pest controllers',
          ]}
          price="£14"
          asin="B001MIVFGC"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Acclaim is the professional alternative to Indorex, using a different IGR — S-methoprene — combined with a permethrin contact killer. Many professional pest controllers prefer Acclaim because it is specifically formulated for use in domestic environments with pets, and the S-methoprene IGR has been shown in studies to be particularly effective at preventing flea larval development in carpet fibres.
      </p>
      <p>
        The coverage is excellent — a single 500ml can treats up to 80 square metres of floor space. The aerosol produces a fine, even mist that penetrates deep into carpet pile where flea eggs and larvae are most concentrated. Like Indorex, it provides up to 12 months of residual protection from the IGR, meaning a single application during flea season should last until the following year.
      </p>
      <p>
        Acclaim has been on the UK market for decades and has built a strong reputation among both pest professionals and pet owners. If you have used Indorex before and found that it did not fully resolve your flea problem, switching to Acclaim (which uses a different IGR) can sometimes provide better results — different flea populations may respond better to different growth regulators.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade S-methoprene IGR</li>
        <li>12 months of residual protection</li>
        <li>Excellent 80 sq m coverage per can</li>
        <li>Decades of proven effectiveness in UK homes</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Slightly harder to find in shops than Indorex</li>
        <li>Aerosol format requires room ventilation</li>
        <li>Must remove pets during treatment</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-fast">Best Fast-Acting — RIP Fleas Extra</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="RIP Fleas Extra Household Flea Spray"
          rank={3}
          rating={4.3}
          features={[
            'Fast knockdown of adult fleas plus IGR',
            'Permethrin + pyriproxyfen formula',
            'Works on carpets, soft furnishings, and pet bedding',
            'Treats up to 50 sq m per can',
          ]}
          price="£12"
          asin="B004US3F1Y"
          bestFor="Best Fast-Acting"
        />
      </div>
      <p>
        RIP Fleas Extra is formulated for rapid knockdown — it kills adult fleas within minutes of application while also containing an IGR for long-term control. This makes it the best choice when you are dealing with an active infestation and need immediate relief from biting fleas. The fast-acting permethrin component provides that satisfying "kill on contact" effect that gives you confidence the treatment is working.
      </p>
      <p>
        The combined permethrin + pyriproxyfen formula is essentially the same dual-action approach used by Indorex, just in a different brand. RIP Fleas Extra can be sprayed on carpets, rugs, soft furnishings, and pet bedding (once dry, it is safe for pets). The treatment provides several months of residual protection, though the manufacturer's claims are somewhat less than the 12-month protection offered by Indorex and Acclaim.
      </p>
      <p>
        At around £12, it slots in below the premium options and offers genuine value, particularly for treating specific areas rather than an entire house. The 600ml can treats approximately 50 square metres, which is enough for 2-3 rooms — ideal if your flea problem is localised to the rooms where your pet spends the most time.
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
        <li>Shorter residual protection than Indorex/Acclaim</li>
        <li>Smaller coverage area (50 sq m)</li>
        <li>May need 2 cans for a whole house</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-concentrate">Best Concentrate — Pest Expert Formula C</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula C Flea Killer Spray"
          rank={4}
          rating={4.3}
          features={[
            'Professional-strength cypermethrin concentrate',
            'Dilute with water — massive coverage area',
            'Long-lasting residual action on hard and soft surfaces',
            'Also effective on bed bugs, cockroaches, and ants',
          ]}
          price="£18"
          asin="B073JPVRFB"
          bestFor="Best Concentrate"
        />
      </div>
      <p>
        For large homes, severe infestations, or anyone who wants maximum coverage per pound, Pest Expert Formula C concentrate is the most cost-effective option. A single 1-litre bottle diluted with water provides enough solution to treat a large house multiple times over — far more coverage than any aerosol can. The cypermethrin formula provides excellent residual protection on both hard floors and carpets.
      </p>
      <p>
        The main trade-off is that you need a pump sprayer (not included) and the concentrate needs to be mixed with water. This is slightly more effort than pressing the button on an aerosol, but the result is a more thorough, controllable treatment. You can direct the spray exactly where you need it, adjust the spray pattern, and cover areas that an aerosol would struggle to reach — such as under heavy furniture and inside built-in cupboards.
      </p>
      <p>
        Note that this is a cypermethrin product without an IGR, so it does not prevent egg and larval development in the same way as Indorex or Acclaim. For the most comprehensive treatment, use Formula C for the residual barrier and consider combining it with an IGR aerosol for the carpet areas where flea eggs are concentrated.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Maximum coverage — treats a large house multiple times</li>
        <li>Professional-strength cypermethrin</li>
        <li>Long-lasting residual protection</li>
        <li>Multi-pest: also effective on other crawling insects</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Requires a pump sprayer (not included)</li>
        <li>No IGR — does not prevent egg development</li>
        <li>Needs mixing — more effort than aerosol</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-natural">Best Natural — Johnson's Household Flea Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Johnson's Household Flea Spray"
          rank={5}
          rating={3.9}
          features={[
            'Plant-based active ingredients',
            'Lower toxicity — safer around children and pets',
            'Pleasant scent — no harsh chemical odour',
            'Kills fleas, ants, and other crawling insects',
          ]}
          price="£8"
          asin="B07PPWJH21"
          bestFor="Best Natural"
        />
      </div>
      <p>
        For households with concerns about synthetic chemicals — perhaps because of young children, sensitive pets, or personal preference — Johnson's Household Flea Spray offers a plant-based alternative. It uses naturally derived insecticides that kill fleas on contact without the strong chemical odour associated with pyrethroid sprays. The pleasant scent is a genuine advantage in living spaces where you want to treat without the room smelling like a chemical plant for hours afterwards.
      </p>
      <p>
        The trade-off is effectiveness. Natural sprays kill fleas on direct contact but typically lack the powerful residual action and IGR components of synthetic products. This means you will need to reapply more frequently and may need to combine the natural spray with other methods (thorough vacuuming, hot-washing pet bedding, diatomaceous earth in cracks) for comprehensive flea control.
      </p>
      <p>
        For a minor flea problem — perhaps you have found a few fleas after a summer walk with your dog — a natural spray combined with diligent vacuuming and pet treatment may be all you need. For a serious infestation with fleas jumping off carpets, a synthetic IGR spray will be significantly more effective.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Plant-based formula with lower toxicity</li>
        <li>Pleasant scent, no harsh chemical odour</li>
        <li>Safe for use in sensitive environments</li>
        <li>Multi-pest: also kills ants and crawling insects</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Weaker residual action than synthetic products</li>
        <li>No IGR — does not prevent egg development</li>
        <li>Not sufficient for serious infestations</li>
      </ul>

      {/* Product 6 */}
      <h2 id="best-value">Best Value — Bob Martin Flea Spray</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Bob Martin Home Flea Spray"
          rank={6}
          rating={4.0}
          features={[
            'Budget-friendly price with IGR included',
            'Kills fleas and prevents re-infestation',
            'Ready-to-use aerosol spray',
            'Trusted pet care brand',
          ]}
          price="£7"
          asin="B003ZG7CMA"
          bestFor="Best Budget"
        />
      </div>
      <p>
        Bob Martin Home Flea Spray proves that you do not need to spend a fortune to get effective flea control with an IGR. At around £7, it is the most affordable IGR-containing flea spray on our list — and the inclusion of an insect growth regulator at this price point is genuinely impressive. The IGR disrupts the flea lifecycle by preventing eggs and larvae from developing, while the contact insecticide deals with adult fleas immediately.
      </p>
      <p>
        Bob Martin is a well-established UK pet care brand, and their flea spray is available in most supermarkets and pet shops alongside Amazon. The ready-to-use aerosol format is straightforward — spray onto carpets, soft furnishings, and pet bedding areas, then allow to dry before re-entering the room. Coverage per can is slightly less than the premium products, so you may need two cans for a larger house.
      </p>
      <p>
        For budget-conscious pet owners dealing with a flea problem, Bob Martin represents the best balance of price and effectiveness. The IGR component elevates it well above basic contact-only sprays, and the trusted brand name provides reassurance.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Includes IGR at a budget-friendly price</li>
        <li>Trusted Bob Martin brand</li>
        <li>Easy-to-use aerosol format</li>
        <li>Widely available in supermarkets</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Less coverage per can than premium sprays</li>
        <li>Shorter IGR duration than Indorex/Acclaim</li>
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
