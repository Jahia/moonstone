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

## Dogfood — Button audit (2026-06-12)

The `component-docs` agent audited Button end-to-end: the whole chain (AGENTS.md + standard +
grounding in source) worked. It surfaced standard gaps, now resolved:

- [x] **G1** behavioural booleans (`isLoading`, `isReversed`) → rationale goes in the prop JSDoc.
- [x] **G2** rendered-behaviour prose is allowed (only *implementation* detail is off-limits).
- [x] **G3** native pass-through props → out of scope, stated explicitly in the standard.
- [x] **G4** `ui-copy.md` added to the grounding sources.
- **G5** = the tracked `iconArgType` ticket below (no new action).
- **G6** static-verify subset = the **doc linter**'s job (the runtime checks can't run in audit).
- Button `size: small` cell ("BreadcrumbItem only") reads as unsourced intent — **confirm with
  the designer** (likely intentional; not a standard issue).

Second audit — **ButtonToggle** (controlled/uncontrolled, a shape Button could not exercise).
The chain held; it found gaps the first run couldn't, now resolved in the standard:

- [x] **A** modes also exported as named components (`ControlledX`/`UncontrolledX`) → the unified
      component is the single documented entry; resolves the conflict with "only mention exports".
- [x] **B** "Controlled & uncontrolled" now requires the change-callback signature when non-obvious.
- [x] **C** Grounding now says: ground in actual behaviour; if JSDoc contradicts it, flag + snippet.
- [x] **D** native props the component *omits* are also not documented (extends the G3 rule).
- ButtonToggle.md doc nits (Accessibility bullet restating a prop; "ButtonToggles" plural; comment
  style) — fix when ButtonToggle is next edited in write mode; not standard issues.

Third run — **LayoutContent** (write mode, `src/layouts/content/`, outside `src/components/`,
deprecated prop, element props, no choice props). Structure held; agent created statically-valid
`.md` + `.mdx`. Resolved:

- [x] **Location** wording generalised (components live under `src/`, incl. `src/layouts/`).
- [x] **Deprecated props** rule added (JSDoc surfaces them; steer with a Don't bullet; never in Example).
- Tail gaps left to the agent's `[STANDARD GAP]` flagging (the scalable mechanism), not pre-filled:
  element-prop prose, no-Overview-story fallback, internally-applied ARIA, boolean-only thinness.
- **Side find (real bug):** `src/layouts/content/LayoutContent.stories.tsx:12` has `'1OOvw'`
  (letter O, not zeros) — should be `'100vw'`.
- Created `src/layouts/content/LayoutContent.{md,mdx}` — pending human review + runtime verify, or discard.

Autonomy test — **Tag**, minimal prompt only ("Document the Tag component.", no steps/files/standard
named). The agent self-served correctly: read its references + source, created both files, omitted
the conditional sections rightly, marked `_Pending design guidance_`, routed Don't to real exports,
and flagged that **Tag is not exported** (public/internal boundary — confirm intent). So the agent
definition is self-sufficient (dimension B). Created `src/components/Tag/Tag.{md,mdx}`.

- [x] **Flow fix:** the agent autonomously booted Storybook to verify and it took ~2.4h. The standard's
      Verify step now does **static** self-checks only; the **runtime** render check is a human/CI step
      (the doc linter will own the static subset). Agents must not boot Storybook in an automated run.
- **Still untested: dimension A (routing).** Whether a *natural* request auto-delegates to
  `component-docs` (the original "agent not systematically used" problem) cannot be tested from a
  primed session. Needs a fresh-session test, or the deterministic trigger (`/doc-component` command
  or a hook) — description-based delegation is probabilistic, which is what failed before.

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
