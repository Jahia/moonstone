# Moonstone Contributor Rulebook

> **Audience:** developers who **build and maintain** Moonstone components (inside this repo).
> For developers who **use** Moonstone in their own app (incl. AI-assisted "vibe coding"),
> see the **[Consumer Rulebook](./CONSUMER-RULEBOOK.md)** instead — the rules are different.
>
> **Status:** v0 (draft) — codebase-derived. Phase 1 of the Design System Governance plan.
> **Source of truth:** this document. [CONTRIBUTING.md](../../CONTRIBUTING.md) and
> [README.md](../../README.md) are known to be **stale** and are *not* authoritative;
> every rule here is grounded in code, not in those docs. This Rulebook is intended to
> replace CONTRIBUTING's "Coding Rules" section once ratified.
> **Last updated:** 2026-06-08

## What this is

A structured, checkable set of rules for reviewing contributions to the Moonstone
design system. It exists to scale design review beyond a single reviewer and to
catch issues before development is "done".

Each rule is written to be **verifiable** — by a human reviewer today (Phase 2
checklist) and by an AI assistant later (Phase 3). Rules are grouped by the three
agreed review categories, plus a structural section that the existing PR template
already enforces.

### The public / internal API boundary

This is the concept that separates the two rulebooks. Contributors work on **both
sides** of it; consumers may only ever touch the public side.

| | Public (the contract) | Internal (implementation) |
|---|---|---|
| Components | Exported React components (53 from `src/components/index.ts` + package `exports`) | Sub-components not exported |
| Color/spacing | `--moon-*` CSS custom properties | `$color-*` / `$spacing-*` Sass tokens |
| Classes | *(none — consumers never use Moonstone classes)* | `.moonstone-*` BEM classes, `*.module.scss` |
| Mixins/placeholders | — | `%is-focused`, `truncate()`, `_variants.scss` |

As a contributor you may use the internal side freely — that's your job. But every
**public** change (a new exported component, a renamed prop, a new/removed
`--moon-*` variable) is a breaking-change surface for consumers and must be treated
as such.

### How to read a rule

```
[ID] Title                                    Confidence: ●●● / ●●○ / ●○○
The rule, stated as a single checkable assertion.
↳ Evidence:  where this is already enforced or exemplified in the codebase
↳ Check:     how a reviewer (or tool) confirms compliance
↳ Gap:       (if any) what the senior designer still needs to confirm — see INTERVIEW-GUIDE.md
```

**Confidence** reflects how firmly the rule is grounded *in code today*, not how
important it is:
- ●●● — directly enforced or near-universal in the codebase; safe to treat as law.
- ●●○ — strong convention with a few exceptions; confirm the boundary.
- ●○○ — inferred or partial; needs the senior designer to set the rule.

---

## Category A — Visual consistency & tokens

> Colors, spacing, typography, radius, shadow, and design-token usage.
> Governing principle (grounded in `src/tokens/`, not in the stale CONTRIBUTING.md):
> **colors and spacings are defined only via design tokens — never as raw values in a component.**

### [VC-1] No hardcoded colors — use color tokens only ●●●
Every color value must reference a `--moon-color-*` CSS variable. No raw hex, `rgb()`, or named colors in component SCSS.
- ↳ **Evidence:** `src/tokens/colors/colors.scss` defines the full palette as
  `--moon-color-*` custom properties; components consume them
  (e.g. [Button.module.scss](../../src/components/Button/Button.module.scss) uses
  `var(--moon-color-gray_dark)`, `var(--moon-color-white)`).
- ↳ **Check:** grep component `.module.scss` for `#`, `rgb(`, `rgba(`, or color
  keywords; any match outside `tokens/` is a violation.
- ↳ **Gap:** when is a *new* token justified vs. reusing an existing one? See [Q-A1].

### [VC-2] Color families and their meaning ●●○
Use the semantic color family that matches intent, not an arbitrary one:
- `accent` (blue) — primary/interactive emphasis, selection, focus.
- `danger` (red) — destructive actions and error states.
- `warning` (yellow), `info` — advisory feedback (see Banner variants).
- `gray` / `light` / `dark` — neutral surfaces, text, borders.
Each family ships alpha steps (`20/40/60`) and `_dark` / `_light` / `_plain`
variants for layering and dark mode.
- ↳ **Evidence:** `colors.scss` family structure; `Banner` variants
  `'neutral' | 'info' | 'warning' | 'danger'`
  ([Banner.types.ts](../../src/components/Banner/Banner.types.ts)); `_variants.scss`
  maps `danger` → destructive, `accent` → primary.
