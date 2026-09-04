import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { CHIPMUNK_NAV, CHIPMUNK_HOME } from '../components/chipmunkNav';

const URL = 'https://pestproindex.com/us/chipmunks';
const TITLE = 'Chipmunks: When Control Is Actually Warranted';
const DESCRIPTION =
  'Four of five extension sources make control conditional on numbers or burrowing against a structure. The structural case, separated from the garden nuisance case.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Chipmunks', item: URL }],
};

// ---------------------------------------------------------------------------
// PRODUCT RECORDS — the single source of truth for every product on this page.
//
// IDENTITY PROVENANCE, 2026-08-26. Three ASINs were identity-checked by direct
// fetch of amazon.com/dp/<ASIN> and banked this session: two rat snap traps and
// the downspout guard. Two are already carded elsewhere on this estate and are
// REUSED, not re-sourced: the hardware cloth from /us/opossums and the
// all-purpose silicone from four other routes. Their card names are kept
// byte-identical to the names those routes already render.
//
// ALL REUSED COPY IS WRITTEN FRESH FROM THE CHIPMUNK SOURCES. The hardware
// cloth's opossum copy is about denning under a deck; the sealant's copy
// elsewhere is about scorpions, lady beetles, boxelder bugs and cluster flies.
// Every bullet below states what THESE sources say the tool is for.
//
// NOTHING HERE IS A CLAIM ABOUT STOCK, PRICE OR DELIVERY.
// ---------------------------------------------------------------------------

type ProductGroup = 'snap' | 'guard' | 'cloth' | 'sealant';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B006K33C9C',
    cardName: 'Victor M201 Rat Trap, 12-Pack',
    titleAsFetched: 'Victor M201 Rat Trap (Pack of 12)',
    group: 'snap',
    whatItDoes: [
      'Every source on this page that names a snap trap specifies a rat trap, not a mouse trap — Penn State says common rat snap traps, and UGA Extension specifies the large wooden-base traps used in rat control',
      'The listing states both halves of that in its own words: a wood-based wire snap trap, and kill rats',
      'Twelve traps, per the listing. ICWDM suggests counting the chipmunks on site and multiplying by three to decide how many traps to run',
      'Penn State sets these perpendicular to the pathway, or in pairs along travel routes with the triggers facing away from each other; UGA places them at burrow openings or perpendicular to a wall',
      'Both Penn State and ICWDM say to set the trap under a box that admits only a chipmunk, sized so the trap still operates, to keep birds out of it',
    ],
  },
  {
    asin: 'B00004RAMW',
    cardName: 'Victor M201 Metal Pedal Wood Snap Rat Trap',
    titleAsFetched: 'Victor M201 Metal Pedal Sustainably Sourced FSC Wood Snap Rat Trap',
    group: 'snap',
    whatItDoes: [
      'The same M201 trap as the twelve-pack above, sold singly. This is a quantity difference and no source compares the two',
      'Rat sizing is stated in the listing itself: designed for rats',
      'A wooden base, which is the type UGA Extension names for chipmunk work',
      'Penn State and Purdue both advise pre-baiting for two to three days before setting, so the animal takes bait from an unset trap first',
      'UGA gives peanut butter alone or mixed with oatmeal as bait; Penn State adds nutmeats, pumpkin or sunflower seeds, raisins, prune slices or breakfast cereal grains, and says hard baits should be tied to the trigger',
    ],
  },
  {
    asin: 'B0GVSH57DC',
    cardName: 'Stainless Steel Downspout Strainer, Fits 3.0 to 4.9 inch Pipe',
    titleAsFetched:
      'Gutter Guard 304 Stainless Steel Downspout Strainer 1 Pack, 5.0" Dia 4.72" H Fits 3.0"-4.9" Large Pipe, Rigid Anti-Clog Drain Cover, Spring Fit Rodent Screen Dryer Vent PVC Exhaust Commercial Drain',
    group: 'guard',
    whatItDoes: [
      'UGA Extension states that chipmunks are especially troublesome in clogging rain gutter downspouts, and asks for wire mesh coverings on them; ICWDM asks for gutter guards and covered downspouts, and for exhaust vents to be secured with manufactured screens',
      'The listing states it fits pipes of 3.0 to 4.9 inches inner diameter, with an adjustable height of 4.72 inches',
      'Its own description names dryer vents, flue outlets and drainage pipes as what it is meant to keep animals out of',
      'It is a spring-fit part, per the listing, so it goes in without tools',
      'Read the disclosure above this card before buying: the listing does not mention chipmunks, and the reason it is here comes from the sources rather than from the product',
    ],
  },
  {
    asin: 'B09W8XZDVS',
    cardName: 'FORIMO Hardware Cloth 1/4 inch, 24 in x 50 ft, 19 Gauge, Black Vinyl Coated',
    titleAsFetched: 'FORIMO Hardware Cloth 1/4 inch, 24 in x 50 ft, 19 Gauge, Black Vinyl Coated',
    group: 'cloth',
    whatItDoes: [
      'Quarter-inch mesh is the one exclusion specification all three sources that give one agree on — Penn State, UGA Extension and ICWDM',
      'Penn State uses it two ways: to close openings where chipmunks could get into a building, and laid over seeds and bulbs, covered with soil',
      'It gives the overhang as a number: the cloth should extend at least one foot past each margin of the planting. A 24-inch roll covers a two-foot bed with that margin on both sides',
      'ICWDM adds a quarter-inch mesh fence around individual plants as a third use',
      'Already named on our opossum page for a different animal and a different job. Same mesh, and the reason here is the chipmunk sources own figure',
    ],
  },
  {
    asin: 'B0B8QPH3RW',
    cardName: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    titleAsFetched: 'GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge',
    group: 'sealant',
    whatItDoes: [
      'UGA Extension names the openings by name: seal holes where gas lines, cooling lines, electric cables, dryer vents or cable TV lines enter the house, using caulking or quarter-inch welded wire',
      'Penn State gives caulking first in its list of exclusion materials, alongside quarter-inch hardware cloth',
      'An all-purpose cartridge silicone, which is the form those penetrations take rather than a window-and-door specific product',
      'Sealing is the measure both of those sources put ahead of anything else for keeping chipmunks out of a building',
      'Named on four other pages of this site for four other animals. The reason here is the chipmunk sources own instruction',
    ],
  },
];

