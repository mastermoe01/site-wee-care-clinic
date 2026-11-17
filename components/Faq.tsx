import { faqs } from "@/lib/clinic";

export default function Faq({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="space-y-3">
      {list.map((f) => (
        <details key={f.q} className="group rounded-3xl bg-white p-5 shadow-md open:bg-sun-soft">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold text-navy">
            {f.q}
            <span aria-hidden className="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-lg">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
