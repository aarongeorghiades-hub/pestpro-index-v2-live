import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Woodworm Treatment UK — Identification, Causes & How to Treat | PestPro Index',
    description:
      'Complete guide to woodworm treatment in the UK. Learn how to identify woodworm, understand the causes, DIY and professional treatment options, and how to protect your property.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/woodworm-treatment',
    },
    openGraph: {
      title: 'Woodworm Treatment UK — Identification, Causes & How to Treat | PestPro Index',
      description:
        'Complete guide to woodworm treatment in the UK. Learn how to identify woodworm, understand the causes, DIY and professional treatment options, and how to protect your property.',
      url: 'https://pestproindex.com/guides/woodworm-treatment',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Woodworm Treatment UK — Identification, Causes & How to Treat',
  description:
    'Complete guide to woodworm treatment in the UK. Learn how to identify woodworm, understand the causes, DIY and professional treatment options, and how to protect your property.',
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
    '@id': 'https://pestproindex.com/guides/woodworm-treatment',
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
      name: 'Woodworm Treatment',
      item: 'https://pestproindex.com/guides/woodworm-treatment',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if woodworm is active?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fresh exit holes with sharp clean edges and fine powdery dust (frass) beneath them indicate active woodworm. Old holes with darkened edges and no dust are likely historic and inactive. Clean away all existing dust in autumn and check again in June-August — fresh dust means active infestation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I treat woodworm myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, small-scale furniture beetle infestations in accessible timber can be treated DIY with permethrin-based woodworm treatment fluid. Apply by sprayer or brush, two coats 24 hours apart, wearing a respirator, goggles, and chemical-resistant gloves. Do not attempt DIY treatment of structural timbers, deathwatch beetle, or house longhorn beetle.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does professional woodworm treatment cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional spray treatment for a typical 3-bed house costs \u00a3500\u2013\u00a31,500. Timber replacement costs \u00a31,000\u2013\u00a35,000+. Specialist deathwatch beetle treatment in listed buildings can cost \u00a35,000\u2013\u00a320,000+. Always get at least two quotes from BPCA-accredited companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does woodworm spread from house to house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woodworm does not spread between houses in the way that rat or mouse infestations do. Adult beetles can fly and may enter a property through open windows, but they only lay eggs in timber with suitable moisture content (above 18%). Keeping your timber dry is the most effective prevention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will woodworm affect my mortgage application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woodworm flagged on a homebuyer survey may cause a mortgage lender to require a specialist timber report and treatment guarantee before releasing funds. Many flagged infestations are historic and inactive. An independent specialist report can confirm this and satisfy the lender.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does woodworm treatment last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional permethrin-based treatments typically come with a 20\u201330 year guarantee. The chemical residue remains in the timber and kills any larvae that subsequently hatch. DIY treatments provide similar chemical protection but without a transferable guarantee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is woodworm covered by home insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard home insurance policies typically do not cover woodworm treatment or damage, as it is classified as a maintenance issue rather than a sudden event. Some specialist policies include timber treatment cover. Check your policy wording or ask your insurer directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can woodworm come back after treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woodworm can return if the underlying moisture problem is not fixed. If timber moisture content remains above 18%, new beetles may lay eggs in untreated areas. The key to permanent prevention is fixing damp, improving ventilation, and ensuring all accessible timber has been treated.',
      },
    },
  ],
};

