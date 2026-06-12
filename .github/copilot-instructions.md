# Moonstone — Copilot instructions

The agent baseline for this repo is in **`AGENTS.md`** at the repo root. Read it first — it has
the rules every task must follow and the map of where standards live (`docs/`).

Essentials, so they always apply:

- Ground every claim in the code; never guess a prop, behaviour, or which component to use.
- Never invent design intent — leave `_Pending design guidance_` where the designer must decide.
- Respect the public / internal API boundary (the spine of the project).
- Reference standards in `docs/`; never copy their rules into another file.

For component docs, follow `docs/contributing/component-docs.md` (or use the `component-docs`
agent). Per-file triggers live in `.github/instructions/`.
