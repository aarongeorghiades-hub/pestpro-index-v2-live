import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { MOLEVOLE_NAV, MOLEVOLE_HOME } from '../components/moleVoleControlNav';

const URL = 'https://pestproindex.com/us/mole-and-vole-control';
const TITLE = 'Mole and Vole Control: Traps, Castor Oil and Bait';
const DESCRIPTION =
  'What extension services actually publish about controlling moles and voles: a countable trapping criterion, a castor-oil repellent the research disagrees about, one general-use mole bait with its label warnings, and one class no homeowner may legally apply.';

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
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Mole and Vole Control', item: URL },
  ],
};

// ---------------------------------------------------------------------------
// PRODUCT RECORDS — the single source of truth for every product on this page.
//
// Pattern inherited from the /us gopher traps page: one record array,
// every render site derived from it, so a product cannot appear on the page
// under a name the record does not carry.
//
// IDENTITY PROVENANCE. Every ASIN below was identity-checked by direct fetch of
// amazon.com/dp/<ASIN> returning the product title copied verbatim into
// `titleAsFetched`. The three trap listings were checked on 2026-08-24 and the
// castor and bait listings on 2026-08-25. NOTHING HERE IS A CLAIM ABOUT STOCK,
// PRICE OR DELIVERY: a title read on one day is an identity, not an inventory,
// and this page makes no availability claim of any kind.
//
// `cardName` is the fetched title trimmed to what the product IS. Manufacturer
// self-praise in a listing title is never a reason to exclude a product and is
// never repeated here either; it is simply cut.
// ---------------------------------------------------------------------------

type ProductGroup = 'mole-trap' | 'vole-trap' | 'castor' | 'bait';

type ProductRecord = {
  asin: string;
  cardName: string;
  titleAsFetched: string;
  group: ProductGroup;
  whatItDoes: string[];
};

const products: ProductRecord[] = [
  {
    asin: 'B00LWDRSRM',
    cardName: "Victor Out O' Sight Mole Trap, 4-Pack",
    titleAsFetched: "Victor Out O' Sight Mole Trap, Below Ground Rodent Trap, 4 Pack",
    group: 'mole-trap',
    whatItDoes: [
      'Scissor-jaw mole trap — one of the four trap types Nebraska Extension names for moles',
      'Supplied as four traps in a single purchase',
      'Nebraska Extension recommends running at least three traps at once; four meets that in one purchase, which is why this listing is the one named here',
      'Set below ground in a surface burrow that is in use, and moved after two to three days if nothing is caught',
    ],
  },
  {
    asin: 'B0CQ8RSTC9',
    cardName: 'Victor Metal Pedal Mouse Traps, 12-Pack',
    titleAsFetched: 'Victor Metal Pedal Mouse Traps, 12-Pack, Reusable Wooden Snap Traps',
    group: 'vole-trap',
    whatItDoes: [
      'An ordinary mouse-sized snap trap, which is the tool both UC IPM and Penn State Extension name for voles',
      'Supplied as twelve',
      'The listing itself does not mention voles anywhere. It qualifies on the extension sources’ criterion, not on its own description',
      'UC IPM places these at right angles to a runway with the trigger end in the runway',
    ],
  },
  {
    asin: 'B00C1NN4B6',
    cardName: 'Victor Metal Pedal Wood Snap Mouse Trap M156, 4-Pack',
    titleAsFetched:
      'Victor Metal Pedal Sustainably Sourced FSC Wood Snap Mouse Trap - 4 Wooden Traps - M156',
    group: 'vole-trap',
    whatItDoes: [
      'The same mouse-sized snap trap mechanism, supplied as four rather than twelve',
      'Named here as the smaller quantity of the same tool, not as a different one',
      'The listing itself does not mention voles anywhere. It qualifies on the extension sources’ criterion, not on its own description',
      'Penn State Extension sets these at burrow openings or in runways near shrubbery, flower beds, gardens or rock walls',
    ],
  },
  {
    asin: 'B004RQCDG2',
    cardName: 'Baar MolEvict Castor Oil for Lawns, 32 oz',
    titleAsFetched: 'Baar MolEvict Castor Oil for Lawns, 32 oz, Covers 5,000 Sq Ft',
    group: 'castor',
    whatItDoes: [
      'A liquid castor oil product applied through a garden hose sprayer, per the listing’s own directions',
      'Castor oil is named as the active ingredient in the listing’s own title',
      'The listing states coverage of 5,000 square feet for this size',
      'Nebraska Extension says a castor product only works if it is watered into the lawn and sprayed over the whole area — a perimeter treatment does not work, because moles burrow under it',
      'The listing is marketed for moles, voles, gophers and armadillos. Only the mole use is supported by any source on this page',
    ],
  },
  {
    asin: 'B012RGU4EQ',
    cardName: 'Tomcat Mole Killer, 10 Worm Baits',
    titleAsFetched:
      'Tomcat Mole Killer(a) - Mimics Natural Food Source, Kills with a Single Feeding, Mole Killer for Lawns and Yards, 10 Worm Baits',
    group: 'bait',
    whatItDoes: [
      'A worm-shaped bait containing bromethalin, dropped into a hole made in the top of a runway that is in use and then sealed over',
      'One package contains ten worm baits, per the listing',
      'The EPA-registered label for this product carries the signal word CAUTION and restricts it to manual, below-ground applications',
      'Bromethalin is the active ingredient: Nebraska Extension and UC IPM both name it for this product, and the EPA-registered label states 0.025%',
      'This is a poison. The label warnings set out above this card are its own words, and they are the reason it sits at the bottom of this page rather than the top',
    ],
  },
];

