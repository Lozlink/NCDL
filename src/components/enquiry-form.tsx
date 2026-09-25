"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions/enquiry";

const initial: EnquiryState = { status: "idle" };

// Framer form input: 44px tall (13/14 padding, 15px/1.2), inset 1px border that
// turns Framer-default #09f on focus. Border is an inset shadow so it never
// shifts layout, matching Framer's ::after overlay.
const fieldWrap =
  "relative flex w-full flex-none items-center overflow-hidden rounded-[2px] bg-[rgba(244,241,235,0.05)] shadow-[inset_0_0_0_1px_rgba(244,241,235,0.2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-focus)] data-[invalid=true]:shadow-[inset_0_0_0_1px_#e5484d]";
const fieldInput =
  "m-0 w-full min-w-0 flex-1 border-none bg-transparent font-sans text-[15px] leading-[1.2em] font-normal text-bone outline-none placeholder:text-[rgba(244,241,235,0.5)] focus-visible:outline-none";

type FieldProps = {
  name: string;
  placeholder: string;
  type?: "text" | "tel" | "email";
  required?: boolean;
  autoComplete?: string;
  invalid?: boolean;
  defaultValue?: string;
};

function Field({ name, placeholder, type = "text", required, autoComplete, invalid, defaultValue }: FieldProps) {
  return (
    <div className={`${fieldWrap} px-[14px] py-[13px]`} data-invalid={invalid || undefined}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        aria-label={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={invalid || undefined}
        defaultValue={defaultValue}
        className={`${fieldInput} text-ellipsis whitespace-nowrap`}
      />
    </div>
  );
}

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const errors = state.status === "error" ? state.fieldErrors : undefined;
  const values = state.status === "error" ? state.fields : undefined;

  return (
    <form
      action={action}
      aria-label="Confidential enquiry"
      className="relative flex w-full flex-none flex-col items-start justify-start gap-4 overflow-clip bg-[rgba(244,241,235,0.06)] p-5 shadow-[inset_0_0_0_1px_rgba(244,241,235,0.18)] desk:w-[48%] desk:p-7"
    >
      <Field name="fullName" placeholder="Full name" required autoComplete="name" invalid={!!errors?.fullName} defaultValue={values?.fullName} />
      <Field name="mobile" type="tel" placeholder="Mobile number" required autoComplete="tel" invalid={!!errors?.mobile} defaultValue={values?.mobile} />
      <Field name="email" type="email" placeholder="Email address" required autoComplete="email" invalid={!!errors?.email} defaultValue={values?.email} />
      <Field name="court" placeholder="Court (if known)" defaultValue={values?.court} />

      <div className={`${fieldWrap} h-[100px]`}>
        <textarea
          name="matter"
          placeholder="Charges or nature of matter"
          aria-label="Charges or nature of matter"
          defaultValue={values?.matter}
          className={`${fieldInput} h-full resize-none self-stretch overflow-y-auto px-[14px] py-[13px] whitespace-break-spaces`}
        />
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending || state.status === "success"}
        className="relative flex w-full flex-none cursor-pointer items-center justify-center overflow-clip rounded-[2px] border-none bg-bone px-[18px] py-3.5 text-ink disabled:cursor-default"
      >
        <span className="type-label tracking-[0.8px]">
          {pending ? "Sending…" : state.status === "success" ? "Enquiry received" : "Submit confidential enquiry"}
        </span>
      </button>

      <p className="w-full font-sans text-[12px] leading-[1.5em] text-[rgba(244,241,235,0.52)]" aria-live="polite">
        {state.status === "error" ? (
          <span className="text-bone">{state.message} </span>
        ) : state.status === "success" ? (
          <span className="text-bone">Thank you — a lawyer will be in touch shortly. </span>
        ) : null}
        Submitting an enquiry does not itself create a solicitor-client relationship. Please do not
        send confidential documents until we have confirmed we can assist.
      </p>
    </form>
  );
}
