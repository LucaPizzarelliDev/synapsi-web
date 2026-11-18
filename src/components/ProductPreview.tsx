import { graphics } from "@/content/graphics";
import type { Locale } from "@/lib/i18n";
import { BrandMark, DotGrid } from "./ui";

const avatar = ["bg-ob", "bg-ps", "bg-ac"];

/** Il portale clienti visto dal sito: una finestra con la panoramica, dati di esempio */
export function ProductPreview({ lang = "it" }: { lang?: Locale }) {
  const t = graphics[lang].portalPreview;
  return (
    <figure
      role="img"
      aria-label={t.label}
      className="m-0 overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(28,26,24,0.06),0_40px_80px_-40px_rgba(34,26,66,0.45)]"
    >
      {/* Barra della finestra */}
      <div className="flex items-center gap-3 border-b border-line bg-cream/60 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ip" />
          <span className="h-2.5 w-2.5 rounded-full bg-ob" />
          <span className="h-2.5 w-2.5 rounded-full bg-ac" />
        </span>
        <span className="mx-auto rounded-lg bg-white px-3 py-1 text-[12px] text-body shadow-[0_0_0_1px_rgba(28,26,24,0.06)]">synapsi-analytics.it/portal</span>
        <span className="hidden rounded-full bg-ob/70 px-2.5 py-0.5 text-[11px] font-medium sm:inline">{t.sample}</span>
      </div>

      <div className="grid text-left md:grid-cols-[190px_1fr]">
        {/* Barra laterale */}
        <div className="hidden flex-col gap-1 bg-cream-2/60 p-3 md:flex">
          <span className="mb-3 flex items-center gap-2 px-2 pt-1">
            <BrandMark className="h-5 w-5" />
            <span className="logotype text-[15px]">synapsi</span>
          </span>
          {t.nav.map((n, i) => (
            <span key={n} className={`rounded-lg px-2.5 py-1.5 text-[13px] ${i === 0 ? "bg-white font-medium shadow-[0_1px_2px_rgba(28,26,24,0.06)]" : "text-body"}`}>
              {n}
            </span>
          ))}
        </div>

        {/* Panoramica */}
        <div className="relative bg-snow p-5 sm:p-7">
          <p className="display text-[24px]">{t.hello}</p>
          <p className="mt-1 text-[13px] text-body">{t.lead}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1.3fr_1fr_1fr]">
            <div className="relative isolate overflow-hidden rounded-2xl bg-night p-4 text-white">
              <DotGrid className="text-white/[0.07]" />
              <p className="flex items-center gap-2 text-[12px] text-white/70">
                <span className="h-2 w-2 rounded-full bg-ac" />
                {t.next}
              </p>
              <p className="display mt-2 text-[26px] leading-none">{t.nextDate}</p>
              <p className="mt-2 text-[13px] font-medium">Luca Moretti</p>
            </div>
            {t.stats.map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(28,26,24,0.06)]">
                <p className="text-[12px] text-body">{k}</p>
                <p className="display mt-2 text-[26px] leading-none">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(28,26,24,0.06)]">
            <p className="px-4 pb-1 pt-3.5 text-[13px] font-semibold">{t.list}</p>
            <ul className="divide-y divide-line">
              {t.people.map(([name, role, stage, step], i) => (
                <li key={name} className="flex items-center gap-3 px-4 py-2.5">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${avatar[i]}`}>
                    {name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-medium">{name}</span>
                    <span className="block truncate text-[12px] text-body">{role}</span>
                  </span>
                  <span className="hidden w-32 flex-col gap-1.5 sm:flex">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ps/70 px-2 py-0.5 text-[11px] font-medium text-violet-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                      {stage}
                    </span>
                    <span className="flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((k) => (
                        <span key={k} className="h-1 flex-1 overflow-hidden rounded-full bg-cream-2">
                          {k < step && <span className="block h-full bg-violet" />}
                        </span>
                      ))}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </figure>
  );
}