const moleTraps = products.filter((p) => p.group === 'mole-trap');
const voleTraps = products.filter((p) => p.group === 'vole-trap');
const castorProducts = products.filter((p) => p.group === 'castor');
const baitProducts = products.filter((p) => p.group === 'bait');

const faqs: Faq[] = [
  {
    question: 'How many mole traps do I need?',
    answer:
      'Nebraska Extension gives a number: "We recommend homeowners employ at least three traps when trapping for moles to increase the chances of success." That is the only countable product criterion any source on this page publishes, and it is the reason the four-pack is the mole trap named here rather than a single trap. Nebraska also says traps are usually set in surface burrows, that success is highest when they are set in burrows that are in use, and that if they are not successful in two to three days you should move them to a new location.',
  },
  {
    question: 'Does castor oil actually repel moles?',
    answer:
      'The sources disagree, and this page gives all of them rather than picking one. A 1995 Michigan State University conference study of a 65 percent castor oil product reported that mole activity ceased on eleven treated lawns while continuing on five of six control lawns, with the effect lasting 30 days on most treated sites and 65 days on one. Nebraska Extension, revised 2010, calls castor oil products "minor effectiveness" for the eastern mole. Purdue Extension, revised 2005, says "Some success has been reported with these products, but no scientific research has shown a consistent result." A WSU Extension educator in Snohomish County reported a granular castor product failing outright in a 2007 field test: "Throughout the test there was no change in activity." UC IPM, updated November 2024, adds that no published research has been done on moles in the western United States.',
  },
  {
    question: 'Will a repellent just move the mole to my neighbour?',
    answer:
      'UC IPM says exactly that. Its words are that repellents work by moving animals from one location to another, and that they "may have limited utility in residential areas, as \'repelled\' moles will simply move to neighboring lawns and gardens and will continue to cause damage in these areas." That is a limitation of the whole approach rather than of any one product.',
  },
  {
    question: 'Is the worm-shaped mole bait a restricted-use pesticide?',
    answer:
      'No. Nebraska Extension states that Tomcat, as the retail version of Talpirid, is a General Use Pesticide. The EPA-registered label carries the signal word CAUTION and no restricted-use marking. That is not the same as harmless: the same label states the product is extremely toxic to mammals and birds, requires shoes, socks and gloves for all handlers, and directs that bait be applied only in underground runways with pets kept out of treated areas. The label also states it is not for use against the star-nosed mole in North Carolina.',
  },
  {
    question: 'Could my dog be poisoned by eating a mole that ate the bait?',
    answer:
      'Purdue Extension worked this through in 2020 and concluded it is very unlikely under label use. Each worm bait carries 1.25 mg of bromethalin, and on the published dog figures an 11 lb dog would need roughly 18 to 19 worms at the technical rate or 9 to 10 at the bait rate. Purdue writes: "It would be extremely unlikely that a dog could find, dig up, and consume the number of worms to reach or even approach the average lethal dose." Purdue pairs that with the conditions attached to it: applying the product in underground runways as the label directs helps minimise the risk of accidental ingestion, uneaten worms need at least two weeks to break down, and the label itself says pets should not be allowed in treated areas. Cats are 2 to 3 times more sensitive than dogs on the same published figures.',
  },
  {
    question: 'Why is there no vole poison on this page?',
    answer:
      'Because a homeowner may not legally apply one. UC IPM states that "Currently, zinc phosphide is the only toxicant that can be used to manage voles in residential settings, although it should be noted that this is a restricted-use toxicant (i.e., those that require the applicator to be licensed or certified to apply the product)." Penn State Extension states of vole toxicants that "These toxicants are restricted-use pesticides. Any person using these pesticides must be a certified pesticide applicator or work directly under the supervision of a certified applicator." There is no consumer vole bait to name, so none is named.',
  },
  {
    question: 'Do the snap traps on this page say they are for voles?',
    answer:
      'No, and that is stated beside them. Neither listing mentions voles anywhere in its own description. They are named because UC IPM says common traps for voles include standard mouse snap traps, and Penn State Extension says to set mouse-sized snap traps at burrow openings or in runways. The qualification comes from the extension sources, not from the product listings, and a reader is entitled to know which.',
  },
  {
    question: 'Am I sure I have moles and not voles or gophers?',
    answer:
      'That question comes before everything on this page, because the three animals take different tools. We keep it on a separate page that does nothing but tell the three apart from the marks they leave: https://pestproindex.com/us/moles-voles-gophers. Nothing on this page will help if the animal is the wrong one.',
  },
];

