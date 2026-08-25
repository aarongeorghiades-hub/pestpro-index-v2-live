import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import { RACCOON_NAV, RACCOON_HOME } from '../components/raccoonNav';

const URL = 'https://pestproindex.com/us/raccoons';
const TITLE = 'Raccoons: Rolled Turf, Attic Entry, and What the Sources Say';
const DESCRIPTION =
  'How to tell raccoon lawn damage from a digging animal, the measured mesh and chimney specifications extension services give, and what university and state agency sources say about rabies and raccoon roundworm.';

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
    { '@type': 'ListItem', position: 1, name: 'Raccoons', item: 'https://pestproindex.com/us/raccoons' },
    { '@type': 'ListItem', position: 2, name: 'Raccoons', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'Do raccoons dig holes in lawns?',
    answer:
      'UC IPM states that raccoons do not typically dig holes in lawns when looking for food, and that if you see conical-shaped holes in your yard, this is likely the result of skunk foraging. What raccoons do to a lawn is different: UC IPM states that raccoons often will roll up newly laid turf when looking for worms and grubs, Nebraska Extension states that raccoons will roll up or shred the sod in search of food, and Iowa State University Extension describes them rolling up turf in search of grubs. So a lawn full of small conical holes and a lawn with its turf peeled back are two different signatures.',
  },
  {
    question: 'Is a raccoon out in the day sick?',
    answer:
      'No source consulted for this page states that a raccoon seen in daylight is sick. Virginia Tech Extension describes raccoons as nocturnal, meaning active mostly at night, and states that individuals occasionally will be active during daylight hours. The same source states that chimneys and attics are spaces commonly used by raccoons as daytime resting spots, so an animal seen leaving a roof by day is doing something the literature describes. UC IPM, Iowa State University Extension, Nebraska Extension and Utah State University Extension all describe the animal as active mainly at night.',
  },
  {
    question: 'What is raccoon roundworm?',
    answer:
      'Washington State Department of Health states that Baylisascaris worms grow inside raccoon intestines, where they produce eggs that are passed in the feces. Wisconsin Department of Health Services states that people become infected by ingesting infectious eggs, and that eggs passed in raccoon feces are not immediately infectious. Washington State Department of Health states that after 2 to 4 weeks in the environment, these eggs become infectious to humans and other animals, and that most infections occur in young children or persons with developmental disabilities who are more likely to put contaminated objects, dirt, or sand in their mouth.',
  },
  {
    question: 'What are raccoon latrines and where are they?',
    answer:
      'Washington State Department of Health states that raccoons defecate in communal sites, called latrines, and that many raccoons may use the same latrine. It describes them as often found at the bases of trees, in unsealed attics, or on flat surfaces such as logs, tree stumps, rocks, decks, and rooftops. Ohio State University states that most latrines are small and are usually produced by a single raccoon during a season. UC IPM notes the indoor version of the same behavior: raccoons may begin using an area of the attic for a latrine.',
  },
  {
    question: 'How deep should the mesh be buried?',
    answer:
      'The two sources give different figures and both are reported here as they state them. UC IPM says the bottom edge of the wire should be buried at least 6 inches deep, extended outward for 12 inches, and then back-covered with soil. Nebraska Extension says to bury the mesh at least 4 inches below the soil and create a 12 to 18 inch skirt under the soil to discourage digging. Neither is preferred over the other on this page.',
  },
  {
    question: 'How big an opening does a raccoon need?',
    answer:
      'Nebraska Extension states that opossums need an opening that is at least 3 inches wide, while raccoons need at least 4. On size more generally, UC IPM describes the adult raccoon as a stocky mammal about 2 to 3 feet long, Nebraska Extension gives 26 to 40 inches nose to tip of tail, Virginia Tech Extension gives a total length of 25 to 41 inches for males and 24 to 36 inches for females, and the Missouri Department of Conservation gives a total length of 21 and a half to 38 inches.',
  },
  {
    question: 'What should be cleared away first?',
    answer:
      'UC IPM states that pet food left outdoors should be removed before nightfall, and Virginia Tech Extension states that unconsumed pet food must not be accessible outdoors, especially at night. On containers, UC IPM describes using metal garbage cans with secure lids, Nebraska Extension says trash cans, preferably metal, should have tight-fitting lids that remain attached even if tipped over, Iowa State University Extension says to seal or clamp the tops of bins and lock down dumpster lids at night, and Utah State University Extension says to store garbage in metal or tough plastic containers with tight-fitting lids. UC IPM adds that bird feeders provide another dependable food source, and Nebraska Extension says to use only plant and vegetable matter in compost piles.',
  },
];

