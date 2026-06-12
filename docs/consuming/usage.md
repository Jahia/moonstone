# Moonstone usage rules (consumer)

> ⬜ **Maturity: Deferred — consumer track (Phase 2-3).** Content is sound (the
> public/internal boundary is real and code-grounded); it is simply not activated yet.
> This is the source for the future consumer-facing `AGENTS.md`.

> **Audience:** developers (and their AI coding assistants) who **use** `@jahia/moonstone`
> to build an application — including "vibe coding" with Claude Code, Cursor, Copilot, etc.
> If you are **building or maintaining Moonstone components** inside the library repo,
> use the **[Contributor Rulebook](../_process/component-rules-draft.md)** instead.
>
> **Status:** v0 (draft) — codebase-derived. Phase 1 of the Design System Governance plan.
> **Why this exists:** Moonstone has no LLM-consumable documentation today, so AI tools
> don't know the components exist and reinvent them with custom CSS. This rulebook is the
> source that the consumer-facing `AGENTS.md` / `llms.txt` / catalog are generated from.
> **Last updated:** 2026-06-08

## The one rule everything else serves

> **Use Moonstone's built-in components and public tokens. Do not recreate what the
> design system already provides, and never reach into its internals.**

If an LLM follows only that sentence, 90% of the value is captured. The rest of this
document makes it checkable.

## Public surface — what you ARE allowed to use

| Use this | What it is | Example |
|---|---|---|
| **Exported React components** | The 53 components from the package root | `import {Button, Dropdown, Table} from '@jahia/moonstone'` |
| **Public CSS variables** | `--moon-*` custom properties (colors, spacing, radius) | `color: var(--moon-color-accent); padding: var(--moon-spacing-small);` |
| **`<GlobalStyle/>`** | Loads resets + tokens; mount once at app root | `import {GlobalStyle} from '@jahia/moonstone'` |
| **Public subpath exports** | e.g. `@jahia/moonstone/DataTable`, `@jahia/moonstone/icons` | `import {Love} from '@jahia/moonstone/icons'` |

## Internal surface — what you must NEVER touch

| Never use this | Why | Instead |
|---|---|---|
| `.moonstone-*` CSS classes | Hashed/internal; not a contract; will break on any release | Use the component, or your own scoped class |
| `$color-*` / `$spacing-*` **Sass** variables | Internal build-time tokens, not shipped to you | Use the `--moon-*` **CSS** variables |
| `*.module.scss` / `_variants.scss` / mixins | Library internals | — |
| Copy-pasting a component's markup/styles | Forks the design system; loses updates & a11y | Import the component |

---

## Rules

Same `[ID] / Confidence / Evidence / Check / Gap` format as the Contributor Rulebook.
Confidence reflects how firmly the rule is grounded in code today.

### [CU-1] Prefer a built-in component over anything custom ●●●
Before writing a custom component or element, check whether Moonstone already provides
it. If it does, use it.
- ↳ **Evidence:** 53 exported components cover buttons, inputs, fields, tables, menus,
  dropdowns, modals, navigation, tabs, tooltips, banners, empty states, loaders, etc.
  (`src/components/index.ts`).
- ↳ **Check:** custom JSX that reimplements a button/input/modal/table/menu/etc. is a
  violation if a Moonstone component exists for it.
- ↳ **Gap:** none — this is the core rule. The *catalog* (Phase 1 deliverable) makes
  "does it exist?" answerable by an LLM. See [Q-V1].

### [CU-2] Never write custom CSS for something a component handles ●●○
Don't restyle, override, or wrap-and-hack a Moonstone component to change its look.
Use the component's documented props (`variant`, `color`, `size`, `isReversed`, …).
- ↳ **Evidence:** components expose intent via typed props (e.g. `Button` has
  `variant: default|ghost|outlined`, `color: default|accent|danger`,
  `size: small|default|big`) rather than expecting CSS overrides.
- ↳ **Check:** flag CSS rules that target Moonstone components/classes to change their
  appearance; prefer the equivalent prop.
- ↳ **Gap:** which visual changes are legitimately *not* covered by props (so custom
  styling is unavoidable)? See [Q-V2].

### [CU-3] When you must write custom styles, use only `--moon-*` CSS variables ●●●
Custom UI that has no Moonstone equivalent is allowed — but it must be built from the
public token variables so it stays visually consistent and theme-aware.
- ↳ **Evidence:** the full palette and scale are exposed as CSS custom properties
  (`src/tokens/colors/colors.scss`, `spacings.scss`, `borders.scss`):
  `--moon-color-*`, `--moon-spacing-*` (`pico 2 … huge 56`), `--moon-radius*`.
