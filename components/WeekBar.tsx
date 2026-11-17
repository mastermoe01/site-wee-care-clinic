"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { hoursByDay } from "@/lib/clinic";

const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const order = [1, 2, 3, 4, 5, 6, 0];
const START = 8; // timeline from 8 am to 9 pm
const END = 21;
const label = (h: number) => (h === 12 ? "noon" : h > 12 ? `${h - 12} pm` : `${h} am`);

export default function WeekBar() {
  const reduce = useReducedMotion();
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    const wd = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "short" }).format(new Date());
    setToday(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd));
  }, []);
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <ul className="space-y-3">
        {order.map((d) => {
          const h = hoursByDay[d];
          const isToday = today === d;
          return (
            <li key={d} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:grid-cols-[8rem_1fr_9rem]">
              <span className={`order-1 font-semibold sm:order-none ${isToday ? "text-berry" : "text-navy"}`}>{names[d]}{isToday ? " (today)" : ""}</span>
              <span className="relative order-3 col-span-2 block h-5 rounded-full bg-sun-soft sm:order-none sm:col-span-1" aria-hidden>
                {h && (
                  <motion.span
                    className={`absolute inset-y-0 rounded-full ${isToday ? "bg-berry" : "bg-navy"}`}
                    style={{ left: `${((h[0] - START) / (END - START)) * 100}%`, width: `${((h[1] - h[0]) / (END - START)) * 100}%`, originX: 0 }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: order.indexOf(d) * 0.06 }}
                  />
                )}
              </span>
              <span className="order-2 text-right tabular-nums text-ink sm:order-none sm:text-left">
                {h ? `${label(h[0])} to ${label(h[1])}` : "Closed"}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-muted">Timeline runs from {label(START)} to {label(END)}. Regular hours; call {"(813) 715-2812"} to check holidays.</p>
    </div>
  );
}
