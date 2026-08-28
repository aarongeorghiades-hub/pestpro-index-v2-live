import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { SNAKE_NAV, SNAKE_HOME } from '../components/snakeNav';

const URL = 'https://pestproindex.com/us/snakes';
const TITLE = 'Snakes: the Exclusion Specification, the Law by State, and What the Sources Disagree About';
const DESCRIPTION =
  'What university extension services publish about snakes around a home: a snake-proof fence four sources specify differently, a repellent class five of them say does not work, protection law that changes at the state line, and first-aid instructions that contradict each other on one step.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Snakes', item: URL }],
};

// ---------------------------------------------------------------------------
// SEVEN CARDS ACROSS THREE CLASSES, AND FIVE CLASSES CARD NOTHING.
//
// Listing check run 2026-08-28. Titles are the fetched product titles, verbatim,
// from the identity bank entry written when each listing was read (S47-J).
//
//   S1 fence mesh    3 cards. Criterion: galvanized hardware cloth, 1/4 inch
//                    mesh, width at least 36 inches. All three state all three
//                    halves in their own text.
//   S2 sealing mesh  2 cards. Criterion: hardware cloth, 1/8 inch mesh. The
//                    sources that specify it state no material and no width, so
//                    neither is required.
//   S3 sealant       2 ROUTE ADDITIONS. These ASINs already carry register rows
//                    from other routes; the names are byte-identical to those
//                    rows (S48-H) and only the copy is new and snake-sourced.
//
// FIVE CLASSES CARD NOTHING, EACH FOR ITS OWN REASON, AND THE REASONS ARE NOT
// INTERCHANGEABLE: repellents (five sources say they do not work), glue boards
// (a non-target welfare hazard stated by Utah State, which is a material danger
// and NOT an efficacy judgement), the funnel trap and drift fence (a structure
// the reader builds, not a product), snake tongs (named once with no
// specification at all), habitat modification (nothing the sources specify as a
// purchasable thing).
//
// ONE CANDIDATE WAS CHECKED AND FAILED ON ITS OWN PUBLISHED FIGURE. It is not
// named on this page. It is recorded in the identity bank as an evidenced
// failure so a later round does not re-propose it.
// ---------------------------------------------------------------------------

