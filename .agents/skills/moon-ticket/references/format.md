# Ticket format

## The file

One file per ticket in **`tickets/`** at the repo root, in kebab case: `<component>-<symptom>.md`
for an issue (`numberinput-arrow-keys.md`), `comment-<issue>-<topic>.md` for a comment
(`comment-1431-numberinput-breadcrumb-props.md`), `decision-<component>-<topic>.md` for an open
question. The file is the whole ticket: a human reviews it alone, and
the agent publishes it as is. There is no index file.

`tickets/` is ignored by git, so each worktree would have its own copy, invisible to the others
and lost when the worktree is cleaned up. Always read and write the `tickets/` of the **main
checkout**, even when working in a worktree:

```bash
TICKETS="$(dirname "$(git rev-parse --path-format=absolute --git-common-dir)")/tickets"
```

```markdown
---
kind: issue                 # issue | comment | decision
title: "Loader draws nothing without `size`"
type: Bug                   # Bug | Task | Story
story-points: 1
severity: Major             # Critical | Major | Minor (Blocker, Trivial when they clearly apply)
parent: 1465                # epic number, or omit
labels: []                  # existing labels only, such as [a11y] or [typescript]
---
## Problem
…
```

For a comment on an existing issue, only `kind: comment` and `issue: <number>` go in the
frontmatter. The body is the comment's text.

For an open question (the *to decide* outcome), only `kind: decision` goes in the frontmatter,
and the file is named `decision-<component>-<topic>.md`. The body states the observed behaviour
with its cited code, then the question for `@Jahia/design_contributor`. A decision file is never published. Once
the question is answered, it becomes an issue or a comment, or it is deleted.

- The frontmatter holds every GitHub field (`github.md` gives each one's rules). It is never
  part of the published body.
- The body contains no Labels, Severity, Type, or Story Points line.

## Language and length

- Write tickets and comments in **English**, like the rest of the repo.
- Keep it short. A ticket fits on one screen. No "Goal / Why this matters / Acceptance criteria"
  boilerplate.

## Issue body

```markdown
## Problem
<What breaks, with the cited code. A repro line when it helps.>

## Suggested fix
<The fix in one to three bullets. Numbered points match the Problem's points.>

> ❓ @Jahia/design_contributor — **to decide (design):** <question>   ← only when a decision is open

## Related
<#NNN (why it's related) · …>                              ← only when there is one
```

- **The title** names the component and the symptom ("Loader draws nothing without `size`"), not
  the cause.
- **One ticket can hold several numbered points** when the grouping rule merged them. Each point
  keeps its own evidence.

## Comment body

Explain in one line why the bug belongs to that issue (same lines, planned rewrite, or same
decision). Then give the bug, the cited code, and the fix.

## Links to code

- Every file reference is a Markdown link to **`main`**, with the line or range:
  ``[`Button.tsx:41`](https://github.com/Jahia/moonstone/blob/main/src/components/Button/Button.tsx#L41)``,
  and `#L17-L18` for a range.
- Check that every linked line on `origin/main` still holds the quoted code, when you write the
  file and again before you publish it. Line numbers from the working tree can differ.
- Never link a file that exists only on the current branch. Drop the reference instead.

## Design decisions

- Never decide design intent. A subjective choice (a default value, copy, a heading level,
  whether a behaviour is intended) becomes a
  `> ❓ @Jahia/design_contributor — **to decide (design):** …` line, phrased as a question.
- Always mention the **`@Jahia/design_contributor`** team, never a person and never the person
  running the workflow (see `github.md`, *Mentions and notifications*).
- Keep the mechanical part of the fix in the ticket, and the open choice in the question.

## Related

- Name each related issue with the reason it is related. When the work is not merged, say
  whether the two must be coordinated or can be done independently.
- Never list as *Related* an issue that has to be done at the same time. That's a merge (see
  `triage.md`).
