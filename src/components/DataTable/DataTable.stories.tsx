import {dataTable} from './data/TableData';
import {dataColumnsUser} from './data/dataColumnsUser';
import type {dataUser} from './data/dataColumnsUser';
import {DataTable} from './DataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {TableRow} from '~/components';
import {MoreVert} from '~/icons';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true}
    },
    argTypes: {
        onChangeSelection: {action: 'onChangeSelection'},
        enablePagination: {control: 'boolean'},
        itemsPerPage: {control: 'number'},
        itemsPerPageOptions: {control: 'object'},
        paginationLabel: {control: 'object'}
    }
} satisfies Meta<typeof DataTable<dataUser>>;

type Story = StoryObj<typeof DataTable<dataUser>>;

export const EmptyDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: [],
        columns: dataColumnsUser,
        primaryKey: 'firstName'
    },
    name: 'Empty DataTable'
};

export const BasicDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName'
    },
    name: 'Basic DataTable'
};

export const DefaultSortDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName',
        enableSorting: true,
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'Default Sort Applied'
};

export const SelectableDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName',
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const DefaultSelectionDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName',
        enableSelection: true,
        defaultSelection: ['Yacine', 'Yacinator']
    },
    name: 'Default Selection'
};

export const StructuredViewDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName',
        isStructured: true
    },
    name: 'Structured View'
};

export const PaginationDataTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enablePagination
                isStructured
                data={dataTable}
                itemsPerPageOptions={[5, 10, 25]}
            />
        );
    },
    args: {
        columns: dataColumnsUser,
        primaryKey: 'firstName'
    },
    name: 'With Pagination (Structured)'
};

export const AllFeaturesTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enablePagination
                actions={row => (
                    <MoreVert onClick={() => console.log(`${row.age}`)}/>
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
        primaryKey: 'firstName',
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['Yacine', 'Yacinator'],
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'All Features Combined'
};

