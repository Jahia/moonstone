import { dataTable } from './data/TableData';
import { dataColumnsUser, type dataUser } from './data/dataColumnsUser';
import { DataTable } from './DataTable';
import { TableRow, MoreVert } from '~/index';
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
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: [],
        columns: dataColumnsUser
    },
    name: 'Empty DataTable'
};

export const BasicDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser
    },
    name: 'Basic DataTable'
};

export const DefaultSortDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        enableSorting: true,
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'Default Sort Applied'
};

export const SelectableDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const DefaultSelectionDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        enableSelection: true,
        defaultSelection: ['0', '2', '4']
    },
    name: 'Default Selection'
};

export const StructuredViewDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} />;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        isStructured: true
    },
    name: 'Structured View'
};

export const AllFeaturesTable: Story = {
    render: args => {
        return (
            <DataTable<dataUser>
                {...args}
                actions={row => (
                    <MoreVert onClick={() => console.log(`${row.age}`)} />
                )}
                actionsHeaderLabel=""
                renderRow={(row, defaultRender) => (
                    <TableRow
                        key={row.id}
                        style={{
                            backgroundColor: row.getIsSelected() ?
                                'rgba(0, 100, 255, 0.1)' :
                                undefined
                        }}
                    >
                        {defaultRender()}
                    </TableRow>
                )}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2'],
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'All Features Combined'
};
