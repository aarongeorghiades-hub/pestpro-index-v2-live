import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout from "@/components/Callout";
import DecisionBox from '@/components/DecisionBox';

// S69 R1 — ROLLOUT REBUILD to the R8 pattern, on sources. GROUP B.
//
// HEALTH STATEMENTS ON THIS PAGE: ZERO. The UC IPM Pest Note read for this route
// describes damage to paper and fabric and makes no statement about human health. None
// is manufactured to fill the gap, and the FAQ says plainly that the source is silent
// rather than answering the question from anywhere else.
//
// THE THREE OWN-VOICE SAFETY CLAIMS FOUND AT S68 R5 ARE CLEARED HERE, under the standing
// safety ruling: an own-voice "non-toxic", "safe for" or "harmless" is attributed to the
// maker where the listing states it, and deleted where it does not.
//   1. feature "Non-toxic and odourless"  -> attributed to the maker's own listing text
//   2. prose "The traps are entirely non-toxic and odourless ... safe for use in any
//      room including kitchens, bathrooms, bedrooms, and children's ..." -> DELETED. The
//      listing says "Free from chemicals and smells" and "Family-friendly and
//      pet-considerate"; it does not say any of the rest.
//   3. Pros bullet "Non-toxic and odourless — safe for all rooms including kitchens and
//      children's bedrooms" -> DELETED with the Pros block.
// A FOURTH was found beside them and is cleared on the same ground: "is HSE approved for
// amateur use, meaning it has been formally assessed as safe for non-professional
// application when used according to the label". "HSE approved and tested" is in the
// powder's own listing title and is reported as the maker's words; the gloss about what
// that approval means was ours and is gone.
//
// LAW 188 — TWO CARD LABELS DISAGREED WITH THEIR OWN h2 AND THE h2 WINS. cardLabel
// "Best Chemical Spray" -> "Best Spray" (h2Label) and "Best Monitoring Trap" ->
// "Best Trap" (h2Label). No duplicate award is created: the four labels after the
// correction are Best Spray, Best Trap, Best Long-Term Solution, Best Powder.
//
// TITLE AND H1: the H1's claim clause promised "Natural Remedies", which this page cards
// none of. Replaced with what it does card. Head keyword kept byte-identical.
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Silverfish Treatments UK 2026 — Sprays, Traps & Powder",
    description:
      "Silverfish treatments for UK homes compared on their own listings: a spray, sticky traps, a dehumidifier and an insecticidal powder.",
    alternates: {
      canonical: "https://pestproindex.com/best/silverfish-treatments",
    },
    openGraph: {
      title: "Best Silverfish Treatments UK 2026 — Sprays, Traps & Powder",
      description:
        "Silverfish treatments for UK homes compared on their own listings: a spray, sticky traps, a dehumidifier and an insecticidal powder.",
      url: "https://pestproindex.com/best/silverfish-treatments",
      type: "article",
      siteName: "PestPro Index",
    },
  };
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Silverfish Treatments UK 2026 — Sprays, Traps & Powder",
  description:
    "Silverfish treatments for UK homes compared on their own listings: a spray, sticky traps, a dehumidifier and an insecticidal powder.",
  datePublished: "2026-03-18",
  dateModified: "2026-09-09",
  author: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  publisher: { "@type": "Organization", name: "PestPro Index", url: "https://pestproindex.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pestproindex.com/best/silverfish-treatments",
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
      name: "Best Silverfish Treatments UK 2026",
      item: "https://pestproindex.com/best/silverfish-treatments",
    },
  ],
};

