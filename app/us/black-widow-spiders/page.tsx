import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { WIDOW_NAV, WIDOW_HOME } from '../components/blackWidowNav';

const URL = 'https://pestproindex.com/us/black-widow-spiders';
const TITLE = 'Black Widow Spiders: Species, Range and What the Sources Say';
const DESCRIPTION =
  'Nine things the extension services disagree about, from whether the hourglass is reliable to how long a bite lasts to whether insecticides do anything. Every position is here with the service that published it.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Black Widow Spiders', item: URL }],
};

// ---------------------------------------------------------------------------
// PRODUCT RECORDS — the single source of truth for every product on this page.
//
// IDENTITY PROVENANCE, 2026-08-26. Two ASINs were identity-checked by direct
// fetch of amazon.com/dp/<ASIN> and banked: the gloves and the door sweep. The
// other six are already carded elsewhere on this estate and are REUSED, not
// re-sourced or re-fetched. Their card names are kept byte-identical to the
// names those routes already render, so one product never carries two names.
//
// ALL REUSED COPY IS WRITTEN FRESH FROM THE WIDOW SOURCES. The duster's copy on
// the Joro page is about taking down an orb web; the sealant copy elsewhere is
// about scorpions, lady beetles and cluster flies; the gasket box copy on the
// recluse page cites a K-State recluse criterion. Reusing an ASIN is not reusing
// its reason, and every bullet below states what THESE sources say the tool is
// for.
//
// NOTHING HERE IS A CLAIM ABOUT STOCK, PRICE OR DELIVERY.
// ---------------------------------------------------------------------------

type ProductGroup = 'duster' | 'gloves' | 'storage' | 'sealant' | 'sweep' | 'screen';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B075L7QWP4',
    cardName: 'EVERSPROUT 5-to-12 Foot Cobweb Duster & Pole Combo',
    titleAsFetched: 'EVERSPROUT 5-to-12 Foot Cobweb Duster & Pole Combo',
    group: 'duster',
    whatItDoes: [
      'Kansas State University Extension names the tool directly: remove and destroy spiders, webbing and egg sacs with a broom or other long-handled device, or a vacuum cleaner',
      'The reach matters because widow webs sit in the places you do not want your hand — K-State lists electrical and water meter boxes, woodpiles, lawn debris and unused equipment',
      'A pole reaching 5 to 12 feet, per the listing, so the web comes down from a distance',
      'Already named on our Joro spider web page for a different job. Same tool, and the reason here is that three of these sources make physical removal the main method',
    ],
  },
  {
    asin: 'B071JWBBF9',
    cardName: 'Grain Cowhide Leather Palm Gauntlet Cuff Gloves',
    titleAsFetched: 'Grain Cowhide Leather Palm Gauntlet Cuff Gloves',
    group: 'gloves',
    whatItDoes: [
      'Two of the four sources that mention gloves specify the material: Kansas State asks for leather gloves and long sleeves, and Colorado State for heavy, leather gloves',
      'Leather and a gauntlet cuff, both stated in the listing itself — the cuff is the part that covers the wrist and forearm as a hand goes into a woodpile or a meter box',
      'UC IPM attaches gloves to two specific moments: clearing clutter in garages and storage areas, and picking up firewood',
      'No source consulted for this page describes any glove as bite-proof, and this page does not describe one that way either',
    ],
  },
  {
    asin: 'B00KL7VPWO',
    cardName: 'Sterilite 54 Quart Gasket Box, 4-Pack',
    titleAsFetched:
      'Sterilite 4-Pack 54 Quart Gasket Box, Home Storage Organizer Bins with Lids - Stackable Clear Plastic Containers for Bedroom, Bathroom, Garage, Basement, or Attic',
    group: 'storage',
    whatItDoes: [
      'UC IPM asks for seasonal items to be stored in boxes that can be taped shut and placed off the floor away from walls, so that spiders are excluded from them',
      'This is a sealed latching box rather than a taped cardboard one — it meets the purpose UC IPM describes and exceeds the specification it gives, which is a difference worth stating rather than glossing',
      'Four containers at 54 quarts each, per the listing, with a gasketed seal and hinged latch clips in its own description',
      'The placement instruction is half the measure: off the floor and away from walls, not stacked tight against them',
    ],
  },
  {
    asin: 'B0BVGTM2XY',
    cardName: 'GE Advanced Silicone Caulk for Window & Door, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE Advanced Silicone Caulk for Window & Door, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'Kansas State Extension: where possible, seal cracks around doors and windows and repair holes in screens, to keep spiders out of the structure',
      'A cartridge sealant is how those gaps close, and this one is sold for windows and doors, which is where K-State puts the instruction',
      'Utah State Extension gives the same measure as one line of its IPM list: seal exterior cracks and crevices to reduce hiding places',
      'Named on four other pages of this site for four other animals. The reason here is the widow sources own instruction, not theirs',
    ],
  },
  {
    asin: 'B0000CBJ7W',
    cardName: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    titleAsFetched: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'UC IPM describes the same job in a garage: block off house access to spiders by sealing cracks around doors and access holes for electrical conduits or plumbing',
      'A clear cartridge sealant for those gaps, in the same size class as the one above',
      'K-State makes the point that sealing works on both sides of the problem, keeping out the spiders and the insect prey they follow',
      'A specific example of the type. No source consulted tested this or any other brand against a widow spider',
    ],
  },
  {
    asin: 'B0B8QPH3RW',
    cardName: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'An all-purpose silicone rather than a window-and-door one, for the conduit and plumbing penetrations UC IPM names',
      'Widow spiders use ready-made holes. Colorado State says they are most often found in abandoned rodent burrows, loose stone or wood piles, or the corners of rooms, garages and outbuildings',
      'Sealing is the one control step every source on this page supports without qualification',
      'A specific example of the type, named for that reason and no other',
    ],
  },
  {
    asin: 'B0BS2DZZ7J',
    cardName: '36 Inch Slide-On Door Sweep, Aluminum with Rubber Seal',
    titleAsFetched:
      '36 Inch Slide-On Door Sweep for Bottom of Door, White Aluminum Door Bottom Seal with Flexible Gray Rubber, Under Door Draft Stopper and Gap Filler for Exterior or Interior Doors',
    group: 'sweep',
    whatItDoes: [
      'Utah State Extension puts it on its IPM list in four words: install tight-fitting door sweeps',
      'The listing states the gap it closes — from a quarter of an inch to one inch, between the door and the floor or threshold',
      'It states its own fit: 36 inches long, trimmable to smaller doors, for doors one inch to one and three-quarter inches thick',
      'The aluminum holder slides over the bottom edge of the door and covers both sides, per the listing, so no slot or track is needed in the door',
    ],
  },
  {
    asin: 'B0BS4KH2FH',
    cardName: 'Insect Screen, 20 x 20 Mesh Roll, 36 inch x 25 feet',
    titleAsFetched: 'Insect Screen, 20 x 20 Mesh Roll, 36 inch x 25 feet',
    group: 'screen',
    whatItDoes: [
      'Utah State Extension asks for tight-fitting screens in windows; K-State asks that holes in screens be repaired',
      'A 20 by 20 mesh roll, 36 inches by 25 feet per the listing, which is a screen-repair quantity rather than a whole-porch one',
      'Neither source specifies a mesh count for widows. The mesh here is finer than the 18 by 16 sold as standard window screening, and that is a fact about the product rather than a requirement from any source',
      'Named on two other pages of this site for insects that come through torn screens. The reason here is the same physical gap',
    ],
  },
];

