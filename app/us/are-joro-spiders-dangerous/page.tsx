import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { JORO_NAV, JORO_HOME } from '../components/joroNav';

const URL = 'https://pestproindex.com/us/are-joro-spiders-dangerous';
const TITLE = 'Are Joro Spiders Dangerous? What the Research Actually Says';
const DESCRIPTION =
  'Joro spider bites, venom, risk to pets, and the open question about native spiders. What university researchers have established, and what is still uncertain.';

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
      name: 'Are Joro Spiders Dangerous?',
      item: URL,
    },
  ],
};

const faqs: Faq[] = [
  {
    question: 'Are Joro spiders dangerous to humans?',
    answer:
      'No. Penn State Extension states that Joro spiders do not have medically important bites, that they are reluctant to bite, and that their fangs are small and have difficulty piercing human skin. Their venom is weak, and bites are described as less painful than a bee sting.',
  },
  {
    question: 'Do Joro spiders bite?',
    answer:
      'They can, but it is difficult to provoke. Penn State Extension describes them as reluctant to bite. University of Georgia researchers note that even if you did manage to annoy a Joro into biting you, its fangs likely would not be large enough to pierce your skin. A spider that is handled typically tries to crawl away and drop to the ground rather than bite.',
  },
  {
    question: 'Are Joro spiders dangerous to dogs and cats?',
    answer:
      'Clemson Extension states that the venom is not medically relevant and is not known to harm people or pets. No source in the university extension literature we reviewed reports a case of a Joro spider harming a dog or a cat.',
  },
  {
    question: 'Are Joro spiders aggressive?',
    answer:
      'The opposite. A University of Georgia study led by Andy Davis and Amitesh Anerao at the Odum School of Ecology tested more than 450 spiders across 10 species by giving them a gentle puff of air. Most species resumed moving after about 90 seconds. Joro spiders stayed frozen for over an hour. The researchers described them as shy rather than bold.',
  },
  {
    question: 'Are Joro spiders harming native spiders?',
    answer:
      'This is the genuinely open question. A 2025 study by Robert W. Pemberton in the journal Insects surveyed 25 forest sites around Atlanta from 2022 to 2024 and found Joro numbers roughly doubling each year while seven native orbweaver species declined by about 40 percent annually. The author is explicit that the two patterns together are not proof of cause: in his words, the dramatic increase in Joro spiders and the concurrent decline in native orbweavers is not proof that the Joro spider caused the decline of native orbweavers.',
  },
  {
    question: 'Should I kill Joro spiders?',
    answer:
      'University of Georgia researchers have said no. Andy Davis has advised people to try to learn to live with them and to remove them only where they obstruct your space. His co-author Benjamin Frick put it more directly: there is really no reason to go around actively squishing them, given that humans, not the spiders, are responsible for their arrival here.',
  },
];

const sources: Source[] = [
  {
    label: 'Jorō Spiders',
    publisher: 'Penn State Extension',
    date: 'September 8, 2025',
    href: 'https://extension.psu.edu/joro-spiders',
  },
  {
    label: 'The Jorō Spider',
    publisher: 'Clemson Cooperative Extension, Home & Garden Information Center',
    date: 'November 21, 2024',
    href: 'https://hgic.clemson.edu/factsheet/the-joro-spider/',
  },
  {
    label: 'Joro spiders aren’t scary. They’re shy.',
    publisher: 'University of Georgia (Davis and Anerao, Odum School of Ecology)',
    date: 'May 16, 2023',
    href: 'https://news.uga.edu/joro-spiders-are-shy/',
  },
  {
    label: 'Joro spiders likely to spread beyond Georgia',
    publisher: 'University of Georgia (Davis and Frick, Physiological Entomology)',
    date: 'March 3, 2022',
    href: 'https://news.uga.edu/joro-spiders-likely-to-spread-beyond-georgia/',
  },
  {
    label:
      'Explosive Growth of the Jorō Spider and Concurrent Decline of Native Orbweaving Spiders in Atlanta, Georgia Forests',
    publisher: 'Robert W. Pemberton, Insects',
    date: 'April 23, 2025',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12112690/',
  },
  {
    label: 'Joro Spider: Trichonephila clavata (Circular 1273)',
    publisher: 'University of Georgia Cooperative Extension',
    date: 'Revised June 16, 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C1273/',
  },
  {
    label: 'Managing Joro Spiders in the Landscape',
    publisher: 'University of Georgia Turf and Ornamental Pest Management',
    date: 'October 2022',
    href: 'https://site.caes.uga.edu/entomologyresearch/2022/10/managing-joro-spiders-in-the-landscape/',
  },
];