- ↳ **Check:** destructive UI uses `danger`; primary CTA uses `accent`; neutral
  chrome uses `gray`/`light`/`dark`.
- ↳ **Gap:** exact intended semantics of `info` vs `accent`, and when `warning`
  vs `danger` applies. See [Q-A2].

### [VC-3] No hardcoded spacing — use spacing tokens ●●●
All margin/padding/gap values must use `--moon-spacing-*`
(`pico 2 · nano 4 · small 8 · medium 16 · large 24 · big 40 · huge 56`).
Pixel literals for spacing are a violation.
- ↳ **Evidence:** `src/tokens/spacings/spacings.scss`; Button uses
  `var(--moon-spacing-small)`, `var(--moon-spacing-medium)`,
  `var(--moon-spacing-nano)`.
- ↳ **Check:** grep `.module.scss` for `padding`/`margin`/`gap` with a `px` literal
  instead of a `--moon-spacing-*` var. (Note: fixed component *dimensions* like
  `height: 24px` are a separate question — see [VC-4].)
- ↳ **Gap:** the spacing *scale* is tokenized, but which step to use for which
  density/relationship is not written down. See [Q-A3].

### [VC-4] Component sizing scale ●●○
Interactive components come in a discrete size set (typically `small / default / big`)
with fixed pixel heights, not arbitrary dimensions.
- ↳ **Evidence:** Button heights `16 / 24 / 32px` for `small/default/big`
  ([Button.module.scss](../../src/components/Button/Button.module.scss));
  `ButtonSize = ['small','default','big']`.
- ↳ **Check:** new sizes outside the named set, or magic-number heights that don't
  match the scale, are flagged.
- ↳ **Gap:** is the `small/default/big` triad a system-wide standard? What governs
  raw-pixel dimensions that aren't spacing? See [Q-A3].

### [VC-5] Typography only via the Typography component ●●●
Text must render through `<Typography>` using a defined `variant`
(`title · heading · subheading · body · caption · button`) and `weight`
(`default · bold · semiBold · light`). No ad-hoc `font-size` / `font-weight` /
`font-family` in component SCSS.
- ↳ **Evidence:** [Typography.types.ts](../../src/components/Typography/Typography.types.ts);
  Button renders its label as `<Typography variant="button" weight={…}>` rather
  than styling raw text.
- ↳ **Check:** component SCSS should not set `font-size`/`font-weight`; text content
  should be wrapped in `Typography`.
- ↳ **Gap:** the variant→use-case mapping (when is text `caption` vs `body`?) is
  not documented. See [Q-A4].

### [VC-6] Radius and shadow via tokens ●●●
Border radius uses `--moon-radius` (`4`), `--moon-radius_small` (`2`), or
`--moon-radius_rounded` (`32`). Elevation uses the `shadow()` Sass function
(`shadow('level1')`), not raw `box-shadow` values.
- ↳ **Evidence:** `src/tokens/borders/borders.scss`;
  `src/tokens/shadows/_shadows.scss` (`$shadows: ('level1': …)` + `@function shadow`).
- ↳ **Check:** grep for literal `border-radius:` px values or inline `box-shadow`
  declarations.
- ↳ **Gap:** when is each radius/elevation level appropriate? See [Q-A5].

### [VC-7] Dark mode ("reversed") must be supported ●●○
Any component that renders on a dark surface must support the reversed theme via
`isReversed` (which applies the `moonstone-reverse` class), with explicit reversed
styling for every interactive state — not just inherited colors.
- ↳ **Evidence:** `isReversed` prop pattern (Button, Loader, EmptyData…);
  `_variants.scss` defines `&.moonstone-reverse { … }` for hover/focus/active on
  every variant; the PR template requires *"Reversed style (light/dark mode)"*.
- ↳ **Check:** PR template item is checked; story demonstrates the component on a
  dark background (the `Overview` story pattern); reversed hover/active are visibly
  styled, not default.
- ↳ **Gap:** which components are *exempt* (e.g. always-light surfaces)? See [Q-A6].

---

## Category B — Interaction & behavior patterns

