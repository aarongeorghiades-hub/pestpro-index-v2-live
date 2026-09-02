import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { FLEAS_NAV, FLEAS_HOME } from '../components/fleasNav';

const URL = 'https://pestproindex.com/us/fleas';
const TITLE = 'Fleas: Species, Plague Risk, and What Treats It';
const DESCRIPTION =
  'Four extension publications, 2010 to 2026, disagree on which flea species carries plague and agree the most effective treatments are prescription-only.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Fleas', item: URL }],
};

// ---------------------------------------------------------------------------
// EVERY FLEA FIGURE ON THIS PAGE CARRIES ITS SPECIES NAME. UC IPM names four flea
// species and assigns plague to ONE of them — the ground squirrel flea, Oropsylla
// montana. UF/IFAS assigns the same capability to cat fleas. Those two positions are
// rendered side by side and are NOT reconciled. A figure that lost its species label
// would silently become a claim about the wrong insect.
//
// THE MEDICAL BLOCK SITS ABOVE THE FIRST PRODUCT CARD. Four of four sources name a
// human disease in body text. Every claim carries its source AND the source's own
// qualifier in the same sentence.
//
// NO CDC MATERIAL APPEARS ANYWHERE. The single CDC attempt in S54 R1 returned HTTP
// 403 behind an edge block. A search engine's snippet of that page is not the
// document (S50-H), so no CDC figure is used. No UK reference appears either: this
// is a US page.
//
// THE SOURCE AGE GAP IS THE WIDEST ON THIS ESTATE. UC IPM's fleas page renders
// "Updated: 09/2010"; Penn State's renders June 2026 but presents plague counts from
// 1980. Both the document date and the data date travel with the figures.
//
// CARDS: five. One comb, four light traps.
//   FC1 metal flea comb   1 card. THREE of the four combs checked did not qualify —
//                         one is dead, and TWO describe removing dandruff and dander
//                         and never say they remove fleas. That gap is rendered.
//   FC2 light trap        4 cards, with UF/IFAS's own limitation beside them.
//
// THE MOST EFFECTIVE CLASS IS ONE THIS PAGE CANNOT SELL. UC IPM calls spot-ons and
// systemic orals the effective options; UC IPM and Penn State both record that the
// orals require a prescription. The page says so rather than steering the reader to
// a weaker product it can link.
// ---------------------------------------------------------------------------

type Grp = 'FC1' | 'FC2';
type ProductRecord = { asin: string; cardName: string; group: Grp; whatItDoes: string[] };

const products: ProductRecord[] = [
  {
    asin: 'B0GH1KG672',
    group: 'FC1',
    cardName: 'UZOQPAIZF Fine Tooth Metal Flea Comb for Dogs and Cats',
    whatItDoes: [
      'States both halves of what the source asks for in its own words: a fine-tooth metal comb that captures fleas, ticks, lice and their eggs from the root',
      'This is the only comb of the four we checked whose own feature text says it captures fleas at all. The rest describe grooming',
      'A non-slip rubber handle, per the listing, and it is rinsed under water after use',
      'UC IPM gives combing two jobs, not one: removing fleas from the animal, and monitoring the population so you can judge whether anything further is needed',
    ],
  },
  {
    asin: 'B0002PS7O4',
    group: 'FC2',
    cardName: 'Enoz Trap-N-Kill Indoor Flea Trap with Lightbulb and Sticky Pad',
    whatItDoes: [
      'Its stated mechanism is the one UF/IFAS describes: fleas are drawn to the light and heat from the bulb, then held on a sticky pad',
      'Plugs into a wall outlet and runs continuously; the listing says a pad lasts up to three months and is replaced when full',
      'The listing states it was previously sold as BioCare and renamed, which is worth knowing if you have seen the older name',
      'A monitoring and capture device for fleas already emerging in the room. Read the limitation stated above these cards before buying one',
    ],
  },
  {
    asin: 'B09NBKKQSZ',
    group: 'FC2',
    cardName: 'Indoor Flea Trap with Sticky Pads and Bulb Replacements, 2-Pack',
    whatItDoes: [
      'States the same light-and-heat mechanism in its own text, and adds color to the list of what draws the insect in',
      'Two traps, four glue pads and six bulbs per pack, per the listing, with refills sold separately',
      'The seller claims a fifty-foot attraction radius. No source consulted states any distance for a flea trap, so that figure is the seller’s alone and is not repeated here as fact',
      'Uses a physical trap rather than an insecticide, which is the reason UF/IFAS discusses this class at all',
    ],
  },
  {
    asin: 'B0D6VB2FGZ',
    group: 'FC2',
    cardName: 'Frogoom Hanging Flea Trap with LED Light and 3 Sticky Pads',
    whatItDoes: [
      'States two light sources in its own text, a warm light and a UV light, and four selectable modes',
      'A hanging design on a USB-C cable rather than a wall-outlet unit, which is the practical difference from the others here',
      'Three sticky pad replacements included, each stated as twenty-two square inches',
      '⚠ The listing contradicts itself on its own model year: the title says 2026 while its first feature line says 2024. No year is claimed on this card',
    ],
  },
  {
    asin: 'B0GHMWBPC8',
    group: 'FC2',
    cardName: 'Indoor Electric Flea Trap, 2-Pack with 6 Bulbs and 8 Sticky Pads',
    whatItDoes: [
      'A power switch and a six-foot cord, per the listing, so it can be placed away from the socket',
      'Its title and its feature text agree on the counts — two traps, six bulbs, eight sticky pads — which is not true of every listing in this category',
      'The listing says to replace the glue pads every two to four weeks',
      'The same seller lists a near-identical trap under a separate ASIN in another color. Neither listing states that the difference is only the color, so we treat them as two products and name only this one',
    ],
  },
];

