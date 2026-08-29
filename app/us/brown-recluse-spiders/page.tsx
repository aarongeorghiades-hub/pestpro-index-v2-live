import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { RECLUSE_NAV, RECLUSE_HOME } from '../components/brownRecluseNav';

const URL = 'https://pestproindex.com/us/brown-recluse-spiders';
const TITLE = 'Brown Recluse Spiders: Identification, Range and What the Sources Say';
const DESCRIPTION =
  'Extension services disagree about the violin marking, about how far the range runs, and about whether insecticides do anything. This page sets out all of it, and it does not pretend the disagreements are settled.';

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
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Brown Recluse Spiders', item: URL },
  ],
};

// ---------------------------------------------------------------------------
// PRODUCT RECORDS — the single source of truth for every product on this page.
//
// IDENTITY PROVENANCE. Four ASINs were identity-checked by direct fetch of
// amazon.com/dp/<ASIN> on 2026-08-26, the title copied verbatim into
// `titleAsFetched`. Six are already carded elsewhere on this estate and are
// REUSED rather than re-sourced: three nitrile gloves from /us/imported-fire-ants
// and three silicone sealants from /us/arizona-bark-scorpions. Their card names
// are kept identical to the names those routes already render, so one product
// never carries two names across the estate.
//
// THE REUSED CARDS' COPY IS WRITTEN FRESH. The glove copy on the fire-ant page
// is about handling granular bait; the sealant copy on the scorpion page is
// about scorpion entry points. Reusing an ASIN is not reusing its reason, and
// every bullet below states what THESE sources say the tool is for.
//
// NOTHING HERE IS A CLAIM ABOUT STOCK, PRICE OR DELIVERY. A title read on one
// day is an identity, not an inventory.
// ---------------------------------------------------------------------------

type ProductGroup = 'lens' | 'storage' | 'gloves' | 'sealant' | 'gluetrap';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B06XXNSTNN',
    cardName: 'Electro Optix 10X Double Lens LED Pocket Magnifier',
    titleAsFetched:
      '10X Double Lens LED Pocket Magnifier MADE in USA High Power High Diopter Bright LED illumination, Ideal for inspection, Coins, Stamps, Reading by Electro Optix',
    group: 'lens',
    whatItDoes: [
      'A pocket magnifier at 10x, which is the kind of tool University of Kentucky Extension says the eye check needs: it calls for a good quality hand lens',
      'The character it is for is a count — six eyes in three pairs, on a body under half an inch long',
      'Ruling a spider OUT is what this does. Every source on this page routes confirmation to an entomologist, an extension office or a pest control professional',
      'UC IPM states that identifying these spiders to species level takes a high-magnification microscope and an arachnologist, which is not this and is not a phone camera either',
    ],
  },
  {
    asin: 'B00KL7VPWO',
    cardName: 'Sterilite 54 Quart Gasket Box, 4-Pack',
    titleAsFetched:
      'Sterilite 4-Pack 54 Quart Gasket Box, Home Storage Organizer Bins with Lids - Stackable Clear Plastic Containers for Bedroom, Bathroom, Garage, Basement, or Attic',
    group: 'storage',
    whatItDoes: [
      'Kansas State University Extension asks for tightly sealed storage containers, not simply boxes with lids on them',
      'This listing states a gasketed seal and hinged latch clips in its own description, and names pests among what the seal is meant to block',
      'Four containers at 54 quarts each, per the listing, for the stored items that cardboard boxes currently hold',
      'K-State also says not to place containers close together or against walls — the container is half the measure and the spacing is the other half',
    ],
  },
  {
    asin: 'B072KL69L5',
    cardName: 'Gemplers Unlined Nitrile Gloves, 15 mil',
    titleAsFetched: 'Gemplers Unlined Nitrile Gloves, 15 mil',
    group: 'gloves',
    whatItDoes: [
      'University of Kentucky Extension says to wear long sleeves and gloves when sorting through boxes or materials, to avoid being bitten',
      'That is the whole reason this is here: the sorting is when a hand goes somewhere a spider is already resting',
      'A reusable unlined nitrile glove at 15 mil, which is a working thickness rather than a disposable one',
      'Already named on our fire ant page for a different job. Same glove, different reason — the sources for this page ask for a barrier while handling stored items',
    ],
  },
  {
    asin: 'B0FDH2LTTN',
    cardName: 'SHOWA 727 Nitrile Chemical Resistant Glove, Unlined',
    titleAsFetched: 'SHOWA 727 Nitrile Chemical Resistant Glove, Unlined',
    group: 'gloves',
    whatItDoes: [
      'The same purpose as the glove above, in a second make: a barrier between a hand and whatever is behind the boxes',
      'Unlined nitrile, reusable rather than disposable',
      'Kentucky pairs gloves with long sleeves. Neither this nor any other glove is described by any source as bite-proof, and this page does not describe it that way either',
      'Named here because it is a specific example of the type, not because any source tested it',
    ],
  },
  {
    asin: 'B007VR5H3K',
    cardName: 'SHOWA 737 Nitrile Chemical Resistant Glove, Unlined, 22 mil',
    titleAsFetched: 'SHOWA 737 Nitrile Chemical Resistant Glove, Unlined, 22 mil',
    group: 'gloves',
    whatItDoes: [
      'The heaviest of the three at 22 mil, for clearing a garage, attic or crawl space rather than a closet',
      'Same sourced reason: Kentucky Extension asks for gloves when going through stored boxes and materials',
      'Unlined nitrile, reusable',
      'No source on this page compares glove thicknesses for this purpose. The three are offered as thicknesses, not as a ranking',
    ],
  },
  {
    asin: 'B0BVGTM2XY',
    cardName: 'GE Advanced Silicone Caulk for Window & Door, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE Advanced Silicone Caulk for Window & Door, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'Kentucky Extension names gaps under doors, vents and utility penetrations, the bottommost edge of siding, and where eaves and soffits meet the walls as the common entry points for this spider',
      'A cartridge sealant is how those gaps get closed; this one is sold for windows and doors, which is where two of those entry points are',
      'Sealing keeps out the insect prey as well as the spider — Kentucky says it helps keep these and other pests outdoors',
      'Already named on our scorpion page. Same product, and the reason here is the recluse sources own list of entry points',
    ],
  },
  {
    asin: 'B0000CBJ7W',
    cardName: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    titleAsFetched: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'UC IPM scopes this advice to residences with attached garages: blocking house access by sealing cracks around doors and access holes for electrical conduits or plumbing',
      'A clear cartridge sealant for those gaps, sold in the same size class as the one above',
      'K-State Extension puts it more broadly: sealing both interior and exterior cracks and crevices prevents spiders and their insect prey from moving in',
      'Named as a specific example of the type. No source tested this or any other brand against this spider',
    ],
  },
  {
    asin: 'B0B8QPH3RW',
    cardName: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'An all-purpose silicone rather than a window-and-door one, for the utility penetrations and conduit holes the sources also name',
      'Kentucky lists those penetrations alongside doors and siding edges as entry points worth closing',
      'Sealing is the one control step every source on this page agrees on without qualification',
      'A specific example of the type, named for that reason and no other',
    ],
  },
  {
    asin: 'B005F5U686',
    cardName: 'Trapper LTD Mouse/Insect Glue Boards, Case of 72',
    titleAsFetched: 'Trapper LTD Mouse/Insect Glue Boards - CASE (72 Boards)',
    group: 'gluetrap',
    whatItDoes: [
      'The listing states in its own words that the board lies flat, which is the form University of Kentucky Extension specifies for this spider',
      'Seventy-two boards in one purchase. Kentucky says dozens placed throughout a home are what reveal where the spiders actually are, and this is the only quantity on this page that meets that in a single order',
      'Its own description names mice, insects and spiders as target pests, and gives the board as 8 inches by 4 inches',
      'Kentucky places traps in corners, along baseboards and at wall-floor junctures, especially behind furniture and clutter. The listing describes the same placement',
      'Adult females stay hidden and are the ones least likely to be caught. Kentucky says so plainly, and it is the reason traps are described here as a survey rather than a solution',
    ],
  },
  {
    asin: 'B06XGL8R89',
    cardName: 'Trapper Max Glue Traps, 12 Glue Boards',
    titleAsFetched:
      'Trapper Max Glue Traps 12 Glue Boards Trap Mouse Bugs Insects Bed Bugs Spiders Cockroaches Non-Toxic',
    group: 'gluetrap',
    whatItDoes: [
      'Twelve boards, per the listing, which is a room or two rather than a house',
      'Sold as a flat board — its own description says it can be used flat or folded, so the flat form is how it comes',
      'These boards are scented. The listing describes them as peanut butter scented, and this page is not going to call them unbaited',
      'No source consulted for this page requires an unscented trap, and none tested a scented one against this spider either. The scent is a difference, not a verdict',
      'Glue surface 4.5 by 6.5 inches, whole board 5.25 by 7.75 inches, per the listing',
    ],
  },
];

