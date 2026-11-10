import Link from "next/link";
import { BrandMark } from "./ui";

export function Logo({ size = "md", href = "/", light = false }: { size?: "md" | "lg"; href?: string; light?: boolean }) {
  return (
    <Link href={href} aria-label="Synapsi Analytics, home" className={`inline-flex items-center gap-2 ${light ? "text-white" : "text-ink"}`}>
      <BrandMark className={size === "lg" ? "h-9 w-9" : "h-7 w-7"} />
      <span className={`logotype ${size === "lg" ? "text-[28px]" : "text-[22px]"}`}>synapsi</span>
    </Link>
  );
}
