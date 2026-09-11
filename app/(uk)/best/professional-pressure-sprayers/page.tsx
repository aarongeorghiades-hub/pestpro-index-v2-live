import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award
// labels, rank numerals, anchor ids and card order are UNCHANGED. The h2s carried a
// product name and no award (h2Text); under Law 189 each h2 now gains the award its
// card already shows, in this route's layout — rank numeral and product name first,
// award after the dash. Card NAMES follow the fetched titles (S50-H): "European Made"
// is not on the Matabi listing and is gone; the Solo 425 is listed as 4-gallon, not
// 15L, and its name now says so while its award label is unchanged.
//
// THE DESCRIPTION IS REWRITTEN. It said "for landlords & pest prevention"; what
// decides who may spray is HSE's certificate rule, which the page now carries.
//
// THE FAQ IS REMOVED, BLOCK AND SCHEMA TOGETHER (Law 190). Its questions — who may
// spray, what can be treated, PPE — are answered at #legal, #limits and #using.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Professional Pressure Sprayers UK 2026",
    description:
      "Knapsack sprayers for pesticide application: who may spray under HSE's certificate rules, and five compared on tank, pump and pressure as listed.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-pressure-sprayers",
    },
    openGraph: {
      title: "Best Professional Pressure Sprayers UK 2026",
      description:
        "Knapsack sprayers for pesticide application: who may spray under HSE's certificate rules, and five compared on tank, pump and pressure as listed.",
      url: "https://pestproindex.com/best/professional-pressure-sprayers",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Professional Pressure Sprayers UK 2026",
  description:
    "Knapsack sprayers for pesticide application: who may spray under HSE's certificate rules, and five compared on tank, pump and pressure as listed.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-pressure-sprayers",
  },
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
      name: "Professional Pressure Sprayers",
      item: "https://pestproindex.com/best/professional-pressure-sprayers",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Bodies kept under Law 175: hse-sprayer and