const duster = products.filter((p) => p.group === 'duster');
const gloves = products.filter((p) => p.group === 'gloves');
const storage = products.filter((p) => p.group === 'storage');
const sealants = products.filter((p) => p.group === 'sealant');
const sweeps = products.filter((p) => p.group === 'sweep');
const screens = products.filter((p) => p.group === 'screen');

const faqs: Faq[] = [
  {
    question: 'Is the red hourglass a reliable way to identify a black widow?',
    answer:
      'It depends which species you have in front of you, and the sources do not describe it the same way. Kansas State University Extension uses the marking to tell three species apart: the northern black widow has a broken hourglass with a row of red spots down the middle of the back, the southern has a complete hourglass and one red spot just above and behind the spinnerets, and the western has a complete hourglass with the rest of the abdomen solid black. But UC IPM says of the western species that the red hourglass varies in appearance, and can be two merged triangles, two separated triangles, a triangle and a small bar, minimal or almost imperceptible red coloration, or on rare occasions completely absent. Colorado State says the same pattern may appear as two unconnected spots, as a roughly rectangular area, or be so faint as to be barely visible. UF/IFAS compares three species and states the northern widow typically has the hourglass but some individuals lack it completely. This page does not resolve that. What follows from all of them together is that a complete hourglass is good evidence and its absence is not good evidence of anything.',
  },
  {
    question: 'How many widow species are there in the United States?',
    answer:
      'Penn State Extension states that in the United States there are probably five species: the southern black widow, L. mactans; northern black widow, L. variolus; western black widow, L. hesperus; brown widow, L. geometricus; and the red widow, L. bishopi. Every source states its species list for its own state or region rather than nationally: UC IPM says there are two widow species in California, the western black widow and the brown widow; Kansas State names three in Kansas, the northern, southern and western; UF/IFAS names four in Florida. A state list and a national list are different claims and this page keeps them apart.',
  },
  {
    question: 'Does the female really eat the male?',
    answer:
      'Two sources say the folklore is wrong and one repeats it. Penn State Extension states that males are often killed and eaten by the females shortly after mating, and gives that as the origin of the name widow. Colorado State Extension states that although females of many spider species occasionally feed on males if the female is hungry, this cannibalistic behavior is not the norm despite the common misconception. Kansas State says of the same behaviour that although it has been observed, it is uncommon, and adds that males typically leave the female quickly after mating and often remain near the web feeding on prey she has caught. This page reports all three rather than choosing.',
  },
  {
    question: 'How likely is a bite?',
    answer:
      'Every source that addresses it says bites are rare. UC IPM states that bites from black widow spiders are quite rare, even where these spiders are very common. Colorado State states that the western widow is not aggressive and that bites are very infrequent even when large numbers of spiders occupy an area, and adds that widow spiders rarely, if ever, bite when not within a web. Penn State and UC IPM both state that bites are almost entirely from the adult female: Penn State says immature and male black widows do not possess fangs large enough to pierce human skin. Colorado State describes the usual circumstance as somebody inadvertently pressing down on a spider resting under a rock or under wood in a wood pile.',
  },
  {
    question: 'What does a bite feel like, and how long does it last?',
    answer:
      'Four sources give four different accounts and this page gives all four. On the bite itself, UC IPM says that in the unlikely event of an actual bite it is painless or may feel like a little pinprick, Penn State says a bite is almost painless at first because the venom is principally neurotoxic, and Colorado State says the bite can go unnoticed although it most often produces an immediate sharp, pin-prick pain. On what follows, UC IPM says other symptoms may start to appear within an hour; Penn State says pain will be felt one to two hours later and generalized body symptoms develop within one to three hours; Colorado State says there is often a general sense of discomfort shortly after the bite and acute symptoms increase in severity during the first day. On duration, UC IPM says symptoms usually dissipate in a few days, Penn State says they generally dissipate within four days but may last as long as a week, and Colorado State says they usually decline after two to three days but some may continue for several weeks up to a month after the bite. UF/IFAS gives a different measure again, and one conditioned on care: patients usually recover within 24 hours following treatment or 3 to 5 days without supportive care. Those four courses are not averaged here and the outer bounds differ widely.',
  },
  {
    question: 'What are the symptoms?',
    answer:
      'Reported from the sources, not assessed here. UC IPM qualifies its list before giving it, saying bite victims might suffer from some but not all of the following symptoms. It lists rigid stomach muscles, which it notes some medical professionals have misdiagnosed as appendicitis; sweating, sometimes of just the bitten body part; pain that can be local, radiating or regional; urine retention; and less commonly numbness, agitation, fever and patchy paralysis. It then puts the list in proportion in its own words: although these are the most severe manifestations of black widow bites, symptoms most often merely resemble those of the flu. Colorado State states that muscle and chest pain or tightness are some of the most common reactions to the widow toxin. One negative is worth carrying because it separates this spider from the brown recluse: UC IPM states that black widow bites do not cause conspicuous swelling, necrosis, or deterioration of tissue around the bite. Kansas State adds that reactions vary with the age and health of the person bitten and the area of the body bitten, and that the very young and very old are most likely to be severely affected.',
  },
  {
    question: 'What should I do if I think I have been bitten?',
    answer:
      'Every source that publishes first-aid guidance says involve a clinician, and two say immediately. Beyond that they differ, so each is given complete and separately, exactly as its source states it. UC IPM: if bitten, seek medical attention immediately, and you can place a cold pack on the bite to relieve the pain. Kansas State: if you suspect you have been bitten by a black widow spider, immediately apply cold to the area to reduce swelling, sanitize using hydrogen peroxide or rubbing alcohol to mitigate infection, seek medical attention right away, and if possible carefully and safely collect the spider and take it with you to the doctor or emergency room. UF/IFAS adds an instruction no other source gives: pregnant individuals should seek medical attention immediately. Colorado State and Utah State publish no first-aid list at all. Nothing has been added to any of these and nothing has been merged. Note that K-State says cold to reduce swelling while UC IPM says a cold pack to relieve pain, and that UC IPM elsewhere states these bites do not cause conspicuous swelling.',
  },
  {
    question: 'Is there an antivenom?',
    answer:
      'Yes, and the sources describe its use differently. UC IPM states that an antivenom for black widow bites is available that works for all species that have been tested worldwide, that response is fast, and that the antivenom is based on horse serum so physicians need to monitor for anaphylactic shock; it adds that American physicians are somewhat reluctant to use antivenom for this reason and might prefer to have the bite victim simply endure the symptoms. Penn State states that Latrodectus antivenin is available but is generally reserved for extreme cases as there is a risk of anaphylaxis to the antivenin. UF/IFAS publishes a fuller clinical account of when and how it is used, which is a matter for a clinician and is named here rather than set out. This page reports that the antivenom exists, what it is made from, and why the sources describe its use as restricted. It does not say when it should be given or to whom.',
  },
  {
    question: 'Do people die from black widow bites?',
    answer:
      'The sources frame this differently and none is corrected against the others here. Penn State Extension states, citing the American Association of Poison Control Centers, that approximately 2,200 people are bitten in the United States by black widows every year, but no deaths have been recorded due to black widow bites since 1983. Kansas State Extension states that in severe but rare cases, bites result in tremors, convulsions, difficulty breathing, and death due to suffocation. Utah State Extension lists the possible outcomes of a bite as pain, nausea, cramping or death, marking death as rare, and states that a bite can be a serious health risk especially to children and elderly people. UC Riverside, writing about southern California, states in passing that black widow bites do occasionally happen and no one dies. Two of those describe no deaths in the data they cite and two describe death as a rare possible outcome.',
  },
  {
    question: 'Is the brown widow dangerous?',
    answer:
      'Both UC sources say its bite is minor, and one of them cites a case report that this page has not read. UC IPM states that unlike that of the black widow, the bite of the brown widow is not much more toxic to humans than that of other common spiders. UC Riverside is blunter, stating that the brown widow is not a spider of medical concern and is not likely to become one, and citing a South African series in which only two symptoms were reported in the majority of bite victims: pain while being bitten, and a mark where the bite occurred. Against that, UC IPM own reference list cites a 2008 paper in the Southern Medical Journal reporting a severe reaction from a brown widow envenomation. That paper was not read for this page and its findings are not stated here, but its existence in the bibliography of one of the two sources calling the bite minor is worth knowing.',
  },
  {
    question: 'Do insecticides work on widow spiders?',
    answer:
      'The sources take four positions and this page names no product for the class. UC IPM states that insecticides do not provide long-term control, and that typically, control of spiders using pesticides is difficult. Colorado State states that insecticides can be useful for adult spider control but are not particularly effective against egg sacs, names four pyrethroids sold for general spider control around a home, and says that the benefit of a perimeter treatment will be short-lived. Kansas State says spot treatment of areas widows inhabit can be used, and that general crack-and-crevice applications are unlikely to work because the pesticide does not come into contact with the spiders. Utah State lists no insecticide at all in its IPM recommendations. UC IPM does publish one formulation finding: in a 2016 study, water-based insecticides sprayed on brown widow egg sacs had no significant effect on the egg contents, while petroleum-based products carried the pesticide past the silk and killed the contents.',
  },
  {
    question: 'Can I get rid of them completely?',
    answer:
      'UC IPM says no, and gives the reason. It states that it is not practical to eliminate these spiders completely and that both widow species will continue to re-infest treated areas. The mechanism is ballooning: spiderlings climb up, release a filament of silk and are carried away on updrafts, so UC IPM says that because spiderlings will be dropping down on your property continually, eliminating them will be a task that needs to be done repeatedly throughout the year. Kansas State says it is difficult to locate and destroy all spiders without thoroughly cleaning the area. Note what none of these sources says: not one of them routes this job to a professional. That is a real difference from what the same kind of sources say about the brown recluse.',
  },
];

