import { dataTable } from './data/TableData';
import { dataColumnsUser, type dataUser } from './data/dataColumnsUser';
import { DataTable } from './DataTable';
import type { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    tags: ['beta'],
    parameters: {
        controls: { expanded: true }
    },
    argTypes: {
        onChangeSelection: { action: 'onChangeSelection' }
    }
} satisfies Meta<typeof DataTable<dataUser>>;

type Story = StoryObj<typeof DataTable<dataUser>>;

export const EmptyDataTable: Story = {
    render: args => {
        return <DataTable {...args} data={[]} columns={dataColumnsUser} />;
    },
    name: 'EmptyDataTable'
};

export const MoonstoneDataTable: Story = {
    render: args => {
        return <DataTable {...args} data={dataTable} columns={dataColumnsUser} />;
    },
    name: 'DataTable'
};

export const StructuredViewDataTable: Story = {
    render: args => {
        return <DataTable {...args} isStructured data={dataTable} columns={dataColumnsUser} />;
    },
    args: {
        isStructured: true
    },
    name: 'Structured View'
};

export const SelectableDataTable: Story = {
    render: args => {
        return <DataTable {...args} enableSelection data={dataTable} columns={dataColumnsUser} />;
    },
    args: {
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const DefaultSelectionDataTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enableSelection
                data={dataTable}
                columns={dataColumnsUser}
                defaultSelection={['0', '2', '4']}
            />
        );
    },
    args: {
        enableSelection: true
    },
    name: 'Default Selection'
};

export const SortableDataTable: Story = {
    render: args => {
        return <DataTable {...args} enableSorting data={dataTable} columns={dataColumnsUser} />;
    },
    args: {
        enableSorting: true
    },
    name: 'Sortable Table'
};

export const DefaultSortDataTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enableSorting
                defaultSortBy="progress"
                defaultSortDirection="descending"
                data={dataTable}
                columns={dataColumnsUser}
            />
        );
    },
    args: {
        enableSorting: true,
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'Default Sort Applied'
};

export const AllFeaturesTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enableSelection
                isStructured
                enableSorting
                defaultSelection={['0', '2']}
                data={dataTable}
                columns={dataColumnsUser}
            />
        );
    },
    args: {
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2']
    },
    name: 'All Features Table'
};
