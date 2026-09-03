import { Metadata } from 'next';
import Link from 'next/link';
import UsPageLayout from '../components/UsPageLayout';
import UsFaq, { faqPageSchema, type Faq } from '../components/UsFaq';
import UsToolCard from '../components/UsToolCard';
import { SourceList, type Source } from '../components/UsSources';
import { FUNGUS_GNATS_NAV, FUNGUS_GNATS_HOME } from '../components/fungusGnatsNav';

const URL = 'https://pestproindex.com/us/fungus-gnats';
const TITLE = 'Fungus Gnats: The Problem Is the Watering Can';
const DESCRIPTION =
  'The adults are the symptom and the wet soil is the cause. Six sources on drying the top inch, Bti in the soil, yellow traps, and one flat disagreement.';

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
  itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Fungus Gnats', item: URL }],
};

// ---------------------------------------------------------------------------
// TWO CARDS, ONE CLASS DELIBERATELY EMPTY.
//
//   Bti           ONE card. UC IPM and Wisconsin BOTH name "Mosquito Bits" by
//                 name for fungus gnats, which is a product-level criterion
//                 rather than a vocabulary (Law 139). The carded listing's OWN
//                 feature text states the granules are coated in Bti, that the
//                 product is labeled to control fungus gnats in plant beds or
//                 pots, and that it can be sprinkled on the soil surface --
//                 so every claim on the card is in the listing (S52-E).
//
//                 LAW 71 CHECKED BEFORE SOURCING. /us/mosquitoes already cards
//                 a Bti product, B0002ASQ4A, Mosquito DUNKS for standing water.
//                 This is a different ASIN and a different article -- granules
//                 for soil, not a floating dunk for a pond -- and NC State is
//                 the source that connects the two ("Bti is commonly found in
//                 mosquito dunks"). Not a duplicate; stated so it is auditable.
//
//   YELLOW        ONE card. Four sources specify the color and the placement,
//   STICKY TRAPS  which is a real criterion: YELLOW, and set in or beside the
//                 container. The carded listing's own feature text carries both
//                 -- it names the traps yellow and describes inserting the
//                 holder into the soil beside potted plants.
//
//                 A SECOND CANDIDATE WAS REJECTED ON S52-E, NOT ON QUALITY: its
//                 feature text names fungus gnats but never says yellow. Yellow
//                 appears only in its title, and a property stated only in a
//                 product's name is not a claim.
//
//   SOIL COVERS   NO card. Wisconsin publishes a real specification -- a half to
//                 one inch layer of coarse sand or fine gravel -- but it is a
//                 specification for a LAYER, not for a product. Any coarse sand
//                 satisfies it, so there is nothing to rank (Law 139).
// ---------------------------------------------------------------------------

const sources: Source[] = [
  {
    label:
      'Fungus Gnats — the source of the larval feeding description, the root damage statement, the avoid-overwatering instruction, the yellow sticky trap statement, and the named Bti products that DISAGREE with Colorado State on retail availability',
    publisher: 'University of California Statewide IPM Program (UC IPM)',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://ipm.ucanr.edu/home-and-landscape/fungus-gnats/',
  },
  {
    label:
      'Fungus Gnats as Houseplant and Indoor Pests — the source of the Bradysia identification, the adults-do-not-bite-or-feed statement, the larval feeding description, and the retail-availability statement that DISAGREES with UC IPM',
    publisher: 'Colorado State University Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.colostate.edu/resource/fungus-gnats-as-houseplant-and-indoor-pests/',
  },
  {
    label:
      'Fungus Gnats on Houseplants — the source of the overwatered-houseplant association, the top-inch drying instruction, the bottom-watering alternative, the sand and gravel layer specification, the three-to-four-week timescale, the Bti watering-in instruction, and the root-hair damage statement',
    publisher: 'University of Wisconsin-Madison Division of Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026 from hort.extension.wisc.edu',
    href: 'https://hort.extension.wisc.edu/articles/fungus-gnats-on-houseplants/',
  },
  {
    label:
      'Fungus Gnats — the source of the statement that overwatering grows the fungi the larvae eat, and of the soil-drench description of how Bti products are labeled for indoor plants',
    publisher: 'University of Maryland Extension',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://extension.umd.edu/resource/fungus-gnats',
  },
  {
    label:
      'Fungus Gnats: Tiny Pests in Houseplants and How to Control Them — the source of the nuisance-not-harm statement, the mosquito-dunk route to Bti, the top-inch drying instruction that corroborates Wisconsin, the overwatering association, the garden-center sticky trap statement and the small-numbers-are-useful statement',
    publisher: 'NC State Extension, Beaufort County Center',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://beaufort.ces.ncsu.edu/news/fungus-gnats-tiny-pests-in-houseplants-and-how-to-control-them/',
  },
  {
    label:
      'A Spooky Houseplant Pest: Fungus Gnats — the source of the bright-yellow sticky trap statement and of the consistently-moist-soil statement. This is a county association office of Cornell Cooperative Extension',
    publisher: 'Cornell Cooperative Extension, Allegany County',
    date: 'No publication date carried in the page; fetched 3 September 2026',
    href: 'https://allegany.cce.cornell.edu/gardening/pest-management/a-spooky-houseplant-pest-fungus-gnats',
  },
];

