import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { SOCIAL_WASP_NAV, SOCIAL_WASP_HOME } from '../components/socialWaspNav';

const URL = 'https://pestproindex.com/us/social-wasps';
const TITLE = 'Social Wasps: Yellowjackets, Paper Wasps and the Hornet That Usually Is Not One';
const DESCRIPTION =
  'Nine extension publications on yellowjackets, paper wasps and hornets: why most American hornets are yellowjackets, why a wasp leaves no stinger to remove, and four positions on treating a sting that this page reports rather than settles.';

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
  datePublished: '2026-08-30',
  dateModified: '2026-08-30',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Social Wasps', item: URL }],
};

// ---------------------------------------------------------------------------
// SCOPE. Yellowjackets, paper wasps and the two hornets the sources name. Nine
// publications were read: Maine, Maryland, Colorado State, Oregon State, Utah
// State, Kentucky, UC IPM, Purdue and Michigan State. A tenth, Oklahoma State,
// returned an interstitial and is not cited.
//
// THE STINGER FINDING IS THE PAGE'S SPINE. Four sources independently state that
// the barbed stinger left in the skin belongs to the HONEY BEE. A wasp stings
// repeatedly and leaves nothing behind. Almost every sting first-aid list in
// circulation opens with removing a stinger, and on this page that instruction
// would be advice for a different animal. It is named as honey-bee advice in our
// own voice and is not carried.
//
// THE MEDICAL BLOCK SITS ABOVE THE FIRST PRODUCT CARD. Position anchor: Purdue
// E-248's sentence "including life-threatening systemic anaphylaxis", asserted
// unique across all ten bodies on disk before its position was read, and sitting
// at 11.5% through its own source. A page that buries the medical material below
// a product card is placing it after the decision point (Law 66).
//
// FOUR CLASSES, NEVER MERGED: sting pain, local reaction, allergy generally,
// anaphylaxis. Only three of the nine sources carry anaphylaxis at all, and the
// 10% figure is the AAAAI's, reported BY Michigan State rather than found by it.
//
// THE FIRST-AID SPREAD IS RENDERED, NOT RESOLVED. Colorado State is the outlier
// and its own hedge travels inside its sentence. Kentucky sitting closer to UC IPM
// does not corroborate UC IPM (Law 146).
//
// NO TRAP IS NAMED. University of Maine states that commercial traps are typically
// not attractive to bald-faced hornets or to paper wasps, which is a fitness
// failure against two of the four animals this page covers.
//
// CARDS. The criterion is University of Kentucky's own figure: an aerosol whose own
// feature bullets state a jet distance of at least 20 feet AND name a wasp, hornet
// or yellowjacket. Eleven candidates were fetched at S57 R4; five met it; those five
// collapse to three distinct physical products because two twin pairs differ only
// by pack count and neither listing says that difference is cosmetic (S53-H).
// ---------------------------------------------------------------------------

