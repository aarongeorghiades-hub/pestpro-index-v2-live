import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/GuideLayout";
import ProductCard from "@/components/ProductCard";
import FindProviderCTA from "@/components/FindProviderCTA";
import Callout, { StatCallout } from "@/components/Callout";

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
  dateModified: "2026-03-31",
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

const tocItems = [
  { id: "at-a-glance", title: "Best Pigeon Spikes at a Glance" },
  { id: "best-overall", title: "Best Overall — S4U Stainless Steel Spikes" },
  {
    id: "best-wide-ledges",
    title: "Best for Wide Ledges — Defender Wide Plastic",
  },
  { id: "steel-3m-strip", title: "Stainless Steel Spikes (3m)" },
  { id: "best-for-gutters", title: "Best for Gutters — Half Round Gutter Kit" },
  { id: "offo-steel-spikes", title: "OFFO Stainless Steel Spikes" },
  { id: "best-large-areas", title: "Best for Large Areas — Birdgo Netting" },
  { id: "how-to-choose", title: "How to Choose the Right Pigeon Deterrent" },
  { id: "tips", title: "Installation Tips" },
  { id: "faq", title: "Frequently Asked Questions" },
];

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
      subtitle="Our pick of the most effective pigeon spikes and bird deterrent strips for UK homes and businesses"
      lastUpdated="March 2026"
      readingTime="8 min"
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

      {/* Intro */}
      <p>
        Pigeons cause more property damage in the UK than any other bird
        species. Their acidic droppings corrode stonework, block gutters, and
        carry diseases including psittacosis, salmonella, and cryptococcosis. A
        single pigeon produces around 12 kg of droppings per year, and where one
        pigeon roosts, others quickly follow. For homes and businesses, the
        resulting mess and health hazard can be serious.
      </p>
      <p>
        Bird spikes are the single most effective passive pigeon deterrent. They
        physically prevent pigeons from landing on ledges, windowsills, gutters,
        signs, and roof ridges without harming the birds. Unlike ultrasonic
        devices or gel deterrents (which have limited evidence of
        effectiveness), spikes provide a permanent physical barrier that pigeons
        cannot overcome. They are recommended by the RSPB, local councils, and
        professional pest controllers across the UK.
      </p>
      <p>
        We selected these pigeon spike products on published specifications and
        manufacturer information, and consulted guidance from the British Pest
        Control Association (BPCA) and RSPB. We selected stainless steel,
        plastic and netting options on published specifications and manufacturer
        information, covering ledges, gutters and open areas. Every product on
        this page is available for delivery via Amazon UK.{" "}
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>
            Always clean surfaces thoroughly before installing pigeon spikes.
            Remove all droppings and nesting material first — adhesive will not
            bond to a dirty surface, and existing droppings attract new pigeons.
          </p>
        </Callout>
      </div>

      {/* At a Glance */}
      <h2 id="at-a-glance">Best Pigeon Spikes at a Glance</h2>
      <p>
        Here is a quick comparison of our top picks. The best choice depends on
        your surface type, budget, and the size of birds you need to deter. Full
        details follow below.
      </p>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Material</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S4U Stainless Steel Spikes (12 Strips, 3m)</td>
            <td>Stainless steel</td>
            <td>Best Overall</td>
          </tr>
          <tr>
            <td>Defender Wide Plastic Spikes (5m)</td>
            <td>Plastic</td>
            <td>Best for Wide Ledges</td>
          </tr>
          <tr>
            <td>Stainless Steel Spikes (3m)</td>
            <td>Stainless steel</td>
            <td>A plain unbranded steel strip</td>
          </tr>
          <tr>
            <td>Half Round Gutter Kit (1m)</td>
            <td>Stainless steel</td>
            <td>Best for Gutters</td>
          </tr>
          <tr>
            <td>OFFO Stainless Steel Spikes</td>
            <td>Stainless steel</td>
            <td>A named-brand steel alternative</td>
          </tr>
          <tr>
            <td>Birdgo Anti-Pigeon Netting (5m x 5m)</td>
            <td>Netting</td>
            <td>Best for Large Areas</td>
          </tr>
        </tbody>
      </table>

      {/* Product 1 */}
      <h2 id="best-overall">Best Overall — S4U Stainless Steel Bird Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="S4U Stainless Steel Bird Spikes (12 Strips, 3m)"
          features={[
            "Stainless steel construction",
            "Supplied as 12 separate strips",
            "3 metres of coverage in total",
            "Strips can be placed individually where birds land",
            "No cutting required to cover several short ledges",
            "Suits sills, copings and flat ledges",
          ]}
          asin="B09B2FSW55"
          bestFor="Best Overall"
          rank={1}
        />
      </div>
      <p>
        Stainless steel is the material to want on a pigeon spike, because it is
        the one that survives a British winter on an exposed sill without
        rusting into a stain down the brickwork below it. This kit is supplied
        as twelve separate strips making up three metres in total, which is the
        practical advantage over one long run: you cut nothing, and you place
        strips only where birds actually land.
      </p>
      <p>
        Three metres covers most domestic jobs, a couple of window sills and a
        length of coping, with strips left over for the spots you find later. It
        takes our top place because it is the most completely specified product
        here, not because we have tested it against the others. Spikes work by
        denying a bird somewhere to stand, so where you put them matters more
        than any claim made about the spikes themselves.
      </p>

      {/* Product 2 */}
      <h2 id="best-wide-ledges">
        Best for Wide Ledges — Defender Wide Plastic Bird Spikes
      </h2>
      <div className="not-prose">
        <ProductCard
          name="Defender Wide Plastic Bird Spikes (5m)"
          features={[
            "Wide base for deeper ledges",
            "5 metre run, the longest on this page",
            "Plastic rather than stainless steel",
            "From Defender, an established UK deterrent brand",
            "Less visually obtrusive on light stonework",
            "Will not rust or stain brickwork",
          ]}
          asin="B006Y9L57S"
          bestFor="Best for Wide Ledges"
          rank={2}
        />
      </div>
      <p>
        Defender is a long-established UK deterrent brand, and this is its wide
        plastic spike sold in a five-metre run. Wide is the operative word: a
        wider base spans a deeper ledge, which matters on sills, parapets and
        wall copings where a narrow strip leaves a landing space beside it.
      </p>
      <p>
        Plastic rather than steel is a genuine trade-off rather than a
        downgrade. It is less obtrusive against light stonework and it cannot
        stain, but it does not carry the same reputation for longevity in strong
        sunlight as stainless steel. At five metres this is the longest single
        run on this page, so it is the sensible choice when you have a lot of
        continuous ledge to cover.
      </p>

      {/* Product 3 */}
      <h2 id="steel-3m-strip">Stainless Steel Bird Spikes (3m)</h2>
      <div className="not-prose">
        <ProductCard
          name="Stainless Steel Bird Spikes (3m)"
          features={[
            "Stainless steel construction",
            "3 metre run",
            "No manufacturer name attached to the listing",
            "Currently available in the UK",
            "Suits standard sills and flat ledges",
            "Plain specification with no added features",
          ]}
          asin="B07L19T8L4"
          bestFor="Best 3m Coverage"
          rank={3}
        />
      </div>
      <p>
        This is a plain, unbranded three-metre stainless steel spike strip, and
        that is the whole description. There is no manufacturer name attached to
        the listing and no feature that sets it apart from the branded steel
        options above and below it.
      </p>
      <p>
        We include it because it is a currently available UK listing at the
        standard three-metre length, and because not every job needs a brand on
        the packaging. If you want steel and you want three metres, this does
        that and nothing more. Judge it on that basis rather than on any claim
        we are in a position to make about it.
      </p>

      {/* Product 4 */}
      <h2 id="best-for-gutters">
        Best for Gutters — Stainless Steel Half Round Gutter Kit
      </h2>
      <div className="not-prose">
        <ProductCard
          name="Stainless Steel Pigeon Spikes Half Round Gutter Kit (1m)"
          features={[
            "Half-round profile shaped for guttering",
            "Stainless steel construction",
            "1 metre kit",
            "Fits curved surfaces a flat strip cannot",
            "For gutter runs rather than flat ledges",
            "Can be combined with flat strips elsewhere on the building",
          ]}
          asin="B004EE18JK"
          bestFor="Best for Gutters"
          rank={4}
        />
      </div>
      <p>
        Guttering is the one place a standard flat spike strip does not work,
        because the surface is curved and a flat base cannot sit against it.
        This is a half-round kit built for exactly that shape, supplied as a
        one-metre run.
      </p>
      <p>
        One metre is short by the standards of the rest of this page, and
        deliberately so, because you are covering a specific gutter run rather
        than a whole elevation. If pigeons are roosting on your guttering rather
        than your sills, this is the shape that fits. If they are using both,
        you will need this and one of the flat strips above it.
      </p>

      {/* Product 5 */}
      <h2 id="offo-steel-spikes">OFFO Stainless Steel Bird Spikes</h2>
      <div className="not-prose">
        <ProductCard
          name="OFFO Stainless Steel Bird Spikes"
          features={[
            "Stainless steel construction",
            "Named-brand listing from OFFO",
            "Currently available in the UK",
            "Check pack size and length on the listing",
            "Alternative to the unbranded steel strip above",
            "Suits sills, copings and flat ledges",
          ]}
          asin="B0BL7PF3WG"
          bestFor="Best Stainless Steel Strips"
          rank={5}
        />
      </div>
      <p>
        OFFO is a named brand selling stainless steel spike strips, and it sits
        here as the branded steel alternative to the unbranded option further up
        this page.
      </p>
      <p>
        We hold no length or strip count for this listing, so we are not going
        to state one. What we can say is that it is stainless steel, it is
        currently available in the UK, and it comes from a seller who puts a
        name to it. Check the pack size on the listing before you buy, because
        the length of ledge you need to cover is the only number that decides
        whether it is enough.
      </p>

      {/* Product 6 */}
      <h2 id="best-large-areas">
        Best for Large Areas — Birdgo Anti-Pigeon Netting
      </h2>
      <div className="not-prose">
        <ProductCard
          name="Birdgo Anti-Pigeon Netting (5m x 5m)"
          features={[
            "5m x 5m net, 25 square metres of coverage",
            "Excludes birds from an entire opening rather than a ledge",
            "Suits balconies, car ports and light wells",
            "Must be fitted taut to work correctly",
            "A larger installation job than a spike strip",
            "The most complete exclusion method on this page",
          ]}
          asin="B07KB3PGZB"
          bestFor="Best for Large Areas"
          rank={6}
        />
      </div>
      <p>
        Netting solves a different problem from spikes. Spikes deny a bird a
        narrow ledge; netting closes off an entire opening, which is what you
        need for a balcony, a car port, a light well, or the underside of a
        raised structure.
      </p>
      <p>
        This is a five by five metre net, twenty-five square metres, which is
        more area than any spike strip on this page could address. Fitting it is
        a bigger job than sticking down a strip, and a slack net traps birds
        instead of excluding them, so tension it properly and check the edges
        are closed. Done correctly it is the most complete exclusion on this
        page.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>
            Never use pigeon netting that is loose or poorly maintained —
            sagging net can entangle birds, which is both an animal welfare
            concern and a potential criminal offence under the Wildlife and
            Countryside Act 1981.
          </p>
        </Callout>
      </div>

      {/* How to Choose */}
      <h2 id="how-to-choose">How to Choose the Right Pigeon Deterrent</h2>
      <p>
        The right pigeon deterrent depends on your property, the surface you
        need to protect, and the severity of the problem. Here are the key
        factors:
      </p>
      <h3>Spikes vs Netting</h3>
      <p>
        <strong>Spikes</strong> are best for linear surfaces: window ledges,
        wall copings, gutters, roof ridges, signs, and fences.{" "}
        <strong>Netting</strong> is best for large open areas: balconies,
        under-eave gaps, flat roofs, and courtyards. Most homes need spikes;
        commercial buildings often need both.
      </p>
      <h3>Stainless Steel vs Polycarbonate</h3>
      <p>
        <strong>Stainless steel</strong> spikes are more effective against
        pigeons and larger gulls because the rigid pins cannot be pushed aside.
        They last 15 to 25 years. <strong>Polycarbonate</strong> spikes are
        cheaper, nearly invisible, and effective against smaller birds. For
        pigeon control specifically, stainless steel is the better investment.
      </p>
      <h3>Adhesive vs Screw Fixing</h3>
      <p>
        <strong>Adhesive</strong> (outdoor silicone sealant) is quicker,
        cleaner, and works on smooth surfaces like PVC, painted wood, and
        polished stone. <strong>Screw fixing</strong> is more secure and better
        for rough or textured surfaces like brick and concrete, and for exposed
        locations subject to strong winds.
      </p>
      <h3>Coverage Needed</h3>
      <p>
        Measure every surface where pigeons currently land. You must cover the{" "}
        <strong>entire length</strong> — any gap, even 10 cm, allows pigeons to
        land beside the spikes. Most terraced houses need 5 to 10 metres;
        detached houses with multiple windowsills and a roof ridge may need 15
        metres or more.
      </p>

      {/* Tips */}
      <h2 id="tips">Installation Tips</h2>
      <ol>
        <li>
          <strong>Clean first:</strong> Remove all pigeon droppings, nesting
          material, and debris before installing. Wear a dust mask — dried
          pigeon droppings can carry fungal spores. Adhesive will not bond to a
          dirty surface.
        </li>
        <li>
          <strong>Cover the full width:</strong> Use wider spike strips or two
          rows side by side on ledges wider than one strip covers. Pigeons will
          land on any uncovered area.
        </li>
        <li>
          <strong>Leave no gaps:</strong> Butt strips tightly together. Pigeons
          can squeeze into remarkably small spaces.
        </li>
        <li>
          <strong>Use silicone, not superglue:</strong> Outdoor silicone sealant
          (like CT1 or Stixall) provides a flexible, weatherproof bond.
          Superglue becomes brittle in cold weather and fails.
        </li>
        <li>
          <strong>Check after storms:</strong> High winds can occasionally
          dislodge adhesive-mounted spikes. Walk around your property after
          severe weather and re-fix any loose strips.
        </li>
        <li>
          <strong>Consider all landing points:</strong> Pigeons land on ledges,
          gutters, chimney pots, aerials, satellite dishes, and flat roof edges.
          If you only spike the window ledges, they will simply move to the next
          available surface.
        </li>
        <li>
          <strong>Combine methods:</strong> For severe infestations, combine
          spikes on ledges with netting under eaves and a regular cleaning
          schedule. Removing food sources (unsecured bins, bird feeders) also
          reduces pigeon pressure.
        </li>
      </ol>

      <div className="not-prose">
        <StatCallout
          value="12 kg"
          label="of droppings produced per pigeon per year — enough to cause significant property damage"
        />
      </div>

      <FindProviderCTA
        heading="Need professional pigeon proofing?"
        subtext="For multi-storey buildings or severe infestations, professional installation ensures complete coverage and compliance. Find BPCA-certified bird control specialists near you."
      />

      {/* FAQ */}
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
