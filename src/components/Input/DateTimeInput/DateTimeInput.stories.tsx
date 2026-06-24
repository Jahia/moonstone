import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Temporal} from 'temporal-polyfill';
import {Button} from '~/components';
import {DateTimeInput} from './DateTimeInput';

// Fixed so the rendered snapshots stay stable across runs (stories double as visual tests).
const baseDate = Temporal.PlainDate.from('2026-03-30');

export default {
    title: 'Components/Input/DateTimeInput',
    component: DateTimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'}
    }
} satisfies Meta<typeof DateTimeInput>;

type Story = StoryObj<typeof DateTimeInput>;

export const DateOnly: Story = {
    args: {
        type: 'date',
        placeholder: 'Select a date',
        // Fixed (not the default "now") so the snapshot stays stable.
        defaultValue: baseDate
    },
    name: 'Date Only'
};

export const DateTimeWithTimezone: Story = {
    args: {
        type: 'zonedDateTime',
        defaultValue: baseDate.toPlainDateTime().toZonedDateTime('Europe/Paris')
    },
    name: 'Date Time With Timezone'
};

export const DateTimeWithTimezone12h: Story = {
    args: {
        type: 'zonedDateTime',
        timeFormat: '12h',
        defaultValue: baseDate.toPlainDateTime(Temporal.PlainTime.from('23:56')).toZonedDateTime('Europe/Paris')
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
    name: 'Disabled Dates'
};

export const Uncontrolled: Story = {
    args: {
        type: 'dateTime',
        defaultValue: '2026-03-30T09:30'
    },
    name: 'Uncontrolled'
};

// Controlled: parent owns the value; the buttons mutate it from outside to show it flows in.
export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState<Temporal.PlainDate | string | null>('2026-03-30');

        return (
            <div>
                <DateTimeInput
                    type="date"
                    placeholder="Select a date"
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
