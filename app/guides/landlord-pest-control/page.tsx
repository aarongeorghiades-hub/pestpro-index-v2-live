import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import ProductCard from '@/components/ProductCard';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Landlord Pest Control UK — Legal Duties, Responsibilities & Solutions | PestPro Index',
    description:
      'Complete guide to landlord pest control responsibilities in the UK. Understand your legal obligations, tenant vs landlord duties, prevention strategies, and how to find reliable pest management.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/landlord-pest-control',
    },
    openGraph: {
      title: 'Landlord Pest Control UK — Legal Duties, Responsibilities & Solutions | PestPro Index',
      description:
        'Complete guide to landlord pest control responsibilities in the UK. Understand your legal obligations, tenant vs landlord duties, prevention strategies, and how to find reliable pest management.',
      url: 'https://pestproindex.com/guides/landlord-pest-control',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Landlord Pest Control UK: Legal Duties, Responsibilities & Solutions',
  description:
    'Complete guide to landlord pest control responsibilities in the UK. Understand your legal obligations, tenant vs landlord duties, prevention strategies, and how to find reliable pest management.',
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
    '@id': 'https://pestproindex.com/guides/landlord-pest-control',
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
      name: 'Landlord Pest Control',
      item: 'https://pestproindex.com/guides/landlord-pest-control',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the landlord or tenant responsible for pest control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause of the infestation. Landlords are responsible for pest problems caused by structural defects — gaps in the building fabric, damaged airbricks, defective drains, holes around pipe entry points, and any pre-existing infestations present before the tenancy began. Tenants are generally responsible for pest problems caused by their own behaviour — poor hygiene, food waste attracting mice, bed bugs introduced from travel, or fleas from pets. Where the cause is mixed — for example, mice entering through a structural gap but attracted by tenant food waste — the landlord is almost always held responsible because the structural entry point is the root cause. Local authorities and courts consistently take the view that the landlord must maintain the building fabric to prevent pest ingress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a landlord charge a tenant for pest control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the Tenant Fees Act 2019, landlords in England cannot charge tenants fees beyond rent, tenancy deposit, and a limited number of permitted payments. If the pest problem is the landlord\'s responsibility (structural defect, pre-existing infestation), the landlord must pay for treatment. If the pest problem is clearly caused by the tenant (bed bugs from travel, fleas from pets, poor hygiene), the landlord can ask the tenant to arrange and pay for treatment, but cannot deduct costs from the deposit unless the tenancy agreement includes a specific clause and the deduction is reasonable. In practice, landlords often find it more effective to arrange treatment themselves and discuss costs with the tenant afterwards, rather than delaying treatment while responsibility is debated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a landlord ignores a pest complaint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ignoring a tenant\'s pest complaint can have serious consequences. The tenant can report the issue to the local authority, which has the power to inspect the property and serve an improvement notice or abatement notice on the landlord under the Environmental Protection Act 1990. Under the Housing Health and Safety Rating System (HHSRS), a pest infestation can be classified as a Category 1 or Category 2 hazard, triggering enforcement action including prohibition orders. Since the Homes (Fitness for Human Habitation) Act 2018, tenants can take landlords directly to court if a property is unfit for habitation — a serious pest infestation qualifies. The court can order the landlord to carry out repairs, pay compensation, and cover legal costs. Persistent failure to act can also result in rent repayment orders and banning orders under the Housing and Planning Act 2016.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need pest control between tenancies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a between-tenancy pest inspection is strongly recommended and should be part of every landlord\'s void period checklist. This is the ideal time to carry out a thorough inspection for signs of pest activity, deep clean the property, seal any structural gaps or pest entry points, replace damaged airbricks and vent covers, and treat any low-level infestations before the next tenant moves in. Handing over a property with a pre-existing pest problem creates immediate liability for the landlord and sets the tenancy off to a poor start. A professional pest inspection during the void period typically costs £50 to £100 and can prevent far more expensive problems later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are landlords responsible for pest control in HMOs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Houses in Multiple Occupation (HMOs), the landlord has enhanced responsibilities. The landlord is always responsible for pest control in common areas — shared kitchens, bathrooms, hallways, stairwells, communal gardens, and bin stores. Under mandatory HMO licensing conditions (Housing Act 2004), landlords must maintain the property in a condition that does not pose a risk to the health or safety of occupants, which includes pest management. Many local authority HMO licence conditions explicitly require landlords to have a documented pest management plan. In practice, pests in HMOs — particularly cockroaches and bed bugs — frequently spread between rooms via shared services and ductwork, meaning the entire building typically needs coordinated treatment, which is the landlord\'s responsibility to arrange and fund.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a tenant withhold rent due to a pest infestation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tenants in England and Wales do not have a general legal right to withhold rent, even if there is a serious pest infestation. However, tenants do have several other remedies. Since the Homes (Fitness for Human Habitation) Act 2018, tenants can take landlords directly to court for a property that is unfit for habitation — a serious pest infestation qualifies. The court can order the landlord to carry out remedial work and pay compensation. Tenants can also report the issue to the local authority, which can serve improvement notices on the landlord. In practice, if a tenant stops paying rent due to a pest problem, the landlord will struggle to take possession proceedings while an outstanding disrepair claim exists. The strongest position for landlords is to respond promptly to pest complaints and resolve them quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should rental properties be inspected for pests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most rental properties, a quarterly inspection that includes a check for signs of pest activity is recommended. Higher-risk properties — HMOs, older buildings, ground-floor flats, properties near waterways or restaurants, and properties with a history of pest problems — may benefit from monthly professional pest control visits. At a minimum, landlords should carry out a thorough pest inspection during every void period (between tenancies), during every routine property inspection (typically quarterly or six-monthly), and whenever a tenant reports a potential pest issue. Properties on a professional pest control contract benefit from systematic monitoring that catches early signs of activity before an infestation develops.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pest control clause should I put in my tenancy agreement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-drafted pest control clause in the tenancy agreement should require the tenant to report any signs of pest activity to the landlord or managing agent within 48 hours, maintain the property in a reasonably clean and hygienic condition, store food in sealed containers, dispose of waste regularly using the bins provided, not feed birds or leave food outside, allow access for pest control inspections and treatments with reasonable notice, and be responsible for pest problems caused by their own behaviour (e.g. pet fleas, bed bugs from travel). The clause should also state that the landlord will be responsible for pest problems caused by structural defects or pre-existing conditions. This clause sets clear expectations and provides a framework for determining responsibility if a pest issue arises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Awaab\'s Law apply to private landlords?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Awaab\'s Law, introduced through the Social Housing (Regulation) Act 2023 and in force from October 2025, currently applies to registered social housing providers only. However, the Renters\' Rights Act is expected to extend similar obligations to private landlords, meaning all landlords will need to meet prescribed timeframes for investigating and resolving hazards including damp, mould, and associated pest problems. Private landlords should prepare now by ensuring they have systems in place to respond to tenant reports within the timeframes that will apply — investigation within 10 working days, written summary within 3 working days, safety work completed within 5 working days, and emergency hazards made safe within 24 hours. The existing Homes (Fitness for Human Habitation) Act 2018 already gives private tenants the right to take landlords to court over unfit conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can damp and mould cause pest infestations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Damp environments attract a specific group of pests that thrive in high-humidity conditions. Booklice (psocids) are the number one indicator of a damp problem — these tiny insects feed on mould spores and are almost always present where humidity is too high. Mould mites feed directly on mould growth and can be present in enormous numbers wherever mould is established. Silverfish thrive in damp bathrooms, kitchens, and behind wallpaper where condensation forms. German cockroaches are attracted to warm, humid environments and are commonly found in damp kitchens. Woodworm (furniture beetle larvae) are attracted to damp timber, causing structural damage. Carpet beetles thrive in humid conditions. If a tenant reports pest sightings alongside damp or mould, the underlying cause is often the same — excess moisture from poor ventilation, structural defects, or both. Treating the pests without addressing the damp will fail.',
      },
    },
  ],
};

