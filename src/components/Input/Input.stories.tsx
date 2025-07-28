import React from 'react';
import {StoryObj, Meta} from '@storybook/react-vite';

import {Input} from './index';
import {Love} from '~/icons';
import {useArgs} from 'storybook/preview-api';

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

type Story = StoryObj<typeof Input>;

export const Uncontrolled: Story = {};

export const Controlled: Story = {
    render: args => {
        const [, setArgs] = useArgs();

        const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            args.onChange(e);
            setArgs({value: e.target.value});
        };

        return <Input value="Default value" {...args} onChange={onChange}/>;
    }
};

export const InputWithIcon: Story = {
    args: {
        icon: <Love/>
    }
};

export const InputWithDefaultValue: Story = {
    args: {
        defaultValue: 'Default value'
    }
};