const faqs: Faq[] = [
  {
    question: 'Are these fruit flies?',
    answer:
      'Almost certainly not, and the fastest test is where they are rather than what they look like. A fungus gnat comes out of the pot; a fruit fly comes off the fruit bowl or the drain. Colorado State University Extension describes fungus gnats as small, mosquito-like insects often found in homes and offices, usually in the vicinity of houseplants, and UC IPM describes them as dark, delicate-looking flies similar in appearance to mosquitoes. A fruit fly is stocky and red-eyed and looks nothing like a mosquito. Our fruit flies page carries the full three-way identification test against drain flies as well, from Texas A&M AgriLife Extension, and this page does not repeat it.',
  },
  {
    question: 'Do fungus gnats bite, or hurt my plants?',
    answer:
      'The adults do neither. Colorado State University Extension states that adults do not bite or feed. NC State Extension states that adult fungus gnats are mostly a nuisance, as they do not bite or harm plants directly. Wisconsin agrees that adult fungus gnats do not feed on or damage plants but are a cosmetic nuisance. The larvae are a different question and the answer depends on how many there are. Wisconsin states that if larval numbers are high, they may damage roots by feeding on root hairs or tunneling into the roots themselves, and UC IPM states that larvae in large numbers can damage roots and stunt plant growth, particularly in seedlings and young plants. NC State puts the other side of it: in small numbers they help break down organic matter.',
  },
  {
    question: 'How dry should I let the soil get?',
    answer:
      'Two sources say the top inch and one says one to two inches, and this page reports all three rather than averaging them. University of Wisconsin-Madison Division of Extension says to allow the top inch of the soil to dry out before you water. NC State Extension gives the same figure and the reason: since fungus gnat larvae thrive in moist soil, allowing the top inch of soil to dry out between waterings will disrupt their life cycle. Cornell Cooperative Extension goes further, at one to two inches. Wisconsin also gives the timescale, which is the part people give up before reaching: it may take three to four weeks of modified watering and use of sand or gravel to get fungus gnats in check.',
  },
  {
    question: 'Can I buy Bti for this, or not? The sources disagree.',
    answer:
      'They disagree flatly, and this page renders the disagreement rather than picking the convenient side. UC IPM states that several Bti products, naming Mosquito Bits and Gnatrol, are readily available in retail nurseries and garden centers, and that these may be the most convenient for home gardeners. Colorado State University Extension states the opposite: formulations of Bti sold for fungus gnat control generally are unavailable through retail outlets. NC State Extension gives the route that reconciles them in practice without either source saying so — Bti is commonly found in mosquito dunks and can be mixed with water and applied directly to the soil. University of Maryland Extension states that Bti is the active ingredient in soil drench products labeled for indoor plants to control fungus gnat larvae in the soil. Note that neither this page nor any source read here rules on which of the two is right today.',
  },
  {
    question: 'Do the yellow sticky traps actually fix it?',
    answer:
      'They catch adults, which is not the same as fixing the problem, and the sources are careful about the difference. UC IPM states that yellow sticky traps can be used to trap adults. Cornell Cooperative Extension states that bright yellow sticky traps are an easy and effective method to catch adult fungus gnats. NC State Extension names the mechanism by which catching adults helps at all: yellow sticky traps can capture adult gnats, reducing the number of eggs laid in the soil. Wisconsin treats them chiefly as monitoring, describing them under scouting. The larvae are in the soil, so the trap is a way of lowering the next generation and of telling whether you are winning — not a substitute for changing how you water.',
  },
  {
    question: 'When is it the building rather than the plants?',
    answer:
      'When you have removed the obvious source and the gnats keep coming, the wet organic matter is somewhere you are not looking. UC IPM notes that fungus gnats can be a problem where there is an abundance of decaying vegetation and fungi, and University of Maryland Extension states that overwatering indoor plants contributes to the growth of the fungi on which the larvae feed. The common factor is not the pot — it is persistently wet organic matter. A plant saucer that never empties, a leak under a sink feeding damp material, or damp debris in a crawl space will support the same insect. If the plants have been treated and dried and the gnats continue, the next thing to look for is the water, not another product.',
  },
];

