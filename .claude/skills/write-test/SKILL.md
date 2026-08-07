---
name: write-test
description: >-
  Write, review, or fix Vitest/React Testing Library unit tests (*.spec.*) for components
  in the moonstone design system. Consult this skill BEFORE authoring or changing any
  moonstone spec file. Trigger whenever the user says things like "write a test", "add a
  spec", "cover this component", "check coverage", or asks to review or clean up a
  *.spec.* file. Do NOT use it for writing the component implementation itself, Storybook
  stories, or anything outside *.spec.* files.
applyTo: "**/*.spec.*"
---

# Setup

- Stack: **Vitest** + **React Testing Library**.
- Before writing or reviewing, read the component source, its types, the functions it calls
  internally (helpers, hooks, formatters, validators). A test that only exercises
  the component's outer shell can miss real behavior that lives in those functions.
- Reviewing or auditing an existing spec, rather than writing one? Read `REVIEW.md` in this
  skill folder — it defines the review process and report format, on top of the rules below.

## Minimal, explicit props

Define one `requiredProps` const per file with only the props the component actually
requires. Spread it into every `render()`, and override only the prop(s) the test is about:

```tsx
const requiredProps = {onChange: () => null};

render(<TimeInput {...requiredProps} defaultValue="14:30"/>);
```

## Typing

Do not annotate types that TypeScript can infer. Only add explicit types when the compiler
cannot narrow on its own:

```tsx
// ✅ inferred — no annotation needed
const handleChange = vi.fn();
const user = userEvent.setup();

// ✅ vi.Mock is the correct type for a vi.fn() variable that needs a type annotation
const lastValue = (handleChange: vi.Mock) => handleChange.mock.lastCall?.[1];

// ✅ cast required — querySelector returns Element | null; user.click needs HTMLElement
await user.click(el as HTMLElement);

// ✅ cast required — getByPlaceholderText returns HTMLElement, but .value needs HTMLInputElement
const value = (screen.getByPlaceholderText('...') as HTMLInputElement).value;

// ❌ avoid — TypeScript already knows this
const user: ReturnType<typeof userEvent.setup> = userEvent.setup();
const handleChange: ReturnType<typeof vi.fn> = vi.fn();
```

# Writing a test case

## One behavior per test

Each `it(...)` asserts a single behavior. Split a test that chains multiple unrelated
assertions instead of growing one mega-test.

## Linear, no branching

No `if`/`else`, `try`/`catch`, or loops inside a test body — a straight sequence of steps,
readable top to bottom.

## Name by behavior, not implementation

Title the `it(...)` after the observable outcome ("clears the field on Escape"), never the
internal call ("calls setValue with null").

## Split controlled vs uncontrolled into separate `describe` blocks

When a component supports both modes, use three `describe` blocks: the component name for
behavior shared by both modes, `Uncontrolled<Component>` for `defaultValue`/`defaultChecked`
behavior, and `Controlled<Component>` for `value`/`checked` behavior.
Example:
```tsx
describe('DynamicFieldset', () => { /* shared behavior */ });
describe('UncontrolledDynamicFieldset', () => { /* defaultChecked-driven behavior */ });
describe('ControlledDynamicFieldset', () => { /* checked-driven behavior */ });
```

# Querying & Interaction

How to find elements and act on them.

## `userEvent`, never `fireEvent`

Use `userEvent` and **never** reach for `fireEvent` except as a last resort. If `userEvent`
can't do it, document why before falling back.

## Query via `screen`, never `container` or the render result

Always query through `screen`. Never destructure the `render()` return value to query it,
and never reach into `container.querySelector(...)` — both bypass the same accessibility
tree a real user relies on.

## Selectors — semantic and aria, in priority order

Always prefer stable, semantic selectors. CSS classes are not stable selectors in moonstone
because we are migrating to full CSS Modules and class names will change.

**Prefer, in order:**
1. **Role + accessible name** — `getByRole('button', {name: 'Today'})` (best: mirrors what
   a screen reader exposes)
2. **ARIA attribute** — `getByRole('listbox', {name: 'Paris (UTC +01:00)'})`
3. **Placeholder / label text** — `getByPlaceholderText('HH:MM')`, `getByLabelText('...')`
4. **Display value** — `getByDisplayValue('11:56')`
5. **Visible text** — `getByText('March 2026')` (only for static, non-interactive content)

