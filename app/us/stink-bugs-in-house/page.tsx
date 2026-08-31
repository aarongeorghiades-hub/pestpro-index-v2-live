import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/stink-bugs-in-house';
const TITLE = 'Stink Bugs in the House: Why, and What to Do';
const DESCRIPTION =
  'Why brown marmorated stink bugs appear indoors every fall, how to identify them, whether they bite, what the smell is, and whether they damage the house.';

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

const faqs: Faq[] = [
  {
    question: 'Why are there suddenly stink bugs in my house?',
    answer:
      'They are looking for somewhere to spend the winter, not for food. Penn State Extension reports that brown marmorated stink bugs start entering structures in September through October in search of overwintering sites. University of Kentucky Extension gives early-to-mid September for Kentucky. Nothing in your house attracts them and nothing you cleaned would have prevented it; they are responding to falling temperatures, not to your kitchen.',
  },
  {
    question: 'Do stink bugs bite?',
    answer:
      'No. University of Kentucky Extension states that stink bugs are solely plant feeders and do not bite humans or pets. Their mouthparts are built to pierce plant tissue and drink plant juices, and they have no interest in and no equipment for biting people.',
  },
  {
    question: 'What is the smell, and what triggers it?',
    answer:
      'University of Kentucky Extension describes it as a pungent, cilantro-like odor produced by scent glands on the mid-section of the body. Penn State Extension locates those glands on the upper surface of the abdomen and the underside of the thorax. It is released when the insect is picked up, disturbed, crushed, squeezed or handled — which is the whole argument against swatting them.',
  },
  {
    question: 'Will stink bugs damage my house or breed inside it?',
    answer:
      'No to both. Penn State Extension states plainly that the stink bug will not reproduce inside structures or cause damage. University of Kentucky Extension adds that the adults overwinter in an unmated condition and do not breed or reproduce indoors. The ones you see in March are the same individuals that came in during September, not a new generation.',
  },
  {
    question: 'How do I tell a brown marmorated stink bug from a native stink bug?',
    answer:
      'Look at the antennae and the head. Penn State Extension describes the brown marmorated stink bug as having lighter bands on the antennae, darker bands on the membranous overlapping part of the wings at the rear, and patches of coppery or bluish-metallic punctures on the head. It is about 17 mm, roughly two-thirds of an inch, and almost as wide as it is long. Native stink bugs are real, common and mostly not the ones coming indoors in numbers.',
  },
  {
    question: 'Where did the brown marmorated stink bug come from?',
    answer:
      'East Asia — China, Japan and Korea. Penn State Extension reports it was first collected in Allentown, Pennsylvania in 1998, although it probably arrived several years earlier. StopBMSB, the USDA-funded research project, reported that as of 2021 it had been detected in 47 states and 4 Canadian provinces.',
  },
  {
    question: 'Should I spray insecticide indoors to stop them?',
    answer:
      'Penn State Extension advises against it: it is not advisable to use an insecticide inside after the insects have gained access. Both Penn State and University of Kentucky Extension give the same reason — dead insects inside wall voids become food for carpet beetles, which then damage woolens and stored goods. You would be trading a harmless nuisance for a destructive one.',
  },
];

const sources: Source[] = [
  {
    label: 'Brown Marmorated Stink Bug',
    publisher: 'Penn State Extension (Skvarla; originally Jacobs)',
    date: 'Updated June 24, 2026',
    href: 'https://extension.psu.edu/brown-marmorated-stink-bug',
  },
  {
    label: 'Stink Bug Infestation of Dwellings (ENTFACT-654)',
    publisher: 'University of Kentucky Entomology (Potter and Bessin)',
    date: 'Revised March 2026',
    href: 'https://entomology.ca.uky.edu/ef654',
  },
  {
    label: 'Stink Bugs (444-621 / ENTO-517NP)',
    publisher: 'Virginia Cooperative Extension (Bekelja and Day)',
    date: 'Accessed August 21, 2026',
    href: 'https://www.pubs.ext.vt.edu/444/444-621/444-621.html',
  },
  {
    label: 'Where Is BMSB?',
    publisher: 'StopBMSB.org, Northeastern IPM Center / USDA NIFA',
    date: 'Accessed August 21, 2026',
    href: 'https://www.stopbmsb.org/where-is-bmsb/',
  },
  {
    label: 'Stink bugs: The good, the bad, and how to get rid of them',
    publisher: 'Virginia Tech News (Thomas Kuhar, Department of Entomology)',
    date: 'October 27, 2023',
    href: 'https://news.vt.edu/articles/2023/10/stink_bugs_expert.html',
  },
];

