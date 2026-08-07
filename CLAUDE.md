# Moonstone

Jahia's design system: a React + TypeScript component library.

## Commands (yarn)

- `yarn start` — Storybook dev server on :6006
- `yarn test` — unit + browser suites with coverage; scope to one file: `yarn test src/components/Button/Button.spec.tsx`
- `yarn test:visual` — visual regression suite (separate vitest project)
- `yarn tdd` — vitest watch mode
- `yarn lint` / `yarn lint:fix` — oxlint (js/ts, type-aware) + stylelint (scss)
- `yarn build` — icons + Storybook + library bundle

## Layout

- `src/components/<Name>/` — one folder per component. A component is a multi-file contract, colocated and kept in sync: `<Name>.tsx`, `<Name>.types.ts`, `<Name>.module.scss`, `<Name>.spec.tsx`, `<Name>.stories.tsx`, `<Name>.md` (docs), `index.ts` (+ `variants/` when applicable).
- `src/icons/components/` is **generated** from `src/icons/assets/` by svgr (`yarn build:icons`) — never edit these files by hand.
- `src/tokens/` — design tokens. `src/index.ts` — the public API of the library.

## Working rules

- React 18 is a hard constraint (peer dependency for consumers): no React 19 APIs, no upgrade proposals.
- A task is done only when `yarn lint`, `yarn tsc`, and the tests scoped to the touched components all pass.
- Before presenting any code change, self-review it against the `review-code` skill (`.claude/skills/review-code/`) and fix the violations yourself — run it automatically, without being asked. Carry every convention agreed earlier in the session forward to later edits.
- Ask before adding a dependency — that's a human decision.
- `src/index.ts` and components' exported types are the public API of a semver-published library: prefer additive, backward-compatible changes (new props over renames, deprecate before removing). Breaking = any change that would compile-fail or behave differently for a consumer; it requires explicit human sign-off and must be called out.
- A behavior or props change must update every affected file of the component contract (code, types, spec, stories, docs) — not just the code.
- Ongoing migration to CSS Modules: never use them as selectors in tests, stories, or docs examples.
- When a convention is missing, propose where it should live rather than improvising.
- Name things after the term the codebase already uses for them (a CSS class, an i18n key, a component variant, an existing `describe` block) — don't introduce a looser synonym (e.g. "hint" for a caption that displays a value) in tests, comments, or docs. Reused consistently, a reference to that element stays greppable and unambiguous even after more of the same kind are added — spell out the qualifier (e.g. "local time caption") at each use site rather than relying on enclosing context to disambiguate.
