import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import UsComparisonTable, { type ComparisonRow } from '../components/UsComparisonTable';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { GOPHER_NAV, GOPHER_HOME } from '../components/gopherNav';

const URL = 'https://pestproindex.com/us/best-gopher-traps';
const TITLE = 'Gopher Traps: What the Evidence Actually Supports';
const DESCRIPTION =
  'Extension sources agree on two trap mechanisms and on where to set them. One extension trial compared three models. Here is what it measured, what it did not, and what you can buy.';

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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-08-21',
  dateModified: '2026-08-21',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Gopher Traps', item: URL }],
};

// ---------------------------------------------------------------------------
// C2 PRODUCT RECORDS — the single source of truth for every product on this page.
//
// PATTERN INHERITED FROM app/best/woodworm-treatments/page.tsx (the S32 R7 C2
// pilot): one record array, every render site derived from it, so a product
// cannot appear on the page with a name the record does not carry.
//
// TWO FIELDS OF THE UK ProductRecord ARE DELIBERATELY ABSENT: `rank` and
// `cardLabel`. On the UK /best pages those carry an ordinal and an award bar
// ("Best Treatment Fluid"). UsToolCard accepts neither prop, and this round's
// ruling bars both outright, so carrying them would be dead weight that invites
// a future editor to render them. `mechanism` replaces them: products are
// grouped by how they work, which is what the evidence describes.
//
// EVERY ASIN BELOW WAS VERIFIED 2026-08-21 by the S35 R6 method: a rendered
// fetch returning the exact product title, AND a direct request to
// amazon.com/dp/<ASIN> returning HTTP 200 with no "Currently unavailable"
// sentence in the body. `titleAsFetched` is copied from the fetched <title>.
// ---------------------------------------------------------------------------

type Mechanism = 'pincer' | 'box';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  mechanism: Mechanism;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B00004RA58',
    cardName: 'Macabee Gopher Trap',
    titleAsFetched: 'Amazon.com : Macabee Gopher Trap MGT : Rodent Traps : Patio, Lawn & Garden',
    mechanism: 'pincer',
    whatItDoes: [
      'Two-pronged pincer trap — the type UC IPM lists first among lethal gopher traps',
      'Triggered when the gopher pushes against a flat, vertical pan or metal wire',
      'The model named in the Utah State University trial described further up this page',
      'Set in the main tunnel, in pairs facing opposite directions',
    ],
  },
  {
    asin: 'B09CN7WRKM',
    cardName: 'Gophinator Gopher Trap, 2-pack',
    titleAsFetched:
      'Amazon.com : Gophinator Gopher Trap 2-Pack Stainless Steel Construction Made in USA : Patio, Lawn & Garden',
    mechanism: 'pincer',
    whatItDoes: [
      'Two-pronged pincer trap, the same mechanism as the Macabee',
      'UC IPM states this type can be more effective than the Macabee on larger, mature gophers',
      'Sold as a pair, which matches the extension instruction to set two traps per tunnel',
      'Stainless steel construction per the manufacturer listing',
    ],
  },
  {
    asin: 'B09D3TVG1Y',
    cardName: 'Gophinator Gopher Trap, 4-pack',
    titleAsFetched: 'Amazon.com : Gophinator Gopher Trap 4-Pack : Patio, Lawn & Garden',
    mechanism: 'pincer',
    whatItDoes: [
      'The same pincer trap as the 2-pack, supplied as four',
      'Extension sources advise setting traps in as many active tunnels as you find',
      'Four traps covers two tunnels set correctly, rather than one',
      'No performance difference from the 2-pack is claimed here — it is a quantity',
    ],
  },
  {
    asin: 'B0F8R94HTX',
    cardName: 'Gophinator Heavy-Duty Gopher Trap, 2-pack',
    titleAsFetched:
      'Amazon.com : The Gophinator – Heavy-Duty Gopher Trap 2 Pack : Patio, Lawn & Garden',
    mechanism: 'pincer',
    whatItDoes: [
      'Two-pronged pincer trap listed by the seller as a heavy-duty build',
      'We have found no controlled test comparing this listing against the other Gophinator listings',
      'Named here because it is a distinct listing of the same mechanism',
      'Set exactly as the other pincer traps: main tunnel, paired, staked',
    ],
  },
  {
    asin: 'B002J89XYA',
    cardName: 'Cinch Gopher Trap Kit',
    titleAsFetched:
      'Amazon.com : Cinch Gopher Trap Kit, Professional-Grade, Heavy-Duty Reusable Trap : Patio, Lawn & Garden',
    mechanism: 'box',
    whatItDoes: [
      'Cinch-style trap — the third model in the Utah State University trial',
      'Sits in the tunnel and closes across it, rather than gripping from a pan trigger',
      'In that trial it was not the most time-efficient of the three; the figures are above',
      'Supplied as a kit by the seller',
    ],
  },
  {
    asin: 'B0CMW22ZPX',
    cardName: 'Cinch Sure Catch Mole and Gopher Traps, 3-pack',
    titleAsFetched:
      'Amazon.com : 3 Cinch Sure Catch Mole and Gopher Traps - Small Size 2 Inch Tunnel : Patio, Lawn & Garden',
    mechanism: 'box',
    whatItDoes: [
      'Cinch-style trap sold in a three-pack, sized by the seller for a 2-inch tunnel',
      'Gopher tunnels are reported at 1¾ to 3½ inches across, so check your tunnel before buying a size',
      'Sold for both moles and gophers; the two animals need different placement',
      'Listed here as a size option, not as a recommendation over the kit above',
    ],
  },
];

