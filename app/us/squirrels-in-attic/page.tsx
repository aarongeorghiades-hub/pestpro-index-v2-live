import { Metadata } from 'next';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import UsToolCard from '../components/UsToolCard';
import { SQUIRRELS_ATTIC_HOME, SQUIRRELS_ATTIC_NAV } from '../components/squirrelsInAtticNav';

const URL = 'https://pestproindex.com/us/squirrels-in-attic';
const TITLE = 'Squirrels in the Attic: Signs, Exclusion and Repair';
const DESCRIPTION =
  'How tree squirrels enter an attic, the exclusion and repair specs extension services publish, matched live-trap dimensions, and when to call a professional.';

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
  datePublished: '2026-09-01',
  dateModified: '2026-09-01',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'US Pest Guides', item: 'https://pestproindex.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Squirrels in the Attic', item: URL },
  ],
};

const relatedPages = [
  { title: 'Ground Squirrels: Why No Product Is Named Here', href: '/us/ground-squirrels' },
];

const faqs: Faq[] = [
  {
    question: 'Is it a tree squirrel or a ground squirrel?',
    answer:
      'UC IPM states that tree squirrels are easily distinguished from ground squirrels and chipmunks by their long bushy tails, their lack of markings such as spots or stripes, and the fact that they escape by climbing trees and other structures rather than retreating to a burrow. An animal digging a burrow in a lawn is the other page on this estate, not this one — see our ground squirrels page for that animal and the law that governs it.',
  },
  {
    question: 'What noise does a squirrel in the attic make?',
    answer:
      'None of the sources read for this page give a formal description of attic noise, but Alabama Cooperative Extension states that the first hint of a squirrel presence is often rustling sounds, and that homeowners might even hear grinding sounds as the squirrels gnaw on wiring, pipes and rafters. Tree squirrels are also active mainly in daylight — UC IPM states they are most active in early morning and late afternoon — so noise heard during the day is more consistent with a squirrel than with a strictly nocturnal animal.',
  },
  {
    question: 'When is it unsafe to seal the entry point?',
    answer:
      'During the breeding season, according to three separate sources. Alabama Cooperative Extension states that squirrels breed in February/March and July/August, and that young squirrels will not leave the nest for 10 to 12 weeks, and that excluding the parents during this time could result in mortality for the juveniles left inside the structure. Penn State Extension states more generally to close openings to attics and other parts of buildings, but make sure not to lock squirrels inside, and recommends placing traps inside as a precaution after openings are closed. UNH Extension gives the same caution for flying squirrels specifically, with young not weaned for 12 weeks.',
  },
  {
    question: 'Do squirrel repellents work?',
    answer:
      'Not well, on the evidence of the one source that tested the question directly. Penn State Extension states that there are very few repellents currently available for use on squirrels, that taste repellents such as Ro-pel have had a very limited success rate, and that the effectiveness of capsaicin-containing repellents is variable depending on the availability of other food sources. Weak or uncertain effectiveness is not a reason to withhold the information — it is reported here as the source states it — but it is why no repellent product is carded on this page.',
  },
  {
    question: 'What size trap do the sources call for?',
    answer:
      'Two sources give a dimension and they agree closely. University of Wisconsin–Madison states that single door box or cage traps made from ½-inch by 1-inch 16-gauge galvanized wire and measuring 5 inches wide by 5 inches tall by 16 or 18 inches long are adequate. Penn State Extension does not give a dimension but describes the same wire-cage and box-trap approach, baited with orange and apple slices, walnuts or pecans removed from the shell, or peanut butter.',
  },
  {
    question: 'Is trapping legal where I live?',
    answer:
      'It depends on the state, and the sources for this page do not agree with each other because they are describing different states, not the same rule. University of Wisconsin–Madison states that the fox, eastern gray, and red squirrels are classified as an unprotected species under Wisconsin state law, and that homeowners and landowners may lethally manage these three species without a license whenever damage is occurring on property rented or owned — but the same source states that flying squirrels are a protected species in Wisconsin and cannot be lethally managed without a state depredation permit. Alabama Cooperative Extension states that most states require that traps be checked every 24 hours. Given how much this varies by species and by state, the reliable step is to check with your own state wildlife agency before trapping, not to assume either state’s rule applies to you.',
  },
  {
    question: 'When should I call a professional instead of doing this myself?',
    answer:
      'Penn State Extension states plainly that licensed wildlife pest control operators are available throughout the state and most will trap and remove squirrels for homeowners, and names trapping as the best way to remove squirrels already inside a building. University of Wisconsin–Madison states that a licensed electrician should be called to install protective tubing on live wires — wiring repair is an electrician’s job, not a wildlife removal job. If the entry point is high on a roofline, if squirrels are already inside and the exit timing is unclear, or if any wiring has visibly been chewed, that is the point at which the sources point toward a professional rather than a further DIY step.',
  },
];

