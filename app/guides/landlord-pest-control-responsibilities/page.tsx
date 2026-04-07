import type { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Landlord Pest Control Responsibilities UK — Who Pays & What the Law Says (2026) | PestPro Index",
    description:
      "UK landlords' legal obligations for pest control under the Landlord and Tenant Act, HHSRS and Awaab's Law. Who is responsible — landlord or tenant — and what you must do.",
    alternates: {
      canonical: 'https://pestproindex.com/guides/landlord-pest-control-responsibilities',
    },
    openGraph: {
      title: "Landlord Pest Control Responsibilities UK — Who Pays & What the Law Says (2026) | PestPro Index",
      description:
        "UK landlords' legal obligations for pest control under the Landlord and Tenant Act, HHSRS and Awaab's Law. Who is responsible — landlord or tenant — and what you must do.",
      url: 'https://pestproindex.com/guides/landlord-pest-control-responsibilities',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Landlord Pest Control Responsibilities UK: What the Law Actually Says (2026)',
  description:
    "UK landlords' legal obligations for pest control under the Landlord and Tenant Act, HHSRS and Awaab's Law.",
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
    '@id': 'https://pestproindex.com/guides/landlord-pest-control-responsibilities',
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
      name: 'Landlord Pest Control Responsibilities UK',
      item: 'https://pestproindex.com/guides/landlord-pest-control-responsibilities',
    },
  ],
};

const tocItems = [
  { id: 'general-position', title: 'The General Legal Position' },
  { id: 'hhsrs', title: 'HHSRS — When Pests Become a Legal Hazard' },
  { id: 'awaabs-law', title: "Awaab's Law and Damp & Mould" },
  { id: 'pest-responsibility', title: 'Specific Pests — Who Is Responsible?' },
  { id: 'what-to-do', title: 'What Landlords Should Do in Practice' },
  { id: 'tenancy-clauses', title: 'Tenancy Agreement Clauses' },
  { id: 'closing', title: 'Summary & Equipment Links' },
];

