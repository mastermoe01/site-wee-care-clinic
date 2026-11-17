"use client";
import { motion, useReducedMotion } from "framer-motion";
import { clinic, ratingBars } from "@/lib/clinic";

export default function RatingBars() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <p className="font-display text-5xl font-semibold text-navy">{clinic.rating}<span className="text-2xl text-muted"> / 5</span></p>
      <p className="mt-1 text-muted">Google rating, {clinic.ratingCount} ratings</p>
      <ul className="mt-5 space-y-2" aria-label="Rating breakdown">
        {ratingBars.map((b, i) => (
          <li key={b.stars} className="grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3">
            <span className="font-semibold text-navy">{b.stars} ★</span>
            <span className="block h-3 rounded-full bg-sun-soft" aria-hidden>
              <motion.span
                className="block h-3 rounded-full bg-tangerine"
                style={{ width: `${(b.count / clinic.ratingCount) * 100}%`, originX: 0 }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              />
            </span>
            <span className="tabular-nums text-muted">{b.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
