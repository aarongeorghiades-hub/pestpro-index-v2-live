import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { BARKSCORPION_NAV, BARKSCORPION_HOME } from '../components/barkScorpionNav';

const URL = 'https://pestproindex.com/us/arizona-bark-scorpions';
const TITLE =
  'Arizona Bark Scorpions: ID and the Sting';
const DESCRIPTION =
  'The only scorpion of medical concern in the US, per the University of Arizona. How to tell it from harmless desert species, and what a sting actually does.';

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
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Arizona Bark Scorpions', item: URL }],
};

const faqs: Faq[] = [
  {
    question: 'Is an Arizona bark scorpion dangerous?',
    answer:
      'University of Arizona Cooperative Extension states: "The Arizona bark scorpion is the only scorpion of medical concern in the U.S. (Curry et al. 1983), and while all native scorpions can sting, only Arizona bark scorpion stings are hazardous to human health." The same publication also states: "The Arizona bark scorpion is the only scorpion species of medical significance in the United States. However, a sting is not likely to be fatal, or cause long-term injury as long as medical treatment for infants and children is immediately acquired."',
  },
  {
    question: 'What do the sources say to do if a child is stung?',
    answer:
      'University of Arizona Cooperative Extension states: "If children 9 years or under, or weighing less than 70lb (32 Kg) are stung, call 911 or the Poison Help Hotline 1 (800) 222-1222, or take them to the nearest hospital for treatment immediately." The same publication states separately that envenomation of children under 9 years of age or people with hypertension should be considered serious and that caregivers should call 911 for immediate medical help. This page reports what that publication says; it does not assess anyone’s symptoms.',
  },
  {
    question: 'What first aid do the sources give?',
    answer:
      'University of Arizona Cooperative Extension sets out what it describes as the first aid recommended by the Poison Help Hotline, and it is four steps: call the Hotline at 1 (800) 222-1222 immediately; "Wash the area with soap and water."; "Apply a cool compress on the area of the scorpion sting for ten minutes. Remove compress for ten minutes and repeat as necessary."; and "If stung on an arm or leg, rest the affected limb in a supportive position." That is the complete list as published and nothing is added to it here. UC IPM adds one instruction the Arizona publication does not: "Keep the sting victim calm and relaxed, and don’t allow the consumption of alcohol or other sedatives."',
  },
  {
    question: 'How do I tell a bark scorpion from the other scorpions in my yard?',
    answer:
      'The field character that needs no magnification is climbing. University of Arizona Cooperative Extension states that bark scorpions "are the only scorpion in Arizona with the ability and strong tendency to climb – a characteristic which can aid in a quick identification." Texas A&M AgriLife Extension adds a resting posture: "Centruroides bark scorpions are relatively easy to identify by the way they hold their tails when at rest. They tend to hold their tails curled to the side, rather than upright over the body like most other scorpions." University of Arizona Cooperative Extension gives the close-up characters as the slender pincers, the presence of a tooth or tubercle at the base of the stinger, and a long triangular sternum where all other Arizona species have a five-sided or pentagonal one, and states that these features may require magnification to be observed clearly.',
  },
  {
    question: 'Do they really glow under a black light?',
    answer:
      'Yes, and four extension services say so. University of Arizona Cooperative Extension states: "Scorpions glow brightly under Ultraviolet light (UV or black light), use a UV light to inspect inside your home for scorpions before bedtime". Its pest-proofing publication adds the range: "Scorpions glow brightly under black light and are extremely conspicuous up to several yards away." Texas A&M AgriLife Extension states: "Scorpions are among the few animals that fluoresce, or glow, under UVB black light." UC IPM states: "A portable black light (UV light) may be used to survey for scorpions in and around the home." A University of Arizona Backyard Gardener publication also carries an eye-safety warning about ultraviolet light, quoted in full on this page beside the lights themselves.',
  },
  {
    question: 'How small a gap can one get through?',
    answer:
      'UC IPM states of the bark scorpion: "It needs only a crack of 1/16 inch to enter a home." That is a statement about the animal, not an instruction about what to seal. The instruction comes from Texas A&M AgriLife Extension, which says to "Seal gaps under flashing along roof lines and ledges that are an 1/8 inch or larger, scorpions will chase their prey even at roof lines." The two figures measure different things: one is the smallest opening the animal can pass, the other is the point at which one source tells you to act in one named location.',
  },
  {
    question: 'Will insecticide solve it?',
    answer:
      'Every source consulted ranks exclusion above chemical control, and none of them ranks chemical control first. University of Arizona Cooperative Extension states: "However, scorpions are difficult to manage with pesticides alone. Pest-proofing your home or structure is by far the most effective way to reduce scorpion contact and potential scorpion stings." A University of Arizona Backyard Gardener publication states: "Scorpions cannot be managed using pesticides alone." UC IPM states: "The first strategy for control is to modify the area surrounding a house, because scorpions are difficult to control with insecticides." Texas A&M AgriLife Extension states: "Pesticides may provide some suppression of scorpions; however, they should not be relied on as a sole control method." This page carries no chemical product.',
  },
  {
    question: 'Can I get rid of them completely?',
    answer:
      'The lead source forecloses it. University of Arizona Cooperative Extension states that eliminating scorpions from our landscapes would require chemical use it describes as extremely unhealthy and illegal, and would amount only to a temporary eradication of the pest. The same publication states: "Scorpions are extremely difficult to eradicate. If you regularly find scorpions inside your home, call a pest management professional experienced in the management of scorpions." The framing every source uses is reducing contact and keeping them out of the interior, not clearing them from a property.',
  },
];

