import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {useArgs} from 'storybook/preview-api';
import {DateTimeInput} from './DateTimeInput';
import {getCurrentDateString, getCurrentTimeString} from '../shared';

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
        i18n: {
            today: 'Today',
            hours: 'Hours',
            minutes: 'Minutes'
        }
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<typeof DateTimeInput>;

export const DateOnly: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                placeholder="Select a date"
                {...args}
                onChange={(_event, value) => {
                    action('onChange')(value.date, value.time, value.timezone);
                    setArgs({value});
                }}
            />
        );
    },
    args: {
        type: 'date',
        value: {
            date: null
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
                {...args}
                onChange={(_event, value) => {
                    action('onChange')(value.date, value.time, value.timezone);
                    setArgs({value});
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
        onChange: action('onChange')
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                {...args}
                onChange={(_event, value) => {
                    action('onChange')(value.date, value.time, value.timezone);
                    setArgs({value});
                }}
            />
        );
    },
    args: {
        hasTimezone: true,
        timeFormat: '12h',
        value: {
            date: currentDate,
            time: '23:56',
            timezone: 'Europe/Paris'
        },
        onChange: action('onChange')
    },
    name: 'Date Time With Timezone 12h'
};

export const DisabledDates: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        return (
            <DateTimeInput
                minDate={new Date(2026, 2, 28)}
                maxDate={new Date(2026, 3, 5)}
                disabledDates={[new Date(2026, 2, 30)]}
                {...args}
                onChange={(_event, value) => {
                    action('onChange')(value.date, value.time, value.timezone);
                    setArgs({value});
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
