import { useState } from 'react';

import markdownNotes from './ClearFilters.md?raw';
import { AddFilter, ClearFilters, CollectionBar, FilterChip, Input } from '~/components';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ClearFilters> = {
    title: 'Components/ClearFilters',
    component: ClearFilters,
    tags: ['beta'],
    parameters: {
        componentSubtitle: 'Clears every filter of a CollectionBar.',
        docs: { description: { component: markdownNotes } },
    },
};
export default meta;

type Story = StoryObj<typeof ClearFilters>;

export const Playground: Story = {
    render: (args) => {
        const [user, setUser] = useState('root');
        const [action, setAction] = useState('Published');
        return (
            <CollectionBar aria-label="Filters">
                <FilterChip
                    isAddable
                    filterKey="user"
                    label="User"
                    valueLabel={user}
                    onClear={() => setUser('')}
                >
                    <Input aria-label="User" value={user} onChange={e => setUser(e.target.value)}/>
                </FilterChip>
                <FilterChip
                    isAddable
                    filterKey="action"
                    label="Action"
                    valueLabel={action}
                    onClear={() => setAction('')}
                >
                    <Input aria-label="Action" value={action} onChange={e => setAction(e.target.value)}/>
                </FilterChip>
                <AddFilter/>
                <ClearFilters
                    {...args}
                    onClick={() => {
                        setUser('');
                        setAction('');
                    }}
                />
            </CollectionBar>
        );
    },
};
