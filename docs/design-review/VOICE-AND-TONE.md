# Moonstone Voice & Tone

> **Status:** v0 (draft). Global rules for user-visible text across all Moonstone
> components. Applies to **contributors** (default labels in components) and
> **consumers** (the copy they pass into components).
> Items marked *(proposed)* or ⚠️ still need design/product confirmation.
> **Last updated:** 2026-06-09

## Scope

All user-facing text rendered through or alongside Moonstone components — button
labels, field labels, menu items, placeholders, empty-state messages, etc.

## Casing — sentence case ✅

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

## Canonical labels — not defined yet

No fixed wording list for now. The action-label rules above still apply (be specific;
never "OK"). A canonical per-action list may be defined later with product/design.

## Tone

- Neutral and professional; clear over clever.

## Accessibility text (aria-label etc.) — TBD

- Not yet defined. Interim: an icon-only control's `aria-label` should describe the
  action with the same verb-first rule (e.g. `aria-label="Add to favorites"`).

## Open items

- Canonical label list — may be defined later with product/design.
- `aria-label` / accessibility voice — define later.

## Used by

- [Button](../../src/components/Button/Button.md#writing-button-labels-voice--tone) — first adopter.
