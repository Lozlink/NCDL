import "server-only";
import { SESv2Client } from "@aws-sdk/client-sesv2";

/**
 * Amazon SES (v2 API) client.
 *
 * Credentials: explicit SES_ACCESS_KEY_ID / SES_SECRET_ACCESS_KEY if set (use these on
 * hosts that don't give you an IAM role), otherwise the default AWS credential chain
 * (AWS_* env vars, shared profile, ECS/EC2/Lambda role, etc.).
 */
let client: SESv2Client | undefined;

export function sesRegion(): string | undefined {
  return process.env.SES_REGION ?? process.env.AWS_REGION;
}

export function getSesClient(): SESv2Client {
  if (client) return client;
  const accessKeyId = process.env.SES_ACCESS_KEY_ID;
  const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY;
  client = new SESv2Client({
    region: sesRegion(),
    ...(accessKeyId && secretAccessKey ? { credentials: { accessKeyId, secretAccessKey } } : {}),
  });
  return client;
}
