import { NextResponse, type NextRequest } from "next/server";

// L'italiano è servito senza prefisso: /viseria viene riscritto su /it/viseria.
// Chi apre /it/... viene rimandato all'indirizzo senza prefisso, che è quello canonico.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (pathname === "/it" || pathname.startsWith("/it/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) return;

  url.pathname = pathname === "/" ? "/it" : `/it${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Fuori: asset di Next, portale clienti e console (solo italiano), file statici
  matcher: ["/((?!_next|portal|admin|api|.*\\..*).*)"],
};
