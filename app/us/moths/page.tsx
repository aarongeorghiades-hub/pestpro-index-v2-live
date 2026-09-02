import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { MOTHS_NAV, MOTHS_HOME } from '../components/mothsNav';

const URL = 'https://pestproindex.com/us/moths';
const TITLE = 'Household Moths: Two Kinds, Two Different Traps';
const DESCRIPTION =
  'Fabric moths and pantry moths need different products. UC IPM states a pheromone trap for one won\'t attract the other — what actually works for each.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Moths', item: URL }],
};

// ---------------------------------------------------------------------------
// TWO DIVISIONS, AND THE SEPARATION IS THE POINT OF THE PAGE.
//
// (A) FABRIC-DAMAGING MOTHS   webbing and casemaking clothes moths
// (B) STORED-FOOD MOTHS       pantry moths including the Indianmeal moth
//
// UC IPM states that a clothes-moth pheromone will not attract other moth species,
// and that traps for other species will not attract clothes moths. A reader who buys
// across the divisions gets a product the flagship source says will not work. That is
// why the divisions never share a product block, and why no carpet-beetle pheromone
// trap appears here at all even though this site already cards two of them.
//
// DIVISION (B) IS THIN AND RENDERS THIN. Four of the seven division (B) sources
// failed at fetch — three redirected away from the document and one served an
// anti-bot interstitial. No division (B) source states a freezing TEMPERATURE. That
// gap is stated on the page rather than filled from division (A).
//
// CARDS: ten, across four criteria. Titles are the fetched titles from the S53 R1
// fetch report, verbatim, EXCEPT the two S45-C route additions whose titles come from
// the identity bank and are declared as such in the round report.
//
//   A1 airtight fabric container   2 cards, both S45-C route additions
//   A2 clothes-moth pheromone trap 2 cards (one is an S47-H merge of two ASINs)
//   B1 food container, tight lid   3 cards
//   B2 pantry-moth pheromone trap  3 cards
//
// CARDS NOTHING, EACH FOR ITS OWN REASON:
//   mothballs / paradichlorobenzene  UC IPM's condition is that the vapour only
//                                    reaches strength in an airtight container. That
//                                    is a user practice, not a product property, so
//                                    there is no criterion a listing can evidence.
//   cedar                            UC IPM calls the property debatable.
//   insecticides, division (B)       UC IPM states they are not recommended.
// ---------------------------------------------------------------------------

type Div = 'A1' | 'A2' | 'B1' | 'B2';

