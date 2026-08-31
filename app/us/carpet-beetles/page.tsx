import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { CARPETBEETLES_NAV, CARPETBEETLES_HOME } from '../components/carpetBeetlesNav';

const URL = 'https://pestproindex.com/us/carpet-beetles';
const TITLE = 'Carpet Beetles: What Stops the Fabric Damage';
const DESCRIPTION =
  'Fourteen extension publications on carpet beetles: why cleaning and exclusion come first, four freezing figures that disagree, and the narrow set of products supported.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Carpet Beetles', item: URL }],
};

// ---------------------------------------------------------------------------
// FOUR CARDS ACROSS TWO CLASSES. THREE CLASSES CARD NOTHING, EACH FOR ITS OWN
// REASON, AND THE REASONS ARE NOT INTERCHANGEABLE.
//
// Titles are the fetched product titles, verbatim, from the S52 R3 fetch report,
// EXCEPT B00KL7VPWO, whose title comes from the identity bank — it was already
// carded on two other routes, is banked MEETS and inside freshness, and was
// deliberately not re-fetched. That substitution is declared in the round report.
//
//   CB2 sealing container   2 cards. The IRIS 46 Qt and 47 Qt are one product line
//                           in two sizes and are ONE card under S47-H; the
//                           Sterilite 54 Qt is a route addition under S45-C with
//                           the same name it carries elsewhere and fresh copy.
//   CB3(a) pheromone trap   2 cards. Both state a pheromone AND name the pest.
//
// CARDS NOTHING:
//   vacuums                 Two sources require a disposable bag. That is a
//                           practice, not a product property. No criterion.
//   unbaited sticky traps   The class is defined by the ABSENCE of a pheromone,
//                           and a listing's silence cannot evidence an absence.
//                           UC IPM's windowsill guidance still renders below, as
//                           advice, with no product attached to it.
//   insecticides            Sourced fact only. UC IPM states that where exclusion
//                           and sanitation succeed, insecticide is not required.
//
// ONE CANDIDATE WAS CHECKED AND FAILED ON ITS OWN TEXT, and one on the difference
// between a pheromone and an unspecified scent. Neither is named on this page.
// ---------------------------------------------------------------------------

type ProductGroup = 'container' | 'trap';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B084DY21D6',
    cardName: 'IRIS USA WeatherPro Storage Bin, 47 Quart, Gasket Seal, 2-Pack',
    titleAsFetched: 'IRIS USA WeatherPro Storage Bins with Lids, 47 Qt, Gasket Seal, 2 Pack',
    group: 'container',
    whatItDoes: [
      'States the sealing property in its own words: the lid seals are described as creating a vacuum-like environment that locks out moisture and dust. Four of the fourteen sources on this page ask for an airtight container, and this is a listing that states the property rather than implying it',
      'States a latching mechanism as well as a seal — a multi-buckle system the listing says gives a tight and secure fit',
      'The same maker sells a 46 quart single box under ASIN B003OXNISG. It is the same line in a different size and pack count, so it is named here rather than listed separately',
      'The listing names clothes among the things it is sold to store. No source consulted tested this or any other container against a carpet beetle',
    ],
  },
  {
    asin: 'B00KL7VPWO',
    cardName: 'Sterilite 54 Quart Gasket Box, 4-Pack',
    titleAsFetched:
      'Sterilite 4-Pack 54 Quart Gasket Box, Home Storage Organizer Bins with Lids - Stackable Clear Plastic Containers for Bedroom, Bathroom, Garage, Basement, or Attic',
    group: 'container',
    whatItDoes: [
      'The only container checked whose own text uses the word airtight, and it pairs it with the mechanism: a gasketed seal plus hinged latch clips, which the listing says help block air, moisture, dust and pests',
      'A larger box than the one above, at 54 quarts, and sold in a four-pack',
      'Already named on two other pages of this site for the same physical job. What is new here is the reason, which is UC IPM’s storage sentence rather than anything about the product',
      'A caution the sources attach to storage generally: UC IPM says items must be pest-free BEFORE they go into the container. Sealing an infested item in seals the infestation in with it',
    ],
  },
  {
    asin: 'B0H2G1Q81W',
    cardName: 'INSECTRA Carpet Beetle Pheromone Trap, 6-Pack',
    titleAsFetched: 'Carpet Beetle Sticky Traps, Pheromone Lure & Capture Trap, 6-Pack',
    group: 'trap',
    whatItDoes: [
      'States a pheromone lure in its own text, describing target-specific attractants that draw beetles onto a sticky layer',
      'The only listing checked that names the beetles to species: its own text says it is optimised for adult varied and black carpet beetles. Two of the three species UC IPM names for California are varied and black carpet beetles',
      'The listing states six traps and six sealed attractant pouches, and gives a monitoring duration of up to three months',
      'This is a monitoring tool. UC IPM recommends pheromone-baited monitoring for commercial warehouses and storage areas; for homes it says sticky traps can be used where an infestation is serious. Those are different statements and this card does not merge them',
    ],
  },
  {
    asin: 'B0GYWHZ7NL',
    cardName: 'Mysora Carpet Beetle Traps with Pheromone, 48 Traps',
    titleAsFetched: '48 Carpet Beetle Traps with Pheromone',
    group: 'trap',
    whatItDoes: [
      'States a pheromone in its own text: the traps are described as infused with pheromone technology to draw in carpet beetles',
      'States the monitoring purpose rather than an eradication claim — its own text describes detecting activity and tracking where it is concentrated',
      'Twenty-four boards that separate into forty-eight smaller traps, per the listing',
      '⚠ The same brand sells a similar-looking 48-trap product whose own text says only that it carries a subtle scent attractant, and never says pheromone. That one is NOT this one and is not named here. If you are buying on the pheromone, check the listing says so',
    ],
  },
];

