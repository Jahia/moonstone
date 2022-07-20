import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '~/__storybook__/storybook.scss';

// Import markdownNotes from './Input.md';
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
        placeholder: 'Placeholder text',
        defaultValue: 'Default value'
    },
    argTypes: {
        onChange: { action: 'onChange'},
        onClick: { action: 'onClick' },
        onBlur: { action: 'onBlur'},
        onFocus: { action: 'onFocus'}
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
    <section className="storyWrapper">
        <Input {...args}/>
    </section>
);

export const Controlled: ComponentStory<typeof Input> = args => {
    const [value, setValue] = useState('this is the default!');

    return (
        <section className="storyWrapper">
            <Input
                {...args}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </section>
    );
};

Controlled.args = {
    defaultValue: undefined
};

export const Uncontrolled = Template.bind({});

export const Search = Template.bind({});
Search.args = {
    variant: 'search',
    focusOnField: true
};

export const Icon = Template.bind({});
Icon.args = {
    variant: 'search',
    isShowClearButton: true,
    icon: <Love/>
};
