import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import UsToolCard from '../components/UsToolCard';
import { MOSQUITOES_HOME, MOSQUITOES_NAV } from '../components/mosquitoesNav';

const URL = 'https://pestproindex.com/us/mosquitoes';
const TITLE = 'Mosquitoes: Standing Water, Larvicide and Yard Control';
const DESCRIPTION =
  'Breeding sites and source reduction, Bti and methoprene larvicides, adult control options, repellents, and what several sources say does not work.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'US Pest Guides', item: 'https://pestproindex.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Mosquitoes', item: URL },
  ],
};

const relatedPages = [{ title: 'No-See-Ums: The Fly That Beats Window Screens', href: '/us/no-see-ums' }];

const faqs: Faq[] = [
  {
    question: 'How little water does it take to breed mosquitoes?',
    answer:
      'Very little. University of Maryland Extension states mosquitoes can breed in as little as one teaspoon of water, and that the life cycle from egg to adult can take as little as four days. Texas A&M AgriLife Extension gives a time threshold rather than a volume: mosquitoes breed in standing water, especially if it stands for at least 7 days. Both figures are reported here as their own source states them.',
  },
  {
    question: 'Do bug zappers work?',
    answer:
      'Three independent sources say no, consistently. University of Maryland Extension states plainly not to use bug zappers, because they kill beneficial insects and very few mosquitoes, since they are on at night when most mosquitoes are not active. Texas A&M AgriLife Extension states that zappers attract and kill many beneficial insects and do not control the females of biting species — the sex that actually bites. No zapper is carded on this page for that reason.',
  },
  {
    question: 'Do mosquito-repelling plants work?',
    answer:
      'No, according to every source that addresses the question. NC State Extension states that claims about repelling plants placed around a porch or deck are not supported by any scientifically-based test results. University of Maryland Extension states there are no plants that have been scientifically found to keep mosquitoes away. No repellent plant is carded on this page for that reason.',
  },
  {
    question: 'Are mosquito traps worth buying?',
    answer:
      'The sources disagree, and both positions are reported rather than resolved. University of Maryland Extension states plainly not to use mosquito traps, stating that they attract more mosquitoes to an area. Texas A&M AgriLife Extension is more measured: CO2 or scent-attractant traps must be at least as attractive as a person and run continuously to work, effectiveness varies with wind and airflow, and some are relatively expensive. Neither source recommends a trap as a primary control method, and no trap is carded on this page.',
  },
  {
    question: 'Is Bti safe to use around pets and fish?',
    answer:
      'Every source that addresses the question says yes. University of Kentucky Extension states that neither methoprene nor Bti toxin is harmful to fish, waterfowl, pets, or humans when used according to label directions. NC State Extension states the bacteria kill mosquitoes but does not harm fish, birds or other wildlife. University of Maryland Extension lists mosquito dunks as an option for ponds and rain barrels in the same sentence as goldfish and mosquito fish.',
  },
  {
    question: 'Should I hire someone to spray my whole yard?',
    answer:
      'The sources describe a real tradeoff rather than a single answer. University of Kentucky Extension states some homeowners may wish to enlist the services of a professional for perimeter spraying. Texas A&M AgriLife Extension states professional applications cost more than DIY treatments but can be more effective, using backpack mist blowers that penetrate foliage better than a hose-end sprayer. NC State Extension states that large-scale control programs targeting mosquito larvae over wide areas are best left to trained individuals in county or local government agencies.',
  },
];

