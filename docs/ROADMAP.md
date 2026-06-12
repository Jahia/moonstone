# Moonstone governance — roadmap

> **Transient.** This file tracks *what we are building and in what order*. It changes
> often and can be deleted once the work lands. The durable structure lives in
> [README.md](./README.md).

## Phases — agents are the executors of each track

Agents/skills are not a separate initiative; they are the concrete executors of the plan.

| Phase | Contributor track | Consumer track |
|---|---|---|
| **1 — Codify rules** | `contributing/component-docs.md` 🟢 enforced; `component-rules-draft.md` 🟠 awaiting designer | `consuming/usage.md` ⬜ drafted; machine-readable catalog ⬜ |
| **2 — Lightweight process** | PR self-review checklist + **doc linter** ⬜ | Generated consumer `AGENTS.md` / `llms.txt` ⬜ |
| **3 — Executors (AI)** | PR-reviewer agent; **`component-docs` is the first** 🟡 | App-code reviewer / scaffolder, **packaged** ⬜ |

## In flight (Phase 0 — foundations)

- [x] Rename agent → `component-docs`; update its references (Copilot instruction, memory).
- [x] Scope note in `component-docs.md` (the three kinds of copy).
- [x] `AGENTS.md` (root) — generic contributor-agent baseline; thin adapters: `CLAUDE.md`
      (Claude Code) + `.github/copilot-instructions.md` & `docs.instructions.md` (Copilot).
- [x] Reduce `.claude/agents/component-docs.md` to a thin wrapper (~20 lines): all neutral content
      lives in `AGENTS.md` + the standard; the file keeps only the autonomous-agent scope rule.
- [x] Fold the agent's doc-writing knowledge (structure, Appearance pattern, MDX template,
      grounding, verification) into `contributing/component-docs.md` so it is the true single source.
- [ ] Doc linter (remark-lint + eslint-plugin-mdx) + CI step in `on-code-change.yml`.
- [ ] Portable `/doc-component` command (`.claude/commands/` + `.github/prompts/`).
- [ ] Cursor wiring (rules pointing at `AGENTS.md` / the standard) — when needed.

## Open items

- `iconArgType` convention (clean Controls for element props) is **being revised in a
  separate ticket** `<!-- ticket: TODO add ref -->`. Keep it out of the agent; once it
  lands, document it in `contributing/component-docs.md` with a status marker.
- Refresh the stale repo-root [CONTRIBUTING.md](../CONTRIBUTING.md) / [README.md](../README.md)
  once the contributor rules reach v1 (the rulebook draft is meant to replace CONTRIBUTING's
  "Coding Rules").

## LLM-delivery decision (consumer track)

Use **Storybook's official AI tooling**
([addon-mcp](https://storybook.js.org/docs/ai/mcp/overview) +
[manifests](https://storybook.js.org/docs/ai/manifests)) rather than a custom MCP. Both are
generated from the *same* CSF + MDX + source, so the real work is **documentation quality**,
authored once:

1. **Source (the work):** enrich each component's CSF/MDX/types. Improves Storybook for
   humans *and* feeds everything below.
2. **Auto-generated:** components manifest (`/manifests/components.json`, *replaces* a
   hand-written catalog), docs manifest, and the MCP server (`localhost:6006/mcp`).
3. **Consumer `AGENTS.md`:** the one artifact we fully control and can ship. Static rules
   (built from `consuming/usage.md`). Highest-certainty lever.

**Distribution:** internal/clone-and-run consumers → MCP at `localhost:6006/mcp`;
arm's-length consumers (`npm i`) → ship the consumer `AGENTS.md` + point their agent at the
hosted manifest (`jahia.github.io/moonstone/manifests/components.json`).

**Caveats:** Storybook AI tooling is React-only (✓ Moonstone) and **in preview** — don't
hard-depend. External consumption of a hosted manifest is undocumented — validate before
promising. The consumer `AGENTS.md` is the safe fallback that always works.
