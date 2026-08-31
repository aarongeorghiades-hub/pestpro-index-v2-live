import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/how-to-get-rid-of-stink-bugs';
const TITLE = 'How to Get Rid of Stink Bugs: Seal, Then Remove';
const DESCRIPTION =
  'Exclusion first, then removal. Where to seal, the screen mesh size that matters, why your vacuum choice matters, and why not to spray them indoors.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
      canonical: URL,
    },
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
    { '@type': 'ListItem', position: 2, name: 'How to Get Rid of Stink Bugs', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What actually gets rid of stink bugs?',
    answer:
      'Sealing the building, and then removing the ones already inside by hand or by vacuum. University of Kentucky Extension describes mechanical exclusion as the approach: seal cracks around windows, doors, soffits, fascia boards, pipes and wires with caulk. Nothing you do indoors reduces next year’s number; only closing the openings does that.',
  },
  {
    question: 'What screen mesh size keeps stink bugs out of attic vents?',
    answer:
      'University of Kentucky Extension specifies screening with a mesh size no larger than 1/6 inch for attic and exhaust vents, and notes that conventional galvanized hardware cloth is not effective because the openings are too large. Penn State Extension gives number 20 mesh or smaller for the same job on lady beetle exclusion, which is a comparable specification.',
  },
  {
    question: 'Is it safe to vacuum stink bugs?',
    answer:
      'Yes, and it is the usual advice, with one caveat. Penn State Extension notes that the vacuum may acquire the smell of stink bugs for a period of time. University of Kentucky Extension suggests putting a cut-off nylon stocking in the suction tube to limit odor, and says a large collection may warrant disposing of the entire vacuum bag and airing out the hose.',
  },
  {
    question: 'Should I use a bagged vacuum or a bagless one?',
    answer:
      'Either works if you plan for the odor. With a bagged vacuum you can seal and discard the bag. With a bagless machine the smell has nowhere to go, so the nylon-stocking method University of Kentucky Extension describes is more useful: the stocking traps the insects, you tie it off and remove it, and nothing reaches the canister. Penn State Extension gives the same stocking technique for lady beetles.',
  },
  {
    question: 'Why should I not spray insecticide inside for stink bugs?',
    answer:
      'Penn State Extension states that it is not advisable to use an insecticide inside after the insects have gained access. University of Kentucky Extension adds that insecticides are not warranted for controlling stink bugs indoors, except perhaps in heavily infested areas such as attics, and that treating wall cavities is unlikely to be successful and could make carpet beetle problems worse. Dead insects in a void become food for something that does damage fabric.',
  },
  {
    question: 'Do exterior insecticide treatments work?',
    answer:
      'University of Kentucky Extension notes that many companies apply insecticides to building exteriors in the fall, as a targeted band around windows, doors and eaves, with timing given as early-to-mid September in the Midwest. We make no claim here about how well any product performs; that is a question for a licensed applicator, and the timing matters more than the product because the treatment has to be in place before the insects arrive.',
  },
  {
    question: 'What should I not do?',
    answer:
      'Do not squash them, because University of Kentucky Extension notes the odor is released when they are crushed, squeezed or handled, and advises against touching your face or eyes afterward. Do not leave windows open without a screen, as Virginia Tech’s Thomas Kuhar puts it. And do not expect indoor treatment to fix a problem whose cause is outdoors.',
  },
];

const sources: Source[] = [
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
  {
    label: 'Multicolored Asian Lady Beetle',
    publisher: 'Penn State Extension (Skvarla)',
    date: 'Updated August 12, 2026',
    href: 'https://extension.psu.edu/multicolored-asian-lady-beetle',
  },
  {
    label: 'Stink bugs: The good, the bad, and how to get rid of them',
    publisher: 'Virginia Tech News (Thomas Kuhar, Department of Entomology)',
    date: 'October 27, 2023',
    href: 'https://news.vt.edu/articles/2023/10/stink_bugs_expert.html',
  },
  {
    label: 'Multicolored Asian Lady Beetle (ENT-44)',
    publisher: 'Ohio State University Extension (Boggs and Jones)',
    date: 'June 2, 2014',
    href: 'https://ohioline.osu.edu/factsheet/ENT-44',
  },
];

