import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { GERMAN_ROACH_NAV, GERMAN_ROACH_HOME } from '../components/germanCockroachNav';

const URL = 'https://pestproindex.com/us/german-cockroaches';
const TITLE = 'German Cockroaches: Why Bait Station Size Matters';
const DESCRIPTION =
  'The cockroach that lives indoors and can\'t survive outside. The small bait stations UF/IFAS says it needs, and four positions on treating it yourself.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'German Cockroaches', item: URL }],
};

// ---------------------------------------------------------------------------
// SCOPE: Blattella germanica ALONE. The four large outdoor species belong to
// /us/palmetto-bugs and are handed off by name, not re-litigated here.
//
// THE SIZE CRITERION IS UF/IFAS'S SENTENCE AND ONLY UF/IFAS'S. Mississippi State
// also carries a station-size sentence — "Bait stations designed specifically for
// German cockroaches are too small" — but it sits INSIDE MSU's large-roach block,
// where it means too small FOR LARGE ROACHES. Under S53-G that is not this page's
// sentence and it is NOT cited here. UF/IFAS states the affirmative form, naming
// both classes inside one sentence, which is the S53-I labelling case and safe.
//
// MSU IS A TWO-PART DOCUMENT AND EVERY CLAIM RECORDS ITS PART. Its German cockroach
// block runs to roughly character 24,500 of the reading-order extraction; its large
// roach block begins there. Nothing crosses.
//
// THE MSU PDF EXTRACTION MODE MATTERS. pdftotext -layout interleaves table cells
// into the prose and breaks sentences that are contiguous in reading order. Every
// MSU quotation here was located against the READING-ORDER extraction. One MSU
// sentence is broken by a running page footer and is therefore carried in REPORTED
// SPEECH ONLY, never quoted, because eliding the footer would be a mid-quote
// elision (S45-E).
//
// THE MEDICAL MATERIAL IS THREE SEPARATE CLAIMS AND THEY NEVER MERGE (S54-C):
//   ALLERGEN            BlaG 1 and BlaG 2, the 1,000-units-a-day figure, asthma
//   MECHANICAL CARRIAGE organisms carried on and in the insect
//   BITE                one doubly hedged sentence in UF/IFAS IN128
// No sentence on this page spans two of them, and no summary collapses them.
//
// NC STATE'S WORD "vector" APPEARS ONLY INSIDE A QUOTATION ATTRIBUTED TO NC STATE
// IN THE SAME SENTENCE. It is never in this site's voice, and it is in no heading,
// no summary, no schema field and no meta description.
//
// CARDS: four. Two criteria carry them.
//   GC1 a small bait station     2 cards
//   GC3 an IGR containing hydroprene or pyriproxyfen   2 cards, one of which is
//                                also a gel and therefore also satisfies GC2
//   B00HTE2IKK DID NOT CARD: its twin suspicion against the already-carded
//   B0148W0WOE could not be resolved from collected data. Part number 383920 sits
//   on TWO different ASINs with different stated plunger counts, B00HTE2IKK states
//   no part number, and B0148W0WOE's bullets were never captured. Unresolved means
//   uncarded.
//   B00XLTYMQ0, B0049EKEEK and B0F6LXCZHH did not card either; grounds in the round
//   report and the identity bank.
//
// GC4, A GLUE TRAP FOR MONITORING, IS SOURCED AND UNCARDED. No candidate was
// fetched for it. The page says so rather than leaving a reader to assume nothing
// exists.
// ---------------------------------------------------------------------------

type ProductRecord = { asin: string; cardName: string; whatItDoes: string[] };

const stationProducts: ProductRecord[] = [
  {
    asin: 'B000KL1LDE',
    cardName: 'Combat Max 12 Month Roach Killing Bait, Small Roaches, Kill Nest, 18 Count',
    whatItDoes: [
      'A small bait station, which is the form UF/IFAS names for this species. Its own text describes eighteen ready-to-use stations needing no activation',
      'Its own feature text names the target: a blend of foods that German roaches and other small roaches find attractive',
      'States its active ingredient as fipronil, and its duration as up to twelve months. Both figures are the seller’s, not a source’s',
      '⚠ Amazon search rendered this same ASIN under a second, longer title. The title printed here was read from the product page itself. Check the ASIN rather than the model wording',
    ],
  },
  {
    asin: 'B000FJRSMO',
    cardName: 'Combat Roach Killing Bait Stations, Small Roaches, Kills the Nest, 12 Count',
    whatItDoes: [
      'A small bait station in the same form as the card above, supplied as twelve stations by its own count',
      'Its own feature text uses the same phrase for the target: a blend of foods that German roaches and other small roaches find attractive',
      'States a different active ingredient from the card above — hydramethylnon — and a different duration, up to three months',
      'It is not a repackaging of the card above. Different active ingredient, different stated duration, different count, and the two listings share only part of their text',
    ],
  },
];

