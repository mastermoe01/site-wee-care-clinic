import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import OpenNow from "@/components/OpenNow";
import { addressLine, clinic } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Contact",
  "Call (813) 715-2812, walk in, or send a message. 38023 Medical Center Ave, Zephyrhills, FL. Mon to Fri 2 to 8 pm, Sat 9 am to noon.",
  "/contact",
);

export default function Contact() {
  return (
    <div className="container-w py-14">
      <h1 className="text-5xl text-navy md:text-6xl">Contact us</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">Call today to schedule an appointment, or walk in for urgent care.</p>
      <div className="mt-6"><OpenNow /></div>
      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-call">📞 Call {clinic.phone}</a>
            <a href={clinic.mapsUrl} className="btn btn-ghost">Get directions</a>
          </div>
          <address className="not-italic text-xl">{addressLine}</address>
          <section>
            <h2 className="text-2xl text-navy">Hours</h2>
            <ul className="mt-2 max-w-sm space-y-1 text-lg">
              {clinic.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4"><span>{h.days}</span><span className="font-semibold tabular-nums">{h.text}</span></li>
              ))}
            </ul>
            <p className="mt-3 text-muted">DOT exams, DNA testing and physicals are by appointment.</p>
          </section>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
