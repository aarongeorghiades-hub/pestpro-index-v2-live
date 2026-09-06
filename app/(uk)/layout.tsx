import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from '@/components/Footer';
import { awaabBannerRoutes } from '@/lib/awaabBannerRoutes';

// THE UK ESTATE'S CHROME, AND NOTHING ELSE.
//
// S47 R9. Both of these used to render in app/layout.tsx and therefore reached
// the /us estate too. A nested layout cannot remove what an ancestor renders, so
// the chrome moved down rather than being made conditional: every UK route now
// sits inside this route group and receives it here.
//
// ROUTE GROUPS DO NOT APPEAR IN URLs. Nothing a reader or a crawler sees moved.
//
// app/(uk)/sitemap.ts LIVES HERE FOR ONE REASON: it carries 24 relative imports
// of the form './pest-control/...' and './blog/...', and those directories moved
// into this group. Moving the file with them keeps every import valid without
// editing a single byte of it. Its URL is still /sitemap.xml. app/robots.txt
// stayed at the app root, because it is site-global and imports nothing.
// S66 R7 — THE BANNER IS SCOPED, AND THE SET CROSSES THE SERVER/CLIENT SEAM AS A
// PROP. Deciding whether to show it needs the PATHNAME, which only a client
// component can read; deriving the set needs the filesystem and the blog data,
// which only the server can read. Neither can do both, so the set is measured
// here and handed over — the same seam and the same remedy as the footer
// earnings statement at S64 R2/R3.
export default function UkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar routes={awaabBannerRoutes()} />
      {children}
      <Footer />
    </>
  );
}