const tocItems = [
  { id: 'which-wasp', title: 'Which Wasp, and the Hornet Problem' },
  { id: 'stinger', title: 'A Wasp Leaves No Stinger' },
  { id: 'sting', title: 'The Sting: Four Classes, Kept Apart' },
  { id: 'first-aid', title: 'What to Put On It: Four Positions, None Picked' },
  { id: 'nests', title: 'Nests, and When the Sources Say to Treat One' },
  { id: 'aerosols', title: 'Aerosols That Meet the Twenty-Foot Figure' },
  { id: 'not-here', title: 'What This Page Does Not Carry' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const products = [
  {
    asin: 'B000NGR9OG',
    cardName: 'SpectracidePRO Wasp & Hornet Killer Spray, 18 oz',
    whatItDoes: [
      'Its own text states the jet distance the Kentucky figure asks for: the listing says the product reaches nests up to 20 feet away',
      'Its own text names the animals on this page: wasps, hornets, yellow jackets and mud daubers',
      'Its own text states outdoor use only, and gives a dielectric breakdown voltage of 47,300 volts',
      'Its own text says to apply at sunrise or sunset, which is the timing five of the nine sources give independently',
      'Single can. A twelve-pack of the same product exists under a different ASIN and is not named here, because two listings for one can would put one product on this page twice',
    ],
  },
  {
    asin: 'B0019BIED4',
    cardName: 'Hot Shot Wasp & Hornet Killer Aerosol Spray, 14 oz',
    whatItDoes: [
      'Its own text states a jet spray that reaches up to 27 feet, above the Kentucky figure',
      'Its own text names wasps, hornets, yellow jackets, scorpions, mud daubers and tent caterpillars',
      'Its own text says the formula is water-based and for outdoor use, applied at sunset',
      'Its own text describes the product as non-staining to most home siding and tells you to test an inconspicuous area first. That is the seller’s qualifier and it travels with the claim',
      'Single can. A two-pack of the same product exists under a different ASIN and is not named here for the same reason as above',
    ],
  },
  {
    asin: 'B0050D0XZ4',
    cardName: 'Spectracide Wasp, Hornet and Insects Killer, 2 × 20 oz',
    whatItDoes: [
      'Its own text states an up to 27 foot jet spray and says to stand a safe distance from the nest',
      'Its own text names wasps, hornets and yellowjackets, and also tent caterpillars, scorpions and ants',
      'Its own text says to apply at sunset and to stand with the wind at your back',
      'Its own text says to wait at least 24 hours before removing a treated nest',
      'Its own text states its own pack quantity: two 20 ounce cans. This is a different product line from the PRO can above, not a repack of it',
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'Is a hornet a different animal from a wasp?',
    answer:
      'No, and in the United States it is usually not even a hornet. University of Maryland Extension states that Maryland social wasps include yellowjackets, hornets and paper wasps, and that wasps are grouped into two categories, solitary or social. University of Maine Cooperative Extension records that bald-faced hornets are technically a type of yellowjacket and are not a true hornet. University of Maryland Extension states that the European hornet is the only true hornet established in the United States. So a reader who says hornet is usually describing a yellowjacket, and the page is named for the group all of them belong to.',
  },
  {
    question: 'How do I get the stinger out of a wasp sting?',
    answer:
      'There is generally nothing to get out. Four of the nine sources consulted make the same distinction and it is about honey bees rather than wasps. UC IPM states that when the sting is caused by a honey bee the stinger usually remains in the skin because it is barbed. Colorado State University Extension states that unlike other bees and wasps the stinger of the honey bee is barbed and embeds into the skin. Michigan State University states that if a barbed stinger is present it is probably a honey bee. University of Maryland Extension states that individual wasps are capable of stinging repeatedly, unlike honey bees. The scrape-it-out instruction that opens most sting advice is honey bee instruction and this page does not carry it.',
  },
  {
    question: 'What should I put on a wasp sting?',
    answer:
      'The sources give four different answers and this page reports all four rather than choosing one. UC IPM names over-the-counter products or a cold compress. University of Kentucky names over-the-counter antihistamines and an ice pack, and separately names soap and water to prevent infection. Michigan State University names a cold compress, over-the-counter antihistamines or oral analgesics. Colorado State University Extension names cool lotions or compresses, and then lists crushed aspirin, meat tenderizer and urine as materials that have been suggested, which is its own hedge and not an endorsement. This site is not a medical source and does not assess anyone symptoms.',
  },
  {
    question: 'When is the right time to treat a nest?',
    answer:
      'Five of the nine sources give the same window independently. University of Maine Cooperative Extension states that nests should be treated at night when the wasps are least active. Colorado State University Extension states that insecticide applications are best made during late evening or cool periods in early morning, when the wasps do not readily fly and most foragers have returned to the colony. Oregon State University states to apply the pesticide in the early morning or late evening when yellowjackets are less active. Utah State University Extension states to destroy the nest with an insecticide labeled for wasps during late evening or cool periods in early morning. University of Kentucky adds one exception, that paper wasps can be eliminated during the daytime provided you do not stand directly under the nest during treatment.',
  },
  {
    question: 'Do wasp traps work?',
    answer:
      'The two sources that discuss them do not agree on what they are for, and one of them rules them out for half the animals on this page. University of Maine Cooperative Extension states that commercial traps can be effective for yellowjackets but are typically not attractive to bald-faced hornets or to paper wasps. Colorado State University Extension states that such traps can be helpful when used early in the season, June and early July, when the number of yellowjackets is small and the colonies are struggling to become established. A product that two of the four animals covered here will not come to is not named on this page.',
  },
];

const sources: Source[] = [
  {
    label:
      'Hornets, Wasps and Yellowjackets — the source of the bald-faced hornet naming statement, the trap limitation and the night-treatment statement',
    publisher: 'University of Maine Cooperative Extension',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://extension.umaine.edu/home-and-garden-ipm/fact-sheets/common-name-listing/hornets-wasps-and-yellowjackets/',
  },
  {
    label:
      'Social Wasps: Yellowjackets, Hornets, and Paper Wasps — the source of the social wasp grouping, the only-true-hornet statement and the repeated-stinging statement',
    publisher: 'University of Maryland Extension',
    date: 'Page carries an update stamp of 17 April 2026; read 30 August 2026',
    href: 'https://extension.umd.edu/resource/social-wasps-yellowjackets-hornets-and-paper-wasps',
  },
  {
    label:
      'Nuisance Wasps and Bees, Fact Sheet 5.525 — the source of the honey bee stinger statement, one first-aid position, the hypersensitivity figure and one treatment-timing statement',
    publisher: 'Colorado State University Extension',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://www.extension.colostate.edu/docs/pubs/insect/05525.pdf',
  },
  {
    label:
      'Yellowjackets — the source of the bald-faced hornet relationship statement, the nest-defence statement and one treatment-timing statement',
    publisher: 'Oregon State University, Solve Pest Problems',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://solvepestproblems.oregonstate.edu/insects-spiders/yellowjackets-wasps',
  },
  {
    label: 'Social Wasps, Yellow Jackets and Hornets — the source of the labelled-insecticide statement',
    publisher: 'Utah State University Extension',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://extension.usu.edu/planthealth/structural-and-nuisance/files/pest-press-fact-sheets/pdf/social-wasps_pestpress.pdf',
  },
  {
    label:
      'Controlling Wasps, Hornets and Yellowjackets, ENTFACT-620 — the source of the twenty-foot figure the product cards are measured against, the public-health statement and one first-aid position',
    publisher: 'University of Kentucky Entomology (Michael F. Potter)',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://entomology.ca.uky.edu/files/ef620.pdf',
  },
  {
    label:
      'Pest Notes: Bee and Wasp Stings, Publication 7449 — the source of the honey bee stinger statement, the epinephrine statement and one first-aid position',
    publisher: 'UC Statewide IPM Program',
    date: 'Undated on the page; read 30 August 2026',
    href: 'https://ipm.ucanr.edu/PMG/PESTNOTES/pn7449.html',
  },
  {
    label: 'Stinging Insects and Medical Risk, E-248-W — the source of the hypersensitivity-reaction statement',
    publisher: 'Purdue University Extension Entomology',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://extension.entm.purdue.edu/publications/E-248.pdf',
  },
  {
    label:
      'Help! I’ve Been Stung! — the source of the large-local-reaction statement, one first-aid position, and the place the AAAAI figure is reported',
    publisher: 'Michigan State University pollinator programme',
    date: 'Undated on the document; read 30 August 2026',
    href: 'https://pollinators.msu.edu/resources/resources/Help%20Ive%20Been%20Stung.pdf',
  },
];

export default function SocialWaspsPage() {
  return (
    <UsPageLayout
      title="Social Wasps"
      subtitle="Yellowjackets, paper wasps and hornets, as nine university extension services describe them. Most of what Americans call a hornet is a yellowjacket. A wasp leaves no stinger to remove, so the first-aid advice everyone repeats belongs to a different insect. And on what to put on the sting, the sources give four answers, which this page reports rather than settles."
      lastUpdated="August 2026"
      readingTime="14 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={SOCIAL_WASP_HOME}
      clusterNav={SOCIAL_WASP_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the wasps that live in colonies and defend a nest, as university
        extension services describe them. It is one subject rather than two, because that is how
        the sources treat it, and the section below sets out why the word hornet causes more
        trouble here than any other word on the page.
      </p>

      <h2 id="which-wasp">Which Wasp, and the Hornet Problem</h2>
      <p>
        <strong>University of Maryland Extension</strong> draws the first line:{' '}
        <em>&ldquo;Wasps are grouped into two categories: solitary or social.&rdquo;</em> It then
        names the group this page covers:{' '}
        <strong>
          <em>
            &ldquo;Maryland&rsquo;s social wasps include yellowjackets, hornets, and paper
            wasps.&rdquo;
          </em>
        </strong>{' '}
        and describes what makes them social:{' '}
        <em>
          &ldquo;Social wasps differ from solitary wasps by living in a community of a single nest
          housing dozens or thousands of members.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State University Extension</strong> says the same thing in its own words:{' '}
        <em>&ldquo;Several wasps are social insects that produce a colony.&rdquo;</em>
      </p>
      <h3>The animal you call a hornet is probably a yellowjacket</h3>
      <p>
        <strong>University of Maine Cooperative Extension</strong> is explicit about the commonest
        black-and-white nest-builder in the eastern United States:{' '}
        <strong>
          <em>
            &ldquo;Bald-faced hornets / Blackjackets &ndash; Dolichovespula maculata (these are
            technically a type of yellowjacket and are not a &lsquo;true&rsquo; hornet).&rdquo;
          </em>
        </strong>{' '}
        <em>
          (the inner quotation marks around the word true, and their placement, are University of
          Maine&rsquo;s own; the glyphs follow this site&rsquo;s typography, as every quotation mark
          on this page does)
        </em>{' '}
        <strong>Oregon State University</strong> reaches the same place from the other direction:{' '}
        <em>
          &ldquo;Bald-faced hornets (Dolichovespula maculata) are related to other yellowjacket
          species.&rdquo;
        </em>
      </p>
      <p>
        So which animal in the United States is a hornet?{' '}
        <strong>University of Maryland Extension</strong> answers it in one sentence about{' '}
        <em>Vespa crabro</em>:{' '}
        <strong>
          <em>&ldquo;This is the only true hornet established in the U.S.&rdquo;</em>
        </strong>{' '}
        It adds that they are non-native but have lived in North America for over a hundred years,
        and that in its own state{' '}
        <em>&ldquo;Only the European hornet and baldfaced hornet occur in Maryland.&rdquo;</em>{' '}
        <strong>
          That is why this page is called social wasps rather than wasps and hornets. Naming it for
          two animals would put a claim in the address that every source addressing the question
          denies.
        </strong>
      </p>

      <h2 id="stinger">A Wasp Leaves No Stinger</h2>
      <p>
        Nearly every piece of sting first aid in circulation opens by telling you to get the stinger
        out.{' '}
        <strong>
          On this page that instruction is advice about a different insect, and it is not carried
          here.
        </strong>{' '}
        Four of the nine sources make the same distinction independently, and in all four the barbed
        stinger belongs to the honey bee.
      </p>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;When the sting is caused by a honey bee, the stinger usually remains in the skin
          when the insect leaves because the stinger is barbed.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State University Extension:</strong>{' '}
        <em>
          &ldquo;Unlike other bees and wasps, the stinger of the honey bee is barbed and embeds into
          the skin.&rdquo;
        </em>
      </p>
      <p>
        <strong>Michigan State University:</strong>{' '}
        <em>&ldquo;If a barbed stinger is present, it is probably a honey bee.&rdquo;</em>
      </p>
      <p>
        <strong>University of Maryland Extension</strong> states the consequence for the animals on
        this page:{' '}
        <em>
          &ldquo;If a threat is perceived, wasps may sting, and individual wasps are capable of
          stinging repeatedly, unlike honey bees.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Two things follow, and they are ours rather than any source&rsquo;s. A wasp can sting you
          more than once, so distance from the nest matters more than it would with a honey bee. And
          if you are looking at a barbed stinger in the skin, the sources say you are probably not
          looking at a wasp sting at all.
        </strong>
      </p>

      <h2 id="sting">The Sting: Four Classes, Kept Apart</h2>
      <p>
        <strong>This site is not a medical source and does not assess anyone&rsquo;s symptoms.</strong>{' '}
        The four classes below are kept separate because the sources keep them separate, and because
        a sting that hurts is not a local reaction, a local reaction is not an allergy, and an
        allergy is not anaphylaxis. Only three of the nine publications read for this page discuss
        anaphylaxis at all, and each is named where it is used.
      </p>
      <h3>One. Sting pain</h3>
      <p>
        <strong>Oregon State University:</strong>{' '}
        <em>&ldquo;A single yellowjacket sting is painful.&rdquo;</em>{' '}
        <strong>University of Kentucky</strong> puts the whole group in the same sentence:{' '}
        <em>&ldquo;Wasp and hornet stings are a serious threat to public health.&rdquo;</em> and{' '}
        <em>
          &ldquo;Paper wasps, hornets and yellowjackets are more dangerous and unpredictable than
          honeybees.&rdquo;
        </em>
      </p>
      <h3>Two. Local reaction</h3>
      <p>
        <strong>University of Kentucky:</strong>{' '}
        <em>&ldquo;Most people experience pain, itching, redness, and localized swelling&rdquo;</em>.{' '}
        <strong>Colorado State University Extension</strong> draws the boundary explicitly:{' '}
        <em>
          &ldquo;Some swelling, itching and pain are all normal reactions and do not necessarily
          indicate a systemic reaction to the venom of the sting.&rdquo;
        </em>{' '}
        <strong>Michigan State University</strong> draws it again, and from the other side:{' '}
        <em>&ldquo;The reaction may take 5-10 days to heal, but this is not anaphylaxis.&rdquo;</em>
      </p>
      <h3>Three. Allergy generally</h3>
      <p>
        <strong>Colorado State University Extension</strong> gives a figure:{' '}
        <em>
          &ldquo;A small percentage of the U.S. population (approximately 1 percent) develops
          hypersensitivity to either bee or wasp venom following repeated stings.&rdquo;
        </em>{' '}
        <strong>Purdue University Extension Entomology</strong> names the mechanism:{' '}
        <em>
          &ldquo;These individuals are at risk of experiencing allergic reactions known as
          &ldquo;immediate hypersensitivity reactions,&rdquo; including life-threatening systemic
          anaphylaxis.&rdquo;
        </em>{' '}
        <em>
          (the inner quotation marks around the phrase, and their placement, are Purdue&rsquo;s own;
          the glyphs follow this site&rsquo;s typography, as every quotation mark on this page does)
        </em>
      </p>
      <h3>Four. Anaphylaxis</h3>
      <p>
        <strong>Oregon State University</strong> states the position in one line:{' '}
        <strong>
          <em>&ldquo;An allergic reaction to a yellowjacket sting is a medical emergency.&rdquo;</em>
        </strong>{' '}
        <strong>UC IPM</strong> describes what is done about it:{' '}
        <em>
          &ldquo;Anaphylaxis, if treated in time, usually can be reversed by the effects of
          epinephrine (adrenaline) injected into the body.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          One frequently repeated figure on this subject is not an extension service&rsquo;s
          finding.
        </strong>{' '}
        Michigan State University reports it and attributes it in the same sentence:{' '}
        <em>
          &ldquo;According to the American Academy of Allergy, Asthma, &amp; Immunology, AAAAI, only
          10% of those who have large local reactions after being stung will have a systemic reaction
          or anaphylaxis.&rdquo;
        </em>{' '}
        <strong>
          The figure is the AAAAI&rsquo;s. Michigan State is where it appears, not where it comes
          from, and this page keeps that distinction because the two are not the same claim.
        </strong>
      </p>

      <h2 id="first-aid">What to Put On It: Four Positions, None Picked</h2>
      <p>
        Four of the nine sources say what to apply to a sting site and they do not give the same
        answer. All four are below, in their own words, with none preferred.{' '}
        <strong>
          Two of them sitting near each other is not agreement, and this page does not treat it as
          any.
        </strong>
      </p>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Several over-the-counter products or simply a cold compress can be used to alleviate
          the pain of a sting.&rdquo;
        </em>
      </p>
      <p>
        <strong>University of Kentucky:</strong> pain, itching, redness and localized swelling{' '}
        <em>&ldquo;can be reduced with over-the-counter antihistamines and an ice pack&rdquo;</em>,
        and separately,{' '}
        <em>
          &ldquo;Cleansing the affected areas with soap and water can also help prevent
          infection.&rdquo;
        </em>
      </p>
      <p>
        <strong>Michigan State University:</strong>{' '}
        <em>
          &ldquo;Sometimes a cold compress, over-the-counter antihistamines or oral analgesics may
          help.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State University Extension</strong> is the outlier, and its own hedge is
        part of the sentence rather than a gloss we have added. It first says{' '}
        <em>&ldquo;Cool lotions or compresses can help relieve pain and swelling.&rdquo;</em> and
        then:{' '}
        <strong>
          <em>
            &ldquo;Various materials applied to the sting site may also reduce pain &ndash; crushed
            aspirin, meat tenderizer and urine are among those that have been suggested.&rdquo;
          </em>
        </strong>{' '}
        <strong>
          Those five words at the end are Colorado State&rsquo;s own and the sentence does not mean
          the same thing without them. It reports what has been suggested; it does not recommend it,
          and neither do we.
        </strong>
      </p>
      <p>
        <strong>
          This page does not choose between four extension services on a medical point, and it does
          not add anything to any of their lists. Nothing here is medical advice.
        </strong>
      </p>

      <h2 id="nests">Nests, and When the Sources Say to Treat One</h2>
      <p>
        <strong>University of Kentucky</strong> on what a hornet nest holds:{' '}
        <em>
          &ldquo;Hornet nests may contain hundreds of wasps that are extremely aggressive when
          disturbed.&rdquo;
        </em>{' '}
        <strong>Oregon State University</strong> on the bald-faced hornet:{' '}
        <em>&ldquo;Bald-faced hornets aggressively defend their nests.&rdquo;</em>
      </p>
      <h3>Five sources give the same window, and one gives an exception</h3>
      <p>
        <strong>University of Maine Cooperative Extension:</strong>{' '}
        <em>&ldquo;Nests should be treated at night when the wasps are least active.&rdquo;</em>
      </p>
      <p>
        <strong>Colorado State University Extension:</strong>{' '}
        <em>
          &ldquo;Insecticide applications are best made during late evening or cool periods in early
          morning, when the wasps do not readily fly and most foragers have returned to the
          colony.&rdquo;
        </em>
      </p>
      <p>
        <strong>Oregon State University:</strong>{' '}
        <em>
          &ldquo;Apply the pesticide in the early morning or late evening when yellowjackets are less
          active.&rdquo;
        </em>
      </p>
      <p>
        <strong>Utah State University Extension:</strong>{' '}
        <em>
          &ldquo;If active nests are causing problems, destroy the nest with an insecticide labeled
          for wasps during late evening or cool periods in early morning.&rdquo;
        </em>
      </p>
      <p>
        <strong>University of Kentucky</strong> agrees and then carves out one case:{' '}
        <em>
          &ldquo;Although it&rsquo;s best to treat all wasp and hornet nests at night, paper wasps
          can be eliminated during the daytime, provided you do not stand directly under the nest
          during treatment.&rdquo;
        </em>
      </p>
      <p>
        On protective equipment, <strong>University of Maine Cooperative Extension</strong> says{' '}
        <em>&ldquo;Be sure to wear protective clothing when treating and removing nests.&rdquo;</em>{' '}
        and <strong>University of Kentucky</strong> is more specific:{' '}
        <em>
          &ldquo;A full wasp suit and head veil sealed at the wrists, ankles and collar is strongly
          recommended.&rdquo;
        </em>
      </p>
      <h3>Traps are not named on this page, and here is why</h3>
      <p>
        <strong>University of Maine Cooperative Extension:</strong>{' '}
        <em>
          &ldquo;Commercial traps can be effective for yellowjackets but are typically not attractive
          to bald-faced hornets or to paper wasps.&rdquo;
        </em>{' '}
        <strong>Colorado State University Extension</strong> puts a season on them:{' '}
        <em>
          &ldquo;Such traps can be helpful when used early in the season, June and early July, when
          the number of yellowjackets is small and the colonies are struggling to become
          established.&rdquo;
        </em>{' '}
        <strong>
          A product that two of the four animals covered here will not come to is not a product for
          this page, so no trap is named on it.
        </strong>
      </p>

      <h2 id="aerosols">Aerosols That Meet the Twenty-Foot Figure</h2>
      <p>
        <strong>University of Kentucky</strong> gives both the method and the number the products
        below are measured against:{' '}
        <em>
          &ldquo;If the nest is accessible, it can be eliminated fairly easily with a wasp and hornet
          spray sold at most retail stores.&rdquo;
        </em>{' '}
        and{' '}
        <strong>
          <em>
            &ldquo;One advantage of these formulations is that they can be sprayed as far as 20
            feet.&rdquo;
          </em>
        </strong>{' '}
        <strong>University of Maryland Extension</strong> gives the circumstance:{' '}
        <em>
          &ldquo;When a nest cannot be avoided until its natural demise (first hard frost), the use
          of a dust or an aerosol wasp spray may be needed.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          The criterion these three products are measured against
        </p>
        <p className="m-0 mt-3 text-base text-slate-800">
          Each listing below states, in its own feature text rather than only in its product name, a
          jet distance of at least the twenty feet University of Kentucky names, and each names a
          wasp, hornet or yellowjacket in that same feature text. Eleven products were checked
          against that criterion and six failed it, most of them because the distance or the insect
          appeared only in the product title. No source consulted for this page compares any two of
          these products on any measure, so they are not ranked here and no best is named.
        </p>
      </div>
      {products.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="not-here">What This Page Does Not Carry</h2>
      <p>
        <strong>Stinger removal.</strong> Covered above: four sources put the barbed stinger on the
        honey bee, so the instruction belongs to a different insect.
      </p>
      <p>
        <strong>A ranking.</strong> Nine publications were read and not one compares any two wasp
        products on any measure. Without a published criterion to rank against there is nothing to
        rank, so nothing is called best.
      </p>
      <p>
        <strong>A trap.</strong> One source states that traps are typically not attractive to two of
        the four animals covered here.
      </p>
      <p>
        <strong>Clinical guidance.</strong> Treatment decisions and the management of a reaction
        belong to a clinician and are named here rather than reproduced. The AAAAI figure above is
        attributed to the AAAAI and is not restated as an extension service&rsquo;s own finding.
      </p>
      <p>
        <strong>A tenth source.</strong> Oklahoma State University Extension publishes a fact sheet
        on this subject. It was requested once on 30 August 2026 and returned an interstitial rather
        than the document, so it is not cited anywhere on this page. That absence is recorded rather
        than left to look like an oversight.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Nine publications, each named in the sentence that uses it. Every quotation on this page was
        located in the publication it is attributed to.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