// ---------------------------------------------------------------------------
// REJECTED — kept in the record, never rendered.
//
// This array is the audit trail for products considered and not carded. It is
// exported to nothing and rendered nowhere by design: this round's ruling is
// that the REASON for a rejection belongs in the record, not on the page.
// ---------------------------------------------------------------------------
const REJECTED_PRODUCTS: { asin: string; titleAsFetched: string; reason: string }[] = [
  {
    asin: 'B09ZK6Y4W7',
    titleAsFetched:
      'Amazon.com : Worlds Best Gopher Trap, New, Stainless Steel, (3 Pack) USA Made! : Patio, Lawn & Garden',
    reason:
      'ASIN verifies clean (HTTP 200, title confirmed, not unavailable). REJECTED because the product name itself contains the superlative "Worlds Best". Carding it would render an award bar inside a product title, which the estate bars without stated evidence, and no extension source names this trap type at all.',
  },
  {
    asin: 'B00KZJG4JC',
    titleAsFetched: 'Amazon.com : Cinch Gopher Trap Deluxe Kit - Medium (3 Packs) : Patio, Lawn & Garden',
    reason:
      'HTTP 200 and title confirmed, but the body carries "Currently unavailable. We don\'t know when or if this item will be back in stock." UNAVAILABLE is not DEAD: it needs waiting, not re-sourcing. Not carded because a reader cannot buy it.',
  },
  { asin: 'B0F8WBHWTB', titleAsFetched: 'Page Not Found', reason: 'HTTP 404 — dead listing.' },
  { asin: 'B0009PURDU', titleAsFetched: 'Page Not Found', reason: 'HTTP 404 — dead listing.' },
  { asin: 'B000BX4RWK', titleAsFetched: 'Page Not Found', reason: 'HTTP 404 — dead listing.' },
  { asin: 'B004H8AGWY', titleAsFetched: 'Page Not Found', reason: 'HTTP 404 — dead listing.' },
];
void REJECTED_PRODUCTS;

const pincerProducts = products.filter((p) => p.mechanism === 'pincer');
const boxProducts = products.filter((p) => p.mechanism === 'box');

