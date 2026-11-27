import { useState } from 'react';

import markdownNotes from './AddFilter.md?raw';
import { AddFilter, CollectionBar, FilterChip, Input } from '~/components';
import { Person } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof AddFilter> = {
    title: 'Components/AddFilter',
    component: AddFilter,
    tags: ['beta'],
    parameters: {
        componentSubtitle: 'Adds the optional filters of a CollectionBar.',
        docs: { description: { component: markdownNotes } },
    },
};
export default meta;

type Story = StoryObj<typeof AddFilter>;

export const Playground: Story = {
    render: (args) => {
        const [user, setUser] = useState('');
        const [action, setAction] = useState('');
        return (
            <CollectionBar aria-label="Filters">
                <FilterChip
                    isAddable
                    filterKey="user"
                    iconStart={<Person/>}
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
                <AddFilter {...args}/>
            </CollectionBar>
        );
    },
};
