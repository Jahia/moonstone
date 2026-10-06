## Commands (yarn)

- `yarn start` — Storybook dev server on :6006
- `yarn lint` / `yarn lint:fix` — oxlint (js/ts, type-aware) + stylelint (scss)

## Layout

- `src/components/<Name>/` — one folder per component. A component is a multi-file contract, colocated and kept in sync: `<Name>.tsx`, `<Name>.types.ts`, `<Name>.module.scss`, `<Name>.spec.tsx`, `<Name>.stories.tsx`, `<Name>.md` (docs), `index.ts` (+ `variants/` when applicable).
- `src/icons/components/` is **generated** from `src/icons/assets/` by svgr (`yarn build:icons`) — never edit these files by hand.
- `tickets/` — draft GitHub issues awaiting human review (see the `moon-ticket` skill). Everything
  in it is a draft; a file is deleted once its issue is published.
- `src/tokens/` — design tokens. `src/index.ts` — the public API of the library.

## Working rules

- **Ground every claim in the code.** Read the relevant source before asserting a prop, a
  behaviour, or which component to use. Never guess.
- **Never invent design intent.** Subjective "when to use / how it should look" calls belong to
  the designer. Mark the gap for the human instead of guessing.
- **Respect the public / internal API boundary.** Only what `src/index.ts` exports is public.
  A component tagged `internal` in its stories is internal even if it is still exported.
- **Stay in your declared scope.** Emit out-of-scope changes as a suggestion; do not apply them.
- **Every code bug goes through the `moon-ticket` skill.** A bug found during any task becomes a
  draft in `tickets/`, verified and checked for duplicates. Never record bugs in another file,
  and never publish a draft without human approval.
- **Verify before claiming done.** Run the relevant check and report the real result, including
  failures.
- A behavior or props change must update every affected file of the component contract (code, types, spec, stories, docs) — not just the code.
- Ongoing migration to CSS Modules: never use them as selectors in tests, stories, or docs examples.
- Files synced from the org's `.github` repo (such as `.github/instructions/changelog.instructions.md`)
  are out of scope: do not edit them.

## Skills

Skills live in `.agents/skills/<name>/`: `SKILL.md` holds the workflow, `references/` holds the
rules. `.claude/skills/<name>` is a symlink to that folder. Each rule is written once.

Naming: `moon-<artifact>`, one skill per artifact, covering both writing and reviewing it.

- `moon-doc` — a component's `.md`, the props' JSDoc, and its Storybook wiring.
- `moon-ticket` — a GitHub issue for Jahia/moonstone: one draft file per ticket in `tickets/`,
  verified and checked for duplicates, published with `gh` once approved, then deleted.