const igrProducts: ProductRecord[] = [
  {
    asin: 'B0CYJMJCQ9',
    cardName:
      'Advion Trio Cockroach Gel Bait, 4 Tubes x 30-Grams, 1 Plunger and 2 Tips, Formulated with 0.6% Indoxacarb, 0.1% Novaluron and 0.1% Pyriproxyfen',
    whatItDoes: [
      'A gel in a syringe, which is the first of the two forms Mississippi State names as especially useful for homeowners',
      'Its own feature text names three active ingredients including pyriproxyfen, which is one of the two growth-regulator ingredients Mississippi State names. It is therefore the only card here that meets both criteria on this page at once',
      'Its own text describes preventing molting in nymphs and limiting reproduction in mature cockroaches, which is the mechanism Mississippi State describes for this class',
      'Its own text names no cockroach species at all. It says cockroach populations. Nothing here is evidence that it was tested on this one',
    ],
  },
  {
    asin: 'B0BY3PSWMB',
    cardName: 'Gentrol Point Source IGR Discs ZOE1007, 20 Pack',
    whatItDoes: [
      'A growth regulator on an adhesive disc rather than in a bait. Its own text names hydroprene, the second of the two ingredients Mississippi State names for this class',
      'Its own text states the mechanism plainly: it interrupts the life cycle so insects cannot reproduce, for up to three months, and each disc covers up to 75 square feet',
      'Its own text describes it as a non-spray formulation for areas where sprays are not suitable. Mississippi State separately states that growth regulators do not kill adult roaches, so this is not a fast fix and is not offered as one',
      '⚠ This is a reseller bundle. Its title includes gloves and a pest identification card, which are not the pest-control product. Buy it for the discs',
      '⚠ A near-identical Gentrol listing exists under a different ASIN whose text names neither hydroprene nor this insect. Another differs from this one by a single character inside the same prefix. Copy the ASIN, never the name',
    ],
  },
];

