import { anchors } from "@/lib/site";

const areas = [
  {
    title: "Assault Offences",
    body: "Representation for assault charges, including common assault, assault occasioning actual bodily harm, grievous bodily harm, choking and affray.",
  },
  {
    title: "Domestic Violence",
    body: "Strategic and discreet representation for domestic violence charges, from first appearance through to defended hearings and sentence proceedings.",
  },
  {
    title: "ADVOs",
    body: "Representation in Apprehended Domestic Violence Order and Apprehended Personal Violence Order proceedings, including contested hearings and applications to vary or revoke existing orders.",
  },
  {
    title: "Drug Offences",
    body: "Representation for drug offences, including possession, supply, deemed supply, cultivation, importation and other serious drug-related charges.",
  },
  {
    title: "Traffic Offences",
    body: "Representation for serious traffic offences, including drink and drug driving, police pursuits, dangerous driving, speeding offences and driving while suspended or disqualified.",
  },
  {
    title: "Bail Applications",
    body: "Urgent representation for Local Court and Supreme Court bail applications, including variations of existing bail conditions.",
  },
  {
    title: "Sexual Offences",
    body: "Representation for sexual assault, sexual touching and other sexual offence allegations, from the investigation stage through to defended hearings and sentence proceedings.",
  },
  {
    title: "Fraud & Dishonesty",
    body: "Representation for fraud, stealing and other dishonesty offences, including complex and serious allegations.",
  },
  {
    title: "Licence Appeals",
    body: "Conducting appeals against Police and Transport for NSW licence suspensions.",
  },
  {
    title: "District Court Appeals",
    body: "Representation in District Court appeals against Local Court convictions and sentences, including severity and conviction appeals.",
  },
] as const;

export function PracticeAreas() {
  return (
    <section
      id={anchors.practiceAreas}
      className="relative flex w-full max-w-[1440px] flex-none flex-col items-start justify-start gap-9 overflow-clip bg-bone px-5 py-[72px] desk:gap-12 desk:px-[54px] desk:py-[53px]"
    >
      <div className="flex w-full flex-none flex-col items-start justify-start gap-5 desk:flex-row desk:items-end desk:justify-between desk:gap-0">
        <div className="flex w-full flex-none flex-col items-start justify-start gap-4 desk:w-[48%]">
          <p className="type-eyebrow w-full">Areas of focus</p>
          <h2 className="type-h2 w-full text-balance">Areas of Focus</h2>
        </div>
      </div>

      {/* 1px gap over the rule colour draws the grid lines, as in Framer. */}
      <ul className="m-0 flex w-full flex-none list-none flex-col items-start justify-start gap-px bg-rule p-0 desk:grid desk:auto-rows-[minmax(0,1fr)] desk:grid-cols-[repeat(2,minmax(220px,1fr))] desk:justify-center desk:overflow-clip">
        {areas.map((area, i) => (
          <li
            key={area.title}
            className="relative flex w-full flex-none flex-col items-start justify-start gap-9 self-auto bg-bone p-7 desk:h-full desk:self-start desk:overflow-clip"
          >
            <p className="type-eyebrow w-full">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="w-full font-serif text-[29px] font-medium leading-[1.1em] text-ink">
              {area.title}
            </h3>
            <p className="w-full font-sans text-[15px] leading-[1.5em] text-[rgba(17,17,15,0.67)]">
              {area.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