const tocItems = [
  { id: 'order', title: 'The Order Matters' },
  { id: 'seal', title: 'Step One: Seal' },
  { id: 'where-to-seal', title: 'Where to Seal' },
  { id: 'vacuum', title: 'Step Two: Vacuum' },
  { id: 'bottle', title: 'The Bottle Trick' },
  { id: 'not-to-do', title: 'What Not to Do' },
  { id: 'professional', title: 'When It Is a Professional Job' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Stink bugs in the house: what they are', href: '/us/stink-bugs-in-house' },
  { title: 'Stink bug traps: what the evidence says', href: '/us/best-stink-bug-traps' },
  { title: 'Asian lady beetles, not ladybugs', href: '/us/asian-lady-beetles' },
];

export default function HowToGetRidOfStinkBugsPage() {
  return (
    <UsPageLayout
      title="How to Get Rid of Stink Bugs"
      subtitle="There are two jobs here and they are not the same one. Closing the building decides how many arrive next fall. Everything else is dealing with the ones already in."
      lastUpdated="August 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Stink Bugs in the House', href: '/us/stink-bugs-in-house' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="order">The Order Matters</h2>
      <p>
        Almost every disappointing stink bug season comes from doing these two jobs in the
        wrong order, or doing only the second one.
      </p>
      <ol>
        <li>
          <strong>Exclusion</strong> decides how many get in. It is done on the outside of
          the building, ideally before September, and it is the only thing that changes next
          year&rsquo;s number.
        </li>
        <li>
          <strong>Removal</strong> deals with the ones already inside. It is done indoors,
          it is endless while they keep arriving, and it changes nothing about next year.
        </li>
      </ol>
      <p>
        The reassuring part, covered on{' '}
        <Link href="/us/stink-bugs-in-house">the identification page</Link>, is that removal
        is a finite job. University of Kentucky Extension states the adults overwinter in an
        unmated condition and do not breed or reproduce indoors, so the population in your
        walls is whatever came in and no more.
      </p>

      <h2 id="seal">Step One: Seal</h2>
      <p>
        University of Kentucky Extension&rsquo;s advice is to seal cracks around windows,
        doors, soffits, fascia boards, pipes and wires with caulk. Penn State Extension gives
        the same instruction and specifies good quality silicone or silicone-latex caulk,
        adding that damaged screens on doors and windows should be repaired or replaced.
      </p>
      <p>
        <strong>Mesh size is the detail people get wrong.</strong> University of Kentucky
        Extension specifies screening with a mesh size no larger than 1/6 inch for attic and
        exhaust vents, and warns that conventional galvanized hardware cloth is not effective
        because its openings are too large. Penn State Extension gives number 20 mesh or
        smaller for the equivalent job. A vent you already screened may not be screened
        finely enough.
      </p>
      <p>
        Timing matters as much as technique. Kentucky Extension gives early-to-mid September
        as the point at which the insects start arriving in that state. Sealing in November
        is sealing them in.
      </p>

      <h2 id="where-to-seal">Where to Seal</h2>
      <p>
        Work from the top down, because that is where they are. University of Kentucky
        Extension notes they gather on windows, doors, roof flashing, vents, fascia and
        siding, and prefer the upper areas of buildings.
      </p>
      <ul>
        <li><strong>Attic and gable vents</strong> — the mesh question above.</li>
        <li><strong>Soffits and fascia boards</strong> — gaps where the roof meets the wall.</li>
        <li><strong>Roof flashing</strong> — around chimneys and where rooflines meet.</li>
        <li><strong>Window and door frames</strong> — including the gap behind trim.</li>
        <li><strong>Utility penetrations</strong> — pipes, wires, cable and dryer vents.</li>
        <li><strong>Siding</strong> — loose or lifted sections, and the gap at the top course.</li>
        <li><strong>Exhaust fan and light housings in ceilings</strong> — these open into the attic.</li>
      </ul>
      <p>
        Virginia Tech&rsquo;s Thomas Kuhar puts the whole exercise in one sentence: make sure
        your house is well sealed and close off entryways to help reduce the number of stink
        bugs in your home, and do not leave windows open without a screen.
      </p>

      <h2 id="vacuum">Step Two: Vacuum</h2>
      <p>
        For the ones already inside, a vacuum is the standard advice. Penn State Extension
        says they can be removed from interior areas with the aid of a vacuum cleaner, with
        one warning attached: the vacuum may acquire the smell of stink bugs for a period of
        time.
      </p>
      <p>
        That warning is the whole reason vacuum choice matters, and there are two workable
        approaches.
      </p>
      <ul>
        <li>
          <strong>A bagged vacuum, or one you have dedicated to the job.</strong> University
          of Kentucky Extension notes that a large collection may warrant disposing of the
          entire vacuum bag and airing out the hose. That is easy with a bag and unpleasant
          without one. Penn State Extension&rsquo;s lady beetle guidance is to remove the bag
          after each session and either tape and discard it or freeze it.
        </li>
        <li>
          <strong>The nylon stocking method, which works in any machine.</strong> University
          of Kentucky Extension describes putting a cut-off nylon stocking in the suction
          tube to limit odor. Penn State Extension gives the same technique for bagless
          vacuums: place a nylon stocking into the hose and secure it with a rubber band. The
          insects collect in the stocking, you tie it off and remove it, and nothing ever
          reaches the canister.
        </li>
      </ul>
      <p>
        One more mechanical note, from Ohio State University Extension&rsquo;s guidance on
        the lady beetles that arrive in the same weeks: use a fan-bypass vacuum rather than a
        direct-fan model. In a direct-fan machine the insects pass through the impeller,
        which crushes them — and crushing is exactly what releases the odor.
      </p>

      <h2 id="bottle">The Bottle Trick</h2>
      <p>
        Virginia Tech&rsquo;s Thomas Kuhar offers a zero-cost alternative for catching them
        off a wall or ceiling without touching them: cut the top off a two-liter bottle, flip
        it over, and put it back on the bottle. That gives you a funnel that they drop into
        and cannot easily climb out of.
      </p>
      <p>
        It is slower than a vacuum and better for the one bug on the lampshade at eleven at
        night than for forty on an attic window.
      </p>

      <h2 id="not-to-do">What Not to Do</h2>
      <ul>
        <li>
          <strong>Do not squash them.</strong> University of Kentucky Extension notes the
          odor is released when they are crushed, squeezed or handled, and advises against
          touching your face or eyes afterward.
        </li>
        <li>
          <strong>Do not use insecticide indoors.</strong> Penn State Extension states it is
          not advisable to use an insecticide inside after the insects have gained access.
          University of Kentucky Extension says insecticides are not warranted indoors except
          perhaps in heavily infested areas such as attics, and that treating wall cavities is
          unlikely to be successful and could exacerbate problems with carpet beetles. The
          failure mode is specific: dead insects in a void feed a pest that does eat fabric.
        </li>
        <li>
          <strong>Do not seal after they are in.</strong> You will trap them in the wall,
          where they will emerge indoors on warm days all winter.
        </li>
        <li>
          <strong>Do not treat this as a hygiene problem.</strong> Nothing indoors attracted
          them and nothing you clean will discourage them.
        </li>
      </ul>

      <h2 id="professional">When It Is a Professional Job</h2>
      <p>
        University of Kentucky Extension notes that many companies apply insecticides to
        building exteriors in the fall, as a targeted band around windows, doors and eaves,
        with timing given as early-to-mid September in the Midwest.
      </p>
      <p>
        We make no claim on this page about how well any product performs. What the sourced
        material does support is that the timing is the constraint: an exterior treatment has
        to be in place before the insects arrive, which in practice means booking it in late
        summer rather than in October when the problem becomes obvious.
      </p>
      <p>
        The other honest reason to call someone is height. Most of the gaps that matter are at
        roofline, and the reason people do not seal them is that they are three stories up.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
