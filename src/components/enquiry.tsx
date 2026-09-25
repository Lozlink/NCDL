import { anchors, site } from "@/lib/site";
import { EnquiryForm } from "./enquiry-form";

export function Enquiry() {
  return (
    <section
      id={anchors.enquiry}
      className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-9 overflow-clip bg-ink px-5 py-[72px] desk:flex-row desk:gap-[72px] desk:px-[54px] desk:py-28"
    >
      <div className="flex w-full flex-none flex-col items-start justify-start gap-5 desk:w-[42%]">
        <p className="type-eyebrow w-full">Confidential consultation &amp; immediate assistance</p>
        <h2 className="type-h2-dark w-full text-balance">Your defence starts here.</h2>

        <div className="w-full text-balance">
          <p className="type-body text-[rgba(244,241,235,0.78)]">
            What happens in the early stages of a criminal investigation can significantly affect
            how a matter progresses. Before taking part in a Police interview or making decisions
            about your case, it is important to obtain clear legal advice.
          </p>
          <p className="mt-[1.55em] font-sans text-[16px] leading-[1.55em] text-[rgba(244,241,235,0.78)]">
            Fill in your enquiry form and a lawyer will be in touch with you to listen, answer your
            questions and provide clear advice about your options.
          </p>
        </div>

        <a
          href={site.phoneHref}
          className="relative flex w-full flex-none cursor-pointer items-center justify-center overflow-clip rounded-[2px] bg-bone px-[18px] py-3.5 text-ink no-underline shadow-[inset_0_0_0_1px_rgba(244,241,235,0.24)] desk:w-min"
        >
          <span className="font-sans text-[14px] font-bold leading-[1.2em] tracking-[0.7px] whitespace-pre uppercase">
            {`Prefer to speak now? Call ${site.phoneDisplay}`}
          </span>
        </a>
      </div>

      <EnquiryForm />
    </section>
  );
}
