import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import { SourceList, AsOf, type Source } from '../components/UsSources';
import { ARMADILLO_NAV, ARMADILLO_HOME } from '../components/armadilloNav';

const URL = 'https://pestproindex.com/us/armadillos';
const TITLE = 'Armadillos: Holes in the Lawn, Burrows, and What the Sources Support';
const DESCRIPTION =
  'How to recognize armadillo digging, what the burrow system looks like, why baiting a trap does not help, the fence specification extension services agree on, and what the research says about Hansen disease.';

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
      name: 'Armadillos',
      item: 'https://pestproindex.com/us/armadillos',
    },
    { '@type': 'ListItem', position: 2, name: 'Armadillos', item: URL },
  ],
};

const faqs: Faq[] = [
  {
    question: 'What made the holes in my lawn?',
    answer:
      'Armadillo feeding holes are small, shallow and numerous. UF/IFAS Extension states that a single individual may dig dozens of shallow holes 2 to 6 cm wide and up to 15 cm deep each night. University of Georgia gives the same damage in imperial units as shallow holes 1 to 3 inches. Florida Fish and Wildlife Conservation Commission describes a wider spread, holes varying in size from very small to one foot in diameter, which takes in the burrow entrance as well as the feeding holes. The three figures are measured differently and are reported here separately rather than averaged.',
  },
  {
    question: 'Why is an armadillo digging in my yard at all?',
    answer:
      'It is looking for food, not for you. UF/IFAS Extension states that armadillos feed primarily on insects and their larvae, and puts insects at approximately 75 percent of the diet by volume, mostly beetles. University of Georgia puts it higher, stating that the diet often consists of more than 90 percent insects, grubs and earthworms. Florida Fish and Wildlife Conservation Commission adds that armadillos have poor eyesight but a well-developed sense of smell used to detect insects and other invertebrates under the soil surface at night.',
  },
  {
    question: 'What bait should I put in the trap?',
    answer:
      'On the published evidence, none. UF/IFAS Extension states plainly that there are also no effective methods for baiting armadillos into traps, and elsewhere that the benefit of using baits is questionable. University of Georgia tested the question directly, trying live night crawlers, live crickets, rotten chicken feed, whole eggs, rotten eggs, bananas, marshmallows, sardines, vanilla wafers, moistened soil and a commercially available lure, and reported that the use of baits and attractants does not appear to increase trap success, and that armadillos in the study were just as likely to enter a baited trap as an unbaited trap. Alabama Cooperative Extension System is the one source here that suggests otherwise, stating that live traps baited with overripe fruit such as apples or bananas can be used. University of Georgia tested bananas.',
  },
  {
    question: 'How deep does a fence have to be buried?',
    answer:
      'Three sources give the same specification in slightly different words. UF/IFAS Extension states that fences should be approximately 24 inches above ground with the bottom of the fence buried 18 inches below the surface of the ground. Florida Fish and Wildlife Conservation Commission states to install fencing at least two feet high and bury 18 inches deep, and its species profile describes fencing at least 2 feet high with an apron buried at least 18 inches deep. Every source that recommends exclusion also states its limit, and those limits are given on this page.',
  },
  {
    question: 'Do repellents work on armadillos?',
    answer:
      'UF/IFAS Extension states that there are currently no repellents, toxicants, or fumigants registered for use with armadillos. Two further sources give the same finding scoped to their own state: UF/IFAS Extension elsewhere states that no chemical repellents or fumigants are registered for use in Florida, and Alabama Cooperative Extension System states that no toxicant, fumigants, or repellents are currently registered for armadillo control. Registration is a regulatory fact rather than a test of effectiveness, and it is reported here as what the sources say.',
  },
  {
    question: 'Can I catch one and release it somewhere else?',
    answer:
      'Two sources advise against it and Florida law conditions it tightly. UF/IFAS Extension states that relocating problem animals to another area is not recommended. University of Georgia is blunter, stating that armadillos should never be relocated off-property. In Florida, Rule 68A-9.010 of the Florida Administrative Code permits release only where the release site and capture site are on one contiguous piece of property, or where the animal is a native species, the release property is within the county of capture and is a minimum of 40 contiguous acres, and the person releasing it holds written permission from the property owner. Rules differ by state and only two states were checked for this page.',
  },
  {
    question: 'Is it true that armadillos carry Hansen disease?',
    answer:
      'The association is real and it has been measured. A 2021 systematic review and meta-analysis in Zoonoses and Public Health by Deps, Antunes and Collin pooled nine studies covering 1,124 cases and 2,023 controls and reported that direct contact with wild armadillos was strongly associated with an increased risk of Hansen disease, at an odds ratio of 2.60 with a 95 percent confidence interval of 1.78 to 3.80. The same review reported weaker evidence for indirect contact, at an odds ratio of 1.39, and stated that the fraction of Hansen disease in endemic countries attributable to zoonotic transmission from armadillos remains unknown. The authors also noted that most of the included studies had moderate risk of bias.',
  },
  {
    question: 'How far north have armadillos spread?',
    answer:
      'Further than most range maps show, and the front is still moving. DeGregorio and Deshwal, writing in Diversity in February 2025, state that the species was first recorded in the United States in Texas in 1849 and has been expanding its range northward and eastward since then. Measured against the previous distribution report of 2014, they record armadillos as having expanded to cover the entirety of Missouri and established in southern Iowa, expanded modestly within Kansas and Illinois, expanded northward and eastward in Indiana, expanded eastward in both Kentucky and Tennessee, established throughout the entirety of South Carolina and Georgia, and established in the western third of North Carolina. UF/IFAS Extension notes the constraint on all of this, that cold weather limits the northern boundary of the armadillo range.',
  },
];

