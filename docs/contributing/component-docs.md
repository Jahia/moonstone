# Component documentation style

> 🟢 **Maturity: Enforced — single source of truth.** This is how every `<Component>.md`
> and `<Component>.mdx` is written. Do not duplicate these rules elsewhere; reference this file.
> This is distinct from [ui-copy.md](../consuming/ui-copy.md), which governs *UI microcopy*
> (the labels and messages inside components). This file governs the *docs themselves*.
> **Last updated:** 2026-06-12

## What this file is

The single source for **how a component's documentation is written**: the prose of
`<Component>.md` and the structure of `<Component>.mdx`. It covers, in order, the two files and
what grounds them, the `.md` section structure, the `.mdx` template, how to verify the result,
and the writing style.

Microcopy *inside* a component (a button label, a placeholder) is a separate concern. It lives
in [ui-copy.md](../consuming/ui-copy.md), and the example labels in these docs follow it.

## The two files

Each component lives in its own folder under `src/` (`src/components/<Component>/`, or
`src/layouts/<name>/` for layouts). Its documentation is two files:

- **`<Component>.md`** — the prose usage doc. Single source of truth for the wording; also the
  corpus an LLM or manifest reads.
- **`<Component>.mdx`** — the Storybook Docs page. Pulls the `.md` prose in via a `<Markdown>`
  block and composes the page with Doc Blocks.

The canonical, approved reference is **`src/components/Button/`** (`Button.md`, `Button.mdx`,
`Button.stories.tsx`). When in doubt, match Button.

## Grounding in code

Every claim comes from the component's source, never a guess. Before writing, read
`<Component>.types.ts` (props + JSDoc), `<Component>.tsx`, `<Component>.stories.tsx`, any existing
`<Component>.md`, and `index.ts` (plus sub-components). Prop names, allowed values, and behaviour
are taken from there. Ground in the code's actual behaviour, not just JSDoc text: if a prop's
JSDoc contradicts what the component does, flag it and emit a JSDoc fix as a snippet. For the
example labels and the Voice and tone section, also consult the microcopy rules in
[ui-copy.md](../consuming/ui-copy.md).

## `<Component>.md` — structure

**No leading `# Title`.** Storybook prints the title; a leading H1 doubles it. Start the file
at `## Example`. Sections, in this exact order and with these exact h2 titles (`[ ]` = include
only when the condition holds). There is **no "Related" section**.

```
## Example
## Controlled & uncontrolled   ← ONLY if the component supports both modes
## Do
## Don't
## Appearance
## Voice and tone              ← ONLY if the component involves user-authored copy
## Accessibility
```

Per-section content (for phrasing, see Voice / Sentences below):

- **Example** — a fenced ` ```jsx ` block: the import line(s) plus 2–4 minimal, copy-pasteable
  usages covering the common cases. Realistic labels that follow `ui-copy.md`. Import the
  component from `@jahia/moonstone` and any icons from `@jahia/moonstone/icons`. Code only,
  with short sentence comments. Placed first so it renders right after the Props table.
- **Controlled & uncontrolled** — include ONLY when the component supports both modes (a
  controlled prop such as `value` / `checked` / `isPressed`, plus an uncontrolled `default*`
  prop; confirm from `*.types.ts`). Explain each mode in one line with a short code example,
  say when to use which, and warn not to mix them. Surface the **change-callback signature**
  when its arguments are not obvious (for example `onChange(event, isPressed)`, where the second
  argument is the new state). If the two modes are also exported as **named components** (for
  example `ControlledX` / `UncontrolledX`), the unified component stays the single documented
  entry: explain the modes through its props and steer consumers to it, rather than giving the
  named variants their own docs.
- **Do** — answers only **"when should I reach for this component?"** Each bullet is a
  "when to use" statement, refers to the component as "it", and leads with "Use it to / for /
  when …" (for example, "Use it to submit a form or confirm a choice."). Other action verbs
  (Pair, Reserve …) are fine where they read naturally. **CRITICAL — never include "how to
  configure a prop" bullets** ("Set `hasError` when…", "Use `isDisabled` when…"); those belong
  in the Props table or Example. If a candidate bullet is about a prop value, delete it.
- **Don't** — answers only **"when should I NOT use this component?"** Each bullet names a wrong
  *use case*, then names the correct alternative as a complete sentence, citing a **real,
  exported** component (for example, "Don't use a Button for an on/off setting. Use a **Switch**
  instead."). This routing steers an LLM to built-ins, so it is required; cross-references to
  other components live here or in the prose.
- **Appearance** — see the pattern below.
- **Voice and tone** — include ONLY for components where the user writes copy (Button, Input,
  Field, EmptyData…); omit for components with no user copy (Typography, Table, Loader). When
  present, state the relevant rules **inline** (sentence case; a few words, 3 max, never a
  sentence; verb-first; be specific, never "OK") plus any component-specific rule. **Never link
  to `ui-copy.md`**; the section is self-contained.
- **Accessibility** — bullets of the must-dos the consumer is responsible for (icon-only
  controls need `aria-label`; labels via `Field`; don't remove the focus ring).

### The Appearance pattern (generalizable)

One block per "variant-like" prop (any enum/choice prop with multiple values: `variant`,
`color`, `size`, `weight`, …). Each block is an **h3 heading** `` ### `<prop>` for <one-word
gist> `` followed by a two-column table, one row per allowed value:

```
### `variant` for emphasis

