import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { OVERWINTERING_NAV, OVERWINTERING_HOME } from '../components/overwinteringNav';

const URL = 'https://pestproindex.com/us/boxelder-bugs';
const TITLE = 'Boxelder Bugs: ID, the Tree Link, and Control';
const DESCRIPTION =
  'How to identify a boxelder bug, why one tree species explains an infestation, whether they bite or stain, and what extension services say about keeping them out.';

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
    { '@type': 'ListItem', position: 2, name: 'Boxelder Bugs', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What does a boxelder bug look like?',
    answer:
      'University of Kentucky Extension describes adults as having black bodies with red lines running down the center and sides of the pronotum, the plate covering the thorax, and says adults can grow up to half an inch long. Wisconsin Horticulture describes the adults as gray and red, about half an inch, with a single red line on each side, a diagonal red line on each wing, and three red lines on the thorax. Nymphs are bright red with darker heads and have no developed wings. Both nymphs and adults have dark red eyes.',
  },
  {
    question: 'Do boxelder bugs bite?',
    answer:
      'No. University of Kentucky Extension states that boxelder bugs do not bite or sting humans or animals, and that there is no evidence they transmit diseases. Wisconsin Horticulture states they will not bite humans or pets.',
  },
  {
    question: 'Why are they called boxelder bugs?',
    answer:
      'Because the boxelder tree, Acer negundo, is their primary host. University of Kentucky Extension explains that they rely on the tree’s seeds as a food source, which is why they stick to female fruit-producing trees and are rarely found on male trees. That single fact explains most of what happens in a yard with a boxelder problem.',
  },
  {
    question: 'Do boxelder bugs only live on boxelder trees?',
    answer:
      'Mostly, but not exclusively. University of Kentucky Extension reports they have also been seen on silver maples, sycamore maples, apple, pear and plum trees. Wisconsin Horticulture notes they can be found on ash, maple and occasionally on strawberries, grasses and various other plants, but normally cannot complete their development on these other plants. Feeding somewhere and breeding there are different things.',
  },
  {
    question: 'Do boxelder bugs damage trees or houses?',
    answer:
      'Wisconsin Horticulture states they rarely cause significant damage to any plants, and that although they do not feed or reproduce inside the home, boxelder bugs may stain curtains and walls. They do not damage food or other items in the home. University of Kentucky Extension adds that they do not have the potential to become a serious indoor pest because they rely on fruit-producing trees to reproduce.',
  },
  {
    question: 'Should I cut down my boxelder tree?',
    answer:
      'It will help less than you would expect. Wisconsin Horticulture notes that removing boxelder trees or spraying heavily infested trees with a registered insecticide in mid-summer may help reduce numbers, but that the adults are good fliers and can move a considerable distance from host trees, so this will not eliminate the problem. It also suggests removing accumulations of boxelder, ash, elm and maple seeds, and choosing species other than boxelder when planting new shade trees.',
  },
  {
    question: 'How do I keep boxelder bugs out of the house?',
    answer:
      'Wisconsin Horticulture puts preventing entry ahead of every other measure it discusses: caulk all openings around windows and doors and in walls, siding or foundations. They enter through small gaps around windows, doors and pipes and through small cracks in the foundation or siding, and they are attracted to buildings with a lot of southern exposure regardless of color.',
  },
  {
    question: 'What do I do about the ones already inside?',
    answer:
      'Wisconsin Horticulture puts sucking up the occasional bug with a vacuum cleaner ahead of the other indoor options it discusses, and that insecticide sprays are generally not recommended for boxelder bugs that have already made their way indoors. For clusters on the outside walls, it notes they can be sprayed with registered insecticides, insecticidal soap or hot soapy water, and that sprays may need to be repeated as more bugs arrive, especially when using soapy water.',
  },
];

const sources: Source[] = [
  {
    label: 'Boxelder Bugs (ENTFACT-444)',
    publisher: 'University of Kentucky Entomology (Blevins, Larson and DeVries)',
    date: 'Accessed August 21, 2026',
    href: 'https://entomology.ca.uky.edu/ef444',
  },
  {
    label: 'Boxelder Bug, Boisea trivittatus',
    publisher: 'Wisconsin Horticulture, University of Wisconsin–Madison (Susan Mahr)',
    date: 'Accessed August 21, 2026',
    href: 'https://hort.extension.wisc.edu/articles/boxelder-bug-boisea-trivittatus/',
  },
  {
    label: 'Multicolored Asian Lady Beetle — the source of the caulk specification quoted in the sealing section',
    publisher: 'Penn State Extension (Michael J. Skvarla)',
    date: 'Updated August 12, 2026',
    href: 'https://extension.psu.edu/multicolored-asian-lady-beetle',
  },
];

