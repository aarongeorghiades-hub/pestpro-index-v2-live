import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";

// S68 R2 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award labels,
// rank numerals, anchor ids and card order UNCHANGED as ruled.
//
// TWO CARDS CARRY THE SAME AWARD, "Best Value" (#2 and #4). That is the separate defect
// Law 188's own text declines to settle; the labels are held by the standing rule and
// reported. The subtitle's "Our pick of the most effective" is held and reported.
//
// ALL FOUR PRODUCTS ARE HIGH-VOLTAGE GRID ZAPPERS, and the Texas A&M source read for
// this page says outdoor bug zappers should not be used indoors because they scatter
// insect fragments. That sentence is on the page, in full, above the cards. It is the
// guidance; the products are what the route cards.
//
// FAQ block and FAQPage schema removed together (Law 190). 5 unsourced sentences
// deleted; one G3 hit ("Trusted brand with 60+ years of heritage") cleared.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Indoor Fly Zapper & Killer UK",
    description:
      "Indoor fly zappers compared on their own listings — grid, bulbs, tray and target species — and what the guidance says about zappers indoors and sanitation.",
    alternates: { canonical: "https://pestproindex.com/best/fly-killer-indoor" },
    openGraph: {
      title: "Best Indoor Fly Zapper & Killer UK",
      description:
        "Indoor fly zappers compared on their own listings — grid, bulbs, tray and target species — and what the guidance says about zappers indoors and sanitation.",
      url: "https://pestproindex.com/best/fly-killer-indoor",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Indoor Fly Zapper & Killer UK",
  description:
    "Indoor fly zappers compared on their own listings — grid, bulbs, tray and target species — and what the guidance says about zappers indoors and sanitation.",
  datePublished: "2026-03-31",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://pestproindex.com/best/fly-killer-indoor" },
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
      name: "Best Indoor Fly Zapper & Killer UK",
      item: "https://pestproindex.com/best/fly-killer-indoor",
    },
  ],
};