const tocItems = [
  { id: 'scope', title: 'What This Page Carries' },
  { id: 'what-it-is', title: 'What a Fungus Gnat Is' },
  { id: 'not-fruit-flies', title: 'Not Fruit Flies, and How to Be Sure' },
  { id: 'damage', title: 'What They Actually Damage' },
  { id: 'watering', title: 'The Watering, Which Is the Whole Problem' },
  { id: 'bti', title: 'Bti in the Soil, and a Flat Disagreement' },
  { id: 'traps', title: 'Yellow Sticky Traps' },
  { id: 'structural', title: 'When It Is the Building, Not the Plants' },
  { id: 'not-named', title: 'What Is Not Named Here, and Why' },
  { id: 'faq', title: 'Questions' },
  { id: 'sources', title: 'Sources' },
];

export default function FungusGnatsPage() {
  return (
    <UsPageLayout
      title="Fungus Gnats"
      subtitle="The little dark flies drifting up from a houseplant are the symptom. The cause is in the pot, and it is wet. Six extension sources on how dry to let it get, what Bti does, what a yellow trap is actually for, and one thing two of them flatly disagree about."
      lastUpdated="September 2026"
      readingTime="10 min read"
      homeHref={FUNGUS_GNATS_HOME}
      clusterNav={FUNGUS_GNATS_NAV}
      tocItems={tocItems}
      schemas={[webPageSchema, breadcrumbSchema, faqPageSchema(faqs)]}
    >
      <p>
        <strong>
          The insect you can see is the one that matters least. Everything that decides whether this
          stops is happening in the top inch of soil.
        </strong>{' '}
        The University of Wisconsin-Madison Division of Extension puts the association in its first
        sentence:{' '}
        <em>
          &ldquo;Fungus gnats (Family Sciaridae) are insects commonly associated with overwatered
          houseplants.&rdquo;
        </em>{' '}
        Every source read for this page arrives at the same place from a different direction, and
        none of them leads with a product.
      </p>

      <h2 id="scope">What This Page Carries</h2>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>Two products are named and one class is deliberately empty.</strong>{' '}
          <strong>Bti:</strong> one named, because two sources name the same product by name for
          this insect and the listing&rsquo;s own text carries the fungus gnat labeling.{' '}
          <strong>Yellow sticky traps:</strong> one named, because four sources specify both the
          color and the placement, which is a criterion rather than a vocabulary.
        </p>
        <p className="mt-3 mb-0 text-base text-amber-900">
          <strong>Soil covers: none named.</strong> Wisconsin publishes a real specification for
          this &mdash; a half to one inch layer of coarse sand or fine gravel &mdash; but it
          specifies a <em>layer</em>, not a product. Any coarse sand satisfies it, so there is
          nothing here to rank one bag against another.
        </p>
      </div>

      <h2 id="what-it-is">What a Fungus Gnat Is</h2>
      <p>
        <strong>Small, dark, and mosquito-shaped rather than fly-shaped.</strong> Colorado State
        University Extension:{' '}
        <em>
          &ldquo;Fungus gnats (Bradysia species) &ndash; also known as dark-winged fungus gnats, are
          small, mosquito-like insects often found in homes and offices, usually in the vicinity of
          houseplants.&rdquo;
        </em>
      </p>
      <p>
        UC IPM gives the wider identification and the reason the insect exists in your pot at all:{' '}
        <em>
          &ldquo;Their larvae primarily feed on fungi and organic matter in soil, but also chew roots
          and can be a problem in greenhouses, nurseries, potted plants and interior
          plantscapes.&rdquo;
        </em>{' '}
        Colorado State says the same of the larvae from its own reading:{' '}
        <em>
          &ldquo;Larvae of fungus gnats feed on algae, fungi, and plant roots in growing
          medium.&rdquo;
        </em>
      </p>
      <p>
        <strong>The fungi are the point, and they are what the water grows.</strong> University of
        Maryland Extension:{' '}
        <em>
          &ldquo;Overwatering indoor plants contributes to the growth of the fungi on which the
          larvae feed.&rdquo;
        </em>{' '}
        That single sentence is why this page is organized around the watering can rather than
        around a spray.
      </p>

      <h2 id="not-fruit-flies">Not Fruit Flies, and How to Be Sure</h2>
      <p>
        <strong>
          The fastest test is not what the insect looks like. It is where it comes from.
        </strong>{' '}
        A fungus gnat rises off the surface of a pot when you water or brush the plant. A fruit fly
        is at the fruit bowl, the recycling or a drain. The shape backs it up: both Colorado State
        and UC IPM describe fungus gnats as mosquito-like, and a fruit fly is stocky and red-eyed
        and looks nothing like a mosquito.
      </p>
      <p>
        <Link href="/us/fruit-flies">Our fruit flies page</Link> carries the full three-way
        identification test &mdash; fruit fly against drain fly against fungus gnat, from Texas A&amp;M
        AgriLife Extension &mdash; and that test is not repeated here, so the two pages cannot drift
        apart. If your small flies are at a drain rather than a pot, that is the page to read.{' '}
        <Link href="/us/flies">Our house flies page</Link> covers the much larger filth fly, and{' '}
        <Link href="/us/cluster-flies">our cluster flies page</Link> the slow dark one at autumn
        windows. Neither is this insect.
      </p>

      <h2 id="damage">What They Actually Damage</h2>
      <p>
        <strong>The adults do nothing to you and nothing to the plant.</strong> Colorado State:{' '}
        <em>&ldquo;Adults do not bite or feed.&rdquo;</em> NC State Extension:{' '}
        <em>
          &ldquo;Adult fungus gnats are mostly a nuisance, as they do not bite or harm plants
          directly.&rdquo;
        </em>{' '}
        Wisconsin:{' '}
        <em>
          &ldquo;Adult fungus gnats do not feed on or damage plants but are a cosmetic
          nuisance.&rdquo;
        </em>{' '}
        Three sources, one answer.
      </p>
      <p>
        <strong>The larvae are a different question, and the answer is conditional on numbers.</strong>{' '}
        Wisconsin:{' '}
        <em>
          &ldquo;However, if larval numbers are high, they may damage roots by feeding on root hairs
          or tunneling into the roots themselves.&rdquo;
        </em>{' '}
        UC IPM:{' '}
        <em>
          &ldquo;Larvae, however, when present in large numbers, can damage roots and stunt plant
          growth, particularly in seedlings and young plants.&rdquo;
        </em>
      </p>
      <p>
        <strong>And NC State gives the other side, which is worth having before you act:</strong>{' '}
        <em>
          &ldquo;In small numbers, they help break down organic matter, but in large infestations,
          they may feed on delicate root hairs, potentially weakening young plants or
          cuttings.&rdquo;
        </em>{' '}
        A few gnats over a mature houseplant is a nuisance. A cloud of them over a tray of seedlings
        is a different situation.
      </p>

      <h2 id="watering">The Watering, Which Is the Whole Problem</h2>
      <p>
        <strong>Every source read here puts the water first, and three give a number.</strong> They
        do not fully agree, and all three are reported.
      </p>
      <ul>
        <li>
          <strong>Wisconsin &mdash; the top inch:</strong>{' '}
          <em>
            &ldquo;You can do this by allowing the top inch of the soil to dry out before you
            water.&rdquo;
          </em>
        </li>
        <li>
          <strong>NC State &mdash; the top inch, with the mechanism:</strong>{' '}
          <em>
            &ldquo;Since fungus gnat larvae thrive in moist soil, allowing the top inch of soil to
            dry out between waterings will disrupt their life cycle.&rdquo;
          </em>
        </li>
        <li>
          <strong>Cornell Cooperative Extension &mdash; one to two inches</strong>, a deeper figure
          than either of the others, in a source that also states{' '}
          <em>&ldquo;Fungus gnats are particularly attracted to consistently moist soil.&rdquo;</em>
        </li>
      </ul>
      <p>
        <strong>Two alternatives to simply watering less, both from Wisconsin.</strong> The first
        keeps the roots wet and the surface dry:{' '}
        <em>
          &ldquo;Alternatively, you can water from the bottom to provide moisture for the roots while
          keeping the soil surface dry.&rdquo;
        </em>{' '}
        The second puts a physical barrier over the egg-laying surface:{' '}
        <em>
          &ldquo;In addition, you can cover the soil with a &frac12; to one inch layer of coarse sand
          or fine gravel, which will help keep the surface drier and make the soil less attractive
          for egg-laying.&rdquo;
        </em>
      </p>
      <p>
        <strong>
          And the sentence that keeps people going long enough for any of it to work:
        </strong>{' '}
        <em>
          &ldquo;It may take three to four weeks of modified watering and use of sand/gravel to get
          fungus gnats in check.&rdquo;
        </em>{' '}
        Three to four weeks, from Wisconsin, is the published timescale. Nothing on this page works
        in a day.
      </p>
      <p>
        UC IPM states the general rule the same way:{' '}
        <em>
          &ldquo;Because fungus gnats thrive in moist conditions, avoid overwatering houseplants and
          provide good drainage.&rdquo;
        </em>
      </p>

      <h2 id="bti">Bti in the Soil, and a Flat Disagreement</h2>
      <p>
        <strong>
          Bti is a soil-borne bacterium used against the larvae, and it is the only insecticidal
          treatment this page names.
        </strong>{' '}
        University of Maryland Extension:{' '}
        <em>
          &ldquo;Bti is the active ingredient in soil drench products labeled for indoor plants to
          control fungus gnat larvae in the soil.&rdquo;
        </em>{' '}
        Wisconsin gives the application detail that decides whether it reaches anything:{' '}
        <em>
          &ldquo;Apply these products with adequate water to help the Bti filter through the soil to
          reach the larvae.&rdquo;
        </em>
      </p>
      <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-5">
        <p className="m-0 text-base text-amber-900">
          <strong>TWO SOURCES DISAGREE FLATLY ABOUT WHETHER YOU CAN BUY IT</strong>, and this page
          reports both rather than choosing.{' '}
          <strong>UC IPM:</strong>{' '}
          <em>
            &ldquo;Several Bti products (Mosquito Bits, Gnatrol) are readily available in retail
            nurseries and garden centers, so these products may be the most convenient for home
            gardeners to use.&rdquo;
          </em>{' '}
          <strong>Colorado State University Extension:</strong>{' '}
          <em>
            &ldquo;However, formulations of Bti sold for fungus gnat control generally are
            unavailable through retail outlets.&rdquo;
          </em>{' '}
          Neither source addresses the other and neither is dated in a way that lets one supersede
          the other. NC State describes the route that in practice sits between them:{' '}
          <em>
            &ldquo;Bti is commonly found in mosquito dunks and can be mixed with water and applied
            directly to the soil.&rdquo;
          </em>{' '}
          The product below is one UC IPM names; a reader who finds Colorado State&rsquo;s position
          truer of their own shops has NC State&rsquo;s route as the alternative.
        </p>
      </div>

      <UsToolCard
        name="Summit Responsible Solutions Mosquito Bits, 30 oz"
        whatItDoes={[
          'One of the two Bti products UC IPM names by name for fungus gnats, alongside Gnatrol.',
          'Its own listing text states that the corn cob granules are coated in Bti, that the product is labeled to control fungus gnats in plant beds or pots, and that the bits can be sprinkled on the soil surface or mixed with potting soil before planting to kill fungus gnat larvae.',
          'Wisconsin states to apply Bti products with adequate water so the Bti filters through the soil to reach the larvae. This is a larval treatment in the growing medium; it does nothing to the adults already flying.',
        ]}
        asin="B07HCLTXFG"
      />

      <h2 id="traps">Yellow Sticky Traps</h2>
      <p>
        <strong>
          Four sources name them, all four specify the color, and none of them describes the trap
          as the solution.
        </strong>{' '}
        Cornell Cooperative Extension:{' '}
        <em>
          &ldquo;Bright yellow sticky traps are an easy and effective method to catch adult fungus
          gnats.&rdquo;
        </em>{' '}
        UC IPM, more narrowly:{' '}
        <em>&ldquo;Yellow sticky traps can be used to trap adults.&rdquo;</em>
      </p>
      <p>
        <strong>NC State names the mechanism by which catching adults helps at all</strong>, which is
        the part worth understanding before buying any:{' '}
        <em>
          &ldquo;Yellow sticky traps, available at garden centers, can capture adult gnats, reducing
          the number of eggs laid in the soil.&rdquo;
        </em>{' '}
        The larvae are in the soil and the trap never touches them. What it does is lower the next
        generation, and tell you whether the watering change is working. Wisconsin treats them
        primarily as a scouting tool for exactly that reason.
      </p>

      <UsToolCard
        name="Yellow Sticky Traps for Plant Gnats, 60 Pieces, Dual-Sided, Stake Holders Included"
        whatItDoes={[
          'Yellow, which is the property all four sources specify rather than an incidental one — its own listing text names the traps yellow rather than leaving the color to the title.',
          'Its own listing text describes removing the trap from its paper, placing it in a holder and inserting the holder into the soil, which is the placement Maryland and Wisconsin describe: in the container, beside the plant.',
          'This catches adults only. Every source read for this page treats trapping as monitoring and egg-load reduction, not as control — the larvae are in the growing medium and no trap reaches them.',
        ]}
        asin="B0BM51MQF3"
      />

      <h2 id="structural">When It Is the Building, Not the Plants</h2>
      <p>
        <strong>
          If the plants have been dried out and treated and the gnats keep coming, the wet organic
          matter is somewhere you have not looked.
        </strong>{' '}
        UC IPM notes that the insect is a problem where there is an abundance of decaying vegetation
        and fungi, and Maryland&rsquo;s sentence about overwatering growing the fungi the larvae eat
        is really a statement about persistently wet organic matter rather than about pots
        specifically.
      </p>
      <p>
        A saucer that never empties, damp material under a sink, or wet debris in a crawl space will
        support the same insect on the same terms. That is a moisture problem in a building rather
        than a horticultural one, and the fix is the leak.{' '}
        <strong>
          None of the six sources read here gives a threshold for calling a professional, and this
          page will not invent one.
        </strong>{' '}
        Our{' '}
        <Link href="/us/choosing-a-pest-control-service">choosing a pest control service page</Link>{' '}
        covers what to check if you decide to.
      </p>

      <h2 id="not-named">What Is Not Named Here, and Why</h2>
      <p>
        <strong>No soil cover is named, and Wisconsin is the reason it could have been.</strong> Its
        half-to-one-inch layer of coarse sand or fine gravel is a genuine published specification
        &mdash; but it specifies the <em>layer</em>, not the material&rsquo;s brand, grade or
        packaging. Any coarse sand meets it. There is nothing to rank, so nothing is ranked.
      </p>
      <p>
        <strong>A second sticky trap was read and rejected on a rule, not on quality.</strong> Its
        own feature text names fungus gnats but never says the traps are yellow; the color appears
        only in the product title. Every source here specifies <em>yellow</em>, so the color is the
        criterion, and a property stated only in a product&rsquo;s name is not a claim this site will
        make on the product&rsquo;s behalf.
      </p>
      <p>
        <strong>No general houseplant insecticide is named.</strong> The sources treat this as a
        growing-medium problem addressed by water management with Bti as the targeted option, and
        none of the six recommends a broad-spectrum spray for it.
      </p>

      <h2 id="faq">Questions</h2>
      <UsFaq faqs={faqs} />

      <h2 id="sources">Sources</h2>
      <SourceList sources={sources} />
    </UsPageLayout>
  );
}
