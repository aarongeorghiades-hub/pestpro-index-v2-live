import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { HOUSE_CENTIPEDES_NAV, HOUSE_CENTIPEDES_HOME } from '../components/houseCentipedesNav';

const URL = 'https://pestproindex.com/us/house-centipedes';
const TITLE = 'House Centipedes: Can They Bite, and Why Are They Here?';
const DESCRIPTION =
  'Eight sources on whether it can bite, and they do not agree. The part that matters more: a recurring centipede is eating something, and that is the problem.';

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
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'House Centipedes', item: URL }],
};

// ---------------------------------------------------------------------------
// ZERO PRODUCT CARDS, AND THE CRITERION FAILED BEFORE ANY LISTING WAS SOURCED.
//
// Penn State is the only source read here that names a product class at all,
// and it names STICKY MONITORS — not to control the centipede, but to find out
// WHAT IT IS EATING. It publishes no size, no adhesive, no count and no
// placement figure, so there is nothing to measure a listing against. No
// criterion, no card (Law 139), and no listing fetches were attempted, because
// sourcing candidates against a criterion that does not exist would spend
// Law 137 attempts to no purpose.
//
// COLORADO STATE GOES FURTHER AND ADVISES AGAINST THE OTHER OBVIOUS CLASS: it
// states that interior applications of insecticides are not recommended. That
// sentence is PARAPHRASED on the page rather than quoted, because the PDF sets
// "applica-tions" with a soft hyphen and quoting it would mean either
// reproducing an invisible control character or normalising the source (Law 14).
//
// THE DEHUMIDIFIER POSITION IS INHERITED AND MUST NOT DIVERGE. Penn State says
// to reduce humidity with dehumidifiers and gives no target figure.
// /us/silverfish and /us/camel-crickets both reached the identical conclusion on
// the identical question and neither cards one. This page agrees with them
// (Law 132: two pages that disagree on a fact are the defect).
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'House Centipedes — the source of the little-concern and harmless statements, the 15-pairs-of-legs description and body length, the nocturnal foraging habit, the prey list that names silverfish and firebrats, the underlying-pest-problem inference, the harborage list, and the management order that puts food source first and harborage second',
    publisher: 'Penn State Extension',
    date: 'Carries "Updated: January 19, 2026"; fetched 3 September 2026',
    href: 'https://extension.psu.edu/house-centipedes',
  },
  {
    label:
      'Millipedes, Centipedes and Sowbugs, Fact Sheet 5.552, by W.S. Cranshaw — the source of the cannot-bite-through-skin statement, the light-shy explanation of why bites are rare, the bee-sting comparison for the largest species, and the wait-it-out control position. Its sentence advising against interior insecticide is paraphrased rather than quoted, because the PDF sets one word with a soft hyphen',
    publisher: 'Colorado State University Extension',
    date: 'Carries "1/00. Revised 12/13"; fetched 3 September 2026',
    href: 'https://www.extension.colostate.edu/docs/pubs/insect/05552.pdf',
  },
  {
    label:
      'House centipede — the source of the painful-bite statement that DISAGREES with Colorado State, the fifteen-pairs-of-fragile-legs description, and the list of damp indoor locations',
    publisher: 'Washington State University, Pestsense',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://pestsense.cahnrs.wsu.edu/fact-sheet/house-centipede/',
  },
  {
    label:
      'Centipedes — the source of the bites-are-rare statement and of the statement that centipedes are considered beneficial',
    publisher: 'Utah State University Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.usu.edu/planthealth/research/centipede',
  },
  {
    label:
      'Centipedes — the source of the fangs statement and of the flat assertion that the bite is not dangerous, which sits at the opposite end of the range from UGA',
    publisher: 'University of Wisconsin-Madison Division of Extension',
    date: 'The document is filed under a 2014 path; fetched 3 September 2026 from hort.extension.wisc.edu',
    href: 'https://hort.extension.wisc.edu/files/2014/11/Centipedes.pdf',
  },
  {
    label:
      'House Centipede (Scutigera coleoptrata) — the source of the striped-leg description and of the generalist-predator statement. This is a state agricultural experiment station rather than a university extension service',
    publisher: 'Connecticut Agricultural Experiment Station',
    date: 'No publication date carried in the document; fetched 3 September 2026 from portal.ct.gov',
    href: 'https://portal.ct.gov/-/media/CAES/DOCUMENTS/Publications/Fact_Sheets/Entomology/House_Centipede_Scutigera.pdf',
  },
  {
    label:
      'Millipedes and Centipedes, B1088 — the source of the poison-glands statement and the occasional-threat wording, which is the least reassuring position of the eight and is reported as such',
    publisher: 'University of Georgia Cooperative Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.uga.edu/publications/detail.html?number=B1088&title=millipedes-and-centipedes',
  },
  {
    label:
      'House Centipede, Bug’s Eye View No. 29 — the source of the statement that bites are uncommon unless the animal is handled or pressed against skin',
    publisher: 'Mississippi State University Extension Service',
    date: 'Filed under a 2015 newsletter path; fetched 3 September 2026',
    href: 'https://extension.msstate.edu/newsletters/bugs-eye-view/2015/house-centipede-no-29',
  },
];

