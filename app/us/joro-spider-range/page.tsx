import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';

const URL = 'https://pestproindex.com/us/joro-spider-range';
const TITLE = 'Joro Spider Range: Which States They Are In (2026)';
const DESCRIPTION =
  'Which US states have established Joro spider populations and which have isolated records, how ballooning drives the spread, and how to report a sighting to Joro Watch and EDDMapS.';

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
      name: 'Joro Spider Range',
      item: URL,
    },
  ],
};

// Established vs isolated, exactly as University of Georgia Extension Circular
// 1273 states it in its June 16, 2026 revision. The distinction is the source's,
// not ours, and the two lists are kept apart because they mean different things.
const established = [
  'Georgia',
  'North Carolina',
  'South Carolina',
  'Tennessee',
  'Alabama',
];

const isolated = ['Maryland', 'Virginia', 'Pennsylvania'];

const faqs: Faq[] = [
  {
    question: 'What states are Joro spiders in?',
    answer:
      'As of the June 16, 2026 revision of University of Georgia Extension Circular 1273, the Joro spider is established in Georgia, North Carolina, South Carolina, Tennessee, and Alabama, and is spreading to adjacent regions. The same source reports isolated populations in Maryland, Virginia, and Pennsylvania. Range data changes every season, so check EDDMapS for the current map rather than relying on any list, including this one.',
  },
  {
    question: 'What is the difference between an established population and an isolated record?',
    answer:
      'An established population is one that is breeding and persisting across an area year after year. An isolated population is a pocket well outside the contiguous range, usually assumed to have arrived by accidental human transport rather than by natural spread. The two are not the same thing, and treating a single outlying record as proof that a state is now Joro country overstates what the data shows.',
  },
  {
    question: 'How far north will Joro spiders spread?',
    answer:
      'Further than they have so far, on the physiology. A 2022 University of Georgia study by Andy Davis and Benjamin Frick, published in Physiological Entomology, found the Joro spider has roughly double the metabolism of the related golden silk spider, a heart rate 77 percent higher, and can survive brief freezes that kill it. The authors concluded that Joros could probably survive throughout most of the Eastern Seaboard. Penn State Extension notes the species thrives in areas where the average January temperature is 25 to 32 degrees Fahrenheit. Surviving somewhere and having arrived there are different claims.',
  },
  {
    question: 'How do Joro spiders travel so far?',
    answer:
      'Spiderlings balloon. They release strands of silk that catch wind currents and carry them away from where they hatched. Penn State Extension reports that ballooning can move them tens to hundreds of miles, and University of Georgia Extension notes the silk can carry them many miles, even between islands. Adults do not balloon, but they and their egg sacs get moved accidentally in vehicles and freight, which is how the species reached North America in the first place.',
  },
  {
    question: 'How do I report a Joro spider sighting?',
    answer:
      'Through Joro Watch, run by the University of Georgia Center for Invasive Species and Ecosystem Health, which feeds sightings into the national EDDMapS database. You can submit through the report form at jorowatch.org, through eddmaps.org, or using the EDDMapS mobile app for iOS and Android. Photographs help the reviewers confirm what you saw. If you went looking and found nothing, report that too: Joro Watch marks it as a negative record, and negative data is useful to researchers.',
  },
  {
    question: 'When is the 2026 Joro Spider Spotting Contest?',
    answer:
      'The fifth annual contest, Joro Watch 2026, runs from Monday, October 12 at 12:00 a.m. through Sunday, October 18 at 11:59 p.m. Only reports entered into the database during that window count. There is no limit on the number of reports, and each report can carry up to four images.',
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
    label: 'Joro spider (Trichonephila clavata) — State Distribution',
    publisher:
      'EDDMapS, Early Detection & Distribution Mapping System, University of Georgia Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://www.eddmaps.org/distribution/viewmap.cfm?sub=87670',
  },
  {
    label: 'Joro Watch Season and 2026 Spotting Contest',
    publisher: 'Joro Watch, UGA Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://jorowatch.org/season/',
  },
  {
    label: 'Report a sighting',
    publisher: 'Joro Watch, UGA Center for Invasive Species and Ecosystem Health',
    date: 'Accessed August 21, 2026',
    href: 'https://jorowatch.org/report/',
  },
  {
    label: 'Joro spiders likely to spread beyond Georgia',
    publisher: 'University of Georgia (Davis and Frick, Physiological Entomology)',
    date: 'March 3, 2022',
    href: 'https://news.uga.edu/joro-spiders-likely-to-spread-beyond-georgia/',
  },
  {
    label: 'Jorō Spiders',
    publisher: 'Penn State Extension',
    date: 'September 8, 2025',
    href: 'https://extension.psu.edu/joro-spiders',
  },
];