// SOURCES. Quotations extracted by byte range and exact-matched before drafting
// (Law 164); each citation names the host actually read (S59-A). Both bodies banked at
// S68 R2 under ~/pp-s68r2/sources/ (Law 175).
const SRC = {
  tamu: "https://agrilifeextension.tamu.edu/library/insects/indoor-flies-and-their-control/",
  purdue: "https://extension.entm.purdue.edu/publications/E-7/E-7.html",
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
// ("the fly killer you can trust") is trimmed and never restated (S47-F).
const products: ProductRecord[] = [
  {
    anchorId: "best-overall",
    asin: "B0B41H37HB",
    rank: 1,
    cardName: "Insect-O-Cutor PlusZap 30W Indoor Fly Killer",
    cardLabel: "Best Overall",
    features: [
      "Listed as 30W with 2 UV bulbs pre-installed and an aluminium killing grid",
      "Target species listed as Fly, Mosquito; listed for indoor use",
      "Listed with a removable deep catch tray",
      "Hardwired power cable; 2.1kg; 18 x 12 x 8 cm, as listed",
      "The maker's energy-saving comparison with other units is the maker's",
    ],
    tableCells: ["Insect-O-Cutor PlusZap 30W", "Grid zapper; 30W; 2 UV bulbs; catch tray, as listed", "Best Overall"],
    h2Label: "Best Overall",
    h2Name: "Insect-O-Cutor PlusZap 30W",
    tocLabel: "Best Overall",
    tocName: "Insect-O-Cutor PlusZap 30W",
  },
  {
    anchorId: "best-seller",
    asin: "B017TETOE2",
    rank: 2,
    cardName: "Aspectek Professional 30W Electronic Insect Killer",
    cardLabel: "30W Grid Zapper, Mesh Screen",
    features: [
      "Listed as 30W with two UV bulbs and a high-voltage metal grid behind a mesh screen",
      "Target species listed as Fly, Mosquito, Wasp; metal body; 28 x 10 x 39.5 cm",
      "Listed as hung by chain or stood on a surface",
      "The maker's own caveat: not every mosquito will be caught",
    ],
    tableCells: ["Aspectek Professional 30W", "Grid zapper; 30W; 2 UV bulbs; mesh screen, as listed", "30W Grid Zapper, Mesh Screen"],
    h2Label: "30W Grid Zapper, Mesh Screen",
    h2Name: "Aspectek Professional 30W",
    tocLabel: "30W Grid Zapper, Mesh Screen",
    tocName: "Aspectek Professional 30W",
  },
  {
    anchorId: "best-quiet",
    asin: "B0BVKGC941",
    rank: 3,
    cardName: "Quiet Hybrid Spectrum Fly Zapper (UK Plug)",
    cardLabel: "Quietest Option",
    features: [
      "Fetched title: GeckoMan Hybrid Spectrum Fly Zapper Electric Indoor UK Fruit Fly Killer",
      "Listed with dual UV bulbs and two spare bulb packs included; 4200V grid per the maker",
      "Target species listed as Fly, Mosquito, Moth, Wasp; ABS and metal; 1.86kg",
      "The maker's noise-reduction and kill-rate comparisons are the maker's",
    ],
    tableCells: ["GeckoMan Hybrid Spectrum", "Grid zapper; dual UV bulbs; ABS shell, as listed", "Quietest Option"],
    h2Label: "Quietest Option",
    h2Name: "Quiet Hybrid Spectrum Fly Zapper",
    tocLabel: "Quietest Option",
    tocName: "Quiet Hybrid Spectrum Fly Zapper",
  },
  {
    anchorId: "best-value",
    asin: "B086DK71VX",
    rank: 4,
    cardName: "Aspectek Upgraded 20W Bug Zapper",
    cardLabel: "20W Grid Zapper, Indoor and Covered Outdoor",
    features: [
      "Listed as 20W, dual-sided, with 2 bonus UV bulbs",
      "Listed for indoor and covered outdoor use — garages, basements, patios",
      "Target species listed as Fly, Mosquito, Moth, Wasp; plastic; 1.82kg",
      "Same listed dimensions as the 30W Aspectek: 28 x 10 x 39.5 cm",
    ],
    tableCells: ["Aspectek Upgraded 20W", "Grid zapper; 20W; dual-sided; indoor and covered outdoor, as listed", "20W Grid Zapper, Indoor and Covered Outdoor"],
    h2Label: "20W Grid Zapper, Indoor and Covered Outdoor",
    h2Name: "Aspectek Upgraded 20W Bug Zapper",
    tocLabel: "20W Grid Zapper, Indoor and Covered Outdoor",
    tocName: "Aspectek Upgraded 20W Bug Zapper",
  },
];

const tocItems = [
  { id: "situation", title: "Find the Source First" },
  { id: "legal", title: "What the Guidance Says About Zappers Indoors" },
  { id: "limits", title: "Where a Zapper Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Zapper Is Not the Answer" },
  { id: "using", title: "Placing and Maintaining Them" },
  { id: "compared", title: "The Four Units Compared" },
];

export default function BestFlyKillerIndoorPage() {
  return (
    <GuideLayout
      title="Best Indoor Fly Killer UK 2026: Electric & Sticky Traps for Home"
      subtitle="Indoor fly killers — electric UV zappers, sticky traps, and window catchers compared"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedProducts={[
        { title: "Best Wasp Killers UK 2026", href: "/best/wasp-killers" },
        { title: "Best Ant Killers UK 2026", href: "/best/ant-killers" },
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
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
        A zapper kills the flies that come to it. Texas A&amp;M&rsquo;s
        extension service is clear that this is the second job, not the first:{" "}
        <em>
          &ldquo;The key any indoor fly problem is to find and eliminate the
          source, that is, anywhere excess moisture and organic debris may have
          accumulated.&rdquo;
        </em>{" "}
        (
        <a href={SRC.tamu} rel="nofollow">
          Texas A&amp;M AgriLife Extension
        </a>
        ).
      </p>

      {/* DECISION BLOCK — situation first. The source line, the guidance line and the
          does-not-help line sit ABOVE the product lines. No Amazon link, no price, no
          image, no award. */}
      <div className="not-prose my-6 rounded-xl border border-slate-300 bg-slate-50 p-4">
        <p className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Start with your situation
        </p>
        <ul className="m-0 list-none space-y-2 p-0 text-sm text-slate-800">
          <li>
            <strong>The flies keep coming whatever you do.</strong> They are
            breeding somewhere, and the guidance says find it &mdash;{" "}
            <a href="#situation" className="underline">
              find the source first
            </a>
            .
          </li>
          <li>
            <strong>You want to know whether a grid zapper belongs indoors.</strong>{" "}
            Texas A&amp;M has a sentence on exactly that &mdash;{" "}
            <a href="#legal" className="underline">
              what the guidance says about zappers indoors
            </a>
            .
          </li>
          <li>
            <strong>You have small flies over a sink or a bin.</strong> A UV
            unit is aimed at house flies; the source says small flies are
            attracted differently &mdash;{" "}
            <a href="#limits" className="underline">
              where a zapper does not help
            </a>
            .
          </li>
          <li>
            <strong>You are choosing between the four units.</strong> They differ
            in watts, bulbs, tray and where the listing says they may go &mdash;{" "}
            <a href="#what-decides" className="underline">
              what decides the choice
            </a>
            .
          </li>
        </ul>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Find the Source First</h2>
      <p>
        Purdue Extension:{" "}
        <em>
          &ldquo;Insecticides alone cannot be expected to rid premises of
          flies.&rdquo;
        </em>{" "}
        (
        <a href={SRC.purdue} rel="nofollow">
          Purdue Extension
        </a>
        ). Nor can a zapper, which kills the same adults an insecticide does.
        Where they come from:{" "}
        <em>
          &ldquo;House flies normally breed in fresh animal manure, but can also
          breed in decaying organic matter such as garbage.&rdquo;
        </em>
      </p>
      <p>
        And how they get in:{" "}
        <em>
          &ldquo;Keeping flies from entering homes involves using tight-fitting
          window screens and closing windows and doors.&rdquo;
        </em>{" "}
        Sanitation and exclusion are the two words both sources use before
        they mention a trap.
      </p>

      {/* [1] Legal / guidance position */}
      <h2 id="legal">What the Guidance Says About Zappers Indoors</h2>
      <p>
        There is no licence to hold for a fly zapper; the position is the
        guidance, and it is direct. Texas A&amp;M:{" "}
        <em>&ldquo;High voltage, outdoor&rdquo;</em> bug zappers{" "}
        <em>
          &ldquo;should not be used indoors because they tend to scatter insect
          fragments and can contaminate the indoors.&rdquo;
        </em>{" "}
        All four products on this page are high-voltage grid units. Three are
        listed for indoor use; one is listed for indoor and covered outdoor
        use. The listing states where the maker intends it; the source states
        what a grid does to the fly.
      </p>
      <p>
        The same source describes the alternative it prefers:{" "}
        <em>
          &ldquo;Light traps take advantage of a fly&rsquo;s attraction to
          short wavelength light (ultraviolet, or UV) to draw them to a glue
          board or low voltage electric grid.&rdquo;
        </em>{" "}
        A glue-board unit is not carded on this page.
      </p>

      {/* [2] Where it does not help */}
      <h2 id="limits">Where a Zapper Does Not Help</h2>
      <p>
        <strong>Against the source.</strong> The Texas A&amp;M and Purdue lines
        above. A zapper next to an unemptied bin is a zapper with a supply.
      </p>
      <p>
        <strong>With small flies, necessarily.</strong> Texas A&amp;M on fruit
        flies:{" "}
        <em>
          &ldquo;They may be attracted to light but do not seem attracted to
          food.&rdquo;
        </em>{" "}
        Small house-infesting flies are their own problem &mdash; our{" "}
        <a href="/best/drain-fly-killer">drain fly</a> page covers one of them.
      </p>
      <p>
        <strong>With a tired bulb.</strong>{" "}
        <em>
          &ldquo;Most light trap manufacturers recommend that the bulbs be
          replaced annually because UV output of fluorescent tubes degrades
          over time.&rdquo;
        </em>{" "}
        Two listings here include spare bulbs.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Where the listing says it may go</h3>
      <p>
        Three units are listed for indoors. The 20W Aspectek is listed for
        indoor and covered outdoor use. That is the one listed fact that
        interacts with the guidance above.
      </p>
      <h3>2. Watts, bulbs and the tray, as listed</h3>
      <p>
        30W, 30W, unstated wattage with a 4200V grid claim, and 20W. Two UV
        bulbs on each; the GeckoMan and the 20W Aspectek include spares. The
        PlusZap is the one listing that describes a deep, removable catch tray.
      </p>
      <h3>3. Height, per the guidance</h3>
      <p>
        <em>
          &ldquo;Light traps should be installed 4 to 6 feet above the floor,
          which is the typical flying height for house flies.&rdquo;
        </em>{" "}
        Two of the four are listed as hung by chain or stood on a surface; the
        PlusZap is hardwired.
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
                "A 30W unit with two pre-installed UV bulbs, an aluminium grid and a removable deep catch tray, listed for indoor use with Fly and Mosquito as target species and a hardwired cable. The maker's energy-cost comparison and its self-praise are the maker's and are not repeated.",
                "A 30W metal unit with two UV bulbs and a high-voltage grid behind a mesh screen, listed for Fly, Mosquito and Wasp, hung by its chain or stood on a surface. The listing's own caveat that fast mosquitoes may miss the grid is carried because it is the maker's.",
                "A unit whose fetched title reads GeckoMan Hybrid Spectrum, with dual UV bulbs, two spare bulb packs, an ABS shell and a 4200V grid claim, listed for Fly, Mosquito, Moth and Wasp. The wattage is not stated. Its comparisons on noise and kill rate are the maker's.",
                "A 20W dual-sided plastic unit with two bonus UV bulbs, listed for Fly, Mosquito, Moth and Wasp — and, alone on this page, for indoor and covered outdoor use. The same listed dimensions as the 30W Aspectek.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* [14] Alternatives */}
      <h2 id="alternatives">If a Zapper Is Not the Answer</h2>
      <p>
        <strong>Sanitation.</strong> Texas A&amp;M&rsquo;s key to any indoor
        fly problem, above. Bins, drains, spilled food.
      </p>
      <p>
        <strong>Screens.</strong> Purdue&rsquo;s exclusion line, above.
      </p>
      <p>
        <strong>A glue-board light trap.</strong> The unit type Texas
        A&amp;M describes for indoors; not carded here.
      </p>

      {/* [15] Using them */}
      <h2 id="using">Placing and Maintaining Them</h2>
      <ol>
        <li>
          <strong>Deal with the source first.</strong> Otherwise the unit has
          a supply.
        </li>
        <li>
          <strong>Hang it at 4 to 6 feet.</strong> Texas A&amp;M&rsquo;s
          flying-height figure.
        </li>
        <li>
          <strong>Empty the tray and clean the grid.</strong> The PlusZap
          listing describes a removable tray; the others state none.
        </li>
        <li>
          <strong>Change the bulbs yearly.</strong> The manufacturers&rsquo;
          own recommendation, per Texas A&amp;M.
        </li>
      </ol>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Texas A&amp;M&rsquo;s sentence on high-voltage zappers indoors is
            quoted in full above. Every unit on this page is a high-voltage grid.
            That is stated rather than reconciled.
          </p>
        </Callout>
      </div>

      {/* [16] Comparison table */}
      <h2 id="compared">The Four Units Compared</h2>
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
                Type, power and bulbs, as listed
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
        heading="Flies you cannot trace to a bin or a drain?"
        subtext="A breeding site inside a void is a survey job. Compare pest control providers near you, no fees and no commissions."
      />
    </GuideLayout>
  );
}