const sources: Source[] = [
  {
    label: 'Raccoons — Pest Notes, Home and Landscape',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 22 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/raccoons/',
  },
  {
    label: 'Raccoons: Damage Management',
    publisher: 'Iowa State University Extension, Natural Resources',
    date: 'Accessed 22 August 2026',
    href: 'https://naturalresources.extension.iastate.edu/encyclopedia/raccoons-damage-management',
  },
  {
    label: 'Managing Human-Wildlife Interactions: Raccoons (Procyon lotor), CNRE-148',
    publisher: 'Virginia Cooperative Extension, Virginia Tech',
    date: 'Accessed 22 August 2026',
    href: 'https://www.pubs.ext.vt.edu/CNRE/cnre-148/cnre-148.html',
  },
  {
    label: 'Controlling Raccoon and Opossum Damage',
    publisher: 'Nebraska Extension, University of Nebraska–Lincoln',
    date: 'Accessed 22 August 2026',
    href: 'https://cms.unl.edu/ianr/extension/wildlife/sites/unl.edu.ianr.extension.wildlife/files/media/file/controlling-raccoon-opossum-damage.pdf',
  },
  {
    label: 'Raccoons Raiding Your Garden and Garbage',
    publisher: 'Utah State University Extension',
    date: 'Accessed 22 August 2026',
    href: 'https://extension.usu.edu/archive/raccoons-raiding-your-garden-and-garbage',
  },
  {
    label: 'Raccoon field guide',
    publisher: 'Missouri Department of Conservation',
    date: 'Accessed 22 August 2026',
    href: 'https://mdc.mo.gov/discover-nature/field-guide/raccoon',
  },
  {
    label: 'Baylisascaris procyonis',
    publisher: 'Wisconsin Department of Health Services',
    date: 'Accessed 22 August 2026',
    href: 'https://www.dhs.wisconsin.gov/disease/baylisascaris-procyonis.htm',
  },
  {
    label: 'Baylisascariasis (Raccoon Roundworm)',
    publisher: 'Washington State Department of Health',
    date: 'Accessed 22 August 2026',
    href: 'https://doh.wa.gov/you-and-your-family/illness-and-disease-z/baylisascariasis',
  },
  {
    label: 'Raccoon roundworm',
    publisher: 'Wisconsin Department of Natural Resources',
    date: 'Accessed 22 August 2026',
    href: 'https://dnr.wisconsin.gov/topic/wildlifehabitat/disease/Raccoonroundworm',
  },
  {
    label: 'Raccoon Roundworm, fact sheet W-20-08',
    publisher: 'Ohio State University, Woodland Stewards',
    date: 'Accessed 22 August 2026',
    href: 'https://woodlandstewards.osu.edu/sites/woodlands/files/d6/files/pubfiles/W_20_08%20raccoon%20roundworm.pdf',
  },
  {
    label: 'Baylisascaris fact sheet',
    publisher: 'Cornell Wildlife Health Lab, Cornell University',
    date: 'Accessed 22 August 2026',
    href: 'https://cwhl.vet.cornell.edu/sites/default/files/2024-12/cwhl-fact-sheets_baylis.pdf',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'damage', title: 'What the Damage Looks Like' },
  { id: 'exclusion', title: 'Control: Exclusion First' },
  { id: 'attractants', title: 'What Brings Them In' },
  { id: 'disease', title: 'Rabies and Raccoon Roundworm' },
  { id: 'activity', title: 'When They Are Active' },
  { id: 'breeding', title: 'Breeding and Young' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function RaccoonsPage() {
  return (
    <UsPageLayout
      title="Raccoons"
      subtitle="Turf peeled back overnight, or something heavy moving above the ceiling. Here is what university extension services and state agencies say about the animal, the damage it leaves, and the specifications they give for keeping it out."
      lastUpdated="August 2026"
      readingTime="10 min"
      tocItems={tocItems}
      homeHref={RACCOON_HOME}
      clusterNav={RACCOON_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Two things usually bring a raccoon to attention: a lawn with its turf rolled back, and a
        noise overhead. Both have a described signature, and the second one matters more, because
        UC IPM states that females in search of nesting sites may rip off shingles, fascia boards, or
        rooftop ventilators to get into the attic.
      </p>
      <p>
        Exclusion comes before anything else on this page, because that is the order the sources put
        it in. One rule travels with it and is stated where it belongs rather than at the end: Iowa
        State University Extension says to ensure there are no raccoons already present in the
        chimney or anywhere else inside before starting sealing or exclusion steps.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        UC IPM identifies the adult raccoon as <em>Procyon lotor</em>, a stocky mammal about 2 to 3
        feet long. Virginia Tech Extension notes that the scientific name translates to &ldquo;washing
        pre-dog&rdquo;, a reference to the lineage raccoons share with dogs and the belief that
        raccoons wash their food.
      </p>
      <ul>
        <li>
          <strong>Length.</strong> UC IPM gives about 2 to 3 feet. Nebraska Extension gives 26 to 40
          inches, nose to tip of tail. Virginia Tech Extension gives a total length of 25 to 41 inches
          for males and 24 to 36 inches for females, noting males are typically 10 to 15 percent
          heavier. The Missouri Department of Conservation gives a total length of 21 and a half to 38
          inches with a tail of 5 to 12 inches.
        </li>
        <li>
          <strong>Tracks.</strong> Utah State University Extension states that the hind print is 3 and
          a quarter to 4 and a half inches long, much longer than wide.
        </li>
        <li>
          <strong>Climbing.</strong> Nebraska Extension states that raccoons are exceptional climbers,
          able to scale trees, chimneys, and downspouts.
        </li>
        <li>
          <strong>The opening they need.</strong> Nebraska Extension states that opossums need an
          opening that is at least 3 inches wide, while raccoons need at least 4.
        </li>
      </ul>
      <p>
        <strong>On weight the four sources differ, and each figure is given here as its own
        institution states it.</strong> UC IPM gives 7 to 30 pounds. Virginia Tech Extension gives
        between 10 and 20 pounds, adding that the occasional large individual can weigh as much as 30
        pounds. Nebraska Extension gives 7 to 35 pounds, noting weight varies dramatically as they
        fatten up for winter, and that on rare occasions raccoons weigh up to 50 pounds. The Missouri
        Department of Conservation gives 6 to 25 pounds. No figure is preferred here and none is
        averaged.
      </p>

      <h2 id="damage">What the Damage Looks Like</h2>
      <p>
        <strong>The lawn signature is peeling, not digging, and UC IPM states the diagnostic
        directly.</strong> It states that raccoons do not typically dig holes in lawns when looking
        for food, and that if you see conical-shaped holes in your yard, this is likely the result of
        skunk foraging. What raccoons do instead is described the same way by three sources.
      </p>
      <ul>
        <li>
          UC IPM states that raccoons often will roll up newly laid turf when looking for worms and
          grubs.
        </li>
        <li>
          Nebraska Extension states that, unlike skunks, which create precise cone-shaped depressions
          when digging, raccoons will roll up or shred the sod in search of food. The same source
          states that raccoons, rarely opossums, damage turfgrass in search of worms and grubs.
        </li>
        <li>
          Iowa State University Extension describes strong, dexterous fingers that let them roll up
          turf in search of grubs.
        </li>
      </ul>
      <p>
        Above ground level the damage is structural. UC IPM states that attics, chimneys, and the
        spaces beneath houses are also used as dens if access can be gained, that uncapped chimneys
        are often used as den sites, and that females in search of nesting sites may rip off shingles,
        fascia boards, or rooftop ventilators to get into the attic. Nebraska Extension states that
        raccoons are known to tear through attic vents. Utah State University Extension states that
        they will frequently enter uncapped chimneys and raise their young on the smoke shelf or the
        top of the fireplace box until weaning.
      </p>
      <ul>
        <li>
          <strong>Inside the attic.</strong> UC IPM states that insulation on walls may be torn up and
          displaced, and that raccoons may begin using an area of the attic for a latrine, with the
          ceiling beneath becoming stained and an objectionable odor accompanying it.
        </li>
        <li>
          <strong>Bins.</strong> Virginia Tech Extension states that they rummage through unsecured
          trash bins in search of food, often leaving a mess. UC IPM states that they scavenge from
          garbage cans and compost piles.
        </li>
        <li>
          <strong>Corn.</strong> Iowa State University Extension describes partially eaten ears of corn
          with the husks ripped back and stalks broken in multiple places.
        </li>
        <li>
          <strong>Poultry eggs.</strong> Iowa State University Extension states that eggs are generally
          consumed at or near the bird confinement, so broken shells can be evidence of raccoon
          activity.
        </li>
        <li>
          <strong>Droppings.</strong> Nebraska Extension states that raccoon and opossum feces will
          generally be cat-sized and filled with remains of their varied diet.
        </li>
      </ul>

      <h2 id="exclusion">Control: Exclusion First</h2>
      <p>
        Three sources put exclusion first. UC IPM states that exclusion is the key to eliminating den
        sites, and Iowa State University Extension states that exclusion is the first line of defense
        against raccoons. Utah State University Extension goes further and ranks it. Where exclusion is
        feasible, it places exclusion ahead of the other ways of handling raccoon damage
        &mdash; and it says usually rather than always, which is its own qualifier and is kept
        here.
      </p>
      <h3>Before anything is closed up</h3>
      <ul>
        <li>
          <strong>Check that nothing is inside.</strong> Iowa State University Extension says to ensure
          there are no raccoons already present in the chimney or anywhere else inside when starting
          sealing or exclusion steps.
        </li>
        <li>
          <strong>A female with young is a specific hazard.</strong> Utah State University Extension
          states that a female with young may attack if cornered, and advises caution if a mother and
          young are encountered in an enclosed space. UC IPM states more generally that raccoons are
          powerful animals and can become vicious when cornered.
        </li>
        <li>
          Virginia Tech Extension states that chimneys and attics are spaces commonly used to birth
          young, which is why the check above matters in spring rather than being a formality.
        </li>
      </ul>
      <h3>The specifications, as each source states them</h3>
      <ul>
        <li>
          <strong>Under structures.</strong> UC IPM states that open spaces beneath porches, decks, and
          garden and tool sheds should be tightly screened with 10-gauge quarter-inch or one-third-inch
          galvanized hardware mesh.
        </li>
        <li>
          <strong>Crawl spaces.</strong> Nebraska Extension states that crawl spaces below sheds,
          porches, and decks should be secured using 1 inch by half-inch galvanized hardware cloth.
        </li>
        <li>
          <strong>Repair materials.</strong> Nebraska Extension names 10-gauge quarter-inch wire mesh,
          aluminum flashing, and solid half-inch wood or plywood.
        </li>
        <li>
          <strong>Fencing.</strong> Virginia Tech Extension states that an option for protecting field
          crops or garden plots is to install a wire mesh fence with openings less than 2 inches, and
          cautions that installing mesh fencing across uneven topography can be difficult because gaps
          will allow raccoons to slip under.
        </li>
        <li>
          <strong>Roof edges.</strong> Iowa State University Extension describes placing wide, slick
          sheet-metal along the edges of the roof.
        </li>
        <li>
          <strong>Openings generally.</strong> Virginia Tech Extension states that to reduce access to
          attics and crawl spaces you should locate and repair or seal up any openings that currently
          provide entry.
        </li>
      </ul>
      <p>
        <strong>The two sources that give a burial depth do not agree, and both are given as they are
        written.</strong> UC IPM states that the bottom edge of the wire should be buried at least 6
        inches deep, extended outward for 12 inches, and then back-covered with soil. Nebraska
        Extension states to bury the mesh at least 4 inches below the soil and create a 12 to 18 inch
        skirt under the soil to discourage digging. Neither figure is corrected against the other
        here, and neither is preferred.
      </p>
      <h3>Chimneys</h3>
      <p>
        Virginia Tech Extension states that installing an approved chimney cap made from sheet metal
        and heavy metal screening will secure the flue from raccoons and other wildlife.{' '}
        <strong>
          The same source attaches a condition that belongs in the same breath as the specification:
          before installing a chimney cap, homeowners must confirm that the cap they have selected is
          appropriate to the type of flue they have and that it meets all pertinent local building and
          fire codes.
        </strong>{' '}
        UC IPM and Utah State University Extension both describe uncapped chimneys as den sites, which
        is what the cap addresses. Virginia Tech Extension adds that skilled wildlife control operators
        can assist homeowners with chimney cap installation and exclusion work for a fee.
      </p>

      <h2 id="attractants">What Brings Them In</h2>
      <ul>
        <li>
          <strong>Pet food.</strong> UC IPM states that pet food left outside overnight ranks high as a
          food resource, and that pet food left outdoors should be removed before nightfall. Virginia
          Tech Extension states that pet owners must ensure unconsumed pet food is not accessible
          outdoors, especially at night.
        </li>
        <li>
          <strong>Bins.</strong> UC IPM describes using metal garbage cans with secure lids. Nebraska
          Extension states that trash cans, preferably metal, should have tight-fitting lids that
          remain attached even if tipped over. Iowa State University Extension says to seal or clamp
          the tops of bins and lock down dumpster lids at night, and notes that an unfastened lid is
          simply an invitation. Utah State University Extension says to store garbage in metal or tough
          plastic containers with tight-fitting lids.
        </li>
        <li>
          <strong>Bird feeders.</strong> UC IPM states that bird feeders provide another dependable
          food source for raccoons. Virginia Tech Extension states that feeders placed within reach
          often become important and reliable sources of supplemental food.
        </li>
        <li>
          <strong>Compost.</strong> Nebraska Extension states that care should be taken to use only
          plant and vegetable matter, and no meat, eggs, fats, or oils, in compost piles.
        </li>
      </ul>

      <h2 id="disease">Rabies and Raccoon Roundworm</h2>
      <p>
        On rabies, UC IPM states that raccoons are also carriers of rabies and distemper, and Utah
        State University Extension lists rabies among the things they may carry alongside fleas,
        ticks, lice, distemper and mange. Virginia Tech Extension puts it more strongly, and its
        wording is quoted rather than restated:{' '}
        <em>
          &ldquo;Raccoons remain the primary vector through which exposure to rabies for humans exists
          &mdash; greater than with any other wildlife species.&rdquo;
        </em>{' '}
        That is Virginia Tech Extension&rsquo;s assessment, attributed to them.
      </p>
      <p>
        <strong>Raccoon roundworm is the second concern and it is the one with a cleanup
        procedure.</strong> Virginia Tech Extension describes <em>Baylisascaris procyonis</em> as a
        parasite that can pose a potential threat to human health, residing in the intestines of
        infected raccoons where it produces millions of eggs that are shed in the feces. Washington
        State Department of Health states that Baylisascaris worms grow inside raccoon intestines,
        where they produce eggs that are passed in the feces.
      </p>
      <ul>
        <li>
          <strong>Latrines.</strong> Washington State Department of Health states that raccoons
          defecate in communal sites, called latrines, that many raccoons may use the same latrine, and
          that latrines are often found at the bases of trees, in unsealed attics, or on flat surfaces
          such as logs, tree stumps, rocks, decks, and rooftops. Ohio State University states that most
          latrines are small and are usually produced by a single raccoon during a season.
        </li>
        <li>
          <strong>How people are infected.</strong> Wisconsin Department of Health Services states that
          people become infected by ingesting infectious eggs. Washington State Department of Health
          states that people and animals can become infected when they ingest these eggs in soil, sand,
          water, or on objects contaminated by raccoon feces.
        </li>
        <li>
          <strong>The eggs are not infectious straight away.</strong> Wisconsin Department of Health
          Services states that eggs passed in raccoon feces are not immediately infectious. Washington
          State Department of Health states that after 2 to 4 weeks in the environment, these eggs
          become infectious to humans and other animals, including dogs. Virginia Tech Extension adds
          that the eggs have a very sticky and persistent coating that is difficult to remove or
          inactivate.
        </li>
        <li>
          <strong>Who is most at risk.</strong> Washington State Department of Health states that most
          infections occur in young children or persons with developmental disabilities who are more
          likely to put contaminated objects, dirt, or sand in their mouth.
        </li>
        <li>
          <strong>Where it has been found.</strong> Washington State Department of Health states that
          raccoons infected with <em>Baylisascaris procyonis</em> have been identified across the
          United States, including in Washington state, as well as in other countries.
        </li>
      </ul>
      <p>
        <strong>On cleanup, the agencies are specific.</strong> Wisconsin Department of Health Services
        states that if raccoons have set up a den or a latrine in your yard, raccoon feces and material
        contaminated with raccoon feces should be removed carefully and burned, buried, or sent to a
        landfill. Washington State Department of Health states to wear disposable gloves, to wear an
        N95 respirator, to avoid stirring up dust by spraying the area with water from a spray bottle
        before cleaning, and to remove feces and contaminated material and burn, bury, or double bag
        it. Virginia Tech Extension describes the same protective equipment as a respirator, disposable
        gloves and coveralls, needed to avoid inhaling airborne particles or having direct contact with
        eggs embedded in fecal matter. Nebraska Extension adds a specific warning for chimneys: if
        having the chimney cleaned, do not allow the vacuum cleaner to vent inside your home, as it may
        spread raccoon roundworm eggs throughout the room. Washington State Department of Health states
        to wash hands with soap and warm water after working or playing outside.
      </p>
      <p>
        Two prevention lines come from the same agency. Washington State Department of Health states to
        keep brush clear so raccoons do not make a den on your property, and that if you have an attic,
        crawlspace, or basement you should ensure possible entrances are closed &mdash; which is the
        exclusion section above, arrived at from the health side.
      </p>

      <h2 id="activity">When They Are Active</h2>
      <p>
        Four sources describe the same pattern. UC IPM calls it a nocturnal animal and notes that
        because they are active mainly at nighttime, raccoons are often present but may go undetected
        for some time. Iowa State University Extension gives active mostly at night and around dawn and
        dusk. Nebraska Extension states that raccoons and opossums are nocturnal. Utah State University
        Extension states that because they are active at night, they are seldom seen.
      </p>
      <p>
        <strong>Virginia Tech Extension records the exception in its own words</strong>, describing
        raccoons as nocturnal, meaning active mostly at night, but stating that individuals
        occasionally will be active during daylight hours. The same source states that chimneys and
        attics are spaces commonly used by raccoons as daytime resting spots, so an animal seen leaving
        a roof in daylight is doing something the literature describes.
      </p>
      <p>
        <strong>No source consulted for this page states that a raccoon seen in daylight is sick.</strong>{' '}
        Virginia Tech Extension describes daytime activity in ordinary animals, and nothing read for
        this page connects a daylight sighting to illness of any kind.
      </p>
      <p>
        On the year, UC IPM states that raccoons are active year round but may take cover in dens
        during periods of severe winter weather, and Virginia Tech Extension states that they remain
        active year-round but may shelter in a den for several consecutive days during extreme cold.
      </p>

      <h2 id="breeding">Breeding and Young</h2>
      <p>
        Virginia Tech Extension states that most mating occurs during February and March, and that kits
        are born about two months later in April and May, completely dependent on the female for eight
        to 10 weeks. UC IPM states that young are generally born in April or May, but that earlier and
        later litters are not uncommon. The Missouri Department of Conservation states that most
        breeding occurs in February and most litters are born in April or early May, though some
        litters are born as late as August, and that the young are usually weaned by August but stay
        with their mothers until the next spring.
      </p>
      <p>
        <strong>On how many young, the three sources give three different figures, and all three are
        reported as their sources state them.</strong> UC IPM gives a litter size ranging from three to
        six young, averaging about four. Virginia Tech Extension gives one to eight kits, with an
        average of three to four. Nebraska Extension gives 2 to 5 young. None is preferred here.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in the
        text immediately adjacent to it, and every source named is listed below. Framing, ordering and
        emphasis are our own judgement and are not a finding of any source. Where sources give
        different figures for the same measurement, all are reported and attributed rather than
        averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
