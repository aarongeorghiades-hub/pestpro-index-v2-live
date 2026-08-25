import Link from 'next/link';

// THE /us ESTATE'S CHROME.
//
// S47 R9. Until this round /us inherited the UK AnnouncementBar and the UK
// Footer from app/layout.tsx. Both now live in app/(uk)/layout.tsx and reach
// only UK routes. This is what /us gets in their place.
//
// ON THE TWO POLICY LINKS: /privacy and /cookies both exist and both return 200,
// but they moved into app/(uk) with the rest of the estate, so a reader who
// follows them lands on a page wearing UK chrome. That is accepted by ruling —
// a privacy policy and a cookie policy are site-wide documents and a reader is
// entitled to reach them from any page. It is recorded here so that nobody later
// mistakes it for an oversight.
//
// UsPageLayout renders its own footer inside the article shell. This is the
// layout-level one, so it stays minimal: identity, the policy links, the
// commercial disclosure the estate owes a reader, and a copyright line.
export default function UsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="bg-[#0f172a] text-blue-200 border-t border-blue-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 text-sm">
          <p className="m-0 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/us" className="font-bold text-white hover:underline">
              PestPro Index US
            </Link>
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white hover:underline">
              Cookies
            </Link>
          </p>
          <p className="m-0 mt-3 max-w-3xl">
            We earn nothing if you buy through the links on this site. Products are named
            because a cited source describes the type of product, never because anyone paid
            for the placement.
          </p>
          <p className="m-0 mt-2">&copy; 2026 PestPro Index</p>
        </div>
      </footer>
    </>
  );
}
