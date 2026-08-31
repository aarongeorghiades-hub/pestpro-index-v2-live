import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import UsComparisonTable, { type ComparisonRow } from '../components/UsComparisonTable';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/best-stink-bug-traps';
const TITLE = 'Stink Bug Traps: What the Research Found';
const DESCRIPTION =
  'The only controlled test found compared a homemade light-and-water trap to store-bought models. What it measured, how to build the trap, and commercial options.';

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
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Stink Bugs in the House',
      item: 'https://pestproindex.com/us/stink-bugs-in-house',
    },
    { '@type': 'ListItem', position: 2, name: 'Stink Bug Traps', item: URL },
  ],
};

const comparisonRows: ComparisonRow[] = [
  {
    mechanism: 'Light over a pan of soapy water (homemade)',
    howItWorks:
      'A foil roasting pan filled with water and dish soap, with a light suspended over it, in a dark room. Insects fly to the light, hit the water, and the soap breaks the surface tension so they cannot sit on it.',
    indoorOutdoor: 'Indoor only — needs a dark room',
    evidence:
      'The only controlled comparison we could source. Aigner and Kuhar, Virginia Tech, tested traps in 16 houses over two years and reported this design caught 14 times more stink bugs than store-bought traps. Published in the Journal of Extension.',
  },
  {
    mechanism: 'Pheromone lure trap (commercial)',
    howItWorks:
      'A housing holding a synthetic aggregation-pheromone lure. The lure is the attractant; the housing holds the insects once they arrive.',
    indoorOutdoor: 'Sold for indoor and outdoor use',
    evidence:
      'No controlled home-use comparison found in the extension literature we searched. Manufacturer performance claims are not repeated here.',
  },
  {
    mechanism: 'Plug-in light trap with a glue card (commercial)',
    howItWorks:
      'A wall unit emitting light, with a replaceable adhesive card behind it. Same attraction principle as the homemade trap; a card instead of water.',
    indoorOutdoor: 'Indoor',
    evidence:
      'No stink-bug-specific controlled test found. The light-attraction principle it relies on is the same one the Virginia Tech trap exploits, but that is an argument about mechanism, not a measured result for any product.',
  },
  {
    mechanism: 'Two-liter bottle funnel (homemade)',
    howItWorks:
      'The top third of a two-liter bottle cut off and inverted into the base, making a funnel. Bugs are knocked in from a wall or ceiling and cannot easily climb back out.',
    indoorOutdoor: 'Indoor, handheld',
    evidence:
      'Described by Virginia Tech entomologist Thomas Kuhar as a way to collect stink bugs. Not a trap that works unattended, and no capture-rate figure is claimed for it.',
  },
  {
    mechanism: 'Vacuum (not a trap, but the alternative)',
    howItWorks:
      'Direct removal. A nylon stocking in the hose collects the insects without them reaching the canister.',
    indoorOutdoor: 'Indoor',
    evidence:
      'The standard extension recommendation. Penn State Extension notes the vacuum may acquire the smell for a period of time; University of Kentucky Extension gives the stocking method to limit odor.',
  },
];