> States, transitions, loading, feedback. The canonical contract lives in
> [`src/globals/_variants.scss`](../../src/globals/_variants.scss) and
> [`src/utils/_mixins.scss`](../../src/utils/_mixins.scss).

### [IP-1] Every interactive element implements the full state set ●●●
Interactive components must style **hover, focus-visible, active, and disabled** —
not just the resting state.
- ↳ **Evidence:** `_variants.scss` defines `:hover`, `:focus-visible`, `:active`,
  and disabled rules for each variant; Button's own `.md` lists *"hover, focus,
  disabled, active"* as required specs.
- ↳ **Check:** the `.module.scss` contains `:hover`, `:focus-visible`/`%is-focused`,
  `:active`, and a disabled rule for the interactive element.
- ↳ **Gap:** is `:active` mandatory for *all* interactive elements or only
  buttons/links? See [Q-B1].

### [IP-2] Focus is shown with the standard focus ring ●●●
Keyboard focus uses the shared `%is-focused` placeholder —
`outline: 2px solid var(--moon-color-accent_light); outline-offset: 2px;` — applied
on `:focus-visible`. Do not remove outlines without replacing them, and do not
invent a bespoke focus style.
- ↳ **Evidence:** `%is-focused` in `_mixins.scss`, `@extend`ed across ~25 components
  (Button, Dropdown, Checkbox, Tab, TreeView, Input, Accordion, …).
- ↳ **Check:** focus styling goes through `@extend %is-focused` on `:focus-visible`;
  flag any `outline: none` not paired with a replacement focus indicator.
- ↳ **Gap:** none significant; confirm offset/width are intentional, not legacy.

### [IP-3] Disabled and busy states are non-interactive and consistently styled ●●●
Disabled/loading elements must (a) suppress hover/focus/active feedback and (b) use
the standard disabled treatment. The recognized "inactive" selectors are
`:disabled`, `[aria-disabled="true"]`, and `[aria-busy="true"]`.
- ↳ **Evidence:** `_variants.scss` guards every interactive state with
  `:not(:disabled, [aria-disabled="true"], [aria-busy="true"])`; `%selector_disabled`
  in `_mixins.scss` defines the disabled look (gray, `opacity: 0.8`, no border);
  Button sets `disabled={isDisabled || isLoading}`.
- ↳ **Check:** interactive `:hover/:focus/:active` rules carry the `:not(...)` guard;
  disabled appearance matches `%selector_disabled`; a loading control is also
  non-clickable.
- ↳ **Gap:** should *every* component standardize on `aria-busy` for loading, or
  only some? See [Q-B2].

### [IP-4] Loading uses the Loader component (and announces itself) ●●○
Asynchronous/pending states use `<Loader>` rather than a custom spinner. The Loader
exposes `role="status"` for assistive tech and an `isReversed` option for dark mode.
- ↳ **Evidence:** [Loader.tsx](../../src/components/Loader/Loader.tsx)
  (`role="status"`); Button renders `<Loader size="small" …>` when `isLoading`,
  replacing the icon or overlaying the label.
- ↳ **Check:** new loading UI imports `Loader`; isn't a one-off animation; pairs
  with `aria-busy`/`disabled` where the control becomes inert.
- ↳ **Gap:** when to show inline spinner vs. skeleton vs. full-region loader; what
  the latency threshold is for showing a loader at all. See [Q-B3].

### [IP-5] Animations are minimal, tokenized, and shared ●○○
Motion should reuse shared keyframes/utilities rather than per-component bespoke
animation. Today the only global animation is `spin`.
- ↳ **Evidence:** `src/globals/_animations.scss` defines only
  `@keyframes spin`.
- ↳ **Check:** flag locally-defined `@keyframes` and long/elaborate transitions that
  diverge from the system.
- ↳ **Gap:** there is **no documented transition standard** (durations, easing,
  what should animate). This is largely undefined in code. See [Q-B4].

### [IP-6] Feedback uses the Banner severity scale ●●○
User feedback messages (info/success/warning/error) use `<Banner>` with the
appropriate `variant` (`neutral | info | warning | danger`), not ad-hoc colored
boxes.
- ↳ **Evidence:** [Banner.types.ts](../../src/components/Banner/Banner.types.ts).
- ↳ **Check:** feedback UI maps severity → Banner variant; danger reserved for
  errors/destructive outcomes.
