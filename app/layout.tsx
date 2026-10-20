// ROOT LAYOUT — GLOBAL ONLY.
//
// S47 R9: the UK AnnouncementBar and the UK Footer used to render here, which is
// the only root layout in this repository, so they rendered on the /us estate as
// well — a UK footer carrying 97 UK links and 20 "best" strings, plus a UK
// announcement bar, on every US page. A nested layout cannot remove what an
// ancestor renders, and a server component cannot read the pathname without
// making every static route dynamic, so the chrome moved DOWN instead of being
// made conditional. Every UK route now sits in app/(uk) and takes its chrome
// from app/(uk)/layout.tsx; /us takes its footer from app/us/layout.tsx.
//
// Route groups do not appear in URLs. The build's own route list was compared
// before and after and is set-identical. What stays here is what is genuinely
// global: the html/body shell, the fonts, globals.css, the site metadata
// defaults and the consent gate.
import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import ConsentManager from "@/components/ConsentManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Archivo is variable on weight AND width. The width axis is what gives the
// directory its condensed display voice without loading a second family.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Libre Caslon italic is the accent voice beside Archivo: the English
// printer's face, for a phrase in a headline, never a whole block.
const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

// Libre Caslon Display sets the headings; Archivo carries text, UI and the
// phone numbers. Caslon is the English printer's face: a local directory's.
const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'PestPro Index | Compare Pest Control Providers Across the UK',
    template: '%s | PestPro Index',
  },
  description: 'Compare pest control providers with transparent, provider-stated information. No lead fees, no commissions. Find pest control in London, Birmingham and beyond.',
  metadataBase: new URL('https://pestproindex.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'PestPro Index',
  },
  twitter: {
    card: 'summary',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // THE FONT VARIABLES LIVE ON <html>, NOT <body> — S70 R1, AND THIS IS LOAD
  // BEARING RATHER THAN TIDYING. Tailwind v4's preflight sets, inside
  // @layer base, `:host, html { font-family: var(--default-font-family, ...) }`
  // and globals.css maps `--default-font-family` to `var(--font-geist-sans)`
  // through its @theme block. next/font defines --font-geist-sans on whatever
  // element carries geistSans.variable. While that was <body>, the variable was
  // OUT OF SCOPE at <html>, so --default-font-family resolved to nothing and the
  // preflight fell through to its own ui-sans-serif/system-ui default.
  //
  // MEASURED ON THE LIVE SITE BEFORE THE FIX, not inferred from reading:
  // --font-geist-sans was EMPTY at html and "Geist","Geist Fallback" at body,
  // and html computed to ui-sans-serif. Geist could never have reached the page
  // through the theme chain. That is a SECOND fault, independent of the
  // unlayered Arial rule in globals.css, and fixing only the Arial rule would
  // have landed the estate on system-ui while still never loading Geist.
  return (
    <html lang="en" className={`${archivo.variable} ${caslon.variable} ${caslonDisplay.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head></head>
      <body className="antialiased">
        {children}
        <ConsentManager />
      </body>
    </html>
  );
}
// Build timestamp: 1769864613
