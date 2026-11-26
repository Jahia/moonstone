import { useState } from 'react';
import { userEvent, within } from 'storybook/test';

import { TimeInput } from './TimeInput';
import markdownNotes from './TimeInput.md?raw';
import { Button } from '~/components';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Temporal } from 'temporal-polyfill';

export default {
    title: 'Components/TimeInput',
    component: TimeInput,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'A time of day to capture.',
        docs: { description: { component: markdownNotes } },
    },
} satisfies Meta<typeof TimeInput>;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
    args: {
        defaultValue: '12:30',
    },
    name: 'Default',
};

export const TwelveHours: Story = {
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('listbox', { name: /^AM\/PM/ }));
        await within(document.body).findByRole('list');
    },
    args: {
        timeFormat: '12h',
        defaultValue: '23:56',
    },
    name: 'Twelve Hours',
};

export const Empty: Story = {
    args: {
        defaultValue: null,
    },
    name: 'Empty',
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
                    <Button label="Set 14:30" variant="ghost" onClick={() => setValue('14:30')}/>
                    <Button label="Clear" variant="ghost" onClick={() => setValue(null)}/>
                </div>
                <code>value = {value === null ? 'null' : value.toString()}</code>
            </div>
        );
    },
    name: 'Controlled',
};
