import type {Meta, StoryObj} from '@storybook/react-vite';
import {Temporal} from 'temporal-polyfill';
import {action} from 'storybook/actions';
import {DateTimeInput} from './DateTimeInput';

export default {
    title: 'Components/Input/DateTimeInput',
    component: DateTimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<typeof DateTimeInput>;

export const DateOnly: Story = {
    render: args => <DateTimeInput {...args} onChange={(_event, nextValue) => action('onChange')(nextValue.date, nextValue.timezone)}/>,
    args: {
        type: 'date',
        placeholder: 'Select a date',
        defaultValue: {date: null}
    },
    name: 'Date Only'
};

export const DateTimeWithTimezone: Story = {
    render: args => <DateTimeInput {...args} onChange={(_event, nextValue) => action('onChange')(nextValue.date, nextValue.timezone)}/>,
    args: {
        hasTimezone: true,
        type: 'datetime',
        defaultValue: {
            date: Temporal.Now.plainDateTimeISO(),
            timezone: 'Europe/Paris'
        }
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    render: args => <DateTimeInput {...args} onChange={(_event, nextValue) => action('onChange')(nextValue.date, nextValue.timezone)}/>,
    args: {
        hasTimezone: true,
        type: 'datetime',
        timeFormat: '12h',
        defaultValue: {
            date: Temporal.Now.plainDateISO().toPlainDateTime(Temporal.PlainTime.from('23:56')),
            timezone: 'Europe/Paris'
        }
    },
    name: 'Date Time With Timezone 12h'
};

export const DisabledDates: Story = {
    render: args => <DateTimeInput {...args} onChange={(_event, nextValue) => action('onChange')(nextValue.date, nextValue.timezone)}/>,
    args: {
        type: 'date',
        minDate: Temporal.PlainDate.from('2026-03-28'),
        maxDate: Temporal.PlainDate.from('2026-04-05'),
        disabledDates: [Temporal.PlainDate.from('2026-03-30')],
        defaultValue: {date: Temporal.PlainDateTime.from('2026-03-30')}
    },
    name: 'Disabled Dates'
};