const lens = products.filter((p) => p.group === 'lens');
const storage = products.filter((p) => p.group === 'storage');
const gloves = products.filter((p) => p.group === 'gloves');
const sealants = products.filter((p) => p.group === 'sealant');
const glueTraps = products.filter((p) => p.group === 'gluetrap');

const faqs: Faq[] = [
  {
    question: 'Is the violin marking a reliable way to identify a brown recluse?',
    answer:
      'The extension services disagree, and this page gives all three positions rather than picking one. Kansas State University Extension calls it "the most distinguishing characteristic of the brown recluse, regardless of its age or gender." University of Kentucky Extension calls it the most distinguishing feature "for laypersons" but says a more definitive diagnostic feature is the eye pattern. UC IPM says the opposite of K-State: that the presence or absence of the violin marking may lead to misidentifications, and that non-arachnologists, including physicians and pest control operators, have envisioned violins on harmless spiders. UC Riverside puts it bluntly: "Because so many people have mistaken markings on a spider as violins, this is NOT a reliable characteristic for a non-arachnologist. You need to look at the eye pattern." Every source agrees the six-eye character is the diagnostic one.',
  },
  {
    question: 'What does a brown recluse actually look like?',
    answer:
      'UC IPM publishes a five-character test and states that to be identified as a recluse a spider must have all five: six eyes in dyads (pairs); a uniformly colored abdomen with fine hairs; no spines on the legs; uniformly colored legs; and a body not more than 3/8 inch in length. That is the list as UC IPM publishes it and nothing has been added to it. UC IPM states that on this basis, more than 99 percent of the spiders found by Californians can be identified as something other than a recluse spider.',
  },
  {
    question: 'Do brown recluses live where I am?',
    answer:
      'The sources describe the range differently and at different scales. Penn State Extension names sixteen states where the spider is established: Alabama, Arkansas, Georgia, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Mississippi, Missouri, Nebraska, Ohio, Oklahoma, Tennessee and Texas. Kansas State draws it as a block from Colorado to Ohio and from Nebraska and Iowa down to the Gulf States. Kentucky describes it as the south central and Midwestern United States. And Iowa State University Extension says of its own state that brown recluse spiders are rare in Iowa but might be found in the southern portion of the state, and that Iowa remains on the northern edge of the range. A state can be inside the range on a national map and rare within that state, and both statements are true at different scales.',
  },
  {
    question: 'I found a spider outside the range. Could it be a recluse?',
    answer:
      'The literature says almost certainly not. Kentucky Extension states that recluse spiders are rare outside their native range and that in general these spiders are widely over-reported and less common than perceived. UC IPM reports a nationwide study run from 2000 to 2005 offering to identify any spider thought to be a brown recluse: nearly 600 specimens came from California, many from people who were adamant, and only one was a brown recluse, from a house where the family had moved from Missouri. UC IPM also states that translocated recluse spiders have never been able to establish a foothold and start a population in California. Penn State, on states outside the native range, states that they are not found outdoors and the risk of being bitten is virtually nonexistent.',
  },
  {
    question: 'How likely is a bite if I do have them?',
    answer:
      'Less likely than most people expect. Kentucky Extension states: "It is quite common, in fact, to live in a building that is heavily infested and never be bitten." Penn State reports a study of a home where more than 2,000 spiders were collected over six months, yet the residents had not been bitten in six years. UC IPM describes the same Kansas household from the other side: they lived there nearly a decade, kept finding the spiders, and in ten years had one bite, to a finger, which turned red for a few days and healed without incident. Kentucky states that most bites occur in response to body pressure, when a spider is trapped against bare skin, and that the spiders have very small fangs and cannot bite through clothing.',
  },
  {
    question: 'What should I do if I think I have been bitten?',
    answer:
      'The sources agree on involving a clinician and they do not agree on the rest, so this page gives each version separately. Kentucky Extension states that people bitten by a brown recluse "should apply ice, elevate the affected area, and seek medical attention immediately." Kansas State states: "If you suspect you have been bitten by a brown recluse, apply ice to the wound and contact your health provider immediately," adding that while treatment varies, medical professionals agree early diagnosis and treatment are important. UC IPM recommends RICE therapy, meaning rest, ice, compression and elevation, and in the same publication records that other medical experts suggest cold instead of ice, to avoid freezing tissue, and a neutral position, lying flat, rather than elevated. Those are complete instructions as each source publishes them; nothing has been added to any of them and nothing has been merged. Three sources also suggest collecting the spider if it can be done safely, because identification helps the physician.',
  },
  {
    question: 'How often does a bite turn into a necrotic wound?',
    answer:
      'Two sources publish a ten percent figure and they are not measuring the same thing, so they are reported separately on this page and are not combined. Penn State Extension publishes a three-band breakdown in which approximately 90 percent of bites result in no reaction or a small red papule that heals on its own, approximately 10 percent result in dermonecrotic lesions, and less than 1 percent result in systemic symptoms. UC IPM publishes a different measure: about 10 percent of bites cause moderate or greater tissue damage and scarring, while the vast majority only result in inflammation and heal well without medical intervention. Kentucky Extension gives no percentage at all and uses time instead, stating that the majority of bites remain localized and heal within three weeks without serious complication or medical intervention.',
  },
  {
    question: 'Why do so many wounds get blamed on this spider?',
    answer:
      'Because the wound alone does not identify the cause. Kentucky Extension states that, contrary to popular belief, it is difficult to diagnose a brown recluse spider bite from the wound alone, and that many medical conditions mimic it, including bacterial and fungal infections, diabetic and pressure ulcers, and gangrene. Penn State states that multiple studies have found brown recluse bites are overdiagnosed and that the majority of reported bites are misdiagnoses of other issues, including poison ivy, chemical burns and diabetic ulcers. UC IPM reports a national study across 11 university-based medical facilities in which 29 percent of patients presenting for "spider bite" had MRSA as the cause of their skin and soft tissue injury. The peer-reviewed literature adds another confusable: a 2022 paper in Toxicon: X reports five confirmed bites by crevice weaver spiders of the genus Kukulcania, all of minor expression, and states these spiders are frequently misidentified as brown recluses.',
  },
  {
    question: 'Do insecticides work on brown recluse spiders?',
    answer:
      'Four extension sources take four different positions, which is why this page carries no product for that class. Kentucky Extension states that elimination "will often require use of insecticides" and names dust and spray active ingredients. Texas A&M AgriLife states that research at Oklahoma State and Texas A&M "has confirmed that brown recluse spiders are difficult to kill with most insecticides," with pyrethroids giving improved control and residues on wood and masonite lasting only about seven days. Kansas State states that "the effectiveness of insecticides for brown recluse control has not been proven or tested extensively" and that many pesticide trials have yielded inconsistent results. Iowa State states that insecticides are "notoriously ineffective and should be limited to spot and void treatments of spider harborages." On foggers the sources do agree: Kentucky says total-release foggers are seldom effective against these spiders, and K-State says fumigants and aerosols have not proven effective.',
  },
  {
    question: 'Can I get rid of them myself?',
    answer:
      'The sources are cautious and two of them route the job to a professional. Kentucky Extension states that brown recluse spiders are difficult to eradicate, largely because of their secretive habits, and that virtually any dark undisturbed area can serve as harborage; it goes on to say that treatment is preferably carried out by professionals, given that difficulty and the potential health threat. Texas A&M AgriLife recommends hiring a professional pest control company as the sound response to a household infestation, and adds that even for professionals, infestations of the brown recluse can be difficult to control. Kansas State is the most encouraging of the three: eliminating them from a structure "may be difficult, but it is possible using an integrated approach that emphasizes eliminating the spider\'s habitat."',
  },
];

