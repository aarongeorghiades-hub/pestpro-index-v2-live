import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { MILLIPEDES_NAV, MILLIPEDES_HOME } from '../components/millipedesNav';

const URL = 'https://pestproindex.com/us/millipedes';
const TITLE = 'Millipedes in the House: Why the Invasion Ends by Itself';
const DESCRIPTION =
  'They arrive after wet weather and die within a day or two. Two sources call them harmless, a third says do not pick one up, and this page carries both.';

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

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Millipedes', item: URL }],
};

// ---------------------------------------------------------------------------
// ZERO PRODUCT CARDS, ON A GROUND THIS ESTATE ALREADY HOLDS.
//
// Colorado State names four pyrethroid active ingredients for a perimeter
// treatment — bifenthrin, cyfluthrin, lambda-cyhalothrin, permethrin — and says
// in the same breath that they are "sold under various trade names".
// /us/black-widow-spiders was given the SAME four-ish list by the SAME publisher
// and declined to card, because an active-ingredient list is not something a
// reader can shop against: it names a chemistry, not a product, and every
// competing product carries it. Law 132 forbids this page disagreeing with that
// one on the identical question, so it does not.
//
// AND THE SOURCE'S OWN WEIGHT RUNS THE OTHER WAY. Colorado State's Quick Facts
// open with "Control is rarely necessary", its remedy is to wait a few days and
// vacuum, and it says whole-yard treatments are unnecessary and not recommended.
// A card at step five of a five-step ladder whose first step is "wait" would
// misreport the source.
//
// EXCLUSION AND SEALING: named by five sources and specified by none. No gap
// width, no material, no door-sweep dimension. No criterion, no card (Law 139),
// which is the position /us/camel-crickets already reached on weather-stripping.
//
// NO LISTING FETCHES WERE ATTEMPTED. Spending Law 137 attempts against a
// criterion that does not exist buys nothing.
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'Millipedes, Centipedes and Sowbugs, Fact Sheet 5.552, by W.S. Cranshaw — the source of the no-danger statement, the September-October and midspring timing, the die-within-a-day-or-two mechanism, the intact-body observation, the wait-and-vacuum remedy, the debris and caulking measures, and the four pyrethroid active ingredients named for a perimeter treatment. Read in its HTML edition, because the PDF sets several words with soft hyphens that cannot be quoted without altering the source',
    publisher: 'Colorado State University Extension',
    date: 'Carries "1/00. Revised 12/13"; fetched 3 September 2026 from extension.colostate.edu',
    href: 'https://extension.colostate.edu/resource/millipedes-centipedes-and-sowbugs/',
  },
  {
    label:
      'Millipedes & Centipedes, B-1088, revised by Elmer W. Gray — the source of the two-pairs-of-legs description, the wall-climbing and entry statement, the stain-if-crushed statement, the door-and-window sealing instruction, the excessive-moisture inference, and the DEFENSIVE-FLUID STATEMENTS that disagree with Colorado State',
    publisher: 'University of Georgia Cooperative Extension',
    date: 'Filed under a 2025 revision path; fetched 3 September 2026 from fieldreport.caes.uga.edu',
    href: 'https://fieldreport.caes.uga.edu/wp-content/uploads/2025/08/B-1088_5.pdf',
  },
  {
    label:
      'Managing Millipedes In and Around Homes — the source of the statement that millipedes neither bite, sting nor transmit diseases and do not infest food, clothing or sound wood, and of the door-threshold entry points',
    publisher: 'NC State Extension, NC Urban Pests',
    date: 'Filed under a 2017 path; fetched 3 September 2026 from ncurbanpests.wordpress.ncsu.edu',
    href: 'https://ncurbanpests.wordpress.ncsu.edu/feature/2017/346/',
  },
  {
    label:
      'Preventing and Controlling Home-Invasion of Garden Millipedes — the source of the restless-migration statement and its seasonal framing',
    publisher: 'Alabama Cooperative Extension System',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://www.aces.edu/blog/topics/home-family/preventing-and-controlling-home-invasion-of-garden-millipedes/',
  },
  {
    label:
      'Millipedes, Sowbugs, Pillbugs, E-55 — the source of the rainfall trigger for mass migration and of the caulking instruction',
    publisher: 'Purdue University Extension Entomology',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.entm.purdue.edu/publications/E-55/E-55.html',
  },
];

