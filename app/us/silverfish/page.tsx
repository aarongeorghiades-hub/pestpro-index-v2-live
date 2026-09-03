import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { SILVERFISH_NAV, SILVERFISH_HOME } from '../components/silverfishNav';

const URL = 'https://pestproindex.com/us/silverfish';
const TITLE = 'Silverfish vs Firebrats: Different Needs';
const DESCRIPTION =
  'Silverfish scrape paper rather than biting; firebrats look similar but want opposite conditions. Six extension publications, three disagreeing on warm-or-cool.';

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
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Silverfish', item: URL }],
};

// ---------------------------------------------------------------------------
// TWO SPECIES, AND EVERY FIGURE ON THIS PAGE CARRIES ITS SPECIES NAME.
//
// UC IPM states nearly every life-cycle figure as a LABELED PAIR inside one
// sentence — "Firebrat eggs hatch in about 14 days and silverfish eggs in about 19 to
// 32 days." Splitting such a sentence to put distance between the two halves would be
// a mid-quote elision, which is a worse defect than proximity. So the pairs are quoted
// WHOLE, and the protection is the species label, not the character distance. No
// figure appears anywhere on this page without the name of the insect it counts.
//
// THE FLAGSHIP IS THE OLDEST SOURCE AND, ON ONE POINT, THE OUTLIER. UC IPM's Pest
// Notes renders "Updated: 12/2009"; Penn State's page renders June 2026. Where a claim
// depends on the age of its source, the date is written into the same sentence.
//
// FOUR SOURCES SUPPORT THE CONTAINER CRITERION, NOT FIVE. UF/IFAS IG094 carries a
// container instruction and a "less than 50%" humidity figure, but BOTH sit in that
// document's BOOKLICE control block, before the silverfish section begins, and the
// humidity figure is for mold control. Neither is used here for silverfish.
//
// NO HUMIDITY SPECIFICATION IS GIVEN, BECAUSE NO SILVERFISH SOURCE PUBLISHES ONE.
// Three sources recommend a dehumidifier and none states a target. The page says so
// and cards no dehumidifier: a product cannot be tested against a vocabulary.
//
// CARDS: eight, across three criteria.
//   SF1 food container, tight lid   3 cards, all S45-C route additions from /us/moths
//   SF2 sticky trap naming silverfish 4 cards
//   SF3 boric acid granular bait    1 card, rendered beside the spread about it
// ---------------------------------------------------------------------------

type Grp = 'SF1' | 'SF2' | 'SF3';

type ProductRecord = { asin: string; cardName: string; group: Grp; whatItDoes: string[] };

