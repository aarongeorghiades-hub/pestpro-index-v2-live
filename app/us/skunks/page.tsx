import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { SKUNK_NAV, SKUNK_HOME } from '../components/skunkNav';

const URL = 'https://pestproindex.com/us/skunks';
const TITLE = 'Skunks: Lawn Digging, Dens and the Odor Question';
const DESCRIPTION =
  'How to tell skunk digging from raccoon damage, the hardware cloth spec extension services give, and why you must test a den before sealing it.';

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
  datePublished: '2026-08-22',
  dateModified: '2026-08-22',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Skunks', item: 'https://pestproindex.com/us/skunks' },
    { '@type': 'ListItem', position: 2, name: 'Skunks', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'Is it a skunk digging my lawn, or something else?',
    answer:
      'Look at the size and shape of the holes, and at how much sod has moved. Nebraska Extension describes skunk damage as a collection of cone-shaped holes dug at the surface of the ground, and states that raccoon damage to turf typically is much more extensive with large chunks of sod being rolled and torn. Penn State Extension and Montana State University Extension both describe skunk digging as small cone-shaped holes or patches of upturned earth, up to 3 to 4 inches in diameter, and University of Kentucky gives the same 3 to 4 inch figure. University of California IPM gives a slightly wider range, cone-shaped depressions that range from 3 to 5 inches across. Montana State University Extension adds the caution that several other animals, including domestic dogs, also dig in lawns, and Penn State Extension states that it is important to try and identify the problem species before undertaking control measures.',
  },
  {
    question: 'How deep should I bury the mesh so a skunk cannot dig under it?',
    answer:
      'The sources do not agree, and the spread is wide enough that it matters. University of California IPM says to bury the wire at least 6 inches. Nebraska Extension says to bury one side at least 2 to 3 inches below the ground surface, extending it 12 inches outward in an L shape. University of Kentucky says the mesh wire should be buried 12 to 18 inches underground. Penn State Extension and Montana State University Extension both say to bury fencing 1 and a half to 2 feet in areas where skunks could gain access by digging. What three of them do agree on is the shape: Nebraska Extension, Penn State Extension and University of Kentucky all describe bending the bottom outward into an L. All four depth figures are given here attributed, and no source is preferred over another.',
  },
  {
    question: 'Can I just seal up the hole under my deck?',
    answer:
      'Not until you have established that nothing is inside, and the sources are emphatic about this. Nebraska Extension says to temporarily seal openings with newspaper or loose dirt to determine if the hole is still in use, and states plainly that you should never secure a hole unless you are certain that it is no longer active. University of California IPM adds that blocking the entrance is more problematic if there are several young left behind, and describes a one-way, outward-swinging gate that will allow any remaining skunks to leave but not to re-enter. University of Kentucky states that young are born in May and June, so the risk of sealing kits inside is at its highest then. Penn State Extension notes that skunks are active at night, so night is a good time to close off entrances to dens.',
  },
  {
    question: 'Does a skunk out in daylight mean it has rabies?',
    answer:
      'Three sources address this and they do not agree, so all three are given here. Penn State Extension states that any skunk showing abnormal behavior, such as daytime activity, may be rabid. University of California IPM states that if they exhibit no fear of people or pets and show some aggressive behavior, chances are quite high that they are rabid. Nebraska Extension states the opposite caution: it is impossible to diagnose rabies using visual signs, because these behaviors also are clinical signs of other diseases. Two sources also give innocent explanations for daytime activity. University of California IPM states that skunks can be active during the daytime, particularly in human-use areas, and University of Kentucky states that breeding males move slowly and become active during the day. University of Kentucky advises that if you notice a skunk acting strangely, do not approach it.',
  },
  {
    question: 'What actually removes the smell?',
    answer:
      'University of California IPM states that if a skunk sprays a person or pet, the odor can be removed with a mixture of hydrogen peroxide, baking soda, and liquid soap, and gives the proportions as 1 quart 3% hydrogen peroxide, 1/4 cup baking soda and 1 teaspoon liquid soap. The same source states that once the hydrogen peroxide is mixed with the baking soda the mixture is unstable and generates oxygen and cannot be bottled or stored, and explains that oxidation changes the chemical composition of skunk scent. For a pet, University of California IPM says to call your veterinarian to determine current recommendations for washing the animal. Penn State Extension recommends the same hydrogen peroxide solution and adds that clothing can be washed with laundry detergent mixed with half a cup of baking soda.',
  },
  {
    question: 'Can I catch rabies from being sprayed?',
    answer:
      'The Texas Department of State Health Services states directly that you cannot get rabies by being sprayed by a skunk. University of California IPM states that rabies is a viral disease transmitted by the bite of an infected animal. The Texas Department of State Health Services also advises avoiding contact with wild animals, and University of Kentucky advises that all pet dogs and cats and important livestock should be vaccinated for rabies, and that you should not keep skunks or other wild animals as pets.',
  },
];

