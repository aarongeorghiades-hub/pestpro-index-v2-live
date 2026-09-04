import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { RACCOON_NAV, RACCOON_HOME } from '../components/raccoonNav';

const URL = 'https://pestproindex.com/us/best-raccoon-traps';
const TITLE = 'Raccoon Cage Traps: Which Meet the Minimum Size';
const DESCRIPTION =
  'Iowa State Extension publishes a minimum cage size for raccoons. Six listed cage traps measured against that one figure, and nothing else claimed about them.';

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
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Raccoons', item: 'https://pestproindex.com/us/raccoons' },
    { '@type': 'ListItem', position: 2, name: 'Raccoon Cage Traps', item: URL },
  ],
};

const MEETS = 'Meets the 10 by 12 by 32 inch minimum Iowa State University Extension gives.';

const faqs: Faq[] = [
  {
    question: 'What size cage does a raccoon need?',
    answer:
      'Iowa State University Extension states: "Select a large, sturdy steel-cage trap, at least 10 x 12 x 32 inches in size." That single figure is the only measure applied on this page. Each cage listed below was compared against it on all three axes, sorted, so that the way a listing labels length, width and height cannot change the answer.',
  },
  {
    question: 'Why does this page not say which cage is better?',
    answer:
      'Because no source consulted compares one cage against another. The Iowa State University Extension figure is a minimum size, not an order of preference, and nothing in the material this page draws on measures one product against another for anything else. Every cage below meets that one figure, so the page reports that and stops.',
  },
  {
    question: 'Should I do anything before buying a cage at all?',
    answer:
      'The sources put exclusion first. UC IPM states that exclusion is the key to eliminating den sites, and Iowa State University Extension states that exclusion is the first line of defense against raccoons. Iowa State University Extension also says to ensure there are no raccoons already present in the chimney or anywhere else inside when starting sealing or exclusion steps. The mesh gauges, burial depths and chimney cap specification are all on our raccoon page.',
  },
  {
    question: 'Where do the dimensions and materials on the cards come from?',
    answer:
      'Each card carries only what the product listing itself published on 22 August 2026: the dimensions field, the material field, and a door description where the listing states one. Nothing on a card is our own assessment of how a cage performs, and no card carries any figure its listing did not publish, or a position in a list.',
  },
  {
    question: 'Is there a health precaution I should know about?',
    answer:
      'Washington State Department of Health states that Baylisascaris worms grow inside raccoon intestines, where they produce eggs that are passed in the feces. Cleanup guidance, including the protective equipment the agencies specify, is set out on our raccoon page rather than here.',
  },
];

const sources: Source[] = [
  {
    label: 'Raccoons — Pest Notes, Home and Landscape',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 22 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/raccoons/',
  },
  {
    label: 'Raccoons: Damage Management — the source of the 10 by 12 by 32 inch minimum',
    publisher: 'Iowa State University Extension, Natural Resources',
    date: 'Accessed 22 August 2026',
    href: 'https://naturalresources.extension.iastate.edu/encyclopedia/raccoons-damage-management',
  },
  {
    label: 'Baylisascariasis (Raccoon Roundworm)',
    publisher: 'Washington State Department of Health',
    date: 'Accessed 22 August 2026',
    href: 'https://doh.wa.gov/you-and-your-family/illness-and-disease-z/baylisascariasis',
  },
];