type ProductGroup = 'fence' | 'seal' | 'sealant';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B015PD9HGY',
    cardName: 'Amagabeli Hardware Cloth, 1/4 Inch Mesh, 36 Inch x 50 Foot, Galvanized',
    titleAsFetched:
      'Amagabeli Hardware Cloth 1/4 inch 36 inch x 50 ft Chicken Wire 23 Gauge Galvanized Weld Wire Mesh Roll Fencing Garden Netting for Poultry Rabbit Snake Gopher Cage Raised Bed Vegetable Tree Bird Quail',
    group: 'fence',
    whatItDoes: [
      'States the mesh in its own words: “1/4-inch ultra-dense mesh design can block most crawling creatures”. Three of the four sources that specify a snake fence ask for 1/4 inch',
      'States the finish: “Hot-dip galvanized anti-rust treatment ensures this wire mesh uniform, dense coating with reinforced protection on seams and vulnerable areas”. Three of those four sources ask for galvanized cloth specifically',
      'Sold as a roll 36 inches by 50 feet. THAT IS THE ROLL AS SOLD. How tall a fence it makes depends on how it is set and how much is turned into the buried edge, and this card claims no fence height on the listing’s behalf',
      'The listing’s own text names snakes among the animals it is sold to exclude. That is the seller’s claim, not a source’s finding',
    ],
  },
  {
    asin: 'B0GRNS3MXS',
    cardName: 'Hardware Cloth, 1/4 Inch Mesh, 36 Inch x 50 Foot, Galvanized After Welding',
    titleAsFetched:
      '1/4 inch 36in x 50ft Hardware Cloth Chicken Wire Fencing 23G, Hot Dipped Galvanized After Welding, Wire Mesh Roll, Garden Fence, Poultry and Rabbit Barrier, Outdoor Metal Fencing',
    group: 'fence',
    whatItDoes: [
      'States the mesh: “FINE 1/4 INCH MESH: Small square openings keep out rabbits, rodents, and other small pests while allowing airflow and visibility”',
      'States both the finish and the order it was applied in: “HOT DIPPED GALVANIZED AFTER WELDING: The galvanization process applied after welding ensures superior rust and corrosion resistance for long-lasting outdoor use”',
      'Galvanizing after welding coats the joints as well as the wire. The listing states the sequence; no source consulted for this page expresses a preference between the two sequences, so none is expressed here',
      'Sold as a roll 36 inches by 50 feet, which is the roll and not a fence height',
    ],
  },
  {
    asin: 'B08PPZL4N7',
    cardName: 'SEBOSS Hardware Cloth Wire Mesh, 1/4 Inch, 36 x 50 Foot, 23 Gauge',
    titleAsFetched: 'SEBOSS Hardware Cloth Wire Mesh 1/4 inch 36 x 50 ft 23 Gauge',
    group: 'fence',
    whatItDoes: [
      'States the mesh and the roll size in its title: 1/4 inch, 36 by 50 feet',
      'The title does not state a finish. The listing’s own feature text does: “It features hot-dip galvanized after welding, ensuring that every joint” is coated. Without that sentence this roll would not have qualified, because a title that is silent on finish evidences nothing about it',
      'A heavier 23-gauge wire, per the listing',
      'Sold as a roll 36 inches by 50 feet. The roll dimension is not a fence height',
    ],
  },
  {
    asin: 'B08GKYMXST',
    cardName: 'PS Direct Hardware Cloth, 1/8 Inch Mesh, 36 Inch x 10 Foot, 27 Gauge',
    titleAsFetched:
      'PS Direct Hardware Cloth - 36" x 10\' 1/8 Inch Galvanized mesh 27 Gauge. Great for Honey Bees, Chicken Coup Fence or Animal Control., Covering for Outside Vents, Soil Sifting or Gardening Enclosures',
    group: 'seal',
    whatItDoes: [
      'States the 1/8 inch mesh twice in its own text — “Small 1/8” mesh”, and “Roll measures 36 in. H x 10 ft. L with 1/8” opening”',
      'This is the mesh for covering an opening, not for building the fence above. The two jobs use different apertures and they are set out separately on this page for that reason',
      'The listing states “Uniformed galvanized 27 gauge steel. Wire is welded before galvanization process”. That is the opposite sequence to the two fence rolls above, which state galvanizing after welding. The sources consulted for this page specify no sequence for sealing mesh, so the difference is reported and not judged',
      'A short roll at 10 feet, which suits covering vents and gaps rather than running a fence line',
    ],
  },
  {
    asin: 'B0CLZC1CYQ',
    cardName: 'Hardware Cloth, 1/8 Inch Mesh, 24 Inch x 10 Foot, Galvanized',
    titleAsFetched: '1/8 inch Hardware Cloth 24 in. x 10 ft. - Galvanized Wire Mesh Roll',
    group: 'seal',
    whatItDoes: [
      'States the mesh in its own words: “The mesh is 1/8 inch, suitable for garden fences, bee breeding, and ventilation screens”',
      'A narrower roll than the one above, at 24 inches, which the listing states',
      'The listing states “using hot-dip galvanizing process, which is corrosion-resistant”. The sealing criterion consulted for this page names no material, so the finish is reported because the listing states it and not because anything requires it',
      'In no order of preference against the roll above. No source consulted for this page compares one product against another',
    ],
  },
  {
    asin: 'B0B8QPH3RW',
    cardName: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'Colorado State names caulking compound among the materials for sealing openings, alongside mortar, expanding foam and 1/8-inch hardware cloth',
      'For a gap too narrow to mesh over. The mesh rolls above are for an opening you cover; a cartridge is for a crack you fill',
      'Already named on five other pages of this site for the same physical job. The product is the same; the reason it appears here is Colorado State’s sealing sentence',
      'No source consulted for this page names a brand, and none compares one sealant against another',
    ],
  },
  {
    asin: 'B0000CBJ7W',
    cardName: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    titleAsFetched: 'GE Advanced Silicone Window & Door Sealant, Clear, 10.1 oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'Colorado State tells the reader where to look: “Check for holes or cracks around doors, windows, water pipes, electrical lines, etc.” This is a cartridge sold for those gaps',
      'A clear silicone in the same size class as the one above, and named for the same reason',
      'Already named on four other pages of this site. Its presence here adds a route, not a new recommendation',
      'Named as a specific, identifiable example of the type. No source tested this or any other brand against a snake',
    ],
  },
];