type ProductRecord = {
  asin: string;
  cardName: string;
  group: Div;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B084DY21D6',
    group: 'A1',
    cardName: 'IRIS USA WeatherPro Storage Bin, 47 Quart, Gasket Seal, 2-Pack',
    whatItDoes: [
      'States the sealing property in its own words: the lid seals are described as creating a vacuum-like environment that locks out moisture and dust. UC IPM asks for an airtight container for fabrics, and this is a listing that states the property rather than implying it',
      'Also states a latching mechanism — a multi-buckle system the listing says gives a tight and secure fit',
      'The same maker sells a 46 quart single box under ASIN B003OXNISG. It is the same line in a different size and pack count, so it is named here rather than listed separately',
      'Already named on this site for the same physical job against carpet beetles. What is new here is the reason: UC IPM gives the same storage instruction for clothes moths, and adds that items must be clean and pest free BEFORE they go in',
    ],
  },
  {
    asin: 'B00KL7VPWO',
    group: 'A1',
    cardName: 'Sterilite 54 Quart Gasket Box, 4-Pack',
    whatItDoes: [
      'The only fabric container we checked whose own text uses the word airtight and pairs it with the mechanism: a gasketed seal plus hinged latch clips, which the listing says help block air, moisture, dust and pests',
      'A larger box than the one above, at 54 quarts, sold in a four-pack',
      'Named on three other pages of this site for the same physical job. The reason here is UC IPM’s clothes-moth storage sentence, not anything about the product',
      'The order in the source matters: clean and pest free first, then sealed. A container that seals will seal an infestation in as readily as it keeps one out',
    ],
  },
  {
    asin: 'B07H9FZ7QP',
    group: 'A2',
    cardName: "Dr. Killigan's Premium Clothing Moth Traps, 6 Traps",
    whatItDoes: [
      'Names both clothes moth species in its own text, to scientific name: Tineola bisselliella and Tinea pellionella. Those are the two species UC IPM names as fabric pests',
      'States a pheromone lure in its own text, and describes it as luring male moths to disrupt breeding',
      'Its own text opens by stating what it is NOT for — pantry moths, food moths and gypsy moths. That exclusion is the same one UC IPM makes, written by the seller',
      'Sold in two colors under two different ASINs. The listing itself says the only difference is how they look and that both carry the same pheromone and glue, so they are treated here as one product, not two',
    ],
  },
  {
    asin: 'B092T49YP2',
    group: 'A2',
    cardName: 'MaxGuard Clothes Moth Traps, 12 Traps plus 2',
    whatItDoes: [
      'Names both clothes moth types in its own text — webbing and case-bearing — and states in the same sentence that it is not for pantry moths',
      'States the pheromone and what it does: a timed-release female pheromone intended to attract and trap male moths and stop the breeding cycle',
      'The largest trap count of the clothes-moth traps checked, at fourteen',
      'A monitoring and mating-disruption tool. UC IPM says trapping helps detect and reduce an infestation and that trapped males cannot mate, but also says to take other measures alongside it',
    ],
  },
  {
    asin: 'B08ZK5WDWN',
    group: 'B1',
    cardName: 'Vtopmart Airtight Food Storage Containers, 24 Pieces',
    whatItDoes: [
      'States the lid mechanism in its own text, not only in the product name: side-locking lids with a silicone gasket, which the listing says make the containers airtight',
      'Twenty-four containers in four sizes, from 0.7 quart to 2.5 quart, per the listing',
      'UC IPM asks for containers with tight-fitting lids and says plainly that plastic bags are not adequate. This is a lid-and-gasket claim rather than a bag',
      'What the listing does NOT claim is pest exclusion. It claims air and moisture exclusion. The source criterion is a property of the lid, and that is all this card asserts',
    ],
  },
  {
    asin: 'B08NDKDJC5',
    group: 'B1',
    cardName: 'CHEFSTORY Airtight Food Storage Containers, 8 Pieces',
    whatItDoes: [
      'States an airtight seal in its own text and names the mechanism: side-locking lids with a black silicone gasket, which the listing says protect the containers from air and water',
      'A smaller set than the two 24-piece sets, at eight containers in four sizes',
      '⚠ The listing describes “4 side-locking lids” for an eight-piece set. Whether that means four locking sides per lid or four lidded containers is not resolved by the listing’s own text, so this card states no lid count',
      'As with every container here, the claim is against air and moisture. No source consulted tested any container against a moth',
    ],
  },
  {
    asin: 'B097K4B6Z8',
    group: 'B1',
    cardName: 'PRAKI Airtight Food Storage Containers, 24 Pieces',
    whatItDoes: [
      'States the mechanism in its own text: a silicone sealing strip and locking lids, which the listing says stop water and air entering',
      'Twenty-four containers in four sizes, sold with labels and a marker',
      'The sources put storage after disposal, not before it. UC IPM says to throw away any food that has evidence of infestation first',
      'UF/IFAS adds a category people miss: it names dog food and bird seed as overlooked infestation sites that should also be kept in sealed containers',
    ],
  },
  {
    asin: 'B01GM1LUGS',
    group: 'B2',
    cardName: "Dr. Killigan's Pantry Moth Traps, 6 Pack",
    whatItDoes: [
      'Names the pest in its own text and states the pheromone: a double-concentrated pheromone stripe intended to attract male Indianmeal moths',
      'Its own text points clothes-moth buyers away to a different product, which is the same division line this page draws',
      'Six traps per pack, which the listing says last up to three months each',
      'The same brand sells a near-identical pantry trap under a different ASIN in another color. We checked both and their feature text is materially different, so they are NOT treated as one product here — only this one is named',
    ],
  },
  {
    asin: 'B092DFKMYJ',
    group: 'B2',
    cardName: 'MaxGuard Pantry Moth Traps, 4 Traps Trial Pack',
    whatItDoes: [
      'Names four stored-food moths in its own text — Indianmeal, flour, grain and seed moths — and states in the same sentence that it is not for clothes moths',
      'States a timed-release female pheromone intended to attract and trap male moths',
      '⚠ This is a four-trap TRIAL PACK, the smallest count of any trap on this page. The listing says so; it is repeated here because the other packs are larger',
      'The listing states an EPA establishment number in its own feature text',
    ],
  },
  {
    asin: 'B08R16DSJT',
    group: 'B2',
    cardName: 'BugMD Indian Meal and Pantry Moth Traps, 6-Pack',
    whatItDoes: [
      'Names the Indian meal moth in its own text and states pheromone-infused glue as the mechanism',
      'Six traps, which the listing says are discarded after twelve weeks or when full',
      'A folded design the listing says keeps the glue off food, surfaces and hands',
      'UC IPM scopes what a pantry trap is for: it says to keep using pheromone traps to detect pests even after the infested food has been removed, because pantry pests can live for many weeks without food',
    ],
  },
];

