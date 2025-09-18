import {StoryObj, Meta} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {NumberInput} from './index';
import {useArgs} from '@storybook/preview-api';

export default {
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
} as Meta<typeof NumberInput>;

type Story = StoryObj<typeof NumberInput>;

export const UncontrolledNumberInput: Story = {
    args: {
        allowNegative: false
    }
};

export const ControlledNumberInput: Story = {
    args: {
        max: 10,
        min: -5,
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
};