- ↳ **Gap:** there is no obvious **success/positive** variant — how is success
  communicated? See [Q-B5].

### [IP-7] Keyboard interaction patterns are consistent ●●○
Composite/overlay components must be keyboard operable with conventional keys:
Tab to move between options, Enter to select/confirm, click-outside / item-click to
dismiss overlays.
- ↳ **Evidence:** [Dropdown.md](../../src/components/Dropdown/Dropdown.md)
  ("navigate between options by `Tabulation`", "validate a value by pressing
  `Enter`", "click outside to hide"); `aria-busy`/`aria-disabled` used in Dropdown
  and TreeView.
- ↳ **Check:** overlay/menu/list components document and implement Tab + Enter +
  dismiss behavior; selected item has a distinct visual state.
- ↳ **Gap:** is there a system-wide keyboard map (Esc to close? arrow keys for
  lists/trees?) — only partially specified per-component. See [Q-B6].

---

## Category C — UX flows & edge cases

> Empty states, errors, boundary conditions, content overflow.

### [UX-1] Empty states use the EmptyData component ●●○
When a collection/region can be empty, render `<EmptyData>` with a `title`,
`message`, and optional `icon` — not a blank area.
- ↳ **Evidence:** [EmptyData.tsx](../../src/components/EmptyData/EmptyData.tsx);
  `EmptyCardSelector` shows the pattern composed into a larger component.
- ↳ **Check:** any list/table/grid/selector has a defined empty state; it's centered,
  uses `Typography`, and gives the user a next step in `message`.
- ↳ **Gap:** does every empty state need an action/CTA? Required vs. optional icon?
  See [Q-C1].

### [UX-2] Form fields expose error state and message ●●○
Inputs used in forms must support an error presentation: a `hasError` flag plus a
human-readable `errorMessage`, surfaced through `Field`.
- ↳ **Evidence:** [Field.types.ts](../../src/components/Field/Field.types.ts)
  (`hasError`, `errorMessage`, `helper`, `label`, `id`).
- ↳ **Check:** field components thread `hasError`/`errorMessage`; error text is
  associated with the input (label/id wiring) for screen readers.
- ↳ **Gap:** validation *timing* (on blur / on submit / live) and message tone/format
  are not defined. See [Q-C2].

### [UX-3] Content overflow is handled (truncation, no-wrap) ●●○
Text that can exceed its container must be handled deliberately — truncated with
ellipsis or explicitly no-wrapped — never allowed to break layout.
- ↳ **Evidence:** `truncate()` mixin in
  [`_mixins.scss`](../../src/utils/_mixins.scss); Typography `isNowrap`;
  Dropdown.md: *"The label should be truncated if it's longer than the container."*
- ↳ **Check:** labels/values that take user content use `truncate()` or `isNowrap`;
  long content has a tooltip or wrap strategy.
- ↳ **Gap:** truncate vs. wrap vs. tooltip — which to use where? See [Q-C3].

### [UX-4] Selection and "current" states are visually distinct ●●○
In lists, menus, tabs, and trees, the selected/active item must be visually
differentiated from the rest.
- ↳ **Evidence:** Dropdown.md: *"The selected item has a specific design."*;
  selected-state classes across ListItem/Tab/TreeView.
- ↳ **Check:** components with selectable items define a selected modifier distinct
  from hover/focus.
- ↳ **Gap:** must selected remain distinguishable *while also* hovered/focused (state
  stacking)? See [Q-B1]/[Q-C4].

### [UX-5] Boundary conditions are demonstrated in Storybook ●○○
Stories should cover not just the happy path but boundary cases: long text,
icon-only, disabled, loading, empty, and error — so reviewers can see edge behavior
without running the app.
- ↳ **Evidence:** Button stories include `Disabled`, `OnlyIcon`, `OnlyLabel`,
  `IconAndLabel`, and an `Overview` showing all variants on light + dark.
- ↳ **Check:** stories include the relevant edge states for the component's domain
  (a form field shows an error story; a list shows an empty story; etc.).
- ↳ **Gap:** what is the *required minimum* set of edge-case stories per component
  type? See [Q-C5].

---

## Category D — Structural & contribution rules

> Already enforced informally by [CONTRIBUTING.md](../../CONTRIBUTING.md) and the
> [PR template](../../.github/pull_request_template.md). Included so the Rulebook is
> the single source of truth.

### [ST-1] Complete component file set ●●●
A component ships with: `Component.tsx`, `Component.module.scss`,
`Component.spec.tsx`, `Component.stories.tsx`, `Component.types.ts`, `Component.md`,
and `index.ts`.
- ↳ **Evidence:** every component dir (e.g. `src/components/Button/`); PR template:
  *"All files present (component - scss - spec - stories)"*.
- ↳ **Check:** all seven files exist; `index.ts` re-exports.

### [ST-2] BEM-style scoped class naming ●●●
Classes follow `[Block]_[Element]` + `.[Modifier]`, where `[Block]` is the component
name prefixed `moonstone-`. Classes are applied via `clsx` using the
`[globalName, styles[scopedName]]` pair pattern, alongside the shared `reset` global.
- ↳ **Evidence:** CONTRIBUTING.md "CSS rules"; Button/Loader/EmptyData all use the
  `clsx(reset, ['moonstone-x', styles['moonstone-x']], …)` pattern.
- ↳ **Check:** class names match the convention; no class escapes the `styles` map;
  `reset` (and `layout` where relevant) are applied.

### [ST-3] Typed, documented, spreadable props ●●●
Props are a typed object extending the native element
(`Omit<React.ComponentPropsWithRef<'el'>, …>`), each prop has a JSDoc comment,
boolean props are prefixed `is*`/`has*`, `className` is accepted, and extra props are
spread (`{...props}`). `displayName` is set.
- ↳ **Evidence:** [Button.types.ts](../../src/components/Button/Button.types.ts),
  Typography/Field/Banner types; Button sets `Button.displayName`. PR template:
  *"All props ok and documented"*, *"Allows custom props"*.
- ↳ **Check:** types file present with JSDoc; boolean naming; `className` + `...props`
  passthrough; `displayName` set.

### [ST-4] Tests and accessibility pass ●●○
A spec file exercises behavior, and accessibility is verified.
- ↳ **Evidence:** every component has a `.spec.tsx`; PR template: *"Unit Tests"*,
  *"Accessibility is OK"*; icon-only Button requires `aria-label`
  ([Button.md](../../src/components/Button/Button.md)).
- ↳ **Check:** spec covers states; interactive elements have accessible names;
  icon-only controls require `aria-label`.
- ↳ **Gap:** target WCAG level and whether contrast is checked for tokens are not
  written down. See [Q-A2]/[Q-D1].

---

## Open questions & rule gaps (Phase 1 backlog)

These are the rules the **code cannot tell us** — the senior designer's tacit
knowledge. Each is tracked in [INTERVIEW-GUIDE.md](./INTERVIEW-GUIDE.md) with the
matching `Q-` id. Resolving them upgrades the related rule's confidence and may add
new rules.

| Gap | Affects rule(s) | Question |
|---|---|---|
| When is a new token justified? | VC-1 | Q-A1 |
| Semantics of info/warning/danger/accent | VC-2, ST-4 | Q-A2 |
| Spacing-step and sizing intent | VC-3, VC-4 | Q-A3 |
| Typography variant → use-case map | VC-5 | Q-A4 |
| Radius/elevation usage | VC-6 | Q-A5 |
| Dark-mode exemptions | VC-7 | Q-A6 |
| `:active` scope; state stacking | IP-1, UX-4 | Q-B1 |
| `aria-busy` standardization | IP-3 | Q-B2 |
| Loader vs skeleton; latency threshold | IP-4 | Q-B3 |
| Transition/motion standard (undefined) | IP-5 | Q-B4 |
| Success/positive feedback | IP-6 | Q-B5 |
| System-wide keyboard map | IP-7 | Q-B6 |
| Empty-state CTA requirement | UX-1 | Q-C1 |
| Validation timing & message tone | UX-2 | Q-C2 |
| Truncate vs wrap vs tooltip | UX-3 | Q-C3 |
| State stacking (selected + hover) | UX-4 | Q-C4 |
| Required edge-case stories per type | UX-5 | Q-C5 |
| Target WCAG level / contrast policy | ST-4 | Q-D1 |

---

## Changelog

- **v0 (2026-06-08)** — Initial draft extracted from the Moonstone codebase, tokens,
  CONTRIBUTING.md, and the PR template. 22 rules across 4 categories; 18 gaps queued
  for the senior-designer sessions.
