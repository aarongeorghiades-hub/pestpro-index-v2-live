import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { ANTS_NAV, ANTS_HOME } from '../components/antsNav';

const URL = 'https://pestproindex.com/us/ants';
const TITLE = 'Household Ants: Which Bait Reaches the Nest';
const DESCRIPTION =
  'Odorous house, pavement, carpenter and pharaoh ants, kept separate. Which bait reaches each species\' nest, from five extension publications, 1996 to 2024.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'PestPro Index' },
  };
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Household Ants', item: URL }],
};

// ---------------------------------------------------------------------------
// SCOPE: FOUR ANTS. Odorous house, pavement, carpenter and pharaoh. Imported fire
// ants are a different page and this one does not re-litigate them.
//
// THE FIRE ANT HAZARD IS ACUTE IN ONE DOCUMENT AND NOWHERE ELSE. UC IPM's ants page
// carries fourteen fire ant mentions, and its fire ant material sits BETWEEN the
// odorous house ant and pavement ant entries in the same species table. Nothing is
// carried across that boundary. A figure inside another species' block is not this
// page's figure (S53-G). The two fire ant hits in each USU document are navigation
// chrome in a related-fact-sheets tail, chased and confirmed as such, not content.
//
// EVERY CLAIM CARRIES ITS SPECIES, AND THE FOUR ARE NOT EQUALLY DOCUMENTED. Odorous
// house ants and pavement ants each have a dedicated USU fact sheet. Carpenter ants
// and pharaoh ants have labeled blocks inside multi-species documents and no
// dedicated source in this pack. The page says so rather than letting depth of
// coverage read as depth of evidence.
//
// CARPENTER ANTS ARE THE S53-I LABELING CASE, NOT THE DISTANCE CASE. Colorado
// State's solid-bait sentence names carpenter ants inside the sentence and draws its
// force from the contrast with other ants. Splitting it for distance would destroy
// the criterion it states.
//
// THE SCIENTIFIC NAME OF THE PAVEMENT ANT IS A LIVE DISAGREEMENT INSIDE THE PACK.
// UC IPM's 10/2012 page gives Tetramorium caespitum. USU's June 2020 page states the
// name has been revised to T. immigrans and cites the genetic work. Both are rendered
// with their dates and neither is silently preferred (Law 145, Law 146).
//
// SPRAY VERSUS BAIT IS RENDERED AS FOUR POSITIONS, NOT THREE. The round brief named
// three — UC IPM, Colorado State, USU. Measurement found a FOURTH stated position in
// Penn State's document, which tells a homeowner to avoid sprays indoors and to avoid
// perimeter sprays and granules outdoors. It is attributed and named alongside the
// other three. Penn State sitting nearer UC IPM does not corroborate UC IPM.
//
// CARDS: four, all AC1. Prepackaged liquid bait station or stake, which is the form
// UC IPM names for residential users.
//   TWO TWIN PAIRS WERE REFUSED (S53-H). B00E4GACB8/B0B3SJ8WTT and
//   B07Q41N8K1/B07DXB3BC2 each share a manufacturer and a product family but their
//   bullets are not identical, their pack quantities differ, and no listing states
//   the difference is cosmetic. One of each pair is named; the other appears nowhere.
//
// AC2 IS A FITNESS RULE AND IT IS STATED EVEN THOUGH IT EXCLUDES NOTHING TODAY. All
// four cards are liquid, so none of them is caught by Colorado State's finding that
// carpenter ants will not visit most solid baits. The caveat is on the page so that
// no solid bait a reader finds elsewhere can be read as covered by it.
// ---------------------------------------------------------------------------

type ProductRecord = { asin: string; cardName: string; whatItDoes: string[] };

