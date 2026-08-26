import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {userEvent, within} from 'storybook/test';
import {Temporal} from 'temporal-polyfill';
import {Button} from '~/components';
import {DateTimeInput} from './DateTimeInput';
import markdownNotes from './DateTimeInput.md';

// Fixed so the rendered snapshots stay stable across runs (stories double as visual tests).
const baseDate = Temporal.PlainDate.from('2026-03-30');

export default {
    title: 'Components/Input/DateTimeInput',
    component: DateTimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    },
    args: {
        'data-testid': 'dateTimeInput',
        locale: 'en',
        defaultValue: baseDate, // Fixed (not the default "now") so the snapshot stays stable.
        timeInputProps: {
            'data-testid': 'timeInput'
        },
        timezoneSelectorProps: {
            'data-testid': 'timezoneSelector'
        }
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<typeof DateTimeInput>;

export const DateOnly: Story = {
    args: {
        type: 'date'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('dateTimeInput'));
        // Wait until the calendar is rendered before the screenshot is taken
        canvas.getByTestId('calendar');
    },
    name: 'Date Only'
};

// `dateFormat` fixes the input order (US month-first); `locale` independently keeps the
// calendar text French — without it, French would default to day-first (`30/03/2026`).
export const CustomDateFormat: Story = {
    args: {
        type: 'date',
        locale: 'fr',
        dateFormat: 'MM/dd/yyyy',
        i18n: {
            todayButton: 'Aujourd\'hui',
            nextMonth: 'Mois suivant',
            previousMonth: 'Mois précédent'
        }
    },
    name: 'Custom Date Format'
};

export const MonthDropdown: Story = {
    args: {
        type: 'date',
        isShowMonthDropdown: true
    },
    name: 'Month Dropdown'
};

export const DateTimeWithTimezone: Story = {
    args: {
        type: 'zonedDateTime',
        defaultValue: baseDate.toPlainDateTime().toZonedDateTime('Europe/Paris'),
        size: 'big',
        locale: 'fr',
        i18n: {
            todayButton: 'Aujourd\'hui',
            nextMonth: 'Mois suivant',
            previousMonth: 'Mois précédent'
        }
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('dateTimeInput'));
        // Wait until the calendar is rendered before the screenshot is taken
        canvas.getByTestId('calendar');
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    args: {
        type: 'zonedDateTime',
        timeFormat: '12h',
        defaultValue: baseDate.toPlainDateTime(Temporal.PlainTime.from('23:56')).toZonedDateTime('Europe/Paris')
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('dateTimeInput'));
        // Wait until the calendar is rendered before the screenshot is taken
        canvas.getByTestId('calendar');
    },
    name: 'Date Time With Timezone 12h'
};

export const DisabledDates: Story = {
    args: {
        type: 'date',
        minDate: '2026-03-28',
        maxDate: '2026-04-05',
        disabledDates: ['2026-03-30'],
        defaultValue: '2026-03-30'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('dateTimeInput'));
        // Wait until the calendar is rendered before the screenshot is taken
        canvas.getByTestId('calendar');
    },
    name: 'Disabled Dates'
};

export const DisabledWeekends: Story = {
    args: {
        type: 'date',
        disabledDaysOfWeek: [0, 6],
        locale: 'fr'
    },
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByTestId('dateTimeInput'));
        // Wait until the calendar is rendered before the screenshot is taken
        canvas.getByTestId('calendar');
    },
    name: 'Disabled Weekends'
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState<Temporal.PlainDate | string | null>('2026-03-30');

        return (
            <div>
                <DateTimeInput
                    type="date"
                    placeholder="Select a date"
                    locale="en"
                    value={value}
                    onChange={(_event, nextValue) => setValue(nextValue)}
                />
                <div>
                    <Button variant="ghost" label="Set to 2026-01-01" onClick={() => setValue('2026-01-01')}/>
                    <Button variant="ghost" label="Clear" onClick={() => setValue(null)}/>
                </div>
                <code>value = {value === null ? 'null' : value.toString()}</code>
            </div>
        );
    },
    name: 'Controlled'
};