const faqs: Faq[] = [
  {
    question: 'What is the most effective stink bug trap?',
    answer:
      'On the only controlled comparison we could source, a homemade one. Virginia Tech researchers John Aigner and Tom Kuhar tested traps in 16 houses over two years with the help of homeowners, and reported that a foil roasting pan filled with water and dish soap, with a light suspended over it in a dark room, eliminated 14 times more stink bugs than store-bought traps. The findings were published in the Journal of Extension. That is one study, on home use, and we have not found a later one that supersedes it.',
  },
  {
    question: 'How do I build the Virginia Tech stink bug trap?',
    answer:
      'Fill a foil roasting pan with water and add dish soap. Suspend a light over the pan. Put it in a dark room, so the trap is the brightest thing there. That is the whole design as Virginia Tech describes it: a roasting pan, dish soap and a light, all of which many households already own. The soap matters because it breaks the surface tension of the water.',
  },
  {
    question: 'Why does the room have to be dark?',
    answer:
      'Because the trap works by being the most attractive light source available. Virginia Tech’s John Aigner explained the principle plainly: insects are generally attracted to light, and the trap exploits that. In a lit room the trap is competing with every other lamp and window, and the effect is diluted.',
  },
  {
    question: 'Do commercial stink bug traps work?',
    answer:
      'We are not in a position to tell you, and neither is anyone quoting a manufacturer. We could not find a controlled comparison of specific commercial models in the extension literature. The Virginia Tech study compared its homemade design against store-bought traps as a category and found the homemade design caught considerably more. That is evidence about a category, not a verdict on any particular product.',
  },
  {
    question: 'Should I put a stink bug trap outside to stop them getting in?',
    answer:
      'The extension advice for keeping stink bugs out of a building is exclusion, not trapping. University of Kentucky Extension describes sealing cracks around windows, doors, soffits, fascia boards, pipes and wires with caulk, and screening vents with mesh no larger than 1/6 inch. A trap deals with insects that are already inside; it does not reduce how many arrive.',
  },
  {
    question: 'Are there insecticides labeled for stink bugs indoors?',
    answer:
      'When the Virginia Tech trap study was conducted, John Aigner stated that there were no in-home insecticides labeled for use against brown marmorated stink bugs, which is why the researchers looked at traps at all. That was his statement in 2014 and product labels change, so treat it as a fact with a date on it rather than a current one. Separately, Penn State Extension advises against using an insecticide inside after the insects have gained access, and University of Kentucky Extension says insecticides are not warranted for controlling stink bugs indoors except perhaps in heavily infested areas such as attics.',
  },
  {
    question: 'Will a trap solve the problem?',
    answer:
      'It will reduce the number of insects walking around your rooms. It will not change how many entered the building, and it will not change next year. University of Kentucky Extension notes the adults overwinter in an unmated condition and do not breed or reproduce indoors, so what is inside is a fixed population. Trapping empties the room; sealing the building empties next October.',
  },
];

const sources: Source[] = [
  {
    label: 'Stink bugs beware! Homemade stink bug traps squash store-bought models',
    publisher:
      'Virginia Tech News (John Aigner and Tom Kuhar, Department of Entomology; study published in the Journal of Extension)',
    date: 'May 7, 2014',
    href: 'https://news.vt.edu/articles/2014/05/050714-cals-stinkbugtrap.html',
  },
  {
    label: 'Stink bugs: The good, the bad, and how to get rid of them',
    publisher: 'Virginia Tech News (Thomas Kuhar, Department of Entomology)',
    date: 'October 27, 2023',
    href: 'https://news.vt.edu/articles/2023/10/stink_bugs_expert.html',
  },
  {
    label: 'Stink Bug Infestation of Dwellings (ENTFACT-654)',
    publisher: 'University of Kentucky Entomology (Potter and Bessin)',
    date: 'Revised March 2026',
    href: 'https://entomology.ca.uky.edu/ef654',
  },
  {
    label: 'Brown Marmorated Stink Bug',
    publisher: 'Penn State Extension (Skvarla; originally Jacobs)',
    date: 'Updated June 24, 2026',
    href: 'https://extension.psu.edu/brown-marmorated-stink-bug',
  },
];