const tocItems = [
  { id: 'two-kinds', title: 'Two Kinds of Household Moth' },
  { id: 'dividing-line', title: 'The Dividing Line: a Trap for One Will Not Catch the Other' },
  { id: 'fabric', title: 'Division A — Moths That Damage Fabric' },
  { id: 'fabric-clean', title: 'Cleaning, Laundering and Storage' },
  { id: 'fabric-heat', title: 'Heat and Cold for Fabrics' },
  { id: 'mothballs', title: 'Mothballs, and What This Site Says Elsewhere' },
  { id: 'fabric-traps', title: 'Clothes-Moth Pheromone Traps' },
  { id: 'food', title: 'Division B — Moths in Stored Food' },
  { id: 'food-storage', title: 'Throwing Out, Then Storing' },
  { id: 'food-traps', title: 'Pantry-Moth Pheromone Traps' },
  { id: 'food-insecticide', title: 'Insecticides: Two Sources, Two Positions' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Will a moth trap from the supermarket work on any moth?',
    answer:
      'No, and this is the single most useful thing on this page. UC IPM states that because the pheromone specifically attracts clothes moths it will not attract other moth species, and that pheromone traps for other species such as grain-infesting moths will not attract clothes moths. Two of the traps named on this page say the same thing in their own seller text: one states it is not for pantry moths, food moths or gypsy moths, and another states it is not for clothes moths. So a trap bought for the wrong group is not a weaker option, it is the wrong tool. Work out which group you have first: clothes moths are found near the fabric they are eating, and pantry moths come out of stored food.',
  },
  {
    question: 'How do I tell a clothes moth from a pantry moth?',
    answer:
      'UC IPM gives three distinguishing points and says outright not to confuse them. At rest, clothes moths are only about a quarter of an inch long while most food-infesting moths are about double that. Clothes moths fly only around the immediate area of the infestation and flutter about rather than flying in a direct, steady line as food-infesting moths do. Food-infesting moths also lack the tufts of hair on the head. UC IPM adds that to confirm a clothes moth you should catch one and examine its head with a magnifying glass or hand lens. The other strong clue is location: clothes moths are weak flyers that are not attracted to lights, so you find them in a dark part of a closet, close to the item they are damaging.',
  },
  {
    question: 'Does freezing work, and at what temperature?',
    answer:
      'It depends which group you have, and the two divisions are not equally well documented. For clothes moths, UC IPM gives a temperature and a duration: enclose the item in a plastic bag and put it in a freezer for several days at temperatures lower than 18 degrees Fahrenheit. For stored-food moths, UF/IFAS says freezing the product for several days has proven to be an effective control measure, and states no temperature at all. UC IPM Pantry Pests contains no temperature figure of any kind. So the honest answer for the pantry is a duration without a temperature. This page does not carry the 18 degree figure across into the food section, because no stored-food source published it and the two figures are about different insects.',
  },
  {
    question: 'Are mothballs allowed, given what this site says elsewhere?',
    answer:
      'Both things are true and they are about different uses. UC IPM records that moth balls, flakes or crystals containing 1,4-dichlorobenzene are available for protecting clothes in storage, and attaches a condition: the vapour only builds to the required concentration in an airtight container, and if the container is not airtight the chemicals only somewhat repel adults while larvae already on the clothes continue to feed. UC IPM also says these materials are toxic and to keep them away from children and pets. Separately, three other pages on this site quote extension services saying not to use mothballs against snakes, chipmunks and other wildlife, and that using them outdoors violates the product label. Those warnings are about outdoor and vertebrate use, which is not the use the product is labelled for. This page names no mothball product.',
  },
  {
    question: 'Do I need an insecticide for pantry moths?',
    answer:
      'The two sources do not agree, and this page reports both rather than choosing. UC IPM states that insecticides are not recommended for controlling pantry pests, and says separately that spraying pesticides on or near food may cause greater harm. UF/IFAS states that numerous insecticides have been used to control Indianmeal moth populations, but that effectiveness is limited. Those are different positions from two extension services and neither is adjusted here to fit the other. What both sources put first is throwing out the infested food and cleaning the space, and no insecticide product is named anywhere on this page.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Clothes Moths — the source of the species identification, the damage list, the laundering, storage, freezing and heating figures, the cedar assessment, the mothball conditions, and the pheromone cross-attraction statement that divides this page',
    publisher: 'UC Statewide IPM Program, by D.H. Choe, Entomology, UC Riverside',
    date: 'Renders one date only, an update stamp of 03/2013. A January 2022 publication date exists in the page markup but is inside an HTML comment and does not render, so it is not cited here. Fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/clothes-moths/',
  },
  {
    label:
      'Pest Notes: Pantry Pests — the source of the tight-fitting lid criterion, the pheromone trap instruction, and the position that insecticides are not recommended',
    publisher: 'UC Statewide IPM Program',
    date: 'Renders one date only, an update stamp of 03/2013. The same January 2022 date is present but commented out and does not render, so it is not cited. Fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/pantry-pests/',
  },
  {
    label:
      'Indianmeal Moth, Plodia interpunctella, EENY-026/IN153 — the source of the sealed-container instruction, the pet food and bird seed warning, the freezing and heating statement, the development figures and the insecticide position that differs from UC IPM',
    publisher: 'UF/IFAS Extension',
    date: 'Renders a copyright line of 2024. Revision dates exist in the page metadata but do not render as text, so they are not cited. Fetched 28 August 2026',
    href: 'https://ask.ifas.ufl.edu/publication/in153',
  },
  {
    label:
      'Flour Moth / Pantry Moth / Indian Meal Moth — used for identification and the webbing description only. This page is identification material and states no control criterion',
    publisher: 'University of Maine Cooperative Extension',
    date: 'No publication date renders on the page. Fetched 28 August 2026',
    href: 'https://extension.umaine.edu/home-and-garden-ipm/fact-sheets/common-name-listing/indian-meal-moth/',
  },
];

