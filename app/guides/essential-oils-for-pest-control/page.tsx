import { Metadata } from 'next';
import Link from 'next/link';
import GuideLayout from '@/components/GuideLayout';
import Callout from '@/components/Callout';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Essential Oils for Pest Control UK: Which Oils Repel Which Pests',
    description:
      'Peppermint, eucalyptus, tea tree, lavender — which essential oils actually repel pests? Complete UK guide with dilution ratios and application methods.',
    alternates: {
      canonical: 'https://pestproindex.com/guides/essential-oils-for-pest-control',
    },
    openGraph: {
      title: 'Essential Oils for Pest Control UK: Which Oils Repel Which Pests',
      description:
        'Peppermint, eucalyptus, tea tree, lavender — which essential oils actually repel pests? Complete UK guide with dilution ratios and application methods.',
      url: 'https://pestproindex.com/guides/essential-oils-for-pest-control',
      type: 'article',
      siteName: 'PestPro Index',
    },
  };
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Essential Oils for Pest Control UK: Which Oils Repel Which Pests',
  description: 'Peppermint, eucalyptus, tea tree, lavender — which essential oils actually repel pests? Complete UK guide with dilution ratios and application methods.',
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
  author: { '@type': 'Organization', name: 'PestPro Index' },
  publisher: { '@type': 'Organization', name: 'PestPro Index', url: 'https://pestproindex.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pestproindex.com/guides/essential-oils-for-pest-control' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pestproindex.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://pestproindex.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'Essential Oils for Pest Control', item: 'https://pestproindex.com/guides/essential-oils-for-pest-control' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do essential oils actually repel pests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many essential oils have scientifically documented repellent properties against specific pests. Peppermint oil for mice and spiders, citronella for mosquitoes, and cedar oil for moths all have research backing. However, essential oils are repellents, not killers — they deter pests from treated areas but will not eliminate an established infestation. They work best as part of a prevention strategy alongside physical proofing and good hygiene.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best essential oil for pest control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Peppermint oil is the most versatile essential oil for pest control, with moderate to strong evidence against mice, spiders, ants, and general crawling insects. For flying insects, citronella oil has the strongest evidence. For moths, cedar oil is the gold standard. The best approach is to use the specific oil that targets your particular pest rather than relying on one oil for everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are essential oils safe to use for pest control around pets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most essential oils should be used with caution around pets, especially cats. Tea tree oil is particularly toxic to cats and should never be used in homes with cats. Peppermint oil can also irritate cats. Dogs are generally more tolerant but can still be affected by strong concentrations. Always dilute oils properly, ensure good ventilation, and keep undiluted oils away from pets. Consult a vet before using essential oils in homes with birds or small pets such as hamsters and rabbits.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to reapply essential oils for pest control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most essential oil applications need refreshing every 3 to 7 days as the volatile compounds evaporate. Peppermint oil typically lasts 5 to 7 days indoors. Citronella and most other oils fade within 3 to 5 days. Outdoor applications evaporate faster, especially in warm or windy conditions. Cotton wool balls soaked in oil last longer than spray applications because the oil evaporates more slowly from the absorbent material.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can essential oils replace professional pest control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Essential oils are repellents that deter pests from specific treated areas. They cannot eliminate an established infestation, destroy nests, or kill large populations of pests. They are best used as part of a prevention strategy — keeping pests from entering in the first place. If you already have an active infestation of any kind, essential oils alone will not resolve it, and professional treatment may be necessary.',
      },
    },
  ],
};

