import type { Metadata } from "next";
import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("Text message terms", "Terms for Wee Care Clinic text messages.", "/sms-terms");

export default function SmsTerms() {
  return (
    <div className="container-w max-w-3xl py-14">
      <h1 className="text-5xl text-navy">{clinic.name} text messages</h1>
      <div className="mt-6 space-y-5 text-lg">
        <p>This is the program name: {clinic.name} text messages.</p>
        <p>If you opt in, we send appointment and service text messages. We send offers only to people who opted in to marketing messages.</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
          <li>Reply STOP to opt out.</li>
          <li>Reply HELP for help.</li>
        </ul>
        <p>Consent is not a condition of care. Read our <Link className="underline" href="/privacy">privacy policy</Link>. Questions: call {clinic.phone}.</p>
      </div>
    </div>
  );
}