export default function LandlordPestControlResponsibilitiesPage() {
  return (
    <GuideLayout
      title="Landlord Pest Control Responsibilities UK: What the Law Actually Says (2026)"
      subtitle="Who is responsible for pest control in a rental property &mdash; landlord or tenant? The legal position under the Landlord and Tenant Act, HHSRS and Awaab&apos;s Law."
      lastUpdated="April 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Professional Pest Control vs DIY', href: '/guides/professional-pest-control-vs-diy' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Landlord Pest Control Guide', href: '/guides/landlord-pest-control' },
        { title: "Awaab's Law & Pest Control: What Landlords Need to Know", href: '/blog/awaabs-law-pest-control-landlords' },
      ]}
      relatedProducts={[
        { title: 'Professional Bait Station Kits', href: '/best/professional-bait-station-kits' },
        { title: 'Professional Bed Bug Steamers', href: '/best/professional-bed-bug-steamers' },
        { title: "Awaab's Law Damp & Mould Equipment", href: '/best/awaabs-law-damp-mould-equipment' },
        { title: 'Professional Insect Light Traps', href: '/best/professional-insect-light-traps' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >

      {/* Opening */}
      <p>
        Pest control responsibility is one of the most disputed areas of UK tenancy law. Landlords and tenants frequently disagree about who should pay. The answer depends on the type of pest, the cause of the infestation, the tenancy agreement wording, and &mdash; increasingly &mdash; new statutory obligations introduced by housing legislation. This guide sets out the legal position clearly, based on the Landlord and Tenant Act 1985, the Housing Health and Safety Rating System (HHSRS), and the direction set by Awaab&apos;s Law.
      </p>

      {/* Section 1: General Legal Position */}
      <h2 id="general-position">The General Legal Position</h2>

      <h3>Landlord Obligations Under the Landlord and Tenant Act 1985</h3>
      <p>
        Under <strong>Section 11 of the Landlord and Tenant Act 1985</strong>, landlords are responsible for keeping the structure and exterior of the property in repair. This includes the roof, external walls, foundations, drains, gutters, pipes and external doors and windows. If pests are entering the property through structural defects &mdash; holes in the roof, gaps in the fabric of the building, broken air bricks, damaged damp-proof courses, or cracked drainage &mdash; that is a <strong>landlord responsibility</strong> regardless of who caused the infestation. The landlord&apos;s duty to maintain the structure is non-negotiable and cannot be contracted out of in a tenancy agreement.
      </p>
      <p>
        This is a critical point that many landlords misunderstand. If rats are entering a property through a gap in the external brickwork, the landlord is responsible for both repairing the gap and dealing with the infestation &mdash; even if the tenant has been slow to report the problem or has contributed to attracting the rats through poor food storage. The structural obligation takes precedence.
      </p>

      <h3>Tenant Obligations</h3>
      <p>
        Tenants are generally responsible for:
      </p>
      <ul>
        <li>Infestations caused by their own behaviour &mdash; failing to store food properly, allowing rubbish to accumulate, keeping the property in an unhygienic state</li>
        <li>Minor pest issues that arise during a tenancy through no fault of the property &mdash; a single mouse that enters through an open door, moths introduced in clothing, fleas brought in by pets</li>
        <li>Maintaining basic standards of cleanliness and hygiene during the tenancy</li>
      </ul>

      <h3>The Grey Area</h3>
      <p>
        Most real-world cases fall into a grey area. A mouse problem might be caused by a structural gap in the floorboards (landlord responsibility) or by a tenant leaving food out on kitchen surfaces (tenant responsibility) &mdash; or, most commonly, by a combination of both. In practice, landlords are <strong>better served by treating and documenting the issue than arguing about liability</strong>. A landlord who acts promptly and keeps records is in a far stronger position than one who refuses to engage and then faces a complaint to the local authority.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>When in doubt, act first and discuss liability later. A landlord who treats a pest problem promptly demonstrates good faith. A landlord who refuses to act while arguing about whose fault it is risks enforcement action, compensation claims, and reputational damage.</p>
        </Callout>
      </div>

      {/* Section 2: HHSRS */}
      <h2 id="hhsrs">HHSRS &mdash; When Pest Problems Become a Legal Hazard</h2>
      <p>
        The <strong>Housing Health and Safety Rating System (HHSRS)</strong> rates 29 categories of housing hazard. Two are directly relevant to pest control:
      </p>
      <ul>
        <li><strong>Category: Domestic hygiene, pests and refuse</strong> &mdash; covers rats, mice, cockroaches, bedbugs and other infestation risks that arise from the condition or design of the dwelling</li>
        <li><strong>Category: Damp and mould growth</strong> &mdash; directly relevant to Awaab&apos;s Law and to moisture-dependent pests such as silverfish, booklice and mould mites</li>
      </ul>
      <p>
        A <strong>Category 1 hazard</strong> under HHSRS requires the local authority to take action. This can include improvement notices, prohibition orders, and <strong>civil penalties of up to &pound;30,000</strong> for failure to comply. In the most serious cases, landlords can face prosecution. Private landlords should treat HHSRS standards as the baseline minimum &mdash; not a ceiling.
      </p>
      <p>
        For landlords managing properties with rodent issues, <Link href="/best/professional-bait-station-kits" className="text-green-600 hover:underline">professional bait station kits</Link> provide tamper-resistant, documented rodent control that demonstrates proactive management to housing officers and environmental health inspectors.
      </p>

      {/* Section 3: Awaab's Law */}
      <h2 id="awaabs-law">Awaab&apos;s Law and Damp &amp; Mould</h2>
      <p>
        <strong>Awaab&apos;s Law</strong> (Section 42, Social Housing Regulation Act 2023) currently applies to registered social housing providers. It requires investigation of damp and mould hazards within <strong>14 days</strong> of a report, written remediation plans within <strong>7 days</strong> of completing the investigation, and emergency repairs within <strong>7 days</strong> where there is an imminent risk to health.
      </p>
      <p>
        Private landlords are not yet subject to Awaab&apos;s Law directly &mdash; but HHSRS enforcement against private landlords for damp and mould is <strong>increasing sharply</strong>. Councils are using HHSRS powers more aggressively since Awaab Ishak&apos;s case, and tenants are increasingly aware of their rights. Acting now is both the right thing to do and a practical risk management strategy. For a full breakdown of the equipment needed, see our <Link href="/best/awaabs-law-damp-mould-equipment" className="text-green-600 hover:underline">damp and mould equipment guide for landlords</Link>.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Damp-related pests &mdash; silverfish, booklice, mould mites &mdash; are a visible symptom of an underlying humidity problem. Treating the pests without fixing the damp is a short-term fix that will not satisfy a housing officer. Address ventilation and moisture first.</p>
        </Callout>
      </div>

      {/* Section 4: Pest Responsibility Table */}
      <h2 id="pest-responsibility">Specific Pests &mdash; Who Is Responsible?</h2>
      <table>
        <thead>
          <tr>
            <th>Pest</th>
            <th>Likely Responsible Party</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Rats</strong></td>
            <td>Usually landlord</td>
            <td>Entry typically through structural gaps &mdash; landlord obligation to maintain structure</td>
          </tr>
          <tr>
            <td><strong>Mice</strong></td>
            <td>Shared / depends</td>
            <td>Entry may be structural or behavioural &mdash; assess on a case-by-case basis</td>
          </tr>
          <tr>
            <td><strong>Cockroaches</strong></td>
            <td>Usually landlord (HMOs/flats)</td>
            <td>Structural harbourage in shared buildings is a landlord issue</td>
          </tr>
          <tr>
            <td><strong>Bed bugs</strong></td>
            <td>Usually tenant</td>
            <td>Typically introduced by tenant behaviour (travel, second-hand furniture)</td>
          </tr>
          <tr>
            <td><strong>Fleas</strong></td>
            <td>Usually tenant</td>
            <td>Typically introduced by tenant&apos;s pets</td>
          </tr>
          <tr>
            <td><strong>Wasps</strong></td>
            <td>Usually landlord</td>
            <td>Nest in roof/eaves is a structural harbourage issue</td>
          </tr>
          <tr>
            <td><strong>Moths</strong></td>
            <td>Usually tenant</td>
            <td>Behavioural/lifestyle related &mdash; introduced in clothing or food</td>
          </tr>
          <tr>
            <td><strong>Ants</strong></td>
            <td>Shared / depends</td>
            <td>May be structural (paving gaps, external walls) or behavioural</td>
          </tr>
          <tr>
            <td><strong>Silverfish, booklice, mould mites</strong></td>
            <td>Usually landlord</td>
            <td>Symptom of underlying damp &mdash; landlord&apos;s structural obligation</td>
          </tr>
        </tbody>
      </table>

      <h3>HMO-Specific Rules</h3>
      <p>
        In <strong>Houses in Multiple Occupation (HMOs)</strong>, landlords are almost always responsible for pest control. The common parts &mdash; hallways, kitchens, bathrooms, stairwells, bin stores and the building perimeter &mdash; are entirely under the landlord&apos;s control and maintenance obligation. Infestations in shared buildings typically spread through the building fabric (wall voids, pipe runs, ceiling cavities) rather than through individual tenant behaviour, making it a structural issue by default.
      </p>
      <p>
        HMO landlords should implement proactive pest monitoring as standard practice. <Link href="/best/professional-insect-light-traps" className="text-green-600 hover:underline">Commercial insect light traps</Link> in communal kitchens and bin stores provide early warning of cockroach, fly and stored-product moth activity before a full infestation develops. Combined with regular perimeter checks and tamper-resistant bait stations at entry points, this monitoring approach demonstrates the proactive management that local authorities expect from licensed HMO operators.
      </p>

      {/* Section 5: What Landlords Should Do */}
      <h2 id="what-to-do">What Landlords Should Do in Practice</h2>
      <ol>
        <li><strong>Inspect the property at the start of each tenancy</strong> &mdash; document the condition with dated photographs and a written inventory that notes any pest history or structural vulnerabilities</li>
        <li><strong>Act promptly when a pest problem is reported</strong> &mdash; do not delay, do not argue about liability. Acknowledge the report, investigate within days, and begin treatment as soon as the pest is identified</li>
        <li><strong>Use professional-grade treatment for serious infestations</strong> &mdash; rats, cockroaches and bed bugs rarely respond adequately to consumer products. Invest in <Link href="/best/professional-bait-station-kits" className="text-green-600 hover:underline">tamper-resistant bait station kits</Link> for rodent control and <Link href="/best/professional-bed-bug-steamers" className="text-green-600 hover:underline">professional bed bug steamers</Link> for heat treatment of furnished lets</li>
        <li><strong>Keep records</strong> &mdash; date reported, date investigated, date treated, treatment method used, products applied, follow-up inspection date and findings. This documentation is your evidence of compliance</li>
        <li><strong>For damp-related pests, address the underlying humidity problem</strong> &mdash; not just the pest. Silverfish, booklice and mould mites will return within weeks if the damp is not fixed</li>
      </ol>

      {/* Section 6: Tenancy Clauses */}
      <h2 id="tenancy-clauses">Tenancy Agreement Clauses</h2>
      <p>
        Landlords can include pest control clauses in tenancy agreements that assign tenant responsibility for infestations caused by their behaviour &mdash; for example, a clause stating that the tenant is responsible for flea treatment if they keep pets, or for food pest control if they fail to maintain reasonable hygiene standards. These clauses are legitimate and can help clarify expectations at the start of a tenancy.
      </p>
      <p>
        However, <strong>tenancy clauses cannot override statutory obligations</strong>. If the root cause of an infestation is structural &mdash; rats entering through gaps in the external fabric, cockroaches harboured in shared building voids, wasps nesting in the roof &mdash; a tenancy clause will not protect the landlord from enforcement action. Any clause must also be fair and transparent under the <strong>Consumer Rights Act 2015</strong>; an unfair term can be struck out by a court.
      </p>

      {/* Closing */}
      <h2 id="closing">Summary</h2>
      <p>
        The legal position on landlord pest control responsibilities comes down to three principles: <strong>maintain the structure</strong> (Landlord and Tenant Act 1985), <strong>eliminate hazards</strong> (HHSRS), and <strong>act promptly on complaints</strong> (the standard set by Awaab&apos;s Law). When in doubt, treat first and resolve liability later &mdash; a proactive landlord with documentation is always in a stronger position than a reactive one without it.
      </p>
      <p>
        For landlords who want to treat infestations themselves or provide equipment to managing agents:
      </p>
      <ul>
        <li><Link href="/best/professional-bait-station-kits" className="text-green-600 hover:underline">Professional bait station kits</Link> &mdash; tamper-resistant rodent control for rental properties</li>
        <li><Link href="/best/professional-bed-bug-steamers" className="text-green-600 hover:underline">Professional bed bug steamers</Link> &mdash; effective heat treatment for furnished lets</li>
        <li><Link href="/best/awaabs-law-damp-mould-equipment" className="text-green-600 hover:underline">Awaab&apos;s Law damp and mould equipment</Link> &mdash; PIV units, dehumidifiers and compliance documentation tools</li>
      </ul>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Pest Control for a Rental Property?"
          subtext="Compare BPCA-certified pest controllers near you — free, no-obligation quotes for landlords and managing agents"
        />
      </div>

      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/best/professional-bait-station-kits"
          className="inline-block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Professional Bait Station Kits &rarr;
        </Link>
        <Link
          href="/best/awaabs-law-damp-mould-equipment"
          className="inline-block text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Awaab&apos;s Law Equipment Guide &rarr;
        </Link>
      </div>
    </GuideLayout>
  );
}
