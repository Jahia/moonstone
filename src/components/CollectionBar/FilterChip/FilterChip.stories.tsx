import { useState } from 'react';
import { within } from 'storybook/test';

import markdownNotes from './FilterChip.md?raw';
import { CollectionBar, FilterChip, Input } from '~/components';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof FilterChip> = {
    title: 'Components/FilterChip',
    component: FilterChip,
    tags: ['beta'],
    parameters: {
        componentSubtitle: 'One filter of a CollectionBar.',
        docs: { description: { component: markdownNotes } },
    },
    args: { filterKey: 'path', label: 'Path' },
};
export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Playground: Story = {
    render: (args) => {
        const [path, setPath] = useState('');
        return (
            <CollectionBar aria-label="Filters">
                <FilterChip {...args} valueLabel={path} onClear={() => setPath('')}>
                    <Input aria-label={args.label} value={path} onChange={e => setPath(e.target.value)} onClear={() => setPath('')}/>
                </FilterChip>
            </CollectionBar>
        );
    },
    // The empty chip takes the focus, so that the visual test captures its look and the focus ring in one screenshot
    play: async ({ canvasElement, args }) => {
        within(canvasElement).getByRole('button', { name: args.label }).focus({ focusVisible: true } as FocusOptions);
    },
};

export const WithAValue: Story = {
    render: (args) => {
        const [path, setPath] = useState('/sites/digitall/home/a-very-long-path/that-ends/with-an-ellipsis-on-the-chip');
        return (
            <CollectionBar aria-label="Filters">
                <FilterChip {...args} valueLabel={path} onClear={() => setPath('')}>
                    <Input aria-label={args.label} value={path} onChange={e => setPath(e.target.value)} onClear={() => setPath('')}/>
                </FilterChip>
            </CollectionBar>
        );
    },
};
