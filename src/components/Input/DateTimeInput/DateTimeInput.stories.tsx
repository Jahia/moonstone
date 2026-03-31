import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {useArgs} from 'storybook/preview-api';
import {DateTimeInput} from './DateTimeInput';
import type {ControlledDateTimeInputProps} from './DateTimeInput.types';
import {getCurrentDateString, getCurrentTimeString} from '../shared/dateTime.utils';

const currentDate = getCurrentDateString();
const currentTime = getCurrentTimeString();

export default {
    title: 'Components/Input/DateTimeInput',
    component: DateTimeInput,
    tags: ['beta'],
    //     StoryCmp => (
    //         <div style={{width: '720px'}}>
    //             <StoryCmp/>
    //         </div>
    //     )
    // ],
    parameters: {
        layout: 'centered'
    },
    args: {
        labels: {
            today: 'Today',
            hours: 'Hours',
            minutes: 'Minutes',
            meridiem: 'Meridiem',
            timezone: 'Timezone'
        }
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<ControlledDateTimeInputProps>;

const allowedTimezones = [
    'UTC',
    'Europe/Paris',
    'America/Toronto',
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Australia/Sydney',
    'Pacific/Auckland'
];

export const DateOnly: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                {...args}
                onChange={(_event, change) => {
                    action('onChange')(change.value.date, change.value.time, change.value.timezone);
                    setArgs({value: change.value});
                }}
            />
        );
    },
    args: {
        type: 'date',
        value: {
            date: null,
            time: null,
            timezone: null
        },
        onChange: action('onChange'),
        placeholder: 'Select a date'
    },
    name: 'Date Only'
};

export const DateTimeWithTimezone: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                hasTimezone
                type="datetime"
                allowedTimezones={allowedTimezones}
                {...args}
                onChange={(_event, change) => {
                    action('onChange')(change.value.date, change.value.time, change.value.timezone);
                    setArgs({value: change.value});
                }}
            />
        );
    },
    args: {
        type: 'datetime',
        hasTimezone: true,
        value: {
            date: currentDate,
            time: currentTime,
            timezone: 'Europe/Paris'
        },
        allowedTimezones,
        onChange: action('onChange')
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                hasTimezone
                type="datetime"
                timeFormat="12h"
                allowedTimezones={allowedTimezones}
                {...args}
                onChange={(_event, change) => {
                    action('onChange')(change.value.date, change.value.time, change.value.timezone);
                    setArgs({value: change.value});
                }}
            />
        );
    },
    args: {
        type: 'datetime',
        hasTimezone: true,
        timeFormat: '12h',
        value: {
            date: currentDate,
            time: '23:56',
            timezone: 'Europe/Paris'
        },
        allowedTimezones,
        onChange: action('onChange')
    },
    name: 'Date Time With Timezone 12h'
};

export const TimeOnly: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                type="time"
                timeFormat="24h"
                {...args}
                onChange={(_event, change) => {
                    action('onChange')(change.value.date, change.value.time, change.value.timezone);
                    setArgs({value: change.value});
                }}
            />
        );
    },
    args: {
        type: 'time',
        timeFormat: '24h',
        value: {
            time: currentTime
        },
        onChange: action('onChange')
    },
    name: 'Time Only'
};

export const DisabledDates: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                type="date"
                minDate={new Date(2026, 2, 28)}
                maxDate={new Date(2026, 3, 5)}
                disabledDates={[new Date(2026, 2, 30)]}
                {...args}
                onChange={(_event, change) => {
                    action('onChange')(change.value.date, change.value.time, change.value.timezone);
                    setArgs({value: change.value});
                }}
            />
        );
    },
    args: {
        type: 'date',
        value: {
            date: '2026-03-30'
        },
        minDate: new Date(2026, 2, 28),
        maxDate: new Date(2026, 3, 5),
        disabledDates: [new Date(2026, 2, 30)],
        onChange: action('onChange')
    },
    name: 'Disabled Dates'
};
