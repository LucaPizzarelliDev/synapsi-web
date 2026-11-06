# Anti "AI-smell" rules

Concrete rules so UI, copy, and code match this repo instead of looking machine-generated.
When in doubt, open the referenced file and copy the existing pattern.

## UI / design
The design system is already defined in `src/app/globals.css` and demonstrated in
`src/app/(sito)/page.tsx` and `src/components/Header.tsx`. Stay inside it.

- **Use the brand palette only.** Colors come from `@theme` tokens (`ink`, `paper`, `paper-2`,
  `body`, `line`, `primary`, `primary-soft`, `ob`/`ps`/`ac`/`ip`). Never introduce new hex
  values, and never use the stock "AI" indigo/violet/blue gradient. The one accent is
  `--color-primary` (#4f3b9a), used flat — not as a gradient.
- **No rounded cards.** This design uses `1.5px` ink hairline borders (`frame` utility, or
  `border-ink`) and square corners. Do not add `rounded-*`, drop shadows, or glassmorphism.
- **No emoji** anywhere — in titles, copy, or labels. Iconography is inline SVG only
  (`src/components/portal/icons.tsx`, `src/components/graphics.tsx`); no icon library.
- **No generic hero + three feature-cards with icons.** Sections are editorial: a mono
  `§ NN —` label (`Section`), a fluid `display` headline, then content as bordered lists or
  asymmetric grids mapping over `src/lib` data — see the `services` list on the homepage.
- **Intentional typography.** Three chosen families (Schibsted display, Hanken body, Spline
  mono) via `next/font`; fluid sizes with `clamp()`. Don't fall back to system fonts or a flat
  type scale. Mono + uppercase + `tracking-[0.06em]` is the label voice.
- **Asymmetry where it earns it.** Layouts use uneven grids (`grid-cols-[1.15fr_1fr_1fr_auto]`,
  `flex-[1.2_1_520px]`), not everything centered in equal thirds.
- Prefer composing `Container`/`Section`/`Display`/`Button`/`Mark` from `src/components/ui.tsx`
  over bespoke wrappers.

## Copy / content
- Match the existing voice: plain, concrete, slightly austere, in **Italian** — e.g. "fatti,
  non opinioni", "ogni conclusione ha la sua prova". See `src/lib/site.ts` and the homepage.
- **No marketing filler** ("Unlock your potential", "Empower your team", "Rivoluziona…"). State
  what happens and what the client receives.
- **No fake placeholder** text dressed up as real content, and no lorem ipsum. If real copy
  isn't known, ask — don't invent product claims.
- Don't turn everything into bullet lists. Prose, bordered lists, and definition-style blocks
  are all used deliberately; pick what fits.

## Code
- **Follow existing patterns first.** Named exports for components/helpers, default export for
  pages. Server Components by default; `"use client"` only when hooks/interactivity require it.
- **No comments that restate the code.** Existing comments explain *why* / domain rules (see
  `src/lib/portal.ts`); match that — or write none.
- **No premature abstraction** and **no catch-all `utils` dumping ground**. Domain data lives in
  `src/lib/{site,portal}.ts`; add there or create a focused, named module.
- **No try/catch-everywhere and no silent fallbacks.** This is static content — let real errors
  surface; don't swallow them or return fake defaults.
- **No `// TODO: implement`** stubs. Finish the change or leave it out. (Existing `// TODO:`
  notes with a real question, like confirming an email, are fine.)
- Reuse the token/utility system; don't hardcode styles a token already covers.

## Accessibility & performance (baseline, not negotiable)
- Semantic HTML and landmarks: real `header`/`nav`/`main`, `aria-label` on nav, `aria-current`
  for active links, `aria-expanded`/`aria-controls` on toggles — as in `Header.tsx`/`Shell.tsx`.
- Preserve the skip-link and `focus-visible` rings defined in `globals.css`; every interactive
  element must be keyboard-reachable with a visible focus state.
- Maintain contrast against `ink`/`paper`; the code-color backgrounds are light by design.
- Keep JS off the client unless needed — prefer Server Components; don't add client state for
  static content.
- Images/graphics are inline SVG with `aria-hidden` where decorative; if raster images are ever
  added, use `next/image`, not `<img>`.
