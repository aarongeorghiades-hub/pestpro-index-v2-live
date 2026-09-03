import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { CAMEL_CRICKETS_NAV, CAMEL_CRICKETS_HOME } from '../components/camelCricketsNav';

const URL = 'https://pestproindex.com/us/camel-crickets';
const TITLE = 'Camel Crickets: The Chirp Test, and the Damp Basement';
const DESCRIPTION =
  'Camel crickets do not chirp, so a chirping basement is a different insect. Identification, why they come in, and where four extension sources disagree.';

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
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  isPartOf: { '@type': 'WebSite', name: 'PestPro Index', url: 'https://pestproindex.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Camel Crickets', item: URL }],
};

// ---------------------------------------------------------------------------
// THIS PAGE CARDS NOTHING, AND THAT IS THE FINDING RATHER THAN AN OMISSION.
//
// There is no product record array here and no UsToolCard import, because there
// is nothing to render. TWO SEPARATE REASONS, and the page states both:
//
// 1. STICKY BOARDS AND DOOR WEATHER-STRIPPING ARE NAMED BY THE SOURCES, AND
//    EIGHT CANDIDATE LISTINGS WERE CHECKED ON 2026-09-03. Every one returned
//    Amazon's anti-bot interstitial rather than a product page, so not one
//    listing title was read. S50-H: only the fetched product-page title is
//    authoritative, and nothing was fetched. Law 137 makes an interstitial a
//    terminal state for the round — one attempt, no header change, no retry —
//    so the eight are carried forward as a blocked list under Law 163 rather
//    than guessed at from a search-result title (S50-H again, from the other
//    direction).
//
// 2. THE DEHUMIDIFIER HAS NO PUBLISHED SPECIFICATION, AND THAT IS A SEPARATE
//    FINDING FROM THE BLOCKED FETCHES. Rutgers says to dehumidify a basement.
//    It gives no target humidity, no capacity and no room size, and neither
//    does any other source read for this page. That is the identical position
//    /us/silverfish reached on the identical question, and the two pages must
//    not disagree about it (Law 132). Even had the listing fetches succeeded,
//    no dehumidifier would be carded here, because there is no number to
//    measure a listing against (Law 139).
//
// If a later round can read a listing, reason 1 lifts for sticky boards and
// weather-stripping. Reason 2 lifts only if a source publishes a figure.
// ---------------------------------------------------------------------------

const faqs: Faq[] = [
  {
    question: 'Do camel crickets chirp?',
    answer:
      'No, and that is the most useful single test a reader has. Rutgers Cooperative Extension states they lack sound-producing structures, therefore no chirping sounds are heard. NC State Extension puts the same fact to work as a diagnostic: camel crickets do not chirp, and if you are hearing chirping sounds indoors then you likely have field crickets instead. A chirping basement is a different insect from a silent one.',
  },
  {
    question: 'What does a camel cricket look like?',
    answer:
      'NC State Extension states they get their name from their slightly humpbacked appearance, that their long legs give them a spider-like appearance, and that unlike other crickets they do not have wings as adults. Rutgers describes them as brownish, wingless, up to one inch long, with large hind legs and threadlike antennae that may be longer than the body. Iowa State University Extension gives the same three characters — brownish, humpbacked, wingless, up to one inch long.',
  },
  {
    question: 'How is a camel cricket different from a house or field cricket?',
    answer:
      'By wings and by sound. Camel crickets are wingless as adults and silent. Clemson Cooperative Extension states that house crickets are one inch or less in length and hold their wings flat over their backs, and that they are yellowish-brown in color with three dark stripes on the head; it gives field crickets as variable in size from half an inch to over one inch, many black and some varying shades of brown. Both house and field crickets have wings and both chirp. Clemson also states that house crickets can spend their whole lives inside buildings, which camel crickets generally do not.',
  },
  {
    question: 'Why are they in my basement?',
    answer:
      'Moisture, on every source read for this page. NC State Extension states that like many insect pests, camel crickets are attracted to cool, moist and humid areas in and around our homes, and that the crickets often invade storage buildings, crawlspaces, basements, garages and indoor areas where moisture may be a problem. It adds that they often become a problem when we have extremes in weather conditions. Iowa State describes them as usually accidental invaders that wander in by mistake from adjacent areas.',
  },
  {
    question: 'Will they breed in my house?',
    answer:
      'Iowa State University Extension states that they generally do not reproduce indoors, except in situations that provide continuous dark, moist conditions. That is a qualified no rather than a flat one, and the qualifier is the moisture again: a dry basement is not a breeding site, and a permanently damp crawl space can be.',
  },
  {
    question: 'Do camel crickets damage anything?',
    answer:
      'Little, and the sources say so in careful terms. Iowa State states they are of little economic importance except as a nuisance in buildings and homes, especially basements. NC State states that although they are mostly a nuisance pest, they can damage stored items such as garments and linens packed in boxes in a garage or basement if the problem goes unchecked. Rutgers describes them feeding on starch, fungi, and occasionally fabrics. The damage claim is real but every source that makes it qualifies it.',
  },
  {
    question: 'Should I spray indoors?',
    answer:
      'Four sources give four different answers and this page does not pick between them. Rutgers tells the reader to spray indoors around baseboards, cracks and crevices with a product labeled for crickets. NC State says common household insecticides can be applied to baseboards and behind appliances, but that if the exclusion steps are followed the need for indoor applications should be reduced, and that pesticides are not a long-term solution. Clemson says to use chemicals for indoor control only when a large infestation is present. Iowa State says treating indoor floor areas is a last resort of limited benefit. The spread is set out in full on this page rather than resolved.',
  },
  {
    question: 'What actually gets rid of them?',
    answer:
      'Drying the space and sealing the way in, on every source. NC State gives the specific steps: caulk or seal gaps around window frames, doors, foundation and dryer vents; install weather-stripping along the bottom of house and garage doors so that it fits tightly against the threshold; reduce moisture indoors, as well as in other critical areas such as basements or crawlspaces; keep ground cover and mulch at least 12 inches or more away from the foundation; and do not stack firewood against the house. Iowa State adds that piles of bricks, stones, boards, leaves and similar material should be removed.',
  },
];

