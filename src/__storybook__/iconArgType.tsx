import React from 'react';
import * as iconComponents from '~/icons/components';

/**
 * Reusable Storybook argType for React-element icon props (`icon`, `iconStart`, `iconEnd`…).
 *
 * Renders a clean `<select>` of icon names in the Controls table and maps the selected name
 * to a rendered element via Storybook's `mapping` — instead of dumping serialized element
 * source into the Control column. Because `mapping` resolves the value before `render`, the
 * component receives a real element with no per-story conversion needed.
 *
 * Usage:
 *   import {iconArgType} from '~/__storybook__/iconArgType';
 *   const meta = { argTypes: { icon: iconArgType, iconEnd: iconArgType } };
 *   // set a default in story args by NAME: args: { icon: 'Love' }
 */
const icons = iconComponents as Record<string, React.ComponentType>;
const iconNames = Object.keys(icons);

export const iconArgType = {
    options: ['none', ...iconNames],
    mapping: {
        none: undefined,
        ...Object.fromEntries(iconNames.map(name => [name, React.createElement(icons[name])]))
    },
    control: {type: 'select' as const}
};
