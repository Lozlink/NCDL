import { Approach } from "@/components/approach";
import { Enquiry } from "@/components/enquiry";
import { Hero } from "@/components/hero";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { PracticeAreas } from "@/components/practice-areas";
import { Principal } from "@/components/principal";
import { SiteFooter } from "@/components/site-footer";
import { SydneyOffice } from "@/components/sydney-office";

/*
 * Section order follows the Framer page, except the footer now sits last — the
 * Framer file had the Sydney Office block after it.
 */
export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-clip bg-ink">
      <Hero />
      <main className="contents">
        <PracticeAreas />
        <Approach />
        <Principal />
        <Enquiry />
        <SydneyOffice />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  );
}