const sources: Source[] = [
  {
    label:
      'Camel Crickets — the source of the humpbacked and wingless identification, the moisture mechanism, the crawlspace and basement list, the fecal-smear sign, the stored-fabric damage statement, the sticky-board recommendation, the 12-inch mulch setback, the weather-stripping instruction and the outdoor-first position on chemicals',
    publisher: 'NC State Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://content.ces.ncsu.edu/camel-crickets',
  },
  {
    label:
      'Cave Crickets (Camel Crickets), Fact Sheet FS1129 — the source of the no-chirping statement, the starch and fungi and fabric feeding statement, the nocturnal statement, and the dehumidify-the-basement instruction',
    publisher: 'Rutgers New Jersey Agricultural Experiment Station, Cooperative Extension',
    date: 'August 2010, as stamped on the document; fetched 3 September 2026',
    href: 'https://njaes.rutgers.edu/pubs/download.php?strPubID=FS1129',
  },
  {
    label:
      'Camel Cricket — the source of the little-economic-importance position, the accidental-invader framing, the does-not-reproduce-indoors statement, the outdoor harborage removal list and the last-resort position on indoor treatment',
    publisher: 'Iowa State University Extension and Outreach, Yard and Garden',
    date: 'Originally published 12 September 2016, per the page; fetched 3 September 2026',
    href: 'https://yardandgarden.extension.iastate.edu/encyclopedia/camel-cricket',
  },
  {
    label:
      'House and Field Crickets — the source of every house cricket and field cricket identification character on this page, and of the large-infestation-only position on indoor chemicals',
    publisher: 'Clemson Cooperative Extension, Home & Garden Information Center',
    date: 'Originally published 10/98, per the page; fetched 3 September 2026',
    href: 'https://hgic.clemson.edu/factsheet/house-and-field-crickets/',
  },
  {
    label:
      'Camel Cricket — the source of the family name Rhaphidophoridae and the accidental-invader description. This page is brief and refers its own readers onward to NC State for control, which is why it is cited narrowly here',
    publisher: 'University of Maine Cooperative Extension, Home and Garden IPM',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.umaine.edu/home-and-garden-ipm/fact-sheets/common-name-listing/camel-cricket/',
  },
];

