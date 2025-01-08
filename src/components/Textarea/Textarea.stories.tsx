import React, {useState} from 'react';
import {StoryObj, Meta} from '@storybook/react';

import {Textarea} from './index';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    tags: ['new'],
    component: Textarea,
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
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Uncontrolled: Story = {};

export const Controlled: Story = {

    render: args => {
        const [textareaValue, setTextareaValue] = useState('Default value');

        return (
            <Textarea
                value={textareaValue}
                onChange={e => setTextareaValue(e.target.value)}
                {...args}
            />
        );
    }
};