const tocItems = [
  { id: 'introduction', title: 'Why Pest Control Is a Landlord Priority' },
  { id: 'responsibilities', title: 'Landlord vs Tenant Responsibilities' },
  { id: 'legal-framework', title: 'Legal Framework for Landlords' },
  { id: 'common-pests', title: 'Common Pest Problems for Rental Properties' },
  { id: 'hmos', title: 'HMOs and Multi-Unit Properties' },
  { id: 'prevention', title: 'Pest Prevention for Landlords' },
  { id: 'portfolio-contract', title: 'Building a Pest Management Contract for Your Portfolio' },
  { id: 'tenant-complaint', title: 'What to Do When a Tenant Reports a Pest Problem' },
  { id: 'letting-agents', title: 'Letting Agents and Property Managers' },
  { id: 'awaabs-law', title: 'Awaab\'s Law, Damp & Mould: The Pest Connection' },
  { id: 'find-provider', title: 'Find a Commercial Pest Controller Near You' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function LandlordPestControlPage() {
  return (
    <GuideLayout
      title="Landlord Pest Control: Legal Duties, Responsibilities & Solutions in the UK"
      subtitle="A comprehensive guide to pest control obligations for UK landlords — tenant vs landlord duties, legal framework, HMO compliance, prevention, and Awaab's Law"
      lastUpdated="March 2026"
      readingTime="22 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'Wasp Nest Removal: Complete UK Guide', href: '/guides/wasp-nest-removal' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'How to Get Rid of Moths', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Restaurant Pest Control UK', href: '/guides/restaurant-pest-control' },
        { title: 'Warehouse Pest Management', href: '/guides/warehouse-pest-management' },
        { title: 'Hotel Pest Control', href: '/guides/hotel-pest-control' },
        { title: 'Office Pest Control', href: '/guides/office-pest-control' },
      ]}
      relatedProducts={[
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Moth Killers UK', href: '/best/moth-killers' },
        { title: 'Best Bird Deterrents UK 2026', href: '/best/bird-deterrents' },
        { title: 'Best Commercial Rodent Bait Stations', href: '/best/commercial-rodent-bait-stations' },
        { title: 'Best Commercial Insect Monitors', href: '/best/commercial-insect-monitors' },
        { title: 'Best Commercial Bird Proofing UK 2026', href: '/best/commercial-bird-proofing' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Back to Commercial Hub */}
      <div className="not-prose my-8 p-6 bg-purple-50 border border-purple-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Part of our Commercial Pest Control series</p>
        <p className="text-gray-700 mb-3">This guide is one of our sector-specific commercial pest control resources. Visit the hub for all commercial guides, equipment reviews, and compliance information.</p>
        <a
          href="/guides/commercial-pest-control"
          className="inline-block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Commercial Pest Control Hub &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1: Why Pest Control Is a Landlord Priority */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="introduction">Why Pest Control Is a Landlord Priority</h2>

      <p>
        Pest control is one of the most underestimated responsibilities in property management. Many landlords treat it as a reactive expense &mdash; something to deal with when a tenant complains &mdash; rather than a proactive investment that protects their assets, their income, and their legal position. This approach is increasingly untenable. The legal framework around landlord obligations has tightened significantly in recent years, enforcement by local authorities has become more aggressive, and tenants are better informed about their rights than ever before.
      </p>

      <p>
        The financial case for proactive pest management is compelling. Pest infestations are one of the <strong>top reasons tenants break leases early</strong>, creating void periods that cost far more than any pest control contract. A single void month on a &pound;1,200/month property costs the landlord &pound;1,200 in lost rent, plus re-letting fees, advertising costs, and the cost of a void period deep clean. An annual pest control contract for the same property might cost &pound;200 to &pound;400. The mathematics are straightforward.
      </p>

      <p>
        Beyond void periods, uncontrolled pest problems cause <strong>direct property damage</strong>. Rodents gnaw electrical cables (creating fire risk), chew through plasterboard, contaminate insulation, and damage pipework. Woodworm (furniture beetle larvae) can cause structural damage to timber in damp properties. Pigeons and birds cause acidic droppings damage to roofing, guttering, and external fabric. Carpet moths can destroy carpets and curtains in furnished lets, costing thousands to replace. These are all costs that fall on the landlord, not the tenant.
      </p>

      <p>
        The reputational risk is also significant. In the age of online reviews, tenant forums, and social media, a landlord known for ignoring pest complaints will struggle to attract quality tenants. Local authorities can serve <strong>improvement notices</strong> on landlords who fail to address pest problems, and these notices are a matter of public record. For portfolio landlords, a pattern of pest complaints can trigger closer scrutiny from the local authority&apos;s private rented sector enforcement team.
      </p>

      <p>
        This guide covers everything UK landlords need to know: who is responsible for what, the legal framework, common pest problems in rental properties, HMO-specific obligations, prevention strategies, building a pest management contract for your portfolio, responding to tenant complaints, and the critical connection between damp, mould, and pest infestations under Awaab&apos;s Law.
      </p>

      <div className="not-prose">
        <StatCallout value="&pound;1,200+" label="the typical cost of a single void month on a UK rental property — far more than an annual pest control contract" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: Landlord vs Tenant Responsibilities */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="responsibilities">Landlord vs Tenant Responsibilities</h2>

      <p>
        The question of whether the landlord or the tenant is responsible for pest control is the single most contentious issue in rental property pest management. There is no single statute that provides a definitive answer for every situation &mdash; responsibility depends on the <strong>cause</strong> of the infestation, the terms of the tenancy agreement, and the condition of the property. However, the general principles are well established in law and practice.
      </p>

      <h3>The Landlord Is Responsible For:</h3>

      <p>
        <strong>Structural pest entry points.</strong> If pests are entering the property through gaps in the building fabric &mdash; holes around pipe runs, damaged or missing airbricks, gaps beneath external doors, cracks in external walls, defective pointing, broken drain covers, or gaps in the roof &mdash; the landlord is responsible. Under <strong>Section 11 of the Landlord and Tenant Act 1985</strong>, the landlord has a statutory obligation to maintain the structure and exterior of the dwelling. Pest entry through structural defects is a failure of this obligation.
      </p>

      <p>
        <strong>Pre-tenancy infestations.</strong> If pests were present in the property before the tenancy began, the landlord is responsible for treatment. Under the <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, a property must be fit for human habitation at the start of the tenancy and throughout. Handing over a property with an existing pest infestation is a clear breach.
      </p>

      <p>
        <strong>Pest problems caused by building defects.</strong> Leaking pipes that attract rats, damaged roofs that allow birds or squirrels to enter, defective drainage that provides a route for rats from the sewer system, and damp conditions that attract silverfish, booklice, and cockroaches are all the landlord&apos;s responsibility because the underlying cause is a building defect.
      </p>

      <p>
        <strong>Common areas in HMOs and blocks of flats.</strong> Shared kitchens, bathrooms, hallways, stairwells, gardens, bin stores, and other common areas are always the landlord&apos;s responsibility.
      </p>

      <p>
        <strong>Maintaining drains.</strong> The drainage system beneath and around the property is the landlord&apos;s responsibility. Defective drains are one of the most common routes for rat ingress, and drain surveys and repairs fall squarely on the landlord.
      </p>

      <h3>The Tenant Is Responsible For:</h3>

      <p>
        <strong>Pest problems caused by poor hygiene.</strong> If mice are attracted by food waste left on counters, cockroaches are drawn to an uncleaned kitchen, or ants are attracted by food spills, and the building is structurally sound with no external pest entry points, the tenant bears responsibility for the infestation.
      </p>

      <p>
        <strong>Pest problems introduced by the tenant.</strong> Bed bugs brought home from travel or second-hand furniture, fleas from the tenant&apos;s pets, and stored product insects introduced via the tenant&apos;s own food supplies are the tenant&apos;s responsibility.
      </p>

      <p>
        <strong>Maintaining reasonable cleanliness.</strong> Tenants have a general obligation to keep the property reasonably clean and to dispose of waste properly. Failure to do so, resulting in pest attraction, is the tenant&apos;s responsibility.
      </p>

      <h3>Grey Areas</h3>

      <p>
        Many pest situations fall into a grey area where both landlord and tenant factors contribute. For example: <strong>mice that enter through a structural gap but are attracted by tenant food waste</strong> &mdash; the landlord is usually responsible because the structural entry point is the root cause; the mice could not have entered without it. <strong>Wasps nesting in a roof void</strong> &mdash; the landlord is responsible because this is a structural issue. <strong>Ants entering via airbricks</strong> &mdash; the landlord is responsible because proofing external entry points is a structural maintenance obligation. In practice, local authorities and courts consistently pursue the landlord for enforcement where pest ingress is facilitated by a structural defect, even if the tenant&apos;s behaviour contributed to the problem.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>If pest ingress is caused by a structural defect, the landlord is almost always responsible &mdash; even if the tenant&apos;s hygiene contributed to the problem.</strong> Local authorities will pursue the landlord, not the tenant, for enforcement action. Courts take the same view: the duty to maintain the building fabric falls on the landlord under Section 11 of the Landlord and Tenant Act 1985.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3: Legal Framework for Landlords */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="legal-framework">Legal Framework for Landlords</h2>

      <p>
        The legal obligations on landlords regarding pest control are spread across multiple pieces of legislation. Together, they create a comprehensive framework that leaves little room for ambiguity: landlords must maintain their properties to prevent pest ingress, respond to pest complaints, and ensure that properties are fit for human habitation.
      </p>

      <h3>Landlord and Tenant Act 1985 &mdash; Section 11</h3>
      <p>
        Section 11 of the Landlord and Tenant Act 1985 imposes a <strong>statutory repairing obligation</strong> on landlords for tenancies of less than seven years. The landlord must keep in repair the <strong>structure and exterior</strong> of the dwelling, including drains, gutters, and external pipes, and keep in repair and proper working order the installations for the supply of water, gas, electricity, sanitation, and heating. Pest entry through structural defects &mdash; gaps in walls, damaged airbricks, defective drains, holes around pipe entry points &mdash; constitutes a failure to maintain the structure. This obligation cannot be contracted out of in the tenancy agreement.
      </p>

      <h3>Environmental Protection Act 1990</h3>
      <p>
        Part III of the Environmental Protection Act 1990 deals with <strong>statutory nuisances</strong>. Section 79 defines premises in such a state as to be prejudicial to health or a nuisance as a statutory nuisance. A pest infestation can meet this definition. Where a local authority is satisfied that a statutory nuisance exists, it must serve an <strong>abatement notice</strong> on the person responsible. For pest problems caused by the condition of the property, the notice is served on the landlord. Failure to comply with an abatement notice is a criminal offence punishable by a fine of up to &pound;20,000.
      </p>

      <h3>Prevention of Damage by Pests Act 1949</h3>
      <p>
        The Prevention of Damage by Pests Act 1949 gives local authorities the power to require <strong>landowners and occupiers to take steps to control rats and mice</strong>. If a local authority considers that steps should be taken to destroy rats or mice on any land, or to prevent rats or mice from coming to the land, it can serve a notice on the owner or occupier requiring those steps to be carried out. If the notice is not complied with, the local authority can carry out the work itself and recover the costs from the landowner.
      </p>

      <h3>Housing Health and Safety Rating System (HHSRS)</h3>
      <p>
        The HHSRS is the system used by local authorities to assess housing conditions and enforce housing standards. Pest infestations are recognised as a <strong>health and safety hazard</strong> under the HHSRS and can be classified as a <strong>Category 1 hazard</strong> (the most serious) or a <strong>Category 2 hazard</strong> depending on severity. Where a Category 1 hazard is identified, the local authority has a <strong>duty</strong> to take enforcement action, which can include serving an <strong>improvement notice</strong>, making a <strong>prohibition order</strong> (prohibiting the use of the property until the hazard is remedied), or taking <strong>emergency remedial action</strong>. For Category 2 hazards, the local authority has the <strong>power</strong> (but not the duty) to take enforcement action.
      </p>

      <h3>Housing Act 2004 &mdash; HMO Licensing</h3>
      <p>
        The Housing Act 2004 introduced mandatory licensing for certain HMOs and gave local authorities the power to introduce additional and selective licensing schemes. <strong>HMO licence conditions</strong> typically include requirements relating to the condition of the property, fire safety, and the management of common areas. Many local authorities include <strong>specific pest management requirements</strong> in their HMO licence conditions, such as regular inspections, documented pest control arrangements, and maintenance of common areas to a standard that prevents pest attraction.
      </p>

      <h3>Homes (Fitness for Human Habitation) Act 2018</h3>
      <p>
        The Homes (Fitness for Human Habitation) Act 2018 amended the Landlord and Tenant Act 1985 to require that residential properties are <strong>fit for human habitation</strong> at the start of the tenancy and throughout. Fitness for habitation is assessed against a list of factors that includes the <strong>freedom from damp</strong>, the <strong>internal arrangement</strong> (including the condition of facilities), and general <strong>repair</strong>. A serious pest infestation renders a property <strong>unfit for human habitation</strong>. Crucially, this Act gives tenants the right to <strong>take their landlord directly to court</strong> without needing to involve the local authority. The court can order the landlord to carry out remedial works and pay compensation.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Since the Homes (Fitness for Human Habitation) Act 2018, tenants can take landlords to court if a property is unfit &mdash; and a serious pest infestation qualifies.</strong> The court can order remedial works, compensation, and legal costs. Prevention is far cheaper than litigation.</p>
        </Callout>
      </div>

      <h3>The Tenant Fees Act 2019</h3>
      <p>
        The Tenant Fees Act 2019 prohibits landlords and agents in England from charging tenants fees beyond rent, the tenancy deposit, and a limited number of permitted payments. This means landlords <strong>cannot charge tenants for pest control</strong> where the pest problem is the landlord&apos;s responsibility. Attempting to do so may constitute a breach of the Act, which is a criminal offence. Where the pest problem is genuinely the tenant&apos;s responsibility (e.g., fleas from a pet), the landlord should handle this through the tenancy agreement and deposit deduction process, not through a direct charge.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: Common Pest Problems for Rental Properties */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="common-pests">Common Pest Problems for Rental Properties</h2>

      <p>
        Rental properties face a particular set of pest challenges driven by tenant turnover, variable hygiene standards, the age and condition of the housing stock, and the constraints on landlords carrying out proactive maintenance while the property is occupied. Understanding the most common pests and the landlord-specific angles for each is essential.
      </p>

      <h3>Mice and Rats</h3>
      <p>
        Rodent complaints are the <strong>most common pest issue reported to local authorities</strong> by tenants of rented properties. The <strong>house mouse</strong> (<em>Mus domesticus</em>) can enter through a gap as small as 6 millimetres, and the <strong>brown rat</strong> (<em>Rattus norvegicus</em>) through a gap of 25 millimetres. In rental properties, the most common entry routes are gaps around pipe runs (particularly under kitchen and bathroom sinks), damaged or missing airbricks, gaps beneath external doors, and defective drains. For persistent rat problems that recur after treatment, a <strong>CCTV drain survey</strong> is often the key to identifying the root cause &mdash; broken drains or missing interceptor traps allow rats direct access from the sewer system into the building. Drain repairs are the landlord&apos;s responsibility.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Dealing with rodents in a rental property?</p>
        <p className="text-gray-700 mb-3">Our comprehensive guides cover identification, treatment, proofing, and when to call a professional.</p>
        <div className="flex flex-wrap gap-3">
          <a href="/guides/how-to-get-rid-of-rats" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Rat Control Guide &rarr;</a>
          <a href="/guides/how-to-get-rid-of-mice" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Mouse Control Guide &rarr;</a>
          <a href="/best/commercial-rodent-bait-stations" className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm">Best Bait Stations &rarr;</a>
        </div>
      </div>

      <h3>Bed Bugs</h3>
      <p>
        Bed bugs (<em>Cimex lectularius</em>) are an <strong>increasingly common problem</strong> in UK rental properties, particularly in HMOs, furnished lets, and properties in urban areas with high population turnover. Bed bugs are usually introduced by tenants &mdash; brought home from travel, from infested second-hand furniture, or from a previous infested property. While the initial introduction is typically the tenant&apos;s responsibility, the situation is more complex in practice. Between tenancies, the landlord should always inspect and treat for bed bugs in furnished properties &mdash; failing to do so and allowing a new tenant to move into an infested property creates immediate liability. In HMOs, bed bugs can spread between rooms, making it impossible to attribute responsibility to a single tenant. Professional <strong>heat treatment</strong> is often the most effective approach, typically costing &pound;300 to &pound;800 per room.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Need help with bed bugs in a rental property?</p>
        <p className="text-gray-700 mb-3">Our bed bug guide covers signs, treatment options (including professional heat treatment), and prevention for landlords.</p>
        <a href="/guides/how-to-get-rid-of-bed-bugs" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Bed Bug Guide &rarr;</a>
      </div>

      <h3>Cockroaches</h3>
      <p>
        The <strong>German cockroach</strong> (<em>Blattella germanica</em>) is the most common cockroach species in UK rental properties, particularly in HMOs with shared kitchens. German cockroaches thrive in warm, humid environments near food and water sources. In multi-unit buildings, they spread rapidly between units via shared service risers, pipework, and ductwork. Individual unit treatment is often futile &mdash; a <strong>coordinated block-wide treatment</strong> covering all affected units simultaneously is the only effective approach. This coordination is the landlord&apos;s responsibility. The <strong>Oriental cockroach</strong> (<em>Blatta orientalis</em>) is also found in rental properties, typically in basements, ground-floor flats, and properties with damp problems. See our <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">cockroach control guide</Link> for detailed treatment information.
      </p>

      <h3>Fleas</h3>
      <p>
        Flea infestations in rental properties are almost always caused by <strong>tenants&apos; pets</strong>, making it primarily a tenant responsibility during the tenancy. However, between tenancies, the landlord is responsible for treating flea infestations in furnished or carpeted properties before the next tenant moves in. Cat fleas (<em>Ctenocephalides felis</em>) can survive in pupal form for months in empty properties, emerging when triggered by vibration and warmth from a new occupant. A professional flea treatment during the void period is essential for any property where the previous tenant had pets. See our <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">flea control guide</Link> for treatment details.
      </p>

      <h3>Birds and Pigeons</h3>
      <p>
        <strong>Feral pigeons</strong> nesting on roofs, ledges, windowsills, and balconies are the landlord&apos;s responsibility because the roosting and nesting sites are structural. Pigeon guano is acidic and causes damage to building fabric, blocks gutters, and poses a health risk (carrying <em>Salmonella</em>, psittacosis, and <em>Cryptococcus</em>). Bird proofing measures &mdash; netting, spike strips, wire systems &mdash; are a capital expense that falls on the landlord. Our <Link href="/guides/pigeon-control" className="text-blue-600 hover:underline font-medium">pigeon control guide</Link> covers the available proofing options.
      </p>

      <h3>Wasps</h3>
      <p>
        <strong>Wasp nests</strong> in roof voids, eaves, wall cavities, and outbuildings are the landlord&apos;s responsibility because the nesting location is a structural part of the property. A professional wasp nest treatment typically costs &pound;50 to &pound;100 &mdash; a modest expense compared to the risk of a tenant or visitor being stung. Landlords should respond promptly to wasp nest reports, particularly where tenants have young children or known allergies.
      </p>

      <h3>Moths</h3>
      <p>
        <strong>Carpet moths</strong> (<em>Tineola bisselliella</em>) are an increasing problem in furnished rental properties. The larvae feed on natural fibres &mdash; wool carpets, curtains, upholstered furniture, and clothing. In furnished lets where the landlord owns the carpets and furnishings, moth damage can cost <strong>thousands of pounds</strong> to remediate, with full carpet replacement sometimes required. Regular inspection and early treatment are essential. Professional moth treatment using residual insecticides typically costs &pound;150 to &pound;400 per room. See our <Link href="/guides/how-to-get-rid-of-moths" className="text-blue-600 hover:underline font-medium">moth control guide</Link> for detailed advice.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p><strong>A single bed bug treatment for a one-bed flat costs &pound;250&ndash;&pound;600. A whole-building cockroach treatment for an HMO can reach &pound;1,500&ndash;&pound;3,000. An annual pest management contract for a 10-property portfolio typically costs &pound;1,500&ndash;&pound;4,000/year &mdash; far less than reactive callouts.</strong></p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: HMOs and Multi-Unit Properties */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="hmos">HMOs and Multi-Unit Properties</h2>

      <p>
        Houses in Multiple Occupation and multi-unit blocks present the most complex pest management challenges for landlords. The combination of multiple occupants, shared facilities, interconnected building services, and variable hygiene standards creates an environment where pest problems can develop rapidly and are difficult to resolve without a coordinated approach.
      </p>

      <h3>Enhanced Landlord Responsibilities</h3>
      <p>
        In HMOs, the landlord has enhanced responsibilities that go beyond those for standard single-let properties. <strong>Mandatory HMO licensing</strong> (required for properties with five or more occupants forming two or more separate households) typically includes <strong>pest management conditions</strong> as part of the licence. Many local authorities require landlords to demonstrate that they have a documented pest management plan, carry out regular inspections of common areas, and respond promptly to pest reports. Failure to comply with licence conditions can result in the licence being revoked, prosecution, and unlimited fines. Even for HMOs that do not require mandatory licensing, the landlord&apos;s management obligations under the <strong>Management of Houses in Multiple Occupation (England) Regulations 2006</strong> include maintaining the property in a state of repair and keeping all common parts clean.
      </p>

      <h3>Why Individual Treatment Fails</h3>
      <p>
        One of the most common and expensive mistakes landlords make in multi-unit properties is treating pest problems on a unit-by-unit basis. This approach fails because pests &mdash; particularly <strong>cockroaches, bed bugs, and rodents</strong> &mdash; travel freely between units through shared risers, pipework, cable routes, ductwork, and gaps around party walls. Treating one unit simply drives the pests into adjacent units, from which they return once the treatment effect diminishes. The only effective approach is a <strong>coordinated treatment plan covering all affected units simultaneously</strong>. This requires the landlord to identify the full extent of the infestation, arrange access to all affected units at the same time, and engage a pest controller capable of carrying out a building-wide treatment.
      </p>

      <h3>Communication Protocol</h3>
      <p>
        Effective pest management in HMOs requires a clear communication protocol. All tenants should be aware of how to report pest sightings (ideally in writing, via email or an online portal), who to report to (the landlord, agent, or building manager), what constitutes a potential pest issue (droppings, unusual smells, live or dead insects, damage to packaging), and what steps the landlord will take in response. Regular communication &mdash; for example, a notice in common areas reminding tenants of pest prevention measures &mdash; helps maintain awareness and early reporting.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>For HMOs and multi-unit blocks, a single reactive callout is almost never sufficient.</strong> Cockroaches and bed bugs travel between units &mdash; you need a coordinated treatment plan covering all affected units simultaneously. Budget for building-wide treatment from the outset, not unit-by-unit callouts that will fail and need repeating.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: Pest Prevention for Landlords */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="prevention">Pest Prevention for Landlords</h2>

      <p>
        Proactive pest prevention is the most cost-effective approach to pest management for any landlord. The cost of prevention is a fraction of the cost of treatment, lost rent, property damage, and potential legal action. The following strategies should form part of every landlord&apos;s property management routine.
      </p>

      <h3>Between-Tenancy Inspection and Deep Clean</h3>
      <p>
        The void period between tenancies is the ideal time for a thorough pest inspection and any necessary treatment. This should include a <strong>professional pest inspection</strong> (checking for droppings, gnaw marks, insect activity, nesting material, and other signs of pest activity), a <strong>deep clean</strong> of the entire property (particularly the kitchen, bathroom, and any areas where food waste may have accumulated), inspection and treatment of <strong>carpets and soft furnishings</strong> in furnished lets (for carpet moths, fleas, and bed bugs), and checking that all <strong>previous tenant rubbish and food</strong> has been removed from the property, garden, and bin stores.
      </p>

      <h3>Structural Proofing During Void Periods</h3>
      <p>
        Use the void period to carry out <strong>pest proofing works</strong>: seal all gaps around pipe runs and cable entry points with wire wool and sealant (mice cannot gnaw through wire wool), replace damaged or missing airbricks and vent covers (fit mesh with openings no larger than 6 millimetres), fit brush strips or metal kick plates to external doors, check and repair pointing, rendering, and brickwork, inspect the roof space for gaps, damaged soffits, and missing tiles, and check all drain covers and surrounds for damage.
      </p>

      <h3>Drain Surveys</h3>
      <p>
        For properties with <strong>persistent or recurring rat problems</strong>, a CCTV drain survey is essential. Broken drains, collapsed pipes, missing interceptor traps, and displaced joints provide direct routes for rats from the sewer system into the building. A drain survey typically costs <strong>&pound;150 to &pound;400</strong> and can identify problems that no amount of above-ground treatment will resolve. Landlords should consider a drain survey every 3 to 5 years as preventive maintenance, or immediately if a rat problem persists after professional treatment.
      </p>

      <h3>Bin Store Management</h3>
      <p>
        External waste storage is one of the primary attractants for rodents and flies. Bin stores should be <strong>enclosed</strong> (ideally with a hard-standing base and a roof), positioned <strong>away from the building entrance</strong>, cleaned regularly, and checked for damage. Ensure tenants have adequate bin capacity &mdash; overflowing bins because the landlord has not provided enough capacity are the landlord&apos;s problem to solve.
      </p>

      <h3>Tenancy Agreement Pest Clause</h3>
      <p>
        Include a <strong>pest control clause</strong> in the tenancy agreement that sets clear expectations. The clause should require tenants to report any signs of pest activity within 48 hours, maintain reasonable cleanliness, store food in sealed containers, dispose of waste regularly, and not feed birds or leave food outside. It should also state that the landlord is responsible for pest problems caused by structural defects or pre-existing conditions, and the tenant is responsible for pest problems caused by their own behaviour. This clause provides a clear framework for determining responsibility if a pest issue arises.
      </p>

      <h3>Regular Property Inspections</h3>
      <p>
        <strong>Quarterly property inspections</strong> should include a check for signs of pest activity: droppings, gnaw marks, damaged packaging, live or dead insects, unusual smells, and the condition of pest proofing measures. Document your findings with photographs and notes. Regular inspections demonstrate proactive management and provide evidence of due diligence in any future dispute.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: Building a Pest Management Contract */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="portfolio-contract">Building a Pest Management Contract for Your Portfolio</h2>

      <p>
        For landlords with multiple properties, a <strong>portfolio pest management contract</strong> with a professional pest control provider is the most effective and cost-efficient approach. A portfolio contract provides systematic monitoring, rapid response, documented compliance, and significant cost savings compared to reactive, per-incident callouts.
      </p>

      <h3>Key Elements of a Portfolio Contract</h3>
      <p>
        When negotiating a pest management contract for your portfolio, ensure the following elements are included:
      </p>
      <ul>
        <li><strong>Per-property pricing vs portfolio pricing:</strong> Portfolio contracts offer discounts of <strong>15 to 30 per cent</strong> compared to individual property pricing. A provider covering 10+ properties should offer meaningful volume discounts.</li>
        <li><strong>Response time SLAs:</strong> The contract should specify response times &mdash; <strong>24 hours for emergency callouts</strong> (rodent sightings, wasp nests near children), 48 hours for routine reports, and a scheduled visit within 5 working days for non-urgent monitoring.</li>
        <li><strong>Between-tenancy inspection and treatment:</strong> This should be included as a standard service, triggered when you notify the provider of a void period.</li>
        <li><strong>Digital reporting:</strong> Modern pest control providers offer digital report portals where you can access visit reports, treatment records, and compliance documentation for all properties in one place. This is invaluable for HHSRS compliance and any future disputes.</li>
        <li><strong>BPCA or NPTA membership:</strong> The provider should hold membership of the British Pest Control Association (BPCA) or the National Pest Technicians Association (NPTA). This is the minimum standard expected by local authorities.</li>
        <li><strong>Public liability insurance:</strong> A minimum of <strong>&pound;5 million</strong> public liability insurance is standard for commercial pest control.</li>
        <li><strong>Coverage for all property types:</strong> Ensure the contract covers all property types in your portfolio &mdash; flats, houses, HMOs, and any commercial units.</li>
        <li><strong>Named account manager:</strong> For portfolio consistency, a named account manager who knows your properties and your tenants&apos; circumstances is invaluable.</li>
      </ul>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need a Pest Management Contract for Your Portfolio?"
          subtext="Compare BPCA and NPTA accredited commercial pest control providers offering portfolio contracts — free, no-obligation quotes."
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8: What to Do When a Tenant Reports a Pest Problem */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="tenant-complaint">What to Do When a Tenant Reports a Pest Problem</h2>

      <p>
        How you respond to a tenant&apos;s pest complaint can determine whether the situation is resolved quickly and cheaply, or escalates into a costly legal dispute. Follow this step-by-step process.
      </p>

      <h3>Step 1: Respond Within 24 Hours</h3>
      <p>
        Acknowledge the tenant&apos;s report <strong>within 24 hours</strong>, in writing (email is ideal). Thank the tenant for reporting promptly, confirm you are taking the matter seriously, and outline the next steps. Document everything from this point forward &mdash; dates, times, communications, actions taken. This documentation is essential evidence in any future dispute.
      </p>

      <h3>Step 2: Assess Responsibility</h3>
      <p>
        Determine whether the pest problem is likely the landlord&apos;s or the tenant&apos;s responsibility. Consider: is there a structural defect that could allow pest entry? Is there a history of pest problems at the property? What is the condition of the property&apos;s proofing? Has the tenant reported hygiene issues? In many cases, a definitive assessment cannot be made without a professional inspection.
      </p>

      <h3>Step 3: Instruct a Pest Controller</h3>
      <p>
        If the pest problem is or may be the landlord&apos;s responsibility, <strong>instruct a pest controller immediately</strong>. Do not delay while debating responsibility. Courts and local authorities look extremely unfavourably on landlords who delay treatment while arguing about who should pay. The cost of a prompt callout (&pound;100 to &pound;250) is insignificant compared to the cost of a disrepair claim, rent reduction, or enforcement action.
      </p>

      <h3>Step 4: If Tenant Responsibility</h3>
      <p>
        If the pest problem is clearly the tenant&apos;s responsibility (e.g., fleas from a pet, bed bugs from travel), inform the tenant <strong>in writing</strong>, explaining why, and offer to arrange treatment at the tenant&apos;s cost. Provide the contact details of your pest control provider. Even where responsibility is the tenant&apos;s, consider whether arranging and paying for treatment (with a view to recovering costs via the deposit) might be the faster and more effective approach.
      </p>

      <h3>Step 5: If Unclear — Treat First</h3>
      <p>
        If responsibility is genuinely unclear, <strong>treat first and establish responsibility after</strong>. A landlord who arranges prompt treatment and later discovers it was the tenant&apos;s responsibility has spent a few hundred pounds on a callout. A landlord who delays treatment while arguing about responsibility and then faces an improvement notice, disrepair claim, or tenant leaving early has spent thousands.
      </p>

      <h3>Step 6: Document and Follow Up</h3>
      <p>
        Document all actions taken: the pest controller&apos;s report, treatments applied, proofing recommendations, and any follow-up visits. Follow up with the tenant after treatment to confirm the problem has been resolved. If the pest controller has recommended proofing works, schedule these promptly.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Never ignore a tenant&apos;s pest complaint.</strong> Even if you believe the tenant is responsible, failure to investigate and respond can result in a disrepair claim, rent reduction, local authority enforcement, or the tenant leaving early. Always respond within 24 hours, investigate promptly, and document everything.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 9: Letting Agents and Property Managers */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="letting-agents">Letting Agents and Property Managers</h2>

      <p>
        If you use a letting agent or property management company, ensure that pest control is properly addressed within the management arrangement. This is an area where unclear delegation often leads to delayed responses and escalating problems.
      </p>

      <p>
        <strong>Authority to instruct:</strong> Ensure your agent has the authority to instruct pest control <strong>without waiting for landlord approval</strong> for standard callouts (up to a specified cost threshold, e.g., &pound;250). Delays while the agent waits for the landlord to return a call or email cause tenant frustration and can escalate a minor problem into a major complaint.
      </p>

      <p>
        <strong>Preferred supplier agreements:</strong> Ask your agent whether they have a preferred supplier agreement with a pest control company. A pre-agreed relationship with an accredited provider means faster response times, consistent quality, and often better pricing.
      </p>

      <p>
        <strong>Management fee scope:</strong> Check whether pest management is included within the management fee or treated as an additional cost. Some agents include routine pest control coordination within their standard fee; others charge it as a separate line item or pass the cost through at market rates.
      </p>

      <p>
        <strong>Record keeping:</strong> Your agent should maintain pest control records for each property &mdash; visit reports, treatment records, proofing recommendations, and tenant communications. These records are essential for HHSRS compliance and for defending against any future disrepair claims.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 10: Awaab's Law, Damp & Mould: The Pest Connection */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="awaabs-law">Awaab&apos;s Law, Damp &amp; Mould: The Pest Connection Landlords Are Missing</h2>

      <p>
        The connection between damp, mould, and pest infestations is one of the most important &mdash; and most overlooked &mdash; issues in landlord pest management. The introduction of Awaab&apos;s Law has made this connection legally critical. Landlords who understand it will be better prepared for the obligations that now apply to social landlords and will soon extend to the private rented sector.
      </p>

      <h3>What Is Awaab&apos;s Law?</h3>
      <p>
        Awaab&apos;s Law is named after <strong>Awaab Ishak</strong>, a two-year-old who died in December 2020 from prolonged exposure to mould in his family&apos;s social housing flat in Rochdale. The subsequent coroner&apos;s report and public outcry led to legislative action. The law was introduced through the <strong>Social Housing (Regulation) Act 2023</strong> and came into force on <strong>27 October 2025</strong> (Phase 1, covering emergency hazards, damp, and mould).
      </p>
      <p>
        <strong>Phase 2</strong> (expected 2026) will extend to excess cold and heat, falls, structural collapse, fire, electrical hazards, and hygiene. <strong>Phase 3</strong> (expected 2027) will cover all remaining HHSRS hazards except overcrowding. The law currently applies to <strong>registered social housing providers</strong>, but the <strong>Renters&apos; Rights Act</strong> is expected to extend similar obligations to <strong>private landlords</strong>. All private landlords should be preparing now.
      </p>

      <h3>The Legal Timeframes</h3>
      <p>
        Awaab&apos;s Law prescribes specific timeframes that landlords must meet:
      </p>
      <ul>
        <li><strong>Investigate</strong> a potential damp or mould hazard: within <strong>10 working days</strong> of receiving a report</li>
        <li><strong>Written summary</strong> to tenant: within <strong>3 working days</strong> of the investigation concluding</li>
        <li><strong>Safety work</strong> completed: within <strong>5 working days</strong></li>
        <li><strong>Supplementary preventive works</strong> begun: within <strong>5 working days</strong>, completed within <strong>12 weeks</strong></li>
        <li><strong>Emergency hazards:</strong> investigate AND make safe within <strong>24 hours</strong></li>
        <li>If the property cannot be made safe in time: offer suitable <strong>alternative accommodation</strong> at the landlord&apos;s expense</li>
      </ul>
      <p>
        Non-compliance exposes the landlord to court action by the tenant, enforcement orders, compensation awards, legal costs, and loss of rent during any period of non-compliance.
      </p>

      <h3>Why Damp and Mould Mean Pest Problems</h3>
      <p>
        Damp environments attract a specific group of pests that thrive in high-humidity conditions. If your property has a damp or mould problem, you almost certainly have &mdash; or will soon have &mdash; a pest problem as well:
      </p>
      <ul>
        <li><strong>Booklice (psocids)</strong> are the <strong>number one indicator</strong> of a damp problem. These tiny (1 to 2mm) insects feed on mould spores and are almost always present where humidity is too high. Finding booklice means humidity is above 60&ndash;70% and conditions are ripe for mould growth.</li>
        <li><strong>Mould mites</strong> feed directly on mould and can be present in enormous numbers wherever mould is established. They are too small to see individually but appear as a fine, moving dust on affected surfaces.</li>
        <li><strong>Silverfish</strong> thrive in damp bathrooms, kitchens, and behind wallpaper where condensation forms. They feed on starch, including wallpaper paste, book bindings, and damp cardboard.</li>
        <li><strong>German cockroaches</strong> (<em>Blattella germanica</em>) are attracted to warm, humid environments and are commonly found in damp kitchens. Condensation behind kitchen units creates ideal harbourage conditions. See our <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">cockroach control guide</Link>.</li>
        <li><strong>Woodworm</strong> (furniture beetle larvae) are attracted to damp timber. In rental properties with rising damp or penetrating damp, the moisture content of structural timbers can reach levels that attract woodworm, causing <strong>serious structural damage</strong>.</li>
        <li><strong>Carpet beetles</strong> and <strong>carpet moths</strong> thrive in humid conditions. Damp carpets in furnished lets are particularly vulnerable. See our <Link href="/guides/how-to-get-rid-of-moths" className="text-blue-600 hover:underline font-medium">moth control guide</Link>.</li>
      </ul>

      <p>
        If a tenant reports pest sightings <strong>alongside</strong> damp or mould, the underlying cause is often the same: excess moisture from poor ventilation, structural defects, or both. <strong>Treating the pests without addressing the damp will fail</strong> &mdash; the insects will return within weeks.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>If your tenant reports silverfish, booklice, or mould mites alongside damp or mould, treat the moisture problem first.</strong> Pest treatment alone will fail &mdash; the insects will return within weeks if the underlying damp is not resolved. Under Awaab&apos;s Law timeframes, you must investigate within 10 working days and begin remedial work within 5 working days.</p>
        </Callout>
      </div>

      <h3>Proactive Solutions: Dehumidifiers and PIV Units</h3>
      <p>
        The most effective approach to preventing damp-related pest problems is to control humidity at source. Two solutions stand out for rental properties:
      </p>

      <p>
        <strong>Dehumidifiers</strong> are essential for high-humidity properties, especially ground-floor flats, basements, and properties with poor natural ventilation. <strong>Compressor dehumidifiers</strong> are the most effective choice for heated rental properties &mdash; they extract moisture efficiently at normal room temperatures and can handle 12 to 20 litres per day. <strong>Desiccant dehumidifiers</strong> work better in unheated or colder spaces such as garages and storage areas. Landlords should provide a dehumidifier in any property with recurring condensation complaints &mdash; the cost is far less than mould remediation and pest treatment combined.
      </p>

      <p>
        <strong>Positive Input Ventilation (PIV) units</strong> are the single most effective long-term solution for condensation in rental properties. A PIV unit is installed in the loft hatch or on a wall and gently pushes filtered, dry air into the property, displacing moist air through natural leakage points. They cost <strong>&pound;200 to &pound;600 installed</strong> and run on approximately <strong>&pound;15 to &pound;30 per year</strong> in electricity. PIV units dramatically reduce condensation, mould growth, and the damp conditions that attract pests. Many social landlords are now installing PIV units as standard across their housing stock. Private landlords should follow this lead.
      </p>

      <p>
        <strong>Smart humidity monitors</strong> &mdash; devices like standalone hygrometers or smart sensors &mdash; allow landlords to remotely monitor humidity levels and act before mould and pests take hold. They also provide useful evidence in any dispute about whether damp is caused by a structural defect or tenant behaviour (e.g., drying clothes indoors without ventilation).
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>A PIV (Positive Input Ventilation) unit costs &pound;200&ndash;&pound;600 installed and around &pound;20/year to run.</strong> It&apos;s the single most cost-effective way to prevent condensation, mould, and the damp-loving pests that follow. Many landlords see ROI within the first avoided mould remediation job.</p>
        </Callout>
      </div>

      <h3>Recommended Products for Landlords</h3>
      <p>
        The following products are recommended for landlords managing damp, condensation, and the associated pest risks in rental properties.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Meaco MeacoDry Arete One 20L Dehumidifier"
          rating={4.6}
          features={[
            '20 litres/day extraction — suitable for 2–5 bed properties',
            'Low energy consumption (255W) — under 5p/hour to run',
            'Laundry mode for faster drying',
            'Quiet operation (37dB) — won\'t disturb tenants',
            'Auto-restart after power cut — ideal for unattended rental properties',
          ]}
          price="£199.99"
          asin="B093TK2M7F"
          bestFor="Best Overall"
          rank={1}
        />

        <ProductCard
          name="EcoAir DD1 Simple MK3 Desiccant Dehumidifier"
          rating={4.4}
          features={[
            'Desiccant technology — works efficiently in cold/unheated spaces',
            '7.5 litres/day extraction capacity',
            'Lightweight and portable — easy to move between properties',
            'Ideal for garages, basements, and void properties',
            'Rotary compressor-free — operates down to 1°C',
          ]}
          price="£139.99"
          asin="B00474K8SY"
          bestFor="Best for Unheated Spaces"
          rank={2}
        />

        <ProductCard
          name="ThermoPro TP50 Digital Hygrometer"
          rating={4.5}
          features={[
            'Displays temperature and humidity with high/low records',
            'Comfort level indicator — shows when humidity is too high',
            'Compact size — ideal for placing in each room of a rental',
            'Battery powered — no wiring required',
            'Budget-friendly — buy multiple for different rooms',
          ]}
          price="£8.99"
          asin="B01H1R0K68"
          bestFor="Best Budget Monitor"
          rank={3}
        />

        <ProductCard
          name="HG Mould Spray 500ml"
          rating={4.5}
          features={[
            'Removes mould effectively from walls, ceilings, tiles, and grout',
            'Chlorine-based formula — kills mould at the root',
            'Easy spray application — no scrubbing required',
            'Works on painted surfaces, silicone, and plaster',
            'Essential for between-tenancy mould treatment',
          ]}
          price="£5.99"
          asin="B000IU40HQ"
          bestFor="Best Mould Treatment"
          rank={4}
        />
      </div>

      <p className="text-xs text-gray-400 italic">
        As an Amazon Associate, PestPro Index earns from qualifying purchases. Product prices are approximate and may vary.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p><strong>Mould remediation for a single room costs &pound;300&ndash;&pound;1,000. A full property treatment can reach &pound;3,000&ndash;&pound;5,000. A PIV unit preventing the problem entirely costs &pound;200&ndash;&pound;600. An annual pest contract covering damp-related pests adds &pound;400&ndash;&pound;800/year. Prevention is overwhelmingly cheaper than cure &mdash; especially under Awaab&apos;s Law timeframes.</strong></p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 11: Find a Commercial Pest Controller Near You */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="find-provider">Find a Commercial Pest Controller Near You</h2>

      <p>
        PestPro Index lists verified, accredited commercial pest control providers across the UK. Whether you need a pest management contract for your property portfolio, an emergency callout for a tenant complaint, or a between-tenancy inspection and treatment, use the links below to find commercial pest controllers in your area.
      </p>

      {/* Directory CTA */}
      <div className="not-prose my-8 p-8 bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-teal-300 rounded-2xl">
        <h3 className="text-2xl font-bold text-teal-900 mb-3">Need a Professional Pest Management Contract?</h3>
        <p className="text-teal-800 mb-6 leading-relaxed">Whether you manage a single buy-to-let or a portfolio of HMOs, a professional pest management contract with a BPCA or NPTA accredited provider protects your properties, your tenants, and your legal position. Compare providers in your area.</p>
        <a
          href="/guides/commercial-pest-control"
          className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors"
        >
          Find Commercial Pest Controllers &rarr;
        </a>
      </div>

      <div className="not-prose">
        <FindProviderCTA
          heading="Find a Commercial Pest Controller"
          subtext="Compare BPCA and NPTA accredited providers in your area — free, no-obligation quotes for commercial pest control contracts."
        />
      </div>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">London</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/birmingham/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Birmingham</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/manchester/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Manchester</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/liverpool/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Liverpool</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/leeds/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Leeds</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/nottingham/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Nottingham</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/brighton/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Brighton</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/sheffield/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Sheffield</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/bristol/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Bristol</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/glasgow/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Glasgow</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/bradford/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Bradford</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/newcastle/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Newcastle</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/cardiff/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Cardiff</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/edinburgh/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Edinburgh</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/leicester/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Leicester</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/hampshire/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Hampshire</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/coventry/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Coventry</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/belfast/residential" className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group">
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Belfast</span>
          <span className="block text-sm text-gray-500 mt-1">Find commercial providers &rarr;</span>
        </Link>
        <Link href="/pest-control/regions" className="block p-5 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-md hover:border-blue-400 transition-all group sm:col-span-2 lg:col-span-3">
          <span className="font-bold text-blue-700 group-hover:text-blue-800 transition-colors">Browse all 18 locations &rarr;</span>
        </Link>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 12: Frequently Asked Questions */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Is the landlord or tenant responsible for pest control?</h3>
      <p>
        It depends on the <strong>cause</strong> of the infestation. Landlords are responsible for pest problems caused by structural defects (gaps in the building fabric, damaged airbricks, defective drains, holes around pipe entry points) and any pre-existing infestations present before the tenancy began. Tenants are generally responsible for pest problems caused by their own behaviour (poor hygiene attracting mice, bed bugs from travel, fleas from pets). Where the cause is mixed &mdash; for example, mice entering through a structural gap but attracted by tenant food waste &mdash; the landlord is almost always held responsible because the structural entry point is the root cause. Under <strong>Section 11 of the Landlord and Tenant Act 1985</strong>, the landlord has a statutory obligation to maintain the structure and exterior, and pest entry through structural defects is a failure of this obligation.
      </p>

      <h3>Can a landlord charge a tenant for pest control?</h3>
      <p>
        Under the <strong>Tenant Fees Act 2019</strong>, landlords in England cannot charge tenants fees beyond rent, the tenancy deposit, and a limited number of permitted payments. If the pest problem is the landlord&apos;s responsibility, the landlord must pay. If the problem is clearly caused by the tenant (e.g., pet fleas), the landlord can ask the tenant to arrange treatment at their own cost, or arrange treatment and seek to recover costs via the deposit (provided the tenancy agreement supports this and the deduction is reasonable). Landlords should never delay treatment while arguing about payment &mdash; courts and local authorities look unfavourably on this.
      </p>

      <h3>What happens if a landlord ignores a pest complaint?</h3>
      <p>
        Ignoring a tenant&apos;s pest complaint can trigger multiple enforcement mechanisms. The tenant can report to the <strong>local authority</strong>, which can inspect under the HHSRS and serve improvement notices or prohibition orders. Under the <strong>Environmental Protection Act 1990</strong>, a pest infestation can be classified as a statutory nuisance, leading to an abatement notice with fines of up to &pound;20,000 for non-compliance. Since the <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, tenants can take landlords directly to court, with the court awarding remedial orders, compensation, and legal costs. Persistent failure to act can also result in <strong>rent repayment orders</strong> and <strong>banning orders</strong> under the Housing and Planning Act 2016.
      </p>

      <h3>Do I need pest control between tenancies?</h3>
      <p>
        Yes, a between-tenancy pest inspection is strongly recommended. The void period is the ideal time to inspect for signs of pest activity, carry out a deep clean, seal structural entry points, and treat any low-level infestations before the next tenant moves in. A professional pest inspection typically costs <strong>&pound;50 to &pound;100</strong>. Handing over a property with a pre-existing pest problem creates immediate landlord liability under the Homes (Fitness for Human Habitation) Act 2018.
      </p>

      <h3>Are landlords responsible for pest control in HMOs?</h3>
      <p>
        In HMOs, landlords have <strong>enhanced responsibilities</strong>. Common areas (shared kitchens, bathrooms, hallways, stairwells, gardens, bin stores) are always the landlord&apos;s responsibility. Mandatory HMO licence conditions often include specific pest management requirements. Pests in HMOs frequently spread between rooms via shared services, meaning the entire building typically needs coordinated treatment &mdash; which the landlord must arrange and fund. The <strong>Management of Houses in Multiple Occupation (England) Regulations 2006</strong> require landlords to maintain HMOs in a state of repair and keep common parts clean.
      </p>

      <h3>Can a tenant withhold rent due to a pest infestation?</h3>
      <p>
        Tenants in England and Wales do <strong>not</strong> have a general legal right to withhold rent. However, since the Homes (Fitness for Human Habitation) Act 2018, tenants can take landlords to court for a property that is unfit &mdash; and a serious pest infestation qualifies. The court can order remedial work and compensation. Tenants can also report to the local authority for HHSRS enforcement. In practice, if a tenant stops paying rent due to an unresolved pest problem, the landlord will find it extremely difficult to pursue possession proceedings while an outstanding disrepair claim exists.
      </p>

      <h3>How often should rental properties be inspected for pests?</h3>
      <p>
        <strong>Quarterly inspections</strong> that include a check for pest activity are recommended for most rental properties. Higher-risk properties (HMOs, older buildings, ground-floor flats, properties near waterways or restaurants) may benefit from monthly professional visits. At a minimum, inspect during every void period, every routine property inspection, and whenever a tenant reports a potential issue. Properties on a professional pest control contract benefit from systematic monitoring between inspections.
      </p>

      <h3>What pest control clause should I put in my tenancy agreement?</h3>
      <p>
        A well-drafted clause should require the tenant to: report pest sightings within 48 hours, maintain reasonable cleanliness, store food in sealed containers, dispose of waste regularly, not feed birds or leave food outside, and allow access for pest inspections and treatments. It should state that the landlord is responsible for structural defects and pre-existing conditions, and the tenant for problems caused by their behaviour. This sets clear expectations and provides a framework for resolving disputes. The clause cannot override the landlord&apos;s statutory obligations.
      </p>

      <h3>Does Awaab&apos;s Law apply to private landlords?</h3>
      <p>
        Awaab&apos;s Law currently applies to <strong>registered social housing providers</strong> only (since October 2025). However, the <strong>Renters&apos; Rights Act</strong> is expected to extend similar obligations to private landlords. Private landlords should prepare now: establish systems to investigate tenant reports within 10 working days, provide written summaries within 3 working days, complete safety work within 5 working days, and address emergency hazards within 24 hours. The existing <strong>Homes (Fitness for Human Habitation) Act 2018</strong> already gives private tenants the right to take landlords to court over unfit conditions, including damp, mould, and pest infestations.
      </p>

      <h3>Can damp and mould cause pest infestations?</h3>
      <p>
        Yes. Damp environments attract <strong>booklice</strong> (the number one indicator of excess humidity), <strong>mould mites</strong>, <strong>silverfish</strong>, <strong>German cockroaches</strong>, <strong>woodworm</strong>, and <strong>carpet beetles/moths</strong>. Mould mites feed directly on mould growth. Booklice feed on mould spores. Silverfish thrive in damp conditions behind wallpaper and in bathrooms. If a tenant reports pests alongside damp or mould, the underlying cause is usually the same &mdash; excess moisture from poor ventilation or structural defects. Treating the pests without resolving the damp will fail. Investing in ventilation (PIV units) and dehumidifiers is the most cost-effective long-term solution.
      </p>

      <p>
        For further reading, see our guides on <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">how to get rid of rats</Link>, <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">how to get rid of bed bugs</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, <Link href="/guides/how-to-get-rid-of-moths" className="text-blue-600 hover:underline font-medium">how to get rid of moths</Link>, <Link href="/guides/pigeon-control" className="text-blue-600 hover:underline font-medium">pigeon control</Link>, and <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">pest control costs UK 2026</Link>. For commercial guides, see <Link href="/guides/restaurant-pest-control" className="text-blue-600 hover:underline font-medium">restaurant pest control</Link>, <Link href="/guides/warehouse-pest-management" className="text-blue-600 hover:underline font-medium">warehouse pest management</Link>, <Link href="/guides/hotel-pest-control" className="text-blue-600 hover:underline font-medium">hotel pest control</Link>, and <Link href="/guides/office-pest-control" className="text-blue-600 hover:underline font-medium">office pest control</Link>.
      </p>
    </GuideLayout>
  );
}