const tocItems = [
  { id: 'no-products', title: 'What This Page Does Not Carry' },
  { id: 'what-it-is', title: 'What a Camel Cricket Is' },
  { id: 'chirp-test', title: 'The Chirp Test' },
  { id: 'why-inside', title: 'Why They Are Inside' },
  { id: 'damage', title: 'What They Damage' },
  { id: 'exclusion', title: 'Drying and Sealing' },
  { id: 'removal', title: 'Removing the Ones Already In' },
  { id: 'disagreement', title: 'Where the Sources Disagree' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function CamelCricketsPage() {
  return (
    <UsPageLayout
      title="Camel Crickets"
      subtitle="The humpbacked, wingless, silent cricket that turns up in basements, crawl spaces and garages. What it is, how to tell it from the crickets that chirp, and what five extension services say to do about it."
      lastUpdated="September 2026"
      readingTime="8 min read"
      homeHref={CAMEL_CRICKETS_HOME}
      clusterNav={CAMEL_CRICKETS_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the insect Rutgers Cooperative Extension describes as{' '}
        <em>&ldquo;brownish, wingless, up to one inch long&rdquo;</em> with large hind legs, and
        which NC State Extension says has a{' '}
        <em>&ldquo;spider-like appearance&rdquo;</em> because of those legs. It is a nuisance
        insect. Every source read for this page says so in its own words, and the page is written
        to match that rather than to inflate it.
      </p>

      <h2 id="no-products">What This Page Does Not Carry</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>No product is named on this page, for two separate reasons.</strong> Neither is
          that the sources recommend nothing — they recommend two things a reader can buy.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>The listings could not be read.</strong> The sources name sticky boards and door
          weather-stripping specifically, and eight candidate listings were checked on 3 September
          2026. Every one returned an anti-bot interstitial instead of a product page, so not a
          single listing title was read. A product is only described here from its own fetched
          page, never from a search result, so nothing is carded. The eight are recorded and
          carried forward.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>The dehumidifier has no published number.</strong> Rutgers says to reduce
          moisture by dehumidifying basements. It gives no target humidity, no capacity and no room
          size, and no other source read here gives one either. Without a figure there is nothing
          to measure a machine against, so no dehumidifier would be named here even if every
          listing had loaded. Our{' '}
          <Link href="/us/silverfish">silverfish and firebrats page</Link> reached the identical
          conclusion on the identical question, and for the same reason.
        </p>
      </div>

      <h2 id="what-it-is">What a Camel Cricket Is</h2>
      <p>
        <strong>The name describes the shape.</strong> NC State Extension states that{' '}
        <em>
          &ldquo;Camel crickets get their name because of their slightly humpbacked
          appearance&rdquo;
        </em>{' '}
        and that <em>&ldquo;Their long legs give them a spider-like appearance.&rdquo;</em> The
        second half of that is why they are so often reported as spiders.
      </p>
      <p>
        <strong>They have no wings.</strong> NC State states plainly that{' '}
        <em>&ldquo;Unlike other crickets, they do not have wings as adults.&rdquo;</em> Rutgers
        gives the same character inside its description —{' '}
        <em>&ldquo;brownish, wingless, up to one inch long&rdquo;</em> — and Iowa State University
        Extension repeats it independently. Three sources, one character, no disagreement.
      </p>
      <p>
        <strong>They are nocturnal.</strong> Rutgers:{' '}
        <em>&ldquo;Active at night, they hide during the day.&rdquo;</em> That is why a basement
        can hold a population a householder only meets when a light goes on.
      </p>
      <p>
        The family is Rhaphidophoridae. University of Maine Cooperative Extension gives that name
        and the common alternative, cave crickets, which Iowa State explains is{' '}
        <em>descriptive of their natural habitat</em>: Iowa State states that as well as caves,{' '}
        <em>
          &ldquo;they live in other cool, damp situations such as in wells, rotten logs, stumps and
          hollow trees&rdquo;
        </em>
        .
      </p>

      <h2 id="chirp-test">The Chirp Test</h2>
      <p>
        <strong>
          This is the single most useful thing on this page, and it costs nothing to apply.
        </strong>{' '}
        Rutgers states that camel crickets{' '}
        <em>
          &ldquo;lack sound-producing structures, therefore no chirping sounds are heard.&rdquo;
        </em>{' '}
        NC State turns the same fact into a diagnostic: camel crickets do not chirp, and it tells
        the reader that if chirping is being heard indoors then the insect is likely a field
        cricket instead.
      </p>
      <p>
        <strong>So a chirping basement is a different problem from a silent one.</strong> If there
        is chirping, the characters below are the ones to check. Clemson Cooperative Extension
        states that{' '}
        <em>
          &ldquo;House crickets are one inch or less in length and hold their wings flat over their
          backs. They are yellowish-brown in color with three dark stripes on the head.&rdquo;
        </em>{' '}
        For the other common indoor chirper, Clemson gives{' '}
        <em>&ldquo;Field crickets are variable in size ranging from&rdquo;</em> half an inch to
        over one inch, many black and some varying shades of brown.
      </p>
      <p>
        Clemson also draws the residence distinction that matters for how long the problem lasts:{' '}
        <em>&ldquo;House crickets can spend their whole lives inside buildings.&rdquo;</em> Camel
        crickets, on Iowa State, generally do not — see below.
      </p>

      <h2 id="why-inside">Why They Are Inside</h2>
      <p>
        <strong>Moisture, on every source.</strong> NC State states that{' '}
        <em>
          &ldquo;Like many insect pests, camel crickets are attracted to cool, moist / humid areas
          in and around our homes.&rdquo;
        </em>{' '}
        It then names the rooms:{' '}
        <em>
          &ldquo;The crickets often invade storage buildings, crawlspaces, basements, garages and
          indoor areas where moisture may be a problem&rdquo;
        </em>{' '}
        — and gives bathrooms and laundry rooms as its own examples of the last.
      </p>
      <p>
        <strong>Weather drives the timing.</strong> NC State states that{' '}
        <em>
          &ldquo;Camel crickets often become a problem when we have extremes in weather
          conditions&rdquo;
        </em>
        , naming excessive rainfall and extended hot dry periods as the two extremes. Both push the
        same insect toward the same damp indoor space, which is why the problem can arrive in a wet
        spring and again in a dry August.
      </p>
      <p>
        <strong>They are mostly wandering in by mistake.</strong> Iowa State describes them as
        usually <em>&ldquo;accidental invaders&rdquo;</em> that wander in from adjacent areas, and
        University of Maine uses the same phrase. That framing matters for what to do: an insect
        that keeps walking in through a gap is answered by closing the gap, not by treating the
        room it walks into.
      </p>
      <div className="not-prose my-6 rounded-lg border border-blue-300 bg-blue-50 p-5">
        <p className="m-0 text-base text-blue-900">
          <strong>They generally will not breed in the house.</strong> Iowa State states that{' '}
          <em>
            &ldquo;They generally do not reproduce indoors, except in situations that provide
            continuous dark, moist conditions.&rdquo;
          </em>{' '}
          That is a qualified no, and the qualifier is the moisture again. A dry basement is not a
          breeding site. A permanently damp crawl space can be.
        </p>
      </div>

      <h2 id="damage">What They Damage</h2>
      <p>
        <strong>Very little, and every source that claims damage qualifies the claim.</strong> Iowa
        State is the flattest:{' '}
        <em>
          &ldquo;Camel crickets are of little economic importance except as a nuisance in buildings
          and homes, especially basements.&rdquo;
        </em>
      </p>
      <p>
        NC State goes one step further but keeps the condition attached: although they are mostly a
        nuisance pest,{' '}
        <em>
          &ldquo;they can damage stored items, such as garments and linens packed in boxes in a
          garage or basement if the problem goes unchecked&rdquo;
        </em>{' '}
        for some time and the crickets cannot find other food. Rutgers describes them{' '}
        <em>&ldquo;feeding on starch, fungi, and occasionally fabrics.&rdquo;</em>
      </p>
      <p>
        <strong>There is a sign worth knowing about.</strong> NC State states that{' '}
        <em>
          &ldquo;A telltale sign of a heavy infestation is the presence of dark fecal smears on
          surfaces&rdquo;
        </em>
        , and gives a floor joist as its own example of where to look. It is worth washing hands
        after handling anything so marked, as with any insect droppings indoors.
      </p>

      <h2 id="exclusion">Drying and Sealing</h2>
      <p>
        NC State is explicit that this is the part that works:{' '}
        <em>
          &ldquo;Although pesticides can help reduce the nuisance problems with camel crickets,
          they are not a long-term solution.&rdquo;
        </em>{' '}
        Its own list, in its own words:
      </p>
      <ul>
        <li>
          <em>
            &ldquo;Reduce moisture indoors, as well as in other critical areas such as basements or
            crawlspaces.&rdquo;
          </em>
        </li>
        <li>
          <em>
            &ldquo;Install weather-stripping along the bottom of house and garage doors so that it
            fits tightly against the threshold.&rdquo;
          </em>
        </li>
        <li>
          Caulk or seal gaps and openings around window frames, doors, the foundation and clothes
          dryer vents, crawlspace access doors and soffits, and where heating, air-conditioning and
          plumbing lines pass through the foundation.
        </li>
        <li>
          <em>
            &ldquo;Stack boxes and other items off of the ground and away from the walls in a
            garage or storage building.&rdquo;
          </em>
        </li>
        <li>
          <em>
            &ldquo;Keep ground cover and mulch at least 12 inches or more away from the
            foundation.&rdquo;
          </em>{' '}
          NC State adds that an inorganic cover such as gravel is preferable close to the
          foundation.
        </li>
        <li>
          <em>&ldquo;Do not stack firewood against the house.&rdquo;</em>
        </li>
      </ul>
      <p>
        Iowa State adds the outdoor harborage in almost the same terms:{' '}
        <em>&ldquo;Piles of bricks, stones, boards, leaves, etc., should be removed.&rdquo;</em>
      </p>
      <p>
        <strong>The 12-inch mulch setback is the only measured figure on this page.</strong> It is
        NC State&rsquo;s, and no other source read here publishes a distance. It is given as a
        minimum, not a target.
      </p>

      <h2 id="removal">Removing the Ones Already In</h2>
      <p>
        <strong>For small numbers, mechanically.</strong> Clemson:{' '}
        <em>&ldquo;Indoors, vacuuming can remove crickets.&rdquo;</em> It adds that the vacuum bag
        should be thrown away outside afterwards. Iowa State agrees for individuals:{' '}
        <em>
          &ldquo;Occasional, individual crickets can be picked or swept up and discarded.&rdquo;
        </em>{' '}
        Rutgers names a fly swatter, a broom and a vacuum cleaner as mechanical means where only a
        few are present.
      </p>
      <p>
        <strong>For larger numbers, NC State names a trap class.</strong>{' '}
        <em>
          &ldquo;Place sticky boards, such as those used for cockroaches and mice, in corners and
          behind appliances to catch crickets that enter your home.&rdquo;
        </em>{' '}
        That is a specific, ordinary product class rather than a proprietary device. No sticky
        board is named on this page for the reason set out at the top: the listings could not be
        read on the day.
      </p>
      <p>
        Rutgers adds a cause worth removing rather than trapping around:{' '}
        <em>remove cardboard boxes, as the glue may serve as food.</em>
      </p>

      <h2 id="disagreement">Where the Sources Disagree</h2>
      <p>
        <strong>Four sources, four positions on spraying indoors.</strong> They are set out here
        rather than reconciled, because reconciling them would mean choosing one and presenting it
        as the consensus it is not.
      </p>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Position on indoor treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">Rutgers, 2010</td>
              <td className="border border-gray-300 px-3 py-2">
                Recommends it directly — spray around baseboards, cracks and crevices and around
                window and door frames with a product labeled for controlling crickets indoors
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">NC State</td>
              <td className="border border-gray-300 px-3 py-2">
                Permits it, but subordinates it —{' '}
                <em>&ldquo;Any chemical control should focus first on outdoor barrier treatments.&rdquo;</em>{' '}
                Household insecticides may go on baseboards and behind appliances, but if the
                exclusion steps are followed the need for indoor application should be reduced
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">Clemson</td>
              <td className="border border-gray-300 px-3 py-2">
                Restricts it by severity — use chemicals for indoor{' '}
                <em>&ldquo;control only when a large infestation is present.&rdquo;</em> In those
                cases, cracks and crevices only
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2 font-semibold">Iowa State, 2016</td>
              <td className="border border-gray-300 px-3 py-2">
                Nearly rules it out —{' '}
                <em>
                  &ldquo;Treating indoor floor areas where camel crickets hide during the day is a
                  last resort of limited benefit.&rdquo;
                </em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>What they do agree on is everything before the spray.</strong> All four put
        moisture reduction and exclusion first. The disagreement is only about what to do after
        that, and it runs the full width from &ldquo;do it&rdquo; to &ldquo;last resort of limited
        benefit&rdquo;. A reader deciding whether to treat indoors should know the published advice
        is not settled.
      </p>
      <p>
        On outdoor treatment the spread is narrower. NC State puts barrier sprays and perimeter
        baits first among chemical options and notes heavy rain can defeat them. Rutgers describes
        a band on and around the foundation, outward two to three feet. Iowa State says a residual
        barrier may be of benefit if enough spray is applied to reach the breeding sites. All three
        agree the outside is where a chemical belongs if one is used at all.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Five publications, all university extension services, each fetched and read on 3 September
        2026. Where two sources state the same character it is reported as corroboration; where
        four disagree, all four are given. No claim on this page rests on a source that could not
        be opened.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
