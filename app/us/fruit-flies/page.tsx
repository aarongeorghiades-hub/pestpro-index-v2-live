import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import UsToolCard from '../components/UsToolCard';
import { FRUIT_FLIES_HOME, FRUIT_FLIES_NAV } from '../components/fruitFliesNav';

const URL = 'https://pestproindex.com/us/fruit-flies';
const TITLE = 'Fruit Flies: Where They Breed, and How to Stop Them';
const DESCRIPTION =
  'Identification against drain flies and fungus gnats, breeding sites extension services name, drain treatment that actually works, and two trap designs.';

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
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'US Pest Guides', item: 'https://pestproindex.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Fruit Flies', item: URL },
  ],
};

const relatedPages = [
  { title: 'House Flies: What They Carry, and How', href: '/us/flies' },
  { title: 'Cluster Flies: What Those Slow Window Flies Are', href: '/us/cluster-flies' },
];

const faqs: Faq[] = [
  {
    question: 'How big is a fruit fly, exactly?',
    answer:
      'The sources do not fully agree, and both figures are reported rather than averaged. University of Kentucky Extension and Colorado State University give about 1/8 inch (roughly 3mm); University of Maryland Extension gives the same 1/8 inch for adults but 1/4 inch for the whitish larvae; Iowa State University Extension gives 1/4 inch for the adult. Whichever figure is right for a given population, every source agrees on the two features that matter for identification: a red-eyed, tan-to-brown fly, far smaller than a house fly.',
  },
  {
    question: 'Is it a fruit fly, a drain fly, or a fungus gnat?',
    answer:
      'Texas A&M AgriLife Extension gives a working test: fruit flies have stocky bodies and red eyes; drain flies (also called moth flies) are dark gray to black, densely hairy, and hold broad wings roof-like over the body; fungus gnats are slender with long legs and long segmented antennae, mosquito-like but much smaller, and do not bite. A separate insect, the phorid fly, is about the same size as a fruit fly but has a distinctive hump-backed appearance. If it is breeding in a houseplant\'s soil rather than a drain or a fruit bowl, the sources point to a fungus gnat, not a fruit fly — and this site covers that insect on its own fungus gnats page rather than here.',
  },
  {
    question: 'Why do I have fruit flies with no fruit out?',
    answer:
      'University of Kentucky Extension states plainly that fruit need not be present — a recycling bin, a drain, a mop, or damp cleaning rags can all breed them. Iowa State University Extension names the most common hidden source: a slow-moving or seldom-used sink, bathtub, shower, or floor drain where a layer of slime has built up above the water line.',
  },
  {
    question: 'Does bleach clean out a fruit fly drain?',
    answer:
      'No, according to the one source that tested it directly. Iowa State University Extension states there is no benefit to treating drains with bleach or ammonia, and instead recommends cleaning the inside of the drain pipe with a stiff brush, rinsing with high-pressure water, pouring boiling water down the sides of the pipe, or using a bacterial drain treatment that biodegrades the organic matter.',
  },
  {
    question: 'What is the best homemade fruit fly trap?',
    answer:
      'Two designs are given and neither source calls the other wrong. University of Kentucky Extension describes a paper funnel rolled from notebook paper, set into a jar baited with cider vinegar. University of Maryland Extension describes pouring apple cider vinegar into a jar with a drop of dish soap, covering the top with plastic wrap secured by a rubber band, and poking a small hole for flies to enter.',
  },
  {
    question: 'Will insecticide spray get rid of them?',
    answer:
      'Only temporarily, and every source that addresses it agrees. University of Kentucky Extension states that a pyrethrum-based aerosol may be used to kill remaining adult flies, but only after the breeding source has been found and eliminated — spraying without removing the source will not end an infestation. University of Maryland Extension frames sanitation, not insecticide, as the primary control.',
  },
];

