import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { JORO_NAV, JORO_HOME } from '../components/joroNav';

const URL = 'https://pestproindex.com/us/joro-spider';
const TITLE = 'Joro Spider: Identification, Origin, and How It Spreads';
const DESCRIPTION =
  'What a Joro spider looks like, where Trichonephila clavata came from, how to tell it apart from lookalikes, and how it travels. Sourced to university extension research.';

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
    question: 'What is a Joro spider?',
    answer:
      'The Joro spider is a large orb-weaving spider, Trichonephila clavata, native to East Asia. It was first confirmed in North America in northeast Georgia in 2014. Adult females are the ones people notice: a bright yellow abdomen with broad bluish-green bands across the back, large red markings underneath, and long black legs banded in yellow.',
  },
  {
    question: 'How big does a Joro spider get?',
    answer:
      'University of Georgia Extension gives the adult female body length as 0.67 to 1.2 inches. Penn State Extension puts the leg span at up to 4 inches, and Clemson Extension describes females as spanning 3 or more inches with their legs outstretched. Adult males are far smaller, roughly a quarter of an inch, and brown rather than yellow.',
  },
  {
    question: 'Where did Joro spiders come from?',
    answer:
      'They are native to Asia, including Japan, North and South Korea, China, Taiwan, Vietnam, and India. University of Georgia researchers who confirmed the first North American record concluded the spider arrived accidentally as a hitchhiker, either in shipping containers, in packing materials such as pallets and crates, or on live plant material. Clemson Extension notes it was likely introduced several years before anyone noticed it in 2014.',
  },
  {
    question: 'How do Joro spiders spread so quickly?',
    answer:
      'Young spiderlings disperse by ballooning. They release strands of silk that catch wind currents and carry them away from where they hatched. Penn State Extension reports that ballooning spiders can travel tens to hundreds of miles, and University of Georgia Extension notes the technique can carry them even between islands. Adults do not balloon, but they do get moved accidentally by vehicles and freight.',
  },
  {
    question: 'When are Joro spiders most visible?',
    answer:
      'Joro Watch reports that the peak in the southeastern United States is currently August through October. University of Georgia Extension notes juveniles appear as early as May, with more mature spiders in late July and August and observation peaks in September and October. Egg sacs are laid from mid-October through November.',
  },
];

const sources: Source[] = [
  {
    label: 'Joro Spider: Trichonephila clavata (Circular 1273)',
    publisher: 'University of Georgia Cooperative Extension',
    date: 'Revised June 16, 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C1273/',
  },
  {
    label: 'Species Info',
    publisher: 'Joro Watch, UGA Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://jorowatch.org/species-info/',
  },
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
    label: 'UGA scientists confirm first North American record of East Asian Joro spider',
    publisher: 'University of Georgia',
    date: 'March 17, 2015',
    href: 'https://news.uga.edu/first-north-american-record-east-asian-joro-spider-0315/',
  },
  {
    label: 'Joro Watch Season',
    publisher: 'Joro Watch, UGA Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://jorowatch.org/season/',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'identification', title: 'Identification' },
  { id: 'lookalikes', title: 'Lookalikes' },
  { id: 'where-it-came-from', title: 'Where It Came From' },
  { id: 'how-it-spreads', title: 'How It Spreads' },
  { id: 'life-cycle', title: 'The Year in a Joro' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Are Joro spiders dangerous?', href: '/us/are-joro-spiders-dangerous' },
  { title: 'Joro spider webs and how to remove them', href: '/us/joro-spider-webs' },
  { title: 'Where Joro spiders are found', href: '/us/joro-spider-range' },
];

