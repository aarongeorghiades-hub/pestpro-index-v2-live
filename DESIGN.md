---
name: PestPro Index
description: A UK directory of independent local pest control firms, set as a modern printed local directory.
colors:
  marigold: "#e4a91c"
  marigold-deep: "#634800"
  marigold-wash: "#fcf7e8"
  marigold-edge: "#e9d39a"
  ink: "#0f211a"
  ink-soft: "#3a4a43"
  ink-mute: "#5b6a63"
  stock: "#ffffff"
  forest: "#11261d"
  paper: "#f4f6f3"
  paper-sunk: "#eaeee8"
  rule: "#e1e6e1"
  rule-strong: "#c5cec7"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 9vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, Geist, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.01em"
  phone:
    fontFamily: "Archivo, Geist, Arial, sans-serif"
    fontSize: "1.625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Archivo, Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  meta:
    fontFamily: "Archivo, Geist, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Geist, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  mark: "2px"
  tab: "3px"
  control: "4px"
  panel: "6px"
  button: "8px"
  card: "12px"
spacing:
  gutter-mobile: "1.25rem"
  gutter-desktop: "2rem"
  entry: "1.5rem"
  section-mobile: "4rem"
  section-desktop: "6rem"
  container: "76rem"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    rounded: "{rounded.control}"
    padding: "0.6rem 1.1rem"
    height: "2.75rem"
  button-ink-hover:
    backgroundColor: "#1f3a2f"
  button-line:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.6rem 1.1rem"
    height: "2.75rem"
  call-button-mobile:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
    typography: "{typography.phone}"
    rounded: "{rounded.control}"
    height: "3.25rem"
    width: "100%"
  area-tab:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "0.45rem 0.7rem 0.4rem"
  top-rated-mark:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "3px 0.375rem"
  service-tag:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.tab}"
    padding: "0.25rem 0.5rem"
  featured-entry:
    backgroundColor: "{colors.marigold-wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0 1.75rem"
  running-head:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    height: "2.5rem"
---

# Design System: PestPro Index

## Overview

**Creative North Star: "The Local Directory, Rebuilt"**

The UK estate is set like a modern printed local directory: white stock, deep ink-green type, hairline rules, and one marigold accent used the way a directory uses its thumb-tabs and highlighter. Place names are set huge in condensed heavy Archivo. Firms are ruled entries in one even column, and the phone number is the loudest thing on each line. The page reads as a list you scan and call from, not as a set of floating cards.

Density is high but calm. Rows keep an even rhythm, numbers line up in tabular figures, and structure comes from rules (1px hairlines, 2px ink rules over list heads), not from boxes or shadows. Depth is almost absent: the only shadow sits under the desktop navigation drop panels. Motion is printed-matter motion. Rules draw in from the left as entries scroll into view, a marigold highlighter stroke draws once under "local" on the homepage, and the area running head eases in as the page head scrolls away.

What it refuses, as shipped: the blue gradient hero, the floating search box, and the grid of shadowed rounded cards. No emoji and no icon tiles. Lucide line icons appear only inline, at text size, beside the fact they label (postcode, rating, call, external link).

**Key Characteristics:**
- White stock ground, ink-green type, hairline ink-green rules.
- One marigold accent, used as a mark (tab, active underline, highlighter, Featured wash), never as text color.
- Archivo variable font: condensed heavy (wdth 72, weight 800) for display, wdth 80 for phone numbers, normal width for text.
- Tabular numerals for phone numbers, counts, ratings, postcodes and prices.
- Square-ish corners (2 to 6px). Flat surfaces.
- Ruled entries of equal rhythm, with a static closing rule at the end of each list.

## Colors

A near-monochrome ink-green on white, with one saturated marigold kept rare enough to stay a signal.

### Primary
- **Directory Marigold** (marigold): The thumb-tab color. It fills the area tab in the pinned running head, the "Featured" label, the "Index" tab in the wordmark, the 3px active-state underline in the top navigation, the homepage highlighter stroke, the small dot before the local-only note, and text selection. It never carries text in its own hue.
- **Marigold Deep** (marigold-deep): The text voice of the accent, at 7:1 on white. Used for "Paid placement", the "How featured listings work" link and the Featured badge on profiles.
- **Featured Wash** (marigold-wash): The ground of a paid Featured entry and the paid row on the For Professionals rate table. Nowhere else.
- **Featured Edge** (marigold-edge): Hairline border and inner divider of Featured entries, and the bottom border of a Featured area head.

### Neutral
- **Directory Ink** (ink): Headlines, firm names, phone numbers, primary buttons, the 1px rule under the area head, 2px rules over list heads, focus rings, and the full-bleed closing band and footer (white type on ink).
- **Ink Soft** (ink-soft): Body copy, standfirsts, entry summaries, inactive nav links.
- **Ink Mute** (ink-mute): Breadcrumbs, counts, meta lines, legends, "No Google rating yet".
- **Stock** (stock): The page ground of the directory, the header, the running head and line buttons.
- **Cool Paper** (paper): Alternate homepage band, and hover ground for light buttons on the ink band.
- **Paper Sunk** (paper-sunk): Service tag fill and the mobile menu button hover.
- **Hairline** (rule): Light dividers inside lists of links and the nav panel column divider.
- **Strong Hairline** (rule-strong): Entry rules, list closing rules, line-button borders, header bottom border, scrollbar thumb.

