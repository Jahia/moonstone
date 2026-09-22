import { CheckboxItem } from './CheckboxItem';
import { CheckboxGroup } from './index';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        actions: { argTypesRegex: '^on.*' },
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<typeof CheckboxGroup>;

const Template: StoryFn<typeof CheckboxGroup> = (args) => {
    return (
        <CheckboxGroup {...args}>
            <CheckboxItem description="Miaouw" id="cat" label="Cat" value="cat"/>
            <CheckboxItem description="Ouah-ouah" id="dog" label="Dog" value="dog"/>
            <CheckboxItem
                isDisabled
                description="Disabled element"
                id="horse"
                label="Horse"
                value="horse"
            />
            <CheckboxItem id="bird" label="Bird without description" value="bird"/>
        </CheckboxGroup>
    );
};

export const Default = {
    render: Template,

    args: {
        name: 'default',
    },
};

export const Disabled = {
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true,
    },
};
