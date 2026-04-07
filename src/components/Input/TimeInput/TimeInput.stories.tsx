import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {useArgs} from 'storybook/preview-api';
import {TimeInput} from './TimeInput';
import type {TimeInputProps} from './TimeInput.types';
import {getCurrentTimeString} from '../shared';

const currentTime = getCurrentTimeString();

export default {
    title: 'Components/Input/TimeInput',
    component: TimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    },
    args: {
        value: currentTime,
        i18n: {
            hours: 'Hours',
            minutes: 'Minutes',
            meridiem: 'Meridiem'
        },
        onChange: () => undefined
    }
} satisfies Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;
const logTimeChange: TimeInputProps['onChange'] = (_event, value) => {
    action('onChange')(value);
};

export const Default: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <TimeInput
                {...args}
                onChange={(event, value) => {
                    logTimeChange(event, value);
                    setArgs({value});
                }}
            />
        );
    },
    args: {
        value: currentTime,
        onChange: logTimeChange
    },
    name: 'Default'
};

export const TwelveHours: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <TimeInput
                timeFormat="12h"
                {...args}
                onChange={(event, value) => {
                    logTimeChange(event, value);
                    setArgs({value});
                }}
            />
        );
    },
    args: {
        timeFormat: '12h',
        value: '23:56',
        onChange: logTimeChange
    },
    name: 'Twelve Hours'
};