const products: ProductRecord[] = [
  {
    asin: 'B00E4GACB8',
    cardName: 'TERRO Liquid Ant Killer Bait Stations, 12-Pack, Indoor Ant Traps, T300B',
    whatItDoes: [
      'A prepackaged liquid bait station, which is one of the two forms UC IPM names for residential users. Its own text describes ready-to-use stations requiring no setup',
      'The only card on this page whose own feature text names two of the four ants covered here. It lists odorous house and pavement ants among the ants it targets, alongside four ants this page does not cover',
      'States a borax-based formula that worker ants carry back to the colony, which is the mechanism every source on this page describes',
      'Its own text puts complete control at up to two to four weeks depending on infestation size, which sits alongside the source timings quoted above these cards rather than replacing them',
      '⚠ Amazon search results rendered this same ASIN under two different model numbers, T300B and T300-2. The title fetched from the product page itself gives T300B, and that is what is printed here. Check the ASIN, not the model number',
    ],
  },
  {
    asin: 'B07Q41N8K1',
    cardName: 'TERRO Multi-Surface Liquid Ant Baits, 8-Pack, Indoor Bait Stations for Home',
    whatItDoes: [
      'A prepackaged liquid bait station in the same form as the card above, supplied as eight pre-filled stations by its own count',
      'Its own feature text names pavement ants, one of the four ants covered here, and ghost ants, which this page does not cover',
      'Carries adhesive strips so a station can sit on a wall or under a cabinet rather than on the floor. The listing gives keeping them away from pets and children as the reason',
      '⚠ This ASIN is served under a URL containing the model number T334B, but its own title carries no model number, and a different ASIN is the product actually titled T334B. The URL is not the identity. We name this product by its ASIN',
    ],
  },
  {
    asin: 'B08BJRMVGZ',
    cardName: 'Terro T324B 4-Pack Liquid Ant Baits, Orange',
    whatItDoes: [
      'A prepackaged liquid bait station, in the smallest count named on this page at four',
      'The shortest listing of the four, at 173 characters of feature text. Its own text states ready-to-use bait stations and that it contains borax',
      'Borax is one of the borate active ingredients UC IPM lists for ant baits, quoted above these cards',
      'Its own text states a design that prevents bait from drying out. Two sources on this page identify drying out as the thing that stops a liquid bait working, so this is a claim worth reading against them',
      'Its own text claims it kills all common household ants. It names no species at all, so there is nothing in it to check that claim against, and this page does not repeat it',
    ],
  },
  {
    asin: 'B0C3WM5G7H',
    cardName: 'TERRO Outdoor Liquid Ant Bait Stakes, 12-Pack, Ready-to-Use Ant Killer Trap',
    whatItDoes: [
      'A stake rather than a station, which is the other form UC IPM names for residential users. Its own text describes pushing it into the ground where ant activity is seen',
      'The only outdoor product named here, and UC IPM is explicit that outdoors is where baits mainly belong. That instruction is quoted in full above these cards',
      'A see-through station body, which its own text offers for checking whether bait is being taken. UC IPM asks a reader to reposition or change bait if ants are not taking it, so being able to see the level is directly useful',
      '⚠ Its own feature text names four ants and NOT ONE of them is among the four this page covers. It names acrobat, crazy, ghost and little black ants. It is named here for its form, which is what the criterion tests, and not for any species claim',
    ],
  },
];

const tocItems = [
  { id: 'nest', title: 'The Ants You See Are Not the Colony' },
  { id: 'four', title: 'The Four Ants on This Page' },
  { id: 'carpenter', title: 'Carpenter Ants Need Different Tactics' },
  { id: 'fire', title: 'If the Ants Sting, This Is the Wrong Page' },
  { id: 'baits', title: 'Bait Stations and Stakes' },
  { id: 'first', title: 'What Every Source Puts First' },
  { id: 'spread', title: 'Four Sources, Four Positions on Spraying' },
  { id: 'limits', title: 'What the Sources Say About Baits That Do Not Work' },
  { id: 'name', title: 'Two Sources, Two Scientific Names for One Ant' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'I killed the ants I could see and more came back. Why?',
    answer:
      'Because on every source here the ants on your counter are foragers, and the colony is somewhere else. Colorado State University Extension, in a fact sheet published in November 1996 and reviewed in August 2025, states that most ants found indoors in Colorado are merely foragers, seeking food or water in a home but returning to colonies they have established outdoors. Utah State University Extension states that pavement ants have been found foraging up to 30 feet away from their colony, so the source of an invasion can vary from site to site. UC IPM, on a page its own site dates to 10/2012, states that spraying around the foundation will not provide permanent control because it kills only foraging ants without killing the colony and the queens, and that typically the foragers represent only a small proportion of the colony. Killing what you can see is, on these sources, killing the small visible part.',
  },
  {
    question: 'Are all four of these ants the same problem?',
    answer:
      'No, and one of them is separated for a reason. Penn State Extension, in a document updated on 5 August 2024, states that the carpenter ant can be destructive to homes and requires different tactics from household nuisance ants. Colorado State University Extension states that carpenter ants nest in wood but feed primarily on dead insects and honeydew, and that carpenter ants found in homes are almost always foragers that will return to an outdoor nest in the yard. The other three ants on this page are not described by any source here as damaging the structure they are found in. Pharaoh ants are separated for a different reason: Colorado State states they are adapted to nesting in buildings, so unlike the other three the nest itself may be inside the house.',
  },
  {
    question: 'Should I spray around the outside of the house?',
    answer:
      'The four sources on this page do not agree, and this page does not pick between them. UC IPM states that baits are a key tool for managing ants and the only type of insecticide recommended in most situations, and that spraying around the foundation will not provide permanent control. Penn State Extension advises avoiding perimeter sprays and granules around the home for ants, on the grounds that sprays leave residues and may kill many other small creatures besides ants. Colorado State University Extension takes a different line, describing perimeter treatments as an ordinary option and stating that an insecticide barrier maintained around the building perimeter can inhibit much of the activity of ants coming in from outdoor colonies. Utah State University Extension adds a specific mechanical risk rather than a verdict: that insecticide treatments splitting an exterior and interior foraging trail, using repellent insecticides as barrier applications, may create additional problems inside the structure as ants are cut off from their nests. Four positions, all reported here with their sources named.',
  },
  {
    question: 'The bait is out and nothing is happening. Is it broken?',
    answer:
      'Two of the sources say to give it time and then change something. UC IPM states that if ants are not taking the bait, reposition the bait stations or try a different bait product, and that it can take 5 to 10 days to see fewer ants. Colorado State University Extension states that ant baits are slow-acting and do not kill ants immediately, and that effects of ant baiting usually start to become apparent within a week or two. The same source gives a specific failure mode: baits often become unattractive when they dry out, which it describes as a common problem in the arid climate of Colorado. It also states that removing sources of food and water will reduce visitation by ants and help to make baits used for ant control more effective, so competing food in the kitchen is one reason a bait sits untouched.',
  },
  {
    question: 'Can I use an ant bait on carpenter ants?',
    answer:
      'Not any bait. Colorado State University Extension states that carpenter ants are one group of ants that will not visit most solid ant baits but will feed at some liquid or gel sugar-based baits. On that source, a solid bait is not a weaker option against a carpenter ant, it is one the ant does not visit. Every product named on this page is a liquid, which is the form that sentence permits, but not one of those four listings names carpenter ants in its own text, so nothing here is evidence that any particular one of them works on that ant.',
  },
];

