# UI copy (voice and tone)

Rules for the user-visible text in components: labels in doc examples, default labels, and
the copy consumers pass in.

## Scope

All user-facing text rendered through or alongside Moonstone components — button
labels, field labels, menu items, placeholders, empty-state messages, etc.

## Casing — sentence case

- Write UI text in **sentence case**: capitalize the first word and proper nouns only.
  "Save changes", not "Save Changes".
- Rationale: more readable, friendlier, and easier to translate.
- **Visual exception:** the Button `big` size renders its label UPPERCASE automatically
  for emphasis. Always author in sentence case — never hand-type uppercase to fake it.

## Action labels

- **Verb-first.** Start with the action verb: "Save", "Publish", "Delete".
- **Add a noun only to disambiguate** — when the same verb applies to different objects:
  "Edit image" vs "Edit content".
- **Be specific — never "OK".** Name the real outcome ("Delete"), especially for
  destructive actions.
- **Keep it to a few words — 3 maximum.** Never a sentence.

- **`aria-label` follows the same verb-first rule.** An icon-only control's label
  describes the action (for example, `aria-label="Add to favorites"`).

## Tone

- Neutral and professional; clear over clever.

## Open items (pending product/design, not enforced)

- Canonical per-action label list (a fixed wording list). Until defined, the action-label
  rules above apply.
- A fuller accessibility-text voice beyond the interim `aria-label` rule.
