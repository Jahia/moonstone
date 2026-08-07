---
name: review-code
description: Review a moonstone component or helper for API design, developer-experience, and code-quality/naming issues. Use when asked to review code, audit a component's public API, or check a function/module for maintainability and naming before merging. Covers API & DX and code quality & naming only — test coverage and documentation are handled by the separate review-test and review-doc skills.
---

# Review code (moonstone)

Review React + TypeScript components and helpers for **API & DX** and **code quality & naming**.
The rules are generic — apply them to any component or function in the library.

Out of scope here: test coverage (→ `review-test`) and documentation/contract sync (→ `review-doc`).

## How to run a review

1. Read the changed code and the surrounding contract it belongs to (the component's siblings, the types it exports, its call sites).
2. Walk both checklists below against it.
3. Report findings **grouped by severity, then category** (see Output). For each: state *what is wrong* and *why it matters*; add a concrete suggestion when you have one.
4. Default to **suggest only — do not edit code** unless asked to apply fixes.
5. When you are not sure whether something is intentional, **ask instead of asserting a bug**. Prefer a question over a wrong claim.

## API & DX

The public API (anything exported from `src/index.ts` or a component's exported types) is a semver contract that consumers depend on and that is expensive to change later. Review for:

- **Semver safety.** Prefer additive, backward-compatible changes (new optional props over renames; deprecate before removing). Flag anything that would compile-fail or behave differently for an existing consumer as **breaking** — it needs explicit sign-off and must be called out. (A `beta`-tagged component lowers the risk; say so.)
- **One canonical name per thing.** No aliases or duplicate exports for the same component/type. Name things after the term the codebase already uses; don't introduce a looser synonym.
- **Predictable, honest defaults.** A documented default must match the code. Flag any default the JSDoc/`.md` promises but the code doesn't implement.
- **Controlled/uncontrolled done the library way.** `value` + `onChange` required together (controlled); `defaultValue` for uncontrolled; type it as a discriminated union so misuse is a compile error, not a runtime surprise.
- **No silent no-ops.** A control must not look interactive while discarding the user's input/action with no feedback. If a value can be set, there should be a clear way to change or clear it (affordance).
- **Uniform prop propagation.** Shared state props (`isDisabled`, `isReadOnly`, `size`, `variant`, …) must reach *all* relevant sub-components, not some of them. Inconsistent propagation is a bug.
- **Flexible in, canonical out.** Accepting several input shapes for DX is good (e.g. `Temporal | string`), but always *emit* one canonical type, consistently.
- **Minimal surface.** Export only what consumers need; keep helpers module-private. Don't widen the public API by accident.
- **Types express intent and resist misuse** — discriminated unions, required-when-controlled, no `any` escape hatches on public props.
- **Scalable shape.** Ask "can this API absorb the obvious next requirement without a breaking change?" (e.g. a bounds/constraint prop that will predictably need a sibling later). Flag designs that would force a break.

## Code quality & naming

- **Standard APIs over hand-rolled.** Prefer JS built-ins, the platform (e.g. `Temporal`, `Intl`), and existing repo utils over re-implementing them. Only hand-roll when the standard API genuinely doesn't fit — and say why.
- **Reuse / DRY — but don't over-abstract.** Extract a shared helper when the same logic serves multiple cases. Stop there: a config table or generic machine for two cases is *more* complex, not less. Simplest that removes the duplication wins.
- **Avoid `while` loops.** Prefer `map`/`filter`/`reduce`/`slice`/plain expressions. A `while` is a smell worth a second look.
- **Simplest over clever.** Optimize for the next maintainer's reading time, not for brevity or cleverness.
- **Function naming — a greppable verb dictionary.** One verb = one job, applied consistently across the module/area, e.g. `split*` (decompose to parts), `format*` (build a display string), `parse*` (string → value), `step*` (value → value), `get*` (derive data), `to<Type>` (coerce). Flag mixed verb styles for the same kind of operation, and names whose verb doesn't match what the function returns.
- **Parameter naming — one vocabulary.** Each concept gets one name that says what it is (e.g. `input` = raw text, `time`/`date` = a domain value, `digits`, `text` = a rendered string, `caretIndex`, `delta`). Never overload one name (like `value`) for different types across a module.
- **Booleans read as predicates** — `is*` / `has*` / `should*` / `can*`.
- **Consistent, honest return shapes.** A function should return the same shape on every path so callers don't null-check defensively; use an explicit `null` *field* for not-applicable data rather than omitting it or faking a value. Don't return `null` where a stable object/string is clearer — but a value feeding a controlled `<input value>` must be a string, never `null`.
- **No silent fallbacks or invented values.** A default whose origin isn't obvious at the use site (`x ?? 'AM'`, a helper that fabricates a value for its empty/out-of-range case) is hard to predict and to trace. Prefer **narrowing the input type** so the case can't occur (e.g. take a non-null `PlainTime` instead of defaulting when `null`). When a default is genuinely required, make it **explicit and local** at the use site, not buried in a helper.
- **Keep mode-specific data out of shared shapes.** A field meaningful in only one mode/variant (e.g. a 12h `meridiem`) shouldn't be baked into a general function's result — expose it separately, computed only where that mode applies, so the other modes never carry or produce it.
- **Group same-family functions together** by ordering them adjacently and giving each a one-line JSDoc stating *input → output* — not with decorative divider/banner comments (`// --- parse ---`), which are noise above an already well-named function.
- **Short comments** that explain the non-obvious *why*, not the obvious *what*.
- **No side effects in render/hot paths.** Warn/log at most once per condition (dedupe), never on every render. Keep `console.*` and other effects out of pure functions and render bodies.

## Output

Report findings **grouped by severity, then category**. Empty groups are omitted. For each finding give a one-line *what*, a one-line *why it matters*, and a suggestion when you have one; reference `file:line`.

```
## 🔴 High
### API & DX
- <what> — <why it matters>. Suggestion: <…>  (file.ts:42)
### Code quality & naming
- …

## 🟠 Medium
…

## 🟡 Low
…
```

Severity guide:
- **High** — breaks or will break consumers; silent data/input loss; an unscalable public API that can't change later; a documented-vs-actual behavior contradiction.
- **Medium** — maintainability/consistency problems, missing affordance, uneven prop propagation, avoidable complexity.
- **Low** — naming, comment, grouping, and style nits.

End with the things that are genuinely good and worth keeping — a review is not only a list of faults.
