"use server";

import { SendEmailCommand } from "@aws-sdk/client-sesv2";
import { z } from "zod";
import { getSesClient, sesRegion } from "@/lib/server/ses";

/*
 * Replaces Framer's hosted form backend. Delivery is via Amazon SES (v2) when configured:
 *   SES_REGION (or AWS_REGION), ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL (verified SES identity)
 *   + credentials — see src/lib/server/ses.ts
 * Optional: SES_CONFIGURATION_SET for event publishing / suppression handling.
 * Without them: dev logs a notice and succeeds; production fails closed so
 * enquiries are never silently dropped.
 */

const schema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name").max(200),
  mobile: z
    .string()
    .trim()
    .min(8, "Please enter a mobile number")
    .max(32)
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number"),
  email: z.email("Please enter a valid email address").max(254),
  court: z.string().trim().max(200).optional().default(""),
  matter: z.string().trim().max(5000).optional().default(""),
  // Honeypot — visually hidden field real users never fill.
  website: z.string().max(0).optional(),
});

export type EnquiryState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<string, string[]>>;
      /** Echoed back so React 19's post-action form reset doesn't wipe the user's input. */
      fields: Record<string, string>;
    };

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : undefined);

const FIELDS = ["fullName", "mobile", "email", "court", "matter"] as const;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const fields = Object.fromEntries(FIELDS.map((k) => [k, str(formData.get(k)) ?? ""]));
  const parsed = schema.safeParse({ ...fields, website: str(formData.get("website")) });

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    // Bot tripped the honeypot: pretend success, send nothing.
    if (fieldErrors.website) return { status: "success" };
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, fields };
  }

  const { fullName, mobile, email, court, matter } = parsed.data;
  const region = sesRegion();
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!region || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] SES not configured — enquiry accepted in dev but not delivered.");
      return { status: "success" };
    }
    console.error("[enquiry] SES env vars missing — enquiry NOT delivered.");
    return {
      status: "error",
      message: "We couldn't send your enquiry just now. Please call us directly.",
      fields,
    };
  }

  const body = [
    `Name: ${fullName}`,
    `Mobile: ${mobile}`,
    `Email: ${email}`,
    `Court: ${court || "—"}`,
    "",
    "Charges / nature of matter:",
    matter || "—",
  ].join("\n");

  try {
    await getSesClient().send(
      new SendEmailCommand({
        FromEmailAddress: from,
        Destination: { ToAddresses: to.split(",").map((a) => a.trim()).filter(Boolean) },
        ReplyToAddresses: [email],
        ConfigurationSetName: process.env.SES_CONFIGURATION_SET || undefined,
        Content: {
          Simple: {
            Subject: { Data: `Confidential enquiry — ${fullName}`, Charset: "UTF-8" },
            Body: { Text: { Data: body, Charset: "UTF-8" } },
          },
        },
      }),
    );
  } catch (err) {
    // Log the error class only — never the enquiry contents.
    console.error("[enquiry] SES send failed:", err instanceof Error ? err.name : "unknown");
    return {
      status: "error",
      message: "We couldn't send your enquiry just now. Please call us directly.",
      fields,
    };
  }

  return { status: "success" };
}
