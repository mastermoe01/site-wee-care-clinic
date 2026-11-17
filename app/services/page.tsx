import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { clinic } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Services",
  "Pediatric urgent care, school and sports physicals, CDL and DOT exams, drug and alcohol testing and DNA testing in Zephyrhills, FL.",
  "/services",
);

const blocks = [
  { title: "Pediatric urgent care", body: "Walk-in care for patients from 8 weeks to 24 years old, from trained pediatric providers.", note: "Walk-ins welcome during clinic hours." },
  { title: "Physicals", body: "School, day care, camp and sports physicals.", note: "By appointment." },
  { title: "CDL and DOT exams", body: "DOT exams, including CDL exams.", note: "By appointment." },
  { title: "Laboratory testing", body: "DOT federal drug and alcohol testing, urine drug screens and DNA testing.", note: "DNA testing by appointment." },
];

export default function Services() {
  return (
    <div className="container-w py-14">
      <h1 className="text-5xl text-navy md:text-6xl">Services</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">Call {clinic.phone} for an appointment, or walk in for urgent care.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.title} delay={(i % 2) * 0.06}>
            <section className="h-full rounded-3xl bg-white p-7 shadow-md">
              <h2 className="text-3xl text-navy">{b.title}</h2>
              <p className="mt-3 text-lg">{b.body}</p>
              <p className="mt-3 inline-block rounded-full bg-sun-soft px-3 py-1 text-base font-semibold text-navy">{b.note}</p>
            </section>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <section className="mt-14 grid items-center gap-8 rounded-3xl bg-sun-soft p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
          <Image src="/photos/physicals-promo.jpg" alt="Chalkboard graphic from the clinic reading School and Sports Physicals, $25.00, with a school bus, eye chart and sports balls" width={625} height={469} sizes="(min-width: 768px) 40vw, 90vw" className="w-full rounded-2xl shadow-md" />
          <div>
            <h2 className="text-3xl text-navy">School and sports physicals: $25</h2>
            <p className="mt-3 text-lg">This is the price the clinic has published for school and sports physicals. Call {clinic.phone} to book one and to confirm the current price.</p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