### Named Rules
**The Thumb-Tab Rule.** Marigold is a mark, not a surface: tabs, an active underline, a highlighter stroke, a dot, selection. The only marigold area larger than a label is the pale Featured wash, and that is reserved for paid placement.

**The No Marigold Text Rule.** Text never sits in marigold itself. Text on marigold is ink. Accent-colored text uses marigold-deep.

## Typography

**Display Font:** Archivo variable, width axis (falls back to Geist, then Arial)
**Body Font:** Archivo at normal width
**Label/Mono Font:** none in this world; tabular figures replace a mono face

**Character:** One family pulled two ways. Condensed and heavy, it is the directory's running head. At normal width it is plain and legible text. Width does the work a second typeface would.

### Hierarchy
- **Display** (800, wdth 72, clamp(2.75rem, 9vw, 6.5rem), 0.92, -0.02em, balanced wrap): Area names in the area head, max 18ch. The homepage H1 runs larger (clamp(3.25rem, 10.5vw, 7.25rem)) and closing bands at clamp(2.5rem, 6.5vw, 5rem).
- **Headline** (800, wdth 72, clamp(2.25rem, 5vw, 3.75rem), 0.92): Section heads, set in the narrow left column of a two-column section. Also large prices and step numbers (2.25rem to 3rem, tabular).
- **Title** (700, 1.1875rem mobile, 1.3125rem from md, -0.01em): Firm names in entries; 1.25rem bold for homepage route lines and definition terms.
- **Phone** (700, wdth 80, 1.625rem desktop / 1.375rem in the mobile call button, tabular): The loudest element on every entry.
- **Body** (400, 1rem to 1.0625rem, 1.625 to 1.75): Copy at ink-soft, capped at 56 to 62ch. Standfirsts run 1.125rem to 1.25rem.
- **Meta** (400 to 600, 0.875rem): Postcode, place, rating and review count lines; values inside them are semibold ink and tabular.
- **Label** (700, 0.8125rem, sentence case): Tabs, list heads, panel heads, footer group heads. The Top rated mark is 0.6875rem bold.

### Named Rules
**The Width Not Family Rule.** Hierarchy comes from Archivo's width and weight axes. Do not add a second display face.

**The Tabular Numbers Rule.** Every phone number, count, rating, review count, postcode and price is set with tabular figures so columns align like a printed directory.

## Layout

A single container (76rem max) with 1.25rem gutters, widening to 2rem from 768px. Area pages open with breadcrumbs, the display-scale place name and a standfirst, closed by a 1px ink rule. The Featured entry and then the ruled list start directly beneath, above the fold on desktop.

Entries are a one-column ruled list with 1.5rem vertical padding per row. On desktop each entry is two columns: firm facts left, phone and Website right-aligned. Below md the phone becomes a full-width ink call button. Lists end with a static closing rule and the Top rated legend in ink-mute.

Homepage and For Professionals sections run 4rem vertical padding (6rem from md) and use an asymmetric two-column grid from lg (1fr to 1.6fr, headline left, content right). The homepage first viewport pairs the H1 and route lines with an A-Z area index, ruled and with counts right-aligned. The index uses two text columns at sm and one at lg.

The site header is sticky at 64px. On area pages a 40px running head pins beneath it, carrying the area tab and the place name.

## Elevation & Depth

Flat. Depth comes from rules and tonal bands (stock, paper, ink), not shadow. The single exception is the desktop navigation drop panels, which carry one soft downward shadow so they read as lifted over the page.

### Shadow Vocabulary
- **Nav panel** (`box-shadow: 0 18px 40px -24px rgba(19,36,29,0.35)`): Desktop mega-menu panels only.

### Named Rules
**The Rules Not Shadows Rule.** Separate content with 1px strong hairlines and 2px ink rules. Entries, Featured blocks and panels carry no shadow.

## Shapes

Square-ish and printed. Tabs, tags and the Top rated mark use 3px corners. Buttons and the homepage arrow squares use 4px. The two bordered containers (the Featured entry and the profile contact panel) use 6px. The highlighter stroke and focus ring use 2px. Borders are 1px hairlines, with 2px ink rules marking the head of a list. The only skewed form is the highlighter stroke (skewX -8deg). The local-only dot is the only circle.

## Components