const tocItems = [
  { id: 'identification', title: 'Identification' },
  { id: 'not-that-bug', title: 'What It Is Not' },
  { id: 'the-tree', title: 'The Tree Connection' },
  { id: 'year', title: 'The Year in a Boxelder Bug' },
  { id: 'harm', title: 'What They Do and Do Not Do' },
  { id: 'control', title: 'Keeping Them Out' },
  { id: 'tree-removal', title: 'The Tree Question' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [
  { title: 'Stink bugs in the house: the hub', href: '/us/stink-bugs-in-house' },
  { title: 'Asian lady beetles, not ladybugs', href: '/us/asian-lady-beetles' },
  { title: 'Cluster flies', href: '/us/cluster-flies' },
];

export default function BoxelderBugsPage() {
  return (
    <UsPageLayout
      title="Boxelder Bugs"
      subtitle="Black with thin red lines, massed on the south wall of the house on a warm October afternoon. Almost everything about them follows from one tree."
      lastUpdated="August 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: 'Stink Bugs in the House', href: '/us/stink-bugs-in-house' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={OVERWINTERING_HOME}
      clusterNav={OVERWINTERING_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        The boxelder bug, <em>Boisea trivittata</em>, is one of four insects that come to the
        walls of American houses every fall for the same reason and get confused with each
        other constantly. It is the narrow black one with the red lines.
      </p>
      <p>
        You will also see the species written as <em>Boisea trivittatus</em>; University of
        Kentucky Extension uses <em>trivittata</em> and Wisconsin Horticulture uses{' '}
        <em>trivittatus</em>. It is the same insect, and the variation is in the literature
        rather than in the animal.
      </p>

      <h2 id="identification">Identification</h2>
      <p>
        Two extension descriptions, both quoted rather than blended, because they emphasize
        different things:
      </p>
      <ul>
        <li>
          <strong>University of Kentucky Extension:</strong> black bodies with red lines
          running down the center and sides of the pronotum — the plate covering the thorax.
          Adults grow up to half an inch. Nymphs appear bright red. Both nymphs and adults
          have dark red eyes.
        </li>
        <li>
          <strong>Wisconsin Horticulture:</strong> gray and red adults about half an inch
          long, with a single red line on each side, a diagonal red line on each wing, and
          three red lines on the thorax. Nymphs are bright red with darker heads and look
          like the adults but without developed wings.
        </li>
      </ul>
      <p>
        The practical shorthand: <strong>narrow, flat, black, thin red lines, half an inch.</strong>{' '}
        The shape is the fastest discriminator, because the insect people most often confuse
        it with is a completely different silhouette.
      </p>

      <h2 id="not-that-bug">What It Is Not</h2>
      <ul>
        <li>
          <strong>Not a stink bug.</strong>{' '}
          <Link href="/us/stink-bugs-in-house">The brown marmorated stink bug</Link> is a
          broad brown shield, almost as wide as it is long. A boxelder bug is a narrow black
          oval. Nothing about them looks alike once you have seen both.
        </li>
        <li>
          <strong>Not a milkweed bug.</strong> University of Kentucky Extension flags this as
          the real lookalike: the large milkweed bug, <em>Oncopeltus fasciatus</em>, is
          roughly the same size and shares the colors, but the pattern differs. Boxelder bugs
          are mostly black with thin red stripes; milkweed bugs are mostly orangish-red
          separated by large patches or belt-like stripes of black. Read the ratio of black to
          red and you have it.
        </li>
        <li>
          <strong>Not a lady beetle or a cluster fly.</strong> Those are{' '}
          <Link href="/us/asian-lady-beetles">round and spotted</Link> and{' '}
          <Link href="/us/cluster-flies">a slow dark fly</Link> respectively.
        </li>
      </ul>

      <h2 id="the-tree">The Tree Connection</h2>
      <p>
        This is the part that makes boxelder bugs make sense.
      </p>
      <p>
        University of Kentucky Extension explains that boxelder bugs are found most often on
        boxelder trees, <em>Acer negundo</em>, which act as their primary host, and that they
        rely on the tree&rsquo;s seeds as a food source — which is why they stick to female
        fruit-producing trees and are rarely found on male trees.
      </p>
      <p>
        Boxelder is dioecious: individual trees are male or female, and only the female trees
        carry the winged seeds. So two apparently identical boxelders in the same yard can
        produce completely different outcomes, and a neighbor with no problem at all may
        simply have a male tree.
      </p>
      <p>
        Wisconsin Horticulture adds that during the summer they are found primarily on female
        boxelder trees where they feed by sucking plant sap from leaves and developing seeds,
        and that they will also feed on the fallen seed on the ground beneath. University of
        Kentucky Extension notes they are sometimes found at the base of the tree eating seeds
        from fallen fruit, which makes up most of their diet.
      </p>
      <p>
        Other hosts exist but are secondary. Kentucky reports sightings on silver maples,
        sycamore maples, apple, pear and plum. Wisconsin notes ash, maple and occasionally
        strawberries and grasses, but states they normally cannot complete their development
        on these other plants.
      </p>

      <h2 id="year">The Year in a Boxelder Bug</h2>
      <p>
        Wisconsin Horticulture describes the cycle:
      </p>
      <ul>
        <li>
          <strong>Spring:</strong> adults emerge from overwintering sites and females deposit
          small red eggs on host plants. Nymphs hatch in 10 to 14 days. University of Kentucky
          Extension gives 11 to 19 days for eggs laid on leaves and branches.
        </li>
        <li>
          <strong>Mid-summer:</strong> nymphs mature into adults, and those adults lay eggs for
          a second generation.
        </li>
        <li>
          <strong>Fall:</strong> the adults from that second generation leave the trees to find
          somewhere to spend the winter. They stay active late into the fall and congregate in
          sunny spots on the south sides of buildings, trees and rocks on warm afternoons.
        </li>
      </ul>
      <p>
        Wisconsin Horticulture also observes that they tend to be most abundant after summers
        with a very warm May and a dry July, while noting that numbers vary a lot from place to
        place regardless of the weather. That second half of the sentence is the honest part
        and worth keeping.
      </p>

      <h2 id="harm">What They Do and Do Not Do</h2>
      <ul>
        <li>
          <strong>They do not bite or sting.</strong> University of Kentucky Extension states
          this directly for humans and animals, and adds there is no evidence they transmit
          diseases.
        </li>
        <li>
          <strong>They do not damage the house or its contents.</strong> Wisconsin Horticulture
          states they do not damage food or other items in the home.
        </li>
        <li>
          <strong>They do not feed or reproduce indoors.</strong> Same source. As with the stink
          bugs, the indoor population is finite.
        </li>
        <li>
          <strong>They can stain.</strong> Wisconsin Horticulture notes boxelder bugs may stain
          curtains and walls. This is the one genuine indoor cost, and it is an argument for
          removing them intact rather than crushing them.
        </li>
        <li>
          <strong>They rarely damage the trees.</strong> Wisconsin Horticulture states they
          rarely cause significant damage to any plants.
        </li>
      </ul>
      <p>
        Wisconsin Horticulture also explains the behavior that puzzles people in January: as
        long as the bugs remain cold within walls or attics they are inactive, but if they are
        warmed by the furnace or the sun they become active and may crawl into the rooms. A
        warm spell in midwinter is not a new invasion.
      </p>

      <h2 id="control">Keeping Them Out</h2>
      <p>
        Wisconsin Horticulture is explicit that preventing entry into the home comes ahead of
        every other measure it discusses for boxelder bugs: caulk all openings around windows and
        doors and in walls, siding or foundations.
      </p>
      <p>
        Two details worth knowing. They enter through small gaps around windows, doors and
        pipes and through small cracks in the foundation or siding, and they often gather in
        large congregations on walls or foundations while seeking entry — so the mass on the
        wall is a map of where to seal. And they are attracted to buildings with a lot of
        southern exposure regardless of the color of the building, which is a useful correction
        to the widespread belief that painting the house differently would help.
      </p>
      <p>
        For the ones already inside, Wisconsin Horticulture recommends sucking up the occasional
        bug with a vacuum cleaner, and states that insecticide sprays are generally not
        recommended for boxelder bugs that have already made their way indoors.
      </p>
      <p>
        For clusters on the outside of the building, the same source notes they can be sprayed
        with registered insecticides, insecticidal soap or hot soapy water, and that sprays may
        need repeating as more bugs arrive, especially when using soapy water. We make no claim
        here about how well any of those perform; that is the source&rsquo;s statement of what
        is used, not ours about what works.
      </p>

      <h3>Caulk for the sealing work</h3>
      <p>
        <strong>
          These are examples of one material, for the sealing Wisconsin Horticulture puts first.
          They are in no order of preference, none is called better than another, and nothing here
          is a claim about how well any of them performs &mdash; the limit stated just above applies
          to these cards too.
        </strong>
      </p>
      <p>
        <strong>Where the caulk specification comes from, stated plainly.</strong> Wisconsin
        Horticulture, the source this page uses for boxelder bugs, says to caulk all openings but
        does not name a type of caulk. The type below comes from Penn State Extension, which
        specifies good quality silicone or silicone-latex caulk for sealing cracks around windows,
        doors, siding, utility pipes and behind chimneys. That is a specification written about the
        other fall invaders, and it is attributed here rather than presented as a boxelder finding.
      </p>

      <UsToolCard
        name="GE Advanced Silicone Caulk for Window &amp; Door, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'A silicone caulk. Wisconsin Horticulture says to caulk all openings around windows and doors and in walls, siding or foundations.',
          'Its own listing states silicone and a 10 fl oz cartridge. Nothing further about it is claimed here.',
          'Wisconsin Horticulture notes the bugs often gather in large congregations on walls or foundations while seeking entry, which is where the sealing work is worth doing first.',
        ]}
        asin="B0BVGTM2XY"
      />

      <UsToolCard
        name="GE Advanced Silicone Window &amp; Door Sealant, Clear, 10.1 oz Cartridge"
        whatItDoes={[
          'A second silicone option in the same cartridge size range, for the same sealing work.',
          'Wisconsin Horticulture names the openings to close; it names no product, and neither does this page.',
        ]}
        asin="B0000CBJ7W"
      />

      <UsToolCard
        name="GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'Also a silicone caulk. Its listing describes it as all purpose rather than as a window and door product, which is the difference between this and the two above.',
          'That distinction is the listings\u2019, not the source\u2019s: Wisconsin Horticulture does not distinguish between caulk formulations.',
        ]}
        asin="B0B8QPH3RW"
      />

      <div className="not-prose my-8 rounded-lg border-l-4 border-slate-500 bg-slate-50 px-6 py-5">
        <p className="m-0 text-base font-bold text-slate-900">
          What is not listed here, and why
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Indoor insecticides.</strong> Wisconsin Horticulture states that insecticide
          sprays are generally not recommended for boxelder bugs that have already made their way
          indoors. Its answer for the ones inside is a vacuum cleaner, which most households already
          own.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Sprays for the clusters outside.</strong> Wisconsin Horticulture does allow for
          these, as set out above &mdash; registered insecticides, insecticidal soap or hot soapy
          water, with repeat applications as more bugs arrive. No product is listed for it because
          the source names categories rather than a specification a listing could be checked
          against, and because this page makes no claim about how any of them performs.
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          <strong>Screening.</strong> No source read for this page gives a mesh size for boxelder
          bugs, or names attics, chimneys or vents as entry points for them. The screening figure
          used elsewhere on this site belongs to a different insect, so it is not applied here.
        </p>
      </div>

      <h2 id="tree-removal">The Tree Question</h2>
      <p>
        People ask whether to take the tree down, and the honest answer is that it helps less
        than the tree&rsquo;s central role would suggest.
      </p>
      <p>
        Wisconsin Horticulture states that removing boxelder trees, or spraying heavily
        infested trees with a registered insecticide in mid-summer, may help reduce boxelder
        bug numbers — but that the adults are good fliers and can move a considerable distance
        from host trees, so this will not eliminate boxelder bug problems. Your neighbor&rsquo;s
        female boxelder two lots over is still in range.
      </p>
      <p>
        The same source gives two more useful suggestions: remove accumulations of boxelder,
        ash, elm and maple seeds, since the bugs can feed and reproduce on these as well as on
        the trees; and choose species other than boxelder when planting shade trees. The second
        is the only one that solves the problem permanently, and only for whoever owns the yard
        in twenty years.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
