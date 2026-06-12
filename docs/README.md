# Moonstone governance — map

The durable map of how this project governs its design system **and** how it works as an
agent-friendly codebase. Read this first, then open the document that owns the detail.

> **This file is an index, not a narrative**, and it is **permanent**. Rules live where
> they are *enforced* (the `contributing/` docs, an agent), never re-told here.
> The **plan and status** (phases, what's next) are transient and live in
> [ROADMAP.md](./ROADMAP.md), not here.

## Two audiences (the spine)

Every decision splits along one line: the **public / internal API boundary**. It separates
two audiences with genuinely different rules, so we keep two tracks. This same split
organises our **agents and skills**.

| | **Contributor track** | **Consumer track** |
|---|---|---|
| Audience | Devs building/maintaining Moonstone (in this repo) | Devs (and their LLMs) using `@jahia/moonstone` in an app |
| Problem | Inconsistent components; review bottlenecked on one person | **Non-adoption** — LLMs don't know the components exist |
| May use | Public **and** internal APIs | Only exported components + `--moon-*` vars + `GlobalStyle` |
| Knowledge | [contributing/](./contributing/) | [consuming/](./consuming/) |
| Agents/skills | Live **in the repo**, not packaged (e.g. `component-docs`) | **Packaged / hosted**, shipped to consumers |

## Architecture — four layers, one responsibility each

This is the answer to "which file is responsible for what". Each file belongs to exactly
one layer. The golden rule is **DRY: knowledge lives in one place; everything else points
to it.**

```
① KNOWLEDGE  (the "what")     docs/contributing/, docs/consuming/  — single source of truth, harness- & model-agnostic
② BASELINE   (generic "how")  AGENTS.md (root)                     — rules common to ALL contributor agents
③ EXECUTORS  (specific "how") .claude/agents/, .github/            — thin; carry only their delta; reference ① and ②
④ GUARDRAIL  (the guarantee)  linter + CI                          — mechanical conformance, no LLM, anti-drift net
```

Three principles make this scale:

- **DRY applies to *agent instructions*** (an agent references `contributing/component-docs.md`
  instead of re-inlining it). **Self-containment still applies to the *output*** — a shipped
  `Component.md` must never link back to `docs/`. Do not confuse the two.
- **Portability is at the *repo* level, not the *file* level.** The whole repo serves Claude
  Code, Copilot, and Cursor; each harness gets a one-line adapter pointing at the same
  knowledge. Copying a single agent file into another project is a non-goal.
- **Model-agnostic.** No agent pins a model id. The harness or the user chooses per session.

## Maturity badges

Every knowledge/process doc carries one, so nobody mistakes a hypothesis for law:

- 🟢 **Enforced** — in force now; the agent and linter derive from it.
- ⬜ **Deferred** — sound, but for a track not yet activated.
- 🟠 **Draft v0** — code-derived hypothesis, **not** validated. Material for validation.
- 🔧 **Process** — transient working doc; retire when its job is done.

## File map — who owns what

| File | Layer | Audience | Responsibility |
|---|---|---|---|
| `docs/README.md` | index (permanent) | both | this map + decisions log |
| `docs/ROADMAP.md` | plan (transient) | both | phases, status, delivery plan |
| `docs/contributing/component-docs.md` 🟢 | ① knowledge | contributor | **single source** for writing component docs (sections, voice, checklist) |
| `docs/consuming/usage.md` ⬜ | ① knowledge | consumer | rules to **use** the library; source for the consumer `AGENTS.md` |
| `docs/consuming/ui-copy.md` 🟢 | ① knowledge | consumer (+ contributor for defaults/examples) | UI microcopy rules; feeds the consumer `AGENTS.md` |
| `docs/_process/component-rules-draft.md` 🟠 | process | contributor | unvalidated build-rule hypotheses; interview material |
| `docs/_process/designer-interview.md` 🔧 | process | contributor | designer sessions that validate the draft → `contributing/` |
| `AGENTS.md` *(root)* | ② baseline | contributor | generic rules for **all** maintainer agents; multi-harness entry point |
| `CLAUDE.md` | ③ routing | contributor | Claude Code adapter → points to `AGENTS.md` |
| `.github/copilot-instructions.md` | ③ routing | contributor | Copilot repo-wide adapter → points to `AGENTS.md` |
| `.github/instructions/*.instructions.md` | ③ routing | contributor | Copilot per-glob triggers (`docs`, `changelog`) |
| `.claude/agents/component-docs.md` | ③ executor | contributor | writes/reviews component docs; carries only its delta over the `component-docs.md` standard |
| linter config + CI step *(planned)* | ④ guardrail | contributor | mechanical conformance of `.md`/`.mdx` |

> **Naming watch — two different `AGENTS.md`.** The **root** `AGENTS.md` is the *contributor*
> agent baseline (layer ②). The *consumer* `AGENTS.md` (see [ROADMAP.md](./ROADMAP.md)) is a
> **different file**, **packaged or hosted**, never at the repo root. Same audience split,
> two artifacts.

## The guardrail: linter, not a bespoke script

A linter owns the **mechanical** half of conformance; the **semantic** half stays with the
agent's LLM review. Do not expect the linter to cover everything.

| Rule | Linter? | Tool |
|---|---|---|
| No leading `# H1`; section order/titles exact | ✅ | remark-lint (custom rule) |
| No em dash `—`, no arrow `→` | ✅ auto-fixable | remark (regex) |
| No links to `docs/` governance or Figma | ✅ | remark (link URLs) |
| No `--moon-*` / `.moonstone-*` / `$var` / px | ✅ | remark (regex) |
| `.mdx` imports `.md?raw` + has Meta/Title/Canvas/Controls/Markdown | ✅ | eslint-plugin-mdx (custom) |
| "Don't" routes to **really exported** components | ✅ semi | custom rule, resolved vs `src/index` |
| "Do" = *when to use*, not *how to configure* | ❌ | agent LLM review |
| Voice/tone; design intent not invented; Appearance values match `*.types.ts` | ❌ | agent LLM review |

ESLint (`@jahia/eslint-config`) already lints code but **not** `.md`/`.mdx`. Plan:
**remark-lint** for `.md` (new, small, IDE + CI), **eslint-plugin-mdx** grafted onto the
existing `lint:js` run for `.mdx`. The linter is the **anti-drift net** that DRY requires:
it makes the output conform *regardless of who or what wrote it*.

## Decisions log (most recent first)

- **2026-06-12** — Restructured `docs/`: knowledge split by audience (`contributing/`,
  `consuming/`), hypotheses moved to `_process/`, map (README) split from plan (ROADMAP).
  Naming convention: folder encodes audience, filename encodes subject (no genre suffixes),
  maturity is a header badge. `contributing/` holds **only** enforced rules.
- **2026-06-12** — Agents = executors of the existing two tracks (no parallel plan). Four
  layers (knowledge / baseline / executors / guardrail). DRY for agent instructions; output
  stays self-contained. Repo-level (not file-level) portability across Claude Code + Copilot
  (+ Cursor). No pinned models. Guardrail = linter, mechanical only; semantics stay with the
  agent. Vocabulary frozen: **Contributor / Consumer**.
- **2026-06-08** — Reframed from one "Design Review Automation" plan into two tracks along
  the public/internal API boundary.

## Known issues

- [CONTRIBUTING.md](../CONTRIBUTING.md) and [README.md](../README.md) (repo root) are
  **stale** and **not authoritative**; rules are grounded in code. Refreshing them is a
  planned output (see ROADMAP).

## Confidence legend

●●● / ●●○ / ●○○ reflects how firmly a rule is grounded in code *today*, not its importance.
Interview / product decisions raise confidence.
