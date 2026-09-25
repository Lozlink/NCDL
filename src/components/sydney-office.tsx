import Image from "next/image";
import { anchors, site } from "@/lib/site";
import streetscape from "../../public/images/sydney-cbd.jpg";
import { Cta } from "./cta";

export function SydneyOffice() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-10 overflow-clip bg-bone px-5 py-[72px] desk:gap-12 desk:px-[54px] desk:py-24">
      <div className="flex w-full flex-none flex-col items-start justify-start gap-10 desk:flex-row desk:gap-20">
        <div className="flex w-full flex-none flex-col items-start justify-start gap-[18px] desk:w-[42%]">
          <p className="type-eyebrow w-full">Sydney office</p>
          <h2 className="type-h2 w-full text-balance">Meet with us in the heart of Sydney.</h2>
          <p className="type-body w-full text-balance text-ink">
            For matters requiring a face-to-face conference, confidential appointments can be
            arranged at our Sydney office near the Downing Centre and central legal precinct.
          </p>
        </div>

        <div className="flex w-full flex-none flex-col items-start justify-start gap-5 overflow-clip desk:w-[48%]">
          <p className="w-full font-sans text-[12px] font-bold leading-[1.2em] tracking-[1px] text-ink uppercase">
            Office address
          </p>
          <p className="w-full font-serif text-[30px] font-medium leading-[1.2em] text-ink">{site.address}</p>

          <div className="flex w-min flex-none flex-col items-start justify-start gap-3.5 desk:flex-row desk:items-center">
            <Cta
              href={`#${anchors.enquiry}`}
              variant="ink"
              tracking="0.7"
              className="self-stretch px-[18px] py-[13px] desk:self-auto"
            >
              Request a face-to-face conference
            </Cta>
            <Cta
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="ink-outline"
              tracking="0.7"
              className="self-stretch px-[18px] py-[13px] desk:self-auto"
            >
              Open in maps
            </Cta>
          </div>
        </div>
      </div>

      <div className="relative h-[260px] w-full flex-none overflow-clip rounded-[2px] desk:h-[360px]">
        <Image
          src={streetscape}
          alt="Sydney CBD streetscape near the office"
          fill
          sizes="(min-width: 1440px) 1332px, (min-width: 1200px) calc(100vw - 108px), calc(100vw - 40px)"
          className="object-cover object-center"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