const products: ProductRecord[] = [
  {
    asin: 'B08ZK5WDWN',
    group: 'SF1',
    cardName: 'Vtopmart Airtight Food Storage Containers, 24 Pieces',
    whatItDoes: [
      'States the lid mechanism in its own text, not only in the product name: side-locking lids with a silicone gasket, which the listing says make the containers airtight',
      'Four sources ask for the same thing here, and two of them list the foods by name — cereals, flour, meal, pasta and pet food',
      'Twenty-four containers in four sizes, from 0.7 quart to 2.5 quart, per the listing',
      'What the listing does NOT claim is that it excludes insects. It claims air and moisture exclusion. The criterion the sources state is a property of the lid, and that is all this card asserts',
    ],
  },
  {
    asin: 'B08NDKDJC5',
    group: 'SF1',
    cardName: 'CHEFSTORY Airtight Food Storage Containers, 8 Pieces',
    whatItDoes: [
      'States an airtight seal in its own text and names the mechanism: side-locking lids with a black silicone gasket, which the listing says protect the containers from air and water',
      'The smallest of the three sets, at eight containers in four sizes',
      '⚠ The listing describes four side-locking lids for an eight-piece set. Whether that means four locking sides per lid or four lidded containers is not resolved by the listing’s own text, so this card states no lid count',
      'Utah State puts the same instruction in its shortest form: remove or store potential food sources in sealed containers',
    ],
  },
  {
    asin: 'B097K4B6Z8',
    group: 'SF1',
    cardName: 'PRAKI Airtight Food Storage Containers, 24 Pieces',
    whatItDoes: [
      'States the mechanism in its own text: a silicone sealing strip and locking lids, which the listing says stop water and air entering',
      'Twenty-four containers in four sizes, sold with labels and a marker',
      'Named on one other page of this site for the same physical job against pantry moths. What is new here is the reason, which is the silverfish sources rather than anything about the product',
      'Containers address the food half only. Every source consulted puts moisture and paper clutter alongside food, and no container touches those',
    ],
  },
  {
    asin: 'B09TG81M7B',
    group: 'SF2',
    cardName: 'EcoPest Silverfish Trap, 12 Pack',
    whatItDoes: [
      'The only trap checked that names firebrats as well as silverfish in its own text, and it names silverfish to type: bristletail, common, four-lined, gray and firebrat silverfish',
      'States a scented attractant mixed into the glue rather than a separate lure wafer',
      'UC IPM’s instruction is to use a plain sticky trap for detection and monitoring. This one adds an attractant, which the source neither asks for nor rules out',
      'Twelve traps. The same seller lists a twenty-pack under a different ASIN whose own listing states none of this, so that one is not named here',
    ],
  },
  {
    asin: 'B0D7M9YPBW',
    group: 'SF2',
    cardName: 'MaxGuard Silverfish + Insect Traps, 12 Box Traps',
    whatItDoes: [
      'Names silverfish in its own text and describes the mechanism as a non-toxic industrial-grade adhesive with a dark interior',
      'The only trap checked that claims no lure or attractant at all, which is the closest match to what UC IPM actually asks for',
      'A folded box trap rather than a flat board, which the listing says can be placed in infested areas',
      'The listing says the traps stay effective for up to six months',
    ],
  },
  {
    asin: 'B00WXKSHYQ',
    group: 'SF2',
    cardName: 'Greenway Silverfish and Spider Traps, 6 Traps',
    whatItDoes: [
      'Names silverfish in its own text and states high-strength glue as the mechanism',
      'Its title and its feature text agree on the count, at six traps, which is not true of every listing in this category',
      'The listing says it delivers up to two months of protection, a shorter claim than the other traps here',
      'The same brand lists a larger pack under a different ASIN whose title and feature text disagree with each other about how many traps are in the box, so that one is not named here',
    ],
  },
  {
    asin: 'B0FH2Z22R2',
    group: 'SF2',
    cardName: 'Riddy Insect & Silverfish Traps, 10 Traps',
    whatItDoes: [
      'The only trap checked whose own text uses the word monitoring, which is the purpose UC IPM gives for a sticky trap',
      'Names silverfish in its own text and states an odorless high-strength adhesive',
      'A small, angled trap the listing says fits tight spaces such as wall voids, crawl spaces and bathroom corners — the damp places the sources tell you to look',
      'The listing says side windows let you see a catch without lifting the trap',
    ],
  },
  {
    asin: 'B075S9NZJL',
    group: 'SF3',
    cardName: 'Dekko Silverfish Paks, 48 Bait Traps',
    whatItDoes: [
      'States the active ingredient and its concentration in its own text: 20.0% boric acid, in ready-to-use paks',
      'Names silverfish in its own text and names what it is meant to protect — books, photographs, documents, wallpaper, fabrics and clothing',
      '⚠ READ THE DISAGREEMENT DIRECTLY ABOVE THIS CARD BEFORE BUYING. One extension service offers granular baits of this kind as an option; another says baits are not very successful against these insects because they tend not to feed on them. This page does not settle that',
      'Forty-eight individual paks. The listing says no mixing or spraying is required and that they are placed where activity is seen',
    ],
  },
];

