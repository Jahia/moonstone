import { userEvent, within } from 'storybook/test';

import { TimezoneSelector } from './TimezoneSelector';
import markdownNotes from './TimezoneSelector.md?raw';

import type { Meta, StoryObj } from '@storybook/react-vite';

// Fixed reference date so the displayed UTC offsets stay stable across runs (stories double
// as visual snapshots); with this anchor Paris reads +01:00. Naming convention: `baseDate`.
const baseDate = '2026-01-15';

export default {
    title: 'Components/TimezoneSelector',
    component: TimezoneSelector,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on.*' },
        componentSubtitle: 'Lets the user pick a standalone IANA timezone.',
        docs: { description: { component: markdownNotes } },
    },
} satisfies Meta<typeof TimezoneSelector>;

type Story = StoryObj<typeof TimezoneSelector>;

export const Default: Story = {
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('listbox'));
        await within(document.body).findByRole('list');
    },
    args: {
        defaultValue: 'Europe/Paris',
        referenceDate: baseDate,
    },
    name: 'Default',
};
