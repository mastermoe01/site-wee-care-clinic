"use client";
import { useEffect, useState } from "react";
import { hoursByDay } from "@/lib/clinic";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmt = (h: number) => (h === 12 ? "noon" : h > 12 ? `${h - 12} pm` : `${h} am`);

function status(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hour12: false,
  }).formatToParts(now);
  const wd = parts.find((p) => p.type === "weekday")!.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  const hour = Number(parts.find((p) => p.type === "hour")!.value) % 24;
  const min = Number(parts.find((p) => p.type === "minute")!.value);
  const t = hour + min / 60;
  const today = hoursByDay[day];
  if (today && t >= today[0] && t < today[1]) return { open: true, text: `Open now until ${fmt(today[1])}` };
  if (today && t < today[0]) return { open: false, text: `Opens today at ${fmt(today[0])}` };
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hoursByDay[d];
    if (h) return { open: false, text: `Closed now. Opens ${i === 1 ? "tomorrow" : DAYS[d]} at ${fmt(h[0])}` };
  }
  return { open: false, text: "Closed now" };
}

export default function OpenNow({ className = "" }: { className?: string }) {
  const [s, setS] = useState<{ open: boolean; text: string } | null>(null);
  useEffect(() => {
    setS(status());
    const id = setInterval(() => setS(status()), 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-base font-semibold shadow-sm ${className}`} aria-live="polite">
      <span aria-hidden className={`inline-block h-3 w-3 rounded-full ${s?.open ? "bg-emerald-500" : "bg-tangerine"}`} />
      {s ? s.text : "Mon to Fri 2 pm to 8 pm · Sat 9 am to noon"}
    </p>
  );
}