// hse-pesticides at ~/pp-s68r3/sources (fetched 2026-09-07); hse-biocides-using at
// ~/pp-s68r1/sources.
const SRC = {
  hseSprayer: "https://www.hse.gov.uk/treework/areyou/sprayer.htm",
  hsePesticides: "https://www.hse.gov.uk/agriculture/topics/pesticides.htm",
  hseBiocides: "https://www.hse.gov.uk/biocides/using/overview.htm",
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
// S50-H); a cell the listing does not state reads "not stated".
//
// TWO LISTINGS DISAGREE WITH THEMSELVES AND BOTH ARE RENDERED (Law 146). The Solo 473D
// title says 10 litre; its feature text says 12 litre and 4 bar. The Matabi title says
// 12L; its detail table says 16 L. Neither is resolved here.
//
// GONE, BY NAME: "the professional default for pest control", "industry standard for
// residual insecticide application", "preferred by grounds and facilities teams",
// "chemical-resistant seals" on the Matabi, and "Piston" on the Oregon, whose listing
// does not state a pump type.
const products: ProductRecord[] = [
  {
    anchorId: "solo-473d",
    asin: "B00ESW2YDM",
    rank: 1,
    cardName: "Solo 473D Classic Backpack Sprayer — 10 Litre, Diaphragm Pump",
    cardLabel: "Best Overall",
    features: [
      "Capacity stated two ways on the listing: 10 litre in the title, 12 litre in the feature text",
      "Diaphragm (membrane) pump, as listed",
      "Maximum spraying pressure listed as 4 bar, with a pressure gauge",
      "50 cm spray tube, as listed",
      "Empty weight listed as 3.9 kg",
    ],
    tableCells: ["Solo 473D Classic", "10 litre (title) / 12 litre (text)", "diaphragm, 4 bar", "Best Overall"],
    h2Label: "#1 Solo 473D Classic Backpack Sprayer",
    h2Name: "Best Overall",
    tocLabel: "#1 Solo 473D Classic",
    tocName: "Best Overall",
  },
  {
    anchorId: "solo-90psi",
    asin: "B00KBTAAF0",
    rank: 2,
    cardName: "Solo 10L 90psi Diaphragm Pump Backpack Sprayer",
    cardLabel: "Best Professional-Grade",
    features: [
      "10 litre, as listed",
      "Diaphragm pump, as listed",
      "Maximum working pressure listed as 4 bar / 90 psi",
      "50 cm lance, as listed",
      "Listed at 4.2 kilograms; container listed as UV-resistant plastic",
    ],
    tableCells: ["Solo 10L 90psi", "10 litre", "diaphragm, 4 bar / 90 psi", "Best Professional-Grade"],
    h2Label: "#2 Solo 10L 90psi Diaphragm Pump Backpack Sprayer",
    h2Name: "Best Professional-Grade",
    tocLabel: "#2 Solo 10L 90psi",
    tocName: "Best Professional-Grade",
  },
  {
    anchorId: "solo-425",
    asin: "B00002N6BW",
    rank: 3,
    cardName: "Solo 425 4-Gallon Professional Piston Backpack Sprayer",
    cardLabel: "Best 15L Backpack",
    features: [
      "Capacity listed as 4 gallons; the listing gives no figure in litres",
      "Piston pump with a pressure range up to 90 psi, as listed",
      "Four nozzles listed: adjustable, fan, hollow cone and jet stream",
      "20-inch wand and 48-inch hose, as listed; Viton seals",
      "Listed at 4.49 kg; made in the USA, as listed",
    ],
    tableCells: ["Solo 425", "4 gallon (no litre figure listed)", "piston, up to 90 psi", "Best 15L Backpack"],
    h2Label: "#3 Solo 425 4-Gallon Professional Piston Backpack Sprayer",
    h2Name: "Best 15L Backpack",
    tocLabel: "#3 Solo 425 Professional",
    tocName: "Best 15L Backpack",
  },
  {
    anchorId: "matabi",
    asin: "B0001P0GHG",
    rank: 4,
    cardName: "Matabi Super Green 12 Garden Sprayer 12L",
    cardLabel: "Best Budget",
    features: [
      "Capacity stated two ways on the listing: 12 litre in the title and text, 16 L in the detail table",
      "3-position pressure regulator, as listed",
      "Fibreglass lance and four nozzles, as listed",
      "Padded, adjustable straps and a lateral liquid indicator, as listed",
      "Listed at 3.2 kilograms; pump type not stated",
    ],
    tableCells: ["Matabi Super Green 12", "12 litre (title) / 16 L (table)", "not stated; 3-position regulator", "Best Budget"],
    h2Label: "#4 Matabi Super Green 12 Garden Sprayer",
    h2Name: "Best Budget",
    tocLabel: "#4 Matabi Super Green 12",
    tocName: "Best Budget",
  },
  {
    anchorId: "oregon",
    asin: "B0D6YPYFRX",
    rank: 5,
    cardName: "Oregon Backpack Sprayer, 20 Litre",
    cardLabel: "Best 20L Backpack",
    features: [
      "20 litre tank, as listed",
      "Lance and hose of about 2 metres, four nozzles, as listed",
      "Spare seal kit listed as included",
      "Listed for pesticide, lawn feed, weed and moss killer",
      "Listed at 3.93 kilograms; pump type and pressure not stated",
    ],
    tableCells: ["Oregon 20L", "20 litre", "not stated", "Best 20L Backpack"],
    h2Label: "#5 Oregon Backpack Sprayer, 20 Litre",
    h2Name: "Best 20L Backpack",
    tocLabel: "#5 Oregon 20L",
    tocName: "Best 20L Backpack",
  },
];

const tocItems = [
  { id: "situation", title: "Is a Knapsack the Right Tool?" },
  { id: "legal", title: "Who May Spray" },
  { id: "limits", title: "Where a Sprayer Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Sprayer Is Not the Answer" },
  { id: "using", title: "Using One" },
  { id: "compared", title: "Sprayers Compared" },
];

export default function BestProfessionalPressureSprayersPage() {
  return (
    <GuideLayout
      title="Best Professional Pressure Sprayers for Pest Control Applications (2026)"
      subtitle="Knapsack and backpack sprayers for applying pesticide — five compared on tank, pump and pressure as their listings state them, with HSE's rule on who may do the spraying"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Rats", href: "/guides/how-to-get-rid-of-rats" },
        { title: "How to Get Rid of Ants", href: "/guides/how-to-get-rid-of-ants" },
        { title: "Landlord Pest Control Guide", href: "/guides/landlord-pest-control" },
        {
          title: "Professional vs DIY Pest Control",
          href: "/guides/professional-pest-control-vs-diy",
        },
      ]}
      relatedProducts={[
        { title: "Best Rat Poison UK 2026", href: "/best/rat-poison" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Flea Spray for Home", href: "/best/flea-spray-for-home" },
        { title: "Best Cockroach Killers UK 2026", href: "/best/cockroach-killers" },
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
        A knapsack sprayer is a tank, a pump and a lance. It is sold freely and
        does nothing on its own. What goes in it is where the law sits, and two
        of the five listings here cannot agree with themselves on how much it
        holds.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You will be spraying for someone else, or were born after 1964.</strong>{" "}
            HSE&rsquo;s certificate rule for pesticides —{" "}
            <a href="#legal" className="underline">
              who may spray
            </a>
            .
          </li>
          <li>
            <strong>You have a product marked for professional use.</strong>{" "}
            HSE says the general public must not use it, in any sprayer —{" "}
            <a href="#legal" className="underline">
              who may spray
            </a>
            .
          </li>
          <li>
            <strong>You are treating one room or one nest.</strong> A 10 to 20
            litre tank on your back is the wrong tool —{" "}
            <a href="#situation" className="underline">
              is a knapsack right
            </a>
            .
          </li>
          <li>
            <strong>You want a diaphragm pump and a pressure figure the listing states.</strong>{" "}
            Two here —{" "}
            <a href="#solo-473d" className="underline">
              the Solo 473D
            </a>{" "}
            and{" "}
            <a href="#solo-90psi" className="underline">
              the Solo 90psi
            </a>
            .
          </li>
          <li>
            <strong>You want the largest tank.</strong>{" "}
            <a href="#oregon" className="underline">
              The Oregon
            </a>{" "}
            is listed at 20 litres, with no pump type or pressure stated.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            A sprayer bought freely does not change what its contents allow.
            The label on the product you put in the tank decides who may apply
            it, where, and with what protection — the sprayer&rsquo;s listing
            says nothing about that and neither does this page.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Is a Knapsack the Right Tool?</h2>
      <p>
        These are 10 to 20 litre tanks worn on the back, and every listing here
        sells them for gardens, allotments, orchards and grounds. The Matabi
        listing scopes its own tank to gardens of up to 400 square metres. A
        single room, a wasp nest or a skirting run is a hand sprayer&rsquo;s
        job, and the products on our{" "}
        <a href="/best/flea-spray-for-home">flea spray</a> and{" "}
        <a href="/best/ant-killers">ant killer</a> pages arrive in their own
        containers.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">Who May Spray</h2>
      <p>
        HSE&rsquo;s rule for pesticide sprayers turns on birth date and on
        whether the spraying is a service:{" "}
        <em>
          &ldquo;If you were born after 31 December 1964 or you will be spraying
          as a commercial service, you must hold the appropriate Certificate of
          Competence National Proficiency Tests Council (NPTC) or Scottish
          Skills Testing Service (SSTS), unless you are under the direct and
          personal supervision of a person who holds such a
          certificate.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseSprayer} rel="nofollow">
          HSE
        </a>
        ). For those born before that date and working on their own land, HSE
        says you{" "}
        <em>
          &ldquo;need to be able to demonstrate competence and show proof of
          appropriate training.&rdquo;
        </em>
      </p>
      <p>
        The rule reaches the sale as well as the spraying. HSE&rsquo;s
        agriculture guidance states that{" "}
        <em>
          &ldquo;Anyone who purchases a pesticide product must ensure that the
          end user holds a specified certificate.&rdquo;
        </em>{" "}
        and tells buyers to{" "}
        <em>
          &ldquo;Look for the MAFF, MAPP or HSE approval number on the label on
          the container.&rdquo;
        </em>{" "}
        (
        <a href={SRC.hsePesticides} rel="nofollow">
          HSE
        </a>
        ). The sprayers on this page are sold to anyone; the pesticides that
        go in them are not, and a landlord buying both should read that as the
        honest position.
      </p>
      <p>
        Insecticides used against pests in buildings are biocides rather than
        plant protection products, and HSE&rsquo;s rule there is the product
        split:{" "}
        <em>
          &ldquo;members of the general public must not use professional or
          industrial use products&rdquo;
        </em>{" "}
        (
        <a href={SRC.hseBiocides} rel="nofollow">
          HSE
        </a>
        ). A sprayer that can take a professional-use concentrate does not
        make its owner a professional user.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Sprayer Does Not Help</h2>
      <p>
        <strong>When the listing cannot tell you what you are buying.</strong>{" "}
        The Solo 473D is listed as 10 litre in its title and 12 litre in its
        feature text. The Matabi is listed as 12L in its title and 16 L in its
        detail table. This page reports both figures for each and resolves
        neither; buy on the basis that the listing is uncertain.
      </p>
      <p>
        <strong>Where the listing states no pump or no pressure.</strong> The
        Oregon lists neither; the Matabi lists a three-position regulator and no
        pump type. A pressure a listing does not state is a pressure this page
        does not state.
      </p>
      <p>
        <strong>As a substitute for the product label.</strong> Nothing about
        the tank changes what the pesticide label permits — the area, the dose,
        the protection, or who may apply it.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Tank capacity as listed</h3>
      <p>
        From 10 litres to 20. A larger tank is more weight on your back for
        longer; the Solo 425 is listed at 4.49 kg empty and the Oregon at 3.93
        kg. Buy for the area you actually treat in one session.
      </p>
      <h3>2. Pump type as listed</h3>
      <p>
        Three listings state a pump type: diaphragm on both 10 litre Solos,
        piston on the Solo 425. Two state none. The comparison table says which,
        and says &ldquo;not stated&rdquo; where the listing is silent.
      </p>
      <h3>3. Pressure as listed</h3>
      <p>
        4 bar on the Solo 473D, 4 bar / 90 psi on the Solo 90psi, up to 90 psi
        on the Solo 425. The pesticide label, not the sprayer, decides what
        pressure the product should be applied at.
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
                "A diaphragm-pump knapsack listed at 4 bar with a pressure gauge, a 50 cm tube and 3.9 kg empty. The listing's title says 10 litre and its feature text says 12 litre; both are on the card because both are on the listing.",
                "A 10 litre diaphragm-pump sprayer listed at 4 bar / 90 psi with a 50 cm lance and a UV-resistant plastic container, at 4.2 kilograms. The one listing here whose capacity, pump and pressure all agree with each other.",
                "A piston-pump sprayer listed at 4 gallons, up to 90 psi, with four nozzles, a 20-inch wand and a 48-inch hose, made in the USA. The listing gives no litre figure; the award label is the site's and is unchanged.",
                "A 12 litre sprayer, by its title and text, with a fibreglass lance, four nozzles and a three-position regulator; its detail table says 16 L. Pump type is not stated. The listing scopes it to gardens of up to 400 square metres.",
                "A 20 litre sprayer with a lance and hose of about two metres, four nozzles and a spare seal kit, listed for pesticide, lawn feed, weed and moss killer. The listing states no pump type and no pressure.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Sprayer Is Not the Answer</h2>
      <p>
        <strong>Use the product&rsquo;s own container.</strong> Most consumer
        insecticides arrive ready to use. Our{" "}
        <a href="/best/cockroach-killers">cockroach killers</a> and{" "}
        <a href="/best/flea-spray-for-home">flea spray</a> pages compare them.
      </p>
      <p>
        <strong>Bait instead of spraying.</strong> For ants and cockroaches the
        product class is different — see our{" "}
        <a href="/best/ant-killers">ant killers</a> page.
      </p>
      <p>
        <strong>Have it applied by a certificate holder.</strong> Where the
        product you need is professional-use only, that is the arrangement
        HSE&rsquo;s rule describes.
      </p>

      {/* Using them */}
      <h2 id="using">Using One</h2>
      <ol>
        <li>
          <strong>Read the label on the product, not the sprayer.</strong> Dose,
          area, protection and who may apply it are all there and nowhere else.
        </li>
        <li>
          <strong>Check the approval number.</strong> HSE&rsquo;s own
          instruction is to look for the MAFF, MAPP or HSE number on the
          container.
        </li>
        <li>
          <strong>Fill by the listing figure you have least reason to doubt.</strong>{" "}
          Where a listing gives two capacities, the smaller one is the safer
          basis for a dose calculation.
        </li>
        <li>
          <strong>Set pressure by the product label.</strong> The sprayer&rsquo;s
          maximum is not a recommendation.
        </li>
        <li>
          <strong>Rinse and store as the label says.</strong> HSE tells users
          to keep pesticides in their original containers with the approved
          product labels; a sprayer left full is a container without one.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Sprayers Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing gives two figures, both are shown; where it gives none, the
        cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Capacity, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Pump and pressure, as listed</th>
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
        heading="A job that needs a certificate holder?"
        subtext="Where the product is professional-use only, compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