export default function JoroSpiderPage() {
  return (
    <UsPageLayout
      title="Joro Spider: Identification, Origin, and How It Spreads"
      subtitle="A large, unmistakably yellow orb-weaver that arrived in Georgia by accident and has been moving outward ever since. Here is what it is, how to recognize it, and where it came from."
      lastUpdated="August 2026"
      readingTime="7 min"
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={JORO_HOME}
      clusterNav={JORO_NAV}
      schemas={[articleSchema, faqPageSchema(faqs)]}
    >
      <p>
        If you live in the Southeast, you have probably already met one, or at least walked
        into one of its webs. The Joro spider is big, bright yellow, and builds across gaps
        people want to walk through. It is also new here: the first confirmed North American
        record dates to 2014.
      </p>
      <p>
        This page covers what the animal is and how to recognize it. Three companion pages go
        deeper on the questions people actually search for:{' '}
        <Link href="/us/are-joro-spiders-dangerous">whether they are dangerous</Link>,{' '}
        <Link href="/us/joro-spider-webs">what to do about the webs</Link>, and{' '}
        <Link href="/us/joro-spider-range">where they have reached so far</Link>.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        The Joro spider is <em>Trichonephila clavata</em>, described by L. Koch in 1878. It is
        an orb-weaver, in the family Araneidae, and it is native to East Asia. Penn State
        Extension gives the native range as Japan (excluding Hokkaido), North and South Korea,
        China, Taiwan, Vietnam, and India.
      </p>
      <p>
        In its native range it has one generation per year, and the same pattern holds in the
        United States: spiderlings in spring, conspicuous adults in late summer and fall, egg
        sacs before winter, and then the adults die off.
      </p>

      <h2 id="identification">Identification</h2>
      <p>
        Almost every Joro spider anyone photographs is an adult female. She is the large,
        colorful one sitting in the middle of a golden web. The male is a fraction of her size
        and easy to overlook.
      </p>
      <h3>The female</h3>
      <ul>
        <li>
          <strong>Body length:</strong> 0.67 to 1.2 inches (17 to 30 mm), per University of
          Georgia Extension. Joro Watch describes adult female bodies as up to 1.25 inches long.
        </li>
        <li>
          <strong>Leg span:</strong> Penn State Extension gives up to 4 inches. Clemson Extension
          describes females as having a span of 3 or more inches with the legs outstretched. Both
          figures are cited here because they are separate published measurements, not one number
          rounded two ways.
        </li>
        <li>
          <strong>Top of the abdomen:</strong> bright yellow with broad bluish-green bands running
          across it.
        </li>
        <li>
          <strong>Underside of the abdomen:</strong> large red markings. This is the single most
          useful confirming feature, and it means looking at the spider from below, through the web.
        </li>
        <li>
          <strong>Legs:</strong> long and black with yellow or yellow-orange bands. Rarely, they are
          all black.
        </li>
      </ul>
      <h3>The male</h3>
      <ul>
        <li>
          <strong>Body length:</strong> 0.16 to 0.31 inches (4 to 8 mm), per University of Georgia
          Extension. Joro Watch gives approximately 0.25 inches.
        </li>
        <li>
          <strong>Color:</strong> brown, not yellow. The abdomen is an elongated oval with two long
          yellowish stripes along the sides and a dark brown stripe down the middle.
        </li>
        <li>
          Males are usually found on the edge of a female&rsquo;s web rather than in a web of their
          own.
        </li>
      </ul>

      <h2 id="lookalikes">Lookalikes</h2>
      <p>
        Joro Watch lists three spiders that get mistaken for Joros in the Southeast. Checking
        against them takes a few seconds and is worth doing before you report a sighting.
      </p>
      <ul>
        <li>
          <strong>Golden silk orb-weaver (<em>Trichonephila clavipes</em>)</strong> &mdash; the
          closest match, and a relative. It has dense black tufts of hair near the leg joints on the
          first, second, and fourth pairs of legs, and its abdomen is yellow-orange with silvery
          white spots rather than banded yellow and bluish-green.
        </li>
        <li>
          <strong>Yellow garden spider (<em>Argiope aurantia</em>)</strong> &mdash; a distinctive
          yellow and black abdomen, and a web that often carries a zig-zag of thick silk above and
          below a dense center.
        </li>
        <li>
          <strong>Banded garden spider (<em>Argiope trifasciata</em>)</strong> &mdash; many thin
          black, yellow, and silvery white bands across the abdomen, rather than a few broad ones.
        </li>
      </ul>
      <p>
        If you are still unsure, photograph the underside. The large red markings on the belly are
        what separate a Joro from all three.
      </p>

      <h2 id="where-it-came-from">Where It Came From</h2>
      <p>
        The first confirmed record in the New World came from northeast Georgia in the fall of 2014.
        Specimens were collected around residential properties in Barrow, Jackson, and Madison
        counties, with many of the early reports clustered near Braselton and Hoschton, close to
        warehouse and distribution facilities along the Interstate 85 corridor. E. Richard Hoebeke
        and Byron J. Freeman of the University of Georgia confirmed the identification and published
        the record in <em>PeerJ</em> in 2015.
      </p>
      <p>
        On how it got here, the University of Georgia&rsquo;s own account is careful and worth quoting
        in substance rather than paraphrasing loosely: the spider arrived accidentally as a hitchhiker,
        either in shipping containers, in packing materials such as pallets and crates, or on live plant
        material. The proximity of the earliest records to freight infrastructure is consistent with that.
      </p>
      <p>
        Nobody knows exactly when it arrived. Clemson Extension states that it was likely introduced
        several years before its discovery, without naming a year. We have seen a specific earlier
        arrival date circulated elsewhere; because no source in the preference order we use gives one,
        it is not on this page.
      </p>

      <h2 id="how-it-spreads">How It Spreads</h2>
      <p>
        Two mechanisms, working at very different scales.
      </p>
      <p>
        <strong>Ballooning</strong> is the natural one. Spiderlings climb to a high point, release
        strands of silk, and let wind currents carry them. Penn State Extension reports that ballooning
        can move them tens to hundreds of miles; University of Georgia Extension notes that the silk
        strands catch wind currents that can carry the spiders many miles, even between islands. This is
        why the range expands as a spreading edge rather than as isolated dots.
      </p>
      <p>
        <strong>Accidental human transport</strong> is the other. The species arrived on this continent
        in freight, and the same routes keep working. Isolated populations well outside the contiguous
        range are generally assumed to have arrived this way, which is why{' '}
        <Link href="/us/joro-spider-range">the current range map</Link> has outliers in it.
      </p>

      <h2 id="life-cycle">The Year in a Joro</h2>
      <p>
        One generation per year, and it runs roughly like this in the Southeast:
      </p>
      <ul>
        <li><strong>May onward:</strong> juveniles begin showing up, small and easy to miss.</li>
        <li><strong>Late July and August:</strong> more mature spiders become obvious as webs get larger.</li>
        <li><strong>September and October:</strong> peak observations. This is when the big golden webs are at their most conspicuous, and when almost all the photographs get taken.</li>
        <li><strong>Mid-October through November:</strong> egg sacs are laid. Joro Watch describes them as dense white silk sacs attached to leaves, tree bark, and flat structures, each containing 400 to 500 eggs.</li>
      </ul>
      <p>
        <AsOf date="August 21, 2026">
          Joro Watch gives the current southeastern peak as August through October
        </AsOf>
        , with sporadic finds in the months either side.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim on this page traces to one of the following. Where two sources give
        different figures for the same measurement, both are reported above rather than averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
