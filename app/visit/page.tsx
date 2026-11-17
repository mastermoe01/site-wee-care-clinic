import Image from "next/image";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import OpenNow from "@/components/OpenNow";
import Reveal from "@/components/Reveal";
import WeekBar from "@/components/WeekBar";
import { accessibility, addressLine, building, clinic, faqs, payments } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Visit us",
  "Hours, directions, parking, payment and accessibility for Wee Care Clinic at 38023 Medical Center Ave, Zephyrhills, FL, plus answers to common questions.",
  "/visit",
);

export default function Visit() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className="container-w py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h1 className="text-5xl text-navy md:text-6xl">Visit us</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">Walk in for urgent care, or call to schedule a physical, a DOT exam or DNA testing.</p>
      <div className="mt-6"><OpenNow /></div>

      <section className="mt-12" aria-labelledby="week">
        <h2 id="week" className="text-3xl text-navy md:text-4xl">Our week at a glance</h2>
        <div className="mt-5"><Reveal><WeekBar /></Reveal></div>
      </section>

      <section className="mt-16 grid items-center gap-10 md:grid-cols-2" aria-labelledby="find">
        <Reveal>
          <Image src="/photos/storefront.jpg" alt="Wee Care Clinic storefront at 38023 Medical Center Ave, Zephyrhills, with its yellow Pediatric Urgent Care banner and the phone number 813-715-2812" width={1000} height={1333} sizes="(min-width: 768px) 40vw, 90vw" className="mx-auto max-h-[34rem] w-auto rounded-3xl border-4 border-sun object-cover shadow-lg" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="find" className="text-3xl text-navy md:text-4xl">Find the yellow banner</h2>
          <address className="mt-4 text-xl not-italic">{addressLine}<br /><span className="text-muted">{building}</span></address>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={clinic.mapsUrl} className="btn btn-call">Get directions</a>
            <a href={`tel:${clinic.phoneTel}`} className="btn btn-ghost">📞 {clinic.phone}</a>
          </div>
          <h3 className="mt-8 text-2xl text-navy">Getting in</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-lg">
            {accessibility.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <h3 className="mt-6 text-2xl text-navy">Paying</h3>
          <p className="mt-2 text-lg">We accept: {payments.join(", ")}. Call with questions about insurance or pricing.</p>
        </Reveal>
      </section>

      <section className="mt-16" aria-labelledby="faq">
        <h2 id="faq" className="text-3xl text-navy md:text-4xl">Good to know</h2>
        <div className="mt-5 max-w-3xl"><Faq /></div>
      </section>

      <section className="mt-16 rounded-3xl bg-heart-soft p-7">
        <h2 className="text-2xl text-navy">Follow along</h2>
        <p className="mt-2 text-lg">
          <a className="font-semibold text-berry underline underline-offset-4" href={clinic.facebook}>Facebook</a>
          {" · "}
          <a className="font-semibold text-berry underline underline-offset-4" href={clinic.instagram}>Instagram</a>
        </p>
      </section>
    </div>
  );
}
