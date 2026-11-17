"use client";
import { useState } from "react";
import { clinic } from "@/lib/clinic";

const PHRASES = "Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "not given"}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    // mailto fallback: no form service is configured for this demo.
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent("Message from the Wee Care Clinic website")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  const field = "mt-1 w-full rounded-2xl border-2 border-navy/30 bg-white px-4 py-3 text-lg";
  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-white p-7 shadow-md">
      <p className="rounded-2xl bg-sun-soft p-4 text-base">
        For questions about hours, physicals or testing. Please do not put medical details in this form. In an emergency, call 911.
      </p>
      <label className="block font-semibold">Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block font-semibold">Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block font-semibold">Phone (optional)
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="block font-semibold">How can we help?
        <textarea name="message" required rows={4} className={field} />
      </label>
      <fieldset className="space-y-3 text-base">
        <legend className="font-semibold">Text messages (optional)</legend>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="sms_informational" data-sms-consent="informational" className="mt-1 h-5 w-5" />
          <span>I agree to receive appointment and service text messages from {clinic.name} at the number above. {PHRASES} See our <a className="underline" href="/sms-terms">text message terms</a> and <a className="underline" href="/privacy">privacy policy</a>.</span>
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="sms_marketing" data-sms-consent="marketing" className="mt-1 h-5 w-5" />
          <span>I also agree to receive offers and news by text from {clinic.name}. {PHRASES} Consent is not a condition of care.</span>
        </label>
      </fieldset>
      <button type="submit" className="btn btn-call">Send message</button>
      {sent && <p role="status" className="font-semibold text-navy">Your email app should open with the message ready to send.</p>}
    </form>
  );
}
