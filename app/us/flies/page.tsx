import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { FLIES_NAV, FLIES_HOME } from '../components/fliesNav';

const URL = 'https://pestproindex.com/us/flies';
const TITLE = 'House Flies: What They Carry, How They Carry It, and What the Sources Support';
const DESCRIPTION =
  'House flies cannot bite. What extension sources say they do instead is carry contamination from filth onto food, mechanically rather than by infection. Four publications spanning 1999 to 2025, and the narrow product set they actually support.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'House Flies', item: URL }],
};

// ---------------------------------------------------------------------------
// MECHANICAL CARRIAGE, NOT VECTOR-BORNE TRANSMISSION. Every source describes the
// house fly picking pathogens up on and in its body and depositing them onto food.
// Colorado State says mechanically in that word. NOT ONE SOURCE CALLS THE HOUSE FLY
// A VECTOR. The single use of that word in the pack belongs to the FACE FLY, about
// pinkeye in LIVESTOCK — a different species and a different host, and under S53-G
// it is not this page's claim. The word is not applied to the house fly anywhere here.
//
// EVERY CLAIM CARRIES ITS SPECIES. UC IPM's flies document covers house flies, little
// house flies, stable flies, face flies and blow flies in one file. The bite question
// is the sharpest case: house flies cannot bite, stable flies give a painful bite,
// and those two sentences sit under different species headings in the same document.
// This is the S53-I labelling case, not the distance case — splitting a labelled pair
// for distance would be a mid-quote elision.
//
// THIS PAGE HANDS OFF TO /us/cluster-flies AND DOES NOT RESTATE IT. That page already
// defines what a filth fly is, in the site's own voice, and already covers face flies
// and blow flies. Repeating any of it here would make the estate say the same thing
// twice in two places that can drift apart.
//
// CARDS: four. All one criterion.
//   FL1 sticky fly paper or ribbon   4 cards, from six candidates. TWO TWIN PAIRS WERE
//                                    REFUSED: byte-identical bullets differing only by
//                                    pack quantity, with no listing saying the
//                                    difference is cosmetic (S53-H).
//
// THREE FURTHER CRITERIA ARE SOURCED AND UNCARDED, and the page says so rather than
// leaving the reader to assume nothing exists: inverted cone traps with fly food
// attractant, ultraviolet light traps indoors, and bins with tight-fitting lids. No
// candidates were sourced for them. Screens are RETIRED for want of a specification:
// well-fitted is a vocabulary, not a number a listing can be measured against.
// ---------------------------------------------------------------------------

type ProductRecord = { asin: string; cardName: string; whatItDoes: string[] };

const products: ProductRecord[] = [
  {
    asin: 'B09VS6DHBK',
    cardName: 'Fly Strips Indoor Sticky Hanging Ribbon Roll, 24 Pack with Pins',
    whatItDoes: [
      'A hanging adhesive ribbon, which is the form UC IPM names. Its own text describes an extremely sticky glue that traps insects landing on it',
      'States in its own text that it contains no bait, so nothing about it is targeted at one fly species over another',
      'Twenty-four rolls with hanging pins, and the listing says a roll can hang for up to three months before replacing',
      'The same seller lists an otherwise identical ten-pack under a separate ASIN. Neither listing says the difference is only the pack size, so we treat them as two products and name only this one',
    ],
  },
  {
    asin: 'B07H58BNFT',
    cardName: 'Sticky Fly Ribbons, 32 Pack',
    whatItDoes: [
      'A paper ribbon roll coated on both sides, per its own text, and the largest pack count of the four named here',
      'Its own text states no baiting and no vapours, which matches what UC IPM describes as a plain sticky ribbon',
      '⚠ The listing contradicts itself: its title includes the words Fly Bait while a feature line states No Baiting. We make no bait claim for it, and neither should you rely on one',
      'Two spelling errors sit in the seller&rsquo;s own text and are left as published rather than quietly corrected',
    ],
  },
  {
    asin: 'B0BWM9BBH5',
    cardName: 'Fly Stick Sticky Traps for Indoors and Outdoors, 4 Pack',
    whatItDoes: [
      'A sticky stick rather than a ribbon, supplied in its own open-faced box, which the listing says allows more discreet placement',
      'Ships with no bait but includes a dish so a buyer can add their own. The bait would be yours, not a claim the seller makes',
      'Can stand on a surface or hang from a hook, per the listing',
      'UC IPM puts a hard limit on this whole class, quoted above these cards. A few flies in a confined area is what it is for',
    ],
  },
  {
    asin: 'B08DMY3WWX',
    cardName: 'Trappify Hanging Fly Trap with Bait Cup, 2 Pack',
    whatItDoes: [
      'The only one of the four whose own feature text names house flies, describing use as a house fly trap indoor by trash cans',
      '⚠ Its title says Fruit Fly Traps. Its own feature text describes house fly and gnat use, so it is not a fruit-fly-specific device despite the name. Buy it for what the feature text says, not the title',
      'Ships with no attractant. The listing says a spoonful of honey in the built-in cup speeds results, which is the buyer adding bait rather than the product carrying one',
      'A recycled paper stick the listing says lasts up to ninety days and is then discarded whole',
    ],
  },
];