const tocItems = [
  { id: 'indoors', title: 'It Lives Indoors and Cannot Live Outside' },
  { id: 'identify', title: 'Half an Inch, and Two Stripes' },
  { id: 'health', title: 'What the Sources Say About Health' },
  { id: 'numbers', title: 'Four Sources, Four Numbers' },
  { id: 'first', title: 'What Every Source Puts First' },
  { id: 'diy', title: 'Four Positions on Whether You Should Do This Yourself' },
  { id: 'stations', title: 'Small Bait Stations' },
  { id: 'growth', title: 'Gel Bait and Growth Regulators' },
  { id: 'aversion', title: 'Why a Bait Stops Working' },
  { id: 'uncarded', title: 'Sourced, With No Product Named' },
  { id: 'palmetto', title: 'If It Is Longer Than an Inch' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'How do I know it is a German cockroach and not something bigger?',
    answer:
      'By length, and the sources make it the first job. Mississippi State University Extension, in a publication whose colophon reads Publication 3346 (POD-01-26) and Copyright 2026, states that adult German cockroaches are only about half an inch long and have two dark stripes on the front part of their back, and that adult large roaches are more than one inch long. The same source says the first step in preventing or controlling cockroaches is to know which species you are trying to control. UF/IFAS Extension gives the adult as 10 to 15 mm, roughly three-eighths to nine-sixteenths of an inch. If what you have is longer than an inch, our palmetto bugs page covers it and this page does not.',
  },
  {
    question: 'Why does the size of the bait station matter?',
    answer:
      'Because one source makes it a fitness test rather than a preference. UF/IFAS Extension states to get small stations for German cockroaches and large stations for the larger outdoor cockroaches. That sentence names both classes at once, which is why it can be applied to either. It is the only affirmative statement about station size used on this page. Mississippi State also has a sentence about station size, but it sits inside that publication section on the large roaches rather than its section on this one, so it is not used here and nothing on this page rests on it.',
  },
  {
    question: 'Are German cockroaches a health problem or just unpleasant?',
    answer:
      'The sources do not agree, and this page reports all of them. Mississippi State University Extension calls it the most economically and medically important cockroach in the world, and states that dried particles from its feces, shed skins and dead bodies are a key cause of asthma and allergy problems for people living in heavily infested buildings. NC State Extension describes infestations as posing immense health risks. UF/IFAS Extension, in the same publication that records severe allergic responses, states that the German cockroach is considered an aesthetic pest and that the action threshold depends on the tolerance of the people living in the infested dwelling. Three positions from three publishers. We report them and grade none of them, and no clinical guidance appears on this page because none of these sources provides any.',
  },
  {
    question: 'The bait worked for a week and then stopped. What happened?',
    answer:
      'Mississippi State University Extension names the mechanism and it belongs to this species. It states that German cockroach populations develop bait aversion if they are repeatedly exposed to the same bait, using that phrase in its own quotation marks, and that if they do not readily take the first bait you try, you should switch to another brand or type of bait. The same source states that unconsumed bait dries out over time and becomes unpalatable. It also states that you should not apply insecticide sprays in areas where baits are used, because the sprays can potentially repel roaches and prevent them from eating the bait. A spray put down near a bait can therefore be the reason the bait stopped working.',
  },
  {
    question: 'Should I just call a professional?',
    answer:
      'Four positions exist across three publishers, and two of them are the same publisher. NC State Extension, in an undated publication, states that it is essential to involve and rely upon professional pest management services for German cockroach control as soon as this pest is identified. NC State Extension, in a separate page it dates to May 2013, states that an integrated pest management approach can be used effectively for German cockroach control, and then gives a homemade trap recipe for a householder to build. UF/IFAS Extension states that homeowners may undertake their own plan with good success. Mississippi State University Extension frames it as a matter of time and inclination. This page does not adjust any of them to fit the others, and the fact that two of the four sit on the same side does not make that side better supported.',
  },
];

const sources: Source[] = [
  {
    label:
      'Publication P3346 — Control Cockroaches in and Around Your Home. The source of the indoor-only statement, the identification lengths, the allergen and asthma statement, the sanitation and exclusion material, the crack figure for this species, the bait material, the bait-aversion statement and every statement about growth regulators. It is a TWO-PART document with a German cockroach section and a separate large-roach section, and only the German cockroach section is used here',
    publisher: 'Mississippi State University Extension',
    date: 'Renders TWO surfaces and both are given: Publication 3346 (POD-01-26) and Copyright 2026. Its colophon states it is a revision by Santos Portugal of an original by Blake Layton and Jerome Goddard, and the original publication date does not render. Its own reference list reaches back to 2005 and 2011, so a 2026 revision is not 2026 data. Fetched 29 August 2026',
    href: 'https://extension.msstate.edu/sites/default/files/document/2026-01/P3346_web.pdf',
  },
  {
    label:
      'ENY-214/IG082 — Cockroaches and Their Management. The source of the station-size criterion used on this page, the never-spray-where-baited rule, the egg range, the kitchen and bathroom statement, the grocery-bag route and the water figure. It is a multi-species document and only its German cockroach material and its one sentence naming both size classes are used',
    publisher: 'UF/IFAS Extension',
    date: 'NO DATE OF ANY KIND RENDERS on this page. Four date values exist in the page markup, including a publication stamp, but none of them renders and none is cited. Fetched 29 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/IG082',
  },
  {
    label:
      'EENY-002/IN128 — German Cockroach, Blattella germanica (Linnaeus). A single-species document, and the source of the life-cycle figures, the population composition, the cold-temperature limit, the aesthetic-pest statement and the one bite sentence on this page',
    publisher: 'UF/IFAS Entomology and Nematology',
    date: 'NO DATE OF ANY KIND RENDERS on this page. A publication stamp exists in the page markup and does not render, so it is not cited. Fetched 29 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/IN128',
  },
  {
    label:
      'German Cockroach: Biology, Identification, Control. The source of the insecticide-resistance caution, the homeowner integrated pest management position and the antibiotic-resistant bacteria statement. It is the older of this site’s two NC State sources and the two do not agree with one another',
    publisher: 'NC State Extension',
    date: 'Renders Updated: May 8, 2013, which is the oldest current revision in this set at thirteen years. Fetched 29 August 2026',
    href: 'https://entomology.ces.ncsu.edu/german-cockroach/',
  },
  {
    label:
      'Biology and Behavior of the German Cockroach. A single-species document, and the source of the named allergen proteins, the daily allergen figure, the mean egg count, the development window and the professional-services position. It is the newer and fuller of this site’s two NC State sources and it contradicts the older one on whether a householder should treat this insect',
    publisher: 'NC State Extension Publications',
    date: 'NO DATE SURFACE OF ANY KIND EXISTS on this page — none rendered, none hidden in markup, none in structured data. The document carrying the strongest claims in this set is the one that cannot be dated. Fetched 29 August 2026',
    href: 'https://content.ces.ncsu.edu/biology-behavior-of-the-german-cockroach',
  },
];