const tocItems = [
  { id: 'what-is-woodworm', title: 'What Is Woodworm?' },
  { id: 'active-vs-inactive', title: 'Active vs Inactive Woodworm' },
  { id: 'causes', title: 'What Causes Woodworm?' },
  { id: 'damage', title: 'How Serious Is Woodworm Damage?' },
  { id: 'diy-treatment', title: 'DIY Woodworm Treatment' },
  { id: 'professional-treatment', title: 'Professional Woodworm Treatment' },
  { id: 'listed-buildings', title: 'Woodworm in Listed Buildings' },
  { id: 'property-sales', title: 'Woodworm and Property Sales' },
  { id: 'products', title: 'Recommended Products' },
  { id: 'find-provider', title: 'Find a Pest Control Provider' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function WoodwormTreatmentPage() {
  return (
    <GuideLayout
      title="Woodworm Treatment: The Complete UK Guide (2026)"
      subtitle="A comprehensive guide to identifying, treating, and preventing woodworm in UK homes &mdash; from DIY treatments to professional solutions and property sale advice"
      lastUpdated="March 2026"
      readingTime="20 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'How to Get Rid of Rats: Complete UK Guide', href: '/guides/how-to-get-rid-of-rats' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Cockroaches: Complete UK Guide', href: '/guides/how-to-get-rid-of-cockroaches' },
        { title: 'How to Get Rid of Fleas: Complete UK Guide', href: '/guides/how-to-get-rid-of-fleas' },
        { title: 'How to Get Rid of Ants: Complete UK Guide', href: '/guides/how-to-get-rid-of-ants' },
        { title: 'How to Get Rid of Moths: Complete UK Guide', href: '/guides/how-to-get-rid-of-moths' },
        { title: 'How to Get Rid of Silverfish: Complete UK Guide', href: '/guides/how-to-get-rid-of-silverfish' },
        { title: 'How to Get Rid of Foxes: Complete UK Guide', href: '/guides/how-to-get-rid-of-foxes' },
        { title: 'How to Get Rid of Squirrels: Complete UK Guide', href: '/guides/how-to-get-rid-of-squirrels' },
        { title: 'Pigeon Control: Complete UK Guide', href: '/guides/pigeon-control' },
        { title: 'Pest Control Costs UK 2026', href: '/guides/pest-control-costs' },
        { title: 'Landlord Pest Control: Complete UK Guide', href: '/guides/landlord-pest-control' },
        { title: 'Carpet Beetle Control: Complete UK Guide', href: '/guides/carpet-beetle-control' },
      ]}
      relatedProducts={[
        { title: 'Best Woodworm Treatments UK 2026', href: '/best/woodworm-treatments' },
        { title: 'Best Carpet Beetle Treatments UK 2026', href: '/best/carpet-beetle-treatments' },
        { title: 'Best Silverfish Treatments UK 2026', href: '/best/silverfish-treatments' },
        { title: 'Best Rat Traps UK 2026', href: '/best/rat-traps' },
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Wasp Killers UK 2026', href: '/best/wasp-killers' },
        { title: 'Best Cockroach Killers UK 2026', href: '/best/cockroach-killers' },
        { title: 'Best Flea Treatments UK 2026', href: '/best/flea-treatments' },
        { title: 'Best Ant Killers UK 2026', href: '/best/ant-killers' },
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Bed Bug Treatments UK 2026', href: '/best/bed-bug-treatments' },
        { title: 'Best Fox Deterrents UK 2026', href: '/best/fox-deterrents' },
        { title: 'Best Squirrel Deterrents UK 2026', href: '/best/squirrel-deterrents' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* INTRODUCTION */}
      {/* ------------------------------------------------------------------ */}

      <p>
        Woodworm is one of the most frequently flagged issues on UK property surveys, yet it remains widely misunderstood by homeowners, buyers, and even some surveyors. The term &ldquo;woodworm&rdquo; does not refer to a worm at all &mdash; it describes the larval stage of several species of wood-boring beetle that tunnel through structural and decorative timber, leaving characteristic exit holes when the adult beetles eventually emerge. In the UK, woodworm affects properties of every age, from pre-Georgian oak-framed buildings to modern softwood-framed homes, and it is responsible for millions of pounds of timber damage and unnecessary treatment expenditure every year.
      </p>

      <p>
        The challenge for homeowners is distinguishing between <strong>active woodworm that requires treatment</strong> and <strong>historic, inactive infestations that do not</strong>. Many properties in the UK carry the visible scars of woodworm infestations that ended decades ago, yet these old exit holes continue to trigger survey recommendations and expensive treatment proposals &mdash; sometimes from companies with a financial interest in recommending unnecessary work. Understanding the difference between active and inactive woodworm, knowing what causes infestations in the first place, and being able to evaluate treatment options critically can save you significant time, money, and stress.
      </p>

      <p>
        This guide provides a comprehensive, UK-focused overview of woodworm. It covers what woodworm actually is, how to tell whether an infestation is active or historic, the environmental conditions that cause woodworm, how serious the damage can be, practical DIY treatment methods for small-scale problems, what professional treatment involves, special considerations for listed buildings, how woodworm affects property sales and mortgage applications, and recommended products for both treatment and diagnosis. Whether you are a homeowner who has just noticed holes in your loft timbers, a buyer whose survey has flagged woodworm, or a landlord assessing treatment options for a rental property, the information below will help you make informed decisions.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: What Is Woodworm? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="what-is-woodworm">What Is Woodworm?</h2>

      <p>
        &ldquo;Woodworm&rdquo; is a generic term for the <strong>larvae of wood-boring beetles</strong> that tunnel through timber as they feed and grow. The name is misleading &mdash; woodworm are not worms at all, but the juvenile, grub-like stage of several beetle species. It is these larvae, hidden inside the timber and invisible from the outside, that cause the actual damage. The small round holes that homeowners notice on the surface of timber are <strong>exit holes</strong>, created when the fully developed adult beetle chews its way out of the wood to mate and lay eggs. By the time you see the holes, the beetle has already left.
      </p>

      <h3>Common Furniture Beetle (<em>Anobium punctatum</em>)</h3>
      <p>
        The Common Furniture Beetle is responsible for approximately <strong>75 per cent of all woodworm infestations in the UK</strong>. The adult beetle is small, measuring 3 to 5 millimetres in length, with a brown body and a distinctive hooded thorax. It creates <strong>exit holes of 1 to 2 millimetres in diameter</strong> &mdash; roughly the size of a pin head. The larvae are creamy-white, C-shaped grubs that bore through softwood and the sapwood of hardwood timbers for a period of <strong>2 to 5 years</strong> before pupating and emerging as adults. The frass (bore dust) produced by Common Furniture Beetle larvae is fine, gritty, and lemon-shaped under magnification &mdash; a key identification feature. This species attacks both structural timber (roof timbers, joists, floorboards) and furniture, and it has a strong preference for damp timber with a moisture content above 18 per cent.
      </p>

      <h3>Deathwatch Beetle (<em>Xestobium rufovillosum</em>)</h3>
      <p>
        The Deathwatch Beetle is the most serious wood-boring pest affecting <strong>historic buildings</strong> in the UK. It primarily attacks old hardwood &mdash; particularly oak &mdash; that has been softened by prior fungal decay. The adult beetle is larger than the furniture beetle, measuring 6 to 9 millimetres, with a mottled brown appearance. Exit holes are <strong>3 to 4 millimetres in diameter</strong>, and the frass is coarser and disc-shaped, often containing visible pellets. The larvae can bore through oak for <strong>4 to 10 years</strong> before emerging, and in severely affected timbers, the internal structure can be almost entirely consumed while the outer surface appears largely intact. Deathwatch Beetle is most commonly found in <strong>churches, manor houses, and pre-18th century timber-framed buildings</strong> across southern and central England. Its name derives from the tapping sound the adult beetle makes by striking its head against timber &mdash; historically heard during quiet deathbed vigils.
      </p>

      <h3>House Longhorn Beetle (<em>Hylotrupes bajulus</em>)</h3>
      <p>
        The House Longhorn Beetle is <strong>rare in the UK</strong> but is a notifiable pest in certain areas, particularly <strong>north-west Surrey and north-east Hampshire</strong>, where Building Regulations require pre-treatment of new structural softwood. The adult is large, 10 to 25 millimetres in length, with very long antennae. Exit holes are <strong>6 to 10 millimetres in diameter</strong> &mdash; significantly larger and more oval than those of the furniture beetle. The larvae cause <strong>severe structural damage</strong>, boring extensive galleries through the sapwood of softwood timbers. A single generation can reduce roof timbers to a fragile shell. If you suspect House Longhorn Beetle, professional assessment is essential and urgent.
      </p>

      <h3>Powderpost Beetle (<em>Lyctus brunneus</em>)</h3>
      <p>
        Powderpost Beetles attack the <strong>sapwood of tropical and temperate hardwoods</strong> with high starch content. They are relatively uncommon in UK domestic properties but can be found in imported hardwood furniture, flooring, and plywood. Exit holes are 1 to 2 millimetres in diameter, similar to the furniture beetle, but the frass is extremely fine and flour-like &mdash; hence the name &ldquo;powderpost.&rdquo; Affected timber can be reduced to a powder held together only by a paper-thin outer skin.
      </p>

      <h3>The Woodworm Life Cycle</h3>
      <p>
        All wood-boring beetles follow the same basic life cycle. The adult female beetle lays eggs in <strong>cracks, crevices, and existing exit holes</strong> in timber. The eggs hatch after 2 to 5 weeks, and the tiny larvae bore into the wood, where they spend the next <strong>2 to 5 years</strong> (or longer for deathwatch and house longhorn species) tunnelling through the timber, feeding on cellulose and starch. When the larva is fully grown, it pupates in a chamber just below the surface. The adult beetle then emerges through the surface, creating the characteristic <strong>exit hole</strong>, and lives for only <strong>2 to 3 weeks</strong> &mdash; just long enough to mate and lay eggs, starting the cycle again. The peak emergence period in the UK is <strong>May to September</strong>, with the highest activity in June and July.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>The small round holes you see in timber are <strong>EXIT holes</strong> &mdash; the adult beetles have already left. The real damage was done by larvae tunnelling inside the wood for 2&ndash;5 years before emerging. Fresh holes with fine dust (frass) beneath them indicate active woodworm. Old holes with no dust may be historic and inactive.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <StatCallout value="75%" label="of UK woodworm cases are Common Furniture Beetle" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Active vs Inactive Woodworm */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="active-vs-inactive">Active vs Inactive Woodworm</h2>

      <p>
        The single most important question when assessing woodworm is whether the infestation is <strong>active or inactive</strong>. This distinction determines whether treatment is necessary and, if so, how urgently. Many UK properties &mdash; particularly those built before 1960 &mdash; have visible woodworm holes in roof timbers, floorboards, and joists that are the legacy of infestations that ended decades ago. These historic holes often trigger survey recommendations and treatment proposals, but if the infestation is genuinely inactive, no treatment is required. Understanding the signs of active versus inactive woodworm can save you thousands of pounds in unnecessary work.
      </p>

      <h3>Signs of Active Woodworm</h3>
      <p>
        Active woodworm produces a number of distinctive indicators. The most reliable sign is <strong>fresh exit holes with sharp, clean edges</strong>. Newly created exit holes appear light in colour (matching the fresh wood beneath the surface) and have crisp, well-defined edges that have not yet been weathered or darkened. Beneath and around fresh exit holes, you will find <strong>fine powdery dust called frass</strong>. For Common Furniture Beetle, frass is gritty and lemon-shaped under a magnifying glass. For Deathwatch Beetle, frass is coarser with visible disc-shaped pellets. The presence of frass on surfaces below the timber &mdash; on stored boxes in the loft, on the floor beneath joists, on windowsills &mdash; is the single most reliable indicator of active infestation.
      </p>

      <p>
        Other signs of active woodworm include <strong>tunnels visible in exposed or broken timber</strong>, <strong>timber that feels weak or crumbly</strong> when probed with a screwdriver or knife, <strong>live adult beetles</strong> found on windowsills or near timber (most commonly seen between May and September), and <strong>live larvae</strong> visible in broken or cut timber &mdash; creamy-white, C-shaped grubs typically 4 to 7 millimetres long for furniture beetle. Dead beetles found on windowsills and in light fittings during summer months can also indicate an active population in nearby timbers.
      </p>

      <h3>Signs of Inactive Woodworm</h3>
      <p>
        Inactive woodworm is characterised by exit holes that have <strong>darkened and weathered edges</strong>. Over time, exposure to air and dust darkens the interior of the holes, and the sharp edges become softened and rounded. Crucially, there is <strong>no fresh frass dust</strong> beneath or around the holes. The timber itself feels <strong>solid and sound</strong> when probed, even though the surface shows holes. Many older properties have timber with hundreds of exit holes that have been inactive for 20, 30, or even 50 years. The holes remain visible indefinitely, but absent fresh frass and fresh-coloured holes, there is no evidence of ongoing activity.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Many damp/timber surveys <strong>overdiagnose woodworm</strong>. If the holes are old, dark, and there&apos;s no fresh frass dust, the infestation may have been inactive for years. Get a second opinion from a <strong>BPCA-accredited pest controller</strong> before committing to expensive treatment &mdash; not a damp proofing company that profits from selling treatment.</p>
        </Callout>
      </div>

      <div className="not-prose">
        <Callout type="tip">
          <p>To test whether woodworm is active: <strong>clean away all existing dust</strong> from the holes in autumn, then check again in June&ndash;August the following year. Fresh dust = active. No dust = historic and likely inactive.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: What Causes Woodworm? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="causes">What Causes Woodworm?</h2>

      <p>
        Understanding why woodworm infests certain timbers and not others is essential for both treatment and prevention. Woodworm is not random &mdash; it requires specific environmental conditions, and the single most important factor is <strong>moisture</strong>.
      </p>

      <h3>Moisture &mdash; The Number One Factor</h3>
      <p>
        Timber moisture content is the <strong>primary determinant</strong> of whether woodworm can establish and sustain an infestation. Common Furniture Beetle larvae require timber with a moisture content <strong>above 18 to 20 per cent</strong> to thrive. Below approximately <strong>12 per cent moisture content</strong>, larvae cannot survive &mdash; they dehydrate and die within the timber. This is why woodworm is overwhelmingly found in timbers that are exposed to damp conditions: <strong>subfloor timbers in properties without an effective damp-proof course</strong>, <strong>roof timbers affected by leaks or condensation</strong>, <strong>joists built into or in contact with damp external walls</strong>, <strong>timbers in unventilated loft spaces where condensation forms on the underside of roof felt</strong>, and <strong>timbers near leaking plumbing</strong>. In centrally heated UK homes where structural timber is kept dry, woodworm struggles to survive &mdash; which is precisely why so many old infestations became inactive once central heating was installed in the mid-to-late 20th century.
      </p>

      <h3>Sapwood vs Heartwood</h3>
      <p>
        Wood-boring beetles, particularly Common Furniture Beetle, show a strong preference for <strong>sapwood over heartwood</strong>. Sapwood is the outer, younger wood of a tree that was actively conducting water and nutrients when the tree was alive. It contains more starch and sugar than heartwood and has a more open cellular structure, making it easier for larvae to bore through and more nutritious. Heartwood, the older inner wood, is denser, lower in starch, and often contains natural chemicals (tannins, resins) that deter boring insects. In modern construction, where timber is often <strong>fast-grown softwood with a high proportion of sapwood</strong>, more of the timber is vulnerable to attack than in traditional construction using slower-grown, higher-heartwood timber.
      </p>

      <h3>Species Preferences</h3>
      <p>
        Different beetle species target different types of timber. <strong>Common Furniture Beetle</strong> attacks softwoods (pine, spruce) and the sapwood of European hardwoods &mdash; it is equally at home in roof rafters, floorboards, and antique furniture. <strong>Deathwatch Beetle</strong> primarily attacks old hardwood, particularly <strong>oak that has been pre-softened by fungal decay</strong>. This is why Deathwatch Beetle is almost exclusively found in buildings dating from before the 18th century, when oak was the dominant structural timber. <strong>House Longhorn Beetle</strong> targets the sapwood of softwood, particularly roof timbers. <strong>Powderpost Beetle</strong> attacks the sapwood of tropical and temperate hardwoods with high starch content.
      </p>

      <h3>Poor Ventilation</h3>
      <p>
        Inadequate ventilation is a major contributing factor because it allows moisture to accumulate in timber. <strong>Blocked airbricks</strong> in the external walls of suspended timber ground floors prevent air circulation beneath the floor, creating the damp, still conditions that wood-boring beetles prefer. <strong>Sealed subfloor ventilation</strong> &mdash; whether from external ground levels rising above the airbricks, patios or paths being built over them, or well-meaning homeowners blocking them to reduce draughts &mdash; is one of the most common causes of woodworm in ground-floor joists and floorboards. Similarly, poorly ventilated loft spaces where warm, moist air from the rooms below condenses on cold surfaces can create conditions suitable for woodworm in roof timbers.
      </p>

      <p>
        If you are dealing with damp timber and the associated pests it attracts, you may find our <Link href="/guides/how-to-get-rid-of-silverfish" className="text-blue-600 hover:underline font-medium">silverfish guide</Link> helpful &mdash; silverfish, like woodworm, are a strong indicator of excess moisture in the home. Landlords should also review our <Link href="/guides/landlord-pest-control" className="text-blue-600 hover:underline font-medium">landlord pest control guide</Link> for information on responsibilities for timber and damp issues in rental properties.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: How Serious Is Woodworm Damage? */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="damage">How Serious Is Woodworm Damage?</h2>

      <p>
        The severity of woodworm damage in UK properties ranges from entirely cosmetic to seriously structural, and understanding where your situation falls on this spectrum is critical to making proportionate and cost-effective decisions. The species of beetle, the duration of the infestation, and the type and function of the affected timber all determine how serious the damage is.
      </p>

      <h3>Minor / Cosmetic Damage</h3>
      <p>
        The majority of Common Furniture Beetle infestations in UK homes cause <strong>superficial damage that does not affect the structural integrity of the timber</strong>. A typical example is a loft with roof timbers showing scattered exit holes. The timber retains its full cross-section and structural strength, and the holes are cosmetic rather than consequential. Furniture with scattered exit holes &mdash; a common sight in antique and vintage pieces &mdash; is another example. The timber may show surface holes but remains sound and functional. In these cases, treatment of active infestation is sensible but panic is not warranted.
      </p>

      <h3>Moderate Damage</h3>
      <p>
        Sustained infestation over many years or decades can cause <strong>significant weakening of timber</strong>. Floor joists with extensive internal tunnelling may begin to deflect (sag), causing uneven or bouncy floors. Floorboards may feel soft or spongy underfoot. When probed with a screwdriver, the timber crumbles rather than offering firm resistance. At this stage, <strong>sistering</strong> (bolting new timber alongside the weakened joist) or partial replacement may be necessary in addition to treatment. This level of damage typically represents many years of active infestation in consistently damp conditions.
      </p>

      <h3>Severe / Structural Damage</h3>
      <p>
        Severe woodworm damage is most commonly associated with <strong>Deathwatch Beetle in structural oak</strong> and <strong>House Longhorn Beetle in roof timbers</strong>. In the worst cases, structural timbers can be almost entirely consumed internally while the outer surface appears relatively intact &mdash; a condition sometimes called &ldquo;shell timber.&rdquo; This is a serious structural issue requiring <strong>urgent professional assessment and engineered repair</strong>. Deathwatch Beetle damage in the structural oak of churches, manor houses, and historic buildings represents the most complex and expensive woodworm treatment scenario in the UK.
      </p>

      <h3>The Mortgage and Survey Factor</h3>
      <p>
        Woodworm is flagged on <strong>virtually every survey of properties built before 1960</strong>. Standard Level 2 (HomeBuyer Report) and Level 3 (Building Survey) surveys will note the presence of exit holes and typically recommend a &ldquo;specialist timber and damp report.&rdquo; This recommendation can cause significant anxiety for buyers, particularly first-time buyers, and may lead to mortgage lenders imposing conditions on the loan. However, it is important to understand that many of these survey flags relate to <strong>historic, inactive infestations that require no treatment</strong>. The presence of old exit holes does not, by itself, mean there is a current woodworm problem. See the <a href="#property-sales" className="text-blue-600 hover:underline font-medium">Woodworm and Property Sales</a> section below for detailed guidance on navigating this situation.
      </p>

      <div className="not-prose">
        <Callout type="cost">
          <p>Woodworm treatment costs vary enormously. DIY spray for a loft: <strong>&pound;20&ndash;&pound;60</strong>. Professional spray for 3-bed house: <strong>&pound;500&ndash;&pound;1,500</strong>. Timber replacement: <strong>&pound;1,000&ndash;&pound;5,000+</strong>. Specialist deathwatch treatment in listed building: <strong>&pound;5,000&ndash;&pound;20,000+</strong>. Always get at least two quotes from BPCA-accredited companies.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: DIY Woodworm Treatment */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="diy-treatment">DIY Woodworm Treatment</h2>

      <p>
        DIY woodworm treatment is appropriate for <strong>small-scale Common Furniture Beetle infestations in accessible, non-structural timber</strong>. This includes loft timbers that you can safely reach, exposed floorboards, and freestanding furniture. DIY treatment is <strong>not appropriate</strong> for structural timbers (load-bearing joists, beams, and trusses), Deathwatch Beetle or House Longhorn Beetle infestations, or timber that is extensively damaged and may need replacement. If you are in any doubt about the species, the extent of the infestation, or whether the affected timber is structural, get a professional assessment first.
      </p>

      <h3>Permethrin-Based Treatment Fluid</h3>
      <p>
        Permethrin-based woodworm treatment fluid is the <strong>industry-standard treatment</strong> for Common Furniture Beetle. It is a solvent-based liquid that penetrates into the timber, killing active larvae on contact and leaving a long-lasting residual barrier that kills any larvae that hatch subsequently. The treatment is available from builders&apos; merchants and online, typically in 1-litre, 2.5-litre, and 5-litre containers. Apply using a <strong>low-pressure garden sprayer or brush</strong>. The standard application is <strong>two coats, 24 hours apart</strong>, applied liberally to all accessible surfaces of the affected timber. Pay particular attention to end grain, joints, cracks, and existing exit holes, as these are the areas where the treatment penetrates most effectively. Spring is the ideal time to treat, before the main beetle emergence period in June and July.
      </p>

      <h3>Application Safety</h3>
      <p>
        Permethrin-based woodworm treatments are <strong>solvent-based and require serious PPE</strong>. This is not a task to approach casually. You must wear a <strong>respirator with organic vapour cartridges</strong> (a standard dust mask is not adequate), <strong>chemical splash goggles</strong> (not just safety glasses), <strong>chemical-resistant gloves</strong> (nitrile or neoprene, not standard household rubber gloves), and <strong>long sleeves, trousers, and covered shoes</strong>. Work in <strong>well-ventilated conditions</strong> &mdash; open loft hatches, windows, and any available ventilation before starting. Allow <strong>at least 48 hours drying time</strong> before using the treated area, and keep <strong>children and pets away</strong> during treatment and drying. If treating a loft, leave the loft hatch open for ventilation for several days after treatment.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Serious PPE is essential.</strong> Permethrin-based woodworm treatment is solvent-based. Wear a <strong>respirator with organic vapour cartridges</strong> (NOT a dust mask), chemical splash goggles, chemical-resistant gloves, and long sleeves. Ensure good ventilation. Allow 48 hours drying time. Keep children and pets away during treatment and drying.</p>
        </Callout>
      </div>

      <h3>Boron-Based Treatments</h3>
      <p>
        Boron-based (borate) treatments are a <strong>water-based alternative</strong> to permethrin. They offer lower toxicity to humans and pets, no solvent fumes, and the additional benefit of being <strong>antifungal</strong> &mdash; they protect timber against both wood-boring beetles and wet rot. The main disadvantage is that water-based boron treatments offer <strong>less penetration into dry timber</strong> than solvent-based permethrin, as water does not wick into dry wood as effectively as solvent. Boron treatments are most effective when applied to timber that is slightly damp (which allows deeper penetration) and are an excellent choice for subfloor timbers and other areas where ongoing moisture exposure makes fungal protection desirable.
      </p>

      <h3>Furniture Treatment</h3>
      <p>
        For freestanding furniture with active woodworm, apply treatment fluid by <strong>brush</strong> to all accessible surfaces, paying particular attention to unfinished or unpolished areas (undersides, backs, drawer interiors). Use a <strong>syringe or pipette</strong> to inject treatment fluid directly into exit holes &mdash; this delivers the active ingredient into the internal tunnels where larvae are feeding. Once treatment has dried, seal the surface with a furniture polish, wax, or varnish to prevent future egg-laying.
      </p>

      <h3>Environmental Control &mdash; Fix the Damp</h3>
      <p>
        Chemical treatment kills existing larvae, but <strong>the infestation will return if the underlying moisture problem is not fixed</strong>. The most important long-term measure is to reduce timber moisture content below 12 per cent. Identify and fix the source of damp: repair roof leaks, unblock airbricks, improve subfloor ventilation, fix leaking plumbing, address rising damp, and improve loft ventilation. Use a <strong>moisture meter</strong> to check timber moisture content after repairs &mdash; if timber is consistently below 12 per cent, woodworm cannot survive regardless of whether chemical treatment has been applied.
      </p>

      {/* Link to product review */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-2">Looking for woodworm treatment products?</p>
        <p className="text-gray-700 mb-3">We&apos;ve reviewed the best woodworm treatments, moisture meters, and diagnostic tools available in the UK.</p>
        <a
          href="/best/woodworm-treatments"
          className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm"
        >
          Best Woodworm Treatments UK 2026 &rarr;
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Professional Woodworm Treatment */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="professional-treatment">Professional Woodworm Treatment</h2>

      <p>
        Professional woodworm treatment is recommended for <strong>structural timbers, extensive infestations, Deathwatch Beetle, House Longhorn Beetle, and any situation where the homeowner is unsure of the species or severity</strong>. A professional treatment comes with an insurance-backed guarantee that can be transferred to future owners &mdash; a significant advantage when selling a property.
      </p>

      <h3>The Professional Survey</h3>
      <p>
        A specialist timber survey involves a thorough <strong>physical examination of all accessible timbers</strong>. The surveyor will probe timbers with a bradawl or screwdriver to assess internal condition, use a <strong>moisture meter</strong> to measure timber moisture content, identify the beetle species from the exit hole size and frass type, determine whether the infestation is <strong>active or historic</strong>, and assess the extent of any structural damage. A good surveyor will be honest about whether treatment is necessary &mdash; if the infestation is inactive and timber moisture is below the threshold, they should tell you so, even though it means no sale for them. This is one of the reasons it is important to choose an <strong>independent surveyor</strong> rather than relying solely on a survey from a company that profits from selling treatment.
      </p>

      <h3>Treatment Methods</h3>
      <p>
        Professional treatment methods include <strong>spray application</strong> of permethrin or cypermethrin-based fluids to all accessible timber surfaces &mdash; the same approach as DIY treatment but carried out more thoroughly with professional-grade equipment. <strong>Paste or gel formulations</strong> using boron compounds can be applied to timbers where spray application is impractical. <strong>Injection treatment</strong> involves drilling holes and injecting treatment fluid deep into large structural timbers. <strong>Heat treatment</strong> raises the temperature of the timber to <strong>56&deg;C for a minimum of one hour</strong>, which kills all life stages (eggs, larvae, pupae, and adults) without chemicals &mdash; increasingly preferred for listed buildings and situations where chemical residues are undesirable. <strong>Fumigation</strong> is a specialist technique used rarely and almost exclusively for Deathwatch Beetle in historic buildings where other methods are impractical. <strong>Timber replacement</strong> involves cutting out and replacing sections of timber that are too damaged to treat.
      </p>

      <h3>Guarantees</h3>
      <p>
        Professional woodworm treatment typically comes with a <strong>20 to 30 year guarantee</strong>. The guarantee should be <strong>insurance-backed</strong>, meaning it remains valid even if the treatment company ceases trading. It should also be <strong>transferable</strong> to subsequent owners of the property &mdash; this is particularly important if you plan to sell in the future, as a transferable guarantee satisfies mortgage lenders and provides reassurance to buyers. Always check the terms of the guarantee, including any conditions about maintaining ventilation and damp-proof courses.
      </p>

      <h3>Choosing a Provider</h3>
      <p>
        When selecting a professional for woodworm treatment, look for membership of recognised trade bodies: <strong>BPCA</strong> (British Pest Control Association), <strong>NPTA</strong> (National Pest Technicians Association), or <strong>PCA</strong> (Property Care Association). Get <strong>at least two independent quotes</strong> and compare the scope of work, treatment method, and guarantee terms. Be wary of companies that offer &ldquo;free surveys&rdquo; and then recommend extensive and expensive treatment &mdash; particularly damp-proofing companies that bundle woodworm treatment with damp-proof course installation. An independent pest controller who charges for the survey but provides an honest assessment of whether treatment is actually needed is often a better choice.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>If you&apos;re buying a property and the survey flags woodworm, insist on an <strong>independent pest controller&apos;s report</strong> &mdash; not one from a damp-proofing company that sells treatment. Many flagged infestations are historic and inactive, requiring no treatment at all.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Woodworm in Listed Buildings */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="listed-buildings">Woodworm in Listed Buildings</h2>

      <p>
        Woodworm in listed and historic buildings &mdash; particularly Deathwatch Beetle in pre-1700 oak structures &mdash; presents unique challenges that require specialist knowledge and a different philosophical approach to treatment. The principles that apply to standard domestic woodworm treatment do not always transfer to historic buildings, and inappropriate treatment can cause more harm than the woodworm itself.
      </p>

      <h3>Deathwatch Beetle in Historic Oak</h3>
      <p>
        Deathwatch Beetle is the <strong>primary wood-boring pest affecting historic buildings</strong> in the UK. It targets old oak that has been pre-softened by fungal decay &mdash; a condition common in mediaeval and Tudor timber-framed buildings, churches, barns, and manor houses. The beetle&apos;s long life cycle (4 to 10 years as a larva) and preference for large structural timbers mean that infestations can persist for centuries, with each generation of beetles re-infesting the same timbers. Treatment of Deathwatch Beetle is complex and requires a thorough understanding of the building&apos;s structure, the condition of individual timbers, and the environmental conditions that sustain the infestation.
      </p>

      <h3>The Minimal Intervention Approach</h3>
      <p>
        <strong>English Heritage</strong> (now Historic England) and the <strong>Society for the Protection of Ancient Buildings (SPAB)</strong> advocate a <strong>minimal intervention approach</strong> to woodworm treatment in listed buildings. This philosophy prioritises understanding the environmental conditions that sustain the infestation (primarily damp and fungal decay) and addressing those conditions rather than applying blanket chemical treatments. In many cases, improving ventilation, fixing roof leaks, and managing moisture levels can bring an infestation under control without the need for extensive chemical treatment that may damage the historic fabric of the building.
      </p>

      <h3>Planning Consent and Conservation Officers</h3>
      <p>
        Treatment of woodworm in <strong>Grade I and Grade II* listed buildings</strong> may require <strong>Listed Building Consent</strong> from the local planning authority, particularly if the treatment involves alteration to the historic fabric (such as cutting away and replacing timber, or applying chemical treatments that may discolour or stain historic surfaces). Before commissioning any treatment, <strong>consult your local authority&apos;s Conservation Officer</strong> to determine whether consent is required. They can also advise on appropriate treatment methods and recommend specialist firms with experience in historic building conservation.
      </p>

      <h3>Specialist Firms and Heat Treatment</h3>
      <p>
        Listed building woodworm treatment should only be carried out by <strong>firms with specific experience in historic building conservation</strong>. Standard pest control companies may not have the specialist knowledge required. <strong>Heat treatment</strong> is increasingly preferred for listed buildings because it avoids chemical residues in historic timber, kills all life stages of the beetle without physical intervention, and can be targeted to specific timbers without affecting the rest of the building. The timber is heated to <strong>56&deg;C for a minimum of one hour</strong> using specialist heating equipment, and the treatment leaves no chemical residue. For Deathwatch Beetle in large structural oak, heat treatment combined with moisture management is often the most appropriate and conservation-friendly approach.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Woodworm and Property Sales */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="property-sales">Woodworm and Property Sales</h2>

      <p>
        Woodworm is one of the most common issues flagged on UK property surveys, and it can cause significant complications during the conveyancing process. Understanding how woodworm affects property sales &mdash; whether you are a buyer or a seller &mdash; can help you navigate the process more confidently and avoid unnecessary expense.
      </p>

      <h3>What Surveys Flag</h3>
      <p>
        Most Level 2 (HomeBuyer Report) and Level 3 (Building Survey) surveys will <strong>note the presence of visible exit holes</strong> in accessible timbers. The surveyor is not a timber specialist and will typically not determine whether the infestation is active or inactive. Instead, the report will recommend that a &ldquo;specialist timber and damp survey&rdquo; be obtained. This recommendation is a standard precaution and does not, by itself, indicate a serious problem &mdash; but it can alarm buyers and trigger conditions from mortgage lenders.
      </p>

      <h3>Mortgage Lender Requirements</h3>
      <p>
        If a survey flags woodworm, the mortgage lender may impose a <strong>retention</strong> &mdash; withholding a portion of the mortgage funds until a specialist report confirms either that the infestation is inactive and no treatment is needed, or that treatment has been carried out and an insurance-backed guarantee has been provided. The lender&apos;s primary concern is protecting the value of their security (the property), and they want assurance that the structural timber is sound. In most cases, a clear report from an independent timber specialist or a treatment guarantee from a PCA-member firm will satisfy the lender&apos;s requirements.
      </p>

      <h3>Advice for Sellers</h3>
      <p>
        If you are selling a property that you know has visible woodworm holes, consider commissioning a <strong>specialist timber report before putting the property on the market</strong>. If the report confirms that the infestation is historic and inactive, you can provide this to prospective buyers and their lenders proactively, avoiding delays and renegotiations during the conveyancing process. If the report identifies active woodworm, you can arrange treatment and obtain a guarantee before the sale, which adds value and removes a potential obstacle. A <strong>transferable, insurance-backed treatment guarantee</strong> is a tangible asset that reassures buyers and lenders alike.
      </p>

      <h3>Advice for Buyers</h3>
      <p>
        If a property survey flags woodworm, <strong>do not panic</strong>. Request that the seller provides a specialist timber report, or commission your own. Many flagged infestations are <strong>historic and inactive</strong>, requiring no treatment whatsoever. If treatment is needed, use the cost as a <strong>negotiating point</strong> in the purchase price. If the seller has an existing, transferable treatment guarantee from a reputable company, check that it is still valid and that the guarantee terms are satisfactory. Be cautious of sellers who provide a report from a damp-proofing company recommending extensive treatment &mdash; get a second opinion from an independent BPCA-accredited pest controller.
      </p>

      <h3>Transferable Guarantees</h3>
      <p>
        An <strong>insurance-backed, transferable woodworm treatment guarantee</strong> is valuable in the property market. It provides the current owner with protection against re-infestation for 20 to 30 years, it transfers automatically (or with a simple notification) to subsequent owners, it satisfies mortgage lender requirements, and it provides documentary evidence that the property has been professionally assessed and treated. When commissioning professional treatment, always confirm that the guarantee is insurance-backed and transferable &mdash; some cheaper treatments come with guarantees that are not backed by insurance and become worthless if the treatment company ceases trading.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Recommended Products */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="products">Recommended Woodworm Treatment Products</h2>

      <p>
        Below are two of the most useful products for woodworm treatment and diagnosis in UK homes. For a comprehensive comparison of all the best woodworm treatment products &mdash; including treatment fluids, sprayers, and moisture meters &mdash; see our dedicated <Link href="/best/woodworm-treatments" className="text-blue-600 hover:underline font-medium">Best Woodworm Treatments UK 2026</Link> review page.
      </p>

      <div className="not-prose">
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
        <ProductCard
          name="Stanley 0-77-030 Moisture Meter"
          rating={4.0}
          features={[
            'Pin-type timber moisture measurement',
            'LCD screen with clear readout',
            'Includes 4 x AAA batteries',
            'Essential diagnostic tool for woodworm',
          ]}
          price="~&pound;22&ndash;&pound;25"
          asin="B003ASOBG8"
          bestFor="Best Diagnostic Tool"
          rank={2}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: Find a Pest Control Provider */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="find-provider">Find a Pest Control Provider</h2>

      <p>
        PestPro Index lists verified, accredited pest control professionals in cities across the UK. If you need help with a woodworm problem &mdash; whether it&apos;s a professional timber survey, spray treatment, or specialist Deathwatch Beetle work in a listed building &mdash; use the links below to find pest control and timber treatment specialists in your area.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Woodworm Treatment?"
          subtext="Compare BPCA-certified pest control and timber treatment professionals near you — free, no-obligation quotes."
        />
      </div>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            London
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/birmingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Birmingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/manchester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Manchester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/liverpool/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Liverpool
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/leeds/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leeds
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/nottingham/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Nottingham
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/brighton/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Brighton
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/sheffield/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Sheffield
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/bristol/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bristol
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/glasgow/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Glasgow
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/bradford/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Bradford
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/newcastle/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Newcastle
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/cardiff/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Cardiff
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/edinburgh/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Edinburgh
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/leicester/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Leicester
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/hampshire/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Hampshire
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/coventry/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Coventry
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/belfast/residential"
          className="block p-5 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
        >
          <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Belfast
          </span>
          <span className="block text-sm text-gray-500 mt-1">Find woodworm treatment specialists &rarr;</span>
        </Link>
        <Link
          href="/pest-control/regions"
          className="block p-5 bg-blue-50 border border-blue-200 rounded-xl hover:shadow-md hover:border-blue-400 transition-all group sm:col-span-2 lg:col-span-3"
        >
          <span className="font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
            Browse all 18 locations &rarr;
          </span>
        </Link>
      </div>

      <p>
        For a detailed breakdown of pest control costs across all common UK pests, including woodworm treatment and timber surveys, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide. If woodworm is not the only pest you are dealing with, you may also find our other guides helpful: <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">how to get rid of rats</Link>, <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">how to get rid of ants</Link>, <Link href="/guides/how-to-get-rid-of-moths" className="text-blue-600 hover:underline font-medium">how to get rid of moths</Link>, <Link href="/guides/how-to-get-rid-of-silverfish" className="text-blue-600 hover:underline font-medium">how to get rid of silverfish</Link>, <Link href="/guides/how-to-get-rid-of-foxes" className="text-blue-600 hover:underline font-medium">how to get rid of foxes</Link>, <Link href="/guides/how-to-get-rid-of-squirrels" className="text-blue-600 hover:underline font-medium">how to get rid of squirrels</Link>, and <Link href="/guides/pigeon-control" className="text-blue-600 hover:underline font-medium">pigeon control</Link>. Landlords dealing with woodworm issues in rental properties should consult our <Link href="/guides/landlord-pest-control" className="text-blue-600 hover:underline font-medium">landlord pest control</Link> guide, and businesses may benefit from our <Link href="/guides/commercial-pest-control" className="text-blue-600 hover:underline font-medium">commercial pest control</Link> guide. For product reviews, browse our <Link href="/best/woodworm-treatments" className="text-blue-600 hover:underline font-medium">best woodworm treatments</Link>, <Link href="/best/silverfish-treatments" className="text-blue-600 hover:underline font-medium">best silverfish treatments</Link>, <Link href="/best/rat-traps" className="text-blue-600 hover:underline font-medium">best rat traps</Link>, <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">best mouse traps</Link>, <Link href="/best/wasp-killers" className="text-blue-600 hover:underline font-medium">best wasp killers</Link>, <Link href="/best/cockroach-killers" className="text-blue-600 hover:underline font-medium">best cockroach killers</Link>, <Link href="/best/flea-treatments" className="text-blue-600 hover:underline font-medium">best flea treatments</Link>, <Link href="/best/ant-killers" className="text-blue-600 hover:underline font-medium">best ant killers</Link>, <Link href="/best/moth-killers" className="text-blue-600 hover:underline font-medium">best moth killers</Link>, <Link href="/best/bed-bug-treatments" className="text-blue-600 hover:underline font-medium">best bed bug treatments</Link>, <Link href="/best/fox-deterrents" className="text-blue-600 hover:underline font-medium">best fox deterrents</Link>, and <Link href="/best/squirrel-deterrents" className="text-blue-600 hover:underline font-medium">best squirrel deterrents</Link> guides.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION: FAQ */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>How do I know if woodworm is active?</h3>
      <p>
        Fresh exit holes with <strong>sharp, clean edges</strong> and <strong>fine powdery dust (frass)</strong> beneath them indicate active woodworm. Old holes with darkened edges and no dust are likely historic and inactive. The most reliable test is to <strong>clean away all existing dust in autumn</strong> and check again in June&ndash;August the following year. Fresh dust appearing during the beetle emergence season means the infestation is active. No dust means it is historic and likely inactive. See the <a href="#active-vs-inactive" className="text-blue-600 hover:underline font-medium">active vs inactive section</a> above for a detailed breakdown of the signs to look for.
      </p>

      <h3>Can I treat woodworm myself?</h3>
      <p>
        Yes, <strong>small-scale Common Furniture Beetle infestations in accessible timber</strong> can be treated DIY with permethrin-based woodworm treatment fluid. Apply by sprayer or brush, <strong>two coats 24 hours apart</strong>, wearing a respirator with organic vapour cartridges, goggles, and chemical-resistant gloves. Do not attempt DIY treatment of <strong>structural timbers</strong>, <strong>Deathwatch Beetle</strong>, or <strong>House Longhorn Beetle</strong> &mdash; these require professional assessment and treatment. See our <a href="#diy-treatment" className="text-blue-600 hover:underline font-medium">DIY treatment section</a> for full application guidance and safety precautions, and our <Link href="/best/woodworm-treatments" className="text-blue-600 hover:underline font-medium">best woodworm treatments</Link> review for product recommendations.
      </p>

      <h3>How much does professional woodworm treatment cost?</h3>
      <p>
        Professional spray treatment for a typical 3-bed house costs <strong>&pound;500&ndash;&pound;1,500</strong>. Timber replacement costs <strong>&pound;1,000&ndash;&pound;5,000+</strong>. Specialist Deathwatch Beetle treatment in listed buildings can cost <strong>&pound;5,000&ndash;&pound;20,000+</strong>. Always get at least <strong>two quotes from BPCA-accredited companies</strong>. For a comprehensive breakdown of pest control costs across all common UK pests, see our <Link href="/guides/pest-control-costs" className="text-blue-600 hover:underline font-medium">Pest Control Costs UK 2026</Link> guide.
      </p>

      <h3>Does woodworm spread from house to house?</h3>
      <p>
        Woodworm <strong>does not spread between houses</strong> in the way that rat or mouse infestations do. Adult beetles can fly and may enter a property through open windows, but they only lay eggs in timber with suitable moisture content &mdash; <strong>above 18 per cent</strong>. If your timber is dry, beetles that enter the property will not be able to establish an infestation. Keeping your timber dry by maintaining good ventilation and fixing damp problems is the most effective prevention. For guidance on other pests that can move between neighbouring properties, see our guides on <Link href="/guides/how-to-get-rid-of-rats" className="text-blue-600 hover:underline font-medium">rats</Link> and <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">mice</Link>.
      </p>

      <h3>Will woodworm affect my mortgage application?</h3>
      <p>
        Woodworm flagged on a homebuyer survey <strong>may cause a mortgage lender to require a specialist timber report</strong> and treatment guarantee before releasing funds. However, many flagged infestations are <strong>historic and inactive</strong>. An independent specialist report can confirm this and satisfy the lender. If active woodworm is confirmed, the lender will typically require treatment and an <strong>insurance-backed guarantee</strong> before completing the mortgage. See the <a href="#property-sales" className="text-blue-600 hover:underline font-medium">property sales section</a> above for detailed advice for both buyers and sellers.
      </p>

      <h3>How long does woodworm treatment last?</h3>
      <p>
        Professional permethrin-based treatments typically come with a <strong>20&ndash;30 year guarantee</strong>. The chemical residue remains in the timber and kills any larvae that subsequently hatch from eggs laid by adult beetles. DIY treatments using the same active ingredients provide <strong>similar chemical protection</strong> but without a transferable guarantee &mdash; which can be a disadvantage if you plan to sell the property. The key to ensuring long-term protection is <strong>combining chemical treatment with moisture control</strong>: if timber remains dry (below 12 per cent moisture content), the risk of re-infestation is minimal regardless of chemical treatment.
      </p>

      <h3>Is woodworm covered by home insurance?</h3>
      <p>
        Standard home insurance policies <strong>typically do not cover</strong> woodworm treatment or damage, as it is classified as a <strong>maintenance issue</strong> rather than a sudden, insurable event. Insurers view woodworm in the same category as general wear and tear, damp, and subsidence caused by lack of maintenance. Some specialist policies &mdash; particularly those aimed at owners of older or listed properties &mdash; may include timber treatment cover. Check your policy wording carefully or contact your insurer directly to confirm your cover. If you are buying a property with woodworm, ensure the treatment comes with an <strong>insurance-backed guarantee</strong> from the treatment company, which provides a separate layer of financial protection.
      </p>

      <h3>Can woodworm come back after treatment?</h3>
      <p>
        Woodworm <strong>can return</strong> if the underlying moisture problem is not fixed. Chemical treatment kills existing larvae and provides a residual barrier in treated timber, but if <strong>timber moisture content remains above 18 per cent</strong>, new beetles may lay eggs in untreated areas or in timber where the chemical treatment has eventually broken down. The key to permanent prevention is a <strong>three-part approach</strong>: fix the source of damp, improve ventilation to keep timber dry, and ensure all accessible timber has been treated with a residual insecticide. A <strong>moisture meter</strong> is the most useful tool for ongoing monitoring &mdash; if your timber stays below 12 per cent moisture content, woodworm cannot survive regardless of other factors.
      </p>
    </GuideLayout>
  );
}
