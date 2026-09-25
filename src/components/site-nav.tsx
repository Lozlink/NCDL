import { anchors } from "@/lib/site";
import { Cta } from "./cta";
import { Logo } from "./logo";

const links = [
  { label: "Areas of Practice", href: `#${anchors.practiceAreas}` },
  { label: "Our Principal", href: `#${anchors.principal}` },
  { label: "Contact Us", href: `#${anchors.enquiry}` },
];

/**
 * Links + CTA are hidden < 1200px, as in the Framer file (there is no hamburger
 * menu), so the phone variant is the logo alone in the 78px bar.
 */
export function SiteNav() {
  return (
    <nav className="relative flex min-h-[78px] w-full flex-none items-center justify-between overflow-clip bg-black px-5 py-2.5 shadow-[inset_0_-1px_0_0_rgba(244,241,235,0.16)] desk:min-h-0 desk:px-[54px] desk:py-3.5">
      {/*
        z-[1] lifts the logo above the hero backdrop, which overlaps the nav at
        18% opacity on desktop and would otherwise dim part of the lockup.
      */}
      <Logo preload className="relative z-[1] h-11 desk:h-10" />

      <div className="hidden items-center gap-8 desk:flex">
        <ul className="m-0 flex list-none items-center gap-6 p-0">
          {links.map((link) => (
            <li key={link.href} className="flex-none">
              <a
                href={link.href}
                className="block font-sans text-[13px] font-medium leading-[1.2em] whitespace-pre text-bone no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Cta href={`#${anchors.enquiry}`} variant="bone" tracking="0.7" className="px-4 py-2.5">
          Make an enquiry
        </Cta>
      </div>
    </nav>
  );
}
