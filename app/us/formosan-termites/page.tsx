import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { FORMOSAN_NAV, FORMOSAN_HOME } from '../components/formosanTermitesNav';

const URL = 'https://pestproindex.com/us/formosan-termites';
const TITLE =
  'Formosan Termites: Why This Isn\'t a DIY Job';
const DESCRIPTION =
  'University of Florida Extension says this introduced species requires professional control. How it differs from native termites, and where it has spread.';

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
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Formosan Termites', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Can I treat Formosan termites myself?',
    answer:
      'No source consulted for this page says you can. University of Florida IFAS Extension states of this species: "Control of Formosan subterranean termites requires professional pest control services and over-the-counter products are unlikely to be effective." LSU AgCenter states: "Use only licensed and certified pest management professionals for termite treatments." And on the moment most people start searching, LSU AgCenter states: "Don\'t panic but don\'t ignore it. Seeing swarms outside is common, but if they\'re inside your home, call a licensed pest control professional."',
  },
  {
    question: 'How do I tell a Formosan termite from a native subterranean termite?',
    answer:
      'Three characters, from two sources. University of Georgia Extension gives swarmer length — one-half of an inch against three-eighths for the native — and swarmer colour, caramel- to brownish-yellow against black. University of Florida IFAS Extension gives a behavioural one that needs no ruler: Formosan soldiers have an enlarged opening on the front of the head called a fontanelle, and "When threatened, they exude a white glue-like substance through their fontanelle." The same publication states that "This behavior and defensive secretion differentiate Coptotermes soldiers from native subterranean termites (Reticulitermes sp.)."',
  },
  {
    question: 'What proportion of the colony are soldiers?',
    answer:
      'Two extension services publish different ranges and this page gives both rather than choosing. University of Georgia Extension puts Formosan soldiers at 15 to 20 percent of the colony and native subterranean soldiers at 1 to 3 percent. University of Florida IFAS Extension puts Formosan soldiers at 10% to 15% of the colony, and states that in native Reticulitermes colonies "soldiers typically make up 1%–2% of the colony population". The Formosan ranges overlap at 15 percent only. Neither figure is corrected here.',
  },
  {
    question: 'When do they swarm?',
    answer:
      'Two states, two institutions, and they agree closely. University of Florida IFAS Extension states: "In Florida, Coptotermes formosanus typically swarms between early April and late June, shortly after sunset, with peak swarming activity in May." LSU AgCenter states of Louisiana: "The swarm season for this termite starts as early as April and lasts through June, with a peak in early to mid May." LSU AgCenter adds a contrast the Florida source does not: "Unlike the native subterranean termites in Louisiana that swarm during the day, the Formosan subterranean termites fly at dusk, and they prefer warm, humid, and windless evenings." That sentence is about Louisiana\'s native termites.',
  },
  {
    question: 'I saw swarmers. Does that mean my house is infested?',
    answer:
      'Not by itself, and the sources are careful about this. LSU AgCenter states that "The swarming termites are not good fliers, and they usually fly no more than half a mile", so swarmers outdoors indicate termites nearby rather than in your walls. It adds that finding them flying indoors, or a large number of shed wings inside, means an active infestation is likely. University of Florida IFAS Extension gives the general rule for reading evidence: "While mud tubes and damage can be indicative of subterranean termite activity, the presence of live termites is needed to confirm an active infestation."',
  },
  {
    question: 'Should I kill the swarmers?',
    answer:
      'LSU AgCenter says it achieves very little: "Termite swarmers can be a nuisance when they fly in large numbers, but killing the swarmers in or around the house does not provide much protection from further termite activity and damage." The damage is done by workers, not by the winged adults you can see.',
  },
  {
    question: 'What can I actually do myself?',
    answer:
      'Habitat work, and LSU AgCenter lists it: turn off outdoor lights at night in May and June to avoid attracting swarmers; remove wood, cardboard and other cellulose-containing materials from around or under the home; "Keep mulch 8 to 12 inches from the foundation or perimeter of your home"; fix dripping outdoor faucets and repair roof or pipe leaks; and slope the landscape so water drains away from the house. LSU AgCenter also states plainly: "Use only licensed and certified pest management professionals for termite treatments."',
  },
  {
    question: 'Is there more than one of these species in Florida?',
    answer:
      'Yes. University of Florida IFAS Extension describes a second introduced Coptotermes, the Asian subterranean termite, Coptotermes gestroi, and states that "Broward and Dade are the only known counties where C. formosanus and C. gestroi have both become established." It also gives the climate split between them: "Coptotermes formosanus usually invades mildly temperate climates (to 35 degrees north latitude in the US), while C. gestroi is limited to more tropical localities (to 26 degrees north)". Those Florida records are stated as of 2004.',
  },
];

