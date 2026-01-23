import React from 'react';
import preview from '../../../../.storybook/preview';
import '~/__storybook__/storybook.scss';
import {NumberInput} from './index';
import {useArgs} from 'storybook/preview-api';

const meta = preview.meta({
    title: 'Components/Input/Numbers',
    component: NumberInput,
    tags: ['new'],
    decorators: [
        StoryCmp => (
            <div style={{width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    }
});

export const UncontrolledNumberInput = meta.story({
    args: {}
});

export const ControlledNumberInput = meta.story({
    args: {
        max: 10,
        min: 1,
        value: '5',
        step: 1
    },
    render: args => {
        const [, setArgs] = useArgs();

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (args.onChange) {
                args.onChange(e);
            }

            setArgs({...args, value: e.target.value});
        };

        return (
            <NumberInput
                onChange={onChange}
                {...args}
            />
        );
    }
});