const sources: Source[] = [
  {
    label: 'Fruit Flies, ENTfact-621',
    publisher: 'University of Kentucky, Martin-Gatton College of Agriculture, Food and Environment',
    date: 'Accessed 1 September 2026',
    href: 'https://entomology.mgcafe.uky.edu/ef621',
  },
  {
    label: 'Small Fruit Flies (Vinegar Flies), Colorado Insect of Interest',
    publisher: 'Colorado State University Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://wci.extension.colostate.edu/wp-content/uploads/sites/14/2017/03/FruitFlies.pdf',
  },
  {
    label: 'Fruit, Vinegar, and Pomace Flies',
    publisher: 'Iowa State University Extension and Outreach, Yard and Garden',
    date: 'Accessed 1 September 2026',
    href: 'https://yardandgarden.extension.iastate.edu/encyclopedia/fruit-vinegar-and-pomace-flies',
  },
  {
    label: 'Indoor Flies and Their Control, ENTO-050',
    publisher: 'Texas A&M AgriLife Extension Service',
    date: 'Accessed 1 September 2026',
    href: 'https://agrilifeextension.tamu.edu/wp-content/uploads/2023/08/ENTO-050-indoor-flies-and-their-control.pdf',
  },
  {
    label: 'Fruit Flies',
    publisher: 'University of Maryland Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.umd.edu/resource/fruit-flies',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'not-a-fruit-fly', title: 'If It Is Not a Fruit Fly' },
  { id: 'where-they-breed', title: 'Where They Breed' },
  { id: 'source-elimination', title: 'Source Elimination and Prevention' },
  { id: 'drain-treatment', title: 'Drain Treatment' },
  { id: 'traps', title: 'Traps' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function FruitFliesPage() {
  return (
    <UsPageLayout
      title="Fruit Flies"
      subtitle="A tiny red-eyed fly circling the fruit bowl or hovering at the kitchen sink, with no obvious source in sight. Here is what university extension services publish about telling a fruit fly from the other small flies it gets confused with, where it actually breeds, and what stops it."
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={FRUIT_FLIES_HOME}
      clusterNav={FRUIT_FLIES_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the fruit fly, family Drosophilidae &mdash; the fly commonly called the
        vinegar fly or pomace fly in the scientific literature, and the one behind almost every
        &ldquo;tiny flies in my kitchen&rdquo; problem. Two other small flies get mistaken for it
        often enough that extension services write about the distinction directly, and this page
        covers that too, in its own section below.
      </p>
      <p>
        Source elimination comes before anything else on this page, because every source consulted
        agrees on the order: University of Kentucky Extension states that once a structure is
        infested, all potential breeding areas must be located and eliminated, and that unless the
        breeding sites are removed, the problem will continue no matter how often insecticides are
        applied to the adults.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        University of Kentucky Extension: <em>Adults are about 1/8 inch long and usually have red
        eyes. The front portion of the body is tan and the rear portion is black.</em> Colorado
        State University Extension gives a closely matching description: <em>Small fruit flies are
        small flies, approximately 3 mm (1/8) long. They are stout bodied and with a tan-colored
        head and thorax. The abdomen is darker, often with bands. Most have bright red eyes.</em>
      </p>
      <p>
        <strong>On exact size, the sources do not all agree, and each figure is reported here as its
        own source states it.</strong> University of Kentucky Extension and Colorado State University
        Extension both give roughly 1/8 inch for the adult. Iowa State University Extension states
        fruit flies are small, red-eyed, 1/4 inch long flies. University of Maryland Extension splits
        the difference by life stage rather than disagreeing outright: it gives 1/8 inch for the adult
        and states the larvae are whitish, 1/4 of an inch long, eyeless and legless, and taper towards
        the head. No figure is corrected against another here.
      </p>
      <p>
        On reproduction, the University of Kentucky Extension figures are specific: given the
        opportunity, they will lay about 500 eggs, and the entire lifecycle from egg to adult can be
        completed in about a week. University of Maryland Extension gives a close figure for the
        larval stage alone &mdash; the larvae feed for 5 to 6 days and then crawl to drier areas to
        pupate, with the entire life cycle taking 8 to 10 days.
      </p>

      <h2 id="not-a-fruit-fly">If It Is Not a Fruit Fly</h2>
      <p>
        Texas A&amp;M AgriLife Extension covers three other small flies commonly mistaken for fruit
        flies indoors, and gives a working test for each:
      </p>
      <ul>
        <li>
          <strong>Drain flies, also called moth flies.</strong> Texas A&amp;M AgriLife Extension:{' '}
          <em>Drain flies (Family Psychodidae) are also called moth flies because of their fuzzy,
          moth-like appearance</em> &mdash; dark gray to black, densely hairy, wings held flat or
          roof-like over the body at rest. Colorado State University Extension breeds moth flies to
          the same plumbing habitat: <em>Moth flies (Psychodidae family) also may be found indoors
          and similarly are associated with plumbing, developing on the bacterial gel that sometimes
          coats the interior of pipes</em>.
        </li>
        <li>
          <strong>Phorid flies &mdash; also sometimes called &ldquo;drain flies,&rdquo; a naming
          collision worth flagging rather than resolving.</strong> Texas A&amp;M AgriLife Extension:{' '}
          <em>Phorid flies (Family Phoridae) are another fly found in homes and, even more commonly,
          in commercial buildings</em>, about the same size as a fruit fly but with a hump-backed
          appearance. Colorado State University Extension calls this same family by a different
          name: <em>Most similar in general size and body shape are phorid flies (Phoridae family),
          sometimes known as drain flies</em> &mdash; the same common name Texas A&amp;M attaches to
          the Psychodidae instead. The common name &ldquo;drain fly&rdquo; is not used consistently
          between these two sources; the family name is the reliable identifier, not the common one.
        </li>
        <li>
          <strong>Fungus gnats.</strong> Texas A&amp;M AgriLife Extension:{' '}
          <em>Fungus gnats (Families Mycetophilidae and Sciaridae) are very small (1/16 to 1/8 in,
          1.5 to 3 mm), slender flies with clear or dark wings</em>, mosquito-like with long slender
          legs and bead-like antennae, and states directly that <em>unlike mosquitoes, fungus gnats
          do not bite</em>. Colorado State University Extension places their breeding site outside
          the drain entirely: <em>Fungus gnats also may occur indoors and are associated with the
          potting soil of houseplants</em>.
        </li>
      </ul>
      <p>
        If small flies are breeding in a houseplant&rsquo;s soil rather than a drain or ripening
        produce, the sources point to a fungus gnat, not a fruit fly, and the control step is
        different &mdash; drying out the soil, not treating a drain.{' '}
        <Link href="/us/fungus-gnats">Our fungus gnats page</Link> is where that insect is actually
        covered: how dry to let the soil get, what Bti does in the growing medium, what a yellow
        trap is and is not for, and two sources that disagree about whether you can buy Bti at all.
        This page identifies the fungus gnat so you can rule it out; it does not treat it. See also{' '}
        <Link href="/us/flies">our house flies page</Link> for the larger filth fly that mechanically
        transmits contamination rather than breeding in drains, and{' '}
        <Link href="/us/cluster-flies">our cluster flies page</Link> for the slow, dark, much larger
        fly that shows up at windows in fall &mdash; neither is the small red-eyed fly this page
        covers.
      </p>

      <h2 id="where-they-breed">Where They Breed</h2>
      <p>
        University of Kentucky Extension: fruit flies are especially attracted to ripened fruits and
        vegetables in the kitchen, but <em>they also will breed in drains, garbage disposals, empty
        bottles and cans, trash containers, mops and cleaning rags. All that is needed for
        development is a moist film of fermenting material.</em>
      </p>
      <p>
        Iowa State University Extension names the most commonly overlooked site directly:{' '}
        <em>The most likely of such sites in the home is a slow-moving or seldom-used sink, bathtub,
        shower, or floor drain in which a layer of slime (gelatinous film) has built up above the
        water line.</em>
      </p>
      <ul>
        <li>
          <strong>Produce.</strong> University of Kentucky Extension names tomatoes, melons, squash,
          grapes and other perishable garden produce, plus rotting bananas, potatoes and onions
          bought at a grocery store.
        </li>
        <li>
          <strong>Containers.</strong> University of Maryland Extension states to rinse and drain
          bottles and cans that are to be recycled, and to squeeze mops thoroughly and dry them,
          since a damp mop or towel can carry enough food and moisture to complete development.
        </li>
        <li>
          <strong>Home fermentation.</strong> University of Kentucky Extension states that people who
          can their own fruits and vegetables, or make wine, cider or beer, should ensure containers
          are well sealed, or fruit flies will lay eggs under the lid.
        </li>
        <li>
          <strong>From outdoors.</strong> University of Kentucky Extension states the adults can also
          fly in from outside through inadequately screened windows and doors.
        </li>
      </ul>

      <h2 id="source-elimination">Source Elimination and Prevention</h2>
      <p>
        University of Kentucky Extension is direct about what actually ends an infestation:{' '}
        <em>Once a structure is infested with fruit flies, all potential breeding areas must be
        located and eliminated. Unless the breeding sites are removed or cleaned, the problem will
        continue no matter how often insecticides are applied to control the adults.</em> The same
        source notes
        breeding sites which are inaccessible &mdash; garbage disposals and drains &mdash; can be
        inspected by taping a clear plastic food storage bag over the opening overnight; if flies are
        breeding there, the adults will emerge and be caught in the bag.
      </p>
      <ul>
        <li>
          University of Kentucky Extension: produce which has ripened should be eaten, discarded or
          refrigerated, and cracked or damaged portions cut away and discarded.
        </li>
        <li>
          University of Maryland Extension: keep fruit stored in the refrigerator, and rinse
          recycling before it accumulates.
        </li>
        <li>
          University of Kentucky Extension: <em>Windows and doors should be equipped with
          tight-fitting (16 mesh) screens to help prevent adult fruit flies from entering from
          outdoors.</em>
        </li>
      </ul>

      <h2 id="drain-treatment">Drain Treatment</h2>
      <p>
        <strong>On bleach and ammonia, the sources are direct rather than silent about a common
        assumption.</strong> Iowa State University Extension states plainly: <em>There is no
        benefit to treating drains with bleach or ammonia.</em>
      </p>
      <p>
        What the same source recommends instead: <em>{'Clean slow-moving drains with a stiff brush or other tool. Drains that cannot be scrubbed can be rinsed with water under high pressure or "sterilized" by slowly pouring boiling water down along the sides of the drain pipe.'}</em> It names one further option &mdash; a bacterial drain treatment that biodegrades
        the organic matter &mdash; with the instruction to follow label directions carefully for
        best results.
      </p>

      <p>
        The products below are named because each listing names the breeding site the sources on this page identify, a drain or ripening produce.
      </p>

      <UsToolCard
        name="Enzyme-Based Fruit Fly and Drain Fly Drain Treatment, 1 Gallon"
        whatItDoes={[
          'Its own listing names fruit flies, drain flies, sewer flies and gnats directly as the organisms its formula targets, and describes an all-natural gel poured into a drain to break up and digest organic scum — matching the bacterial-treatment approach Iowa State University Extension names as an alternative to scrubbing.',
          'Its own listing states the formula is non-toxic and safe for use around food, matching the kitchen/drain application this page covers.',
          'S48-A note: this page cannot independently verify the manufacturer\'s effectiveness claims and does not repeat them as fact; it is carded because its own text states the correct use case (a drain-breeding treatment) matching the sourced guidance, not because of any efficacy percentage.',
        ]}
        asin="B0BCP3VT97"
      />

      <h2 id="traps">Traps</h2>
      <p>
        Two homemade trap designs are given across the sources, and neither is presented as
        superior to the other.
      </p>
      <ul>
        <li>
          <strong>The funnel-jar method.</strong> University of Kentucky Extension:{' '}
          <em>a paper funnel (rolled from a sheet of notebook paper) into a jar which is then baited
          with a few ounces of cider vinegar. Place the jar trap(s) wherever fruit flies are
          seen.</em>
        </li>
        <li>
          <strong>The dish-soap method.</strong> University of Maryland Extension describes a
          different mechanism using the same bait:{' '}
          <em>pour apple cider vinegar into the bottom of a glass jar and add a drop of dish soap,
          cover the top with plastic wrap or a small plastic bag, and secure the plastic tightly
          around the rim with a rubber band. Then poke a tiny hole in the plastic to allow the flies
          to enter but not escape.</em>
        </li>
      </ul>
      <p>
        On insecticide, University of Kentucky Extension is specific about sequencing: after the
        source of attraction and breeding is eliminated, a pyrethrum-based, aerosol insecticide may
        be used to kill any remaining adult flies in the area &mdash; spraying is a cleanup step
        after source removal, not a substitute for it.
      </p>

      <UsToolCard
        name="TERRO Fruit Fly Trap, 6-Pack, 270 Days Lure Supply"
        whatItDoes={[
          'Its own listing states a food-based liquid lure and an apple-shaped design intended for kitchen counters, fruit bowls and trash cans — matching the near-the-breeding-site placement guidance both sourced trap designs above rely on.',
          'Its own listing states each trap provides up to 45 days of continuous protection with a ready-to-use, non-staining formula requiring no mixing — a manufactured equivalent to the funnel-jar and dish-soap traps described above, for a reader who wants a ready-made option rather than building one.',
          'A 6-pack, sized for placing traps at more than one breeding-suspect location at once, which the source-elimination guidance above recommends when the breeding site is not yet found.',
        ]}
        asin="B0BX4GQF68"
      />

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing,
        ordering and emphasis are our own judgment and are not a finding of any source. Where
        sources give different figures or use a common name differently, both are reported and
        attributed rather than resolved into one answer.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