const tocItems = [
  { id: 'headline', title: 'The Short Answer' },
  { id: 'the-study', title: 'The Study' },
  { id: 'build-it', title: 'Building the Trap' },
  { id: 'comparison', title: 'Trap Types Compared' },
  { id: 'commercial', title: 'The Commercial Option' },
  { id: 'bottle', title: 'The Bottle Funnel' },
  { id: 'limits', title: 'What a Trap Cannot Do' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Stink bugs in the house: the hub', href: '/us/stink-bugs-in-house' },
  { title: 'How to get rid of stink bugs', href: '/us/how-to-get-rid-of-stink-bugs' },
  { title: 'Asian lady beetles, not ladybugs', href: '/us/asian-lady-beetles' },
];

export default function BestStinkBugTrapsPage() {
  return (
    <UsPageLayout
      title="Stink Bug Traps"
      subtitle="We went looking for a ranking of commercial traps and found something more useful: one controlled study, in real houses, whose winner costs nothing and is made from a roasting pan."
      lastUpdated="August 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Stink Bugs in the House', href: '/us/stink-bugs-in-house' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="headline">The Short Answer</h2>
      <p>
        A foil roasting pan, water, dish soap, and a light over it in a dark room.
      </p>
      <p>
        That is not a folk remedy we are passing along. It is the design that Virginia Tech
        researchers tested against commercial traps in real homes and found caught 14 times
        more stink bugs. We looked for a controlled comparison of the traps you can buy, and
        this is the study that exists.
      </p>
      <p>
        We have set this page out in the order the evidence supports rather than the order that
        would sell most: the tested design first, then what is on the shelf, then what none of
        it can do. If you want the exclusion work that actually reduces next year&rsquo;s
        numbers, that is on{' '}
        <Link href="/us/how-to-get-rid-of-stink-bugs">the removal page</Link>.
      </p>

      <h2 id="the-study">The Study</h2>
      <p>
        John Aigner, then a doctoral student in Virginia Tech&rsquo;s Department of Entomology,
        and Tom Kuhar, an entomology professor and Virginia Cooperative Extension specialist,
        recruited homeowners who already had stink bug problems and used their houses as test
        sites.
      </p>
      <ul>
        <li><strong>Sites:</strong> 16 houses.</li>
        <li><strong>Duration:</strong> two years.</li>
        <li>
          <strong>Comparison:</strong> a homemade light-over-soapy-water pan trap against
          store-bought traps.
        </li>
        <li>
          <strong>Result:</strong> the homemade trap eliminated 14 times more stink bugs than the
          store-bought traps.
        </li>
        <li><strong>Published in:</strong> the Journal of Extension.</li>
      </ul>
      <p>
        Aigner explained the mechanism without embellishment: they knew insects are generally
        attracted to light, and were able to exploit that with these traps. Virginia Tech also
        noted the approach was not new — it had circulated online for years — and that this was
        the first time it had been tested in a scientific experiment.
      </p>
      <p>
        <AsOf date="2014">
          Aigner also stated at the time that there were no in-home insecticides labeled for use
          against brown marmorated stink bugs
        </AsOf>
        , which is why the team was looking at traps in the first place. Product labels change, so
        that carries its date rather than being asserted as current.
      </p>
      <p>
        Two honest limits on the finding. It is one study, and it measures home use only —
        Virginia Tech notes the traps are only practical in homes, not on farms. And it compared
        the homemade design against store-bought traps as a category rather than ranking
        individual models, so it cannot tell you which commercial trap is better than another.
      </p>

      <h2 id="build-it">Building the Trap</h2>
      <p>
        The full specification, as Virginia Tech gives it:
      </p>
      <ol>
        <li><strong>Take a foil roasting pan.</strong> The disposable kind from a grocery store.</li>
        <li><strong>Fill it with water and add dish soap.</strong> The soap is not decorative — it breaks the surface tension so insects that land cannot sit on the water and walk off.</li>
        <li><strong>Suspend a light over the pan.</strong> A desk lamp on a chair beside it will do.</li>
        <li><strong>Put it in a dark room.</strong> This is the condition people skip. The trap works by being the brightest thing available; in a lit room it is competing with everything else.</li>
      </ol>
      <p>
        Virginia Tech notes the only cost is a roasting pan, dish soap and a light, which many
        households already have, and that the trap is pesticide-free.
      </p>
      <p>
        Practical notes that follow from the design rather than from the study: put it where the
        insects already are — the upper floors, since University of Kentucky Extension reports
        stink bugs prefer the upper areas of buildings — and empty it before it starts to smell,
        because a pan of dead stink bugs is still a pan of stink bugs.
      </p>

      <h2 id="comparison">Trap Types Compared</h2>
      <p>
        We have compared <strong>mechanisms rather than brands</strong>, deliberately. The evidence
        that exists is about how a trap works, not about whose name is on it, and a ranking of brands
        would be a hierarchy we invented. The last column says what is actually known about each row,
        including where the answer is &ldquo;nothing controlled&rdquo;.
      </p>

      <UsComparisonTable
        caption="Stink bug trap mechanisms and the evidence available for each, as of August 2026."
        rows={comparisonRows}
      />

      <h2 id="commercial">The Commercial Option</h2>
      <p>
        Commercial stink bug traps exist and some people would rather buy one than assemble a
        roasting pan. That is a legitimate preference, so here is one, described mechanically and
        with no performance claim attached.
      </p>
      <p>
        It works on a pheromone lure: a synthetic version of the aggregation pheromone the insects
        use to gather, held in a housing. We have not found a controlled test of it, and we are not
        repeating the manufacturer&rsquo;s own claims about range or capture rates.
      </p>

      <UsToolCard
        name="Bonide Bug Beater Stink Bug Trap"
        whatItDoes={[
          'Uses a pheromone lure as the attractant rather than light',
          'Sold for both indoor and outdoor placement',
          'Listed by the manufacturer as targeting brown marmorated and green stink bugs',
          'We have found no controlled test of this or any other commercial stink bug trap',
        ]}
        asin="B005X94R7U"
      />

      <p>
        <strong>What we checked and did not include.</strong> We looked at five other stink bug trap
        listings while writing this page. Two returned dead product pages, one was marked currently
        unavailable, and two could not be confirmed to our standard. A trap you cannot buy is not an
        option, and a link we cannot confirm is not one either, so none of them are named here. The
        full list is in this round&rsquo;s report.
      </p>

      <h2 id="bottle">The Bottle Funnel</h2>
      <p>
        For the single bug on a ceiling, Virginia Tech&rsquo;s Thomas Kuhar describes a zero-cost
        collector: cut the top off a two-liter bottle, flip it over, and put it back on the bottle.
        That gives a funnel the insects drop into and cannot easily climb out of.
      </p>
      <p>
        It is not a trap in the sense the pan trap is — it does not work unattended, and no capture
        figure is claimed for it. It is a way to collect a bug without touching it, which matters
        because handling is what releases the odor.
      </p>

      <h2 id="limits">What a Trap Cannot Do</h2>
      <p>
        This is the part most trap pages leave out, and it is the part that decides whether your
        next fall is better than this one.
      </p>
      <ul>
        <li>
          <strong>A trap does not reduce how many get in.</strong> It catches insects that are
          already inside the building. The number that enters is decided by the gaps in the
          building envelope, and only sealing changes that.
        </li>
        <li>
          <strong>The indoor population is already fixed.</strong> University of Kentucky Extension
          states the adults overwinter in an unmated condition and do not breed or reproduce
          indoors. Trapping is emptying a bucket that is not being refilled from inside.
        </li>
        <li>
          <strong>Trapping is not the recommended primary control.</strong> The extension advice for
          the building is exclusion: University of Kentucky Extension specifies sealing cracks around
          windows, doors, soffits, fascia boards, pipes and wires with caulk, and screening vents with
          mesh no larger than 1/6 inch.
        </li>
        <li>
          <strong>A trap is not a substitute for not spraying indoors.</strong> Penn State Extension
          advises against using insecticide inside after the insects have gained access, because
          carpet beetles feed on the dead insects and go on to damage woolens and stored goods.
        </li>
      </ul>
      <p>
        Put plainly: build the pan trap for this week, and do the sealing work on{' '}
        <Link href="/us/how-to-get-rid-of-stink-bugs">the removal page</Link> before next September.
        The trap is the symptom relief. The caulk is the treatment.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
