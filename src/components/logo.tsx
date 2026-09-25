import Image from "next/image";
import { site } from "@/lib/site";
import lockup from "../../public/images/norus-logo-lockup.png";

type LogoProps = {
  /** Set the rendered height here (e.g. `h-11`); the width follows the lockup's aspect ratio. */
  className?: string;
  preload?: boolean;
};

/**
 * Emblem + NORUS wordmark lockup (cut from norus-logo-backdrop.jpg). Links to
 * `#top`, which browsers resolve to the top of the document without needing an id.
 */
export function Logo({ className = "", preload = false }: LogoProps) {
  return (
    <a href="#top" className={`flex flex-none ${className}`}>
      <Image src={lockup} alt={site.name} preload={preload} sizes="162px" className="h-full w-auto" />
    </a>
  );
}
