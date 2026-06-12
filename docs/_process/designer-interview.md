# Senior Designer Interview Guide

> 🔧 **Maturity: Process — transient working doc, not normative.** Retire once the rules
> reach v1.

> **Purpose:** capture the tacit design knowledge the codebase *cannot* express, to
> raise the [component-rules-draft](./component-rules-draft.md) from v0 (code-derived) to v1 (ratified).
> **Format:** react-and-edit, not blank-page. Each question is anchored to a concrete
> v0 rule so the designer is *confirming, bounding, or overriding* something specific.
> **Last updated:** 2026-06-08

## How to run these sessions

1. **Don't start cold.** Open with the v0 Rulebook on screen. The fast path to tacit
   knowledge is disagreement — show a rule and ask "is this right?".
2. **Chase the "why" and the threshold.** Code tells us *what* is done; we need
   *why* and *where the line is*. For every rule, the gold is: the rationale, the
   anti-pattern it prevents, and the numeric/visual threshold that separates pass
   from fail.
3. **Mine real review history.** Best prompt of all: *"Show me the last 5 PRs you
   sent back. What did you flag, and what was the underlying rule?"* Every flag is a
   latent rule.
4. **Capture anti-patterns, not just rules.** "Never do X" is more checkable (and
   more teachable to an AI in Phase 3) than "prefer Y".
5. **Record verbatim where possible.** Exact phrasing becomes the rule text.

For each answer, note: **(a)** the rule it sets, **(b)** the anti-pattern, **(c)** how
to check it, **(d)** which v0 rule id it updates or adds.

---

## Warm-up (frame the whole system)

- **W1.** When you review a new module today, what's the *first* thing you look at —
  and what most often makes you reject it?
- **W2.** What separates a contribution that "feels Moonstone" from one that's
  technically correct but off? Try to name the tells.
- **W3.** Which mistakes do you see *over and over* from contributors vibe-coding new
  modules? (These become our highest-priority anti-patterns.)

---

## Category A — Visual consistency & tokens

### Q-A1 — When is a new token justified? → *VC-1*
The code says "use only tokens." But contributors will hit colors/spacings that don't
exist yet.
- When is it correct to **add a new token** vs. reuse the nearest existing one?
- Who owns approving a new token? What's the bar?
- *Anti-pattern check:* what's an example of a token that should never have been
  added / a hardcoded value you've rejected?

### Q-A2 — What do the color families *mean*? → *VC-2, ST-4*
We have `accent / danger / warning / info / gray / light / dark` with `20/40/60`
alpha and `dark/light/plain` variants.
- Give the one-sentence intent of each family. Specifically: **`info` vs `accent`** —
  when does each apply? **`warning` vs `danger`** — where's the line?
- What are the alpha steps (`20/40/60`) *for* — overlays, disabled, hover tints?
- Is there a **success/positive** color? (See also Q-B5.)
- *Contrast:* do token pairings (text-on-surface) have a guaranteed contrast ratio,
  or is that the contributor's job to check?

### Q-A3 — Spacing and sizing intent → *VC-3, VC-4*
The scale is tokenized (`pico…huge`) and components come in `small/default/big`.
- How do you choose a spacing step? Is there a notion of density, or a rule like
  "related elements = small, sections = large"?
- Is `small/default/big` a **system-wide** size contract, or per-component?
- When are raw-pixel *dimensions* (not spacing) acceptable, e.g. fixed heights?
- *Anti-pattern:* what spacing mistake do you flag most?

### Q-A4 — Typography variant → use-case map → *VC-5*
Variants: `title / heading / subheading / body / caption / button`; weights:
`default / bold / semiBold / light`.
- Map each variant to where it's used. When is text `caption` vs `body`? `title` vs
  `heading`?
- When is a non-default **weight** appropriate vs. decorative?
- *Anti-pattern:* misuse you commonly correct (e.g. heading used for emphasis)?

### Q-A5 — Radius & elevation → *VC-6*
`--moon-radius` (4 / small 2 / rounded 32) and one shadow level (`level1`).
- Which radius for which component type? When is `rounded` (pills/avatars) correct?
- Is one elevation level enough? Do we need more, and what would they mean
  (resting / overlay / modal)?

### Q-A6 — Dark mode scope → *VC-7*
`isReversed` + per-state reversed styling is the standard.
- Which components are **exempt** from dark mode (always-light or always-dark
  surfaces)? How do you decide?
- What's the most common dark-mode bug you catch (e.g. resting color reversed but
  hover/active forgotten)?

---

## Category B — Interaction & behavior patterns

### Q-B1 — State coverage & stacking → *IP-1, UX-4*
Standard set: hover / focus-visible / active / disabled.
- Is **`:active`** required on everything interactive, or only buttons/links?
- **State stacking:** when an item is *selected* and also hovered/focused, what wins?
  Is there a precedence order we can state as a rule?
- Are there states we *don't* have a standard for yet (e.g. error on a button,
  "pressed/toggled" state)?

### Q-B2 — Disabled vs. busy semantics → *IP-3*
Code recognizes `:disabled`, `[aria-disabled="true"]`, `[aria-busy="true"]`.
- When should a control be truly `disabled` vs. `aria-disabled` (focusable but
  inert) vs. `aria-busy` (loading)? This distinction matters a lot for keyboard users.
