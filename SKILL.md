---
name: sophia-alex-2026-design
description: Use this skill to generate well-branded interfaces and assets for the Sophia & Alex 2026 wedding brand, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the wedding website, paper goods, decks, and signage.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. The README has full coverage of the brand's content fundamentals, visual foundations, and iconography approach.

Key files to know:
- `colors_and_type.css` — drop-in CSS variables and role styles. `@import` it at the top of any HTML prototype to get the full token system + the Adobe Fonts kit.
- `assets/` — every logo, ornament, pen illustration, and photograph from the live site. Copy what you need into your output.
- `ui_kits/website/` — React/JSX components that mirror the production Astro site. Use these as a starting point for any web prototype.
- `preview/` — small HTML specimens illustrating each token cluster. Useful as visual reference, not as production assets.

If creating visual artifacts (slides, mocks, throwaway prototypes, paper goods, signage, save-the-date variants, menus, table plans), copy assets out of `assets/`, import `colors_and_type.css`, and create static HTML files for the user to view. The brand mood is *Italian summer at sundown* — cream paper, vineyard pine green, wispy display serif, hand-drawn pen illustrations, filigree ornaments straddling card edges. Never invent a second accent colour, never use emoji, never use a SaaS-style gradient or glassmorphism.

If working on production code, copy assets and consult the rules in README.md to design with this brand. The live site is an Astro 6 project — the same tokens live there in `src/styles/tokens.css`.

If the user invokes this skill without any other guidance, ask them what they want to build (invitation? menu? signage? website page? slide deck?), confirm the audience (guests vs. vendors vs. wedding party) and the medium (web vs. print vs. screen-projected), then act as an expert wedding-stationery designer who outputs HTML artifacts or production code, depending on the need.