export default function MothsPage() {
  const A1 = products.filter((p) => p.group === 'A1');
  const A2 = products.filter((p) => p.group === 'A2');
  const B1 = products.filter((p) => p.group === 'B1');
  const B2 = products.filter((p) => p.group === 'B2');
  return (
    <UsPageLayout
      title="Household Moths"
      subtitle="Two different insects share the name. One eats wool, fur and feathers; the other lives in flour, cereal and pet food. They need different products, and the flagship source states that a pheromone trap for one will not attract the other. This page keeps them apart."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={MOTHS_HOME}
      clusterNav={MOTHS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Moths in the house is two problems, not one. This page follows the sources in splitting
        them, because the products that work on one do not work on the other. Quotation marks on
        this page mark a source&rsquo;s own words and nothing else.
      </p>

      <h2 id="two-kinds">Two Kinds of Household Moth</h2>
      <p>
        <strong>Division A, the fabric eaters.</strong> UC IPM:{' '}
        <em>
          &ldquo;The webbing clothes moth, Tineola bisselliella, and casemaking clothes moth, Tinea
          pellionella, can be fabric pests in California.&rdquo;
        </em>{' '}
        And on which stage does the harm:{' '}
        <em>&ldquo;The larva is the damaging stage of the clothes moth.&rdquo;</em>
      </p>
      <p>
        <strong>Division B, the food infesters.</strong> The University of Maine describes what a
        reader actually sees:{' '}
        <em>
          &ldquo;The larvae of this small moth spin silken threads as they crawl around, causing the
          infested food to look as though it has been webbed together.&rdquo;
        </em>
      </p>
      <p>
        <strong>Telling them apart, in UC IPM&rsquo;s words:</strong>{' '}
        <em>
          &ldquo;At rest, clothes moths are only about 1/4 inch long, while most food-infesting
          moths are about double that length.&rdquo;
        </em>{' '}
        The same source adds that clothes moths flutter about rather than flying in a direct, steady
        manner as food-infesting moths do, and that food-infesting moths do not have the little
        tufts of hair on their head.
      </p>

      <h2 id="dividing-line">The Dividing Line: a Trap for One Will Not Catch the Other</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          This is the reason the page is split, and it is the most useful sentence on it.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;Because the pheromone specifically attracts clothes moths, it won?t attract other
            moth species. Conversely, pheromone traps for other species such as graininfesting moths
            won?t attract clothes moths.&rdquo;
          </em>{' '}
          <em>
            (the question marks in &ldquo;won?t&rdquo; and the missing hyphen in
            &ldquo;graininfesting&rdquo; are in UC IPM&rsquo;s own published text and are left as
            published rather than silently corrected)
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          A trap bought for the wrong group is not a weaker option. It is the wrong tool. Two of the
          sellers named on this page state the same exclusion themselves.
        </p>
      </div>
      <p>
        The same rule reaches further than moths. This site names two pheromone traps for{' '}
        <Link href="/us/carpet-beetles">carpet beetles</Link>, which damage the same fabrics.{' '}
        <strong>
          Those traps are not named on this page and must not be substituted for one of these
        </strong>{' '}
        &mdash; a carpet beetle pheromone is not a clothes moth pheromone, and UC IPM&rsquo;s
        sentence above is the reason.
      </p>

      <h2 id="fabric">Division A &mdash; Moths That Damage Fabric</h2>
      <p>
        <strong>What the larvae eat, in UC IPM&rsquo;s words:</strong>{' '}
        <em>
          &ldquo;Both species feed on wool clothing, carpets, and rugs; upholstered furniture; furs;
          stored woolen items; animal bristles in brushes; wool felt pads in pianos; and fish meal in
          fish food.&rdquo;
        </em>{' '}
        And what makes an item more attractive:{' '}
        <em>
          &ldquo;Fabrics with food, perspiration, or urine stains are more subject to damage.&rdquo;
        </em>
      </p>
      <p>
        <strong>What to look for:</strong>{' '}
        <em>
          &ldquo;To inspect for clothes moths, look to see if there are silken tubes in the hidden
          portions of clothes, such as under collars, or silken mats or patches on material.&rdquo;
        </em>
      </p>

      <h2 id="fabric-clean">Cleaning, Laundering and Storage</h2>
      <p>
        <strong>UC IPM on laundering:</strong>{' '}
        <em>
          &ldquo;The most common and effective method for killing all stages of clothes moths in
          clothing, blankets, and other washable articles is to thoroughly launder them for 20 to 30
          minutes in water that is at least 120&deg;F.&rdquo;
        </em>{' '}
        Because many woollen items should not be washed in hot water, the same source says dry
        cleaning may be the only suitable option.
      </p>
      <p>
        <strong>On the vacuum:</strong>{' '}
        <em>
          &ldquo;After using it in infested areas, dispose of the bag&rsquo;s contents promptly,
          since it can include eggs, larvae, or adult moths.&rdquo;
        </em>
      </p>
      <p>
        <strong>On storage, and the order in the sentence is the instruction:</strong>{' '}
        <em>
          &ldquo;When storing susceptible items, be sure they are clean and pest free, and place them
          in an airtight container.&rdquo;
        </em>{' '}
        <strong>
          Clean and pest free first, then sealed. A container that seals will seal an infestation in
          as readily as it keeps one out.
        </strong>
      </p>
      <p>
        <strong>On cedar, the source declines to endorse it:</strong>{' '}
        <em>
          &ldquo;The effectiveness of cedar chests and closet floors made of cedar is
          debatable.&rdquo;
        </em>{' '}
        UC IPM adds that aromatic eastern red cedar contains an oil that can kill small larvae but
        does not affect large ones, and that a tightly constructed chest matters more in the long run
        than the type of wood.
      </p>
      <p>
        The two containers below are named because their own listings state that they seal. They are
        in no order of preference, and no source consulted compares one product against another.
      </p>
      {A1.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="fabric-heat">Heat and Cold for Fabrics</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Read this before the figures below: 120&deg;F appears twice in this source and means two
          different operations.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          One is <strong>washing water</strong> at least 120&deg;F for <strong>20 to 30 minutes</strong>,
          quoted in the laundering section above. The other is an <strong>oven</strong> above
          120&deg;F for <strong>at least 30 minutes</strong>, quoted below. The temperatures match and
          the durations nearly match, which is exactly why they are easy to merge.{' '}
          <strong>
            They are not interchangeable, and this page keeps them in separate sections on purpose.
          </strong>
        </p>
      </div>
      <p>
        <strong>UC IPM, on heating, freezing and dry ice, in one sentence:</strong>{' '}
        <em>
          &ldquo;You can also control clothes moths by heating the infested item in an oven for at
          least 30 minutes at temperatures higher than 120&deg;F, enclosing the item in a plastic bag
          and placing it in a freezer for several days at temperatures lower than 18&deg;F, or
          fumigating the item with dry ice.&rdquo;
        </em>{' '}
        The same source says to consider first whether cold or heat will damage the fabric.
      </p>
      <p>
        <strong>How long the larval stage can last, which is why storage matters:</strong>{' '}
        <em>
          &ldquo;Larvae molt 5 to 45 times, depending on indoor temperatures and the type of food
          available. The larval period lasts 35 days to 2 1/2 years.&rdquo;
        </em>
      </p>

      <h2 id="mothballs">Mothballs, and What This Site Says Elsewhere</h2>
      <p>
        <strong>No mothball product is named on this page.</strong> What follows is what UC IPM
        records, with the condition it attaches.
      </p>
      <p>
        <em>
          &ldquo;Moth balls, flakes, or crystals containing 1,4-dichlorobenzene (also called
          paradichlorobenzene) also are available for protecting clothes in storage. Because these
          materials are toxic, be sure to keep them away from children and pets.&rdquo;
        </em>
      </p>
      <p>
        <strong>And the condition, which is the part that decides whether they do anything:</strong>{' '}
        <em>
          &ldquo;The vapors build up to the required concentration only in an airtight
          container.&rdquo;
        </em>{' '}
        <em>
          &ldquo;If the container isn&rsquo;t airtight, the chemicals only somewhat repel adults, and
          any larvae already on clothes continue to feed.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Three other pages on this site say not to use mothballs. Both things are true, because they
          are about different uses.
        </p>
        <p className="mt-3 mb-0 text-base text-blue-900">
          Our pages on snakes, chipmunks and opossums quote extension services saying mothballs are
          not effective against those animals, that using them outdoors violates the product label,
          and that they are not labelled for use on mammals.{' '}
          <strong>
            Those warnings are about outdoor and vertebrate use. This section is about the indoor
            fabric storage the product is labelled for, which is a different matter entirely.
          </strong>{' '}
          Neither statement corrects the other, and no product is named for either.
        </p>
      </div>
      <p>
        <strong>
          Why no mothball product is carded: the condition UC IPM attaches is something the buyer
          does, not something the product is.
        </strong>{' '}
        A listing can state what is in the box; it cannot evidence that the box will be used inside
        an airtight container. With no property to test a listing against, there is no criterion, so
        there is no card.
      </p>

      <h2 id="fabric-traps">Clothes-Moth Pheromone Traps</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Pheromone traps are available to trap both the webbing clothes moth and the
          casemaking clothes moth.&rdquo;
        </em>{' '}
        The same source describes the mechanism as a sex attractant that draws male moths onto the
        sticky sides, and says that trapping both detects the infestation and provides some control
        because trapped males cannot mate &mdash; while adding that a reader should also launder or
        dry clean the exposed clothes.
      </p>
      <p>
        Both traps below state a pheromone <em>and</em> name clothes moths in their own text. A trap
        that never says which moth it targets did not qualify, because of the dividing line above.
      </p>
      {A2.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="food">Division B &mdash; Moths in Stored Food</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          This division is thinner than the one above, and it is thinner on the page because it is
          thinner in the sources.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          Four of the stored-food sources we went to could not be read: three redirected away from
          the document that was asked for, and one refused an automated request outright.{' '}
          <strong>
            Nothing below is padded out with a figure borrowed from the fabric-moth sources, and
            where the food sources are silent this page says they are silent.
          </strong>
        </p>
      </div>
      <p>
        <strong>What a pantry infestation looks like.</strong> UC IPM:{' '}
        <em>
          &ldquo;Webbing in tight places of a package or tiny holes in a food container are signs of
          a pantry pest infestation.&rdquo;
        </em>
      </p>

      <h2 id="food-storage">Throwing Out, Then Storing</h2>
      <p>
        <strong>The order is disposal first.</strong> UC IPM:{' '}
        <em>&ldquo;Throw away any food that has evidence of infestation.&rdquo;</em> UF/IFAS:{' '}
        <em>&ldquo;Any susceptible food source should be placed in sealed containers.&rdquo;</em>
      </p>
      <p>
        <strong>UC IPM is specific about what a container has to be, and what it must not be:</strong>{' '}
        <em>
          &ldquo;Don&rsquo;t put exposed food on shelves. Place it in containers with tight-fitting
          lids; plastic bags aren&rsquo;t adequate.&rdquo;
        </em>{' '}
        And again in its own summary:{' '}
        <em>
          &ldquo;Store food and bulk goods like pet food in containers with tight-fitting lids, not
          plastic bags.&rdquo;
        </em>
      </p>
      <p>
        <strong>A category people miss.</strong> UF/IFAS:{' '}
        <em>
          &ldquo;Dog food and bird seed usually are overlooked as infestation sites, and these items
          should also be kept in sealed containers.&rdquo;
        </em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          On freezing, the stored-food sources give a duration and no temperature. That gap is real
          and is not filled here.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UF/IFAS:</strong>{' '}
          <em>
            &ldquo;Freezing the product for several days has proven to be an effective control
            measure. Heating in an oven or microwave also kills larvae and eggs.&rdquo;
          </em>{' '}
          <strong>No temperature is stated, for either the freezing or the heating</strong>, and UC
          IPM&rsquo;s Pantry Pests page carries no temperature figure at all.{' '}
          <strong>
            The fabric-moth section above does give a freezing temperature, and that figure is about
            a different insect from a different publication. It is not carried across into this
            section, and a reader should not carry it across either.
          </strong>
        </p>
      </div>
      <p>
        The three containers below state a tight-fitting or sealing lid in their own text, not merely
        in the product name. They are in no order of preference.
      </p>
      {B1.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="food-traps">Pantry-Moth Pheromone Traps</h2>
      <p>
        <strong>UC IPM:</strong> <em>&ldquo;Use a pheromone trap labeled for pantry pests.&rdquo;</em>{' '}
        And on where they are found and what they will not replace:{' '}
        <em>
          &ldquo;Pheromone traps are available in many retail stores to monitor and trap Indian meal
          moths and other pantry pests. Insecticides aren&rsquo;t recommended for any of the pantry
          pests.&rdquo;
        </em>
      </p>
      <p>
        <strong>And on how long to keep using them:</strong>{' '}
        <em>
          &ldquo;Pantry pests can live for many weeks without food; continue using pheromone traps to
          detect pests after the source of the infestation has been removed.&rdquo;
        </em>
      </p>
      <p>
        All three traps below state a pheromone and name a stored-food moth in their own text. None
        of them is a clothes-moth trap, and none of the clothes-moth traps above is a substitute for
        one of these.
      </p>
      {B2.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="food-insecticide">Insecticides: Two Sources, Two Positions</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two extension services, two different positions, rendered as two.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM:</strong>{' '}
          <em>&ldquo;Insecticides are not recommended for controlling pantry pests.&rdquo;</em>
          <br />
          <strong>UF/IFAS:</strong>{' '}
          <em>
            &ldquo;Numerous insecticides have been used to control Indianmeal moth populations, but
            effectiveness is limited.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          One says not recommended; the other says used, with limited effect. This page has no basis
          for preferring one publisher over the other and does not pretend to. Neither is adjusted to
          fit the other, and no insecticide product is named on this page.
        </p>
      </div>
      <p>
        <strong>One development figure from the stored-food side, kept apart on purpose.</strong>{' '}
        UF/IFAS:{' '}
        <em>
          &ldquo;The larvae can complete their development in six to eight weeks at temperatures
          ranging from 18 to 35&deg;C (64.4 to 95&deg;F).&rdquo;
        </em>{' '}
        <strong>
          That counts a different insect from the 35 days to 2 1/2 years quoted in the fabric section,
          which is about clothes moth larvae. The two figures are not a range and not a disagreement.
          They are measurements of two different animals and they never sit side by side.
        </strong>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the publications below, all fetched on
        28 August 2026. Where a source suppresses its own publication date in markup that does not
        render, that is stated rather than the hidden date being cited.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
