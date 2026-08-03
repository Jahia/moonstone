import preview from '~/__storybook__/preview';
import React from 'react';

import {Input} from './index';
import {Love} from '~/icons';
import {iconArgType} from '~/__storybook__/iconArgType';
import {useArgs} from 'storybook/preview-api';

const meta = preview.meta({
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
        onFocus: {action: 'onFocus'},
        icon: iconArgType
    }
});

export const Uncontrolled = meta.story();

export const Controlled = meta.story({
    render: args => {
        const [, setArgs] = useArgs();

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            args.onChange(e);
            setArgs({value: e.target.value});
        };

        return <Input value="Default value" {...args} onChange={onChange}/>;
    }
});

export const InputWithIcon = meta.story({
    args: {
        icon: <Love/>
    }
});

export const InputWithDefaultValue = meta.story({
    args: {
        defaultValue: 'Default value'
    }
});