const tocItems = [
  { id: 'where-now', title: 'Where They Are Now' },
  { id: 'reading-a-map', title: 'Reading a Range Map' },
  { id: 'ballooning', title: 'How the Range Moves' },
  { id: 'how-far', title: 'How Far It Could Go' },
  { id: 'report', title: 'Report a Sighting' },
  { id: 'contest', title: 'The 2026 Spotting Contest' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Joro spider: identification and origin', href: '/us/joro-spider' },
  { title: 'Are Joro spiders dangerous?', href: '/us/are-joro-spiders-dangerous' },
  { title: 'Joro spider webs and how to remove them', href: '/us/joro-spider-webs' },
];

// The Joro cluster's own header nav and home pointer. These were UsPageLayout's
// hardcoded defaults until S47 R3 made both props required and deleted them; the
// values below are those defaults, unchanged, now stated by the page that uses them.
const JORO_HOME = '/us/joro-spider';

const JORO_NAV = [
  { title: 'Joro Spider', href: '/us/joro-spider' },
  { title: 'Danger', href: '/us/are-joro-spiders-dangerous' },
  { title: 'Webs', href: '/us/joro-spider-webs' },
  { title: 'Range', href: '/us/joro-spider-range' },
];

export default function JoroSpiderRangePage() {
  return (
    <UsPageLayout
      title="Joro Spider Range"
      subtitle="Which states have them, which states have only had a report or two, and why every range statement on this page carries the date it was true."
      lastUpdated="August 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: 'Joro Spider', href: '/us/joro-spider' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={JORO_HOME}
      clusterNav={JORO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        A Joro spider range map is a photograph of a moving thing. It changes every season, and it
        changes fastest in the states at the edge. Every range claim below therefore carries the
        date it was true, so this page ages honestly instead of quietly going stale.
      </p>

      <h2 id="where-now">Where They Are Now</h2>
      <p>
        <AsOf date="June 16, 2026">
          University of Georgia Extension Circular 1273, in its most recent revision
        </AsOf>
        , divides the United States range into two categories.
      </p>

      <h3>Established populations</h3>
      <ul>
        {established.map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ul>
      <p>
        The same source adds that the species is spreading to adjacent regions from this core, which
        is a moving boundary rather than a line.
      </p>

      <h3>Isolated populations</h3>
      <ul>
        {isolated.map((state) => (
          <li key={state}>{state}</li>
        ))}
      </ul>
      <p>
        These are pockets well outside the contiguous range. They are not the same claim as
        &ldquo;the Joro spider now lives across the mid-Atlantic.&rdquo;
      </p>
      <p>
        You will see larger state counts in circulation, some of them well into double figures.
        We are not repeating those here, because we could not trace them to a university extension
        service, a state or federal agency, or a named scientist. When they can be traced, this page
        will be updated and the date above will change with it.
      </p>
      <p>
        The live map is the authority, not any prose list. EDDMapS publishes the current
        distribution for this species and is updated as new reports are reviewed and accepted.
      </p>

      <h2 id="reading-a-map">Reading a Range Map</h2>
      <p>
        Two habits make range maps much less misleading.
      </p>
      <ul>
        <li>
          <strong>A dot is a report, not a population.</strong> One confirmed spider in a parking lot
          400 miles from the nearest breeding population is a real record and tells you almost
          nothing about whether the species lives there.
        </li>
        <li>
          <strong>Reporting effort is not evenly spread.</strong> Joro Watch runs an annual contest
          precisely to concentrate reporting, which means a county can appear to gain spiders when
          what it actually gained was people looking. Density on a citizen-science map is partly a
          map of attention.
        </li>
      </ul>

      <h2 id="ballooning">How the Range Moves</h2>
      <p>
        Two mechanisms, and they produce different shapes on a map.
      </p>
      <p>
        <strong>Ballooning</strong> moves the edge outward. Spiderlings climb to a high point,
        release strands of silk, and let wind currents carry them. Penn State Extension reports that
        ballooning spiders can travel tens to hundreds of miles. University of Georgia Extension
        notes the silk strands catch wind currents that can carry them many miles, even between
        islands. Because this happens to enormous numbers of spiderlings at once each spring, it
        expands the range as a front.
      </p>
      <p>
        <strong>Accidental human transport</strong> produces the outliers. The species reached North
        America in the first place as a hitchhiker in freight, and the same routes keep operating.
        This is the likelier explanation for a population appearing several states beyond the front
        than for a spiderling having flown there. It is also why{' '}
        <Link href="/us/joro-spider">the earliest Georgia records</Link> clustered near warehouse and
        distribution facilities on the Interstate 85 corridor.
      </p>

      <h2 id="how-far">How Far It Could Go</h2>
      <p>
        Andy Davis and Benjamin Frick at the University of Georgia compared Joro physiology against
        the related golden silk spider, which is confined to the Southeast by cold. Their 2022 paper
        in <em>Physiological Entomology</em> found the Joro spider has roughly double the metabolism,
        a heart rate 77 percent higher, and the ability to survive brief freezes that kill the golden
        silk spider. They concluded that Joros could probably survive throughout most of the Eastern
        Seaboard.
      </p>
      <p>
        Penn State Extension puts a number on the cold end: the species thrives in areas where the
        average January temperature is 25 to 32 degrees Fahrenheit.
      </p>
      <p>
        Hold those two things apart. A physiological ceiling describes where the animal <em>could</em>{' '}
        live. The map above describes where it has actually been recorded. The gap between them is
        large, and it is the reason a headline about Joro spiders reaching a city is usually about a
        single report rather than an arrival.
      </p>

      <h2 id="report">Report a Sighting</h2>
      <p>
        Joro Watch is run by the University of Georgia Center for Invasive Species and Ecosystem
        Health, and it feeds reports into EDDMapS, the national Early Detection and Distribution
        Mapping System. Reporting is how the map above gets built.
      </p>
      <ul>
        <li>
          <strong>Where to report:</strong> the report form at{' '}
          <a href="https://jorowatch.org/report/" target="_blank" rel="noopener noreferrer">
            jorowatch.org
          </a>
          , or{' '}
          <a href="https://www.eddmaps.org/" target="_blank" rel="noopener noreferrer">
            eddmaps.org
          </a>
          , or the EDDMapS mobile app for iOS and Android. The app works without a signal and
          uploads later, which matters on a trail.
        </li>
        <li>
          <strong>Include photographs.</strong> Reports are reviewed before they are accepted, and a
          clear image is what makes that review possible. The underside of the abdomen, with its
          red markings, is the most
          useful angle.
        </li>
        <li>
          <strong>Report the misses too.</strong> Joro Watch asks people who went looking and found
          nothing to file a negative record. Absence data is how researchers tell a real range edge
          from a gap in coverage.
        </li>
        <li>
          <strong>Private land is handled.</strong> Joro Watch notes that a report marked private is
          shown publicly only to the county level.
        </li>
      </ul>
      <p>
        Check what you saw against{' '}
        <Link href="/us/joro-spider">the lookalikes</Link> first. Golden silk orb-weavers and garden
        spiders get reported as Joros constantly.
      </p>

      <h2 id="contest">The 2026 Spotting Contest</h2>
      <p>
        <AsOf date="August 21, 2026">
          Joro Watch has announced its fifth annual Joro Spider Spotting Contest
        </AsOf>
        . It runs from Monday, October 12 at 12:00 a.m. through Sunday, October 18 at 11:59 p.m.
        Only reports entered into the database during that window count toward it.
      </p>
      <p>
        There is no limit on the number of reports you can file, and each one can carry up to four
        images. Reports go in through the Joro Watch website, eddmaps.org, or the EDDMapS app, which
        needs an EDDMapS account.
      </p>
      <p>
        The timing is not arbitrary: mid-October sits inside the September-to-October observation
        peak, when adult females are largest and their webs are most conspicuous.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
