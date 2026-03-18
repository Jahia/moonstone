---
description: Instructions for migrating a component from global SCSS to CSS Modules.
applyTo: "src/components/**"
---

# CSS Modules Migration Instructions

## Goal

Each component's visual styles are moved to a CSS Module (`.module.scss`). The original
BEM class names stay on DOM elements as semantic hooks — they carry **no CSS** after the
migration. The module class carries all the visual CSS.

This eliminates CSS conflicts for library consumers while keeping:

- All existing `toHaveClass('moonstone-*')` assertions in tests passing
- All global utility classes (`flexRow`, `flexCol`, `alignCenter`, etc.) unchanged
- Visual output exactly identical

---

## Scope of a single agent task

Migrate **one component directory** at a time: `src/components/<ComponentName>/`.
Do not touch other components. When the component has sub-components inside its directory
(e.g. `AccordionItem/` inside `Accordion/`), migrate those too as part of the same task.

---

## Step-by-step process

### 1. Read every `.scss` and `.tsx` file in the component directory

Before making any changes, read all files. Understand:

- Which classes are component-specific (e.g. `.moonstone-button`)
- Which classes are shared state modifiers (see list below)
- Whether any `@use` in the SCSS imports another component's SCSS file
- Whether the SCSS has private variant files (e.g. `Button/variants/_default.scss`)

### 2. Create `<ComponentName>.module.scss`

Rename the file: `<ComponentName>.scss` → `<ComponentName>.module.scss`
(i.e. create the module file, the old file will be deleted in step 5).

Rules for the new module file:

- Strip the `moonstone-` prefix from all **top-level class selectors**:
  `.moonstone-button` → `.button`, `.moonstone-button_big` → `.button_big`
- Replace **modifier class selectors** that refer to shared state globals with `:global()`:
  `&.moonstone-reversed` → `&:global(.moonstone-reversed)`
  `&.moonstone-selected` → `&:global(.moonstone-selected)`
  `&.moonstone-disabled` → `&:global(.moonstone-disabled)`
  `&.moonstone-hidden` → `&:global(.moonstone-hidden)`
  `&.moonstone-hover` → `&:global(.moonstone-hover)`
  `&.moonstone-reverse` → `&:global(.moonstone-reverse)`
- Replace **sibling/descendant selectors** that target another component's BEM class:
  `& + .moonstone-accordionItem` → `& + :global(.moonstone-accordionItem)`
  `.moonstone-treeView_item.moonstone-disabled &` → `:global(.moonstone-treeView_item.moonstone-disabled) &`
- Replace **compound `:not()` selectors** on global classes:
  `&:not(.moonstone-selected)` → `&:not(:global(.moonstone-selected))`
- Keep all `@use`, `@extend`, `@include`, variables, and non-class selectors
  (`:focus-visible`, `:hover`, `[disabled]`, `[aria-disabled]`, etc.) unchanged.
- Keep `%placeholder` extends unchanged — these come from `globals/variants` or `utils/mixins`
  and are already CSS-module-compatible.

**Special case — private variant files** (e.g. `Button/variants/_default.scss`):
These files define `%placeholders` only, not classes. They do not need to become modules.
They are `@use`d by the component's module file. Leave them as-is.

**Special case — `@use '../CardSelector.scss'`** (sub-component importing parent):
When a sub-component's SCSS imports the parent's SCSS to access its `%placeholders`,
update the import path to the new module filename:
`@use '../CardSelector.scss' as *` → `@use '../CardSelector.module.scss' as *`

### 3. Update the TSX file(s)

For each `.tsx` file in the directory that has `import './ComponentName.scss';`:

a. Replace the side-effect import with a named module import:

```tsx
// Before
import "./Button.scss";

// After
import styles from "./Button.module.scss";
```

b. For every `clsx(...)` call that includes a component-specific BEM class, append the
corresponding module class **immediately after** the BEM string:

```tsx
// Before
clsx('moonstone-button', ...)

// After
clsx('moonstone-button', styles.button, ...)
```

