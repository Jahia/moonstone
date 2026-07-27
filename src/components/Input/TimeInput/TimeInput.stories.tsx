import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Temporal} from 'temporal-polyfill';
import {Button} from '~/components';
import {TimeInput} from './TimeInput';
import markdownNotes from './TimeInput.md';

export default {
    title: 'Components/Input/TimeInput',
    component: TimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        notes: {markdown: markdownNotes}
    }
} satisfies Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
    args: {
        defaultValue: '12:30'
    },
    name: 'Default'
};

export const TwelveHours: Story = {
    args: {
        timeFormat: '12h',
        defaultValue: '23:56'
    },
    name: 'Twelve Hours'
};

export const Empty: Story = {
    args: {
        defaultValue: null,
        placeholder: 'HH:MM'
    },
    name: 'Empty'
};

// Controlled: the parent owns the value. The entry commits on blur, completed to a valid
// time (type "9" then blur → 09:00); the buttons set it from outside.
export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState<Temporal.PlainTime | string | null>(null);

        return (
            <div>
                <TimeInput value={value} onChange={(_event, nextValue) => setValue(nextValue)}/>
                <div>
                    <Button variant="ghost" label="Set 14:30" onClick={() => setValue('14:30')}/>
                    <Button variant="ghost" label="Clear" onClick={() => setValue(null)}/>
                </div>
                <code>value = {value === null ? 'null' : value.toString()}</code>
            </div>
        );
    },
    name: 'Controlled'
};