const sources: Source[] = [
  {
    label: 'The Nine-Banded Armadillo (Dasypus novemcinctus), WEC 76',
    publisher: 'UF/IFAS Extension, University of Florida (J.M. Schaefer and M.E. Hostetler)',
    date: 'Accessed August 21, 2026',
    href: 'https://edis.ifas.ufl.edu/publication/UW082',
  },
  {
    label: 'Baiting the Nine-Banded Armadillo, WEC 317',
    publisher: 'UF/IFAS Extension, University of Florida (H.K. Ober, L.W. DeGroote and R.F. Mizell III)',
    date: '2011',
    href: 'https://edis.ifas.ufl.edu/publication/UW362',
  },
  {
    label: 'Controlling Armadillo Damage in Alabama',
    publisher: 'Alabama Cooperative Extension System',
    date: 'Accessed August 21, 2026',
    href: 'https://www.aces.edu/blog/topics/forestry-wildlife/controlling-armadillo-damage-in-alabama/',
  },
  {
    label: 'Evaluating Attractants for Live-Trapping Nine-Banded Armadillos, C889-3',
    publisher: 'University of Georgia College of Agricultural and Environmental Sciences',
    date: 'Accessed August 21, 2026',
    href: 'https://fieldreport.caes.uga.edu/publications/C889-3/evaluating-attractants-for-live-trapping-nine-banded-armadillos/',
  },
  {
    label:
      'Current Distribution of the Nine-Banded Armadillo (Dasypus novemcinctus) in the United States. Diversity 17(2):138',
    publisher: 'B.A. DeGregorio and A. Deshwal',
    date: 'February 19, 2025',
    href: 'https://doi.org/10.3390/d17020138',
  },
  {
    label: 'Living with Armadillos',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Accessed August 21, 2026',
    href: 'https://myfwc.com/media/27208/living-with-armadillos.pdf',
  },
  {
    label: 'Armadillo (Dasypus novemcinctus) species profile',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Accessed August 21, 2026',
    href: 'https://myfwc.com/wildlifehabitats/profiles/mammals/land/armadillo/',
  },
  {
    label:
      'Rule 68A-9.010, Florida Administrative Code — Taking Nuisance Wildlife (History: New 7-1-08, Amended 7-1-10, 7-27-10)',
    publisher: 'Florida Fish and Wildlife Conservation Commission',
    date: 'Accessed August 21, 2026',
    href: 'https://myfwc.com/media/1935/68a-9-010.pdf',
  },
  {
    label:
      'Outdoor Annual — Nongame, Exotic, Endangered, Threatened and Protected Species. Valid September 1, 2026 through August 31, 2027',
    publisher: 'Texas Parks and Wildlife Department',
    date: 'Accessed August 21, 2026',
    href: 'https://tpwd.texas.gov/regulations/outdoor-annual/hunting/nongame-and-other-species',
  },
  {
    label:
      'Zoonotic risk of Hansen disease from community contact with wild armadillos: a systematic review and meta-analysis. Zoonoses and Public Health 68(2):153-164',
    publisher: 'P. Deps, J.M.A.P. Antunes and S.M. Collin',
    date: '2021',
    href: 'https://doi.org/10.1111/zph.12783',
  },
];