const sources: Source[] = [
  {
    label:
      'Brown Recluse Spider (ENTFACT-631) — the source of the three-trap-free control programme quoted here: the eye-pattern character, the glue trap form and placement, the bite and misdiagnosis material, the entry points, and the bed and clothing measures',
    publisher: 'University of Kentucky College of Agriculture, Extension Entomology (Michael F. Potter)',
    date: 'Revised 9 July 2018; accessed 26 August 2026',
    href: 'https://entomology.ca.uky.edu/files/ef631.pdf',
  },
  {
    label:
      'Pest Notes: Brown Recluse and Other Recluse Spiders (UC ANR Publication 7468) — the source of the five-character identification test, the misidentification study, the RICE first-aid position and its published counter-position, and the MRSA figure',
    publisher: 'UC Statewide IPM Program (R. S. Vetter)',
    date: 'Page states published 25 January 2022 and updated 11/2018; accessed 26 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/brown-recluse-and-other-recluse-spiders/',
  },
  {
    label:
      'How to Identify and Misidentify a Brown Recluse Spider — the source of the statement that the violin is not a reliable character for a non-arachnologist',
    publisher: 'University of California, Riverside, Department of Entomology (Rick Vetter)',
    date: 'Updated January 2005; accessed 26 August 2026',
    href: 'https://spiders.ucr.edu/how-identify-and-misidentify-brown-recluse-spider',
  },
  {
    label:
      'Brown Recluse Spiders — the source of the sixteen-state range list, the three-band bite breakdown, and the overdiagnosis statement',
    publisher: 'Penn State Extension (Steve Jacobs)',
    date: 'Updated 8 September 2025; accessed 26 August 2026',
    href: 'https://extension.psu.edu/brown-recluse-spiders',
  },
  {
    label:
      'Kansas Structural Pests: Brown Recluse Spiders (MF3133) — the source of the violin-as-distinguishing-character position, the sealed storage container measure, the trapping study and the insecticide caution',
    publisher:
      'Kansas State University Agricultural Experiment Station and Cooperative Extension Service (Davis, Whitworth, Johnson, Holt, Ewing)',
    date: 'April 2014; accessed 26 August 2026',
    href: 'https://bookstore.ksre.ksu.edu/pubs/brown-recluse-spiders-kansas-structural-pests_MF3133.pdf',
  },
  {
    label:
      'Control of Brown Recluse Spiders (ENT-3003, Insects in the City) — the source of the professional-first position and the finding that these spiders are difficult to kill with most insecticides',
    publisher: 'Texas A&M AgriLife Extension Service (Michael Merchant)',
    date: 'Published 10 May 2010, modified 14 December 2017; accessed 26 August 2026',
    href: 'https://citybugs.tamu.edu/factsheets/biting-stinging/others/ent-3003/',
  },
  {
    label:
      'Brown Recluse Spider in Iowa — the source of the northern-edge-of-range statement and of the position that insecticides are notoriously ineffective',
    publisher: 'Iowa State University Extension and Outreach (Donald Lewis)',
    date: '26 July 2013; accessed 26 August 2026',
    href: 'https://yardandgarden.extension.iastate.edu/article/2013/07-26/recluse.html',
  },
  {
    label:
      'K-State entomologist receiving reports of black widow, brown recluse spiders — the source of the researcher observation that hundreds were trapped in one building under study',
    publisher: 'K-State Research and Extension news (Pat Melgares, quoting Jeff Whitworth)',
    date: '20 June 2024; accessed 26 August 2026',
    href: 'https://www.ksre.k-state.edu/news-and-publications/news/stories/2024/06/entomology-black-widow-brown-recluse.html',
  },
  {
    label:
      'Crevice weaver spiders of the genus Kukulcania: five confirmed envenomations of minor expression, and the finding that these spiders are commonly misidentified as recluses. Toxicon: X, volume 13, article 100091',
    publisher: 'Toxicon: X (R. S. Vetter), via PubMed Central PMC8789574',
    date: '19 January 2022; accessed 26 August 2026',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8789574/',
  },
];

