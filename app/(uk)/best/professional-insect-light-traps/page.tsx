import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S68 R3 — ROLLOUT REBUILD to the R8 pattern. Title and H1 byte-unchanged. Award
// labels, rank numerals, anchor ids and card order are UNCHANGED. The h2s held
// descriptors — "Aluminium Grid", "Compact Commercial Unit", "30W UV", "Commercial &
// Residential" — not awards; under Law 189 each takes the award its card already
// shows, in this route's layout. Card 4's NAME follows its fetched title (S50-H):
// "Upgraded" and "Commercial & Residential" are not on the listing, "Heavy Duty" and
// "Indoor and Covered Outdoor" are.
//
// THE FAQ IS ONE ARRAY (Law 190). It had four visible questions and one schema entry.
// Each answer is a list of segments — text, or an internal link — so the visible block
// renders a real <Link> and the FAQPage text is DERIVED from the same segments by
// joining them. There is no second copy of any answer.
//
// THE DESCRIPTION IS REWRITTEN. It said "institutional-grade"; that is nobody's
// listing and nobody's source.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Commercial Insect Light Traps UK (2026)",
    description:
      "Electric grid insect light traps for commercial premises: what extension guidance says about placement and fragments, and four compared as listed.",
    alternates: {
      canonical: "https://pestproindex.com/best/professional-insect-light-traps",
    },
    openGraph: {
      title: "Best Commercial Insect Light Traps UK (2026)",
      description:
        "Electric grid insect light traps for commercial premises: what extension guidance says about placement and fragments, and four compared as listed.",
      url: "https://pestproindex.com/best/professional-insect-light-traps",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Commercial Insect Light Traps UK (2026)",
  description:
    "Electric grid insect light traps for commercial premises: what extension guidance says about placement and fragments, and four compared as listed.",
  datePublished: "2026-04-06",
  dateModified: "2026-09-07",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/professional-insect-light-traps",
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
      name: "Commercial Insect Light Traps",
      item: "https://pestproindex.com/best/professional-insect-light-traps",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). Each citation names the
// host actually fetched (Law 194). Both bodies are kept under Law 175 at
// ~/pp-s68r2/sources: tamu-indoor-flies and purdue-fly-control.
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

