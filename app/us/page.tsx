import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from './components/UsPageLayout';

const URL = 'https://pestproindex.com/us';
const TITLE = 'US Pest Guides';
const DESCRIPTION =
  'Thirty US pest pages, grouped by the problem you actually have: biting and stinging pests, cockroaches and termites, overwintering invaders, Joro spiders, wildlife, burrowing rodents, and one page on state trapping rules.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: URL,
      type: 'website',
      siteName: 'PestPro Index',
    },
  };
}

// The hub is the top of the trail. UsPageLayout omits the breadcrumb parent when
// none is passed, and the wordmark points at whatever homeHref is given, so the
// hub points at itself. clusterNav is passed EXPLICITLY AS AN EMPTY ARRAY rather
// than omitted, and an empty array renders no header links at all, which is what
// the top of the trail wants.
//
// COMMENT CORRECTED, S47 R6: what stood here said that omitting clusterNav made
// UsPageLayout fall back to hardcoded Joro defaults. That was true until S47 R3
// made both props required and deleted those defaults; omission is now a compile
// error. This file was outside R4's scope, so the correction lands here instead.
const HUB_HOME = '/us';
const HUB_NAV: { title: string; href: string }[] = [];

// Every route under /us, grouped by the problem a reader arrives with rather than
// by taxonomy. Each of the 30 routes appears exactly once. The `title` on each
// entry is the page's own h1, read from the page, not a rewritten label. The
// `covers` line is navigation copy: it says what the page is about and asserts
// nothing about the pest itself, because no source pack governs this file.
type HubLink = { title: string; href: string; covers: string };
type HubGroup = { heading: string; blurb: string; items: HubLink[] };