const sources: Source[] = [
  {
    label:
      'Scorpions of the Desert Southwest United States (az1768) — the source of the identification, sting, entry and exclusion material',
    publisher:
      'University of Arizona Cooperative Extension (Dawn H. Gouge, Shujuan (Lucy) Li, Christopher Bibbs and Shaku Nair)',
    date: 'May 2018, originally published 2011',
    href: 'https://acis.cals.arizona.edu/docs/default-source/community-ipm-documents/publications/2018/az1768-2018.pdf',
  },
  {
    label:
      'Pest-proofing Your Home (az1677) — the source of the door light test and the silicone sealant criterion',
    publisher:
      'University of Arizona Cooperative Extension (Dawn H. Gouge, Shaku Nair, Shujuan Li and Tim Stock)',
    date: 'August 2015',
    href: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1677-2015.pdf',
  },
  {
    label: 'Scorpions (Public Health IPM)',
    publisher: 'University of Arizona, Arizona Pest Management Center',
    date: 'Accessed 25 August 2026',
    href: 'https://acis.cals.arizona.edu/community-ipm/public-health-ipm/scorpions',
  },
  {
    label: 'Scorpion Season is Here! — the source of the bedrooms and bathrooms inspection scope',
    publisher: 'University of Arizona, Arizona Pest Management Center',
    date: '16 May 2025',
    href: 'https://acis.cals.arizona.edu/community-ipm/home-and-school-ipm-newsletters/ipm-newsletters/2025/05/16/scorpion-season-is-here!',
  },
  {
    label: 'Living with and Managing Scorpions — the source of the climbing identification character',
    publisher:
      'University of Arizona, Arizona Pest Management Center (Dawn H. Gouge, Shujuan (Lucy) Li, Christopher Bibbs and Shaku Nair)',
    date: '18 August 2022',
    href: 'https://acis.cals.arizona.edu/community-ipm/home-and-school-ipm-newsletters/ipm-newsletters/2022/08/18/living-with-and-managing-scorpions',
  },
  {
    label:
      'Scorpions, Backyard Gardener #184 — the source of the ultraviolet eye-safety warning and the 77 degree activity figure',
    publisher:
      'University of Arizona Cooperative Extension, Yavapai County (adapted from Jeff Schalau)',
    date: '13 June 2024',
    href: 'https://extension.arizona.edu/sites/extension.arizona.edu/files/attachment/Scorpions.pdf',
  },
  {
    label:
      'IPM Action Plan for Bark Scorpions — the source of the doorway light test, the 1/8 inch flashing threshold and the sticky monitoring trap material',
    publisher: 'Texas A&M AgriLife Extension Service, School IPM',
    date: 'Accessed 25 August 2026',
    href: 'https://schoolipm.tamu.edu/forms/pest-management-plans/ipm-action-plan-for-bark-scorpions/',
  },
  {
    label:
      'Pest Notes: Scorpions, UC ANR Publication 74110 — the source of the 1/16 inch figure, the glue board size and the 10 to 12 inch forceps figure',
    publisher: 'UC Statewide IPM Program (E.T. Natwick, emeritus, UC Cooperative Extension Imperial County)',
    date: 'Updated December 2011',
    href: 'https://ipm.ucanr.edu/PMG/PESTNOTES/pn74110.html',
  },
  {
    label: 'Anascorp — approved blood products register entry, STN 125335',
    publisher: 'U.S. Food and Drug Administration',
    date: 'Content current as of 2 March 2018',
    href: 'https://www.fda.gov/vaccines-blood-biologics/approved-blood-products/anascorp',
  },
  {
    label:
      'A Sting Operation: Risk Assessment and Venom Expenditure by Arizona Bark Scorpions (Centruroides sculpturatus) in a Defensive Context',
    publisher:
      'Toxins (Lindsay A. Marston, Gerad A. Fox, Kim Y. Hung, Shannon J. Delo and William K. Hayes)',
    date: '13 April 2025, doi 10.3390/toxins17040198',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12030811/',
  },
];

