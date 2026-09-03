import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { GOPHER_NAV, GOPHER_HOME } from '../components/gopherNav';

const URL = 'https://pestproindex.com/us/pocket-gophers';
const TITLE = 'Pocket Gophers: Mounds, Damage and What Works';
const DESCRIPTION =
  'How to tell a pocket gopher mound from a mole hill, what the burrow looks like, when they\'re active, and which control methods extension services support.';

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
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Pocket Gophers',
      item: 'https://pestproindex.com/us/pocket-gophers',
    },
    { '@type': 'ListItem', position: 2, name: 'Pocket Gophers', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'Is it a gopher or a mole?',
    answer:
      'Look at the mound and at the pattern. University of California IPM describes gopher mounds as crescent- or horse-shoe-shaped when viewed from above, with the hole off to one side and usually plugged, while mole mounds are more circular and in profile they are volcano-shaped. Oregon State University Extension adds a second signal that works from a distance: gopher mounds tend to be clumped in tight groups, while the mole’s tend to be spaced in a line as single mounds.',
  },
  {
    question: 'How many kinds of pocket gopher are there?',
    answer:
      'We can only tell you state by state, because no source we could obtain gives a national count. University of California IPM states that five species of pocket gophers are found in California. Washington Department of Fish and Wildlife names the northern pocket gopher, Thomomys talpoides, as occupying much of eastern Washington, and the Mazama or western pocket gopher, Thomomys mazama, as the only pocket gopher in most of western Washington.',
  },
  {
    question: 'How deep are the tunnels?',
    answer:
      'Sources differ, and the range is genuinely wide. University of California IPM gives feeding burrows at 6 to 12 inches below ground with the nest as deep as 6 feet. Washington Department of Fish and Wildlife gives tunnels 4 to 12 inches below ground. Utah State University Extension and New Mexico State University both give a main tunnel 4 to 18 inches below the surface. Texas A&M AgriLife Extension gives shallow runways 4 to 15 inches below the surface.',
  },
  {
    question: 'How big is one gopher’s tunnel system?',
    answer:
      'Big, and again the figures differ by source and by species. University of California IPM gives a system covering 200 to 2,000 square feet. Utah State University Extension and New Mexico State University both give up to 200 yards of tunnels. Texas A&M AgriLife Extension gives a system that extends as much as 800 feet and covers an acre of ground. All of these describe a single animal — pocket gophers are solitary.',
  },
  {
    question: 'When are pocket gophers active?',
    answer:
      'All year, with a surface-activity peak. University of California IPM states that gophers don’t hibernate and are active year-round, and Washington Department of Fish and Wildlife adds that they are active year-round and at all hours of the day. Separately, Utah State University Extension reports that pocket gophers are usually most active in the spring and fall, and Texas A&M AgriLife Extension advises that control operations should be conducted during the spring and fall when pocket gophers are most active near the surface. Year-round activity and a spring and fall surface peak are two different claims and both are true.',
  },
  {
    question: 'Do repellents, ultrasonic stakes or gum in the burrow work?',
    answer:
      'No, on the published evidence. University of California IPM states that no repellents have proven effective, that vibrating stakes, ultrasonic devices and pinwheels fail because these rodents don’t frighten easily, and that chewing gum and laxatives placed in burrows are ineffective. New Mexico State University Extension states there are no registered repellents, and that noise-making devices and plants reported to repel pocket gophers have not been proven effective.',
  },
  {
    question: 'Can I just fence them out?',
    answer:
      'Partly, and every source that recommends it also states the limit. University of California IPM describes wire baskets of light-gauge, three-quarter-inch, non-galvanized steel wire for individual plants, and says underground fencing is not perfect, because persistent gophers can burrow below the wire. Utah State University Extension is blunter: excluding pocket gophers can be very costly and is usually impractical. Washington Department of Fish and Wildlife states that a below-ground barrier will only slow the movements of gophers for a time, and that sooner or later the barrier will be breached.',
  },
  {
    question: 'Is it legal to trap a pocket gopher?',
    answer:
      'That depends entirely on where you are, and in at least one place lethal control is prohibited. Four subspecies of the Mazama pocket gopher in Thurston and Pierce Counties, Washington are federally listed as threatened under a 2014 US Fish and Wildlife Service final rule. In California, Fish and Game Code section 4152 permits nongame mammals found to be injuring growing crops or other property to be taken at any time or in any manner by the owner or tenant of the premises. Those are two states out of fifty. Check your own state wildlife agency before you set anything.',
  },
];

