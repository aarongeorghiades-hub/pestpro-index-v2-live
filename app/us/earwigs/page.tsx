import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { EARWIGS_NAV, EARWIGS_HOME } from '../components/earwigsNav';

const URL = 'https://pestproindex.com/us/earwigs';
const TITLE = 'Earwigs: Can Those Pincers Actually Hurt You?';
const DESCRIPTION =
  'Six sources answer the pincer question, and three disagree about what the pincers are for. Then the mulch and the door sill that put earwigs indoors.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Earwigs', item: URL }],
};

// ---------------------------------------------------------------------------
// ZERO PRODUCT CARDS, AND THAT IS A MEASURED RESULT RATHER THAN AN OMISSION.
//
//   TRAPS            Four sources describe trapping and EVERY DEVICE THEY
//                    DESCRIBE IS HOMEMADE — rolled damp newspaper, a shallow can
//                    holding half an inch of oil, two grooved boards tied
//                    together. There is nothing to buy, so nothing is carded.
//                    Nevada's one sentence on sticky traps carries no
//                    specification of any kind: no criterion, no card (Law 139).
//
//   DIATOMACEOUS     ZERO MENTIONS ACROSS ALL SIX FETCHED SOURCES. Not "weakly
//   EARTH            supported" — absent. A card would have to rest on
//                    something other than these publications, and nothing else
//                    was read.
//
//   EXCLUSION        The sources name the ENTRY POINTS — sill, door, window —
//   MATERIALS        but publish no material, dimension or product standard for
//                    sealing them. A vocabulary, not a criterion (Law 139).
//
// The page says all three out loud in the 'not-named' section rather than
// leaving a reader to assume the sources recommend nothing.
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'Earwigs, HYG-2068, by E. Andon and Grace Whitmore — the source of the harmless-to-people statement, the seedling and specialty-crop damage statement, the mulch-layer reduction, and the aphid and scale advice',
    publisher: 'Ohio State University Extension (Ohioline)',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://ohioline.osu.edu/factsheet/HYG-2068',
  },
  {
    label:
      'European Earwigs — the source of the ear superstition and its flat contradiction, the forceps-as-protective-weapon statement that DISAGREES with Nevada, the nocturnal habit, the dark-moist-crevice statement, the four-or-five-household-species figure and the foul odor',
    publisher: 'Penn State Extension',
    date: 'Carries "Updated: June 24, 2026"; fetched 3 September 2026',
    href: 'https://extension.psu.edu/european-earwigs',
  },
  {
    label:
      'A Northern Nevada Homeowner’s Guide to Identifying and Managing Earwigs — the source of the pincers-are-for-mating statement that DISAGREES with Penn State and Maine, the mandibles statement that is the real answer to "can it pinch me", the groundcover and mulch refuge advice, the oil trap, the one sticky-trap sentence, and the natural predators',
    publisher: 'University of Nevada, Reno Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.unr.edu/publication.aspx?PubID=4648',
  },
  {
    label:
      'European Earwigs — the source of the debris-clearing instruction tied to points of entry, the rolled-newspaper trap, and the statement that the main food of earwigs is insects',
    publisher: 'Colorado State University Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.colostate.edu/resource/european-earwigs/',
  },
  {
    label:
      'Earwigs — the source of the pincers-for-defense-and-prey statement, the no-damage-to-homes statement, the foundation-and-sill entry description, the grooved-board trap, the dusk-to-morning trapping schedule, and the compost and mulch statement',
    publisher: 'University of Maine Cooperative Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.umaine.edu/ipm/ipddl/publications/5017e/',
  },
  {
    label:
      'Earwigs in the Landscape — the source of the order-level description used for identification, and of the statement that some earwigs are predators while others damage plants',
    publisher: 'NC State Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://content.ces.ncsu.edu/earwigs-2',
  },
];

