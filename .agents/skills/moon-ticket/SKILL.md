---
name: moon-ticket
description: Write, review, or publish GitHub issues for Jahia/moonstone. A ticket is one Markdown file in `tickets/` at the repo root, a draft for human review, published with `gh` once approved and then deleted. It verifies each bug in the code, checks for duplicates on GitHub and in `tickets/`, and groups work that must be done together. Use when asked to report or triage a bug, write or review a ticket, or publish tickets to GitHub. Not for epics written from scratch.
argument-hint: "[review | publish] <bug description | ticket file(s) | findings>"
---

# moon-ticket

Arguments: $ARGUMENTS — an optional `review` or `publish` keyword, then a bug description, findings,
or ticket files in `tickets/`.

## Before anything

Read `references/verification.md`, `references/triage.md`, `references/format.md`, and
`references/github.md`. They hold every rule; this file only holds the workflow.

Every file in `tickets/` is a draft. Nothing is published to GitHub without an explicit "yes" from the
user in chat, naming the tickets to publish.

## Write (default)

1. **Collect the existing issues**, open and closed, and the drafts already in `tickets/`
   (`github.md`, `triage.md`).
2. **Verify** every candidate bug in the code, one claim at a time (`verification.md`). For more
   than about ten bugs, split them by area and verify the batches in parallel subagents, giving
   each one `verification.md` and the issue dump. Spot-check the key claims yourself.
3. **Triage**: check for duplicates, give each bug one outcome, and apply the grouping rule
   (`triage.md`).
4. **Write one file per ticket, comment, or open question** in `tickets/` (`format.md`). When a bug joins a
   draft that already exists, edit that draft instead of writing a new one.
5. **Self-review** every file against `format.md`, and every link against `origin/main`.
6. **Stop and present**: the files written, the outcomes that are not files (already covered,
   branch fixes made, not a bug), the open questions, and the metadata of each file in one table (type, Story
   Points, severity, parent, labels) for the user to validate.

## Review

Check ticket files (or a published issue, by number) against `format.md` and `github.md`. Recheck
the evidence (`verification.md`) and the duplicates and grouping (`triage.md`). Report each
divergence with its file and line. Change nothing.

## Publish

Only for the tickets the user approved in chat. `kind: decision` files are never published.

1. **Recheck** that every link still points to the right line on `origin/main`, and search GitHub
   once more for a duplicate created since the draft (`triage.md`). Stop on a hit and report it.
2. **Publish one ticket first** and read it back through the API (type, fields, parent, labels, and
   a body without frontmatter). Fix the procedure if anything is off before you publish the rest.
3. **Publish the others**, and read every one back.
4. **Delete each file** once its issue or comment has been read back correctly. Never delete the
   file of a ticket that failed.

## Report

The issues and comments published, as a table (link, title, Story Points, severity, parent, labels).
Say which checks were run on them, what was deliberately not done (for example the project), and
which files are still in `tickets/` and why (not approved, failed, or a duplicate was found).
