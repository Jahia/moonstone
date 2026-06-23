import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {TimeInput} from './TimeInput';
import type {TimeInputProps} from './TimeInput.types';

export default {
    title: 'Components/Input/TimeInput',
    component: TimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    },
    args: {
        defaultValue: '12:30',
        onChange: () => undefined
    }
} satisfies Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;
const logTimeChange: TimeInputProps['onChange'] = (_event, value) => {
    action('onChange')(value);
};

export const Default: Story = {
    render: args => <TimeInput {...args} onChange={logTimeChange}/>,
    args: {
        defaultValue: '12:30',
        onChange: logTimeChange
    },
    name: 'Default'
};

export const TwelveHours: Story = {
    render: args => <TimeInput {...args} onChange={logTimeChange}/>,
    args: {
        timeFormat: '12h',
        defaultValue: '23:56',
        onChange: logTimeChange
    },
    name: 'Twelve Hours'
};
