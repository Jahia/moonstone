import React, {useState} from 'react';
import {StoryObj, Meta, StoryFn} from '@storybook/react';

import {Input} from './index';
import type {InputProps} from './Input.types';
import {Love} from '~/icons';

export default {
    title: 'Components/Input',
    component: Input,
    decorators: [
        StoryCmp => (
            <div style={{width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    args: {
        placeholder: 'Placeholder text'
    },
    argTypes: {
        onChange: {action: 'onChange'},
        onClick: {action: 'onClick'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
} as Meta<typeof Input>;

export const Uncontrolled = {};

export const Controlled: StoryObj<InputProps> = {
    render: args => {
        const [inputValue, setInputValue] = useState('Default value');

        return (
            <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        {...args}
      />
        );
    }
};

export const InputWithIcon = {
    args: {
        icon: <Love/>
    }
};

export const InputWithDefaultValue = {
    args: {
        defaultValue: 'Default value'
    }
};
