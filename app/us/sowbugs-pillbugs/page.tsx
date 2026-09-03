import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { SOWBUGS_PILLBUGS_NAV, SOWBUGS_PILLBUGS_HOME } from '../components/sowbugsPillbugsNav';

const URL = 'https://pestproindex.com/us/sowbugs-pillbugs';
const TITLE = 'Sowbugs and Pillbugs: The Roly-Poly Is Not an Insect';
const DESCRIPTION =
  'It breathes through gills, which is why it dies in your basement. The one test that tells the two apart, and why seven sources say control is unnecessary.';

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
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Sowbugs and Pillbugs', item: URL },
  ],
};

// ---------------------------------------------------------------------------
// ZERO PRODUCT CARDS, AND HERE THE SOURCES SAY SO THEMSELVES RATHER THAN MERELY
// FAILING TO SPECIFY.
//
//   INDOOR TREATMENT   Kansas State: applications of pest control materials are
//                      generally not required indoors, because the animals dry
//                      out and die after entering. Colorado State: control
//                      generally is unnecessary. That is not an absent card, it
//                      is a card the sources argue against.
//
//   SEALING / MOISTURE Named by Kentucky, Kansas State and Colorado State and
//                      SPECIFIED BY NONE — no gap width, no material, no
//                      humidity figure. No criterion, no card (Law 139). This is
//                      the position /us/camel-crickets already holds on
//                      weather-stripping and /us/silverfish on dehumidifiers,
//                      and Law 132 forbids this page disagreeing with them.
//
//   GARDEN BAITS       Kansas State names trade products for OUTDOOR plant
//                      protection. That is a different problem from the one a
//                      reader with isopods in a basement has, and no source
//                      offers a specification to rank them by.
//
// NO LISTING FETCHES WERE ATTEMPTED: spending Law 137 attempts against a
// criterion that does not exist buys nothing.
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'Sowbugs & Pillbugs (aka Rolly-Pollies), ENTFACT-439 — the source of the harmless-to-people-and-pets statement, the isopod definition, the uropod test that separates the two animals, and the inference that a recurring find indoors signals a moisture or sealing problem',
    publisher: 'University of Kentucky Department of Entomology',
    date: 'No publication date carried in the page; fetched 3 September 2026 from entomology.mgcafe.uky.edu',
    href: 'https://entomology.mgcafe.uky.edu/ef439',
  },
  {
    label:
      'Millipedes, Centipedes and Sowbugs, Fact Sheet 5.552, by W.S. Cranshaw — the source of the do-not-bite statement, the outdoors-under-cover description, the wet-spring entry, the shorter-survival observation, the control-is-unnecessary position, and the statement that millipede and centipede controls also work here. Read in its HTML edition, because the PDF sets several words with soft hyphens that cannot be quoted without altering the source',
    publisher: 'Colorado State University Extension',
    date: 'Carries "1/00. Revised 12/13"; fetched 3 September 2026 from extension.colostate.edu',
    href: 'https://extension.colostate.edu/resource/millipedes-centipedes-and-sowbugs/',
  },
  {
    label:
      'Roly-Polys: Sowbugs and Pillbugs — the source of the crustacean classification, the tail-appendage distinction that corroborates Kentucky, the moisture-loss mechanism that explains everything else on this page, and the statement that indoor pesticide application is generally not required',
    publisher: 'Kansas State University Horticulture Resource Center',
    date: 'No publication date carried in the document; fetched 3 September 2026 from hnr.k-state.edu',
    href: 'https://hnr.k-state.edu/extension/horticulture-resource-center/common-pest-problems/documents/Roly%20-%20Polys%20-%20Sowbugs%20and%20Pillbugs.pdf',
  },
  {
    label:
      'Pillbugs and Sowbugs — the source of the family names, the not-insects statement, the body-size figure, and the garden damage description that is the one real complaint against these animals',
    publisher: 'University of California Statewide IPM Program (UC IPM)',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/pillbugs-and-sowbugs/',
  },
  {
    label:
      'Pillbugs and Sowbugs (Land Isopods) — the source of the gill statement that explains why they die indoors, the global isopod figure, the genus names behind the common name sowbug, and the plain statement that they are harmless and do no damage. This is a state conservation agency rather than a university extension service',
    publisher: 'Missouri Department of Conservation',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://mdc.mo.gov/discover-nature/field-guide/pillbugs-sowbugs-land-isopods',
  },
  {
    label:
      'Pillbug (Roly-poly), Colorado Crustacean of Interest — the source of the scavenger feeding description and the uropod anatomy',
    publisher: 'Colorado State University, Bioagricultural Sciences and Pest Management',
    date: 'No publication date carried in the document; fetched 3 September 2026 from webdoc.agsci.colostate.edu',
    href: 'https://webdoc.agsci.colostate.edu/bspm/Crustacea%20(Crustaceans)/Pillbug.pdf',
  },
  {
    label:
      'Millipedes, Sowbugs, Pillbugs, E-55 — the source of the seven-pairs-of-legs count, which is the figure that settles the not-an-insect question',
    publisher: 'Purdue University Extension Entomology',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.entm.purdue.edu/publications/E-55/E-55.html',
  },
];