**Never** use:
- CSS classes: `.moonstone-menu_overlay`, `.my-component__button`
- `data-testid` as a first choice

### When a stable selector is missing

If none of the above works (e.g. a purely decorative overlay div with no role, label, or
stable attribute), **do not invent a CSS class selector**. Instead:

1. Raise the point explicitly in a code comment.
2. Propose adding a meaningful ARIA attribute or semantic element to the component that
   improves accessibility **and** provides the selector.

**Example — menu overlay:**
The `Menu` overlay div has `aria-hidden="true"` (shared with icon SVGs) and only a CSS
class. The right fix is to add a `role="presentation"` or a keyboard-dismiss path (`Escape`
key) so the test can use that instead.

When in doubt, ask: "would adding this attribute make the component more accessible?" If
yes, raise the point but don't add it by yourself.

## `getBy` / `queryBy` / `findBy` — pick the right one

- **`getBy*`** — the element must exist right now. If it's the point of the test, wrap it in
  an explicit `expect(...).toBeInTheDocument()` rather than relying on the throw alone.
- **`queryBy*`** — only to assert **absence**, e.g. `expect(screen.queryByText('Today')).not.toBeInTheDocument()`.
- **`findBy*`** — for anything that appears asynchronously. Prefer it over
  `waitFor(() => screen.getBy...)`.

# Assertions

## Test real behavior, not implementation

Assert what a user would observe — visible text, values, focus, disabled state — never
internal state, props, or class names. If a test would still pass after an internal refactor
that didn't change behavior, it's testing the right thing.

# Determinism

## Mock the clock

Never let a test read the real system clock. Pin "now" with `vi.setSystemTime`/fake timers
so the result doesn't depend on when or where the test runs.

# Coverage

## ZOMBIES

For each component, cover the letters that apply — skip ones that don't, quality over
checklist completeness:

- **Zero** — renders with no `defaultValue`, and with `defaultValue={null}`.
- **One** — renders with a valid initial value (the happy path).
- **Many** — only if relevant: repeated/ordered interactions, e.g. selecting several times in a row.
- **Boundaries** — min/max values, out-of-range dates/times, off-by-one edges.
- **Interface** — controlled value stays pinned until the parent updates it; `onChange` is called
  with the correct value; default and custom i18n labels render with correct accessible names.
- **Exceptions** — invalid strings/`null` are handled without crashing; disabled/read-only blocks
  interaction and `onChange` is not called; guard branches (e.g. "no-op when no date and time is
  cleared", "don't emit while input is incomplete").
- **Simple** — everyday user interactions: click, keyboard (Enter, Space, Escape, Tab), typing,
  clearing.

Run coverage after writing tests: `yarn test` runs the full suite with coverage, or scope it
to one file with `yarn test src/components/Input/TimeInput/TimeInput.spec.tsx`. Investigate
every uncovered branch before deciding it is acceptable to leave it uncovered — some V8
instrumentation gaps are known artefacts (nested JSX arrow callbacks), but most gaps signal a
missing test.

<!-- If the coverage table's file names are truncated and ambiguous (e.g. two files both showing
as `...TimeInput.tsx`), don't parse `coverage/coverage-final.json` by hand and don't rely on
`coverage/index.html`. Instead grep `coverage/clover.xml` — each file has its own block keyed
by a full, untruncated `path` attribute, with one flat `<line num count type>` entry per line
(statement and branch hits together, no separate map to reconstruct):

```bash
awk '/path=".*ControlledTimeInput\.tsx"/,/<\/file>/' coverage/clover.xml | grep 'count="0"'
``` -->

# Checklist before finishing

- [ ] **Setup** — read the component + a sibling spec first; `requiredProps` const; types
      inferred except where required.
- [ ] **Writing a test case** — one behavior per test, linear, behavior-named.
- [ ] **Querying & Interaction** — `userEvent` only; queried via `screen`; selectors are
      semantic/aria (no CSS classes); the right `getBy`/`queryBy`/`findBy` for the situation.
- [ ] **Assertions** — target user-visible behavior, not internals.
- [ ] **Determinism** — no reliance on the real system clock.
- [ ] **Coverage** — applicable ZOMBIES letters covered; coverage run passes without
      unexplained gaps.
