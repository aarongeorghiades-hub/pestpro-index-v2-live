import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Pigeon Spikes UK 2026",
    description:
      "Bird spikes for UK ledges, sills and gutters. Whether spikes suit your problem, the law on nests, where spikes fail, and five products compared.",
    alternates: {
      canonical: "https://pestproindex.com/best/pigeon-spikes",
    },
    openGraph: {
      title: "Best Pigeon Spikes UK 2026",
      description:
        "Bird spikes for UK ledges, sills and gutters. Whether spikes suit your problem, the law on nests, where spikes fail, and five products compared.",
      url: "https://pestproindex.com/best/pigeon-spikes",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Pigeon Spikes UK 2026",
  description:
    "Bird spikes for UK ledges, sills and gutters. Whether spikes suit your problem, the law on nests, where spikes fail, and five products compared.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-06",
  author: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PestPro Index",
    url: "https://pestproindex.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/pigeon-spikes",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pestproindex.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best",
      item: "https://pestproindex.com/best",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Pigeon Spikes UK 2026",
      item: "https://pestproindex.com/best/pigeon-spikes",
    },
  ],
};

// SOURCES. Every quotation on this page is extracted by byte range from a body
// saved under ~/pp-s66r2/sources/ and verified by exact string match before it was
// written here (Law 164). The citation names the host actually read (S59-A).
const SRC = {
  wca: "https://www.legislation.gov.uk/ukpga/1981/69/part/I/crossheading/protection-of-birds",
  westlothian:
    "https://www.westlothian.gov.uk/article/34395/Proofing-Your-Building-Against-Birds",
  bathnes:
    "https://www.bathnes.gov.uk/sites/default/files/2020-02/Gull%20and%20pigeon%20control%20for%20listed%20and%20historic%20buildings.pdf",
  defra:
    "https://assets.publishing.service.gov.uk/media/6048ed94d3bf7f1d12811526/annex-2-non-lethal-alternatives-report.pdf",
  // S66 R6. NOTE FOR ANY LATER ROUND: Worcestershire and Bath & NES publish the
  // SAME sentence about spikes being ineffectual at low densities, word for word.
  // They are not independent corroboration of that point and are not cited as
  // though they were. The consent sentence quoted from Worcestershire is its own.
  worcs:
    "https://www.worcsregservices.gov.uk/all-services/pest-control/gull-control/protecting-your-property/",
  hse: "https://www.hse.gov.uk/work-at-height/ladders/when-how-to-use-ladders-safely.htm",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Text: string;
};

