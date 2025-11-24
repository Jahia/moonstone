import {TableData} from './data/TableData';
import {userColumns} from './UserColumn';
import {MoonstoneTable} from './DataTable';
import type {Meta, StoryObj} from '@storybook/react';
import type {UserDataRowProps} from './types/UserDataRow.types';
import {useState} from 'react';

export default {
    title: 'Components/TableData',
    component: MoonstoneTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true}
    },
    argTypes: {
        onChangeSelection: {action: 'onChangeSelection'}
    }
} satisfies Meta<typeof MoonstoneTable>;

type Story = StoryObj<typeof MoonstoneTable>;

export const EmptyDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={[]}
            columns={userColumns}
        />
    ),
    name: 'EmptyDataTable'
};

export const MoonstoneDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={TableData}
            columns={userColumns}
        />
    ),
    name: 'DataTable'
};

export const StructuredViewDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={TableData}
            columns={userColumns}
        />
    ),
    args: {
        isStructured: true
    },
    name: 'Structured View'
};

export const SelectableDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={TableData}
            columns={userColumns}
        />
    ),
    args: {
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const SelectableStructuredDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={TableData}
            columns={userColumns}
        />
    ),
    args: {
        enableSelection: true,
        isStructured: true
    },
    name: 'Selectable and structured table view'
};

export const DefaultSelectionDataTable: Story = {
    render: args => (
        <MoonstoneTable
            {...args}
            sortBy={args.sortBy as keyof UserDataRowProps}
            data={TableData}
            columns={userColumns}
        />
    ),
    args: {
        enableSelection: true,
        defaultSelection: ['0', '2', '4']
    },
    name: 'Default Selection'
};

export const SortableDataTable: Story = {
    render: args => {
        const [sortBy, setSortBy] = useState<keyof UserDataRowProps | undefined>(args.sortBy as keyof UserDataRowProps | undefined);
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | undefined>(args.sortDirection);

        const handleHeaderClick = (columnId: string) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId as keyof UserDataRowProps);
                setSortDirection('ascending');
            }
        };

        return (
            <MoonstoneTable
                {...args}
                sortBy={sortBy}
                sortDirection={sortDirection}
                onClickTableHeadCell={handleHeaderClick}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSorting: true,
        sortBy: 'progress',
        sortDirection: 'descending'
    },
    name: 'Sortable Table'
};

export const AllFeaturesTable: Story = {
    render: args => {
        const [sortBy, setSortBy] = useState<keyof UserDataRowProps | undefined>(args.sortBy as keyof UserDataRowProps | undefined);
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | undefined>(args.sortDirection);

        const handleHeaderClick = (columnId: string) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId as keyof UserDataRowProps);
                setSortDirection('ascending');
            }
        };

        return (
            <MoonstoneTable
                {...args}
                sortBy={sortBy}
                sortDirection={sortDirection}
                onClickTableHeadCell={handleHeaderClick}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2'],
        sortBy: 'date',
        sortDirection: 'descending'
    },
    name: 'All features Table'
};

