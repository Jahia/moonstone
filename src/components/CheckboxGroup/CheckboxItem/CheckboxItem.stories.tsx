/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useArgs} from '@storybook/preview-api';
import type {StoryObj, Meta} from '@storybook/react';
import type {CheckboxItemProps} from './CheckboxItem.types';

import {CheckboxItem} from './CheckboxItem';

export default {
    title: 'Components/CheckboxGroup/CheckboxItem',
    component: CheckboxItem,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true}
    },
    argTypes: {
    // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
    // OnChange: {action: 'onChange'},
        onClick: {action: 'onClick'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
} as Meta<typeof CheckboxItem>;

export const Uncontrolled: StoryObj<CheckboxItemProps> = {
    render: args => {
        return <CheckboxItem {...args}/>;
    },

    args: {
        label: 'Uncontrolled CheckboxItem'
    }
};

type Story = StoryObj<typeof CheckboxItem>;
export const Controlled: Story = {
    render: (args:CheckboxItemProps) => {
        const [{checked}, updateArgs] = useArgs();

        const handleOnChange = () => {
            updateArgs({isChecked: !checked});
        };

        return (
            <CheckboxItem
        checked={checked}
        onChange={() => handleOnChange()}
        {...args}
      />
        );
    },

    args: {
        label: 'Controlled CheckboxItem'
    }
};

export const Playground: StoryObj<CheckboxItemProps> = {
    render: args => {
        return <CheckboxItem {...args}/>;
    },

    args: {
        id: 'playground-item',
        label: 'Play with me',
        description: 'Use the storybook controls to update this element',
        value: 'playground-value'
    }
};