const tocItems = [
  { id: 'why-now', title: 'Why They Come In' },
  { id: 'which-bug', title: 'Which Bug Is It' },
  { id: 'identification', title: 'Identification' },
  { id: 'the-smell', title: 'The Smell' },
  { id: 'harm', title: 'What They Do and Do Not Do' },
  { id: 'not-alone', title: 'The Other Fall Invaders' },
  { id: 'what-next', title: 'What to Do' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'How to get rid of stink bugs', href: '/us/how-to-get-rid-of-stink-bugs' },
  { title: 'Stink bug traps: what the evidence says', href: '/us/best-stink-bug-traps' },
  { title: 'Boxelder bugs', href: '/us/boxelder-bugs' },
  { title: 'Asian lady beetles, not ladybugs', href: '/us/asian-lady-beetles' },
  { title: 'Cluster flies', href: '/us/cluster-flies' },
];

export default function StinkBugsInHousePage() {
  return (
    <UsPageLayout
      title="Stink Bugs in the House"
      subtitle="Every fall they turn up on the ceiling, on the window, on the lampshade. Here is what they are, why the house has nothing to do with it, and what they can and cannot actually do."
      lastUpdated="August 2026"
      readingTime="8 min"
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, faqPageSchema(faqs)]}
    >
      <p>
        The first one usually shows up in September, walking slowly across a window frame
        as though it has every right to be there. By late October there are a dozen, and
        one has landed on the TV.
      </p>
      <p>
        The insect is almost certainly the brown marmorated stink bug,{' '}
        <em>Halyomorpha halys</em>. This page covers what it is and what it does. If you
        want the practical answer, it is on{' '}
        <Link href="/us/how-to-get-rid-of-stink-bugs">the removal page</Link>, and the
        trap question has{' '}
        <Link href="/us/best-stink-bug-traps">its own page with the actual research</Link>.
      </p>

      <h2 id="why-now">Why They Come In</h2>
      <p>
        They are not hunting for crumbs. They are looking for somewhere to spend the winter.
      </p>
      <p>
        Penn State Extension reports that brown marmorated stink bugs begin entering
        structures starting in September through October, in search of overwintering sites.
        University of Kentucky Extension gives early-to-mid September for Kentucky and notes
        that they gather on windows, doors, roof flashing, vents, fascia and siding, with a
        preference for the upper areas of buildings.
      </p>
      <p>
        That last detail explains a lot. If your problem is worst in an upstairs bedroom or
        an attic, that is not coincidence, and it tells you where to look for the gaps.
      </p>
      <p>
        Nothing about your housekeeping caused this. There is no food source indoors that
        draws them, because they do not feed indoors at all. They are responding to
        temperature and to the shape of your building.
      </p>

      <h2 id="which-bug">Which Bug Is It</h2>
      <p>
        Two distinctions matter, and both get muddled constantly.
      </p>
      <p>
        <strong>Brown marmorated stink bug versus native stink bugs.</strong>{' '}
        <em>Halyomorpha halys</em> is an introduced species from East Asia. Penn State
        Extension reports it was first collected in Allentown, Pennsylvania in 1998,
        although it probably arrived several years earlier. Native stink bugs exist and are
        common — Virginia Cooperative Extension names the brown stink bug{' '}
        <em>Euschistus servus</em>, the green stink bug <em>Acrosternum hilare</em>, the
        harlequin bug <em>Murgantia histrionica</em>, and the spined soldier bug{' '}
        <em>Podisus maculiventris</em>, which is a predator that feeds on other insects and
        is generally a good thing to have in a garden. Not every shield-shaped bug is the
        invasive one, and the one that piles into houses in numbers usually is.
      </p>
      <p>
        <strong>Stink bugs versus the other fall invaders.</strong> Three other insects come
        indoors in the same weeks and get called stink bugs by people who have every reason
        not to know the difference. They are covered{' '}
        <Link href="/us/boxelder-bugs">on</Link>{' '}
        <Link href="/us/asian-lady-beetles">their</Link>{' '}
        <Link href="/us/cluster-flies">own pages</Link>, and the section below is a quick
        triage.
      </p>

      <h2 id="identification">Identification</h2>
      <p>
        Penn State Extension gives the adult as approximately 17 mm, about two-thirds of an
        inch, shield-shaped and almost as wide as it is long. Three marks separate it from
        the native species:
      </p>
      <ul>
        <li>
          <strong>Lighter bands on the antennae.</strong> This is the single most useful
          feature and the easiest to see. Alternating pale and dark rings near the tip.
        </li>
        <li>
          <strong>Darker bands on the membranous overlapping part of the wings</strong> at
          the rear of the body.
        </li>
        <li>
          <strong>Patches of coppery or bluish-metallic punctures on the head</strong> —
          small rounded depressions that catch the light.
        </li>
      </ul>
      <p>
        &ldquo;Marmorated&rdquo; means marbled, and that is a fair description of the mottled
        brown you see from above.
      </p>

      <h2 id="the-smell">The Smell</h2>
      <p>
        University of Kentucky Extension describes it as a pungent, cilantro-like odor,
        produced by scent glands on the mid-section of the body. Penn State Extension locates
        those glands on the upper surface of the abdomen and the underside of the thorax.
      </p>
      <p>
        It is released when the insect is picked up, disturbed, crushed, squeezed or handled.
        That is the practical rule: the smell is a response to interference, so the way to
        avoid it is not to interfere. Do not swat one. Do not step on one. Kentucky Extension
        also advises against touching your face or eyes after handling them.
      </p>
      <p>
        Whether people find the smell unbearable or merely odd varies a great deal, and both
        reactions are normal. Virginia Tech researchers have described homeowners finding
        thousands of these cilantro-smelling bugs in their houses, which gives a sense of the
        scale the problem can reach in a bad year.
      </p>

      <h2 id="harm">What They Do and Do Not Do</h2>
      <h3>They do not bite</h3>
      <p>
        University of Kentucky Extension states that stink bugs are solely plant feeders and
        do not bite humans or pets. The mouthparts are a stylet built for piercing plant
        tissue and drinking plant juices.
      </p>
      <h3>They do not damage the house</h3>
      <p>
        Penn State Extension states that the stink bug will not reproduce inside structures
        or cause damage. They do not chew wood, they do not eat fabric, they do not nest.
      </p>
      <h3>They do not breed indoors</h3>
      <p>
        University of Kentucky Extension is specific: the adults overwinter in an unmated
        condition and do not breed or reproduce indoors. This is worth internalising, because
        it changes what you are dealing with. The population inside your walls is a fixed
        number that arrived in the fall and will not grow. It is a finite problem.
      </p>
      <h3>What they do damage is crops</h3>
      <p>
        This is where the species earns its reputation. Penn State Extension reports that
        feeding on tree fruits such as apples produces a characteristic distortion called
        &ldquo;cat facing&rdquo; that renders the fruit unmarketable. Virginia Tech&rsquo;s
        Thomas Kuhar has listed apples, peaches, grapes, soybeans, peppers, tomatoes, corn and
        cotton among the crops documented as hosts.
      </p>
      <p>
        <AsOf date="October 2023">
          Kuhar has also said that brown marmorated stink bug populations have pretty much
          stabilized in the mid-Atlantic states, with natural enemies and other factors keeping
          them somewhat regulated
        </AsOf>
        . That is a statement about a moving population, which is why it carries its date.
      </p>

      <h2 id="not-alone">The Other Fall Invaders</h2>
      <p>
        If the thing on your window does not match the description above, it is probably one
        of these three. Misidentification is the actual problem most people have, because the
        four insects arrive in the same weeks for the same reason and look nothing alike once
        you know what to look at.
      </p>
      <ul>
        <li>
          <strong>Black with thin red or orange lines, about half an inch</strong> &mdash;{' '}
          <Link href="/us/boxelder-bugs">boxelder bug</Link>. Narrow, not shield-shaped.
        </li>
        <li>
          <strong>Round, orange or red, spotted, about a quarter inch</strong> &mdash;{' '}
          <Link href="/us/asian-lady-beetles">multicolored Asian lady beetle</Link>, which is
          not the native ladybug and behaves very differently.
        </li>
        <li>
          <strong>A slow, dark fly slightly larger than a house fly</strong> &mdash;{' '}
          <Link href="/us/cluster-flies">cluster fly</Link>. Sluggish, and not a filth fly.
        </li>
      </ul>

      <h2 id="what-next">What to Do</h2>
      <p>
        The short version, with the detail on{' '}
        <Link href="/us/how-to-get-rid-of-stink-bugs">the removal page</Link>:
      </p>
      <ul>
        <li>
          <strong>Seal, do not spray.</strong> Exclusion is the only measure that reduces next
          year&rsquo;s number.
        </li>
        <li>
          <strong>Vacuum the ones already inside</strong>, with the caveats about odor and
          vacuum choice that the removal page covers.
        </li>
        <li>
          <strong>Do not use insecticide indoors.</strong> Penn State Extension advises against
          it, and the reason is carpet beetles feeding on the dead insects.
        </li>
      </ul>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
