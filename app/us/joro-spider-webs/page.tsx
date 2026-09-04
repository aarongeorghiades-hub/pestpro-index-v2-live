import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { JORO_NAV, JORO_HOME } from '../components/joroNav';

const URL = 'https://pestproindex.com/us/joro-spider-webs';
const TITLE = 'Joro Spider Webs: Why So Big, and Removal';
const DESCRIPTION =
  'How large a Joro spider web actually gets, where they\'re built, how to take one down without hurting yourself or the spider, and why not to spray it.';

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
    '@id': URL,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Joro Spider',
      item: 'https://pestproindex.com/us/joro-spider',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Joro Spider Webs',
      item: URL,
    },
  ],
};

const faqs: Faq[] = [
  {
    question: 'How big is a Joro spider web?',
    answer:
      'Bigger than the round part suggests. Clemson Extension describes the central orb as typically around 2 feet in diameter, with the structural webbing stretching several feet on each side. University of Georgia describes the whole structure as spanning 10 feet or more, with support strands that can reach over 20 feet. Penn State Extension gives webs up to 10 feet wide.',
  },
  {
    question: 'Why is Joro silk golden?',
    answer:
      'The silk of mature females is naturally yellow or golden in color. University of Georgia describes it as very strong and sticky. It is the same trait that gives the related golden silk orb-weaver its name.',
  },
  {
    question: 'Where do Joro spiders build their webs?',
    answer:
      'Anywhere with an anchor point on each side and flying insects in between. University of Georgia lists porches, walkways, decks, windows, doorways, shrubbery beds, and the gaps between the tops of large trees. Clemson Extension adds forest edges, parks, roadside vegetation, yards with trees, buildings, and other manmade structures. Joro Watch notes they are most easily found along trailsides and forest edges.',
  },
  {
    question: 'How do I get rid of a Joro spider web?',
    answer:
      'Mechanically. Clemson Extension suggests using a stick or a broom to knock the spiders from their webs, or relocating them away from the property. A long-handled or telescoping tool lets you reach a web at second-story height without a ladder. Be aware that University of Georgia notes destroying the web alone is not effective, because the spider rebuilds in short order.',
  },
  {
    question: 'Will the web come back if I knock it down?',
    answer:
      'Usually yes. University of Georgia states plainly that simply destroying the web is not effective, as they rebuild in short order. If a particular doorway or walkway keeps getting webbed, expect to clear it repeatedly through the fall, or move the spider rather than only the web.',
  },
  {
    question: 'Should I spray insecticide on Joro spider webs?',
    answer:
      'University of Georgia Extension advises against using insecticides to control this spider over large areas. Its Turf and Ornamental Pest Management program explains why: area-wide sprays and fogging kill many other insects including pollinators and beneficial predators. We make no claim here about whether any pesticide works on this species.',
  },
  {
    question: 'Are there places a Joro web should never be left alone?',
    answer:
      'Yes. University of Georgia identifies two: around pollinator and flower gardens, and around bee hives. A large, strong, sticky web strung across a foraging route catches bees.',
  },
];

const sources: Source[] = [
  {
    label: 'Managing Joro Spiders in the Landscape',
    publisher: 'University of Georgia Turf and Ornamental Pest Management',
    date: 'October 2022',
    href: 'https://site.caes.uga.edu/entomologyresearch/2022/10/managing-joro-spiders-in-the-landscape/',
  },
  {
    label: 'The Jorō Spider',
    publisher: 'Clemson Cooperative Extension, Home & Garden Information Center',
    date: 'November 21, 2024',
    href: 'https://hgic.clemson.edu/factsheet/the-joro-spider/',
  },
  {
    label: 'Jorō Spiders',
    publisher: 'Penn State Extension',
    date: 'September 8, 2025',
    href: 'https://extension.psu.edu/joro-spiders',
  },
  {
    label: 'Joro Spider: Trichonephila clavata (Circular 1273)',
    publisher: 'University of Georgia Cooperative Extension',
    date: 'Revised June 16, 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C1273/',
  },
  {
    label:
      'Managing Joro Spiders in the Landscape (Circular 1289) — the source of the manual-removal and reach material',
    publisher:
      'University of Georgia Extension (William G. Hudson, Shimat V. Joseph and Jason Schmidt)',
    date: 'July 13, 2023',
    href: 'https://fieldreport.caes.uga.edu/publications/C1289/managing-joro-spiders-in-the-landscape/',
  },
  {
    label: 'Joro Watch Season',
    publisher: 'Joro Watch, UGA Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://jorowatch.org/season/',
  },
];