// Feature text and comparison cells are rebuilt from the banked Amazon bodies, all inside
// the S45-C window. A property is asserted only where the listing states it (S52-E,
// S50-H); a cell the listing does not state reads "not stated". "THE FLY KILLER YOU CAN
// TRUST" is Insect-O-Cutor's own line and is not restated (S47-F, Law 152). Gone with
// it: "the world's leading flying insect control brand (est. 1962)", "365nm UVA",
// "2800V killing grid", "detachable grid" — none is on the listing it was attached to.
// BOTH PlusZap LISTINGS STATE THE SAME DIMENSIONS, 18 x 12 x 8 cm, for the 16W and the
// 30W; the cards report what the listings say and the table shows the two weights.
const products: ProductRecord[] = [
  {
    anchorId: "pluszap-30w",
    asin: "B0B41H37HB",
    rank: 1,
    cardName: "Insect-O-Cutor PlusZap 30W Indoor Fly Killer — Aluminium Grid",
    cardLabel: "Best Overall",
    features: [
      "30W, two UV bulbs pre-installed, aluminium grid, as listed",
      "Listed for indoor use: homes, commercial workplaces, kitchens, warehouses and retail",
      "Deep removable catch tray, as listed; hardwired cable",
      "Target species listed as Fly, Mosquito",
      "Listed at 18 x 12 x 8 cm and 2.1 kilograms",
    ],
    tableCells: ["PlusZap 30W", "30W; fly, mosquito", "18 x 12 x 8 cm, 2.1 kg", "Best Overall"],
    h2Label: "#1 Insect-O-Cutor PlusZap 30W Indoor Fly Killer",
    h2Name: "Best Overall",
    tocLabel: "#1 Insect-O-Cutor PlusZap 30W",
    tocName: "Best Overall",
  },
  {
    anchorId: "pluszap-16w",
    asin: "B0B41C7JHV",
    rank: 2,
    cardName: "Insect-O-Cutor PlusZap 16W Indoor Fly Killer — Aluminium Grid",
    cardLabel: "16W Aluminium Grid Unit",
    features: [
      "16W, two UV bulbs pre-installed, aluminium grid, as listed",
      "Listed for indoor use: homes, commercial workplaces, kitchens, warehouses and retail",
      "Deep removable catch tray, as listed; hardwired cable",
      "Target species listed as Fly, Mosquito",
      "Listed at 18 x 12 x 8 cm and 1.6 kilograms — the same dimensions the 30W lists",
    ],
    tableCells: ["PlusZap 16W", "16W; fly, mosquito", "18 x 12 x 8 cm, 1.6 kg", "16W Aluminium Grid Unit"],
    h2Label: "#2 Insect-O-Cutor PlusZap 16W",
    h2Name: "16W Aluminium Grid Unit",
    tocLabel: "#2 Insect-O-Cutor PlusZap 16W",
    tocName: "16W Aluminium Grid Unit",
  },
  {
    anchorId: "aspectek-30w",
    asin: "B017TETOE2",
    rank: 3,
    cardName: "Aspectek Professional Electronic Insect Killer — 30W UV (UK Plug)",
    cardLabel: "Best Budget",
    features: [
      "30W, two UV bulbs, metal casing, as listed",
      "Mesh screen over the grid, as listed",
      "Listed for home and commercial use, indoors; hangs by chain or stands",
      "Target species listed as Fly, Mosquito, Wasp",
      "Listed at 28 x 10 x 39.5 cm; the listing itself notes that not every mosquito reaches the grid",
    ],
    tableCells: ["Aspectek 30W", "30W; fly, mosquito, wasp", "28 x 10 x 39.5 cm", "Best Budget"],
    h2Label: "#3 Aspectek Professional Electronic Insect Killer",
    h2Name: "Best Budget",
    tocLabel: "#3 Aspectek 30W Electronic Insect Killer",
    tocName: "Best Budget",
  },
  {
    anchorId: "aspectek-20w",
    asin: "B086DK71VX",
    rank: 4,
    cardName: "Aspectek 20W Heavy Duty Bug Zapper — Indoor and Covered Outdoor",
    cardLabel: "Best Dual-Use Unit",
    features: [
      "20W, plastic casing, two spare UV bulbs included, as listed",
      "Open dual-sided design, as listed",
      "Listed for garages, basements, patios, BBQ areas and covered outdoor spaces — no commercial setting named",
      "Target species listed as Fly, Mosquito, Moth, Wasp",
      "Listed at 28 x 10 x 39.5 cm and 1.82 kilograms",
    ],
    tableCells: ["Aspectek 20W", "20W; fly, mosquito, moth, wasp", "28 x 10 x 39.5 cm, 1.82 kg", "Best Dual-Use Unit"],
    h2Label: "#4 Aspectek 20W Heavy Duty Bug Zapper",
    h2Name: "Best Dual-Use Unit",
    tocLabel: "#4 Aspectek 20W Bug Zapper",
    tocName: "Best Dual-Use Unit",
  },
];

// ONE FAQ ARRAY (Law 190). An answer is a list of segments; a segment is text or an
// internal link. The visible block maps the segments to text nodes and <Link>s; the
// FAQPage schema maps the same segments to their text. Neither is hand-maintained
// separately from the other.
type Segment = string | { href: string; label: string };
type Faq = { q: string; a: Segment[] };

const faqs: Faq[] = [
  {
    q: "How often do UV tubes need replacing?",
    a: [
      "No listing on this page states a replacement interval. Texas A&M AgriLife Extension, quoted above, reports annual replacement as the usual manufacturer advice, because the UV output of a fluorescent tube falls over time. The Aspectek 20W listing includes two spare bulbs; the others do not say.",
    ],
  },
  {
    q: "Where should I position an insect light trap?",
    a: [
      "Texas A&M AgriLife Extension, quoted above, puts a light trap 4 to 6 feet above the floor, the typical flying height for house flies. No listing here gives a mounting height. Purdue Extension, also quoted above, puts screens and closed doors ahead of any trap: a trap by an open door is competing with the door.",
    ],
  },
  {
    q: "Can I use an electric grid ILT in a food preparation area?",
    a: [
      "This page holds no fetched UK source stating where a grid unit may or may not be used, so it does not say. What it can say: all four units here kill by electrocution on a grid, and Texas A&M AgriLife Extension, quoted above, cautions that high-voltage outdoor zappers scatter insect fragments indoors. Glue-board units, which hold the insect intact, are compared on our ",
      { href: "/best/commercial-fly-killers", label: "Commercial Fly Killers" },
      " page.",
    ],
  },
];

const faqText = (a: Segment[]) => a.map((s) => (typeof s === "string" ? s : s.label)).join("");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: faqText(f.a) },
  })),
};

