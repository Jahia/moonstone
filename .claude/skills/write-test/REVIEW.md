# Reviewing an existing spec

Read `SKILL.md` in this same folder first — every rule cited below is defined there. This
file is only the review process and report format.

## Process

Two phases, in order. Don't interleave them — verifying one candidate in depth before the
rest are even enumerated is why reviews under-count and run long.

### Phase 1 — Enumerate

Build one flat candidate list before writing anything up, from three independent passes.
Don't let one pass filter out another's candidates — a covered line doesn't mean a specific
*value* or *scenario* on that line was ever tested.

- **Rule violations** — read the spec directly against every rule in `SKILL.md` (selectors,
  `userEvent`, determinism, structure, assertions). Most violations are visible by
  inspection; they don't need deep verification.
- **Behavioral gaps** — walk the ZOMBIES categories from `SKILL.md`'s Coverage section against
  the component's actual prop types, asking for each: *does an existing test use this exact
  value or scenario?* Answer by reading the test's actual assertions and input values — not by
  checking coverage. Boundaries, Interface, and Many gaps almost always run through code a
  different test already covers (e.g. the boundary date shares a code path with every other
  disabled date), so `clover.xml` will call the line covered while the specific value was
  never tried. Coverage is the wrong tool for this pass.
- **Unreached-code gaps** — separately, grep `coverage/clover.xml` (see `SKILL.md` for the
  pattern) for zero-hit lines/branches in the component and the functions it calls. Each is
  its own candidate — this is how whole-branch gaps (a guard clause, an entirely untested prop
  path) get caught, a different class of gap from the value-level ones above.

### Phase 2 — Verify and report

Only now decide, per candidate, whether it's real and fixable. If confirming a claim
requires digging into third-party library internals (e.g. whether an element even exposes an
accessible name), do it in one focused grep+read pass — if it's still unclear after that,
report the finding with a stated caveat instead of continuing to trace through the library.

Write up survivors per the Report format below, most severe first, stopping only once the
Phase 1 list is exhausted — not once effort feels like enough.

## Report format

Only report what's broken. Never list rules that are already respected — no "no issues found
with X" recap, no summary of what's already covered. If nothing is wrong, say so in one line
and stop.

Every finding gets one of three severities:
- **Critical** — breaks a hard rule (`fireEvent`, CSS-class/`data-testid` selectors, reads the
  real clock, branching inside a test).
- **Major** — weakens what the test actually proves (asserts an implementation detail, misses
  a real behavior case).
- **Minor** — style/typing nits that don't affect correctness.

**Rule violations** (existing test code is wrong) get the full format — explain the
underlying best practice, never just "this breaks rule X", and quote the *actual* current
code, never a paraphrase from memory:

### <Title> (Critical|Major|Minor)
`<file>:<line>` (see: <SKILL.md section this maps to>)

**Why:** <the reasoning a dev can reuse next time, not a rule citation>

**Current:**
```tsx
<verbatim code from the file>
```

**Fix:**
```tsx
<corrected code>
```

**Coverage gaps** (a real behavior with no test) get a lighter format — no full test to
write, just the scenario and why it matters, grounded in the actual uncovered code:

```
### <Title> (Critical|Major|Minor)
`<file>:<line>`

**Why:** <what real behavior is unproven, grounded in the actual code/coverage data — never
by a ZOMBIES category name or letter; that heuristic is for how we think about coverage
while reviewing, not for the reader>
```

## Summary

End with one line tallying the findings, e.g. `3 critical, 4 major, 1 minor.` Nothing after
it.
