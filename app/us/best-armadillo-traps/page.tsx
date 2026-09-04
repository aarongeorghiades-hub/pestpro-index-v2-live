import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { ARMADILLO_NAV, ARMADILLO_HOME } from '../components/armadilloNav';

const URL = 'https://pestproindex.com/us/best-armadillo-traps';
const TITLE = 'Armadillo Traps: What a Field Study Found';
const DESCRIPTION =
  'A University of Georgia study tested 11 baits and a lure and found none improved capture — placement, wings and trap size did. The spec, and the traps that meet it.';

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
      name: 'Armadillos',
      item: 'https://pestproindex.com/us/armadillos',
    },
    { '@type': 'ListItem', position: 2, name: 'Armadillo Traps', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What bait should I put in an armadillo trap?',
    answer:
      'The published evidence says the question has no useful answer. University of Georgia tested live night crawlers, live crickets, rotten chicken feed, whole eggs, rotten eggs, bananas, marshmallows, sardines, vanilla wafers, moistened soil and a commercially available lure, and reported that the use of baits and attractants does not appear to increase trap success, and that armadillos in the study were just as likely to enter a baited trap as an unbaited trap. UF/IFAS Extension states that there are also no effective methods for baiting armadillos into traps, and separately that the benefit of using baits with this trap is questionable. No bait or lure is listed on this page.',
  },
  {
    question: 'What size trap do I need?',
    answer:
      'University of Georgia used Tomahawk wire cage traps measuring 10 inches by 12 inches by 32 inches for its trapping study, and states that when trapping armadillo, large wooden box traps with a minimum size of 10 inches by 10 inches by 36 inches appear to be the preferred choice. UF/IFAS Extension describes the class more generally as raccoon-sized metal cage live-traps, or homemade box traps. Those two figures, 10 by 12 by 32 and a 10 by 10 by 36 minimum, are the specification everything on this page is measured against.',
  },
  {
    question: 'Do I really need wings on the trap?',
    answer:
      'It is the part of the method with evidence behind it. UF/IFAS Extension states that this trap is most effective when wings, given as 1 by 6 inch by 6 feet boards or other material, are added to funnel the animal into the trap, and explains the underlying habit: armadillos follow barriers, so temporary garden fencing or wooden boards can be used to funnel armadillos traveling along such barriers into traps. University of Georgia built its wings from two 2 inch by 6 inch boards, 6 feet long, attached at one end of the trap, and states that traps should include wings or funnels to direct the animal into the trap.',
  },
  {
    question: 'When should I set the trap?',
    answer:
      'UF/IFAS Extension states that because armadillos are nocturnal, all trapping techniques designed to capture armadillos emerging from burrows should be applied late in the afternoon and checked several hours after darkness. It also states that armadillos are more likely to enter a cage trap when leaf litter or soil is placed over the wire bottom. Trap-checking intervals are set by state law rather than by preference; in Florida, Rule 68A-9.010 of the Florida Administrative Code lists live traps and snares as a method that may not be used unless they are visited at intervals not exceeding 24 hours.',
  },
  {
    question: 'Will trapping solve the problem?',
    answer:
      'The source that ran the study is careful about this. University of Georgia states that given that capture success was quite low, it is unlikely that trapping is an effective method of quickly reducing local armadillo populations. UF/IFAS Extension states that capture rates are extremely low. Florida Fish and Wildlife Conservation Commission adds that removing one or more armadillos does not prevent others from using the same areas in the future. Trapping is worth doing carefully, and it is not worth expecting a permanent result from.',
  },
  {
    question: 'Can I release the armadillo somewhere else afterwards?',
    answer:
      'UF/IFAS Extension states that relocating problem animals to another area is not recommended, and University of Georgia states that armadillos should never be relocated off-property. Where it is permitted at all it is tightly conditioned: in Florida, Rule 68A-9.010 requires that live captured wildlife be released or euthanized within 24 hours following capture, and permits release only on one contiguous piece of the landowner property, or where the animal is a native species and the release property is within the county of capture, is a minimum of 40 contiguous acres, and written permission from the property owner is held at the time of release. Only two states were checked from primary text for these pages.',
  },
];

