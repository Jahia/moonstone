# Component documentation style

> 🟢 **Maturity: Enforced — single source of truth.** This is how every `<Component>.md`
> and `<Component>.mdx` is written. The `component-docs` agent and the doc linter
> both derive from this file; do not duplicate its rules elsewhere.
> This is distinct from [ui-copy.md](../consuming/ui-copy.md), which governs *UI microcopy*
> (the labels and messages inside components). This file governs the *docs themselves*.
> **Last updated:** 2026-06-12

## Scope — three kinds of copy, don't mix them

This file governs **the prose of the component docs**. Two neighbours govern different copy:

- **Microcopy inside a component** (a button label, a placeholder) → `docs/consuming/ui-copy.md`.
- **Changelog entries** → `.github/instructions/changelog.instructions.md`.

Examples in these docs use realistic labels, so they also follow the microcopy rules.

## Voice

Mixed, by section:

- **Descriptive** for the subtitle and any introductory sentence. Present tense, third person,
  stating what the component is or does. Example: "Triggers an action when the user clicks it."
- **Imperative** for guidance (Do, Don't, Appearance, Accessibility, Voice and tone). Address
  the reader directly. Examples: "Use it to submit a form." "Don't use it for navigation."

## Sentences

- **Write complete sentences, or clean list items.** Do not stitch fragments together.
- **Never use an em dash (`—`).** Use a full stop and a second sentence, a comma, or a list
  instead. Example: write "Secondary actions that perform something, such as Save or Copy."
  not "Secondary actions — Save, Copy".
- **Avoid arrow shortcuts (`→`) in prose.** Write the alternative as a sentence. Example:
  write "Don't use it for navigation. Use a link instead." not "navigation → use a link".
- Present tense, active voice. Sentence case for all headings.
- Use "such as" for examples, not "e.g." or "i.e.".

## Per-section phrasing

Section order (the MDX renders Preview and Props first, then the `.md` sections in this order):
Example, [Controlled & uncontrolled], Do, Don't, Appearance, [Voice and tone], Accessibility.
Example sits first so it renders directly after the Props table.

- **Subtitle** — one descriptive sentence naming what the component is or does.
- **Do** — imperative bullets, each a complete sentence describing a correct use. Refer to the
  component as "it" and lead with "Use it to / for / when …" (for example, "Use it to confirm a
  choice."). Other action verbs (Pair, Reserve …) are fine where they read more naturally. Never
  gerunds ("Showing …") or bare noun phrases.
- **Don't** — imperative bullets. Name the wrong use, then the correct alternative, as
  complete sentences. Example: "Don't use a Button for an on/off setting. Use a Switch instead."
- **Example** — code only, with short comments. Comments are sentences without em dashes.
- **Controlled & uncontrolled** — complete sentences explaining each mode.
- **Appearance** — the "Use it for" cell of each value table is a complete sentence (or two).
- **Voice and tone** — imperative bullets, complete sentences.
- **Accessibility** — imperative or descriptive bullets, complete sentences.
- There is **no "Related" section.** Cross-references to other components belong in **Don't**
  (the correct alternative for a wrong use) or in the prose, not in a separate list.

## Terminology & formatting

- Refer to the component by its exact name, or as "the component". Be consistent within a doc.
- Put prop names, values, and code in backticks: `variant`, `default`, `aria-label`.
- Name other components in bold on first mention: **Switch**, **ButtonGroup**.
- Only mention public, exported components. Never reference internal or non-exported parts.
- No implementation details (pixel values, `.moonstone-*` classes, `$` Sass variables,
  `--moon-*` token names).
- No links to design-tool files (Figma) or to internal governance docs under `docs/`
  (`contributing/`, `consuming/`, `_process/`). Component docs are self-contained.

## Quick checklist

- [ ] No em dashes (`—`) and no arrow shortcuts (`→`).
- [ ] Complete sentences or clean list items throughout.
- [ ] Descriptive subtitle/intro; imperative guidance.
- [ ] Sentence case headings; present tense; active voice.
- [ ] No "Related" section; cross-references live in Don't or prose.
- [ ] Only public components; no implementation details; no internal or design-tool links.
