import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Cockroach Gel Bait UK 2026: Kill the Nest | PestPro Index',
    description:
      'Our pick of the best cockroach gel baits available in the UK for 2026. Professional-grade gels, bait stations, and IGR products reviewed with application advice.',
    alternates: {
      canonical: 'https://pestproindex.com/best/cockroach-gel-bait',
    },
    openGraph: {
      title: 'Best Cockroach Gel Bait UK 2026: Kill the Nest | PestPro Index',
      description:
        'Our pick of the best cockroach gel baits available in the UK for 2026. Professional-grade gels, bait stations, and IGR products reviewed with application advice.',
      url: 'https://pestproindex.com/best/cockroach-gel-bait',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Cockroach Gel Bait UK 2026: Kill the Nest',
  description: 'Our pick of the best cockroach gel baits available in the UK for 2026. Professional-grade gels, bait stations, and IGR products reviewed with application advice.',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/best/cockroach-gel-bait' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://pestproindex.com/best' },
    { '@type': 'ListItem', position: 3, name: 'Best Cockroach Gel Bait UK 2026', item: 'https://pestproindex.com/best/cockroach-gel-bait' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best cockroach gel bait in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Advion Cockroach Gel Bait is widely considered the most effective cockroach gel available in the UK. Its indoxacarb active ingredient is highly palatable to both German and Oriental cockroaches, and its delayed-action formula allows maximum spread through the colony via the "cascade effect" — cockroaches that eat poisoned individuals also die.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does cockroach gel bait work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cockroach gel bait exploits cockroach feeding behaviour. Cockroaches eat the gel and return to their harbourage (hiding place). The poison takes 24-72 hours to kill, during which time the cockroach excretes contaminated droppings and vomit that other cockroaches consume. When the poisoned cockroach dies, other cockroaches eat the body — spreading the poison further. This "cascade effect" can kill cockroaches that never directly contacted the gel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does cockroach gel take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should see a significant reduction in cockroach activity within 3-5 days of applying gel bait. Complete elimination of a moderate infestation typically takes 2-4 weeks. Severe infestations, particularly of German cockroaches, may require multiple gel applications and 4-6 weeks for full control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cockroach gel bait safe to use in kitchens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, cockroach gel bait is specifically designed for use in kitchens and food preparation areas. The gel is applied in small dots in concealed locations — behind units, inside cupboard hinges, under appliances, and in cracks. The tiny amounts used and the concealed placement mean it does not contaminate food or food preparation surfaces.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I have German or Oriental cockroaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'German cockroaches are small (10-15mm), light brown with two dark stripes behind the head, and are found almost exclusively indoors in warm, humid areas like kitchens and bathrooms. Oriental cockroaches are larger (20-25mm), very dark brown or black, and are often found in cooler areas like basements, drains, and ground floors. German cockroaches are by far the more serious indoor pest in the UK.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Cockroach Gels at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Advion Cockroach Gel Bait' },
  { id: 'best-alternative', title: 'Best Alternative — NOPE! CP Cockroach Killer Spray' },
  { id: 'best-kit', title: 'Best Kit — Pest Expert Cockroach Killer Kit (Advanced)' },
  { id: 'best-spray', title: 'Best Spray — Rentokil Insectrol Insect Killer Spray' },
  { id: 'best-budget', title: 'Best Budget — Zero In Ant & Cockroach Killer' },
  { id: 'buying-guide', title: 'How to Choose the Right Cockroach Gel' },
  { id: 'application', title: 'How to Apply Cockroach Gel Effectively' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestCockroachGelBaitPage() {
  return (
    <GuideLayout
      title="Best Cockroach Gel Bait UK 2026: Kill the Nest"
      subtitle="Our pick of the most effective cockroach gel baits available in the UK — professional-grade gels that eliminate entire infestations"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Hotel Pest Control: UK Compliance Guide', href: '/guides/hotel-pest-control' },
        { title: 'Landlord Pest Control: UK Compliance Guide', href: '/guides/landlord-pest-control' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
      ]}
      relatedProducts={[
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Ant Gel Bait UK 2026', href: '/best/ant-gel-bait' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Commercial Insect Monitors UK 2026', href: '/best/commercial-insect-monitors' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is reader-supported. When you buy through links on this page, we may earn a small commission at no extra cost to you. As an Amazon Associate, PestPro Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Cockroaches are one of the most challenging pests to eliminate. They are nocturnal, they hide in the tightest cracks and crevices during the day, they breed rapidly, and they are increasingly resistant to many common insecticides. According to the British Pest Control Association, cockroach callouts in the UK have increased significantly in recent years, driven by increased international travel, online food delivery, and milder winters.
      </p>
      <p>
        Gel bait is the professional pest controller's weapon of choice against cockroaches — and for good reason. Unlike sprays that only kill cockroaches on direct contact, gel bait exploits the cockroach "cascade effect." Cockroaches eat the gel, return to their harbourage, and die 24-72 hours later. Other cockroaches then consume the contaminated droppings, vomit, and body of the dead cockroach — and die in turn. A single dot of gel can kill dozens of cockroaches through this cascade, reaching deep into harbourages that spray can never penetrate.
      </p>
      <p>
        To compile this guide, we evaluated the leading cockroach gel baits on Amazon UK based on <strong>active ingredient effectiveness</strong>, <strong>palatability to UK cockroach species</strong> (German and Oriental), <strong>ease of application</strong>, and <strong>genuine customer reviews</strong>. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>If you see cockroaches during the day, you likely have a serious infestation — cockroaches are nocturnal and only venture out in daylight when the harbourage is overcrowded. Consider calling a professional alongside DIY treatment.</p>
        </Callout>
      </div>

      <h2 id="at-a-glance">Best Cockroach Gels at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Active Ingredient</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Advion Cockroach Gel Bait 4x30g</td>
            <td>Indoxacarb 0.6%</td>
            <td>Best Overall</td>
            <td>Check price</td>
          </tr>
          <tr>
            <td>NOPE! CP Cockroach Killer Spray 500ml</td>
            <td>Cypermethrin</td>
            <td>Best Alternative</td>
            <td>Check price</td>
          </tr>
          <tr>
            <td>Pest Expert Cockroach Killer Kit (Advanced)</td>
            <td>Gel + spray + powder</td>
            <td>Best Kit</td>
            <td>Check price</td>
          </tr>
          <tr>
            <td>Rentokil Insectrol Insect Killer Spray 250ml</td>
            <td>Permethrin + d-allethrin</td>
            <td>Best Spray</td>
            <td>Check price</td>
          </tr>
          <tr>
            <td>Zero In Ant & Cockroach Killer 1.5L Ready-to-Use</td>
            <td>Cypermethrin + benzalkonium chloride</td>
            <td>Best Budget</td>
            <td>Check price</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="24–72 hrs" label="Time for the cascade effect to start killing cockroaches after gel application" />
      </div>

      <h2 id="best-overall">Best Overall — Advion Cockroach Gel Bait 4x30g Tubes</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Advion Cockroach Gel Bait 4x30g Tubes (Syngenta)"
          rank={1}
          rating={4.6}
          features={[
            "Indoxacarb 0.6% — the professional standard worldwide",
            "Cascade effect transfers bait to up to 40 cockroaches per treated insect",
            "Targets German, American and gel-bait-averse species",
            "4x30g tubes — used by professional pest controllers worldwide",
          ]}
          price="Check price"
          asin="B0148W0WOE"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Advion is the undisputed number one cockroach gel bait worldwide, and it is the product you will find in virtually every professional pest controller's kit in the UK. The indoxacarb 0.6% active ingredient is uniquely effective because it is highly palatable to cockroaches — they eat it eagerly — and it kills with a perfectly calibrated delay that maximises the cascade effect.
      </p>
      <p>
        Once consumed, treated cockroaches transfer the bait to up to 40 others before dying. The cascade effect is what makes Advion so devastating: a cockroach eats the gel, returns to the harbourage, and dies within 24-72 hours. Before and after death, it contaminates the harbourage with poisoned droppings and vomit. Other cockroaches consume these contaminated materials and die in turn. This 4x30g tube pack from Syngenta provides enough gel for multiple rooms and repeat treatments.
      </p>
      <p>
        Advion targets German, American, and even gel-bait-averse cockroach species that have learned to avoid other baits. The syringe applicator allows precise placement in cracks, crevices, and harbourage points — behind cookers, inside cupboard hinges, under sinks, and around pipe entry points.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional standard — used by pest controllers worldwide</li>
        <li>Devastating cascade effect kills entire harbourages</li>
        <li>Effective against gel-bait-averse species</li>
        <li>4 tubes provide enough gel for thorough treatment</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price than consumer products</li>
        <li>Professional packaging — less beginner-friendly</li>
        <li>Requires precise crack-and-crevice placement for best results</li>
      </ul>

      <h2 id="best-alternative">Best Alternative — NOPE! CP Cockroach Killer Spray 500ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="NOPE! CP Cockroach Killer Spray 500ml"
          rank={2}
          rating={4.5}
          features={[
            "Odourless cypermethrin formula — kills on contact",
            "3-month residual barrier on treated surfaces",
            "Disinfects as well as kills — ideal for kitchens and bathrooms",
            "Use alongside Advion gel for combined colony and route treatment",
          ]}
          price="Check price"
          asin="B0B1QNQ7Y1"
          bestFor="Best Alternative"
        />
      </div>
      <p>
        NOPE! CP Cockroach Killer Spray is an odourless cypermethrin spray that kills cockroaches on contact and leaves a 3-month residual barrier on treated surfaces. Unlike many insecticide sprays, it is genuinely odourless — a major advantage when treating kitchens and bathrooms where strong chemical smells are unacceptable. The formula also disinfects treated surfaces, which is a valuable bonus in food preparation areas.
      </p>
      <p>
        Use alongside Advion gel for a combined treatment approach that targets both the colony and foraging routes. Apply NOPE! CP along skirting boards, around pipe entry points, behind appliances, and along any routes where you have seen cockroach activity. The 3-month residual means cockroaches crossing treated surfaces weeks later will still be killed, providing ongoing barrier protection while the gel bait works on the colony through the cascade effect.
      </p>
      <p>
        The 500ml bottle provides enough spray for thorough treatment of a kitchen and bathroom, with enough left over for follow-up applications. For anyone who wants an effective supporting spray to complement their gel bait treatment, NOPE! CP is an excellent choice that avoids the strong chemical odour of many competitors.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Genuinely odourless — ideal for kitchens and bathrooms</li>
        <li>3-month residual barrier on treated surfaces</li>
        <li>Disinfects as well as kills</li>
        <li>Effective supporting product alongside Advion gel bait</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Spray alone will not eliminate a colony — use with gel bait</li>
        <li>Must not be sprayed near gel bait placements</li>
        <li>Contact kill only — no cascade effect</li>
      </ul>

      <h2 id="best-kit">Best Kit — Pest Expert Cockroach Killer Kit (Advanced)</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Cockroach Killer Kit (Advanced)"
          rank={3}
          rating={4.3}
          features={[
            "Complete treatment kit from the UK's leading pest control brand",
            "Combines gel bait, spray and powder for comprehensive coverage",
            "Designed for heavy infestations in domestic and commercial kitchens",
            "Includes step-by-step treatment guide",
          ]}
          price="Check price"
          asin="B071K8X44X"
          bestFor="Best Kit"
        />
      </div>
      <p>
        For a serious cockroach infestation that needs a multi-pronged attack, the Pest Expert Cockroach Killer Kit (Advanced) provides a complete treatment package from the UK's leading pest control brand. The kit combines gel bait, spray and powder for comprehensive treatment of heavy infestations in domestic and commercial kitchens — this three-format approach mirrors professional pest control methodology and is far more effective than using any single product alone.
      </p>
      <p>
        The gel bait targets the colony through the cascade effect — cockroaches eat the gel, return to the harbourage, and spread the poison to others through contaminated droppings and cannibalism. The spray creates a residual barrier along foraging routes, skirting boards, door frames, and pipe entry points. The powder treats voids, cracks and difficult-to-reach areas where cockroaches harbour during the day. Together, these three methods provide comprehensive coverage that attacks the infestation from every angle.
      </p>
      <p>
        The included step-by-step treatment guide walks you through exactly where and how to apply each product for maximum effectiveness. This is the ideal choice for anyone dealing with a moderate to severe cockroach problem who wants professional-grade treatment in a single purchase.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Comprehensive gel + spray + powder approach</li>
        <li>Targets harbourage, foraging routes and voids</li>
        <li>Everything in one purchase with step-by-step guide</li>
        <li>Professional-strength from the UK's leading pest control brand</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price than individual products</li>
        <li>More effort to apply all three formats correctly</li>
        <li>May be overkill for a minor problem</li>
      </ul>

      <h2 id="best-spray">Best Spray — Rentokil Insectrol Insect Killer Spray 250ml</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil Insectrol Insect Killer Spray 250ml"
          rank={4}
          rating={4.0}
          features={[
            "Trusted Rentokil formulation with permethrin and d-allethrin",
            "Kills cockroaches, fleas, ants and earwigs on contact",
            "Long-lasting residual activity on treated surfaces",
            "Spray into cracks, crevices and harbourage areas",
          ]}
          price="Check price"
          asin="B000TARC7A"
          bestFor="Best Spray"
        />
      </div>
      <p>
        Rentokil Insectrol is a trusted formulation containing permethrin and d-allethrin that kills cockroaches on contact with long-lasting residual activity. While gel bait is the primary weapon for colony elimination, Insectrol excels at immediate knockdown of visible cockroaches and as a targeted treatment for cracks, crevices and harbourage areas where cockroaches hide during the day.
      </p>
      <p>
        The dual active ingredient formula provides both fast knockdown (d-allethrin) and lasting residual protection (permethrin). Spray into cracks, crevices and harbourage areas — behind cookers, under sinks, around pipe entry points, and along skirting boards. The residual activity means cockroaches crossing treated surfaces days later will also be killed. Use alongside Advion gel bait for a comprehensive treatment approach, but keep spray and gel in separate zones to avoid repelling cockroaches away from the bait.
      </p>
      <p>
        Rentokil Insectrol also kills fleas, ants and earwigs, making it a versatile addition to your pest control toolkit. As one of the most trusted names in UK pest control, Rentokil's consumer formulations are designed for safe indoor use when applied according to the label.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dual active ingredients for fast knockdown and lasting residual</li>
        <li>Trusted Rentokil brand</li>
        <li>Versatile — kills cockroaches, fleas, ants and earwigs</li>
        <li>Targeted crack-and-crevice application</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Spray alone will not eliminate a colony</li>
        <li>Must not be used near gel bait placements</li>
        <li>250ml is a smaller can — may need multiples for large areas</li>
      </ul>

      <h2 id="best-budget">Best Budget — Zero In Ant & Cockroach Killer 1.5L Ready-to-Use</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zero In Ant & Cockroach Killer 1.5L Ready-to-Use"
          rank={5}
          rating={4.0}
          features={[
            "Large 1.5L pressurised spray with adjustable nozzle",
            "Cypermethrin and benzalkonium chloride antibacterial formula",
            "Fan spray or crack-and-crevice treatment modes",
            "Suitable for indoor and outdoor use",
          ]}
          price="Check price"
          asin="B0B71D3QS1"
          bestFor="Best Budget"
        />
      </div>
      <p>
        Zero In Ant & Cockroach Killer is a large 1.5L pressurised spray with an adjustable nozzle that switches between fan spray for broad coverage and a targeted stream for crack-and-crevice treatment. The cypermethrin and benzalkonium chloride antibacterial formula kills cockroaches and ants on contact while disinfecting treated surfaces — a useful bonus in kitchens and bathrooms. It is the most affordable option on our list and the generous 1.5L size provides enough spray for thorough treatment of multiple rooms.
      </p>
      <p>
        The adjustable nozzle is a standout feature. Use fan spray mode along skirting boards, around pipe entry points, behind appliances, and along foraging routes for broad barrier coverage. Switch to crack-and-crevice mode for targeted treatment of gaps around pipes, door frames, and other harbourage points. The spray is suitable for both indoor and outdoor use, so you can treat external entry points as well.
      </p>
      <p>
        For best results, use Zero In as a supporting product alongside a gel bait like Advion. The spray handles immediate knockdown and barrier protection while the gel works on eliminating the colony through the cascade effect. As a standalone product, it will kill individual cockroaches but is unlikely to eliminate an established colony on its own.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Most affordable option on our list</li>
        <li>Large 1.5L size — generous coverage</li>
        <li>Adjustable nozzle for fan spray or crack-and-crevice</li>
        <li>Antibacterial formula disinfects treated surfaces</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Spray alone will not eliminate a colony</li>
        <li>Must wait for surfaces to dry before kitchen use</li>
        <li>No cascade effect — contact kill only</li>
      </ul>

      <h2 id="buying-guide">How to Choose the Right Cockroach Gel</h2>

      <h3>Gel vs Spray</h3>
      <p>
        Always use gel bait as your primary weapon. Spray only kills cockroaches on direct contact and provides a residual barrier — useful as a supplement but not sufficient on its own. Gel bait reaches into harbourages via the cascade effect and kills cockroaches that never contacted the gel directly. Use spray as a barrier treatment alongside gel, not instead of it.
      </p>

      <h3>Species Identification</h3>
      <p>
        German cockroaches (small, light brown, indoors only) are the most challenging species and require the most potent gel — Advion or Maxforce Platin. Oriental cockroaches (larger, dark, often near drains) are somewhat easier to control and respond well to any of the products on this list. Correct species identification helps you choose the right treatment approach.
      </p>

      <h3>Severity</h3>
      <p>
        For a few cockroach sightings, gel bait alone is usually sufficient. For a moderate to severe infestation (daily sightings, evidence in multiple rooms), use a multi-format approach: gel + spray + powder. For very severe infestations or infestations in multi-occupancy buildings (flats), professional treatment is strongly recommended.
      </p>

      <h2 id="application">How to Apply Cockroach Gel Effectively</h2>

      <h3>Placement is Everything</h3>
      <p>
        Apply small dots (3mm) in cockroach harbourage points: inside cupboard door hinges, behind cookers and fridges, under sinks, around pipe entry points, along the back edges of drawers, and in any crack wider than 2mm. Cockroaches prefer tight, dark, warm, humid spaces — target these locations specifically.
      </p>

      <h3>Use Many Small Dots, Not Few Large Ones</h3>
      <p>
        Twenty 3mm dots are far more effective than five 10mm blobs. More placement points means more cockroaches encounter the bait. Space dots every 20-30cm in areas of high activity and every 50cm in areas of lower activity.
      </p>

      <h3>Do Not Use Spray Near Gel</h3>
      <p>
        Insecticide spray repels cockroaches. If you spray near your gel placements, cockroaches will avoid the area and will not feed on the gel. Keep spray and gel in separate zones — spray on barriers (doorways, pipe entries), gel in harbourages (inside cupboards, behind appliances).
      </p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best cockroach gel bait in the UK?</h3>
      <p>
        Advion Cockroach Gel is the professional standard and the most effective option. Its indoxacarb active ingredient is highly palatable and kills through the cascade effect, reaching cockroaches deep in harbourages.
      </p>

      <h3>How does cockroach gel bait work?</h3>
      <p>
        Cockroaches eat the gel and die 24-72 hours later. Other cockroaches consume contaminated droppings and dead bodies, spreading the poison through the population. This cascade effect can kill dozens of cockroaches from a single gel dot.
      </p>

      <h3>How long does cockroach gel take to work?</h3>
      <p>
        You should see reduced activity within 3-5 days. Complete elimination of a moderate infestation takes 2-4 weeks. Severe German cockroach infestations may take 4-6 weeks with multiple applications.
      </p>

      <h3>Is cockroach gel safe in kitchens?</h3>
      <p>
        Yes. Gel is applied in tiny dots in concealed locations — behind units, inside hinges, under appliances. The amounts used and concealed placement mean it does not contaminate food or surfaces.
      </p>

      <h3>How do I know if I have German or Oriental cockroaches?</h3>
      <p>
        German cockroaches: small (10-15mm), light brown, two dark stripes, found in warm/humid indoor areas. Oriental cockroaches: larger (20-25mm), very dark brown/black, found in cooler areas near drains and basements.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Cockroaches in a Flat or Shared Building?"
          subtext="Cockroach infestations in multi-occupancy buildings require coordinated professional treatment across all units to prevent re-infestation"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the full picture on cockroach control?</p>
        <a
          href="/guides/how-to-get-rid-of-cockroaches"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          How to Get Rid of Cockroaches — Complete Guide →
        </a>
      </div>
    </GuideLayout>
  );
}
