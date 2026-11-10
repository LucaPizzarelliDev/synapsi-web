"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Icon, icons } from "./icons";

/** Finché l'archivio non è collegato, il PDF si ottiene dalla stampa del documento */
export function PrintButton() {
  const params = useSearchParams();
  const auto = params.get("download") === "1";

  useEffect(() => {
    if (auto) {
      const t = setTimeout(() => window.print(), 400);
      return () => clearTimeout(t);
    }
  }, [auto]);

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-10 items-center gap-2 rounded-2xl bg-violet px-4 text-[14px] font-medium text-white transition-colors hover:bg-violet-dark"
    >
      <Icon d={icons.download} className="h-4 w-4" />
      Scarica PDF
    </button>
  );
}
