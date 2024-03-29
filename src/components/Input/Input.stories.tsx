import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';

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
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = args => (
    <Input {...args}/>
);

export const Uncontrolled = Template.bind({});

export const Controlled: Story<InputProps> = args => {
    const [inputValue, setInputValue] = useState('Default value');

    return (
        <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            {...args}
        />
    );
};

export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
    icon: <Love/>
};

export const InputWithDefaultValue = Template.bind({});

InputWithDefaultValue.args = {
    defaultValue: 'Default value'
};
