import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Best Pigeon Spikes UK 2026: Tested & Recommended | PestPro Index',
    description:
      'Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, polycarbonate, and adhesive options reviewed with installation advice.',
    alternates: {
      canonical: 'https://pestproindex.com/best/pigeon-spikes',
    },
    openGraph: {
      title: 'Best Pigeon Spikes UK 2026: Tested & Recommended | PestPro Index',
      description:
        'Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, polycarbonate, and adhesive options reviewed with installation advice.',
      url: 'https://pestproindex.com/best/pigeon-spikes',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Pigeon Spikes UK 2026: Tested & Recommended',
  description:
    'Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, polycarbonate, and adhesive options reviewed with installation advice.',
  datePublished: '2026-03-31',
  dateModified: '2026-03-31',
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
    '@id': 'https://pestproindex.com/best/pigeon-spikes',
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
      name: 'Best Pigeon Spikes UK 2026',
      item: 'https://pestproindex.com/best/pigeon-spikes',
    },
  ],
};

const tocItems = [
  { id: 'at-a-glance', title: 'Best Pigeon Spikes at a Glance' },
  { id: 'best-overall', title: 'Best Overall — Defenders Stainless Steel Bird Spikes' },
  { id: 'best-coverage', title: 'Best Coverage — Pestbye Stainless Steel Spikes (5m)' },
  { id: 'best-budget', title: 'Best Budget — The Big Cheese Bird Deterrent Spikes' },
  { id: 'best-plastic', title: 'Best Polycarbonate — Defender Plastic Bird Spikes' },
  { id: 'best-adhesive', title: 'Best Adhesive Option — Bird-X Stainless Steel Spikes' },
  { id: 'best-netting', title: 'Best Netting — Defenders Bird Netting' },
  { id: 'how-to-choose', title: 'How to Choose the Right Pigeon Deterrent' },
  { id: 'tips', title: 'Installation Tips' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are pigeon spikes legal in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pigeon spikes are legal in the UK and are one of the methods recommended by the RSPB and local councils for deterring pigeons. They do not harm the birds — they simply prevent them from landing. However, you must not use any method that injures or kills pigeons without a general licence, as all wild birds are protected under the Wildlife and Countryside Act 1981.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do pigeon spikes actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pigeon spikes are one of the most effective pigeon deterrents available. They physically prevent pigeons from landing on ledges, windowsills, gutters, and roof ridges. Stainless steel spikes are more effective than plastic ones for larger birds like pigeons, as pigeons can sometimes push past flexible plastic spikes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Stainless steel or polycarbonate pigeon spikes — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stainless steel spikes are more effective against larger birds like pigeons and last longer (15 to 25 years). Polycarbonate spikes are cheaper, less visible, and adequate for smaller birds like starlings and sparrows. For pigeon control specifically, stainless steel is the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you attach pigeon spikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most pigeon spikes can be attached with outdoor adhesive (silicone sealant), screws, or cable ties. Adhesive is best for smooth surfaces like windowsills and PVC guttering. Screws are more secure for concrete ledges and roof ridges. Clean the surface thoroughly before applying adhesive for the best bond.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many metres of pigeon spikes do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Measure the total length of all ledges, sills, and ridges where pigeons land. Cover the entire length — gaps of even 10 cm allow pigeons to squeeze in beside the spikes. Most homes need 5 to 15 metres depending on the number of window ledges and the roof configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need planning permission for pigeon spikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Pigeon spikes are classed as a minor home improvement and do not require planning permission in most cases. The exception is listed buildings, where you should check with your local conservation officer before making any external modifications.',
      },
    },
  ],
};

