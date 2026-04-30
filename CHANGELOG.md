# @jahia/moonstone Changelog

## 2.19.0

### New Features

* Moonstone is now shipped with two CSS bundles: one with global classes (legacy, prone to conflicts) and one with scoped classes (modern, produced from CSS modules). (#1305)

* Protect Moonstone from global styles (and vice-versa). (#1310)

  The new `@jahia/moonstone/scoped` entrypoint is designed for safe insertion of Moonstone components in foreign contexts (e.g. the editframe).

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
