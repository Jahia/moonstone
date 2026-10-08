# Setup

## Install

```sh
yarn add @jahia/moonstone
```

Peer dependencies: `react` and `react-dom` (^18.3.1), and `react-table` (^7.8.0).

In a Jahia UI extension built with `@jahia/vite-federation-plugin`, declare `@jahia/moonstone` in `dependencies`
(not `peerDependencies`): the extension bundles its own copy.

## Import components

Every component, layout and icon is a named export of the package root:

```jsx
import {Button, Typography, Edit} from '@jahia/moonstone';
```

`DataTable` is also available from its own entry point, `@jahia/moonstone/DataTable`.

## Styles

There are two ways to get Moonstone's CSS:

- Import anything from `@jahia/moonstone` and let your bundler include the CSS. The classes are global.
- Import `@jahia/moonstone/scoped.css` to get classes with a CSS module hash. Use it to insert Moonstone
  components in a page that has its own styles (e.g. the edit frame), so neither side breaks the other.

The `GlobalStyle` component is deprecated and renders nothing: do not add it.

The Nunito Sans font is embedded, there is nothing to load.

## Styling your own elements

Style your own elements with the design tokens (see [tokens](tokens.md)), never with raw colors or pixel values:

```css
.toolbar {
    padding: var(--moon-spacing-small);
    color: var(--moon-color-gray_dark);
}
```

Before writing a custom element, check the [component index](../README.md): Moonstone probably has it.

## Dates and times

`DateTimeInput` and `TimeInput` use `Temporal` values. Moonstone re-exports `Temporal`, import it from
`@jahia/moonstone` instead of installing a polyfill:

```jsx
import {Temporal} from '@jahia/moonstone';
```