const tocItems = [
  { id: 'identification', title: 'Which Scorpion Is It' },
  { id: 'exclusion', title: 'Sealing the Building' },
  { id: 'the-sting', title: 'The Sting' },
  { id: 'where-they-live', title: 'Where They Live, and How They Get In' },
  { id: 'finding-them', title: 'Finding Them in the Dark' },
  { id: 'not-carried', title: 'What This Page Does Not Carry' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function ArizonaBarkScorpionsPage() {
  return (
    <UsPageLayout
      title="Arizona Bark Scorpions"
      subtitle="One scorpion in the United States is of medical concern, and it lives alongside several that are not. This page sets out how the extension services tell them apart, what they say about a sting, and what they say actually keeps one out of a building."
      lastUpdated="August 2026"
      readingTime="12 min"
      tocItems={tocItems}
      homeHref={BARKSCORPION_HOME}
      clusterNav={BARKSCORPION_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <em>Centruroides sculpturatus</em> is the name the current publications use.
        University of Arizona Cooperative Extension states plainly what separates it from
        every other scorpion a reader in the desert southwest is likely to meet:{' '}
        <em>
          &ldquo;The Arizona bark scorpion is the only scorpion of medical concern in the
          U.S. (Curry et al. 1983), and while all native scorpions can sting, only Arizona
          bark scorpion stings are hazardous to human health.&rdquo;
        </em>
      </p>
      <p>
        Because that is the whole difference, the identification section comes first and
        the sting section comes second, before anything else on this page. Everything
        below is drawn from university extension services, one FDA register entry and one
        peer-reviewed paper, each named in the sentence that uses it and listed at the
        foot of the page.
      </p>

      <h2 id="identification">Which Scorpion Is It</h2>
      <p>
        The character that needs no magnification, and no scorpion in your hand, is
        climbing. University of Arizona Cooperative Extension states that bark scorpions{' '}
        <em>
          &ldquo;are the only scorpion in Arizona with the ability and strong tendency to
          climb &ndash; a characteristic which can aid in a quick identification.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension gives a second character visible at a distance:{' '}
        <em>
          &ldquo;Centruroides bark scorpions are relatively easy to identify by the way
          they hold their tails when at rest. They tend to hold their tails curled to the
          side, rather than upright over the body like most other scorpions.&rdquo;
        </em>
      </p>
      <p>
        On size and color, University of Arizona Cooperative Extension states:{' '}
        <em>
          &ldquo;Adults are 2-3 inches in length, have relatively slender appendages and a
          long, slender tail. Their coloration and markings are highly variable, some being
          pale in color, others darker with stripes or checkered patterning.&rdquo;
        </em>{' '}
        Color is therefore not a diagnostic character, and the same publication elsewhere
        gives the range as 0.25 to 3 inches for the animals encountered in and around
        houses.
      </p>
      <p>
        The close-up characters are set out in the University of Arizona pest-proofing
        publication: the slender pincers, <em>&ldquo;the presence of a tooth or tubercle at
        the base of the stinger&rdquo;</em>, and a long triangular sternum where all other
        Arizona species have a five-sided or pentagonal one. That publication also states
        that these features may require magnification to be observed clearly, which is
        worth knowing before anyone leans in to look.
      </p>
      <p>
        <strong>The two most common look-alikes are not the dangerous one.</strong> Of the
        Arizona giant hairy scorpion <em>Hadrurus arizonensis</em>, University of Arizona
        Cooperative Extension states that it is <em>&ldquo;the largest scorpion in the
        U.S.&rdquo;</em>, that adults <em>&ldquo;often exceed 5 inches in length&rdquo;</em>,
        and that they have <em>&ldquo;a mild venom&rdquo;</em>. It then says something a
        reader about to step on one should probably know:{' '}
        <em>
          &ldquo;These harmless giants spend most of their time under rocks and in shallow
          burrows; they are a beneficial addition to your home landscape as they consume
          Arizona bark scorpions voraciously.&rdquo;
        </em>
      </p>
      <p>
        Of the Arizona stripe-tailed scorpion <em>Paravaejovis spinigerus</em> and the
        yellow ground scorpion <em>Vaejovis confusus</em>, the same publication states they
        are{' '}
        <em>
          &ldquo;often mistaken for bark scorpions, but the stripe-tailed scorpion is
          heavily armored, with comparatively bulkier pedipalps and tail&rdquo;
        </em>
        , and that their venom <em>&ldquo;is relatively mild, and does not usually require
        medical intervention.&rdquo;</em>
      </p>
      <p>
        <strong>A note on the scientific name.</strong> The current University of Arizona,
        Texas A&amp;M and peer-reviewed publications all use{' '}
        <em>Centruroides sculpturatus</em>. UC IPM, whose Pest Note was last updated in
        December 2011, uses the reverse convention and writes of{' '}
        <em>&ldquo;the bark scorpion, Centruroides exilicauda (formerly C.
        sculpturatus)&rdquo;</em>. Both names refer to the animal described here.
      </p>

      <h2 id="exclusion">Sealing the Building</h2>
      <p>
        <strong>Start at the bottom of the doors, and there is a test for it.</strong> Texas
        A&amp;M AgriLife Extension, having said that most scorpions get in under exterior
        doors, gives both the fix and the check:{' '}
        <em>
          &ldquo;This can be prevented by well-sealing door sweeps and weather-stripping.
          One test of doorways is to check whether light can be seen under the doorway from
          the inside.&rdquo;
        </em>{' '}
        The University of Arizona pest-proofing publication states the same test as a
        standard:{' '}
        <em>
          &ldquo;Install door sweeps and repair thresholds at the base of all exterior entry
          doors. No outside light should be visible underneath exterior doors when viewed
          from the inside at floor level.&rdquo;
        </em>{' '}
        University of Arizona Cooperative Extension puts it in one line in its scorpion
        publication: <em>&ldquo;Ensure door sweeps are tight fitting with no gaps.&rdquo;</em>{' '}
        and <em>&ldquo;Install weather-stripping around doors and windows and ensure a snug
        fit.&rdquo;</em>
      </p>
      <p>
        That test is worth doing before buying anything, because it tells you whether you
        have a problem at all, and it tells you when you have finished.
      </p>
      <p>
        <strong>Two measurements, and they are not in conflict.</strong> UC IPM states of the
        bark scorpion: <em>&ldquo;It needs only a crack of 1/16 inch to enter a home.&rdquo;</em>{' '}
        Texas A&amp;M AgriLife Extension gives an instruction with a different number:{' '}
        <em>
          &ldquo;Seal gaps under flashing along roof lines and ledges that are an 1/8 inch or
          larger, scorpions will chase their prey even at roof lines.&rdquo;
        </em>{' '}
        The first is a fact about the animal: the smallest opening it can pass through. The
        second is an action threshold for one named location, telling you where to start
        rather than where the animal stops. A building sealed only to one eighth of an inch
        has not been sealed to the figure UC IPM gives.
      </p>
      <p>
        On what to seal and with what, University of Arizona Cooperative Extension says to{' '}
        <em>
          &ldquo;Caulk around roof eaves, pipes and any other points and wall penetrations
          into the building.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension names the material class:{' '}
        <em>
          &ldquo;Use weather-stripping, excluder mesh, or good quality elastomeric sealants
          to seal windows, building cracks, or utility penetrations.&rdquo;
        </em>{' '}
        The University of Arizona pest-proofing publication is more specific about which
        material lasts:{' '}
        <em>
          &ldquo;For small cracks, use good-quality silicone sealant (Fig. 6). Silicone lasts
          longer than latex caulking materials, as it expands and contracts more effectively
          with changing temperatures.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          One thing the sources tell you not to do
        </p>
        <p className="m-0 mt-3 text-sm text-amber-900">
          University of Arizona Cooperative Extension states:{' '}
          <em>
            &ldquo;Screen weep holes in brick veneer or weep screed with coarse steel mesh
            (the holes should not be plugged or sealed as they are important for the
            ventilation of wall spaces).&rdquo;
          </em>{' '}
          Weep holes are a known entry route and they are also a drainage and ventilation
          feature of the wall. Screening them is the published instruction. Filling them
          with sealant is not.
        </p>
      </div>

      <p>
        Three silicone products are named below. They are named because they are silicone,
        which is the material class both Texas A&amp;M AgriLife Extension and the University
        of Arizona pest-proofing publication describe, and for no other reason. Neither
        source names any product, and neither does this page rank these three against one
        another.
      </p>

      <p>
        The three products below are sealing materials, named only because they match the exclusion measures those two sources describe.
      </p>

      <UsToolCard
        name="GE Advanced Silicone Caulk for Window &amp; Door, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'A silicone sealant, which is the material class Texas A&M AgriLife Extension names for scorpion work when it says to use good quality elastomeric sealants on windows, building cracks and utility penetrations.',
          'University of Arizona Cooperative Extension names the locations for this work on a scorpion job: roof eaves, pipes, and any other points and wall penetrations into the building.',
          'Its own listing states silicone and a 10 fl oz cartridge. Nothing further about it is claimed here, and no source names it or any other product.',
        ]}
        asin="B0BVGTM2XY"
      />

      <UsToolCard
        name="GE Advanced Silicone Window &amp; Door Sealant, Clear, 10.1 oz Cartridge"
        whatItDoes={[
          'A second silicone option in the same cartridge size range, for the same wall penetrations.',
          'The reason a silicone is named at all rather than a cheaper filler is the University of Arizona pest-proofing publication, which states that silicone lasts longer than latex caulking materials because it expands and contracts more effectively with changing temperatures.',
          'Texas A&M AgriLife Extension gives the only gap figure attached to sealing on a scorpion job: seal gaps under flashing along roof lines and ledges that are an eighth of an inch or larger.',
        ]}
        asin="B0000CBJ7W"
      />

      <UsToolCard
        name="GE All Purpose Silicone Caulk, Clear, 10 fl oz Cartridge"
        whatItDoes={[
          'Also a silicone sealant. Its listing describes it as all purpose rather than as a window and door product, which is the difference between this and the two above.',
          'That distinction belongs to the listings and not to any source: neither Texas A&M AgriLife Extension nor the University of Arizona distinguishes between silicone formulations for this work.',
          'Whichever is used, the University of Arizona instruction about weep holes still applies: those are screened, not sealed.',
        ]}
        asin="B0B8QPH3RW"
      />

      <p>
        Two further measures from the sources need no product at all. University of Arizona
        Cooperative Extension says to{' '}
        <em>
          &ldquo;Keep grass closely mowed near the home. Prune bushes and overhanging tree
          branches away from the structure. Tree branches can provide a path to the roof for
          scorpions. Minimize low growing ground cover vegetation.&rdquo;
        </em>{' '}
        And the University of Arizona pest-proofing publication gives one measure aimed
        squarely at the group the sting material is about:{' '}
        <em>
          &ldquo;Protect an infant&rsquo;s crib by placing the legs of the crib in clean
          wide-mouthed glass jars (scorpions cannot climb the clean glass). Pull cribs away
          from walls; bark scorpions can climb vertical walls, but make little progress
          across ceilings.&rdquo;
        </em>
      </p>

      <h2 id="the-sting">The Sting</h2>
      <p>
        <strong>
          This is the only arachnid on this site whose sting the sources treat as a medical
          question in its own right, with one exception.
        </strong>{' '}
        <Link href="/us/black-widow-spiders">Our black widow page</Link> covers the other
        Southwestern arachnid whose venom acts on the nervous system rather than on tissue, and
        which the sources there also route to medical care rather than to a product.
      </p>
      <p>
        <strong>
          Everything in this section is what a named publication says. This site is not a
          medical source and does not assess anyone&rsquo;s symptoms.
        </strong>{' '}
        University of Arizona Cooperative Extension states:{' '}
        <em>
          &ldquo;The Arizona bark scorpion is the only scorpion species of medical
          significance in the United States. However, a sting is not likely to be fatal, or
          cause long-term injury as long as medical treatment for infants and children is
          immediately acquired.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          The threshold the University of Arizona publishes for children
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          University of Arizona Cooperative Extension states:{' '}
          <em>
            &ldquo;If children 9 years or under, or weighing less than 70lb (32 Kg) are
            stung, call 911 or the Poison Help Hotline 1 (800) 222-1222, or take them to the
            nearest hospital for treatment immediately.&rdquo;
          </em>
        </p>
        <p className="m-0 mt-3 text-sm text-red-900">
          The same publication states separately that envenomation of children under 9 years
          of age or people with hypertension should be considered serious and that
          caregivers should call 911 for immediate medical help, and that a very small
          number of people may be allergic to the venom and can experience life-threatening
          side effects when stung, as occurs with bee stings.
        </p>
      </div>

      <p>
        For adults the same publication is less alarming and still points at the same phone
        number:{' '}
        <em>
          &ldquo;Most healthy adults can manage a sting without seeking the help of a
          doctor, but it is always advisable to call the Poison Help Hotline 1 (800)
          222-1222 for advice, as each individual has a unique response.&rdquo;
        </em>{' '}
        It also reports how those calls usually end:{' '}
        <em>
          &ldquo;Approximately 90% of scorpion sting exposures reported to the Arizona
          Poison and Drug Information Center via the Poison Help Hotline are treated at
          home, reducing the costs of unnecessary medical care.&rdquo;
        </em>
      </p>
      <p>
        <strong>The first aid, as published.</strong> University of Arizona Cooperative
        Extension sets out what it describes as the first aid recommended by the Poison Help
        Hotline. It is four steps and this is all of them: call the Hotline at 1 (800)
        222-1222 immediately, where a certified specialist will review the symptoms and
        provide treatment advice or recommend transport to the emergency room if necessary;{' '}
        <em>&ldquo;Wash the area with soap and water.&rdquo;</em>;{' '}
        <em>
          &ldquo;Apply a cool compress on the area of the scorpion sting for ten minutes.
          Remove compress for ten minutes and repeat as necessary.&rdquo;
        </em>
        ; and{' '}
        <em>
          &ldquo;If stung on an arm or leg, rest the affected limb in a supportive
          position.&rdquo;
        </em>{' '}
        Nothing is added to that list here. UC IPM gives one instruction the Arizona
        publication does not:{' '}
        <em>
          &ldquo;Keep the sting victim calm and relaxed, and don&rsquo;t allow the
          consumption of alcohol or other sedatives.&rdquo;
        </em>
      </p>
      <p>
        <strong>What the sources say the symptoms are, and where they disagree.</strong>{' '}
        University of Arizona Cooperative Extension states that the venom{' '}
        <em>
          &ldquo;may produce severe pain (but rarely swelling) at the site of the sting,
          numbness, frothing at the mouth, difficulties in breathing (including respiratory
          paralysis), muscle twitching, flailing limbs, and convulsions.&rdquo;
        </em>{' '}
        UC IPM describes the same sting differently, stating that{' '}
        <em>
          &ldquo;the bark scorpion&rsquo;s sting can be serious, causing severe pain and
          swelling, respiratory paralysis, and convulsions.&rdquo;
        </em>{' '}
        <strong>
          One says swelling is rare and the other lists swelling among the effects. That
          disagreement is left standing here rather than resolved, because resolving it
          would mean choosing between two extension services on a medical point, and this
          page is not in a position to do that.
        </strong>
      </p>
      <p>
        On timing, University of Arizona Cooperative Extension states that{' '}
        <em>
          &ldquo;symptoms generally develop within 20 minutes, and continue to worsen during
          the first 4 hours after envenomation&rdquo;
        </em>{' '}
        and that <em>&ldquo;Resolution of symptoms is usually complete within 72
        hours.&rdquo;</em> It gives one instruction about the tail of that:{' '}
        <em>
          &ldquo;In rare instances, symptoms persist for more than a week, and it is
          recommended that patients experiencing symptoms beyond a week seek medical
          care.&rdquo;
        </em>
      </p>
      <p>
        The same publication records that clinicians grade a patient&rsquo;s symptoms on a
        four-point scale. That scale is a tool used by medical staff, and it is named here
        only so that a reader who hears it used knows what it is. It is not reproduced on
        this page and it is not something to apply to yourself or to a child.
      </p>
      <p>
        <strong>On antivenom.</strong> The U.S. Food and Drug Administration lists Anascorp,
        proper name Centruroides (Scorpion) Immune F(ab&rsquo;)2 (Equine) Injection, under
        STN 125335, manufactured by Rare Disease Therapeutics, Inc., with the indication{' '}
        <em>&ldquo;For the treatment of clinical signs of scorpion envenomation.&rdquo;</em>{' '}
        University of Arizona Cooperative Extension adds that it is the only available
        antivenom for that purpose and that{' '}
        <em>
          &ldquo;resolution of symptoms can usually be achieved within 4 hours of
          treatment.&rdquo;
        </em>
      </p>
      <p>
        <strong>On how rare death is.</strong> Writing in 2018, University of Arizona
        Cooperative Extension stated that <em>&ldquo;Death is extremely rare&rdquo;</em> and
        that <em>&ldquo;In the United States, only four deaths in the past 11 years have
        occurred.&rdquo;</em> That figure is anchored to the 2018 publication date and
        counts the eleven years before it; it is not a statement about the period since.
      </p>
      <p>
        <strong>Most stings are avoidable, and the sources say why.</strong> University of
        Arizona Cooperative Extension states:{' '}
        <em>
          &ldquo;All scorpions will sting to defend themselves, and the majority of sting
          incidents occur when a scorpion is accidentally grabbed, crushed against the body,
          or trodden on.&rdquo;
        </em>{' '}
        The practical consequences it lists are shoes and slippers at night, not storing
        shoes on the floor, not leaving towels or clothing on the ground indoors or out, and
        putting firewood straight onto the fire rather than stacking it indoors.
      </p>
      <p>
        A 2025 study in <em>Toxins</em> observed defensive behavior in wild{' '}
        <em>Centruroides sculpturatus</em> and reported that its results{' '}
        <em>&ldquo;failed to show consistent support for any of our four hypotheses&rdquo;</em>{' '}
        about sex, body size, substrate orientation and threat type. It documented the
        frequency of dry stings, at 11.8%, delivered to membrane-covered glass beakers under
        that study&rsquo;s protocol. That figure describes stings to laboratory apparatus in
        that experiment and nothing here extends it to stings to people.
      </p>

      <h2 id="where-they-live">Where They Live, and How They Get In</h2>
      <p>
        University of Arizona Cooperative Extension states that{' '}
        <em>
          &ldquo;the Arizona bark scorpion is common around buildings of all kinds in low
          desert areas, and is often associated with homes and hollow-block perimeter
          walls&rdquo;
        </em>
        , and reports a strikingly lopsided preference:{' '}
        <em>
          &ldquo;In research studies investigating the harborage preferences of Arizona bark
          scorpions, 95% of the scorpions preferred hollow block walls as refuge places
          compared with the many other options around buildings and landscapes.&rdquo;
        </em>{' '}
        It also recommends acting on that, saying to{' '}
        <em>
          &ldquo;Stucco and cap hollow-block walls to make them less inviting harborage
          zones.&rdquo;
        </em>
      </p>
      <p>
        On entry routes, University of Arizona Cooperative Extension describes them entering
        under and around poorly fitted doorways, through window vents, under exterior walls
        with openings, and through weep-holes in the weep screed, and then moving through
        the wall cavity to reach interior spaces around electrical faceplates and pipe
        collars. Texas A&amp;M AgriLife Extension puts a rank order on that:{' '}
        <em>&ldquo;Most scorpions gain access into schools through gaps under exterior
        doors.&rdquo;</em>{' '}
        That single sentence is why the next section leads where it does.
      </p>
      <p>
        Citing a 2017 study by Kang and Brooks, University of Arizona Cooperative Extension
        states that <em>&ldquo;98% of exposures occur in or around homes&rdquo;</em>, and
        reports from the same study that the highest sting incidence per 100,000 people
        occurs in Phoenix, at up to 677, and Tucson, at 584, with El Paso at 213, Oklahoma
        City at 209, Tulsa at 178 and Las Vegas at 170.
      </p>
      <p>
        <strong>Two sources disagree about ceilings, and it matters.</strong> University of
        Arizona Cooperative Extension states that the animal{' '}
        <em>&ldquo;can scale walls&rdquo;</em> and{' '}
        <em>&ldquo;traverse across ceilings&rdquo;</em>, and describes scorpions falling
        from ceilings into beds, sinks, bathtubs and toilet bowls. Texas A&amp;M AgriLife
        Extension states the opposite of the second half:{' '}
        <em>
          &ldquo;They will climb vertical walls, but do not generally make it far across a
          horizontal ceiling.&rdquo;
        </em>{' '}
        The University of Arizona pest-proofing publication agrees with Texas A&amp;M,
        stating that <em>&ldquo;bark scorpions can climb vertical walls, but make little
        progress across ceilings.&rdquo;</em> Two of the three say ceilings are a weak
        point; one says they cross them. Both positions are recorded here with the source
        that holds them.
      </p>
      <p>
        <strong>Two sources also disagree about the temperature at which they are
        active.</strong> University of Arizona Cooperative Extension states that Arizona bark
        scorpions are active for most of the year in low-desert areas and that{' '}
        <em>&ldquo;nighttime temperatures above 70&deg; F are ideal&rdquo;</em>. A University
        of Arizona Backyard Gardener publication states that{' '}
        <em>
          &ldquo;Scorpions are only active when nighttime low temperatures exceed about 77
          degrees F.&rdquo;
        </em>{' '}
        Both are University of Arizona Cooperative Extension publications, they are seven
        degrees apart, and one says &ldquo;ideal&rdquo; while the other says &ldquo;only
        active&rdquo;. Neither figure is used here as a threshold for anything.
      </p>
      <p>
        <strong>On where the species occurs, the sources give three different
        answers.</strong> University of Arizona Cooperative Extension states that it{' '}
        <em>
          &ldquo;also colonizes small parts of California, Nevada, New Mexico, Utah,
          Colorado, Texas, and northwestern Mexico&rdquo;
        </em>
        . UC IPM states that the bark scorpion{' '}
        <em>
          &ldquo;is found throughout Arizona, in the extreme southeastern portion of
          California near Arizona, and in southwestern New Mexico&rdquo;
        </em>
        . Texas A&amp;M AgriLife Extension states that it{' '}
        <em>
          &ldquo;is found in Arizona, New Mexico, and the Mexican states of Sonora and
          Chihuahua. It is also found in restricted areas of Nevada, Utah, and possibly
          California.&rdquo;
        </em>{' '}
        Those three statements are not the same and no merged range is offered here.
      </p>

      <h2 id="finding-them">Finding Them in the Dark</h2>
      <p>
        Scorpions fluoresce. Texas A&amp;M AgriLife Extension states:{' '}
        <em>
          &ldquo;Scorpions are among the few animals that fluoresce, or glow, under UVB black
          light.&rdquo;
        </em>{' '}
        The University of Arizona pest-proofing publication gives the range at which that is
        useful:{' '}
        <em>
          &ldquo;Scorpions glow brightly under black light and are extremely conspicuous up
          to several yards away.&rdquo;
        </em>{' '}
        UC IPM states:{' '}
        <em>
          &ldquo;A portable black light (UV light) may be used to survey for scorpions in and
          around the home.&rdquo;
        </em>
      </p>
      <p>
        <strong>Two University of Arizona publications give different scopes for the indoor
        inspection, and both are recorded here.</strong> The 2018 scorpion publication states:{' '}
        <em>
          &ldquo;Scorpions glow brightly under Ultraviolet light (UV or black light), use a UV
          light to inspect inside your home for scorpions before bedtime&rdquo;
        </em>
        . The 2025 Arizona Pest Management Center newsletter narrows it, saying to{' '}
        <em>
          &ldquo;use a UV light to inspect inside your bedrooms and bathrooms for scorpions
          before bedtime&rdquo;
        </em>
        . On timing, the 2018 publication says:{' '}
        <em>
          &ldquo;Conduct UV light collections several times during summer months between
          8-11pm.&rdquo;
        </em>
      </p>
      <p>
        This is also the one place any source ranks a method against chemical control. The
        University of Arizona pest-proofing publication states:{' '}
        <em>
          &ldquo;Repeated collections and releases far away from the house are more effective
          than repeated pesticide applications.&rdquo;
        </em>
      </p>

      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">Eye safety</p>
        <p className="m-0 mt-3 text-sm text-red-900">
          A University of Arizona Backyard Gardener publication carries this warning with its
          advice to buy a UV light:{' '}
          <em>
            &ldquo;Warning: never look directly at an ultraviolet light as it can damage the
            eyes.&rdquo;
          </em>
        </p>
      </div>

      <p>
        <strong>What the sources do not say about which light to buy.</strong> Four extension
        services tell a reader to get one. Not one of them names a wavelength, a number of
        LEDs, an output figure or a battery type as a requirement. The only fitness
        attributes any source states are portable, battery-operated and ultraviolet: the
        University of Arizona pest-proofing publication asks for{' '}
        <em>
          &ldquo;a portable (battery-operated) camp light equipped with a black (UV)
          fluorescent bulb&rdquo;
        </em>
        , and UC IPM asks for a portable black light. Texas A&amp;M AgriLife Extension gets
        closest to a comparison, noting that powerful black lights can be ordered online and
        weaker ones bought from pet stores and electronic retailers, but it sets no threshold
        between the two.
      </p>
      <p>
        <strong>
          The three lights below are therefore not ranked, and no order is implied. They are
          listed because each is a portable ultraviolet light and each names scorpions in its
          own listing. No source names any of them, and this page has no basis on which to
          say one is better suited than another.
        </strong>
      </p>

      <UsToolCard
        name="UV Black Light Flashlight, 21 LED, 395 nm"
        whatItDoes={[
          'A handheld ultraviolet light. Its listing states 21 LEDs and a wavelength of 395 nm, and names scorpions among what it is sold to find.',
          'Portable and battery-powered, which is what the University of Arizona pest-proofing publication asks for when it describes a portable battery-operated light with a black UV bulb.',
          'No source names a required wavelength, LED count or output for this work, so nothing here says this light performs better or worse than the two below.',
        ]}
        asin="B0D1G867Y4"
      />

      <UsToolCard
        name="Black Light Flashlight, 108 LEDs, 395 nm"
        whatItDoes={[
          'A handheld ultraviolet light with a larger emitter array. Its listing states 108 LEDs and a wavelength of 395 nm, and names scorpion detection among its uses.',
          'The University of Arizona pest-proofing publication states that scorpions glow brightly under black light and are extremely conspicuous up to several yards away; it does not say what light is needed to achieve that.',
          'Listed as an alternative form factor, not as an improvement on any other light on this page.',
        ]}
        asin="B076LSWZTF"
      />

      <UsToolCard
        name="Zoomable Black Light Flashlight, 395 nm, 2 Pack"
        whatItDoes={[
          'A handheld ultraviolet light with an adjustable beam. Its listing states 395 nm, describes the flashlight as zoomable, and names scorpions in the product name itself.',
          'Its listing publishes dimensions of 0.95 by 0.95 by 3.54 inches and it is sold as a two-pack.',
          'Included because University of Arizona Cooperative Extension advises conducting UV light collections several times during summer months between 8 and 11pm, which is a job for a torch you can carry, and for no reason beyond that.',
        ]}
        asin="B07BK18YZD"
      />

      <p>
        <strong>Do not pick one up with your hands.</strong> UC IPM states:{' '}
        <em>
          &ldquo;Scorpions can also be picked up safely with forceps that are 10 to 12 inches
          long, or with other long mechanical devices made for picking up small objects, and
          placed in a glass jar secured with a screw-type lid.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension says the same in different words:{' '}
        <em>
          &ldquo;Long tongs or forceps, such as feeding tongs from reptile stores, are safe
          tools if you want to capture the scorpions to move them.&rdquo;
        </em>{' '}
        University of Arizona Cooperative Extension adds footwear to it:{' '}
        <em>
          &ldquo;Make sure that you wear boots and have long tongs if you want to capture the
          scorpions to move them.&rdquo;
        </em>
      </p>
      <p>
        UC IPM also describes a method that needs no tool at all: place a quart-sized glass
        jar over the scorpion, slide a sheet of heavy construction paper under the jar, then
        invert it so the animal falls to the bottom, and screw a lid on. The 10 to 12 inch
        figure is the only product measurement any source in this pack attaches to scorpion
        handling, and it is the measurement each of the two products below is set against.
      </p>

      <UsToolCard
        name="Josh&rsquo;s Frogs Stainless Steel Curved Reptile Feeding Tongs, 12 inch"
        whatItDoes={[
          'Its listing publishes a length of 12 inches, which is the upper end of the 10 to 12 inch range UC IPM gives for forceps used to pick up a scorpion.',
          'Stainless steel with a curved tip, per the listing. Nothing else about it is claimed here.',
          'UC IPM names a length; it does not name a product, and neither Texas A&M AgriLife Extension nor the University of Arizona names one either.',
        ]}
        asin="B09QLK77RT"
      />

      <UsToolCard
        name="Stainless Steel Feeding Tongs, 10.6 inch, 2 Pack"
        whatItDoes={[
          'Its listing publishes a length of 10.6 inches, which falls inside the 10 to 12 inch range UC IPM gives.',
          'Stainless steel, sold as a pair, per the listing.',
          'Listed alongside the 12 inch option rather than beneath it: both meet the only figure any source gives, and no source distinguishes between lengths within that range.',
        ]}
        asin="B07CVT3LYF"
      />

      <p>
        <strong>What to do with what you catch.</strong> University of Arizona Cooperative
        Extension asks readers to consider relocation over killing:{' '}
        <em>
          &ldquo;As they are beneficial to our environment please consider collecting and
          releasing the scorpions into the natural desert rather than killing them.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension gives the same advice and one alternative:{' '}
        <em>&ldquo;Alternatively, they can be frozen.&rdquo;</em> It also notes that a bucket
        works as a holding container because the animal cannot climb the slippery sides.
      </p>

      <h2 id="not-carried">What This Page Does Not Carry</h2>
      <p>
        <strong>Glue boards, and the reason is a number.</strong> UC IPM states:{' '}
        <em>
          &ldquo;Glue boards measuring 8 x 5 1/4 inches may also be useful in trapping
          scorpions.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension describes what they are for:{' '}
        <em>
          &ldquo;Sticky monitoring traps readily catch scorpions and can be used to identify
          entry points.&rdquo;
        </em>{' '}
        That is a monitoring use, not a control method, and neither source claims a glue
        board reduces a population. The class is sourced and no product is named here,
        because the scorpion-branded glue boards that were checked do not publish a board
        dimension that can be measured against the figure UC IPM gives. A criterion that
        cannot be applied is not a criterion a page can rank on, so nothing is named rather
        than something being named on a guess.
      </p>
      <p>
        <strong>Door sweeps, despite the light test being the most strongly sourced fix here.</strong> The
        light test above is a test of an installed door, not of a product. No source states a
        sweep width, a bristle length, a material or a gap tolerance, so there is no figure
        against which one sweep could be set beside another. The test is the useful part and
        it is free.
      </p>
      <p>
        <strong>Mesh and screening.</strong> The University of Arizona pest-proofing
        publication gives a mesh figure, 20 mesh, in its general chapter, in a sentence that
        names no pest. The scorpion-specific guidance from the same authors declines to give
        a number and says instead to screen weep holes with coarse steel mesh, and Texas
        A&amp;M AgriLife Extension says to fit weep holes with air-permeable screening or
        other pest exclusion materials. Two publications by the same team, and the scorpion
        one does not give a mesh count. That reads as deliberate, so no mesh number is
        applied to this animal here and no screening product is named.
      </p>
      <p>
        <strong>Insecticides, and every source in this pack points the same way.</strong>{' '}
        University of Arizona Cooperative Extension states:{' '}
        <em>
          &ldquo;However, scorpions are difficult to manage with pesticides alone.
          Pest-proofing your home or structure is by far the most effective way to reduce
          scorpion contact and potential scorpion stings.&rdquo;
        </em>{' '}
        A University of Arizona Backyard Gardener publication states:{' '}
        <em>&ldquo;Scorpions cannot be managed using pesticides alone.&rdquo;</em> UC IPM
        states:{' '}
        <em>
          &ldquo;The first strategy for control is to modify the area surrounding a house,
          because scorpions are difficult to control with insecticides.&rdquo;
        </em>{' '}
        and explains why:{' '}
        <em>
          &ldquo;Pesticides aren&rsquo;t always effective against scorpions, because they
          hide in cracks and crevices during daylight hours. Adult scorpions are more
          difficult to kill with pesticides because of their larger body size and thicker
          cuticle.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension, which is the only source here that names active
        ingredients, still states:{' '}
        <em>
          &ldquo;Pesticides may provide some suppression of scorpions; however, they should
          not be relied on as a sole control method.&rdquo;
        </em>{' '}
        and{' '}
        <em>
          &ldquo;Generally, applications of insecticides for scorpions should be restricted
          to outdoor areas.&rdquo;
        </em>{' '}
        Its guidance is written for school pest management programs run by licensed
        applicators. No chemical product is named on this page.
      </p>
      <p>
        <strong>And nothing here promises removal.</strong> University of Arizona Cooperative
        Extension forecloses it:
        it states that eliminating scorpions from our landscapes would require chemical use it
        describes as extremely unhealthy and illegal, and would amount only to a temporary
        eradication of the pest. Where the problem is persistent, the same publication says what to do:{' '}
        <em>
          &ldquo;Scorpions are extremely difficult to eradicate. If you regularly find
          scorpions inside your home, call a pest management professional experienced in the
          management of scorpions.&rdquo;
        </em>{' '}
        Texas A&amp;M AgriLife Extension adds one reason food control will not substitute for
        it:{' '}
        <em>
          &ldquo;Scorpions need very little to eat and are not easily starved out of an
          area.&rdquo;
        </em>
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it
        or in the text immediately adjacent to it, and every source named is listed below.
        The wording, ordering and emphasis are our own judgment and are not a finding of any
        source. Where two sources disagree, both are given with the source that holds each
        position rather than one being chosen. The products named on this page were read from
        their own listings on 25 August 2026 and are recorded rather than assessed; the
        listings read were B0BVGTM2XY, B0000CBJ7W, B0B8QPH3RW, B0D1G867Y4, B076LSWZTF,
        B07BK18YZD, B09QLK77RT and B07CVT3LYF, each reachable from its own card above where
        the disclosure sits directly beside the link. No claim is made anywhere on this page
        about whether any of them can be bought today.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
