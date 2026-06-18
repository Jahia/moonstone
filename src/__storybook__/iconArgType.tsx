import * as iconComponents from '~/icons/components';

const icons = Object.fromEntries(
    Object.entries(iconComponents).map(([name, Icon]) => [name, <Icon key={name}/>])
);

/**
 * Reusable Storybook `argType` for React-element icon props (`icon`, `iconStart`, `iconEnd`…).
 *
 * Renders a clean `<select>` of icon names in the Controls table and maps the selected name
 * to a rendered element via Storybook's `mapping`.
 *
 * Usage:
 * ```jsx
 *   import {iconArgType} from '~/__storybook__/iconArgType';
 *   const meta = { argTypes: { iconStart: iconArgType, iconEnd: iconArgType } };
 * ```
 */
export const iconArgType = {
    options: Object.keys(icons),
    mapping: icons,
    control: {type: 'select' as const}
};