const sources: Source[] = [
  {
    label:
      'Widow Spiders and Their Relatives — the source of the western black widow range, the hourglass variability, the medical aspects and antivenom account, the brown widow comparison, the ballooning limit, the 2016 egg-sac formulation study and most of the habitat guidance',
    publisher: 'UC Statewide IPM Program (R. S. Vetter)',
    date: 'Accessed 26 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/widow-spiders-and-their-relatives/',
  },
  {
    label:
      'Southern Black Widow Spider — the source of the five-species United States list, the symptom timings, the antivenin position and the Poison Control Centers figure',
    publisher: 'Penn State Extension (Steve Jacobs)',
    date: 'Updated 8 September 2025; accessed 26 August 2026',
    href: 'https://extension.psu.edu/southern-black-widow-spider',
  },
  {
    label:
      'Western Widow Spider — the source of the Steatoda comparison, the symptom duration, the cannibalism correction, the physical-removal position and the repellent and ultrasonic finding',
    publisher: 'Colorado State University Extension',
    date: 'Accessed 26 August 2026',
    href: 'https://extension.colostate.edu/resource/western-widow-spider/',
  },
  {
    label:
      'Southern Black Widow, Latrodectus mactans (EENY-560/IN1000) — the source of the southern species range, the 2010 Poison Control figures, the recovery timings and the pregnancy instruction',
    publisher: 'University of Florida IFAS Extension',
    date: 'Accessed 26 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in1000',
  },
  {
    label:
      'Structural Pests: Black Widow Spiders (MF3346) — the source of the three-species hourglass table, the first-aid list, the leather glove and long-handled removal instructions and the crack-and-crevice finding',
    publisher:
      'Kansas State University Agricultural Experiment Station and Cooperative Extension Service (R. Jeff Whitworth and Holly Schwarting)',
    date: 'March 2017; accessed 26 August 2026',
    href: 'https://bookstore.ksre.ksu.edu/pubs/MF3346.pdf',
  },
  {
    label:
      'The Brown Widow in Southern California — the source of the 2003 Los Angeles discovery and of the position that the brown widow is not a spider of medical concern',
    publisher: 'University of California, Riverside, Department of Entomology (Rick Vetter)',
    date: 'Undated in page; describes a February 2003 discovery; accessed 26 August 2026',
    href: 'https://spiders.ucr.edu/brown-widow-spiders',
  },
  {
    label:
      'Black Widow Spider (Urban Pest Guide) — the source of the door sweep, window screen and exterior lighting items, and of the outcomes list for a bite',
    publisher: 'Utah State University Extension',
    date: 'Accessed 26 August 2026',
    href: 'https://extension.usu.edu/pests/ipm/notes_nuisance/black-widow.php',
  },
  {
    label:
      'False Black Widow Spider — the source of the Steatoda grossa description and of the statement that its bite symptoms are much less severe',
    publisher: 'Penn State Extension (Steve Jacobs)',
    date: 'Updated 8 September 2025; accessed 26 August 2026',
    href: 'https://extension.psu.edu/false-black-widow-spider',
  },
  {
    label:
      'Common Spiders Found Around Homes and Buildings (ENTFACT-622) — cited only for its statement that few spider species have venom of consequence to people',
    publisher: 'University of Kentucky (Lee Townsend and Ken Yeargan)',
    date: 'Accessed 26 August 2026',
    href: 'https://entomology.ca.uky.edu/files/ef622.pdf',
  },
];

