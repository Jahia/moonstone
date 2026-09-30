import React from 'react';
import { useArgs } from 'storybook/preview-api';

import { Textarea } from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    tags: ['new'],
    component: Textarea,
    decorators: [
        StoryCmp => (
            <div style={{ width: '50vw' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    args: {
        placeholder: 'Placeholder text',
    },
    argTypes: {
        onChange: { action: 'onChange' },
        onBlur: { action: 'onBlur' },
        onFocus: { action: 'onFocus' },
    },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Uncontrolled: Story = {};

export const Controlled: Story = {
    render: (args) => {
        const [, setArgs] = useArgs();

        const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            args.onChange(e);
            setArgs({ value: e.target.value });
        };

        return <Textarea value="Default value" {...args} onChange={onChange}/>;
    },
};