const faqs: Faq[] = [
  {
    question: 'Are millipedes dangerous?',
    answer:
      'Two sources say no and a third adds a real qualification, and this page carries all three rather than the comfortable ones. Colorado State University Extension states that millipedes do not bite or pose any danger to humans. NC State Extension goes further and rules out several things at once: millipedes do not bite, sting, or transmit diseases, nor do they infest food, clothing or dry, structurally sound wood. University of Georgia Cooperative Extension agrees they are not poisonous but does not stop there — it states that many species have glands capable of producing irritating fluids, that the defensive sprays of some millipedes contain hydrochloric acid that can chemically burn the skin and cause long-term skin discoloration, and that the fluid can also be dangerous to the eyes. Its practical conclusion is one line: it is not advisable to handle millipedes with your bare hands. Nothing in that changes the first two answers about a millipede you leave alone; it changes the answer about one you pick up.',
  },
  {
    question: 'Why are there suddenly so many?',
    answer:
      'Because they moved, all at once, and the weather told them to. Colorado State University Extension states that most millipede movement takes place in September and October and again in midspring, and that invasions, usually into cellars, often take place shortly after a period of wet weather and end as suddenly as they start. Purdue University Extension names the trigger plainly: large amounts of rainfall can trigger mass migrations of millipedes from the soil. Alabama Cooperative Extension describes the same thing from the animal’s side — at certain times during summer and fall, millipedes become restless and may migrate in large numbers from their normal living places to residents’ living spaces. The abruptness is the diagnostic. An invasion that started in a week will end in a week.',
  },
  {
    question: 'Do I have to do anything, or will they go away?',
    answer:
      'Colorado State University Extension answers this directly and its answer is to wait. It states that because millipedes require high moisture, they usually die in a home within a day or two, and that because millipedes cause no damage in homes other than a minor annoyance, the best way to handle infestations is to wait a few days for the problem to subside, then vacuum the bodies that remain. One practical caution from the same source, which is why people think the problem is continuing when it is over: the hard body of the millipede remains intact for a considerable time after it is dead. A dry millipede on a basement floor may have died a fortnight ago.',
  },
  {
    question: 'Will they damage the house or the food?',
    answer:
      'No source read for this page describes any structural or stored-product damage. NC State Extension rules it out in terms: millipedes do not infest food, clothing or dry, structurally sound wood. University of Georgia states that they do not cause damage inside the home, although they may leave a stain if they are crushed. Colorado State describes them as feeding on rotting organic matter such as leaves and wood, and rarely on tender green leaves and roots — which is a garden and leaf-litter diet, not a building one. The stain is the only damage any of the five names, and it is caused by stepping on one.',
  },
  {
    question: 'What actually stops it happening again?',
    answer:
      'Sealing and drying, in that order, and every source that gives control advice says some version of it. Colorado State: remove debris and other favorable habitats from around building foundations, and seal or caulk openings around the foundation to reduce future millipede problems. Purdue: cracks around doors, basement windows or similar openings should be sealed with caulking compound. University of Georgia: make sure doors and windows fit tightly and caulk cracks and crevices that permit their entry to the inside. NC State names the specific weak point, which is worth knowing before you start: door thresholds, especially at the base of sliding glass doors and garage doors. University of Georgia also draws the wider inference — excessive moisture will provide habitat for a wide range of household pests and is indicative of a structural or functional problem in a home.',
  },
  {
    question: 'Is there a spray for this?',
    answer:
      'Colorado State University Extension does name one, and it also spends most of its page arguing you will not need it. It states that where problems are persistent and severe, insecticides may help reduce invasions, applied around the base of the building foundation out into lawn areas, and names four pyrethroid active ingredients for that use: bifenthrin, cyfluthrin, lambda-cyhalothrin and permethrin. In the same passage it says usually only shaded sides of the home need treatment, and that whole yard treatments are unnecessary and not recommended. Its Quick Facts open by saying control is rarely necessary and that if required it should primarily involve moisture control. No product is named on this page, and the reason is set out in its own section below.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'harm', title: 'Are They Dangerous? Two Answers, and a Caveat' },
  { id: 'identification', title: 'Telling One From a Centipede' },
  { id: 'why-now', title: 'Why They Came, and Why It Will Stop' },
  { id: 'wait', title: 'The Remedy Is to Wait, Then Vacuum' },
  { id: 'sealing', title: 'What Stops It Happening Again' },
  { id: 'not-named', title: 'Why No Product Is Named Here' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function MillipedesPage() {
  return (
    <UsPageLayout
      title="Millipedes"
      subtitle="Dozens of them along a basement wall after a wet week, and then nothing. Five sources agree the invasion ends by itself and that the animals die in a day or two — and they do not agree about whether it is safe to pick one up."
      lastUpdated="September 2026"
      readingTime="8 min read"
      homeHref={MILLIPEDES_HOME}
      clusterNav={MILLIPEDES_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>
          This is one of the few household arthropod problems whose published remedy is to do
          nothing for a few days.
        </strong>{' '}
        Colorado State University Extension:{' '}
        <em>
          &ldquo;Because millipedes require high moisture, they usually die in a home within a day or
          two.&rdquo;
        </em>{' '}
        What follows is why they arrived, why the arrival stops on its own, and the one thing the
        sources disagree about.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>No product is named here.</strong> Colorado State does name four pyrethroid active
          ingredients for a perimeter treatment, and says in the same passage that they are sold
          under various trade names &mdash; a chemistry rather than a product, which is not
          something a reader can shop against.{' '}
          <Link href="/us/black-widow-spiders">Our black widow page</Link> was given the same list by
          the same publisher and reached the same conclusion; these two pages are not going to
          disagree about it.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Sealing is named by five sources and specified by none</strong> &mdash; no gap
          width, no material, no door-sweep dimension &mdash; so there is nothing to rank a product
          against there either. And the same source that names the spray opens by saying control is
          rarely necessary.
        </p>
      </div>

      <h2 id="harm">Are They Dangerous? Two Answers, and a Caveat</h2>
      <p>
        <strong>Two sources say no, without qualification.</strong> Colorado State:{' '}
        <em>&ldquo;Millipedes do not bite or pose any danger to humans.&rdquo;</em> NC State
        Extension rules out more in one sentence:{' '}
        <em>
          &ldquo;Millipedes do not bite, sting, or transmit diseases, nor do they infest food,
          clothing or dry, structurally sound wood.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          University of Georgia agrees on the first point and then adds something the other two do
          not carry at all.
        </strong>{' '}
        It states that{' '}
        <em>
          &ldquo;Millipedes are not poisonous, but many species have glands capable of producing
          irritating fluids that may cause allergic reactions in some individuals.&rdquo;
        </em>{' '}
        And then, more concretely:{' '}
        <em>
          &ldquo;The defensive sprays of some millipedes contain hydrochloric acid that can
          chemically burn the skin and cause long-term skin discoloration.&rdquo;
        </em>{' '}
        followed by{' '}
        <em>&ldquo;The fluid can also be dangerous to the eyes.&rdquo;</em>
      </p>
      <p>
        <strong>Its practical instruction is one line, and it is the reason this section exists:</strong>{' '}
        <em>&ldquo;It is not advisable to handle millipedes with your bare hands.&rdquo;</em>
      </p>
      <p>
        <strong>
          The disagreement is narrower than it first looks, and this page will not collapse it in
          either direction.
        </strong>{' '}
        Colorado State and NC State are describing a millipede you leave alone, and on that they are
        almost certainly right &mdash; nothing in the Georgia text describes an animal that
        approaches or attacks. Georgia is describing a millipede you pick up or crush. Both are
        published; only one of them is about a choice you make. Use a dustpan or a vacuum rather
        than fingers and the two positions stop competing.
      </p>

      <h2 id="identification">Telling One From a Centipede</h2>
      <p>
        <strong>Count the legs per segment. It is the whole test.</strong> University of Georgia
        describes the millipede:{' '}
        <em>
          &ldquo;They are wormlike, with rounded body segments that each bear two pairs of legs.&rdquo;
        </em>{' '}
        A centipede has one pair per segment, is flattened rather than round, and moves fast.
      </p>
      <p>
        <strong>Behavior separates them just as reliably.</strong> Colorado State:{' '}
        <em>&ldquo;When dead or disturbed, they tend to curl into a tight coil.&rdquo;</em> A
        millipede curls; a centipede runs.{' '}
        <Link href="/us/house-centipedes">Our house centipedes page</Link> covers the fast one,
        including the bite question its own eight sources disagree about &mdash; and note that a
        centipede in the same basement may be there because there is something to eat.
      </p>
      <p>
        Colorado State also records the description most people actually arrive with, which is worth
        printing because it is exactly what a reader types into a search box: a common description
        is little black worms crawling in the basement windows.
      </p>
      <p>
        <strong>And if it is gray, oval and rolls into a ball, it is neither.</strong> Colorado State
        publishes a third animal in the same fact sheet as these two &mdash; the sowbug and the
        pillbug, which are not insects at all but crustaceans that breathe through gills.{' '}
        <Link href="/us/sowbugs-pillbugs">Our sowbugs and pillbugs page</Link> covers the test that
        separates those two from each other, and why the same source says control is generally
        unnecessary for them.
      </p>

      <h2 id="why-now">Why They Came, and Why It Will Stop</h2>
      <p>
        <strong>Rain moves them, and the calendar is published.</strong> Colorado State:{' '}
        <em>
          &ldquo;Most millipede movement takes place in September and October and again in
          midspring.&rdquo;
        </em>{' '}
        Purdue University Extension names the trigger:{' '}
        <em>
          &ldquo;Large amounts of rainfall can trigger mass migrations of millipedes from the
          soil.&rdquo;
        </em>
      </p>
      <p>
        <strong>Alabama Cooperative Extension describes it from the animal&rsquo;s side:</strong>{' '}
        <em>
          &ldquo;However, at certain times during summer and fall, millipedes become restless and may
          migrate in large numbers from their normal living places to residents&rsquo; living
          spaces.&rdquo;
        </em>
      </p>
      <p>
        <strong>And the shape of the event is the diagnostic.</strong> Colorado State observes that
        invasions, usually into cellars, often take place shortly after a period of wet weather and
        end as suddenly as they start. An influx that began within a week will end within a week.
      </p>
      <p>
        University of Georgia explains the route in, and it is why a ground-floor door is the usual
        point of failure:{' '}
        <em>
          &ldquo;Millipedes can climb walls easily and will often enter homes around ground level
          doors and through foundation cracks above ground level.&rdquo;
        </em>
      </p>

      <h2 id="wait">The Remedy Is to Wait, Then Vacuum</h2>
      <p>
        <strong>
          Colorado State states the reason the animals cannot persist indoors, and then states the
          remedy that follows from it.
        </strong>{' '}
        The reason:{' '}
        <em>
          &ldquo;Because millipedes require high moisture, they usually die in a home within a day or
          two.&rdquo;
        </em>{' '}
        The remedy:{' '}
        <em>
          &ldquo;Because millipedes cause no damage in homes other than a minor annoyance, the best
          way to handle infestations is to wait a few days for the problem to subside, then vacuum
          the bodies that remain.&rdquo;
        </em>
      </p>
      <p>
        <strong>One observation from the same source explains a common false alarm:</strong>{' '}
        <em>
          &ldquo;The hard body of the millipede, however, remains intact for a considerable time
          after it is dead.&rdquo;
        </em>{' '}
        A dry millipede on a basement floor is not evidence that anything is still arriving. It may
        have died a fortnight ago and simply not decayed.
      </p>
      <p>
        Given Georgia&rsquo;s warning about the defensive fluid, a vacuum or a dustpan is the sensible
        tool here rather than a hand, and that follows from the sources rather than from us.
      </p>

      <h2 id="sealing">What Stops It Happening Again</h2>
      <p>
        <strong>Debris first, then the gaps.</strong> Colorado State:{' '}
        <em>
          &ldquo;Remove debris and other favorable habitats from around building foundations to help
          reduce problems.&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;Seal or caulk openings around the foundation to reduce future millipede
          problems.&rdquo;
        </em>
      </p>
      <p>
        <strong>Purdue gives the same instruction for the openings above ground level:</strong> any
        cracks around doors, basement windows or similar openings should be sealed with caulking
        compound. University of Georgia:{' '}
        <em>
          &ldquo;Make sure doors and windows fit tightly and caulk cracks and crevices that permit
          their entry to the inside.&rdquo;
        </em>
      </p>
      <p>
        <strong>NC State names the specific weak point, and it is worth knowing before you start:</strong>{' '}
        door thresholds, especially at the base of sliding glass doors and garage doors. That is
        where a millipede walking along a foundation finds its way in.
      </p>
      <p>
        <strong>And University of Georgia draws the inference that outlasts the millipedes:</strong>{' '}
        <em>
          &ldquo;This fact should not be overlooked; excessive moisture will provide habitat for a
          wide range of household pests and is indicative of a structural or functional problem in a
          home.&rdquo;
        </em>{' '}
        Our <Link href="/us/earwigs">earwigs page</Link> and our{' '}
        <Link href="/us/camel-crickets">camel crickets page</Link> describe the same damp perimeter
        producing two entirely different animals, and neither page repeats this one.
      </p>

      <h2 id="not-named">Why No Product Is Named Here</h2>
      <p>
        <strong>
          Colorado State names four pyrethroid active ingredients, and in the same passage explains
          why they are not a shopping criterion.
        </strong>{' '}
        It gives bifenthrin, cyfluthrin, lambda-cyhalothrin and permethrin for a perimeter
        treatment, and says insecticides with these active ingredients are widely available at
        nurseries, sold under various trade names. A list of chemistries that every competing
        product carries does not distinguish one product from another, so there is nothing here to
        rank.
      </p>
      <p>
        <strong>This estate has already answered this exact question, from the same publisher.</strong>{' '}
        <Link href="/us/black-widow-spiders">Our black widow page</Link> was given essentially the
        same list of pyrethroids by Colorado State and named no product for the same reason. Two
        pages disagreeing about that would be the defect, not the consistency.
      </p>
      <p>
        <strong>The source&rsquo;s own weight also runs against a purchase.</strong> Its Quick Facts
        say control is rarely necessary, and that if control is required it should primarily involve
        moisture control. In the insecticide passage itself it says usually only shaded sides of the
        home need treatment and that whole yard treatments are unnecessary and not recommended. A
        product card at the bottom of a ladder whose first rung is <em>wait</em> would misreport the
        page it sits on.
      </p>
      <p>
        <strong>Sealing has the opposite problem: five sources support it and none specifies it.</strong>{' '}
        Caulk, door sweeps, tight-fitting doors and screened openings are all named; no gap width, no
        material and no dimension is published for any of them. That is a supported practice with no
        product criterion attached, which is the position{' '}
        <Link href="/us/camel-crickets">our camel crickets page</Link> already reached on
        weather-stripping.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