const tocItems = [
  { id: 'what-it-is', title: 'What It Is' },
  { id: 'range', title: 'Range and Spread' },
  { id: 'damage', title: 'What the Digging Looks Like' },
  { id: 'why', title: 'Why They Dig' },
  { id: 'trapping', title: 'Control: Trapping' },
  { id: 'exclusion', title: 'Control: Exclusion' },
  { id: 'doesnt-work', title: 'What Does Not Work' },
  { id: 'disease', title: 'Hansen Disease' },
  { id: 'legal', title: 'Before You Set Anything' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const relatedPages = [{ title: 'Armadillo traps: wings, placement and size', href: '/us/best-armadillo-traps' }];

export default function ArmadillosPage() {
  return (
    <UsPageLayout
      title="Armadillos"
      subtitle="Dozens of small holes appearing overnight, and a burrow entrance somewhere near a patio or a woodpile. Here is what the extension services and the state wildlife agencies actually say about the animal, the damage, and which remedies survive contact with evidence."
      lastUpdated="August 2026"
      readingTime="10 min"
      tocItems={tocItems}
      relatedPages={relatedPages}
      homeHref={ARMADILLO_HOME}
      clusterNav={ARMADILLO_NAV}
      schemas={[articleSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        You will usually meet the damage before you meet the animal. UF/IFAS Extension states that
        armadillos rest in a deep burrow during the day and become more active during the late
        evening, night, or early morning, and Alabama Cooperative Extension System states that
        armadillos are mainly nocturnal, which means they are active at night. What is left in the
        morning is a lawn full of small holes and, somewhere nearby, a burrow entrance.
      </p>
      <p>
        This page covers the animal, the damage and the control methods. The trap question &mdash;
        what actually changes the outcome, where to set one, and what size the sources call for
        &mdash; is on{' '}
        <Link href="/us/best-armadillo-traps">the traps page</Link>.
      </p>

      <h2 id="what-it-is">What It Is</h2>
      <p>
        One species is involved. UF/IFAS Extension identifies it as the nine-banded armadillo,{' '}
        <em>Dasypus novemcinctus</em>. Alabama Cooperative Extension System explains the name: it is
        so called because of the nine moveable rings of armor between the shoulder and the hip
        shields.
      </p>
      <ul>
        <li>
          <strong>Size.</strong> Florida Fish and Wildlife Conservation Commission states that mature
          armadillos are 15 to 17 inches in length excluding the tail, and its species profile gives
          the same figure as 15 to 17 inches long not counting the tail.
        </li>
        <li>
          <strong>Weight.</strong> UF/IFAS Extension states that adults normally weigh from 8 to 17
          pounds. Florida Fish and Wildlife Conservation Commission gives the same range, 8 to 17
          pounds.
        </li>
        <li>
          <strong>Shell.</strong> UF/IFAS Extension describes a shield-like shell covered with horny
          scales, and notes that joints in the shell are flexible, which enable the animal to bend
          and twist. It adds that only the ears and belly of the armadillo are without bony armor.
        </li>
        <li>
          <strong>Senses.</strong> Florida Fish and Wildlife Conservation Commission states that
          armadillos have poor eyesight, but their well-developed sense of smell is used to detect
          insects and other invertebrates under the soil surface at night.
        </li>
      </ul>

      <h2 id="range">Range and Spread</h2>
      <p>
        This is a moving front rather than a fixed map, so the date on the figure matters more than
        usual. DeGregorio and Deshwal state that the nine-banded armadillo was first recorded in the
        United States in the state of Texas in 1849 and has been expanding its range northward and
        eastward since then.
      </p>
      <p>
        <AsOf date="February 2025">
          The distribution below is the state of the range at the February 19, 2025 publication of
          DeGregorio and Deshwal in Diversity, measured against the previous distribution report of
          2014.
        </AsOf>
      </p>
      <ul>
        <li>
          Armadillos have <strong>expanded to cover the entirety of Missouri and established in
          southern Iowa</strong>.
        </li>
        <li>They have expanded modestly within Kansas and Illinois.</li>
        <li>They have expanded northward and eastward in Indiana.</li>
        <li>They have expanded eastward in both Kentucky and Tennessee.</li>
        <li>They have established throughout the entirety of South Carolina and Georgia.</li>
        <li>They have established in the western third of North Carolina.</li>
      </ul>
      <p>
        The same authors state that their species distribution model indicates that there is
        substantial opportunity for the species to continue to expand its geographic range,
        particularly in the Eastern United States. There is a constraint on all of it: UF/IFAS
        Extension states that cold weather limits the northern boundary of the armadillo range. For
        a sense of how quickly a state fills in, Alabama Cooperative Extension System reports that
        armadillos have expanded their range to 59 of Alabama&rsquo;s 67 counties.
      </p>

      <h2 id="damage">What the Digging Looks Like</h2>
      <p>
        There are two different kinds of hole and confusing them makes the damage sound worse or
        better than it is. The feeding holes are small, shallow and numerous. The burrow is a single
        large opening.
      </p>
      <ul>
        <li>
          <strong>Feeding holes.</strong> UF/IFAS Extension states that, using its long nose and
          forefeet, a single individual may dig dozens of shallow holes 2 to 6 cm wide and up to 15
          cm deep each night. University of Georgia gives the same damage in imperial units:
          armadillos dig shallow holes, 1 to 3 inches. Florida Fish and Wildlife Conservation
          Commission describes a wider spread, stating that holes vary in size, ranging from very
          small to one foot in diameter. The three figures are measured differently and are reported
          separately rather than blended into one number.
        </li>
        <li>
          <strong>Rooting.</strong> Alabama Cooperative Extension System states that they root about
          in ground litter searching for insects, grubs, and other invertebrates.
        </li>
        <li>
          <strong>Burrow diameter and length.</strong> UF/IFAS Extension states that burrows are
          about 7 to 8 inches in diameter and can be up to 15 feet long.
        </li>
        <li>
          <strong>Where the burrow is.</strong> UF/IFAS Extension states that burrows are usually
          located under brushpiles, stumps, rockpiles, dense brush, or concrete patios. Florida Fish
          and Wildlife Conservation Commission adds that a single armadillo can have several
          different burrows with multiple entrances, so one animal does not mean one hole.
        </li>
        <li>
          <strong>Structures.</strong> University of Georgia states that their burrowing can damage
          tree roots and building foundations. UF/IFAS Extension states that armadillos are blamed
          for causing structural instabilities when they dig burrows around and under buildings.
        </li>
        <li>
          <strong>Where it happens.</strong> UF/IFAS Extension lists lawns, flower and vegetable
          gardens, golf courses, sports fields, cemeteries, nurseries, and orange groves.
        </li>
      </ul>

      <h2 id="why">Why They Dig</h2>
      <p>
        The digging is feeding behavior, and knowing that is what makes the rest of this page make
        sense. UF/IFAS Extension states that these animals feed primarily on insects and their
        larvae, and puts the proportion at approximately 75 percent of their diet by volume, mostly
        beetles. University of Georgia puts it higher, stating that the diet often consists of more
        than 90 percent insects, grubs and earthworms.
      </p>
      <p>
        Two consequences follow from that, and both are stated by sources rather than inferred here.
        UF/IFAS Extension notes that removing the food supply with insecticide is not a solution,
        because widespread application of insecticides can have negative side effects on non-target
        species and the environment. Alabama Cooperative Extension System reaches the same place from
        the practical direction, stating that ridding the soil and vegetation of all insects, worms,
        and grubs may not be practical and may be detrimental to the plants and other life forms in
        the area.
      </p>

      <h2 id="trapping">Control: Trapping</h2>
      <p>
        Trapping is the method the extension sources describe in most detail, and the detail is not
        about which trap you buy. UF/IFAS Extension describes the habit that makes trapping work at
        all: armadillos follow barriers, and temporary garden fencing or wooden boards can be used to
        funnel armadillos travelling along such barriers into traps.
      </p>
      <ul>
        <li>
          <strong>Wings are the mechanism.</strong> UF/IFAS Extension states that the trap is most
          effective when wings, given as 1 by 6 inch by 6 feet boards or other material, are added to
          funnel the animal into the trap. University of Georgia built the same thing from two 2 inch
          by 6 inch boards, 6 feet long, attached at one end of the trap, and states that traps
          should include wings or funnels to direct the animal into the trap.
        </li>
        <li>
          <strong>Placement.</strong> UF/IFAS Extension states that traps are most effective when
          placed near the entrances to active armadillo burrows, or along barriers such as fences in
          areas where armadillos regularly travel. University of Georgia adds the suburban version:
          near natural barriers or fences such as the walls of patios, edges of buildings or
          landscaping features, or near natural fences such as fallen trees.
        </li>
        <li>
          <strong>Timing.</strong> UF/IFAS Extension states that because armadillos are nocturnal,
          all trapping techniques designed to capture armadillos emerging from burrows should be
          applied late in the afternoon and checked several hours after darkness.
        </li>
        <li>
          <strong>The floor of the trap.</strong> UF/IFAS Extension states that armadillos are more
          likely to enter a cage trap when leaf litter or soil is placed over the wire bottom.
        </li>
        <li>
          <strong>What the outcome actually is.</strong> University of Georgia, which ran the trapping
          study, states that given that capture success was quite low, it is unlikely that trapping is
          an effective method of quickly reducing local armadillo populations. UF/IFAS Extension says
          the same of the general case, that capture rates are extremely low.
        </li>
      </ul>
      <p>
        The trap sizes the sources name, and the reason bait is not on this list, are on{' '}
        <Link href="/us/best-armadillo-traps">the traps page</Link>.
      </p>

      <h2 id="exclusion">Control: Exclusion</h2>
      <p>
        Three sources give the same fence specification, which is unusual enough to be worth saying
        outright.
      </p>
      <ul>
        <li>
          UF/IFAS Extension states that these fences should be approximately 24 inches above ground
          with the bottom of the fence buried 18 inches below the surface of the ground, and scopes
          it to where highly valued plantings are in need of protection.
        </li>
        <li>
          Florida Fish and Wildlife Conservation Commission states to install fencing at least two
          feet high and bury 18 inches deep.
        </li>
        <li>
          The Florida Fish and Wildlife Conservation Commission species profile gives it as fencing at
          least 2 feet high and with an apron buried at least 18 inches deep.
        </li>
        <li>
          For hard surfaces rather than beds, UF/IFAS Extension states that laying chicken-wire along
          a patio, driveway or house foundation will also discourage them from burrowing.
        </li>
        <li>
          Alabama Cooperative Extension System offers a different approach for a garden, stating that
          polytape electric fence wire with a New Zealand-type charger makes an effective and safe
          exclusion device.
        </li>
      </ul>
      <p>
        And the stated limits, which matter as much as the specification. UF/IFAS Extension states
        that exclusion with fences is challenging because armadillos are good at both burrowing
        beneath and climbing over them. University of Georgia states that methods such as habitat
        modification and exclusion are often impractical, expensive, or ineffective.
      </p>

      <h2 id="doesnt-work">What Does Not Work</h2>
      <p>
        On this animal the list is short and unusually clear, because it is a question of what is
        registered rather than a question of what has been tested.
      </p>
      <ul>
        <li>
          <strong>Repellents, toxicants and fumigants.</strong> UF/IFAS Extension states that there
          are currently no repellents, toxicants, or fumigants registered for use with armadillos.
        </li>
        <li>
          <strong>The same finding, scoped to a state.</strong> UF/IFAS Extension states elsewhere
          that no chemical repellents or fumigants are registered for use in Florida, and Alabama
          Cooperative Extension System states that no toxicant, fumigants, or repellents are
          currently registered for armadillo control.
        </li>
      </ul>
      <p>
        Registration is a regulatory fact and not a measurement of effectiveness, and it is reported
        here as what the sources say rather than extended into a claim about every product on a
        shelf.
      </p>

      <h2 id="disease">Hansen Disease</h2>
      <p>
        The association between armadillos and Hansen disease is real, it has been measured, and the
        measurement is more specific than the reputation. A 2021 systematic review and meta-analysis
        in Zoonoses and Public Health by Deps, Antunes and Collin pooled nine studies comprising 1,124
        cases and 2,023 controls and reported that direct contact with wild armadillos was strongly
        associated with an increased risk of Hansen disease, at an odds ratio of 2.60 with a 95
        percent confidence interval of 1.78 to 3.80. Broken out by exposure, the same review reported
        an odds ratio of 2.54 for hunting and 2.29 for eating armadillo meat, and a weaker 1.39 for
        indirect contact, stating that evidence for an increased risk from indirect contact was
        weaker. The authors state that the fraction of Hansen disease in endemic countries
        attributable to zoonotic transmission from armadillos remains unknown, and that most of the
        included studies had moderate risk of bias. UF/IFAS Extension adds the biological reason the
        question arises at all, that nine-banded armadillos are the only animal other than humans
        capable of hosting the bacteria that causes leprosy, and reports that it has been detected in
        armadillos from Texas, Louisiana, Mississippi, Alabama, Georgia, and Florida. Alabama
        Cooperative Extension System states that there has been no conclusive evidence that human
        beings can contract leprosy from contact with armadillos. Those are the findings this page
        can support; it offers no guidance on handling, because no source giving such guidance was
        obtained.
      </p>

      <h2 id="legal">Before You Set Anything</h2>
      <p>
        Rules are set state by state. Two states were checked from primary text for this page, and no
        others were checked, so nothing below should be read as a national rule.
      </p>
      <h3>Texas</h3>
      <p>
        Texas Parks and Wildlife Department lists armadillos among nongame animals in its Outdoor
        Annual, which states on its face that it is valid September 1, 2026 through August 31, 2027.
        For nongame species that page states that a hunting license is required for the take of
        nongame species, that there are no closed seasons, bag limits or possession limits, and that
        they may be hunted at any time by any lawful means or methods on private property. It also
        lists, among unlawful activities, to possess armadillos for the purpose of sale.
      </p>
      <h3>Florida</h3>
      <p>
        Florida Fish and Wildlife Conservation Commission lists the armadillo species status as
        native, and states that armadillos are now common throughout most of the state and are
        considered to be naturalized, meaning they arrived in Florida as part of natural range
        expansion. That classification is the agency&rsquo;s own and it is the one that governs here,
        because the release rule below turns on whether a species is native. UF/IFAS Extension
        describes the nine-banded armadillo as considered an invasive species in Florida, which is a
        different characterization from the state wildlife agency; both are recorded rather than
        reconciled.
      </p>
      <p>
        The Commission states that the armadillo has a year-round hunting and trapping season in
        Florida, and that an armadillo can be taken as a nuisance if it causes or is about to cause
        property damage, presents a threat to public safety, or causes an annoyance in, under, or upon
        a building. Rule 68A-9.010 of the Florida Administrative Code sets what happens next: wildlife
        live captured by any method shall be released or euthanized within 24 hours following capture
        or inspection of a trapping device containing wildlife, and any non-target wildlife shall be
        released immediately at the site of capture. The same rule permits release only where the
        nuisance wildlife is released on the property of the landowner provided the release site and
        capture site are located on one contiguous piece of property, or where the nuisance wildlife
        is a native species, the property where it is to be released is within the county of capture
        and is a minimum of 40 contiguous acres, and the person releasing it is in possession of
        written permission from the property owner. The rule also lists, among methods that may not be
        used, live traps and snares unless they are visited at intervals not exceeding 24 hours.
      </p>
      <h3>Everywhere else</h3>
      <p>
        Check your state wildlife agency before you set anything. Two states out of fifty were
        checked against primary text for this page.
      </p>
      <p>
        On moving an animal rather than removing it, two sources are direct. UF/IFAS Extension states
        that relocating problem animals to another area is not recommended. University of Georgia
        states that armadillos should never be relocated off-property. Florida Fish and Wildlife
        Conservation Commission approaches the same question from the other side, stating that lethal
        control should be considered a last resort, and that removing one or more armadillos does not
        prevent others from using the same areas in the future.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual claim above names the source it rests on, in the sentence that makes it or in
        the text immediately adjacent to it, and every source named is listed below. Framing, ordering
        and emphasis are our own judgement and are not a finding of any source. Where sources give
        different figures for the same measurement, all are reported and attributed rather than
        averaged.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