const tocItems = [
  { id: 'health', title: 'What the Sources Say They Carry' },
  { id: 'bite', title: 'House Flies Cannot Bite. Some Other Flies Can' },
  { id: 'not-cluster', title: 'If the Flies Are Slow and at a Window' },
  { id: 'lifecycle', title: 'Why They Appear So Fast' },
  { id: 'sanitation', title: 'What Every Source Puts First' },
  { id: 'traps', title: 'Sticky Paper and Ribbons' },
  { id: 'uncarded', title: 'Three Things the Sources Support That We Name No Product For' },
  { id: 'avoid', title: 'Two Things the Sources Tell You Not to Do Near Food' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Can a house fly bite you?',
    answer:
      'No, and UC IPM gives the anatomical reason in the same sentence. It states that because they have sponging mouthparts, house flies cannot bite, and adds that they may nonetheless play an important role in disease transmission to humans and animals. The confusion usually comes from a different insect. UC IPM states in the same document that both sexes of stable flies feed about once per day on the blood of animals, and sometimes people, and are known to give a painful bite. If something in your house is biting, a house fly is not the candidate, and this page is careful never to let a bite claim float free of the fly it belongs to.',
  },
  {
    question: 'Do house flies actually spread disease?',
    answer:
      'The sources say they carry disease organisms, and the mechanism matters. UC IPM states that house flies can carry a number of disease agents which they pick up while feeding on animal feces, animal body secretions, or kitchen waste and which they can deposit onto human foods following contact with or feeding on these human foods. Colorado State University Extension, in a fact sheet first published in November 1999 and reviewed in August 2025, states that because of this habit house flies can pose serious health threats by mechanically transmitting disease organisms. That is carriage on and in the insect, from filth to food. It is not the same claim as an infected insect injecting something into you, and no source consulted makes that second claim about the house fly.',
  },
  {
    question: 'The flies at my window are big and slow. Are they house flies?',
    answer:
      'Probably not, and we have a separate page for that. Slow dark flies bumping down an upstairs window, especially in autumn or on the first warm day of spring, are usually cluster flies, which are a different insect with different habits and a different health position. Our cluster flies page covers what they are, why their larvae develop in earthworms, and why the answer there is building sealing rather than sanitation. It also covers face flies and blow flies, which this page deliberately does not repeat.',
  },
  {
    question: 'Will sticky fly paper solve an infestation?',
    answer:
      'UC IPM says plainly that it will not, and gives the scope in the same sentence. It states that sticky fly paper or ribbons are effective at eliminating a few flies in relatively confined areas but are not effective enough to manage heavy infestations or to provide control in an outdoor setting. So it is a tool for a few flies in a room, not a solution for a fly problem. The same source states that in general, poor exclusion and lack of sanitation are the major contributors to house fly problems, which is where the actual fix lives.',
  },
  {
    question: 'Should I use a bug zapper or a fly swatter in the kitchen?',
    answer:
      'Two sources say no, for the same reason, and it is not about effectiveness. UC IPM states that you should never use a bug zapper to kill flies near food preparation areas, because the insect body often explodes upon touching the wires and insect body parts can be propelled over several feet from the device. Colorado State University Extension states that because of this, bug zapper traps should never be used near areas where food is prepared. UC IPM separately states not to use fly swatters near food preparation areas because they may result in contaminating food with insect body parts. This page names no bug zapper and no swatter.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Flies — the source of the sponging mouthparts and cannot-bite statement, the disease agent list, the sanitation and exclusion position, the sticky paper limitation, the cone trap and ultraviolet trap statements, the tight-fitting lid instruction and the bug zapper warning. It is a multi-species document also covering little house flies, stable flies, face flies and blow flies, and only its house fly material is used here',
    publisher: 'UC Statewide IPM Program',
    date: 'Renders one date only, an update stamp of 05/2015. A January 2022 publication date exists in the page markup but is inside an HTML comment and does not render, so it is not cited. Fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/flies/',
  },
  {
    label:
      'Flies in the Home — the source of the mechanical transmission statement and the bug zapper warning. It is a multi-species document also covering cluster flies, fungus gnats, moth flies, humpbacked flies and vinegar flies, and only its house fly material is used here',
    publisher: 'Colorado State University Extension',
    date: 'Renders TWO dates and both are given wherever it is quoted: Published November 1999, Reviewed August 2025. A reviewed document is not new data',
    href: 'https://extension.colostate.edu/resource/flies-in-the-home/',
  },
  {
    label: 'Fly Control Around the Home — consulted for the household pest framing. Its cluster fly content is not used on this page',
    publisher: 'Purdue Extension Entomology',
    date: 'Renders a copyright line of 2016. No publication date renders. Fetched 28 August 2026',
    href: 'https://extension.entm.purdue.edu/publications/E-7/E-7.html',
  },
  {
    label: 'House Flies — the single-species document among the four, consulted for the food-to-food-preparation spread statement',
    publisher: 'Utah State University Extension',
    date: 'No date of any kind renders on the page. Fetched 28 August 2026',
    href: 'https://extension.usu.edu/planthealth/ipm/structural-pest-id-guide/house-fly',
  },
];