Match every top-level selector from the module file to the `clsx()` call where its
corresponding BEM class appears. The mapping is always:
`'moonstone-button'` → `styles.button`
`'moonstone-button_big'` → `styles.button_big`
`'moonstone-accordionItem'` → `styles.accordionItem`
(i.e. strip `moonstone-` prefix and camelCase the result if it contains a `-`)

c. Do **not** add module classes for:

- Shared state modifiers: `moonstone-reversed`, `moonstone-selected`, `moonstone-disabled`, etc.
- Global utility classes: `flexRow`, `flexCol`, `flexFluid`, `alignCenter`, etc.
- Classes that belong to a _different_ component (e.g. `moonstone-icon_big`)

### 4. Delete the old `.scss` file

Delete the original `<ComponentName>.scss` file entirely. Do not leave it empty or with a comment.

### 5. Run tests and build

```bash
yarn test   # must pass – no toHaveClass assertions may break
yarn build:lib  # must succeed with no errors
```

Fix any TypeScript or build errors before considering the task done.

---

## Reference: shared state modifier classes (always `:global()` in SCSS)

These class names are applied by component logic and are also used in external tests and
consumer code. They must always be referenced as `:global(...)` inside module files:

| Class                | Meaning                                  |
| -------------------- | ---------------------------------------- |
| `moonstone-reversed` | Dark background / reversed colour scheme |
| `moonstone-reverse`  | Alias used in Button variants            |
| `moonstone-selected` | Selected state                           |
| `moonstone-disabled` | Disabled state                           |
| `moonstone-hidden`   | Hidden state (e.g. Menu)                 |
| `moonstone-hover`    | Programmatic hover state                 |

---

## Reference: global utility classes (never get module classes)

These come from `src/globals/` and are injected by `GlobalStyle`. They are a public API.
Always use them as plain strings in `clsx()`. Never put them in a module file.

`flexRow`, `flexRow_nowrap`, `flexRow_reverse`, `flexRow_center`, `flexRow_between`,
`flexCol`, `flexCol_nowrap`, `flexFluid`, `alignCenter`, `justifyStart`, `justifyCenter`,
`justifyEnd`, `verticalAlignTop`, `verticalAlignMiddle`, `verticalAlignBottom`,
`textAlignLeft`, `textAlignCenter`, `textAlignRight`

---

## Concrete example — the completed Accordion migration

### Accordion.module.scss

```scss
.accordion {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:global(.moonstone-reversed) {
    color: var(--color-light);
  }
}
```

### AccordionItem.module.scss (excerpt)

```scss
.accordionItem {
    // ...styles...

    & + :global(.moonstone-accordionItem) {  // sibling selector → :global
        border-top: 0;
    }

    &:global(.moonstone-reversed) {          // shared state modifier → :global
        border-color: var(--color-gray);
    }
}

.accordionItem_header {
    // ...styles...

    &:global(.moonstone-selected) { ... }
    &:not(:global(.moonstone-selected)):not(:active):hover { ... }

    &:global(.moonstone-reversed) {
        &:global(.moonstone-selected) { ... }
        &:not(:global(.moonstone-selected)):not(:active):hover { ... }
    }
}
```

### ControlledAccordion.tsx (excerpt)

```tsx
import styles from './Accordion.module.scss';

className={clsx(
    className,
    'flexFluid',           // global utility — plain string, no module class
    'moonstone-accordion', // BEM semantic hook — stays
    styles.accordion,      // module class — carries the visual CSS
    {'moonstone-reversed': isReversed}  // shared state modifier — stays as-is
)}
```

### AccordionItem.tsx (excerpt)

```tsx
import styles from './AccordionItem.module.scss';

className={clsx(
    'moonstone-accordionItem',
    styles.accordionItem,
    {'moonstone-reversed': context.isReversed},
    'flexCol',
    open ? 'flexFluid' : null,
    className
)}
```

---

## What NOT to do

- Do not remove any `moonstone-*` class from `clsx()` calls
- Do not hash or rename the output class names (do not configure `generateScopedName`)
- Do not modify global utility classes or any file in `src/globals/`
- Do not migrate files outside the assigned component directory
- Do not add module classes for classes that have no corresponding module selector
- Do not leave empty `.scss` files — delete them
