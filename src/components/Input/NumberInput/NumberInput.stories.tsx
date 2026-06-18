import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';

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

export const UncontrolledNumberInput = meta.story();

export const ControlledNumberInput = meta.story({
    args: {
        max: 10,
        min: 1,
        value: '5',
        step: 1
    },
    render(args) {
        const [, setArgs] = useArgs();

        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            args.onChange?.(e);
            setArgs({value: e.target.value});
        };

        return (
            <NumberInput
                {...args}
                onChange={onChange}
            />
        );
    }
});
