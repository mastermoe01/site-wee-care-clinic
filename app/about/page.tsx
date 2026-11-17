import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { addressLine, clinic } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "About",
  "Wee Care Clinic is a pediatric urgent care in Zephyrhills, Florida. Meet the nurse practitioners and see where to find us.",
  "/about",
);

const swatches = [
  { c: "#004888", n: "Navy, from our lettering" },
  { c: "#a00010", n: "Stethoscope red" },
  { c: "#8000f8", n: "Heart purple" },
  { c: "#f85800", n: "Orange, from the nurse's dress" },
];

export default function About() {
  return (
    <div className="container-w py-14">
      <h1 className="text-5xl text-navy md:text-6xl">About Wee Care Clinic</h1>
      <div className="mt-8 grid items-start gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xl leading-relaxed">{clinic.description}</p>
          <p className="mt-4 text-lg text-muted">We are open Monday to Friday 2 pm to 8 pm and Saturday 9 am to noon, and closed Sundays.</p>
          <h2 className="mt-12 text-3xl text-navy">Our nurse practitioners</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {clinic.team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <li className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-md">
                  <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-heart-soft font-display text-xl font-semibold text-heart">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold text-navy">{t.name}</span>
                    <span className="block text-muted">{t.title}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Image src="/photos/storefront.jpg" alt={`Wee Care Clinic storefront at ${addressLine}`} width={1000} height={1333} sizes="(min-width: 768px) 30vw, 90vw" className="w-full rounded-3xl border-4 border-sun shadow-lg" />
      </div>
      <section className="mt-14 rounded-3xl bg-white p-7 shadow-md">
        <h2 className="text-2xl text-navy">The colors of our logo</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {swatches.map((s) => (
            <li key={s.c} className="flex items-center gap-3">
              <span aria-hidden className="h-10 w-10 rounded-full border-2 border-ink/10" style={{ background: s.c }} />
              <span>{s.n}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