const faqs: Faq[] = [
  {
    question: 'Are roly-polys insects?',
    answer:
      'No, and this is the fact that explains everything else about them. University of California IPM states that pillbugs and sowbugs are not insects or true bugs, and that they are soil-dwelling crustaceans in the order Isopoda. University of Kentucky says the same in one line: sowbugs and pillbugs are isopods, types of crustaceans capable of living on land. Purdue University Extension gives the count that settles it — sowbugs and pillbugs are gray, with flattened bodies and seven pairs of legs, where an insect has three. The Missouri Department of Conservation puts the family in context: there are more than 10,000 species of isopods globally, most of which live in the sea.',
  },
  {
    question: 'How do I tell a sowbug from a pillbug?',
    answer:
      'One rolls into a ball and one does not, and the reason is at the back end. University of Kentucky states that sowbugs are distinct in that they have two prominent tail-like appendages, called uropods, and cannot roll into a ball. Kansas State University puts the same test the other way round: sowbugs possess two small, tail-like appendages located at the end of the body, and pillbugs do not have appendages. So a roly-poly that curls into a sphere is a pillbug; one that cannot, and has two little tails, is a sowbug. The Missouri Department of Conservation adds where the common names come from — isopods in the genera Oniscus and Porcellio are called sowbugs, while the roly-poly is Armadillidium vulgare.',
  },
  {
    question: 'Are they dangerous, or will they damage anything?',
    answer:
      'No source read for this page says either. Colorado State University Extension states that they do not bite and are harmless to humans. University of Kentucky states that while they can be found indoors, they are harmless to people and pets. The Missouri Department of Conservation is blunter still: it is hard to consider isopods pests, since they are harmless and do no damage when they sometimes enter buildings. The one real complaint any source raises is horticultural rather than structural — UC IPM notes they chew fruit, succulent plant parts, seedlings and vegetables that touch damp soil, which is a garden problem and not a house one.',
  },
  {
    question: 'Why do they keep dying on my basement floor?',
    answer:
      'Because they cannot survive there, and the reason is anatomical. The Missouri Department of Conservation states that they have gills, which must be kept moist — these are crustaceans breathing the way a crustacean breathes. Kansas State University Extension gives the consequence: sowbugs and pillbugs are always found in moist environments because they cannot control moisture loss from their bodies. A heated house is a drying machine, so an isopod that wanders in is on a short clock. Colorado State observes that their survival indoors is often shorter than for millipedes and centipedes, which is saying something, because it puts millipede survival at a day or two.',
  },
  {
    question: 'Do I need to spray?',
    answer:
      'Two sources say specifically that you do not. Kansas State University Extension states that applications of pest control materials are generally not required indoors because sowbugs and pillbugs will quickly dry out and die after entering homes. Colorado State University Extension reaches the same place from the other direction: because of their short survival and the minor annoyance they cause, control generally is unnecessary. That is not this page declining to name a product for want of a specification — it is two published sources arguing against the purchase. Colorado State adds that where anything is done, the controls effective for millipedes and centipedes also are effective for sowbugs and pillbugs, which means moisture and exclusion rather than a spray.',
  },
  {
    question: 'What does it mean if I keep finding them indoors?',
    answer:
      'University of Kentucky draws the inference and it is the most useful sentence on this page: if they are frequently found in the home, it may signal a moisture problem or an issue with a sealant, window, or door that allows access. Colorado State describes the seasonal pattern that produces the usual one-off — during some times of the year, particularly after extended wet spring weather, sowbugs and pillbugs may move into homes. So an isolated influx after a wet spell is weather; a steady trickle is the building. The animals themselves are the least important part of either.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'not-insects', title: 'Not an Insect: a Crustacean on Land' },
  { id: 'which', title: 'Sowbug or Pillbug: the Uropod Test' },
  { id: 'harm', title: 'What They Do and Do Not Damage' },
  { id: 'why-die', title: 'Why They Die Indoors' },
  { id: 'meaning', title: 'What a Recurring Find Actually Means' },
  { id: 'control', title: 'What the Sources Say to Do' },
  { id: 'not-named', title: 'Why No Product Is Named Here' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function SowbugsPillbugsPage() {
  return (
    <UsPageLayout
      title="Sowbugs and Pillbugs"
      subtitle="The roly-poly is a crustacean, not an insect, and it breathes through gills. That single fact explains the whole page: why they arrive after wet weather, why they die on a basement floor within days, and why seven sources between them recommend buying nothing."
      lastUpdated="September 2026"
      readingTime="8 min read"
      homeHref={SOWBUGS_PILLBUGS_HOME}
      clusterNav={SOWBUGS_PILLBUGS_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>
          Almost everything a reader wants to know here follows from one fact: this animal is not an
          insect.
        </strong>{' '}
        University of California IPM:{' '}
        <em>
          &ldquo;They are soil-dwelling crustaceans in the order Isopoda (called isopods).&rdquo;
        </em>{' '}
        A crustacean in a heated house is a crustacean out of water, and the rest of this page is the
        consequence.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>No product is named here, and on this page the sources say so themselves.</strong>{' '}
          Kansas State states that pest control materials are generally not required indoors, and
          Colorado State that control generally is unnecessary. That is not an absence for want of a
          specification &mdash; it is two published sources arguing against the purchase.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Sealing and moisture work are named by three sources and specified by none</strong>
          &mdash; no gap width, no material, no humidity figure &mdash; so there is nothing to rank a
          product against there either. That is the same position{' '}
          <Link href="/us/camel-crickets">our camel crickets page</Link> and{' '}
          <Link href="/us/silverfish">our silverfish page</Link> already hold.
        </p>
      </div>

      <h2 id="not-insects">Not an Insect: a Crustacean on Land</h2>
      <p>
        <strong>UC IPM states it flatly</strong>, and the family names are worth having because they
        are how the two animals are actually distinguished in the literature:{' '}
        <em>
          &ldquo;They are soil-dwelling crustaceans in the order Isopoda (called isopods).&rdquo;
        </em>{' '}
        University of Kentucky says the same in one line:{' '}
        <em>
          &ldquo;Sowbugs and Pillbugs are isopods, types of crustaceans capable of living on
          land.&rdquo;
        </em>
      </p>
      <p>
        <strong>Purdue University Extension gives the count that settles the argument:</strong>{' '}
        <em>&ldquo;Sowbugs and pillbugs are gray, with flattened bodies and 7 pairs of legs.&rdquo;</em>{' '}
        Seven pairs is fourteen legs. An insect has six.
      </p>
      <p>
        <strong>The Missouri Department of Conservation puts the family in its proper context:</strong>{' '}
        <em>
          &ldquo;There are more than 10,000 species of isopods globally; most live in the sea, and
          some live in fresh water.&rdquo;
        </em>{' '}
        The animal in your basement belongs to a group that is overwhelmingly marine.
      </p>
      <p>
        UC IPM gives the size, which is worth having before an identification:{' '}
        <em>
          &ldquo;The adult body of both isopod types is about 1/3 to 3/4 inch long with antennae that
          are about one-quarter the body length.&rdquo;
        </em>
      </p>

      <h2 id="which">Sowbug or Pillbug: the Uropod Test</h2>
      <p>
        <strong>One rolls into a ball and one cannot, and the reason is at the back end.</strong>{' '}
        University of Kentucky:{' '}
        <em>
          &ldquo;Sowbugs are distinct in that they have two prominent tail like appendages (uropods)
          and cannot roll into a ball.&rdquo;
        </em>
      </p>
      <p>
        <strong>Kansas State University gives the same test from the other side:</strong>{' '}
        <em>
          &ldquo;Sowbugs possess two small, tail-like appendages located at the end of the body;
          pillbugs do not have appendages.&rdquo;
        </em>{' '}
        So: it curls into a sphere, it is a pillbug. It cannot, and has two little tails, it is a
        sowbug.
      </p>
      <p>
        <strong>The names come from different genera</strong>, which is why the two words are not
        interchangeable. Missouri Department of Conservation:{' '}
        <em>&ldquo;Isopods in the genera Oniscus and Porcellio are called sowbugs.&rdquo;</em> The
        roly-poly proper is <em>Armadillidium vulgare</em>.
      </p>
      <p>
        Kansas State also records the classification plainly, which is the whole point of the
        section above:{' '}
        <em>
          &ldquo;Sowbugs and pillbugs are classified as crustaceans and are distributed
          worldwide.&rdquo;
        </em>
      </p>

      <h2 id="harm">What They Do and Do Not Damage</h2>
      <p>
        <strong>Three sources say plainly that they are harmless, and none disagrees.</strong>{' '}
        Colorado State University Extension:{' '}
        <em>&ldquo;They do not bite and are harmless to humans.&rdquo;</em> University of Kentucky:{' '}
        <em>
          &ldquo;While they can be found indoors, they are harmless to people and pets.&rdquo;
        </em>{' '}
        The Missouri Department of Conservation goes further than either:{' '}
        <em>
          &ldquo;It&rsquo;s hard to consider isopods pests, since they are harmless and do no damage
          when they sometimes enter buildings.&rdquo;
        </em>
      </p>
      <p>
        <strong>The one real complaint any source raises is horticultural, not structural.</strong>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;They also chew fruit, succulent plant parts, seedlings, and vegetables that touch
          damp soil.&rdquo;
        </em>{' '}
        Colorado State describes the same appetite from the other end &mdash;{' '}
        <em>
          &ldquo;Life History and Habits: Pillbugs are scavengers, primarily feeding on moist,
          decaying plant matter that they chew with their small mouthparts.&rdquo;
        </em>{' '}
        Note what that means for a reader indoors: there is nothing in a dry house for them to eat.
      </p>

      <h2 id="why-die">Why They Die Indoors</h2>
      <p>
        <strong>Because they breathe through gills, and your house is dry.</strong> Missouri
        Department of Conservation:{' '}
        <em>&ldquo;They have gills, however, which must be kept moist.&rdquo;</em>
      </p>
      <p>
        <strong>Kansas State University Extension gives the consequence in one sentence</strong>, and
        it is the most load-bearing sentence on the page:{' '}
        <em>
          &ldquo;Sowbugs and pillbugs are always found in moist environments because they cannot
          control moisture loss from their bodies.&rdquo;
        </em>{' '}
        An animal that cannot regulate its own water loss, in a heated building, is on a short clock.
      </p>
      <p>
        <strong>Colorado State puts a comparative figure on it</strong>, and the comparison is
        striking:{' '}
        <em>&ldquo;Their survival is often shorter than for millipedes and centipedes.&rdquo;</em>{' '}
        The same publication puts millipede survival indoors at a day or two &mdash; see{' '}
        <Link href="/us/millipedes">our millipedes page</Link>, which covers the animal Colorado
        State groups with this one in the same fact sheet.
      </p>

      <h2 id="meaning">What a Recurring Find Actually Means</h2>
      <p>
        <strong>An influx after wet weather is weather. A steady trickle is the building.</strong>{' '}
        Colorado State describes the first:{' '}
        <em>
          &ldquo;During some times of the year, particularly after extended wet spring weather,
          sowbugs and pillbugs may move into homes.&rdquo;
        </em>
      </p>
      <p>
        <strong>University of Kentucky draws the inference for the second, and it is the sentence
        worth acting on:</strong>{' '}
        <em>
          &ldquo;If frequently found in the home, it may signal a moisture problem or an issue with a
          sealant, window, or door that allows access.&rdquo;
        </em>
      </p>
      <p>
        Colorado State describes where they live when they are not in your house &mdash;{' '}
        <em>
          &ldquo;Sowbugs and pillbugs (roly-polys) are small, gray crustaceans usually found outdoors
          under rocks or other cover.&rdquo;
        </em>{' '}
        which is the same damp perimeter our{' '}
        <Link href="/us/earwigs">earwigs page</Link> and our{' '}
        <Link href="/us/house-centipedes">house centipedes page</Link> describe for two entirely
        different animals. None of those pages repeats this one.
      </p>

      <h2 id="control">What the Sources Say to Do</h2>
      <p>
        <strong>
          The unusual thing about this topic is that the published advice is mostly to stop
          worrying.
        </strong>{' '}
        Kansas State University Extension:{' '}
        <em>
          &ldquo;Applications of pest control materials are generally not required indoors because
          sowbugs and pillbugs will quickly dry-out and die after entering homes.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State reaches the same conclusion from its own reasoning:</strong>{' '}
        <em>
          &ldquo;Because of this and the minor annoyance they cause, control generally is
          unnecessary.&rdquo;
        </em>
      </p>
      <p>
        <strong>Where something is done, the same source points at work already described
        elsewhere on this site:</strong>{' '}
        <em>
          &ldquo;Controls effective for millipedes and centipedes also are effective for sowbugs and
          pillbugs.&rdquo;
        </em>{' '}
        That means moisture reduction, debris removal from the foundation, and sealing &mdash; set
        out on <Link href="/us/millipedes">our millipedes page</Link> and not repeated here.
      </p>

      <h2 id="not-named">Why No Product Is Named Here</h2>
      <p>
        <strong>
          This is the first page on this site where the reason is not a missing specification but a
          published recommendation against the purchase.
        </strong>{' '}
        Kansas State says indoor applications are generally not required; Colorado State says control
        generally is unnecessary. Naming a product on top of those two sentences would misreport the
        page it sits on.
      </p>
      <p>
        <strong>The sealing and moisture work has the usual second problem.</strong> Kentucky, Kansas
        State and Colorado State all point at sealants, doors, windows and moisture, and not one of
        them publishes a gap width, a material or a humidity figure. There is a supported practice
        and no product criterion, which is where{' '}
        <Link href="/us/camel-crickets">our camel crickets page</Link> already landed on
        weather-stripping and{' '}
        <Link href="/us/silverfish">our silverfish page</Link> on dehumidifiers. Three pages
        agreeing about that is the point; three pages disagreeing would be the defect.
      </p>
      <p>
        <strong>Kansas State does name trade products, and they are for a different problem.</strong>{' '}
        Its named materials are for protecting plants outdoors, not for an isopod on a basement
        floor, and no source read here offers a specification to rank them by. A reader whose
        complaint is chewed seedlings has a garden question; this page is about the ones indoors.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
