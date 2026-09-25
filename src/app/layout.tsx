import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

// Exact font binaries served by the Framer site (static instances — the
// Google-hosted Bodoni Moda is variable with an opsz axis, which renders
// differently at display sizes, so it is self-hosted rather than next/font/google).
const bodoni = localFont({
  src: [{ path: "./fonts/BodoniModa-Medium.woff2", weight: "500", style: "normal" }],
  variable: "--font-bodoni",
  display: "swap",
  fallback: ["serif"],
});

const bespoke = localFont({
  src: [
    { path: "./fonts/BespokeSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/BespokeSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/BespokeSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-bespoke",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { "max-image-preview": "large" },
};

export const viewport: Viewport = {
  width: "device-width",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${bodoni.variable} ${bespoke.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
