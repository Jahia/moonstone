import {dataTable} from './data/TableData';
import {dataColumnsUser, type DataUserKeys} from './data/dataColumnsUser';
import {DataTable} from './DataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true}
    },
    argTypes: {
        onChangeSelection: {action: 'onChangeSelection'}
    }
} satisfies Meta<typeof DataTable>;

type Story = StoryObj<typeof DataTable>;

export const EmptyDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            data={[]}
            columns={dataColumnsUser}
        />
    ),
    name: 'EmptyDataTable'
};

export const MoonstoneDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            data={dataTable}
            columns={dataColumnsUser}
        />
    ),
    name: 'DataTable'
};

export const StructuredViewDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            data={dataTable}
            columns={dataColumnsUser}
        />
    ),
    args: {
        isStructured: true
    },
    name: 'Structured View'
};

export const SelectableDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            enableSorting
            sortBy={args.sortBy}
            data={dataTable}
            columns={dataColumnsUser}
        />
    ),
    args: {
        enableSorting: true,
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const SelectableStructuredDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            enableSorting
            sortBy={args.sortBy}
            data={dataTable}
            columns={dataColumnsUser}
        />
    ),
    args: {
        enableSelection: true,
        isStructured: true,
        enableSorting: true
    },
    name: 'Selectable and structured table view'
};

export const DefaultSelectionDataTable: Story = {
    render: args => (
        <DataTable
            {...args}
            enableSorting
            sortBy={args.sortBy}
            data={dataTable}
            columns={dataColumnsUser}
        />
    ),
    args: {
        enableSelection: true,
        defaultSelection: ['0', '2', '4'],
        enableSorting: true
    },
    name: 'Default Selection'
};

export const SortableDataTable: Story = {
    render: args => {
        const [sortBy, setSortBy] = useState<DataUserKeys>(args.sortBy);
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | undefined>(args.sortDirection);

        const handleHeaderClick = (columnId: DataUserKeys) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId);
                setSortDirection('ascending');
            }
        };

        return (
            <DataTable
                {...args}
                enableSorting
                sortBy={sortBy}
                sortDirection={sortDirection}
                data={dataTable}
                columns={dataColumnsUser}
                onClickTableHeadCell={handleHeaderClick}
            />
        );
    },
    name: 'Sortable Table'
};

export const AllFeaturesTable: Story = {
    render: args => {
        const [sortBy, setSortBy] = useState<DataUserKeys>(args.sortBy);
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending' | undefined>(args.sortDirection);

        const handleHeaderClick = (columnId: DataUserKeys) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId);
                setSortDirection('ascending');
            }
        };

        return (
            <DataTable
                {...args}
                enableSelection
                isStructured
                enableSorting
                defaultSelection={['0', '2']}
                sortBy={sortBy}
                sortDirection={sortDirection}
                data={dataTable}
                columns={dataColumnsUser}
                onClickTableHeadCell={handleHeaderClick}
            />
        );
    },
    name: 'All features Table', 
    args: {
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2'],
        sortDirection: 'ascending'
    }
};