// S66 R3. Card ORDER, RANK NUMERALS and AWARD LABELS are unchanged from the
// pre-restructure record, on every surface — cardLabel, h2Text, tocTitle and
// tableCells alike. Records 3 and 5 are Law 188 MISCLASSIFIED (their h2Text holds a
// product name, not an award) and are held untouched on every label surface pending
// a PM ruling; that includes record 3's tableCells[2], which is why it still reads
// "A plain unbranded steel strip" while the feature text and prose beside it have
// been corrected to name the brand. The collision is reported, not resolved here.
//
// FEATURE TEXT is rewritten from the banked Amazon bodies fetched 2026-09-01 and
// re-read this round. A property is asserted only where the listing's own feature
// text or detail table states it (S52-E), except where the PM ruled the fetched
// product title sufficient (S50-H) — which is what keeps record 4's "half round"
// and "1 metre" on the card.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B09B2FSW55",
    rank: 1,
    cardName: "S4U Stainless Steel Bird Spikes (12 Strips, 3m)",
    cardLabel: "Best Overall",
    features: [
      "304 stainless steel spikes on a plastic base",
      "12 strips, listed as 10 feet of coverage",
      "Pre-drilled base; zip ties, screws or nails",
      "60 screws supplied in the pack",
      "Listed for window ledges, fences, rooftops and patios",
      "Spike wire listed at 1.3mm",
    ],
    tableCells: [
      "S4U Stainless Steel Spikes (12 Strips, 3m)",
      "Best Overall",
      "3 m, listed as 10 feet",
      "not stated",
      "304 stainless steel spikes, plastic base",
      "Zip ties, screws or nails; pre-drilled base",
    ],
    h2Text: "Best Overall — S4U Stainless Steel Bird Spikes",
  },
  {
    anchorId: "best-wide-ledges",
    asin: "B006Y9L57S",
    rank: 2,
    cardName: "Defender Wide Plastic Bird Spikes (5m)",
    cardLabel: "Best for Wide Ledges",
    features: [
      "Listed for ledges up to 20 cm deep",
      "15 strips of 33.4 cm, sold as a 5 metre pack",
      "Wide plastic, not stainless steel",
      "Strips snap into smaller sections",
      "Glue, screw or cable tie; fixings not included",
      "Listing states a 15 year warranty",
    ],
    tableCells: [
      "Defender Wide Plastic Spikes (5m)",
      "Best for Wide Ledges",
      "5 m, 15 strips of 33.4 cm",
      "Up to 20 cm",
      "Plastic",
      "Glue, screw or cable tie; not included",
    ],
    h2Text: "Best for Wide Ledges — Defender Wide Plastic Bird Spikes",
  },
  {
    anchorId: "steel-3m-strip",
    asin: "B07L19T8L4",
    rank: 3,
    cardName: "Stainless Steel Bird Spikes (3m)",
    cardLabel: "Best 3m Coverage",
    features: [
      "Stainless steel construction",
      "12 sections of 25 cm, listed as 3 metres",
      "Sold under the Anytime Garden brand",
      "Listed for rooftops, ledges and fences",
      "Sections can be divided for tight spaces",
      "Listed as made in Europe",
    ],
    tableCells: [
      "Stainless Steel Spikes (3m)",
      "A plain steel strip",
      "3 m, 12 sections of 25 cm",
      "not stated",
      "Stainless steel",
      "not stated",
    ],
    h2Text: "Stainless Steel Bird Spikes (3m)",
  },
  {
    anchorId: "best-for-gutters",
    asin: "B004EE18JK",
    rank: 4,
    cardName: "Stainless Steel Pigeon Spikes Half Round Gutter Kit (1m)",
    cardLabel: "Best for Gutters",
    features: [
      "Half round profile, per the listing title",
      "Listed as 150mm x 112mm x 1m",
      "Stainless steel, per the listing's detail table",
      "Fits a curve a flat base cannot sit against",
    ],
    tableCells: [
      "Half Round Gutter Kit (1m)",
      "Best for Gutters",
      "1 m, listed 150mm x 112mm x 1m",
      "not stated",
      "Stainless steel",
      "not stated",
    ],
    h2Text: "Best for Gutters — Stainless Steel Half Round Gutter Kit",
  },
  {
    anchorId: "offo-steel-spikes",
    asin: "B0BL7PF3WG",
    rank: 5,
    cardName: "OFFO Stainless Steel Bird Spikes",
    cardLabel: "Best Stainless Steel Strips",
    features: [
      "304 grade stainless steel with a steel base",
      "Three pieces, listed as covering 78 cm",
      "Each spike listed at 100mm long by 76mm wide",
      "Six pins per group, horizontal and vertical",
      "Listed for window sills, balustrades and roof edges",
      "Alternative to the Anytime Garden strip above",
    ],
    tableCells: [
      "OFFO Stainless Steel Spikes",
      "A named-brand steel alternative",
      "78 cm, three pieces",
      "not stated",
      "304 stainless steel, steel base",
      "not stated",
    ],
    h2Text: "OFFO Stainless Steel Bird Spikes",
  },
];

// Records are addressed BY IDENTITY, never by position. A positional lookup
// silently rebinds every later product when a record is added, removed or
// reordered; this cannot. A missing anchorId throws, so the build fails loudly
// rather than rendering undefined.
function product(anchorId: string): ProductRecord {
  const found = products.find((p) => p.anchorId === anchorId);
  if (!found) {
    throw new Error(`No product record with anchorId "${anchorId}"`);
  }
  return found;
}

