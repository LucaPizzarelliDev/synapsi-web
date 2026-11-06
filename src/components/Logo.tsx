import Link from "next/link";

export function Logo({ size = "md" }: { size?: "md" | "lg"; inverted?: boolean }) {
  return (
    <Link href="/" aria-label="Synapsi Analytics, home" className="inline-flex items-baseline gap-2.5 hover:bg-transparent">
      <span className={`logotype ${size === "lg" ? "text-[32px]" : "text-[26px]"}`}>[synapsi]</span>
      <span className="font-mono text-[12px] uppercase tracking-[0.08em]">analytics</span>
    </Link>
  );
}
