# Component docs — style

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
- Deprecated props: the `@deprecated` JSDoc already surfaces them in the Props table; don't
  document them anywhere else. Never use a deprecated prop in the Example.
- No links to design-tool files (Figma) or to repo-internal files. Component docs are
  self-contained.
