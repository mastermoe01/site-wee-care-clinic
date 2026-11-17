import type { Metadata } from "next";
import { clinic } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("Privacy policy", "How Wee Care Clinic handles information collected through this website.", "/privacy");

export default function Privacy() {
  return (
    <div className="container-w max-w-3xl py-14">
      <h1 className="text-5xl text-navy">Privacy policy</h1>
      <div className="mt-6 space-y-5 text-lg">
        <p>This policy explains what {clinic.name} ({clinic.legalName}) collects through this website and how it is used. {clinic.street}, {clinic.city}, {clinic.region} {clinic.zip}. {clinic.phone}.</p>
        <h2 className="pt-4 text-2xl text-navy">What we collect</h2>
        <p>If you use the contact form, we receive the name, email address, phone number and message you type. Please do not put medical details in that form: it is for questions about hours, physicals and testing. Call us for anything else. In an emergency, call 911.</p>
        <h2 className="pt-4 text-2xl text-navy">How we use it</h2>
        <p>We use what you send only to answer your message and to schedule appointments. We do not sell your information.</p>
        <h2 id="sms" className="pt-4 text-2xl text-navy">Text messages</h2>
        <p>If you opt in to text messages on our contact form, we use your mobile number to send the messages you agreed to. You can opt out at any time by replying STOP.</p>
        <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</p>
        <p>SMS opt-in data and consent are not shared, sold or rented to anyone.</p>
        <h2 className="pt-4 text-2xl text-navy">Contact</h2>
        <p>Questions about this policy: call {clinic.phone}.</p>
      </div>
    </div>
  );
}
