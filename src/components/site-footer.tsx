import { site } from "@/lib/site";
import { Logo } from "./logo";

const link =
  "text-bone no-underline transition-colors duration-200 ease-framer hover:text-stone";

/**
 * Last block on the page, so the phone variant's bottom padding also clears the
 * fixed ~46px MobileCtaBar (44px + 48px) — otherwise it covers the address line.
 * The logo gets its own row so both columns below it start on the same line.
 */
export function SiteFooter() {
  return (
    <footer className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-6 overflow-clip bg-night px-5 pt-11 pb-[92px] desk:px-[54px] desk:py-14">
      <Logo className="h-11" />

      <div className="flex w-full flex-none flex-col items-start justify-start gap-7 desk:flex-row desk:gap-8">
        <div className="flex w-full flex-none flex-col items-start justify-start gap-3 overflow-clip desk:w-[42%]">
          <p className="w-full font-serif text-[25px] font-medium leading-[1.2em] text-bone">{site.name}</p>
          <p className="w-full font-sans text-[14px] leading-[1.2em] text-[rgba(244,241,235,0.64)]">
            {`${site.principal} — Principal Solicitor`}
          </p>
          <p className="w-full font-sans text-[14px] font-medium leading-[1.5em] text-bone">
            Need criminal defence advice? Make a confidential enquiry.
          </p>
        </div>

        <address className="flex w-min flex-none flex-col items-start justify-start gap-2 not-italic">
          <p className="font-sans text-[13px] font-medium leading-[1.2em] whitespace-pre text-bone">
            <a href={site.phoneHref} className={link}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="font-sans text-[13px] leading-[1.2em] whitespace-pre text-bone">
            <a href={`mailto:${site.email}`} className={link}>
              {site.email}
            </a>
          </p>
          <p className="font-sans text-[11px] leading-[1.2em] whitespace-pre text-[rgba(244,241,235,0.65)] desk:text-[13px]">
            {site.address}
          </p>
        </address>
      </div>
    </footer>
  );
}