const tocItems = [
  { id: "roosting-or-nesting", title: "Are They Roosting, or Nesting?" },
  { id: "legal", title: "The Legal Position on Nests" },
  { id: "where-spikes-fail", title: "Where Spikes Do Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  // Derived from h2Text so a contents entry cannot say something the heading does
  // not (Task 3e). Award-label text is carried through untouched; it is the same
  // string the h2 renders.
  ...products.map((p) => ({ id: p.anchorId, title: p.h2Text })),
  { id: "alternatives", title: "If Spikes Are Not the Answer" },
  { id: "installation", title: "Installation" },
  { id: "compared", title: "Best Pigeon Spikes Compared" },
];

// S66 R6 — THE FAQ IS REMOVED, AND ITS STRUCTURED DATA WITH IT.
// Every one of the six answers was either given by the body above it (legality
// and nests at [1], whether spikes work at [0] and [2], coverage at [3],
// attachment at [15] and in the comparison table's Fixing column) or answerable
// by a general search without this page's products. FAQPage structured data that
// restates the body is not an asset; it is a second copy to keep in step.
// The visible block and the schema were removed TOGETHER, in one edit, because
// they were one data structure after S66 R4 -- which is the whole reason that
// conversion was worth doing.
//
// CONSEQUENCE, REPORTED AND NOT PAPERED OVER: removing the FAQ h2 changes the
// h2/CARD sequence, so M28's fingerprint moves and M28 will FAIL on this route.
// It is NOT re-seeded this round, by instruction.

export default function BestPigeonSpikesPage() {
  return (
    <GuideLayout
      title="Best Pigeon Spikes UK 2026"
      subtitle="Stainless steel and plastic spike strips for UK ledges, sills and gutters"
      lastUpdated="September 2026"
      readingTime="6 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        {
          title: "Pigeon Control: Complete UK Guide",
          href: "/guides/pigeon-control",
        },
        {
          title: "How to Get Rid of Squirrels: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-squirrels",
        },
        {
          title: "How to Get Rid of Rats: Complete UK Guide",
          href: "/guides/how-to-get-rid-of-rats",
        },
        {
          title: "Pest Control Costs UK 2026",
          href: "/guides/pest-control-costs",
        },
      ]}
      relatedProducts={[
        {
          title: "Best Bird Deterrents UK 2026",
          href: "/best/bird-deterrents",
        },
        { title: "Best Mole Traps UK 2026", href: "/best/mole-traps" },
        {
          title: "Best Squirrel Deterrents UK 2026",
          href: "/best/squirrel-deterrents",
        },
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* Affiliate disclosure */}
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-amber-800">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        Pigeons that settle on a ledge foul the surface they sit on and whatever
        is below it. Spikes are the usual answer, and on the right surface they
        work — but they only fix one of the two situations people buy them for.
      </p>

      {/* DECISION BLOCK — situation first, product second, every line.
          NOT a card: no Amazon link, no price, no image, no award. It sits above
          the first h2 so a reader on a phone meets their own situation before
          they meet anything for sale. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>They are nesting, not roosting.</strong> Spikes give no
            protection at all —{" "}
            <a href={SRC.westlothian} rel="nofollow" className="underline">
              West Lothian Council
            </a>{" "}
            puts netting as the only answer where birds are nesting.
          </li>
          <li>
            <strong>Listed building or conservation area.</strong> Consent may be
            needed before you fix anything to the outside —{" "}
            <a href={SRC.worcs} rel="nofollow" className="underline">
              Worcestershire Regulatory Services
            </a>{" "}
            and{" "}
            <a href={SRC.bathnes} rel="nofollow" className="underline">
              Bath &amp; NES Council
            </a>
            . Ask the council first.
          </li>
          <li>
            <strong>Roosting on ordinary sills.</strong> A standard steel strip
            covers it —{" "}
            <a href="#best-overall" className="underline">
              the 3 m twelve-strip kit
            </a>
            .
          </li>
          <li>
            <strong>Sills deeper than a standard strip.</strong> One listing here
            states a ledge depth, up to 20 cm —{" "}
            <a href="#best-wide-ledges" className="underline">
              the wide plastic strip
            </a>
            .
          </li>
          <li>
            <strong>Gutters as well as sills.</strong> A flat base will not sit on
            a curve —{" "}
            <a href="#best-for-gutters" className="underline">
              the half round gutter kit
            </a>
            .
          </li>
          <li>
            <strong>A single short sill or balustrade.</strong> The shortest run
            here is 78 cm —{" "}
            <a href="#offo-steel-spikes" className="underline">
              the three-piece steel set
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="roosting-or-nesting">Are They Roosting, or Nesting?</h2>
      <p>
        It is the first question{" "}
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES Council
        </a>{" "}
        asks first, and{" "}
        <a href={SRC.westlothian} rel="nofollow">
          West Lothian Council
        </a>{" "}
        is blunt about why:{" "}
        <em>
          &ldquo;If they are nesting they will not provide any protection.&rdquo;
        </em>{" "}
        Its answer for a nest is netting. A bird on a sill in the evening and
        gone by morning is roosting; nest material building up in a corner is
        not.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Nests</h2>
      <p>
        Section 1(1) of the Wildlife and Countryside Act 1981 makes it an offence
        to do the following <strong>intentionally</strong>:{" "}
        <em>
          &ldquo;(b) takes, damages or destroys the nest of any wild bird while
          that nest is in use or being built;&rdquo;
        </em>{" "}
        (
        <a href={SRC.wca} rel="nofollow">
          legislation.gov.uk
        </a>
        ). Fixing spikes over a nest in use is capable of being that offence, so
        wait until the nest is finished with.
      </p>
      <p>
        Consent is a separate question.{" "}
        <a href={SRC.worcs} rel="nofollow">
          Worcestershire Regulatory Services
        </a>{" "}
        states that{" "}
        <em>
          &ldquo;In most cases Listed Building Consent or planning permission will
          be required.&rdquo;
        </em>{" "}
        Ask the council first.
      </p>

      {/* [2] Failure modes */}
      <h2 id="where-spikes-fail">Where Spikes Do Not Work</h2>
      <p>
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES
        </a>{" "}
        records that spikes{" "}
        <em>
          &ldquo;are generally ineffectual if placed around parapet walls or
          installed at low densities.&rdquo;
        </em>{" "}
        A thin row on a wide ledge leaves standing room beside it, and debris
        collects between the pins until the deterrent stops deterring — check
        them once a year. Nor do spikes reduce bird numbers:{" "}
        <a href={SRC.westlothian} rel="nofollow">
          West Lothian Council
        </a>{" "}
        records that new birds move into preferred sites quickly.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether they are roosting</h3>
      <p>Covered above. It decides everything else.</p>
      <h3>2. Covering the whole ledge, not most of it</h3>
      <p>
        Defra&rsquo;s review of non-lethal bird methods reports work finding that{" "}
        <em>
          &ldquo;restricting openings and ledges to a maximum width of 4cm&rdquo;
        </em>{" "}
        would prevent feral pigeons using them (
        <a href={SRC.defra} rel="nofollow">
          Defra
        </a>
        ) — a figure about ledge width, not about spikes, but the right way to
        think about the gap you leave. The same review finds exclusion works in
        proportion to how completely birds are shut out. Measure the ledge&rsquo;s
        depth as well as its length.
      </p>
      <h3>3. The fixing, chosen for the surface</h3>
      <p>
        On masonry the fixing matters more than the spike.{" "}
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES
        </a>{" "}
        warns that plain ferrous fixings corrode and cause stone decay, and that
        a flexible mastic beats a hard-setting adhesive. Stainless fixings and
        flexible sealant on brick and stone; adhesive alone on PVC and painted
        wood.
      </p>

      {/* Product 1 */}
      <h2 id={product("best-overall").anchorId}>
        {product("best-overall").h2Text}
      </h2>
      <div className="not-prose">
        <ProductCard
          name={product("best-overall").cardName}
          features={product("best-overall").features}
          asin={product("best-overall").asin}
          bestFor={product("best-overall").cardLabel}
          rank={product("best-overall").rank}
        />
      </div>
      <p>
        For a couple of sills and a length of coping. Twelve separate strips
        making up ten feet is the useful part: you cut nothing and you place
        strips only where birds actually stand. The spikes are 304 stainless
        steel and the base is plastic, not steel throughout.
      </p>

      {/* Product 2 */}
      <h2 id={product("best-wide-ledges").anchorId}>
        {product("best-wide-ledges").h2Text}
      </h2>
      <div className="not-prose">
        <ProductCard
          name={product("best-wide-ledges").cardName}
          features={product("best-wide-ledges").features}
          asin={product("best-wide-ledges").asin}
          bestFor={product("best-wide-ledges").cardLabel}
          rank={product("best-wide-ledges").rank}
        />
      </div>
      <p>
        For deep sills, parapets and copings, which is what criterion 2 is about.
        This is the only listing here that states a ledge depth: up to 20 cm. It
        is plastic, so it cannot rust into a stain down the brickwork, and it is
        fifteen strips of 33.4 cm that snap into shorter sections. The listing
        states a fifteen year warranty.
      </p>

      {/* Product 3 */}
      <h2 id={product("steel-3m-strip").anchorId}>
        {product("steel-3m-strip").h2Text}
      </h2>
      <div className="not-prose">
        <ProductCard
          name={product("steel-3m-strip").cardName}
          features={product("steel-3m-strip").features}
          asin={product("steel-3m-strip").asin}
          bestFor={product("steel-3m-strip").cardLabel}
          rank={product("steel-3m-strip").rank}
        />
      </div>
      <p>
        A plain three metre steel strip, sold under the Anytime Garden brand:
        twelve 25 cm sections that can be divided for tight spaces. If you want
        steel at the standard length and nothing else, this is that.
      </p>

      {/* Product 4 */}
      <h2 id={product("best-for-gutters").anchorId}>
        {product("best-for-gutters").h2Text}
      </h2>
      <div className="not-prose">
        <ProductCard
          name={product("best-for-gutters").cardName}
          features={product("best-for-gutters").features}
          asin={product("best-for-gutters").asin}
          bestFor={product("best-for-gutters").cardLabel}
          rank={product("best-for-gutters").rank}
        />
      </div>
      <p>
        Guttering is the one place a flat strip will not sit, because the surface
        is curved. This is a half round kit for that shape, listed at 150mm x
        112mm x 1m. The listing carries no feature text beyond its title, so the
        card above is everything it states. If birds are using the gutter and the
        sills, you need this and a flat strip.
      </p>

      {/* Product 5 */}
      <h2 id={product("offo-steel-spikes").anchorId}>
        {product("offo-steel-spikes").h2Text}
      </h2>
      <div className="not-prose">
        <ProductCard
          name={product("offo-steel-spikes").cardName}
          features={product("offo-steel-spikes").features}
          asin={product("offo-steel-spikes").asin}
          bestFor={product("offo-steel-spikes").cardLabel}
          rank={product("offo-steel-spikes").rank}
        />
      </div>
      <p>
        The short one, and the only listing here that gives a pin layout: six
        pins per group across both directions, each spike 100mm long by 76mm
        wide, three pieces covering 78 cm. That suits a single windowsill or a
        short balustrade rather than a run. Spikes and base are both stainless
        steel.
      </p>

      {/* [14] Alternatives */}
      <h2 id="alternatives">If Spikes Are Not the Answer</h2>
      <p>
        <strong>If they are nesting, use netting.</strong> That is West
        Lothian&rsquo;s position, quoted above.
      </p>
      <p>
        <strong>Do not buy an ultrasonic unit for pigeons.</strong> Defra&rsquo;s
        review reports a trial of an ultrasonic device which found{" "}
        <em>
          &ldquo;it had no effect on feral pigeons Columba livia.&rdquo;
        </em>{" "}
        and notes that{" "}
        <em>
          &ldquo;most species of birds do not hear in the ultrasonic range
          (&gt;20kHz)&rdquo;
        </em>{" "}
        (
        <a href={SRC.defra} rel="nofollow">
          Defra
        </a>
        ).
      </p>
      <p>
        <strong>On a new sill, consider the angle instead.</strong> The same
        review reports that{" "}
        <em>&ldquo;ensuring an incline of at least 25&deg;&rdquo;</em> on smooth
        materials — rising to 35&deg; on wood and 50&deg; on concrete — would
        prevent feral pigeons perching. If you are rebuilding a sill anyway, a
        slope needs nothing bolted to it.
      </p>

      {/* [15] Installation — S66 R6. Every instruction here is either quoted from
          a fetched source, taken from a banked listing, or a plain observation
          stated as such. NOTHING was written about adhesive cure time, because no
          source fetched this round states one. */}
      <h2 id="installation">Installation</h2>
      <ol>
        <li>
          <strong>Clear the ledge before you fix anything.</strong> The S4U
          listing is explicit about the order of work:{" "}
          <em>
            &ldquo;The spike should not be installed until the waste and debris is
            properly removed.&rdquo;
          </em>{" "}
          Adhesive will not bond to a fouled surface, and a strip bedded on
          debris lifts.
        </li>
        <li>
          <strong>Working at a first-floor sill is work at height.</strong> HSE
          guidance on ladders says you should only use one{" "}
          <em>
            &ldquo;where the ladder will be level and stable, and can be
            secured&rdquo;
          </em>{" "}
          (
          <a href={SRC.hse} rel="nofollow">
            HSE
          </a>
          ). A sill you can only reach by stretching sideways off a ladder is a
          job for a professional, not a longer reach.
        </li>
        <li>
          <strong>If it is going to take a while, get off the ladder.</strong>{" "}
          HSE&rsquo;s own guide is that{" "}
          <em>
            &ldquo;if your task would require staying up a leaning ladder or
            stepladder for more than 30 minutes at a time, it is recommended you
            use alternative equipment.&rdquo;
          </em>{" "}
          Cutting, cleaning and bedding a run of strips takes longer than people
          expect.
        </li>
        <li>
          <strong>Cover the full depth.</strong> Two rows side by side on anything
          wider than one strip — the low-density failure above.
        </li>
        <li>
          <strong>Butt the strips together.</strong> A gap is somewhere to stand.
        </li>
        <li>
          <strong>On stone, use stainless fixings and a flexible sealant</strong>{" "}
          — not a hard-setting adhesive, and not plain steel screws.
        </li>
        <li>
          <strong>Check the fixings for the product you actually bought.</strong>{" "}
          Two of the five listings here state a fixing method and three do not;
          the comparison table below says which. The Defender listing notes that{" "}
          <em>&ldquo;Glue, screws and cable ties not included.&rdquo;</em>
        </li>
        <li>
          <strong>Look at it from inside first.</strong> Spikes on a sill are
          visible from the room behind it, and on a front elevation they are
          visible from the street. That is an observation, not advice from a
          source — but it is the part people regret.
        </li>
        <li>
          <strong>Check after a gale.</strong> Adhesive-mounted strips can lift.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Never use pigeon netting that is loose or poorly maintained —
            sagging net can entangle birds, which is both an animal welfare
            concern and capable of being an offence under section 1 of the
            Wildlife and Countryside Act 1981.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">Best Pigeon Spikes Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
              <th className="text-left p-2 border-b font-semibold">Length as listed</th>
              <th className="text-left p-2 border-b font-semibold">Ledge depth as listed</th>
              <th className="text-left p-2 border-b font-semibold">Material</th>
              <th className="text-left p-2 border-b font-semibold">Fixing as listed</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.asin} className="align-top">
                {p.tableCells.map((c, i) => (
                  <td key={i} className="p-2 border-b">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FindProviderCTA
        heading="Need professional pigeon proofing?"
        subtext="For multi-storey buildings or severe infestations, professional installation ensures complete coverage and compliance. Find BPCA-certified bird control specialists near you."
      />

      <p>
        For large commercial properties or full building exclusion, see our
        guide to{" "}
        <a
          href="/best/professional-bird-netting-kits"
          className="text-green-600 hover:underline"
        >
          professional bird netting kits
        </a>
        .
      </p>
    </GuideLayout>
  );
}
