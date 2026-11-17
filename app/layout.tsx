import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMeta, siteUrl } from "@/lib/meta";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["500", "600"], display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito", weight: ["400", "600", "700"], display: "swap" });

const base = pageMeta(
  "Wee Care Clinic | Pediatric Urgent Care in Zephyrhills, FL",
  "After-hours walk-in pediatric urgent care in Zephyrhills for ages 8 weeks to 24 years. Mon to Fri 2 to 8 pm, Sat 9 am to noon. Call (813) 715-2812.",
  "/",
);

export const metadata: Metadata = {
  ...base,
  metadataBase: new URL(siteUrl),
  title: { default: base.title as string, template: "%s | Wee Care Clinic" },
  // Demo label (D-09): noindex, nofollow on every page; no page overrides robots.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <div role="note" className="demo-banner">
          Demo prepared by Raqm AI &amp; Automation for Wee Care Clinic. Not the official site.
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