const faqs: Faq[] = [
  {
    question: 'Can an earwig hurt you with its pincers?',
    answer:
      'Ohio State University Extension answers it directly: despite their intimidating appearance, earwigs are harmless to people, and contrary to their eye-catching name they do not seek to hide inside your ears. University of Nevada, Reno adds the practical detail, which is that the part that can actually nip you is not the pincers at all — earwigs can pinch with their mandibles, their jaws, if handled, but are not known to be aggressive or harmful to humans. University of Maine states that they are not known to cause any damage to homes or their contents, but that they are definitely a nuisance, especially when they turn up in unusual places. No source read for this page describes an earwig injuring a person.',
  },
  {
    question: 'Do earwigs crawl into your ears?',
    answer:
      'No, and two of the sources say so in as many words. Penn State Extension explains where the idea came from — the name means "ear creature" and originated in a superstition that the insects crawl into the ears of sleeping people, with some believing the insect could then bore into the brain — and then states plainly that these insects do not crawl into the human ear. Colorado State University Extension gives the same origin, attributing the name to the superstition that these insects use their cerci to burrow into people’s ears. Neither source treats it as anything but folklore.',
  },
  {
    question: 'What are the pincers actually for? The sources disagree.',
    answer:
      'They do, and this page reports the disagreement rather than picking the more convenient answer. Penn State Extension states that earwigs use their forceps mainly as protective weapons, but that they also use them to capture prey. University of Maine agrees with that reading: the pincers are used for defense and also to catch other insects on which earwigs sometimes feed. University of Nevada, Reno states something different — that the pincers are used primarily for mating. Two functions against one, from three extension services, and no source read here reconciles them. What all three do agree on is that the pincers are not a hazard to a person.',
  },
  {
    question: 'Why are earwigs suddenly inside my house?',
    answer:
      'Because the outside became less comfortable than the inside, and the building let them in. Penn State Extension describes the habit: earwigs are active at night and hide during the day in cracks and crevices, and the insect hides in any dark, moist crevice such as balled plants and boards. University of Maine describes the route in — generally they do not actively infest homes, but as they go up the foundations, any open area around the sill, door or window that will allow them to enter becomes an invitation to move in. That is the whole mechanism: a daytime shelter that happens to be your wall, and a gap at the bottom of it.',
  },
  {
    question: 'Do I need to spray?',
    answer:
      'The sources put habitat first and chemicals last, and two of them make the habitat step specific. Colorado State University Extension says to clear the area next to the home of sheltering debris, including mulches, used by earwigs, particularly near likely points of entry such as doorways and window wells. Ohio State University Extension says that reducing mulch layers and landscape structures can aid in eliminating earwig shelters. University of Nevada, Reno says to remove refuge sites such as creeping groundcovers or thick mulches near vegetable gardens. All three are aimed at the same thing — the daytime hiding place — and none of them requires buying anything.',
  },
  {
    question: 'Should I be killing them at all?',
    answer:
      'Three sources give a reason to hesitate before treating a garden population. Colorado State University Extension states that the main food of earwigs is insects, including plant pests such as aphids. NC State Extension puts both sides in one sentence: some earwigs are predators, feeding on aphids, whereas others feed on living plants and may become pests in greenhouses and on vegetable, fruit, ornamental, forage and field crops. Ohio State University Extension turns it into a control step rather than a sentiment — use plants that are less vulnerable to aphid and scale infestations, or treat those insects when discovered, since European earwigs thrive by consuming soft-bodied insects. Take the aphids away and the earwigs have less reason to be there.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'pincers', title: 'Can They Hurt You? No' },
  { id: 'disagreement', title: 'What the Pincers Are For: Two Answers' },
  { id: 'identification', title: 'What You Are Looking At' },
  { id: 'indoors', title: 'Why They Are Inside' },
  { id: 'harborage', title: 'Moisture and Harborage: the Root Cause' },
  { id: 'outdoor', title: 'Reducing the Outdoor Population' },
  { id: 'trapping', title: 'Trapping, and Why Nothing Here Is for Sale' },
  { id: 'beneficial', title: 'The Case for Leaving Some Alone' },
  { id: 'not-named', title: 'What Is Not Named Here, and Why' },
  { id: 'professional', title: 'When to Call a Professional' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function EarwigsPage() {
  return (
    <UsPageLayout
      title="Earwigs"
      subtitle="The pincers look like the problem and they are not. Six extension services answer the question you actually came with, then disagree with each other about what the pincers are for. After that: the mulch, the door sill, and why every trap the sources describe is one you make yourself."
      lastUpdated="September 2026"
      readingTime="9 min read"
      homeHref={EARWIGS_HOME}
      clusterNav={EARWIGS_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>The question almost everybody arrives with is whether the thing can hurt them.</strong>{' '}
        It is answered in the next section, from sources, before anything else on this page. The
        short version is no, and the reason the answer needs a section at all is that the folklore
        is older and better known than the entomology.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>No product is named on this page, and that is a measured result.</strong> Six
          publications were read. Four of them describe trapping, and{' '}
          <strong>every trap they describe is one you make</strong> — rolled damp newspaper, a
          shallow can of oil, two grooved boards. There is nothing to buy.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Diatomaceous earth is not mentioned by any of the six.</strong> Not weakly
          supported — absent. And while the sources name the entry points a reader should close,
          none publishes a material or dimension for closing them, so there is nothing here to rank
          a sealing product against. The reasons are set out in full further down rather than left
          as an empty section.
        </p>
      </div>

      <h2 id="pincers">Can They Hurt You? No</h2>
      <p>
        <strong>Ohio State University Extension answers it in its opening sentence:</strong>{' '}
        <em>
          &ldquo;Despite their intimidating appearance, earwigs are harmless to people and, contrary
          to their eye-catching name, they do not seek to hide inside your ears.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          University of Nevada, Reno adds the detail that actually answers whether it can nip you
        </strong>
        , and the answer is that the part which can is not the part you are looking at:{' '}
        <em>
          &ldquo;They can pinch with their mandibles (jaws) if handled but are not known to be
          aggressive or harmful to humans.&rdquo;
        </em>{' '}
        The mandibles are the jaws at the front, not the forceps at the back.
      </p>
      <p>
        <strong>And the building is not at risk either.</strong> University of Maine:{' '}
        <em>
          &ldquo;They are not known to cause any damage to homes or their contents, but they are
          definitely a nuisance, especially when they turn up in unusual places.&rdquo;
        </em>
      </p>
      <p>
        <strong>On the ear itself, two sources are explicit.</strong> Penn State Extension explains
        the origin of the name and then closes it:{' '}
        <em>&ldquo;Actually, these insects do not crawl into the human ear.&rdquo;</em> Colorado
        State University Extension gives the same origin &mdash;{' '}
        <em>
          &ldquo;The name earwig originates from the superstition that these insects use their cerci
          to burrow into people&rsquo;s ears.&rdquo;
        </em>{' '}
        A superstition, named as one, by the source.
      </p>
      <p>
        <strong>What they can damage is plants.</strong> Ohio State:{' '}
        <em>
          &ldquo;However, these insects can cause serious damage to seedlings and chew large holes
          into specialty crops, flowers, and grain.&rdquo;
        </em>{' '}
        If you have a problem worth acting on, it is almost certainly in the garden rather than in
        the house.
      </p>

      <h2 id="disagreement">What the Pincers Are For: Two Answers</h2>
      <p>
        <strong>
          Three extension services describe the function of the forceps and they do not agree. This
          page reports both positions rather than choosing.
        </strong>
      </p>
      <ul>
        <li>
          <strong>Defense and prey capture.</strong> Penn State Extension:{' '}
          <em>
            &ldquo;Earwigs use their forceps mainly as protective weapons, but they also use them to
            capture prey.&rdquo;
          </em>{' '}
          University of Maine says the same thing independently:{' '}
          <em>
            &ldquo;The pincers are used for defense and also to catch other insects on which earwigs
            sometimes feed.&rdquo;
          </em>
        </li>
        <li>
          <strong>Mating.</strong> University of Nevada, Reno:{' '}
          <em>&ldquo;Their pincers are used primarily for mating.&rdquo;</em>
        </li>
      </ul>
      <p>
        Two of three give one function and the third gives another, and no source read for this page
        reconciles them. It is recorded here because a reader comparing pages will find both and is
        entitled to know the difference is in the sources rather than in the reading.{' '}
        <strong>
          What all three agree on is the part that matters to a person: the forceps are not a hazard
          to you.
        </strong>
      </p>

      <h2 id="identification">What You Are Looking At</h2>
      <p>
        NC State Extension gives the description at order level:{' '}
        <em>
          &ldquo;Earwigs (order Dermaptera) are red-brown to black, elongate, flattened insects
          recognized by their forcep-like appendages (cerci) on the end of the abdomen.&rdquo;
        </em>
      </p>
      <p>
        <strong>Most earwigs are not a household matter at all.</strong> Penn State Extension:{' '}
        <em>&ldquo;Only four or five species are common pests which invade homes.&rdquo;</em> Its
        fact sheet, like Colorado&rsquo;s and Nevada&rsquo;s, is about the European earwig,{' '}
        <em>Forficula auricularia</em>, which is the one that turns up indoors.
      </p>
      <p>
        <strong>One more identifying trait, and it is the one people remember.</strong> Penn State:{' '}
        <em>&ldquo;If disturbed, these insects have a foul odor.&rdquo;</em>
      </p>

      <h2 id="indoors">Why They Are Inside</h2>
      <p>
        <strong>An earwig indoors is usually looking for somewhere dark to spend the day</strong>,
        not for your food or your building materials. Penn State Extension:{' '}
        <em>&ldquo;Earwigs are active at night and hide during the day in cracks and crevices.&rdquo;</em>{' '}
        and{' '}
        <em>
          &ldquo;This insect hides in any dark, moist crevice, such as balled plants and boards.&rdquo;
        </em>
      </p>
      <p>
        <strong>University of Maine describes the route in, and it is the whole mechanism:</strong>{' '}
        <em>
          &ldquo;Generally, they do not actively infest homes, but as they go up the foundations, any
          open area around the sill, door or window that will allow them to enter becomes an
          invitation to move in.&rdquo;
        </em>{' '}
        They climb the foundation from the shelter beside it and come in at the first gap. That is
        why the work below is aimed at the strip of ground next to the wall rather than at the room.
      </p>
      <p>
        If the insect you are finding is not this one, our{' '}
        <Link href="/us/silverfish">silverfish and firebrats page</Link> covers the flat, fast,
        tapered insect of damp bathrooms and basements, and our{' '}
        <Link href="/us/camel-crickets">camel crickets page</Link> covers the humpbacked jumping one
        of crawl spaces. All three share a root cause and none of the three repeats the others.
      </p>

      <h2 id="harborage">Moisture and Harborage: the Root Cause</h2>
      <p>
        <strong>
          Every source that gives control advice puts the daytime hiding place first, and the
          hiding place is usually mulch.
        </strong>{' '}
        University of Maine explains why mulch in particular:{' '}
        <em>
          &ldquo;Because earwigs also feed on decomposing organic matter, compost and mulch may
          provide food and shelter.&rdquo;
        </em>{' '}
        It is shelter and a meal in the same place.
      </p>
      <p>
        <strong>Colorado State University Extension makes the instruction spatial</strong>, which is
        what makes it useful:{' '}
        <em>
          &ldquo;Clear the area next to the home of sheltering debris (including mulches) used by
          earwigs, particularly near likely points of entry (doorways, window wells).&rdquo;
        </em>{' '}
        Not the whole garden &mdash; the band of ground beside the wall, and hardest of all beside
        the doors.
      </p>

      <h2 id="outdoor">Reducing the Outdoor Population</h2>
      <p>Three sources, three habitat instructions, and they stack rather than compete.</p>
      <ul>
        <li>
          <strong>Ohio State University Extension:</strong>{' '}
          <em>
            &ldquo;Reducing mulch layers and landscape structures can aid in eliminating earwig
            shelters and reduce earwig breeding in soil chambers and spaces beneath landscape stones
            and timbers.&rdquo;
          </em>{' '}
          Note that this one names <em>breeding</em>, not only shelter.
        </li>
        <li>
          <strong>University of Nevada, Reno:</strong>{' '}
          <em>
            &ldquo;Remove refuge sites such as creeping groundcovers or thick mulches near vegetable
            gardens.&rdquo;
          </em>
        </li>
        <li>
          <strong>Ohio State again, and this is the indirect one:</strong>{' '}
          <em>
            &ldquo;Use plants that are less vulnerable to aphid and scale infestations, or treat
            these insects when they are discovered, since European earwigs thrive by consuming
            soft-bodied insects.&rdquo;
          </em>{' '}
          Remove the food supply rather than the insect.
        </li>
      </ul>

      <h2 id="trapping">Trapping, and Why Nothing Here Is for Sale</h2>
      <p>
        <strong>
          Four sources describe trapping earwigs. Every device they describe is one you make
          yourself, out of something you already have.
        </strong>{' '}
        That is not an editorial preference; it is what the publications say.
      </p>
      <ul>
        <li>
          <strong>Colorado State University Extension:</strong>{' '}
          <em>&ldquo;Earwigs can be trapped in rolled-up, moistened newspapers.&rdquo;</em>
        </li>
        <li>
          <strong>University of Nevada, Reno:</strong>{' '}
          <em>
            &ldquo;Monitoring traps can be created, which consist of shallow cans or containers
            placed at ground level and filled with a half inch of oil.&rdquo;
          </em>
        </li>
        <li>
          <strong>University of Maine:</strong>{' '}
          <em>
            &ldquo;Traps can be made from two pieces of grooved wood placed together; these can be
            leaned against a tree or the foundation.&rdquo;
          </em>
        </li>
      </ul>
      <p>
        <strong>And the timing is published, which matters more than the trap.</strong> University
        of Maine:{' '}
        <em>&ldquo;Place traps in earwig areas at dusk and empty traps the following morning.&rdquo;</em>{' '}
        The insect is nocturnal, so a trap set in the morning and checked at night is set against
        the animal&rsquo;s schedule rather than with it.
      </p>

      <h2 id="beneficial">The Case for Leaving Some Alone</h2>
      <p>
        <strong>Two sources describe the earwig as a predator of garden pests</strong>, and one puts
        both sides of its character in a single sentence.
      </p>
      <p>
        Colorado State University Extension:{' '}
        <em>
          &ldquo;However, the main food of earwigs is insects, including plant pests such as
          aphids.&rdquo;
        </em>{' '}
        NC State Extension:{' '}
        <em>
          &ldquo;Some earwigs are predators, feeding on aphids, whereas others feed on living plants
          and may become pests in greenhouses and on vegetable, fruit, ornamental, forage and field
          crops.&rdquo;
        </em>
      </p>
      <p>
        <strong>They also have natural enemies already at work.</strong> University of Nevada, Reno:{' '}
        <em>&ldquo;Spiders, centipedes, poultry and fowl often feed on earwigs.&rdquo;</em> A garden
        population is not usually a problem to be eliminated, and none of these sources asks a reader
        to eliminate it.
      </p>

      <h2 id="not-named">What Is Not Named Here, and Why</h2>
      <p>
        <strong>The traps are all homemade, so there is no trap to card.</strong> Every device the
        six publications describe is made from newspaper, a can of oil, or two boards. Naming a
        purchasable trap would mean ranking it against a specification none of these sources
        publishes.
      </p>
      <p>
        <strong>Diatomaceous earth appears in none of the six.</strong> That is worth stating
        precisely: it is not that the sources rate it poorly, it is that they do not mention it at
        all. A card for it would have to rest on something other than the publications this page was
        built from, and nothing else was read.
      </p>
      <p>
        <strong>
          Nevada gives sticky traps a single sentence and no specification:
        </strong>{' '}
        <em>&ldquo;Sticky traps can also be used around sheltering areas.&rdquo;</em> That is a
        practice, not a criterion. There is nothing in it to measure a product against, so nothing
        is named.
      </p>
      <p>
        <strong>The same applies to sealing.</strong> The sources name the openings that matter
        &mdash; the sill, the door, the window, in Maine&rsquo;s sentence above &mdash; but none of
        them publishes a material, a gap width or a product standard for closing them. The advice is
        real and the ranking criterion is absent.
      </p>

      <h2 id="professional">When to Call a Professional</h2>
      <p>
        <strong>
          The honest answer is that none of these six sources describes an earwig problem as one
          needing a professional
        </strong>
        , and this page will not invent a threshold they did not publish. What they describe is a
        habitat problem next to a building, addressed by clearing shelter and closing gaps, with
        trapping as monitoring.
      </p>
      <p>
        Ohio State does note that insecticide may be needed to eliminate large populations, and both
        Ohio State and Colorado State describe insecticide use as something applied at points of
        entry and outdoors rather than broadcast indoors.{' '}
        <strong>
          No product, rate or application method is given on this page, because a reader who has
          reached that point is choosing between a labeled consumer product and a licensed
          applicator, and that choice depends on the label and the state rather than on us.
        </strong>{' '}
        Our{' '}
        <Link href="/us/choosing-a-pest-control-service">choosing a pest control service page</Link>{' '}
        covers what to check before hiring.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
