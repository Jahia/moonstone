import {StoryObj, Meta} from '@storybook/react-vite';

import {CheckboxGroup} from './index';
import type {CheckboxGroupProps} from './CheckboxGroup.types';
import {CheckboxItem} from './CheckboxItem';

const meta: Meta<typeof CheckboxGroup> = {
    title: 'Components/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

const Template = (args: CheckboxGroupProps) => {
    return (
        <CheckboxGroup {...args}>
            <CheckboxItem id="cat" label="Cat" description="Miaouw" value="cat"/>
            <CheckboxItem id="dog" label="Dog" description="Ouah-ouah" value="dog"/>
            <CheckboxItem
                isDisabled
                id="horse"
                label="Horse"
                description="Disabled element"
                value="horse"
            />
            <CheckboxItem id="bird" label="Bird without description" value="bird"/>
        </CheckboxGroup>
    );
};

export const Default: Story = {
    render: Template,

    args: {
        name: 'default'
    }
};

export const Disabled: Story = {
    render: Template,

    args: {
        name: 'disabled',
        isDisabled: true
    }
};