const tocItems = [
  { id: 'what', title: 'What They Are, and What They Damage' },
  { id: 'first', title: 'Cleaning and Exclusion Come First' },
  { id: 'heat-cold', title: 'Heat and Cold: Four Sources, Four Prescriptions' },
  { id: 'lifecycle', title: 'How Long They Live: the Figures Do Not Agree' },
  { id: 'storage', title: 'Storage Containers' },
  { id: 'traps', title: 'Traps, and the Three Different Things the Sources Say' },
  { id: 'insecticide', title: 'Insecticides: What the Sources Record' },
  { id: 'health', title: 'Skin and Allergy Reports' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Do I need an insecticide for carpet beetles?',
    answer:
      'UC IPM says not necessarily, in its own words: successful control depends on a combination of sanitation and exclusion, and if exclusion and sanitation are successful, insecticide treatments are not required. The same source adds that cleaning is always its preferred strategy, and that an insecticide is for an area or article you cannot dry clean or launder. This page follows that order, which is why most of it is about cleaning, laundering, storage and keeping the adults out, and why no insecticide product is named on it.',
  },
  {
    question: 'Does freezing kill them, and for how long?',
    answer:
      'Four sources give four different answers and this page gives all four rather than picking one. Colorado State says a deep freezer that can drop below 0 degrees Fahrenheit. The University of Arizona says a freezer for two weeks. UF/IFAS document IG089 says a chest freezer at minus 20 Fahrenheit for three days. UF/IFAS document IN873 says a minus 20 Fahrenheit freezer for three hours. The last two are the same institution, the same temperature and a twenty-four-fold difference in time, and neither is adjusted here to fit the other. Separately, the University of Maine gives 45 Fahrenheit or lower as cold storage for furs, which is a preservation measure rather than a way of killing anything, and it is not part of that comparison.',
  },
  {
    question: 'How long does a carpet beetle live?',
    answer:
      'It depends on the species and the source, and the published figures overlap without agreeing. UC IPM says varied carpet beetle larvae live 220 to 630 days before pupating. UF/IFAS IG089 gives the black carpet beetle 180 to 650 days, the common carpet beetle 77 to 110 days and the furniture carpet beetle 149 to 422 days. UF/IFAS IN145 gives that same furniture carpet beetle four to 12 months, which is a different range from the same institution. Colorado State says the most common dermestid beetles in homes complete an annual life cycle in a year. A 2023 peer-reviewed paper says the varied carpet beetle develops from larva to adult in one to three years depending on conditions. All of those are on this page, separately.',
  },
  {
    question: 'Will a pheromone trap solve an infestation?',
    answer:
      'No source consulted says so, and the sources scope the tool carefully. UC IPM recommends a monitoring programme using pheromone-baited sticky traps when carpet beetles threaten products in commercial warehouses or storage areas. For homes it says sticky traps can also be used where infestations are serious, and separately that sticky traps without a pheromone can be placed on windowsills to catch adults that fly to windows. Those are three different statements about three different situations, and none of them licenses the others. What every source puts first is cleaning, laundering and keeping the adults out.',
  },
  {
    question: 'Can carpet beetles hurt you?',
    answer:
      'Three sources report skin or allergic effects and none of them describes a disease. UF/IFAS document IN873 states that the common carpet beetle may also cause dermatitis, citing a 1967 reference by Cormia, when human skin comes in contact with shed larval skins. UF/IFAS document IN145 states that individuals in close association with infested items may suffer allergic reactions from exposure to beetle fragments, cast skins or dusts. Utah State reports that some larvae have arrow-like hairs that can cause skin and throat irritation and allergy-related symptoms. Those are reported here as those sources state them. Nothing on this page grades how serious any of them is, and no source consulted names a disease carried by these insects.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Carpet Beetles — the source of the sanitation and exclusion position, the statement of what the larvae feed on, the laundering instruction, the storage guidance, the pheromone and sticky-trap statements, the varied carpet beetle life-cycle figures and the insecticide framing',
    publisher: 'UC Statewide IPM Program',
    date:
      'Renders one date only, an update stamp of 04/2020. A January 2022 publication date exists in the page markup but is commented out and does not render, so it is not cited here. Re-fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/carpet-beetles/',
  },
  {
    label:
      'Carpet Beetles — the source of the registered active-ingredient list, the dry cleaning statement and the cold-storage figure for furs',
    publisher: 'University of Maine Cooperative Extension',
    date: 'Carries a 2016 copyright line and a reviewed/revised date of 2025; re-fetched 28 August 2026',
    href: 'https://extension.umaine.edu/ipm/ipddl/publications/5008e/',
  },
  {
    label: 'Carpet Beetles — the source of the routine dusting and vacuuming guidance and the sealed-container statement',
    publisher: 'National Pesticide Information Center, Oregon State University',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://npic.orst.edu/pest/carpetbeetle.html',
  },
  {
    label:
      'Clothes Moths and Carpet Beetles, E-18 — the source of the lint and hiding-place material. Its clothes moth content is not used on this page',
    publisher: 'Purdue Extension Entomology',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://www.extension.entm.purdue.edu/publications/E-18/E-18.html',
  },
  {
    label:
      'Dermestid Beetles (Carpet Beetles), Fact Sheet 5.549 — the source of the freezing and heat figures, the annual life-cycle statement, the vacuum-bag disposal instruction, the condition it places on insecticide use and the over-the-counter active-ingredient list. Quoted from the HTML rendering: the PDF rendering of the same fact sheet interleaves its two columns and cannot be quoted safely',
    publisher: 'Colorado State University Extension',
    date: 'Published January 2018, reviewed August 2025, labelled peer-reviewed by the publisher, by W.S. Cranshaw; re-fetched 28 August 2026',
    href: 'https://extension.colostate.edu/resource/dermestid-beetles-carpet-beetles/',
  },
  {
    label: 'Black carpet beetle — consulted for identification',
    publisher: 'University of Minnesota Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://apps.extension.umn.edu/garden/diagnose/insect/indoor/beetles/medium/blcarpetbeetle.html',
  },
  {
    label: 'Carpet Beetles — consulted for the food-storage sanitation guidance',
    publisher: 'Utah State University Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://extension.usu.edu/planthealth/ipm/notes_nuisance/carpet-beetles',
  },
  {
    label:
      'Carpet Beetles Pest Press fact sheet — the source of the larval-hair irritation report and the sticky-trap monitoring instruction. Its irritation sentence is paraphrased rather than quoted, because the PDF interleaves an image credit through the middle of it',
    publisher: 'Utah State University Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://extension.usu.edu/planthealth/structural-and-nuisance/files/pest-press-fact-sheets/pdf/carpet-beetles_pestpress.pdf',
  },
  {
    label: 'Carpet Beetle — the source of the laundering and air-tight storage statements',
    publisher: 'University of Illinois Extension',
    date: 'No date of any kind on the page, confirmed by re-fetch; re-fetched 28 August 2026',
    href: 'https://extension.illinois.edu/insects/carpet-beetle',
  },
  {
    label:
      'Indoor Pests — the source of the two-week freezing figure, the 120 degree heat figure, and the stored-product-pest life-cycle figure that is NOT about carpet beetles',
    publisher: 'University of Arizona Cooperative Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/barnesm/IndoorPests.pdf',
  },
  {
    label:
      'Carpet Beetles, ENY-204/IG089 — the source of the three-days freezing figure, the per-species life-cycle figures and the sticky fly paper statement',
    publisher: 'UF/IFAS Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://edis.ifas.ufl.edu/ig089',
  },
  {
    label:
      'Furniture Carpet Beetle, EENY019/IN145 — the source of the four-to-12-month furniture carpet beetle figure and the allergic-reaction report',
    publisher: 'UF/IFAS Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://edis.ifas.ufl.edu/in145',
  },
  {
    label:
      'Common Carpet Beetle, EENY482/IN873 — the source of the three-hours freezing figure and of the dermatitis report citing Cormia 1967',
    publisher: 'UF/IFAS Extension',
    date: 'Undated on the page; read 28 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in873',
  },
  {
    label:
      'The lethal and sterile doses of gamma radiation on the museums pest, varied carpet beetle, Anthrenus verbasci — the source of the one-to-three-year development figure',
    publisher: 'PLOS ONE via PubMed Central, PMC10562369, peer-reviewed',
    date: 'Published 2023; read 28 August 2026',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10562369/',
  },
];

