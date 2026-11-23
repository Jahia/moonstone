import markdownNotes from './CheckboxGroup.md?raw';
import { CheckboxItem } from './CheckboxItem';
import { CheckboxGroup } from './index';

import type { CheckboxGroupProps } from './CheckboxGroup.types';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        knobs: { disable: true },
        storysource: { disable: true },
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'Lets the user select any number of options.',
        docs: { description: { component: markdownNotes } },
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

export const States: StoryObj<CheckboxGroupProps> = {
    render: args => (
        <div style={{ display: 'grid', gap: '24px', padding: '8px' }}>
            <CheckboxGroup {...args} aria-label="Enabled" name="enabled">
                <CheckboxItem label="Rest" value="rest"/>
                <CheckboxItem id="hover" label="Hover" value="hover"/>
                <CheckboxItem defaultChecked label="Checked" value="checked"/>
                <CheckboxItem defaultChecked id="checked-hover" label="Checked and hover" value="checked-hover"/>
            </CheckboxGroup>
            <CheckboxGroup {...args} isDisabled aria-label="Disabled" name="disabled">
                <CheckboxItem label="Disabled" value="disabled"/>
                <CheckboxItem defaultChecked label="Checked and disabled" value="disabled-checked"/>
            </CheckboxGroup>
            <CheckboxGroup {...args} isReadOnly aria-label="Read-only" name="read-only">
                <CheckboxItem label="Read-only" value="read-only"/>
                <CheckboxItem id="read-only-focus-visible" label="Read-only and focus" value="read-only-focus"/>
            </CheckboxGroup>
        </div>
    ),

    parameters: {
        pseudo: {
            hover: ['#hover', '#checked-hover'],
            focusVisible: '#read-only-focus-visible',
        },
    },
};
