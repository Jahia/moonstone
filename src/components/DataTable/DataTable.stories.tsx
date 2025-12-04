import { dataTable } from './data/TableData';
import { dataColumnsUser, type dataUser } from './data/dataColumnsUser';
import { DataTable } from './DataTable';
import { TableRow, TableBodyCell, MoreVert } from '~/index';
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
        return <DataTable<dataUser> {...args} data={[]} columns={dataColumnsUser} />;
    },
    name: 'Empty DataTable'
};

export const BasicDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} data={dataTable} columns={dataColumnsUser} />;
    },
    name: 'Basic DataTable'
};

export const DefaultSortDataTable: Story = {
    render: args => {
        return (
            <DataTable<dataUser>
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

export const SelectableDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} enableSelection data={dataTable} columns={dataColumnsUser} />;
    },
    args: {
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const DefaultSelectionDataTable: Story = {
    render: args => {
        return (
            <DataTable<dataUser>
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

export const StructuredViewDataTable: Story = {
    render: args => {
        return <DataTable<dataUser> {...args} isStructured data={dataTable} columns={dataColumnsUser} />;
    },
    args: {
        isStructured: true
    },
    name: 'Structured View'
};

export const AllFeaturesTable: Story = {
    render: args => {
        return (
            <DataTable<dataUser>
                {...args}
                enableSelection
                enableSorting
                isStructured
                defaultSelection={['0', '2']}
                defaultSortBy="progress"
                defaultSortDirection="descending"
                data={dataTable}
                columns={dataColumnsUser}
                actions={row => (
                    <MoreVert onClick={() => console.log(`${row.age}`)} />
                )}
                actionsHeaderLabel=""
                renderCell={(cell, defaultRender, cellProps) => (
                    <TableBodyCell
                        {...cellProps} // To handle tree view
                        key={cell.id}

                    >
                        {defaultRender()}
                    </TableBodyCell>
                )}
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
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2']
    },
    name: 'All Features Combined'
};