// SOURCES. Every quotation was extracted by byte range from a body on disk and verified
// by exact string match before it was written here (Law 164). The citation names the
// host actually fetched (Law 194): ipm.ucanr.edu, fetched 2026-09-09, body kept at
// ~/pp-s69r1/sources/ucipm-silverfish.src.txt under Law 175.
const SRC = {
  ucipm: "https://ipm.ucanr.edu/home-and-landscape/silverfish-and-firebrats/",
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

// Records are addressed BY IDENTITY, never by position (Law 107).
//
// Feature text and comparison cells are rebuilt from the banked Amazon bodies at
// ~/pp-s61r1/uk/, inside the S45-C window. A property is asserted only where the
// listing's own text states it (S52-E); a cell the listing does not state reads
// "not stated". Maker self-praise is trimmed and never restated (S47-F): the trap's
// listing calls itself the best silverfish killer you can find, and the powder's calls
// itself the strongest on the market. Neither line appears below.
//
// LAW 146 — THE SPRAY'S LISTING PUTS A SENTENCE IN ITS TARGET SPECIES ROW rather than a
// species. The row is reported as what it says, not resolved into a species name.
const products: ProductRecord[] = [
  {
    anchorId: "best-spray",
    asin: "B0BGY8196B",
    rank: 1,
    cardName: "Ready Steady Defend Silverfish Killer Spray 1L",
    cardLabel: "Best Spray",
    features: [
      "One litre, listed as ready to use; item form given as Spray",
      "The maker names the active as cypermethrin at 0.1% w/w",
      "The maker states up to 12 weeks of residual action per application",
      "Described by the maker as water-based, low-odour and non-staining",
      "Its target species row carries a sentence, not a species: adult silverfish and their eggs",
    ],
    tableCells: [
      "Ready Steady Defend Silverfish Killer Spray 1L",
      "Residual spray",
      "Cypermethrin 0.1% w/w, named by the maker",
      "1 litre; up to 12 weeks residual, per the maker",
    ],
    h2Label: "Best Spray",
    h2Name: "Ready Steady Defend Silverfish Killer Spray 1L",
    tocLabel: "Best Spray",
    tocName: "Ready Steady Defend Silverfish Killer Spray",
  },
  {
    anchorId: "best-trap",
    asin: "B0BJKY8MB3",
    rank: 2,
    cardName: "Super Ninja Silverfish Trap (3-Pack)",
    cardLabel: "Best Trap",
    features: [
      "Three glue traps per pack; target species listed as Silverfish",
      "The maker states a food-based attractant in the glue",
      "The maker states up to 90 days of coverage per trap",
      "Listed by its maker as odourless and free from chemicals and smells",
      "Its listing states the recommended use as trapping and monitoring an infestation",
    ],
    tableCells: [
      "Super Ninja Silverfish Trap (3-Pack)",
      "Glue trap, no insecticide",
      "None — a glue trap, per the listing",
      "Three traps; up to 90 days each, per the maker",
    ],
    h2Label: "Best Trap",
    h2Name: "Super Ninja Silverfish Trap (3-Pack)",
    tocLabel: "Best Trap",
    tocName: "Super Ninja Silverfish Trap",
  },
  {
    anchorId: "best-dehumidifier",
    asin: "B073XNK45P",
    rank: 3,
    cardName: "Pro Breeze 12L/Day Dehumidifier",
    cardLabel: "Best Long-Term Solution",
    features: [
      "Extraction listed at 12 litres per day; 1.8 litre tank with a hose option",
      "Automatic humidity sensor with a settable target, per the maker",
      "The maker states sound levels of less than 38dB",
      "24-hour timer and auto shut-off, as listed",
      "Its listing title carries a Which? Best Buy award for dehumidifiers, dated 2025 by the maker",
    ],
    tableCells: [
      "Pro Breeze 12L/Day Dehumidifier",
      "Compressor dehumidifier",
      "None — it removes moisture, not insects",
      "12 L/day; 1.8 L tank, as listed",
    ],
    h2Label: "Best Long-Term Solution",
    h2Name: "Pro Breeze 12L/Day Dehumidifier",
    tocLabel: "Best Long-Term Solution",
    tocName: "Pro Breeze Dehumidifier",
  },
  {
    anchorId: "best-powder",
    asin: "B013EIB87I",
    rank: 4,
    cardName: "Pest Expert Formula 'P' Silverfish Killer Powder 300g",
    cardLabel: "Best Powder",
    features: [
      "300 grams in a puffer pack; item form listed as Powder",
      "The maker names permethrin as the active",
      "The maker's own title describes it as HSE approved and tested",
      "Listed for application indoors or externally, including around power points",
      "Target species row reads Insects rather than Silverfish",
    ],
    tableCells: [
      "Pest Expert Formula 'P' Silverfish Killer Powder 300g",
      "Insecticidal dust",
      "Permethrin, named by the maker",
      "300 g; puffer pack, as listed",
    ],
    h2Label: "Best Powder",
    h2Name: "Pest Expert Formula 'P' Silverfish Killer Powder 300g",
    tocLabel: "Best Powder",
    tocName: "Pest Expert Killer Powder",
  },
];

const faqs = [
  {
    q: "Are silverfish a health risk?",
    a: "The source this page reads does not say, and this page will not answer a health question from anywhere else. The UC IPM Pest Note on silverfish and firebrats describes what they eat, where they live and the damage they do to paper and fabric; it makes no statement about human health at all. If something about your own health is worrying you, that is a question for a pharmacist or a GP rather than for a product page.",
  },
  {
    q: "Why is a dehumidifier on a page about silverfish treatments?",
    a: "Because the source names moisture as the condition the insect depends on. UC IPM writes that silverfish require a lot of moisture, so using dehumidifiers in closed spaces can help discourage these pests, and that ventilation from fans can reduce relative humidity to a point that is intolerable to silverfish. It is the one item here that changes the room rather than treating an insect.",
  },
  {
    q: "Do bait products work on silverfish?",
    a: "UC IPM says not: baits are not very successful in treating silverfish and firebrats, because they tend not to feed on them. That is why there is no bait on this page and why the trap here is a glue trap rather than a baited one.",
  },
  {
    q: "The spray did not fix it. What did I miss?",
    a: "Probably the moisture. UC IPM's position is that insecticides will not be effective unless you also remove the moisture, food and hiding places that allow these pests to thrive, and that it is almost impossible to control large populations unless dripping water and moist surfaces have gone. It also notes that if control does not occur in two or three weeks the insects are probably coming from untreated areas.",
  },
  {
    q: "What does the trap actually tell me?",
    a: "Where they are walking. UC IPM's monitoring advice is to use sticky traps placed in corners and along edges where foraging is likely, and it notes that because these insects travel long distances looking for food it can be difficult to pinpoint the source. The trap's own listing gives its recommended use as trapping and monitoring an infestation, which is the same job.",
  },
  {
    q: "Are foggers worth trying?",
    a: "UC IPM says foggers are not recommended to treat silverfish and firebrat infestations. Nothing on this page is a fogger.",
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
  { id: "situation", title: "The Damp Is the Infestation" },
  { id: "legal", title: "What the Label Governs" },
  { id: "limits", title: "Where a Treatment Does Not Work" },
  { id: "what-decides", title: "What Decides the Choice" },
  ...products.map((p) => ({ id: p.anchorId, title: `${p.tocLabel} — ${p.tocName}` })),
  { id: "alternatives", title: "If a Product Is Not the Answer" },
  { id: "using", title: "Using Them" },
  { id: "compared", title: "The Four Compared" },
  { id: "faq", title: "Frequently Asked Questions" },
];

export default function BestSilverfishTreatmentsPage() {
  return (
    <GuideLayout
      title="Best Silverfish Treatments UK 2026 &mdash; Sprays, Traps, Powder &amp; Dehumidifiers"
      subtitle="A residual spray, glue traps, a dehumidifier and an insecticidal powder, described by what their own listings state — beside the University of California's account of why the damp matters more than the insecticide"
      lastUpdated="September 2026"
      readingTime="8 min"
      breadcrumbParent={{ label: "Best", href: "/best" }}
      tocItems={tocItems}
      relatedGuides={[
        { title: "How to Get Rid of Silverfish", href: "/guides/how-to-get-rid-of-silverfish" },
        { title: "Pest Control Costs UK 2026", href: "/guides/pest-control-costs" },
        { title: "Landlord Pest Control Responsibilities", href: "/guides/landlord-pest-control" },
      ]}
      relatedProducts={[
        { title: "Best Carpet Beetle Treatments UK 2026", href: "/best/carpet-beetle-treatments" },
        { title: "Best Commercial Dehumidifiers UK 2026", href: "/best/commercial-dehumidifiers" },
        { title: "Best Woodworm Treatments UK 2026", href: "/best/woodworm-treatments" },
        { title: "Best Moth Killers UK 2026", href: "/best/moth-killers" },
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
        Four products, and only two of them are insecticides. The other two are a
        glue trap that tells you where the insects are and a dehumidifier that
        removes the thing they need. That split is the argument of this page.
      </p>

      {/* DECISION BLOCK — situation first, product second. NOT a card: no Amazon link,
          no price, no image, no award. */}
      <DecisionBox>
          <li>
            <strong>You have seen one or two and want to know how bad it is.</strong>{" "}
            <a href="#best-trap" className="underline">
              The glue traps
            </a>{" "}
            answer that before anything is sprayed.
          </li>
          <li>
            <strong>The bathroom or the utility room is permanently damp.</strong>{" "}
            <a href="#best-dehumidifier" className="underline">
              The dehumidifier
            </a>{" "}
            is the item that changes the condition.
          </li>
          <li>
            <strong>You need a surface treatment now.</strong>{" "}
            <a href="#best-spray" className="underline">
              The one litre spray
            </a>{" "}
            names its active on the listing.
          </li>
          <li>
            <strong>They are behind a skirting or around a socket.</strong>{" "}
            <a href="#best-powder" className="underline">
              The puffer powder
            </a>{" "}
            is listed for exactly those places.
          </li>
          <li>
            <strong>You have treated twice and they came back.</strong>{" "}
            <a href="#limits" className="underline">
              Where a treatment does not work
            </a>
            .
          </li>
        </DecisionBox>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Two of the four products here are insecticides. Where each may be
            applied, at what rate and with what ventilation is set by its own
            label, and that label governs over anything on this page.
          </p>
        </Callout>
      </div>

      {/* [0] Situation */}
      <h2 id="situation">The Damp Is the Infestation</h2>
      <p>
        The University of California&rsquo;s Statewide IPM Program puts the
        condition ahead of the insect:{" "}
        <em>
          &ldquo;Silverfish require a lot of moisture, so using dehumidifiers in
          closed spaces can help discourage these pests.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). That is why a dehumidifier sits on a page of treatments and is not an
        odd inclusion.
      </p>
      <p>
        Before any of it, the same source says to find out where they actually
        are:{" "}
        <em>&ldquo;To detect and monitor infestations, use cockroach sticky traps.&rdquo;</em>{" "}
        A trap is not a lesser purchase than a spray; it is the step that tells
        you where the spray should go.
      </p>

      {/* [1] Legal */}
      <h2 id="legal">What the Label Governs</h2>
      <p>
        The spray and the powder are insecticides and each carries a label
        setting out where it may be applied, at what rate, and what has to be
        kept away from it. The powder&rsquo;s own listing title describes it as
        HSE approved and tested. That is the maker&rsquo;s description of its
        product, and what any such approval covers is set out in the approval
        itself and on the label, not here.
      </p>
      <p>
        The glue trap carries no insecticide, and the dehumidifier is an
        appliance rather than a pesticide. Their instructions are still worth
        reading, but they are not governed by a pesticide label.
      </p>

      {/* [2] Limits */}
      <h2 id="limits">Where a Treatment Does Not Work</h2>
      <p>
        <strong>While the moisture is still there.</strong> UC IPM:{" "}
        <em>
          &ldquo;Insecticides won&rsquo;t be effective unless you also remove
          the moisture, food, and hiding places that allow these pests to
          thrive.&rdquo;
        </em>{" "}
        (
        <a href={SRC.ucipm} rel="nofollow">
          UC IPM
        </a>
        ). A treated skirting in a room that is still wet is a treated skirting
        in a room that is still wet.
      </p>
      <p>
        <strong>At scale, at all, without the damp fixed.</strong> The same
        source is blunter about a large population:{" "}
        <em>
          &ldquo;It is almost impossible to control large populations of
          silverfish and firebrats unless you have removed dripping water and
          moist surfaces.&rdquo;
        </em>
      </p>
      <p>
        <strong>As a bait.</strong>{" "}
        <em>
          &ldquo;However, baits aren&rsquo;t very successful in treating
          silverfish and firebrats, because they tend not to feed on them.&rdquo;
        </em>{" "}
        There is no bait on this page for that reason, and the trap here catches
        by glue rather than by attracting with a poison.
      </p>
      <p>
        <strong>Where the insects are not.</strong> UC IPM notes that these
        insects travel long distances while looking for food, so it can be
        difficult to pinpoint the source of an infestation. A treated area they
        never cross has done nothing.
      </p>

      {/* [3] Criteria */}
      <h2 id="what-decides">What Decides the Choice</h2>
      <h3>1. Whether you know where they are yet</h3>
      <p>
        UC IPM&rsquo;s first instruction is monitoring, not treatment. If you
        have seen two silverfish in six months, the traps are the honest first
        purchase and the spray is premature.
      </p>
      <h3>2. Whether the room can be dried</h3>
      <p>
        A bathroom that ventilates properly and a cellar that does not are
        different problems. The dehumidifier is the only item here that acts on
        the condition rather than on the insect, and it is also the only one
        that will still be doing something in a year.
      </p>
      <h3>3. Where the treatment has to go</h3>
      <p>
        The spray is listed for surfaces — walls, floors, carpets, furnishings.
        The powder is listed in a puffer pack for cracks, wall voids and the
        area around power points. A liquid and a dust are not competing
        products; they reach different places.
      </p>
      <h3>4. Whether the listing names an active</h3>
      <p>
        Both insecticides here do: cypermethrin on the spray at 0.1% w/w, and
        permethrin on the powder. The trap and the dehumidifier name none,
        because neither contains one.
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
                "A litre of ready-to-use residual spray with the active named on the listing as cypermethrin at 0.1% w/w, and a maker's claim of up to twelve weeks of residual action per application. Its maker describes it as water-based, low-odour and suitable for walls, floors, carpets and furnishings. Its target species row carries a sentence rather than a species name, and the card reports the row as it stands.",
                "Three glue traps with a food-based attractant in the glue, listed for indoor use with a target species of Silverfish and up to ninety days of coverage each. Its maker describes the traps as odourless and free from chemicals and smells; that is the maker's description of its own product and this page adds nothing to it. The listing gives the recommended use as trapping and monitoring an infestation, which is what a trap is for.",
                "Not an insecticide at all: a compressor dehumidifier listed at twelve litres a day into a 1.8 litre tank, with a humidity sensor, a 24-hour timer and a hose option for continuous drainage. Its maker states sound levels below 38dB, and its listing title carries a Which? Best Buy award for dehumidifiers dated 2025. It is on this page because the source names moisture as the condition the insect depends on.",
                "Three hundred grams of permethrin dust in a puffer pack, listed for indoor and external application and specifically for the area around power points and other hard-to-reach places. Its own listing title describes it as HSE approved and tested, which is the maker's wording. Its target species row reads Insects rather than Silverfish, and the card says so.",
              ][i]
            }
          </p>
        </div>
      ))}

      {/* Alternatives */}
      <h2 id="alternatives">If a Product Is Not the Answer</h2>
      <p>
        <strong>Ventilation.</strong> UC IPM notes that ventilation from fans
        can reduce relative humidity to a point that is intolerable to
        silverfish. An extractor fan that actually runs is a treatment.
      </p>
      <p>
        <strong>Cleaning and repair.</strong> Its prevention list is keeping
        basements, laundry rooms and bathrooms clean and dry, patching holes and
        spaces around pipes and conduits, and repairing leaks and drips in
        plumbing. None of that is sold here.
      </p>
      <p>
        <strong>Moving the books.</strong> It notes that collections of
        magazines, papers and books provide both food and harbourage, and
        suggests moving them around in the bookcase occasionally.
      </p>
      <p>
        <strong>A damp problem rather than an insect one.</strong> Our{" "}
        <a href="/best/commercial-dehumidifiers">commercial dehumidifiers</a>{" "}
        page covers the larger machines, and our{" "}
        <a href="/guides/how-to-get-rid-of-silverfish">silverfish guide</a>{" "}
        covers the house rather than the product.
      </p>

      {/* Using them */}
      <h2 id="using">Using Them</h2>
      <ol>
        <li>
          <strong>Trap before you treat.</strong> Corners and edges where
          foraging is likely, per UC IPM, and a week of watching before
          anything else is bought.
        </li>
        <li>
          <strong>Fix the water.</strong> A drip under a sink outlasts every
          insecticide on this page.
        </li>
        <li>
          <strong>Match the form to the place.</strong> Spray for surfaces, dust
          for voids and crevices; each listing states which it is for.
        </li>
        <li>
          <strong>Keep dust dry.</strong> UC IPM notes that if dust deposits get
          wet and then dry they cake, and that moist areas may need re-treating.
        </li>
        <li>
          <strong>Give it two to three weeks.</strong> UC IPM says a properly
          applied insecticide shows results in a few weeks, and that no result
          by then points at untreated areas rather than at the product.
        </li>
      </ol>

      {/* Comparison table */}
      <h2 id="compared">The Four Compared</h2>
      <p>
        Every column below is what the Amazon listing itself states, with each
        claim attributed to the maker who makes it. Where a listing does not
        state something, the cell says so rather than guessing.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-paper-sunk)]">
              <th className="text-left p-2 border-b font-semibold">Product</th>
              <th className="text-left p-2 border-b font-semibold">Type</th>
              <th className="text-left p-2 border-b font-semibold">Active, as listed</th>
              <th className="text-left p-2 border-b font-semibold">Quantity or duration, as listed</th>
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
        heading="A silverfish problem that outlasts the damp work"
        subtext="Compare pest control providers near you — no fees, no commissions."
      />
    </GuideLayout>
  );
}