- ↳ **Check:** custom CSS uses `var(--moon-…)` for color/spacing/radius — **no** raw
  hex/`rgb()`, **no** pixel literals for spacing, and **no** `$`-prefixed Sass vars
  (those don't exist in the shipped package).
- ↳ **Gap:** the variant/use-case meaning of each token (which is "primary", which is
  "danger") — shared with Contributor [Q-A2]. See [Q-V3].

### [CU-4] Never reference Moonstone's internal classes or Sass variables ●●●
Do not target `.moonstone-*` classes and do not import or reference `$color-*` /
`$spacing-*` Sass variables. They are implementation details and are not part of the
public contract.
- ↳ **Evidence:** classes are CSS-modules-hashed at build time
  ([CONTRIBUTING.md CSS rules]; `clsx(reset, ['moonstone-x', styles['moonstone-x']])`
  pattern means the runtime class is *not* `moonstone-x`); Sass `$` tokens live only in
  `src/tokens/` source and never ship.
- ↳ **Check:** grep consumer code/CSS for `moonstone-` class selectors or `$color`/
  `$spacing` — any hit is a violation.
- ↳ **Gap:** none. This is a hard boundary.

### [CU-5] Mount `GlobalStyle` once, at the app root ●●●
Tokens, resets, and fonts come from `<GlobalStyle/>`. Without it, `--moon-*` variables
are undefined and components render unstyled.
- ↳ **Evidence:** [README.md](../../README.md) usage; `.storybook/preview.jsx` imports
  the same reset + token stylesheets that `GlobalStyle` bundles.
- ↳ **Check:** exactly one `<GlobalStyle/>` near the app root; not per-component.
- ↳ **Gap:** SSR / style-injection-order caveats not documented. See [Q-V4].

### [CU-6] Use icons from the Moonstone icon set ●●○
Use `@jahia/moonstone/icons` rather than arbitrary icon libraries or inline SVG,
so iconography stays consistent.
- ↳ **Evidence:** icons are a dedicated public export; components like `Button` accept
  an `icon` React element and size it themselves.
- ↳ **Check:** icons passed to components come from the Moonstone icon set; flag
  third-party icon imports used inside Moonstone components.
- ↳ **Gap:** what to do when a needed icon doesn't exist (request it? allowed fallback?).
  See [Q-V5].

### [CU-7] Respect component composition contracts ●●○
Compound components must be used with their documented sub-parts and structure, not
approximated.
- ↳ **Evidence:** [Modal.md](../../src/components/Modal/Modal.md) requires
  `Modal > ModalHeader / ModalBody / ModalFooter`; Dropdown requires items grouped
  consistently; Field wraps inputs to provide label/error wiring.
- ↳ **Check:** compound components include their required sub-components in the right
  nesting; form inputs are wrapped in `Field` for label/error/helper.
- ↳ **Gap:** per-component composition contracts aren't centrally documented — this is
  exactly what the catalog must capture. See [Q-V1].

### [CU-8] Get accessibility "for free" by using components correctly ●●○
Moonstone components carry built-in a11y (focus rings, roles, keyboard handling). Don't
defeat it, and supply the bits only you can: an `aria-label` for icon-only controls,
labels via `Field`, meaningful text.
- ↳ **Evidence:** icon-only `Button` requires `aria-label`
  ([Button.md](../../src/components/Button/Button.md)); `Loader` has `role="status"`;
  focus rings are built in.
- ↳ **Check:** icon-only controls have `aria-label`; inputs have labels; no removal of
  outlines/roles via custom CSS.
- ↳ **Gap:** consumer-side a11y bar — shares Contributor [Q-D1]. See [Q-V6].

---

## Open questions & rule gaps (consumer track)

Unlike the contributor gaps (which need the senior *designer*), most of these need a
**product/library** decision plus a few from the designer.

| Gap | Affects | Question | Owner |
|---|---|---|---|
| Catalog content: what an LLM needs per component | CU-1, CU-7 | Q-V1 | Library + design |
| Visual changes not covered by props → custom OK? | CU-2 | Q-V2 | Design |
| Token semantics for consumers | CU-3 | Q-V3 (≈ Q-A2) | Design |
| SSR / style-order caveats | CU-5 | Q-V4 | Library |
| Missing-icon fallback policy | CU-6 | Q-V5 | Design |
| Consumer accessibility bar | CU-8 | Q-V6 (≈ Q-D1) | Design |

---

## Next deliverable: rich per-component docs (the catalog, auto-generated)

The thing that makes [CU-1] and [CU-7] answerable by an LLM is a machine-readable
catalog of the 53 exported components. **We will not hand-maintain one** — Storybook's
[components manifest](https://storybook.js.org/docs/ai/manifests)
(`/manifests/components.json`) generates it automatically from CSF + MDX + source, and
its MCP server serves it live. (See project [README](../README.md) for the full delivery
decision.)

So the Phase 1 work is **making each component's docs rich enough** that the generated
manifest is actually useful. Per component, ensure the source/CSF/MDX expresses:

- **What it's for / when to use it** (and what custom thing it replaces) — narrative.
- **Key props** (variants, sizes, states) — from `*.types.ts` JSDoc (already typed).
- **Composition contract** (required sub-components, must-wrap-in-`Field`, etc.).
- **A minimal usage example** — a clear primary story.
- **Public tokens it pairs with.**

Plus the one artifact we author by hand and fully control: a drop-in **`AGENTS.md`**
encoding the CU-1…8 rules ("use built-ins, never custom CSS, `--moon-*` only, never
`.moonstone-*`"), which Storybook recommends pairing with its MCP.

## Changelog

- **v0 (2026-06-08)** — Initial consumer-track rulebook. 8 rules (CU-1…8) defining the
  public/internal boundary and built-in-first usage, plus 6 gaps and the catalog spec.
