import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
  description: 'Compare pest control providers with transparent, provider-stated information. No lead fees, no commissions. Find trusted pest control in London, Birmingham and beyond.',
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
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
// Build timestamp: 1769864613
