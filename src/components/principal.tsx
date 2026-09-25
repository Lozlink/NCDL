import Image from "next/image";
import { anchors } from "@/lib/site";
import portrait from "../../public/images/shantel-norus.jpg";

export function Principal() {
  return (
    <section
      id={anchors.principal}
      className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-9 overflow-clip bg-bone px-5 py-[72px] desk:flex-row desk:gap-14 desk:px-[54px] desk:py-[82px]"
    >
      <div className="relative h-[360px] w-full flex-none overflow-clip desk:h-[620px] desk:w-[45%]">
        <Image
          src={portrait}
          alt="Shantel Norus, Principal Solicitor"
          fill
          sizes="(min-width: 1200px) 45vw, 100vw"
          className="object-cover object-center"
          placeholder="blur"
        />
      </div>

      <div className="flex w-full flex-none flex-col items-start justify-center gap-[22px] desk:w-[48%]">
        <p className="type-eyebrow w-full">Principal Solicitor</p>
        <h2 className="type-h2 w-full">Shantel Norus</h2>

        <div className="type-body w-full text-balance text-ink [&>p+p]:mt-5">
          <p>
            Shantel Norus is the Principal Solicitor of Norus Criminal Defence Lawyers. She
            represents clients when the consequences of a criminal or traffic matter can extend
            well beyond the courtroom.
          </p>
          <p>
            Her experience includes successfully defending criminal charges at hearing, securing
            bail for clients in custody, achieving successful outcomes on appeal, and advocating for
            clients facing the prospect of imprisonment.
          </p>
          <p>
            Shantel is known for being meticulous in her preparation, strategic in her approach and
            unwavering in her representation. She takes the time to understand not only the case
            against her client, but the person behind it — identifying weaknesses in the
            prosecution case, exploring every available avenue and building a defence strategy
            tailored to the individual.
          </p>
          <p>
            At Norus Criminal Defence, clients deal directly with Shantel and receive the personal
            attention of a boutique criminal defence practice.
          </p>
          <p>
            <strong className="font-bold">Every Case. Every Client. Every Defence.</strong>
          </p>
        </div>

        {/*
          In the Framer build this "button" has no link target. Left non-interactive
          until a destination (e.g. /shantel-norus) exists.
        */}
        <div className="relative flex w-min flex-none cursor-pointer items-center justify-center overflow-clip rounded-[2px] px-[18px] py-[13px] text-ink shadow-[inset_0_0_0_1px_var(--color-ink)]">
          <span className="type-label tracking-[0.8px]">Meet Shantel</span>
        </div>
      </div>
    </section>
  );
}
