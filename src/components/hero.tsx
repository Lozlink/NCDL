import Image from "next/image";
import { anchors, site } from "@/lib/site";
import backdrop from "../../public/images/norus-logo-backdrop.jpg";
import { Cta } from "./cta";
import { SiteNav } from "./site-nav";

const copy = [
  "Our approach is built on careful preparation, strategic advice and strong representation.",
  "We examine the evidence, identify weaknesses in the prosecution case and consider every available avenue to achieve the best possible outcome.",
  "From your first conference to the final outcome, we will be there with you every step of the way — providing clear advice, keeping you informed and advocating strongly on your behalf.",
];

export function Hero() {
  return (
    <header className="relative flex w-full max-w-[1440px] flex-none flex-col items-center justify-start bg-black">
      <SiteNav />

      <div className="relative flex w-full flex-none flex-col items-start justify-start gap-9 bg-black px-5 pt-[68px] pb-[72px] desk:flex-row desk:items-end desk:justify-between desk:gap-0 desk:px-[54px] desk:pt-24 desk:pb-[68px]">
        {/*
          Logo backdrop. Positioned exactly as in Framer — it deliberately bleeds
          above the nav (tinting the nav CTA) and past the 1440 frame on wide screens.
          pointer-events-none is the one deviation: in Framer it swallows clicks on
          the nav CTA.
        */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[80px] right-[-393px] bottom-[-275px] left-[70px] z-0 overflow-clip opacity-10 desk:top-[-148px] desk:left-auto desk:w-[1444px] desk:opacity-[0.18]"
        >
          <Image
            src={backdrop}
            alt=""
            fill
            priority
            sizes="(min-width: 1200px) 1444px, 720px"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-[1] flex w-full max-w-[780px] flex-none flex-col items-start justify-start gap-7 overflow-clip desk:w-px desk:flex-[1_0_0]">
          <p className="type-eyebrow w-full">Sydney · New South Wales</p>

          <h1 className="type-display w-full text-balance">
            Fighting for our Clients From First Call to Final Outcome
          </h1>

          <div className="w-full font-sans text-[18px] leading-[1.55em] text-balance text-[rgba(244,241,235,0.76)]">
            {copy.map((para) => (
              <p key={para.slice(0, 16)} className="mb-[1.55em]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex w-min flex-none flex-wrap items-center justify-start gap-3.5 overflow-clip desk:flex-nowrap">
            <Cta href={`#${anchors.enquiry}`} variant="bone" className="px-5 py-3.5">
              Make an enquiry
            </Cta>
            <Cta href={site.phoneHref} variant="bone-outline" className="px-[18px] py-[13px]">
              Call now to speak directly to a lawyer
            </Cta>
          </div>
        </div>
      </div>
    </header>
  );
}