const tocItems = [
  { id: 'exclusion-first', title: 'Exclusion Comes First' },
  { id: 'specification', title: 'The One Specification' },
  { id: 'cages', title: 'Cages That Meet It' },
  { id: 'scope', title: 'What This Page Does Not Cover' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function RaccoonCageTrapsPage() {
  return (
    <UsPageLayout
      title="Raccoon Cage Traps"
      subtitle="One extension service publishes a minimum cage size for raccoons. This page measures six listed cages against that figure, records what each listing publishes, and does nothing else with them."
      lastUpdated="August 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: 'Raccoons', href: '/us/raccoons' }}
      tocItems={tocItems}
      homeHref={RACCOON_HOME}
      clusterNav={RACCOON_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="exclusion-first">Exclusion Comes First</h2>
      <p>
        The sources this page draws on do not lead with a cage. UC IPM states that exclusion is the
        key to eliminating den sites, and Iowa State University Extension states that exclusion is
        the first line of defense against raccoons. Iowa State University Extension adds the step
        that has to come before any opening is closed: ensure there are no raccoons already present
        in the chimney or anywhere else inside when starting sealing or exclusion steps.
      </p>
      <p>
        The mesh gauges, the two published burial depths and the chimney cap specification are set
        out on <Link href="/us/raccoons">our raccoon page</Link>, along with what the agencies say
        about attractants. A cage is not a substitute for any of it, and nothing below is presented
        as one.
      </p>

      <h2 id="specification">The One Specification</h2>
      <p>
        There is exactly one published figure this page can measure a cage against. Iowa State
        University Extension states:
      </p>
      <p>
        <em>
          &ldquo;Select a large, sturdy steel-cage trap, at least 10 x 12 x 32 inches in size.&rdquo;
        </em>
      </p>
      <p>
        <strong>That is the only criterion applied on this page, and it is a minimum size rather
        than an order of preference.</strong> Each cage below was compared against it on all three axes, sorted
        smallest to largest, so that the way a particular listing labels length, width and height
        cannot change the answer. No source consulted compares one cage against another on any other
        measure, so this page does not either. There are no positions, no scores and no order of
        preference in what follows.
      </p>

      <h2 id="cages">Cages That Meet It</h2>
      <p>
        Six listings were checked on 22 August 2026. All six publish dimensions that meet the figure
        above and all six were available when checked. Each card below carries only what its listing
        published: the dimensions field, the material field, and a door description where the
        listing states one.
      </p>

      <p>
        The traps below are named because each listing states dimensions meeting or exceeding the published minimum set out above.
      </p>

      <UsToolCard
        name="Havahart Large 1-Door Live Animal Trap"
        whatItDoes={[
          'Listing publishes dimensions of 32.29 by 13.1 by 11.1 inches.',
          'Listing gives the material as Metal, and the product name states 1-Door.',
          MEETS,
        ]}
        asin="B00004RAMT"
      />

      <UsToolCard
        name="Live Animal Trap Cage, 1-Door"
        whatItDoes={[
          'Listing publishes dimensions of 32 by 12 by 12.5 inches.',
          'Listing gives the material as Alloy Steel, and the product name states 1-Door.',
          MEETS,
        ]}
        asin="B07KB2QCZZ"
      />

      <UsToolCard
        name="SZHLUX 32-inch Live Animal Cage Trap"
        whatItDoes={[
          'Listing publishes dimensions of 32 by 10 by 12 inches.',
          'Listing gives the material as Alloy Steel and describes a rear door secured with fixing clips.',
          MEETS,
        ]}
        asin="B0C865FXRH"
      />

      <UsToolCard
        name="HomGarden Live Animal Cage Trap, 32 inch"
        whatItDoes={[
          'Listing publishes dimensions of 32 by 12 by 12.5 inches.',
          'Listing gives the material as Alloy Steel and Metal, and describes a spring-loaded door.',
          MEETS,
        ]}
        asin="B07KWYM922"
      />

      <UsToolCard
        name="Large Live Animal Trap Cage, One-Door Solid Steel"
        whatItDoes={[
          'Listing publishes dimensions of 32 by 12 by 12.5 inches.',
          'Listing gives the material as Stainless Steel, and the product name states One-Door.',
          MEETS,
        ]}
        asin="B073P7865G"
      />

      <UsToolCard
        name="Faicuk Large Collapsible Live Animal Cage Trap"
        whatItDoes={[
          'Listing publishes dimensions of 32 by 11 by 13 inches.',
          'Listing gives the material as Alloy Steel and describes a single door.',
          MEETS,
        ]}
        asin="B0748JJL35"
      />

      <h2 id="scope">What This Page Does Not Cover</h2>
      <p>
        <strong>This page covers one thing: whether each cage meets a published size
        specification.</strong> It does not cover the law on trapping raccoons, and it does not cover
        what to do with an animal that has been caught. Neither subject is addressed by any source
        this page draws on, so neither is addressed here. That is a statement about the scope of this
        page and not a statement about what any rule says.
      </p>
      <p>
        One health note belongs alongside anything that involves handling. Washington State
        Department of Health states that Baylisascaris worms grow inside raccoon intestines, where
        they produce eggs that are passed in the feces; the cleanup guidance, including the
        protective equipment the agencies specify, is on{' '}
        <Link href="/us/raccoons">our raccoon page</Link>.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        The size specification and the exclusion material come from the extension services listed
        below. The dimensions, materials and door descriptions on each card were read from that
        product&rsquo;s own listing on 22 August 2026, and are recorded rather than assessed. The
        listings read were B00004RAMT, B07KB2QCZZ, B0C865FXRH, B07KWYM922, B073P7865G and
        B0748JJL35. Each is reachable from its own card above, where the disclosure sits directly
        beside the link; they are named here rather than linked again so that every link to a
        product on this page carries its disclosure. Framing and ordering are our own judgment
        and are not a finding of any source.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
