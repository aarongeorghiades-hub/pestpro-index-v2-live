import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R1 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// THE PROTECTED STRING "10-time Best Flea Product award winner" IS GONE, UNDER LAW 193.
// Proved before the edit: zero occurrences in scripts/, occurrences only on this page,
// on /best/flea-fogger and in CLAUDE.md's own list. No machinery depends on it, so it
// fell to the claim rules — and the LISTING does not say "10-time". It says the product
// was voted Best Flea Product (Home) by magazine readers "for 10+ years". The card now
// carries the listing's own framing, as the maker's claim, and the numeral is corrected.
//
// THE FAQ BLOCK AND ITS FAQPage SCHEMA ARE REMOVED TOGETHER (Law 190). The scan showed
// them divergent; the body now answers what they answered, from a source.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Flea Spray for Home UK 2026: Five Sprays Compared",
    description:
      "Five household flea sprays compared on their own listings — which name an insect growth regulator, what each says it covers, and why the pet is treated first.",
    alternates: { canonical: "https://pestproindex.com/best/flea-spray-for-home" },
    openGraph: {
      title: "Best Flea Spray for Home UK 2026: Five Sprays Compared",
      description:
        "Five household flea sprays compared on their own listings — which name an insect growth regulator, what each says it covers, and why the pet is treated first.",
      url: "https://pestproindex.com/best/flea-spray-for-home",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Flea Spray for Home UK 2026: Five Sprays Compared",
  description:
    "Five household flea sprays compared on their own listings — which name an insect growth regulator, what each says it covers, and why the pet is treated first.",
  datePublished: "2026-03-30",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/flea-spray-for-home" },
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
      name: "Best Flea Spray for Home UK 2026: Five Sprays Compared",
      item: "https://pestproindex.com/best/flea-spray-for-home",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Banked at S68 R1 under
// ~/pp-s68r1/sources/ (Law 175).
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
// rows (S52-E), fetched 2026-09-01. Maker claims are framed as the maker's; self-praise
// ("the strongest flea spray on the market") is trimmed and never restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B00GKHI2PW",
    rank: 1,
    cardName: "Indorex Defence Flea Spray 500ml",
    cardLabel: "Best Overall",
    features: [
      "Ingredients listed as pyriproxyfen, permethrin, piperonyl butoxide and Chrysanthemum cinerariaefolium",
      "The maker claims up to 2 months control and up to 12 months prevention of egg and larvae development",
      "Listed as treating approximately a 3-4 bedroom house per 500ml can",
      "Directions: remove pets, birds and fish aquaria; spray from about 50cm; ventilate after use",
      "The listing claims a YourCat & YourDog readers' Best Flea Product award over 10+ years",
    ],
    tableCells: ["Indorex Defence 500ml", "Permethrin + pyriproxyfen IGR; approx. 3-4 bedroom house, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Indorex Defence Flea Spray 500ml",
    tocLabel: "Best Overall",
    tocName: "Indorex Defence 500ml",
  },
  {
    anchorId: "best-twin",
    asin: "B07D19P8S2",
    rank: 2,
    cardName: "Indorex Defence Flea Spray 2x500ml Twin Pack",
    cardLabel: "Best Twin Pack",
    features: [
      "Listed as 2 x 500ml — unit count 2",
      "Same listed ingredients as the single can: pyriproxyfen, permethrin, piperonyl butoxide, Chrysanthemum cinerariaefolium",
      "Each can listed as treating approximately a 3-4 bedroom house",
      "Same listed directions: remove pets, birds and fish aquaria; ventilate after use",
    ],
    tableCells: ["Indorex Defence 2 x 500ml", "As above, two cans", "Best Twin Pack"],
    h2Label: "Best Twin Pack",
    h2Name: "Indorex Defence Flea Spray 2x500ml",
    tocLabel: "Best Twin Pack",
    tocName: "Indorex Defence 2x500ml",
  },
  {
    anchorId: "best-professional",
    asin: "B09GYGC5FL",
    rank: 3,
    cardName: "Pest Expert Formula C+ Flea Killer Spray 1L",
    cardLabel: "Best Professional-Grade",
    features: [
      "Title states \"Approved for Amateur Use\"",
      "The maker states three active ingredients, one of them the growth regulator pyriproxyfen",
      "Listed as covering 50 square metres per application; 1 litre",
      "The maker claims a residue that continues to protect for up to 12 weeks",
      "Listed as water-based and virtually odourless; keep children and pets out until dry, approx. 2-3 hours",
    ],
    tableCells: ["Pest Expert Formula C+ 1L", "Three actives incl. pyriproxyfen; 50 m², as listed", "Best Professional-Grade"],
    h2Label: "Best Professional",
    h2Name: "Pest Expert Formula C+ Flea Killer Spray 1L",
    tocLabel: "Best Professional",
    tocName: "Pest Expert Formula C+ 1L",
  },
  {
    anchorId: "best-fast",
    asin: "B001MIXHMM",
    rank: 4,
    cardName: "RIP Fleas Extra Household Flea Spray",
    cardLabel: "Best Fast-Acting",
    features: [
      "Fetched title: R.I.P Fleas Household Flea Spray; unit count 600 millilitres",
      "Target species listed as Insect, Flea, Fleas, Mites",
      "The maker claims 12 months efficacy against flea larvae and house dust mites",
      "No active substance is named on the listing",
    ],
    tableCells: ["R.I.P Fleas Household Flea Spray", "Active not stated; 600ml, as listed", "Best Fast-Acting"],
    h2Label: "Best Fast-Acting",
    h2Name: "RIP Fleas Extra Household Flea Spray",
    tocLabel: "Best Fast-Acting",
    tocName: "RIP Fleas Extra Household Flea Spray",
  },
  {
    anchorId: "best-value",
    asin: "B0CMPY8ZXP",
    rank: 5,
    cardName: "Bob Martin Clear Plus Flea Spray 500ml Twin Pack",
    cardLabel: "Best Value",
    features: [
      "Ingredients listed as permethrin 0.5%, tetramethrin 0.1% and S-methoprene 0.05%",
      "Listed as 500ml, pack of 2 — unit count 1,000 millilitres",
      "The maker claims up to 3 months against adult fleas and up to 12 months against eggs and larvae",
      "Directions: spray from 30cm; listed for carpets, rugs and pet bedding",
      "Target species listed as Flea",
    ],
    tableCells: ["Bob Martin Clear Plus 2 x 500ml", "Permethrin + tetramethrin + S-methoprene IGR, as listed", "Best Value"],
    h2Label: "Best Value",
    h2Name: "Bob Martin Clear Plus Flea Spray 500ml Twin Pack",
    tocLabel: "Best Value",
    tocName: "Bob Martin Clear Plus Flea Spray 500ml Twin Pack",
  },
];