const sources: Source[] = [
  {
    label: 'Controlling Mosquitoes',
    publisher: 'University of Maryland Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.umd.edu/resource/controlling-mosquitoes',
  },
  {
    label: 'Integrated Mosquito Management, P3826',
    publisher: 'Mississippi State University Extension Service',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.msstate.edu/publications/integrated-mosquito-management',
  },
  {
    label: 'Mosquito Control Around Homes and in Communities',
    publisher: 'NC State Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://entomology.ces.ncsu.edu/mosquito-control-around-homes-and-in-communities/',
  },
  {
    label: 'Do-It-Yourself Backyard Mosquito Control, ENTO-054',
    publisher: 'Texas A&M AgriLife Extension Service',
    date: 'Accessed 1 September 2026',
    href: 'https://agrilifeextension.tamu.edu/wp-content/uploads/2025/07/Mosquitoes-Backyard-Mosquito-Control-1.pdf',
  },
  {
    label: 'Mosquitoes: Practical Advice for Homeowners, ENTfact-005',
    publisher: 'University of Kentucky, Martin-Gatton College of Agriculture, Food and Environment',
    date: 'Accessed 1 September 2026',
    href: 'https://entomology.mgcafe.uky.edu/ef005',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'breeding', title: 'Breeding Sites and Standing Water' },
  { id: 'source-reduction', title: 'Source Reduction' },
  { id: 'larval-control', title: 'Larval Control' },
  { id: 'adult-control', title: 'Adult Control' },
  { id: 'personal-protection', title: 'Personal and Property Protection' },
  { id: 'does-not-work', title: 'What the Sources Say Does Not Work' },
  { id: 'yard-treatment', title: 'Yard Treatment' },
  { id: 'professional', title: 'When to Call a Professional' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function MosquitoesPage() {
  return (
    <UsPageLayout
      title="Mosquitoes"
      subtitle="A teaspoon of standing water is enough to breed them, and the biting adult is the last stage of a life cycle that starts and ends in water around the property. Here is what university extension services and one state agricultural extension publish about breeding sites, larval and adult control, personal protection, and which widely sold devices the same sources say do not work."
      lastUpdated="September 2026"
      readingTime="10 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={MOSQUITOES_HOME}
      clusterNav={MOSQUITOES_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Controlling mosquitoes matters because, beyond the bite itself, they can spread
        disease between people and animals — that is the one sentence this page spends
        on the subject. Everything below is about the insect and the control methods the
        sources publish; a doctor or local health service is the right place for any
        question about illness, and this page does not attempt to answer one.
      </p>
      <p>
        Source reduction comes before every other method on this page, because that is
        the order the sources put it in. NC State Extension states it as a general rule:{' '}
        <em>Modifying or eliminating breeding sites is the long-term solution to severe
        mosquito problems.</em>
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        University of Maryland Extension: <em>Mosquitoes are a type of true fly. They go
        through complete metamorphosis, meaning that they have four life stages: egg,
        larva, pupa, and adult.</em> The same source states the eggs are laid on or
        around water and that both the larva and pupa stage are aquatic.
      </p>
      <p>
        On feeding: <em>Both male and female mosquitoes feed on nectar and pollen as
        their main food supplies, however female adult mosquitoes will take blood meals
        in order to get the extra protein needed to lay eggs. With one blood meal, a
        female mosquito can lay up to 300 eggs.</em>
      </p>

      <h2 id="breeding">Breeding Sites and Standing Water</h2>
      <p>
        <strong>How much water it takes, and how long it needs to stand, are reported
        with different figures across sources, and none is corrected against
        another.</strong> University of Maryland Extension: <em>Mosquitoes can breed in
        as little as one teaspoon of water. It can take as little as four days for
        mosquitoes to complete their life cycle from eggs to adults.</em> Texas A&amp;M
        AgriLife Extension gives a time threshold instead of a volume: <em>Mosquitoes
        breed in standing water, especially if it stands for at least 7 days.</em>
      </p>
      <ul>
        <li>
          <strong>Around the house.</strong> University of Kentucky Extension states
          clogged rain gutters are one of the most overlooked breeding sites around
          homes, alongside neglected bird baths, swimming pools, and leaking faucets or
          air conditioners that produce standing puddles for several days.
        </li>
        <li>
          <strong>Containers.</strong> University of Maryland Extension names trash and
          recycling cans, flower pot saucers, child and pet toys, wading pools, tires,
          tarps, and plastic sheeting — checked and emptied twice a week.
        </li>
        <li>
          <strong>Downspouts.</strong> University of Maryland Extension: <em>Corrugated
          drain pipes attached to downspouts hold water and are a prime place for
          mosquitoes to breed. Use a smooth drain pipe or cover the open end of a
          corrugated drain pipe with a piece of pantyhose secured with a rubber
          band.</em>
        </li>
        <li>
          <strong>What large-scale sites need.</strong> University of Kentucky
          Extension notes large areas of standing water — swamps, sluggishly moving
          streams or ditches — may require efforts beyond an individual property owner,
          matching the professional-referral guidance below.
        </li>
      </ul>

      <h2 id="source-reduction">Source Reduction</h2>
      <p>
        Mississippi State University Extension Service names this the starting step of
        an integrated approach: <em>simply means finding and eliminating places where
        mosquitoes breed. Breeding sites might be anything from old cans and tires
        around the house to low spots in the yard or poorly flowing ditches.</em>
      </p>
      <ul>
        <li>
          University of Maryland Extension: check and remove standing water twice a
          week; clean gutters so they drain well; use goldfish, mosquito fish, or
          mosquito dunks in ponds and rain barrels; refresh bird bath and pet-dish water
          every three days.
        </li>
        <li>
          University of Kentucky Extension: fill or drain ditches, soil depressions and
          tree holes with mortar or sealant; eliminate standing water and seepage around
          animal troughs, cisterns and septic tanks; keep cistern screens intact and
          access covers tight-fitting.
        </li>
        <li>
          NC State Extension: fill tree holes with expanding foam, not cement, to keep
          them from becoming breeding sites; cover rain-barrel openings with screening
          and keep the screening clear of debris.
        </li>
      </ul>

      <h2 id="larval-control">Larval Control</h2>
      <p>
        University of Kentucky Extension: <em>Most larvicides sold to homeowners
        contain either the active ingredient methoprene or a toxin produced by the soil
        bacterium Bacillus thuringiensis israelensis (Bti).</em> The same source states
        methoprene prevents adult emergence by disrupting larval development, while Bti
        toxin attacks the digestive tract and is lethal only to mosquito larvae and the
        larvae of some aquatic gnats and black flies.
      </p>
      <p>
        <strong>Safety to non-target animals is stated consistently across sources.</strong>{' '}
        University of Kentucky Extension: <em>Neither methoprene nor Bti toxin is
        harmful to fish, waterfowl, pets, or humans when used according to label
        directions.</em> NC State Extension makes the same point about Bti specifically:{' '}
        <em>There are several products formulated as &quot;dunks&quot; or as granules
        that contain the bacterium Bacillus thuringiensis israelensis or
        &quot;Bti&quot;. The bacteria kill mosquitoes, but does not harm fish, birds or
        other wildlife.</em>
      </p>
      <p>
        On how long a treatment lasts, Texas A&amp;M AgriLife Extension states Bti
        formulations (donuts, briquettes, or granules) are effective for up to 30 days,
        and methoprene, depending on the formulation, may last more than 30 days. NC
        State Extension gives the same 30-day figure for a Bti &quot;dunk&quot; sized
        for a small breeding site of 100 square feet or less, and adds a caution: know
        whether a site is an actual mosquito source before treating it, since treating
        every area of standing water on a property without that knowledge wastes both
        time and product.
      </p>

      <UsToolCard
        name="Bti Mosquito Dunks for Ponds and Standing Water, 2-Pack"
        whatItDoes={[
          'Its own listing states the formula releases Bti "for a period of 30 days or more," matching the 30-day figure Texas A&M AgriLife Extension and NC State Extension both give for a Bti dunk treating a contained breeding site.',
          'Its own listing states it is safe for use in fish habitats and animal watering troughs — matching University of Kentucky Extension and NC State Extension\'s sourced finding that Bti does not harm fish, birds, pets or other wildlife when used per label directions.',
          'This is a larval-stage treatment for standing water a property owner cannot drain or empty, not a treatment for adult mosquitoes already flying — see Adult Control below for that.',
        ]}
        asin="B0002ASQ4A"
      />

      <h2 id="adult-control">Adult Control</h2>
      <p>
        Mississippi State University Extension Service: <em>Adulticiding means spraying
        a fine mist or &ldquo;fog&rdquo; into the air to kill adult mosquitoes. These days,
        most adulticiding is carried out with ultra-low-volume machines mounted on
        trucks, which apply only about one to six ounces of pesticide per acre.</em>{' '}
        That is the professional and municipal method; the same source lists larviciding
        ahead of adulticiding in its own sequence.
      </p>
      <h3>Backyard foggers</h3>
      <p>
        Texas A&amp;M AgriLife Extension distinguishes thermal foggers (heat-based,
        produce a visible white fog that can alarm neighbors who mistake it for a real
        fire) from aerosol foggers (empty faster, cost more, do not smoke). Both are
        described as short-term relief tools for a specific event rather than a lasting
        solution, and the same source cautions: <em>To minimize the harm to beneficial
        insects, spray in the evening, and avoid blooming plants.</em>
      </p>
      <h3>Residual sprays</h3>
      <p>
        Texas A&amp;M AgriLife Extension describes residual sprays — applied to resting
        sites on siding, doorways, tall grass and shrubs — as lasting up to a month,
        applied by a professional using a backpack mist blower or by a homeowner using a
        pump or hose-end sprayer. University of Kentucky Extension recommends a hose-end
        sprayer as usually the most effective and convenient DIY option, applied to the
        lower limbs of shade trees, shrubs, and shaded areas such as under decks and
        along foundations.
      </p>
      <p>
        <strong>Community and area-wide spraying is a separate layer, and one source
        gives a homeowner-facing detail about it.</strong> University of Maryland
        Extension states that area-wide sprays or foggers are only effective
        temporarily, lasting 1 to 3 weeks, and do not stop new adult mosquitoes flying
        in from surrounding areas afterward. In communities where local officials
        conduct this kind of spraying, the same source notes some agencies allow a
        property owner to request exemption from being sprayed.
      </p>

      <h2 id="personal-protection">Personal and Property Protection</h2>
      <p>
        University of Kentucky Extension: <em>The most effective mosquito repellents
        contain the active ingredient diethyl toluamide (DEET).</em> The same source
        ranks the alternatives it tested: non-DEET repellents such as citronella-oil
        products give some relief but generally less and for a shorter time; citronella
        candles can help when several are placed close to where people are sitting, but
        a single candle at the edge of a large area provides little more than
        atmosphere.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          This page states what a repellent is for and does not give dosing or
          application instructions
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Sources differ on percentage, duration and re-application, and on guidance
          specific to children — that variation is exactly why label directions, not
          this page, govern how a repellent is actually used. Every repellent carries
          its own EPA-registered label with the concentration, application method and
          any age-specific instructions; follow that label, not a summary of it.
        </p>
      </div>
      <ul>
        <li>
          <strong>Clothing.</strong> University of Maryland Extension states clothing
          treated with the insecticide permethrin will deter mosquitoes (and ticks) from
          landing and feeding, with directions on the product for how to apply it to
          clothing rather than skin.
        </li>
        <li>
          <strong>Screening.</strong> University of Kentucky Extension and NC State
          Extension both recommend keeping window and door screens tightly fitted and
          repairing any tears or gaps. University of Maryland Extension adds that a fan
          keeps the air moving on a porch, deck or patio, which mosquitoes are weak
          fliers relative to.
        </li>
      </ul>

      <UsToolCard
        name="20% Picaridin Insect Repellent, Continuous Spray, 6 oz"
        whatItDoes={[
          'Its own listing states a 20% picaridin formula — picaridin is one of the active ingredients University of Kentucky Extension and University of Maryland Extension both name as effective, alongside DEET and oil of lemon eucalyptus.',
          'Its own listing states the spray is fragrance-free and dries without damaging plastics or synthetic coatings, matching the "apply to clothing as well as skin" guidance University of Kentucky Extension gives.',
          'This card omits marketing language on the product\'s own listing that names specific mosquito- and tick-borne diseases by name — out of scope for this page regardless of what the manufacturer\'s copy says. Follow the product\'s own label for concentration, reapplication timing and any age-specific directions; this page does not restate them (see the note above).',
        ]}
        asin="B0DW3RS3L3"
      />

      <h2 id="does-not-work">What the Sources Say Does Not Work</h2>
      <p>
        <strong>This section exists because S48-A cuts both ways: weak evidence never
        excludes a product on its own, but a sourced finding of ineffectiveness is
        reported, not suppressed.</strong> Three device classes are named directly by
        one or more sources as not worth buying.
      </p>
      <ul>
        <li>
          <strong>Bug zappers.</strong> University of Maryland Extension advises against
          them directly, and states why: <em>Bug zappers kill beneficial insects and
          very few mosquitoes since they are on at night when most mosquitoes are not
          active.</em> Texas A&amp;M AgriLife Extension: <em>Bug zappers use an
          ultraviolet light source to attract mosquitoes to an electrocuting grid;
          unfortunately, these traps attract and kill many beneficial insects and do
          not control the females of biting species.</em> Two independent sources agree.
          No zapper is carded on this page.
        </li>
        <li>
          <strong>Repellent plants.</strong> NC State Extension: <em>Claims that certain
          plants placed around a porch or deck will keep mosquitoes away are not
          supported by any scientifically-based test results.</em> University of
          Maryland Extension states the same finding independently: there are no plants
          scientifically found to keep mosquitoes away. No plant-based repellent product
          is carded on this page.
        </li>
        <li>
          <strong>Mosquito traps — a genuine disagreement, reported as one.</strong>{' '}
          University of Maryland Extension states plainly not to use mosquito traps,
          stating they attract more mosquitoes to an area than they remove. Texas
          A&amp;M AgriLife Extension is less categorical: CO2 or scent-based traps must
          be at least as attractive as a person and run continuously to work, and
          effectiveness varies with wind and airflow — described as a real but
          inconsistent tool, not a recommended one. Neither source endorses a trap as a
          primary method, and none is carded here.
        </li>
      </ul>

      <h2 id="yard-treatment">Yard Treatment</h2>
      <p>
        University of Maryland Extension states plainly: <em>Spraying insecticides to
        control mosquitoes in your yard can be very harmful to pollinators.</em> Texas
        A&amp;M AgriLife Extension gives the operational version of the same caution —
        spray in the evening and avoid blooming plants, per the quotation in Adult
        Control above.
      </p>

      <UsToolCard
        name="Mosquito & Gnat Barrier, Hose-End Sprayer, Quart"
        whatItDoes={[
          'Its own listing states the product is applied with a hose-end sprayer and treats mosquitoes for up to four weeks — matching University of Kentucky Extension\'s recommendation of a hose-end sprayer as usually the most effective and convenient DIY residual-spray method for shade trees, shrubs and shaded areas.',
          'Its own listing directs application to "paths and wooded areas" — matching the resting-site targeting (siding, doorways, tall grass, shrubs) both Texas A&M AgriLife Extension and University of Kentucky Extension describe for residual sprays.',
          'This page\'s own sourced caution about harm to pollinators (above) applies to this product like any other residual insecticide — apply in the evening, away from blooming plants, per the product\'s own label.',
        ]}
        asin="B00LI6ACUI"
      />

      <h2 id="professional">When to Call a Professional</h2>
      <p>
        University of Kentucky Extension states some homeowners may wish to enlist a
        professional for perimeter spraying. Texas A&amp;M AgriLife Extension is more
        specific about why: professional applicators use backpack mist blowers with
        powerful fans that penetrate plants and tree canopies better than a hand-held or
        hose-end sprayer, and while professional applications cost more than DIY
        treatment, they can be more effective for that reason. NC State Extension draws
        the line at scale: large-scale control programs targeting mosquito larvae over
        wide areas — swamps, ditches, standing water beyond a single property — are best
        left to trained individuals in county or local government agencies, not an
        individual property owner.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that
        makes it or in the text immediately adjacent to it, and every source named is
        listed below. Framing, ordering and emphasis are our own judgement and are not
        a finding of any source. Where sources give different figures or disagree on a
        control method&rsquo;s value, both are reported and attributed rather than
        resolved into one answer. This page's single sentence on disease is
        deliberately general — no disease is named, no transmission mechanism or risk
        is described, and no federal health agency is cited; a doctor or local health
        service is the right resource for a health question, not this page.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