const sources: Source[] = [
  {
    label: 'Evaluating Attractants for Live-Trapping Nine-Banded Armadillos, C889-3',
    publisher: 'University of Georgia College of Agricultural and Environmental Sciences',
    date: 'Accessed August 21, 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C889-3/evaluating-attractants-for-live-trapping-nine-banded-armadillos/',
  },
  {
    label: 'The Nine-Banded Armadillo (Dasypus novemcinctus), WEC 76',
    publisher: 'UF/IFAS Extension, University of Florida (J.M. Schaefer and M.E. Hostetler)',
    date: 'Accessed August 21, 2026',
    href: 'https://edis.ifas.ufl.edu/publication/UW082',
  },
  {
    label: 'Baiting the Nine-Banded Armadillo, WEC 317',
    publisher: 'UF/IFAS Extension, University of Florida (H.K. Ober, L.W. DeGroote and R.F. Mizell III)',
    date: '2011',
    href: 'https://edis.ifas.ufl.edu/publication/UW362',
  },
  {
    label: 'Controlling Armadillo Damage in Alabama',
    publisher: 'Alabama Cooperative Extension System',
    date: 'Accessed August 21, 2026',
    href: 'https://www.aces.edu/blog/topics/forestry-wildlife/controlling-armadillo-damage-in-alabama/',
  },
  {
    label: 'Living with Armadillos',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Accessed August 21, 2026',
    href: 'https://myfwc.com/media/27208/living-with-armadillos.pdf',
  },
  {
    label:
      'Rule 68A-9.010, Florida Administrative Code — Taking Nuisance Wildlife (History: New 7-1-08, Amended 7-1-10, 7-27-10)',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Accessed August 21, 2026',
    href: 'https://myfwc.com/media/1935/68a-9-010.pdf',
  },
];