const tocItems = [
  { id: "situation", title: "Is a Light Trap the Right Job?" },
  { id: "legal", title: "What This Page Can and Cannot Say" },
  { id: "limits", title: "Where a Light Trap Does Not Help" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Light Trap Is Not the Answer" },
  { id: "using", title: "Siting and Servicing" },
  { id: "compared", title: "Light Traps Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestProfessionalInsectLightTrapsPage() {
  return (
    <GuideLayout
      title="Best Commercial Insect Light Traps for Businesses & Facilities Managers (2026)"
      subtitle="Electric grid insect light traps for commercial premises — four compared on wattage, target species and size as their listings state them, with what extension guidance says about where a trap goes"
      lastUpdated="September 2026"
      readingTime="7 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "Restaurant Pest Control: Complete UK Guide", href: "/guides/restaurant-pest-control" },
        { title: "Office Pest Control: Complete UK Guide", href: "/guides/office-pest-control" },
        { title: "Warehouse Pest Management", href: "/guides/warehouse-pest-management" },
        { title: "Commercial Pest Control", href: "/guides/commercial-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Commercial Fly Killers UK 2026", href: "/best/commercial-fly-killers" },
        { title: "Best Fly Killers Indoor UK 2026", href: "/best/fly-killer-indoor" },
        {
          title: "Best Commercial Insect Monitors UK 2026",
          href: "/best/commercial-insect-monitors",
        },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        An insect light trap draws a flying insect to ultraviolet light and
        kills or holds it there. All four units on this page are the electric
        grid kind. Two are listed for commercial workplaces; one for home and
        commercial use; one for garages, patios and covered outdoor spaces.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have flies and do not know where from.</strong> The
            extension guidance puts the source first —{" "}
            <a href="#situation" className="underline">
              is a light trap the right job
            </a>
            .
          </li>
          <li>
            <strong>You are siting one in a food area.</strong> Read what this
            page can and cannot say before you buy —{" "}
            <a href="#legal" className="underline">
              what this page can and cannot say
            </a>
            .
          </li>
          <li>
            <strong>You want a unit whose listing names commercial premises.</strong>{" "}
            Two do —{" "}
            <a href="#pluszap-30w" className="underline">
              the PlusZap 30W
            </a>{" "}
            and{" "}
            <a href="#pluszap-16w" className="underline">
              the PlusZap 16W
            </a>
            .
          </li>
          <li>
            <strong>You want the widest listed target range.</strong>{" "}
            <a href="#aspectek-20w" className="underline">
              The Aspectek 20W
            </a>{" "}
            lists fly, mosquito, moth and wasp — and no commercial setting.
          </li>
          <li>
            <strong>You want a mesh screen over the grid.</strong>{" "}
            <a href="#aspectek-30w" className="underline">
              The Aspectek 30W
            </a>{" "}
            is the one listing here that states one.
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Every unit on this page is a mains electrical appliance with a
            high-voltage grid. The Aspectek 30W listing states a mesh screen
            over its grid; the other three listings do not state one.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">Is a Light Trap the Right Job?</h2>
      <p>
        Texas A&amp;M AgriLife Extension describes what these units do:{" "}
        <em>
          &ldquo;Light traps take advantage of a fly’s attraction to short
          wavelength light (ultraviolet, or UV) to draw them to a glue board or
          low voltage electric grid.&rdquo;
        </em>{" "}
        (
        <a href={SRC.tamu} rel="nofollow">
          Texas A&amp;M AgriLife Extension
        </a>
        ). And it puts the trap second to the source:{" "}
        <em>
          &ldquo;The key any indoor fly problem is to find and eliminate the
          source, that is, anywhere excess moisture and organic debris may have
          accumulated.&rdquo;
        </em>{" "}
        A trap catches flies that are already inside. It does not stop them
        breeding or arriving.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What This Page Can and Cannot Say</h2>
      <p>
        This page holds no fetched UK source on where an electric grid unit may
        or may not be installed, on food hygiene inspection, or on any
        certification a commercial unit must carry. An earlier version of this
        page said grid units must not be used in food preparation areas and
        that inspectors check for it; no source was fetched for either
        statement, and both are gone.
      </p>
      <p>
        What the fetched guidance does say is about fragments. Texas A&amp;M
        AgriLife Extension says of high-voltage outdoor zappers that they{" "}
        <em>
          &ldquo;should not be used indoors because they tend to scatter insect
          fragments and can contaminate the indoors.&rdquo;
        </em>{" "}
        (
        <a href={SRC.tamu} rel="nofollow">
          Texas A&amp;M AgriLife Extension
        </a>
        ). The units here are sold as indoor units, and this page holds no
        source stating whether they scatter fragments; the reader siting one
        near open food should weigh that gap rather than this page&rsquo;s
        silence.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Light Trap Does Not Help</h2>
      <p>
        <strong>Against the source.</strong> The Texas A&amp;M line above: the
        key is the source. A drain, a bin store or a damp void keeps producing
        flies however many the grid takes.
      </p>
      <p>
        <strong>Beside an open door.</strong> Purdue Extension states that{" "}
        <em>
          &ldquo;Keeping flies from entering homes involves using tight-fitting
          window screens and closing windows and doors.&rdquo;
        </em>{" "}
        (
        <a href={SRC.purdue} rel="nofollow">
          Purdue Extension
        </a>
        ). A trap competing with daylight through an open door is a trap losing.
      </p>
      <p>
        <strong>With tired tubes.</strong> Texas A&amp;M reports that{" "}
        <em>
          &ldquo;Most light trap manufacturers recommend that the bulbs be
          replaced annually because UV output of fluorescent tubes degrades over
          time.&rdquo;
        </em>{" "}
        No listing here states an interval; one includes two spare bulbs.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. What setting the listing names</h3>
      <p>
        Both PlusZap listings name commercial workplaces, kitchens, warehouses
        and retail. The Aspectek 30W names home and commercial use. The
        Aspectek 20W names garages, basements, patios and covered outdoor
        spaces, and no commercial setting at all. For a business, that is the
        first sort.
      </p>
      <h3>2. Mounting height, from the guidance</h3>
      <p>
        Texas A&amp;M states that{" "}
        <em>
          &ldquo;Light traps should be installed 4 to 6 feet above the floor,
          which is the typical flying height for house flies.&rdquo;
        </em>{" "}
        No listing here gives a height, so that figure is the only one on the
        page.
      </p>
      <h3>3. Wattage and target species, as listed</h3>
      <p>
        16W, 20W and 30W, with target species from two on the PlusZaps to four
        on the Aspectek 20W. No listing states a coverage area, and this page
        does not invent one.
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
                "A 30W aluminium-grid unit with two pre-installed UV bulbs and a deep removable catch tray, listed for indoor use in homes, commercial workplaces, kitchens, warehouses and retail. Target species fly and mosquito; 2.1 kilograms.",
                "The 16W version of the same unit, with the same listed dimensions — 18 x 12 x 8 cm — and 1.6 kilograms. Same listed settings, same two target species. What the listing states as different is the wattage and the weight.",
                "A 30W metal-cased unit with two UV bulbs and a mesh screen over the grid, listed for home and commercial use and hung by chain or stood on a surface. Its own listing notes that not every mosquito reaches the grid; it names fly, mosquito and wasp.",
                "A 20W plastic-cased unit with an open dual-sided design and two spare bulbs, listed for garages, basements, patios, BBQ areas and covered outdoor spaces. It names fly, mosquito, moth and wasp, and no commercial setting; the name now follows the fetched title.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Light Trap Is Not the Answer</h2>
      <p>
        <strong>Hold the insect intact.</strong> Glue-board units are compared
        on our <a href="/best/commercial-fly-killers">commercial fly killers</a>{" "}
        page.
      </p>
      <p>
        <strong>Find where they are coming from.</strong> Our{" "}
        <a href="/best/commercial-insect-monitors">commercial insect monitors</a>{" "}
        page covers monitoring rather than killing.
      </p>
      <p>
        <strong>Screen the openings.</strong> Purdue&rsquo;s line above is
        screens and closed doors; a trap is what you add after that.
      </p>

      {/* Using them */}
      <h2 id="using">Siting and Servicing</h2>
      <ol>
        <li>
          <strong>Deal with the source first.</strong> That is Texas
          A&amp;M&rsquo;s key, and no unit here does it.
        </li>
        <li>
          <strong>Mount at 4 to 6 feet.</strong> Texas A&amp;M&rsquo;s figure,
          in the absence of one from any listing.
        </li>
        <li>
          <strong>Keep it away from open doors and windows.</strong> Purdue puts
          screens and closed doors ahead of any trap.
        </li>
        <li>
          <strong>Empty the tray.</strong> Three listings state a removable
          tray or washable tray.
        </li>
        <li>
          <strong>Replace the tubes on a schedule.</strong> Texas A&amp;M
          reports annual replacement as the manufacturers&rsquo; usual advice;
          no listing here gives its own.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">Light Traps Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states. Where a
        listing does not state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Wattage and target species, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Size and weight, as listed</th>
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

      {/* FAQ — rendered from the same array the schema above is derived from */}
      <h2 id="faq">Frequently Asked Questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>
            {f.a.map((s, j) =>
              typeof s === "string" ? (
                <span key={j}>{s}</span>
              ) : (
                <Link
                  key={j}
                  href={s.href}
                  className="text-[var(--color-teal-deep)] hover:text-[var(--color-teal-deep)] underline"
                >
                  {s.label}
                </Link>
              ),
            )}
          </p>
        </div>
      ))}

      <FindProviderCTA
        heading="Flies you cannot trace to a source?"
        subtext="Where the source is not obvious, compare commercial pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
