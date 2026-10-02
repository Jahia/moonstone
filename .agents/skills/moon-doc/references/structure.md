# Component docs — structure

## The files

Each component lives in its own folder under `src/` (`src/components/<Component>/`, or
`src/layouts/<name>/` for layouts). Its documentation is:

- **`<Component>.md`** — the prose usage doc. Single source of truth for the wording; also the
  corpus an LLM reads.
- **The props' JSDoc in `<Component>.types.ts`** — rendered as the Props table (see *JSDoc*
  below).
- **The doc wiring in `<Component>.stories.*`** — the `.md` import, `componentSubtitle`,
  `docs.description.component`, and the `tags` of an internal component (see *Wiring into
  Storybook* below).

There is **no per-component `.mdx`**. Every Docs page uses the one layout defined in
`.storybook/preview.jsx` (`parameters.docs.page`), built from native Doc Blocks only. To change
the layout of every page, change that one file.

The canonical, approved reference is **`src/components/Button/`** (`Button.md`,
`Button.stories.tsx`). When in doubt, match Button.

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

Per-section content (for phrasing, see `style.md`):

- **Example** — a fenced ` ```jsx ` block: the import line(s) plus exactly **one** usage, the
  one a consumer writes most often in a real app. Never one example per variant, size, or state:
  the preview and the Controls already show every possibility. Realistic labels that
  follow `ui-copy.md`. Import the component from `@jahia/moonstone` and any icons from
  `@jahia/moonstone/icons`. Code only, with short sentence comments. Placed first so it renders
  right after the Props table.
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
  when …" (for example, "Use it to submit a form or confirm a choice."). **Mechanical test: a Do
  bullet never names a prop or a prop value** (nothing in backticks). If it does, it explains
  configuration, which belongs in the Props table: rewrite it as a use case or delete it.
- **Don't** — answers only **"when should I NOT use this component?"** Each bullet names a wrong
  *use case*, then names the correct alternative as a complete sentence, citing a **real,
  exported** component (for example, "Don't use a Button for an on/off setting. Use a **Switch**
  instead."). This routing steers an LLM to built-ins, so it is required; cross-references to
  other components live here or in the prose.
  To route between components of the same group (such as the selection components), apply
  `component-rules.md`, with its exact values.
- **Appearance** — see the pattern below.
- **Voice and tone** — include ONLY for components where the user writes copy (Button, Input,
  Field, EmptyData…); omit for components with no user copy (Typography, Table, Loader). When
  present, state the relevant rules **inline** (sentence case; a few words, 3 max, never a
  sentence; verb-first; be specific, never "OK") plus any component-specific rule. **Never link
  to `ui-copy.md`**; the section is self-contained.
- **Accessibility** — each bullet names the attribute or element the consumer must **add at
  implementation**, and when (for example, "Add an `aria-label` when the Button has no `label`.",
  "Add `aria-hidden="true"` on a decorative icon."). Don't describe what the component already
  does on its own.

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

## Internal components

A component is internal when its stories meta has `tags: ['internal', '!manifest']`. That tag is
the only marker: whether `src/index.ts` exports the component does not decide it. `internal`
shows a badge in Storybook; `!manifest` keeps the component out of the AI manifest.

Its `.md` keeps the same sections, written for the contributors who maintain the library:

- **Example** imports from `~/components`, never from `@jahia/moonstone`.
- **Do** names the components it is used to build.
- **Don't** steers app code to the public component that wraps it, by name.
- The rule "only mention public, exported components" does not apply to the component itself.

## JSDoc — the Props table

The props' JSDoc is user-facing: the IDE shows it, and Storybook renders it as the Props table.

- **Write JSDoc for the consumer.** It shows in IDE tooltips: one short line saying what the
  prop does, plus the one fact a user would get wrong. Put defaults in `@default`.
- **JSDoc must match the code.** Defaults, types, and nullability in the doc must reflect the
  implementation; a stale or aspirational doc is a defect. Flag it and emit the fix.
- **Non-obvious booleans get a one-sentence rationale** in their JSDoc (see *The Appearance
  pattern*).
- JSDoc lives in source files: emit every JSDoc change as a copy-paste snippet, never apply it.

## Wiring into Storybook

In the default export (meta) of `<Component>.stories.*`:

```tsx
import markdownNotes from './<Component>.md?raw';

export default {
    title: 'Components/<Component>',
    component: <Component>,
    parameters: {
        componentSubtitle: '<one-line description of what the component is/does.>',
        docs: { description: { component: markdownNotes } },
    },
};
```

- **Import the `.md` with `?raw`.** `vite.config.mjs` has `assetsInclude: ['**/*.md']`, so a
  plain `.md` import returns the file *path*, not its contents. `?raw` returns the text. This is
  the #1 pitfall; always use `?raw`.
- `componentSubtitle` is the one-line description (the `.md` has no intro paragraph): one
  sentence of **10 words at most**, saying what the component is or does. No list of features,
  no prop names (for example, "A single row of a list.").
- The global page renders, in order: title, subtitle, the **first exported story** (preview),
  the Props table (Controls of that story), then the `.md` prose. So the first story in the file
  is the one shown: make it representative and driven by args.
- An internal component also gets `tags: ['internal', '!manifest'],` in the meta (see *Internal
  components*).
- Never add a `<Component>.mdx`, and never use the `notes` parameter.

### Element props (icon, children…) — clean Controls

React-element props (`icon`, `iconStart`, `iconEnd`) render as a clean Controls dropdown through
`iconArgType` (`~/__storybook__/iconArgType`), set in the stories meta `argTypes`. Follow Button.
It is a story change: emit it as a snippet.