const tocItems = [
  { id: "situation", title: "The Pet Comes First" },
  { id: "legal", title: "The Legal Position on Home Insecticides" },
  { id: "limits", title: "Where a Spray Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Spray Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Five Sprays Compared" },
];

export default function BestFleaSprayForHomePage() {
  return (
    <GuideLayout
      title="Best Flea Spray for Home UK 2026: Five Sprays Compared"
      subtitle="Five household flea sprays for UK homes, described by what their own listings state — which name a growth regulator, what each says it covers, and what the guidance says a spray cannot do"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Flea Fogger UK 2026", href: "/best/flea-fogger" },
        { title: "Best Bed Bug Spray UK 2026", href: "/best/bed-bug-spray" },
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      {/* Affiliate disclosure */}
      <div className="not-prose mb-8 rounded-xl border border-[var(--color-ochre-edge)] bg-[var(--color-ochre-wash)] p-4">
        <p className="text-sm text-[var(--color-ochre-deep)]">
          <strong>Affiliate disclosure:</strong> PestPro Index is
          reader-supported. When you buy through links on this page, we may earn
          a small commission at no extra cost to you. This helps us keep the
          site running and free for everyone. As an Amazon Associate, PestPro
          Index earns from qualifying purchases.
        </p>
      </div>

      <p>
        A household flea spray treats carpets, bedding and furniture. The
        University of Kentucky is specific about where the biting stage is:{" "}
        <em>
          &ldquo;Adult fleas spend most of their time on the dog or cat, not in
          the carpet.&rdquo;
        </em>{" "}
        (
        <a href={SRC.uky} rel="nofollow">
          University of Kentucky Entomology
        </a>
        ). What the spray is for is everything else.
      </p>

      {/* DECISION BLOCK — situation first. The legal line and the does-not-help line
          sit ABOVE the product lines. No Amazon link, no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have a dog or a cat.</strong> The guidance is that
            eradication requires treating the pet, and often the premises (
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
            HSE separates general-public products from professional ones &mdash;{" "}
            <a href="#legal" className="underline">
              the legal position
            </a>
            .
          </li>
          <li>
            <strong>You sprayed and fleas are still appearing.</strong> UC IPM
            says that is expected for up to two weeks &mdash;{" "}
            <a href="#limits" className="underline">
              where a spray does not help
            </a>
            .
          </li>
          <li>
            <strong>You want the one that names a growth regulator.</strong>{" "}
            Three of the five do &mdash;{" "}
            <a href="#compared" className="underline">
              the comparison table
            </a>{" "}
            states which.
          </li>
        </DecisionBox>

      {/* [0] Situation */}
      <h2 id="situation">The Pet Comes First</h2>
      <p>
        No spray on this page is listed for use on an animal. The University of
        Kentucky puts the order plainly:{" "}
        <em>
          &ldquo;Flea eradication requires treatment of pets, and oftentimes the
          premises.&rdquo;
        </em>{" "}
        The premises is what these five treat.
      </p>
      <p>
        What they treat it for is the part of the infestation that is not an
        adult. UC IPM:{" "}
        <em>
          &ldquo;Products containing the insect growth regulators (IGRs)
          methoprene and pyriproxyfen are designed to provide long-term control
          of flea eggs and immatures in the environment.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). Which listings name one is the first criterion below.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">The Legal Position on Home Insecticides</h2>
      <p>
        HSE&rsquo;s guidance on using biocides:{" "}
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
        ). One listing here carries that status in its own title &mdash; the
        Pest Expert spray&rsquo;s reads Approved for Amateur Use. The others
        are sold on the same shelf; the label on the can is what states it.
      </p>
      <p>
        HSE also says what the label is for:{" "}
        <em>
          &ldquo;Following the label instructions carefully should be enough to
          allow the product to be used safely and effectively.&rdquo;
        </em>{" "}
        Directions that appear on a listing &mdash; remove pets, birds and fish
        aquaria; spray from 30cm or 50cm; keep children and pets out until dry
        &mdash; are repeated on the cards as the maker&rsquo;s directions.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Spray Does Not Help</h2>
      <p>
        <strong>It does not kill pupae.</strong> UC IPM on insecticide treatment
        of the home:{" "}
        <em>
          &ldquo;This treatment kills larvae but not pupae, so fleas may
          continue to emerge for up to 2 weeks.&rdquo;
        </em>{" "}
        The University of Kentucky gives the window:{" "}
        <em>&ldquo;Pupae remain inside the cocoon for 1 to 4 weeks.&rdquo;</em>
      </p>
      <p>
        <strong>It does not reach a cold room quickly.</strong> UC IPM:{" "}
        <em>
          &ldquo;At cool temperatures, fully formed fleas can remain in their
          cocoons for up to 12 months.&rdquo;
        </em>
      </p>
      <p>
        <strong>It does not treat the animal.</strong> A treated house with an
        untreated pet is reinfested from the pet, which is why the pet comes
        first above.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether the listing names a growth regulator</h3>
      <p>
        Three of the five do: both Indorex listings state pyriproxyfen, the
        Pest Expert listing states pyriproxyfen among three actives, and the
        Bob Martin listing states S-methoprene. The R.I.P listing names no
        active substance at all. UC IPM names methoprene and pyriproxyfen as the
        two IGRs used for this purpose.
      </p>
      <h3>2. What the listing says it covers</h3>
      <p>
        Indorex: approximately a 3-4 bedroom house per can. Pest Expert: 50
        square metres per litre. Bob Martin and R.I.P state a volume but no
        area. The table carries each as stated.
      </p>
      <h3>3. What the listing says to do with pets and people</h3>
      <p>
        Indorex&rsquo;s directions remove pets, birds and fish aquaria before
        spraying and ventilate afterwards. Pest Expert&rsquo;s keep children and
        pets out until surfaces are dry, which the listing puts at 2-3 hours.
        These are conditions of use, and they differ.
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
                "A 500ml Virbac spray whose listing states four ingredients including the growth regulator pyriproxyfen, and which the maker says treats approximately a 3-4 bedroom house. The listing also claims a magazine readers' award over 10+ years; that is the maker's claim and is carried as such. Directions on the listing: remove pets, birds and fish aquaria, spray from about 50cm, ventilate afterwards.",
                "The same product, listed as two 500ml cans with a unit count of 2. Every stated ingredient, coverage figure and direction is the same as the single can; what differs is having a second can for a second pass, which the listing does not itself recommend.",
                "A 1-litre water-based spray whose title states amateur approval and whose listing names three actives including pyriproxyfen, with a stated coverage of 50 square metres and a maker's claim of up to 12 weeks of residue. The listing says keep children and pets out of the treated area until dry, approximately 2-3 hours. Its comparative claims about the market are not repeated here.",
                "Listed as R.I.P Fleas Household Flea Spray at 600 millilitres, with a target species field reading Insect, Flea, Fleas, Mites. The maker claims 12 months of efficacy against larvae and house dust mites. No active substance is named anywhere on the listing, so what is in it is on the can and not on the page you buy from.",
                "Two 500ml cans listed with permethrin, tetramethrin and the growth regulator S-methoprene at stated percentages, for carpets, rugs and pet bedding, sprayed from 30cm. The maker claims up to 3 months against adults and up to 12 months against eggs and larvae. The listing's own statistic about where infestations live is the maker's and is not repeated here.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Spray Is Not the Answer</h2>
      <p>
        <strong>Vacuum.</strong> University of Kentucky:{" "}
        <em>
          &ldquo;Vacuuming removes many of the eggs, larvae and pupae developing
          within the home.&rdquo;
        </em>{" "}
        UC IPM:{" "}
        <em>
          &ldquo;Vacuum upholstered furniture, cleaning under cushions and in
          crevices.&rdquo;
        </em>
      </p>
      <p>
        <strong>Treat the pet, with a vet.</strong> Outside what this page
        cards; our <a href="/guides/how-to-get-rid-of-fleas">flea guide</a>{" "}
        covers the full sequence.
      </p>
      <p>
        <strong>Get a professional in.</strong> HSE:{" "}
        <em>
          &ldquo;If you are not a professional, consider using a professional
          pest controller to deal with the problem.&rdquo;
        </em>
      </p>

      {/* [15] Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Treat the pet first.</strong>
        </li>
        <li>
          <strong>Vacuum before spraying,</strong> including under cushions and
          in crevices.
        </li>
        <li>
          <strong>Follow the listing&rsquo;s own directions for the room.</strong>{" "}
          They differ between products and they are conditions of use.
        </li>
        <li>
          <strong>Keep vacuuming for two weeks.</strong> UC IPM:{" "}
          <em>
            &ldquo;Vacuum regularly to remove adult fleas that emerge from pupae
            for the next 2 weeks.&rdquo;
          </em>
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="info">
          <p>
            Fleas seen in the fortnight after treatment are adults emerging
            from pupae the spray could not reach. That is the guidance above,
            not a product failing.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Five Sprays Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">
                Actives and coverage, as listed
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
        heading="Still seeing fleas after the pet and the house are treated?"
        subtext="Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