const tocItems = [
  { id: 'which-snake', title: 'Which Snake, and the Lookalike Problem' },
  { id: 'bites', title: 'Bites: What the Sources Say, Including Where They Disagree' },
  { id: 'legal', title: 'The Law Changes at the State Line' },
  { id: 'habitat', title: 'Habitat: Where Every Source Starts' },
  { id: 'fence', title: 'The Snake-Proof Fence, and a Four-Way Disagreement' },
  { id: 'sealing', title: 'Sealing Openings: a Different Mesh Entirely' },
  { id: 'not-work', title: 'What the Sources Say Does Not Work' },
  { id: 'who', title: 'Who to Contact' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'What does a snake-proof fence actually have to be?',
    answer:
      'Four sources specify one and they do not agree, so this page gives all four rather than picking one. Colorado State: 36-inch galvanized hardware cloth, 1/4-inch mesh, buried 6 inches deep, slanted outward at 30 degrees. Penn State: the same 36 inches, the same 1/4-inch mesh, the same 6-inch burial and the same 30 degrees. ICWDM: 36 inches tall and 1/4-inch mesh again, but buried 4 to 6 inches rather than 6. UF/IFAS departs furthest: 2 to 3 feet high, buried 6 inches, permitting aluminium flashing or silt fencing as well as hardware cloth, and stating no angle at all. The one figure all four share is the 1/4-inch mesh, which is why the products named on this page are named on the mesh.',
  },
  {
    question: 'Do snake repellents work?',
    answer:
      'Five of the six sources consulted say no, in their own words, and the sixth lists the class without giving a verdict. UC IPM says none of the commercially available chemical repellents have been proven to work well enough to warrant recommendation, and that there are no plants that repel snakes. UF/IFAS says advertised snake repellents simply do not work. Utah State says do not use snake repellents or sulfur, as they are ineffective. Colorado State cites trials in which a naphthalene-and-sulfur product failed against gopher snakes, western rattlesnakes, brown tree snakes and plains garter snakes. Penn State is milder, saying test results have not been conclusive. ICWDM lists repellents on the market without saying whether they work. Nothing in this class is named on this page.',
  },
  {
    question: 'Is it legal to kill a snake?',
    answer:
      'That depends entirely on the state and this page carries four rather than a general rule. UC IPM states, in a page whose text is stamped December 2014, that California residents can take most rattlesnake species on private lands in any legal manner without a licence or permit, although a bag limit of two still applies, and that the red diamond rattlesnake is prohibited from being taken or killed. Colorado State, attributing Colorado Parks and Wildlife, states it is legal to kill rattlesnakes when necessary to protect life or property provided the method is in accordance with city and county ordinances, and that the midget-faced rattlesnake, the massasauga and all nonpoisonous snakes are protected as nongame wildlife except as noted. Penn State states all snakes in Pennsylvania are protected by Fish and Boat Commission regulations. Florida FWC states some snakes, such as the Eastern indigo snake, are designated endangered or threatened and are protected. Four states, four positions, and no source consulted covers the other forty-six.',
  },
  {
    question: 'What should I do if someone is bitten?',
    answer:
      'Call Poison Control on 1-800-222-1222. That number appears in UC IPM, Colorado State and both UF/IFAS documents consulted, and it is the one instruction every source agrees on. Beyond that, three sources publish their own first-aid instructions and those instructions are reproduced on this page as each source publishes them, unmerged, because they differ from one another on at least one step. This page adds nothing to any of them and does not tell you which to follow.',
  },
  {
    question: 'Why does this page not name a glue board or a snake trap?',
    answer:
      'For different reasons, and they are not interchangeable. Glue boards: two sources describe them as useful, and two oppose them — UF/IFAS on the grounds that they are often not a humane way to capture snakes, and Utah State stating that traps placed outside capture all sorts of non-target animals and result in a slow, agonising death. That is a stated hazard to animals other than the target, not a doubt about whether the boards work. The funnel trap and drift fence that ICWDM describes is a structure a reader builds out of hardware cloth rather than a product sold as one. Snake tongs are named once by one source with no specification of any kind attached, and a class with no published criterion has nothing to measure a product against.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Rattlesnakes, Publication 74119 — the source of the California legal statements, the identification and lookalike material, the first-aid instructions and DON’T list, the repellent position and the exclusion material',
    publisher: 'UC Statewide IPM Program',
    date: 'Published 25 January 2022; text carries an update stamp of 12/2014; read 27 August 2026',
    href: 'https://ipm.ucanr.edu/PMG/PESTNOTES/pn74119.html',
  },
  {
    label:
      'Coping With Snakes — the source of the Colorado legal statements, one full fence specification, the sealing sentence, the repellent trial record and one set of first-aid instructions',
    publisher: 'Colorado State University Extension',
    date: 'Undated on the page; its references run to 1995; read 27 August 2026',
    href: 'https://extension.colostate.edu/resource/coping-with-snakes/',
  },
  {
    label: 'Snakes — the source of the Pennsylvania legal statements and one full fence specification',
    publisher: 'Penn State Extension',
    date: 'Undated on the page; read 27 August 2026',
    href: 'https://extension.psu.edu/snakes',
  },
  {
    label:
      'Dealing with Snakes in Florida’s Residential Areas — Preventing Encounters, WEC221/UW260 — the source of the fourth fence specification, the last-resort caveat, the repellent statement and the glue-trap position',
    publisher: 'UF/IFAS Extension',
    date: 'Undated on the page; read 27 August 2026',
    href: 'https://edis.ifas.ufl.edu/uw260',
  },
  {
    label:
      'Snake Damage Prevention and Control Methods — the source of the third fence specification, the sealing materials, the funnel trap and drift fence description, the glue board description and the snake tongs mention',
    publisher: 'Internet Center for Wildlife Damage Management',
    date: 'Undated; read 27 August 2026',
    href: 'https://icwdm.org/species/reptiles/snakes/snake-damage-prevention-and-control-methods/',
  },
  {
    label: 'Snakes, species landing page — the source of the cross-state protection statement',
    publisher: 'Internet Center for Wildlife Damage Management',
    date: 'Undated; read 27 August 2026',
    href: 'https://icwdm.org/species/reptiles/snakes/',
  },
  {
    label: '12 Ways to Stop Snakes From Slithering Into Yards — the source of the mothball and sticky-trap statements',
    publisher: 'Utah State University Extension',
    date: 'Undated on the page; read 27 August 2026',
    href: 'https://extension.usu.edu/news_sections/gardening/12-ways-to-stop-snakes-from-slithering-into-yards',
  },
  {
    label: 'Snake-Wise Safety Tips — the source of the third set of first-aid instructions',
    publisher: 'Utah State University Extension',
    date: 'Archived page, undated; read 27 August 2026',
    href: 'https://extension.usu.edu/archive/snake_wise-safety-tips',
  },
  {
    label: 'Repellents and Wildlife Damage Control, C1021 — the source of the mothball legality statement',
    publisher: 'University of Georgia Extension (Michel Kohl)',
    date: 'Undated on the page; read 27 August 2026',
    href: 'https://extension.uga.edu/publications/detail.html?number=C1021',
  },
  {
    label: 'Living with Snakes — the source of the Florida protected-species statement',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Undated on the page; read 27 August 2026',
    href: 'https://myfwc.com/conservation/you-conserve/wildlife/snakes/',
  },
];

