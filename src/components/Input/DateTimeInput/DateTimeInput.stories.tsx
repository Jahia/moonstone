import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {DateTimeInput} from './DateTimeInput';
import {getCurrentDate} from '../shared';

const currentDate = getCurrentDate();

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
            date: new Date(),
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
            date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 56),
            timezone: 'Europe/Paris'
        }
    },
    name: 'Date Time With Timezone 12h'
};

export const DisabledDates: Story = {
    render: args => <DateTimeInput {...args} onChange={(_event, nextValue) => action('onChange')(nextValue.date, nextValue.timezone)}/>,
    args: {
        type: 'date',
        minDate: new Date(2026, 2, 28),
        maxDate: new Date(2026, 3, 5),
        disabledDates: [new Date(2026, 2, 30)],
        defaultValue: {date: new Date(2026, 2, 30)}
    },
    name: 'Disabled Dates'
};
