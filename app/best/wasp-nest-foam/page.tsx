import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Wasp Nest Killer Foam UK 2026: Tested & Recommended | PestPro Index',
    description:
      'Our pick of the best wasp nest killer foams and sprays available in the UK for 2026. Long-range foams, powders, and aerosols reviewed with safety advice and application tips.',
    alternates: {
      canonical: 'https://pestproindex.com/best/wasp-nest-foam',
    },
    openGraph: {
      title: 'Best Wasp Nest Killer Foam UK 2026: Tested & Recommended | PestPro Index',
      description:
        'Our pick of the best wasp nest killer foams and sprays available in the UK for 2026. Long-range foams, powders, and aerosols reviewed with safety advice and application tips.',
      url: 'https://pestproindex.com/best/wasp-nest-foam',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Wasp Nest Killer Foam UK 2026: Tested & Recommended',
  description:
    'Our pick of the best wasp nest killer foams and sprays available in the UK for 2026. Long-range foams, powders, and aerosols reviewed with safety advice and application tips.',
  datePublished: '2026-03-30',
  dateModified: '2026-03-30',
  author: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/best/wasp-nest-foam' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Best', item: 'https://pestproindex.com/best' },
    { '@type': 'ListItem', position: 3, name: 'Best Wasp Nest Killer Foam UK 2026', item: 'https://pestproindex.com/best/wasp-nest-foam' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best wasp nest killer foam in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rentokil Wasp Nest Killer Foam is the best overall option for UK consumers. It delivers a long-range expanding foam that seals the nest entrance and kills wasps inside through contact with the insecticide. The foam format is safer than liquid sprays because it reduces the number of escaping wasps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to remove a wasp nest yourself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Small, accessible wasp nests (e.g. under a garden shed roof or in an air brick) can be treated safely by a confident homeowner using the right products and protective clothing. However, nests at height (requiring a ladder), nests in enclosed roof spaces, very large nests (bigger than a football), and nests where you have a wasp allergy should always be left to a professional pest controller. A professional treatment typically costs £50-£80 and takes about 30 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to treat a wasp nest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treat a wasp nest at dusk or dawn when wasps are least active and most of the colony is inside the nest. Never attempt to treat a nest during the middle of the day when wasps are at their most active and aggressive. Evening treatment also means returning wasps will encounter the insecticide as they re-enter the treated nest overnight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does wasp nest foam take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most wasp nest foams kill wasps within minutes of contact. However, it can take 24-48 hours for the entire colony to die, as wasps that were away from the nest when you treated it need to return and make contact with the insecticide. Do not approach or disturb the nest for at least 24 hours after treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to remove the nest after treating it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you do not need to remove a treated wasp nest. Once the colony is dead, the nest is harmless — it will not be reused by wasps next year. If it is in a visible location and you want to remove it for aesthetic reasons, wait at least 48 hours after treatment to ensure all wasps are dead, then knock it down with a long pole or scrape it off the surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is wasp nest foam or powder better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foam is generally better for visible nests with a clear entrance hole — it seals the entrance, trapping wasps inside with the insecticide. Powder (such as Ficam D or Rentokil wasp powder) is better for nests in cavities, wall voids, and underground — you puff the powder into the entrance and returning wasps carry it into the nest on their bodies. For most above-ground nests, foam is the easier and more effective option.',
      },
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Wasp Nest Killers at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Rentokil Wasp Nest Killer Foam' },
  { id: 'best-range', title: 'Best Long-Range — Raid Wasp & Hornet Killer' },
  { id: 'best-powder', title: 'Best Powder — Pest Expert Formula P Wasp Powder' },
  { id: 'best-value', title: 'Best Value — Zero In Wasp Nest Killer' },
  { id: 'best-professional', title: 'Best Professional — Digrain Wasp Nest Destroyer' },
  { id: 'buying-guide', title: 'How to Choose the Right Wasp Nest Killer' },
  { id: 'safety', title: 'Safety: How to Treat a Wasp Nest Safely' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function BestWaspNestFoamPage() {
  return (
    <GuideLayout
      title="Best Wasp Nest Killer Foam UK 2026: Tested & Recommended"
      subtitle="Our pick of the most effective wasp nest killer foams and sprays available in the UK, with safety advice and application tips"
      lastUpdated="March 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Restaurant Pest Control: UK Compliance Guide', href: '/guides/restaurant-pest-control' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
      ]}
      relatedProducts={[
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Ant Gel Bait UK 2026', href: '/best/ant-gel-bait' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
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
        Wasp nests are one of the most common summer pest problems in the UK. By late July and August, a mature Common Wasp (<em>Vespula vulgaris</em>) nest can contain 5,000-10,000 workers, all of which become increasingly aggressive as the colony reaches peak size. According to the British Pest Control Association, wasp-related callouts spike dramatically between June and September each year, with thousands of homeowners stung while attempting DIY nest removal.
      </p>
      <p>
        The safest and most effective way to destroy a wasp nest yourself is with a specialist nest killer product — either an expanding foam that seals the entrance and delivers insecticide directly into the nest, or an insecticidal powder that returning wasps carry inside on their bodies. Both approaches kill the colony from within, which is far more effective and safer than trying to knock down or physically remove the nest.
      </p>
      <p>
        To compile this guide, we evaluated the leading wasp nest killer products on Amazon UK based on <strong>killing effectiveness</strong>, <strong>application range</strong> (how far you can stand from the nest), <strong>safety features</strong>, and <strong>genuine customer reviews</strong>. We also consulted BPCA guidance on safe wasp nest treatment. Every product listed is available on Amazon UK at the time of writing.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>If you are allergic to wasp stings, do NOT attempt to treat a nest yourself — even with protective clothing. Call a professional pest controller. A single sting can cause anaphylaxis in allergic individuals, which is a life-threatening medical emergency.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Wasp Nest Killers at a Glance</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rentokil Wasp Nest Killer Foam</td>
            <td>Expanding foam</td>
            <td>Best Overall</td>
            <td>~£8</td>
          </tr>
          <tr>
            <td>Raid Wasp & Hornet Killer</td>
            <td>Long-range spray</td>
            <td>Best Long-Range</td>
            <td>~£7</td>
          </tr>
          <tr>
            <td>Pest Expert Formula P Wasp Powder</td>
            <td>Insecticidal powder</td>
            <td>Best Powder</td>
            <td>~£10</td>
          </tr>
          <tr>
            <td>Zero In Wasp Nest Killer</td>
            <td>Aerosol foam</td>
            <td>Best Value</td>
            <td>~£5</td>
          </tr>
          <tr>
            <td>Digrain Wasp Nest Destroyer</td>
            <td>Professional foam</td>
            <td>Best Professional</td>
            <td>~£15</td>
          </tr>
        </tbody>
      </table>

      <div className="not-prose">
        <StatCallout value="£50–£80" label="Typical cost of professional wasp nest treatment in the UK" />
      </div>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Rentokil Wasp Nest Killer Foam</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Rentokil Wasp Nest Killer Foam"
          rank={1}
          rating={4.3}
          features={[
            'Expanding foam seals nest entrance and kills on contact',
            'Reaches nests up to 2 metres away',
            'Fast-acting — kills wasps within minutes',
            'Trusted Rentokil brand with clear safety instructions',
          ]}
          price="£8"
          asin="B00GKHI2PW"
          bestFor="Best Overall"
        />
      </div>
      <p>
        Rentokil Wasp Nest Killer Foam takes our top spot for its combination of effectiveness, safety, and ease of use. The expanding foam format is the key advantage — when you spray it into the nest entrance, the foam expands to seal the opening, trapping wasps inside with the insecticide. This means fewer wasps escape during treatment, which significantly reduces the risk of being stung. The active insecticide then kills wasps through direct contact as they try to exit through the foam barrier.
      </p>
      <p>
        The spray reaches nests up to approximately 2 metres away, allowing you to treat from a safe distance. While this is not as far as some long-range jet sprays, it is sufficient for most accessible ground-level and low-level nests — under shed roofs, in air bricks, in garden walls, and similar locations. The foam is clearly visible when applied, so you can see exactly where it has gone and whether you have covered the entrance fully.
      </p>
      <p>
        Rentokil's instructions are clear and comprehensive, covering when to treat (dusk is best), what protective clothing to wear, and what to do if wasps become aggressive during treatment. At around £8, it is excellent value for a product that can resolve a wasp nest problem in a single application.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Expanding foam seals entrance — fewer escaping wasps</li>
        <li>Fast-acting contact kill</li>
        <li>Trusted brand with excellent instructions</li>
        <li>Excellent value at around £8</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>2-metre range limits use on elevated nests</li>
        <li>Foam can be messy on surrounding surfaces</li>
        <li>Single can — may not be enough for very large nests</li>
      </ul>

      {/* Product 2 */}
      <h2 id="best-range">Best Long-Range — Raid Wasp & Hornet Killer</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Raid Wasp & Hornet Killer Spray"
          rank={2}
          rating={4.2}
          features={[
            'Long-range jet spray reaches up to 4 metres',
            'Instant knockdown — kills wasps on contact',
            'Powerful stream penetrates nest structure',
            'Globally trusted brand',
          ]}
          price="£7"
          asin="B0DJGNRR7T"
          bestFor="Best Long-Range"
        />
      </div>
      <p>
        When you need maximum distance between you and an angry wasp nest, Raid Wasp & Hornet Killer delivers a powerful jet stream that reaches up to 4 metres — double the range of most foam products. This extra distance provides a critical safety margin, especially for nests that are slightly elevated or in locations where you cannot easily retreat. The jet spray fires a concentrated stream directly into the nest entrance, delivering a lethal dose of insecticide deep inside the nest structure.
      </p>
      <p>
        The trade-off compared to foam is that a liquid spray does not seal the nest entrance, so wasps can escape during and after treatment. This makes the timing of your application even more important — treating at dusk when most wasps are inside the nest and least active is essential. Despite this, the powerful knockdown effect means wasps that fly out of the treated nest are typically disorientated and die within minutes.
      </p>
      <p>
        Raid is a globally recognised pest control brand, and their wasp killer is one of the best-selling products in this category. The can provides enough product for treating one medium-to-large nest, and the jet nozzle gives you precise, targeted application even at maximum range.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>4-metre range — maximum safe distance</li>
        <li>Powerful jet penetrates deep into nest</li>
        <li>Instant knockdown of escaping wasps</li>
        <li>Trusted global brand</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Does not seal the entrance — wasps can escape</li>
        <li>Liquid spray less contained than foam</li>
        <li>Must treat at dusk for safety</li>
      </ul>

      {/* Product 3 */}
      <h2 id="best-powder">Best Powder — Pest Expert Formula P Wasp Powder</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Pest Expert Formula P Wasp Killer Powder"
          rank={3}
          rating={4.4}
          features={[
            'Professional-strength permethrin powder',
            'Ideal for cavity nests, underground nests, and wall voids',
            'Wasps carry powder into nest — kills entire colony',
            'Long-lasting residual action',
          ]}
          price="£10"
          asin="B073JPVRFB"
          bestFor="Best Powder"
        />
      </div>
      <p>
        Powder is the professional's weapon of choice for wasp nests in cavities — inside walls, under roof tiles, in the ground, or in any location where you cannot see the nest itself but can see wasps entering and exiting through a hole. Pest Expert Formula P is a professional-strength permethrin powder that you puff into the nest entrance. Returning wasps walk through the powder, picking it up on their bodies and legs, and carry it deep into the nest where it spreads to the queen and other workers. Within 24-48 hours, the entire colony is dead.
      </p>
      <p>
        This "transfer effect" is what makes powder so effective for hidden nests. You do not need to reach the nest itself — you just need to treat the entrance hole. The powder clings to the wasps' bodies and is spread throughout the nest as they move around and make contact with other colony members. It is the same principle that professional pest controllers use when treating cavity nests.
      </p>
      <p>
        The powder also provides long-lasting residual protection — any new wasps that attempt to use the treated entrance will encounter the powder and die. This is particularly useful for preventing new colonies from establishing in the same location the following year.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Best option for cavity and underground nests</li>
        <li>Transfer effect kills the entire colony</li>
        <li>Professional-strength permethrin</li>
        <li>Long-lasting residual protection</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Needs a puffer applicator for best results</li>
        <li>Not suitable for visible hanging nests (use foam instead)</li>
        <li>Takes 24-48 hours to kill the full colony</li>
      </ul>

      {/* Product 4 */}
      <h2 id="best-value">Best Value — Zero In Wasp Nest Killer</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Zero In Wasp Nest Killer Spray"
          rank={4}
          rating={4.0}
          features={[
            'Budget-friendly wasp nest treatment',
            'Fast-acting aerosol spray',
            'Kills wasps and destroys nests',
            'Ready-to-use — no preparation needed',
          ]}
          price="£5"
          asin="B004US3F1Y"
          bestFor="Best Budget"
        />
      </div>
      <p>
        At around £5, Zero In Wasp Nest Killer is the most affordable option on our list — and it does the job effectively for small to medium nests that are easily accessible. The aerosol spray delivers insecticide directly into the nest entrance, killing wasps on contact. It is a straightforward, no-frills product that works.
      </p>
      <p>
        The spray range is shorter than the Raid jet spray and it does not produce the sealing effect of a foam product, so it is best suited for nests you can approach safely within 1-2 metres. For a small nest in a shed, garden wall, or air brick that you can reach easily at dusk, Zero In is a perfectly adequate and affordable solution. At this price, you can even buy two cans for the cost of one premium product.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Very affordable at around £5</li>
        <li>Simple, ready-to-use aerosol</li>
        <li>Effective on small to medium nests</li>
        <li>Widely available</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Shorter spray range than premium products</li>
        <li>No foam sealing effect</li>
        <li>May need two cans for larger nests</li>
      </ul>

      {/* Product 5 */}
      <h2 id="best-professional">Best Professional — Digrain Wasp Nest Destroyer</h2>
      <div className="not-prose my-6">
        <ProductCard
          name="Digrain Wasp Nest Destroyer Foam"
          rank={5}
          rating={4.5}
          features={[
            'Professional-grade expanding foam',
            'High-concentration insecticide for rapid kill',
            'Large can — enough for multiple nests',
            'Used by pest control professionals',
          ]}
          price="£15"
          asin="B010E2GCIM"
          bestFor="Best Professional-Grade"
        />
      </div>
      <p>
        Digrain Wasp Nest Destroyer is the product you will find in many professional pest controllers' vans. It delivers a high-concentration expanding foam that seals the nest entrance and kills the colony rapidly. The larger can size provides significantly more product than consumer alternatives, making it suitable for treating larger nests or multiple nests on a single property.
      </p>
      <p>
        The professional-grade formulation contains a higher concentration of active ingredient than standard consumer products, which means faster knockdown and more reliable colony elimination — particularly important for large, mature nests with thousands of workers. The expanding foam fills the nest entrance completely, ensuring comprehensive insecticide coverage inside the nest structure.
      </p>
      <p>
        At £15, it costs more than consumer alternatives but provides significantly more product and higher potency. If you have a large nest or multiple nests to treat, Digrain is the most cost-effective professional-grade option.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Professional-grade concentration</li>
        <li>Large can — treats bigger or multiple nests</li>
        <li>Expanding foam seals entrance effectively</li>
        <li>Fast, reliable colony elimination</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Higher price than consumer products</li>
        <li>Overkill for a small, single nest</li>
        <li>Professional product — less beginner-friendly labelling</li>
      </ul>

      {/* Buying Guide */}
      <h2 id="buying-guide">How to Choose the Right Wasp Nest Killer</h2>

      <h3>Foam vs Spray vs Powder</h3>
      <p>
        <strong>Foam</strong> is best for visible nests with a clear entrance — the expanding foam seals the hole and traps wasps inside with the insecticide. <strong>Jet spray</strong> is best when you need maximum range (4+ metres) or cannot approach the nest closely. <strong>Powder</strong> is best for cavity nests (in walls, underground, under roof tiles) where the transfer effect kills the hidden colony. For most above-ground nests, foam is the safest and most effective option.
      </p>

      <h3>Spray Range</h3>
      <p>
        The further you can stand from the nest, the safer you are. Foam products typically reach 1-2 metres, while jet sprays can reach 3-4 metres. If the nest is at height or in a difficult-to-approach location, choose a long-range jet spray. For ground-level nests that you can safely approach, foam provides better nest penetration and sealing.
      </p>

      <h3>Nest Location</h3>
      <p>
        Ground-level or low-level nests (under sheds, in garden walls, air bricks): foam or powder. High-level nests (under eaves, in soffits): long-range jet spray. Underground nests: powder. Cavity nests (inside walls): powder. Visible hanging nests: foam or jet spray.
      </p>

      {/* Safety */}
      <h2 id="safety">Safety: How to Treat a Wasp Nest Safely</h2>

      <h3>Timing</h3>
      <p>
        Always treat at dusk or dawn — wasps are least active and most of the colony is inside the nest. Never treat during the day when wasps are actively foraging and at their most aggressive.
      </p>

      <h3>Protective Clothing</h3>
      <p>
        Wear long sleeves, trousers tucked into socks, closed shoes, gloves, and a hat. A beekeeping veil is ideal if you have one, but not essential. Avoid dark clothing — wasps are more aggressive towards dark colours. Light-coloured, smooth-textured clothing is least likely to provoke a sting.
      </p>

      <h3>Plan Your Escape Route</h3>
      <p>
        Before treating, identify a clear path to retreat to if wasps become aggressive. Never use a ladder to treat a wasp nest — if wasps attack, you cannot retreat safely from a ladder. If the nest requires a ladder to reach, call a professional.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Never use a ladder to treat a wasp nest. If wasps become aggressive while you are on a ladder, you cannot retreat safely. Nests at height should always be treated by a professional pest controller.</p>
        </Callout>
      </div>

      <h3>After Treatment</h3>
      <p>
        Do not approach the nest for at least 24 hours after treatment. Some wasps may still be alive and aggressive. After 24-48 hours, observe from a distance — if there is no wasp activity at the entrance, the colony is dead. You do not need to remove the nest unless you want to for aesthetic reasons.
      </p>

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What is the best wasp nest killer foam in the UK?</h3>
      <p>
        Rentokil Wasp Nest Killer Foam is the best overall option. It delivers expanding foam that seals the nest entrance and kills wasps through contact with the insecticide, reducing the number of escaping wasps.
      </p>

      <h3>Is it safe to remove a wasp nest yourself?</h3>
      <p>
        Small, accessible nests can be treated safely with the right products and protective clothing. However, nests at height, in enclosed roof spaces, very large nests, and situations where you have a wasp allergy should always be handled by a professional. Professional treatment typically costs £50-£80.
      </p>

      <h3>When is the best time to treat a wasp nest?</h3>
      <p>
        Treat at dusk or dawn when wasps are least active and most of the colony is inside the nest. Never attempt treatment during the middle of the day.
      </p>

      <h3>How long does wasp nest foam take to work?</h3>
      <p>
        Foam kills wasps within minutes on contact. However, it takes 24-48 hours for the entire colony to die. Do not approach the nest for at least 24 hours after treatment.
      </p>

      <h3>Do I need to remove the nest after treating it?</h3>
      <p>
        No. A treated, dead nest is harmless and will not be reused. Remove it only if you want to for aesthetic reasons, and wait at least 48 hours after treatment before doing so.
      </p>

      <h3>Is wasp nest foam or powder better?</h3>
      <p>
        Foam is better for visible nests with clear entrances. Powder is better for cavity nests, wall voids, and underground nests where the transfer effect carries the insecticide deep inside the hidden nest.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Nest Too Big or Too High?"
          subtext="A professional pest controller can safely treat wasp nests at height, in roof spaces, and in other difficult locations — typically for £50-£80"
        />
      </div>

      <div className="not-prose mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
        <p className="text-gray-700 mb-3">Want the full picture on wasp nest removal?</p>
        <a
          href="/guides/wasp-nest-removal"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Wasp Nest Removal — Complete UK Guide →
        </a>
      </div>
    </GuideLayout>
  );
}
