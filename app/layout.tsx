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
    default: 'PestPro Index | Compare Pest Control Providers in London',
    template: '%s | PestPro Index',
  },
  description: 'Compare 400+ verified pest control providers across Greater London. No lead fees, no commissions. Honest ratings, real reviews, transparent data.',
  metadataBase: new URL('https://pestproindex.com'),
  openGraph: {
    title: 'PestPro Index | Compare Pest Control Providers in London',
    description: 'Compare 400+ verified pest control providers across Greater London. No lead fees, no commissions.',
    url: 'https://pestproindex.com',
    siteName: 'PestPro Index',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
// Build timestamp: 1769864613