const tocItems = [
  { id: 'how-big', title: 'How Big They Get' },
  { id: 'the-tool', title: 'The Tool for the Job' },
  { id: 'why-so-big', title: 'Why So Big' },
  { id: 'where', title: 'Where They Get Built' },
  { id: 'removing', title: 'Clearing a Web Safely' },
  { id: 'why-not-spray', title: 'Why Not to Spray' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Joro spider: identification and origin', href: '/us/joro-spider' },
  { title: 'Are Joro spiders dangerous?', href: '/us/are-joro-spiders-dangerous' },
  { title: 'Where Joro spiders are found', href: '/us/joro-spider-range' },
];

export default function JoroSpiderWebsPage() {
  return (
    <UsPageLayout
      title="Joro Spider Webs"
      subtitle="Why they end up strung across your front door, how far the structure really extends, and how to take one down without a ladder, a spray can, or a fight."
      lastUpdated="August 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: 'Joro Spider', href: '/us/joro-spider' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={JORO_HOME}
      clusterNav={JORO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Most people meet a Joro spider by walking into its web, which is a poor introduction.
        The web is the practical problem: it is large, it is strong, and it gets rebuilt across
        the same doorway night after night through the fall.
      </p>

      <h2 id="how-big">How Big They Get</h2>
      <p>
        Published figures differ because they describe different parts of the same structure,
        and pulling them apart makes the whole thing easier to understand.
      </p>
      <ul>
        <li>
          <strong>The orb</strong> &mdash; the round, spiraled catching surface in the middle.
          Clemson Extension puts this at typically around 2 feet in diameter.
        </li>
        <li>
          <strong>The structural webbing</strong> &mdash; the scaffolding that holds the orb open.
          Clemson describes it as stretching several feet on each side. University of Georgia
          describes the webs as spanning 10 feet or more. Penn State Extension gives up to 10 feet
          wide.
        </li>
        <li>
          <strong>The support strands</strong> &mdash; the anchor lines running out to a tree, a
          gutter, or a railing. University of Georgia reports these can reach over 20 feet.
        </li>
      </ul>
      <p>
        So a web whose visible round part is the size of a trash can lid may be anchored to
        something two car lengths away. That matters when you are deciding where to stand to clear
        it, and it explains why the first strand you feel is usually nowhere near the spider.
      </p>
      <p>
        The silk itself is yellow or golden in mature females, and University of Georgia describes
        it as very strong and sticky. It does not brush off the way an old cobweb does.
      </p>

      <h2 id="the-tool">The Tool for the Job</h2>
      <p>
        The only equipment this actually needs is reach. A telescoping cobweb duster is a lightweight
        pole with a bristled head on the end: you extend the pole, hook the head through the web, and
        twist so the silk winds onto the bristles instead of onto your arm. It is a physical tool and
        nothing else &mdash; no chemistry, no bait, no active ingredient. It removes silk from a
        surface, and that is the entire mechanism.
      </p>
      <p>
        The reason to prefer one over a broom is the second-story anchor line. A broom gives you about
        nine feet of reach standing on the ground; a three-stage pole roughly doubles that, which is
        the difference between clearing a gutter-line web from the lawn and getting a ladder out.
      </p>
      <p>
        University of Georgia Extension names the same manual approach and the same everyday tools in
        Circular 1289: <strong>&ldquo;A rake, a broom, or a stick can be used for wrapping up the
        spiders.&rdquo;</strong> The same publication gives the reason reach matters, and it puts it
        more bluntly than most sources would:{' '}
        <strong>
          &ldquo;The higher up the spider is, however, the better the chance it will end up on your
          head.&rdquo;
        </strong>{' '}
        That is the argument for a pole rather than a broom in one sentence, from the extension
        service closest to this animal. It also explains why the work is worth doing once and
        properly: University of Georgia states in the same circular that{' '}
        <strong>
          &ldquo;Simply destroying the web is not effective, as they can rebuild it in short
          order.&rdquo;
        </strong>
      </p>

      <p>
        The tool below is a telescoping duster, named because taking a web down by hand is the only removal method the sources on this page describe.
      </p>

      <UsToolCard
        name="EVERSPROUT 5-to-12 Foot Cobweb Duster & Pole Combo"
        whatItDoes={[
          'Three-stage aluminum pole, listed as extending from 5 feet to 12 feet',
          'Listed reach of about 20 feet when held overhead from the ground',
          'Bristled head that winds silk onto itself rather than smearing it',
          'A physical removal tool only — it contains no pesticide and makes no chemical claim',
        ]}
        asin="B075L7QWP4"
      />

      <p>
        One tool, named plainly. We have not built a ranking, a comparison table, or a
        &ldquo;top picks&rdquo; category around a single item, because a table of one is not a
        comparison. Any telescoping duster of similar length does the same job; this one is named
        so the description points at something specific rather than at a shopping category.
      </p>

      <h2 id="why-so-big">Why So Big</h2>
      <p>
        A web is a fishing net, and the size of the net follows from what it is fishing for. A
        two-foot orb held open by 20 feet of rigging intercepts a large volume of flying insects,
        which is what an adult female needs to reach{' '}
        <Link href="/us/joro-spider">the size she reaches</Link> and then produce an egg sac of 400
        to 500 eggs before winter.
      </p>
      <p>
        The consequence for you is architectural rather than biological. The spider is looking for
        two solid anchor points with open air between them, and a porch, a doorway, or the gap
        between a downspout and a shrub is exactly that.
      </p>

      <h2 id="where">Where They Get Built</h2>
      <p>
        University of Georgia lists the places that cause the most complaints: on or adjacent to
        porches, walkways, decks, windows and doorways, in shrubbery beds, and between the tops of
        large trees. Clemson Extension adds forest edges, parks, roadside vegetation, yards with
        trees, and buildings and other manmade structures. Joro Watch notes that they are most
        easily found along trailsides and forest edges, but have been found almost anywhere
        outdoors that they can establish a web.
      </p>
      <p>
        The pattern is edges. A Joro wants the boundary between something solid and something open,
        which is why the treeline and your front porch read the same to a spider.
      </p>

      <h2 id="removing">Clearing a Web Safely</h2>
      <p>
        The approach the extension services describe is mechanical and unglamorous.
      </p>
      <ul>
        <li>
          <strong>Use a long handle, not your hand.</strong> Clemson Extension suggests using a
          stick or a broom to knock the spiders from their webs, or relocating them away from the
          property.
        </li>
        <li>
          <strong>Work from the anchor lines inward.</strong> Cutting the support strands collapses
          the structure in one go; picking at the orb alone leaves the rigging in place.
        </li>
        <li>
          <strong>Do it in daylight, from stable ground.</strong> The reason people fall doing this
          is that the anchor point is high and they fetch a ladder. A tool that reaches is safer
          than a ladder that reaches.
        </li>
        <li>
          <strong>Expect to repeat it.</strong> University of Georgia states that simply destroying
          the web is not effective, as they rebuild in short order. If the same doorway keeps
          getting webbed, moving the spider is the durable fix, not clearing the silk again.
        </li>
      </ul>
      <p>
        If the spider itself worries you, the relevant research is on{' '}
        <Link href="/us/are-joro-spiders-dangerous">the dangerous-or-not page</Link>: a disturbed
        Joro&rsquo;s documented response is to freeze for over an hour, not to advance on you.
      </p>

      <h2 id="why-not-spray">Why Not to Spray</h2>
      <p>
        University of Georgia Extension&rsquo;s published advice is against using insecticides to
        control this spider over large areas. Its Turf and Ornamental Pest Management program gives
        the reason: area-wide sprays and fogging kill many other insects, including pollinators and
        beneficial predators.
      </p>
      <p>
        We make no claim on this page about whether any pesticide works on Joro spiders. That is
        deliberate. The argument against reaching for a spray can here is not that it fails; it is
        that the collateral cost falls on the insects you want in your yard, to solve a problem a
        pole solves in thirty seconds.
      </p>
      <p>
        There is a related point worth keeping. University of Georgia names two places where Joro
        webs should not be tolerated at all: around pollinator and flower gardens, and around bee
        hives. That is the one situation where clearing webs is not just about your doorway.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