const tocItems = [
  { id: 'what', title: 'What They Are, and What They Do to Paper' },
  { id: 'two-species', title: 'Two Species, and Every Figure Below Is Labeled' },
  { id: 'warm-cool', title: 'Warm or Cool? Three Sources, Two Answers' },
  { id: 'lifecycle', title: 'How Long They Live: Three Ranges, Three Publishers' },
  { id: 'moisture', title: 'Moisture, and the Specification Nobody Publishes' },
  { id: 'storage', title: 'Food Storage' },
  { id: 'traps', title: 'Sticky Traps, and a Free Alternative' },
  { id: 'bait', title: 'Boric Acid Bait, and the Disagreement About It' },
  { id: 'chemical', title: 'What the Sources Say About Sprays and Foggers' },
  { id: 'people', title: 'Whether They Harm People' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Do silverfish bite?',
    answer:
      'No source consulted says they bite people, and the flagship says the opposite about their mouthparts. UC IPM states that firebrats and silverfish have very weak jaws which causes them to scrape, instead of bite, the surface of paper. That sentence is about paper, not skin, but it is the only use of the word bite in six publications and it is a negative. UF/IFAS separately notes, of the related booklice, that none of these insects are parasites. Across all six sources we found no report of a disease, and no report of an allergic reaction either.',
  },
  {
    question: 'Do silverfish like warm places or cool ones?',
    answer:
      'The sources disagree and this page does not settle it. UC IPM, in a document its own page dates to December 2009, says silverfish live and develop in damp, warm places, preferring areas such as laundry rooms that are 71 to 90 degrees Fahrenheit. UF/IFAS says silverfish live and develop in damp, cool places. Penn State, in a page it dates to June 2026, says silverfish desire cooler temperatures and are usually found in basements. Two sources sit on one side and one on the other, and the one on its own is also the oldest. Two publishers agreeing with each other is not evidence that the third is wrong, and this page does not treat it as such. What all three agree on is damp.',
  },
  {
    question: 'What humidity should I aim for?',
    answer:
      'No silverfish source we consulted publishes a number. Three of them recommend a dehumidifier — UC IPM says silverfish require a lot of moisture so using dehumidifiers in closed spaces can help discourage these pests, NPIC says to consider using a dehumidifier in closed spaces such as bathrooms, basements, garages and attics, and Penn State says to use dehumidifiers in damp basements. None of the three gives a target relative humidity, a capacity or a room size. There is a figure of less than 50 percent in one of these publications, but it sits in that document’s booklice section and is given for slowing mold growth, so it is not a silverfish target and this page does not present it as one. That is why no dehumidifier is named here: there is no published specification to measure a product against.',
  },
  {
    question: 'Will a moth or carpet beetle trap catch silverfish?',
    answer:
      'Not on the strength of its lure. UC IPM states that a pheromone attracts the species it was made for and not others, which is why this site keeps the traps on its carpet beetle, moth and silverfish pages strictly apart. A plain sticky board with no lure is a different matter, because it catches whatever walks onto it — UC IPM in fact tells you to use cockroach sticky traps to detect and monitor silverfish, which is a trap sold for another insect entirely. The rule is about the attractant, not the glue.',
  },
  {
    question: 'Are the insecticides worth it?',
    answer:
      'The flagship is notably unenthusiastic, and its own page is dated December 2009, which matters for a list of products. UC IPM states that hundreds of commercially available insecticides list firebrats and silverfish on their labels, and immediately adds that most of these products have not been adequately tested. It says insecticides are not required for light infestations or an occasional insect, that these can be managed by reducing water sources and through physical control, and that insecticides will not be effective unless you also remove the moisture, food and hiding places. It also states that foggers are not recommended for these infestations. No spray, dust or fogger is named on this page.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Silverfish and Firebrats — the source of the species identification, the paired life-cycle figures, the scraping-rather-than-biting statement, the sticky trap and jar methods, the tight-lid container instruction, the dehumidifier advice, the bait assessment and the insecticide caveats',
    publisher: 'UC Statewide IPM Program',
    date: 'Renders one date only, an update stamp of 12/2009 — the oldest source used on this page. A January 2022 publication date exists in the page markup but is inside an HTML comment and does not render, so it is not cited. Fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/silverfish-and-firebrats/',
  },
  {
    label:
      'Bristletails (Silverfish and Firebrats) — the source of the cooler-temperature statement, the airtight container instruction and the damp basement dehumidifier advice. The most recently updated source on this page',
    publisher: 'Penn State Extension',
    date: 'Renders Updated: June 24, 2026',
    href: 'https://extension.psu.edu/bristletails-silverfish-and-firebrats',
  },
  {
    label:
      'Booklice and Silverfish, ENY-225/IG094 — the source of the damp and cool statement, the silverfish egg and lifespan figures, the diatomaceous earth option and the granular bait statement. ITS BOOKLICE SECTION IS NOT USED HERE: that section carries a container instruction and a humidity figure which belong to booklice and mold, not to silverfish',
    publisher: 'UF/IFAS Extension',
    date: 'Renders a copyright line of 2024. Revision dates exist in the page metadata but do not render as text, so they are not cited. Fetched 28 August 2026',
    href: 'https://edis.ifas.ufl.edu/ig094',
  },
  {
    label:
      'Silverfish and Firebrats — the source of the airtight container instruction, the dehumidifier advice and the glass jar method',
    publisher: 'National Pesticide Information Center, Oregon State University',
    date: 'Renders Last updated May 09, 2025',
    href: 'https://npic.orst.edu/pest/silverfish.html',
  },
  {
    label: 'Silverfish & Firebrats — the source of the sealed container instruction and the moisture and crevice guidance',
    publisher: 'Utah State University Extension',
    date: 'No date renders on the page. Fetched 28 August 2026',
    href: 'https://extension.usu.edu/planthealth/ipm/notes_nuisance/silverfish-firebrats',
  },
  {
    label: 'Silverfish and Firebrats — consulted for identification and habitat. It states no control criterion used here',
    publisher: 'University of Maine Cooperative Extension',
    date: 'No date renders on the page. Fetched 28 August 2026',
    href: 'https://extension.umaine.edu/home-and-garden-ipm/fact-sheets/common-name-listing/silverfish-and-firebrats/',
  },
];

