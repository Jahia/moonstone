# Verifying a bug

A candidate bug is a claim, not a fact. Verify it in the code before it becomes a ticket.

## How

- Read the real source: the component, its `.types.ts`, both the `Controlled*` and `Uncontrolled*`
  variants, the dispatch wrapper, the shared hooks it uses, and its specs. Check whether a guard
  exists elsewhere, such as a default prop, a wrapper, or the caller.
- Split a bullet that makes several claims, and give each sub-claim its own verdict.
- An existing `it.fails` test, or a React warning you can reproduce, is good evidence. Run a
  focused test only when it is cheap and decisive. Reading the code is usually enough.
- Check that the component is public: exported from `src/index.ts` and not tagged `internal` in
  its stories.
- For stories and docs, compare the working tree with `origin/main`. A bug that exists only on the
  current branch is fixed in the branch, not ticketed.

## Verdicts

- **REAL**: the code does what the claim says.
- **PARTLY REAL**: say exactly which part holds and which doesn't, and reword the claim. For
  example, an id is hard-coded on the wrapper rather than on the toggle, or the impact is smaller
  than claimed.
- **NOT A BUG**: the code is correct, or the behaviour is documented as intended, in the
  component's `.md` or in `docs/`. A documented intent is settled: don't raise it as a question.
  Only when the intent is documented nowhere is the outcome *to decide* (see `triage.md`).

## Current state

Verify against the code as it is now, never against an earlier list. An item carried over from a
previous run, a findings list, or an older report (a branch fix, a question, a bug) may already be
fixed or decided: recheck it in the working tree, and search `docs/`, `CONTRIBUTING.md`, and the
component's `.md` for an existing decision, before you report it or ask about it.

## Evidence

Each verdict cites the file and line, with a 1-3 line quote of the code. Note anything else you
find on the way (another component with the same defect, for example). It becomes its own
candidate, or joins a ticket with the same fix.