const comparisonRows: ComparisonRow[] = [
  {
    mechanism: 'A probe (homemade)',
    howItWorks:
      'A blunt rod pushed into the soil beside a fresh mound until it drops into the tunnel below. Texas A&M AgriLife Extension says a probe can be made from a bluntly pointed broom or shovel handle.',
    indoorOutdoor: 'Beside a fresh mound, before any trap is set',
    evidence:
      'Not a trap and it catches nothing. It is on this list first because every extension source makes trap placement conditional on finding the main tunnel, and this is how you find it.',
  },
  {
    mechanism: 'Two-pronged pincer trap',
    howItWorks:
      'Set inside the tunnel. UC IPM describes the gopher triggering it when it pushes against a flat, vertical pan or metal wire.',
    indoorOutdoor: 'Main tunnel, in pairs facing opposite directions',
    evidence:
      'The type UC IPM lists first. Three named models were compared in one Utah State University trial, with the figures given above. UC IPM separately states the Gophinator type can be more effective than the Macabee on larger, mature gophers.',
  },
  {
    mechanism: 'Choker-style box trap',
    howItWorks:
      'A boxed trap set into the tunnel. UC IPM names it as the other common type alongside pincer traps, and notes box traps require more surface excavation to install.',
    indoorOutdoor: 'Main tunnel',
    evidence:
      'Named by UC IPM as a common type. The Utah trial did not test a choker box, so no comparative figure applies to it here.',
  },
  {
    mechanism: 'Buried mesh or a wire basket',
    howItWorks:
      'A physical barrier rather than a trap. UC IPM describes baskets of light-gauge, non-galvanized steel wire for individual plants; Utah State describes a buried mesh fence.',
    indoorOutdoor: 'Around a bed, a bulb planting or a single plant',
    evidence:
      'Both sources state its limit rather than selling it: UC IPM says persistent gophers can burrow below the wire, and Utah State calls exclusion very costly and usually impractical.',
  },
  {
    mechanism: 'Repellents and noise devices',
    howItWorks:
      'Marketed as driving gophers away by smell, vibration or ultrasound.',
    indoorOutdoor: 'Sold for placement in the lawn',
    evidence:
      'UC IPM: no repellents have proven effective, and these rodents don’t frighten easily. New Mexico State: no registered repellents, and noise-making devices have not been proven effective. Nothing is carded on this page for this row.',
  },
];

