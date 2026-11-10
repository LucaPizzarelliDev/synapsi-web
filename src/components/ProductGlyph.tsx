import type { ReactNode } from "react";

/** Il risultato di ogni servizio, ridotto a un segno: radar, 360, mappa, rete, campo */
export function ProductGlyph({ product, className = "" }: { product: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const glyph: Record<string, ReactNode> = {
    // Scouting Card: radar a sette fattori
    Viseria: (
      <>
        {[1, 0.66, 0.33].map((k) => (
          <polygon key={k} {...common} strokeWidth={1.2} opacity={0.5} points={heptagon(50, 50, 40 * k)} />
        ))}
        <polygon {...common} strokeWidth={2.5} points={heptagon(50, 50, 40, [0.9, 0.7, 0.45, 0.8, 0.6, 0.95, 0.55])} />
      </>
    ),
    // 360 a colloqui: il manager al centro, chi lavora con lui intorno
    Prismia: (
      <>
        <circle cx="50" cy="50" r="9" fill="currentColor" />
        {Array.from({ length: 7 }, (_, i) => {
          const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * 36;
          const y = 50 + Math.sin(a) * 36;
          return (
            <g key={i}>
              <line {...common} strokeWidth={1.4} x1="50" y1="50" x2={x} y2={y} opacity={0.6} />
              <circle cx={x} cy={y} r="6" {...common} />
            </g>
          );
        })}
      </>
    ),
    // Mappa reparti × aree
    Chimeria: (
      <>
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 6 }, (_, c) => (
            <rect key={`${r}-${c}`} x={8 + c * 14} y={16 + r * 14} width="11" height="11" rx="2.5" fill="currentColor" opacity={[0.9, 0.35, 0.6, 0.15][(r * 7 + c * 3) % 4]} />
          )),
        )}
      </>
    ),
    // Rete commerciale: consulenti, team leader, direzione
    Iridium: (
      <>
        {[
          [50, 18],
          [26, 50],
          [74, 50],
          [14, 82],
          [38, 82],
          [62, 82],
          [86, 82],
        ].map(([x, y], i, pts) => (
          <g key={i}>
            {i > 0 && <line {...common} strokeWidth={1.4} opacity={0.6} x1={pts[i < 3 ? 0 : i < 5 ? 1 : 2][0]} y1={pts[i < 3 ? 0 : i < 5 ? 1 : 2][1]} x2={x} y2={y} />}
            {i === 0 ? <circle cx={x} cy={y} r="8" fill="currentColor" /> : <circle cx={x} cy={y} r="6" {...common} />}
          </g>
        ))}
      </>
    ),
    // Campo da gioco
    Sport: (
      <>
        <rect {...common} x="10" y="22" width="80" height="56" rx="4" />
        <line {...common} x1="50" y1="22" x2="50" y2="78" />
        <circle {...common} cx="50" cy="50" r="10" />
        <rect {...common} x="10" y="38" width="12" height="24" />
        <rect {...common} x="78" y="38" width="12" height="24" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {glyph[product]}
    </svg>
  );
}

function heptagon(cx: number, cy: number, r: number, scale: number[] = Array(7).fill(1)) {
  return scale
    .map((k, i) => {
      const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
      return `${(cx + Math.cos(a) * r * k).toFixed(1)},${(cy + Math.sin(a) * r * k).toFixed(1)}`;
    })
    .join(" ");
}
