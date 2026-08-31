import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/cluster-flies';
const TITLE = 'Cluster Flies: What Those Slow Window Flies Are';
const DESCRIPTION =
  'Slow dark flies at an upstairs window in fall are almost certainly cluster flies — not house flies, not dirty. Why their larvae live in earthworms, and what to do.';

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
    { '@type': 'ListItem', position: 2, name: 'Cluster Flies', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What are the slow flies at my window in the fall?',
    answer:
      'Almost certainly cluster flies, Pollenia species. University of Kentucky Extension describes the cluster fly as a little larger than the common housefly, moving sluggishly, with short golden colored hairs on its thorax. The sluggishness is the giveaway: a house fly is hard to swat and a cluster fly is not.',
  },
  {
    question: 'Are cluster flies dirty? Do they carry disease?',
    answer:
      'No, and this is the single most important thing to know about them. University of Kentucky Extension states they constitute no health hazard. Penn State Extension states they are not known to carry any diseases of medical importance to humans. They are not filth flies. They did not come from garbage or a drain, and their presence says nothing about how clean the house is.',
  },
  {
    question: 'Where do cluster flies come from? What do the larvae eat?',
    answer:
      'Earthworms. University of Kentucky Extension states the larvae develop as parasites in the bodies of earthworms. Penn State Extension describes the maggots as burrowing into earthworms on which they feed, and notes the adults lay eggs on soil containing earthworms. This is why they appear in the fall around houses with lawns and pasture, and why nothing indoors is producing them.',
  },
  {
    question: 'How do I tell a cluster fly from a house fly?',
    answer:
      'Size, speed, hairs and wings. University of Kentucky Extension gives a little larger than the common housefly, moving sluggishly, with short golden hairs on the thorax. Penn State Extension describes them as dull gray with black markings, with golden-yellow hairs on the thorax that are more numerous on the underside between and near the legs. Their wings overlap when at rest, whereas a house fly holds its wings apart.',
  },
  {
    question: 'Are they breeding in my house?',
    answer:
      'No. University of Kentucky Extension states they are not breeding in the home. Penn State Extension states they will not reproduce within the structure. The flies emerging in your bedroom in February entered the building the previous fall.',
  },
  {
    question: 'Why do they appear on warm winter days?',
    answer:
      'Because warmth wakes them. Penn State Extension notes they emerge from wall voids on warm winter days, coming out through cracks under or behind baseboards, around window and door trim, and around exhaust fans or lights in ceilings. University of Kentucky Extension describes them appearing in late fall or early winter and again on warm, sunny days in early spring. A February sunbeam on a south wall is enough.',
  },
  {
    question: 'Should I be worried if the flies are shiny and metallic instead?',
    answer:
      'That is a different fly and a different problem. University of Kentucky Extension describes blow flies as having shiny metallic bodies, being strong fliers attracted to lights, and developing in manure or carrion. A sudden run of shiny metallic flies indoors can mean something has died in a wall, a chimney or a crawl space, which is worth investigating. A slow dull-gray fly is a cluster fly and means nothing of the kind.',
  },
  {
    question: 'How do I get rid of cluster flies?',
    answer:
      'Exclusion, then mechanical removal. Penn State Extension puts mechanical exclusion ahead of every other method it discusses and specifies sealing cracks around windows, doors, siding, utility pipes, behind chimneys and underneath the fascia. University of Kentucky Extension recommends mechanical control — fly swatters and vacuums — for active flies indoors, and emphasizes exclusion as time-consuming but necessary. Penn State advises against insecticidal dust inside structures because of the carpet beetle problem it creates.',
  },
];

const sources: Source[] = [
  {
    label: 'Cluster Flies',
    publisher: 'Penn State Extension (Steve Jacobs, Sr. Extension Associate)',
    date: 'Updated June 24, 2026',
    href: 'https://extension.psu.edu/cluster-flies',
  },
  {
    label: 'Cluster Flies, Face Flies, and Blow Flies in Homes (ENTFACT-624)',
    publisher: 'University of Kentucky Entomology (Michael F. Potter)',
    date: 'Revised March 2026',
    href: 'https://entomology.ca.uky.edu/ef624',
  },
];