const sources: Source[] = [
  {
    label:
      'Moles and Their Control (NebGuide G1538) — the source of the three-trap criterion, the trap types, the castor-oil watering and whole-area conditions, and the General Use status of the retail mole bait',
    publisher:
      'University of Nebraska–Lincoln Extension (Dennis M. Ferraro, Stephen M. Vantassel, Scott E. Hygnstrom); peer reviewed',
    date: '1996, revised January 2010; accessed 25 August 2026',
    href: 'https://extensionpubs.unl.edu/publication/g1538/na/html/view',
  },
  {
    label:
      'Pest Notes: Moles (UC ANR Publication 74115) — the source of the eastern-versus-western research gap, the repelled-moles-move-next-door statement, and the gel-bait comparison',
    publisher: 'UC Statewide IPM Program (R. A. Baldwin, UC Davis)',
    date: 'Published 25 January 2022, updated November 2024; accessed 25 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/moles/',
  },
  {
    label:
      'Voles (Meadow Mice) (UC ANR Publication 7439) — the source of the mouse-snap-trap criterion, the trap placement, and the restricted-use position on vole toxicants',
    publisher: 'UC Statewide IPM Program (R. A. Baldwin)',
    date: 'Updated April 2023; accessed 25 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/voles/',
  },
  {
    label:
      'Voles — the source of the baited-trap instruction and the second statement that vole toxicants are restricted-use',
    publisher:
      'Penn State Extension (Shannon T. Falker, Margaret C. Brittingham, Lisa Williams)',
    date: 'Updated 5 January 2007; accessed 25 August 2026',
    href: 'https://extension.psu.edu/voles',
  },
  {
    label:
      'Moles (ADM-10, Wildlife Conflicts Management) — the source of the statement that no scientific research shows a consistent result for castor-oil repellents, and of the surface-bait hazard to other animals',
    publisher: 'Purdue University Department of Entomology (Judy Loven, USDA-APHIS Wildlife Services)',
    date: 'Revised April 2005; accessed 25 August 2026',
    href: 'https://extension.entm.purdue.edu/publications/ADM-10.pdf',
  },
  {
    label:
      'Secondary poisoning from bromethalin toxicants for moles – should you be concerned? — the source of the dose arithmetic, the degradation window and the conditions attached to them',
    publisher:
      'Purdue Extension Forestry and Natural Resources (Brian MacGowan, Wildlife Extension Specialist)',
    date: 'Posted 18 June 2020; accessed 25 August 2026',
    href: 'https://www.purdue.edu/fnr/extension/secondary-poisoning-from-bromethalin-toxicants-for-moles-should-you-be-concerned/',
  },
  {
    label:
      'Mole Hill Gazette 04/07 — the source of the field test in which both a granular castor product and the worm bait failed on one western Washington site',
    publisher: 'WSU Extension, Snohomish County',
    date: 'Issue stamped 04/07; page posted 25 July 2013; accessed 25 August 2026',
    href: 'https://extension.wsu.edu/snohomish/2013/07/25/mole-hill-gazette-0407/',
  },
  {
    label:
      'TALPIRID product label, EPA REG. NO. 12455-101 — the source of every warning quoted in the bait section, the active ingredient and concentration, and the North Carolina restriction',
    publisher: 'Bell Laboratories, via the WSU PICOL pesticide label database',
    date: 'Label retrieved 25 August 2026',
    href: 'https://picol.cahnrs.wsu.edu/DownloadLabel/43789/WA/WA_2026_12455-101_Talpirid.pdf',
  },
  {
    label:
      'The Effectiveness of a New Mole Repellent for Preventing Damage to Lawns by Eastern Moles — the only controlled field study of a castor-oil repellent cited on this page',
    publisher:
      'G. R. Dudderar, S. Tellman and D. K. Elshoff, Michigan State University; 7th Eastern Wildlife Damage Control Conference, pp. 149–152, Jackson, Mississippi',
    date: 'Presented 11 May 1995; accessed 25 August 2026',
    href: 'https://digitalcommons.usu.edu/wdmconference/1995/all1995/25/',
  },
  {
    label:
      '40 CFR § 152.25(f), Table 1 — the source of castor oil’s status as an active ingredient permitted in exempted minimum risk pesticide products (CAS 8001-79-4)',
    publisher: 'Electronic Code of Federal Regulations (eCFR)',
    date: 'Current text as retrieved 25 August 2026',
    href: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-40?chapter=I&subchapter=E&part=152&section=152.25',
  },
];