const tocItems = [
  { id: 'honest-assessment', title: 'An Honest Assessment' },
  { id: 'oil-guide', title: 'Oil-by-Oil Guide with Evidence Ratings' },
  { id: 'quick-reference', title: 'Quick Reference Table' },
  { id: 'how-to-use', title: 'How to Use Essential Oils for Pest Control' },
  { id: 'safety', title: 'Safety Warnings' },
  { id: 'products', title: 'Best Essential Oil Products for Pest Control' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function EssentialOilsForPestControlPage() {
  return (
    <GuideLayout
      title="Essential Oils for Pest Control UK: Which Oils Repel Which Pests"
      subtitle="The definitive UK reference guide to essential oils for pest control — evidence ratings, dilution ratios, application methods, and safety warnings"
      lastUpdated="April 2026"
      readingTime="16 min"
      breadcrumbParent={{ label: 'Guides', href: '/guides' }}
      tocItems={tocItems}
      relatedGuides={[
        { title: 'Natural Ant Repellents', href: '/guides/natural-ant-repellents' },
        { title: 'Natural Mouse Deterrents', href: '/guides/natural-mouse-deterrents' },
        { title: 'Natural Rat Deterrents', href: '/guides/natural-rat-deterrents' },
        { title: 'Natural Spider Repellents', href: '/guides/natural-spider-repellents' },
        { title: 'Natural Wasp Deterrents', href: '/guides/natural-wasp-deterrents' },
        { title: 'Natural Flea Remedies', href: '/guides/natural-flea-remedies' },
        { title: 'Natural Moth Repellents', href: '/guides/natural-moth-repellents' },
        { title: 'Natural Fox Deterrents', href: '/guides/natural-fox-deterrents' },
        { title: 'Plants That Repel Pests', href: '/guides/plants-that-repel-pests' },
        { title: 'Professional Pest Control vs DIY', href: '/guides/professional-pest-control-vs-diy' },
      ]}
      relatedProducts={[
        { title: 'Best Mouse Repellent UK 2026', href: '/best/mouse-repellent' },
        { title: 'Best Spider Repellent UK 2026', href: '/best/spider-repellent' },
        { title: 'Best Moth Killers UK 2026', href: '/best/moth-killers' },
        { title: 'Best Ultrasonic Pest Repellers UK 2026', href: '/best/ultrasonic-pest-repellers' },
      ]}
      articleSchema={articleSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ------------------------------------------------------------------ */}
      <h2 id="honest-assessment">An Honest Assessment of Essential Oils for Pest Control</h2>

      <p>
        Essential oils have become one of the most popular natural pest control methods in UK households. They are readily available, pleasant-smelling, and feel safer than chemical pesticides &mdash; particularly in homes with children and pets. But do they actually work?
      </p>
      <p>
        The honest answer is: <strong>some do, for some pests, to some degree.</strong> Essential oils are repellents, not killers. They deter pests from treated areas by creating an unpleasant sensory environment, but they will not eliminate an established infestation, destroy a nest, or kill a colony. Understanding this distinction is essential for using them effectively and avoiding disappointment.
      </p>
      <p>
        Below, we rate every commonly used essential oil for pest control based on the available scientific evidence, not marketing claims. Some oils have genuine research backing. Others have been riding on folklore and social media hype. We will tell you which is which.
      </p>

      <div className="not-prose">
        <Callout type="info">
          <p>Essential oils are repellents, not killers. They deter pests from areas you have treated. They will not eliminate an established infestation. Best used as part of a prevention strategy alongside physical proofing and good hygiene.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="oil-guide">Oil-by-Oil Guide with Evidence Ratings</h2>

      <p>
        Each oil below is rated on a 1 to 5 star evidence scale, where 5 stars means strong, peer-reviewed scientific evidence and 1 star means primarily anecdotal or folklore-based claims.
      </p>

      <h3>Peppermint Oil &mdash; Evidence: 3/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Mice, spiders, ants<br />
        Peppermint oil is the most widely used essential oil for pest control, and it has the most research to support its use. The active compound, <strong>menthol</strong>, overwhelms the sensitive olfactory systems of mice and spiders and disrupts ant pheromone trails. Multiple studies have documented measurable repellent effects against house mice and common house spiders.
      </p>
      <p>
        <strong>Evidence summary:</strong> A study published in the <em>Cornell Hospitality Quarterly</em> found that peppermint oil significantly reduced spider activity in treated hotel rooms. Research at the University of Nebraska demonstrated that concentrated peppermint oil caused avoidance behaviour in mice. However, the effects are temporary (5 to 7 days) and require high concentrations of pure oil. Cheap, diluted products are far less effective.
      </p>
      <p>
        <strong>Our verdict:</strong> The best general-purpose essential oil for pest control. Genuinely effective as a supplementary deterrent, particularly against mice and spiders. Not a standalone solution for established problems. For ready-made peppermint-based products, see our guides to <Link href="/best/spider-repellent" className="text-green-600 hover:underline">spider repellent sprays</Link> and <Link href="/best/mouse-repellent" className="text-green-600 hover:underline">mouse repellent sprays</Link>.
      </p>

      <h3>Citronella Oil &mdash; Evidence: 3/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Mosquitoes, flies, wasps<br />
        Citronella is the most well-researched essential oil for repelling flying insects, particularly mosquitoes. It is the active ingredient in citronella candles, outdoor torches, and many commercial insect repellent products. The compound <strong>citronellal</strong> masks the scents that mosquitoes use to locate hosts (carbon dioxide and body odour).
      </p>
      <p>
        <strong>Evidence summary:</strong> The US Environmental Protection Agency (EPA) has registered citronella oil as an insect repellent since 1948. Multiple studies confirm its effectiveness against mosquitoes, though its protection time (1 to 2 hours when applied to skin) is shorter than DEET-based repellents. When used as an area repellent (sprayed on furniture, burned in candles), it provides a moderate reduction in flying insect activity.
      </p>
      <p>
        <strong>Our verdict:</strong> Well-established and genuine mosquito and flying insect repellent. Most useful for outdoor areas during summer. Limited effect against crawling pests.
      </p>

      <h3>Lavender Oil &mdash; Evidence: 3/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Moths, fleas, flies<br />
        Lavender oil contains <strong>linalool and linalyl acetate</strong>, compounds with documented insecticidal and repellent properties. Lavender has the longest history of any essential oil in pest control &mdash; dried lavender sachets have been used to protect clothing from moths for centuries across European and Asian cultures.
      </p>
      <p>
        <strong>Evidence summary:</strong> A study in the <em>Journal of Vector Ecology</em> demonstrated that lavender oil was an effective repellent against certain mosquito species. Research published in <em>Parasitology Research</em> showed lavender oil had significant repellent activity against cat fleas. For moths, the traditional evidence is compelling even if large-scale scientific trials are limited.
      </p>
      <p>
        <strong>Our verdict:</strong> An excellent and well-established moth repellent with additional benefits against fleas and flying insects. One of the most pleasant-smelling options for home use.
      </p>

      <h3>Cedar Oil &mdash; Evidence: 3/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Moths, fleas<br />
        Cedar oil, extracted from cedar wood, contains <strong>cedrol and cedrene</strong> &mdash; compounds that are directly toxic to clothes moth larvae and repellent to adult moths. Cedar has centuries of documented use as a textile protectant, from Egyptian cedar chests to modern cedar-lined wardrobes.
      </p>
      <p>
        <strong>Evidence summary:</strong> Research published in the <em>Journal of Economic Entomology</em> confirmed that cedar oil is toxic to clothes moth larvae at sufficient concentrations. Cedar chips and blocks in enclosed spaces (wardrobes, drawers, storage boxes) create an environment that is genuinely hostile to moth development. The evidence is stronger for cedar than for any other moth repellent.
      </p>
      <p>
        <strong>Our verdict:</strong> The gold standard for natural moth protection. If moths are your concern, cedar is the oil to use. Also effective against fleas.
      </p>

      <h3>Clove Oil &mdash; Evidence: 2/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Ants, wasps, flies<br />
        Clove oil contains <strong>eugenol</strong>, a phenolic compound with established insecticidal properties. Eugenol is used commercially in some organic pesticide formulations. The strong, spicy scent of clove oil is a broad-spectrum insect repellent with particular effectiveness against ants and wasps.
      </p>
      <p>
        <strong>Evidence summary:</strong> Eugenol has been studied as an insecticide and contact toxin against a range of insects. The 2013 study in <em>Pest Management Science</em> found that a combination of clove, lemongrass, and geranium oils significantly reduced wasp activity. However, most research has focused on eugenol as a compound rather than clove oil specifically as a consumer pest repellent.
      </p>
      <p>
        <strong>Our verdict:</strong> A useful component of essential oil blends, particularly for wasps and ants. Best used in combination with other oils rather than alone.
      </p>

      <h3>Eucalyptus Oil &mdash; Evidence: 2/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Spiders, flies<br />
        Eucalyptus oil, containing <strong>eucalyptol (1,8-cineole)</strong>, has mild repellent properties against spiders and flying insects. The strong, medicinal scent is thought to overwhelm insect chemoreceptors. Lemon eucalyptus oil (<em>Corymbia citriodora</em>) has better evidence as a mosquito repellent than standard eucalyptus.
      </p>
      <p>
        <strong>Our verdict:</strong> A reasonable alternative for people who dislike peppermint. The evidence is weaker than for peppermint, citronella, or cedar. Lemon eucalyptus is the better choice if mosquitoes are your primary concern.
      </p>

      <h3>Tea Tree Oil &mdash; Evidence: 2/5 Stars</h3>
      <p>
        <strong>Best for:</strong> General insect repellent<br />
        Tea tree oil has broad antibacterial and antifungal properties, and some repellent activity against a range of insects. The evidence for tea tree as a pest-specific repellent is limited compared to peppermint, citronella, or cedar.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p><strong>Tea tree oil is toxic to cats.</strong> Even small amounts can cause vomiting, tremors, and liver damage in cats. Never use tea tree oil in homes with cats, and keep all tea tree products securely stored away from pets.</p>
        </Callout>
      </div>

      <p>
        <strong>Our verdict:</strong> Not a first-choice pest control oil. The pet safety concerns, particularly for cats, make it a poor choice for home use. Better alternatives exist for every pest it claims to repel.
      </p>

      <h3>Lemongrass Oil &mdash; Evidence: 2/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Mosquitoes, flies<br />
        Lemongrass oil is closely related to citronella and contains similar repellent compounds, particularly <strong>citral</strong>. It is effective against mosquitoes and other flying insects, though slightly less potent than citronella. It has a pleasant, clean scent that many people prefer to citronella.
      </p>
      <p>
        <strong>Our verdict:</strong> A good alternative to citronella for flying insect repellence. Particularly useful in essential oil blends for outdoor areas.
      </p>

      <h3>Rosemary Oil &mdash; Evidence: 2/5 Stars</h3>
      <p>
        <strong>Best for:</strong> Moths, mosquitoes, flies<br />
        Rosemary oil has mild repellent properties against several pests and has been used in traditional moth-repellent herb mixtures for centuries. The active compounds include <strong>camphor and 1,8-cineole</strong>. It works best as part of a blend rather than as a standalone repellent.
      </p>
      <p>
        <strong>Our verdict:</strong> A pleasant supplementary oil best used in combination with cedar or lavender for moths, or with citronella for flying insects.
      </p>

      <h3>Neem Oil &mdash; Evidence: 3/5 Stars</h3>
      <p>
        <strong>Best for:</strong> General insect repellent, garden pests<br />
        Neem oil, derived from the neem tree (<em>Azadirachta indica</em>), contains <strong>azadirachtin</strong>, a compound with documented insecticidal, repellent, and anti-feeding properties. Neem is widely used in organic farming as a natural pesticide and is approved for use in UK organic agriculture.
      </p>
      <p>
        <strong>Evidence summary:</strong> Neem oil is one of the most scientifically studied natural insecticides. Azadirachtin disrupts insect hormones, preventing feeding, growth, and reproduction. It is effective against a wide range of garden pests including aphids, whitefly, caterpillars, and spider mites. For household pest control, neem oil is less commonly used but has genuine repellent properties.
      </p>
      <p>
        <strong>Our verdict:</strong> Excellent for garden pest control. Less practical for household use due to its strong, unpleasant smell. A standout choice for organic gardeners.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 id="quick-reference">Quick Reference Table</h2>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Oil</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Best For</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Evidence</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">How to Use</th>
              <th className="text-left p-3 border-b border-gray-200 font-bold text-gray-900">Refresh</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Peppermint</td>
              <td className="p-3 text-gray-700">Mice, spiders, ants</td>
              <td className="p-3 text-gray-700">3/5</td>
              <td className="p-3 text-gray-700">Spray or cotton balls</td>
              <td className="p-3 text-gray-700">5&ndash;7 days</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Citronella</td>
              <td className="p-3 text-gray-700">Mosquitoes, flies, wasps</td>
              <td className="p-3 text-gray-700">3/5</td>
              <td className="p-3 text-gray-700">Spray, candles, diffuser</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Lavender</td>
              <td className="p-3 text-gray-700">Moths, fleas, flies</td>
              <td className="p-3 text-gray-700">3/5</td>
              <td className="p-3 text-gray-700">Sachets, spray, cotton balls</td>
              <td className="p-3 text-gray-700">5&ndash;7 days</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Cedar</td>
              <td className="p-3 text-gray-700">Moths, fleas</td>
              <td className="p-3 text-gray-700">3/5</td>
              <td className="p-3 text-gray-700">Blocks, chips, oil on wood</td>
              <td className="p-3 text-gray-700">3&ndash;6 months (sand to refresh)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Clove</td>
              <td className="p-3 text-gray-700">Ants, wasps, flies</td>
              <td className="p-3 text-gray-700">2/5</td>
              <td className="p-3 text-gray-700">Spray blend, sachets</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Eucalyptus</td>
              <td className="p-3 text-gray-700">Spiders, flies</td>
              <td className="p-3 text-gray-700">2/5</td>
              <td className="p-3 text-gray-700">Spray or cotton balls</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Tea tree</td>
              <td className="p-3 text-gray-700">General insects</td>
              <td className="p-3 text-gray-700">2/5</td>
              <td className="p-3 text-gray-700">Spray (NO cats!)</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="p-3 font-medium text-gray-900">Lemongrass</td>
              <td className="p-3 text-gray-700">Mosquitoes, flies</td>
              <td className="p-3 text-gray-700">2/5</td>
              <td className="p-3 text-gray-700">Spray, diffuser</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3 font-medium text-gray-900">Rosemary</td>
              <td className="p-3 text-gray-700">Moths, flies, mosquitoes</td>
              <td className="p-3 text-gray-700">2/5</td>
              <td className="p-3 text-gray-700">Sachets, spray blend</td>
              <td className="p-3 text-gray-700">3&ndash;5 days</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-gray-900">Neem</td>
              <td className="p-3 text-gray-700">Garden pests, general insects</td>
              <td className="p-3 text-gray-700">3/5</td>
              <td className="p-3 text-gray-700">Garden spray, diluted</td>
              <td className="p-3 text-gray-700">5&ndash;7 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="how-to-use">How to Use Essential Oils for Pest Control</h2>

      <h3>Spray Bottle Method (Most Common)</h3>
      <p>
        The most practical way to use essential oils for pest control is as a diluted spray. Here is the standard recipe:
      </p>
      <ul>
        <li><strong>10 to 15 drops</strong> of essential oil per 250ml (1 cup) of water</li>
        <li>Add a small squirt of <strong>washing-up liquid</strong> (acts as an emulsifier to help the oil mix with the water)</li>
        <li><strong>Shake well</strong> before every use &mdash; oil and water separate naturally</li>
        <li>Spray along skirting boards, windowsills, door frames, and entry points</li>
        <li>Use a <strong>glass spray bottle</strong> if possible &mdash; some essential oils can degrade plastic over time</li>
      </ul>

      <h3>Cotton Wool Ball Method</h3>
      <p>
        For targeted, longer-lasting application, soak cotton wool balls in <strong>undiluted</strong> essential oil and place them at specific locations: behind kitchen appliances, inside airing cupboards, in loft hatches, near gaps in skirting boards, and inside wardrobes. The cotton absorbs the oil and releases it slowly over several days, providing a more concentrated and longer-lasting barrier than spraying. Replace every 5 to 7 days.
      </p>

      <h3>Diffuser Method</h3>
      <p>
        Electric or reed diffusers can distribute essential oils throughout a room, creating a general pest-unfriendly environment. This is most effective for flying insects (using citronella or lemongrass) and provides pleasant background scent as a bonus. However, a diffuser provides a lower concentration than targeted spray or cotton ball application, so it is less effective against determined pests like mice.
      </p>

      <h3>Direct Application to Materials</h3>
      <p>
        For moth protection, apply cedar or lavender oil directly to cotton pads, sachets, or cedar wood blocks and place inside wardrobes and drawers. For outdoor use, apply peppermint or citronella oil to the legs and frames of garden furniture to deter wasps and spiders from settling.
      </p>

      <div className="not-prose">
        <Callout type="tip">
          <p>Use glass spray bottles rather than plastic. Essential oils — particularly citrus oils and tea tree — can degrade certain plastics over time, causing the bottle to break down and the oil to lose potency.</p>
        </Callout>
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="safety">Safety Warnings</h2>

      <p>
        Essential oils are natural, but natural does not mean harmless. They are <strong>concentrated chemical compounds</strong> extracted from plants, and improper use can cause harm. Follow these safety guidelines:
      </p>

      <h3>Never Apply Undiluted to Skin</h3>
      <p>
        Undiluted essential oils can cause skin irritation, chemical burns, and allergic reactions. Always dilute oils in water (for spraying) or apply to materials (cotton balls, sachets) rather than directly to skin. If skin contact occurs, wash with soap and water immediately.
      </p>

      <h3>Cat Safety &mdash; Critical</h3>
      <p>
        Cats lack a liver enzyme (glucuronyl transferase) that is needed to metabolise certain compounds found in essential oils. This makes several oils <strong>toxic to cats</strong>, including:
      </p>
      <ul>
        <li><strong>Tea tree oil</strong> &mdash; the most dangerous for cats, even in small amounts</li>
        <li><strong>Peppermint oil</strong> &mdash; can cause respiratory distress and liver damage</li>
        <li><strong>Eucalyptus oil</strong> &mdash; toxic if ingested or inhaled in concentration</li>
        <li><strong>Clove oil</strong> &mdash; contains eugenol, which is toxic to cats</li>
        <li><strong>Citrus oils</strong> (lemon, orange, lime) &mdash; contain limonene and linalool, both toxic to cats</li>
      </ul>
      <p>
        If you have cats, the safest pest-control oils are <strong>cedar and lavender</strong>, used in well-ventilated spaces and not applied to areas where cats rest or groom. Even these should be used with caution. Consult your vet if you are unsure.
      </p>

      <div className="not-prose">
        <Callout type="warning">
          <p>Tea tree oil is extremely toxic to cats. Even diffusing tea tree oil in a room where a cat spends time can cause symptoms. Never use tea tree products in homes with cats.</p>
        </Callout>
      </div>

      <h3>Dog Safety</h3>
      <p>
        Dogs are generally more tolerant of essential oils than cats but can still be affected by strong concentrations. Avoid applying essential oils to dog bedding directly, and ensure dogs cannot access or ingest oil-soaked cotton balls. Tea tree oil is also toxic to dogs in large quantities.
      </p>

      <h3>Children</h3>
      <p>
        Keep all essential oils out of reach of children. Ingestion of even small amounts of concentrated essential oil can cause nausea, vomiting, and in severe cases, respiratory distress. Spray applications that dry on surfaces are generally safe once the area has air-dried.
      </p>

      <h3>Avoid Inhaling Concentrated Vapours</h3>
      <p>
        When mixing or applying essential oils, ensure the area is well ventilated. Avoid spraying in small, enclosed spaces with poor airflow. People with asthma or respiratory conditions should be particularly cautious, as strong volatile compounds can trigger symptoms.
      </p>

      {/* ------------------------------------------------------------------ */}
      <h2 id="products">Best Essential Oil Products for Pest Control</h2>

      <p>
        These are our top picks for essential oils and accessories specifically suited to pest control use in the UK.
      </p>

      <div className="not-prose space-y-6 my-8">
        <ProductCard
          name="Nikura Peppermint Essential Oil (10ml, 100% Pure)"
          rating={4.6}
          features={[
            '100% pure peppermint oil — no dilution or additives',
            'UK-made, vegan, and cruelty-free',
            'High menthol content for maximum pest repellent effect',
            'Specifically marketed for repelling spiders, mice, ants',
          ]}
          price="£4.99"
          asin="B01ENGPL1E"
          bestFor="Best Overall Oil"
        />

        <ProductCard
          name="Citronella Essential Oil (10ml, Pure)"
          rating={4.3}
          features={[
            '100% pure citronella oil — the classic mosquito repellent',
            'Use in spray bottles, diffusers, or on outdoor furniture',
            'Also effective against flies and wasps',
            'Mix with lemongrass for a stronger outdoor blend',
          ]}
          price="£3.99"
          asin="B09M93THY5"
          bestFor="Best for Flying Insects"
        />

        <ProductCard
          name="Nikura Cedarwood Essential Oil (10ml, 100% Pure)"
          rating={4.5}
          features={[
            'Himalayan cedarwood — rich, warm, woody scent',
            'The gold standard for natural moth protection',
            'Apply to cedar blocks, sachets, or cotton pads',
            'Also effective against fleas and other fabric pests',
          ]}
          price="£4.99"
          asin="B01LBDBKVM"
          bestFor="Best for Moths"
        />

        <ProductCard
          name="Amber Glass Spray Bottles (2 x 500ml)"
          rating={4.4}
          features={[
            'Amber glass protects oil from UV degradation',
            'Essential oils can degrade plastic — glass is better',
            '500ml capacity — ideal for diluted pest control sprays',
            'Trigger sprayer for easy, even application',
          ]}
          price="£10.50"
          asin="B08782Q67D"
          bestFor="Best Spray Bottles"
        />

        <ProductCard
          name="EcoWidow Natural Pest Repellent Spray (500ml)"
          rating={4.1}
          features={[
            'Pre-mixed essential oil blend — ready to use',
            'No mixing or measuring required',
            'Eco-friendly formula using plant-based oils',
            'Ideal for people who prefer convenience over DIY mixing',
          ]}
          price="£9.99"
          asin="B09YDBWL4F"
          bestFor="Best Pre-Mixed Option"
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Do essential oils actually repel pests?</h3>
      <p>
        Yes, many essential oils have scientifically documented repellent properties against specific pests. Peppermint oil for mice and spiders, citronella for mosquitoes, and cedar oil for moths all have research backing. However, essential oils are repellents, not killers &mdash; they deter pests from treated areas but will not eliminate an established infestation. They work best as part of a prevention strategy alongside <Link href="/guides/professional-pest-control-vs-diy" className="text-blue-600 hover:text-blue-800 underline">physical proofing and good hygiene</Link>.
      </p>

      <h3>What is the best essential oil for pest control?</h3>
      <p>
        Peppermint oil is the most versatile essential oil for pest control, with moderate to strong evidence against mice, spiders, ants, and general crawling insects. For flying insects, citronella oil has the strongest evidence. For moths, cedar oil is the gold standard. The best approach is to use the specific oil that targets your particular pest rather than relying on one oil for everything &mdash; see our <a href="#quick-reference" className="text-blue-600 hover:text-blue-800 underline">quick reference table</a> above.
      </p>

      <h3>Are essential oils safe to use for pest control around pets?</h3>
      <p>
        Most essential oils should be used with caution around pets, especially cats. <strong>Tea tree oil is particularly toxic to cats</strong> and should never be used in homes with cats. Peppermint oil can also irritate cats. Dogs are generally more tolerant but can still be affected by strong concentrations. Always dilute oils properly, ensure good ventilation, and keep undiluted oils away from all pets. Consult a vet before using essential oils in homes with birds, rabbits, or other small pets.
      </p>

      <h3>How often do I need to reapply essential oils for pest control?</h3>
      <p>
        Most essential oil applications need refreshing every <strong>3 to 7 days</strong> as the volatile compounds evaporate. Peppermint oil typically lasts 5 to 7 days indoors. Citronella and most other oils fade within 3 to 5 days. Outdoor applications evaporate faster, especially in warm or windy conditions. Cotton wool balls soaked in oil last longer than spray applications because the oil evaporates more slowly from the absorbent material. Cedar blocks and chips last months but should be sanded periodically to refresh the surface.
      </p>

      <h3>Can essential oils replace professional pest control?</h3>
      <p>
        No. Essential oils are repellents that deter pests from specific treated areas. They cannot eliminate an established infestation, destroy nests, or kill large populations of pests. They are best used as part of a prevention strategy &mdash; keeping pests from entering in the first place. If you already have an active infestation of any kind, essential oils alone will not resolve it, and <Link href="/guides/professional-pest-control-vs-diy" className="text-blue-600 hover:text-blue-800 underline">professional treatment</Link> may be necessary.
      </p>
    </GuideLayout>
  );
}
