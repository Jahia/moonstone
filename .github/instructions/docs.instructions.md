---
description: "Use when writing, adding, creating, or updating documentation for a component (.md prose and .mdx Storybook Docs pages under src/components/)."
applyTo: "src/components/**/*.{md,mdx}"
---
# Component documentation

Component docs follow a single standard: **`docs/contributing/component-docs.md`**. It is the
source of truth — section order, voice, the `?raw` MDX import, what must stay self-contained.
Do not invent conventions.

- Prefer the **`component-docs` agent** for any non-trivial write or review of a component's
  `.md`/`.mdx`. It encodes the full standard and grounds every claim in the component's code.
- If you write docs directly, follow `docs/contributing/component-docs.md` to the letter, and
  the microcopy rules in `docs/consuming/ui-copy.md` for any example labels.
- Never invent design intent. Leave `_Pending design guidance_` where the designer must decide.

See `AGENTS.md` (repo root) for the general agent rules.