const snapTraps = products.filter((p) => p.group === 'snap');
const guards = products.filter((p) => p.group === 'guard');
const cloths = products.filter((p) => p.group === 'cloth');
const sealants = products.filter((p) => p.group === 'sealant');

const faqs: Faq[] = [
  {
    question: 'Do I actually need to control chipmunks?',
    answer:
      'The sources make it conditional, and the condition is what the animal is doing rather than that it is there. UGA Extension states that chipmunks are territorial and rarely become abundant enough to cause a lot of damage, although populations can reach 20 individuals in a single urban yard. ICWDM states that the majority of damage by chipmunks involves minimal economic loss, under $200. Penn State states that chipmunks present in large numbers can cause structural damage by burrowing under patios, stairs, retention walls or foundations — note the condition, in large numbers. UNH Extension says a heavy chipmunk population can drastically reduce the flowers and produce a home garden yields. Purdue frames it both ways at once: most people enjoy watching chipmunks and they are part of the food chain, but they can be seriously destructive when they become numerous around homes. Read together, the case that these sources say warrants control is burrowing against a structure. The garden and bird-feeder nuisance is the case they treat as usually not warranting it.',
  },
  {
    question: 'How do I know it is a chipmunk and not a vole?',
    answer:
      'By the burrow entrance, and it is worth being careful here. Penn State states that the burrow entrance is usually about 2 inches in diameter and is not surrounded by obvious mounds of dirt, because the chipmunk carries the dirt in its cheek pouches and scatters it away from the burrow. UGA says the same: burrow system entrances and exits are kept free of excavated dirt. That matters because our identification page for moles, voles and pocket gophers identifies the vole by the absence of a mound. A chipmunk also leaves no mound, for a different reason, so a reader working through that page could arrive at vole when the animal is a chipmunk. The chipmunk carries the spoil away; the vole never made one.',
  },
  {
    question: 'How big is a chipmunk?',
    answer:
      'The sources give two different figures and none of them says which measurement it means. Penn State states that the eastern chipmunk typically measures 5 to 6 inches long and weighs about 3 ounces, and gives the tail separately as 3 to 4 inches. Purdue gives the same body length and a weight of 2 to 4 ounces. UGA states that the Eastern Chipmunk is a small rodent measuring 8 to 10 inches long. UNH says chipmunks are eight to 10 inches long. Five or six inches plus a three-to-four inch tail comes to eight to ten, so body length versus body-plus-tail is the obvious explanation — but not one of the four sources says which it is using, so this page reports both rather than deciding.',
  },
  {
    question: 'What trap should I use?',
    answer:
      'Every source that names a snap trap specifies a rat trap rather than a mouse trap. Penn State says live-catch wire mesh traps or common rat snap traps; UGA says the large wooden-base snap traps used in rat control are effective; UNH says rat traps baited with peanut butter can be effective on individual problem animals; ICWDM lists cage traps and rat-sized snap traps. On placement, Penn State sets snap traps perpendicular to the chipmunk pathway or in pairs along travel routes with triggers facing away from each other, and UGA places them along runways at burrow openings or perpendicular to a wall. Both Penn State and ICWDM describe putting the trap under a box with an opening that admits only a chipmunk, sized so the trap can still work, to keep birds out of it.',
  },
  {
    question: 'Why is there no cage trap named on this page?',
    answer:
      'Because no listing we checked evidences the whole of the published criterion. ICWDM states that cage traps for chipmunks should be at least 3 by 3 by 10 inches with fine quarter-inch mesh. That is two requirements. We checked three small cage traps and all three state dimensions that exceed the size requirement, while none of the three states a mesh aperture anywhere in its own description. Three out of three failing the same half suggests retail cage-trap listings simply do not publish mesh size, which is a gap in what is on sale rather than a fault in any one product. UGA Extension names two models instead of a specification, and this page does not treat those model names as equivalent to any listing it has seen.',
  },
  {
    question: 'Should I live-trap a chipmunk and release it somewhere else?',
    answer:
      'This is the sharpest disagreement in the sources and it is partly practical and partly ethical. Penn State says to transport and release live-trapped chipmunks several miles from the point of capture, in areas where they will not bother someone else, or to humanely euthanize them. Purdue says live-caught chipmunks may be moved and released several miles away with the written permission of the landowner. UGA states that releasing live animals into unfamiliar territory is not recommended and usually results in high mortality among the released animals, that homeowners cannot trespass on other property to release trapped animals, and that it is illegal in most states to release trapped animals on county, state or federal lands. UNH goes furthest: live trapping chipmunks is not recommended, because releasing a small animal into unfamiliar territory with no burrow exposes it to predators and possibly starvation, and it describes quick-kill traps and shooting as the more humane methods. This page does not pick between them. Note also that UGA is describing what it says the law is in most states; no statute was read for this page.',
  },
  {
    question: 'Is there a poison for chipmunks?',
    answer:
      'Not one this page will name, and there are three separate reasons rather than one. First, the fumigant ICWDM names is aluminum phosphide, and aluminum phosphide appears in the federal table of pesticides classified for restricted use at 40 CFR 152.175, which limits such uses to certified applicators or people working under their direct supervision. Second, Purdue states that there are no poison baits commercially available to the homeowner to kill chipmunks, and that baits used against rats and mice will also kill chipmunks but are not labeled for that use and cannot be recommended — using a pesticide against an animal its label does not cover is a label violation. Third, the two most recent extension sources say nothing is registered at all: Penn State states that no toxic baits are registered for controlling chipmunks and that no fumigants are registered for controlling chipmunks. Against that, ICWDM lists burrow fumigants as effective in small areas. That disagreement is set out on the page rather than resolved.',
  },
  {
    question: 'Do repellents work?',
    answer:
      'The sources are unenthusiastic and one of them contradicts itself. UGA Extension states that there are no registered repellents for chipmunks, and then in the same paragraph names taste repellents containing Bitrex, Thiram or ammonium soaps and four commercial products that can be applied to landscape plants. Penn State names the same three active ingredients and adds the qualification that matters: these repellents are labeled for use against squirrels. It states that multiple applications are required and that repellents can be expensive and usually do not provide complete damage reduction. ICWDM states that repellents are expensive and usually do not provide 100 percent reduction in damage, that effectiveness of active ingredients varies, and that most commercial repellents have not been adequately tested. UGA also warns that naphthalene and mothballs are not labeled for use on mammals and that using them that way violates pesticide law. No repellent is named on this page.',
  },
  {
    question: 'What about ultrasonic or frightening devices?',
    answer:
      'ICWDM is unambiguous: no frightening devices are effective for the control of chipmunks. Its own summary table lists frightening as nothing effective. Nothing of that kind is named on this page.',
  },
  {
    question: 'Is it legal to kill a chipmunk?',
    answer:
      'It depends on the state, and the two sources that address it describe two different starting points. Penn State states that chipmunks are not protected by federal law but are protected by the Pennsylvania Game Commission, and that Pennsylvania law allows landowners to take chipmunks when they are causing or about to cause damage to property. UGA states that all non-game wildlife is protected in Georgia, so it is illegal to kill any species unless specifically permitted by regulations such as hunting and fishing laws, while adding that homeowners can generally protect property from mammals causing or about to cause damage. The federal position is the only part both agree on. Everything else is state law, this page has read what two extension services say about their own states, and no statute or regulation was read for this page.',
  },
];

