---
name: moon-doc
description: Write or review the documentation of a Moonstone component (its `<Component>.md`, the props' JSDoc, and its Storybook wiring). Use when asked to document a component, update its docs, review them, or list the pending design decisions. Not for README, CHANGELOG, or migration guides.
argument-hint: "[review | pending] <Component> [<Component>…]"
---

# moon-doc

Arguments: $ARGUMENTS — an optional `review` or `pending` keyword, then one or more component
names.

## Before anything

Read `references/structure.md`, `references/style.md`, `references/ui-copy.md`, and
`references/component-rules.md`. They hold
every rule; this file only holds the workflow.

Ground every claim in the code. Read `<Component>.types.ts` (props and JSDoc), `<Component>.tsx`,
`<Component>.stories.*`, the existing `<Component>.md`, `index.ts` (plus sub-components), and
`src/index.ts` for what is really exported. Ground in the actual behaviour, not only the JSDoc.

## Write (default)

1. Write `<Component>.md` and its doc wiring in the stories meta. If the `.md` already
   exists, treat it as a draft: check every section against the references and rewrite what
   diverges. Keeping the existing text is not a goal.
2. Fix the props' JSDoc in `<Component>.types.ts`: edit only the `/** … */` blocks. Never change
   a type, a default, or a `.tsx` file. When the JSDoc and the code disagree, the code is right:
   fix the JSDoc and handle the gap as a code bug (see *Code bugs*).
3. Edit nothing else. Any other story change is emitted as a copy-paste snippet.
4. Verify by re-reading what you wrote against every rule in the references, the content of
   each section as well as the structure. Then read `git diff` on every `*.types.ts` you
   touched: every changed line must sit inside a `/** … */` block. If a line of code changed,
   revert it and report it. Never boot Storybook.

## Code bugs

A code bug found while documenting (a JSDoc that disagrees with the code, a default the consumer
can't override, any behaviour the docs would otherwise have to describe as a bug) goes through the
`moon-ticket` skill, in its default *Write* mode. It verifies the bug, checks it for duplicates,
and writes or updates a draft in `tickets/`. Never record code bugs anywhere else, never document
them in the `.md`, and never publish the drafts: they wait for human review.

## Review

Check the component against the references. Report each divergence with its file and line.
Change nothing. For fresh eyes, run the review in a new session, not the one that wrote the docs.

## Pending

List the open design decisions: every `_Pending design guidance_` marker in the named
components' `.md`, or in all of `src/**/*.md` when none is named. Group them by component, then
by prop, and quote each `<!-- designer: … -->` question. Change nothing. End with the total.

## Report

Per component: files changed (or divergences found), `_Pending design guidance_` count, standard
gaps, JSDoc blocks changed, snippets to apply, and the code bugs handed to `moon-ticket` (the
draft written or updated in `tickets/`, or the issue that already covers each one). The render check in Storybook is always *pending* (a human step).
