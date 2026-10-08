import * as iconComponents from '~/icons/components';

/** Every icon, by name: what the icon select of `iconArgType` turns its name into. */
export const iconElements: Record<string, React.ReactElement> = Object.fromEntries(
    Object.entries(iconComponents)
        // Only the icon components (PascalCase exports)
        .filter(([name]) => /^[A-Z]/.test(name))
        .map(([name, Icon]) => [name, <Icon key={name}/>]),
);

/**
 * Reusable Storybook `argType` for React-element icon props (`icon`, `iconStart`, `iconEnd`…).
 *
 * Renders a clean `<select>` of icon names in the Controls table. The arg holds the name, and a
 * global decorator (`.storybook/preview.jsx`) renders it as the icon. It is not a Storybook
 * `mapping`: the Docs page's Controls would then read the icon element and show no selection.
 * `.storybook/preview.jsx` applies it to every icon prop, so stories don't need to.
 *
 * Usage, only for an icon prop whose name `.storybook/preview.jsx` doesn't recognize:
 * ```jsx
 *   import {iconArgType} from '~/__storybook__/iconArgType';
 *   const meta = { argTypes: { iconStart: iconArgType, iconEnd: iconArgType } };
 * ```
 */
export const iconArgType = {
    options: Object.keys(iconElements),
    control: { type: 'select' as const },
    isIcon: true,
};
