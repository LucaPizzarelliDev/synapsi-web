import Link from "next/link";
import { BrandMark } from "./ui";

export function Logo({ size = "md", href = "/", light = false }: { size?: "md" | "lg"; href?: string; light?: boolean }) {
  const lg = size === "lg";
  return (
    <Link href={href} aria-label="Synapsi Analytics, home" className={`inline-flex items-center gap-2.5 ${light ? "text-white" : "text-ink"}`}>
      <BrandMark className={lg ? "h-11 w-11" : "h-9 w-9"} />
      <span className="flex flex-col">
        <span className={`logotype leading-none ${lg ? "text-[28px]" : "text-[23px]"}`}>synapsi</span>
        {/* "Analytics" in mono, il carattere dei dati e dei codici */}
        <span className={`mt-[3px] font-mono font-medium uppercase leading-none tracking-[0.22em] ${lg ? "text-[11px]" : "text-[9.5px]"} ${light ? "text-white/60" : "text-body"}`}>
          analytics
        </span>
      </span>
    </Link>
  );
}