const tocItems = [
  { id: 'which-animal', title: 'Which Animal First' },
  { id: 'mole-trapping', title: 'Trapping Moles' },
  { id: 'vole-trapping', title: 'Trapping Voles' },
  { id: 'castor', title: 'Castor Oil Repellents' },
  { id: 'mole-bait', title: 'The One Mole Bait a Homeowner May Buy' },
  { id: 'vole-bait', title: 'Why There Is No Vole Bait Here' },
  { id: 'what-we-checked', title: 'What We Checked' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function MoleAndVoleControlPage() {
  return (
    <UsPageLayout
      title="Mole and Vole Control"
      subtitle="Five products are named on this page and every one of them is here because an extension service published a criterion it meets. Two more things are named because no product exists for them at all, and the page says so plainly rather than filling the space."
      lastUpdated="August 2026"
      readingTime="14 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={MOLEVOLE_HOME}
      clusterNav={MOLEVOLE_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page covers what a householder can actually do about moles and voles, using only what
        university extension services and one EPA-registered product label publish. Where those
        sources disagree with each other, the disagreement is set out rather than settled. Where
        the law puts a method out of a homeowner&rsquo;s reach, the page says so and names nothing.
      </p>
      <p>
        Five products are named. Every link on this page is a plain product link:{' '}
        <strong>PestPro Index earns nothing if you buy any of them</strong>, and each card says so
        immediately above its own link.
      </p>

      <h2 id="which-animal">Which Animal First</h2>
      <p>
        Moles and voles take different tools, and pocket gophers take different tools again. A mole
        is not a rodent and does not gnaw; a vole is a rodent and does. Getting this wrong wastes
        every step that follows, because a mole trap set in a vole runway catches nothing.
      </p>
      <p>
        If you have not already settled which animal you have, do that first. Our{' '}
        <a href="https://pestproindex.com/us/moles-voles-gophers">
          mole, vole or pocket gopher identification page
        </a>{' '}
        does nothing but tell the three apart from the marks they leave, and it is deliberately
        separate from this one. <strong>Nothing below will help if the animal is the wrong one.</strong>
      </p>

      <h2 id="mole-trapping">Trapping Moles</h2>
      <p>
        <strong>Nebraska Extension puts trapping ahead of every other method for moles</strong>,
        describing it as the practical approach that works, and says the common trap types can all
        produce good results. Those are our words for the ranking; the publication states it more
        strongly, and we have kept the ranking without the superlative. UC IPM reaches the same
        place from California and states it directly:{' '}
        <em>&ldquo;Trapping is the most dependable method of mole control.&rdquo;</em>
      </p>
      <p>
        Nebraska names the types:{' '}
        <em>
          &ldquo;The most popular types of mole traps include the harpoon (Victor&reg; or
          AnneMissille&reg;), scissor-jaw (Out O&rsquo; Sight&reg;), choker-loop (Nash&reg; or
          Victor&reg;) (Figure 4), and NoMol&reg; traps.&rdquo;
        </em>{' '}
        It also states that{' '}
        <em>
          &ldquo;Mole traps usually result in quick kills and with reasonable caution, are safe for
          the user, pets, and other wildlife.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          One sentence in that publication is the only countable product criterion anywhere in the
          sources this page uses:
        </strong>{' '}
        <em>
          &ldquo;We recommend homeowners employ at least three traps when trapping for moles to
          increase the chances of success.&rdquo;
        </em>{' '}
        A single trap is not what the source recommends, so a single-trap listing is not what is
        named here.
      </p>
      <p>
        On where and when: Nebraska says traps are usually set in surface burrows, that success is
        highest when they are set in burrows that are in use, and that{' '}
        <em>&ldquo;If they are not successful in two to three days, move traps to a new location.&rdquo;</em>
      </p>

      {moleTraps.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h3>Live trapping, and one state&rsquo;s rule</h3>
      <p>
        Nebraska Extension recommends against live trapping moles, and its reason is a legal one
        specific to that state:{' '}
        <em>
          &ldquo;If successful, however, you must either euthanize the mole, or release it within
          100 yards from the site of capture, as Nebraska regulations require. Since releasing it
          will result in renewed damage to your property, we do not recommend live trapping.&rdquo;
        </em>
      </p>
      <p>
        <strong>That 100-yard figure is Nebraska regulation, stated by a Nebraska publication.</strong>{' '}
        It is not a national rule and this page does not present it as one. No source consulted for
        this page addresses trap restrictions in any other state, so none is offered. Yours may
        differ, and this is not legal advice.
      </p>

      <h2 id="vole-trapping">Trapping Voles</h2>
      <p>
        UC IPM sets a condition on vole trapping before it sets a method:{' '}
        <em>
          &ldquo;When voles numbers are low or when the population is concentrated in a small area,
          trapping can be effective.&rdquo;
        </em>{' '}
        The tool itself is ordinary. UC IPM:{' '}
        <em>&ldquo;Common traps include standard mouse snap traps.&rdquo;</em>
      </p>
      <p>
        On placement, the two sources agree. UC IPM:{' '}
        <em>
          &ldquo;Place the traps at right angles to the runways with the trigger end in the
          runway.&rdquo;
        </em>{' '}
        Penn State Extension:{' '}
        <em>
          &ldquo;Set mouse-sized snap traps at burrow openings or in runways near ornamental
          shrubbery, flower beds, gardens, or rock walls.&rdquo;
        </em>
      </p>
      <p>
        <strong>On bait they disagree, and both are given here.</strong> UC IPM says traps{' '}
        <em>
          &ldquo;can generally be left unbaited, as voles will cross the trap as they run along
          their runways. If bait is desired, a peanut butter-oat mixture or apple slices often work
          well.&rdquo;
        </em>{' '}
        Penn State says to bait them:{' '}
        <em>&ldquo;Bait the traps with a peanut butter-oatmeal mixture or apple slices.&rdquo;</em>{' '}
        Neither is corrected against the other and neither is averaged, because both are published
        instructions from extension services and this page has no basis for preferring one.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <p className="m-0 text-base font-bold text-blue-900">
          Read this before the two cards below
        </p>
        <p className="m-0 mt-2 text-sm text-blue-900">
          <strong>Neither listing mentions voles anywhere in its own description.</strong> Both are
          sold as mouse traps. They are named here because UC IPM and Penn State Extension both
          identify the mouse-sized snap trap as the vole tool &mdash; the qualification comes from
          the extension sources, not from the products. That is a weaker footing than the mole trap
          above, which meets a criterion you can count off the listing itself, and you are entitled
          to know the difference rather than have it glossed over.
        </p>
      </div>

      {voleTraps.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="castor">Castor Oil Repellents</h2>
      <p>
        <strong>
          This is the section where the sources disagree most, so it is the section with the most
          words before the product.
        </strong>{' '}
        Castor oil is an active ingredient permitted in exempted minimum risk pesticide products
        under 40 CFR &sect; 152.25(f), Table 1, listed as CAS 8001-79-4 &mdash; subject, in the
        regulation&rsquo;s own words, to all the criteria of that section being met. It is not a
        restricted product and no source consulted for this page records a pet, child or wildlife
        hazard for it.
      </p>

      <h3>What the research actually says, all of it</h3>
      <p>
        <strong>The one controlled field study is positive.</strong> Dudderar, Tellman and Elshoff
        of Michigan State University tested a product containing 65 percent castor oil and reported
        to the 7th Eastern Wildlife Damage Control Conference in <strong>1995</strong> that{' '}
        <em>
          &ldquo;Mole activity as indicated by raised ridges ceased on eleven treated sites but
          continued on 5 of 6 control sites&rdquo;
        </em>
        , and that{' '}
        <em>
          &ldquo;The effectiveness of the repellent as indicated by the lack of new ridges continued
          for 65 days on one treatment site and for 30 days on the remaining treatment sites.&rdquo;
        </em>{' '}
        That is eleven treated and six control lawns in southern Michigan, on eastern moles, with
        one named product at one concentration, thirty-one years ago.
      </p>
      <p>
        <strong>Nebraska Extension, revised January 2010, is lukewarm.</strong> Its words are that
        castor oil products{' '}
        <em>&ldquo;have shown minor effectiveness in repelling the eastern mole&rdquo;</em>, and it
        cites one study in which a castor product{' '}
        <em>&ldquo;successfully reduced mole activity in an area for over 30 days.&rdquo;</em>
      </p>
      <p>
        <strong>Purdue Extension, revised April 2005, is not persuaded.</strong>{' '}
        <em>
          &ldquo;Some success has been reported with these products, but no scientific research has
          shown a consistent result.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          A WSU Extension educator in Snohomish County tested one and it did nothing at all.
        </strong>{' '}
        Writing in the Mole Hill Gazette issue stamped 04/07, on a granular castor product applied
        repeatedly through February:{' '}
        <em>
          &ldquo;Throughout the test there was no change in activity. The mole kept returning to the
          application holes and plugging them up!&rdquo;
        </em>{' '}
        One site, one mole, one observer, one granular product, in western Washington &mdash; and
        that last detail matters, because of the next paragraph.
      </p>
      <p>
        <strong>UC IPM, updated November 2024, marks the boundary of the evidence:</strong>{' '}
        <em>
          &ldquo;Research on the effectiveness of these castor oil commercial repellents has shown
          some efficacy for eastern moles. No published research has been done on moles in the
          western United States, so their effectiveness on these species remains unclear.&rdquo;
        </em>
      </p>
      <p>
        These four positions are not reconciled here. They were published by four different
        institutions across nineteen years, they are all still in circulation, and averaging them
        would produce a number none of them stated.
      </p>

      <h3>What a repellent does even when it works</h3>
      <p>
        UC IPM is blunt about the mechanism:{' '}
        <em>
          &ldquo;repellents work by moving animals from one location to another by deterring their
          presence in the area where the repellent is applied&rdquo;
        </em>
        , and so{' '}
        <em>
          &ldquo;they may have limited utility in residential areas, as &lsquo;repelled&rsquo; moles
          will simply move to neighboring lawns and gardens and will continue to cause damage in
          these areas.&rdquo;
        </em>
      </p>

      <h3>Two conditions that decide whether it works at all</h3>
      <p>
        Nebraska states both as requirements rather than tips.{' '}
        <em>
          &ldquo;To be effective, the castor oil product must be thoroughly watered into the lawn.
          Irrigate the area to be treated with one-half inch of water before applying the repellent
          solution, and follow up with 1 inch or more of water.&rdquo;
        </em>{' '}
        On coverage, Nebraska instructs spraying the entire area to be protected rather than a
        strip around its edge, and gives the reason in its own words:{' '}
        <em>&ldquo;Moles will burrow under a perimeter treatment.&rdquo;</em> Nebraska adds that{' '}
        <em>
          &ldquo;Areas that receive extensive irrigation will quickly lose the repellent to
          leaching.&rdquo;
        </em>
      </p>
      <p>
        One more finding decides which form to buy. Nebraska:{' '}
        <em>
          &ldquo;Preliminary studies on granular materials containing castor oil have shown less
          effectiveness than the liquid repellents.&rdquo;
        </em>{' '}
        <strong>The product named below is a liquid, and that is why.</strong> It is also the
        reason the WSU field failure above is not the whole story: the product that failed there
        was a granular one.
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          This product is named for moles and voles. Only the mole half is supported.
        </p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          Castor products in this category are almost all branded and sold as &ldquo;mole and
          vole&rdquo; repellents, and the one below is no exception.{' '}
          <strong>
            Every effectiveness statement quoted above is about moles &mdash; specifically the
            eastern mole. Not one source consulted for this page supports castor oil against voles.
          </strong>{' '}
          On vole repellents the sources are the other way: UC IPM states that{' '}
          <em>
            &ldquo;the efficacy of vole repellents is questionable, and their use often is not
            practical&rdquo;
          </em>
          , and Penn State Extension states that{' '}
          <em>
            &ldquo;Little data is available on the effectiveness of repellents to deter vole damage.
            Therefore, repellents should not be used as the sole method of vole control.&rdquo;
          </em>{' '}
          The manufacturer&rsquo;s product name is the manufacturer&rsquo;s; the claim in it is not
          one this page makes.
        </p>
      </div>

      {castorProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="mole-bait">The One Mole Bait a Homeowner May Buy</h2>
      <p>
        Most poison baits do not work on moles for a simple reason. UC IPM:{' '}
        <em>
          &ldquo;Because the mole&rsquo;s main diet consists of earthworms and insects, poisoning
          with traditional grain-based baits is rarely effective.&rdquo;
        </em>{' '}
        Purdue says the same of{' '}
        <em>&ldquo;most poison baits (nuts and grain pellets)&rdquo;</em>, which it says{' '}
        <em>&ldquo;provide inconsistent results.&rdquo;</em> The worm-shaped baits exist to answer
        that, by imitating the food the animal actually eats.
      </p>
      <p>
        The grain bait that does exist for moles is out of reach anyway. Nebraska:{' '}
        <em>
          &ldquo;A 0.5 percent formulation of strychnine grain-based bait is federally registered as
          a Restricted Use Pesticide for controlling moles.&rdquo;
        </em>{' '}
        The worm bait is not. Nebraska again:{' '}
        <em>&ldquo;(Tomcat, as the retail version of Talpirid, is a General Use Pesticide)&rdquo;</em>
        , and it is{' '}
        <em>&ldquo;a synthetic worm replica that contains bromethalin.&rdquo;</em> The
        EPA-registered label states the concentration:{' '}
        <em>&ldquo;Bromethalin (CAS #63333-35-7): 0.025%&rdquo;</em>, under EPA REG. NO. 12455-101.
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          This is a poison. These are the label&rsquo;s own words, and they come before the product,
          not after it.
        </p>
        <ul className="mt-3 mb-0 space-y-2 text-sm text-red-900">
          <li>
            <strong>Signal word:</strong>{' '}
            <em>
              &ldquo;CAUTION: Harmful if swallowed or absorbed through the skin. Keep away from
              children, domestic animals and pets.&rdquo;
            </em>
          </li>
          <li>
            <em>
              &ldquo;This product is extremely toxic to mammals and birds. Dogs and other predatory
              and scavenging mammals and birds might be poisoned if they feed upon animals that have
              eaten this bait.&rdquo;
            </em>
          </li>
          <li>
            <strong>Placement, and it is a restriction rather than advice:</strong>{' '}
            <em>
              &ldquo;Apply bait only in underground runways of moles. Keep pets out of treated areas.
              Do NOT use this product above ground.&rdquo;
            </em>{' '}
            The label states the product{' '}
            <em>
              &ldquo;May Only be Used to Control Moles in Manual, Below-Ground Applications.&rdquo;
            </em>
          </li>
          <li>
            <strong>Handling:</strong>{' '}
            <em>
              &ldquo;All handlers (including applicators) must wear shoes, socks, and gloves. Any
              person who retrieves carcasses or unused bait following application of this product
              must wear waterproof gloves.&rdquo;
            </em>{' '}
            And separately: <em>&ldquo;Wear gloves when bait is handled.&rdquo;</em>
          </li>
          <li>
            <strong>If an animal eats it:</strong>{' '}
            <em>
              &ldquo;If an animal eats bait, call veterinarian or 1-877-854-2494 at once.&rdquo;
            </em>{' '}
            The label also states:{' '}
            <em>
              &ldquo;Contains the nerve poison Bromethalin. This is not an anticoagulant type
              rodenticide.&rdquo;
            </em>
          </li>
          <li>
            <strong>A state restriction, carried on the label as a footnote to its use sites:</strong>{' '}
            <em>&ldquo;Not for use against the star-nosed mole in North Carolina&rdquo;</em>. The
            label also states that{' '}
            <em>
              &ldquo;It is a violation of Federal law to use this product in a manner inconsistent
              with its labeling.&rdquo;
            </em>
          </li>
        </ul>
      </div>
      <p>
        Purdue Extension adds a hazard the label implies and a reader might not:{' '}
        <em>
          &ldquo;baits exposed on the surface are not readily consumed by the moles and also pose a
          hazard to other animals, such as dogs, cats, wild birds, and squirrels, which may consume
          them.&rdquo;
        </em>{' '}
        Nebraska&rsquo;s closing instruction on the whole category is worth repeating exactly:{' '}
        <em>
          &ldquo;Carefully follow the label when using toxicants and fumigants, as the label is the
          law.&rdquo;
        </em>
      </p>

      <h3>The secondary poisoning question, worked through</h3>
      <p>
        The obvious worry is a dog or cat eating a poisoned mole, or digging up the bait. Purdue
        Extension&rsquo;s wildlife extension specialist worked it through with published toxicology
        in <strong>June 2020</strong> and concluded against the alarm:{' '}
        <em>
          &ldquo;It would be extremely unlikely that a dog could find, dig up, and consume the number
          of worms to reach or even approach the average lethal dose.&rdquo;
        </em>
      </p>
      <p>
        The arithmetic behind that, as Purdue sets it out: each worm bait carries 1.25 mg of
        bromethalin, and against the published dog figures &mdash; 4.7 mg/kg for technical
        bromethalin and 2.38 mg/kg as formulated in bait &mdash; an 11 lb dog would need roughly 18
        to 19 worms at the first rate or 9 to 10 at the second. Young dogs are sensitive at around 1
        mg/kg, and <strong>cats are 2 to 3 times more sensitive than dogs</strong>.
      </p>
      <p>
        <strong>Purdue does not offer that as reassurance on its own</strong>, and neither does this
        page. It attaches conditions:{' '}
        <em>
          &ldquo;Applying the product according to label instructions (in underground active mole
          tunnels) helps minimize the risk of accidental ingestion&rdquo;
        </em>
        ;{' '}
        <em>
          &ldquo;Allow at least two weeks (or longer under dry conditions) for breakdown of any
          uneaten worms&rdquo;
        </em>
        ; and{' '}
        <em>
          &ldquo;In the case of mole toxicants, the label clearly states that pets should not be
          allowed in treated areas.&rdquo;
        </em>{' '}
        Purdue&rsquo;s own conclusion is that the decision is the reader&rsquo;s, and that if you
        are not confident the label conditions can be met, other methods are the better option.
      </p>

      <h3>Whether it works</h3>
      <p>
        <strong>UC IPM, updated November 2024, is the most favourable and is still hedged:</strong>{' '}
        <em>
          &ldquo;Although rigorous testing is still needed to better estimate its effectiveness,
          limited studies have indicated gel-type baits are more efficacious than grain baits and
          appear to be a viable alternative for mole control.&rdquo;
        </em>
      </p>
      <p>
        <strong>Nebraska, revised 2010, reports experience rather than evidence:</strong>{' '}
        <em>
          &ldquo;We have received numerous positive reports regarding the effectiveness of
          Talpirid/Tomcat. However, more rigorous testing of these products is needed.&rdquo;
        </em>{' '}
        It adds a handling note that matters:{' '}
        <em>
          &ldquo;When using Talpirid/Tomcat, do not disturb the integrity of the worm-bait as it
          will interfere with its effectiveness.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          The WSU educator tested this product too, on one western Washington site, and the mole
          would not touch it.
        </strong>{' '}
        Each bait was staked so it could be recovered and inspected:{' '}
        <em>
          &ldquo;In every instance I could find no sign of feeding, though the baits were
          consistently walked over, buried, pressed into the tunnel walls or just pushed out of the
          run.&rdquo;
        </em>{' '}
        And:{' '}
        <em>
          &ldquo;In the end, all of the baits slowly dissolved away into the soil and the mole
          continues to inhabit the runs.&rdquo;
        </em>{' '}
        One site, one mole, 2007, and the bait was supplied free by the manufacturer &mdash; the
        author says so.
      </p>

      {baitProducts.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="vole-bait">Why There Is No Vole Bait Here</h2>
      <p>
        <strong>Because a householder may not legally apply one.</strong> This is not a gap in our
        sourcing and it is not a judgement about whether such products work. It is the law about who
        may hold them.
      </p>
      <p>
        UC IPM:{' '}
        <em>
          &ldquo;Currently, zinc phosphide is the only toxicant that can be used to manage voles in
          residential settings, although it should be noted that this is a restricted-use toxicant
          (i.e., those that require the applicator to be licensed or certified to apply the
          product).&rdquo;
        </em>
      </p>
      <p>
        Penn State Extension, on vole toxicants:{' '}
        <em>
          &ldquo;These toxicants are restricted-use pesticides. Any person using these pesticides
          must be a certified pesticide applicator or work directly under the supervision of a
          certified applicator.&rdquo;
        </em>
      </p>
      <p>
        Two extension services, the same position. <strong>So no vole bait is named on this page</strong>,
        and the vole methods that are named &mdash; the snap traps above &mdash; are the ones the
        same sources describe. Anything sold to a householder as a vole poison is worth reading very
        carefully against those two sentences.
      </p>
      <p>
        One further class is settled and absent for a different reason. Nebraska, on electronic
        devices for moles:{' '}
        <em>&ldquo;Several electronic devices have been marketed, but none has been proven effective.&rdquo;</em>{' '}
        Nothing of that kind is named here.
      </p>

      <h2 id="what-we-checked">What We Checked</h2>
      <p>
        Product listings on this page were chosen against criteria the sources published first, and
        then checked one at a time. The counts below are exact.
      </p>
      <ul>
        <li>
          <strong>Mole traps.</strong> Five listings were looked at. One supplies at least three
          traps in a single purchase, which is what Nebraska Extension recommends, and it is the one
          named here.
        </li>
        <li>
          <strong>Vole snap traps.</strong> Three listings were looked at and two are named, as the
          larger and smaller quantity of the same ordinary tool. Neither names voles in its own
          description, which is stated beside the cards rather than buried here.
        </li>
        <li>
          <strong>Castor oil.</strong> Four listings were looked at.{' '}
          <strong>One no longer exists</strong> &mdash; the page for it returns a not-found error, so
          it is not named anywhere on this site. <strong>One was rejected</strong> because its own
          description states no coverage figure, and without one a reader cannot follow
          Nebraska&rsquo;s instruction to treat the whole area. <strong>Two met every criterion</strong>{' '}
          &mdash; liquid form, castor oil named in the listing&rsquo;s own text, and a stated
          coverage figure. The one named here is the one whose title alone carries all three, so
          nothing about it has to be taken on faith from a marketing bullet.
        </li>
        <li>
          <strong>Worm bait.</strong> Four listings were looked at and all four met the criteria.
          They are pack-size and brand variants of the same product line from the same manufacturer,
          so one is named rather than four. The one named is the only one of the four whose own
          description carries both the underground application method and the North Carolina
          restriction.
        </li>
      </ul>
      <p>
        <strong>What this page does not tell you is whether any of these is in stock today.</strong>{' '}
        A product title read on one day is an identity, not an inventory, and no claim about
        availability, price or delivery is made anywhere on this page.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
