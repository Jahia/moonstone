# Moonstone Design System Governance

How we keep Moonstone consistent **and** make it easy to adopt. There are two
audiences with two different problems, so there are two tracks.

| | **Contributor track** | **Consumer track (VibeCoders)** |
|---|---|---|
| Audience | Devs building/maintaining Moonstone | Devs (and their LLMs) using Moonstone in apps |
| Problem | Inconsistent components; review bottlenecked on one person | **Non-adoption** — LLMs don't know the components exist |
| Root cause | No written rules | No LLM-consumable docs |
| Phase 1 output | [Contributor Rulebook](./CONTRIBUTOR-RULEBOOK.md) | [Consumer Rulebook](./CONSUMER-RULEBOOK.md) + component catalog |
| Phase 2 | PR self-review checklist | Drop-in `AGENTS.md` / `llms.txt` for consumers |
| Phase 3 (AI) | Reviews a **PR** against the repo | Reviews a **consumer's app code** against usage rules |

> The two rulebooks are split because the rules genuinely differ. The dividing line is
> the **public / internal API boundary**: consumers may use only exported React
> components and `--moon-*` CSS variables; contributors work on both sides of it.

## The plan

| Phase | Goal | Status |
|---|---|---|
| **1 — Codify the rules** | Two rulebooks + (consumer) a machine-readable component catalog. | 🟡 In progress |
| **2 — Lightweight process** | Contributor: PR checklist. Consumer: generated `AGENTS.md` / `llms.txt`. | ⬜ Not started |
| **3 — AI assistants** | Contributor: PR reviewer. Consumer: app-code reviewer against usage rules. | ⬜ Not started |

## Documents

- **[CONTRIBUTOR-RULEBOOK.md](./CONTRIBUTOR-RULEBOOK.md)** — rules for building components.
  v0 is code-derived (22 rules across visual consistency, interaction, UX/edge cases,
  structure), with an *Open questions* table of what still needs the senior designer.
- **[CONSUMER-RULEBOOK.md](./CONSUMER-RULEBOOK.md)** — rules for *using* Moonstone (8
  rules, CU-1…8) built around "use built-ins, never touch internals", plus the spec for
  the component catalog.
- **[INTERVIEW-GUIDE.md](./INTERVIEW-GUIDE.md)** — react-and-edit questions for the
  senior-designer sessions, anchored to contributor-rulebook gaps. (A few consumer gaps
  reuse the same questions, e.g. token semantics Q-A2 ≈ Q-V3.)
- **[VOICE-AND-TONE.md](./VOICE-AND-TONE.md)** — global UI-copy rules (sentence case,
  verb-first labels, canonical label list). First adopted by Button; applies to all components.

## LLM-delivery decision (consumer track)

We will use **Storybook's official AI tooling** ([addon-mcp](https://storybook.js.org/docs/ai/mcp/overview)
+ [manifests](https://storybook.js.org/docs/ai/manifests)) rather than build a custom
MCP. Both are generated from the *same* CSF + MDX + component source, so the real work
is **documentation quality**, authored once:

1. **Source (the work):** enrich each component's CSF/MDX/types so descriptions, props,
   and usage examples are complete. This improves Storybook for humans *and* feeds
   everything below. This is the Phase 1 deliverable.
2. **Auto-generated artifacts:**
   - **Components manifest** (`/manifests/components.json`) — props, descriptions, usage
     examples. *This replaces the hand-written catalog* once the docs are rich enough.
   - **Docs manifest** (`/manifests/docs.json`) — from MDX.
   - **MCP server** (`localhost:6006/mcp`) — live Docs/Dev/Test tools, via
     `npx storybook add @storybook/addon-mcp`. Low effort.
3. **`AGENTS.md`** — the one artifact we fully control and can ship in the repo/package.
   Storybook's own docs recommend pairing the MCP with an `AGENTS.md` for static rules
   ("use built-ins, never custom CSS, public `--moon-*` vars only"). Highest-certainty
   lever; works even without a running Storybook.

**Distribution by audience:**
- *Internal devs / clone-and-run consumers* → MCP at `localhost:6006/mcp` works directly.
- *Arm's-length VibeCoders* (just `npm i @jahia/moonstone`) → ship **`AGENTS.md`** + point
  their agent at the **hosted manifest** (we already publish a built Storybook at
  `jahia.github.io/moonstone`, so `…/manifests/components.json` would be reachable).

**Caveats:** Storybook AI tooling is **React-only** (✓ Moonstone qualifies) and **in
preview** — don't hard-depend yet, and *external consumption of a hosted manifest is not
officially documented*, so validate it before promising it. `AGENTS.md` is the safe
fallback that always works.

## Notes / known issues

- [CONTRIBUTING.md](../../CONTRIBUTING.md) and [README.md](../../README.md) are **stale**
  and are not authoritative. Rules are grounded in code. Refreshing them (the contributor
  rulebook can replace CONTRIBUTING's "Coding Rules") is a planned output.

## Workflow to v1

1. Run interview sessions using the guide (rulebook on screen; designer reacts/edits).
2. Fold answers back: tighten *Check*, add *anti-patterns*, add rules for undefined
   areas, clear the gap from the table.
3. In parallel, draft the consumer **component catalog** from `*.types.ts` + `*.md`.
4. When the *Open questions* tables are empty, the rulebooks are **v1** → Phase 2.

> Confidence legend (●●● / ●●○ / ●○○) reflects how firmly a rule is grounded in code
> *today*, not its importance. Interview / product decisions raise confidence.
