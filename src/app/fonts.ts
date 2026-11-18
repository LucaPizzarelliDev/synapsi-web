import { Onest, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";

// Condivisi fra i due root layout (sito e portale) e la 404 globale
const schibsted = Schibsted_Grotesk({ variable: "--font-schibsted", subsets: ["latin"] });
const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const spline = Spline_Sans_Mono({ variable: "--font-spline", subsets: ["latin"] });

export const fontVariables = `${schibsted.variable} ${onest.variable} ${spline.variable}`;
