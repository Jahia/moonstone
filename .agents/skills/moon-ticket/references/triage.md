# Duplicates, outcomes, and grouping

## Look for duplicates

Search these sources before writing a ticket, and again before publishing it:

1. **Open issues.** Dump them with their bodies (see `github.md`) and search the bodies, not only
   the titles: the component, the file name, the prop, and the symptom. Epics list their work in
   their children.
2. **Closed issues.** Search them by component and symptom (`gh search issues`, see `github.md`).
   - Closed as fixed but back in the code: a regression. Write a new ticket that links the
     original one, and mention the regression in the title.
   - Closed as *Won't do*, *Duplicate*, or *Known Issue/Limitation*: don't recreate it. Report it
     as *already covered*, with the issue's resolution.
3. **For a comment, the target issue's comments.** Someone may already have reported it there
   (`gh api repos/Jahia/moonstone/issues/<n>/comments`). Also check that the issue is still open.
4. **Drafts in `tickets/`.** Another agent may have written the same bug, or a bug that belongs
   to the same work. Edit that draft instead of adding a second file.

Some open epics cover whole areas: WCAG AA (#1421 and its children #1422-#1447), and
design-system coherence (#1465 and its children #1466-#1496). Check their children first. Even
when an epic's summary table names a bug, the child's body may not list it. That case is "add to
an existing issue".

## Outcomes

Each verified bug gets exactly one outcome:

| Outcome | When | Result |
|---|---|---|
| **Already covered** | An issue already describes it, open or closed as won't fix. | No file. Name the issue (and the bullet) in the report. |
| **Add to an existing issue** | An open issue covers the same work (see the grouping rule) but doesn't list this bug. | A `kind: comment` file in `tickets/`. |
| **New ticket** | It's real, and nothing covers it or the same work. | A `kind: issue` file in `tickets/`. |
| **Branch fix** | It exists only on the current branch, or it's in the scope of the task at hand (such as docs or JSDoc during a `moon-doc` run). | No file. Fix it in the branch during the session. |
| **To decide** | The intent is documented nowhere (see `verification.md`). | A `kind: decision` file in `tickets/`, so the question survives the session. |
| **Not a bug** | The code is correct, or the behaviour is documented as intended. | No file. Give a one-line reason in the report. |

## Grouping rule

Avoid multiplying tickets for work that has to be done together. A bug joins another ticket (an
existing issue or a draft) when **one** of these holds:

- **Same lines.** The fix touches the same lines, for example the same `console.warn` condition
  or the same id builder.
- **Planned rewrite.** A rework that is already planned will rewrite this code, for example a
  component rebuild, a signature contract, or a types migration. Fixing it now would be thrown
  away.
- **Same decision.** The fix depends on the same decision as the other ticket, such as a naming
  scheme or a size scale.

Touching the same component is **not** enough. Two independent fixes in one component stay two
tickets, and each one names the other under *Related* ("coordinate, but they can be done
independently").

Bugs in the same plumbing (for example a group ↔ item context) form one ticket with numbered
points.

When a merge would delay a quick, non-breaking fix until a large migration, raise it as an open
question rather than deciding alone.