const faqs: Faq[] = [
  {
    question: 'Which gopher trap works best?',
    answer:
      'We are not going to rank them, because the evidence does not support a ranking. One extension trial exists: Utah State University compared Macabee, DK-1 and Cinch traps in four alfalfa fields outside Beaver, Beaver County, Utah, in 2015. It reported Macabee traps were more time efficient than the DK-1 or Cinch traps, at KW X2 = 10.2, df=2, P = 0.006, and more effective per animal visit at KW X2 = 7.12, df= 2, P = 0.03. The same trial reported Macabee traps were also tripped or plugged more often, at KW X2 = 6.05, df = 2, P = 0.048. The authors state their sample size was small and treat P at or below 0.05 as different. That is one trial, in alfalfa, on one species, in one county. It supports a description; it does not support a league table.',
  },
  {
    question: 'Where do I put the trap?',
    answer:
      'In the main tunnel, not the lateral one running to the mound. UC IPM states that setting in the lateral is not as successful as in the main burrow, and New Mexico State Extension says greater success will usually be achieved by trapping in the main runway. Find the main tunnel by probing beside a fresh mound: UC IPM describes the feel as a sudden, noticeable drop of about 2 inches. Texas A&M gives the distance as 6 to 8 inches from the mound, on the side where the horseshoe-shaped depression is, and says to set two traps, one in each direction from the hole.',
  },
  {
    question: 'Do I need to wear gloves so the gopher cannot smell me?',
    answer:
      'Not for that reason. UC IPM states there is no impact of human scent on trapping success. Wear gloves if you want to keep your hands clean or protected; do not skip a set because you touched the trap.',
  },
  {
    question: 'When is the best time of year to trap?',
    answer:
      'Gophers do not stop. UC IPM states gophers don’t hibernate and are active year-round. What changes is how visible they are: Utah State University reports gophers are usually most active in the spring and fall, and New Mexico State says trapping is most effective when gophers are pushing up new mounds, usually in spring and fall. Fresh mounds are the signal, in any month.',
  },
  {
    question: 'Is it legal to trap a gopher, and can I release it somewhere else?',
    answer:
      'It depends on your state, and releasing it elsewhere is the part people get wrong. In California, the Fish and Game Code provides that nongame mammals injuring growing crops or other property may be taken at any time or in any manner by the owner or tenant of the premises, and UC IPM states a trapping license is not required for gopher removal. California’s separate restriction on body-gripping traps applies to trapping for the purposes of recreation or commerce in fur, which is a different purpose from a property owner controlling damage. In Washington, the state Department of Fish and Wildlife states pocket gophers are unclassified and may be trapped or killed, but that a special trapping permit is required for the use of all traps other than live traps, and that it is unlawful to release a pocket gopher anywhere within the state other than where it was legally trapped without a permit. Washington also has a state threatened pocket gopher in four counties where lethal control is not permitted. We have checked two states. Check yours.',
  },
  {
    question: 'Will a repellent or a sonic stake save me the trouble?',
    answer:
      'On the extension evidence, no. UC IPM states plainly that no repellents have proven effective, and on vibrating stakes, ultrasonic devices and pinwheels that these rodents don’t frighten easily. New Mexico State Extension reports no registered repellents and says noise-making devices and plants reported to repel pocket gophers have not been proven effective. That is why no product on this page is a repellent.',
  },
  {
    question: 'Can I just fence them out instead?',
    answer:
      'Partly, and both sources that describe it also describe its limit. UC IPM specifies wire baskets of light-gauge, non-galvanized steel wire for individual plants, and says underground fencing is not perfect because persistent gophers can burrow below the wire. Utah State University describes a buried mesh fence but states that excluding pocket gophers can be very costly and is usually impractical. Washington’s wildlife department puts it most bluntly: a below-ground barrier only slows them, and sooner or later the barrier will be breached. Exclusion protects a bed or a single tree. It does not clear a yard.',
  },
];

const sources: Source[] = [
  {
    label: 'Pocket Gophers — Home and Landscape (Pest Notes, UC ANR Publication 7433)',
    publisher: 'UC Statewide IPM Program, University of California (R.A. Baldwin, UC Davis)',
    date: 'Updated 06/2025',
    href: 'https://ipm.ucanr.edu/home-and-landscape/pocket-gophers/',
  },
  {
    label: 'Pocket Gophers',
    publisher: 'Utah State University Extension',
    date: 'July 2024',
    href: 'https://extension.usu.edu/crops/research/pocket-gophers',
  },
  {
    label:
      'Comparison of Three Traps Used for Pocket Gopher Management (Thomomys bottae) in Alfalfa Fields',
    publisher: 'Utah State University Extension (S. Nicole Frey and Mark Nelson)',
    date: 'October 2016',
    href: 'https://extension.usu.edu/crops/research/comparison-of-three-traps-used-for-pocket-gopher-management-in-alfalfa-fields',
  },
  {
    label: 'Managing Pocket Gopher Damage (L-1904)',
    publisher: 'Texas A&M AgriLife Extension Service — Wildlife Services',
    date: 'June 2013',
    href: 'https://agrilifeextension.tamu.edu/wp-content/uploads/2025/07/Managing-pocket-gopher-damagepublication.pdf',
  },
  {
    label: 'Controlling Pocket Gophers in New Mexico (Guide L-109)',
    publisher: 'New Mexico State University Cooperative Extension Service (Jon C. Boren)',
    date: 'March 2005',
    href: 'https://pubs.nmsu.edu/_l/L109/index.html',
  },
  {
    label: 'Controlling pocket gopher damage to agricultural crops (EC 1117)',
    publisher: 'Oregon State University Extension Service (W.D. Edge and J.P. Loegering)',
    date: 'Reprinted May 1999',
    href: 'https://smallfarms.oregonstate.edu/sites/agscid7/files/pocket-gophers-ec1117.pdf',
  },
  {
    label: 'Living with wildlife: Pocket gophers',
    publisher: 'Washington Department of Fish and Wildlife',
    date: 'Accessed August 2026',
    href: 'https://wdfw.wa.gov/species-habitats/living/species-facts/pocket-gophers',
  },
  {
    label: 'Fish and Game Code § 4152 (nongame mammals injuring crops or property)',
    publisher: 'California Legislative Information',
    date: 'Accessed August 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4152',
  },
  {
    label: 'Fish and Game Code § 3003.1 (body-gripping traps)',
    publisher: 'California Legislative Information',
    date: 'Accessed August 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=3003.1',
  },
];

