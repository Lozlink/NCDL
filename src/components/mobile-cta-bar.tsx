import { anchors, site } from "@/lib/site";

/** Fixed Call / Enquire bar — phone variant only (< 1200px). */
export function MobileCtaBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-[5] grid max-w-[1440px] grid-cols-[repeat(2,minmax(120px,1fr))] auto-rows-[minmax(0,1fr)] overflow-clip bg-bone desk:hidden">
      <a
        href={site.phoneHref}
        className="relative flex w-full flex-none cursor-pointer items-center justify-center self-start overflow-clip p-4 text-ink no-underline shadow-[inset_-1px_0_0_0_var(--color-rule)]"
      >
        <span className="type-label tracking-[0.8px]">Call</span>
      </a>
      <a
        href={`#${anchors.enquiry}`}
        className="relative flex w-full flex-none cursor-pointer items-center justify-center self-start overflow-clip bg-ink p-4 text-bone no-underline"
      >
        <span className="type-label tracking-[0.8px]">Enquire</span>
      </a>
    </div>
  );
}