export default function CarpetBeetlesPage() {
  return (
    <UsPageLayout
      title="Carpet Beetles"
      subtitle="Fourteen extension publications agree on what carpet beetles eat and disagree on almost every number attached to killing them. This page carries the disagreements as disagreements, puts cleaning and exclusion where the sources put them, and names four products against the two criteria the sources actually state."
      lastUpdated="August 2026"
      readingTime="16 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={CARPETBEETLES_HOME}
      clusterNav={CARPETBEETLES_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the beetles whose larvae eat wool, fur, feathers and other animal-based
        fibres, and about what fourteen university extension publications say to do about them.
      </p>

      <h2 id="what">What They Are, and What They Damage</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Carpet beetles can be found in homes, warehouses, museums, and anywhere else
          fabric, yarn, furs, and feathers are present. The larvae feed on a variety of animal
          products like wool, leather, and silk, often causing serious damage.&rdquo;
        </em>
      </p>
      <p>
        <strong>On how they arrive,</strong> UC IPM states that carpet beetles frequently fly
        into homes from flowers in the landscape. That sentence is quoted in full, in its own
        context, in the next section.
      </p>
      <p>
        <strong>UC IPM, on the evidence they leave:</strong>{' '}
        <em>
          &ldquo;Although carpet beetle larvae do not make webs as clothes moths do, their shed
          skins and fecal pellets, which are about the size of a grain of salt, make it obvious
          where they have been feeding.&rdquo;
        </em>
      </p>

      <h2 id="first">Cleaning and Exclusion Come First</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          The flagship source says in terms that products may not be needed at all.
        </p>
        <p className="mt-3 mb-0 text-base text-blue-900">
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;Successful control depends on a combination of sanitation and exclusion. If
            exclusion and sanitation are successful, insecticide treatments are not required.
            Carpet beetles frequently fly into homes from flowers in the landscape. A few adult
            beetles indoors should not be cause for alarm.&rdquo;
          </em>{' '}
          <strong>
            That is the order this page follows, and it is why most of what is below costs nothing.
          </strong>
        </p>
      </div>
      <p>
        <strong>UC IPM, on vacuuming:</strong>{' '}
        <em>
          &ldquo;Frequent, thorough vacuuming is an effective way of removing food sources as well
          as carpet beetle eggs, larvae, and adults.&rdquo;
        </em>{' '}
        And on what to do next:{' '}
        <em>
          &ldquo;After vacuuming infested areas, dispose of the bag promptly, because it can contain
          eggs, larvae, or adult insects.&rdquo;
        </em>
      </p>
      <p>
        <strong>Colorado State says the same thing about the bag, and says why:</strong>{' '}
        <em>
          &ldquo;Since dermestid beetles that are picked up during vacuuming may continue to develop
          within the collected material, the bags or containers should be disposed of if there is
          any chance that the insect may be able to escape.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          Two sources ask for a disposable bag, and no source consulted states any other property a
          vacuum would need. No vacuum is named on this page for that reason
        </strong>{' '}
        &mdash; a disposal habit is something you do, not something a product is.
      </p>
      <p>
        <strong>On laundering, four sources say much the same thing, and one of them calls it the
        single most important thing you can do.</strong>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;Thoroughly laundering washable items in hot water or dry cleaning them will kill
          all stages of these insects. This is the most important method for controlling fabric
          pests in clothing, blankets, and other washable articles.&rdquo;
        </em>{' '}
        Illinois:{' '}
        <em>
          &ldquo;Dry cleaning, washing, or the heated cycle of a clothes dryer for woolens will kill
          all stages of carpet beetles.&rdquo;
        </em>{' '}
        Maine:{' '}
        <em>
          &ldquo;Dry cleaning kills the pests in all stages of development; washing is also helpful,
          as is using a clothes dryer.&rdquo;
        </em>{' '}
        Colorado State:{' '}
        <em>
          &ldquo;Clothes dryers and dry-cleaning can be used to kill insects infesting clothing or
          fabrics.&rdquo;
        </em>
      </p>
      <p>
        <strong>Maine attaches a caution to the clothes dryer that the other three do not:</strong>{' '}
        <em>
          &ldquo;Remember that woolens are damaged by temperatures above 100&deg;F; temperatures in
          clothes dryers range from 160 to 210&deg;F.&rdquo;
        </em>{' '}
        <strong>
          The heat that kills the insect is above the heat that damages the fabric it is eating.
        </strong>{' '}
        Maine adds one instruction the others do not:{' '}
        <em>
          &ldquo;It is wise to treat, wash or dry clean second-hand clothes immediately upon bringing
          them home.&rdquo;
        </em>
      </p>

      <h2 id="heat-cold">Heat and Cold: Four Sources, Four Prescriptions</h2>
      <p>
        <strong>
          Every source that gives a freezing figure gives a different one. They are all here, and
          none is averaged or corrected against another.
        </strong>
      </p>
      <p>
        <strong>Colorado State:</strong>{' '}
        <em>
          &ldquo;Relatively small items infested with dermestid beetles can be placed in a deep
          freezer that can drop temperatures below 0&deg;F. Items consistently maintained at these
          low temperatures for three days or more can usually kill all stages of these
          insects.&rdquo;
        </em>{' '}
        On heat, the same source:{' '}
        <em>&ldquo;Exposure to above 130&deg;F for several hours can kill dermestid beetles.&rdquo;</em>
      </p>
      <p>
        <strong>University of Arizona:</strong>{' '}
        <em>
          &ldquo;Infested items can be placed in a freez- er for two weeks or heat-treat them at
          temperatures above 120 degrees F for 30 minutes.&rdquo;
        </em>{' '}
        <em>(the split in &ldquo;freez- er&rdquo; is a line break in the source PDF and is left as
        printed rather than closed up)</em>
      </p>
      <p>
        <strong>UF/IFAS, document IG089:</strong>{' '}
        <em>
          &ldquo;Infested materials should be placed in plastic bags and loosely packed in a chest
          freezer at -20&deg;F (-30&deg;C) for three days.&rdquo;
        </em>
      </p>
      <p>
        <strong>UF/IFAS, document IN873:</strong>{' '}
        <em>
          &ldquo;Goods can be placed in plastic bags and put in a -20&deg;F freezer for three hours
          or exposed to heat above 105&deg;F for four hours&rdquo;
        </em>
        , citing Koehler and others.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The last two are the same institution, disagreeing with itself.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          Both UF/IFAS documents give the same temperature, <strong>minus 20 Fahrenheit</strong>.
          One says <strong>three days</strong>; the other says <strong>three hours</strong>. That is
          a twenty-four-fold difference in the time, from one institution, and{' '}
          <strong>neither is adjusted here to fit the other.</strong> This page has no basis for
          preferring one document over the other and does not pretend to.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Colorado State is a third position, and it does not settle the question.</strong>{' '}
          Three of these sources state a sub-zero temperature together with a time: Colorado State
          gives three days or more below 0&deg;F, UF/IFAS IG089 gives three days at minus 20, and
          UF/IFAS IN873 gives three hours at minus 20.{' '}
          <strong>
            Three attributed positions, none of them picked, and none adjusted to fit the others.
          </strong>{' '}
          A third source agreeing more closely with one document than the other is not a finding
          that the other is wrong, and this page does not use one publisher to overrule another.
          The University of Arizona&rsquo;s two weeks is a fourth duration, but it names no
          temperature, so it is not part of that three-way comparison.
        </p>
      </div>
      <p>
        <strong>
          One figure that looks like it belongs in that list and does not.
        </strong>{' '}
        The University of Maine states that the optimum protection for valuable furs is cold
        storage, which it specifies as 45&deg;F or lower.{' '}
        <strong>
          That is long-term cold storage to preserve furs, not a temperature at which anything is
          killed
        </strong>
        , and it is not part of the comparison above.
      </p>

      <h2 id="lifecycle">How Long They Live: the Figures Do Not Agree</h2>
      <p>
        <strong>UC IPM, on the varied carpet beetle:</strong>{' '}
        <em>&ldquo;Varied carpet beetles typically lay 40 eggs which take 10 to 20 days to hatch.&rdquo;</em>{' '}
        <em>&ldquo;The larvae live for 220 to 630 days before pupating.&rdquo;</em>{' '}
        <em>&ldquo;They remain as pupae for 10 to 13 days before emerging as adults.&rdquo;</em>
      </p>
      <p>
        <strong>UF/IFAS IG089, per species:</strong>{' '}
        <em>&ldquo;The life cycle of carpet beetles can take from three months to two years.&rdquo;</em>{' '}
        <em>&ldquo;The black carpet beetle&rsquo;s life cycle is 180 to 650 days.&rdquo;</em>{' '}
        <em>&ldquo;The common carpet beetle&rsquo;s life cycle is 77 to 110 days.&rdquo;</em>{' '}
        <em>&ldquo;The furniture carpet beetle&rsquo;s life cycle is 149 to 422 days.&rdquo;</em>
      </p>
      <p>
        <strong>UF/IFAS IN145, on that same furniture carpet beetle:</strong>{' '}
        <em>&ldquo;The complete life cycle requires four to 12 months depending upon the temperature.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The same institution again, on the same species, with two different ranges.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          UF/IFAS document IG089 gives the furniture carpet beetle{' '}
          <strong>149 to 422 days</strong>. UF/IFAS document IN145 gives it{' '}
          <strong>four to 12 months</strong>. The ranges overlap but are not the same range, and{' '}
          <strong>neither is adjusted here to fit the other.</strong>
        </p>
      </div>
      <p>
        <strong>Colorado State, on the group as a whole:</strong>{' '}
        <em>
          &ldquo;The most common dermestid beetles in homes have an annual life cycle that is
          completed in a year.&rdquo;
        </em>
      </p>
      <p>
        <strong>And a peer-reviewed source from 2023, on the varied carpet beetle:</strong>{' '}
        <em>
          &ldquo;Anthrenus verbasci has an unusual life cycle for an insect, developing from larvae
          to adults in 1&ndash;3 years, depending on the environmental conditions.&rdquo;
        </em>
      </p>
      <p>
        Those are five accounts of how long a carpet beetle takes, from four institutions, and this
        page reports them separately rather than producing an average none of them published.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          One published figure counts a different population entirely, and it is kept out of the
          list above on purpose.
        </p>
        <p className="mt-3 mb-0 text-base text-red-900">
          The University of Arizona states:{' '}
          <em>
            &ldquo;Under optimum conditions, such as warm temperatures and high humidity, most
            stored product pests can complete a life cycle in just four to five weeks.&rdquo;
          </em>{' '}
          <strong>
            That sentence is about stored product pests as a group. It is not about carpet beetles.
          </strong>{' '}
          Every figure in the section above is measured on a named carpet beetle species; four to
          five weeks is measured on a category of insects that includes many that are not carpet
          beetles at all.{' '}
          <strong>
            Placing it beside them would suggest a four-week carpet beetle life cycle that no source
            on this page reports.
          </strong>
        </p>
      </div>

      <h2 id="storage">Storage Containers</h2>
      <p>
        <strong>Four sources ask for the same property, and they use the same word.</strong> UC
        IPM: <em>&ldquo;Store pest-free items in airtight containers.&rdquo;</em> NPIC:{' '}
        <em>
          &ldquo;Store attractive items like opened foods, fur coats and leather in sealed, airtight
          containers.&rdquo;
        </em>{' '}
        Illinois:{' '}
        <em>&ldquo;Store insect-free fabrics in plastic bags or other air-tight containers.&rdquo;</em>
      </p>
      <p>
        <strong>UC IPM sets out the whole procedure, and the order in it matters:</strong>{' '}
        <em>
          &ldquo;Protecting Items in Storage To properly store items that are susceptible to carpet
          beetles, first make sure the items are pest-free then place them in an airtight container,
          inserting a layer of paper every few inches.&rdquo;
        </em>{' '}
        <strong>
          Pest-free first, then sealed. A container that seals will seal an infestation in as
          readily as it keeps one out.
        </strong>
      </p>
      <p>
        <strong>Two things the sources say do NOT work for storage.</strong> UC IPM:{' '}
        <em>
          &ldquo;Generally, closets are not airtight and are opened too frequently to hold in
          vapors.&rdquo;
        </em>{' '}
        And on cedar, where two sources disagree: UC IPM says{' '}
        <em>
          &ldquo;Cedar chests are not reliable or effective at repelling pests and the oil dissipates
          ov[er time]&rdquo;
        </em>{' '}
        <em>(the source sentence is truncated in the fetched text; the completion is not quoted)</em>, while
        Illinois says{' '}
        <em>&ldquo;Cedar chests used for storage or woolens should be air-tight.&rdquo;</em>{' '}
        <strong>
          One treats the chest as unreliable, the other as usable provided it seals. Both are
          extension services and neither is corrected here.
        </strong>
      </p>
      <p>
        The two containers below are named because their own listings state that they seal. They are
        in no order of preference and neither is called better than the other, because no source
        consulted for this page compares one product against another.
      </p>
      {products
        .filter((p) => p.group === 'container')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h2 id="traps">Traps, and the Three Different Things the Sources Say</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          UC IPM makes three separate statements about traps. None of them licenses the others.
        </p>
        <ul className="mt-3 mb-0 space-y-2 text-base text-amber-900">
          <li>
            <strong>Commercial storage, and the only one it calls recommended:</strong>{' '}
            <em>
              &ldquo;When carpet beetles threaten products in commercial warehouses or storage
              areas, a monitoring program using sticky traps baited with an appropriate pheromone (a
              chemical attractant an organism produces to attract others of the same species) is
              recommended.&rdquo;
            </em>
          </li>
          <li>
            <strong>Homes, and conditional:</strong>{' '}
            <em>&ldquo;Sticky traps can also be used in homes where infestations are serious.&rdquo;</em>
          </li>
          <li>
            <strong>Windowsills, unbaited:</strong>{' '}
            <em>
              &ldquo;Sticky traps are also available without a pheromone; place these traps on
              windowsills to trap adults that fly to windows.&rdquo;
            </em>
          </li>
        </ul>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          A warehouse recommendation is not a household recommendation, and neither is advice to put
          a plain sticky trap on a windowsill.
        </p>
      </div>
      <p>
        <strong>No product is named for that third statement, and the reason is worth giving.</strong>{' '}
        The class UC IPM describes is defined by what it does <em>not</em> have &mdash; a pheromone.
        Listings state what a product contains, not what it lacks, so a listing that never mentions a
        pheromone has not told you it has none.{' '}
        <strong>
          We could not evidence that class from any listing, so the guidance is passed on here as
          advice with nothing attached to it.
        </strong>
      </p>
      <p>
        Two other sources describe trapping. UF/IFAS IG089:{' '}
        <em>
          &ldquo;Nonchemical Control Adult carpet beetles can be captured on sticky fly paper baited
          with animal products and/or appropriate pheromones.&rdquo;
        </em>{' '}
        Utah State:{' '}
        <em>
          &ldquo;Use sticky traps to monitor window sills and food storage areas for the presence of
          adults, larvae, and shed skins.&rdquo;
        </em>{' '}
        <strong>Both describe monitoring. Neither describes trapping as a way of ending an
        infestation.</strong>
      </p>
      <p>
        The two traps below both state a pheromone in their own text and both name the pest. They
        are monitoring tools, in no order of preference.
      </p>
      {products
        .filter((p) => p.group === 'trap')
        .map((p) => (
          <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
        ))}

      <h2 id="insecticide">Insecticides: What the Sources Record</h2>
      <p>
        <strong>
          No insecticide is named as a product on this page. What follows is what two sources
          record, attributed to them, and nothing here is a recommendation.
        </strong>
      </p>
      <p>
        <strong>The University of Maine states which actives are registered:</strong>{' '}
        <em>
          &ldquo;Insecticides that are registered for carpet beetle control are cyfluthrin,
          bifenthrin, deltamethrin, permethrin and tetramethrin.&rdquo;
        </em>{' '}
        <strong>
          That is Maine&rsquo;s statement. It does not say where those registrations apply, and this
          page does not extend it to any other state.
        </strong>
      </p>
      <p>
        <strong>Colorado State describes what is on retail shelves, which is a different claim:</strong>{' '}
        <em>
          &ldquo;Several over-the-counter insecticides that allow such use are sold through retail
          outlets and contain as the active ingredient either permethrin, bifenthrin, deltamethrin,
          cypermethrin, tralomethrin and/or related compounds.&rdquo;
        </em>
      </p>
      <p>
        <strong>The two lists are not the same list.</strong> Maine names cyfluthrin and
        tetramethrin, which Colorado State does not; Colorado State names cypermethrin and
        tralomethrin, which Maine does not.{' '}
        <strong>
          A statement about what is registered and a statement about what is on a shelf answer
          different questions, and they are given here as two.
        </strong>
      </p>
      <p>
        <strong>Colorado State attaches a condition to all of it, and the second sentence is the
        blunt one:</strong>{' '}
        <em>
          &ldquo;Insecticides should only be used in combination with efforts that provide a
          thorough cleanout of potential breeding sites and vacuuming/removal of existing insects.
          Alone they will not effectively manage dermestid beetles.&rdquo;
        </em>{' '}
        <strong>
          That is a statement about what insecticides cannot do on their own, reported here as
          Colorado State states it. It is not a recommendation to use one, and this page names no
          insecticide product.
        </strong>
      </p>

      <h2 id="health">Skin and Allergy Reports</h2>
      <p>
        <strong>
          Three sources report an effect on people. All three are reported here as those sources
          state them, and none is graded. No source consulted names a disease carried by these
          insects.
        </strong>
      </p>
      <p>
        <strong>UF/IFAS, document IN873:</strong>{' '}
        <em>
          &ldquo;The common carpet beetle may also cause dermatitis (Cormia 1967), when human skin
          comes in contact with shed larval skins.&rdquo;
        </em>{' '}
        <strong>
          The reference that source cites for it is dated 1967, and that date belongs with the
          claim.
        </strong>
      </p>
      <p>
        <strong>UF/IFAS, document IN145:</strong>{' '}
        <em>
          &ldquo;Additionally, individuals in close association with infested items may suffer
          allergic reactions as a result of exposure to beetle fragments, cast skins, or
          dusts.&rdquo;
        </em>
      </p>
      <p>
        <strong>Utah State</strong> reports that some carpet beetle larvae have arrow-like hairs
        that can cause skin and throat irritation and allergy-related symptoms.{' '}
        <em>
          (paraphrased rather than quoted: that sentence has a photo credit interleaved through the
          middle of it in the source PDF, so no contiguous quotation of it exists)
        </em>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the fourteen publications below. Where
        a source carries its own date, that date is given, and where a statement depends on the age
        of its evidence the date is repeated in the sentence itself.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