const groups: HubGroup[] = [
  {
    heading: 'Biting & Stinging Pests',
    blurb:
      'Things that bite or sting people, and what the sources say about avoiding them.',
    items: [
      {
        title: 'Ticks',
        href: '/us/ticks',
        covers: 'Species and their ranges, the published removal procedure, and prevention.',
      },
      {
        title: 'Chiggers',
        href: '/us/chiggers',
        covers: 'What a chigger is, what the extension services correct about them, and the bite.',
      },
      {
        title: 'No-See-Ums',
        href: '/us/no-see-ums',
        covers: 'Biting midges, window screen mesh sizes, and the sand fly naming problem.',
      },
      {
        title: 'Arizona Bark Scorpions',
        href: '/us/arizona-bark-scorpions',
        covers:
          'Telling it from the harmless desert scorpions, the sting, and sealing a building.',
      },
      {
        title: 'Imported Fire Ants',
        href: '/us/imported-fire-ants',
        covers:
          'Which ants the federal term covers, the two-step method, and the sting.',
      },
    ],
  },
  {
    heading: 'Cockroaches & Termites',
    blurb: 'Two subjects where naming and identification decide what to do next.',
    items: [
      {
        title: 'Palmetto Bugs',
        href: '/us/palmetto-bugs',
        covers: 'Which insects the name covers, and how they differ from one another.',
      },
      {
        title: 'Termites',
        href: '/us/termites',
        covers: 'Signs, subterranean and drywood types, and the limits of consumer products.',
      },
      {
        title: 'Formosan Termites',
        href: '/us/formosan-termites',
        covers: 'The introduced species, how it differs, and why it is a licensed job.',
      },
    ],
  },
  {
    heading: 'Overwintering Invaders',
    blurb: 'Insects that come indoors in autumn and are noticed in spring.',
    items: [
      {
        title: 'Stink Bugs in the House',
        href: '/us/stink-bugs-in-house',
        covers: 'Why they appear indoors and where they gather.',
      },
      {
        title: 'How to Get Rid of Stink Bugs',
        href: '/us/how-to-get-rid-of-stink-bugs',
        covers: 'Removal and exclusion, step by step.',
      },
      {
        title: 'Stink Bug Traps',
        href: '/us/best-stink-bug-traps',
        covers: 'Trap types measured against a published specification.',
      },
      {
        title: 'Boxelder Bugs',
        href: '/us/boxelder-bugs',
        covers: 'Identification and the trees they associate with.',
      },
      {
        title: 'Asian Lady Beetles, Not Ladybugs',
        href: '/us/asian-lady-beetles',
        covers: 'Telling the two apart, and why the difference matters indoors.',
      },
      {
        title: 'Cluster Flies',
        href: '/us/cluster-flies',
        covers: 'How they differ from house flies and where they overwinter.',
      },
    ],
  },
  {
    heading: 'Joro Spiders',
    blurb: 'The four-page cluster on one spider, its spread and its web.',
    items: [
      {
        title: 'Joro Spider',
        href: '/us/joro-spider',
        covers: 'Identification, origin, and how the species spreads.',
      },
      {
        title: 'Joro Spider Range',
        href: '/us/joro-spider-range',
        covers: 'Where the species has been recorded.',
      },
      {
        title: 'Joro Spider Webs',
        href: '/us/joro-spider-webs',
        covers: 'The web, its structure and where it is built.',
      },
      {
        title: 'Are Joro Spiders Dangerous?',
        href: '/us/are-joro-spiders-dangerous',
        covers: 'What the research says about the bite and the risk.',
      },
    ],
  },
  {
    heading: 'Wildlife',
    blurb: 'Larger animals around the house, and the exclusion work that comes first.',
    items: [
      {
        title: 'Raccoons',
        href: '/us/raccoons',
        covers: 'Damage signs, attic and chimney entry, and the health guidance.',
      },
      {
        title: 'Raccoon Cage Traps',
        href: '/us/best-raccoon-traps',
        covers: 'Cages measured against one published minimum size.',
      },
      {
        title: 'Opossums',
        href: '/us/opossums',
        covers: 'What they do around a property and what the agencies advise.',
      },
      {
        title: 'Skunks',
        href: '/us/skunks',
        covers: 'Denning, digging signs, and the spray.',
      },
      {
        title: 'Armadillos',
        href: '/us/armadillos',
        covers: 'Rooting damage, burrows, and exclusion.',
      },
      {
        title: 'Armadillo Traps',
        href: '/us/best-armadillo-traps',
        covers: 'Trap types set against the published guidance.',
      },
    ],
  },
  {
    heading: 'Burrowing Rodents',
    blurb: 'Three animals blamed for the same lawn, and the tools for them.',
    items: [
      {
        title: 'Pocket Gophers',
        href: '/us/pocket-gophers',
        covers: 'Mounds, tunnels and the control methods extension services describe.',
      },
      {
        title: 'Gopher Traps',
        href: '/us/best-gopher-traps',
        covers: 'Trap types and how they are set.',
      },
      {
        title: 'Mole, Vole or Pocket Gopher?',
        href: '/us/moles-voles-gophers',
        covers: 'Telling the three apart from the marks they leave.',
      },
      {
        title: 'Mole and Vole Control',
        href: '/us/mole-and-vole-control',
        covers: 'Traps, castor oil and one general-use bait, against what the sources publish.',
      },
    ],
  },
  {
    heading: 'Rules & Regulations',
    blurb: 'Where the law, rather than the animal, decides what you may do.',
    items: [
      {
        title: 'California Trapping Rules',
        href: '/us/california-trapping-rules',
        covers: 'What the state regulations say, quoted and cited.',
      },
    ],
  },
  {
    heading: 'Guides',
    blurb: 'Pages about the work rather than about a particular animal.',
    items: [
      {
        title: 'Choosing a Pest Control Service',
        href: '/us/choosing-a-pest-control-service',
        covers: 'Checking a licence against a state database before you hire anyone.',
      },
    ],
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
  hasPart: groups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'WebPage',
      name: item.title,
      url: `https://pestproindex.com${item.href}`,
    })),
  ),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'US Pest Guides', item: URL }],
};

const tocItems = groups.map((group) => ({
  id: group.heading
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, ''),
  title: group.heading,
}));

export default function UsHubPage() {
  return (
    <UsPageLayout
      title="US Pest Guides"
      subtitle="Thirty pages on pests in the United States, grouped by the problem rather than by the taxonomy. Every page is written from university extension and public health sources, and cites them."
      lastUpdated="August 2026"
      readingTime="3 min"
      tocItems={tocItems}
      homeHref={HUB_HOME}
      clusterNav={HUB_NAV}
      schemas={[collectionSchema, breadcrumbSchema]}
    >
      <p>
        This is the index for the US side of PestPro Index. The groups below are arranged
        by the situation a reader is usually in &mdash; something is biting, something is
        indoors, something is digging &mdash; rather than by insect order.
      </p>
      <p>
        Each page sets out what its sources say and names them. Where the sources disagree
        with one another, the pages say so rather than picking a side, and where a product
        category has no support behind it, the pages leave it out and explain why.
      </p>

      {groups.map((group) => (
        <section key={group.heading}>
          <h2
            id={group.heading
              .toLowerCase()
              .replace(/&/g, 'and')
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '')}
          >
            {group.heading}
          </h2>
          <p>{group.blurb}</p>
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border-2 border-gray-200 bg-white p-5 transition-colors hover:border-blue-400"
              >
                <span className="block text-base font-bold text-gray-900">{item.title}</span>
                <span className="mt-1 block text-sm text-gray-600">{item.covers}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </UsPageLayout>
  );
}