const tocItems = [
  { id: 'which-widow', title: 'Which Widow, and the Hourglass' },
  { id: 'range', title: 'Where Each Species Is' },
  { id: 'bites', title: 'What a Bite Does' },
  { id: 'medical', title: 'If You Think You Have Been Bitten' },
  { id: 'habitat', title: 'Where They Live, and Taking Webs Down' },
  { id: 'handling', title: 'Handling Stored Things and Woodpiles' },
  { id: 'exclusion', title: 'Keeping Them Out' },
  { id: 'insecticides', title: 'Insecticides, and Why Nothing Is Named Here' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function BlackWidowSpidersPage() {
  return (
    <UsPageLayout
      title="Black Widow Spiders"
      subtitle="The extension services disagree about whether the hourglass is reliable, about how long a bite lasts, about whether the female eats the male, and about whether insecticides do anything. Every position here is given with the service that published it, and none of them is resolved into a house answer."
      lastUpdated="August 2026"
      readingTime="17 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={WIDOW_HOME}
      clusterNav={WIDOW_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        There are several widow spiders in the United States, they are not equally dangerous, and
        the marking everyone knows about is less dependable than its reputation.{' '}
        <strong>
          This page keeps the species apart, keeps the disagreements visible, and reports the
          medical material from named sources without grading any of it.
        </strong>
      </p>
      <p>
        Eight products are named further down, all of them for keeping spiders out of a building or
        for taking a web down from a distance. Every link is a plain product link and{' '}
        <strong>PestPro Index earns nothing if you buy any of them</strong>; each card says so
        immediately above its own link.
      </p>

      <h2 id="which-widow">Which Widow, and the Hourglass</h2>

      <h3>The hourglass tells three species apart &mdash; and three sources say it can be faint or missing</h3>
      <p>
        <strong>Kansas State University Extension uses the marking as the species character</strong>,
        for the three that live in Kansas: the <strong>northern</strong>{' '}
        <em>(Latrodectus variolus)</em> has an hourglass that is broken, with a row of red spots down
        the middle of the top of the abdomen; the <strong>southern</strong> <em>(L. mactans)</em> has
        a complete hourglass and one red spot just above and behind the spinnerets; the{' '}
        <strong>western</strong> <em>(L. hesperus)</em> has a complete hourglass and the rest of the
        abdomen solid black.
      </p>
      <p>
        <strong>UC IPM, on the western species:</strong>{' '}
        <em>&ldquo;The red hourglass varies in appearance&rdquo;</em> &mdash; it can be two perfect
        triangles merged, two triangles separated by a space, a triangle and a small bar, minimal or
        almost imperceptible red coloration, or, in its words, on rare occasions completely absent.
      </p>
      <p>
        <strong>Colorado State, on the same species:</strong> the pattern{' '}
        <em>
          &ldquo;may appear as two unconnected spots, as a roughly rectangular area, or be so faint
          as to be barely visible.&rdquo;
        </em>{' '}
        It adds that the colour may fade or intensify during the life of any individual.
      </p>
      <p>
        <strong>UF/IFAS compares three species directly:</strong>{' '}
        <em>
          &ldquo;The Southern black widow has a complete hourglass, while the Western species&rsquo;
          hourglass can vary from two connected triangles to separated triangles to a minimum of
          barely visible red blotches. The Northern widow typically has the hourglass on their
          abdomen, but some individuals lack it completely&rdquo;
        </em>
        .
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          These are not reconciled here, and there is no house answer
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          K-State is describing typical mature females and the other three are describing the
          variation, so both can be true at once &mdash; but{' '}
          <strong>
            the practical consequence is asymmetric, and that is the part worth carrying: a clear
            complete hourglass is good evidence, and its absence is not good evidence of anything.
          </strong>{' '}
          Three sources state that a widow can have a faint hourglass or none at all.
        </p>
      </div>

      <h3>Immatures and males look like something else entirely</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;As easy as it is to identify an adult female black widow, the immatures, looking
          nothing like the mother, can be difficult to recognize.&rdquo;
        </em>{' '}
        Spiderlings emerge with tan legs and a mostly white abdomen, and darken through successive
        molts.
      </p>
      <p>
        This matters less than it sounds for bites. <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Immature and male black widows do not possess fangs large enough to pierce human
          skin, so bites are almost entirely due to adult female spiders, especially females
          protecting an egg sac.&rdquo;
        </em>{' '}
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Almost all medically important black widow bites are from the adult female, which
          is much larger than the male.&rdquo;
        </em>
      </p>
      <p>
        <strong>One caution comes from a single source and is given as that source&rsquo;s.</strong>{' '}
        Kansas State states that male and immature widows do not produce the same toxic venom as
        females, but that young spiderlings carry a toxic substance in their bodies that may harm
        pets or children if swallowed. No other source consulted for this page mentions it.
      </p>

      <h3>The lookalike that is not a widow</h3>
      <p>
        <strong>Colorado State, on <em>Steatoda</em> cobweb spiders:</strong>{' '}
        <em>
          &ldquo;they lack the orange-red hourglass on the underside of the abdomen, have prominent
          white markings on the top of the abdomen, and often have a white band around the anterior
          edge of the abdomen.&rdquo;
        </em>{' '}
        <strong>UC IPM:</strong> the false black widow{' '}
        <em>
          &ldquo;is chocolate brown and never has red coloration, although many people frequently
          mistake it for a black widow.&rdquo;
        </em>
      </p>
      <p>
        Penn State publishes a separate page on it, and two things there are worth having.{' '}
        <em>
          &ldquo;False black widows produce symptoms that are similar to but much less severe than
          those of a true black widow bite.&rdquo;
        </em>{' '}
        And <em>Steatoda grossa</em> is reported to prey on other spiders, including true black
        widows &mdash; which is a reason to know which one is in the corner before killing it.
      </p>

      <h3>⚠ The folklore in the name: two sources say it is wrong</h3>
      <p>
        <strong>Penn State states it as fact:</strong>{' '}
        <em>
          &ldquo;Males are often killed and eaten by the females shortly after mating, thus the
          origin of the name &ldquo;widow.&rdquo;&rdquo;{' '}
        <em>
          (the inner quotation marks around the name, and the period inside them, are Penn State&rsquo;s own and are left as published)
        </em>
        </em>
      </p>
      <p>
        <strong>Colorado State contradicts it:</strong>{' '}
        <em>
          &ldquo;Although females of many spider species, including widow spiders, occasionally feed
          on males if the female is hungry, this cannibalistic behavior is not the norm despite the
          common misconception.&rdquo;
        </em>{' '}
        <strong>Kansas State agrees with Colorado State:</strong>{' '}
        <em>&ldquo;Although observed, this behavior is uncommon.&rdquo;</em> It adds that males
        typically leave quickly after mating and often stay near the web, feeding on prey the female
        has caught.
      </p>
      <p>
        Colorado State offers a different origin for the name altogether: that widow spiders are
        called that because they are shiny black when full grown, and black is a traditional colour
        of mourning. <strong>Two against one, and the disagreement stands rather than being
        settled.</strong>
      </p>

      <h2 id="range">Where Each Species Is</h2>
      <p>
        <strong>Every range statement below is scoped to one species. They are not one map.</strong>
      </p>
      <ul>
        <li>
          <strong>Western black widow, per UC IPM:</strong>{' '}
          <em>
            &ldquo;Its habitat ranges from British Columbia and Alberta to Mexico and throughout the
            Rocky Mountains to the western portions of the Great Plains.&rdquo;
          </em>{' '}
          Outside California it is common in urban Colorado, in central and eastern Washington state
          and in southern British Columbia.
        </li>
        <li>
          <strong>Southern black widow, per UF/IFAS:</strong>{' '}
          <em>
            &ldquo;In the United States, the Southern black widow is found in the southeastern
            region and has been found as far north as Ohio and as far west as Texas.&rdquo;
          </em>
        </li>
        <li>
          <strong>Pennsylvania, per Penn State:</strong> the southern black widow is found there,
          and <em>&ldquo;It is probable that the northern black widow, L. variolus , is also
          present.&rdquo;</em> The hedge is the source&rsquo;s and is kept.
        </li>
        <li>
          <strong>Kansas, per K-State:</strong> three species &mdash; northern, southern and western.
        </li>
        <li>
          <strong>California, per UC IPM:</strong> two &mdash; the western black widow and the brown
          widow.
        </li>
      </ul>
      <p>
        <strong>The brown widow&rsquo;s range is a moving story and its dates matter.</strong> UC
        IPM:{' '}
        <em>
          &ldquo;In North America, the brown widow was found only in Florida for many decades, where
          it remains rather common. However, in the first decade of the 21st century, the spider
          began appearing elsewhere, from Texas throughout the Gulf Coast states and up the Atlantic
          coast into South Carolina.&rdquo;
        </em>{' '}
        UC Riverside dates the western arrival precisely:{' '}
        <em>
          &ldquo;In February of 2003, specimens of the non-native brown widow spider, Latrodectus
          geometricus , were discovered as part of the Los Angeles Spider Survey being conducted by
          the Los Angeles County Museum of Natural History.&rdquo;
        </em>{' '}
        <strong>
          Both statements are about a range that was expanding when they were written. The
          first-decade phrasing is now more than fifteen years old and this page does not present it
          as a current front.
        </strong>
      </p>

      <h2 id="bites">What a Bite Does</h2>
      <p>
        <strong>
          Everything in this section is reported from a named source. None of it is this
          site&rsquo;s assessment and none of it is graded here.
        </strong>
      </p>

      <h3>How rare, and how it happens</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Bites from black widow spiders are quite rare, even where these spiders are very
          common.&rdquo;
        </em>{' '}
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;the western widow is not aggressive, and bites are very infrequent even when large
          numbers of spiders occupy an area&rdquo;
        </em>
        , and{' '}
        <em>&ldquo;Widow spiders rarely, if ever, bite when not within a web.&rdquo;</em> Colorado
        State adds that most bites happen when somebody inadvertently presses down on a spider
        resting under a rock or under wood in a wood pile.
      </p>

      <h3>⚠ What the bite itself feels like: the sources do not agree</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;In the unlikely event of an actual bite from a black widow, the bite itself is
          painless or may feel like a little pinprick.&rdquo;
        </em> <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Black widow venom is principally neurotoxic, so at first a bite is almost
          painless.&rdquo;
        </em>{' '}
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;The bite can go unnoticed, although it most often produces an immediate sharp,
          pin-prick pain.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Colorado State&rsquo;s &ldquo;most often produces an immediate sharp, pin-prick pain&rdquo; is not UC
          IPM&rsquo;s &ldquo;painless&rdquo;.
        </strong>{' '}
        Both are published positions from extension services and neither is corrected here.
      </p>

      <h3>⚠ Onset and duration: four sources, four timelines</h3>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Onset</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">UC IPM</td>
              <td className="border border-gray-300 px-3 py-2">within an hour, symptoms may start to appear</td>
              <td className="border border-gray-300 px-3 py-2">usually dissipate in a few days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Penn State</td>
              <td className="border border-gray-300 px-3 py-2">pain at one to two hours; body symptoms within one to three hours</td>
              <td className="border border-gray-300 px-3 py-2">generally within four days, may last as long as a week</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Colorado State</td>
              <td className="border border-gray-300 px-3 py-2">discomfort shortly after; acute symptoms increase during the first day</td>
              <td className="border border-gray-300 px-3 py-2">decline after two to three days; some continue several weeks up to a month</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">UF/IFAS</td>
              <td className="border border-gray-300 px-3 py-2">not stated</td>
              <td className="border border-gray-300 px-3 py-2">recovery within 24 hours following treatment, or 3 to 5 days without supportive care</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>
          These are four different courses and the outer bounds differ by an order of magnitude
          &mdash; &ldquo;a few days&rdquo; against &ldquo;up to a month&rdquo;.
        </strong>{' '}
        They are not averaged and not merged into one range.{' '}
        <strong>
          UF/IFAS&rsquo;s figure is also conditioned on treatment, which the other three are not, so
          it is not comparable to them even in principle.
        </strong>
      </p>

      <h3>What the symptoms are</h3>
      <p>
        <strong>UC IPM</strong> qualifies the list before giving it &mdash;{' '}
        <em>
          &ldquo;Bite victims might suffer from some but not all of the following
          symptoms&rdquo;
        </em>{' '}
        &mdash; and lists rigid stomach muscles{' '}
        <em>&ldquo;which some medical professionals have misdiagnosed as appendicitis&rdquo;</em>,
        sweating that is sometimes confined to the bitten limb, pain that can be local, radiating or
        regional, urine retention, and less commonly numbness, agitation, fever and patchy
        paralysis. It then supplies the proportion itself:{' '}
        <em>
          &ldquo;Although these are the most severe manifestations of black widow bites, symptoms
          most often merely resemble those of the flu.&rdquo;
        </em>
      </p>
      <p>
        <strong>One negative separates this spider from the other one people fear.</strong> UC IPM:{' '}
        <em>
          &ldquo;Black widow bites don&rsquo;t cause conspicuous swelling, necrosis, or
          deterioration of tissue around the bite.&rdquo;
        </em>{' '}
        If a wound is doing that, the widow literature is not where the answer is; our{' '}
        <a href="https://pestproindex.com/us/brown-recluse-spiders">brown recluse page</a> sets out
        what the sources there say about necrotic wounds and how often they are misattributed.
      </p>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;Muscle and chest pain or tightness are some of the most common reactions to the
          widow toxin.&rdquo;
        </em>{' '}
        <strong>Kansas State</strong> states that reactions vary with the age and health of the
        person bitten and the part of the body bitten, and that the very young and very old are most
        likely to be severely affected.
      </p>

      <h3>⚠ Deaths: four sources, two framings</h3>
      <p>
        <strong>Penn State</strong>, citing the American Association of Poison Control Centers,
        states that <em>&ldquo;approximately 2,200 people are bitten in the United States by black
        widows every year, but no deaths have been recorded due to black widow bites since
        1983&rdquo;</em>. Both halves of that are one sentence in the source and are kept together.{' '}
        <strong>UC Riverside</strong>, writing about southern California, says in passing that black
        widow bites do occasionally happen and no one dies.
      </p>
      <p>
        <strong>Kansas State</strong> states that{' '}
        <em>
          &ldquo;In severe but rare cases, bites result in tremors, convulsions, difficulty
          breathing, and death due to suffocation.&rdquo;
        </em>{' '}
        <strong>Utah State</strong> lists the outcomes as{' '}
        <em>&ldquo;pain, nausea, cramping or death (rare)&rdquo;</em> and states that a bite{' '}
        <em>&ldquo;can be a serious health risk, especially to children and elderly people&rdquo;</em>.
      </p>
      <p>
        <strong>
          Two sources report no deaths in the data they cite; two describe death as a rare possible
          outcome. Neither pair is used here to cancel the other.
        </strong>
      </p>

      <h3>⚠ The brown widow is a separate question with a separate answer</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;unlike that of the black widow, the bite of this spider is not much more toxic to
          humans than that of other common spiders.&rdquo;
        </em>{' '}
        <strong>UC Riverside:</strong>{' '}
        <em>&ldquo;The brown widow is not a spider of medical concern and is not likely to become
        one.&rdquo;</em> Its evidence is a South African series in which, in its words,{' '}
        <em>
          &ldquo;Only two symptoms of brown widow envenomation were reported in the majority of bite
          victims: 1) pain while being bitten and 2) a mark where the bite occurred.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          And the counter-evidence sits in the bibliography of one of those same two sources.
        </strong>{' '}
        UC IPM&rsquo;s reference list cites a 2008 paper in the <em>Southern Medical Journal</em>{' '}
        reporting a severe reaction from a brown widow envenomation.{' '}
        <strong>
          That paper was not read for this page and nothing is claimed about what it found.
        </strong>{' '}
        Its existence, cited by a source that calls the bite minor, is the honest shape of the
        evidence and is given as such.
      </p>

      <h3>A separate count, from a different source and a single year</h3>
      <p>
        <strong>UF/IFAS</strong> publishes a figure of its own for one year:{' '}
        <em>
          &ldquo;In 2010, there were 2,168 self-reported black widow bites reported in the United
          States, with 892 cases treated in health care facilities&rdquo;
        </em>
        . In that survey there were no deaths.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          This is not the same number as the one further up this page, and the two are not added
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Penn State&rsquo;s figure, in the section on deaths above, is{' '}
          <strong>an annual estimate of people bitten</strong>. This one is{' '}
          <strong>
            self-reported bites in the single year 2010, of which 892 reached a health care facility
          </strong>
          .{' '}
          <strong>
            They count different populations over different windows, and their near-equality is a
            coincidence of magnitude rather than two sources confirming each other.
          </strong>{' '}
          They are deliberately kept in different sections of this page, they are not added, and
          neither is used to support the other.
        </p>
      </div>

      <h2 id="medical">If You Think You Have Been Bitten</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          Every source here that publishes first-aid guidance says to involve a clinician, and two
          say immediately. That is the only point they all agree on.
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          Past that, the published instructions differ from each other, so each is set out{' '}
          <strong>complete and separately, exactly as its own source states it</strong>. Nothing has
          been added to any of them and nothing has been merged into a house version.
        </p>
        <ul className="mt-4 mb-0 space-y-3 text-sm text-red-900">
          <li>
            <strong>UC IPM:</strong>{' '}
            <em>
              &ldquo;If bitten, seek medical attention immediately. You can place a cold pack on the
              bite to relieve the pain.&rdquo;
            </em>
          </li>
          <li>
            <strong>Kansas State University Extension:</strong>{' '}
            <em>
              &ldquo;If you suspect you have been bitten by a black widow spider, immediately apply
              cold to the area to reduce swelling. Sanitize using hydrogen peroxide or rubbing
              alcohol to mitigate infection. Seek medical attention right away. If possible,
              carefully and safely collect the spider and take it with you to the doctor or
              emergency room.&rdquo;
            </em>
          </li>
          <li>
            <strong>UF/IFAS gives one instruction no other source gives:</strong>{' '}
            <em>&ldquo;Pregnant individuals should seek medical attention immediately.&rdquo;</em>
          </li>
          <li>
            <strong>Colorado State and Utah State publish no first-aid list at all.</strong> That is
            recorded here as an absence rather than filled in from a neighbour.
          </li>
        </ul>
        <p className="m-0 mt-4 text-sm text-red-900">
          <strong>Two of those differ on the reason for the cold</strong> &mdash; K-State says to
          reduce swelling, UC IPM says to relieve pain &mdash; and UC IPM states elsewhere that
          these bites do not cause conspicuous swelling. <strong>K-State alone recommends
          sanitising the site.</strong> The difference is left visible rather than tidied away.
        </p>
      </div>

      <h3>Antivenom: it exists, and the sources describe its use differently</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;An antivenom for black widow bites is available that works for all species that
          have been tested worldwide.&rdquo;
        </em>{' '}
        It states that response is fast, and then gives the constraint:{' '}
        <em>
          &ldquo;The antivenom is based on horse serum, so physicians need to monitor for
          anaphylactic shock. American physicians are somewhat reluctant to use antivenom for this
          reason and might prefer to have the bite victim simply endure the symptoms, which can be
          similar to those of a bad flu episode and usually dissipate in a few days.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Latrodectus antivenin is available, but it is generally reserved for extreme cases
          as there is a risk of anaphylaxis (allergic reaction) to the antivenin.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS publishes a fuller clinical account</strong> of when antivenin is used, how
        it is produced, which patients it suits and how quickly it is given.{' '}
        <strong>
          That is a clinical decision and it is named here rather than reproduced.
        </strong>{' '}
        This page reports that the antivenom exists, what it is made from, and why the sources
        describe its use as restricted. It does not say when it should be given, to whom, or how
        soon.
      </p>
      <p>
        <strong>What else is deliberately not on this page.</strong> UF/IFAS also publishes the drugs
        used in treatment and a review of what did and did not relieve symptoms, and a body of
        material about bites during pregnancy beyond the single instruction quoted above.{' '}
        <strong>All of it is clinician material. It is named as existing and none of it is set out
        here.</strong>
      </p>

      <h2 id="habitat">Where They Live, and Taking Webs Down</h2>
      <p>
        <strong>The sources describe the same habitat.</strong> Colorado State: widow spiders{' '}
        <em>
          &ldquo;often live in ready-made holes in dark, undisturbed sites&rdquo;
        </em>{' '}
        and are most often found in abandoned rodent burrows, loose stone or wood piles, or the
        corners of rooms, garages and outbuildings. K-State adds electrical and water meter boxes,
        old cars, unused farm equipment and infrequently used lawn furniture. Utah State lists
        building foundations, rock piles, wood piles, outbuildings, water meter and irrigation boxes
        and the area around exterior lighting.
      </p>
      <p>
        <strong>UC IPM on why lighting matters:</strong>{' '}
        <em>
          &ldquo;Outdoor lighting attracts insects, which in turn attract spiders. If possible, keep
          lighting fixtures pointed off structures and away from windows and doorways.&rdquo;
        </em>{' '}
        Utah State&rsquo;s version of the same measure is to change exterior lighting to sodium
        vapor bulbs.
      </p>
      <p>
        <strong>Physical removal is what the sources put first.</strong> Colorado State describes
        searching for them and destroying them by crushing or vacuuming the web and the spider, using
        protective methods, and elsewhere ranks physical search and removal ahead of the other
        treatments it discusses. <em>That ranking is a paraphrase</em>: the publication states it
        with a superlative this site does not print, and the instruction rather than the wording is
        what is carried here. UC IPM:{' '}
        <em>
          &ldquo;Vacuuming spiders can be an effective control technique because their soft bodies
          usually don&rsquo;t survive this process.&rdquo;
        </em>
      </p>
      <p>
        <strong>Kansas State names the tool:</strong>{' '}
        <em>
          &ldquo;If black widows are found, carefully remove and destroy spiders, webbing, and all
          egg sacs. This can be done with a broom or other long-handled device, or a vacuum
          cleaner.&rdquo;
        </em>
      </p>

      {duster.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <p>
        <strong>Colorado State adds an egg-sac method that costs nothing:</strong> crushing them, or
        freezing them &mdash; it says to leave them in the freezer for several weeks.
      </p>
      <p>
        <strong>And the honest ceiling, from UC IPM:</strong>{' '}
        <em>
          &ldquo;However, it is not practical to eliminate these spiders completely. Both widow
          species will continue to re-infest treated areas.&rdquo;
        </em>{' '}
        The reason is ballooning: spiderlings climb up, release a filament of silk and are carried
        off on updrafts, so{' '}
        <em>
          &ldquo;Because spiderlings will be dropping down on your property continually, eliminating
          them will be a task that needs to be done repeatedly throughout the year.&rdquo;
        </em>{' '}
        Kansas State puts the same limit differently:{' '}
        <em>
          &ldquo;It is difficult to locate and destroy all spiders without thoroughly cleaning the
          area.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Worth noticing: not one source consulted for this page routes this job to a professional.
        </strong>{' '}
        That is a real difference from what the same kind of sources say about the brown recluse,
        where two of them do. The widow sources describe a job a householder does &mdash; bounded by
        permanence, not by competence.
      </p>

      <h2 id="handling">Handling Stored Things and Woodpiles</h2>
      <p>
        <strong>UC IPM attaches gloves to two specific moments:</strong>{' '}
        <em>
          &ldquo;When cleaning up clutter in garages and other storage areas, be sure to wear gloves
          to avoid accidental bites.&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;Stack woodpiles away from your house, and never pick up pieces of wood unless you
          are wearing gloves.&rdquo;
        </em>
      </p>
      <p>
        <strong>Two sources specify what kind.</strong> Kansas State:{' '}
        <em>
          &ldquo;Wear leather gloves, boots, socks, long-sleeved shirts, and long pants made of thick
          material when working in areas known to be infested with black widow spiders or where
          contact is likely.&rdquo;
        </em>{' '}
        Colorado State asks for{' '}
        <em>&ldquo;heavy, leather gloves&rdquo;</em>, and separately that{' '}
        <em>
          &ldquo;It is also a good idea to wear gloves and a long-sleeved shirt when working in
          spider infested areas.&rdquo;
        </em>{' '}
        UF/IFAS asks more loosely for gardening gloves.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Why this is a different glove from the one on our other spider page
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          Our <a href="https://pestproindex.com/us/brown-recluse-spiders">brown recluse page</a>{' '}
          names three nitrile gloves, because the source there asks for gloves without specifying a
          material. <strong>Two of the widow sources specify leather, and one of those also asks
          for thick material</strong>, so a thin nitrile glove is not what they describe. The
          difference comes from the sources, not from us.{' '}
          <strong>
            No source consulted for either page calls any glove bite-proof, and neither page says
            that.
          </strong>
        </p>
      </div>

      {gloves.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h3>What to keep things in</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;In the garage, keep items such as gardening clothes and gloves in bags closed with
          zipper-locks or twist ties. Store seasonal items such as sports gear, camping gear, winter
          clothes or holiday decorations in boxes that can be taped shut and placed off the floor
          away from walls in order to exclude spiders.&rdquo;
        </em>
      </p>
      <p>
        It also names the places people forget:{' '}
        <em>
          &ldquo;Other areas to check carefully include children&rsquo;s toys or playhouses made of
          molded plastic that have open spaces facing downward where spiders can crawl in.&rdquo;
        </em>{' '}
        and picnic tables, trash can grips, lawn chairs and plant pots with curled lips.
      </p>

      {storage.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="exclusion">Keeping Them Out</h2>
      <p>
        <strong>Kansas State:</strong> where possible, seal cracks around doors and windows and
        repair holes in screens, to prevent spiders from entering structures. It also notes that the
        undisturbed places widows like are good habitat for brown recluse spiders too, so the same
        clearing out reduces both.
      </p>
      <p>
        <strong>Utah State&rsquo;s IPM list</strong> gives the same measures as separate lines:
        minimise nesting habitat, seal exterior cracks and crevices to reduce hiding places, reduce
        clutter indoors and outdoors, <em>&ldquo;Install tight-fitting door sweeps.&rdquo;</em>,
        install tight-fitting screens in windows, and reduce the other insects that serve as food.
      </p>
      <p>
        <strong>UC IPM</strong> describes the same job at the garage:{' '}
        <em>
          &ldquo;block off house access to spiders by sealing cracks around doors and access holes
          for electrical conduits or plumbing&rdquo;
        </em>
        , and adds keeping areas near building foundations free of trash, leaf litter and
        accumulated materials.
      </p>

      {sealants.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      {sweeps.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      {screens.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="insecticides">Insecticides, and Why Nothing Is Named Here</h2>
      <p>
        <strong>The sources take four positions on whether insecticides do anything useful against
        widow spiders.</strong>
      </p>
      <ul>
        <li>
          <strong>UC IPM:</strong>{' '}
          <em>&ldquo;Insecticides do not provide long-term control.&rdquo;</em> and{' '}
          <em>&ldquo;Typically, control of spiders using pesticides is difficult.&rdquo;</em>
        </li>
        <li>
          <strong>Colorado State:</strong>{' '}
          <em>
            &ldquo;Insecticides can be useful for adult spider control but are not particularly
            effective against egg sacs.&rdquo;
          </em>{' '}
          It names four pyrethroids sold for general spider control around a home &mdash;
          bifenthrin, cyfluthrin, permethrin and tetramethrin &mdash; with some residual
          effectiveness of several weeks, particularly if not exposed to light and moisture. Of a
          perimeter treatment it says:{' '}
          <em>&ldquo;However, the benefit from such treatment will be short-lived.&rdquo;</em>
        </li>
        <li>
          <strong>Kansas State:</strong> spot treatment of the areas widows inhabit can be used, but
          general crack-and-crevice applications are unlikely to work because the pesticide does not
          come into contact with the spiders. <em>That sentence is a paraphrase</em> &mdash; the
          published text is broken across a line in the source PDF and this page does not quote
          across such a break.
        </li>
        <li>
          <strong>Utah State</strong> lists no insecticide at all among its recommendations.
        </li>
      </ul>
      <p>
        <strong>UC IPM publishes one finding specific enough to shop against</strong>, and it is
        about egg sacs rather than spiders:{' '}
        <em>
          &ldquo;In a 2016 study, water-based insecticides sprayed on brown widow egg sacs provided
          no significant effect on the egg contents. However, when petroleum-based products were
          used, the pesticide was readily carried past the silk outer layer and killed the egg sac
          contents.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Why this page names no insecticide
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          That 2016 finding is the one criterion in the widow literature a product could actually be
          measured against: <strong>petroleum-based rather than water-based</strong>.{' '}
          <strong>
            We checked consumer spider products against it and could not identify one whose own
            product description evidences a petroleum-based formulation.
          </strong>{' '}
          The ones we looked at either state a water-based formula in their own words or state no
          formulation at all.{' '}
          <strong>
            So none is named here. That is a finding about what is on sale measured against a
            published criterion, not a judgement about whether insecticides work
          </strong>{' '}
          &mdash; on that, the four positions above are the whole of what the sources say, and they
          disagree.
        </p>
      </div>
      <p>
        <strong>One class the sources reject outright.</strong> Colorado State:{' '}
        <em>
          &ldquo;A large number of controls are sometimes promoted for control of spiders, including
          widows. These include various chemical repellents (e.g., mock orange, garlic) or
          ultrasonic frequencies &ndash; neither of which spiders perceive or respond to.&rdquo;
        </em>{' '}
        <strong>Nothing of that kind is named here either.</strong>
      </p>
      <p>
        <strong>And one finding about how insecticides act indirectly</strong>, from Kansas State:
        spiders that ate insecticide-killed prey did not die from that secondary exposure, but
        insecticide use reduced or eliminated the arthropod prey, which limits what the population
        has to live on over time.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
