import React, {useState} from 'react';
import type {StoryObj, StoryFn} from '@storybook/react';
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
};

export const Uncontrolled: StoryObj<CheckboxItemProps> = {
    render: args => {
        return <CheckboxItem {...args}/>;
    },

    args: {
        label: 'Uncontrolled CheckboxItem'
    }
};

export const Controlled: StoryObj<CheckboxItemProps> = {
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
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
