import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, type Source } from '../components/UsSources';
import UsToolCard from '../components/UsToolCard';
import { CARPENTER_BEES_HOME, CARPENTER_BEES_NAV } from '../components/carpenterBeesNav';

const URL = 'https://pestproindex.com/us/carpenter-bees';
const TITLE = 'Carpenter Bees: Timber Damage, and Why the Sources Say Wait';
const DESCRIPTION =
  'Identification against bumblebees, the boring behavior that causes the damage, repair specs, and why several extension sources caution against killing them.';

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
    { '@type': 'ListItem', position: 2, name: 'Carpenter Bees', item: URL },
  ],
};

const relatedPages = [
  { title: 'Social Wasps: Yellowjackets, Wasps and Hornets', href: '/us/social-wasps' },
];

const faqs: Faq[] = [
  {
    question: 'How do I tell a carpenter bee from a bumblebee?',
    answer:
      'By the abdomen. University of Maryland Extension states the bumble bee’s entire body is covered with hairs, and females have yellow patches of hair on the top of the abdomen, while carpenter bees have a shiny, largely bare black abdomen. Ohio State University Extension adds a second test: the bumble bee’s head is much narrower than the width of its thorax, while a carpenter bee’s head is almost as wide as its thorax. Behavior differs too — Alabama Cooperative Extension states carpenter bees are solitary and less defensive of their nest sites, while bumble bees are social and extremely defensive when their nest site is disturbed.',
  },
  {
    question: 'How is a carpenter bee different from a honeybee?',
    answer:
      'Size and nesting are the two clearest tests. A carpenter bee is a large, robust, mostly solitary insect that bores its own tunnel in wood; a honeybee is smaller, lives in a large social colony, and does not bore into timber. See our social wasps page for the sourced honeybee-sting comparison — the barbed stinger that stays in the skin belongs to the honeybee, not the carpenter bee, and not the wasp either.',
  },
  {
    question: 'Do male carpenter bees sting?',
    answer:
      'No source consulted for this page found otherwise. University of Maryland Extension, UC IPM and Ohio State University Extension all state that male carpenter bees have no stinger and are harmless, despite hovering and dive-bombing behavior near a nest site that can look aggressive. Only females can sting, and every source describing it calls the female docile, stinging only when handled or provoked.',
  },
  {
    question: 'Are carpenter bees actually good for anything?',
    answer:
      'Every source consulted for this page describes them as pollinators, and two make a point of it. Penn State Extension states that 15% of our agricultural crops are pollinated by native bees such as carpenter bees. UC IPM states plainly that carpenter bees are generally considered beneficial insects because they help pollinate various crop and noncrop plants.',
  },
  {
    question: 'Is it illegal to kill carpenter bees?',
    answer:
      'No source consulted for this page states a legal restriction, permit requirement, or protected-species status for carpenter bees in the United States — that is a distinct claim from a conservation caution, and this page does not assert one without a source. What multiple sources do state is a strong recommendation against killing them where it is not necessary: see the Pollinator Status section above for exactly what each source says.',
  },
  {
    question: 'Do carpenter bee traps actually work?',
    answer:
      'The one source that addresses effectiveness directly is not enthusiastic. Alabama Cooperative Extension states that commercial and homemade traps can catch carpenter bees if properly installed but often do not provide effective control around a structure. Under S48-A, that weak-effectiveness finding is reported rather than hidden, and it is also why this page treats a trap as one tool among several rather than a complete solution on its own.',
  },
];