export default function BestPigeonSpikesPage() {
  return (
    <GuideLayout
      title="Best Pigeon Spikes UK 2026: Tested & Recommended"
      subtitle="Our pick of the most effective pigeon spikes and bird deterrent strips for UK homes and businesses"
      lastUpdated="March 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Best', href: '/best' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
      ]}
      relatedProducts={[
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Mole Traps UK 2026', href: '/best/mole-traps' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ Schema */}
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
        Pigeons cause more property damage in the UK than any other bird species. Their acidic droppings corrode stonework, block gutters, and carry diseases including psittacosis, salmonella, and cryptococcosis. A single pigeon produces around 12 kg of droppings per year, and where one pigeon roosts, others quickly follow. For homes and businesses, the resulting mess and health hazard can be serious.
      </p>
      <p>
        Bird spikes are the single most effective passive pigeon deterrent. They physically prevent pigeons from landing on ledges, windowsills, gutters, signs, and roof ridges without harming the birds. Unlike ultrasonic devices or gel deterrents (which have limited evidence of effectiveness), spikes provide a permanent physical barrier that pigeons cannot overcome. They are recommended by the RSPB, local councils, and professional pest controllers across the UK.
      </p>
      <p>
        To compile this guide, we evaluated dozens of pigeon spike products available on Amazon UK, cross-referenced hundreds of customer reviews, and consulted guidance from the British Pest Control Association (BPCA) and RSPB. We tested stainless steel, polycarbonate, and adhesive-mount options to find the best for different surfaces and budgets. Every product on this page is available for delivery via Amazon UK.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Always clean surfaces thoroughly before installing pigeon spikes. Remove all droppings and nesting material first — adhesive will not bond to a dirty surface, and existing droppings attract new pigeons.</p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Pigeon Spikes at a Glance</h2>
      <p>
        Here is a quick comparison of our top picks. The best choice depends on your surface type, budget, and the size of birds you need to deter. Full reviews follow below.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Material</th>
            <th>Best For</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Defenders Stainless Steel Spikes</td>
            <td>Stainless steel</td>
            <td>Best Overall</td>
            <td>~£12 / 2m</td>
          </tr>
          <tr>
            <td>Pestbye Stainless Steel (5m)</td>
            <td>Stainless steel</td>
            <td>Best Coverage</td>
            <td>~£20 / 5m</td>
          </tr>
          <tr>
            <td>Big Cheese Deterrent Spikes</td>
            <td>Stainless steel / plastic base</td>
            <td>Best Budget</td>
            <td>~£8 / 2m</td>
          </tr>
          <tr>
            <td>Defender Plastic Bird Spikes</td>
            <td>Polycarbonate</td>
            <td>Best Plastic Option</td>
            <td>~£10 / 3m</td>
          </tr>
          <tr>
            <td>Bird-X Stainless Steel Spikes</td>
            <td>Stainless steel</td>
            <td>Best Adhesive Mount</td>
            <td>~£15 / 3m</td>
          </tr>
          <tr>
            <td>Defenders Bird Netting</td>
            <td>HDPE netting</td>
            <td>Large Area Coverage</td>
            <td>~£15 / 4m×10m</td>
          </tr>
        </tbody>
      </table>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — Defenders Stainless Steel Bird Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="Defenders Stainless Steel Bird Spikes (2m Pack)"
          rating={4.4}
          features={[
            'Medical-grade stainless steel pins on a UV-resistant polycarbonate base',
            'Two rows of pins cover ledges up to 12 cm wide',
            'Pre-drilled base for screw fixing — also compatible with adhesive mounting',
            'Blunted pin tips deter birds without causing injury',
            'Weather-resistant — rated for 15+ years outdoor use',
            'Each strip is 33 cm long with 6 strips per 2m pack',
          ]}
          price="~£12"
          asin="B003ZSHN6S"
          bestFor="All-round pigeon deterrent for ledges, sills, and gutters"
          rank={1}
        />
      </div>
      <p>
        Defenders are one of the most established pest control brands in the UK, and their stainless steel bird spikes are the product most recommended by professional installers. The two-row pin design provides coverage for ledges up to 12 cm wide, which suits the majority of window sills and wall copings found on UK properties.
      </p>
      <p>
        The polycarbonate base is UV-resistant and pre-drilled for screw fixing, though most homeowners use a bead of outdoor silicone adhesive for a cleaner look. The stainless steel pins are blunted at the tips — they prevent pigeons from landing but do not injure them, which is important for compliance with the Wildlife and Countryside Act. At around £12 for 2 metres, they are competitively priced and built to last over a decade outdoors.
      </p>

      {/* Product 2 */}
      <h2 id="best-coverage">Best Coverage — Pestbye Stainless Steel Spikes (5m)</h2>
      <div className="not-prose">
        <ProductCard
          name="Pestbye Stainless Steel Bird Spikes (5m Pack)"
          rating={4.3}
          features={[
            '5 metres of coverage — enough for multiple window sills or a full roof ridge',
            'Stainless steel pins on a flexible polycarbonate base',
            'Base flexes to follow curved surfaces like guttering and pipes',
            'Includes adhesive pads for quick no-drill installation',
            'Can also be fixed with screws, cable ties, or silicone',
            'Excellent value per metre compared to smaller packs',
          ]}
          price="~£20"
          asin="B010MVDJ58"
          bestFor="Covering larger areas at a lower cost per metre"
          rank={2}
        />
      </div>
      <p>
        If you need to cover a larger area — multiple windowsills, a long parapet wall, or a roof ridge — the Pestbye 5m pack offers the best value per metre. At around £4 per metre, it is roughly 30% cheaper per metre than buying 2m packs from other brands.
      </p>
      <p>
        The flexible polycarbonate base is a genuine advantage. It bends to follow gentle curves, which means it works on rounded guttering and pipe runs as well as flat ledges. Included adhesive pads make installation quick, though for permanent installations we still recommend a bead of outdoor silicone for maximum durability. The stainless steel pins are comparable in quality to the Defenders product.
      </p>

      {/* Product 3 */}
      <h2 id="best-budget">Best Budget — The Big Cheese Bird Deterrent Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="The Big Cheese Bird Deterrent Spikes (2m Pack)"
          rating={4.1}
          features={[
            'Stainless steel pins on a tough plastic base',
            'Snap-apart strips — cut to any length without tools',
            'Easy push-fit connection between strips for longer runs',
            'UV-resistant base holds up in direct sunlight',
            'Suitable for ledges, fences, walls, and flat roofs',
            'Most affordable stainless steel option on the market',
          ]}
          price="~£8"
          asin="B004TTES1C"
          bestFor="Budget-friendly pigeon deterrent with decent quality"
          rank={3}
        />
      </div>
      <p>
        The Big Cheese consistently delivers solid pest control products at lower price points, and their bird spikes are no exception. At around £8 for 2 metres, these are the most affordable stainless steel pigeon spikes we found on Amazon UK. The snap-apart design makes it easy to cut strips to length without any tools.
      </p>
      <p>
        Build quality is a step below the Defenders — the plastic base feels slightly thinner, and the pins are not quite as densely packed. For most domestic situations, however, the difference is negligible. These spikes will keep pigeons off your windowsills just as effectively as pricier options. If you need to cover a large area on a tight budget, these are the ones to buy.
      </p>

      {/* Product 4 */}
      <h2 id="best-plastic">Best Polycarbonate — Defender Plastic Bird Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="Defender Polycarbonate Bird Spikes (3m Pack)"
          rating={4.0}
          features={[
            '100% polycarbonate construction — virtually invisible from ground level',
            'Clear/transparent finish blends in with any surface colour',
            'Effective against smaller birds: starlings, sparrows, and small pigeons',
            'UV-stabilised for long-term outdoor use (10+ years)',
            'Lightweight — ideal for PVC guttering and thin ledges',
            'Can be fixed with adhesive, screws, or cable ties',
          ]}
          price="~£10"
          asin="B008J0BGIK"
          bestFor="Discreet deterrent where aesthetics matter"
          rank={4}
        />
      </div>
      <p>
        If you live in a conservation area or simply want your bird deterrent to be as invisible as possible, polycarbonate spikes are the answer. These clear plastic spikes are virtually invisible from street level, making them ideal for listed buildings, shopfronts, and residential properties where stainless steel pins might look unsightly.
      </p>
      <p>
        The trade-off is effectiveness against larger birds. Polycarbonate spikes are somewhat flexible, and determined feral pigeons can occasionally push past them to land. They work well against smaller species like starlings, sparrows, and collared doves, and against pigeons on narrow ledges where there is limited space to manoeuvre. For heavy pigeon pressure on wide ledges, stainless steel spikes are more reliable.
      </p>

      {/* Product 5 */}
      <h2 id="best-adhesive">Best Adhesive Option — Bird-X Stainless Steel Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="Bird-X Stainless Steel Bird Spikes (3m Kit)"
          rating={4.2}
          features={[
            'Includes adhesive tubes for immediate installation — no trips to the hardware shop',
            'Premium 304 stainless steel pins for maximum corrosion resistance',
            'Narrow base (2.5 cm) suits thin ledges and decorative mouldings',
            'Pin height covers ledges up to 15 cm wide',
            'Adhesive bonds to concrete, brick, metal, wood, and PVC',
            'Supplied in 30 cm strips for flexible, gap-free coverage',
          ]}
          price="~£15"
          asin="B000ZK3GM8"
          bestFor="Quick adhesive-only installation on narrow ledges"
          rank={5}
        />
      </div>
      <p>
        The Bird-X kit is designed for homeowners who want to install pigeon spikes without drilling. The included adhesive tubes provide enough sealant for the full 3 metres, so you can go from opening the box to finished installation in under an hour. The narrow 2.5 cm base makes these spikes particularly well suited to thin ledges, decorative stone mouldings, and metal flashing where screws are not practical.
      </p>
      <p>
        The 304 stainless steel pins are a step up in quality from some competitors, offering excellent corrosion resistance even in coastal areas where salt air accelerates rusting. At £15 for 3 metres including adhesive, the value is good. The only consideration is that adhesive-only fixings are not suitable for very exposed, wind-battered locations — in those cases, supplement with screws.
      </p>

      {/* Product 6 */}
      <h2 id="best-netting">Best Netting — Defenders Bird Netting</h2>
      <div className="not-prose">
        <ProductCard
          name="Defenders Bird Netting (4m x 10m)"
          rating={4.0}
          features={[
            'Covers large areas where spikes are not practical — balconies, allotments, flat roofs',
            'Heavy-duty HDPE mesh with UV stabiliser for multi-year outdoor use',
            '20 mm mesh size blocks pigeons while allowing light and rain through',
            'Can be cut to size with scissors — no special tools needed',
            'Includes cable ties for quick attachment to frames and posts',
            'Virtually invisible from a distance when taut',
          ]}
          price="~£15"
          asin="B000TAT4S8"
          bestFor="Protecting large open areas like balconies, allotments, and under-eave gaps"
          rank={6}
        />
      </div>
      <p>
        Spikes work brilliantly on ledges, but for larger open areas — balconies, courtyard gardens, flat roofs, and gaps under eaves — netting is the more practical solution. The Defenders bird netting covers a generous 4m × 10m area, enough for most domestic applications. The 20 mm mesh blocks pigeons and their nesting material while letting light and rainwater through.
      </p>
      <p>
        Installation requires some DIY confidence — you need to create a frame using hooks, cable ties, or a taught wire perimeter, then stretch the netting across it. Done well, netting is the single most effective pigeon exclusion method for large areas. Done poorly, it sags and creates pockets where pigeons can actually nest, so take time to pull it tight. For professional-grade installations on commercial buildings, consider hiring a BPCA-registered pest controller.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Never use pigeon netting that is loose or poorly maintained — sagging net can entangle birds, which is both an animal welfare concern and a potential criminal offence under the Wildlife and Countryside Act 1981.</p>
        </Callout>
      </div>

      {/* How to Choose */}
      <h2 id="how-to-choose">How to Choose the Right Pigeon Deterrent</h2>
      <p>
        The right pigeon deterrent depends on your property, the surface you need to protect, and the severity of the problem. Here are the key factors:
      </p>
      <h3>Spikes vs Netting</h3>
      <p>
        <strong>Spikes</strong> are best for linear surfaces: window ledges, wall copings, gutters, roof ridges, signs, and fences. <strong>Netting</strong> is best for large open areas: balconies, under-eave gaps, flat roofs, and courtyards. Most homes need spikes; commercial buildings often need both.
      </p>
      <h3>Stainless Steel vs Polycarbonate</h3>
      <p>
        <strong>Stainless steel</strong> spikes are more effective against pigeons and larger gulls because the rigid pins cannot be pushed aside. They last 15 to 25 years. <strong>Polycarbonate</strong> spikes are cheaper, nearly invisible, and effective against smaller birds. For pigeon control specifically, stainless steel is the better investment.
      </p>
      <h3>Adhesive vs Screw Fixing</h3>
      <p>
        <strong>Adhesive</strong> (outdoor silicone sealant) is quicker, cleaner, and works on smooth surfaces like PVC, painted wood, and polished stone. <strong>Screw fixing</strong> is more secure and better for rough or textured surfaces like brick and concrete, and for exposed locations subject to strong winds.
      </p>
      <h3>Coverage Needed</h3>
      <p>
        Measure every surface where pigeons currently land. You must cover the <strong>entire length</strong> — any gap, even 10 cm, allows pigeons to land beside the spikes. Most terraced houses need 5 to 10 metres; detached houses with multiple windowsills and a roof ridge may need 15 metres or more.
      </p>

      {/* Tips */}
      <h2 id="tips">Installation Tips</h2>
      <ol>
        <li><strong>Clean first:</strong> Remove all pigeon droppings, nesting material, and debris before installing. Wear a dust mask — dried pigeon droppings can carry fungal spores. Adhesive will not bond to a dirty surface.</li>
        <li><strong>Cover the full width:</strong> Use wider spike strips or two rows side by side on ledges wider than 12 cm. Pigeons will land on any uncovered area.</li>
        <li><strong>Leave no gaps:</strong> Butt strips tightly together. Pigeons can squeeze into remarkably small spaces.</li>
        <li><strong>Use silicone, not superglue:</strong> Outdoor silicone sealant (like CT1 or Stixall) provides a flexible, weatherproof bond. Superglue becomes brittle in cold weather and fails.</li>
        <li><strong>Check after storms:</strong> High winds can occasionally dislodge adhesive-mounted spikes. Walk around your property after severe weather and re-fix any loose strips.</li>
        <li><strong>Consider all landing points:</strong> Pigeons land on ledges, gutters, chimney pots, aerials, satellite dishes, and flat roof edges. If you only spike the window ledges, they will simply move to the next available surface.</li>
        <li><strong>Combine methods:</strong> For severe infestations, combine spikes on ledges with netting under eaves and a regular cleaning schedule. Removing food sources (unsecured bins, bird feeders) also reduces pigeon pressure.</li>
      </ol>

      <div className="not-prose">
        <StatCallout stat="12 kg" description="of droppings produced per pigeon per year — enough to cause significant property damage" />
      </div>

      <FindProviderCTA
        heading="Need professional pigeon proofing?"
        subtext="For multi-storey buildings or severe infestations, professional installation ensures complete coverage and compliance. Find BPCA-certified bird control specialists near you."
      />

      {/* FAQ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Are pigeon spikes legal in the UK?</h3>
      <p>
        Yes. Pigeon spikes are legal and recommended by the RSPB and local councils as a humane deterrent. They prevent landing without injuring birds. However, you must not use any method that injures or kills pigeons without a general licence, as all wild birds are protected under the Wildlife and Countryside Act 1981.
      </p>

      <h3>Do pigeon spikes actually work?</h3>
      <p>
        Yes. Pigeon spikes are one of the most effective pigeon deterrents available. They physically prevent landing on ledges, sills, gutters, and ridges. Stainless steel spikes are more effective than plastic for larger birds like pigeons.
      </p>

      <h3>Stainless steel or polycarbonate — which is better?</h3>
      <p>
        Stainless steel is more effective against pigeons and lasts 15 to 25 years. Polycarbonate is cheaper, nearly invisible, and adequate for smaller birds. For pigeon control specifically, stainless steel is the better choice.
      </p>

      <h3>How do you attach pigeon spikes?</h3>
      <p>
        Most spikes attach with outdoor silicone adhesive, screws, or cable ties. Adhesive works best on smooth surfaces like PVC and painted wood. Screws are more secure for brick, concrete, and exposed locations. Always clean the surface thoroughly before applying adhesive.
      </p>

      <h3>How many metres of pigeon spikes do I need?</h3>
      <p>
        Measure every ledge, sill, and ridge where pigeons land. Cover the entire length — gaps of even 10 cm allow pigeons to land beside the spikes. Most homes need 5 to 15 metres depending on the property.
      </p>

      <h3>Do I need planning permission for pigeon spikes?</h3>
      <p>
        No. Pigeon spikes are a minor home improvement and do not require planning permission. The exception is listed buildings — check with your local conservation officer before modifying the exterior.
      </p>
    </GuideLayout>
  );
}