const sources: Source[] = [
  {
    label:
      'Formosan Subterranean Termite, Coptotermes formosanus Shiraki (EENY-121/IN278) — the source of the identification characters, the range, the swarm dates, the colony figures and the professional-control statement',
    publisher: 'University of Florida IFAS Extension',
    date: 'US and Florida distribution data as of July 2024; accessed 25 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in278',
  },
  {
    label:
      'Asian Subterranean Termite, Coptotermes gestroi (=havilandi) (Wasmann) (EENY-128/IN285) — the source of the second Coptotermes species and the latitude split',
    publisher: 'University of Florida IFAS Extension',
    date: 'Florida records stated as of 2004; accessed 25 August 2026',
    href: 'https://edis.ifas.ufl.edu/in285',
  },
  {
    label:
      'Preparing for the Termite Swarms — the source of the Louisiana swarm season, the parish spread, the swarmer flight distance and the householder action list',
    publisher: 'LSU AgCenter (Qian "Karen" Sun, Urban Entomology)',
    date: 'Page stamped 20 April 2026; the Louisiana distribution figure is captioned 2025',
    href: 'https://www.lsuagcenter.com/profiles/qsun/articles/page1620966062329',
  },
  {
    label:
      'Springtime swarms: What you need to know about termite alates — the source of the instruction to call a licensed professional and of the moisture statement',
    publisher:
      'LSU AgCenter (Shelly Kleinpeter, quoting entomologist Aaron Ashbrook and Carol Friedland)',
    date: '8 May 2025',
    href: 'https://www.lsuagcenter.com/articles/page1746732546640',
  },
  {
    label:
      'Formosan Subterranean Termites (topic hub) — the source of the date of establishment in New Orleans',
    publisher: 'LSU AgCenter',
    date: 'Accessed 25 August 2026',
    href: 'https://www.lsuagcenter.com/topics/environment/insects/termites/formosan_termites',
  },
  {
    label:
      'Subterranean Termites (C868) — the source of the swarmer length, swarmer colour and soldier-proportion figures given by this source',
    publisher: 'University of Georgia Extension',
    date: 'Accessed 22 August 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C868/',
  },
];