const tocItems = [
  { id: 'health', title: 'What the Sources Say About Disease' },
  { id: 'species', title: 'Four Flea Species, and Only One Carries the Plague Claim' },
  { id: 'lifecycle', title: 'The Life Cycle, and Two Numbers That Must Not Be Merged' },
  { id: 'pets', title: 'Warnings the Sources Give About Treating the Animal' },
  { id: 'prescription', title: 'The Most Effective Products Are Prescription-Only' },
  { id: 'comb', title: 'Combing the Animal' },
  { id: 'traps', title: 'Light Traps, and What One Source Says They Will Not Do' },
  { id: 'notwork', title: 'What the Sources Say Does Not Work' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

const faqs: Faq[] = [
  {
    question: 'Do fleas actually spread disease to people?',
    answer:
      'Four of four sources say they can, and every one of them attaches a qualifier that this page keeps attached. UF/IFAS states that cat fleas are capable of transmitting plague and murine typhus to humans, though such reports are rare. The University of Maine states that although fleas are capable of transmitting diseases, this is rare in Maine. Penn State states that fleas can transmit a number of diseases to humans, the most important of which is bubonic plague, and in the same document states that there have been no epidemics of plague reported in the United States since 1925. UC IPM describes a different illness, cat flea rickettsiosis, which it says has symptoms similar to murine typhus but less severe. This page reports what those four publications state and does not grade how serious any of it is.',
  },
  {
    question: 'Which flea carries plague?',
    answer:
      'The sources do not agree, and this page does not settle it. UC IPM, in a page its own site dates to 09/2010, names a specific species: the ground squirrel flea, Oropsylla montana, which it calls the vector of sylvatic plague in California, and it adds that fleas on cats or dogs in California are most likely cat fleas. UF/IFAS states instead that cat fleas are capable of transmitting plague and murine typhus to humans, though such reports are rare. Penn State speaks of fleas generally without naming a species. Those are three different levels of specificity from three publishers, and the difference matters: one of them says the plague vector is a flea most pet owners will never see, and another says it is the flea on the dog. Nothing here is adjusted to make them agree.',
  },
  {
    question: 'How long can fleas survive in an empty house?',
    answer:
      'Much longer than the life cycle figure suggests, and the two numbers are easy to confuse. UC IPM states that at cool temperatures, fully formed fleas can remain in their cocoons for up to 12 months. Separately, the same source states that at normal room temperatures the entire life cycle can occur in about 18 days. Those are not competing estimates of the same thing: one is how long a formed flea can wait inside its cocoon in the cold, the other is how fast a generation completes in a warm room. UC IPM also states that warm temperatures and mechanical pressure caused by walking on or vacuuming carpet stimulate emergence from the cocoon, which is why an empty house can produce fleas the day someone returns to it.',
  },
  {
    question: 'What is the most effective treatment?',
    answer:
      'The sources name a class this page cannot sell you. UC IPM states that spot-on and systemic oral products are more effective than the traditional insecticide collars, dusts, shampoos and sprays. It also carries a footnote stating that those systemic products are FDA-registered veterinary drugs, not pesticides, and require a prescription from a vet, and Penn State states that these products are prescribed by veterinarians. So the class the sources rate highest is one you obtain from a veterinarian rather than from a retailer. This page names no spot-on and no oral product, and it does not offer a weaker product as a substitute for one.',
  },
  {
    question: 'Is it safe to use a dog flea product on a cat?',
    answer:
      'Two sources address this directly and neither is softened here. UC IPM states that products containing permethrin and amitraz never should be applied to cats, in a passage about EPA concerns over adverse effects reported with topical flea control products. The University of Maine states that when selecting an insecticide you should remember that a cat is likely to lick itself, that you should always check with your veterinarian first and follow label directions, and that you should not use dog flea products on cats and vice versa. This page reports those statements and adds nothing to them. None of the products named on this page is a topical insecticide, a collar or a shampoo.',
  },
];

const sources: Source[] = [
  {
    label:
      'Pest Notes: Fleas — the source of the four-species identification, the plague vector attribution, cat flea rickettsiosis, the life-cycle figures, the flea comb criterion, the permethrin and amitraz statement, the prescription footnote and the list of methods it says do not work',
    publisher: 'UC Statewide IPM Program',
    date: 'Renders one date only, an update stamp of 09/2010 — the oldest source used on this page and sixteen years older than the Penn State page below. A January 2022 publication date exists in the page markup but is inside an HTML comment and does not render, so it is not cited. Fetched 28 August 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/fleas/',
  },
  {
    label:
      'Cat Fleas — the source of the plague and murine typhus statements with their US case history, and the statement about where flea bites appear on people. Its document date and the date of the data it presents are different and both are given wherever it is quoted',
    publisher: 'Penn State Extension',
    date: 'Renders Updated: June 24, 2026. Its most recent plague case figures are from 1980',
    href: 'https://extension.psu.edu/cat-fleas',
  },
  {
    label:
      'Cat Flea, Ctenocephalides felis, EENY-011/IN137 — the source of the cat flea plague and murine typhus statement, the 30 to 75 day life cycle, the light trap statement and its limitation, and the diatomaceous earth and pennyroyal warnings',
    publisher: 'UF/IFAS Extension',
    date: 'Renders a copyright line of 2024. Revision dates exist in the page metadata but do not render as text, so they are not cited. Fetched 28 August 2026',
    href: 'https://edis.ifas.ufl.edu/publication/in137',
  },
  {
    label:
      'Fleas — the source of the statement that transmission is rare in Maine, and of the instruction about dog products and cats',
    publisher: 'University of Maine Cooperative Extension',
    date: 'Renders a 2016, 2018, 2020 copyright line with Reviewed & Revised: 2023',
    href: 'https://extension.umaine.edu/ipm/ipddl/publications/5020e/',
  },
];

export default function FleasPage() {
  const FC1 = products.filter((p) => p.group === 'FC1');
  const FC2 = products.filter((p) => p.group === 'FC2');
  return (
    <UsPageLayout
      title="Fleas"
      subtitle="Four extension publications, spanning 2010 to 2026, that disagree about which flea species carries plague and agree that the most effective treatments need a veterinarian. Every figure below carries the name of the flea it counts and the name of the source that published it."
      lastUpdated="August 2026"
      readingTime="15 min"
      breadcrumbParent={{ label: 'US Pest Guides', href: '/us' }}
      tocItems={tocItems}
      homeHref={FLEAS_HOME}
      clusterNav={FLEAS_NAV}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        Fleas are the first pest on this site where the sources name human illness in their own body
        text, so this page begins with that rather than with products. Quotation marks on this page
        mark a source&rsquo;s own words and nothing else.
      </p>

      <h2 id="health">What the Sources Say About Disease</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-red-300 bg-red-50 p-6">
        <p className="m-0 text-base font-bold text-red-900">
          Four of four publications name a human disease. Each one attaches its own qualifier, and
          every qualifier is kept with its claim below.
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UF/IFAS Extension:</strong>{' '}
          <em>
            &ldquo;Cat fleas are capable of transmitting plague and murine typhus to humans, though
            such reports are rare.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>Penn State Extension, in a page it dates to June 2026:</strong>{' '}
          <em>
            &ldquo;Fleas can transmit a number of diseases to humans, the most important of which is
            bubonic plague.&rdquo;
          </em>{' '}
          The same document states:{' '}
          <em>
            &ldquo;There have been no epidemics of plague reported in the United States since 1925,
            but plague is present in the wild rodent populations of the western states, and
            generally, a few cases of plague in humans occur each year from this source.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>Penn State Extension, on a second illness:</strong>{' '}
          <em>
            &ldquo;Murine typhus, a disease primarily affecting rats and mice, can be transmitted to
            humans by infected fleas.&rdquo;
          </em>{' '}
          The same document states:{' '}
          <em>
            &ldquo;About 40 cases of murine typhus are reported each year in the United
            States.&rdquo;
          </em>{' '}
          <strong>
            That document was updated in June 2026, but the most recent plague case counts it
            presents are from 1980, and it puts no date on the murine typhus figure at all.
          </strong>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>UC IPM, in a page its own site dates to 09/2010, describes a third illness:</strong>{' '}
          <em>
            &ldquo;Recent advances in molecular research indicate cat fleas are capable of
            transmitting a murinelike typhus disease in humans, cat flea rickettsiosis.&rdquo;
          </em>{' '}
          The same source states:{' '}
          <em>
            &ldquo;It is likely that many previously diagnosed cases of murine typhus actually might
            have been cat flea rickettsiosis.&rdquo;
          </em>{' '}
          <strong>
            The word recent in that sentence describes research as it stood in 2010.
          </strong>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>University of Maine Cooperative Extension:</strong>{' '}
          <em>
            &ldquo;Although fleas are capable of transmitting diseases, this is rare in
            Maine.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-sm text-red-900">
          <strong>Two effects that are not infections.</strong> UC IPM:{' '}
          <em>
            &ldquo;Some people and pets suffer from fleabite allergic dermatitis, characterized by
            intense itching, hair loss, reddening of the skin, and secondary infection.&rdquo;
          </em>{' '}
          And:{' '}
          <em>&ldquo;Cat fleas serve as intermediary hosts of dog and cat tapeworms.&rdquo;</em> The
          same source adds that children occasionally can acquire these tapeworms too.
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-red-900">
          This page reports what those four publications state and grades none of it. It carries no
          clinical guidance, because none of these sources provides any. Anything about your own
          health or your animal&rsquo;s belongs with a doctor or a veterinarian, not with us.
        </p>
      </div>

      <h2 id="species">Four Flea Species, and Only One Carries the Plague Claim</h2>
      <p>
        <strong>UC IPM names four fleas, not one.</strong>{' '}
        <em>
          &ldquo;Cat fleas, Ctenocephalides felis , are the most common ectoparasite on domestic
          cats and dogs&rdquo;
        </em>
        ;{' '}
        <em>&ldquo;Dog fleas, C. canis ,look like cat fleas but are rare in California.&rdquo;</em>{' '}
        <em>
          (the missing space after that comma is in UC IPM&rsquo;s own published text and is left as
          published)
        </em>
        . It also names the sticktight flea, Echidnophaga gallinacea, on ground squirrels and
        poultry.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Two publishers assign the plague claim to two different insects. Neither is adjusted here.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM, 09/2010, names a species and it is not the one on the pet:</strong>{' '}
          <em>
            &ldquo;The ground squirrel flea, Oropsylla montana , is found on ground squirrels and is
            the vector of sylvatic plague in California. However, fleas on cats or dogs in California
            most likely are cat fleas.&rdquo;
          </em>
          <br />
          <strong>UF/IFAS assigns the capability to the cat flea itself:</strong>{' '}
          <em>
            &ldquo;Cat fleas are capable of transmitting plague and murine typhus to humans, though
            such reports are rare.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          One says the plague vector is a flea most pet owners will never see. The other says the
          capability belongs to the flea on the dog. This page has no basis for preferring one
          publisher over the other and does not pretend to, and it does not treat Penn State&rsquo;s
          unnamed-species wording as agreeing with either of them.
        </p>
      </div>
      <p>
        <strong>
          That disagreement is why this page states a convention and holds to it: every number here
          carries the name of the flea it counts. If a figure on this page is not attached to a
          species name, that is a defect.
        </strong>
      </p>
      <p>
        Two other pages on this site already send readers here.{' '}
        <Link href="/us/ground-squirrels">Ground squirrels</Link> carries UC IPM&rsquo;s statement
        that plague is transmitted by fleas associated with the squirrels &mdash;{' '}
        <strong>which is the same species attribution quoted above, not a different one</strong>{' '}
        &mdash; and <Link href="/us/opossums">opossums</Link> records that Texas A&amp;M AgriLife
        Extension states opossums carry murine typhus.
      </p>

      <h2 id="lifecycle">The Life Cycle, and Two Numbers That Must Not Be Merged</h2>
      <p>
        <strong>All the figures in this section are cat flea figures</strong>, from UC IPM&rsquo;s
        09/2010 page unless another publisher is named.
      </p>
      <p>
        <em>
          &ldquo;Larval development is restricted to protected places where there is at least 75%
          relative humidity.&rdquo;
        </em>{' '}
        <em>&ldquo;An adult cat flea generally lives about 30 to 40 days on the host.&rdquo;</em>
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          Twelve months and eighteen days are both true, of the same insect, and they count
          completely different things.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UC IPM, on waiting in the cocoon:</strong>{' '}
          <em>
            &ldquo;At cool temperatures, fully formed fleas can remain in their cocoons for up to 12
            months.&rdquo;
          </em>
          <br />
          <strong>UC IPM, on completing a generation:</strong>{' '}
          <em>&ldquo;At normal room temperatures, the entire life cycle can occur in about 18 days.&rdquo;</em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          One is how long a formed flea can sit in its cocoon in the cold. The other is how fast a
          generation completes in a warm room. Put side by side without that distinction they read
          as a contradiction, and they are not one.
        </p>
      </div>
      <p>
        <strong>On the length of the cycle the two publishers differ, and both are given.</strong> UC
        IPM, 09/2010, gives about 18 days at normal room temperature. UF/IFAS says of the cat flea:{' '}
        <em>
          &ldquo;This cycle usually lasts 30 to 75 days, yet may vary due to external factors, such
          as temperature and humidity.&rdquo;
        </em>{' '}
        <strong>Neither figure is adjusted to fit the other.</strong>
      </p>

      <h2 id="pets">Warnings the Sources Give About Treating the Animal</h2>
      <p>
        <strong>
          None of the products named further down this page is a topical insecticide, a collar, a
          shampoo or a dust. The statements below are recorded because they concern a danger to a
          reader&rsquo;s own animal, and they are reported as those sources state them.
        </strong>
      </p>
      <p>
        <strong>UC IPM is direct about one class, and this is the one to read first:</strong>{' '}
        <em>
          &ldquo;With increased EPA concerns about adverse effects reported with the use of topical
          flea control products, it should emphasized that not all products are safe for all animals.
          Products containing permethrin and amitraz never should be applied to cats. Be sure to read
          labels carefully.&rdquo;
        </em>{' '}
        <em>
          (the missing word in &ldquo;it should emphasized&rdquo; is in UC IPM&rsquo;s own published
          text and is left as published)
        </em>
      </p>
      <p>
        <strong>The University of Maine states the same boundary differently:</strong>{' '}
        <em>&ldquo;Do not use dog flea products on cats and vice versa.&rdquo;</em> The same source
        says that when selecting an insecticide you should remember that a cat is likely to lick
        itself, and to check with your veterinarian first and follow label directions.
      </p>
      <p>
        <strong>UF/IFAS records a hazard in a product often described as natural:</strong>{' '}
        <em>
          &ldquo;However, pulegone, the active ingredient in the oil, has dose-related toxicity to
          mammals and may induce lethargy, vomiting, diarrhea, nose bleeds, seizures, and possibly
          death due to liver failure.&rdquo;
        </em>{' '}
        That statement is about pennyroyal oil, which the same source says is available in shampoos.
      </p>
      <p>
        <strong>UF/IFAS records a hazard to people, not pets, in another:</strong>{' '}
        <em>
          &ldquo;Diatomaceous earth has been used as a chafing agent to control larvae in carpets,
          but it contains silica which is known to cause lung disease in humans if inhaled in
          excessive quantities.&rdquo;
        </em>
      </p>
      <p>
        <strong>And UC IPM ranks a whole group below the others:</strong>{' '}
        <em>
          &ldquo;Flea shampoos and soaps, powders and dusts, spray-on liquids, and dips are less
          effective and more hazardous to pets, people, and the environment than the three types of
          products above.&rdquo;
        </em>{' '}
        <strong>
          This page adds nothing to any of these five statements and does not rank them against each
          other.
        </strong>
      </p>

      <h2 id="prescription">The Most Effective Products Are Prescription-Only</h2>
      <p>
        <strong>UC IPM, 09/2010, on what works:</strong> it states that spot-on formulations and
        systemic oral treatments are more effective than the traditional insecticide collars, dusts,
        shampoos and sprays, and that spot-ons have lower toxicity to mammals than the older
        carbamate and organophosphate products.
      </p>
      <p>
        <strong>And in the same document, the constraint:</strong>{' '}
        <em>
          &ldquo;These products are FDA-registered veterinary drugs, not pesticides, and require a
          prescription from a vet&rdquo;
        </em>
        . Penn State says of the same class:{' '}
        <em>&ldquo;These products are prescribed by veterinarians&rdquo;</em>.
      </p>
      <p>
        <strong>
          So the class the sources rate highest is one a retailer cannot sell you, and this page does
          not offer a weaker product as a substitute for it.
        </strong>{' '}
        UC IPM also states that there is no literature concerning the effectiveness of
        over-the-counter spot-on formulations.
      </p>

      <h2 id="comb">Combing the Animal</h2>
      <p>
        <strong>UC IPM:</strong>{' '}
        <em>
          &ldquo;Special metal flea combs are available that help effectively remove adult fleas from
          the coat of pets.&rdquo;
        </em>{' '}
        The same source says combing at regular intervals is also a good way to monitor the flea
        population and help you decide when other control measures might be necessary.
      </p>
      <div className="not-prose my-8 rounded-xl border-2 border-slate-300 bg-slate-50 p-6">
        <p className="m-0 text-base font-bold text-slate-900">
          Only one comb is named here, and the reason is a gap in what the listings say rather than a
          judgement about the products.
        </p>
        <p className="mt-3 mb-0 text-base text-slate-800">
          The source asks for two things at once: a metal comb, and one that removes fleas from a
          pet. <strong>We checked four combs. One listing is gone entirely.</strong> Two more state
          the metal and then describe removing dandruff flakes, small items and dander &mdash;{' '}
          <strong>
            their own feature text never says the comb removes fleas, and the word flea appears only
            in the product name.
          </strong>{' '}
          A property stated only in a product name is not a claim, so those two are not named here.
          <strong>
            {' '}
            That is a gap in the evidence available, and this page reports it as one rather than
            filling it with a claim the seller did not make.
          </strong>
        </p>
      </div>
      {FC1.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="traps">Light Traps, and What One Source Says They Will Not Do</h2>
      <div className="not-prose my-8 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
        <p className="m-0 text-base font-bold text-amber-900">
          The source that describes this product also limits it, in the very next sentence. Read both
          before buying one.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>UF/IFAS:</strong>{' '}
          <em>
            &ldquo;Light traps placed around the home, especially where the pet frequents, may collect
            fleas upon emergence from their cocoons. Yet it is doubtful that this type of trap will
            attract fleas off the pet.&rdquo;
          </em>
        </p>
        <p className="mt-3 mb-0 text-base font-bold text-amber-900">
          A trap of this kind is for fleas emerging into the room. On the source&rsquo;s own account
          it is not a way of clearing the animal, and nothing on this page presents it as one.
        </p>
      </div>
      <p>
        The four traps below each state the light-and-sticky-pad mechanism in their own text. They
        are in no order of preference, and no source consulted compares one product against another.
      </p>
      {FC2.map((p) => (
        <UsToolCard key={p.asin} name={p.cardName} whatItDoes={p.whatItDoes} asin={p.asin} />
      ))}

      <h2 id="notwork">What the Sources Say Does Not Work</h2>
      <p>
        <strong>UC IPM closes four classes outright, and the wording is its own:</strong>{' '}
        <em>
          &ldquo;Studies have shown that neither Vitamin B1 (thiamine hydrochloride) supplements nor
          brewer&rsquo;s yeast prevents fleas from feeding.&rdquo;
        </em>{' '}
        <em>&ldquo;Herbal collars and ultrasonic devices aren&rsquo;t effective flea repellents either.&rdquo;</em>
      </p>
      <p>
        <strong>
          Vitamin B1 supplements, brewer&rsquo;s yeast, herbal collars and ultrasonic devices are
          therefore named nowhere on this page as products, and never will be while that statement
          stands.
        </strong>
      </p>
      <p>
        <strong>What the sources put first costs nothing.</strong> UC IPM says to vacuum regularly to
        remove adult fleas that emerge from pupae, to wash throw rugs and pet bedding, to concentrate
        on the places the pet rests, and to seal vacuum bags and discard them so fleas do not escape.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <p>
        Every factual statement on this page traces to one of the four publications below, all
        fetched on 28 August 2026. Where a source suppresses its own publication date in markup that
        does not render, that is stated rather than the hidden date being cited, and where a document
        presents data older than itself both dates are given.
      </p>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
