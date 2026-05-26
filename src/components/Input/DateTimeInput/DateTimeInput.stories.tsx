import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {useArgs} from 'storybook/preview-api';
import {DateTimeInput} from './DateTimeInput';
import {getCurrentDate} from '../shared';

const currentDate = getCurrentDate();
const dateTimeInputI18n = {
    todayButton: 'Today',
    hours: 'Hours',
    minutes: 'Minutes'
};

export default {
    title: 'Components/Input/DateTimeInput',
    component: DateTimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    },
    args: {
        i18n: dateTimeInputI18n
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<typeof DateTimeInput>;

export const DateOnly: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        const {i18n, value: currentValue} = args;

        return (
            <DateTimeInput
                type="date"
                i18n={i18n}
                placeholder="Select a date"
                value={currentValue}
                onChange={(_event, nextValue) => {
                    action('onChange')(nextValue.date, nextValue.timezone);
                    setArgs({value: nextValue});
                }}
            />
        );
    },
    args: {
        value: {date: null}
    },
    name: 'Date Only'
};

export const DateTimeWithTimezone: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        const {i18n, value: currentValue} = args;

        return (
            <DateTimeInput
                hasTimezone
                type="datetime"
                i18n={i18n}
                value={currentValue}
                onChange={(_event, nextValue) => {
                    action('onChange')(nextValue.date, nextValue.timezone);
                    setArgs({value: nextValue});
                }}
            />
        );
    },
    args: {
        value: {
            date: new Date(),
            timezone: 'Europe/Paris'
        }
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        const {i18n, value: currentValue} = args;

        return (
            <DateTimeInput
                hasTimezone
                type="datetime"
                timeFormat="12h"
                i18n={i18n}
                value={currentValue}
                onChange={(_event, nextValue) => {
                    action('onChange')(nextValue.date, nextValue.timezone);
                    setArgs({value: nextValue});
                }}
            />
        );
    },
    args: {
        value: {
            date: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 56),
            timezone: 'Europe/Paris'
        }
    },
    name: 'Date Time With Timezone 12h'
};

export const DisabledDates: Story = {
    render: args => {
        const [, setArgs] = useArgs();
        const {i18n, value: currentValue} = args;

        return (
            <DateTimeInput
                type="date"
                i18n={i18n}
                minDate={new Date(2026, 2, 28)}
                maxDate={new Date(2026, 3, 5)}
                disabledDates={[new Date(2026, 2, 30)]}
                value={currentValue}
                onChange={(_event, nextValue) => {
                    action('onChange')(nextValue.date, nextValue.timezone);
                    setArgs({value: nextValue});
                }}
            />
        );
    },
    args: {
        value: {date: new Date(2026, 2, 30)}
    },
    name: 'Disabled Dates'
};