const tocItems = [
  { id: 'what-matters', title: 'What Changes the Outcome' },
  { id: 'traps', title: 'Traps That Meet It' },
  { id: 'placement', title: 'Placement and Timing' },
  { id: 'diy', title: 'Start With What You Already Have' },
  { id: 'size', title: 'The Size Specification' },
  { id: 'not-listed', title: 'What Is Not Listed, and Why' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [{ title: 'Armadillos: damage, range and control', href: '/us/armadillos' }];

// The sourced minimum every carded trap is measured against, quoted once here and
// repeated beside each card so the reader never has to scroll back for it.
const SOURCED_MINIMUM =
  'Sourced minimum: University of Georgia used a 10 x 12 x 32 inch wire cage trap in its field study.';

export default function BestArmadilloTrapsPage() {
  return (
    <UsPageLayout
      title="Armadillo Traps"
      subtitle="One field study tested eleven baits and a commercial lure against an empty trap and found no difference. What did make a difference was the boards either side of the door. Here is the method, the size specification, and the traps that meet it."
      lastUpdated="August 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: 'Armadillos', href: '/us/armadillos' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={ARMADILLO_HOME}
      clusterNav={ARMADILLO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="what-matters">What Changes the Outcome</h2>
      <p>
        Most advice about armadillo trapping is advice about bait. There is a field study that tested
        exactly that, and it is the reason this page is arranged the way it is.
      </p>
      <p>
        University of Georgia trapped armadillos using Tomahawk wire cage traps at the Joseph W.
        Jones Ecological Research Center, testing live night crawlers, live crickets, rotten chicken
        feed, whole eggs, rotten eggs, bananas, marshmallows, sardines, vanilla wafers, moistened
        soil and a commercially available lure, against two unbaited traps &mdash; one with wings and
        one without. Its finding is stated plainly: the use of baits and attractants does not appear
        to increase trap success, and armadillos in this study were just as likely to enter a baited
        trap as an unbaited trap.
      </p>
      <p>
        UF/IFAS Extension reaches the same conclusion from the other direction, stating that there
        are also no effective methods for baiting armadillos into traps, and separately that the
        benefit of using baits with this trap is questionable. Alabama Cooperative Extension System
        is the one source here that suggests otherwise, stating that live traps baited with overripe
        fruit such as apples or bananas can be used to catch problem armadillos. University of
        Georgia tested bananas.
      </p>
      <p>
        What the same sources do say works is structural. UF/IFAS Extension explains the habit that
        makes it work: armadillos follow barriers, and temporary garden fencing or wooden boards can
        be used to funnel armadillos traveling along such barriers into traps. University of Georgia
        states that traps should include wings or funnels to direct the animal into the trap.
      </p>

      <h2 id="traps">Traps That Meet It</h2>
      <p>
        Each of the three below was checked against the 10 by 12 by 32 inch figure before it was
        listed, and each meets or exceeds it on all three axes. They are described by what they
        mechanically are. No source compares one manufacturer against another, so none is ranked
        here, and no bait, lure or repellent appears on this page at all.
      </p>

      <p>
        The traps below are named because each listing&rsquo;s own text meets the published size specification set out above, on all three axes.
      </p>

      <UsToolCard
        name="Tomahawk Live Trap Model 608SS — Professional Series, rear sliding door"
        whatItDoes={[
          SOURCED_MINIMUM,
          'A single-entry wire cage trap with a treadle plate that releases a spring-loaded front door.',
          'A rear sliding door lets the animal be released from behind the trap rather than from the entrance end.',
          'Tomahawk is the manufacturer whose wire cage traps University of Georgia used in its field study.',
          'Wings of 1 x 6 or 2 x 6 inch lumber, six feet long, are added separately and are not part of the trap.',
        ]}
        asin="B00ADSHU84"
      />

      <UsToolCard
        name="Havahart 1085 Large 1-Door Easy Set live animal trap"
        whatItDoes={[
          SOURCED_MINIMUM,
          'A single-door wire cage trap: the animal enters at one end and a treadle releases a gravity door behind it.',
          'A one-handed set lever operates the door mechanism without reaching inside the cage.',
          'Mesh sides with a solid handle guard, intended to be carried without contact with the animal.',
          'Requires the wire floor to be covered with leaf litter or soil, as UF/IFAS Extension describes.',
        ]}
        asin="B000H6JJEA"
      />

      <UsToolCard
        name="Havahart Large 1-Door live animal trap, model 1079SR"
        whatItDoes={[
          SOURCED_MINIMUM,
          'A single-door wire cage trap of the same class as the 1085, with one entrance and a treadle-released door.',
          'Galvanized wire mesh with steel reinforcement at the frame and door.',
          'Sized for raccoon-class animals, which is the generic description UF/IFAS Extension gives for armadillo cage traps.',
          'The product title does not name armadillos; it is listed on dimensions against the sourced minimum, not on its labeling.',
        ]}
        asin="B00004RAMT"
      />

      <h2 id="placement">Placement and Timing</h2>
      <ul>
        <li>
          <strong>Against a barrier, or at a burrow.</strong> UF/IFAS Extension states that traps are
          most effective when placed in one of two locations: near the entrances to active armadillo
          burrows, or along barriers such as fences in areas where armadillos regularly travel.
        </li>
        <li>
          <strong>The suburban version of a barrier.</strong> University of Georgia states that
          homeowners and others can place traps near natural barriers or fences such as the walls of
          patios, edges of buildings or landscaping features, or near natural fences such as fallen
          trees.
        </li>
        <li>
          <strong>Set late, check after dark.</strong> UF/IFAS Extension states that because
          armadillos are nocturnal, all trapping techniques designed to capture armadillos emerging
          from burrows should be applied late in the afternoon and checked several hours after
          darkness.
        </li>
        <li>
          <strong>Cover the wire floor.</strong> UF/IFAS Extension states that armadillos are more
          likely to enter a cage trap when leaf litter or soil is placed over the wire bottom.
        </li>
        <li>
          <strong>Checking intervals are set by law, not preference.</strong> In Florida, Rule
          68A-9.010 of the Florida Administrative Code lists live traps and snares among methods that
          may not be used unless they are visited at intervals not exceeding 24 hours. Florida Fish
          and Wildlife Conservation Commission states the same duty directly: all traps must be
          checked at least once every 24 hours. Check your own state before you set anything, and see{' '}
          <Link href="/us/armadillos">the armadillo page</Link> for what was and was not checked.
        </li>
      </ul>

      <h2 id="diy">Start With What You Already Have</h2>
      <p>
        This is the unusual case where the item with evidence behind it is the one that costs the
        least, so it goes first rather than last.
      </p>
      <ul>
        <li>
          <strong>Wings, made from ordinary lumber.</strong> UF/IFAS Extension specifies wings as 1 by
          6 inch by 6 feet boards or other material, added to funnel the animal into the trap.
          University of Georgia built its wings from two 2 inch by 6 inch boards, 6 feet long,
          attached at one end of the trap. Both sources describe plain dimensional lumber, six feet
          long, set either side of the trap door. If you already own a cage trap of the right size,
          this is the modification the sources support, and it is the variable the field study found
          mattered.
        </li>
        <li>
          <strong>A homemade box trap.</strong> UF/IFAS Extension states that armadillos can be
          trapped in raccoon-sized, metal, cage live-traps or in homemade box traps. University of
          Georgia goes further, stating that when trapping armadillo, large wooden box traps of a
          minimum size of 10 inches by 10 inches by 36 inches appear to be the preferred choice. That
          phrase is University of Georgia&rsquo;s, not ours, and no wooden box trap is listed below;
          see the section after the traps for why.
        </li>
      </ul>

      <h2 id="size">The Size Specification</h2>
      <p>
        Two figures come from the sources, and everything listed on this page is measured against
        them.
      </p>
      <ul>
        <li>
          <strong>10 by 12 by 32 inches.</strong> University of Georgia used Tomahawk wire cage traps
          of exactly these dimensions for its trapping study.
        </li>
        <li>
          <strong>10 by 10 by 36 inches, minimum.</strong> University of Georgia states this as the
          minimum for the large wooden box traps it calls the preferred choice.
        </li>
        <li>
          <strong>The generic description.</strong> UF/IFAS Extension describes the class as
          raccoon-sized, metal, cage live-traps available from local pest control and feed stores.
        </li>
      </ul>

      <h2 id="not-listed">What Is Not Listed, and Why</h2>
      <p>
        Nine live-capture traps were identified and every one of them was checked directly against
        its Amazon listing on August 21, 2026. Three are listed above. Six are not, and the reasons
        are worth stating rather than leaving as a silent gap.
      </p>
      <ul>
        <li>
          <strong>Four could not be confirmed as available at the time of writing.</strong> Their
          listings exist, but each carried a notice that the item was unavailable when it was
          checked. An unavailable listing is a different thing from a dead one and may well return,
          so none has been discarded; none is listed here either. One of them matched University of
          Georgia&rsquo;s field trap dimensions exactly, which is a genuine loss to this page.
        </li>
        <li>
          <strong>One wooden box trap fell short of the sourced minimum.</strong> University of
          Georgia gives 10 by 10 by 36 inches as the minimum for the wooden box traps it calls the
          preferred choice. The only wooden box trap found measures 31 inches on its longest side,
          which is below that figure, so it is not listed. The type is described in the do-it-yourself
          section above instead.
        </li>
        <li>
          <strong>One could not have its dimensions confirmed.</strong> Its listing gives a length in
          its title but publishes no width or height, so it cannot be measured against a
          three-dimensional minimum, and a trap is not listed here on one axis out of three.
        </li>
        <li>
          <strong>No bait, lure or repellent is listed.</strong> That follows from the evidence at the
          top of this page rather than from a policy: University of Georgia tested eleven attractants
          and a commercial lure and found none improved capture, and UF/IFAS Extension states that no
          repellents, toxicants, or fumigants are registered for use with armadillos.
        </li>
      </ul>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing,
        ordering and emphasis are our own judgment and are not a finding of any source. Trap
        availability and dimensions were read from each product listing on the date given above and
        are a snapshot of that date.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