### Buttons
Solid and quiet, with no gradients or glows.
- **Shape:** 4px corners, minimum height 2.75rem (44px), 0.9375rem bold.
- **Ink (primary):** ink fill, stock text. Hover lifts to a lighter ink-green (#1f3a2f).
- **Line (secondary):** stock fill, strong-hairline border, ink text. Hover darkens the border to ink.
- **On ink bands:** white fill with ink text (hover to paper), or a white/30 outline with white text.
- **Hover / Focus / Active:** 0.18s color transitions. Pressed buttons move down 1px. Focus is a 2px ink outline at 2px offset, everywhere.

### Chips
- **Service tags:** paper-sunk fill, ink-soft 0.75rem semibold, 3px corners, no border. Facts stated by the provider only.
- **Top rated mark:** 1px ink outline, ink text, 0.6875rem bold, small filled star. A typographic fact, not a badge or prize. It follows the rating rule (4.5+ from 30+ reviews), and every list page explains it in its legend.

### Cards / Containers
- **Corner Style:** 6px, only on the Featured entry and the profile contact panel.
- **Background:** marigold-wash for Featured. Stock with a 1px ink border for the profile contact panel, which is sticky on desktop.
- **Shadow Strategy:** none.
- **Internal Padding:** 1.25rem to 1.75rem horizontal, 1.5rem vertical.

### Navigation
- **Header:** sticky, stock ground, strong-hairline bottom border, 64px tall. Wordmark is condensed "PestPro" with a marigold "Index" tab.
- **Links:** ink-soft at rest, ink on hover. The active link is ink with a 3px marigold underline sitting on the header's bottom edge.
- **Panels:** full-width stock drop panels with label-style heads (0.8125rem bold ink) and ink-soft links that underline on hover.
- **Footer:** ink band, white/70 links, condensed display wordmark, link groups that collapse to details rows below md.

### Directory Entry (signature)
One firm per ruled row: name (title) with the Top rated mark, a meta line (pin, bold tabular postcode, place; star, rating, review count), an optional summary and service tags, and then the phone. The phone is set as condensed tabular text from md, and as a full-width 52px ink call button with "Call" and the number below md. A line Website button sits beside it. The entry holds exactly one link to the firm profile. Its top rule draws in from the left as it scrolls into view (scroll-driven, skipped under reduced motion).

### Featured Entry (signature)
A Directory Entry inside a marigold-wash container with a marigold-edge border. Its header strip carries a marigold "Featured" tab, "Paid placement" in marigold-deep, and a link explaining how Featured works. It sits above the rated list, never inside it, with a note that paying does not change the order.

### Area Running Head (signature)
A 40px stock strip pinned under the site header on area pages. It holds the marigold area tab and the place name in ink semibold. It fades and slides in between 120px and 320px of scroll, so it never duplicates the visible H1.

### Highlighter Mark
A marigold stroke behind the word "local" in the homepage H1 (0.36em tall, skewed -8deg). It draws once from the left over 1.1s, with a 0.25s delay.

## Do's and Don'ts

### Do:
- **Do** make the phone number the loudest element in every firm entry: condensed, bold, tabular, ink.
- **Do** separate entries with strong hairlines of equal rhythm (1.5rem row padding) and close every list with a static rule.
- **Do** keep marigold to tabs, the active underline, the highlighter, selection and the Featured wash. Set accent text in marigold-deep.
- **Do** set every count, rating, postcode, phone number and price in tabular figures.
- **Do** label paid placement in words ("Featured", "Paid placement") and keep it outside the rated list.
- **Do** design empty lists as a ruled column with a sentence, not as blank space.
- **Do** gate every entrance animation behind prefers-reduced-motion and show the static end state without it.

### Don't:
- **Don't** use a blue gradient hero, a floating search box, or a grid of shadowed rounded cards.
- **Don't** put text in marigold, and don't use marigold as a large fill outside the Featured wash.
- **Don't** add shadows to entries, Featured blocks or panels. The nav drop panel is the only lifted surface.
- **Don't** use emoji or icon tiles. Keep icons as inline line icons at text size.
- **Don't** round corners past 6px.
- **Don't** pull in the guide pages' ochre and teal tokens. They belong to the legacy guide world, not the directory.


## Refinement, 2026-10-20

What changed in the second pass, recorded from the shipped build:

- **Type pairing.** Headings (H1 and section H2, `.dir-display` / `.dir-h2`) are Libre Caslon Display 400. Libre Caslon Text italic (`.dir-accent`) sets one phrase inside a headline, such as "for local people". Archivo carries text, UI and phone numbers; the condensed width (`.dir-condensed`) is now reserved for phone numbers.
- **Palette.** Ink is a richer green-black (#0f211a). The accent is a deeper, quieter gold (#e4a91c). Dark bands use forest (#11261d).
- **Cards.** `.dir-card` has a 1px rule border, a 12px radius and a soft two-layer shadow. A firm list is one card holding ruled rows; only the Featured entry is a standalone card (`.dir-card-featured`: gold wash, gold edge, warm shadow). Buttons and fields use 8px.
- **Motion.** Rows and section headings reveal on scroll through CSS view timelines (`.dir-reveal`); header panels ease in (`.dir-panel`); `.dir-link` underlines draw in. Everything is CSS, and every effect is turned off under prefers-reduced-motion.
- **Icons.** Lucide, one 1.75 stroke weight site-wide.
- **Gold as accent only.** Tabs (area running head, Featured) are gold text on the gold wash with a hairline gold edge, not solid gold. Solid gold survives only as the active-nav underline and the small local-only bullet. The wordmark's "Index" tag is ink.
