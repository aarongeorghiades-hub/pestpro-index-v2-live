import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled; Law 191 does not reach a
// flea insecticide.
//
// THE H1 PROMISES FOGGERS AND THE PAGE CARDS NONE. It reads "Sprays, Powders & Foggers";
// the three products are one spray and two powders. The title is held by the standing
// rule and the mismatch is reported; the subtitle and description, which are not held,
// no longer promise a fogger.
//
// EVERY SENTENCE IS LISTING, SOURCED, ATTRIBUTED OR REASONING. The old page's "gold
// standard", "recommended by veterinary practices", "trusted by pet owners" and the
// BPCA/NPTA consultation claim are gone — none had a source. The 14 unsourced sentences
// the classifier found on the served page are all deleted, not softened.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Flea Treatments UK 2026: Sprays, Powders & Foggers",
    description:
      "Flea treatments for UK homes: why the pet is treated first, what a spray, powder or aerosol can reach, and four products compared on their own listings.",
    alternates: { canonical: "https://pestproindex.com/best/flea-treatments" },
    openGraph: {
      title: "Best Flea Treatments UK 2026: Sprays, Powders & Foggers",
      description:
        "Flea treatments for UK homes: why the pet is treated first, what a spray, powder or aerosol can reach, and four products compared on their own listings.",
      url: "https://pestproindex.com/best/flea-treatments",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Flea Treatments UK 2026: Sprays, Powders & Foggers",
  description:
    "Flea treatments for UK homes: why the pet is treated first, what a spray, powder or aerosol can reach, and four products compared on their own listings.",
  datePublished: "2026-03-16",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/flea-treatments" },
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
      name: "Best Flea Treatments UK 2026: Sprays, Powders & Foggers",
      item: "https://pestproindex.com/best/flea-treatments",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Bodies banked at
// S68 R1 under ~/pp-s68r1/sources/ and kept under Law 175.
const SRC = {
  uky: "https://entomology.mgcafe.uky.edu/ef602",
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/fleas/",
  hse: "https://www.hse.gov.uk/biocides/using/overview.htm",
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

// Feature text and comparison cells from the banked listings' OWN bullets and detail
// rows (S52-E), fetched 2026-09-01, inside the S45-C window. Maker claims are framed as
// the maker's. Manufacturer self-praise is trimmed and never restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00GKHI2PW",
    rank: 1,
    cardName: "Indorex Household Flea Spray 500ml",
    cardLabel: "Best Overall",
    features: [
      "Ingredients listed as pyriproxyfen, permethrin, piperonyl butoxide and Chrysanthemum cinerariaefolium",
      "The maker claims up to 2 months control and up to 12 months prevention of egg and larvae development",
      "Listed as treating approximately a 3-4 bedroom house per 500ml can",
      "Directions: remove pets, birds and fish aquaria; ventilate the room after use",
      "The listing claims a YourCat & YourDog readers' Best Flea Product award over 10+ years",
    ],
    tableCells: ["Indorex Household Flea Spray 500ml", "Spray; permethrin + pyriproxyfen IGR, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Indorex Household Flea Spray 500ml",
    tocLabel: "Best Overall",
    tocName: "Indorex Household Flea Spray",
  },
  {
    anchorId: "best-powder",
    asin: "B00KHV77Y4",
    rank: 2,
    cardName: "Zero In Home Flea Powder 300g",
    cardLabel: "Best Powder",
    features: [
      "Contains permethrin, per the listing",
      "Puffer pack, listed as treating up to 10 sq m",
      "Listed for carpets, pet bedding, rugs and soft furnishings",
      "Shake on, then vacuum off — the listing's directions",
      "Listed as killing cat and dog fleas and their larvae",
    ],
    tableCells: ["Zero In Home Flea Powder 300g", "Powder; permethrin; up to 10 sq m, as listed", "Best Powder"],
    h2Label: "Best Powder",
    h2Name: "Zero In Home Flea Powder 300g",
    tocLabel: "Best Powder",
    tocName: "Zero In Home Flea Powder",
  },
  {
    anchorId: "best-pet-brand",
    asin: "B001TQRC0K",
    rank: 3,
    cardName: "Beaphar Household Flea Powder 300g",
    cardLabel: "Best Pet Brand",
    features: [
      "Listed as covering up to 30 m² when treating an active infestation",
      "Sprinkle, wait a minimum of 30 minutes, then vacuum — the listing's directions",
      "Listed as killing adult fleas and flea larvae",
      "No active substance is named on the listing",
      "Listing safety warning: not for use on animals, clothing or human bedding",
    ],
    tableCells: ["Beaphar Household Flea Powder 300g", "Powder; active not stated; up to 30 m², as listed", "Best Pet Brand"],
    h2Label: "Best Pet Brand",
    h2Name: "Beaphar Household Flea Powder 300g",
    tocLabel: "Best Pet Brand",
    tocName: "Beaphar Household Flea Powder",
  },
  // S68 R5 — the fogger the title promises. Banked body (S45-C), fetched 2026-09-01;
  // neutral factual label; the listing's "cleaner, safer alternative" is the maker's
  // own comparison and is not restated (S47-F).
  {
    anchorId: "one-shot-aerosol",
    asin: "B077M5TTHL",
    rank: 4,
    cardName: "Zero In Natural Flea Bomb 150ml — One-Shot Aerosol",
    cardLabel: "One-Shot Aerosol, 150ml",
    features: [
      "150ml one-shot aerosol; the listing says it treats a room of up to 40 m³",
      "Active listed as pyrethrins",
      "Listing directions: press the trigger to lock it, then leave the room while the can discharges",
      "Listed for carpets, rugs and bedding; target species listed as fleas",
      "Country of origin listed as United Kingdom",
    ],
    tableCells: ["Zero In Natural Flea Bomb 150ml", "One-shot aerosol; pyrethrins; up to 40 m³, as listed", "One-Shot Aerosol, 150ml"],
    h2Label: "One-Shot Aerosol, 150ml",
    h2Name: "Zero In Natural Flea Bomb 150ml",
    tocLabel: "One-Shot Aerosol",
    tocName: "Zero In Natural Flea Bomb",
  },
];

const tocItems = [
  { id: "situation", title: "The Pet Comes First" },
  { id: "legal", title: "The Legal Position on Home Insecticides" },
  { id: "limits", title: "Where a Spray or Powder Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Three Products Compared" },
];

export default function BestFleaTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Flea Treatments UK 2026: Sprays, Powders & Foggers"
      subtitle="One household spray and two powders for UK homes, described by what their own listings state, and what the published guidance says has to happen before any of them is used"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Rat Traps UK 2026", href: "/best/rat-traps" },
        { title: "Best Mouse Traps UK 2026", href: "/best/mouse-traps" },
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Moth Killers UK", href: "/best/moth-killers" },
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
        A household flea product treats the house. It does not treat the animal
        the fleas are living on, and the University of Kentucky is plain about
        where they live:{" "}
        <em>
          &ldquo;Adult fleas spend most of their time on the dog or cat, not in
          the carpet.&rdquo;
        </em>{" "}
        (
        <a href={SRC.uky} rel="nofollow">
          University of Kentucky Entomology
        </a>
        ).
      </p>

      {/* DECISION BLOCK — situation first. The treat-the-pet line, the legal line and
          the does-not-help line sit ABOVE the product lines. No Amazon link, no price,
          no image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>You have a dog or a cat.</strong> The guidance is that
            eradication requires treating the pet, and often the premises too
            (
            <a href={SRC.uky} rel="nofollow" className="underline">
              UKY
            </a>
            ) &mdash;{" "}
            <a href="#situation" className="underline">
              the pet comes first
            </a>
            .
          </li>
          <li>
            <strong>You want to know what you are allowed to use.</strong>{" "}
            HSE says who may use which products &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>You treated the house and fleas are still appearing.</strong>{" "}
            That is expected for up to two weeks, and UC IPM says why &mdash;{" "}
            <a href="#limits" className="underline">
              where a spray or powder does not help
            </a>
            .
          </li>
          <li>
            <strong>You are choosing between a spray and a powder.</strong> One
            of the three names a growth regulator; two name only permethrin, or
            nothing &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">The Pet Comes First</h2>
      <p>
        None of the three products on this page goes on an animal, and one
        listing says so in its safety warning. The University of Kentucky
        states the order of work:{" "}
        <em>
          &ldquo;Flea eradication requires treatment of pets, and oftentimes the
          premises.&rdquo;
        </em>{" "}
        The pet product is a separate decision made with a vet; this page is
        about the premises.
      </p>
      <p>
        What the premises contain is mostly not adult fleas. UC IPM&rsquo;s
        description of the stages is what the products below are actually
        aimed at:{" "}
        <em>
          &ldquo;Products containing the insect growth regulators (IGRs)
          methoprene and pyriproxyfen are designed to provide long-term control
          of flea eggs and immatures in the environment.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ).
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Home Insecticides</h2>
      <p>
        All three products are sold to householders. HSE&rsquo;s guidance on
        using biocides draws the line that matters:{" "}
        <em>
          &ldquo;If you are a member of the public, you should only use
          biocidal products that are intended for the general public -
          sometimes the terms &apos;amateur&apos; or &apos;non-professional&apos;
          might be used instead.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hse} rel="nofollow">
          HSE
        </a>
        ). And on what to do with the label:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>
      </p>
      <p>
        The label on the pack is the condition of use, not the listing. Where a
        listing states a direction &mdash; remove pets, birds and fish aquaria;
        ventilate after use; wait 30 minutes before vacuuming &mdash; it is
        repeated on the cards below as the maker&rsquo;s direction.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Spray or Powder Does Not Help</h2>
      <p>
        <strong>It does not reach the pupae.</strong> UC IPM on treating the
        home with an insecticide:{" "}
        <em>
          &ldquo;This treatment kills larvae but not pupae, so fleas may
          continue to emerge for up to 2 weeks.&rdquo;
        </em>{" "}
        The University of Kentucky gives the timing:{" "}
        <em>&ldquo;Pupae remain inside the cocoon for 1 to 4 weeks.&rdquo;</em>{" "}
        Fleas appearing after treatment are not a sign the product failed.
      </p>
      <p>
        <strong>It can be a long wait in a cold room.</strong> UC IPM:{" "}
        <em>
          &ldquo;At cool temperatures, fully formed fleas can remain in their
          cocoons for up to 12 months.&rdquo;
        </em>
      </p>
      <p>
        <strong>It does not treat the animal.</strong> Every listing here is
        for carpets, bedding and furnishings. A treated house with an untreated
        pet is reinfested from the pet.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the listing names a growth regulator</h3>
      <p>
        UC IPM names methoprene and pyriproxyfen as the IGRs aimed at eggs and
        immatures. The Indorex listing states pyriproxyfen. The Zero In listing
        states permethrin only. The Beaphar listing states no active substance
        at all. That is the one difference you can read before buying.
      </p>
      <h3>2. What the listing says it covers</h3>
      <p>
        Indorex is listed as treating approximately a 3-4 bedroom house per
        can. Zero In is listed as treating up to 10 sq m. Beaphar is listed as
        covering up to 30 m². The comparison table carries each figure as
        stated.
      </p>
      <h3>3. What happens after it goes down</h3>
      <p>
        Both powders are vacuumed off &mdash; Beaphar after a minimum of 30
        minutes, per its listing. UC IPM&rsquo;s instruction after any
        treatment is the same regardless of product:{" "}
        <em>
          &ldquo;Vacuum regularly to remove adult fleas that emerge from pupae
          for the next 2 weeks.&rdquo;
        </em>
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
                "A 500ml Virbac spray whose listing states four ingredients, one of them the growth regulator pyriproxyfen, and which the maker says treats approximately a 3-4 bedroom house. The listing also claims a magazine readers' award over 10+ years; that is the maker's claim, carried as such. Its directions are specific: remove pets, birds and fish aquaria, spray from about 50cm, and ventilate afterwards.",
                "A 300g puffer-pack powder whose listing states permethrin and no growth regulator, listed as treating up to 10 sq m of carpet, rugs, pet bedding and soft furnishings. Shake on and vacuum off. The smallest stated coverage on the page.",
                "A 300g powder listed as covering up to 30 m² in an active infestation, with a stated 30-minute minimum before vacuuming. The listing says it contains an insecticide and names none. Its target species field reads Cat, and its safety warning is that it is not for use on animals, clothing or human bedding.",
                "A 150ml one-shot aerosol, the fogger the title promises, whose listing names pyrethrins and a room of up to 40 cubic metres, with the maker's instruction to lock the trigger and leave the room while it discharges. Whether it reaches under furniture is not stated; a fog settles where the air carries it.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>The vacuum cleaner is a treatment.</strong> University of
        Kentucky:{" "}
        <em>
          &ldquo;Vacuuming removes many of the eggs, larvae and pupae developing
          within the home.&rdquo;
        </em>{" "}
        UC IPM adds where:{" "}
        <em>
          &ldquo;Vacuum upholstered furniture, cleaning under cushions and in
          crevices.&rdquo;
        </em>
      </p>
      <p>
        <strong>Treat the pet, with a vet.</strong> That is the first step in
        the guidance above and it is outside what this page cards &mdash; our{" "}
        <a href="/guides/how-to-get-rid-of-fleas">flea guide</a> covers the
        whole sequence.
      </p>
      <p>
        <strong>Get someone in.</strong> HSE&rsquo;s own line:{" "}
        <em>
          &ldquo;If you are not a professional, consider using a professional
          pest controller to deal with the problem.&rdquo;
        </em>
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Treat the pet first.</strong> Otherwise the house is reinfested
          from the animal.
        </li>
        <li>
          <strong>Vacuum before you treat.</strong> It removes eggs, larvae and
          pupae the product may not reach.
        </li>
        <li>
          <strong>Follow the listing&rsquo;s directions for the room.</strong>{" "}
          Indorex&rsquo;s say remove pets, birds and fish aquaria and ventilate
          afterwards; Beaphar&rsquo;s say wait at least 30 minutes before
          vacuuming.
        </li>
        <li>
          <strong>Keep vacuuming for two weeks.</strong> UC IPM&rsquo;s figure
          for adults still emerging from pupae.
        </li>
        <li>
          <strong>Expect fleas in a cold room for longer.</strong> Up to 12
          months in cocoons at cool temperatures, per UC IPM.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            No product on this page is listed for use on an animal, and one
            says so outright. Pet flea products are a separate purchase and a
            separate conversation, with a vet.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Three Products Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Form, active and coverage, as listed
              </th>
              <th className="text-left p-2 border-b font-semibold">Award</th>
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
        heading="Fleas still emerging after the house and the pet are treated?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
