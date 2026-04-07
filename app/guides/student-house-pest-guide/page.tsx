import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import ProductCard from '@/components/ProductCard';
import FindProviderCTA from '@/components/FindProviderCTA';
import Callout, { StatCallout } from '@/components/Callout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Student House Pest Guide UK: Dealing with Mice, Bugs & Landlord Responsibilities',
    description:
      'Found pests in your student house? Know your rights, what to buy and when your landlord must act. Essential UK guide for students.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/student-house-pest-guide',
    },
    openGraph: {
      title: 'Student House Pest Guide UK: Dealing with Mice, Bugs & Landlord Responsibilities',
      description:
        'Found pests in your student house? Know your rights, what to buy and when your landlord must act. Essential UK guide for students.',
      url: 'https://pestproindex.com/guides/student-house-pest-guide',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Student House Pest Guide UK: Dealing with Mice, Bugs & Landlord Responsibilities',
  description:
    'Found pests in your student house? Know your rights, what to buy and when your landlord must act. Essential UK guide for students.',
  datePublished: '2026-03-31',
  dateModified: '2026-03-31',
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
    '@id': 'https://pestproindex.com/guides/student-house-pest-guide',
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
      name: 'Student House Pest Guide',
      item: 'https://pestproindex.com/guides/student-house-pest-guide',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who pays for pest control in a student house — tenant or landlord?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, the landlord is responsible for pest control in a student house. Under the Landlord and Tenant Act 1985 (Section 11), landlords have a statutory obligation to maintain the structure and exterior of the property. If pests are entering through structural defects — gaps around pipes, damaged airbricks, cracks in walls, broken drain covers — the landlord must pay for both the proofing work and any pest treatment. In student houses classed as HMOs (Houses in Multiple Occupation), the landlord also has enhanced responsibilities for common areas including shared kitchens, bathrooms, and hallways. The only situation where students might be expected to pay is if the pest problem is clearly caused by tenant behaviour alone — for example, a severe hygiene issue with no structural entry points — but this is rare in older student housing where structural gaps are almost always present.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I withhold rent if my landlord won\'t deal with pests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tenants in England and Wales do not have a general legal right to withhold rent, even if there is a serious pest infestation. However, you do have other powerful remedies. Since the Homes (Fitness for Human Habitation) Act 2018, you can take your landlord directly to court if the property is unfit for habitation — a serious pest infestation qualifies. The court can order the landlord to carry out remedial work and pay you compensation. You can also report the issue to your local council environmental health team, which has the power to inspect the property and serve an improvement notice or abatement notice on the landlord. Citizens Advice and Shelter can help you understand your options. In practice, documenting the problem thoroughly (photos, dates, written communications) and following the formal complaint process puts you in the strongest position.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check second-hand furniture for bed bugs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Before bringing any second-hand furniture into your student house, inspect it thoroughly in good light, preferably outdoors. For mattresses, check the seams, piping, tufts, and labels — bed bugs hide in these crevices. Look for live bugs (small, flat, reddish-brown insects about 5mm long), dark brown or black spots (faecal staining from bed bug droppings), tiny white eggs or empty egg casings, and shed skins (translucent, pale brown). For sofas and upholstered chairs, check under cushions, along seams, in the frame joints, and in any folds or creases in the fabric. For wooden furniture, check joints, cracks, screw holes, and the underside of drawers. If you find any signs, do not bring the furniture inside. Free furniture left on the street outside student houses at the end of term is particularly high-risk — there is often a reason it was discarded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I find mouse droppings in my student house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, document the evidence — take clear photographs of the droppings with a coin for scale, and note the location, date, and approximate quantity. Mouse droppings are small (3 to 8mm), dark, and pellet-shaped, often found along skirting boards, behind appliances, in cupboards, and under sinks. Clean up the droppings carefully using disposable gloves, kitchen roll, and a disinfectant spray — never vacuum mouse droppings as this can aerosolise harmful bacteria. Dispose of the cleaning materials in a sealed bag. Then report the problem to your landlord or letting agent immediately, in writing (email is ideal), with the photographs attached. Request a response within 14 days and keep a copy of all correspondence. While waiting for the landlord to act, store all food in sealed containers, keep kitchen surfaces clean, and consider placing a few snap traps along the skirting boards where droppings were found.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get my deposit back if there were pests when I moved in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you should not lose any of your deposit for a pest problem that existed before you moved in or that was caused by a structural issue with the property. The key is evidence. When you move in, take dated photographs of any signs of pest activity (droppings, damage, dead insects), and report them to your landlord in writing immediately. This creates a record proving the problem pre-dates your tenancy. If your landlord tries to deduct pest treatment costs from your deposit at the end of the tenancy, you can challenge this through your deposit protection scheme\'s free dispute resolution service (all deposits in England must be protected in a government-approved scheme). Your move-in photographs and written reports will be crucial evidence. If the deposit was not properly protected, your landlord cannot make any deductions and you may be entitled to compensation of up to three times the deposit amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I report pest problems to the council?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can report pest problems in your student house to your local council\'s environmental health team. Most councils allow reports online through their website, by telephone, or by email. You will need to provide your name and address, the landlord or letting agent\'s name and contact details, a description of the pest problem including how long it has been going on, evidence that you have already reported the issue to your landlord and they have failed to act (this is usually required before the council will intervene), and any photographs or evidence of the infestation. The council has the power to inspect the property under the Housing Health and Safety Rating System (HHSRS) and can serve an improvement notice on the landlord requiring them to resolve the problem within a set timeframe. If the landlord fails to comply, the council can carry out the work itself and charge the landlord, or prosecute. There is no charge to the tenant for this service.',
      },
    },
  ],
};

