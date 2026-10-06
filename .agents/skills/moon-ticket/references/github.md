# GitHub: fields, conventions, and commands

## What goes on each issue

Each value comes from the ticket's frontmatter (`format.md`).

| Field | Rule |
|---|---|
| **Type** (org issue type) | `Bug` for a defect. `Task` for a chore with no behaviour change. `Story` for new behaviour or a rework. |
| **Story Points** (org issue field, text) | Fibonacci: `1`, `2`, `3`, `5`, `8`, `13`. Estimate the mechanical fix. If an open design decision could grow the scope, say so when you present the table. |
| **Severity** (org issue field, single select) | `Critical` for a crash, `Major` for wrong behaviour, `Minor` for typing, a11y polish, or small issues. `Blocker` and `Trivial` only when they clearly apply. |
| **Labels** | Only existing labels: `a11y` for accessibility, `typescript` for typing-only tickets. Never `need-triage`, which belongs to another flow. Never invent a label. |
| **Parent** (sub-issue) | The epic that owns the area, such as #1421 for accessibility and #1465 for design-system coherence. |
| **Project** | None. Don't add moonstone tickets to a project, even though the bug template does. |

## Commands

They all work with a token that has the `repo` and `read:org` scopes. The `project` scope is not
needed. The shell is zsh on macOS: `/bin/bash` there is version 3 and has no associative arrays.

### Look for duplicates

```bash
# Open issues, with their bodies, to search locally
gh issue list --repo Jahia/moonstone --state open --limit 3000 --json number,title,body \
  --jq '.[] | "\n######## #\(.number) — \(.title)\n\(.body)"' > "$SCRATCHPAD/open-issues.md"

# Closed issues, by component and symptom (repeat with a few keywords)
gh search issues --repo Jahia/moonstone --state closed --limit 30 \
  --json number,title,labels,closedAt "<Component> <keyword> in:title,body" \
  --jq '.[] | "#\(.number) \(.title) [\([.labels[].name] | join(","))]"'

# How a closed issue was resolved (also see its `Resolution:*` labels)
gh issue view <n> --repo Jahia/moonstone --json stateReason,labels
```

### Publish an issue

Strip the frontmatter to get the body:

```bash
awk 'NR==1 && /^---$/ {fm=1; next} fm && /^---$/ {fm=0; next} !fm' "tickets/<file>.md"
```

Create the issue with its type, fields, parent, and labels in a single GraphQL mutation. The
title comes from the frontmatter's `title`.

```bash
input=$(jq -n --arg t "$title" --arg b "$body" '{
  repositoryId: "<repo id>", title: $t, body: $b,
  issueTypeId: "<type id>", parentIssueId: "<epic id>", labelIds: [],
  issueFields: [
    {fieldId: "<Story Points id>", textValue: "3"},
    {fieldId: "<Severity id>", singleSelectOptionId: "<option id>"}
  ]}')
jq -n --argjson i "$input" '{query: "mutation($i:CreateIssueInput!){createIssue(input:$i){issue{number url}}}", variables: {i: $i}}' \
  | gh api graphql --input -
```

Read the issue back after you create it:

```bash
gh api repos/Jahia/moonstone/issues/<n> --jq '{type: .type.name, parent: .parent_issue_url,
  labels: [.labels[].name], body_start: .body[0:80],
  fields: [.issue_field_values[] | {(.issue_field_name): (.value // .single_select_option.name)}]}'
```

The API returns Severity as an option id (for example `74511110`). Compare it with the ids that
`gh api orgs/Jahia/issue-fields` lists. `body_start` must not start with `---`.

### Publish a comment

```bash
gh issue comment <issue> --repo Jahia/moonstone --body-file <(awk 'NR==1 && /^---$/ {fm=1; next} fm && /^---$/ {fm=0; next} !fm' "tickets/<file>.md")
```

Read it back from the comment id at the end of the URL that `gh issue comment` prints
(`gh api repos/Jahia/moonstone/issues/comments/<id>`), and compare its `body` with the stripped
draft. Ignore trailing newlines: `jq` adds one, so a byte-for-byte diff always fails.

### Ids

Node ids are stable. Look them up again if a call fails:

```bash
gh api graphql -f query='{organization(login:"Jahia"){issueTypes(first:20){nodes{id name}}}}'
gh api orgs/Jahia/issue-fields          # Story Points, Severity (+ option ids)
gh api graphql -f query='{node(id:"<Severity field node id>"){... on IssueFieldSingleSelect{options{id name}}}}'
gh api graphql -f query='{repository(owner:"Jahia",name:"moonstone"){id
  issue(number:1465){id} labels(first:5,query:"a11y"){nodes{id name}}}}'
```

Ids known on 2026-10-02:

| What | Node id |
|---|---|
| repository `Jahia/moonstone` | `MDEwOlJlcG9zaXRvcnkyMDUxNjkwODg=` |
| type Bug / Task / Story | `IT_kwDOAArxx84AAgvt` / `IT_kwDOAArxx84AAgvq` / `IT_kwDOAArxx84Ba6IL` |
| field Story Points | `IFT_kgDOAomy1A` |
| field Severity | `IFSS_kgDOAomzFw` |
| Severity Critical / Major / Minor | `IFSSO_kgDOBHDzBQ` / `IFSSO_kgDOBHDzBg` / `IFSSO_kgDOBHDzBw` |
| epic #1421 / #1465 | `I_kwDODDqhwM8AAAABOeEMvg` / `I_kwDODDqhwM8AAAABQm0IMw` |
| label `a11y` / `typescript` | `LA_kwDODDqhwM8AAAAB6Pav7w` / `LA_kwDODDqhwM8AAAAB6Pa7_A` |

## Mentions and notifications

Design decisions mention the **`@Jahia/design_contributor`** team. A team mention notifies all its
members. The team is visible to the organization and has access to moonstone, which a team mention
needs.

Never mention the person running the workflow. The ticket is created with their token, so they
are its author, and GitHub never notifies you of your own activity. An author still gets notified
of later activity on the issue.

Find the tickets still waiting for a design decision with the `team:Jahia/design_contributor`
search (or `mentions:` for a person).

## Publishing by hand (developer)

A developer can publish a ticket without an agent:

```bash
gh issue create --repo Jahia/moonstone --title "<title>" --body-file <(awk 'NR==1 && /^---$/ {fm=1; next} fm && /^---$/ {fm=0; next} !fm' tickets/<file>.md) --label <label>
```

Then they set the type, Story Points, Severity, and parent in the GitHub UI, and delete the file.