const tocItems = [
  { id: 'which-spider', title: 'Is It a Brown Recluse?' },
  { id: 'range', title: 'Where They Actually Are' },
  { id: 'bites', title: 'What a Bite Does' },
  { id: 'medical', title: 'If You Think You Have Been Bitten' },
  { id: 'confirming', title: 'Confirming What You Have' },
  { id: 'clutter', title: 'Clutter and Storage' },
  { id: 'sealing', title: 'Sealing the Way In' },
  { id: 'monitoring', title: 'Glue Traps: What They Do and Do Not Do' },
  { id: 'bed', title: 'Reducing the Chance of a Bite' },
  { id: 'insecticides', title: 'Insecticides, and Why Nothing Is Offered Here' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function BrownRecluseSpidersPage() {
  return (
    <UsPageLayout
      title="Brown Recluse Spiders"
      subtitle="Extension services disagree about the violin marking, about how far the range runs, and about whether insecticides do anything at all. This page sets out every position with the service that published it, and it does not pretend the disagreements are settled."
      lastUpdated="August 2026"
      readingTime="18 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={RECLUSE_HOME}
      clusterNav={RECLUSE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Two questions get collapsed into one about this spider: <em>is this a brown recluse</em>,
        and <em>how dangerous is a brown recluse bite</em>. They have separate evidence and this
        page keeps them separate, because most of the trouble in the popular coverage comes from
        answering the second when the first has not been settled.
      </p>
      <p>
        Everything here comes from university extension services and one peer-reviewed paper.
        <strong> Where those sources disagree, all the positions are given with the service that
        published each one.</strong> Ten products are named further down. Every link is a plain
        product link and <strong>PestPro Index earns nothing if you buy any of them</strong>; each
        card says so immediately above its own link.
      </p>

      <h2 id="which-spider">Is It a Brown Recluse?</h2>
      <p>
        <strong>The sources agree on one character and disagree sharply on the famous one.</strong>
      </p>

      <h3>The violin: three positions, and they cannot all be right</h3>
      <p>
        <strong>Kansas State University Extension treats it as the character.</strong>{' '}
        <em>
          &ldquo;The most distinguishing characteristic of the brown recluse, regardless of its age
          or gender, is the dark-brown &lsquo;violin-shaped&rsquo; marking on the top of its
          body&rdquo;
        </em>
        , with the neck pointing toward the abdomen.
      </p>
      <p>
        <strong>University of Kentucky Extension splits the difference by audience.</strong>{' '}
        <em>
          &ldquo;For laypersons, the most distinguishing feature of a brown recluse is a dark
          violin-shaped mark on its back, with the neck of the violin pointing toward the rear
          (abdomen) of the spider.&rdquo;
        </em>{' '}
        But in the same publication:{' '}
        <em>
          &ldquo;A more definitive diagnostic feature is the eye pattern -- brown recluses have a
          semi-circular arrangement of six eyes (three groups of two) while most other spiders have
          8 eyes.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM says the violin actively causes wrong answers.</strong> Its position is that
        checking the eye pattern is what eliminates almost all suspect non-recluse spiders, while
        the presence or absence of the violin marking may lead to misidentifications &mdash; and it
        is specific about who gets it wrong:{' '}
        <em>
          &ldquo;Non-arachnologists (including physicians, pest control operators, and even some
          entomologists) have envisioned &ldquo;violins&rdquo; on various body surfaces of harmless
          spiders and incorrectly assume that they have properly identified a brown recluse
          spider.&rdquo;{' '}
        <em>
          (the inner quotation marks around the word violins are UC Riverside&rsquo;s own and are left as published)
        </em>
        </em>
      </p>
      <p>
        <strong>UC Riverside puts it in one line.</strong>{' '}
        <em>
          &ldquo;Because so many people have mistaken markings on a spider as violins, this is NOT
          a reliable characteristic for a non-arachnologist. You need to look at the eye
          pattern.&rdquo;
        </em>{' '}
        Iowa State agrees from a third direction:{' '}
        <em>
          &ldquo;The touted &ldquo;violin-shaped marking&rdquo; on the top of the cephalothorax
          varies in color and prominence.&rdquo;{' '}
        <em>
          (the inner quotation marks around the phrase are Iowa State&rsquo;s own and are left as published)
        </em>
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          These four positions are not averaged here, and there is no house answer
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Saying the violin is &ldquo;somewhat reliable&rdquo; would be a sentence no source
          published. What can be said without inventing anything is this:{' '}
          <strong>
            every source agrees the six-eye character is diagnostic, and they disagree about whether
            the violin is a useful shortcut or an active trap.
          </strong>{' '}
          It is worth noticing that the two sources warning hardest about the violin are the two
          written from outside this spider&rsquo;s range, and the source relying on it most is
          written from inside it. That is an observation about the sources, not a fact about the
          spider.
        </p>
      </div>

      <h3>The character they all accept</h3>
      <p>
        Six eyes in three pairs, arranged in a semicircle, where most spiders have eight in two rows
        of four. Kentucky adds the practical catch:{' '}
        <em>&ldquo;Seeing this feature requires a good quality hand lens.&rdquo;</em> K-State says
        the same, that the arrangement{' '}
        <em>&ldquo;may not be visible without magnification.&rdquo;</em>
      </p>
      <p>
        <strong>UC IPM publishes a five-character test and states that all five must be present:</strong>
      </p>
      <ul>
        <li>six eyes in dyads (pairs)</li>
        <li>uniformly colored abdomen with fine hairs</li>
        <li>no spines on the legs</li>
        <li>uniformly colored legs</li>
        <li>body not more than 3/8&quot; in length</li>
      </ul>
      <p>
        That is the list as UC IPM publishes it and nothing has been added to it. UC IPM&rsquo;s own
        conclusion from it:{' '}
        <em>
          &ldquo;On this basis, more than 99% of the spiders found by Californians can be identified
          as something other than a recluse spider.&rdquo;
        </em>
      </p>
      <p>
        <strong>And the ceiling on any home identification, from three sources.</strong> UC IPM:{' '}
        <em>
          &ldquo;To identify Loxosceles spiders to species level requires a high-magnification
          microscope and the skills of a spider expert (arachnologist).&rdquo;
        </em>{' '}
        Kentucky:{' '}
        <em>
          &ldquo;Many harmless brown spiders are mistaken for the brown recluse, so it is prudent to
          have specimens confirmed by an entomologist or knowledgeable pest control firm.&rdquo;
        </em>{' '}
        K-State:{' '}
        <em>
          &ldquo;For identification, contact your local K-State Research and Extension office or a
          pest control professional.&rdquo;
        </em>
      </p>

      <h2 id="range">Where They Actually Are</h2>
      <p>
        <strong>Penn State Extension gives the most specific answer, a named list:</strong>{' '}
        <em>
          &ldquo;Brown recluse spiders are established in sixteen states: Alabama, Arkansas,
          Georgia, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Mississippi, Missouri,
          Nebraska, Ohio, Oklahoma, Tennessee, and Texas.&rdquo;
        </em>{' '}
        It adds that isolated occurrences have been reported in nine further states and the District
        of Columbia.
      </p>
      <p>
        <strong>K-State draws it as a block</strong> rather than a list: most common in the central
        region from Colorado to Ohio, and from Nebraska and Iowa down to the Gulf States.{' '}
        <strong>Kentucky draws it loosely</strong> &mdash; the south central and Midwestern United
        States &mdash; and adds an internal gradient:{' '}
        <em>&ldquo;Infestations in Kentucky are more common as one travels westward.&rdquo;</em>
      </p>
      <p>
        <strong>And Iowa State contradicts the edge of Penn State&rsquo;s list for its own state.</strong>{' '}
        Penn State lists Iowa as established. Iowa State Extension says{' '}
        <em>
          &ldquo;brown recluse spiders are rare in Iowa but MIGHT be found in the southern portion
          of the state&rdquo;
        </em>{' '}
        and that{' '}
        <em>
          &ldquo;all available evidence indicates Iowa remains on the northern edge of brown recluse
          range.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Both are true, at different scales. A state can be inside the range on a national map and
          rare within that state.
        </strong>{' '}
        Neither figure is corrected against the other here.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Three sources showing the same map is one map, not three confirmations
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          Kentucky, Penn State and Iowa State all publish a range map and{' '}
          <strong>all three credit the same author, R. Vetter of UC Riverside.</strong> That is a
          single source rendered three times. It is worth saying, because three extension services
          agreeing looks like convergent evidence and here it is not.
        </p>
      </div>

      <h3>The spider that people find outside the range is almost never this one</h3>
      <p>
        <strong>Kentucky:</strong>{' '}
        <em>
          &ldquo;Recluse spiders are rare outside their native range. In general, these spiders are
          widely over-reported and less common than perceived.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM reports what happened when someone offered to check.</strong> A nationwide
        study ran from 2000 to 2005, offering to identify any spider believed to be a brown recluse.{' '}
        <em>
          &ldquo;Nearly 600 specimens were submitted from California, many from people who were
          adamant that they had a brown recluse. Only one of these specimens was a brown recluse,
          from a house where the family had moved from Missouri, a state that is well-known to have
          abundant brown recluse populations.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;Translocated recluse spiders have never been able to establish a foothold and start
          a population in California.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State, on states outside the native range:</strong>{' '}
        <em>
          &ldquo;They are not found outdoors, and the risk of being bitten is virtually
          nonexistent.&rdquo;
        </em>
      </p>
      <p>
        The peer-reviewed literature names one of the spiders people mistake for it. A 2022 paper in{' '}
        <em>Toxicon: X</em> reports five confirmed bites by crevice weaver spiders of the genus{' '}
        <em>Kukulcania</em>, all of minor expression, and states that these spiders{' '}
        <em>
          &ldquo;are frequently misidentified as brown recluse spiders (genus Loxosceles)&rdquo;
        </em>
        . The same paper notes that a wrong identification presented to a physician can lead to
        inappropriate treatment. <strong>What that treatment is or is not is a clinical question
        and this page does not go near it.</strong>
      </p>

      <h2 id="bites">What a Bite Does</h2>
      <p>
        <strong>
          Everything in this section is reported from a named source. None of it is this
          site&rsquo;s assessment, and none of it is graded here.
        </strong>
      </p>

      <h3>How a bite happens, and how rarely</h3>
      <p>
        <strong>Kentucky:</strong>{' '}
        <em>
          &ldquo;It is quite common, in fact, to live in a building that is heavily infested and
          never be bitten.&rdquo;
        </em>{' '}
        The mechanism, from the same source:{' '}
        <em>
          &ldquo;Most bites occur in response to body pressure, when a spider is inadvertently
          trapped against bare skin.&rdquo;
        </em>{' '}
        And a fact worth having:{' '}
        <em>
          &ldquo;Brown recluse spiders have very small fangs and cannot bite through clothing.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State reports one household in detail:</strong> a study of a home in which more
        than 2,000 spiders were collected over six months,{' '}
        <em>&ldquo;yet the residents hadn&rsquo;t been bitten in six years&rdquo;</em>. UC IPM
        describes the same Kansas family from the other side &mdash; 2,055 spiders collected in six
        months in a 19th-century home, lived in for nearly a decade, and{' '}
        <em>
          &ldquo;only once in 10 years had anyone shown evidence of a bite; it was to a finger which
          turned red for a few days and then healed without incident.&rdquo;
        </em>
      </p>
      <p>
        Kentucky describes the onset:{' '}
        <em>
          &ldquo;The initial bite is usually painless. Oftentimes the victim is unaware until 3 to 8
          hours later when the bite site may become red, swollen, and tender.&rdquo;
        </em>
      </p>

      <h3>What Penn State publishes about severity</h3>
      <p>
        Penn State Extension, updated September 2025, publishes a three-band breakdown:{' '}
        <em>
          &ldquo;Approximately 90 percent of brown recluse bites result in no reaction or a small
          (~5 millimeter), red papule that heals on its own.&rdquo;
        </em>{' '}
        <em>&ldquo;Approximately 10 percent of bites result in dermonecrotic lesions.&rdquo;</em>{' '}
        <em>
          &ldquo;Less than 1 percent of bites result in systemic symptoms that include hemolytic
          anemia and acute kidney injury.&rdquo;
        </em>{' '}
        Penn State states that those systemic symptoms are most common in children, can be fatal in
        12 to 36 hours, and represent a true medical emergency.
      </p>
      <p>
        On the middle band, Penn State states that the lesions develop over the course of two weeks
        and take two to four months to fully heal. <strong>Those are Penn State&rsquo;s words about
        a population of bites. They are not a description of anyone&rsquo;s wound and this page
        offers no way to place a wound among them.</strong>
      </p>

      <h3>Why the same wound gets blamed on this spider so often</h3>
      <p>
        <strong>Kentucky:</strong>{' '}
        <em>
          &ldquo;Contrary to popular belief, it is difficult to diagnosis a brown recluse spider
          bite from the wound alone.&rdquo;
        </em>{' '}
        (the spelling is the source&rsquo;s own). It lists what mimics it:{' '}
        <em>
          &ldquo;Many medical conditions mimic the necrotic-looking sore from a recluse bite,
          including bacterial and fungal infections, diabetic and pressure ulcers, and gangrene.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Multiple studies have found that &ldquo;brown recluse bites&rdquo; are
          overdiagnosed and the majority of &ldquo;bites&rdquo; are misdiagnoses of other issues,
          including poison ivy, chemical burns, and diabetic ulcers.&rdquo;{' '}
        <em>
          (the inner quotation marks around both quoted phrases are Penn State&rsquo;s own and are left as published)
        </em>
        </em>
      </p>
      <p>
        <strong>UC IPM gives a figure:</strong>{' '}
        <em>
          &ldquo;In one national study involving 11 university-based medical facilities, 29% of the
          patients presenting for &ldquo;spider bite&rdquo; had MRSA as the cause of their skin and
          soft tissue injury.&rdquo;{' '}
        <em>
          (the inner quotation marks around the phrase spider bite are UC Riverside&rsquo;s own and are left as published)
        </em>
        </em>{' '}
        UC IPM also publishes a rule based on the number and distribution of lesions for
        distinguishing a spider bite from other causes. <strong>That rule is a diagnostic test, it
        belongs to a clinician, and it is named here rather than set out.</strong>
      </p>
      <p>
        <strong>Kentucky, on where a suspected bite is least likely to be one:</strong>{' '}
        <em>
          &ldquo;Suspected bites occurring outside the native range of the brown recluse spider are
          particularly unlikely, given that surveys rarely yield recluses in non-native areas.&rdquo;
        </em>
      </p>

      <h3>A separate figure from UC IPM, and why it is not put beside Penn State&rsquo;s</h3>
      <p>
        UC IPM publishes its own proportion:{' '}
        <em>
          &ldquo;About 10% of brown recluse bites cause moderate or greater tissue damage and
          scarring, but the vast majority only result in inflammation and heal well without medical
          intervention.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Two sources publish ten percent. They are counting different things.
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Penn State&rsquo;s ten percent is <strong>dermonecrotic lesions</strong>. UC IPM&rsquo;s
          ten percent is <strong>moderate or greater tissue damage and scarring</strong>. Those are
          different definitions and they were measured by different people, so{' '}
          <strong>
            the two figures are not combined here, not averaged, and not presented as confirming
            each other.
          </strong>{' '}
          They are set out in separate sections deliberately. Kentucky Extension, for its part,
          publishes no percentage at all and uses time instead:{' '}
          <em>
            &ldquo;The majority of brown recluse spider bites remain localized, healing within 3
            weeks without serious complication or medical intervention.&rdquo;
          </em>
        </p>
      </div>

      <h2 id="medical">If You Think You Have Been Bitten</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          This is the one thing every source on this page agrees about: involve a clinician.
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          Two of them say so <strong>immediately</strong>. Beyond that the published first-aid
          instructions differ, and they are given below <strong>as each source publishes them</strong>{' '}
          rather than merged into a single house version. Nothing has been added to any of them.
        </p>
        <ul className="mt-4 mb-0 space-y-3 text-sm text-red-900">
          <li>
            <strong>University of Kentucky Extension:</strong>{' '}
            <em>
              &ldquo;Persons bitten by a brown recluse spider should apply ice, elevate the affected
              area, and seek medical attention immediately.&rdquo;
            </em>
          </li>
          <li>
            <strong>Kansas State University Extension:</strong>{' '}
            <em>
              &ldquo;If you suspect you have been bitten by a brown recluse, apply ice to the wound
              and contact your health provider immediately.&rdquo;
            </em>{' '}
            It adds:{' '}
            <em>
              &ldquo;While treatment varies, medical professionals agree that early diagnosis and
              treatment are important.&rdquo;
            </em>
          </li>
          <li>
            <strong>UC IPM recommends RICE therapy</strong> &mdash; Rest, Ice, Compression,
            Elevation &mdash; for bites that do not develop severe symptoms.{' '}
            <strong>
              In the same publication it records a position against two parts of its own advice:
            </strong>{' '}
            <em>
              &ldquo;other medical experts suggest cold instead of ice (to avoid freezing tissue)
              and a neutral position (lay flat) rather than elevated.&rdquo;
            </em>{' '}
            Quoting only the first half would be quoting UC IPM incompletely, so both halves are
            here.
          </li>
        </ul>
        <p className="m-0 mt-4 text-sm text-red-900">
          <strong>Bring the spider if you safely can.</strong> Kentucky:{' '}
          <em>
            &ldquo;anyone bitten by what is thought to be a brown recluse should try to collect the
            specimen and bring it to a qualified individual for identification. Even crushed or
            damaged specimens can usually be identified.&rdquo;
          </em>{' '}
          K-State says the same. Kentucky&rsquo;s reason:{' '}
          <em>
            &ldquo;Confirmation by an expert will help the physician decide on the appropriate
            course of treatment.&rdquo;
          </em>
        </p>
      </div>
      <p>
        <strong>What is deliberately not on this page.</strong> Treatment decisions, wound grading
        and the clinical management of a suspected bite belong to a clinician and are named here
        rather than reproduced. UC IPM does publish one point of fact worth relaying because people
        act on the opposite assumption:{' '}
        <em>&ldquo;Antibiotics work against bacteria and have no effect on spider venom.&rdquo;</em>{' '}
        That is UC IPM&rsquo;s statement, reported as such. UC IPM also notes that regardless of the
        cause, it is sensible to seek medical attention if you feel it is warranted.
      </p>
      <p>
        <strong>No source consulted for this page discusses an antivenom for this spider</strong>,
        so nothing is said about one. That silence is recorded rather than left to look like an
        omission.
      </p>

      <h2 id="confirming">Confirming What You Have</h2>
      <p>
        Everything below this line is about a building rather than a wound. It starts where the
        identification section above ended: <strong>the six-eye character is the one all the sources
        accept, and it is too small to see without help.</strong> Kentucky:{' '}
        <em>&ldquo;Seeing this feature requires a good quality hand lens.&rdquo;</em>
      </p>
      <p>
        A lens lets you rule a spider <strong>out</strong>, which is what most people actually need.
        It does not let you rule one in &mdash; all three sources quoted above route confirmation to
        an entomologist, an extension office or a pest control professional.
      </p>

      {lens.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="clutter">Clutter and Storage</h2>
      <p>
        <strong>This is the measure the sources agree on most.</strong> K-State:{' '}
        <em>
          &ldquo;Begin by removing clutter, especially in low-traffic areas such as basements,
          attics, and upper rooms. Frequent cleaning, using a vacuum wand to reach between boxes and
          other tight spaces, will help eliminate spiders, egg sacs, and potential food sources
          before spiders emerge and reproduce.&rdquo;
        </em>
      </p>
      <p>
        Kentucky:{' '}
        <em>
          &ldquo;Reducing clutter affords fewer places for the spiders to hide and can enhance
          effectiveness of treatments.&rdquo;
        </em>{' '}
        And on what to do with what is left:{' '}
        <em>
          &ldquo;Remove excess clutter and store seldom used items in plastic storage
          containers.&rdquo;
        </em>{' '}
        Texas A&amp;M adds the cardboard problem:{' '}
        <em>
          &ldquo;Stored boxes should be tightly taped shut to eliminate the availability as a
          nesting site.&rdquo;
        </em>
      </p>
      <p>
        <strong>K-State is specific about what kind of container counts:</strong>{' '}
        <em>
          &ldquo;To exclude spiders, use tightly sealed storage containers and avoid placing them
          close together or against walls.&rdquo;
        </em>{' '}
        A lid alone is not what that sentence asks for.
      </p>

      {storage.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h3>Going through what is already stored</h3>
      <p>
        Kentucky:{' '}
        <em>
          &ldquo;When sorting through boxes or materials, wear long sleeves and gloves to avoid
          being bitten.&rdquo;
        </em>{' '}
        The clearing out is the part of this job that puts a hand where a spider is resting, which
        is why the instruction is attached to it.
      </p>
      <p>
        The three gloves below are the same three named on our fire ant page, for a different
        reason. <strong>No source describes any glove as bite-proof and neither does this page.</strong>
      </p>

      {gloves.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="sealing">Sealing the Way In</h2>
      <p>
        <strong>Kentucky names the entry points:</strong>{' '}
        <em>
          &ldquo;Some of the more common entry points for brown recluse spiders include gaps under
          doors, vents and utility penetrations, beneath the bottommost edge of siding, and where
          eaves and soffits meet the sides of buildings.&rdquo;
        </em>{' '}
        And what sealing achieves:{' '}
        <em>
          &ldquo;Sealing cracks and holes in a building&rsquo;s exterior can further help to keep
          these, and other pests, outdoors.&rdquo;
        </em>
      </p>
      <p>
        K-State:{' '}
        <em>
          &ldquo;Sealing both interior and exterior cracks and crevices prevents spiders and insect
          prey from moving into and around the home.&rdquo;
        </em>{' '}
        UC IPM states it for one house type, and the condition is part of the sentence:{' '}
        <em>
          &ldquo;In residences with attached garages, block off house access to spiders by sealing
          cracks around doors and access holes for electrical conduits or plumbing.&rdquo;
        </em>
      </p>
      <p>
        Kentucky also puts the prey supply outdoors:{' '}
        <em>
          &ldquo;Migration indoors can be reduced by moving firewood, building materials, and debris
          away from foundations.&rdquo;
        </em>{' '}
        Texas A&amp;M makes the same point about light:{' '}
        <em>
          &ldquo;Making sure doors are well sealed and outdoor lighting is shielded to avoid
          attracting outdoor insects like crickets&rdquo;
        </em>{' '}
        &mdash; because the spiders are there for the insects.
      </p>

      {sealants.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="monitoring">Glue Traps: What They Do and Do Not Do</h2>
      <p>
        <strong>Kentucky treats them first as a survey:</strong>{' '}
        <em>
          &ldquo;An excellent way to survey for brown recluse is to install flat, sticky cards known
          as glue traps.&rdquo;
        </em>{' '}
        On placement:{' '}
        <em>
          &ldquo;Traps should be placed in corners and along baseboards and wall-floor junctures,
          especially behind furniture and clutter since spiders tend to travel in these areas.&rdquo;
        </em>{' '}
        On quantity, its instruction is that the more traps the better, and that{' '}
        <em>
          &ldquo;dozens placed throughout a home will reveal areas where spiders are most
          abundant.&rdquo;
        </em>
      </p>
      <p>
        <strong>They also kill some of what they catch.</strong> Kentucky:{' '}
        <em>
          &ldquo;Besides being useful for detection, glue traps can capture and kill large numbers
          of spiders, especially the males, which are more likely to wander into places where people
          are accidentally bitten.&rdquo;
        </em>{' '}
        K-State reports its own trial:{' '}
        <em>
          &ldquo;In a recent study, K-State entomologists found that traps can also help control or
          reduce established populations.&rdquo;
        </em>{' '}
        Texas A&amp;M:{' '}
        <em>&ldquo;Sticky cards readily trap brown recluse spiders, and do provide some spider control.&rdquo;</em>
      </p>
      <p>
        <strong>And the limit, from the same source that recommends them.</strong> Kentucky:{' '}
        <em>
          &ldquo;Some spiders will not be caught in glue traps, especially the adult females, which
          stay hidden more so than male spiders.&rdquo;
        </em>{' '}
        K-State treats the trap as the thing that tells you what to do next:{' '}
        <em>
          &ldquo;Observe whether trapping has been effective in reducing the population or if an
          insecticide application is warranted.&rdquo;
        </em>{' '}
        It also gives a monitoring schedule &mdash; weekly, from March through October &mdash; for
        detecting reinfestation.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          The two sources disagree about which traps to buy, and both are given
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          <strong>Kentucky Extension is specific about the form:</strong> the traps it recommends for
          this spider are flat, like thin pieces of sticky cardboard, with no raised perimeter edge.{' '}
          <strong>K-State Extension is permissive:</strong>{' '}
          <em>
            &ldquo;Although some are labeled specifically for spiders, any trap will work, including
            those marketed for control of other pests such as cockroaches or mice.&rdquo;
          </em>{' '}
          Both boards below satisfy the stricter of the two, which is the reason those two were
          chosen and not others. <strong>The disagreement is not resolved here</strong> &mdash;
          K-State&rsquo;s position would widen the choice considerably, and it is a published
          position from a service inside this spider&rsquo;s range.
        </p>
      </div>

      {glueTraps.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="bed">Reducing the Chance of a Bite</h2>
      <p>
        Kentucky gives a set of measures for while control is under way:{' '}
        <em>
          &ldquo;Beds should be moved away from walls, and remove any bed skirts/dust ruffles to
          break contact with the floor. Shoes and clothing should also be kept off floors, or at
          least shaken out before wearing. Remove excess clutter and store seldom used items in
          plastic storage containers.&rdquo;
        </em>
      </p>
      <p>
        K-State publishes the same idea in its own words, and scopes it to a house already known
        to be infested:{' '}
        <em>
          &ldquo;In an infested home, you can reduce the chance of being bitten by shaking out shoes
          and clothing before putting them on, keeping bed sheets from touching the floor, and
          hanging clothes in closets rather than leaving them on the floor.&rdquo;
        </em>
      </p>
      <p>
        Kentucky closes on the calibration, and it is worth carrying:{' '}
        <em>
          &ldquo;There may be some comfort in knowing that bites are a rare occurrence, even in
          dwellings where brown recluses are abundant.&rdquo;
        </em>
      </p>

      <h2 id="insecticides">Insecticides, and Why Nothing Is Offered Here</h2>
      <p>
        <strong>
          Four extension services take four different positions on whether insecticides work on this
          spider. That is why this page names no product for the class.
        </strong>{' '}
        It is not a claim that they do not work. It is that the sources do not give a homeowner a
        standard a product could be measured against, and naming one anyway would be our judgement
        dressed as theirs.
      </p>
      <ul>
        <li>
          <strong>University of Kentucky Extension</strong> states that{' '}
          <em>&ldquo;Brown recluse spider elimination will often require use of insecticides&rdquo;</em>{' '}
          and names dust and spray active ingredients for professionals to apply into cracks and
          voids.
        </li>
        <li>
          <strong>Texas A&amp;M AgriLife</strong> states that{' '}
          <em>
            &ldquo;Research conducted at Oklahoma State and Texas A&amp;M Universities has confirmed
            that brown recluse spiders are difficult to kill with most insecticides.&rdquo;
          </em>{' '}
          It reports pyrethroids giving improved control over older chemistries, and residues on wood
          and masonite lasting only about seven days.
        </li>
        <li>
          <strong>Kansas State University Extension</strong> states that{' '}
          <em>
            &ldquo;The effectiveness of insecticides for brown recluse control has not been proven
            or tested extensively&rdquo;
          </em>
          , that many pesticide trials have yielded inconsistent results, and that spiders must be
          sprayed directly, <em>&ldquo;which may not be practical.&rdquo;</em>
        </li>
        <li>
          <strong>Iowa State University Extension</strong> states that{' '}
          <em>
            &ldquo;Insecticides are notoriously ineffective and should be limited to spot and void
            treatments of spider harborages.&rdquo;
          </em>
        </li>
      </ul>
      <p>
        <strong>On one product type the sources do agree.</strong> Kentucky:{' '}
        <em>
          &ldquo;Total-release pesticide foggers known as &lsquo;bug bombs&rsquo; are seldom
          effective against these spiders, and should only be considered when treating otherwise
          inaccessible areas.&rdquo;
        </em>{' '}
        K-State:{' '}
        <em>
          &ldquo;Use of fumigants and aerosols to control spiders has not proven effective because
          products are often applied haphazardly and excessively.&rdquo;
        </em>{' '}
        <strong>Nothing of that kind is named here either.</strong>
      </p>
      <p>
        K-State also reports a finding about how insecticides act on this spider indirectly:
        spiders that ate insecticide-killed prey did not die from that secondary exposure, but
        insecticide use reduced the arthropod prey available, which limits what the population has
        to live on over time.
      </p>

      <h3>What the sources say about doing this yourself</h3>
      <p>
        <strong>Two of them route the job to a professional and this page does not soften it.</strong>{' '}
        Kentucky states that{' '}
        <em>
          &ldquo;Brown recluse spiders are difficult to eradicate, largely because of their secretive
          habits&rdquo;
        </em>{' '}
        and that virtually any dark, undisturbed area can serve as harborage; on that basis, and
        because of the potential health threat, it says treatment is preferably carried out by
        professionals. Texas A&amp;M recommends hiring a professional pest control company as the
        sound response to a household infestation, and adds:{' '}
        <em>
          &ldquo;Even for professionals, infestations of the brown recluse can be difficult to
          control.&rdquo;
        </em>{' '}
        Those two sentences are paraphrased rather than quoted because both use a superlative this
        site does not print; the instruction in each is unchanged.
      </p>
      <p>
        <strong>K-State is the most encouraging of the three, and still conditional:</strong>{' '}
        <em>
          &ldquo;Eliminating brown recluse spiders from a structure may be difficult, but it is
          possible using an integrated approach that emphasizes eliminating the spider&rsquo;s
          habitat.&rdquo;
        </em>{' '}
        <strong>
          Every product on this page belongs to that habitat-and-monitoring approach. None of them
          is offered as a way to eradicate an infestation, because no source consulted says a
          householder can buy one.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
