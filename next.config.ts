import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  async redirects() {
    // Dal 10 novembre 2026 gli indirizzi sono in inglese: i vecchi indirizzi italiani restano validi con un 308
    const site = [
      ["/metodo", "/method"],
      ["/studio", "/about"],
      ["/contatti", "/contact"],
    ].flatMap(([from, to]) => [
      { source: from, destination: to, permanent: true },
      { source: `/en${from}`, destination: `/en${to}`, permanent: true },
    ]);
    const portal = [
      ["/portale/accesso", "/portal/login"],
      ["/portale/persone/:path*", "/portal/people/:path*"],
      ["/portale/manager", "/portal/managers"],
      ["/portale/organizzazione", "/portal/organization"],
      ["/portale/report/:path*", "/portal/reports/:path*"],
      ["/portale/:path*", "/portal/:path*"],
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
    return [
      // Hermia Talent è stato rinominato Viseria il 24 ottobre 2026
      { source: "/hermia", destination: "/viseria", permanent: true },
      { source: "/en/hermia", destination: "/en/viseria", permanent: true },
      ...site,
      ...portal,
    ];
  },
  partialPrefetching: true,
  // Due root layout (sito in app/[lang], portale): la 404 per indirizzi inesistenti sta in app/global-not-found.tsx
  experimental: { globalNotFound: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