const sources: Source[] = [
  {
    label: 'Pocket Gophers — Pest Notes, UC ANR Publication 7433',
    publisher: 'UC Statewide IPM Program, University of California (R.A. Baldwin)',
    date: 'Updated 06/2025',
    href: 'https://ipm.ucanr.edu/home-and-landscape/pocket-gophers/',
  },
  {
    label: 'Living with wildlife: Pocket gophers',
    publisher: 'Washington Department of Fish and Wildlife',
    date: 'Accessed August 21, 2026',
    href: 'https://wdfw.wa.gov/species-habitats/living/species-facts/pocket-gophers',
  },
  {
    label: 'Pocket Gophers',
    publisher: 'Utah State University Extension',
    date: 'July 2024',
    href: 'https://extension.usu.edu/crops/research/pocket-gophers',
  },
  {
    label: 'Controlling Pocket Gophers in New Mexico (Guide L-109)',
    publisher: 'New Mexico State University Cooperative Extension Service',
    date: 'Reprinted March 2005',
    href: 'https://pubs.nmsu.edu/_l/L109/index.html',
  },
  {
    label: 'Managing Pocket Gopher Damage (L-1904)',
    publisher: 'Texas A&M AgriLife Extension',
    date: 'June 2013',
    href: 'https://agrilifeextension.tamu.edu/wp-content/uploads/2025/07/Managing-pocket-gopher-damagepublication.pdf',
  },
  {
    label: 'Controlling pocket gopher damage to agricultural crops (EC 1117)',
    publisher: 'Oregon State University Extension Service (W.D. Edge and J.P. Loegering)',
    date: 'Reprinted May 1999',
    href: 'https://smallfarms.oregonstate.edu/sites/agscid7/files/pocket-gophers-ec1117.pdf',
  },
  {
    label:
      'Threatened Species Status for the Olympia, Roy Prairie, Tenino, and Yelm Pocket Gophers — final rule, 79 FR 19760',
    publisher: 'US Fish and Wildlife Service, Department of the Interior',
    date: 'April 9, 2014',
    href: 'https://www.federalregister.gov/documents/2014/04/09/2014-07414/endangered-and-threatened-wildlife-and-plants-threatened-species-status-for-the-olympia-pocket',
  },
  {
    label: 'California Fish and Game Code § 4150 — nongame mammals',
    publisher: 'California Legislative Information',
    date: 'Accessed August 21, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4150',
  },
  {
    label: 'California Fish and Game Code § 4152 — take of nongame mammals injuring property',
    publisher: 'California Legislative Information',
    date: 'Accessed August 21, 2026',
    href: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=FGC&sectionNum=4152',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'mound-vs-molehill', title: 'Gopher Mound or Mole Hill' },
  { id: 'burrow', title: 'The Burrow System' },
  { id: 'year', title: 'The Year in a Gopher' },
  { id: 'damage', title: 'What They Damage' },
  { id: 'trapping', title: 'Control: Trapping First' },
  { id: 'exclusion', title: 'Control: Exclusion' },
  { id: 'doesnt-work', title: 'What Does Not Work' },
  { id: 'legal', title: 'Before You Set Anything' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [{ title: 'Gopher traps: placement and types', href: '/us/best-gopher-traps' }];

export default function PocketGophersPage() {
  return (
    <UsPageLayout
      title="Pocket Gophers"
      subtitle="Fresh mounds of soil across a lawn, and nothing ever seen above ground. Here is how to confirm what made them, what it is doing down there, and which of the many suggested remedies the research actually supports."
      lastUpdated="August 2026"
      readingTime="9 min"
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={GOPHER_HOME}
      clusterNav={GOPHER_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        You will almost certainly never see one: Utah State University Extension describes
        pocket gophers as solitary animals that are rarely seen aboveground, and University of
        California IPM states that gophers spend almost all their time underground in their
        burrow and aren&rsquo;t commonly seen. What you get instead is the evidence: fresh soil
        pushed up in mounds, plants wilting for no visible reason, and occasionally a whole row
        of them gone.
      </p>
      <p>
        This page covers what the animal is and what the sourced options are. The trap
        question — where to set one, which types exist, and what the only two efficacy
        studies we could find actually measured — is on{' '}
        <Link href="/us/best-gopher-traps">the traps page</Link>.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        University of California IPM describes pocket gophers, Thomomys species, as burrowing
        rodents that get their name from the fur-lined, external cheek pouches they use for
        carrying food and nesting materials.
        We cannot give you a national species count: no extension or government source we
        could obtain states how many species occur in the United States, so rather than
        repeat a figure we cannot trace, here is what the state-level sources do say.
      </p>
      <ul>
        <li>
          <AsOf date="the 06/2025 revision of UC ANR Publication 7433">
            University of California IPM states that five species of pocket gophers are found
            in California
          </AsOf>
          , with <em>Thomomys bottae</em> the most widespread of them.
        </li>
        <li>
          Washington Department of Fish and Wildlife names the northern pocket gopher,{' '}
          <em>Thomomys talpoides</em>, as occupying much of eastern Washington, and the Mazama
          or western pocket gopher, <em>Thomomys mazama</em>, as the only pocket gopher in most
          of western Washington.
        </li>
      </ul>
      <p>
        Both figures are state-scoped and are written that way deliberately. If you need a
        national picture, your state wildlife agency is the place to get it.
      </p>

      <h2 id="mound-vs-molehill">Gopher Mound or Mole Hill</h2>
      <p>
        This is the identification that matters, because it decides everything you do next,
        and it is the thing most often got wrong. Two signals: the shape of one mound, and the
        pattern of several.
      </p>
      <h3>The shape of a single mound</h3>
      <ul>
        <li>
          <strong>Gopher.</strong> University of California IPM describes mounds as crescent-
          or horse-shoe-shaped when viewed from above, with the hole off to one side and
          usually plugged. Utah State University Extension gives the same in different words:
          mounds are fan-shaped, and a soil plug seals the entrance. Washington Department of
          Fish and Wildlife describes a fan-shaped or heart-shaped mound.
        </li>
        <li>
          <strong>Mole.</strong> University of California IPM describes mole mounds as more
          circular, and states that in profile they are volcano-shaped. Oregon State University
          Extension agrees that mole mounds are higher and generally rounder in shape than
          gopher mounds.
        </li>
      </ul>
      <p>
        On a gopher mound the plug sits to one side of a fan or crescent; on a mole hill the
        opening is in the middle of a cone.
      </p>
      <h3>The pattern of several mounds</h3>
      <p>
        Oregon State University Extension gives a second signal that works from the kitchen
        window, before you go and crouch over anything: gopher mounds tend to be clumped in
        tight groups, while the mole&rsquo;s tend to be spaced in a line as single mounds.
      </p>
      <h3>How big is a mound</h3>
      <p>
        Two sources, two ranges, both reported rather than averaged. Oregon State University
        Extension gives flattened or fan-shaped mounds 12 to 24 inches in diameter and 4 or
        more inches in height. Texas A&amp;M AgriLife Extension gives a horseshoe shaped mound
        approximately 8 to 24 inches in diameter and 6 inches high.
      </p>

      <h2 id="burrow">The Burrow System</h2>
      <p>
        One gopher, one system. The figures below differ between sources and between species,
        and each is attributed rather than blended into a single false number.
      </p>
      <ul>
        <li>
          <strong>Depth.</strong> University of California IPM: feeding burrows 6 to 12 inches
          below ground, with the nest as deep as 6 feet. Washington Department of Fish and
          Wildlife: tunnels 4 to 12 inches below ground, nest as deep as 6 feet. Utah State
          University Extension and New Mexico State University: main tunnel 4 to 18 inches
          below the surface. Texas A&amp;M AgriLife Extension: shallow runways 4 to 15 inches
          below the surface.
        </li>
        <li>
          <strong>Tunnel diameter.</strong> Washington Department of Fish and Wildlife gives 1¾
          to 3½ inches. New Mexico State University gives about 3 inches.
        </li>
        <li>
          <strong>Extent.</strong> University of California IPM gives a system covering 200 to
          2,000 square feet. Utah State University Extension and New Mexico State University
          both give up to 200 yards of tunnels. Texas A&amp;M AgriLife Extension gives a system
          extending as much as 800 feet and covering an acre of ground.
        </li>
      </ul>
      <p>
        The practical consequence of the depth figures is simple: you cannot set anything until
        you have found the main tunnel, and the main tunnel is 4 to 18 inches down depending
        on whose figure applies where you live.
      </p>

      <h2 id="year">The Year in a Gopher</h2>
      <p>
        Two claims here that sound contradictory and are not. Both are true and both are
        sourced.
      </p>
      <ul>
        <li>
          <strong>They are active all year.</strong> University of California IPM states that
          gophers don&rsquo;t hibernate and are active year-round. Washington Department of Fish
          and Wildlife adds that they are active year-round and at all hours of the day.
        </li>
        <li>
          <strong>Surface activity peaks in spring and fall.</strong> Utah State University
          Extension states that pocket gophers are usually most active in the spring and fall.
          New Mexico State University ties that directly to control: trapping is most effective
          when gophers are pushing up new mounds, usually in spring and fall. Texas A&amp;M
          AgriLife Extension states that control operations should be conducted during the
          spring and fall when pocket gophers are most active near the surface.
        </li>
      </ul>
      <h2 id="damage">What They Damage</h2>
      <ul>
        <li>
          <strong>Irrigation and utilities.</strong> University of California IPM reports damage
          to flexible plastic water lines and irrigation systems. Utah State University
          Extension reports biting through electrical, internet, and other utility cables.
          Washington Department of Fish and Wildlife reports chewing underground sprinkler
          lines.
        </li>
        <li>
          <strong>Plants and trees.</strong> Washington Department of Fish and Wildlife reports
          eating garden crops or damaging orchard or ornamental trees, and gnawing on bark
          several feet up.
        </li>
        <li>
          <strong>Lawns and equipment.</strong> University of California IPM notes mounds
          interfering with mowing; Utah State University Extension reports damage to mowing
          equipment.
        </li>
        <li>
          <strong>Structures.</strong> Texas A&amp;M AgriLife Extension reports that a tunnel
          system in a dam can cause it to erode and wash out, and that tunnels under pavement
          can make it sink.
        </li>
      </ul>
      <p>
        One counterweight, because it is in the same extension literature and leaving it out
        would flatter the case: Texas A&amp;M AgriLife Extension records that one gopher
        transports 2½ tons of soil to the ground surface in a year. The animal is a soil
        engineer that happens to be standing on your lawn.
      </p>

      <h2 id="trapping">Control: Trapping First</h2>
      <p>
        Trapping is the method the extension sources treat as the default for a yard or a
        garden, and it is the one with actual field evidence behind it. Two things decide
        whether it works, and neither is which trap you buy:
      </p>
      <ul>
        <li>
          <strong>Set in the main tunnel, not a lateral.</strong> University of California IPM
          states that lateral placement is not as successful as in the main burrow. New Mexico
          State University agrees: greater success will usually be achieved by trapping in the
          main runway.
        </li>
        <li>
          <strong>Find the main tunnel by probing.</strong> Texas A&amp;M AgriLife Extension
          describes locating the main runway by probing the soil with a bluntly pointed probe,
          6 to 8 inches from the mound on the horseshoe-depression side. University of
          California IPM describes what you are feeling for: a sudden, noticeable drop of about
          2 inches.
        </li>
      </ul>
      <p>
        The full method, the trap types extension sources name, and what the two efficacy
        studies found are on the traps page, linked below.
      </p>

      <h2 id="exclusion">Control: Exclusion</h2>
      <p>
        Exclusion works at the scale of a single plant and struggles at the scale of a yard.
        Every source that recommends it states a limit in the same breath, and those limits are
        the useful part.
      </p>
      <ul>
        <li>
          <strong>Baskets around individual plants.</strong> University of California IPM
          describes wire baskets of light-gauge, three-quarter-inch, non-galvanized steel wire.
          Washington Department of Fish and Wildlife describes bulb baskets from half-inch mesh
          hardware cloth.
        </li>
        <li>
          <strong>Buried barriers.</strong> Utah State University Extension describes mesh of a
          quarter to half an inch, buried about 18 inches. New Mexico State University describes
          fencing highly valued ornamental shrubs with quarter-inch or half-inch hardware cloth
          buried at least 18 inches.
        </li>
      </ul>
      <p>
        <strong>And the stated limits, which matter more than the specifications.</strong>{' '}
        University of California IPM says underground fencing is not perfect, because persistent
        gophers can burrow below the wire. Washington Department of Fish and Wildlife says a
        below-ground barrier will only slow the movements of gophers for a time, and that sooner
        or later the barrier will be breached. New Mexico State University calls yard-scale
        fencing of limited practicality. Utah State University Extension is the bluntest:
        excluding pocket gophers can be very costly and is usually impractical.
      </p>

      <h2 id="doesnt-work">What Does Not Work</h2>
      <ul>
        <li>
          <strong>Repellents.</strong> University of California IPM: no repellents have proven
          effective. New Mexico State University: there are no registered repellents.
        </li>
        <li>
          <strong>Vibrating stakes, ultrasonic devices and pinwheels.</strong> University of
          California IPM gives the reason as well as the verdict — these rodents don&rsquo;t
          frighten easily. New Mexico State University: noise-making devices and plants reported
          to repel pocket gophers have not been proven effective.
        </li>
        <li>
          <strong>Chewing gum and laxatives in the burrow.</strong> University of California
          IPM: ineffective.
        </li>
        <li>
          <strong>Gasoline or propane in the burrow.</strong> New Mexico State University states
          this is not recommended. Utah State University Extension notes that because of their
          higher cost and inconsistent effectiveness, gas cartridges are not recommended.
        </li>
      </ul>
      <p>
        One more, and it is a small thing that saves effort: University of California IPM reports
        no impact of human scent on trapping success. You do not need gloves for that reason.
      </p>

      <h2 id="legal">Before You Set Anything</h2>
      <p>
        <strong>Check your state wildlife agency first.</strong> Pocket gopher law is
        state-by-state, we checked two states out of fifty, and in one place lethal control is
        prohibited outright. What follows is what the primary texts say, not legal advice.
      </p>
      <h3>Some pocket gophers are federally protected</h3>
      <p>
        A US Fish and Wildlife Service final rule published on 9 April 2014 at 79 FR 19760
        determined threatened species status under the Endangered Species Act for four
        subspecies of the Mazama pocket gopher found in Thurston and Pierce Counties of
        Washington State: the Olympia, Roy Prairie, Tenino and Yelm pocket gophers. Washington
        Department of Fish and Wildlife adds that people are not permitted to use lethal control
        in these areas.
      </p>
      <p>
        If you are in those counties, the identification question on this page is not
        academic.
      </p>
      <h3>California</h3>
      <p>
        Fish and Game Code section 4150 provides that a nongame mammal may not be taken or
        possessed except as provided in the code. Section 4152 then provides that nongame
        mammals found to be injuring growing crops or other property may be taken at any time
        or in any manner, by the owner or tenant of the premises. University of California
        IPM&rsquo;s own reading of the same position is that a trapping license is not required
        for gopher removal.
      </p>
      <p>
        Section 3003.1 separately restricts body-gripping traps, but it does so for a stated
        purpose: it makes it unlawful to trap for the purposes of recreation or commerce in fur.
        Depredation control of an animal damaging your property under section 4152 is a
        different purpose. Whether a particular trap design falls inside that section&rsquo;s
        definition is a legal question neither the code text nor the extension guidance answers,
        so we state what the code says and stop there.
      </p>
      <h3>Washington</h3>
      <p>
        Outside the protected populations, Washington Department of Fish and Wildlife states
        that pocket gophers are unclassified and may be trapped or killed, that a special
        trapping permit is required for the use of all traps other than live traps, and that it
        is unlawful to release a pocket gopher anywhere within the state other than where it was
        legally trapped, without a permit. That last clause is the one that catches people who
        intend to be kind.
      </p>
      <p>
        <strong>No other state was checked.</strong> Two out of fifty is not coverage, and
        nothing on this page should be read as describing the law where you live.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or
        in the text immediately adjacent to it, and every source named is listed below. Framing,
        ordering, emphasis, and our reading of where the evidence is stronger are our own
        judgment and are not a finding of any source. Where sources give different figures for
        the same measurement, all are reported and attributed rather than averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
