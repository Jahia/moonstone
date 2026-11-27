import { useState } from 'react';
import { userEvent, within } from 'storybook/test';

import markdownNotes from './CollectionBar.md?raw';
import { AddFilter, CheckboxGroup, CheckboxItem, ClearFilters, CollectionBar, ColumnChooser, DataTable, FilterChip, Input, SearchInput, Thumbnail, Typography } from '~/components';
import { collectionBarColumns, collectionBarStatuses, filterUsers } from '~/data/collectionBar';
import { dataColumnsUser, tableFlat } from '~/data/dataTable';
import { Person, Publish } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DataUser } from '~/data/dataTable';

const meta: Meta<typeof CollectionBar> = {
    title: 'Components/CollectionBar',
    component: CollectionBar,
    subcomponents: { FilterChip, AddFilter, ClearFilters },
    tags: ['beta'],
    parameters: {
        componentSubtitle: 'The controls that filter and arrange a set of items.',
        docs: { description: { component: markdownNotes } },
    },
};
export default meta;

type Story = StoryObj<typeof CollectionBar>;

// The state and the filtering belong to the consumer: the bar only shows them
const useUserFilters = ({ initialStatuses = [] }: { initialStatuses?: string[] } = {}) => {
    const [statuses, setStatuses] = useState<string[]>(initialStatuses);
    const [name, setName] = useState('');
    const [query, setQuery] = useState('');
    const rows = filterUsers(tableFlat, { statuses, name, query });

    const filters = (
        <>
            <FilterChip
                isAddable
                filterKey="status"
                iconStart={<Publish/>}
                label="Publication status"
                valueLabel={statuses.join(', ')}
                onClear={() => setStatuses([])}
            >
                <CheckboxGroup
                    name="status"
                    onChange={(_event, value, checked) => setStatuses(checked ? [...statuses, value] : statuses.filter(status => status !== value))}
                >
                    {collectionBarStatuses.map(status => (
                        <CheckboxItem checked={statuses.includes(status)} key={status} label={status} value={status}/>
                    ))}
                </CheckboxGroup>
            </FilterChip>
            <FilterChip
                isAddable
                filterKey="name"
                iconStart={<Person/>}
                label="Name"
                valueLabel={name}
                onClear={() => setName('')}
            >
                <Input
                    aria-label="Name"
                    placeholder="Walter"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onClear={() => setName('')}
                />
            </FilterChip>
            <AddFilter/>
            <ClearFilters
                onClick={() => {
                    setStatuses([]);
                    setName('');
                }}
            />
        </>
    );
    const search = <SearchInput aria-label="Search the users" value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')}/>;

    return { rows, filters, search };
};

type UsersTableProps = React.ComponentProps<typeof CollectionBar> & {
    initialStatuses?: string[];
};

const UsersTable = ({ initialStatuses, ...args }: UsersTableProps) => {
    const { rows, filters, search } = useUserFilters({ initialStatuses });
    const [columns, setColumns] = useState(['firstName', 'status', 'date']);

    return (
        <>
            <CollectionBar
                aria-label="User filters"
                {...args}
                end={(
                    <>
                        {search}
                        <ColumnChooser columns={collectionBarColumns} value={columns} onChange={setColumns}/>
                    </>
                )}
            >
                {filters}
            </CollectionBar>
            <DataTable
                columns={columns.map(key => dataColumnsUser.find(column => column.key === key))}
                data={rows as DataUser[]}
                primaryKey="id"
            />
        </>
    );
};

export const AboveADataTable: Story = {
    render: args => <UsersTable {...args}/>,
};

export const AboveThumbnails: Story = {
    render: (args) => {
        const { rows, filters, search } = useUserFilters();

        return (
            <>
                <CollectionBar aria-label="User filters" {...args} end={search}>
                    {filters}
                </CollectionBar>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--moon-spacing-medium)' }}>
                    {rows.map(row => (
                        <div key={row.id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--moon-spacing-small)', width: 120 }}>
                            <Thumbnail alt="" src={<Person/>} variant="icon"/>
                            <Typography isNowrap variant="caption">{row.firstName}</Typography>
                        </div>
                    ))}
                </div>
            </>
        );
    },
};

export const WithoutFilters: Story = {
    render: (args) => {
        const [query, setQuery] = useState('');
        const [columns, setColumns] = useState(['firstName', 'status', 'date']);
        const rows = filterUsers(tableFlat, {
            statuses: [],
            name: '',
            query,
        });

        return (
            <>
                <CollectionBar
                    aria-label="User filters"
                    {...args}
                    end={(
                        <>
                            <SearchInput aria-label="Search the users" value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')}/>
                            <ColumnChooser columns={collectionBarColumns} value={columns} onChange={setColumns}/>
                        </>
                    )}
                />
                <DataTable
                    columns={columns.map(key => dataColumnsUser.find(column => column.key === key))}
                    data={rows as DataUser[]}
                    primaryKey="id"
                />
            </>
        );
    },
};

// The stories below open a popup with a play function, so that the axe pass and the visual test cover it
export const OpenFilter: Story = {
    render: args => <UsersTable {...args} initialStatuses={['published']}/>,
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Publication status: published' }));
        await within(canvasElement.ownerDocument.body).findByRole('dialog', { name: 'Publication status' });
    },
};

export const OpenAddFilter: Story = {
    render: args => <UsersTable {...args}/>,
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Add filter' }));
        await within(canvasElement.ownerDocument.body).findByLabelText('Add filter', { selector: 'menu' });
    },
};

export const OpenColumnChooser: Story = {
    render: args => <UsersTable {...args}/>,
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Choose the columns' }));
        await within(canvasElement.ownerDocument.body).findByRole('dialog', { name: 'Choose the columns' });
    },
};