const tocItems = [
  { id: 'short-answer', title: 'The Short Answer' },
  { id: 'to-people', title: 'Risk to People' },
  { id: 'to-pets', title: 'Risk to Pets' },
  { id: 'temperament', title: 'Temperament' },
  { id: 'ecosystem', title: 'Risk to the Ecosystem' },
  { id: 'uncertain', title: 'What Is Still Uncertain' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Joro spider: identification and origin', href: '/us/joro-spider' },
  { title: 'Joro spider webs and how to remove them', href: '/us/joro-spider-webs' },
  { title: 'Where Joro spiders are found', href: '/us/joro-spider-range' },
];

export default function AreJoroSpidersDangerousPage() {
  return (
    <UsPageLayout
      title="Are Joro Spiders Dangerous?"
      subtitle="A four-inch spider hanging at face height in a golden web is an alarming thing to walk into. The research on what it can actually do to you is reassuring, with one honest caveat that has nothing to do with people."
      lastUpdated="August 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: 'Joro Spider', href: '/us/joro-spider' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={JORO_HOME}
      clusterNav={JORO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="short-answer">The Short Answer</h2>
      <p>
        To you, your children, and your pets: no, on the published evidence. To native
        orbweaving spiders: possibly, and that is an open scientific question rather than a
        settled one.
      </p>
      <p>
        Those two answers get collapsed into one in a lot of coverage, usually in whichever
        direction makes the better headline. They are separate questions with separate
        evidence, so this page keeps them separate.
      </p>

      <h2 id="to-people">Risk to People</h2>
      <p>
        Penn State Extension is direct about it: Joro spiders do not have medically important
        bites. Three separate things have to go wrong before a bite happens at all, and the
        research says each of them is unlikely.
      </p>
      <ul>
        <li>
          <strong>They are reluctant to bite.</strong> Penn State Extension uses exactly that
          phrase. A Joro that is picked up generally tries to crawl off and drop to the ground.
        </li>
        <li>
          <strong>The fangs are small.</strong> Penn State Extension states that the fangs have
          difficulty piercing human skin. University of Georgia researchers have made the same
          point: even if you managed to annoy one into trying, its fangs likely would not be
          large enough to break your skin.
        </li>
        <li>
          <strong>The venom is weak.</strong> Where a bite does land, Penn State Extension
          describes it as less painful than a bee sting. Clemson Extension states that the venom
          is not medically relevant.
        </li>
      </ul>
      <p>
        All spiders have venom, because venom is how spiders subdue prey. The question is never
        whether a spider is venomous but whether the venom does anything to a human being, and
        for this species the extension literature is consistent that it does not.
      </p>

      <h2 id="to-pets">Risk to Pets</h2>
      <p>
        Clemson Extension addresses people and pets in the same sentence: the venom is not
        medically relevant and is not known to harm people or pets.
      </p>
      <p>
        We looked for documented cases of a Joro spider injuring a dog or a cat in the extension
        and agency literature and did not find any. That is an absence of reports rather than a
        formal safety study, and it is worth stating it that way rather than dressing it up.
        A dog that eats a Joro spider is doing something no one has studied; a dog that walks
        through a Joro web is doing something completely unremarkable.
      </p>

      <h2 id="temperament">Temperament</h2>
      <p>
        There is a measurement here, and it is a good one. Andy Davis and Amitesh Anerao at the
        University of Georgia&rsquo;s Odum School of Ecology tested how spiders respond to being
        disturbed, using gentle puffs of air from a turkey baster and timing how long each spider
        stayed frozen before moving again.
      </p>
      <p>
        Across more than 450 spiders from 10 species, most resumed activity after roughly 90
        seconds. Joro spiders stayed motionless for over an hour. The study was published in 2023.
        Whatever a four-inch spider looks like, its actual behavioral response to a human being
        walking up to it is to shut down completely and wait.
      </p>

      <h2 id="ecosystem">Risk to the Ecosystem</h2>
      <p>
        This is the part that deserves care, because it is where the honest answer is
        &ldquo;we do not know yet.&rdquo;
      </p>
      <p>
        Robert W. Pemberton surveyed 25 forest sites around Atlanta over three years and
        published the results in the journal <em>Insects</em> in April 2025. Joro numbers roughly
        doubled every year: 444 individuals in 2022, 859 in 2023, 1,713 in 2024. Over the same
        three years and the same sites, seven native orbweaver species fell from 52 individuals
        to 32 to 18 &mdash; a decline of about 40 percent a year.
      </p>
      <p>
        The two curves are striking. The author does not claim they are causally linked, and
        neither will we. His stated conclusion is that the dramatic increase in Joro spiders and
        the concurrent decline in native orbweavers is not proof that the Joro spider caused the
        decline of native orbweavers. He suggests competition for flying insect prey and for
        web sites as plausible mechanisms, which is a hypothesis, not a finding.
      </p>
      <p>
        There is one narrower and better-established concern. University of Georgia&rsquo;s
        Turf and Ornamental Pest Management program identifies two places where Joro webs
        should not be tolerated: around pollinator and flower gardens, and around bee hives.
        A large sticky web strung across a foraging route catches bees.
      </p>

      <h2 id="uncertain">What Is Still Uncertain</h2>
      <p>
        Stating this plainly is more useful than pretending otherwise:
      </p>
      <ul>
        <li>
          <strong>Whether Joros are displacing native orbweavers, or merely arriving as they
          decline for other reasons.</strong> Three years of correlation at 25 sites is a real
          signal and not a proof.
        </li>
        <li>
          <strong>What the long-term effect on pollinators is</strong> beyond the immediate,
          obvious problem of webs across bee flight paths.
        </li>
        <li>
          <strong>How far the range will ultimately extend.</strong> A 2022 University of Georgia
          study by Davis and Frick found Joro metabolism roughly double that of the related golden
          silk spider, a heart rate 77 percent higher, and the ability to survive brief freezes
          that kill the golden silk spider. The authors concluded Joros could probably survive
          throughout most of the Eastern Seaboard. Could is not will, and{' '}
          <Link href="/us/joro-spider-range">the observed range</Link> is currently much smaller
          than the survivable one.
        </li>
      </ul>
      <p>
        None of that changes the answer to the question in the title. It changes the answer to a
        different question, about the spiders around them rather than about you.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every claim above traces to one of the following. Where a source states a limit on what
        its own evidence proves, that limit is reproduced here rather than dropped.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