const tocItems = [
  { id: 'the-boundary', title: 'Who Can Treat This' },
  { id: 'identification', title: 'Telling Them Apart' },
  { id: 'range', title: 'Where They Are' },
  { id: 'colony', title: 'Colony Size and Reach' },
  { id: 'swarming', title: 'Swarm Season' },
  { id: 'what-you-can-do', title: 'What a Householder Can Do' },
  { id: 'scope', title: 'What This Page Does Not Cover' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function FormosanTermitesPage() {
  return (
    <UsPageLayout
      title="Formosan Termites"
      subtitle="An introduced subterranean termite that forms far larger colonies than the native species, spreads by swarming at dusk, and that every source consulted says is a job for a licensed professional. This page sets out how to tell it apart, where it has reached, and what a householder can usefully do."
      lastUpdated="August 2026"
      readingTime="9 min"
      tocItems={tocItems}
      homeHref={FORMOSAN_HOME}
      clusterNav={FORMOSAN_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page carries no product and nothing you can buy, because no source consulted for
        it describes a consumer product that works on this species. What it carries is
        identification, range, behaviour, and the two things a householder can genuinely act
        on: habitat, and choosing someone licensed to do the rest.
      </p>

      <h2 id="the-boundary">Who Can Treat This</h2>
      <p>
        The most important sentence on this page belongs to the source, not to us. University
        of Florida IFAS Extension states, of this species specifically:
      </p>
      <p>
        <em>
          &ldquo;Control of Formosan subterranean termites requires professional pest control
          services and over-the-counter products are unlikely to be effective.&rdquo;
        </em>
      </p>
      <p>
        LSU AgCenter says the same thing as an instruction:{' '}
        <em>
          &ldquo;Use only licensed and certified pest management professionals for termite
          treatments.&rdquo;
        </em>{' '}
        And on the moment most people start searching &mdash; winged termites indoors &mdash;
        LSU AgCenter states:{' '}
        <em>
          &ldquo;Don&rsquo;t panic but don&rsquo;t ignore it. Seeing swarms outside is common,
          but if they&rsquo;re inside your home, call a licensed pest control professional.&rdquo;
        </em>
      </p>
      <p>
        That is the same position our{' '}
        <Link href="/us/termites">general termites page</Link> reaches from five other extension
        services, and this species is the harder case rather than an exception to it. If you
        need to find someone, our page on{' '}
        <Link href="/us/choosing-a-pest-control-service">
          choosing a pest control service
        </Link>{' '}
        sets out how to check a licence against a state regulator&rsquo;s own database before
        you hire anyone.
      </p>

      <h2 id="identification">Telling Them Apart</h2>
      <p>
        <strong>The character that needs no ruler.</strong> University of Florida IFAS Extension
        describes an enlarged opening on the front of the soldier&rsquo;s head, called a
        fontanelle, and what comes out of it:{' '}
        <em>
          &ldquo;When threatened, they exude a white glue-like substance through their
          fontanelle&rdquo;
        </em>
        . The same publication states that{' '}
        <em>
          &ldquo;This behavior and defensive secretion differentiate Coptotermes soldiers from
          native subterranean termites (Reticulitermes sp.).&rdquo;
        </em>
      </p>
      <p>
        <strong>The swarmers.</strong> University of Florida IFAS Extension states that{' '}
        <em>
          &ldquo;The only caste to have wings, alates, are larger than workers or soldiers at
          ~12&ndash;15 mm (0.5&ndash;0.6 in) in length&rdquo;
        </em>{' '}
        and that{' '}
        <em>
          &ldquo;Coptotermes formosanus alates are typically an orange or light amber-brown in
          color&rdquo;
        </em>
        . University of Georgia Extension gives the comparison against the native species
        instead: one-half of an inch against three-eighths of an inch for swarmer length, and
        caramel- to brownish-yellow against black for colour.
      </p>
      <p>
        <strong>What they build that the native species does not.</strong> University of Florida
        IFAS Extension states that <em>Coptotermes</em> will{' '}
        <em>
          &ldquo;fill voids with carton nest, a blend of soil, wood pulp, termite saliva, and
          termite feces&rdquo;
        </em>
        . LSU AgCenter names the same structure as one of the reasons this species is the
        greater threat, describing above-ground carton nests.
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two extension services, two soldier proportions
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>University of Georgia Extension</strong> puts Formosan soldiers at{' '}
          <strong>15 to 20 percent</strong> of the colony, and native subterranean soldiers at{' '}
          <strong>1 to 3 percent</strong>.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          <strong>University of Florida IFAS Extension</strong> puts Formosan soldiers at{' '}
          <strong>10% to 15%</strong> of the colony, and states that in native{' '}
          <em>Reticulitermes</em> colonies{' '}
          <em>&ldquo;soldiers typically make up 1%&ndash;2% of the colony population&rdquo;</em>.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          The two Formosan ranges overlap at 15 percent and nowhere else. Neither is corrected
          here and neither is averaged. What both agree on is the shape of the difference: this
          species keeps several times as many soldiers as the native one, which is part of why
          it is described as aggressive.
        </p>
      </div>

      <h2 id="range">Where They Are</h2>
      <p>
        <strong>Nationally</strong>, University of Florida IFAS Extension records the species in
        Hawaii and throughout the southeastern continental United States, and states that{' '}
        <em>&ldquo;It has also been found north along the Atlantic coast up to Virginia&rdquo;</em>
        , with reports as far inland as Tennessee and, on the West Coast, in southern
        California. <strong>Its distribution data is stated as of July 2024.</strong>
      </p>
      <p>
        <strong>In Florida</strong>, the same publication states:{' '}
        <em>
          &ldquo;In Florida, the Formosan subterranean termite is distributed throughout the
          state, primarily in urban areas with high population density.&rdquo;
        </em>
      </p>
      <p>
        <strong>In Louisiana</strong>, LSU AgCenter records the arrival:{' '}
        <em>
          &ldquo;Formosan subterranean termites, native to East Asia, arrived in the United
          States after World War II and were established in New Orleans by 1966.&rdquo;
        </em>{' '}
        And the spread since:{' '}
        <em>
          &ldquo;In Louisiana, this insect was first reported in the port cities of Lake Charles
          and New Orleans, and now it has spread to 42 of the 64 parishes&rdquo;
        </em>{' '}
        &mdash; <strong>the accompanying distribution figure is captioned 2025.</strong>
      </p>
      <p>
        <strong>There is a second introduced Coptotermes in Florida.</strong> University of
        Florida IFAS Extension states of the Asian subterranean termite,{' '}
        <em>Coptotermes gestroi</em>, that{' '}
        <em>
          &ldquo;Broward and Dade are the only known counties where C. formosanus and C. gestroi
          have both become established&rdquo;
        </em>
        , and gives the climate split:{' '}
        <em>
          &ldquo;Coptotermes formosanus usually invades mildly temperate climates (to 35 degrees
          north latitude in the US), while C. gestroi is limited to more tropical localities (to
          26 degrees north)&rdquo;
        </em>
        . <strong>Those Florida records are stated as of 2004</strong>, and are not extended
        here beyond that date.
      </p>

      <h2 id="colony">Colony Size and Reach</h2>
      <p>
        LSU AgCenter states the comparison directly:{' '}
        <em>
          &ldquo;The Formosan subterranean termites pose a greater threat than the native
          species, because they form larger colonies, are more aggressive, and build
          above-ground carton nests.&rdquo;
        </em>
      </p>
      <p>
        On how long a colony takes to get there, University of Florida IFAS Extension states
        that <em>&ldquo;Formosan subterranean termite colonies reach maturity in 5&ndash;8
        years&rdquo;</em>, at which point it begins producing the next generation of winged
        adults.
      </p>
      <p>
        <strong>On what that adds up to nationally.</strong> University of Florida IFAS
        Extension states that{' '}
        <em>
          &ldquo;the annual economic impact of Coptotermes formosanus alone in the United States
          is likely &gt;$4 billion&rdquo;
        </em>
        , citing Su and Lee. <strong>That estimate is dated 2023 by the work it comes from</strong>,
        and it is a national figure for damage and control across the species&rsquo; whole US
        range &mdash; not a cost to any particular household, and not a price for anything.
      </p>
      <p>
        <strong>On foraging distance, the same publication gives two figures for two different
        settings, and they are not the same claim.</strong> It records foraging{' '}
        <strong>up to 100 m in the field</strong>, and{' '}
        <strong>300 m (328 ft) in laboratory studies</strong>. A field figure and a laboratory
        figure describe different things and are kept apart here rather than merged into one
        number.
      </p>

      <h2 id="swarming">Swarm Season</h2>
      <p>
        Two institutions, two states, and they agree closely enough that the agreement is worth
        stating.
      </p>
      <p>
        <strong>Florida</strong>, University of Florida IFAS Extension:{' '}
        <em>
          &ldquo;In Florida, Coptotermes formosanus typically swarms between early April and
          late June, shortly after sunset, with peak swarming activity in May.&rdquo;
        </em>
      </p>
      <p>
        <strong>Louisiana</strong>, LSU AgCenter:{' '}
        <em>
          &ldquo;The swarm season for this termite starts as early as April and lasts through
          June, with a peak in early to mid May.&rdquo;
        </em>
      </p>
      <p>
        LSU AgCenter adds a diagnostic the Florida source does not, and its scope is Louisiana:{' '}
        <em>
          &ldquo;Unlike the native subterranean termites in Louisiana that swarm during the day,
          the Formosan subterranean termites fly at dusk, and they prefer warm, humid, and
          windless evenings.&rdquo;
        </em>
      </p>
      <p>
        <strong>Seeing swarmers outdoors is not the same as having an infestation.</strong> LSU
        AgCenter states that{' '}
        <em>
          &ldquo;The swarming termites are not good fliers, and they usually fly no more than
          half a mile&rdquo;
        </em>
        , so swarmers outdoors point to termites nearby. It adds that finding them flying
        indoors, or a large number of shed wings inside, makes an active infestation in the home
        likely. University of Florida IFAS Extension gives the rule that stops a mud tube being
        over-read:{' '}
        <em>
          &ldquo;While mud tubes and damage can be indicative of subterranean termite activity,
          the presence of live termites is needed to confirm an active infestation.&rdquo;
        </em>
      </p>
      <p>
        And on the instinct to reach for a spray, LSU AgCenter is blunt:{' '}
        <em>
          &ldquo;Termite swarmers can be a nuisance when they fly in large numbers, but killing
          the swarmers in or around the house does not provide much protection from further
          termite activity and damage.&rdquo;
        </em>
      </p>

      <h2 id="what-you-can-do">What a Householder Can Do</h2>
      <p>
        Everything in this section is habitat work, and it is the whole of what the sources
        assign to a householder. LSU AgCenter lists it:
      </p>
      <ul>
        <li>
          <em>
            &ldquo;Turn off outdoor lights at night in May and June to avoid attracting
            swarmers.&rdquo;
          </em>{' '}
          University of Florida IFAS Extension explains why it works:{' '}
          <em>
            &ldquo;Alates are also attracted to lights, which can attract them to structures or
            boats&rdquo;
          </em>
          .
        </li>
        <li>
          Remove wood, cardboard and other cellulose-containing materials from around or under
          the home.
        </li>
        <li>
          <em>
            &ldquo;Keep mulch 8 to 12 inches from the foundation or perimeter of your
            home.&rdquo;
          </em>{' '}
          This is the only measurement in the list.
        </li>
        <li>Fix dripping outdoor faucets and repair leaks in the roof or pipes.</li>
        <li>Slope the landscape so water will drain away from the house.</li>
      </ul>
      <p>
        The reason all of it is about water is stated by LSU AgCenter:{' '}
        <em>
          &ldquo;Termites thrive in damp environments and require moist wood to attack
          structures.&rdquo;
        </em>
      </p>
      <p>
        <strong>One more thing a householder can do costs nothing.</strong> LSU AgCenter states
        that when swarms occur you can collect some of the insects, or their wings, so they can
        be identified by a pest control service or an entomologist, and that specimens can be
        submitted to the LSU Department of Entomology or a local LSU AgCenter Cooperative
        Extension office. Identification is the step that decides which of the two species you
        are dealing with.
      </p>

      <h2 id="scope">What This Page Does Not Cover</h2>
      <p>
        <strong>It names no product and carries nothing you can buy.</strong> That follows from
        the sources rather than from squeamishness: the publication that describes this species
        in most detail states that over-the-counter products are unlikely to be effective
        against it.
      </p>
      <p>
        <strong>It does not promise removal.</strong> No source consulted for this page
        describes a treatment a householder can apply that clears a colony, and none is implied
        here.
      </p>
      <p>
        <strong>It does not carry treatment methods.</strong> Trenching, drilling, soil
        injection and bait systems are described in the sources as professional applications,
        and describing them here would be describing work a reader cannot lawfully or safely
        do. What a reader can do about that is check a licence, which is on our page about{' '}
        <Link href="/us/choosing-a-pest-control-service">
          choosing a pest control service
        </Link>
        .
      </p>
      <p>
        <strong>It does not repeat the general termite material.</strong> Signs of infestation,
        the difference between subterranean and drywood termites, and what five extension
        services say about consumer products are on our{' '}
        <Link href="/us/termites">termites page</Link>.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or
        in the text immediately adjacent to it, and every source named is listed below. Where
        two sources give different figures, both are given with the source that published each,
        rather than one being chosen or the two being averaged. Dated figures carry the date the
        source attached to them. The wording, ordering and emphasis are our own judgement and
        are not a finding of any source. This page carries no product, no affiliate link and no
        commercial relationship of any kind, so there is nothing on it to disclose.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