- Should *all* components standardize on `aria-busy` for loading?

### Q-B3 — Loading patterns & latency → *IP-4*
`<Loader>` is the spinner; Button swaps icon→loader or overlays the label.
- When is an inline **spinner** right vs. a **skeleton** vs. a **full-region** loader?
- Is there a **latency threshold** below which we should show *nothing* (to avoid
  flicker) and above which a loader is mandatory?
- For optimistic vs. blocking actions, what should the UI do?

### Q-B4 — Motion / transition standard → *IP-5 (currently undefined)*
This is a near-total gap: code has only `@keyframes spin`.
- Is there an intended **duration / easing** standard? (e.g. 150ms ease-out for
  hovers, X for overlays.)
- What *should* animate (overlays, expand/collapse, hover) and what should be
  instant?
- Reduced-motion: do we honor `prefers-reduced-motion`, and how?
- *This session likely creates several new rules from scratch.*

### Q-B5 — Feedback & success → *IP-6*
Banner has `neutral / info / warning / danger`.
- How is **success / positive confirmation** communicated today (toast? inline?
  there's no success Banner variant)?
- Banner vs. inline-field-error vs. toast/transient — when does each apply?
- Is there a transient-notification (toast/snackbar) pattern we're missing?

### Q-B6 — System-wide keyboard map → *IP-7*
Dropdown specifies Tab + Enter + click-outside; others vary.
- Is there a **global keyboard contract**? e.g. Esc closes overlays, arrow keys move
  within lists/menus/trees, Space toggles, Enter confirms.
- For overlays (Modal, Dropdown, Menu, Tooltip): what's the required focus-trap /
  return-focus behavior?
- Which components currently fall short and should be fixed?

---

## Category C — UX flows & edge cases

### Q-C1 — Empty states → *UX-1*
`<EmptyData>` (title / message / icon).
- Does every empty state need a **CTA / next action**, or is an explanatory message
  enough? When is each appropriate?
- Icon: required or optional? Any guidance on tone of the message?
- *Anti-pattern:* worst empty-state mistake you've seen.

### Q-C2 — Form validation & error messaging → *UX-2*
`Field` carries `hasError` + `errorMessage` + `helper`.
- **Timing:** validate on blur, on submit, or live-as-you-type? Does it differ by
  field type?
- **Message style:** tone, length, do/don't ("Required" vs "Please fill this in")?
  Do we say what's wrong *and* how to fix it?
- Helper text vs. error text — can both show at once? Precedence?

### Q-C3 — Overflow: truncate vs wrap vs tooltip → *UX-3*
`truncate()` mixin and `isNowrap` exist; Dropdown truncates long labels.
- Decision rule: when do we **truncate** (and show a tooltip with the full value)
  vs. **wrap** vs. **scroll**?
- Does truncated content *always* need a tooltip for the full value?
- Min-width / responsive behavior expectations?

### Q-C4 — Boundary content → *UX-4, UX-5*
- Beyond empty/error: what edge cases must every module handle? (very long text,
  huge lists / virtualization, zero vs. one vs. many, slow network, no
  permission/forbidden, partial data?)
- Which of these have you been burned by in review?

### Q-C5 — Required edge-case coverage in Storybook → *UX-5*
Button stories show Disabled / OnlyIcon / IconAndLabel / Overview(light+dark).
- What is the **minimum required set of stories** for each component type
  (input/control/overlay/data-display)? e.g. "every input must have an error story;
  every list must have an empty story."
- This becomes a concrete, checkable Phase 2 checklist item.

---

## Cross-cutting

### Q-D1 — Accessibility bar → *ST-4*
PR template says "Accessibility is OK" — but the bar isn't written down.
- What **WCAG level** are we committing to (A / AA / AAA)?
- Beyond focus rings and `aria-label` on icon buttons, what's the non-negotiable a11y
  checklist (labels, roles, contrast, keyboard, announced state changes)?
- Could we adopt the `design:accessibility-review` skill's WCAG 2.1 AA audit as the
  standard? (Decision to confirm.)

### Q-D2 — Severity & prioritization (feeds Phase 2 & 3)
For the future checklist and AI assistant, we need to rank findings.
- Which rule violations are **blockers** (must fix before merge) vs. **should-fix**
  vs. **nits**?
- If the AI assistant could only check **five** things, which five catch the most
  real problems?

### Q-D3 — Composition & "new component vs. variant"
- When should a contributor build a **new component** vs. add a **variant/prop** to an
  existing one? What's the test for "this belongs in the system" at all?
- How do you spot a module that's reinventing something Moonstone already provides?

---

## Output of these sessions

After each session, fold answers back into [component-rules-draft](./component-rules-draft.md):
- Upgrade the linked rule's **confidence** and tighten its **Check** with the
  threshold the designer gave.
- Add the **anti-pattern** to the rule (these are the most valuable input for the
  Phase 3 AI assistant).
- Add **new rules** where the answer revealed an undefined area (motion, success
  feedback, keyboard map, WCAG level are the likeliest).
- Move the resolved row out of the Rulebook's *Open questions* table.

When the table is empty (or every remaining gap is explicitly "intentionally
undefined"), the Rulebook is **v1** and Phase 2 (the PR checklist) can be derived
directly from it.