export default function SnakesPage() {
  return (
    <UsPageLayout
      title="Snakes"
      subtitle="Four extension services specify a snake-proof fence and none of them specifies quite the same fence. Five say repellents do not work. The law changes at the state line, and three published first-aid instructions disagree on one step. This page carries all of that, and names the products whose own text meets the one figure every source shares."
      lastUpdated="August 2026"
      readingTime="19 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={SNAKE_HOME}
      clusterNav={SNAKE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about snakes around a house and yard as university extension services describe
        them. Most of it is what those services publish about keeping snakes out; a good deal of it
        is about what they disagree on, and one section is about the law, which is different in
        every state we read.
      </p>

      <h2 id="which-snake">Which Snake, and the Lookalike Problem</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;The rattlesnake is California&rsquo;s only native venomous snake. Nine species are
          found in various areas of the state from below sea level to about 11,000 feet.&rdquo;
        </em>
      </p>
      <p>
        <strong>The identification advice runs in both directions, and both halves matter.</strong>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;The harmless gopher snake ( Pituophis catenifer ) appears similar to rattlesnakes
          and can alter its posture to mimic the triangular head shape but will always lack a
          rattle.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;Because rattles can shorten or be broken off completely, the lack of a rattle does
          not mean the snake is not a rattlesnake.&rdquo;
        </em>
      </p>
      <p>
        <strong>One sentence belongs beside any advice involving a snake that appears dead.</strong>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;However, even after its death, a rattlesnake can still inject venom for an hour or
          more by reflex action. Caution, therefore, is advised when handling what appears to be a
          dead snake.&rdquo;
        </em>
      </p>
      <p>
        <strong>And the sentence that frames the whole subject.</strong> UC IPM:{' '}
        <em>
          &ldquo;Most rattlesnake bites occur when an inexperienced person tries to pick up, move,
          or kill a rattlesnake.&rdquo;
        </em>
      </p>
      <p>
        The Florida Fish and Wildlife Conservation Commission puts the other side of it:{' '}
        <em>
          &ldquo;Non-venomous snakes also consume venomous ones, and can help maintain ecosystem
          balances.&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;Venomous snakes are also beneficial; for example, some rattlesnake species have
          been reported to consume ticks in their native ranges.&rdquo;
        </em>
      </p>

      <h2 id="bites">Bites: What the Sources Say, Including Where They Disagree</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          One number every source consulted for this page agrees on: Poison Control,
          1-800-222-1222.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          It appears in UC IPM, in Colorado State, and in both UF/IFAS documents. Colorado State
          additionally gives the Rocky Mountain Poison &amp; Drug Safety numbers.{' '}
          <strong>
            Everything below this box is reported from a source and attributed to it. Nothing here
            is our own instruction, nothing is graded, and nothing has been added to any
            source&rsquo;s list.
          </strong>
        </p>
      </div>
      <h3>UC IPM publishes an instruction and a list of things not to do</h3>
      <p>
        <strong>The condition at the front of this is part of the instruction, not a preamble.</strong>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;If you are less than one hour from the nearest emergency room, initial treatment is
          relatively simple: Try to calm the victim. Gently wash the area with soap and water. Apply
          a cold, wet cloth over the bite. Transport victim to the nearest emergency facility for
          further treatment. Phone ahead to notify the emergency facility that a snakebite victim is
          being brought in. If safe to do so, have someone photograph the snake so that
          identification can be made to aid in treatment.&rdquo;
        </em>
      </p>
      <p>
        UC IPM:{' '}
        <em>
          &ldquo;What should NOT be done after a rattlesnake bite? Several DON&rsquo;Ts are very
          important to remember: DON&rsquo;T apply a tourniquet. DON&rsquo;T pack the bite area in
          ice. DON&rsquo;T cut the wound with a knife or razor. DON&rsquo;T use your mouth to suck
          out the venom. DON&rsquo;T let the victim drink alcohol. DON&rsquo;T apply electric shock.
          DON&rsquo;T use a snakebite kit as these do not work and can cause more damage.&rdquo;
        </em>
      </p>
      <h3>Colorado State publishes its own, attributed to a poison centre</h3>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;First Aid for Snake Bites What To Do: Remain calm so as not to increase circulation
          and thus the spread of the venom. Immediately remove anything from the body that may cause
          increased swelling below the bite area (i.e., rings, watch, shoes, tight clothing, etc.)
          Immobilize the bite area, keeping it in a neutral to below the heart position. Get to the
          hospital immediately. Do not wait for the pain to get severe. The use of approved
          antivenom is the most effective treatment for envenomation. If possible, have another
          person drive, and call ahead to the hospital and the poison center.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;What NOT To Do: Do not use a tourniquet. Do not make an incision at the bite site.
          Do not suck out the venom with your mouth as this may increase the risk of infection. Do
          not pack the limb in ice.&rdquo;
        </em>{' '}
        Colorado State attributes its own list:{' '}
        <em>&ldquo;Recommended by the Rocky Mountain Poison and Drug Center.&rdquo;</em>
      </p>
      <h3>Utah State publishes a third, and it is materially different</h3>
      <p>
        <strong>Utah State:</strong>{' '}
        <em>
          &ldquo;If bitten, clean and sterilize the wound much like you would a cut or
          abrasion.&rdquo;
        </em>{' '}
        <em>
          &ldquo;Do not apply a tourniquet to the area above the wound and do not apply a cold
          compress to the bite area or cut into the bite.&rdquo;
        </em>{' '}
        <em>
          &ldquo;If possible, call ahead to the emergency room so anti-venom can be ready when the
          victim arrives.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two of these sources give opposite instructions about cold, and this page does not pick
          between them.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM instructs</strong> <em>&ldquo;Apply a cold, wet cloth over the bite&rdquo;</em>.{' '}
          <strong>Utah State instructs</strong>{' '}
          <em>&ldquo;do not apply a cold compress to the bite area&rdquo;</em>. Both are extension
          services, both publish the instruction in their own name, and{' '}
          <strong>neither is adjusted here to fit the other.</strong> Separately, UC IPM and
          Colorado State both say not to pack the area in ice, which is a different act from a cold
          cloth, and UC IPM distinguishes the two within its own guidance. This page reports the
          disagreement rather than resolving it, because resolving it would mean making a clinical
          judgement it has no standing to make.
        </p>
      </div>
      <p>
        <strong>
          Colorado State also publishes two statements about antivenom. They are treatment
          statements, they belong to clinicians, and they are named here rather than repeated as
          guidance:
        </strong>{' '}
        the source addresses the availability of antivenin for native pit vipers and what that means
        for identifying the species, and it states a position on approved antivenom as a treatment
        for envenomation. <strong>What treatment is appropriate, and when, is a matter for a
        clinician and not for this page.</strong>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          One document a live extension page sends readers to for snakebite planning is no longer
          there.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-900">
          A UF/IFAS page still in service directs readers to a fourth document in its series for
          building a plan to deal with snakebite.{' '}
          <strong>
            We requested that document on 27 August 2026 and the address returned HTTP 410, Gone.
          </strong>{' '}
          We are recording that because a reader following that route will not arrive anywhere.{' '}
          <strong>
            We are not filling the gap with advice of our own, and nothing on this page stands in
            for what that document said.
          </strong>
        </p>
      </div>

      <h2 id="legal">The Law Changes at the State Line</h2>
      <p>
        <strong>
          A rule written for one state is not advice for another, and this page keeps them apart
          rather than averaging them.
        </strong>{' '}
        Four states appear below because four states are what the sources cover.{' '}
        <strong>No source consulted for this page addresses the other forty-six.</strong>
      </p>
      <h3>California</h3>
      <p>
        <strong>UC IPM, in a page whose text carries an update stamp of December 2014:</strong>{' '}
        <em>
          &ldquo;The nine species of rattlesnakes found in California are not considered endangered
          or threatened. California Department of Fish and Wildlife Code classifies rattlesnakes as
          native reptiles. California residents can take most rattlesnake species on private lands
          in any legal manner without a license or permit, although a bag limit of two still
          applies. Additionally, the red diamond rattlesnake ( C. ruber ) is prohibited from being
          taken or killed by state wildlife regulation.&rdquo;
        </em>
      </p>
      <p>
        <strong>Four qualifiers sit inside that permission and none of them is decoration:</strong>{' '}
        <em>most</em> species, <em>private lands</em>, <em>any legal manner</em>, and a{' '}
        <em>bag limit of two</em> &mdash; with one species carved out of it entirely.
      </p>
      <h3>Colorado</h3>
      <p>
        <strong>Colorado State University Extension, attributing Colorado Parks and Wildlife:</strong>{' '}
        <em>
          &ldquo;According to the Colorado Parks and Wildlife , it is legal to kill rattlesnakes when
          necessary to protect life or property, provided that the method used is in accordance with
          city and county ordinances.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;The midget-faced rattlesnake (a subspecies of the western rattlesnake), the
          massasauga, and all nonpoisonous snakes are classified as nongame wildlife and are
          protected by state law, except as noted above.&rdquo;
        </em>
      </p>
      <h3>Pennsylvania</h3>
      <p>
        <strong>Penn State Extension:</strong>{' '}
        <em>
          &ldquo;All snakes in Pennsylvania are protected by Fish and Boat Commission regulations.
          Species that are not listed as endangered, threatened, or candidate may be captured or
          possessed under specific daily and possession limits.&rdquo;
        </em>{' '}
        <em>
          &ldquo;Endangered or threatened species such as Kirtland&rsquo;s snake, eastern
          massasauga, and rough green snake cannot be caught, killed, possessed, imported into, or
          exported from Pennsylvania.&rdquo;
        </em>{' '}
        <em>
          &ldquo;The timber rattlesnake is protected under additional regulations and permits
          regarding seasons and possession limits.&rdquo;
        </em>
      </p>
      <h3>Florida</h3>
      <p>
        <strong>Florida Fish and Wildlife Conservation Commission:</strong>{' '}
        <em>
          &ldquo;Some snakes, such as the Eastern indigo snake, are designated as endangered or
          threatened species and are protected.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          California and Pennsylvania point in opposite directions, and both are quoted above
          unchanged.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          In California, on the 2014 text, a resident may take most rattlesnakes on private land
          without a licence or permit, subject to a bag limit. In Pennsylvania,{' '}
          <strong>all</strong> snakes are protected by regulation and some may not be taken at all.
          <strong> Neither has been adjusted to fit the other</strong>, and a reader in a third
          state has neither rule.
        </p>
      </div>
      <p>
        <strong>One source generalises beyond a single state, and it is quoted with its own name
        and its own hedge attached.</strong> The Internet Center for Wildlife Damage Management
        states:{' '}
        <em>
          &ldquo;Snakes are considered nongame wildlife and are protected by law in most states,
          unless they are about to cause damage to persons or property.&rdquo;
        </em>{' '}
        <strong>
          That is a wildlife-damage clearinghouse&rsquo;s summary, not a statute, it says{' '}
          <em>most</em> states rather than all, and it carries an exception clause. It is given here
          as ICWDM&rsquo;s statement and is not adopted as ours.
        </strong>
      </p>

      <h2 id="habitat">Habitat: Where Every Source Starts</h2>
      <p>
        Before any fence or any product, every source consulted for this page starts in the same
        place: what the snake is there for. UC IPM puts the animal in context first &mdash;{' '}
        <em>
          &ldquo;They can reduce the number of disease carrying rodents and other pest
          species.&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;In general, they should be left alone, whenever possible, especially in wildland
          areas. Nonvenomous snakes should also be left alone wherever found.&rdquo;
        </em>
      </p>
      <p>
        Penn State states the mechanism plainly:{' '}
        <em>
          &ldquo;Removing the food supply and closing the entrances the rodents and snakes have been
          using usually solves the snake problem.&rdquo;
        </em>{' '}
        <strong>Nothing in that sentence is a product</strong>, and this page names none for it.
      </p>

      <h2 id="fence">The Snake-Proof Fence, and a Four-Way Disagreement</h2>
      <p>
        <strong>
          Four sources specify a snake-proof fence. They agree on one figure out of four.
        </strong>
      </p>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;In rattlesnake-infested areas, construct a snake-proof fence around the backyard or
          play area. Use 36-inch high galvanized hardware cloth with a 1/4-inch mesh and bury it 6
          inches deep, slanted outward at a 30-degree angle. Make certain the gate fits tightly and
          swings into the play area. Keep all vegetation away from the fence to prevent snakes from
          climbing over it.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;The fence should be made of heavy galvanized hardware cloth, 36 inches wide with a
          &frac14;-inch mesh. The lower edge should be buried 6 inches in the ground, and the fence
          should be slanted outward from the bottom to the top at a 30-degree angle. Place
          supporting stakes inside the fence and make sure any gates are fitted tightly. Gates
          should be hinged to swing inward because of the slope of the fence.&rdquo;
        </em>
      </p>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;A snake-proof fence should be made of heavy galvanized &frac14;-inch mesh hardware
          cloth that is 36 inches tall. Bury the lower edge 4 to 6 inches in the ground. The fence
          should be slanted outward from the bottom to the top at a 30 o angle.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS, which departs from the other three on three of the four figures:</strong>{' '}
        <em>
          &ldquo;Fencing of aluminum flashing, hardware cloth (1/4&quot;), or silt fencing 2&ndash;3
          feet high buried 6 inches in the ground should deter most snakes from gaining access to
          certain areas of your yard (Figure 7).&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          One figure is common to all four. The other three are not.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Mesh:</strong> all four say 1/4 inch. <strong>Height:</strong> three say 36
          inches, UF/IFAS says 2 to 3 feet. <strong>Burial:</strong> three say 6 inches, ICWDM says
          4 to 6. <strong>Slant:</strong> three say 30 degrees outward, UF/IFAS states no angle at
          all. <strong>Material:</strong> three say galvanized hardware cloth, UF/IFAS also permits
          aluminium flashing or silt fencing.{' '}
          <strong>
            None of these is averaged here and none is presented as the specification. The products
            named below are named on the mesh, because the mesh is the figure the sources actually
            share.
          </strong>
        </p>
      </div>
      <h3>And the same four sources disagree about whether it works</h3>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;A properly constructed, snake-proof fence will keep out all venomous snakes and
          most non-venomous snakes (some non-venomous snakes are good climbers).&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS, in the caption to its own figure:</strong>{' '}
        <em>
          &ldquo;Snake fences, such as this one made of silt fencing, can prevent some snakes from
          entering your yard when used correctly, but can be costly and time consuming to install
          and do not prevent all species of snakes from entering. Such measures should only be used
          as a last resort.&rdquo;
        </em>
      </p>
      <p>
        <strong>UC IPM sits between them:</strong>{' '}
        <em>
          &ldquo;Snakes can be excluded from an area by installing a snake-proof fence. While
          expensive, fences are often necessary for children&rsquo;s play areas.&rdquo;
        </em>{' '}
        It adds a maintenance instruction:{' '}
        <em>
          &ldquo;If you have a snake-proof fence, be sure to check its integrity prior to the time
          when snakes become active in the late winter or early spring.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          One source says such a fence keeps out all venomous snakes. Another says it should only be
          used as a last resort. Both are extension-grade sources and this page renders both.
        </strong>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          The 36 inches is an instruction to whoever builds the fence, not a property of anything
          sold.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-900">
          A roll of wire has a width. A fence has a height. They are not the same measurement, and
          how much of the roll ends up above ground depends on how deep the buried edge goes and how
          the slant is set.{' '}
          <strong>
            No product below is described here as being 36 inches tall or as meeting a height
            specification.
          </strong>{' '}
          What each card records is the mesh, the finish and the roll size its own listing states.
        </p>
      </div>
      <p>
        The three rolls below are in no order of preference and none is called better than another,
        because no source consulted for this page compares one product against another.
      </p>
      {products
        .filter((p) => p.group === 'fence')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h2 id="sealing">Sealing Openings: a Different Mesh Entirely</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          Three quarter-and-eighth-inch figures appear on this page and they mean two different
          things. Getting them the wrong way round produces a hole a snake can use.
        </p>
        <ul className="mt-3 mb-0 space-y-2 text-base text-red-900">
          <li>
            <strong>1/4 inch is the size of GAP that needs sealing.</strong> Colorado State:{' '}
            <em>&ldquo;seal all openings 1/4 inch or larger&rdquo;</em>.
          </li>
          <li>
            <strong>1/8 inch is the MESH that seals it.</strong> Colorado State names{' '}
            <em>&ldquo;1/8-inch hardware cloth&rdquo;</em>; ICWDM names{' '}
            <em>&ldquo;&frac18;-inch mesh hardware cloth&rdquo;</em>.
          </li>
          <li>
            <strong>1/4 inch is ALSO the fence mesh</strong>, in the section above &mdash; a
            different job, on a different structure.
          </li>
        </ul>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          A quarter-inch cloth over a quarter-inch gap is not a seal. That is why the two classes
          are carded separately on this page and never described together.
        </p>
      </div>
      <p>
        <strong>Colorado State, whole:</strong>{' '}
        <em>
          &ldquo;To prevent snakes from entering basements and crawl spaces, seal all openings 1/4
          inch or larger with mortar, caulking compound, expanding foam, or 1/8-inch hardware cloth.
          Check for holes or cracks around doors, windows, water pipes, electrical lines,
          etc.&rdquo;
        </em>
      </p>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;Holes in wooden buildings can be sealed with sheet metal, Copper Stuf-Fit,
          Xcluder&trade;, or &frac18;-inch mesh hardware cloth.&rdquo;
        </em>
      </p>
      <h3>Mesh for covering an opening</h3>
      {products
        .filter((p) => p.group === 'seal')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}
      <h3>Sealant for a gap too narrow to mesh over</h3>
      <p>
        Colorado State names <em>&ldquo;mortar, caulking compound, expanding foam&rdquo;</em>{' '}
        alongside the mesh. Both products below are already named on other pages of this site for
        the same physical job; what is new here is the reason, which is Colorado State&rsquo;s
        sentence rather than anything about the products.
      </p>
      {products
        .filter((p) => p.group === 'sealant')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h2 id="not-work">What the Sources Say Does Not Work</h2>
      <h3>Repellents: five sources say no, and one lists them without saying</h3>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Over the years various home remedies have been suggested to repel snakes, such as
          placing a horsehair rope around your sleeping bag, sprinkling sulfur dust, or scattering
          mothballs around the area to be protected. Unfortunately, none of these remedies work.
          Despite what you may hear, there are no plants that repel snakes. Currently, several
          commercially available chemical snake repellents are on the market, but none of them have
          been proven to work well enough to warrant recommendation.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS:</strong>{' '}
        <em>
          &ldquo;Attempting to completely exclude snakes from your yard with fencing is possible,
          but would be rather time consuming and expensive, and advertised &lsquo;snake
          repellents&rsquo; simply do not work.&rdquo;
        </em>
      </p>
      <p>
        <strong>Utah State:</strong>{' '}
        <em>&ldquo;Do not use snake repellents or sulfur, as they are ineffective.&rdquo;</em>
      </p>
      <p>
        <strong>Colorado State, with the trial record:</strong>{' '}
        <em>
          &ldquo;Dr. T&rsquo;s Snake-A-Way (7 percent naphthalene and 28 percent sulfur), a
          commercial snake repellent, was not successful in repelling gopher snakes (Marsh 1993),
          western rattlesnakes (Marsh 1993), brown tree snakes (McCoid et al. 1993), and plains
          garter snakes&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;Napthalene and sulfur used individually were also not effective in repelling plains
          garter snakes (Ferraro 1995).&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State is the mildest of the five:</strong>{' '}
        <em>
          &ldquo;A repellent, Snake-A-Way, is registered for use against snakes in Pennsylvania, but
          test results have not been conclusive as to its effectiveness.&rdquo;
        </em>
      </p>
      <p>
        <strong>And ICWDM does not join them.</strong> It lists the class without a verdict:{' '}
        <em>&ldquo;Several repellents for the control of snakes are on the market.&rdquo;</em>{' '}
        <strong>
          Five sources say it does not work and the sixth reports it exists. That difference is
          rendered here rather than averaged away.
        </strong>{' '}
        <strong>Nothing in this class is named on this page.</strong>
      </p>
      <h3>Mothballs carry a legal claim as well as an efficacy one</h3>
      <p>
        <strong>UGA Extension:</strong>{' '}
        <em>
          &ldquo;Some repellents, like mothballs, may be offensive to an animal but it is illegal to
          use them outdoors and using them in attics or crawl spaces can be harmful to humans and
          pets. This product is a pesticide and should not be used to repel bats or snakes from a
          home.&rdquo;
        </em>
      </p>
      <p>
        <strong>Utah State:</strong>{' '}
        <em>
          &ldquo;Do not use mothballs because the active ingredient is naphthalene or
          paradichlorobenzene &ndash; chemicals that are toxic to insects and mammals, but are not
          effective against snakes. Using mothballs outside your home also violates product labels
          and puts your family and pets at risk.&rdquo;
        </em>
      </p>
      <p>
        <strong>Those are two different claims and they are given as two.</strong> UGA states it is
        illegal; Utah State states it violates product labels.{' '}
        <strong>
          Both are extension services stating a position about the law, and both are attributed
          rather than adopted. This page does not tell you what the law is.
        </strong>
      </p>
      <h3>Glue boards: two sources describe them, two oppose them</h3>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;Glueboards are useful for trapping snakes outside, inside, and under
          buildings.&rdquo;
        </em>{' '}
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;Glue boards or glue trays are effective to remove snakes from buildings (Knight
          1986).&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS:</strong>{' '}
        <em>
          &ldquo;We do not advocate using commercially available glue traps, as they are often not a
          humane way to capture snakes and snakes frequently must be handled to remove them from the
          trap.&rdquo;
        </em>{' '}
        <strong>Utah State:</strong>{' '}
        <em>
          &ldquo;Do not use sticky traps outside. Traps placed outside capture all sorts of
          non-target animals and result in a slow, agonizing death.&rdquo;
        </em>
      </p>
      <p>
        <strong>Nothing in this class is named on this page, and the reason is a stated hazard to
        animals other than the target rather than a doubt about whether the boards work.</strong>{' '}
        Utah State&rsquo;s sentence is about what happens to whatever else walks onto one. Two
        sources describe the method and two oppose it; that disagreement is set out above and is not
        settled here.
      </p>
      <h3>Two more classes that card nothing, for two more reasons</h3>
      <p>
        <strong>The funnel trap and drift fence.</strong> ICWDM describes one:{' '}
        <em>
          &ldquo;Catch snakes with a funnel trap and drift fences constructed of &frac14;- or
          &frac12;-inch mesh hardware cloth erected 2 feet high and 25 feet long.&rdquo;
        </em>{' '}
        <strong>
          That is a description of something a reader builds out of materials, not of a product sold
          as one
        </strong>
        , so there is nothing to name.
      </p>
      <p>
        <strong>Snake tongs.</strong> ICWDM mentions them once, in passing, when describing what to
        do with a captured venomous snake.{' '}
        <strong>
          No source consulted for this page states a length, a jaw, a mechanism or any other
          specification for them.
        </strong>{' '}
        A class with no published criterion has nothing a product could be measured against, so
        nothing is named.
      </p>

      <h2 id="who">Who to Contact</h2>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;You can contact local wildlife pest control operators to remove snakes and other
          nuisance wildlife.&rdquo;
        </em>{' '}
        For regulatory questions the same source names its state authority:{' '}
        <em>
          &ldquo;Specific questions about current regulations can be directed to any of the Fish and
          Boat Commission&rsquo;s regional law enforcement offices or the herpetology and endangered
          species coordinator.&rdquo;
        </em>
      </p>
      <p>
        UF/IFAS points Florida readers at their state agency&rsquo;s own list:{' '}
        <em>
          &ldquo;To find a licensed wildlife removal specialist in your area, visit the nuisance
          wildlife permit website maintained by the Florida Fish and Wildlife Conservation
          Commission&rdquo;
        </em>
        .{' '}
        <strong>
          Those are the destinations the sources name, in their own terms. No source consulted for
          this page publishes an equivalent lookup for any other state, so none is offered here.
        </strong>
      </p>

      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the ten publications below. Where a
        source carries its own date, that date is given, and where a statement depends on it the
        date is repeated in the sentence itself.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