export default function SilverfishPage() {
  const SF1 = products.filter((p) => p.group === 'SF1');
  const SF2 = products.filter((p) => p.group === 'SF2');
  const SF3 = products.filter((p) => p.group === 'SF3');
  return (
    <UsPageLayout
      title="Silverfish and Firebrats"
      subtitle="They scrape paper rather than biting it, and they are two species, not one. The numbers attached to them differ by species and by publisher, so every figure on this page carries the name of the insect it counts and the name of the source that published it."
      lastUpdated="August 2026"
      readingTime="14 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={SILVERFISH_HOME}
      clusterNav={SILVERFISH_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Silverfish are the classic paper pest, and firebrats are the look-alike that wants the
        opposite conditions. Quotation marks on this page mark a source&rsquo;s own words and
        nothing else.
      </p>

      <h2 id="what">What They Are, and What They Do to Paper</h2>
      <p>
        <strong>UC IPM, on the damage:</strong>{' '}
        <em>
          &ldquo;Firebrats and silverfish have very weak mandibles, or jaws, which causes them to
          scrape, instead of bite, the surface of paper.&rdquo;
        </em>{' '}
        The same source adds that page discoloration often occurs because of the fungi associated
        with their feeding damage, and that on paper and fabrics feeding usually begins in one area
        and spreads as unconnected, irregularly shaped holes.
      </p>
      <p>
        <strong>What they eat, in UC IPM&rsquo;s words:</strong>{' '}
        <em>
          &ldquo;Both insects prefer dry food such as cereals, flour, pasta, and pet food; paper with
          glue or paste; sizing in paper including wallpaper; book bindings; and starch in
          clothing.&rdquo;
        </em>{' '}
        The same source says household dust and debris, dead insects and certain fungi are also
        important sources of food, and that they can live for several months without nourishment.
      </p>
      <p>
        <strong>How to tell it was them:</strong> UC IPM says that if you see scales around or
        beneath damaged items it is a good indication these pests are the culprits, and describes the
        scales as delicate, dustlike and slightly incandescent in the light.
      </p>
      <p>
        This is the third page in a group of three. The others cover{' '}
        <Link href="/us/carpet-beetles">carpet beetles</Link> and{' '}
        <Link href="/us/moths">household moths</Link>, which eat animal fibers rather than paper and
        starch.{' '}
        <strong>
          The three share the food-storage advice below and share nothing else about their products
        </strong>{' '}
        &mdash; a lure made for one insect does not attract another.
      </p>

      <h2 id="two-species">Two Species, and Every Figure Below Is Labeled</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Silverfish and firebrats are not interchangeable, and almost every number differs between
          them.
        </p>
        <p className="mt-3 mb-0 text-base text-blue-900">
          UC IPM states most of these figures as labeled pairs inside a single sentence, so they are
          quoted whole below rather than split apart.{' '}
          <strong>
            Every figure on this page carries the name of the species it counts. If a number here is
            not attached to a species name, it is a defect.
          </strong>
        </p>
      </div>
      <p>
        <strong>UC IPM, identifying the two:</strong>{' '}
        <em>
          &ldquo;The common silverfish, Lepisma saccharina, is shiny, silver or pearl gray, and about
          1/2 inch long, although it can grow as long as 3/4 inch.&rdquo;
        </em>{' '}
        The same source gives the common firebrat as Thermobia domestica, shiny, a mottled gray or
        brown, and about 1/2 inch long.
      </p>

      <h2 id="warm-cool">Warm or Cool? Three Sources, Two Answers</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Three publications, two incompatible answers about the same insect. This page does not pick
          one.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM, in a document its own page dates to 12/2009:</strong>{' '}
          <em>
            &ldquo;Silverfish live and develop in damp, warm places, preferring areas such as laundry
            rooms that are 71&deg; to 90&deg;F.&rdquo;
          </em>
          <br />
          <strong>UF/IFAS:</strong>{' '}
          <em>&ldquo;Silverfish live and develop in damp, cool places.&rdquo;</em>
          <br />
          <strong>Penn State, in a page it dates to June 2026:</strong>{' '}
          <em>
            &ldquo;Silverfish desire cooler temperatures and are usually found in basements.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          Two sources say cool and one says warm, and the one on its own is also the oldest by
          roughly sixteen years. That is not a reason to discard it and this page does not.{' '}
          <strong>
            Two publishers agreeing with each other is not evidence that a third is wrong, and
            nothing here treats the majority as a finding.
          </strong>{' '}
          All three agree the place is damp, which is the part that changes what you do.
        </p>
      </div>
      <p>
        <strong>On firebrats the sources do not conflict</strong>, and the contrast is the useful
        part. UC IPM says firebrats want very warm, dry places, giving a relative humidity as low as
        30 percent and temperatures above 90&deg;F with an optimum of 98&deg; to 102&deg;F, and it
        adds that for silverfish at higher temperatures the relative humidity must be above 75
        percent.{' '}
        <em>
          (UC IPM&rsquo;s sentence about where firebrats do well carries a word this site does not
          print in its own pages, so its substance is given here in our words and attributed rather
          than quoted)
        </em>
        . Penn State puts the same contrast more briefly, saying firebrats are more resistant to
        dryer environments.
      </p>

      <h2 id="lifecycle">How Long They Live: Three Ranges, Three Publishers</h2>
      <p>
        <strong>UC IPM, on eggs, both species in one sentence:</strong>{' '}
        <em>
          &ldquo;Firebrat eggs hatch in about 14 days and silverfish eggs in about 19 to 32
          days.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM, on lifespan, both species in one sentence:</strong>{' '}
        <em>&ldquo;Firebrats live about 2 years and silverfish about 3 years.&rdquo;</em>
      </p>
      <p>
        <strong>UC IPM, on how temperature changes development, both species in one sentence:</strong>{' '}
        <em>
          &ldquo;When the temperature is below 50&deg;F, firebrats can take as long as 300 days and
          silverfish as long as 500 days to develop into adults.&rdquo;
        </em>{' '}
        And above 75&deg;F the same source gives firebrats as few as 40 days and silverfish as little
        as 60 days.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          On silverfish alone, three publishers give three different answers twice over.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Egg hatching.</strong> UC IPM: silverfish eggs in about{' '}
          <strong>19 to 32 days</strong>. UF/IFAS, of silverfish eggs:{' '}
          <em>&ldquo;They hatch in two to eight weeks.&rdquo;</em> Penn State gives{' '}
          <strong>19 to 43 days</strong>.
          <br />
          <strong>Adult lifespan.</strong> UC IPM: silverfish{' '}
          <strong>about 3 years</strong>. UF/IFAS:{' '}
          <em>
            &ldquo;The adult female can live for two to five years depending on the species, and can
            lay up to 100 eggs.&rdquo;
          </em>{' '}
          Penn State: silverfish can live for <strong>at least two to three years</strong>.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          Three ranges that overlap without agreeing, from three extension services. None is adjusted
          here to fit another and none is averaged.
        </p>
      </div>

      <h2 id="moisture">Moisture, and the Specification Nobody Publishes</h2>
      <p>
        <strong>Every source puts moisture first.</strong> UC IPM says to keep basements, laundry
        rooms and bathrooms — especially shower stalls — clean and dry, to patch holes and spaces
        around pipes and conduits, and to repair leaks and drips in plumbing. Utah State puts it in
        one line: <em>&ldquo;Reduce moisture by fixing leaky plumbing.&rdquo;</em>
      </p>
      <p>
        <strong>Three sources recommend a dehumidifier.</strong> UC IPM:{' '}
        <em>
          &ldquo;Silverfish require a lot of moisture, so using dehumidifiers in closed spaces can
          help discourage these pests.&rdquo;
        </em>{' '}
        NPIC:{' '}
        <em>
          &ldquo;Consider using a dehumidifier in closed spaces such as bathrooms, basements,
          garages, and attics.&rdquo;
        </em>{' '}
        Penn State: <em>&ldquo;Use dehumidifiers in damp basements.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          No dehumidifier is named on this page, and the reason is that nobody published a number.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          Three sources tell you to use one. <strong>None of them states a target relative
          humidity, a capacity, or a room size.</strong> Closed spaces is a description, not a
          specification, and a product cannot be measured against it.{' '}
          <strong>
            There is a figure of less than 50 percent in one of these publications, and it is not
            used here
          </strong>{' '}
          — it appears in that document&rsquo;s booklice section, given for slowing mold growth
          rather than for silverfish. Presenting it as a silverfish target would attribute one
          insect&rsquo;s instruction to another.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>The same question arises on another page and gets the same answer.</strong> Our{' '}
          <Link href="/us/camel-crickets">camel crickets page</Link> covers a different insect that
          turns up in the same damp basements, and Rutgers Cooperative Extension tells that
          page&rsquo;s reader to dehumidify too &mdash; also without a number. Two insects, two
          source sets, one identical gap, and neither page fills it by guessing.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>A third insect shares the root cause and not the habitat.</strong> Our{' '}
          <Link href="/us/earwigs">earwigs page</Link> covers the one that comes in from the mulch
          outside rather than from the damp inside &mdash; flattened, red-brown, with forceps at the
          tail. If what you are finding is outdoors by day and indoors by night, that is the page
          for it.
        </p>
      </div>

      <h2 id="storage">Food Storage</h2>
      <p>
        <strong>Four sources ask for the same thing.</strong> UC IPM:{' '}
        <em>&ldquo;Keep food in containers with tight lids, especially dry, processed items.&rdquo;</em>{' '}
        NPIC:{' '}
        <em>&ldquo;Keep cereals, flour, meal, pasta, and pet foods in airtight containers.&rdquo;</em>{' '}
        Penn State:{' '}
        <em>
          &ldquo;Keep cereals, flour, meal, pastas, pet foods, and pet treats in airtight
          containers.&rdquo;
        </em>{' '}
        Utah State:{' '}
        <em>&ldquo;Remove or store potential food sources in sealed containers.&rdquo;</em>
      </p>
      <p>
        UC IPM adds the part a container does not cover:{' '}
        <em>
          &ldquo;Because collections of magazines, papers, and books provide food and harborage,
          occasionally move these items around in your bookcase.&rdquo;
        </em>
      </p>
      {SF1.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="traps">Sticky Traps, and a Free Alternative</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>&ldquo;To detect and monitor infestations, use cockroach sticky traps.&rdquo;</em>{' '}
        <strong>
          Read that instruction exactly: the source names a trap sold for a different insect.
        </strong>{' '}
        A plain glue board has no lure and catches whatever walks onto it, which is why a trap made
        for another species still works here — while a pheromone made for another species does not.
      </p>
      <p>
        <strong>The sources also describe a trap that costs nothing.</strong> UC IPM says you can use
        small glass jars covered on the outside with masking tape, and that the insects climb up the
        tape, fall into the jars, and cannot climb back up the slick sides. NPIC describes the same
        method:{' '}
        <em>
          &ldquo;Cover the outside of a lidless glass jar with masking tape and leave it in a place
          the bugs will find it. They can climb in, but they cannot get out.&rdquo;
        </em>{' '}
        UC IPM says to place traps or jars in corners and along edges where foraging is likely.
      </p>
      <p>
        The four traps below each name silverfish in their own text and state a glue or adhesive
        mechanism. They are in no order of preference, and no source consulted compares one product
        against another.
      </p>
      {SF2.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="bait">Boric Acid Bait, and the Disagreement About It</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          One extension service offers this class of product. Another says it does not work well.
          Both are quoted; neither is adjusted.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UF/IFAS:</strong>{' '}
          <em>
            &ldquo;The use of fine granular baits such as Niban&reg; - FG or Dekko Silverfish Paks
            (20% boric acid) may be used. Always follow pesticide label directions.&rdquo;
          </em>
          <br />
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;However, baits aren&rsquo;t very successful in treating silverfish and firebrats,
            because they tend not to feed on them.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          This page has no basis for preferring one publisher over the other and does not pretend to.
          That one source names a product does not make it a recommendation by this site, and the
          card below is not placed there because a source named a brand.
        </p>
      </div>
      <p>
        The product below is named because its own listing states the criterion — a granular boric
        acid bait, at a stated concentration, that names silverfish.{' '}
        <strong>
          It is the only product on this page carrying a pesticide, and the disagreement above
          applies to it directly.
        </strong>
      </p>
      {SF3.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}
      <p>
        <strong>UF/IFAS also describes a dust rather than a bait:</strong>{' '}
        <em>
          &ldquo;Careful dusting of dry cracks and crevices with diatomaceous earth and appropriate
          equipment is an option.&rdquo;
        </em>{' '}
        <strong>No dust is named on this page.</strong> The source attaches both care and equipment
        to the method, and neither is a property a product listing can evidence.
      </p>

      <h2 id="chemical">What the Sources Say About Sprays and Foggers</h2>
      <p>
        <strong>
          No spray, dust or fogger is named on this page. What follows is what the sources record.
        </strong>
      </p>
      <p>
        <strong>UC IPM, in a document its own page dates to 12/2009 — which matters for a claim
        about what is on sale:</strong>{' '}
        <em>
          &ldquo;Hundreds of commercially available insecticides list firebrats and silverfish on
          their labels. However, most of these products haven&rsquo;t been adequately tested.&rdquo;
        </em>
      </p>
      <p>
        The same source says insecticides are not required to control light infestations or an
        occasional insect, that these can be managed by reducing water sources and through physical
        control, and that insecticides will not be effective unless you also remove the moisture,
        food and hiding places that let these pests thrive. And on one whole class:{' '}
        <em>
          &ldquo;Foggers aren&rsquo;t recommended to treat silverfish and firebrat
          infestations.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS is blunt about the difficulty:</strong>{' '}
        <em>&ldquo;Silverfish control can be challenging.&rdquo;</em>
      </p>

      <h2 id="people">Whether They Harm People</h2>
      <p>
        <strong>
          Across six publications we found no report of a disease and no report of an allergic
          reaction. What the sources do say about people is limited to two statements, and both are
          negative.
        </strong>
      </p>
      <p>
        <strong>UC IPM, on the mouthparts:</strong>{' '}
        <em>
          &ldquo;Firebrats and silverfish have very weak jaws which causes them to scrape, instead of
          bite, the surface of paper.&rdquo;
        </em>{' '}
        That statement is about paper rather than skin, and it is the only use of the word bite in
        any of the six sources.
      </p>
      <p>
        <strong>UF/IFAS, on the misleading name given to a related insect:</strong>{' '}
        <em>
          &ldquo;The term &ldquo;lice&rdquo; in the names is somewhat misleading because none of
          these insects are parasites and few of them have a louselike appearance.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Those are reported here as those sources state them. This page grades nothing and names no
          illness, because no source consulted named one.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the six publications below, all fetched
        on 28 August 2026. Where a source suppresses its own publication date in markup that does not
        render, that is stated rather than the hidden date being cited, and where the age of a source
        bears on a claim the date is written into the sentence carrying it.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