const sources: Source[] = [
  {
    label: 'Skunks — Pest Notes. Page states "Updated: 04/2015"',
    publisher: 'UC Statewide IPM Program, University of California',
    date: 'Accessed August 22, 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/skunks/',
  },
  {
    label: 'Dealing With Skunks, G1769, 2014 edition',
    publisher: 'Nebraska Extension, University of Nebraska–Lincoln',
    date: 'Accessed August 22, 2026',
    href: 'https://extensionpubs.unl.edu/publication/g1769/2014/html/view',
  },
  {
    label: 'Skunks — Solutions to Common Problems. Page states "Updated: June 23, 2006"',
    publisher: 'Penn State Extension',
    date: 'Accessed August 22, 2026',
    href: 'https://extension.psu.edu/skunks-solutions-to-common-problems',
  },
  {
    label: 'Managing Skunk Problems in Kentucky, FOR-49',
    publisher: 'University of Kentucky Cooperative Extension Service (T. Barnes)',
    date: 'Accessed August 22, 2026',
    href: 'https://publications.mgcafe.uky.edu/files/for49.pdf',
  },
  {
    label: 'Skunks — wildlife damage control',
    publisher: 'Montana State University Extension (James E. Knight)',
    date: 'Accessed August 22, 2026',
    href: 'https://animalrangeextension.montana.edu/wildlife/documents/wildlife%20damage%20control%20skunks.pdf',
  },
  {
    label: 'Skunks (Mephitidae), nuisance IPM notes',
    publisher: 'Utah State University Extension',
    date: 'Accessed August 22, 2026',
    href: 'https://extension.usu.edu/planthealth/ipm/notes_nuisance/skunks',
  },
  {
    label: 'Striped Skunk field guide',
    publisher: 'Missouri Department of Conservation',
    date: 'Accessed August 22, 2026',
    href: 'https://mdc.mo.gov/discover-nature/field-guide/striped-skunk',
  },
  {
    label: 'Rabies',
    publisher: 'Texas Department of State Health Services',
    date: 'Accessed August 22, 2026',
    href: 'https://www.dshs.texas.gov/rabies',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'signs', title: 'What the Digging Looks Like' },
  { id: 'when-active', title: 'When They Are Active' },
  { id: 'why', title: 'Why They Dig' },
  { id: 'dens', title: 'Dens, and When Kits Are In Them' },
  { id: 'exclusion', title: 'Control: Exclusion First' },
  { id: 'trapping', title: 'Control: Enclosed and Covered Traps' },
  { id: 'odor', title: 'Odor' },
  { id: 'rabies', title: 'Rabies' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function SkunksPage() {
  return (
    <UsPageLayout
      title="Skunks"
      subtitle="Small cone-shaped holes across a lawn overnight, and a hole under the deck that may or may not be occupied. Here is what university extension services and state agencies actually say about the animal, the damage, and the one step that has to happen before you close anything up."
      lastUpdated="August 2026"
      readingTime="10 min"
      tocItems={tocItems}
      homeHref={SKUNK_HOME}
      clusterNav={SKUNK_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Two things bring a skunk to attention: a lawn full of small holes that appeared overnight,
        and an opening under a deck, a shed or a porch. This page covers what the animal is, how to
        tell its digging from something else&rsquo;s, and what the sources support doing about it.
        Exclusion comes before trapping here, because that is the order the sources themselves put
        it in.
      </p>
      <p>
        One rule governs everything below and it is worth reading before anything else on this page.
        Nebraska Extension states that you should never secure a hole unless you are certain that it
        is no longer active. Sealing an occupied den shuts the animals inside it. The test that
        establishes whether a hole is active is in the exclusion section, alongside the mesh
        specification, not somewhere further down.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        Species counts differ between sources because they are counting different areas, so each is
        given here with its area attached. Montana State University Extension states that the skunk,
        a member of the weasel family, is represented by four species in North America, and that
        striped skunks are the most abundant of the four species.
      </p>
      <ul>
        <li>
          <strong>The striped skunk.</strong> Penn State Extension identifies it as{' '}
          <em>Mephitis mephitis</em>, characterized by prominent, lateral white stripes that run down
          its back.
        </li>
        <li>
          <strong>The spotted skunks.</strong> Nebraska Extension names the eastern spotted skunk as{' '}
          <em>Spilogale putorius</em>, and University of California IPM names the western spotted
          skunk as <em>Spilogale gracilis</em>. University of California IPM describes spotted skunks
          as black with white spots or short white streaks. University of Kentucky adds that they are
          much more nervous than striped skunks and are better climbers, which matters for exclusion
          below.
        </li>
        <li>
          <strong>Two species per state, four in North America.</strong>{' '}
          <AsOf date="04/2015">
            University of California IPM states that two species of skunk are found in California,
            the spotted skunk and the striped skunk, which is the species most commonly found around
            homes.
          </AsOf>{' '}
          Nebraska Extension likewise names two for Nebraska. Neither is a national count.
        </li>
      </ul>
      <p>
        On size, Montana State University Extension describes the striped skunk as about the size of
        an ordinary house cat, up to 29 inches long and weighing about 8 pounds, and the spotted
        skunk as smaller, up to 21 inches long. The Missouri Department of Conservation gives
        measured ranges: total length 20 to 30 inches, tail length 7 to 15 inches, and weight 2 and a
        half to 11 and a half pounds, with the spotted skunk smaller at three quarters to 2 and three
        quarter pounds.
      </p>
      <p>
        On where they are, the figures the sources give are state-scoped rather than national.
        University of Kentucky states that the striped skunk can be found in every county of
        Kentucky, and that the spotted skunk is rare and can be found only in the southeastern corner
        of the state.{' '}
        <AsOf date="June 2006">
          Penn State Extension states that the spotted skunk occurs in a few southcentral
          Pennsylvania counties, that skunk populations range from 2 to 50 individuals per square
          mile, and that with the urbanization of rural areas, people and skunks have come in closer
          contact.
        </AsOf>{' '}
        University of Kentucky states that skunk home ranges normally vary from one to one and a half
        miles.
      </p>

      <h2 id="signs">What the Digging Looks Like</h2>
      <p>
        Skunk feeding damage is many small holes rather than a few big ones, and the contrast with a
        raccoon is the most useful single check.
      </p>
      <ul>
        <li>
          <strong>Cone-shaped holes.</strong> Nebraska Extension describes skunk damage to a lawn as
          a collection of cone-shaped holes dug at the surface of the ground, dug for grubs and other
          insect larvae. The Missouri Department of Conservation describes it as digging up soil in
          small pits.
        </li>
        <li>
          <strong>Hole size, three figures.</strong> University of Kentucky gives 3 to 4 inch
          cone-shaped holes or patches of upturned earth. Penn State Extension and Montana State
          University Extension give small cone-shaped holes or patches of upturned earth, up to 3 to
          4 inches. University of California IPM gives cone-shaped depressions that range from 3 to 5
          inches across.
        </li>
        <li>
          <strong>Where it happens.</strong> Penn State Extension and Montana State University
          Extension both state that skunks dig holes in lawns, golf courses, and gardens to search
          for insect grubs found in the soil. University of California IPM adds that they may also
          damage lawns by rolling back sections of sod.
        </li>
        <li>
          <strong>The raccoon contrast.</strong> Nebraska Extension states that damage to turf caused
          by raccoons typically is much more extensive, with large chunks of sod being rolled and
          torn.
        </li>
        <li>
          <strong>Den entrance.</strong> Nebraska Extension states that active burrows will be
          grass-free and 3 to 5 inches in diameter, and that entrances typically are 3 to 5 inches in
          diameter with little to no grass growing around the opening. Montana State University
          Extension notes that skunks may burrow under porches or buildings by entering foundation
          openings.
        </li>
        <li>
          <strong>Other traces.</strong> Penn State Extension states that droppings are a quarter to
          a half inch in diameter and 1 to 2 inches long. Montana State University Extension gives
          hind foot tracks as approximately 2 and a half inches long.
        </li>
      </ul>
      <p>
        Two cautions from the sources are worth more than any single measurement. Montana State
        University Extension states that several other animals, including domestic dogs, also dig in
        lawns, and Penn State Extension states that it is important to try and identify the problem
        species before undertaking control measures. Smell is not the shortcut it seems either:
        Montana State University Extension states that odor is not always a reliable indicator of the
        presence or absence of skunks, Nebraska Extension states that dens emitting a musky odor
        likely are occupied by foxes, and both Penn State Extension and Montana State University
        Extension note that animals that have been sprayed by skunks move under houses, which can
        make an owner think a skunk is present when it is not.
      </p>

      <h2 id="when-active">When They Are Active</h2>
      <p>
        The sources divide on this, and the division matters later on this page, so both positions
        are given attributed.
      </p>
      <ul>
        <li>
          <strong>Strictly nocturnal.</strong> Nebraska Extension states that skunks are nocturnal,
          active from dusk to dawn. University of Kentucky states that skunks are nocturnal, becoming
          active from sunset to slightly after sunrise. Penn State Extension and Montana State
          University Extension state that they are nocturnal in habit, rather slow-moving and
          deliberate.
        </li>
        <li>
          <strong>Dawn, dusk, night, and sometimes daylight.</strong> University of California IPM
          states that skunks are usually active at dawn, dusk, and during the night, and adds
          explicitly that they can be active during the daytime, particularly in human-use areas.
        </li>
      </ul>
      <p>
        The sources agree about winter. Nebraska Extension states that skunks do not hibernate, but
        can become dormant or semi-active, and University of Kentucky states that skunks may remain
        inactive in the den for a period of days or weeks during cold weather.
      </p>

      <h2 id="why">Why They Dig</h2>
      <p>
        The digging is feeding behavior. University of California IPM describes a highly varied diet
        including insects, grubs, earthworms, small rodents, snakes, lizards, frogs, mushrooms,
        berries and fruit, pet food, and garbage. Penn State Extension and Montana State University
        Extension state that insects are their preferred food and are more available in spring and
        summer, and Penn State Extension states that they eat plant and animal matter in about equal
        amounts during fall and winter.
      </p>
      <ul>
        <li>
          Penn State Extension states that they seem to prefer grasshoppers, white grubs, beetles,
          and crickets. University of Kentucky names grasshoppers, crickets, beetles, wasps, cutworms,
          and other insect larvae.
        </li>
        <li>
          Penn State Extension and Montana State University Extension both state that field and house
          mice are regular and important items in the skunk diet, particularly in winter.
        </li>
        <li>
          The Missouri Department of Conservation states that in spring and summer, insects are their
          preferred food, including bees, wasps, hives, larvae, and honey. University of Kentucky
          states that skunks can also damage beehives as they feed on adult and larval bees.
        </li>
        <li>
          University of California IPM states that skunks will also opportunistically feed on bird
          eggs.
        </li>
      </ul>
      <p>
        Two sources put the other side of the ledger. Penn State Extension states that skunks feed on
        large numbers of agricultural and garden pests, and Montana State University Extension states
        that an economic evaluation of the feeding habits of skunks shows that only 5 percent of the
        diet is made up of items that are economically valuable to people.
      </p>

      <h2 id="dens">Dens, and When Kits Are In Them</h2>
      <p>
        Where a skunk dens decides whether it is a problem at all, and when kits are present decides
        whether an opening can be closed.
      </p>
      <ul>
        <li>
          University of California IPM states that skunks often den in burrows, and will often use
          abandoned burrows dug by ground squirrels, foxes, or coyotes and enlarge them if necessary.
          Penn State Extension adds that they may use old woodchuck burrows &mdash; the animal
          that dug it is covered on our <Link href="/us/groundhogs">groundhogs page</Link>, and its
          entrance is wider than a skunk would excavate for itself.
        </li>
        <li>
          Nebraska Extension states that they prefer to den in sheltered areas under stumps, fallen
          trees, lumber piles, decks, and porches. University of Kentucky lists vacant buildings,
          under house porches, culverts, brush piles and tree stumps.
        </li>
        <li>
          University of Kentucky states that skunks use a variety of dens for loafing during the day,
          for giving birth and raising young, and for periods of inactivity during the winter.
        </li>
      </ul>
      <p>
        On timing, Montana State University Extension states that adult skunks begin breeding in late
        February, Penn State Extension gives late February through late March, and University of
        California IPM gives February and March for the striped skunk. University of Kentucky states
        that skunks mate in February and that the young are born in May and June. Montana State
        University Extension states that yearling females mate in late March, and that older females
        bear young during the first part of May while yearling females bear young in early June.
        University of California IPM gives gestation as about 9 weeks and Nebraska Extension gives it
        as about 63 days. Montana State University Extension states there is usually only one litter
        annually. Penn State Extension reports that a male may travel 4 to 5 miles each night while
        breeding.
      </p>
      <p>
        How many kits is not agreed, and the figures are given here as each source states them.
        University of California IPM gives litters ranging from 4 to 6 kits. Penn State Extension
        gives 4 to 6 young. Montana State University Extension gives 4 to 6 young but may have from 2
        to 16. Nebraska Extension gives litters averaging four to eight kits. University of Kentucky
        gives usually five to nine young kits, with as many as 18 or as few as two. The Missouri
        Department of Conservation gives a single litter of 4 to 6 young born from early May to early
        June. Nebraska Extension notes that young are born blind and hairless but with their striped
        pattern.
      </p>

      <h2 id="exclusion">Control: Exclusion First</h2>
      <p>
        Exclusion is what the sources put first, and it is the only approach here that stops the
        problem returning. <strong>The specification and the test that has to precede it are both in
        this section, together, because doing the second without the first shuts animals in.</strong>
      </p>
      <h3>Before you close anything: establish that the hole is empty</h3>
      <ul>
        <li>
          <strong>The test.</strong> Nebraska Extension states that you should temporarily seal
          openings with newspaper or loose dirt to determine if the hole is still in use.
        </li>
        <li>
          <strong>The rule.</strong> Nebraska Extension states that you should never secure a hole
          unless you are certain that it is no longer active.
        </li>
        <li>
          <strong>Why it matters most in late spring.</strong> University of California IPM states
          that blocking the entrance is more problematic if there are several young left behind, and
          University of Kentucky states that the young are born in May and June.
        </li>
        <li>
          <strong>Timing.</strong> Penn State Extension states that skunks are active at night, so
          night is a good time to close off entrances to dens.
        </li>
        <li>
          <strong>A one-way door, built rather than bought.</strong> University of California IPM
          describes a one-way, outward-swinging gate that will allow any remaining skunks to leave
          but not to re-enter, constructed from half-inch mesh hardware cloth hinged at the top of
          the frame and left loose on the other three sides. Penn State Extension describes the same
          thing as a one-way door over the opening, improvised to allow skunks to leave. University
          of Kentucky describes attaching a piece of half-inch hardware cloth to the opening where
          more than one skunk may be living under a building. All three describe a construction, not
          a product.
        </li>
        <li>
          University of California IPM also describes placing one or more floodlights beneath the
          building facing outward through the entry point to help drive them out.
        </li>
      </ul>
      <h3>The mesh, and how deep to bury it</h3>
      <ul>
        <li>
          <strong>Quarter-inch hardware cloth.</strong> University of California IPM states to close
          off all potential entrances or openings under houses, garden tool sheds, mobile homes,
          porches, and decks with quarter-inch mesh hardware cloth, and notes that the advantage of
          the small mesh is that it will also exclude rats and house mice if installed correctly.
          Nebraska Extension states to use quarter-inch wire mesh or other durable material to close
          entrances. University of Kentucky gives quarter-inch or half-inch hardware cloth or similar
          material.
        </li>
        <li>
          Utah State University Extension states that in buildings without concrete foundations, you
          should seal all holes with a fine wire mesh to prevent skunks from denning under the
          structure. Penn State Extension and Montana State University Extension state that all
          openings should be covered with wire mesh, sheet metal, or concrete, and that skunks are
          kept from denning under buildings by sealing off all foundation openings.
        </li>
        <li>
          Nebraska Extension specifies obtaining a 3-foot-wide roll of half-inch galvanized hardware
          cloth. For a poultry yard, Penn State Extension gives 3-foot wire mesh fencing and
          University of Kentucky gives 3-foot-wide, 1-inch poultry netting with the bottom 12 inches
          buried.
        </li>
        <li>
          <strong>Spotted skunks climb.</strong> Nebraska Extension states that since spotted skunks
          are good climbers, you should use a 4-foot-wide mesh and create a 6-inch-wide overhang to
          stop them from climbing.
        </li>
      </ul>
      <p>
        <strong>How deep to bury it is not agreed, and the four figures span 2 inches to 2 feet.</strong>{' '}
        University of California IPM says to bury the wire at least 6 inches to discourage skunks from
        digging under. Nebraska Extension says to bury one side at least 2 to 3 inches below the
        ground surface, extending it 12 inches outward in an L shape. University of Kentucky says the
        mesh wire should be buried 12 to 18 inches underground. Penn State Extension and Montana State
        University Extension say to bury fencing 1 and a half to 2 feet in areas where skunks could
        gain access by digging. What three sources do agree on is the shape rather than the depth:
        Penn State Extension describes burying the lowest foot of fencing with the bottom 6 inches
        bent 90 degrees outward, and University of Kentucky describes the bottom 6 inches bent outward
        in an L shape. All four depths are reported here as their sources state them, and none is
        preferred.
      </p>
      <h3>Taking away the reasons to stay</h3>
      <ul>
        <li>
          University of California IPM states that potential den sites can be limited by cutting back
          overgrown shrubbery and by stacking firewood tightly, preferably at least 18 inches above
          the ground.
        </li>
        <li>
          Nebraska Extension states to feed and water pets indoors, or provide them just enough for
          one feeding.
        </li>
        <li>
          University of Kentucky states to place garbage or other food materials in sealed trash cans
          rather than garbage bags.
        </li>
      </ul>

      <h2 id="trapping">Control: Enclosed and Covered Traps</h2>
      <p>
        This section describes a method, not a product. Nothing is named or recommended here.
      </p>
      <p>
        University of California IPM states that skunks can be caught with an enclosed cage-type,
        live-catch trap, and writes of the enclosed kind:{' '}
        <em>
          &ldquo;Plastic box traps are superior to wire traps because they are completely enclosed,
          thus reducing the risk of getting sprayed while removing the trapped animal from the
          site.&rdquo;
        </em>{' '}
        That sentence is University of California IPM&rsquo;s comparison of two kinds of construction,
        quoted here as they wrote it, and it is not our own assessment of any product. The same source
        states that if a wire live trap is used, you should cover the back end with an old blanket,
        and that skunks are less stressed in dark environments and thus are less likely to spray. Penn
        State Extension and Montana State University Extension both state that live traps should be
        covered with canvas before setting to reduce the chances of a trapped skunk discharging its
        scent, and that the canvas creates a dark, secure environment for the animal; University of
        Kentucky gives canvas, tarp, or thick burlap. <strong>None of that makes a covered trap
        proof against spraying, and one source says so directly: Nebraska Extension states that a
        covered trap does not prevent skunks from spraying, and that it only reduces the
        likelihood.</strong>
      </p>
      <ul>
        <li>
          <strong>Size.</strong> Penn State Extension states that live traps should be approximately
          10 by 10 by 30 inches in size.
        </li>
        <li>
          <strong>Placement.</strong> Penn State Extension states that skunks can be caught in live
          traps set near the entrance to their den, and that when a den is used by more than one
          animal, several traps should be set to reduce capture time.
        </li>
        <li>
          <strong>Bait.</strong> Penn State Extension states to use canned fish-flavored cat food,
          and that peanut butter, sardines, and chicken entrails are also effective.
        </li>
        <li>
          <strong>Approach.</strong> University of Kentucky states to slowly approach the animal and
          gently cover the trap with the material if it was not covered when set. Nebraska Extension
          states that skunks can be caught easily in cage traps, and separately advises carefully
          checking window wells for trapped skunks.
        </li>
      </ul>
      <p>
        We have not published a product page for enclosed skunk traps.
      </p>

      <h2 id="odor">Odor</h2>
      <p>
        What the sources say about the spray itself comes first, because most of it corrects
        something widely believed. Montana State University Extension states that skunks discharge
        nauseating musk from the anal glands and are capable of several discharges, not just one. The
        Missouri Department of Conservation states that the musk can be aimed and sprayed at will.
        University of Kentucky describes the warning that usually comes first, that skunks stamp
        their front feet rapidly and growl or hiss, gives the range as directed accurately up to 10
        feet and less accurately for 20 feet, and describes the fluid as a thick, volatile, oily,
        sulfur-containing compound. Nebraska Extension states that skunks do not emit odor unless
        provoked to spray, and corrects two common beliefs directly: skunks can spray whether or not
        their feet are on the ground, and skunks do not disperse the spray by shaking their tails.
        University of California IPM notes that they often spray dogs that bark and approach rapidly.
      </p>
      <p>
        On removing it, University of California IPM states that if a skunk sprays a person or pet,
        the odor can be removed with a mixture of hydrogen peroxide, baking soda, and liquid soap, and
        gives the proportions as 1 quart 3% hydrogen peroxide, 1/4 cup baking soda and 1 teaspoon
        liquid soap. The same source states that once the hydrogen peroxide is mixed with the baking
        soda the mixture is unstable and generates oxygen and cannot be bottled or stored, and
        explains that oxidation changes the chemical composition of skunk scent so that it no longer
        smells. <strong>For a pet, University of California IPM says to call your veterinarian to
        determine current recommendations for washing the animal.</strong> Penn State Extension
        recommends the same hydrogen peroxide, baking soda and liquid soap solution, and states that
        clothing can be washed with laundry detergent mixed with half a cup of baking soda.
      </p>
      <p>
        For a structure rather than a person or an animal, Montana State University Extension
        describes neutroleum alpha as a scent-masking solution that can be applied to the sprayed
        area to reduce the odor. Two caveats travel with it: University of California IPM states
        plainly that you should not use neutroleum-alpha on pets or people, and that products
        containing it are not readily available. University of California IPM also warns that
        ammonia and other strong-smelling repellents should not be placed under an occupied building,
        because fumes can enter the interior space.
      </p>
      <p>
        <strong>Tomato juice is where the sources split, so both positions are given.</strong>{' '}
        University of Kentucky lists home remedies that may help to reduce the intensity of the smell
        as including tomato juice, and Montana State University Extension states that diluted
        solutions of vinegar or tomato juice may be used to eliminate most of the odor from people,
        pets, or clothing. Against that, University of California IPM and Penn State Extension both
        recommend the hydrogen peroxide mixture instead, and Penn State Extension treats vinegar
        diluted with water as the fallback if you do not have hydrogen peroxide. All four are
        university extension services and no source is preferred here over another.
      </p>

      <h2 id="rabies">Rabies</h2>
      <p>
        <strong>The Texas Department of State Health Services states directly that you cannot get
        rabies by being sprayed by a skunk.</strong> University of California IPM states that rabies
        is a viral disease transmitted by the bite of an infected animal.
      </p>
      <p>
        On how common it is, the sources describe their own regions and the figures should be read
        that way. The Texas Department of State Health Services states that Texas periodically
        experiences outbreaks of rabies in skunks. University of California IPM states that in
        California, skunks are one of the most common carriers of rabies. Montana State University
        Extension states that skunks are the primary carriers of rabies in the Midwest, and elsewhere
        that rabies may be carried by skunks on occasion. Nebraska Extension states that skunks are
        particularly susceptible to the disease, and gives one dated state figure: in 2012, skunks
        comprised almost 60 percent of all positive rabies results of animals submitted for testing
        in Nebraska. That figure is one state in one year and is not a national or current rate.
      </p>
      <p>
        <strong>Whether a skunk out in daylight is rabid is genuinely disputed, and all three
        positions are given here rather than one.</strong> Penn State Extension states that any skunk
        showing abnormal behavior, such as daytime activity, may be rabid, and University of
        California IPM states that if they exhibit no fear of people or pets and show some aggressive
        behavior, chances are quite high that they are rabid. Nebraska Extension states the opposite
        caution: it is impossible to diagnose rabies using visual signs, because these behaviors also
        are clinical signs of other diseases. Two sources give ordinary explanations for daylight
        activity as well: University of California IPM states that skunks can be active during the
        daytime, particularly in human-use areas, and University of Kentucky states that breeding
        males move slowly and become active during the day. Nothing on this page should be read as
        saying that a skunk seen in daylight has rabies.
      </p>
      <p>
        What the sources agree on is what to do. University of Kentucky states that if you notice a
        skunk acting strangely, aggressive or nervous, wandering in the daytime, or tame and listless,
        you should not approach it, and describes the late-stage signs as excessive salivation,
        unusual aggression or nervousness, wandering about during the daytime, and little fear of
        humans. The Texas Department of State Health Services advises avoiding contact with wild
        animals. University of Kentucky states that all pet dogs and cats and important livestock
        should be vaccinated for rabies, and that skunks and other wild animals should not be kept as
        pets. University of California IPM states that people can survive the bite of a rabid animal
        but only if medical attention is received in time.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing,
        ordering and emphasis are our own judgment and are not a finding of any source. Where
        sources give different figures for the same measurement, all are reported and attributed
        rather than averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
