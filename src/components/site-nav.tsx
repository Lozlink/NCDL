import { anchors } from "@/lib/site";
import { Cta } from "./cta";

const links = [
  { label: "Areas of Practice", href: `#${anchors.practiceAreas}` },
  { label: "Our Principal", href: `#${anchors.principal}` },
  { label: "Contact Us", href: `#${anchors.enquiry}` },
];

/**
 * Phone variant renders an empty 78px bar (links + CTA are hidden < 1200px in the
 * Framer file — there is no hamburger menu). Kept 1:1.
 */
export function SiteNav() {
  return (
    <nav className="relative flex min-h-[78px] w-full flex-none items-center justify-between overflow-clip bg-black px-5 py-2.5 shadow-[inset_0_-1px_0_0_rgba(244,241,235,0.16)] desk:min-h-0 desk:px-[54px] desk:py-3.5">
      <ul className="m-0 hidden list-none items-center gap-6 p-0 desk:flex">
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
      <Cta
        href={`#${anchors.enquiry}`}
        variant="bone"
        tracking="0.7"
        className="hidden! px-4 py-2.5 desk:flex!"
      >
        Make an enquiry
      </Cta>
    </nav>
  );
}