const sources: Source[] = [
  {
    label:
      'Chipmunks — the source of the quarter-inch hardware cloth specification and its one-foot overhang, the bird feeder distance, the trapping and pre-baiting method, the Pennsylvania legal position and the statement that no toxic baits or fumigants are registered',
    publisher: 'Penn State Extension (Shannon T. Falker; Margaret C. Brittingham)',
    date: 'No publication date carried in the page; accessed 26 August 2026',
    href: 'https://extension.psu.edu/chipmunks',
  },
  {
    label:
      'Chipmunk Control, Circular 910 — the source of the rarely-abundant-enough position, the downspout and vent openings, the relocation warning, the Georgia legal position and the repellent passage that disagrees with itself',
    publisher: 'University of Georgia Extension (Michel Kohl; Michael T. Mengak)',
    date: 'Published with full review 16 December 2022; accessed 26 August 2026',
    href: 'https://extension.uga.edu/publications/detail.html?number=C910',
  },
  {
    label:
      'Chipmunks (ADM-2, Animal Damage Management) — the source of the statement that no poison baits are commercially available to the homeowner, and of the relocation-with-permission position',
    publisher:
      'Purdue University Department of Entomology; author Judy Loven, Animal Damage Management Specialist, USDA',
    date: 'Revised January 1999; accessed 26 August 2026',
    href: 'https://extension.entm.purdue.edu/publications/ADM-2.pdf',
  },
  {
    label:
      'Chipmunks in the Garden — the source of the position that live trapping is not recommended on welfare grounds',
    publisher: 'UNH Extension, Yard and Garden Infoline',
    date: '15 June 2018; accessed 26 August 2026',
    href: 'https://extension.unh.edu/blog/2018/06/chipmunks-garden',
  },
  {
    label:
      'Chipmunk Damage Prevention and Control Methods — the source of the cage trap specification, the under-$200 damage figure, the frightening-device finding and the fumigant position. This is a wildlife damage management center rather than a university extension service, and it is the only source on this page that is not a .edu',
    publisher: 'Internet Center for Wildlife Damage Management (ICWDM)',
    date: 'No publication date carried in the page; accessed 26 August 2026',
    href: 'https://icwdm.org/species/rodents/chipmunks/chipmunk-damage-prevention-and-control-methods/',
  },
  {
    label:
      '40 CFR § 152.175, Pesticides classified for restricted use — the primary legal text behind the aluminum phosphide position on this page',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    date: 'Current text as retrieved 26 August 2026',
    href: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-40?chapter=I&subchapter=E&part=152&section=152.175',
  },
];

