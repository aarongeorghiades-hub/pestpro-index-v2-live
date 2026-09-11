// S73 — THE DECISION BOX, EXTRACTED.
//
// WHY IT EXISTS. This block was inlined, byte-identically, in 49 /best route
// files. Its heading carried `uppercase tracking-wide`, which the S72 design
// pilot rules out as an eyebrow treatment — and because the markup lived in
// route files rather than a component, the only way to restyle it from the
// shared stylesheet was an unlayered or !important rule that outranked
// Tailwind's utilities layer. THAT IS THE EXACT FAULT FIXED AT S70 R1, where an
// unlayered `body { font-family: Arial }` silently beat the whole theme chain
// and the estate rendered in Arial for months. The S72 pilot therefore refused
// the override and reported the block instead. This is the clean remedy: one
// component, styled at the component level, no cascade tricks anywhere.
//
// THE HEADING TEXT IS BYTE-IDENTICAL TO WHAT THE 49 ROUTES RENDERED. This is a
// styling extraction, not a content edit. Only the classes changed:
//   before  m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600
//   after   m-0 mb-3 text-sm font-semibold text-[var(--color-ink)]
// The uppercase transform and the letter-spacing are gone; the words are not.
//
// THE CHILDREN ARE THE ROUTE'S OWN <li> ITEMS, PASSED THROUGH UNTOUCHED. Each
// route's situation lines, their <strong> leads and their in-page anchors move
// across unchanged — the component supplies the container and the list, never
// the content.

export default function DecisionBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-6 rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] p-4">
      <p className="m-0 mb-3 text-sm font-semibold text-[var(--color-ink)]">
        Start with your situation
      </p>
      <ul className="m-0 list-none space-y-2 p-0 text-sm text-[var(--color-ink-soft)]">
        {children}
      </ul>
    </div>
  );
}