const sources: Source[] = [
  {
    label:
      'Ants in the Home — the source of the forager statement, the pharaoh ant and odorous house ant species blocks, the carpenter ant material, the solid-bait fitness sentence, the bait drying statement and the perimeter treatment position. It is a multi-species document also covering field ants and cornfield ants, and only the material for the four ants named on this page is used. It contains ZERO mentions of fire ants, which makes it the cleanest source in this pack for the present scope',
    publisher: 'Colorado State University Extension',
    date: 'Renders TWO dates and both are given wherever it is quoted: Published November 1996, Reviewed August 2025. A thirty-year-old document reviewed last year is not new data, and the review date is not a substitute for the publication date',
    href: 'https://extension.colostate.edu/resource/ants-in-the-home/',
  },
  {
    label:
      'Odorous House Ants — the source of the no-bite-and-no-sting statement, the varied-diet caveat on baiting, the foraging trail distances, the budding material and the two statements about repellent insecticides splitting a nest or a trail. A single-species document',
    publisher: 'Utah State University Extension',
    date: 'Renders October 2019. An October 2018 date sits inside a commented-out author block and does not render, so it is not cited. The page also carries a structured-data publication stamp of 21 December 2023 that likewise does not render. Fetched 29 August 2026',
    href: 'https://extension.usu.edu/planthealth/research/odorous-house-ant',
  },
  {
    label:
      'Pavement Ants — the source of the 30-foot foraging distance, the single-queen and single-worker-size statements, the food preference, the retracted stinger, the excavated dirt mound and the revised scientific name. A single-species document',
    publisher: 'Utah State University Extension',
    date: 'Renders June 2020. The same commented-out October 2018 author block appears here and likewise does not render, so it is not cited. Fetched 29 August 2026',
    href: 'https://extension.usu.edu/planthealth/research/pavement-ants',
  },
  {
    label:
      'Got Ants? Eliminate them with IPM. — the source of the two size ranges, the different-tactics statement about carpenter ants, the enclosed tamper-resistant bait instruction, the active ingredient list and both spray avoidance positions',
    publisher: 'Penn State Extension',
    date: 'Renders Updated: August 5, 2024. No separate publication date renders. Fetched 29 August 2026',
    href: 'https://extension.psu.edu/got-ants-eliminate-them-with-ipm',
  },
  {
    label:
      'Pest Notes: Ants — the source of the baits-only position, the two residential bait forms, the timing and repositioning instruction, the bait attractant chemistry, the pharaoh ant nesting and food preference entries and the foundation spraying position. It is a multi-species document covering about a dozen ants including two fire ants, and its fire ant material sits between the odorous house ant and pavement ant entries in the same table. None of it is used here. Its species counts and its named ants are California figures and are not carried outside that state',
    publisher: 'UC Statewide IPM Program',
    date: 'Renders one date only, an update stamp of 10/2012, making it the oldest current revision in this pack. A publication date of 25 January 2022 exists in the page markup but sits inside an HTML comment and does not render, so it is not cited. Fetched 29 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/ants/',
  },
];

