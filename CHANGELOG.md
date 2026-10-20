# @jahia/moonstone Changelog

## 2.22.0

### New Features

* Remove the global classes `moonstone-accordionItem_iconContainer` and `moonstone-primaryNavItem_content` with their wrappers (#1428)

* `ImgWrapper` and `Thumbnail` now require an `alt` text (#1424)

* Prevent nested buttons in `CardSelector` components (#1440)

* Added Delete and Backspace to remove a `Tag`, and Home and End to jump to the `NumberInput` bounds (#1545)

* A `Typography` rendered as a `button` has no native border and background, and inherits its color and text alignment (#1428)

* Link the `Field` label, helper and error to its control, name `RadioGroup`, `CheckboxGroup` and `Fieldset` as groups, make the `id` of `RadioItem` and `CheckboxItem` optional, and export `useFieldAria` for custom controls (#1426)

* Name the `Pagination`, `TablePagination` and `DataTable` controls and the `Input` and `Dropdown` clear buttons, translatable with `i18n` (`label` for `TablePagination`) (#1425)

* Add `role="switch"` to `Switch`, set the `indeterminate` property of `Checkbox`, and drop `aria-checked` from both (#1427)

* Resize `ResizableBox` with the keyboard, and translate its handle with `i18n` on `ResizableBox` and `SecondaryNav` (#1439)

* Add an `i18n` prop to `Header`, `PrimaryNav` and `SecondaryNav` to translate their `aria-label` (#1428)

### Bug Fixes

* Set `aria-orientation="vertical"` on a vertical `Separator` (#1532)

* Keep focus after keyboard activation on `ButtonToggle` or `CardSelector`, or after clearing an `Input` or a `SearchInput` (#1544)

* Add `role="status"` to the `ListSelector` selection count and to the `Menu` and `Dropdown` "no results" text (#1447)

* Add a visible focus indicator on the `PrimaryNav` and `SecondaryNav` toggle buttons (#1422)

* Make generated icons decorative by default, and stop `TreeView` naming icons after a function (#1423)

* The `EmptyData` title is now an `h3` heading (#1514)

* Fix `onClick is not a function` error when clicking a component without `onClick` (#1506)

* Navigate `Tab`, `Menu` and `TreeView` with the arrow keys, Home and End, as one Tab stop each; `Accordion`, `ListSelector`, `PrimaryNavItem` and `Dropdown` items act on Enter keydown and Space keyup (#1430)

* Animations turn off when users enable “reduce motion” in their OS (#1441)

* Use the correct attributes, `role` and `aria-*` on `Accordion`, `Banner`, `DynamicFieldset`, `ListSelector`, `Modal`, `PrimaryNav`, `ResizableBox`, `SecondaryNav` and `Tooltip` (#1428)

* Fix `ref` not being forwarded on several components (#1466)

* A consumer `onKeyUp` on `NumberInput` no longer replaces its arrow keys, and the last `Breadcrumb` item keeps its own `aria-current` (#1431)

## 2.21.0

### New Features

* Add `DateTimeInput`, `TimeInput`, and `TimezoneSelector` in beta (#1415, #1416, #1453, #1458)

* Allow the `Pill` component to accept any content as `children`, the prop `label` becomes deprecated (#1404)

### Bug Fixes

* Allow any ReactNode as `helper` for Field, Fieldset, and FieldBoolean to allow formatted description (#1405)

* Allow `Drawer` to accept Paper's props and a customizable HTML tag for rendering (#1406)

* Add animation to `Drawer` (#1407)

* Fix Tooltip truncation in overflow containers (#1393)

* Style `Typography` as a link when it has an href (#1408)

## 2.20.3

* New icons `EditRole`, `LiveRole` and `Version` (#1390)

## 2.20.2

* Changed DataTable row and cell callbacks to use a stable context object instead of internal table rows, and improved controlled sorting, pagination, and row expansion behavior.

  If you customize DataTable row or cell rendering, update your callbacks to use the new `id`, `data`, `meta`, and `render` fields.

## 2.20.1

* Fix minor styling issues (Button, Typography) (#1381)

## 2.20.0

### New Features

* Add new drawer component (Beta) (#1370)

### Bug Fixes

* Fix context menu repositioning on resize (#1376)

* Fix styling issues due to CSS specificity (#1361)

* Update @floating-ui/react from 0.27.16 to 0.27.19 (#1360)

* Prevent always displaying the warning about OnKeyPress (#1373)

## 2.19.0

### New Features

* Moonstone is now shipped with two CSS bundles: one with global classes (legacy, prone to conflicts) and one with scoped classes (modern, produced from CSS modules). (#1305)

* Protect Moonstone from global styles (and vice-versa). (#1310)

  The new `@jahia/moonstone/scoped.css` CSS file is designed for safe insertion of Moonstone components in foreign contexts (e.g. the editframe).

### Bug Fixes

* Prefixed global CSS variables with `--moon` and kept legacy aliases for existing variable names. (#1307)

  Kept existing variable names as aliases so this change is not breaking, e.g. `--color-accent: var(--moon-color-accent)`.

## 2.18.2

* Prevent hover style on DataTable header

* Fix import of DataTable's subcomponent and utils (#1346)

## 2.18.1

* Improve the typing of `Typography` (#1301)

* Datatable improve component organisation and expose helper functions (#1335)

## 2.18.0

### New Features

* New DataTable component (beta)

* New EmptyData component (#1272)

### Bug Fixes

* Prevent click when MenuItem is disabled (#1323)

* Add an icon to inform the Tag component is removable (#1286)

* Update "Nunito Sans" to its latest version, use a variable distribution to save bandwidth. (#1309)

* Prevent z-index issue with the Collapsible component (#1276)

* Support `children` prop in `<LayoutContent />` component. (#1300)

## 2.17.5

* Republish `@jahia/moonstone` with a correct repository definition. (#1266)

* Reduce the spacing after the thumbnail on CardSelector (#1268)

## 2.17.4

* New `Thumbnail` component. (#1229)

* Support empty `Field` and `Fieldset`. (#1244)