const faqs: Faq[] = [
  {
    question: 'Can a house centipede bite you?',
    answer:
      'The sources do not agree, and this page reports the whole range rather than picking the comforting end of it. Colorado State University Extension is the most reassuring: except for the largest species, centipedes cannot bite through skin, so hazard to humans is remote, and bites are extremely rare because centipedes are light shy and bite only when being picked up or crushed. Penn State Extension says simply that they are harmless. University of Wisconsin-Madison says centipedes have fangs and can possibly bite if handled, but that this rarely happens and the bite is not dangerous. Utah State University Extension says bites on humans are rare. Mississippi State University Extension says bites are uncommon unless centipedes are handled or accidentally pressed against the skin. Washington State University is less reassuring: they may inflict a painful bite if handled. And University of Georgia Cooperative Extension is the least: centipedes, which have poison glands and can bite, pose an occasional threat to humans. What every one of the eight agrees on is that a bite requires handling or crushing the animal.',
  },
  {
    question: 'How bad would a bite actually be?',
    answer:
      'One source puts a figure of comparison on it and no other read here does. Colorado State University Extension states that the bite of the largest species is reported to cause a sharp, temporary pain, similar to a bee sting. Note what that sentence is careful about: it is about the LARGEST species, it is reported rather than measured by the source, and the same source has already said that except for the largest species a centipede cannot bite through skin at all. The house centipede of this page, Scutigera coleoptrata, is one to one and a half inches long in the body. This site is not a medical source and assesses nobody’s symptoms.',
  },
  {
    question: 'Why is it in my bathroom?',
    answer:
      'Because the room is damp and the hunting is good. Washington State University states that house centipedes prefer damp areas and are frequently found in basements, bathrooms, closets or potted plants. Penn State Extension describes the daily pattern: during the daytime the centipedes inhabit dark, damp locations in the home and come out at night to forage for prey. Penn State also lists the specific places in a structure that shelter them, and they are all the same kind of place: beneath concrete slabs entered through expansion cracks or around sump pump openings, inside cement block walls through uncapped blocks or missing mortar, in floor drains without water traps, under cardboard boxes stored on slabs, and in any damp cool location such as a crawl space.',
  },
  {
    question: 'Should I kill it?',
    answer:
      'Two sources make a case for the animal rather than against it. Utah State University Extension states that centipedes are predatory relatives of the insects and are considered beneficial. The Connecticut Agricultural Experiment Station states that house centipedes are generalist predators of insects, spiders and other arthropods, many of which are considered household pests. Penn State Extension names the prey specifically: silverfish, firebrats, carpet beetle larvae, cockroaches, spiders and other small arthropods. That is the argument for leaving one alone. It is not an argument this page presses on anyone who does not want an arthropod in the bathroom.',
  },
  {
    question: 'Seeing several means what, exactly?',
    answer:
      'Penn State Extension draws the inference directly, and it is the most useful sentence on this page: if house centipedes are seen frequently, this indicates that some prey arthropod is in abundance, and may signify a greater problem than the presence of the centipedes. It puts the same point in its summary — their presence in large numbers may indicate another underlying pest issue. A recurring centipede is therefore a symptom to read rather than a problem to treat, and Penn State builds its own management order on that: reduction in the centipede food source is the first step, and harborage reduction is the second.',
  },
  {
    question: 'Do I need an insecticide indoors?',
    answer:
      'Colorado State University Extension advises against it. Its control position for centipedes is to wait out the problem and control moisture sources in and around the home, it notes that infestations usually involve only a few individuals, and it states that interior applications of insecticides are not recommended — that last sentence paraphrased here rather than quoted, because the source sets one of its words with a soft hyphen and quoting it would mean altering the source text. Penn State does describe home-labeled insecticide formulations, so the sources are not identical in emphasis, but Penn State still puts food-source reduction first and harborage reduction second, with the chemical option after both. No product is named on this page and the reason is set out below.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'bite', title: 'The Bite Question: Eight Sources, One Range' },
  { id: 'what-it-is', title: 'What You Are Looking At' },
  { id: 'why-here', title: 'Why It Is in the House' },
  { id: 'symptom', title: 'The Part That Matters: It Is Eating Something' },
  { id: 'management', title: 'What the Sources Say to Do, in Their Order' },
  { id: 'not-named', title: 'Why No Product Is Named Here' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function HouseCentipedesPage() {
  return (
    <UsPageLayout
      title="House Centipedes"
      subtitle="The fast one with too many legs, usually seen once, at night, in a bathroom. Eight extension and state sources answer the bite question and they do not agree with each other. Then the thing almost nobody tells you: if you keep seeing them, they are eating something, and that is the actual problem."
      lastUpdated="September 2026"
      readingTime="9 min read"
      homeHref={HOUSE_CENTIPEDES_HOME}
      clusterNav={HOUSE_CENTIPEDES_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>Two questions, and the second one is the useful one.</strong> The first is whether
        the animal can hurt you, and it is answered below from eight publications that do not fully
        agree. The second is why it is in the house at all &mdash; and the answer to that is not
        about the centipede.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>No product is named on this page, and the criterion failed before any listing was
          looked at.</strong> One source names a product class &mdash; sticky monitors &mdash; and
          names it as a way of finding out what the centipede is eating rather than as a way of
          controlling the centipede. It publishes no size, no adhesive, no count and no placement
          figure, so there is nothing here to measure a listing against.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>One source advises against the other obvious class.</strong> Colorado State
          Extension states that interior applications of insecticides are not recommended. That is
          not a gap in the sourcing; it is the sourcing.
        </p>
      </div>

      <h2 id="bite">The Bite Question: Eight Sources, One Range</h2>
      <p>
        <strong>
          This is the question people arrive with, and the honest answer is that the published
          positions run from &ldquo;cannot bite through skin&rdquo; to &ldquo;an occasional threat
          to humans&rdquo;.
        </strong>{' '}
        All eight are set out, in order, from the most reassuring to the least. None is averaged.
      </p>
      <ul>
        <li>
          <strong>Colorado State University Extension:</strong>{' '}
          <em>
            &ldquo;Except for the largest species, centipedes cannot bite through skin, so hazard to
            humans is remote.&rdquo;
          </em>{' '}
          It also explains why encounters are rare:{' '}
          <em>
            &ldquo;Bites are extremely rare, because centipedes are light shy and bite only when
            being picked up or crushed.&rdquo;
          </em>
        </li>
        <li>
          <strong>Penn State Extension</strong>, of the house centipede specifically:{' '}
          <em>
            &ldquo;While they are fast and have long legs, which may frighten some people, they are
            harmless.&rdquo;
          </em>
        </li>
        <li>
          <strong>University of Wisconsin-Madison:</strong>{' '}
          <em>
            &ldquo;Centipedes have fangs and can possibly bite if handled, but this rarely happens
            and the bite is not dangerous.&rdquo;
          </em>
        </li>
        <li>
          <strong>Utah State University Extension:</strong>{' '}
          <em>&ldquo;Centipede bites on humans are rare.&rdquo;</em>
        </li>
        <li>
          <strong>Mississippi State University Extension:</strong>{' '}
          <em>
            &ldquo;Bites to humans are uncommon unless centipedes are handled or accidentally
            pressed against the skin.&rdquo;
          </em>
        </li>
        <li>
          <strong>Washington State University:</strong>{' '}
          <em>&ldquo;They may inflict a painful bite if handled.&rdquo;</em>
        </li>
        <li>
          <strong>University of Georgia Cooperative Extension</strong>, the least reassuring of the
          eight:{' '}
          <em>
            &ldquo;Centipedes, which have poison glands and can bite, pose an occasional threat to
            humans.&rdquo;
          </em>
        </li>
      </ul>
      <p>
        <strong>What survives the disagreement is the condition attached to every one of them.</strong>{' '}
        Colorado State says a bite happens only when the animal is picked up or crushed, Wisconsin
        and Washington State both say <em>if handled</em>, and Mississippi State says{' '}
        <em>
          &ldquo;unless centipedes are handled or accidentally pressed against the skin&rdquo;
        </em>
        . No source read here describes a house centipede biting a person who left it alone.
      </p>
      <p>
        <strong>On severity, one source offers a comparison and the rest do not.</strong> Colorado
        State:{' '}
        <em>
          &ldquo;The bite of the largest species is reported to cause a sharp, temporary pain,
          similar to a bee sting.&rdquo;
        </em>{' '}
        Read what that sentence is careful about &mdash; it concerns the <em>largest</em> species,
        it is reported rather than measured, and the same source has already said that anything
        smaller cannot break skin. This site is not a medical source and assesses nobody&rsquo;s
        symptoms.
      </p>

      <h2 id="what-it-is">What You Are Looking At</h2>
      <p>
        <strong>The leg count is the identification, and it is exact.</strong> Penn State Extension:{' '}
        <em>
          &ldquo;Adult house centipedes have 15 pairs of legs with the last pair (on adult females)
          nearly twice the length of the body, which is one to one and one-half inches in
          length&rdquo;
        </em>
        . The Connecticut Agricultural Experiment Station gives the same number with the marking:{' '}
        <em>&ldquo;They have 15 pairs of long striped legs (one pair per body segment).&rdquo;</em>{' '}
        Washington State adds the quality that makes them look alarming:{' '}
        <em>&ldquo;Adults have fifteen pairs of long, fragile legs.&rdquo;</em>
      </p>
      <p>
        <strong>Fifteen pairs is thirty legs, not a hundred</strong>, and the apparent size is mostly
        leg: Penn State notes the animal looks three to four inches long once the legs and antennae
        are counted, against a body of one to one and a half inches.
      </p>
      <p>
        <strong>It is the one that lives indoors on purpose.</strong> Penn State:{' '}
        <em>
          &ldquo;House centipedes do not survive winters outdoors in Pennsylvania, but readily
          reproduce in heated structures.&rdquo;
        </em>{' '}
        That is why this animal turns up in a heated bathroom in February when nothing else does.
      </p>

      <h2 id="why-here">Why It Is in the House</h2>
      <p>
        <strong>Damp, dark and at night.</strong> Washington State:{' '}
        <em>
          &ldquo;House centipedes prefer damp areas; frequently they are found in basements,
          bathrooms, closets, or potted plants.&rdquo;
        </em>{' '}
        Penn State gives the daily rhythm:{' '}
        <em>
          &ldquo;During the daytime, the centipedes inhabit dark, damp locations in the home and come
          out at night to forage for prey.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State also lists the specific ways in</strong>, and they are worth reading as a
        checklist rather than as biology: expansion cracks and sump pump openings beneath concrete
        slabs; uncapped blocks, missing mortar and pipe penetrations in cement block walls; floor
        drains without water traps, especially those connected to dry sumps; cardboard boxes stored
        on slabs; and any damp, cool unexcavated space under the house.
      </p>
      <p>
        <strong>If the animal is slow, round and curls up, it is not this one.</strong> Colorado
        State publishes the house centipede in the same fact sheet as the millipede for the same
        reason &mdash; both need damp and both die as it dries &mdash; but they are told apart at a
        glance: a millipede has two pairs of legs per body segment and curls into a coil when
        disturbed, where a centipede has one pair per segment and runs.{' '}
        <Link href="/us/millipedes">Our millipedes page</Link> covers the autumn invasion, why it
        ends on its own, and the one source that advises against handling them.
      </p>
      <p>
        Three other pages on this site describe the same damp spaces for different animals. Our{' '}
        <Link href="/us/silverfish">silverfish and firebrats page</Link> covers two of the animals
        Penn State names as this one&rsquo;s prey; our{' '}
        <Link href="/us/camel-crickets">camel crickets page</Link> covers the humpbacked jumping one
        of crawl spaces; and our <Link href="/us/earwigs">earwigs page</Link> covers the one that
        comes in from the mulch outside. None of them repeats the others.
      </p>

      <h2 id="symptom">The Part That Matters: It Is Eating Something</h2>
      <p>
        <strong>A house centipede is a predator, and a recurring one is a receipt.</strong> Penn
        State names the menu:{' '}
        <em>
          &ldquo;House centipedes feed on silverfish, firebrats, carpet beetle larvae, cockroaches,
          spiders, and other small arthropods.&rdquo;
        </em>{' '}
        The Connecticut Agricultural Experiment Station puts it more generally:{' '}
        <em>
          &ldquo;House centipedes are generalist predators of insects, spiders, and other arthropods,
          many of which are considered household pests.&rdquo;
        </em>
      </p>
      <p>
        <strong>And then Penn State draws the inference, which is the most useful sentence on this
        page:</strong>{' '}
        <em>
          &ldquo;If house centipedes are seen frequently, this indicates that some prey arthropod is
          in abundance, and may signify a greater problem than the presence of the
          centipedes&rdquo;
        </em>
        . Its own summary says the same thing:{' '}
        <em>
          &ldquo;House centipedes feed on small arthropods, including pest insects, so their presence
          in large numbers may indicate another underlying pest issue.&rdquo;
        </em>
      </p>
      <p>
        <strong>One sighting is one sighting.</strong> Several, repeatedly, is a signal that
        something else is living in the building in numbers &mdash; and killing the centipede does
        not touch that.
      </p>
      <p>
        <strong>Two sources make the case for the animal outright.</strong> Utah State:{' '}
        <em>
          &ldquo;Centipedes are predatory relatives of the insects, and are considered
          beneficial.&rdquo;
        </em>{' '}
        Penn State:{' '}
        <em>
          &ldquo;House centipedes are of little concern to homeowners, despite their long legs and
          scary appearance.&rdquo;
        </em>{' '}
        That is the sources&rsquo; position, reported. Nobody has to like sharing a bathroom with
        one.
      </p>

      <h2 id="management">What the Sources Say to Do, in Their Order</h2>
      <p>
        <strong>Penn State puts the steps in an order and the order is the advice.</strong> First:{' '}
        <em>
          &ldquo;Reduction in the centipede food source is the first step in managing a house
          centipede population.&rdquo;
        </em>{' '}
        Second:{' '}
        <em>&ldquo;Harborage reduction is the second most important management tactic.&rdquo;</em>{' '}
        Its harborage measures are sealing cracks and crevices in slabs and block walls, screening
        and caulking sump pump covers, screening basement floor drains, and grading soil so water
        runs away from the foundation.
      </p>
      <p>
        Third, and stated without a number:{' '}
        <em>&ldquo;Reduce the humidity by utilizing dehumidifiers.&rdquo;</em> No source read here
        gives a target humidity, a capacity or a room size &mdash; which is why no dehumidifier is
        named on this page, exactly as on our{' '}
        <Link href="/us/silverfish">silverfish page</Link> and our{' '}
        <Link href="/us/camel-crickets">camel crickets page</Link>, both of which reached the same
        conclusion on the same question.
      </p>
      <p>
        <strong>Colorado State is blunter and shorter.</strong> Its control position is to wait out
        the problem and control moisture sources in and around the home, it observes that
        infestations usually involve only a few individuals, and it states that interior
        applications of insecticides are not recommended.{' '}
        <strong>
          That last sentence is paraphrased rather than quoted, because the PDF sets one of its
          words with a soft hyphen
        </strong>{' '}
        and reproducing it would mean either carrying an invisible control character into the page
        or silently altering the source.
      </p>
      <p>
        <strong>The two sources are not identical in emphasis and this page does not pretend they
        are.</strong> Penn State does go on to describe insecticide formulations labeled for home
        use; Colorado State advises against interior application. Both put the non-chemical work
        first, and both treat the centipede itself as the least important part of the problem.
      </p>

      <h2 id="not-named">Why No Product Is Named Here</h2>
      <p>
        <strong>The only product class any of these eight sources names is a monitor, not a
        control.</strong> Penn State describes distributing sticky insect traps around the house to
        determine what other arthropods are providing a meal &mdash; a diagnostic step, aimed at the
        prey rather than at the centipede. It publishes no size, no adhesive, no count and no
        placement specification, and it points the reader to a pest control company for the traps
        and the identification service together.
      </p>
      <p>
        <strong>That is a practice, not a criterion.</strong> There is nothing in it to rank one
        listing against another, so nothing is named. This site does not measure products against a
        vocabulary.
      </p>
      <p>
        <strong>The dehumidifier fails for a different reason and it is worth keeping the two
        apart.</strong> The sources support dehumidifying; none of them publishes a figure. A
        recommendation with no number is not a specification either.
      </p>
      <p>
        <strong>And the insecticide is not an absent card but a discouraged one.</strong> Colorado
        State advises against interior application outright. A page that quietly omitted that
        sentence and named a product anyway would be misreporting its own sources.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