export default function AntsPage() {
  return (
    <UsPageLayout
      title="Household Ants"
      subtitle="Four ants that come indoors for food and water while the colony sits somewhere you cannot see it. Every figure here carries the species it belongs to and the document it came from, because the five publications behind this page cover a dozen ants between them."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={ANTS_HOME}
      clusterNav={ANTS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Quotation marks on this page mark a source&rsquo;s own words and nothing else. A term being
        defined is set in <em>italics</em> instead, so the marks keep one meaning throughout.
      </p>
      <p>
        <strong>This page does not treat every ant as a target.</strong> UC IPM, on a page its own
        site dates to 10/2012, opens with the other side of it:{' '}
        <em>
          &ldquo;Although ants are annoying when they come indoors, they can be beneficial by feeding
          on fleas, termites, and other pests in the garden.&rdquo;
        </em>{' '}
        The same source, in its management section:{' '}
        <em>
          &ldquo;It is unrealistic and impractical to attempt to totally eliminate ants from an
          outdoor area.&rdquo;
        </em>{' '}
        It asks a reader to focus instead on excluding them from buildings.
      </p>

      <h2 id="nest">The Ants You See Are Not the Colony</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-300 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          This is the one idea the whole page rests on, and all five sources state a version of it.
          What crosses your floor is a forager. The colony it feeds is somewhere else, and on three
          of these four ants that somewhere is outdoors.
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>
            Colorado State University Extension, in a fact sheet published November 1996 and reviewed
            August 2025:
          </strong>{' '}
          <em>
            &ldquo;Most ants found indoors in Colorado are merely foragers, seeking food or water in
            a home but returning to colonies they have established outdoors.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>The same source, on the exception, and it names all three of the ants involved:</strong>{' '}
          <em>
            &ldquo;This ability to nest indoors is most often associated with pharaoh ants, but some
            colonies of pavement ants and carpenter ants may also establish within a building.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>UC IPM, on how little of a colony you are looking at:</strong>{' '}
          <em>
            &ldquo;Spraying around the foundation won&rsquo;t provide permanent control, because it
            kills only foraging ants without killing the colony and the queens. Typically the foragers
            represent only a small proportion of the colony.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>Utah State University Extension, on how far that can reach, for pavement ants:</strong>{' '}
          <em>
            &ldquo;They have been found foraging up to 30 feet away from their colony, so the source
            of an invasion can vary from site to site.&rdquo;
          </em>{' '}
          <strong>And for odorous house ants, in a different document:</strong>{' '}
          <em>
            &ldquo;Foraging trails can vary in length, but often range between 33 and 157 feet.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-blue-900">
          Two figures, two species, two documents. They are not interchangeable and neither is a
          figure for ants in general.
        </p>
      </div>
      <p>
        <strong>Penn State Extension</strong>, in a document updated on 5 August 2024, describes the
        route in one sentence:{' '}
        <em>
          &ldquo;Nuisance ants enter the home by following a chemical trail to the food found there
          by a nestmate.&rdquo;
        </em>{' '}
        <strong>Colorado State</strong> gives the practical consequence, which is why wiping a
        surface is on every source&rsquo;s list before any product is: if ants have been foraging in
        a home, it asks a reader to wash down counters or floors with a household cleaner to
        eliminate the odor trails the ants have established.
      </p>

      <h2 id="four">The Four Ants on This Page</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          They are not equally documented, and that is worth knowing before you read the sections
          below.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          Odorous house ants and pavement ants each have a dedicated Utah State University fact
          sheet running to tens of thousands of words. Carpenter ants and pharaoh ants have labeled
          blocks inside multi-species documents and no dedicated source in this pack.{' '}
          <strong>
            More text is not more evidence, but less text does mean fewer specifics, and the two
            shorter sections below are shorter for that reason and not because those ants matter
            less.
          </strong>
        </p>
      </div>

      <h3>Odorous House Ants</h3>
      <p>
        <strong>Colorado State</strong> describes them as small, 1/10-inch black ants that, when
        disturbed, will raise their abdomen and emit an odor reminiscent of coconut. On nesting it is
        specific:{' '}
        <em>
          &ldquo;They do not nest indoors but may enter to forage on various foods including sweets,
          cooked vegetables, fruit slices, and pastries.&rdquo;
        </em>{' '}
        The same source adds a garden note that costs nothing to act on: heavy wood mulch adjacent to
        building foundations has been associated with increased problems with odorous house ants.
      </p>
      <p>
        <strong>Utah State University Extension</strong> puts the bite question to rest for this
        species in its own summary:{' '}
        <em>&ldquo;Do not bite unless provoked and they cannot sting.&rdquo;</em> The same document
        states that they prefer moist, shaded habitat close to food, that they have multiple queens
        and form new colonies via budding, and that a colony in an urban habitat can contain
        tens-of-thousands of workers.
      </p>
      <p>
        <strong>And it states plainly why they are hard to bait</strong>, in a sentence that belongs
        to this ant and no other on the page:{' '}
        <em>&ldquo;The varied OHA diet can make management with baits difficult.&rdquo;</em> The same
        source adds one usable detail about that diet:{' '}
        <em>&ldquo;OHAs do not like fat-based foods.&rdquo;</em>
      </p>

      <h3>Pavement Ants</h3>
      <p>
        <strong>Utah State University Extension</strong> describes workers 2.5 to 3 mm long, dark
        brown, all of one size, in colonies containing thousands of workers with a single queen. On
        food:{' '}
        <em>&ldquo;Pavement ants feed on many foods, but prefer sweet and greasy foods.&rdquo;</em>{' '}
        <strong>Colorado State independently puts pavement ants in the greasy group</strong> when it
        lists which ants prefer what.
      </p>
      <p>
        <strong>On finding the nest</strong>, the same USU document gives the one visible sign:{' '}
        <em>
          &ldquo;a giveaway to the site of a nest is a small mound of excavated dirt&rdquo;
        </em>
        , pushed up and out of where the nest is. It also describes them nesting in or near
        foundation cracks or voids, and swarming indoors from there.
      </p>
      <p>
        <strong>On why baits work on this ant in particular</strong>, it names the biology:{' '}
        <em>
          &ldquo;This social feeding, known as trophallaxis, allows for the effective use of
          slow-acting, insecticidal baits when managing pavement ants.&rdquo;
        </em>
      </p>
      <p>
        <strong>One correction this page carries deliberately.</strong> The same source states that
        these ants have two nodes, one pair of spines on the thorax,{' '}
        <em>
          &ldquo;and a stinger, though the stinger is typically retracted into the gaster and not
          readily visible&rdquo;
        </em>
        . That is a statement about anatomy, and no source in this pack says pavement ants sting
        people. It is recorded here because a reader who has read that odorous house ants cannot
        sting should not carry that across to a different ant.
      </p>

      <h3>Carpenter Ants</h3>
      <p>
        <strong>Colorado State</strong> describes the largest ants in its state, 1/4 to 3/8 inch,
        either black or black with a reddish-brown thorax, and gives the habit that names them:{' '}
        <em>
          &ldquo;Carpenter ants nest in wood but feed primarily on dead insects and honeydew.&rdquo;
        </em>{' '}
        On where they came from when you see one indoors:{' '}
        <em>
          &ldquo;Carpenter ants found in homes are almost always foragers that will return to an
          outdoor nest in the yard.&rdquo;
        </em>{' '}
        The same source adds that they will rarely establish a nest in a building, and when they do
        it is typically at some point of previous water damage.
      </p>
      <p>
        <strong>Penn State</strong> gives its own measurement and a warning in the same line:{' '}
        <em>
          &ldquo;The carpenter ant is &frac14;-&frac12; inch long, shiny, dark brown to black, can be
          destructive to homes, and requires different tactics from household nuisance ants.&rdquo;
        </em>{' '}
        That sentence is why carpenter ants have a section of their own below.
      </p>

      <h3>Pharaoh Ants</h3>
      <p>
        <strong>Colorado State</strong> is the only source in this pack with a species block for
        them. It describes minute, 1/12 inch, light-brown ants{' '}
        <em>&ldquo;that are adapted to nesting in buildings&rdquo;</em>. On the nest itself:{' '}
        <em>
          &ldquo;Nests can spread extensively through a structure as pharaoh ants may frequently move
          nest locations, produce multiple queens, and may split to form &ldquo;satellite&rdquo;
          colonies.&rdquo;
        </em>{' '}
        <em>
          (the inner quotation marks around satellite are Colorado State&rsquo;s own and are left as
          published)
        </em>{' '}
        It lists their foods as syrups, jellies, baked goods, grease and pet foods, and states they
        can be serious pests of hospitals, dormitories and apartments.
      </p>
      <p>
        <strong>The single most consequential sentence about this ant is about what not to do.</strong>{' '}
        Colorado State states that some kinds of ants can establish new colonies by producing multiple
        queens within a colony and then dividing, and that{' '}
        <em>
          &ldquo;This habit is particularly common with pharaoh ants that may split colonies and
          scatter in response to disturbances, including use of some insecticides.&rdquo;
        </em>{' '}
        On that source, treating a pharaoh ant colony badly can multiply it.
      </p>
      <p>
        <strong>UC IPM adds two entries, and both are California-scoped</strong>, as everything in
        that document is. It states that the primary ant that nests indoors in California is the
        pharaoh ant, nesting in warm, moist locations such as inside wall voids, under flooring, or
        near hot water pipes or heating systems. And on bait choice it separates this ant from the
        sweet-feeders:{' '}
        <em>
          &ldquo;However, other ant species such as thief ants and Pharaoh ants prefer protein or
          greasy baits year-round.&rdquo;
        </em>
      </p>
      <p>
        <em>
          Colorado State prints this ant&rsquo;s scientific name as Monomorium pharoaensis and its
          common name in one place as Pharoah ants. UC IPM prints Monomorium pharaonis. The
          quotations above are left exactly as each source published them rather than tidied.
        </em>
      </p>

      <h2 id="carpenter">Carpenter Ants Need Different Tactics</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          One source states a product limit that is not about strength. It is about whether the ant
          goes to the product at all.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>
            Colorado State University Extension, published November 1996 and reviewed August 2025:
          </strong>{' '}
          <em>
            &ldquo;Carpenter ants are one group of ants that will not visit most solid ant baits but
            will feed at some liquid or gel sugar-based baits.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          Read as written, a solid bait is not a weaker choice against a carpenter ant. It is one the
          ant does not visit. Every product named further down this page is a liquid, so none of them
          is caught by that sentence &mdash; but not one of those listings names carpenter ants
          either, so nothing here is evidence that any particular product works on this ant.
        </p>
      </div>
      <p>
        <strong>The structural question is separate, and this page does not answer it.</strong> Penn
        State states that the carpenter ant can be destructive to homes. Colorado State states that
        they nest in wood and that a nest inside a building is typically at a point of previous water
        damage. No source in this pack tells a homeowner how to assess damage to a structure, and no
        product named here is presented as an answer to it.
      </p>

      <h2 id="fire">If the Ants Sting, This Is the Wrong Page</h2>
      <p>
        <strong>None of the four ants on this page is described by any source here as a stinging
        pest of people.</strong> UC IPM names the ones that are, and they are not these:{' '}
        <em>
          &ldquo;A few ants sting, including native fire ants and harvester ants, which are primarily
          outdoor species and are the most common stinging ants in California.&rdquo;
        </em>{' '}
        The same source describes the red imported fire ant separately as an aggressive stinging ant.
      </p>
      <p>
        <Link href="/us/imported-fire-ants">Our imported fire ants page</Link> covers that insect,
        including which ants the federal term takes in, how to tell them from native ants using a
        published two-step character, and the sting.{' '}
        <strong>
          None of that identification material is repeated here, so the two pages cannot drift apart.
        </strong>{' '}
        If what you are looking at is a mound in a lawn and the ants swarm out and sting when it is
        disturbed, that page is the one you want, not this one.
      </p>

      <h2 id="baits">Bait Stations and Stakes</h2>
      <p>
        <strong>One source names the two forms a household buyer will actually find</strong>, and
        that sentence is the only criterion the four products below are measured against.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-sm text-slate-800">
          <strong>UC IPM, on what is available:</strong>{' '}
          <em>
            &ldquo;For residential users, the most readily available forms are solids or liquids that
            are prepackaged into ant stakes or small plastic bait station containers.&rdquo;
          </em>{' '}
          <strong>And on which to reach for:</strong>{' '}
          <em>
            &ldquo;Prepackaged or refillable bait stations or stakes are the safest and easiest to
            use.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-slate-800">
          <strong>On where they go, which is not where most people put them:</strong>{' '}
          <em>
            &ldquo;Use baits primarily outdoors. Use indoors only if there is a serious infestation
            and you can&rsquo;t find the spot where ants are entering the building: otherwise you
            could attract ants indoors.&rdquo;
          </em>{' '}
          The same source states that outdoor baits draw ants out of buildings, and asks that stations
          be placed where ants can easily find them while avoiding areas accessible to pets and small
          children.
        </p>
        <p className="mt-3 mb-0 text-sm text-slate-800">
          <strong>On what is in them:</strong>{' '}
          <em>
            &ldquo;Ant baits contain carbohydrates (e.g., sugars), proteins, oils, or a combination of
            these as attractants along with an active ingredient (toxicant).&rdquo;
          </em>{' '}
          <em>
            &ldquo;Active ingredients in baits may include boric acid/borate, fipronil, avermectin, or
            hydramethylnon.&rdquo;
          </em>{' '}
          <strong>Penn State names an overlapping but not identical list</strong>, asking a reader to
          choose baits containing hydramethylnon, boric acid, fipronil, sulfluramid or abamectin, and
          to use enclosed, tamper-resistant bait traps that have a premixed food with the pesticide.
        </p>
        <p className="mt-3 mb-0 text-sm text-slate-800">
          <strong>And Utah State on placement, which no product can do for you:</strong>{' '}
          <em>
            &ldquo;If baits are used to manage ants, locate as many foraging trails as possible and
            bait along trails.&rdquo;
          </em>
        </p>
      </div>
      <p>
        The four below all satisfy that one criterion and nothing else. They are in no order of
        preference, no source consulted compares any two products, and three of the four name no ant
        that this page covers.{' '}
        <strong>
          All four are made by the same manufacturer, which is a fact about what a search for this
          product class returns and not a recommendation of that manufacturer.
        </strong>
      </p>
      <p>
        The baits below are named because every source on this page puts a slow-acting bait ahead of a spray, and each listing states its own active ingredient.
      </p>

      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}
      <p>
        <strong>Two further products were fetched and are named nowhere on this page.</strong> Each
        was a near-duplicate of one of the four above from the same manufacturer, differing in pack
        quantity. Neither listing stated that the difference was only cosmetic, and a different number
        of baits in the box is not a cosmetic difference, so they are treated as separate products and
        one of each pair is named rather than the pair being merged into a single card.
      </p>

      <h2 id="first">What Every Source Puts First</h2>
      <p>
        <strong>Not one of the five opens with a product.</strong> Colorado State is the most direct
        about the order:{' '}
        <em>
          &ldquo;The first and most important step to reducing problems with ants occurring in homes
          is to eliminate sources of food and water that are attractive.&rdquo;
        </em>{' '}
        And it makes that a precondition for the products further down rather than an alternative to
        them:{' '}
        <em>
          &ldquo;Removing sources of food and water will reduce visitation by ants and help to make
          baits used for ant control more effective.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM asks for the same things and adds a distance.</strong> Its own list includes
        caulking cracks and openings that provide entry into buildings, storing food in clean, sealed
        containers, cleaning up crumbs, grease and spills, fixing leaky faucets since water can
        attract ants, and{' '}
        <em>
          &ldquo;Keep plants, grass, and mulch at least a foot away from the foundation of buildings
          to reduce ant foraging and nesting.&rdquo;
        </em>{' '}
        <strong>Penn State gives a different number for the same instruction:</strong>{' '}
        <em>
          &ldquo;Keep vegetation and mulch at least 6 inches away from the base of the house.&rdquo;
        </em>{' '}
        Twelve inches and six inches, from two sources, and this page reports both rather than
        splitting the difference.
      </p>
      <p>
        <strong>Utah State University Extension goes furthest on the mulch itself</strong>, listing
        among the conditions to remove:{' '}
        <em>&ldquo;Wood mulch (replace with pea gravel, not large stones).&rdquo;</em> Colorado State
        independently associates heavy wood mulch next to foundations with increased odorous house
        ant problems, which is the same fact arrived at from a different state.
      </p>

      <h2 id="spread">Four Sources, Four Positions on Spraying</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          This is the sharpest disagreement in the pack. All four documents are extension
          publications, all four are current on their own sites, and they do not say the same thing.
          This page reports all four and picks none.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UC IPM, 10/2012, is the most restrictive:</strong>{' '}
          <em>
            &ldquo;Baits are a key tool for managing ants and the only type of insecticide recommended
            in most situations.&rdquo;
          </em>{' '}
          <em>
            &ldquo;Pesticide sprays only provide temporary control and may not be safe to use
            indoors.&rdquo;
          </em>{' '}
          <em>
            &ldquo;Spraying ants indoors with pesticides will not prevent more ants from
            entering.&rdquo;
          </em>{' '}
          And on the comparison itself:{' '}
          <em>&ldquo;When properly used, baits are more effective and safer than sprays.&rdquo;</em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>Penn State, updated 5 August 2024, gives instructions in the same direction but on
          different grounds:</strong>{' '}
          <em>&ldquo;Avoid sprays, bombs/foggers, and liquid concentrates.&rdquo;</em> indoors, because
          they can irritate lungs, leave chemical residues on indoor surfaces, or be touched or
          ingested accidentally by children. And outdoors:{' '}
          <em>&ldquo;Avoid using perimeter sprays and granules around the home for ants.&rdquo;</em>{' '}
          Its stated reason is not efficacy: sprays leave residues and may kill many other small
          creatures besides ants, and birds may eat pesticide granules and can be killed.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>
            Colorado State, published November 1996 and reviewed August 2025, treats perimeter
            treatment as an ordinary option:
          </strong>{' '}
          it lists sprays, dusts and granules among the products used for general ant suppression, and
          states that an insecticide barrier maintained around the building perimeter can inhibit much
          of the activity of ants entering from outdoor colonies. It also states in the same document
          that far more effective than indoor surface sprays are insecticides used as baits, and that
          contact sprays should not be used in the vicinity where baits are applied.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>
            Utah State University Extension states a mechanism rather than a verdict, and it is the
            one to read before treating anything:
          </strong>{' '}
          <em>
            &ldquo;Insecticide treatments that split an exterior/interior foraging trail (i.e., using
            repellent insecticides as barrier applications) may create additional problems inside the
            structure as ants are cut off from their nests.&rdquo;
          </em>{' '}
          And on treating a nest directly:{' '}
          <em>
            &ldquo;incomplete applications to nests with a repellent insecticide may cause the nest to
            split, creating multiple nests&rdquo;
          </em>
          . UC IPM reaches a similar-sounding place by a different route:{' '}
          <em>
            &ldquo;On occasion, barrier sprays make the situation worse by trapping ants
            indoors.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          Three of these four lean away from spraying and one treats it as routine. That is not a
          three-to-one verdict and this page does not present it as one. A source sitting nearer
          another does not confirm it, and no reader is served by us averaging four extension services
          into one recommendation we would then have to defend.
        </p>
      </div>

      <h2 id="limits">What the Sources Say About Baits That Do Not Work</h2>
      <p>
        <strong>Colorado State gives the timing before anything else</strong>, so that a bait is not
        thrown away on day two:{' '}
        <em>
          &ldquo;Ant baits are slow-acting and do not kill ants immediately. Effects of ant baiting
          usually start to become apparent within a week or two.&rdquo;
        </em>{' '}
        <strong>UC IPM puts a shorter window on the same question</strong> and pairs it with what to
        do at the end of it:{' '}
        <em>
          &ldquo;Replace baits when empty. If ants aren&rsquo;t taking the bait, reposition the bait
          stations, or try a different bait product. It can take 5 to 10 days to see fewer
          ants.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State names the specific failure mode for liquids:</strong>{' '}
        <em>
          &ldquo;Baits often become unattractive when they dry out, a common problem in the arid
          climate of Colorado.&rdquo;
        </em>{' '}
        The same source states that because of the availability of fluids, liquid and gel formulated
        baits may often be more readily accepted by ants. It also asks a reader to avoid using other
        insecticides that might deter ants visiting the baits, and states that spot sprays of
        insecticides should not be used in the vicinity of a bait station.
      </p>
      <p>
        <strong>
          And two of the ants on this page have their own reasons for a bait program going nowhere.
        </strong>{' '}
        Utah State states that the varied odorous house ant diet can make management with baits
        difficult, and that the presence of multiple queens makes successful baiting and pesticide
        applications more difficult as any surviving queen can continue to lay eggs. Colorado State
        states that carpenter ants will not visit most solid ant baits at all. Neither of those is a
        fault in a product.
      </p>
      <p>
        <strong>One thing no product on this page addresses.</strong> Utah State states that nests
        located under slabs or foundations{' '}
        <em>
          &ldquo;may require termite-style applications of non-repellent
          insecticides/termiticides by a licensed professional.&rdquo;
        </em>{' '}
        That is not a consumer product and nothing is named for it here.
      </p>

      <h2 id="name">Two Sources, Two Scientific Names for One Ant</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          If you look up the pavement ant you will find two Latin names, and both of these sources are
          live. This is a real disagreement in the literature, not an error on one of the pages.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM, on a page dated 10/2012</strong>, gives the pavement ant as{' '}
          <em>Tetramorium caespitum</em>.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Utah State University Extension, June 2020</strong>, states that until recently the
          pavement ant&rsquo;s scientific name was <em>Tetramorium caespitum</em>, but that recent
          genetic work has clarified that the common pest <em>Tetramorium</em> species in the United
          States is from Europe and has been given the name <em>T. immigrans</em>. It cites two
          published studies for that, from 2017 and 2019, and adds that genetic variation among United
          States populations is low and that current populations are believed to derive from one or a
          few closely related colonies introduced into the northeastern United States about 200 years
          ago.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          The USU statement is the later one and cites the work. The UC IPM page has not been revised
          since 2012. We report both with their dates rather than quietly adopting one, because
          nothing on this page turns on which name is correct.
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the five publications below, all fetched
        on 29 August 2026. Two are single-species documents and three cover many ants at once, and
        only the material belonging to the four ants named here is used from those three. Where a
        source suppresses its own publication date in markup that does not render, that is stated
        rather than the hidden date being cited, and where a document carries both a publication date
        and a review date, both are given. The oldest current revision in this set is from 2012 and the
        oldest publication date is from 1996.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
