import { useArgs } from 'storybook/preview-api';

import { NumberInput } from './index';

import type { Meta, StoryObj } from '@storybook/react-vite';

import '~/__storybook__/storybook.scss';

export default {
    title: 'Components/Input/Numbers',
    component: NumberInput,
    tags: ['new'],
    decorators: [
        StoryCmp => (
            <div style={{ width: '50vw' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'centered',
    },
} as Meta<typeof NumberInput>;

type Story = StoryObj<typeof NumberInput>;

export const UncontrolledNumberInput: Story = {
};

export const ControlledNumberInput: Story = {
    args: {
        max: 10,
        min: 1,
        value: '5',
        step: 1,
    },
    render: (args) => {
        const [, setArgs] = useArgs();

        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (args.onChange) {
                args.onChange(e);
            }

            setArgs({ ...args, value: e.target.value });
        };

        return (
            <NumberInput
                onChange={onChange}
                {...args}
            />
        );
    },
};