export default function FliesPage() {
  return (
    <UsPageLayout
      title="House Flies"
      subtitle="They cannot bite. What the sources say they do instead is move contamination from waste onto food, by carrying it rather than by injecting it. Every claim on this page carries the name of the fly it belongs to, because the documents behind it cover five different flies at once."
      lastUpdated="August 2026"
      readingTime="13 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={FLIES_HOME}
      clusterNav={FLIES_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Quotation marks on this page mark a source&rsquo;s own words and nothing else. A term being
        defined is set in <em>italics</em> instead, so the marks keep one meaning throughout.
      </p>

      <h2 id="health">What the Sources Say They Carry</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          All four sources describe the same thing, and the mechanism is the part that is usually
          got wrong: the fly carries contamination, it does not inject it.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UC IPM, in a page its own site dates to 05/2015:</strong>{' '}
          <em>
            &ldquo;House flies can carry a number of disease agents which they pick up while feeding
            on animal feces, animal body secretions, or kitchen waste and which they can deposit onto
            human foods following contact with or feeding on these human foods.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UC IPM, on what those agents cause:</strong>{' '}
          <em>
            &ldquo;House flies are known to carry bacteria and viruses that cause conditions such as
            diarrhea, cholera, food poisoning, yaws, dysentery, and eye infections.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>
            Colorado State University Extension, in a fact sheet first published in November 1999 and
            reviewed in August 2025, uses the word that settles the mechanism:
          </strong>{' '}
          <em>
            &ldquo;Because of this habit, house flies can pose serious health threats by mechanically
            transmitting disease organisms.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>Purdue Extension:</strong>{' '}
          <em>
            &ldquo;These flies are important household pests, not only because of the nuisance of
            their flying and buzzing, but because they may spread disease-carrying organisms (e.g.,
            bacteria).&rdquo;
          </em>{' '}
          <strong>Utah State University Extension</strong> states that house flies can spread disease
          from one food source to food preparation areas.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          Mechanical carriage is what every one of these describes. Not one of these publications
          says the house fly is an infected carrier that transmits an illness biologically, and this
          page does not say it either. It reports what those four state and grades none of it. No
          clinical guidance appears here, because none of these sources provides any.
        </p>
      </div>

      <h2 id="bite">House Flies Cannot Bite. Some Other Flies Can</h2>
      <p>
        <strong>UC IPM gives the anatomy and the consequence in one sentence:</strong>{' '}
        <em>
          &ldquo;Because they have sponging mouthparts, house flies cannot bite; however, they may
          play an important role in disease transmission to humans and animals.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The document that sentence comes from covers five different flies. Read the species name
          on every claim, including ours.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM, on a different fly in the same document:</strong>{' '}
          <em>
            &ldquo;Both sexes of stable flies feed about once per day on the blood of animals (and
            sometimes people) and are known to give a painful bite.&rdquo;
          </em>{' '}
          And limiting that in its own sentence:{' '}
          <em>
            &ldquo;Although they are blood feeders and capable of transmitting some viruses, stable
            flies are not known to be significant carriers of disease agents in the United
            States.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          A biting fly in the house is not a house fly. If a claim on this page is not attached to a
          species name, that is a defect.
        </p>
      </div>

      <h2 id="not-cluster">If the Flies Are Slow and at a Window</h2>
      <p>
        <strong>Then they are probably not the subject of this page.</strong> Big, slow, dull flies
        bumping down an upstairs window in autumn, or on the first warm day of spring, are usually
        cluster flies &mdash; a different insect, with larvae that develop in earthworms rather than
        in waste, and a different health position entirely.
      </p>
      <p>
        <Link href="/us/cluster-flies">Our cluster flies page</Link> covers what they are, why they
        appear when they do, and why the answer there is sealing the building rather than chasing
        contamination.{' '}
        <strong>
          It is also where this site sets out what the term <em>filth fly</em> means and which flies
          fall inside it, and where face flies and blow flies are covered. None of that is repeated
          here, so the two pages cannot drift apart.
        </strong>
      </p>

      <h2 id="lifecycle">Why They Appear So Fast</h2>
      <p>
        <strong>All figures in this section are house fly figures</strong>, from UC IPM&rsquo;s
        05/2015 page.
      </p>
      <p>
        The same source describes eggs laid in warm, moist organic materials such as manure, garbage,
        lawn clippings, decaying vegetables and fruits, and states that development from egg to adult
        can take as little as 7 days. It also notes the number of eggs involved: several batches of
        about 100 to 150 eggs per female.
      </p>
      <p>
        <strong>Colorado State adds a seasonal note, and its two dates go with it:</strong> in a fact
        sheet first published in November 1999 and reviewed in August 2025, it states that during
        mild winters, house flies may fly and breed continuously, as temperatures permit.
      </p>

      <h2 id="sanitation">What Every Source Puts First</h2>
      <p>
        <strong>UC IPM is unambiguous about where the problem comes from:</strong>{' '}
        <em>
          &ldquo;In general, poor exclusion and lack of sanitation are the major contributors to
          house fly problems.&rdquo;
        </em>{' '}
        And about products:{' '}
        <em>&ldquo;In most home situations, pesticides are not needed or recommended.&rdquo;</em>
      </p>
      <p>
        <strong>What it asks for instead:</strong>{' '}
        <em>
          &ldquo;Cracks around windows and doors where flies may enter should be sealed. Well-fitted
          screens will also limit their access to buildings.&rdquo;
        </em>{' '}
        And on waste:{' '}
        <em>
          &ldquo;Garbage should not be allowed to accumulate and should be placed in plastic bags and
          held in containers with tight-fitting lids where feasible.&rdquo;
        </em>{' '}
        The same source adds that garbage should be placed as far from a building entrance as is
        practicable.
      </p>

      <h2 id="traps">Sticky Paper and Ribbons</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The source that describes this product also limits it, in the same sentence. Read the
          limitation before buying one.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;Sticky fly paper or ribbons are effective at eliminating a few flies in relatively
            confined areas but are not effective enough to manage heavy infestations or to provide
            control in an outdoor setting.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          A few flies, in a confined space. On the source&rsquo;s own account this is not a way of
          clearing a heavy infestation and not an outdoor solution, and nothing below is presented as
          one.
        </p>
      </div>
      <p>
        The four below are plain adhesive surfaces. None carries a lure, so none is targeted at one
        fly over another, and they are in no order of preference. No source consulted compares one
        product against another.
      </p>
      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="uncarded">Three Things the Sources Support That We Name No Product For</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          These are supported by the sources and simply have no product named here. That is a gap in
          our sourcing, not a verdict on the products.
        </p>
        <ul className="mt-3 mb-0 space-y-2 text-base text-slate-800">
          <li>
            <strong>Inverted cone traps with a fly food attractant.</strong> UC IPM:{' '}
            <em>
              &ldquo;Inverted cone traps containing fly food attractants can be readily purchased
              commercially and are effective when they are not competing with nearby garbage or
              animal wastes.&rdquo;
            </em>{' '}
            The same source attaches a warning that belongs with it:{' '}
            <em>
              &ldquo;The fly food attractants used in these inverted cone traps will be quite foul
              smelling, so the traps should be placed at some distance from occupied
              structures.&rdquo;
            </em>
          </li>
          <li>
            <strong>Ultraviolet light traps, indoors only.</strong> UC IPM:{' '}
            <em>
              &ldquo;Fly traps using ultraviolet light may be effective when used indoors where they
              are not competing with daytime sunlight.&rdquo;
            </em>
          </li>
          <li>
            <strong>A bin with a tight-fitting lid</strong>, quoted in the sanitation section above.
          </li>
        </ul>
      </div>
      <p>
        <strong>And one thing we deliberately name no product for, on different grounds.</strong> UC
        IPM asks for well-fitted screens, but <em>well-fitted</em> is a description rather than a
        measurement.{' '}
        <strong>
          No source on this page publishes a mesh size, a gauge or any figure a screen could be
          measured against, so there is nothing to test a product by and none is named.
        </strong>{' '}
        Where another page on this site does publish mesh numbers, those belong to a different insect
        and are not carried across.
      </p>

      <h2 id="avoid">Two Things the Sources Tell You Not to Do Near Food</h2>
      <p>
        <strong>UC IPM, on one whole product class:</strong>{' '}
        <em>
          &ldquo;Similarly, never use a &ldquo;bug zapper&rdquo; to kill flies near food preparation
          areas, as the insect body often explodes upon touching the wires and insect body parts can
          be propelled over several feet from the device.&rdquo;
        </em>{' '}
        <em>
          (the inner quotation marks around the product name are UC IPM&rsquo;s own and are left as
          published)
        </em>
      </p>
      <p>
        <strong>Colorado State reaches the same conclusion by the same route</strong>, stating that
        bug zapper designs often cause many insects to break apart, scattering body pieces that can
        contaminate the area near the trap, and that because of this bug zapper traps should never be
        used near areas where food is prepared.
      </p>
      <p>
        <strong>UC IPM, on the oldest tool of all:</strong>{' '}
        <em>
          &ldquo;Don&rsquo;t use fly swatters near food preparation areas because they may result in
          contaminating food with insect body parts.&rdquo;
        </em>{' '}
        The same source says that for control of just a few flies, the time-tested fly swatter is
        appropriate &mdash; so the objection is to where it is used, not to the tool.
      </p>
      <p>
        <strong>No bug zapper and no swatter is named on this page.</strong>
      </p>

      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the four publications below, all
        fetched on 28 August 2026. Three of the four are multi-species documents and only their house
        fly material is used. Where a source suppresses its own publication date in markup that does
        not render, that is stated rather than the hidden date being cited, and where a document
        carries both a publication date and a review date, both are given.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