const tocItems = [
  { id: 'headline', title: 'The Short Answer' },
  { id: 'the-tunnel', title: 'Find the Main Tunnel First' },
  { id: 'mechanisms', title: 'Trap Mechanisms Compared' },
  { id: 'the-trial', title: 'What One Trial Measured' },
  { id: 'pincer', title: 'Pincer Traps' },
  { id: 'box', title: 'Cinch-Style Traps' },
  { id: 'exclusion', title: 'Fencing Instead of Trapping' },
  { id: 'no-work', title: 'What Does Not Work' },
  { id: 'legal', title: 'The Legal Position' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function BestGopherTrapsPage() {
  return (
    <UsPageLayout
      title="Gopher Traps"
      subtitle="Every extension source we read makes the trap conditional on the placement, and the tool that decides the outcome is a blunt stick most sheds already hold. One trial compared three models; we give its figures and its limits rather than a ranking."
      lastUpdated="August 2026"
      readingTime="9 min"
      tocItems={tocItems}
      homeHref={GOPHER_HOME}
      clusterNav={GOPHER_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <h2 id="headline">The Short Answer</h2>
      <p>
        A blunt broom handle, and the patience to find the main tunnel with it before you set
        anything.
      </p>
      <p>
        That is not a way of avoiding the question. Every extension source we read makes trap
        success conditional on placement: UC IPM states that setting a trap in the lateral tunnel
        is <strong>not as successful as in the main burrow</strong>, and New Mexico State Extension
        says <strong>greater success will usually be achieved by trapping in the main runway</strong>.
        Texas A&amp;M AgriLife Extension notes that a probe can be made from a bluntly pointed
        broom or shovel handle. The trap you buy matters less than the hole you put it in.
      </p>
      <p>
        We have set the page out in that order: the tunnel, then the mechanisms, then the one
        trial that compared models, then the traps themselves. A ranking of brands is not
        included, because the evidence supports a description and not a league table.
      </p>

      <h2 id="the-tunnel">Find the Main Tunnel First</h2>
      <p>
        Gophers push soil out of short lateral tunnels, so the mound is not above the tunnel that
        matters. The main runway is off to one side.
      </p>
      <ul>
        <li>
          <strong>Work from a fresh mound.</strong> Texas A&amp;M describes the mound as horseshoe
          shaped, roughly 8 to 24 inches across, with the hole plugged and set to one side.
        </li>
        <li>
          <strong>Probe beside it.</strong> Texas A&amp;M gives 6 to 8 inches from the mound, on
          the side where the horseshoe-shaped depression is.
        </li>
        <li>
          <strong>Feel for the drop.</strong> UC IPM describes it as a sudden, noticeable drop of
          about 2 inches as the probe breaks through into the tunnel.
        </li>
        <li>
          <strong>Set two traps, not one.</strong> Texas A&amp;M says to place two traps, one in
          each direction from the hole. UC IPM gives the same instruction as setting traps in
          tunnels in pairs facing each other.
        </li>
        <li>
          <strong>Know the depth you are looking for.</strong> UC IPM puts feeding burrows 6 to 12
          inches below ground; Utah State University gives the main tunnel as 4 to 18 inches below
          the surface.
        </li>
      </ul>
      <p>
        One thing you can stop worrying about: UC IPM states there is{' '}
        <strong>no impact of human scent on trapping success</strong>. Gloves are for your hands,
        not for the gopher.
      </p>

      <h2 id="mechanisms">Trap Mechanisms Compared</h2>
      <p>
        As on our other trap pages, the rows are <strong>mechanisms rather than brands</strong>.
        The last column says what is actually known about each, including the rows where the
        answer is that nothing has been measured.
      </p>

      <UsComparisonTable
        caption="Gopher trap mechanisms and the evidence available for each, as of August 2026."
        rows={comparisonRows}
      />

      <h2 id="the-trial">What One Trial Measured</h2>
      <p>
        There is one comparative trial we could source, and it is worth reading carefully because
        it is narrower than its headline sounds.
      </p>
      <p>
        Utah State University Extension published it in{' '}
        <AsOf date="2016">
          October 2016, authored by S. Nicole Frey and Mark Nelson
        </AsOf>
        . In the authors&rsquo; own words: in 2015, they compared the effectiveness and efficiency
        of several types of kill traps &mdash; Macabee, DK-1, and Cinch. The study was conducted in
        Beaver County, Utah, and they had a sample of four fields, each located outside Beaver.
      </p>
      <p>What it reported, with each figure attached to the claim it belongs to:</p>
      <ul>
        <li>
          <strong>Time efficiency.</strong> Macabee traps were more time efficient than the DK-1 or
          Cinch traps, based on animals trapped per minute spent in the field
          (KW X2 = 10.2, df=2, P = 0.006).
        </li>
        <li>
          <strong>Effectiveness per visit.</strong> Macabee traps were more effective &mdash;
          animals caught per animal visit to the trap &mdash; than the other trap types
          (KW X2 = 7.12, df= 2, P = 0.03).
        </li>
        <li>
          <strong>The trade-off.</strong> The same traps were also tripped or plugged
          statistically more than the other two (KW X2 = 6.05, df = 2, P = 0.048). A trap that
          attracts more attention gets set off without a catch more often too.
        </li>
      </ul>
      <p>
        And the limits, which the authors state themselves. Because their sample size was small
        they used a Kruskal-Wallace Rank Sum Test, and treated comparisons as statistically
        different at a probability of 0.05 or below. Four fields, six weeks from the first week of
        April, one county, one crop, and <em>Thomomys bottae</em> in alfalfa &mdash; not a lawn.
      </p>
      <p>
        Set against that, UC IPM states that the Gophinator trap can be more effective than the
        Macabee in catching larger, mature gophers. Two extension sources, two different measures,
        no contradiction between them, and we are not going to crown one. That is the honest state of the
        evidence, and it is why the sections below are grouped by how a trap works rather than
        ordered first to last.
      </p>

      <h2 id="pincer">Pincer Traps</h2>
      <p>
        UC IPM describes these as 2-pronged pincer traps, and says the gopher triggers one when it
        pushes against a flat, vertical pan or metal wire. This is the mechanism named first in
        the extension literature and the one two of the three trial models belong to.
      </p>

      {pincerProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="box">Cinch-Style Traps</h2>
      <p>
        The other mechanism sits in the tunnel and closes across it. UC IPM names the choker-style
        box trap as the other common type, and notes box traps require more surface excavation to
        install than pincer traps &mdash; which matters in a lawn. The Cinch was the third model in
        the Utah trial.
      </p>

      {boxProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <p>
        <strong>What we checked and did not include.</strong> Six further listings were fetched
        while writing this page and none is named here. Four were dead pages, one was marked
        currently unavailable, and one was excluded on our own editorial rules. A trap you cannot
        buy is not an option, and a listing we exclude is not one we quietly link anyway.
      </p>

      <h2 id="exclusion">Fencing Instead of Trapping</h2>
      <p>
        Exclusion is the non-lethal option and every source that describes it also describes where
        it stops.
      </p>
      <ul>
        <li>
          <strong>For a single plant.</strong> UC IPM specifies wire baskets of light-gauge,
          non-galvanized steel wire, installed when the plant goes in.
        </li>
        <li>
          <strong>For a bed.</strong> Utah State University describes a buried mesh fence, but
          states that excluding pocket gophers can be very costly and is usually impractical.
        </li>
        <li>
          <strong>The limit, stated by the sources themselves.</strong> UC IPM says underground
          fencing is not perfect because persistent gophers can burrow below the wire. Washington
          Department of Fish and Wildlife is blunter: a below-ground barrier only slows them, and
          sooner or later the barrier will be breached.
        </li>
      </ul>
      <p>
        Read that as scope rather than as failure. A basket around a young tree is a reasonable
        thing to install. A fence around a yard is a large bill for a delay.
      </p>

      <h2 id="no-work">What Does Not Work</h2>
      <p>
        This section exists because the shelf next to the traps is full of things the extension
        literature has already tested.
      </p>
      <ul>
        <li>
          <strong>Repellents.</strong> UC IPM: no repellents have proven effective. New Mexico
          State Extension: no registered repellents.
        </li>
        <li>
          <strong>Vibrating stakes, ultrasonic devices and pinwheels.</strong> UC IPM&rsquo;s
          reasoning is that these rodents don&rsquo;t frighten easily. New Mexico State says
          noise-making devices and plants reported to repel pocket gophers have not been proven
          effective.
        </li>
        <li>
          <strong>Bait placed behind the trap.</strong> UC IPM reports that UC Davis researchers
          have observed no such benefit.
        </li>
        <li>
          <strong>Gas cartridges.</strong> Utah State University states that because of their
          higher cost and inconsistent effectiveness, gas cartridges are not recommended.
        </li>
      </ul>

      <h2 id="legal">The Legal Position</h2>
      <p>
        Two states, checked against primary sources. Yours may differ and this is not legal advice.
      </p>
      <p>
        <strong>California.</strong> The Fish and Game Code provides that nongame mammals found to
        be injuring growing crops or other property may be taken at any time or in any manner, by
        the owner or tenant of the premises. UC IPM adds that a trapping license is not required
        for gopher removal. California also restricts body-gripping traps, but the restriction is
        written by purpose: the code makes it unlawful to trap for the purposes of recreation or
        commerce in fur with such a trap, and it expressly provides that cage and box traps, nets,
        suitcase-type live beaver traps, and common rat and mouse traps shall not be considered
        body-gripping traps. A property owner controlling damage is not trapping for recreation or
        for commerce in fur. Whether any particular trap design falls inside the statutory
        definition is a legal question the code does not answer for you.
      </p>
      <p>
        <strong>Washington.</strong> The Department of Fish and Wildlife states pocket gophers are
        unclassified and may be trapped or killed, but that a special trapping permit is required
        for the use of all traps other than live traps. It also states that it is unlawful to
        release a pocket gopher anywhere within the state other than on the property where it was
        legally trapped, without a permit. And the Mazama pocket gopher of four counties is state
        threatened, where lethal control is not permitted at all.
      </p>
      <p>
        The relocation point is the one worth carrying away, because it is the opposite of what
        most people assume is the kind option: catching an animal alive and driving it elsewhere
        can be the illegal act, not the humane one.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