const tocItems = [
  { id: 'what-they-are', title: 'What They Are' },
  { id: 'identification', title: 'Telling Them Apart' },
  { id: 'earthworms', title: 'The Earthworm Connection' },
  { id: 'not-filth', title: 'Not a Filth Fly' },
  { id: 'why-your-house', title: 'Why Your House' },
  { id: 'winter', title: 'Why They Reappear in Winter' },
  { id: 'other-flies', title: 'If It Is Not a Cluster Fly' },
  { id: 'control', title: 'What to Do' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Stink bugs in the house: the hub', href: '/us/stink-bugs-in-house' },
  { title: 'Asian lady beetles, not ladybugs', href: '/us/asian-lady-beetles' },
  { title: 'Boxelder bugs', href: '/us/boxelder-bugs' },
];

export default function ClusterFliesPage() {
  return (
    <UsPageLayout
      title="Cluster Flies"
      subtitle="Big, slow, dull flies bumping down an upstairs window in October, and again on the first warm day in February. They are not house flies, they are not dirty, and they did not come from anything in your kitchen."
      lastUpdated="August 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: 'Stink Bugs in the House', href: '/us/stink-bugs-in-house' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Most people meet cluster flies without ever learning what they are. The flies turn up
        at an upstairs window, move too slowly to be house flies, die on the sill, and get
        swept up. Then more arrive. The usual conclusion is that something is rotting
        somewhere, and that conclusion is almost always wrong.
      </p>

      <h2 id="what-they-are">What They Are</h2>
      <p>
        Cluster flies are <em>Pollenia</em> species — Penn State Extension and University of
        Kentucky Extension both name <em>Pollenia rudis</em> specifically, and Kentucky refers
        to <em>Pollenia rudis</em> and relatives, which is the more accurate framing since
        several closely related species behave the same way.
      </p>
      <p>
        They belong to the family Calliphoridae, the blow flies. That surprises people, because
        blow flies are the metallic green ones associated with carrion. The cluster fly is the
        odd relative that went in a completely different direction: its larvae are parasites of
        earthworms.
      </p>

      <h2 id="identification">Telling Them Apart</h2>
      <p>
        Four features, in the order you will actually notice them:
      </p>
      <ul>
        <li>
          <strong>They are slow.</strong> University of Kentucky Extension states the cluster fly
          moves sluggishly. This is the first thing anyone notices, and on its own it nearly
          settles the identification. A house fly is difficult to swat. A cluster fly can be
          picked up.
        </li>
        <li>
          <strong>They are slightly larger than a house fly.</strong> Kentucky gives &ldquo;a
          little larger than the common housefly&rdquo;; Penn State gives &ldquo;slightly larger
          than the common house fly, <em>Musca domestica</em>&rdquo;.
        </li>
        <li>
          <strong>Golden hairs on the thorax.</strong> Kentucky describes short, golden colored
          hairs on the thorax. Penn State describes golden-yellow hairs on the thorax, more
          numerous on the underside between and near the legs. On a specimen on a windowsill,
          catch it in the light and the sheen is visible.
        </li>
        <li>
          <strong>Dull gray with black markings, and the wings overlap at rest.</strong> Penn
          State gives the coloring. A house fly at rest holds its wings apart in a shallow V; a
          cluster fly lays one over the other along its back.
        </li>
      </ul>
      <p>
        Penn State also describes the larvae, if you ever see one: cream-colored maggots of an
        elongated wedge shape.
      </p>

      <h2 id="earthworms">The Earthworm Connection</h2>
      <p>
        This is the fact that makes every other fact about cluster flies fall into place, and
        it is almost never mentioned in the material people find first.
      </p>
      <p>
        University of Kentucky Extension states that the larvae develop as parasites in the
        bodies of earthworms. Penn State Extension describes the maggots burrowing into
        earthworms on which they feed, and explains the cycle: adults lay eggs on soil
        containing earthworms, the larvae develop, pupate, and emerge as adults. Penn State
        reports that in Pennsylvania there may be three to four, or more, generations of cluster
        flies per season.
      </p>
      <p>
        Everything follows from this:
      </p>
      <ul>
        <li>
          <strong>They come from the lawn, not the house.</strong> The nursery is soil with
          earthworms in it. Houses with grass, pasture or open ground around them get cluster
          flies; there is nothing indoors that produces them.
        </li>
        <li>
          <strong>Nothing indoors will stop them.</strong> No amount of cleaning affects a
          population whose larvae are inside earthworms in the yard.
        </li>
        <li>
          <strong>They are not attracted to your food.</strong> They are looking for a crevice to
          overwinter in.
        </li>
      </ul>

      <h2 id="not-filth">Not a Filth Fly</h2>
      <p>
        The term &ldquo;filth fly&rdquo; describes flies whose larvae develop in garbage, manure
        or carrion and which can therefore move pathogens onto surfaces. House flies and blow
        flies fit it. Cluster flies do not.
      </p>
      <p>
        University of Kentucky Extension states that cluster flies constitute no health hazard.
        Penn State Extension states they are not known to carry any diseases of medical
        importance to humans.
      </p>
      <p>
        This matters practically as well as reputationally. If the flies in your house are
        cluster flies, there is no contamination question to chase, no drain to investigate and
        no dead animal to find. The problem is a building-sealing problem and nothing more.
      </p>

      <h2 id="why-your-house">Why Your House</h2>
      <p>
        Penn State Extension puts it simply: in the fall, cluster flies frequent the sunny
        sides of homes in search of protected overwintering sites. University of Kentucky
        Extension describes them crawling into the home through small openings in the walls and
        seeking protected places to spend the winter within the walls, attics and basements.
      </p>
      <p>
        Kentucky&rsquo;s common name for them is the more descriptive one: attic flies. If your
        problem is in an upstairs room, that is exactly where the sources say to expect it.
      </p>
      <p>
        The sunny-wall behavior is shared with every other insect in this cluster —{' '}
        <Link href="/us/boxelder-bugs">boxelder bugs</Link> on the south side,{' '}
        <Link href="/us/asian-lady-beetles">Asian lady beetles</Link> on the south and southwest,{' '}
        <Link href="/us/stink-bugs-in-house">stink bugs</Link> in the upper areas of buildings.
        They are all reading the same building the same way.
      </p>

      <h2 id="winter">Why They Reappear in Winter</h2>
      <p>
        Because they never left. Penn State Extension notes that cluster flies emerge from wall
        voids on warm winter days, through cracks under or behind baseboards, around window and
        door trim, and around exhaust fans or lights in ceilings. University of Kentucky
        Extension describes them appearing in late fall or early winter and again on warm, sunny
        days in early spring.
      </p>
      <p>
        So the ten flies at the window in February are not a new problem. They are part of the
        population that entered in September, warmed up by sunshine or the furnace, and heading
        for the light. It is worth knowing, because otherwise a mild winter looks like a
        recurring infestation.
      </p>

      <h2 id="other-flies">If It Is Not a Cluster Fly</h2>
      <p>
        University of Kentucky Extension covers two others that overwinter or appear indoors, and
        the distinction is worth carrying:
      </p>
      <ul>
        <li>
          <strong>Face flies</strong> (<em>Musca autumnalis</em>) resemble house flies closely
          enough that Kentucky says only an expert can tell them apart. Their larvae develop in
          cattle manure and the adults feed on secretions from the eyes and noses of cattle and
          horses. They have similar overwintering habits to cluster flies, so on a farm both are
          plausible.
        </li>
        <li>
          <strong>Blow flies</strong> have shiny metallic bodies, are strong fliers attracted to
          lights, and develop in manure or carrion. Kentucky notes they are usually apparent in
          small numbers. <strong>A sudden run of shiny metallic flies indoors is the one that
          deserves investigation</strong>, because it can mean an animal has died in a wall, a
          chimney or a crawl space. A slow dull-gray fly does not carry that implication at all.
        </li>
      </ul>
      <p>
        If what you have is none of these, house flies are covered separately:{' '}
        <Link href="/us/flies">our house flies page</Link> sets out what the sources say they carry
        and what they support doing about it.
      </p>

      <h2 id="control">What to Do</h2>
      <p>
        <strong>Seal, in summer.</strong> Penn State Extension puts mechanical exclusion ahead of
        every other method it discusses and specifies sealing cracks around windows, doors, siding,
        utility pipes, behind chimneys, and underneath the fascia. University of Kentucky Extension emphasizes exclusion
        as time-consuming but necessary. The work has to be done before the flies arrive in the
        fall, which means summer.
      </p>
      <p>
        <strong>Vacuum or swat the ones inside.</strong> University of Kentucky Extension recommends
        mechanical control — fly swatters and vacuums — for active flies indoors. Their sluggishness
        makes this genuinely practical in a way it would not be for house flies.
      </p>
      <p>
        <strong>Be careful with insecticidal dust indoors.</strong> Penn State Extension advises
        avoiding insecticidal dust inside structures, to prevent carpet beetle problems. It is the
        same failure mode that applies to every insect in this cluster: dead insects in a void become
        food for a pest that damages fabric. University of Kentucky Extension does discuss insecticide
        sprays and dusts for attics, basements and wall voids; we make no claim here about how well any
        product performs, and the two sources differ in emphasis, which is worth knowing before you
        choose.
      </p>

      <h3>Caulk for the summer sealing work</h3>
      <p>
        <strong>
          These are examples of one material, for the sealing Penn State Extension puts first. They
          are in no order of preference, none is called better than another, and nothing here is a
          claim about how well any of them performs &mdash; the limit stated just above applies to
          these cards too.
        </strong>
      </p>
      <p>
        <strong>Where the caulk specification comes from, stated plainly.</strong> Penn State
        Extension names the places to seal on this page &mdash; cracks around windows, doors, siding,
        utility pipes, behind chimneys and underneath the fascia &mdash; but the material itself,
        good quality silicone or silicone-latex caulk, is a specification the same source gives for
        the other fall invaders rather than for cluster flies. It is attributed here rather than
        presented as a cluster fly finding. And the timing is the part that matters most: University
        of Kentucky Extension calls exclusion time-consuming but necessary, and the work has to be
        done before the flies arrive, which means summer.
      </p>

      <UsToolCard
        name="GE Advanced Silicone Caulk for Window &amp; Door, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'A silicone caulk, for the cracks Penn State Extension names: around windows, doors, siding, utility pipes, behind chimneys and underneath the fascia.',
          'Its own listing states silicone and a 10 fl oz cartridge. Nothing further about it is claimed here.',
          'Penn State Extension puts this work ahead of every other method it discusses, and the work belongs in summer rather than autumn.',
        ]}
        asin="B0BVGTM2XY"
      />

      <UsToolCard
        name="GE Advanced Silicone Window &amp; Door Sealant, Clear, 10.1 oz Cartridge"
        whatItDoes={[
          'A second silicone option in the same cartridge size range, for the same sealing work.',
          'University of Kentucky Extension describes exclusion as time-consuming but necessary, which is a reason to have enough of it before starting.',
        ]}
        asin="B0000CBJ7W"
      />

      <UsToolCard
        name="GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'Also a silicone caulk. Its listing describes it as all purpose rather than as a window and door product, which is the difference between this and the two above.',
          'That distinction is the listings\u2019, not the sources\u2019: neither source read for this page distinguishes between caulk formulations.',
        ]}
        asin="B0B8QPH3RW"
      />

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          What is not listed here, and why
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Anything for the lawn.</strong> This is the one that matters most, and it follows
          from the life cycle set out further up this page. University of Kentucky Extension states
          that the larvae develop as parasites in the bodies of earthworms, and Penn State Extension
          describes the maggots burrowing into earthworms on which they feed.{' '}
          <strong>
            The nursery is soil with earthworms in it, so there is nothing to buy that treats it.
          </strong>{' '}
          No lawn or larval product is listed here because the animal is not reachable by one.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Insecticidal dust indoors.</strong> Penn State Extension advises avoiding
          insecticidal dust inside structures, to prevent carpet beetle problems, and that caution is
          set out above.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Screening.</strong> Neither source read for this page gives a mesh size for cluster
          flies. The screening figure used elsewhere on this site belongs to a different insect, so
          it is not applied here.
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