const tocItems = [
  { id: 'which-animal', title: 'Making Sure It Is a Chipmunk' },
  { id: 'warranted', title: 'Whether It Warrants Control at All' },
  { id: 'trapping', title: 'Trapping, and the Trap Size the Sources Specify' },
  { id: 'cage-traps', title: 'Why No Cage Trap Is Named Here' },
  { id: 'relocation', title: 'Live Trapping and Relocation' },
  { id: 'exclusion', title: 'Keeping Them Out of the Structure' },
  { id: 'repellents', title: 'Repellents' },
  { id: 'toxicants', title: 'Poisons and Fumigants' },
  { id: 'legal', title: 'The Legal Position' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function ChipmunksPage() {
  return (
    <UsPageLayout
      title="Chipmunks"
      subtitle="Four of the five sources on this page make control conditional — on numbers, or on the animal burrowing against a structure. So this page separates the case they say warrants control from the case they say usually does not, and puts the tools with the first one."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={CHIPMUNK_HOME}
      clusterNav={CHIPMUNK_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>
          Most of what people want to do about chipmunks, the extension services do not recommend
          doing.
        </strong>{' '}
        There is no registered poison. There is no effective frightening device. The repellents are
        labeled for a different animal. And four of the five sources here make control conditional
        on numbers or on structural damage rather than on the animal being present.
      </p>
      <p>
        Five products are named further down, all of them for the one case the sources agree
        warrants action.{' '}
        <strong>As an Amazon Associate, PestPro Index earns from qualifying purchases</strong>;
        each card discloses this immediately above its own link.
      </p>

      <h2 id="which-animal">Making Sure It Is a Chipmunk</h2>
      <p>
        Every source places it in the squirrel family &mdash; Penn State calls the eastern chipmunk{' '}
        <em>&ldquo;a small, brown, burrow-dwelling squirrel&rdquo;</em>.
      </p>
      <p>
        <strong>The burrow entrance is the character that matters, and it is a negative one.</strong>{' '}
        Penn State:{' '}
        <em>
          &ldquo;The burrow entrance is usually about 2 inches in diameter and is not surrounded by
          obvious mounds of dirt, because the chipmunk carries the dirt in its cheek pouches and
          scatters it away from the burrow.&rdquo;
        </em>{' '}
        UGA Extension says the same:{' '}
        <em>&ldquo;Burrow system entrances and exits are kept free of excavated dirt.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          A chipmunk can be mistaken for a vole on exactly the test we publish elsewhere
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          Our{' '}
          <a href="https://pestproindex.com/us/moles-voles-gophers">
            mole, vole or pocket gopher identification page
          </a>{' '}
          identifies the vole by the <strong>absence</strong> of a mound, because the other two
          animals build one.{' '}
          <strong>
            A chipmunk also leaves no mound &mdash; but for a different reason, because it carries
            the spoil away in its cheek pouches.
          </strong>{' '}
          A reader working through that test could arrive at vole when the animal is a chipmunk.
          That page covers three animals and does not claim to cover this one, so the check belongs
          here.
        </p>
      </div>

      <h3>Size: the sources give two answers and neither says which measurement it means</h3>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>&ldquo;It typically measures 5 to 6 inches long and weighs about 3 ounces.&rdquo;</em> It
        gives the tail separately as 3 to 4 inches long. <strong>Purdue</strong> gives the same 5 to
        6 inches, a 3 to 4 inch tail and a weight of 2 to 4 ounces.
      </p>
      <p>
        <strong>UGA:</strong>{' '}
        <em>&ldquo;The Eastern Chipmunk is a small rodent measuring 8 to 10 in. long.&rdquo;</em>{' '}
        <strong>UNH:</strong> <em>&ldquo;Chipmunks are eight to 10 inches long&rdquo;</em>.
      </p>
      <p>
        Five or six inches plus a three-to-four-inch tail comes to eight to ten, so body length
        against body-plus-tail is the obvious reading.{' '}
        <strong>
          But not one of the four sources says which it is using, so both figures are given here and
          neither is corrected.
        </strong>
      </p>

      <h2 id="warranted">Whether It Warrants Control at All</h2>
      <p>
        <strong>This is the question the sources actually disagree about</strong>, and it decides
        everything below it.
      </p>
      <p>
        <strong>UGA Extension:</strong>{' '}
        <em>
          &ldquo;Chipmunks are territorial and rarely become abundant enough to cause a lot of
          damage, although populations can reach 20 individuals in a single urban yard.&rdquo;
        </em>
      </p>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;The majority of damage by chipmunks involves minimal economic loss (under
          $200).&rdquo;
        </em>{' '}
        <strong>That is ICWDM&rsquo;s figure for what typical chipmunk damage costs, quoted as
        context for whether to act. It is not a price for anything on this page</strong>, and ICWDM
        carries no date, so it is undated as well as approximate. The same source then says the
        other half:{' '}
        <em>
          &ldquo;Homeowners report that chipmunks are destructive when they burrow around
          structures. This damage warrants control to protect integrity of stairs, patios, and
          foundations.&rdquo;
        </em>
      </p>
      <p>
        <strong>Penn State attaches a condition to the structural case:</strong>{' '}
        <em>
          &ldquo;Chipmunks present in large numbers can cause structural damage by burrowing under
          patios, stairs, retention walls, or foundations.&rdquo;
        </em>{' '}
        <strong>UNH</strong> puts the garden case at its strongest:{' '}
        <em>
          &ldquo;A heavy chipmunk population can drastically reduce the amount of flowers and quality
          produce available for harvest in home gardens.&rdquo;
        </em>{' '}
        <strong>Purdue (1999)</strong> holds both at once &mdash; most people enjoy watching
        chipmunks and they are part of the food chain, and they can also be seriously destructive
        when they become numerous around homes, undermining foundations, patios, steps, retaining
        walls and sidewalks.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          What that adds up to, and why this page is shaped the way it is
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          <strong>
            The case these sources say warrants control is burrowing against a structure. The garden
            and bird-feeder nuisance is the case they treat as usually not warranting it.
          </strong>{' '}
          No source says chipmunks should be controlled as a matter of course.{' '}
          <strong>
            So the products on this page sit with the structural case and with keeping the animal
            out of the building
          </strong>{' '}
          &mdash; and the garden problem is answered below with habitat measures and a mesh, not
          with a trap.
        </p>
      </div>

      <h3>Two population figures that count different things</h3>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Population densities of chipmunks are typically two to four animals per acre,
          although densities may be as high as ten animals per acre if sufficient food and cover are
          available.&rdquo;
        </em>{' '}
        <strong>Purdue:</strong>{' '}
        <em>&ldquo;Populations of chipmunks average between 2 and 4 animals per acre.&rdquo;</em>
      </p>
      <p>
        <strong>
          Those two are not independent of each other. Penn State credits the Nebraska wildlife
          damage manual in its acknowledgments, and Purdue&rsquo;s author worked from the same
          material, so this is one figure appearing twice rather than two services agreeing.
        </strong>
      </p>
      <p>
        UGA&rsquo;s figure, quoted further up, is <strong>20 individuals in a single urban yard</strong>.{' '}
        <strong>
          Per acre is not per yard. A suburban yard is a fraction of an acre, so UGA&rsquo;s number
          is denser than Penn State&rsquo;s ceiling rather than a confirmation of it, and the two are
          not combined here.
        </strong>
      </p>
      <p>
        Two habitat figures worth having, both from Penn State:{' '}
        <em>
          &ldquo;place bird feeders at least 15 to 30 feet from buildings&rdquo;
        </em>{' '}
        to stop spilled seed supporting chipmunks near the house, and a note that landscaping should
        not connect wooded areas continuously to the foundation. UNH goes further on feeders and
        says to take them down until the chipmunks have gone to sleep for the winter. UGA and Penn
        State both name the same overlooked attractant: pet food and bird seed not stored in
        rodent-proof containers.
      </p>

      <h2 id="trapping">Trapping, and the Trap Size the Sources Specify</h2>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Trapping is the most practical method of eliminating chipmunks from many home
          situations.&rdquo;
        </em>{' '}
        <strong>UGA:</strong> <em>&ldquo;Trapping is the easiest method to control chipmunks.&rdquo;</em>
      </p>
      <p>
        <strong>
          And every source that names a snap trap specifies a rat trap rather than a mouse trap.
        </strong>{' '}
        Penn State: <em>&ldquo;common rat snap traps&rdquo;</em>. UGA:{' '}
        <em>
          &ldquo;The large wooden-base snap traps used in rat control are effective in chipmunk
          control.&rdquo;
        </em>{' '}
        UNH: <em>&ldquo;Rat traps baited with peanut butter can be an effective means of eliminating
        individual problem animals.&rdquo;</em> ICWDM lists <em>&ldquo;Rat-sized snap traps&rdquo;</em>.
      </p>
      <p>
        <strong>That is a size specification, and it is why the mouse traps named elsewhere on this
        site are not named here.</strong> Placement, from Penn State:{' '}
        <em>
          &ldquo;Set the snap-traps perpendicular to the chipmunk&rsquo;s pathway or in pairs along
          travel routes with the triggers facing away from each other.&rdquo;
        </em>{' '}
        UGA:{' '}
        <em>
          &ldquo;Place traps along runways at burrow openings or in other areas of chipmunk
          activity.&rdquo;
        </em>
      </p>
      <p>
        <strong>Both Penn State and ICWDM give the same non-target protection</strong>, and it is a
        physical measure rather than a warning: set the trap under a box with an opening that admits
        only a chipmunk, sized so the trap can still operate, to keep birds out of it. Purdue gives
        the same measure with a figure &mdash; cardboard boxes with two-inch diameter holes cut in
        the ends.
      </p>

      <p>
        The traps below are named because the sources on this page publish a trap size for a chipmunk, and each listing states its own dimensions.
      </p>

      {snapTraps.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="cage-traps">Why No Cage Trap Is Named Here</h2>
      <p>
        Penn State, UGA and ICWDM all describe live-catch cage traps as an option, and ICWDM is the
        only source that gives a specification:
      </p>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;Cage traps for chipmunks should be at least 3 x 3 x 10 inches with fine mesh
          (&frac14;-inch).&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          That is two requirements, and we could not find a listing that evidences both
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          <strong>We checked three small cage traps against it.</strong> All three state dimensions
          that comfortably exceed the size requirement.{' '}
          <strong>
            None of the three states a mesh aperture anywhere in its own product description.
          </strong>{' '}
          Three out of three failing the same half points at what is on sale rather than at any one
          product: <strong>retail cage-trap listings do not appear to publish mesh size.</strong> So
          no cage trap is named on this page, and the criterion above is left where it is, as
          ICWDM&rsquo;s, for anyone who wants to measure a trap themselves.
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          UGA takes a different route and names two trap models rather than a specification.{' '}
          <strong>
            This page does not treat those model names as equivalent to any product it has looked
            at
          </strong>{' '}
          &mdash; matching a manufacturer&rsquo;s model designation to a particular listing would
          need a source we do not have.
        </p>
      </div>

      <h2 id="relocation">Live Trapping and Relocation</h2>
      <p>
        <strong>This is the sharpest disagreement in the sources, and it is partly practical and
        partly about the animal&rsquo;s welfare.</strong> All four positions are given.
      </p>
      <ul>
        <li>
          <strong>Penn State:</strong>{' '}
          <em>
            &ldquo;Transport and release live-trapped chipmunks several miles from the point of
            capture (in areas where they will not bother someone else), or humanely euthanize
            them.&rdquo;
          </em>
        </li>
        <li>
          <strong>Purdue (1999):</strong> live-caught chipmunks may be moved and released several
          miles from the point of capture <strong>with the written permission of the landowner</strong>.{' '}
          <em>That sentence is paraphrased rather than quoted</em>: it is broken across a column and
          a hyphenated line in the source PDF, and this page does not quote across such a break.
        </li>
        <li>
          <strong>UGA:</strong>{' '}
          <em>
            &ldquo;Releasing live animals into unfamiliar territory is not recommended and usually
            results in high mortality among the released animals.&rdquo;
          </em>{' '}
          It adds:{' '}
          <em>
            &ldquo;Homeowners cannot trespass on other property to release trapped animals. It is
            illegal in most states to release trapped animals on county, state or federal
            lands.&rdquo;
          </em>
        </li>
        <li>
          <strong>UNH:</strong>{' '}
          <em>
            &ldquo;Live trapping chipmunks is not recommended because the release of small animals
            like chipmunks into unfamiliar territory with no shelter (burrows) exposes them to
            predators and possibly starvation.&rdquo;
          </em>{' '}
          It describes shooting where legal and quick-kill traps as{' '}
          <em>&ldquo;the more humane methods of reducing chipmunk populations&rdquo;</em>.
        </li>
      </ul>
      <p>
        <strong>
          UGA&rsquo;s &ldquo;illegal in most states&rdquo; is a statement about the law made by an
          extension service, and no statute was read for this page.
        </strong>{' '}
        It is reported as UGA&rsquo;s statement and not as the law.
      </p>

      <h2 id="exclusion">Keeping Them Out of the Structure</h2>
      <p>
        <strong>Quarter-inch mesh is the one specification every source that gives one agrees
        on.</strong> Penn State:{' '}
        <em>
          &ldquo;Use caulking, hardware cloth with quarter-inch mesh, or other appropriate materials
          to close openings where chipmunks could gain entry.&rdquo;
        </em>{' '}
        It gives a second use with a number attached:{' '}
        <em>&ldquo;The cloth should extend at least 1 foot past each margin of the planting.&rdquo;</em>{' '}
        UGA: <em>&ldquo;Use caulking or 1/4-in. welded wire.&rdquo;</em> ICWDM:{' '}
        <em>&ldquo;Cover seeds and bulbs with &frac14;-inch hardware cloth.&rdquo;</em>
      </p>
      <p>
        <strong>The two sources disagree about whether this is the cheap option or the expensive
        one.</strong> Penn State:{' '}
        <em>
          &ldquo;Where high populations of chipmunks exist, exclusion is often less expensive than
          trapping.&rdquo;
        </em>{' '}
        ICWDM: <em>&ldquo;Exclusion is expensive and practical only in limited situations.&rdquo;</em>{' '}
        Both are published positions and neither is corrected here.
      </p>

      {cloths.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <p>
        <strong>UGA names the openings themselves:</strong>{' '}
        <em>
          &ldquo;Seal holes where gas lines, cooling lines, electric cables, dry vents or cable TV
          lines enter the house.&rdquo;
        </em>{' '}
        Penn State puts caulking first in the same list as the hardware cloth.
      </p>

      {sealants.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h3>Downspouts and vents, and a disclosure about the product below</h3>
      <p>
        <strong>UGA:</strong>{' '}
        <em>
          &ldquo;Chipmunks are especially troublesome in clogging rain gutter downspouts, which can
          cause water to back up along foundation walls and soffits. Exclude chipmunks from rain
          gutter down spouts with wire mesh coverings.&rdquo;
        </em>{' '}
        It also asks for a screen on the bottom of a clothes dryer vent if the vent is near the
        ground. <strong>ICWDM:</strong>{' '}
        <em>&ldquo;Use gutter guards and cover downspouts to prevent chipmunks from entering a house.&rdquo;</em>{' '}
        and <em>&ldquo;Secure exhaust vents with professionally manufactured screens.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Read this before the card below
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          <strong>
            The listing below does not mention chipmunks anywhere in its own description.
          </strong>{' '}
          It names birds, squirrels, bats and rodents. It is here because{' '}
          <strong>
            two sources name the downspout and the vent as the openings to cover, and this product
            states that it fits both
          </strong>{' '}
          &mdash; the qualification comes from the sources, not from the product.
        </p>
        <p className="m-0 mt-3 text-sm text-blue-900">
          <strong>One further limit, and it is a limit in what the sources say rather than in the
          product.</strong> UGA asks for &ldquo;wire mesh coverings&rdquo; and ICWDM for
          &ldquo;professionally manufactured screens&rdquo;.{' '}
          <strong>Neither specifies a mesh aperture for this job</strong>, and this listing does not
          state one either. So this page cannot tell you the hole size is small enough &mdash; only
          that the opening is the one the sources say to cover.
        </p>
      </div>

      {guards.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="repellents">Repellents</h2>
      <p>
        <strong>No repellent is named on this page, and the reason is that the sources do not
        support one.</strong>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          UGA Extension disagrees with itself inside a single paragraph, and both halves are given
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          It opens:{' '}
          <em>&ldquo;There are no registered repellents for chipmunks.&rdquo;</em> Two sentences
          later it names taste repellents containing Bitrex, Thiram or ammonium soaps with high
          fatty acids that <em>&ldquo;can be applied to landscape plants&rdquo;</em>, and lists four
          commercial products by name.{' '}
          <strong>
            That is the source&rsquo;s own contradiction, not a summary error, and this page renders
            it rather than picking the half it prefers.
          </strong>
        </p>
      </div>
      <p>
        <strong>Penn State supplies the qualification that makes sense of it.</strong> It names the
        same three active ingredients and then says:{' '}
        <em>&ldquo;These repellents are labeled for use against squirrels.&rdquo;</em> It adds that
        multiple applications are required, and that{' '}
        <em>
          &ldquo;Repellents can be expensive and usually do not provide complete damage reduction to
          horticultural plantings.&rdquo;
        </em>
      </p>
      <p>
        <strong>ICWDM:</strong>{' '}
        <em>
          &ldquo;Repellents are expensive and usually do not provide 100% reduction in damage.
          Effectiveness of active ingredients varies, and most commercial repellents have not been
          adequately tested.&rdquo;
        </em>
      </p>
      <p>
        <strong>So no repellent is named here.</strong> The products the sources point to are
        labeled for a different animal, the one source that lists them also says none is registered
        for this one, and no source consulted says a repellent solves the problem.{' '}
        <strong>
          Whether applying a squirrel-labeled product for chipmunks is a label-consistent use is a
          question none of these sources answers, and this page does not answer it either.
        </strong>
      </p>
      <p>
        One related warning is worth carrying because people try it. <strong>UGA:</strong>{' '}
        <em>
          &ldquo;Home remedies such as naphthalene or &ldquo;moth balls&rdquo; are not labeled for
          use on mammals and it is a violation of pesticide laws to use them in a manner that is not
          consistent with their label.&rdquo;{' '}
        <em>
          (the inner quotation marks around the term moth balls are the University of Georgia&rsquo;s own and are left as published)
        </em>
        </em>
      </p>
      <p>
        <strong>And one class the sources close outright.</strong> ICWDM:{' '}
        <em>&ldquo;No frightening devices are effective for the control of chipmunks.&rdquo;</em> Its
        own summary table lists frightening devices as{' '}
        <em>&ldquo;Nothing effective&rdquo;</em>. Nothing of that kind is named here.
      </p>

      <h2 id="toxicants">Poisons and Fumigants</h2>
      <p>
        <strong>
          Nothing of this kind is named on this page, and there are three separate grounds rather
          than one. All three are set out, because they close different products.
        </strong>
      </p>

      <h3>One: the fumigant that is named is restricted-use under federal law</h3>
      <p>
        ICWDM lists <strong>aluminum phosphide</strong> among toxicants for chipmunks and describes
        how to place it in a burrow. <strong>Aluminum phosphide appears in the federal table of
        restricted-use pesticides at 40 CFR &sect; 152.175</strong>, whose opening sentence reads:
      </p>
      <p>
        <em>
          &ldquo;The following uses of pesticide products containing the active ingredients
          specified below have been classified for restricted use and are limited to use by or under
          the direct supervision of a certified applicator.&rdquo;
        </em>
      </p>
      <p>
        The criterion recorded against it in that table is{' '}
        <em>&ldquo;Inhalation hazard to humans.&rdquo;</em>{' '}
        <strong>
          One precision about how that table is written: the use-pattern and classification cells on
          the aluminum phosphide row are ditto marks inheriting from the row above, so this page
          states that the active ingredient is listed in &sect; 152.175 and quotes what the section
          says listing means. It does not assert a specific use-pattern cell it cannot read.
        </strong>{' '}
        ICWDM says the same thing in practical terms:{' '}
        <em>
          &ldquo;Use of aluminum phosphide is highly regulated and a fumigation plan must be created
          prior to use.&rdquo;
        </em>
      </p>

      <h3>Two: the baits that would work are not labeled for this animal</h3>
      <p>
        <strong>Purdue:</strong>{' '}
        <em>
          &ldquo;There are no poison baits commercially available to the homeowner to kill
          chipmunks.&rdquo;
        </em>{' '}
        It goes on to say that baits used against rats and mice in and around homes will also kill
        chipmunks, but that they are not labeled for that use and cannot be recommended{' '}
        <em>(paraphrased &mdash; that sentence is broken across a column in the source PDF)</em>.
      </p>
      <p>
        <strong>
          Using a pesticide against an animal its label does not cover is a label violation, and the
          label is the law.
        </strong>{' '}
        <strong>Purdue&rsquo;s publication was revised in January 1999</strong>, which makes it the
        oldest source on this page, and registrations change &mdash; it is carried because the two
        recent sources agree with it, not on its own.
      </p>

      <h3>Three: the two recent extension sources say nothing is registered at all</h3>
      <p>
        <strong>Penn State</strong> states it twice, once for each category:{' '}
        <em>&ldquo;No toxic baits are registered for controlling chipmunks.&rdquo;</em> and{' '}
        <em>&ldquo;No fumigants are registered for controlling chipmunks.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          UGA Extension states both positions in one section, and ICWDM disagrees with all of them
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          UGA opens its poison section by directing readers to Georgia&rsquo;s pesticide product
          database for{' '}
          <em>&ldquo;Poisons and toxicants registered for use in Georgia against chipmunks&rdquo;</em>{' '}
          &mdash; and closes the same section with{' '}
          <em>
            &ldquo;There are no fumigants or toxicants registered for controlling chipmunks.&rdquo;
          </em>{' '}
          <strong>Both sentences are the source&rsquo;s own and both are given here.</strong>
        </p>
        <p className="m-0 mt-3 text-sm text-blue-900">
          <strong>And ICWDM takes the opposite view from Penn State outright:</strong>{' '}
          <em>&ldquo;Burrow fumigants are effective for chipmunks in small areas.&rdquo;</em>{' '}
          <strong>
            That disagreement is not resolved on this page. It is worth knowing that ICWDM is a
            wildlife damage management center rather than a university extension service, and it is
            the only source here that is not a .edu.
          </strong>
        </p>
      </div>

      <h2 id="legal">The Legal Position</h2>
      <p>
        <strong>Yours may differ and this is not legal advice.</strong> Two sources address it, each
        about its own state, and they start from opposite defaults.
      </p>
      <p>
        <strong>Penn State:</strong>{' '}
        <em>
          &ldquo;Chipmunks are not protected by federal law, but are protected by the Pennsylvania
          Game Commission. Pennsylvania law allows landowners to take chipmunks when they are causing
          or about to cause damage to property.&rdquo;
        </em>
      </p>
      <p>
        <strong>UGA:</strong>{' '}
        <em>
          &ldquo;ALL non-game wildlife is protected in Georgia; therefore, it is illegal to kill any
          species unless specifically permitted by regulations such as hunting and fishing
          laws.&rdquo;
        </em>{' '}
        It adds that homeowners can generally protect property from mammals causing or about to
        cause damage, but that this does not permit killing wildlife out of season or in violation
        of law.
      </p>
      <p>
        <strong>The federal position is the only part both agree on.</strong> Everything else is
        state law, and{' '}
        <strong>
          this page has read what two extension services say about their own states rather than any
          statute or regulation.
        </strong>{' '}
        ICWDM adds that you should check with your state wildlife agency for restrictions or permits
        required to shoot chipmunks, and UGA notes it is often illegal to discharge a firearm inside
        city limits.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