| Value | Use it for |
|---|---|
| `default` | … |
| `outlined` | … |
```

- Derive prop names and allowed values from `<Component>.types.ts` (the `as const` arrays /
  union types).
- Do **not** give a subsection to a simple **boolean** prop (`isReversed`, `isDisabled`…): the
  Props table already covers it. If a boolean's *when/why* is not obvious (for example
  `isLoading`, `isReversed`), put a one-sentence rationale in the prop's **JSDoc** so it surfaces
  in the Props table; emit that JSDoc change as a copy-paste snippet (do not edit source files).
- Gist words: emphasis (variant), meaning (color), prominence (size); pick a fitting one-word
  gist for other props.
- Do **not** build a combined "action-type" matrix mixing several props (too dense). If two
  props combine meaningfully, fold that into a cell ("pair with `variant=default`").
- Optionally open with **one** short sentence stating a cross-prop principle.
- If the component has no choice props, omit the Appearance section.
- **Never invent design intent.** The "Use it for" cells are the designer's call: write
  `_Pending design guidance_` with a brief `<!-- designer: … -->` hint rather than a guess.

## `<Component>.mdx` — the Storybook page (exact template)

```mdx
import {Meta, Title, Subtitle, Markdown, Canvas, Controls} from '@storybook/addon-docs/blocks';
import * as <Component>Stories from './<Component>.stories';
import notes from './<Component>.md?raw';

<Meta of={<Component>Stories} />

<Title />
<Subtitle><one-line description of what the component is/does.></Subtitle>

<Canvas of={<Component>Stories.<PrimaryStory>} />

## Props

<Controls of={<Component>Stories.<AStoryWithArgs>} />

<Markdown>{notes}</Markdown>
```

- **Import the `.md` with `?raw`.** `vite.config.mjs` has `assetsInclude: ['**/*.md']`, so a
  plain `.md` import returns the file *path*, not its contents. `?raw` returns the text. This is
  the #1 pitfall; always use `?raw`.
- `<Subtitle>` is the one-line description (the `.md` has no intro paragraph). Factual, no prose
  duplication.
- `<Canvas of={…}>` shows **one** curated story (an Overview/primary), not every story.
- `<Controls of={…}>` renders the props table; point it at a story with representative args.
- Layout order is Preview → Props → prose. Match Button.
- An attached MDX (`<Meta of={stories}/>`) is automatically the single Docs page (Storybook
  `attached-mdx`) and renders only the MDX content, so `tags: ['!autodocs']` is **not** needed
  and the story needs **no** `.md` import or `notes:` parameter.

### Element props (icon, children…) — clean Controls

React-element props (`icon`, `iconStart`, `iconEnd`, element `children`) should render as a clean
Controls dropdown, not as dumped element source.

> ⚠️ The exact mechanism is **being finalized in a separate ticket** (see [ROADMAP](../ROADMAP.md)).
> Until it lands, follow Button. The story change is emitted as a copy-paste snippet, never
> applied by the agent.

## Verify

Do the **static** checks yourself by re-reading the files you wrote: the `.md` starts at
`## Example` (no leading `#`); the `.mdx` imports `./<Component>.md?raw` and uses one
`<Canvas of>` plus one `<Controls of>`; the section order is correct.

Do **not** boot Storybook to verify — it is slow and unreliable in an automated run. The
**runtime** render check (one title; prose renders as text, not a `/src/...` path; only the
curated story under Preview) is a human or CI step. State it as *pending* in your report.
If Storybook is needed, it runs on port **6017** (the developer's own instance usually holds 6006).

## Voice

Mixed, by section:

- **Descriptive** for the subtitle and any introductory sentence. Present tense, third person,
  stating what the component is or does ("Triggers an action when the user clicks it.").
- **Imperative** for guidance (Do, Don't, Appearance, Accessibility, Voice and tone). Address
  the reader directly ("Use it to submit a form." "Don't use it for navigation.").

## Sentences

- **Write complete sentences, or clean list items.** Do not stitch fragments together.
- **Never use an em dash (`—`).** Use a full stop and a second sentence, a comma, or a list.
- **Avoid arrow shortcuts (`→`).** Write the alternative as a sentence ("Use a link instead.").
- Present tense, active voice. Sentence case for all headings.
- Use "such as" for examples, not "e.g." or "i.e.".
- Never gerunds ("Showing …") or bare noun phrases in Do/Don't bullets.

## Terminology & formatting

- Refer to the component by its exact name, or as "the component". Be consistent within a doc.
- Put prop names, values, and code in backticks: `variant`, `default`, `aria-label`.
- Name other components in bold on first mention: **Switch**, **ButtonGroup**.
- Only mention public, exported components and props. Never reference internal or non-exported
  parts.
- No implementation details (pixel values, `.moonstone-*` classes, `$` Sass variables,
  `--moon-*` token names). Describing observable rendered behaviour in plain terms is fine (for
  example, "the label is shown in uppercase"); only *implementation* detail is off-limits.
- Native HTML attributes the component forwards (via `{...props}`, such as `type` or `data-*`)
  are **not** documented; consumers know HTML. Surface only the ones that carry a usage rule
  (for example `aria-label`), in the section that calls for them. The same applies to native
  props the component *omits*: not documented.
- No "states in prose" that merely restate the Props table.
- Deprecated props: the `@deprecated` JSDoc already surfaces them in the Props table. If there is
  a replacement, add one Don't-style bullet steering to it (for example, "Pass the page body as
  `children`, not the deprecated `content`."). Never use a deprecated prop in the Example.
- No links to design-tool files (Figma) or to internal governance docs under `docs/`
  (`contributing/`, `consuming/`, `_process/`). Component docs are self-contained.
