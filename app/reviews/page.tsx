import type { Metadata } from "next";
import RatingBars from "@/components/RatingBars";
import Reveal from "@/components/Reveal";
import { clinic, topics } from "@/lib/clinic";
import { pageMeta } from "@/lib/meta";
import reviews from "@/lib/reviews.json";

export const metadata: Metadata = pageMeta(
  "Reviews",
  "What parents say about Wee Care Clinic on Google: 4.4 stars from 81 ratings, with written reviews exactly as they were posted.",
  "/reviews",
);

export default function Reviews() {
  return (
    <div className="container-w py-14">
      <h1 className="text-5xl text-navy md:text-6xl">What parents say</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">
        {clinic.rating} stars from {clinic.ratingCount} ratings on Google. Below is a selection of written reviews, exactly as they were posted. You can read all of them on Google.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal><RatingBars /></Reveal>
        <Reveal delay={0.08}>
          <section className="h-full rounded-3xl bg-heart-soft p-6">
            <h2 className="text-2xl text-navy">What Google pulls out of the reviews</h2>
            <p className="mt-2 text-muted">Topics Google finds in the written reviews, with how many times each is mentioned.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {topics.map((t) => (
                <li key={t.label} className="rounded-full bg-white px-4 py-2 font-semibold text-navy shadow-sm">
                  {t.label} <span className="text-heart">{t.n}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {reviews.map((r, i) => (
          <li key={r.name + r.date}>
            <Reveal delay={(i % 2) * 0.06}>
              <figure className="h-full rounded-3xl bg-white p-6 shadow-md">
                <p aria-label={`${r.stars} out of 5 stars`} className="text-xl text-tangerine">{"★".repeat(r.stars)}</p>
                <blockquote className="mt-2 text-lg">“{r.text}”</blockquote>
                <figcaption className="mt-3 font-semibold text-navy">{r.name}, Google review, {r.date}</figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-3xl bg-sun-soft p-7 text-center">
        <h2 className="text-3xl text-navy">Come see for yourself</h2>
        <p className="mt-2 text-lg">Walk in during clinic hours, or call {clinic.phone}.</p>
        <a href={`tel:${clinic.phoneTel}`} className="btn btn-call mt-5">📞 Call {clinic.phone}</a>
      </div>
    </div>
  );
}
