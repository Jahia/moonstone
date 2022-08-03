import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {Input} from './index';
import {Love} from '~/icons';

export default {
    title: 'Components/Input',
    component: Input,
    layout: 'centered',
    parameters: {
        knobs: {disable: true}
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

const Template: ComponentStory<typeof Input> = args => (
    <section className="storyWrapper">
        <Input {...args}/>
    </section>
);

export const Uncontrolled = Template.bind({});

export const Controlled: ComponentStory<typeof Input> = args => {
    const [inputValue, setInputValue] = useState('Default value');

    return (
        <section className="storyWrapper">
            <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                {...args}
            />
        </section>
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