const tocItems = [
  { id: 'introduction', title: 'Why Student Houses Have Pest Problems' },
  { id: 'common-pests', title: 'Common Student House Pests' },
  { id: 'landlord-vs-tenant', title: 'Landlord vs Tenant Responsibility' },
  { id: 'budget-solutions', title: 'Budget-Friendly DIY Solutions' },
  { id: 'reporting', title: 'How to Report to Your Landlord' },
  { id: 'prevention', title: 'Prevention Tips for Student Houses' },
  { id: 'find-provider', title: 'Find a Pest Controller Near You' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function StudentHousePestGuidePage() {
  return (
    <GuideLayout
      title="Student House Pest Guide UK: Dealing with Mice, Bugs & Landlord Responsibilities"
      subtitle="Found something crawling in your student house? Know your rights, what you can buy on a budget, and when your landlord is legally required to act."
      lastUpdated="March 2026"
      readingTime="10 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Landlord Pest Control: Legal Duties & Responsibilities', href: '/guides/landlord-pest-control' },
        { title: 'Professional Pest Control vs DIY', href: '/guides/professional-pest-control-vs-diy' },
        { title: 'How to Get Rid of Mice: Complete UK Guide', href: '/guides/how-to-get-rid-of-mice' },
        { title: 'How to Get Rid of Bed Bugs: Complete UK Guide', href: '/guides/how-to-get-rid-of-bed-bugs' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Traps UK 2026', href: '/best/mouse-traps' },
        { title: 'Best Bed Bug Spray UK 2026', href: '/best/bed-bug-spray' },
        { title: 'Best Flea Spray for Home UK 2026', href: '/best/flea-spray-for-home' },
        { title: 'Best Ant Gel Bait UK 2026', href: '/best/ant-gel-bait' },
        { title: 'Best Cockroach Gel Bait UK 2026', href: '/best/cockroach-gel-bait' },
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
      {/* SECTION 1: Introduction */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="introduction">Why Student Houses Have Pest Problems</h2>

      <p>
        If you have found mice droppings behind the toaster, woken up with unexplained bites, or watched a line of ants march across the kitchen counter, you are not alone. Student houses are among the most pest-prone properties in the UK, and the reasons are structural, not personal. The typical student rental is an older terraced house that has been converted into a House in Multiple Occupation (HMO), with years of deferred maintenance, gaps around pipework, worn door seals, and draughty skirting boards. These are the conditions pests exploit &mdash; and they have nothing to do with how clean you keep the kitchen.
      </p>

      <p>
        The combination of factors is almost unique to student housing. <strong>High tenant turnover</strong> means that problems reported by one group of students are rarely followed up before the next cohort moves in. <strong>Shared kitchens</strong> in houses with four, five, or six occupants generate more food waste, more cooking smells, and more opportunities for crumbs and spills that attract pests. <strong>Second-hand furniture</strong> &mdash; passed down from previous tenants, bought cheaply online, or picked up from the kerb at the end of term &mdash; is one of the most common ways bed bugs are introduced into student houses. And the <strong>age of the housing stock</strong> matters enormously: most UK student houses are Victorian or Edwardian terraces, with building fabrics that are over a century old and riddled with gaps that a mouse can squeeze through.
      </p>

      <p>
        The good news is that you have legal rights. Your landlord has clear obligations under UK housing law, and pest infestations caused by structural problems are their responsibility to fix &mdash; not yours. This guide covers the most common pests in student houses, what your landlord must do, what you can do yourself on a student budget, how to formally report the problem, and how to escalate if your landlord ignores you. Whether you are dealing with mice in the kitchen, bed bugs in a mattress, fleas left by a previous tenant&apos;s cat, cockroaches in a shared kitchen, or ants invading the food cupboards, this guide has you covered.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Your landlord is legally responsible for structural pest proofing.</strong> Under Section 11 of the Landlord and Tenant Act 1985, the landlord must maintain the structure and exterior of your home. If pests are getting in through gaps in the walls, damaged airbricks, broken drains, or worn door seals, that is a structural issue &mdash; and fixing it is the landlord&apos;s job, not yours.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: Common Student House Pests */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="common-pests">Common Student House Pests</h2>

      <p>
        Student houses tend to attract a particular set of pests. Understanding what you are dealing with is the first step to getting the problem resolved &mdash; and knowing whether your landlord or you should be footing the bill.
      </p>

      <h3>Mice</h3>

      <p>
        Mice are the single most common pest in UK student houses. The <strong>house mouse</strong> (<em>Mus domesticus</em>) can squeeze through a gap as small as <strong>6 millimetres</strong> &mdash; roughly the width of a pencil. In older terraced houses, the most common entry points are gaps around pipe runs under the kitchen and bathroom sinks, worn or missing skirting board trim, holes where gas or water pipes enter the property, damaged airbricks, and gaps beneath external doors. Once inside, mice follow the same routes repeatedly, leaving greasy smear marks along walls and skirting boards.
      </p>

      <p>
        Signs of mice include small, dark, pellet-shaped <strong>droppings</strong> (3 to 8mm long), typically found along skirting boards, behind appliances, in cupboards, and under the sink. You may also hear <strong>scratching or scurrying sounds</strong> in walls or ceilings at night, find <strong>gnaw marks</strong> on food packaging, cables, or woodwork, and notice a <strong>distinctive musty smell</strong> in enclosed spaces. In a shared student kitchen, mice can contaminate food, damage packaging, and spread bacteria including <em>Salmonella</em> and <em>Hantavirus</em>.
      </p>

      <p>
        In the vast majority of student houses, mice are entering through <strong>structural gaps</strong> &mdash; which makes it the landlord&apos;s responsibility. Simply putting down traps without sealing the entry points is futile: new mice will keep coming in. The landlord must arrange for the entry points to be proofed (sealed with wire wool and expanding foam, or metal plates), and for any existing infestation to be treated. See our full <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">mouse control guide</Link> for detailed information.
      </p>

      <h3>Bed Bugs</h3>

      <p>
        Bed bugs (<em>Cimex lectularius</em>) are an increasingly common problem in student accommodation. These small, flat, reddish-brown insects are about <strong>5mm long</strong> &mdash; roughly the size of an apple seed &mdash; and they feed on human blood, typically at night. The bites appear as <strong>red, itchy welts</strong>, often in lines or clusters on exposed skin (arms, neck, face, and shoulders).
      </p>

      <p>
        In student houses, bed bugs are most commonly introduced through <strong>second-hand furniture</strong> (mattresses, sofas, bed frames bought cheaply or picked up free), <strong>luggage and clothing from travel</strong> (particularly international travel or stays in hostels), and <strong>spread between rooms in shared accommodation</strong> via skirting board gaps, electrical sockets, and shared pipework routes. Bed bugs can survive for months without feeding, which means they can persist in a property between tenancies &mdash; a new student moving into a room where the previous tenant had bed bugs may inherit the problem.
      </p>

      <p>
        Check for bed bugs by inspecting <strong>mattress seams, headboard joints, bed frame crevices, and the edges of carpet near the bed</strong>. Look for live bugs, dark brown/black faecal spots, tiny white eggs, and shed skins. If the infestation was present before you moved in or has spread from another room in the HMO, it is the landlord&apos;s responsibility. Our <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">bed bug guide</Link> covers treatment options in full.
      </p>

      <h3>Fleas</h3>

      <p>
        Flea infestations in student houses are almost always a legacy from <strong>previous tenants&apos; pets</strong>. Cat fleas (<em>Ctenocephalides felis</em>) are the most common species, and their pupae can survive in carpets and floorboard gaps for <strong>months</strong> in an empty property. When new tenants move in, the vibrations and warmth trigger the pupae to hatch, and the emerging adult fleas immediately begin biting. This is why many students find themselves being bitten within days of moving into a new house at the start of term &mdash; the fleas have been lying dormant since the previous tenants left.
      </p>

      <p>
        Flea bites are typically concentrated around the <strong>ankles and lower legs</strong>, appearing as small, red, intensely itchy bumps, often in clusters. A household <Link href="/best/flea-spray-for-home" className="text-green-600 hover:underline">flea spray</Link> containing an insect growth regulator (IGR) is the most effective immediate treatment. If the previous tenants had pets and the property was not professionally treated during the void period, this is a <strong>landlord responsibility</strong>. The landlord should have arranged a flea treatment before you moved in. See our <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">flea control guide</Link> for comprehensive treatment advice.
      </p>

      <h3>Cockroaches</h3>

      <p>
        The <strong>German cockroach</strong> (<em>Blattella germanica</em>) is the species most commonly found in student HMOs, particularly in shared kitchens. These small (10 to 15mm), light brown cockroaches with two dark stripes behind the head are fast-moving, nocturnal, and breed rapidly &mdash; a single female can produce up to <strong>300 offspring in her lifetime</strong>. They thrive in warm, humid environments near food and water, making a busy student kitchen with a leaking tap and food left on the counter an ideal habitat.
      </p>

      <p>
        German cockroaches spread between rooms and between properties via <strong>shared service risers, pipework, cable routes, and gaps around party walls</strong>. This is why individual treatment in a single room or kitchen often fails &mdash; the cockroaches simply move to an untreated area and return once the treatment wears off. In an HMO, a coordinated treatment covering the entire property is required, and this is <strong>always the landlord&apos;s responsibility</strong>. Signs include live cockroaches (usually seen at night when you switch on the kitchen light), a distinctive <strong>musty, oily smell</strong>, dark smear marks on surfaces near harbourage points, and egg cases (oothecae) in warm, hidden spots. See our <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">cockroach control guide</Link> for detailed information.
      </p>

      <h3>Ants</h3>

      <p>
        The <strong>black garden ant</strong> (<em>Lasius niger</em>) is the most common ant species to invade student houses. Ants are attracted by <strong>sweet foods, sugary spills, crumbs, and unsealed food packaging</strong> &mdash; all of which are common in busy shared kitchens where multiple people are cooking and not always cleaning up after themselves. Ant trails typically lead from an external entry point (a crack in the wall, a gap around a window frame, or an airbrick) to a food source in the kitchen.
      </p>

      <p>
        While ants are more of a nuisance than a health hazard, a persistent ant problem usually indicates <strong>structural entry points that need sealing</strong> &mdash; again, the landlord&apos;s responsibility. In the short term, ant gel bait is cheap, effective, and easy to use. It works by attracting worker ants who carry the bait back to the colony, killing the queen and collapsing the nest. Our <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">ant control guide</Link> covers all the options.
      </p>

      <div className="not-prose">
        <StatCallout value="72%" label="of UK student houses are in properties over 50 years old &mdash; the age group most vulnerable to pest entry points" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3: Landlord vs Tenant Responsibility */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="landlord-vs-tenant">Landlord vs Tenant Responsibility</h2>

      <p>
        Understanding who is responsible for dealing with pests in your student house is crucial. In the majority of cases, the answer is your landlord &mdash; but the specifics matter.
      </p>

      <h3>What Your Landlord MUST Do</h3>

      <p>
        Under <strong>Section 11 of the Landlord and Tenant Act 1985</strong>, your landlord has a statutory obligation to maintain the <strong>structure and exterior</strong> of the property. This means they must keep the building fabric in a condition that prevents pests from entering. Specifically, the landlord must:
      </p>

      <ul>
        <li><strong>Seal structural pest entry points</strong> &mdash; gaps around pipe runs, damaged airbricks, cracks in external walls, holes around cable entry points, gaps beneath external doors, and any other openings in the building fabric that allow mice, rats, cockroaches, or other pests to enter.</li>
        <li><strong>Maintain the drainage system</strong> &mdash; broken drains, collapsed pipes, and missing interceptor traps are common routes for rat ingress from the sewer system. Drain surveys and repairs are the landlord&apos;s responsibility.</li>
        <li><strong>Provide a habitable property</strong> &mdash; under the <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, the property must be fit for human habitation at the start of the tenancy and throughout. A property with an active pest infestation is not fit for habitation.</li>
        <li><strong>Deal with infestations caused by structural issues</strong> &mdash; if mice are entering through gaps in the skirting, cockroaches are spreading through shared service risers, or rats are coming up through broken drains, the landlord must arrange and pay for both the pest treatment and the structural repairs.</li>
        <li><strong>Manage common areas in HMOs</strong> &mdash; in a student house classed as an HMO (which most are), the landlord is responsible for pest control in all common areas including shared kitchens, bathrooms, hallways, stairwells, and bin stores.</li>
      </ul>

      <h3>What About Awaab&apos;s Law?</h3>

      <p>
        <strong>Awaab&apos;s Law</strong>, introduced through the Social Housing (Regulation) Act 2023, sets strict timeframes for landlords to investigate and resolve hazards including damp, mould, and associated pest problems. While it currently applies to social housing providers, the <strong>Renters&apos; Rights Act</strong> is expected to extend similar obligations to private landlords. The connection matters for students because <strong>damp and mould &mdash; extremely common in older student houses with poor ventilation &mdash; directly attract pests</strong> including silverfish, booklice, mould mites, and cockroaches. If your student house has both damp/mould and pest problems, they are likely connected, and the landlord must address both the underlying moisture issue and the pest infestation. Our <Link href="/guides/landlord-pest-control" className="text-blue-600 hover:underline font-medium">landlord pest control guide</Link> covers the full legal framework.
      </p>

      <h3>When Are Tenants Responsible?</h3>

      <p>
        Students are generally responsible for pest problems caused by their own behaviour &mdash; but this is a <strong>narrow category</strong> in practice. You may be responsible if:
      </p>

      <ul>
        <li><strong>You brought bed bugs in from travel</strong> and the property had no prior bed bug history and no structural spread route from another room.</li>
        <li><strong>You introduced fleas from your own pet</strong> (if pets are permitted in your tenancy agreement).</li>
        <li><strong>You have created a serious hygiene problem</strong> that attracted pests to a property that is otherwise structurally sound with no pest entry points &mdash; but in a student house over 50 years old, the structural entry points are almost always present, which shifts responsibility back to the landlord.</li>
      </ul>

      <p>
        The critical point is this: <strong>if pests are entering through a structural defect, the landlord is responsible &mdash; even if poor tenant hygiene contributed to the attraction.</strong> Courts and local authorities consistently take this view. The landlord cannot argue that the tenants attracted the mice if the mice are entering through a 15mm gap around the boiler pipe that the landlord has failed to seal.
      </p>

      <h3>What to Do If Your Landlord Ignores You</h3>

      <p>
        If your landlord fails to act after you have reported a pest problem, you have several options:
      </p>

      <ul>
        <li><strong>Escalate to the local council environmental health team.</strong> The council can inspect your property under the Housing Health and Safety Rating System (HHSRS) and serve an improvement notice or abatement notice on the landlord. This is a free service.</li>
        <li><strong>Contact Citizens Advice</strong> (citizensadvice.org.uk) for free guidance on your rights as a tenant. They can help you draft formal letters and advise on next steps.</li>
        <li><strong>Contact Shelter</strong> (shelter.org.uk) for specialist housing advice. Shelter&apos;s helpline and webchat service can advise on disrepair, landlord obligations, and how to escalate complaints.</li>
        <li><strong>Take your landlord to court</strong> under the Homes (Fitness for Human Habitation) Act 2018. The court can order the landlord to carry out repairs, pay compensation, and cover legal costs. Many students&apos; unions offer free legal advice on housing matters.</li>
      </ul>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>If pest ingress is caused by a structural defect, the landlord is responsible &mdash; even if your hygiene contributed to the problem.</strong> Courts and local authorities pursue the landlord, not the tenant, for structural maintenance failures. Document everything: photographs, dates, written reports, and the landlord&apos;s responses (or lack thereof).</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: Budget-Friendly DIY Solutions */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="budget-solutions">Budget-Friendly DIY Solutions</h2>

      <p>
        While your landlord should be dealing with structural pest problems, the reality is that some landlords are slow to act, and you may want to take immediate steps to reduce the problem while you wait for a proper resolution. The following products are cheap, effective, and readily available &mdash; all under &pound;10 and suitable for a student budget.
      </p>

      <p>
        <strong>Important:</strong> DIY solutions are a stopgap, not a substitute for proper landlord action. Putting down mouse traps without sealing the entry points means you will keep catching mice indefinitely. Always report the problem formally to your landlord and push for structural proofing.
      </p>

      <h3>Mouse Traps</h3>

      <p>
        Classic <strong>snap traps</strong> remain the cheapest and most effective DIY mouse control method. Place them perpendicular to the wall with the trigger end touching the skirting board &mdash; mice run along walls and will walk straight onto the trap. Bait with a small smear of <strong>peanut butter</strong> or <strong>chocolate spread</strong> (not cheese &mdash; it dries out quickly and mice are not particularly attracted to it). Place traps where you have seen droppings or along known mouse runs. Check traps daily and dispose of caught mice in a sealed bag in the outside bin. For a typical student kitchen, three to four traps along the skirting boards and behind appliances is a good starting point.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Budget Snap Mouse Traps (6 Pack)"
          rating={4.3}
          features={[
            'Classic wooden snap trap design — proven effective',
            'Reusable — can be cleaned and reset multiple times',
            'Easy to set with one hand',
            'Place along skirting boards with peanut butter bait',
            'Pack of 6 covers a typical student kitchen',
          ]}
          price="&pound;5"
          asin="SEARCH"
          bestFor="Best Budget Option"
          rank={1}
        />
      </div>

      <p>
        For more mouse trap options, including humane live-catch traps and professional-grade alternatives, see our <Link href="/best/mouse-traps" className="text-blue-600 hover:underline font-medium">best mouse traps UK</Link> review page.
      </p>

      <h3>Bed Bug Spray</h3>

      <p>
        If you suspect bed bugs, a <strong>residual <Link href="/best/bed-bug-spray" className="text-green-600 hover:underline">bed bug spray</Link></strong> is the most accessible DIY option. Look for sprays containing <strong>cypermethrin</strong> or <strong>permethrin</strong> as the active ingredient. Spray the mattress seams, bed frame joints, headboard, and the edges of the carpet near the bed. Allow the spray to dry before using the bed (follow the product instructions). Bed bug sprays provide a residual barrier that kills bugs on contact for several weeks. However, for a serious bed bug infestation, DIY sprays are unlikely to be enough &mdash; professional heat treatment is the most effective solution, and this is a cost your landlord should bear if the infestation pre-dates your tenancy or has spread from another room.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Bed Bug Killer Spray 500ml"
          rating={4.2}
          features={[
            'Residual spray — kills bed bugs on contact and leaves a lasting barrier',
            'Suitable for mattresses, bed frames, headboards, and carpet edges',
            'Water-based formula — low odour, suitable for bedrooms',
            'Apply to seams, joints, and crevices where bed bugs hide',
            'Immediate action while waiting for landlord to arrange professional treatment',
          ]}
          price="&pound;8"
          asin="SEARCH"
          bestFor="Best for Bed Bugs"
          rank={2}
        />
      </div>

      <p>
        See our <Link href="/best/bed-bug-spray" className="text-blue-600 hover:underline font-medium">best bed bug spray UK</Link> review page for full product comparisons.
      </p>

      <h3>Ant Gel Bait</h3>

      <p>
        <strong>Ant gel bait</strong> is the most effective DIY ant control method &mdash; far more effective than contact-kill sprays. Gel bait works by attracting worker ants who feed on the sweet gel and carry it back to the colony. The active ingredient (usually <strong>borax</strong> or <strong>fipronil</strong>) is then shared with the queen and the rest of the colony through trophallaxis (food sharing), eventually killing the entire nest. Place small dots of gel along the ant trail, near the entry point, and near any food sources the ants are targeting. Do not spray insecticide along the trail &mdash; this kills the visible ants but does not reach the colony, so the problem returns within days.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Ant Gel Bait Stations (3 Pack)"
          rating={4.4}
          features={[
            'Gel bait attracts ants who carry poison back to the colony',
            'Kills the queen — collapses the entire nest within 7 to 14 days',
            'Ready-to-use stations — no mess, no mixing',
            'Place along ant trails and near entry points',
            'Safe to use in kitchens — enclosed station design',
          ]}
          price="&pound;8"
          asin="SEARCH"
          bestFor="Best for Ants"
          rank={3}
        />
      </div>

      <p>
        For more ant control products, see our <Link href="/best/ant-gel-bait" className="text-blue-600 hover:underline font-medium">best ant gel bait UK</Link> review page.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>DIY products are a short-term fix, not a permanent solution.</strong> Traps and sprays will reduce the immediate problem, but if the structural entry points are not sealed, the pests will keep coming back. Always push your landlord for proper proofing &mdash; it is their legal obligation.</p>
        </Callout>
      </div>

      <p className="text-xs text-gray-400 italic">
        As an Amazon Associate, PestPro Index earns from qualifying purchases. Product prices are approximate and may vary.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: How to Report to Your Landlord */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="reporting">How to Report Pests to Your Landlord</h2>

      <p>
        How you report the pest problem matters. A verbal mention to the letting agent or a casual text message to the landlord is not enough. You need a <strong>formal, written record</strong> that documents the problem, your report, and the landlord&apos;s response (or failure to respond). This record is essential if you need to escalate to the council or take legal action later.
      </p>

      <h3>Template Letter/Email to Your Landlord</h3>

      <p>
        Send the following by email (so you have a dated record) to your landlord or letting agent. Attach photographs as evidence.
      </p>

      <div className="not-prose my-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-4">Template: Pest Report Email to Landlord</p>
        <div className="text-sm text-gray-700 space-y-3 font-mono">
          <p><strong>Subject:</strong> Pest Problem Report &mdash; [Your Address] &mdash; Urgent Action Required</p>
          <p>Dear [Landlord/Agent Name],</p>
          <p>I am writing to formally report a pest problem at [full property address].</p>
          <p><strong>Date problem first noticed:</strong> [Date]</p>
          <p><strong>Description of the problem:</strong> [e.g. &quot;Mouse droppings found in the kitchen cupboard under the sink, along the skirting board behind the fridge, and inside the cutlery drawer. I have attached photographs with dates.&quot;]</p>
          <p><strong>Evidence:</strong> [Number] photographs attached, taken on [dates].</p>
          <p><strong>Possible entry points observed:</strong> [e.g. &quot;There is a visible gap of approximately 15mm around the pipe under the kitchen sink where it enters the wall. There is also a gap beneath the back door that daylight is visible through.&quot;]</p>
          <p>Under Section 11 of the Landlord and Tenant Act 1985, you are responsible for maintaining the structure of the property, which includes sealing pest entry points. Under the Homes (Fitness for Human Habitation) Act 2018, the property must be fit for habitation throughout the tenancy.</p>
          <p>I request that you arrange a professional pest inspection and treatment, and seal all structural entry points, <strong>within 14 days</strong> of this email.</p>
          <p>If I do not receive a response within 14 days, I will escalate this matter to the local council environmental health team.</p>
          <p>Please confirm receipt of this email and your proposed course of action.</p>
          <p>Yours sincerely,<br />[Your Name]<br />[Your Room/Address]<br />[Date]</p>
        </div>
      </div>

      <h3>Escalation to the Council</h3>

      <p>
        If your landlord does not respond within 14 days, or responds but takes no action, escalate to your <strong>local council environmental health team</strong>. You can usually do this online through the council&apos;s website, by phone, or by email. The council has the power to:
      </p>

      <ul>
        <li><strong>Inspect the property</strong> under the Housing Health and Safety Rating System (HHSRS).</li>
        <li><strong>Serve an improvement notice</strong> requiring the landlord to resolve the pest problem within a specified timeframe.</li>
        <li><strong>Serve an abatement notice</strong> under the Environmental Protection Act 1990 if the infestation constitutes a statutory nuisance.</li>
        <li><strong>Carry out the work themselves</strong> and charge the landlord if the landlord fails to comply with a notice.</li>
        <li><strong>Prosecute</strong> the landlord for non-compliance, with fines of up to &pound;20,000.</li>
      </ul>

      <p>
        There is <strong>no charge</strong> to you for the council&apos;s intervention. This is a free service.
      </p>

      <h3>Support Resources</h3>

      <p>
        If you need advice on your rights or help navigating the process, the following organisations provide <strong>free support</strong> to tenants:
      </p>

      <ul>
        <li><strong>Citizens Advice</strong> (citizensadvice.org.uk) &mdash; free, confidential advice on housing rights, including pest problems, disrepair, and landlord obligations. Available online, by phone, and in person.</li>
        <li><strong>Shelter</strong> (shelter.org.uk) &mdash; specialist housing charity offering free advice on tenant rights, disrepair, and how to escalate complaints. Helpline and webchat available.</li>
        <li><strong>Your students&apos; union</strong> &mdash; most university students&apos; unions have a housing advice service or officer who can help you draft complaint letters, liaise with landlords, and refer you to free legal advice.</li>
        <li><strong>Your university accommodation office</strong> &mdash; even if you are living in a private rental, your university&apos;s accommodation office may maintain a list of approved landlords and can advise on common problems.</li>
      </ul>

      <div className="not-prose">
        <Callout type="info">
          <p><strong>Always report in writing.</strong> Emails are ideal because they are automatically dated and easily forwarded to the council as evidence. Keep copies of all correspondence. If your landlord calls you instead of responding in writing, follow up with an email summarising the call: &quot;Following our phone conversation today, I am writing to confirm that you agreed to...&quot;</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: Prevention Tips */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="prevention">Prevention Tips for Student Houses</h2>

      <p>
        While structural pest proofing is the landlord&apos;s responsibility, there is plenty you and your housemates can do to make your student house less attractive to pests. Good habits will not prevent mice from entering through a 15mm gap in the wall, but they will reduce the food sources that attract pests in the first place and make your home a less hospitable environment for any that do get in.
      </p>

      <h3>Food Storage</h3>

      <p>
        This is the single most impactful thing you can do. Mice, cockroaches, and ants are all attracted by accessible food.
      </p>

      <ul>
        <li><strong>Store all dry food in sealed containers.</strong> Invest in a few airtight containers or clip-top jars for cereal, pasta, rice, flour, and bread. Cardboard and thin plastic packaging are not barriers to mice &mdash; they chew straight through.</li>
        <li><strong>Do not leave food out overnight.</strong> Mice are nocturnal. A plate of crumbs left on the counter, an open packet of biscuits, or an unwashed pan on the hob are an open invitation.</li>
        <li><strong>Keep fruit in the fridge or a sealed container.</strong> Overripe fruit left in a bowl attracts fruit flies and ants.</li>
        <li><strong>Store pet food in sealed containers</strong> if any housemate has a pet. Pet food left in open bags on the floor is a major attractant for mice and rats.</li>
      </ul>

      <h3>Cleaning Rota</h3>

      <p>
        A shared cleaning rota is essential in any student house. Pests thrive in kitchens that are not cleaned regularly. Agree a rota that includes:
      </p>

      <ul>
        <li><strong>Daily:</strong> Wipe down kitchen counters and the hob after cooking. Sweep or vacuum the kitchen floor. Wash up or load the dishwasher &mdash; do not leave dirty dishes in the sink overnight.</li>
        <li><strong>Weekly:</strong> Mop the kitchen floor. Empty and wipe the kitchen bin. Clean behind the toaster, kettle, and microwave (crumbs accumulate in these spots and mice know it). Vacuum common areas.</li>
        <li><strong>Monthly:</strong> Pull out the fridge and cooker and clean behind and beneath them. Check under the sink for signs of pest activity (droppings, gnaw marks). Clean the oven and grill pan.</li>
      </ul>

      <p>
        A cleaning rota does not need to be elaborate &mdash; even a whiteboard on the kitchen wall with names and tasks is effective. The key is consistency. A kitchen that is always reasonably clean is far less attractive to pests than one that is clean sometimes and filthy at weekends.
      </p>

      <h3>Checking Second-Hand Furniture</h3>

      <p>
        Second-hand furniture is one of the most common ways bed bugs are introduced into student houses. Before bringing any used furniture inside &mdash; especially mattresses, sofas, bed frames, and upholstered chairs:
      </p>

      <ul>
        <li><strong>Inspect it outdoors in good light.</strong> Check mattress seams, sofa cushions, frame joints, screw holes, and any crevices.</li>
        <li><strong>Look for live bed bugs</strong> (small, flat, reddish-brown insects about 5mm long), <strong>dark spots</strong> (faecal staining), <strong>tiny white eggs</strong>, and <strong>shed skins</strong> (translucent, pale brown).</li>
        <li><strong>Be especially cautious with free furniture</strong> left on the street outside student houses at the end of term. There is often a reason it was discarded.</li>
        <li><strong>If in doubt, do not bring it in.</strong> A &quot;free&quot; sofa infested with bed bugs will cost you far more in treatment and stress than buying a new one.</li>
      </ul>

      <h3>Rubbish and Bin Management</h3>

      <p>
        External waste storage is one of the primary attractants for rats, mice, foxes, and flies. In student houses, this is a common weak point.
      </p>

      <ul>
        <li><strong>Do not leave rubbish bags outside the back door</strong> &mdash; bag them and put them directly in the wheelie bin. Black bags left on the ground are an easy food source for rats and foxes, who will rip them open overnight.</li>
        <li><strong>Keep bin lids closed.</strong> If the lid does not close because the bin is overfull, ask your landlord for additional bin capacity &mdash; this is their responsibility to provide.</li>
        <li><strong>Take the recycling out regularly.</strong> Food-contaminated recycling (pizza boxes, cans, jars) attracts pests just as much as general waste.</li>
        <li><strong>Do not pile rubbish in the garden.</strong> Piles of rubbish, old furniture, and clutter in the garden provide harbourage for rats and mice.</li>
      </ul>

      <div className="not-prose">
        <Callout type="tip">
          <p><strong>Take move-in photographs on day one.</strong> Photograph every room, including under sinks, behind appliances, and along skirting boards. If there are any signs of pest activity (droppings, damage, dead insects), photograph them with a coin for scale and report to the landlord immediately in writing. These photos protect your deposit and prove any pre-existing issues.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: Find a Pest Controller Near You */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="find-provider">Find a Pest Controller Near You</h2>

      <p>
        If DIY methods are not enough, or you need professional backup to support your case with the landlord, PestPro Index lists verified pest control providers across the UK. A professional inspection report documenting the infestation and the structural entry points can be powerful evidence when pushing your landlord to take action.
      </p>

      <div className="not-prose">
        <FindProviderCTA
          heading="Need Professional Pest Control?"
          subtext="Find BPCA-certified pest control providers near your student house — free, no-obligation quotes."
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8: Frequently Asked Questions */}
      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Who pays for pest control in a student house &mdash; tenant or landlord?</h3>
      <p>
        In most cases, the <strong>landlord</strong> pays for pest control. Under the Landlord and Tenant Act 1985 (Section 11), landlords must maintain the structure and exterior of the property, which includes sealing pest entry points. If pests are entering through structural defects &mdash; gaps around pipes, damaged airbricks, cracks in walls, broken drains &mdash; the landlord must pay for both the proofing work and the pest treatment. In HMOs (which most student houses are), the landlord also has enhanced responsibilities for common areas. The only scenario where students might be expected to pay is if the pest problem is clearly and solely caused by tenant behaviour with no structural contributing factors &mdash; which is rare in older student housing.
      </p>

      <h3>Can I withhold rent if my landlord won&apos;t deal with pests?</h3>
      <p>
        Tenants in England and Wales do <strong>not</strong> have a general legal right to withhold rent. However, you have other remedies. Since the <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, you can take your landlord to court if the property is unfit &mdash; a serious pest infestation qualifies. The court can order remedial work and compensation. You can also report to the council environmental health team for HHSRS enforcement. <strong>Citizens Advice</strong> and <strong>Shelter</strong> can advise on your specific situation. The strongest approach is to document everything (photos, dates, written communications), follow the formal complaint process, and escalate systematically rather than withholding rent.
      </p>

      <h3>How do I check second-hand furniture for bed bugs?</h3>
      <p>
        Inspect in good light, ideally outdoors. For mattresses, check the <strong>seams, piping, tufts, and labels</strong>. For sofas, check <strong>under cushions, along seams, in frame joints, and in fabric folds</strong>. For wooden furniture, check <strong>joints, cracks, screw holes, and drawer undersides</strong>. Look for live bugs (small, flat, reddish-brown, about 5mm), dark brown/black faecal spots, tiny white eggs, and shed skins. If you find any signs, do not bring the furniture inside. Free furniture left on the street at the end of term is <strong>particularly high-risk</strong> &mdash; there is often a reason it was discarded.
      </p>

      <h3>What should I do if I find mouse droppings in my student house?</h3>
      <p>
        <strong>Document first:</strong> take photographs with a coin for scale, noting the location, date, and quantity. Clean up wearing disposable gloves, using kitchen roll and disinfectant spray &mdash; <strong>never vacuum mouse droppings</strong> as this aerosolises harmful bacteria. Dispose of cleaning materials in a sealed bag. Report to your landlord <strong>immediately, in writing (email)</strong>, attaching photographs. Request action within 14 days. While waiting, store all food in sealed containers, keep surfaces clean, and place snap traps along skirting boards where droppings were found. If the landlord does not respond within 14 days, escalate to the council environmental health team.
      </p>

      <h3>Can I get my deposit back if there were pests when I moved in?</h3>
      <p>
        Yes &mdash; you should not lose any deposit for a pest problem that pre-existed your tenancy or was caused by a structural issue. The key is <strong>evidence</strong>. On the day you move in, photograph any signs of pest activity (droppings, damage, dead insects) and report them to the landlord in writing immediately. If the landlord later tries to deduct pest treatment costs from your deposit, challenge this through your <strong>deposit protection scheme&apos;s free dispute resolution service</strong> (all deposits in England must be protected in a government-approved scheme). Your move-in photographs and written reports will be crucial evidence. If the deposit was not properly protected, the landlord cannot make deductions and you may be entitled to compensation of up to <strong>three times the deposit amount</strong>.
      </p>

      <h3>How do I report pest problems to the council?</h3>
      <p>
        Contact your <strong>local council&apos;s environmental health team</strong> &mdash; most allow reports online, by phone, or by email. You will need your address, the landlord&apos;s contact details, a description of the pest problem, evidence that you have already reported it to the landlord (usually required before the council intervenes), and photographs. The council can inspect under the <strong>HHSRS</strong> and serve an improvement notice requiring the landlord to resolve the problem. If the landlord fails to comply, the council can do the work and charge the landlord, or prosecute. There is <strong>no charge to the tenant</strong> for this service.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/* Cross-Link Box */}
      {/* ------------------------------------------------------------------ */}
      <div className="not-prose my-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="font-bold text-gray-900 mb-3">Related Guides &amp; Product Reviews</p>
        <p className="text-gray-700 mb-4">For more detailed information on specific pests and the best budget-friendly products, see our dedicated guides and reviews:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/best/mouse-traps" className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm">Best Mouse Traps &rarr;</a>
          <a href="/best/bed-bug-spray" className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm">Best Bed Bug Spray &rarr;</a>
          <a href="/best/ant-gel-bait" className="inline-block px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors text-sm">Best Ant Gel Bait &rarr;</a>
          <a href="/guides/landlord-pest-control" className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-sm">Landlord Pest Control Guide &rarr;</a>
        </div>
      </div>

      <p>
        For further reading, see our guides on <Link href="/guides/how-to-get-rid-of-mice" className="text-blue-600 hover:underline font-medium">how to get rid of mice</Link>, <Link href="/guides/how-to-get-rid-of-bed-bugs" className="text-blue-600 hover:underline font-medium">how to get rid of bed bugs</Link>, <Link href="/guides/how-to-get-rid-of-cockroaches" className="text-blue-600 hover:underline font-medium">how to get rid of cockroaches</Link>, <Link href="/guides/how-to-get-rid-of-fleas" className="text-blue-600 hover:underline font-medium">how to get rid of fleas</Link>, <Link href="/guides/how-to-get-rid-of-ants" className="text-blue-600 hover:underline font-medium">how to get rid of ants</Link>, <Link href="/guides/landlord-pest-control" className="text-blue-600 hover:underline font-medium">landlord pest control responsibilities</Link>, and <Link href="/guides/professional-pest-control-vs-diy" className="text-blue-600 hover:underline font-medium">professional pest control vs DIY</Link>.
      </p>
    </GuideLayout>
  );
}
