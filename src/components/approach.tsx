const principles = [
  "Personalised representation — Every case is different. Our approach is tailored to your circumstances and focused on achieving the best possible outcome for you.",
  "Strategic defence — We analyse the evidence, identify weaknesses in the prosecution case and build a clear and tactical strategy from the outset.",
  "Clear advice — Clear advice about your options and next steps.",
];

export function Approach() {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-[42px] overflow-clip bg-ink px-5 py-[72px] desk:flex-row desk:gap-20 desk:px-[54px] desk:py-28">
      <div className="flex w-full flex-none flex-col items-start justify-start gap-[18px] desk:w-[42%]">
        <p className="type-eyebrow w-full">The Norus Criminal Defence approach</p>
        <h2 className="type-h2-dark w-full text-balance">Focused on defence. Focused on you.</h2>
        <p className="w-full font-sans text-[16px] leading-[1.55em] text-balance text-[rgba(244,241,235,0.68)]">
          Each matter receives careful analysis, clear direction and individual attention.
        </p>
      </div>

      <div className="flex w-full flex-none flex-col items-start justify-start overflow-clip desk:w-[48%]">
        {principles.map((line, i) => (
          <p
            key={line.slice(0, 16)}
            className={`w-full font-sans text-[17px] font-medium leading-[1.5em] text-bone ${
              i < principles.length - 1 ? "mb-[1.5em]" : ""
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
