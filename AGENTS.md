# AGENTS.md — Moonstone contributor agents

Baseline for any AI agent or assistant working **in this repo** (the contributor side).
Harness-agnostic: Claude Code, Copilot, and Cursor all read from here. The full map of how
the project is organised is in [docs/README.md](docs/README.md).

> This is the *contributor* baseline. The *consumer*-facing `AGENTS.md` (shipped to people who
> use the library) is a separate, packaged artifact — see [docs/ROADMAP.md](docs/ROADMAP.md).

## How knowledge is organised

- **Standards (the rules)** live in `docs/` and are the single source of truth:
  `docs/contributing/` (building, documenting) and `docs/consuming/` (using the library, microcopy).
- **Executors (agents)** live in `.claude/agents/` and carry only their *delta* — they reference
  the standards, they do not re-inline them.
- **Maturity badges** (🟢 Enforced · ⬜ Deferred · 🟠 Draft · 🔧 Process) tell you what is in
  force. Treat 🟠/🔧 as hypotheses, never as law.

## Rules for every agent

- **Ground every claim in the code.** Read the relevant source before asserting a prop, a
  behaviour, or which component to use. Never guess.
- **Never invent design intent.** Subjective "when to use / how it should look" calls belong to
  the designer. Leave `_Pending design guidance_` placeholders; never pass a guess off as fact.
- **Respect the public / internal API boundary.** It is the spine of this project (see
  docs/README.md). Know which side your task is on.
- **Stay in your declared scope.** Only touch what your task covers; emit out-of-scope changes as
  a suggestion, do not apply them.
- **Don't pin a model.** No agent hard-codes a model id; the harness or the user chooses.
- **Be DRY.** Reference a standard in `docs/`; never copy its rules into your own file.
- **Verify before claiming done.** Run the relevant check (lint, build, the rendered page) and
  report the real result, including failures.

## Agent registry

| Domain | Agent | Standard it serves |
|---|---|---|
| Component documentation | `component-docs` | `docs/contributing/component-docs.md` |

## Naming conventions

- **Docs:** the folder encodes the audience (`contributing/`, `consuming/`); the filename encodes
  the subject in kebab-case (no `-rulebook`/`-guide`/`-style` suffix); maturity is a header badge.
- **Agents:** named by **domain**, mode-neutral (one agent writes *and* reviews its domain),
  kebab-case. Future siblings follow the same pattern (e.g. `changelog`, `pull-requests`).