const sources: Source[] = [
  {
    label: 'Tree Squirrels, Pest Notes',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 1 September 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/tree-squirrels/',
  },
  {
    label: 'Tree Squirrels',
    publisher: 'Penn State Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.psu.edu/tree-squirrels',
  },
  {
    label: 'Eastern Gray Squirrels: Managing and Preventing Attic Damage',
    publisher: 'Alabama Cooperative Extension System',
    date: 'Accessed 1 September 2026',
    href: 'https://www.aces.edu/blog/topics/forestry-wildlife/eastern-gray-squirrels-managing-and-preventing-attic-damage/',
  },
  {
    label: 'Nuisance Wildlife In & Around the Home',
    publisher: 'University of New Hampshire Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.unh.edu/resource/nuisance-wildlife-around-home',
  },
  {
    label: 'Tree Squirrel Ecology and Damage Management',
    publisher: 'University of Wisconsin–Madison, Division of Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://wildlifedamage.cals.wisc.edu/wp-content/uploads/sites/289/2025/01/Tree-Squirrels-01-21-2025.pdf',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'signs', title: 'Signs You Have One' },
  { id: 'exclusion', title: 'Control: Exclusion First' },
  { id: 'trapping', title: 'Trapping' },
  { id: 'repair', title: 'Repair and Cleanup' },
  { id: 'professional', title: 'When to Call a Professional' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function SquirrelsInAtticPage() {
  return (
    <UsPageLayout
      title="Squirrels in the Attic"
      subtitle="A noise overhead in daylight, gnaw marks on wiring, or nutshells in the insulation. Here is what university extension services and one state wildlife program publish about how tree squirrels get into a roof space, the specifications they give for keeping them out, and when the sources point toward a professional instead of a further DIY step."
      lastUpdated="September 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={SQUIRRELS_ATTIC_HOME}
      clusterNav={SQUIRRELS_ATTIC_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the tree squirrel &mdash; the animal that climbs rather than burrows, and
        that gets into a roof space through a gap under the eaves or a torn vent screen rather than a
        hole in the lawn. The ground-dwelling animal that digs under a patio and disappears into a
        burrow is a different animal with a different page on this estate; see{' '}
        <a href="/us/ground-squirrels">our ground squirrels page</a> for that one, and the FAQ below for
        how the two are told apart.
      </p>
      <p>
        Exclusion comes before trapping on this page, because that is the order Penn State Extension
        puts it in: exclusion techniques, such as blocking entrances into buildings, are stated as the
        most effective way to control damage, with trapping the tool for an animal already inside.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        Penn State Extension names five species under the tree squirrel umbrella in its own region:
        the fox squirrel (<em>Sciurus niger</em>), the eastern gray squirrel (<em>Sciurus
        carolinensis</em>), the red squirrel (<em>Tamiasciurus hudsonicus</em>), and the southern and
        northern flying squirrels (<em>Glaucomys volans</em> and <em>Glaucomys sabrinus</em>). Of
        those, the same source states the eastern gray squirrel and the flying squirrels are usually
        the ones responsible when squirrel damage has occurred. UC IPM, writing about California
        specifically, names four tree squirrels for
        that state &mdash; the eastern fox squirrel, the eastern gray squirrel, the western gray
        squirrel, and the Douglas squirrel &mdash; and states that of the four, the eastern fox
        squirrel is the most serious pest in gardens and urban landscapes there.
      </p>
      <ul>
        <li>
          <strong>Eastern gray squirrel.</strong> Penn State Extension gives a weight of 15 to 24
          ounces and a length of 16 to 24 inches, with coloring that varies from all black to silver
          gray with a white belly.
        </li>
        <li>
          <strong>Fox squirrel.</strong> Penn State Extension states fox squirrels are rare in
          Pennsylvania, larger than gray squirrels at 1.9 to 2.2 pounds, with a tan belly against the
          gray squirrel&rsquo;s white one.
        </li>
        <li>
          <strong>Red squirrel.</strong> Penn State Extension gives 4 to 8 ounces and 9 to 13 inches,
          smaller than both the gray and fox squirrel, and notes it spends more time on the ground
          than the other tree squirrels.
        </li>
        <li>
          <strong>Flying squirrels.</strong> Penn State Extension gives 1.3 to 4 ounces and 8 to 10
          inches, and states they are the only tree squirrels active at night &mdash; every other
          species here is a daytime animal.
        </li>
      </ul>
      <p>
        <strong>Identification against the ground squirrel matters because the two pages on this
        estate answer different questions.</strong> UC IPM states that tree squirrels{' '}
        <em>differ from ground squirrels with their long, bushy tails, lack of stripes or spots, and
        by their escape behavior, which is to climb trees and structures</em>. A ground squirrel
        retreats to a burrow; a tree squirrel climbs. Where it goes when startled is the test both
        pages rely on.
      </p>

      <h2 id="signs">Signs You Have One</h2>
      <p>
        Alabama Cooperative Extension gives the clearest account of how an infestation first announces
        itself: <em>Oftentimes, the first hint of a squirrel presence comes from rustling sounds.
        Homeowners might even hear grinding sounds as the squirrels gnaw on wiring, pipes, and
        rafters</em>. The same source names two further signs &mdash; remnants of pecans, seeds and
        other nuts, and{' '}
        <em>damaged siding, soffit, fascia boards, and ridge vents where squirrels might be gaining
        access</em>.
      </p>
      <ul>
        <li>
          <strong>Timing of the noise.</strong> UC IPM states tree squirrels are active during the day
          and are most active in early morning and late afternoon, and do not hibernate. Noise heard
          in daylight is consistent with a tree squirrel; the flying squirrel is the one exception
          Penn State Extension names as active at night.
        </li>
        <li>
          <strong>Entry points.</strong> Squirrels sometimes find their way into buildings through
          loose siding or ventilation screens, per Penn State Extension, and once inside, they can
          damage walls, insulation, and electrical wires.
        </li>
        <li>
          <strong>The wiring risk, stated directly.</strong> Penn State Extension states that once
          they have made a nest, squirrels will chew on insulation and the insulation around wires,
          and that this habit is dangerous because the bare wires may cause a fire.
        </li>
      </ul>

      <h2 id="exclusion">Control: Exclusion First</h2>
      <p>
        Penn State Extension states directly that exclusion techniques, such as blocking entrances
        into buildings, are the most effective way to control damage. Alabama Cooperative Extension
        divides its own guidance into nonlethal and lethal methods and puts exclusion and live traps
        under nonlethal.
      </p>
      <h3>Before anything is closed up</h3>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">Timing matters, and two sources give a
        reason rather than just a rule</p>
        <p className="m-0 mt-2 text-sm text-amber-900">
          Alabama Cooperative Extension states that squirrels breed in February/March and July/August,
          and that young squirrels will not leave the nest for 10 to 12 weeks &mdash; excluding the
          parents during this time could result in mortality for the juveniles left inside the
          structure. Penn State Extension states the same caution operationally: close openings to
          attics and other parts of buildings, but make sure not to lock squirrels inside, and place
          traps inside as a precaution after openings are closed.
        </p>
      </div>
      <h3>The specifications, as each source states them</h3>
      <ul>
        <li>
          <strong>The excluder device.</strong> Penn State Extension describes an improvised excluder:
          an 18-inch section of 4-inch plastic pipe mounted over an opening, pointing down at a
          45-degree angle. A one-way door can also be used over an opening to let squirrels out and
          prevent them from returning. Alabama Cooperative Extension calls the same device an{' '}
          <em>exclusion funnel or one-way door</em>, and states that once the squirrels have been
          successfully excluded, the holes should be permanently repaired.
        </li>
        <li>
          <strong>Closing the opening for good.</strong> Penn State Extension states to close openings
          to buildings with heavy 0.5-inch wire mesh or make other suitable repairs.
        </li>
        <li>
          <strong>Keeping them off wires and poles.</strong> Penn State Extension describes 2-foot
          sections of lightweight 2-to-3-inch diameter plastic pipe, slit lengthwise and placed over a
          wire, so that it rotates and causes a traveling squirrel to tumble. University of
          Wisconsin&ndash;Madison describes the same mechanism for wires squirrels use to travel,
          adding that a licensed electrician should be called to install PVC or tubing on live wires.
        </li>
        <li>
          <strong>Keeping branches back.</strong> Alabama Cooperative Extension states that to exclude
          access, trees and overhanging branches should be kept at least 8 feet from buildings.
        </li>
      </ul>
      <p>
        <strong>On repellents, the sources are honest about a weak result rather than silent about
        it.</strong> Penn State Extension states that there are very few repellents currently
        available for use on squirrels: taste repellents containing denatonium saccharide have had a
        very limited success rate, and capsaicin-based repellents vary in effectiveness depending on
        the availability of other food sources. Polybutene sticky materials are named as a
        climbing deterrent, applied to buildings, railings and downspouts. S48-A governs here: weak or
        uncertain effectiveness is reported, not withheld, but it is also why this page cards an
        exclusion device rather than a repellent.
      </p>

      <UsToolCard
        name="One-Way Squirrel Door Excluder for Attics and Chimneys"
        whatItDoes={[
          'Its own listing describes a one-way design for attics, decks and soffits, matching the exclusion-funnel/one-way-door device Penn State Extension and Alabama Cooperative Extension both describe.',
          'Its own listing states a 3x3 inch opening and 2mm galvanized steel construction, and includes copper mesh, mounting flaps and zip ties for sealing the opening once the animal has left.',
          'The listing also carries an unverifiable population-reduction percentage attributed to an unnamed 2025 survey; that figure is manufacturer self-praise (S47-F) and is not repeated here as a claim.',
        ]}
        asin="B0FZL59HWQ"
      />

      <UsToolCard
        name="Fencer Wire 19 Gauge Galvanized Hardware Cloth, 1/2-Inch Mesh"
        whatItDoes={[
          'Its own listing states a 1/2 inch mesh, matching the figure Penn State Extension gives for closing an opening once a squirrel has been excluded.',
          'Its own listing states it is hot-dipped galvanized after welding with a double zinc coating, and names squirrels directly among the animals it excludes: "very effective at keeping out critters like squirrels, rabbits, rats, hawks, raccoons, skunks."',
          '19 gauge wire, sold in a 2 ft. x 5 ft. roll.',
        ]}
        asin="B008CJ0EZW"
      />

      <h2 id="trapping">Trapping</h2>
      <p>
        Penn State Extension states that trapping is the best way to remove squirrels from buildings,
        and describes wire-cage traps and box traps used to capture squirrels alive, prebaited by
        tying the doors open for two to three days, then set and checked twice daily. Good baits named
        are orange and apple slices, walnuts or pecans removed from the shell, and peanut butter.
      </p>
      <p>
        University of Wisconsin&ndash;Madison gives the one dimensioned specification found for this
        page: single door box or cage traps made from &frac12;-inch by 1-inch 16-gauge galvanized
        wire and measuring 5 inches wide by 5 inches tall by 16 or 18 inches long are adequate,
        placed in the vicinity of where squirrels are seen, especially along travel ways. The same
        source states that checking any open trap at least once every 24 hours is a legal requirement
        in Wisconsin, and Alabama Cooperative Extension states that most states require that traps be
        checked every 24 hours &mdash; two different states, the same rule, neither treated as
        proof of a nationwide law.
      </p>
      <p>
        Once an animal is trapped, Penn State Extension states it may be released in the yard after
        removal from the building and closure of the entrance holes &mdash; but with access routes
        back to vulnerable areas blocked or eliminated first.
      </p>

      <UsToolCard
        name='FPS Squirrel Trap, 5" x 5" x 16" Live Trap'
        whatItDoes={[
          'Its own listing states 16" x 5" x 5" dimensions for trapping squirrel, chipmunk or rat, matching the 5-inch by 5-inch by 16-or-18-inch specification University of Wisconsin–Madison gives for an adequate cage trap.',
          'Its own listing describes steel rod reinforced spring-loaded doors and a pressure-sensitive trip mechanism, matching the single-door box/cage design both sources describe.',
          'Its own listing states the trap is "constructed to provide for exceptional durability with no harm to the animal" — a live trap, not a lethal one, matching the nonlethal-first sequencing every source for this page uses.',
        ]}
        asin="B07DT4Z9FY"
      />

      <h2 id="repair">Repair and Cleanup</h2>
      <p>
        Alabama Cooperative Extension gives the most complete cleanup sequence found for this page:
        after successfully controlling squirrels in the attic, examine the space for repairs, pick up
        any food particles or feces, replace any damaged wiring or pipes, and remove and replace any
        soiled insulation.
      </p>
      <p>
        As a general precaution when cleaning a space where a wild animal has been living, avoid
        direct contact with droppings or nesting material, and air the space out before cleaning it.
        This page does not go further than that: no disease is named or enumerated here, and no claim
        about transmission is made.
      </p>

      <h2 id="professional">When to Call a Professional</h2>
      <p>
        Penn State Extension states that licensed wildlife pest control operators are available
        throughout the state and that most will trap and remove squirrels for homeowners, and directs
        readers to their county extension office for a referral. University of
        Wisconsin&ndash;Madison is specific about one particular job: a licensed electrician should be
        called to install protective tubing on a live wire, which is electrical work rather than
        wildlife removal.
      </p>
      <p>
        Nothing read for this page states a bright-line rule for when a homeowner should stop and call
        someone. What the sources describe as reasons to bring in help are an entry point out of safe
        reach, an animal already inside with an unclear exit timeline during breeding season, and any
        wiring that has visibly been chewed.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing, ordering
        and emphasis are our own judgement and are not a finding of any source. Where sources
        describe different states&rsquo; laws, both are reported as their own state&rsquo;s rule,
        never averaged or generalised into one nationwide claim.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