export default function GermanCockroachesPage() {
  return (
    <UsPageLayout
      title="German Cockroaches"
      subtitle="One species, Blattella germanica, and the sources treat it as a different problem from every other cockroach in a house. It is the small one, it does not live outdoors, and the product that works on the big ones is the wrong size for it."
      lastUpdated="August 2026"
      readingTime="16 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={GERMAN_ROACH_HOME}
      clusterNav={GERMAN_ROACH_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Quotation marks on this page mark a source&rsquo;s own words and nothing else. A term being
        defined is set in <em>italics</em> instead, so the marks keep one meaning throughout.
      </p>
      <p>
        <strong>This page covers one species and hands the rest off.</strong> Every claim below
        belongs to <em>Blattella germanica</em>. The large outdoor cockroaches that the name{' '}
        <em>palmetto bug</em> is applied to are covered on{' '}
        <Link href="/us/palmetto-bugs">our palmetto bugs page</Link>, and none of their material is
        repeated here.
      </p>

      <h2 id="indoors">It Lives Indoors and Cannot Live Outside</h2>
      <p>
        <strong>
          Mississippi State University Extension, in a publication its colophon marks Publication
          3346 (POD-01-26) and Copyright 2026, states the fact that shapes everything else:
        </strong>{' '}
        <em>
          &ldquo;German cockroaches are indoor pests that are rarely seen outdoors because they
          can&rsquo;t survive outdoors.&rdquo;
        </em>{' '}
        <strong>NC State Extension Publications puts it as evolutionary history</strong>, describing
        a species that{' '}
        <em>&ldquo;has evolved to exclusively infest and reside within built structures&rdquo;</em>.
      </p>
      <p>
        <strong>That is the opposite of the animal on our other cockroach page.</strong> There, the
        sources describe insects that breed outdoors and come in. Here they describe an insect with
        nowhere else to be.{' '}
        <strong>
          Everything that follows &mdash; why sanitation outranks products, why the yard is not the
          answer, why the station is a different size &mdash; follows from that one difference.
        </strong>
      </p>
      <p>
        <strong>UF/IFAS Extension says where in the building to look:</strong>{' '}
        <em>
          &ldquo;The German cockroach is usually found in the kitchen and bathroom, although it may
          be found all over the house.&rdquo;
        </em>{' '}
        <strong>And how it usually arrives:</strong>{' '}
        <em>
          &ldquo;German cockroaches can initially infest a structure when infested grocery bags are
          brought inside.&rdquo;
        </em>{' '}
        <strong>UF/IFAS Entomology and Nematology names the limit on its range:</strong>{' '}
        <em>
          &ldquo;The major factor limiting German cockroach survival appears to be cold
          temperatures.&rdquo;
        </em>
      </p>

      <h2 id="identify">Half an Inch, and Two Stripes</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-300 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Every source here asks a reader to settle the species before doing anything, and the test
          is length.
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>Mississippi State University Extension:</strong>{' '}
          <em>
            &ldquo;The first step in preventing or controlling cockroaches is to know which species
            you are trying to control.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>The same source gives the measurement, and it names both animals:</strong>{' '}
          <em>
            &ldquo;Adult German cockroaches are only about &frac12; inch long and have two dark
            stripes on the front part of their back. Adult large roaches are more than 1 inch
            long.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-blue-900">
          <strong>UF/IFAS Entomology and Nematology gives its own figure:</strong>{' '}
          <em>
            &ldquo;The adult is 10&ndash;15 mm (~3/8-9/16 in) long, brown to dark brown in color with
            two distinct parallel bands running the length of the pronotum.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-blue-900">
          Half an inch, two stripes, and it does not fly. Longer than an inch is a different page.
        </p>
      </div>

      <h2 id="health">What the Sources Say About Health</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          The sources make three different claims here. They are not the same claim and this page
          never merges them. Read the label on each.
        </p>

        <p className="mt-5 mb-0 text-sm font-bold uppercase tracking-wide text-red-900">
          One. Allergen and asthma
        </p>
        <p className="mt-2 mb-0 text-sm text-red-900">
          <strong>Mississippi State University Extension:</strong>{' '}
          <em>
            &ldquo;Dried particles resulting from German cockroach feces, shed skins, and bodies of
            dead roaches are a key cause of asthma and allergy problems for people living in heavily
            infested buildings.&rdquo;
          </em>{' '}
          The same source calls this{' '}
          <em>
            &ldquo;the most economically and medically important cockroach in the world.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>NC State Extension Publications names the proteins and gives a rate:</strong> it
          identifies the two largest culprits as <em>BlaG 1</em> and <em>BlaG 2</em>, and states that{' '}
          <em>
            &ldquo;a single female German cockroach can produce up to 1,000 units of the major
            allergen BlaG1 each day&rdquo;
          </em>
          . The same source states the other half:{' '}
          <em>
            &ldquo;It has been shown that eliminating the infestation greatly reduces the amount of
            allergens present in the home &ndash; leading to healthier homes and reductions in
            asthma.&rdquo;
          </em>
        </p>

        <p className="mt-5 mb-0 text-sm font-bold uppercase tracking-wide text-red-900">
          Two. Organisms carried on the insect
        </p>
        <p className="mt-2 mb-0 text-sm text-red-900">
          <strong>This is a different claim from the one above and it is not the same as an
          infection.</strong>{' '}
          <strong>UF/IFAS Entomology and Nematology</strong> states that German cockroaches{' '}
          <em>
            &ldquo;adulterate food or food products with their feces and defensive secretions,
            physically transport and often harbor pathogenic organisms&rdquo;
          </em>
          .
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>
            NC State Extension goes further than any other source here, and its sentence is given
            whole with its date attached:
          </strong>{' '}
          in a page NC State dates to May 2013, it states that{' '}
          <em>
            &ldquo;Because German cockroaches are able to vector antibiotic-resistant bacteria, its
            presence must be controlled to reduce the threat of bacterial contamination in hospitals
            and swine farms.&rdquo;
          </em>{' '}
          <strong>
            That wording is NC State&rsquo;s and the setting it names is hospitals and swine farms.
            This site does not restate it in its own words and makes no claim of its own about what
            these insects transmit.
          </strong>
        </p>

        <p className="mt-5 mb-0 text-sm font-bold uppercase tracking-wide text-red-900">
          Three. Biting, in one hedged sentence
        </p>
        <p className="mt-2 mb-0 text-sm text-red-900">
          <strong>
            One source in this set records a bite, and both of its qualifiers are its own and stay
            attached.
          </strong>{' '}
          <strong>UF/IFAS Entomology and Nematology</strong> states that German cockroaches{' '}
          <em>
            &ldquo;in extremely heavy infestations have been reported to bite humans and feed on food
            residues on the faces of sleeping humans.&rdquo;
          </em>{' '}
          <strong>
            Extremely heavy infestations, and reported to. No other source in this set repeats it,
            and this page makes no bite claim of its own.
          </strong>
        </p>

        <p className="mt-5 mb-0 text-base font-bold text-red-900">
          Three claims, three labels, and no sentence on this page joins two of them. Every one is
          reported with the publication that made it and none is graded. No clinical guidance appears
          here, because not one of these five publications provides any.
        </p>
      </div>
      <p>
        <strong>How serious this is, is itself a disagreement.</strong> Mississippi State calls it the
        most medically important cockroach in the world; NC State Extension Publications describes
        infestations as posing immense health risks; and{' '}
        <strong>
          UF/IFAS Entomology and Nematology, in the same document that records severe allergic
          responses and the bite sentence above, states:
        </strong>{' '}
        <em>
          &ldquo;Since the German cockroach is considered an aesthetic pest, the action threshold for
          this insect depends upon the tolerance of the people living in the infested
          dwelling.&rdquo;
        </em>{' '}
        <strong>Three positions. We do not average them.</strong>
      </p>

      <h2 id="numbers">Four Sources, Four Numbers</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two basic figures about this insect come out differently in four publications, and in two
          cases the same publisher gives two answers. Both spreads are printed rather than averaged.
        </p>
        <p className="mt-4 mb-0 text-sm font-bold uppercase tracking-wide text-amber-900">
          Eggs in one case &mdash; four figures
        </p>
        <ul className="mt-2 mb-0 space-y-1 text-sm text-amber-900">
          <li>
            <strong>Mississippi State University Extension:</strong> an egg case{' '}
            <em>&ldquo;which contains approximately three dozen eggs&rdquo;</em>
          </li>
          <li>
            <strong>UF/IFAS Extension, in its multi-species publication:</strong>{' '}
            <em>
              &ldquo;There may be from 30 to 48 eggs in the capsule of the German cockroach, but
              capsules of other cockroaches may have only 10 to 28 eggs.&rdquo;
            </em>
          </li>
          <li>
            <strong>UF/IFAS Entomology and Nematology, in its single-species publication:</strong>{' '}
            <em>&ldquo;A typical egg case contains 30 to 40 eggs.&rdquo;</em>
          </li>
          <li>
            <strong>NC State Extension Publications:</strong>{' '}
            <em>&ldquo;The mean number of eggs per case is 40&rdquo;</em>
          </li>
        </ul>
        <p className="mt-3 mb-0 text-sm text-amber-900">
          <strong>
            The second and third of those are both UF/IFAS, and they publish different ranges.
          </strong>
        </p>
        <p className="mt-5 mb-0 text-sm font-bold uppercase tracking-wide text-amber-900">
          How long to adulthood &mdash; and one source gives two answers
        </p>
        <ul className="mt-2 mb-0 space-y-1 text-sm text-amber-900">
          <li>
            <strong>Mississippi State University Extension:</strong>{' '}
            <em>
              &ldquo;It takes 2&ndash;6 months for German cockroach nymphs to become adults, and
              adults can live as long as 9 months.&rdquo;
            </em>
          </li>
          <li>
            <strong>UF/IFAS Entomology and Nematology:</strong>{' '}
            <em>&ldquo;At room temperature, nymphs complete development in about 60 days.&rdquo;</em>{' '}
            and <em>&ldquo;The entire life cycle is completed in about 100 days.&rdquo;</em>
          </li>
          <li>
            <strong>NC State Extension Publications:</strong>{' '}
            <em>
              &ldquo;It can take anywhere from 70-100 days for a single German cockroach to reach
              adulthood.&rdquo;
            </em>{' '}
            <strong>and, in the same document:</strong>{' '}
            <em>
              &ldquo;It takes roughly 40 days for a newly emerged German cockroach to reach
              adulthood.&rdquo;
            </em>
          </li>
        </ul>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          Those last two sentences are in one publication and it does not say how they fit together.
          We report both rather than picking the one that reads more neatly.
        </p>
      </div>
      <p>
        <strong>One figure the sources do agree on is what a population looks like.</strong> UF/IFAS
        Entomology and Nematology states that{' '}
        <em>
          &ldquo;Actively growing field populations are comprised of 80 percent nymphs and 20 percent
          adults.&rdquo;
        </em>{' '}
        Four adults on a counter is not four insects.
      </p>

      <h2 id="first">What Every Source Puts First</h2>
      <p>
        <strong>Mississippi State University Extension is unambiguous about the order</strong>, in its
        German cockroach section:{' '}
        <em>
          &ldquo;Sanitation is the most important management tool for German cockroach
          control.&rdquo;
        </em>{' '}
        And on how far that alone can go:{' '}
        <em>
          &ldquo;In single-family dwellings, good sanitation is often all that is needed to prevent
          infestations.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS Extension gives the reason water matters most:</strong>{' '}
        <em>&ldquo;German cockroaches can survive only 12 days with food but no water.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          One sealing figure, and it belongs to this species by name.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>Mississippi State University Extension, in its German cockroach section:</strong>{' '}
          <em>
            &ldquo;Because of their size and shape, adult German cockroaches can crawl through cracks
            less than 1/8 inch wide, and nymphs can get through much smaller cracks.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-slate-800">
          That figure is for this insect. A different figure for cockroaches in general appears on our
          palmetto bugs page, from a different publisher, and the two are not interchangeable. Read the
          species on any number before acting on it.
        </p>
      </div>

      <h2 id="diy">Four Positions on Whether You Should Do This Yourself</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          This is the sharpest disagreement in the pack, and one publisher is on both sides of it.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>NC State Extension Publications, in an undated document:</strong>{' '}
          <em>
            &ldquo;it is essential to involve and rely upon professional pest management services for
            German cockroach control as soon as this pest is identified&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>NC State Extension, in a page it dates to May 2013:</strong>{' '}
          <em>
            &ldquo;an IPM, or integrated pest management approach can be used effectively for German
            cockroach control&rdquo;
          </em>{' '}
          &mdash; and that page then sets out a homemade trap a householder can build from a jar.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UF/IFAS Extension</strong> states that homeowners may undertake their own integrated
          pest management plan for cockroach control with good success, or may elect to contract a
          professional. <strong>Mississippi State University Extension</strong> frames the professional
          route as a matter of not having the time or inclination to do it yourself.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          Four positions from three publishers, and two of the four are the same publisher
          contradicting itself. We do not adjust one to fit another, and we do not treat two sources
          leaning the same way as confirmation &mdash; particularly when they are the same
          organisation. If you are deciding, the disagreement itself is the useful information.
        </p>
      </div>
      <p>
        <strong>One further caution belongs here rather than beside a product.</strong> NC State
        Extension, in its May 2013 page, states:{' '}
        <em>
          &ldquo;Care must be taken to avoid regular spray schedules to reduce the likelihood of
          insecticide resistance.&rdquo;
        </em>{' '}
        <strong>Mississippi State</strong> describes this species as one of the most difficult roaches
        to control precisely because it develops resistance to insecticides and, in that
        source&rsquo;s own quotation marks, <em>&ldquo;aversion&rdquo;</em> to baits.
      </p>

      <h2 id="stations">Small Bait Stations</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          One sentence in one publication is the whole criterion for the two products below. It is a
          fitness test, not a ranking.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>UF/IFAS Extension:</strong>{' '}
          <em>
            &ldquo;Get small stations for German cockroaches and large stations for the larger outdoor
            cockroaches.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>And the form, from Mississippi State University Extension:</strong>{' '}
          <em>
            &ldquo;Baits are the most effective treatments for controlling German cockroaches.&rdquo;
          </em>{' '}
          <em>
            &ldquo;Gels, pastes, or childproof bait stations are especially useful for
            homeowners.&rdquo;
          </em>{' '}
          The same source rules a whole formulation out for this insect:{' '}
          <em>
            &ldquo;Some baits are also formulated as dusts or fine granules, but these products are
            more useful for control of large roaches.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-slate-800">
          A station sized for a palmetto bug is the wrong tool here, and a granular bait is the wrong
          formulation. Neither is a judgement about quality.
        </p>
      </div>
      <p>
        The two below satisfy that one criterion and nothing else. They are in no order of preference
        and neither is called better than the other, because no source consulted for this page compares
        any two products against each other.
      </p>
      {stationProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="growth">Gel Bait and Growth Regulators</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          This is the class our palmetto bugs page deliberately left out, and it left it out because
          the source attaches it to this insect and not to that one.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>Mississippi State University Extension, on growth regulators:</strong>{' '}
          <em>&ldquo;These products are especially useful in control of German cockroaches.&rdquo;</em>{' '}
          <strong>On what they do:</strong>{' '}
          <em>
            &ldquo;IGRs (Table 3) work by disrupting the development of immature roaches and/or
            preventing eggs from hatching.&rdquo;
          </em>{' '}
          <strong>On what to look for on a label:</strong>{' '}
          <em>
            &ldquo;Hydroprene and pyriproxyfen are the active ingredients contained in most
            commercially available IGR treatments.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          <strong>And on using them alongside a bait rather than instead of one:</strong>{' '}
          <em>
            &ldquo;IGRs are also useful when applied in combination with baits because exposure to
            IGRs causes German cockroaches to eat more bait.&rdquo;
          </em>{' '}
          The same source states they are{' '}
          <em>
            &ldquo;effective against insecticide-resistant strains&rdquo;
          </em>{' '}
          and gives that as a reason to use one in combination with an insecticide spray.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-slate-800">
          Slow by design. The same source states they do not kill adult roaches, so nothing below is a
          way of clearing a room this week.
        </p>
      </div>
      {igrProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}
      <p>
        <strong>One further gel bait was checked and is named nowhere on this page.</strong> It is sold
        in the same four-tube form as a product this site already names on another page, under a
        different ASIN, and nothing in either listing states that the difference between them is only
        packaging. Rather than put two numbers on what may be one product, we left it out.
      </p>

      <h2 id="aversion">Why a Bait Stops Working</h2>
      <p>
        <strong>Mississippi State University Extension names a failure mode specific to this
        species</strong>, using the phrase in its own quotation marks:{' '}
        <em>
          &ldquo;German cockroach populations develop &ldquo;bait aversion&rdquo; if they are
          repeatedly exposed to the same bait.&rdquo;
        </em>{' '}
        <em>
          (the inner quotation marks around bait aversion are the source&rsquo;s own and are left as
          published)
        </em>{' '}
        <strong>Its instruction follows in the next sentence:</strong>{' '}
        <em>
          &ldquo;If they do not readily take the first bait you try, switch to another brand or type of
          bait.&rdquo;
        </em>
      </p>
      <p>
        <strong>The second failure mode is one you can cause.</strong> Mississippi State states:{' '}
        <em>
          &ldquo;Do not apply insecticide sprays in areas where baits are used because the sprays can
          potentially repel roaches and prevent them from eating the bait.&rdquo;
        </em>{' '}
        <strong>UF/IFAS Extension states the same rule in its own words:</strong>{' '}
        <em>&ldquo;Never spray a liquid insecticide where baits have been applied.&rdquo;</em>
      </p>
      <p>
        <strong>And one whole product class the source sets aside.</strong> Mississippi State states
        that <em>&ldquo;aerosol foggers are not very useful or effective for cockroach control&rdquo;</em>
        , and no fogger is named on this page.
      </p>

      <h2 id="uncarded">Sourced, With No Product Named</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          These are supported by the sources and simply have no product named here. That is a gap in
          our sourcing, not a verdict on the products.
        </p>
        <ul className="mt-3 mb-0 space-y-2 text-base text-slate-800">
          <li>
            <strong>A glue trap, for finding them rather than killing them.</strong> Mississippi State
            University Extension:{' '}
            <em>
              &ldquo;Traps are useful survey tools to determine if, or where, infestations exist or to
              gauge the effectiveness of control efforts. But they are not control tools and will not
              provide effective stand-alone control.&rdquo;
            </em>{' '}
            We name no trap here. If you buy one, that sentence is the limit of what the source claims
            for it.
          </li>
          <li>
            <strong>Dusts for wall voids.</strong> The same source describes dusts as an especially
            effective way to treat wall voids and other otherwise inaccessible places. No candidate was
            sourced for this round and none is named.
          </li>
        </ul>
      </div>
      <p>
        <strong>Four products appear on this page and there is no fifth.</strong> A residual spray is
        not named, because the same source that permits one in special situations also describes sprays
        as generally less effective against this species than against the large roaches, and because
        two sources here forbid using one anywhere near a bait.
      </p>

      <h2 id="palmetto">If It Is Longer Than an Inch</h2>
      <p>
        <strong>Then it is not this insect and this page is the wrong one.</strong> Mississippi State
        puts adult large roaches at more than an inch and this species at about half of that, and it
        treats the two in separate sections of the same publication for that reason.
      </p>
      <p>
        <Link href="/us/palmetto-bugs">Our palmetto bugs page</Link> covers the large outdoor species
        that the name is applied to, including which insects the term takes in, the one among them that
        cannot fly and does not settle indoors, and the bait stations sized for them.{' '}
        <strong>
          None of that identification material is repeated here, so the two pages cannot drift apart.
        </strong>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          What we read in these sources and deliberately did not use here
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          Mississippi State&rsquo;s publication devotes a whole second section to the large roaches,
          with its own exclusion, sanitation and bait material and its own statement about station
          sizes. UF/IFAS&rsquo;s multi-species publication carries material on the Asian cockroach,
          which resembles this one but flies, and on outdoor species breeding in pine straw mulch.{' '}
          <strong>
            None of it is on this page. A figure inside another species&rsquo; section is not this
            species&rsquo; figure, however close it sits on the page.
          </strong>
        </p>
      </div>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the five publications below, all fetched
        on 29 August 2026. Two are single-species documents; three cover several cockroaches at once and
        only their German cockroach material is used. Where a source publishes no date, that is stated
        rather than a hidden one being cited, and where a document is a revision, both what renders and
        what does not are described. Three of the five carry no citable date at all, which is a fact
        about this literature rather than about this page.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
