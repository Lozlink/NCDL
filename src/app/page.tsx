import { Approach } from "@/components/approach";
import { Enquiry } from "@/components/enquiry";
import { Hero } from "@/components/hero";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { PracticeAreas } from "@/components/practice-areas";
import { Principal } from "@/components/principal";
import { SiteFooter } from "@/components/site-footer";
import { SydneyOffice } from "@/components/sydney-office";

/*
 * Section order matches the Framer page exactly — including the Sydney Office
 * block sitting *after* the footer. Move <SydneyOffice /> above <SiteFooter />
 * if that wasn't intentional.
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
      </main>
      <SiteFooter />
      <SydneyOffice />
      <MobileCtaBar />
    </div>
  );
}