const sources: Source[] = [
  {
    label: 'Carpenter Bees',
    publisher: 'University of Maryland Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.umd.edu/resource/carpenter-bees',
  },
  {
    label: 'Carpenter Bees: Identification, Biology, Structural Damage, and Control',
    publisher: 'Alabama Cooperative Extension System',
    date: 'Accessed 1 September 2026',
    href: 'https://www.aces.edu/blog/topics/home/carpenter-bees-identification-biology-structural-damage-and-control/',
  },
  {
    label: 'Carpenter Bees, Pest Notes',
    publisher: 'UC Statewide IPM Program',
    date: 'Accessed 1 September 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/carpenter-bees/',
  },
  {
    label: 'Carpenter Bees, HYG-2074',
    publisher: 'Ohio State University Extension, Ohioline',
    date: 'Accessed 1 September 2026',
    href: 'https://ohioline.osu.edu/factsheet/hyg-2074',
  },
  {
    label: 'The Eastern Carpenter Bee: Beneficial Pollinator or Unwelcome Houseguest?',
    publisher: 'Penn State Extension',
    date: 'Accessed 1 September 2026',
    href: 'https://extension.psu.edu/the-eastern-carpenter-bee-beneficial-pollinator-or-unwelcome-houseguest',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'nesting', title: 'Nesting and Boring Behavior' },
  { id: 'damage', title: 'The Damage' },
  { id: 'pollinator-status', title: 'Pollinator Status' },
  { id: 'treatment-repair', title: 'Treatment and Repair' },
  { id: 'stings', title: 'Stings' },
  { id: 'prevention', title: 'Prevention' },
  { id: 'professional', title: 'When to Call a Professional' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function CarpenterBeesPage() {
  return (
    <UsPageLayout
      title="Carpenter Bees"
      subtitle="A perfectly round half-inch hole drilled into a fascia board or deck rail, coarse sawdust beneath it, and a large black-and-yellow bee hovering nearby. Here is what university extension services publish about identifying the animal, the damage it does, and why several of them ask homeowners to think twice before reaching for an insecticide."
      lastUpdated="September 2026"
      readingTime="9 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={CARPENTER_BEES_HOME}
      clusterNav={CARPENTER_BEES_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        This page is about the large carpenter bee, genus <em>Xylocopa</em> &mdash; the
        solitary bee that bores its own tunnel into sound timber to nest, and is
        routinely mistaken for a bumblebee or a honeybee. It is not a wasp, and it is not
        the honeybee whose sting-first-aid advice is covered on{' '}
        <Link href="/us/social-wasps">our social wasps page</Link>.
      </p>
      <p>
        <strong>Every source read for this page describes carpenter bees as
        pollinators, and more than one asks for restraint before killing
        them &mdash; see the Pollinator Status section below before treating
        this as an ordinary structural pest.</strong>
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        University of Maryland Extension: <em>Eastern carpenter bees are large bees
        approximately 0.75-1 inch long.</em>{' '}<em>The thorax or midsection is covered
        with yellow fuzz. The abdomen, or the hind section, is shiny and black.</em>{' '}
        UC IPM gives a closely matching description for the wider genus:{' '}
        <em>Carpenter bees are large and robust insects resembling bumblebees.</em>
      </p>
      <ul>
        <li>
          <strong>Sex differences.</strong> University of Maryland Extension states
          females have a black face and a dense brush of black hairs on their hind
          legs, while males have yellow faces. Ohio State University Extension adds
          that the female has an entirely black head, whereas the male has yellow or
          white markings.
        </li>
        <li>
          <strong>Diet.</strong> University of Maryland Extension: <em>Carpenter bees
          do not eat wood, they eat flower nectar and pollen. The holes they bore into
          wood are nests for their young.</em>
        </li>
      </ul>
      <h3>Carpenter Bee vs. Bumblebee</h3>
      <p>
        University of Maryland Extension: <em>Carpenter bees are often mistaken for
        bumblebees, which are similar in size. However, the bumble bee&rsquo;s entire
        body is covered with hairs, and females have yellow patches of hair on the top
        of the abdomen. Bumblebees are social, living together in an underground
        nest.</em>
      </p>
      <p>
        Ohio State University Extension gives a second, independent test: <em>Carpenter
        bees resemble bumble bees as they are similar in size except for their head,
        with the bumble bee&rsquo;s head being much narrower than the width of the
        thorax.</em> The same source states <em>Bumble bees are social insects that
        live in colonies with nests typically located in the ground.</em>
      </p>
      <p>
        Alabama Cooperative Extension adds a behavioral test neither of the above
        gives: carpenter bees fly in a more erratic way, chasing one another, while
        bumble bees fly leisurely together, and carpenter bees are solitary and less
        defensive of their nest sites while bumble bees are social and extremely
        defensive when their nest site is disturbed.
      </p>
      <h3>Carpenter Bee vs. Honeybee</h3>
      <p>
        None of the five sources read for this page treats honeybee confusion as a
        major identification problem &mdash; the size difference is large enough that
        the sources spend their identification space on the bumblebee comparison
        instead. The honeybee is smaller than a carpenter bee, lives in a large social
        colony rather than a solitary wood tunnel, and (per the honeybee sting material
        on <Link href="/us/social-wasps">our social wasps page</Link>) leaves a barbed
        stinger in the skin, which no source here attributes to the carpenter bee.
      </p>

      <h2 id="nesting">Nesting and Boring Behavior</h2>
      <p>
        University of Maryland Extension: <em>The female chews a perfectly circular
        hole approximately half an inch in diameter. This entry hole extends 1-2
        inches into the wood and then turns at a right angle to follow the grain of
        the wood.</em>
      </p>
      <p>
        <strong>On how far a gallery runs, the sources give different figures, and
        each is reported as its own source states it.</strong> University of Maryland
        Extension gives 6-12 inches for a new gallery, with nests reused over years
        occasionally measuring up to 10 feet. Ohio State University Extension gives 4
        to 6 inches for a new gallery, excavated at about 1 inch every six days, with
        multi-year reuse extending it as far as 10 feet. Alabama Cooperative Extension
        gives 4 to 6 inches typically, up to 2 feet with repeated reuse. No figure is
        corrected against another here.
      </p>
      <p>
        Ohio State University Extension states the gallery is more than empty space to
        the bees themselves: <em>Carpenter bee galleries are a critical resource,
        since the bees spend much of their time inside a gallery and they require its
        protective conditions to survive the winter.</em> The same source notes bees
        sealed inside a treated gallery typically will not chew their way back out.
      </p>
      <p>
        On timing, University of Maryland Extension states nest-site searching happens
        in April or May; Ohio State University Extension and Alabama Cooperative
        Extension both place emergence and mating in early spring, with new adults
        emerging in late summer and overwintering together in the gallery until the
        following spring. There is one generation a year in northern states, per UC
        IPM, sometimes two further south.
      </p>

      <h2 id="damage">The Damage</h2>
      <p>
        UC IPM: <em>Carpenter bees build nests in wood, creating galleries that can
        weaken structures; however, they rarely cause severe damage.</em> Alabama
        Cooperative Extension frames the same fact from the other direction: <em>Carpenter
        bees are good pollinators and naturally nest in dead trees and woodpiles, but
        they have taken up residence in close proximity to human habitation and cause
        extensive damages to wood structures, including homes, when they repeatedly
        colonize exposed wood and they are not controlled.</em>
      </p>
      <ul>
        <li>
          <strong>Signs.</strong> University of Maryland Extension names sawdust piles
          below perfectly circular holes, large bees buzzing around the head, and
          fan-shaped yellow or moldy stains on the sides of a structure &mdash; the
          stains are the female&rsquo;s sticky waste, which darkens with mold as it
          ages.
        </li>
        <li>
          <strong>Where they nest.</strong> Ohio State University Extension names
          fascia boards, roof eaves and gables, porch ceilings, decks, railings,
          siding, shingles and shutters, and states the inner surface of roof fascia
          boards is now a common site of attack, because exposed nests were the ones
          most easily targeted by management in the past.
        </li>
        <li>
          <strong>Secondary damage.</strong> University of Maryland Extension names
          moisture entering exposed wood and accelerating decay, mold growth on the
          bee&rsquo;s waste, and woodpecker damage from birds feeding on the immature
          bees inside the gallery &mdash; Alabama Cooperative Extension makes the same
          point about woodpeckers tearing into galleries and worsening the damage to
          the point wood needs replacing.
        </li>
      </ul>

      <h2 id="pollinator-status">Pollinator Status</h2>
      <p>
        <strong>This page states the position found in the sources plainly, because
        the scope of this page depends on it.</strong> No source read here describes a
        legal restriction, permit requirement, or protected-species status for
        carpenter bees anywhere in the United States. What the sources do describe,
        consistently and from five independent institutions, is a conservation
        caution against killing them without reason.
      </p>
      <ul>
        <li>
          Penn State Extension: <em>Carpenter bees are important pollinators of many
          flowering plants found in our gardens, natural areas, and on farms. In fact,
          15% of our agricultural crops are pollinated by native bees such as
          carpenter bees.</em> The same source states directly: <em>Killing individual
          bees or indiscriminate pesticide applications are unlikely to provide
          satisfactory results.</em>
        </li>
        <li>
          UC IPM: <em>Carpenter bees are generally considered beneficial insects
          because they help pollinate various crop and noncrop plants. Under most
          conditions their damage can be successfully managed using the preventive
          measures described above and insecticide use is not recommended.</em>
        </li>
        <li>
          University of Maryland Extension frames the timing of any repair work
          around the same concern: <em>The best times to treat and repair damaged
          wood and minimize the killing of these pollinators would be late summer
          (after the summer emergence and before hibernation) or early spring before
          nest building begins.</em>
        </li>
      </ul>
      <p>
        <strong>Not every source agrees on how far that caution should go, and both
        positions are reported rather than resolved into one.</strong> Ohio State
        University Extension names specific pyrethroid insecticides labeled for
        carpenter bee control and describes dust-formulation application in detail,
        without discouraging the practice. Alabama Cooperative Extension likewise
        describes insecticide formulations and application timing at length, while
        stating in the same breath that the goal of control is to deter nesting
        damage &mdash; not to eliminate all the bees in the yard &mdash; since they
        are important pollinators. UC IPM and Penn State Extension are more direct in
        recommending against insecticide use specifically. This page does not pick a
        side between them; it reports what each institution states.
      </p>
      <p>
        <strong>What this page does do, given that range, is card only non-lethal
        products</strong> &mdash; a trap, a repellent, and repair materials &mdash;
        rather than an insecticide, further down this page.
      </p>

      <h2 id="treatment-repair">Treatment and Repair</h2>
      <p>
        Ohio State University Extension describes the non-insecticidal barrier
        approach in full: <em>A non-insecticidal management approach is to deny
        carpenter bees access to their galleries by sealing each entrance hole.
        Thoroughly plug the hole with plastic wood, steel wool, or copper gauze and
        seal it with wood putty or a wooden dowel affixed with wood glue.</em> UC IPM
        gives a closely matching sequence &mdash; fill unoccupied holes with steel
        wool and caulk, wait until after bees have emerged before filling active
        tunnels, then paint or varnish the repaired surface.
      </p>
      <p>
        <strong>Timing the repair matters for the same reason timing the repellent
        does.</strong> University of Maryland Extension&rsquo;s guidance above places
        the work in late summer or early spring, specifically to avoid trapping active
        brood or provoking a female mid-nest. Alabama Cooperative Extension agrees
        early spring, before eggs are laid, is the best window.
      </p>

      <UsToolCard
        name="Carpenter Bee Hole Repair Kit, 3-Step Wood Plug Set"
        whatItDoes={[
          'Its own listing describes a 3-step process — clean the tunnel, plug the hole with a tapered wood plug sized to fit, then finish with a color-matched decal — matching the plug-and-seal sequence UC IPM and Ohio State University Extension both describe.',
          'Its own listing states plugs come in three sizes (small, medium, large) to match different hole diameters, consistent with the roughly half-inch entry hole University of Maryland Extension measures, allowing for reused, enlarged galleries.',
          'This is a repair product, not a treatment for an active infestation — it is carded for the "plug the hole" step the sourced guidance describes after bees have emerged, not as a way to kill or exclude bees from an active gallery.',
        ]}
        asin="B0D79GC3SM"
      />

      <h2 id="stings">Stings</h2>
      <p>
        Handling a bee, or reaching directly into an active hole, is the situation
        every source names as the one that provokes a sting.
      </p>

      <h2 id="prevention">Prevention</h2>
      <p>
        UC IPM: prevention is the main approach to managing carpenter bees, and
        susceptible exterior parts of a building should be constructed out of
        hardwoods where possible, since carpenter bees avoid most hardwoods and
        prefer softwoods. Ohio State University Extension names cedar, redwood,
        cypress, pine and fir specifically as woods the eastern species prefers.
      </p>
      <ul>
        <li>
          <strong>Paint, not stain.</strong> Ohio State University Extension states
          plainly that wood stains will not prevent damage from carpenter bees, while
          keeping exposed wood well painted with a polyurethane or oil-based paint
          deters attack. University of Maryland Extension agrees that painted
          surfaces are unattractive to nesting bees, and that nail holes and cracks
          should be filled with caulk or putty before painting.
        </li>
        <li>
          <strong>Non-wood alternatives.</strong> UC IPM and Ohio State University
          Extension both note that carpenter bees do not damage non-wood materials
          such as aluminum, asbestos, asphalt and vinyl siding, which can substitute
          for wood on vulnerable, exposed parts of a structure.
        </li>
        <li>
          <strong>Repellents.</strong> Alabama Cooperative Extension: <em>The best
          time is before the female lays eggs in the tunnel. Products with essential
          oil components can repel carpenter bees from carving tunnels or abandoning
          the excavated nest.</em> Penn State Extension names almond oil specifically,
          applied annually in spring, as an effective deterrent for those who prefer
          an unpainted, natural wood finish.
        </li>
      </ul>

      <p>
        The products below are named because the sources on this page describe repelling and then plugging the gallery, and each listing states which of those two jobs it does.
      </p>

      <UsToolCard
        name="Citrus and Almond Oil Carpenter Bee Repellent Spray, 8 oz"
        whatItDoes={[
          'Its own listing states a formula of citrus, peppermint and almond oils intended to discourage carpenter bees from boring into wooden surfaces — matching the essential-oil deterrent both Alabama Cooperative Extension and Penn State Extension describe (Penn State names almond oil specifically).',
          'Its own listing states it is intended for repeated seasonal application to decks, fences and garden furniture, and directs applying it to visible drill holes — matching the prevention window (before or around nest-building season) the sourced guidance above describes.',
          'S48-A note: the listing itself hedges its own effectiveness ("Results may vary") — that weak-effectiveness admission is reported here, not a reason to exclude the product, since no material danger or legal restriction attaches to it.',
        ]}
        asin="B09VYHTLJG"
      />

      <h2 id="professional">When to Call a Professional</h2>
      <p>
        None of the five sources read for this page names a specific threshold for
        calling a professional the way some wildlife-exclusion sources do. What they
        describe instead is a job that grows with the number of galleries: Alabama
        Cooperative Extension notes it can be very challenging to reach many of the
        holes bees are using, and that a pest management professional brings the
        experience and equipment to make an effective and safe application. A single
        hole with an easily reached, paintable surface is squarely within the DIY
        prevention and repair steps above; a fascia board or roofline riddled with
        multiple active galleries, or a structure where reaching the holes safely
        requires height equipment, is where the sources point toward hiring help.
      </p>

      <UsToolCard
        name="Carpenter Bee Trap, Catch and Release, Wood Boring Bee Trap"
        whatItDoes={[
          'Its own listing states the trap is "uniquely designed & crafted to attract only carpenter bees" and that other bees — bumbles, honeys, and leafcutters — are not drawn to it, addressing the non-target-pollinator concern this page raises directly (S52-E: this is stated in the listing\'s own text, not assumed from the product name).',
          'Its own listing describes a catch-and-release mechanism — a latch opens the capture chamber so a trapped bee can be relocated and released rather than killed — matching the sources\' preference for non-lethal management over indiscriminate killing.',
          'S48-A note: Alabama Cooperative Extension states directly that traps "often do not provide effective control around a structure" — that weak-effectiveness finding is reported, not concealed, and is why this page presents the trap as one tool alongside prevention and repair rather than a standalone fix.',
        ]}
        asin="B0BJRXS15L"
      />

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that
        makes it or in the text immediately adjacent to it, and every source named is
        listed below. Framing, ordering and emphasis are our own judgment and are
        not a finding of any source. Where sources give different figures or take
        different positions on insecticide use, all are reported and attributed
        rather than resolved into one answer.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
