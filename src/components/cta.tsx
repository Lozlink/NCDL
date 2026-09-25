import type { ComponentProps } from "react";

/**
 * Framer draws button borders with an inset ::after overlay, so the border never
 * affects layout. An inset box-shadow reproduces that exactly (no 1px shift).
 */
const variants = {
  bone: "bg-bone text-ink",
  "bone-outline": "text-bone shadow-[inset_0_0_0_1px_rgba(244,241,235,0.34)]",
  ink: "bg-ink text-bone",
  "ink-outline": "text-ink shadow-[inset_0_0_0_1px_var(--color-ink)]",
} as const;

export type CtaVariant = keyof typeof variants;

type CtaProps = ComponentProps<"a"> & {
  variant: CtaVariant;
  /** Tracking differs between instances in the Framer file (0.7px vs 0.8px). */
  tracking?: "0.7" | "0.8";
};

export function Cta({ variant, tracking = "0.8", className = "", children, ...rest }: CtaProps) {
  return (
    <a
      {...rest}
      className={`relative flex flex-none cursor-pointer items-center justify-center overflow-clip rounded-[2px] no-underline ${variants[variant]} ${className}`}
    >
      <span className={`type-label ${tracking === "0.7" ? "tracking-[0.7px]" : "tracking-[0.8px]"}`}>
        {children}
      </span>
    </a>
  );
}
