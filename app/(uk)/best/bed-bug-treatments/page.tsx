import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R8 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B: the subject carries a
// health question, so health statements are permitted — but only quoted from a named
// public health body, never in our own voice, never as diagnosis or treatment. THIS PAGE
// CARRIES THREE, ALL NHS, all quoted, at #situation and #limits. Where the honest answer
// is to see someone clinical, the page says so and links nothing clinical of its own.
//
// ONE CARD IS REMOVED UNDER THE S67 R10 MISMATCH RULING. B00B2KP7U0 was carded as
// "Zero In Bed Bug & Dust Mite Killer 300ml". Its fetched listing is "Zero In Clothes
// Moths Killer Spray", target species Insects, sold for clothes moths and carpet beetles
// in wardrobes and textiles — it names bed bugs nowhere. It is a moth product on a bed
// bug page and it comes off. The route keeps three cards; card order is otherwise
// unchanged and the numerals close up.
//
// THE TITLE SAID "Sprays & Powders" over a page that also cards an encasement, and the
// description promised monitoring traps it does not card. Both now say what is here.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Bed Bug Treatments UK 2026: Sprays, Powders & Encasements",
    description:
      "Bed bug treatment for UK homes: what the NHS says about getting rid of them, and three products described by what their own listings state.",
    alternates: { canonical: "https://pestproindex.com/best/bed-bug-treatments" },
    openGraph: {
      title: "Best Bed Bug Treatments UK 2026: Sprays, Powders & Encasements",
      description:
        "Bed bug treatment for UK homes: what the NHS says about getting rid of them, and three products described by what their own listings state.",
      url: "https://pestproindex.com/best/bed-bug-treatments",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Bed Bug Treatments UK 2026: Sprays, Powders & Encasements",
  description:
    "Bed bug treatment for UK homes: what the NHS says about getting rid of them, and three products described by what their own listings state.",
  datePublished: "2026-03-16",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/bed-bug-treatments" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pestproindex.com" },
    { "@type": "ListItem", position: 2, name: "Best", item: "https://pestproindex.com/best" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Bed Bug Treatments UK 2026",
      item: "https://pestproindex.com/best/bed-bug-treatments",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). The citation names the host
// actually fetched (Law 194). Body kept under Law 175: nhs-bedbugs at ~/pp-s68r8/sources,
// fetched 2026-09-09.
const SRC = {
  nhs: "https://www.nhs.uk/conditions/bedbugs/",
};

type ProductRecord = {
  anchorId: string;
  asin: string;
  rank: number;
  cardName: string;
  cardLabel: string;
  features: string[];
  tableCells: string[];
  h2Label: string;
  h2Name: string;
  tocLabel: string;
  tocName: string;
};

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated". "The strongest bed bug
// spray on the market" and "unparalleled" are the maker's own words and are not restated
// (S47-F); its coverage figure is carried as the maker's claim, which is what it is.
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B076KQQT8F",
    rank: 1,
    cardName: "Pest Expert Formula C+ Bed Bug Killer Spray 2 x 1L",
    cardLabel: "Best Overall",
    features: [
      "Two 1 litre bottles, as listed; ready to use, water-based",
      "The maker states three active ingredients including an insect growth regulator",
      "The maker states coverage of 50 square metres in a single application",
      "Listed as non-staining and low-odour, for application to bed frames and mattresses",
      "Target species listed as Bed Bugs; country of origin United Kingdom",
    ],
    tableCells: ["Pest Expert Formula C+ 2 x 1L", "Spray", "Three actives incl. an IGR, per the maker", "50 m² per application, per the maker"],
    h2Label: "Best Overall",
    h2Name: "Pest Expert Formula C+ Bed Bug Killer Spray 2 x 1L",
    tocLabel: "Best Overall",
    tocName: "Pest Expert Formula C+ Spray",
  },
  {
    anchorId: "best-powder",
    asin: "B010E2H2N6",
    rank: 2,
    cardName: "Pest Expert Formula P Bed Bug Killer Powder 300g",
    cardLabel: "Best Powder",
    features: [
      "300g powder, as listed",
      "Active listed as permethrin",
      "Listed for direct application to bed frames, carpets, mattresses and bedding",
      "The listing names areas around power points as a use case",
      "Target species listed as Bed Bug; country of origin United Kingdom",
    ],
    tableCells: ["Pest Expert Formula P 300g", "Powder", "Permethrin, as listed", "Coverage not stated"],
    h2Label: "Best Powder",
    h2Name: "Pest Expert Formula P Bed Bug Killer Powder 300g",
    tocLabel: "Best Powder",
    tocName: "Pest Expert Formula P Powder",
  },
  {
    anchorId: "best-prevention",
    asin: "B07ZHF4FVK",
    rank: 3,
    cardName: "Utopia Bedding Waterproof Mattress Encasement, Single 90 x 190 x 30 cm",
    cardLabel: "Best Prevention",
    features: [
      "Single size, listed at 90 x 190 x 30 cm, with a zip closing all six sides",
      "100% polyester with a TPU backing, as listed",
      "The maker describes the zip as protecting from even the tiniest of the bed bugs",
      "Listed as machine washable and tumble dryable",
      "No insecticide: this is a barrier, not a treatment",
    ],
    tableCells: ["Utopia Bedding encasement, single", "Encasement", "None — barrier only", "90 x 190 x 30 cm, as listed"],
    h2Label: "Best Prevention",
    h2Name: "Utopia Bedding Waterproof Mattress Encasement",
    tocLabel: "Best Prevention",
    tocName: "Utopia Bedding Encasement",
  },
];

