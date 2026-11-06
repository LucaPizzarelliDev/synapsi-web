import type { Metadata } from "next";
import { PortalShell } from "@/components/portal/Shell";

export const metadata: Metadata = {
  title: { default: "Portale clienti", template: "%s · Portale · Synapsi Analytics" },
  robots: { index: false, follow: false },
};

export default function AreaLayout({ children }: LayoutProps<"/portale">) {
  return <PortalShell>{children}</PortalShell>;
}
