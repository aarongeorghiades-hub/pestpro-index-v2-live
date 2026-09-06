import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Pigeon Spikes UK 2026",
    description:
      "Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, plastic and netting options for ledges, gutters and open areas.",
    alternates: {
      canonical: "https://pestproindex.com/best/pigeon-spikes",
    },
    openGraph: {
      title: "Best Pigeon Spikes UK 2026",
      description:
        "Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, plastic and netting options for ledges, gutters and open areas.",
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
    "Our pick of the best pigeon spikes and bird deterrent strips for the UK in 2026. Stainless steel, plastic and netting options for ledges, gutters and open areas.",
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
  tocTitle: string;
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
      "Listing shows in stock at Amazon UK",
    ],
    tableCells: [
      "S4U Stainless Steel Spikes (12 Strips, 3m)",
      "Stainless steel",
      "Best Overall",
    ],
    h2Text: "Best Overall — S4U Stainless Steel Bird Spikes",
    tocTitle: "Best Overall — S4U Stainless Steel Spikes",
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
      "Plastic",
      "Best for Wide Ledges",
    ],
    h2Text: "Best for Wide Ledges — Defender Wide Plastic Bird Spikes",
    tocTitle: "Best for Wide Ledges — Defender Wide Plastic",
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
      "Listing shows in stock at Amazon UK",
    ],
    tableCells: [
      "Stainless Steel Spikes (3m)",
      "Stainless steel",
      "A plain unbranded steel strip",
    ],
    h2Text: "Stainless Steel Bird Spikes (3m)",
    tocTitle: "Stainless Steel Spikes (3m)",
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
      "The listing carries no feature text beyond its title",
      "Listing shows in stock at Amazon UK",
    ],
    tableCells: [
      "Half Round Gutter Kit (1m)",
      "Stainless steel",
      "Best for Gutters",
    ],
    h2Text: "Best for Gutters — Stainless Steel Half Round Gutter Kit",
    tocTitle: "Best for Gutters — Half Round Gutter Kit",
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
      "Stainless steel",
      "A named-brand steel alternative",
    ],
    h2Text: "OFFO Stainless Steel Bird Spikes",
    tocTitle: "OFFO Stainless Steel Spikes",
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
  ...products.map((p) => ({ id: p.anchorId, title: p.tocTitle })),
  { id: "alternatives", title: "If Spikes Are Not the Answer" },
  { id: "installation", title: "Installation" },
  { id: "compared", title: "Best Pigeon Spikes Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

// FAQ ANSWERS ARE UNCHANGED, BY PM RULING E, AND THAT IS A KNOWN HELD EXCEPTION.
// Five of these six answers carry claims that PM ruling B orders deleted or
// corrected elsewhere on this page — the RSPB recommendation, "one of the most
// effective", "15 to 25 years", "5 to 15 metres", the flat "no planning permission",
// and a statement of the Wildlife and Countryside Act 1981 that omits the statute's
// own word "intentionally". Rulings B and E are in direct contradiction here.
// Ruling E is the narrower, named protection and it governs (Law 61, Law 119), so
// nothing below is edited. The contradiction is carried as a flag, not subtracted
// in silence (Law 138), and the resulting disagreement between these answers and
// the corrected body prose above them is reported in full (Law 132).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are pigeon spikes legal in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pigeon spikes are legal and recommended by the RSPB and local councils as a humane deterrent. They prevent landing without injuring birds. However, you must not use any method that injures or kills pigeons without a general licence, as all wild birds are protected under the Wildlife and Countryside Act 1981.",
      },
    },
    {
      "@type": "Question",
      name: "Do pigeon spikes actually work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pigeon spikes are one of the most effective pigeon deterrents available. They physically prevent landing on ledges, sills, gutters, and ridges. Stainless steel spikes are more effective than plastic for larger birds like pigeons.",
      },
    },
    {
      "@type": "Question",
      name: "How do you attach pigeon spikes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most spikes attach with outdoor silicone adhesive, screws, or cable ties. Adhesive works best on smooth surfaces like PVC and painted wood. Screws are more secure for brick, concrete, and exposed locations. Always clean the surface thoroughly before applying adhesive.",
      },
    },
    {
      "@type": "Question",
      name: "How many metres of pigeon spikes do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure every ledge, sill, and ridge where pigeons land. Cover the entire length — gaps of even 10 cm allow pigeons to land beside the spikes. Most homes need 5 to 15 metres depending on the property.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need planning permission for pigeon spikes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pigeon spikes are a minor home improvement and do not require planning permission. The exception is listed buildings — check with your local conservation officer before modifying the exterior.",
      },
    },
  ],
};

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
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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

      {/* [0] Situation */}
      <h2 id="roosting-or-nesting">Are They Roosting, or Nesting?</h2>
      <p>
        Bath &amp; North East Somerset Council puts this near the top of its
        assessment list for bird deterrents on buildings:{" "}
        <em>&ldquo;Are the birds roosting or nesting?&rdquo;</em> (
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES Council
        </a>
        ). It decides whether anything here is worth buying.
      </p>
      <p>
        West Lothian Council is blunt about what spikes cover:{" "}
        <em>
          &ldquo;Spikes are useful but only for birds roosting on ledges.&rdquo;
        </em>{" "}
        And in the same paragraph:{" "}
        <em>
          &ldquo;If they are nesting they will not provide any protection.&rdquo;
        </em>{" "}
        (
        <a href={SRC.westlothian} rel="nofollow">
          West Lothian Council
        </a>
        ). If there is a nest, spikes are the wrong purchase — the same guidance
        says{" "}
        <em>&ldquo;Netting is the only solution where birds are nesting&rdquo;</em>
        . So look before you measure: a bird on a sill in the evening and gone by
        morning is roosting; nest material building up in a corner is not.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Nests</h2>
      <p>
        This is why the distinction matters beyond wasted money. Section 1(1) of
        the Wildlife and Countryside Act 1981 provides that an offence is
        committed where a person <strong>intentionally</strong>{" "}
        <em>&ldquo;(a) kills, injures or takes any wild bird;&rdquo;</em> or{" "}
        <em>
          &ldquo;(b) takes, damages or destroys the nest of any wild bird while
          that nest is in use or being built;&rdquo;
        </em>{" "}
        (
        <a href={SRC.wca} rel="nofollow">
          legislation.gov.uk
        </a>
        ). Fixing spikes over a nest in use is capable of being the second of
        those. Wait until the nest is finished with.
      </p>
      <p>
        Consent is not automatic either. The Bath &amp; NES guidance asks{" "}
        <em>
          &ldquo;Is the building listed? If so listed building consent may be a
          requirement for bird protection&rdquo;
        </em>{" "}
        measures and interventions, and adds that{" "}
        <em>&ldquo;Planning permission may also be required&rdquo;</em> (
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES Council
        </a>
        ). If the building is listed or in a conservation area, ask the council
        first.
      </p>

      {/* [2] Failure modes */}
      <h2 id="where-spikes-fail">Where Spikes Do Not Work</h2>
      <p>
        Spikes fail in ways that have nothing to do with the spikes. The same{" "}
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES guidance
        </a>{" "}
        records that they{" "}
        <em>
          &ldquo;are generally ineffectual if placed around parapet walls or
          installed at low densities.&rdquo;
        </em>{" "}
        Density is the part people get wrong: a thin single row on a wide
        ledge leaves standing room beside it. The same source notes the other
        failure — debris collects between the pins until the deterrent stops
        deterring. That is a reason to check them once a year, not to skip them.
      </p>
      <p>
        And spikes do not reduce the number of birds.{" "}
        <a href={SRC.westlothian} rel="nofollow">
          West Lothian Council
        </a>
        :{" "}
        <em>
          &ldquo;Killing or physically removing the birds is not an effective way
          of dealing with the problem as new birds will move into preferred sites
          within a very short space of time.&rdquo;
        </em>{" "}
        Spikes make one surface unusable. They do not make the birds leave the
        street.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether they are roosting</h3>
      <p>
        Roosting on a ledge: spikes. Nesting: netting, per{" "}
        <a href={SRC.westlothian} rel="nofollow">
          West Lothian Council
        </a>
        .
      </p>
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
        ). That is a figure about usable ledge width rather than about spikes,
        but it is the right way to think about the gap you leave. The same review
        finds exclusion methods{" "}
        <em>&ldquo;generally considered to be extremely effective&rdquo;</em>,
        and that effectiveness{" "}
        <em>&ldquo;depends on the extent to which birds are excluded&rdquo;</em>.
        Measure the depth of the ledge as well as its length, and buy a strip
        wide enough to cover it — or run two.
      </p>
      <h3>3. The fixing, chosen for the surface</h3>
      <p>
        On masonry the fixing matters more than the spike.{" "}
        <a href={SRC.bathnes} rel="nofollow">
          Bath &amp; NES
        </a>{" "}
        warns that standard ferrous fixings are{" "}
        <em>&ldquo;prone to corrosion that can cause stone decay.&rdquo;</em>,
        and that where glue is used,{" "}
        <em>
          &ldquo;flexible mastic rather than a hard setting type should be&rdquo;
        </em>{" "}
        used, to avoid the same damage. On brick and stone: stainless fixings and
        a flexible sealant. On PVC and painted wood, adhesive alone is usually
        enough.
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
        steel and the base is plastic — both the listing and the product title
        say so, which is worth knowing before judging it as an all-steel strip.
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
        For deep sills, parapets and copings — the case criterion 2 is about.
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

      {/* [15] Installation */}
      <h2 id="installation">Installation</h2>
      <ol>
        <li>
          <strong>Clean the surface first.</strong> Adhesive will not bond to a
          dirty ledge.
        </li>
        <li>
          <strong>Cover the full depth.</strong> Two rows side by side on
          anything wider than one strip — the low-density failure above.
        </li>
        <li>
          <strong>Butt the strips together.</strong> A gap is somewhere to stand.
        </li>
        <li>
          <strong>On stone, use stainless fixings and a flexible sealant</strong>{" "}
          — not a hard-setting adhesive, and not plain steel screws.
        </li>
        <li>
          <strong>Check after a gale.</strong> Adhesive-mounted strips can lift.
        </li>
        <li>
          <strong>Do the whole elevation.</strong> Spike only the sills and they
          move to the gutter, the aerial or the chimney.
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
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Material</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.asin}>
              <td>{p.tableCells[0]}</td>
              <td>{p.tableCells[1]}</td>
              <td>{p.tableCells[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <FindProviderCTA
        heading="Need professional pigeon proofing?"
        subtext="For multi-storey buildings or severe infestations, professional installation ensures complete coverage and compliance. Find BPCA-certified bird control specialists near you."
      />

      {/* [17] FAQ — answers UNCHANGED by PM ruling E. See the note above faqSchema. */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Are pigeon spikes legal in the UK?</h3>
      <p>
        Yes. Pigeon spikes are legal and recommended by the RSPB and local
        councils as a humane deterrent. They prevent landing without injuring
        birds. However, you must not use any method that injures or kills
        pigeons without a general licence, as all wild birds are protected under
        the Wildlife and Countryside Act 1981.
      </p>

      <h3>Do pigeon spikes actually work?</h3>
      <p>
        Yes. Pigeon spikes are one of the most effective pigeon deterrents
        available. They physically prevent landing on ledges, sills, gutters,
        and ridges. Stainless steel spikes are more effective than plastic for
        larger birds like pigeons.
      </p>

      <h3>Stainless steel or polycarbonate — which is better?</h3>
      <p>
        Stainless steel is more effective against pigeons and lasts 15 to 25
        years. Polycarbonate is cheaper, nearly invisible, and adequate for
        smaller birds. For pigeon control specifically, stainless steel is the
        better choice.
      </p>

      <h3>How do you attach pigeon spikes?</h3>
      <p>
        Most spikes attach with outdoor silicone adhesive, screws, or cable
        ties. Adhesive works best on smooth surfaces like PVC and painted wood.
        Screws are more secure for brick, concrete, and exposed locations.
        Always clean the surface thoroughly before applying adhesive.
      </p>

      <h3>How many metres of pigeon spikes do I need?</h3>
      <p>
        Measure every ledge, sill, and ridge where pigeons land. Cover the
        entire length — gaps of even 10 cm allow pigeons to land beside the
        spikes. Most homes need 5 to 15 metres depending on the property.
      </p>

      <h3>Do I need planning permission for pigeon spikes?</h3>
      <p>
        No. Pigeon spikes are a minor home improvement and do not require
        planning permission. The exception is listed buildings — check with your
        local conservation officer before modifying the exterior.
      </p>

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