// ONE FAQ ARRAY (Law 190). The visible block and the FAQPage schema both read it.
const faqs: { q: string; a: string }[] = [
  {
    q: "What do bed bug bites look like, and are they dangerous?",
    a: "This page does not describe symptoms or offer any assessment of them. The NHS states that bedbugs are small insects that often live on furniture or bedding, and that their bites can be itchy but do not usually cause other health problems. For anything about your own bites — including bites that stay painful, swollen or itchy, or swelling that spreads — the NHS page and a pharmacist or GP are the right places to go, not a product page.",
  },
  {
    q: "Can I get rid of bed bugs myself?",
    a: "The NHS is direct about this: if you think you have bedbugs you should contact your local council or pest control service, because it is very difficult to get rid of bedbugs yourself — they can be hard to find and may be resistant to some insecticides — and the things you can try yourself are unlikely to get rid of them completely. Everything on this page sits inside that framing rather than against it.",
  },
  {
    q: "What can I do without buying anything?",
    a: "The NHS lists washing affected bedding and clothing on a hot wash (60C) and tumble drying on a hot setting for at least 30 minutes; putting what cannot be washed into a plastic bag in the freezer for two to three weeks; and cleaning and vacuuming regularly. It also says not to keep clutter around the bed and not to bring secondhand furniture in without checking it.",
  },
  {
    q: "Does an encasement kill bed bugs?",
    a: "No, and its listing does not claim to. It is a zipped barrier over the mattress; the maker describes it as protecting from even the tiniest of the bed bugs. It changes where they can get to, which is a different job from the two insecticides above it.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const tocItems = [
  { id: "situation", title: "What the NHS Says to Do First" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Product Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Three Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestBedBugTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Bed Bug Treatments UK 2026: Sprays, Powders &amp; Encasements"
      subtitle="A spray, a powder and a mattress encasement, described by what their own listings state — beside the NHS position that getting rid of bedbugs yourself is very difficult"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Bed Bugs: Complete UK Guide", href: "/guides/how-to-get-rid-of-bed-bugs" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
        { title: "Best Bed Bug Mattress Encasement UK 2026", href: "/best/bed-bug-mattress-encasement" },
        { title: "Best Professional Bed Bug Steamers UK 2026", href: "/best/professional-bed-bug-steamers" },
        { title: "Best Commercial Insect Monitors UK 2026", href: "/best/commercial-insect-monitors" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
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
        Three products: a spray, a powder and a zipped mattress encasement. Two
        are insecticides and one is a barrier. Before any of them there is an
        NHS position on this particular pest that is worth reading, because it
        is more discouraging about self-treatment than most product pages will
        tell you.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have just found them and want to know what to do.</strong>{" "}
            The NHS answer is not a product —{" "}
            <a href="#situation" className="underline">
              what the NHS says to do first
            </a>
            .
          </li>
          <li>
            <strong>You are worried about bites on your skin.</strong> That is a
            question for a pharmacist or a GP; this page holds nothing clinical
            and says so at{" "}
            <a href="#situation" className="underline">
              the same section
            </a>
            .
          </li>
          <li>
            <strong>You have already treated once and they came back.</strong>{" "}
            The NHS notes resistance to some insecticides —{" "}
            <a href="#limits" className="underline">
              where a product does not work
            </a>
            .
          </li>
          <li>
            <strong>You want the widest coverage per bottle.</strong>{" "}
            <a href="#best-overall" className="underline">
              The 2 x 1L spray
            </a>{" "}
            is the only product here that states a coverage figure.
          </li>
          <li>
            <strong>You want to protect a mattress rather than treat one.</strong>{" "}
            <a href="#best-prevention" className="underline">
              The encasement
            </a>{" "}
            carries no insecticide at all.
          </li>
        </ul>
      </div>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            The NHS states that it is very difficult to get rid of bedbugs
            yourself, that they may be resistant to some insecticides, and that
            you should contact your local council or pest control service. Two
            products here are insecticides whose labels govern where they may be
            applied; read the label, and read the NHS page, before you start.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">What the NHS Says to Do First</h2>
      <p>
        The NHS describes the pest itself in one sentence:{" "}
        <em>
          &ldquo;Bedbugs are small insects that often live on furniture or
          bedding. Their bites can be itchy but do not usually cause other
          health problems.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). That is the whole of what this page says about what bed bugs do to a
        person. Anything about your own skin — bites that stay painful or
        swollen, or swelling that spreads — belongs with a pharmacist or a GP,
        and the NHS page linked here is where to read it.
      </p>
      <p>
        On what to do about the infestation, the NHS is equally direct:{" "}
        <em>
          &ldquo;If you think you have bedbugs, you should contact your local
          council or pest control service.&rdquo;
        </em>{" "}
        A page selling three products has an obvious interest in not leading
        with that sentence, which is exactly why it leads with it.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        Two of the three products here are insecticides — one naming three
        actives including a growth regulator, the other naming permethrin. Where
        each may be applied, at what rate, and on what surfaces is set by its
        own label, and a label instruction beats anything on this page.
      </p>
      <p>
        The encasement is not an insecticide and carries no such conditions. It
        is a zipped cover; what it can do is bounded by the zip and the fabric,
        which is a plainer promise than either spray or powder makes.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Product Does Not Work</h2>
      <p>
        <strong>Against a population that has seen the chemistry before.</strong>{" "}
        The NHS states it is{" "}
        <em>
          &ldquo;very difficult to get rid of bedbugs yourself because they can
          be hard to find and may be resistant to some insecticides.&rdquo;
        </em>{" "}
        (
        <a href={SRC.nhs} rel="nofollow">
          NHS
        </a>
        ). Resistance is a property of the population, not of the bottle.
      </p>
      <p>
        <strong>As a complete answer on their own.</strong> The same page:{" "}
        <em>
          &ldquo;There are some things you can try yourself, but these are
          unlikely to get rid of bedbugs completely.&rdquo;
        </em>{" "}
        Every product below is one of those things.
      </p>
      <p>
        <strong>Where you cannot reach.</strong> A spray treats what it touches
        and a powder sits where it is put. A bed bug behind a skirting board, in
        a bed frame joint or under a loose edge of wallpaper has not been
        treated, and the NHS's "hard to find" is describing precisely that.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether it treats or excludes</h3>
      <p>
        Two insecticides and one barrier. The encasement does not reduce a
        population; it changes what a mattress offers. Buying it instead of a
        treatment and expecting the same result is the most common way to be
        disappointed by it.
      </p>
      <h3>2. What the listing states about the active</h3>
      <p>
        The powder names permethrin. The spray's listing describes three actives
        including a growth regulator but does not name them in its detail rows,
        so the card says what the listing says and no more.
      </p>
      <h3>3. Coverage, where a figure exists</h3>
      <p>
        One product states one: 50 square metres per application, and that is
        the maker's own figure. The powder states no coverage at all and the
        table says so.
      </p>

      {products.map((p, i) => (
        <div key={p.asin}>
          <h2 id={p.anchorId}>
            {p.h2Label} &mdash; {p.h2Name}
          </h2>
          <div className="not-prose my-6">
            <ProductCard
              name={p.cardName}
              features={p.features}
              asin={p.asin}
              bestFor={p.cardLabel}
              rank={p.rank}
            />
          </div>
          <p>
            {
              [
                "Two litres of ready-to-use, water-based spray, listed as non-staining and low-odour and for application to bed frames and mattresses. Its maker states three actives including an insect growth regulator and a coverage of 50 square metres per application; both are its claims, and its stronger marketing language is not repeated here.",
                "A 300g powder naming permethrin, listed for direct application to bed frames, carpets, mattresses and bedding, and specifically for areas around power points where a liquid would not be appropriate. The listing states no coverage figure.",
                "A zipped single encasement at 90 x 190 x 30 cm in polyester with a TPU backing, machine washable, whose maker describes the zip as protecting from even the tiniest of the bed bugs. It carries no insecticide and makes no claim to kill anything.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Heat and cold, from the NHS's own list.</strong> It names
        washing affected bedding and clothing on a hot wash (60C) with 30
        minutes in a hot tumble dryer, and putting what cannot be washed into a
        plastic bag in the freezer for two to three weeks.
      </p>
      <p>
        <strong>Clutter and secondhand furniture.</strong> The NHS advises
        against keeping clutter around the bed and against bringing in
        secondhand furniture without checking it carefully first.
      </p>
      <p>
        <strong>The council or a professional.</strong> That is the NHS's first
        instruction, and our{" "}
        <a href="/guides/how-to-get-rid-of-bed-bugs">bed bug guide</a> covers
        what that process looks like.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Read the NHS page and the product label first.</strong> One
          tells you what the realistic outcome is; the other tells you what you
          may lawfully do with the bottle.
        </li>
        <li>
          <strong>Strip and launder before treating.</strong> The 60C wash and
          the hot tumble dry are the NHS's, and they do not compete with a
          treatment — they precede it.
        </li>
        <li>
          <strong>Treat the frame and the seams, not the room.</strong> Both
          insecticide listings describe bed frames and mattresses rather than
          open floor.
        </li>
        <li>
          <strong>Use the powder where liquid should not go.</strong> Its own
          listing names areas around power points.
        </li>
        <li>
          <strong>Encase last, and leave it on.</strong> A cover put on before
          the treatment has finished simply seals the problem in with the
          mattress.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Three Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        coverage figure attributed to the maker who claims it. Where a listing
        does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Coverage or size, as listed</th>
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

      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <FindProviderCTA
        heading="Bed bugs are the pest the NHS says to get help with"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
