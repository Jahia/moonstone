import {useState} from 'react';
import {dataTable} from '~/data/dataTable';
import {dataColumnsUser} from '~/data/dataTable';
import type {DataUser} from '~/data/dataTable';
import {DataTable} from './DataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {TableRow} from './TableRow';
import {MoreVert} from '~/icons';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true},
        docs: {
            description: {
                component: 'Data table with sorting, selection, pagination and column resizing. Use `enableResize` for resize handles; `columnSizing` + `onColumnSizingChange` for controlled mode.'
            }
        }
    },
    argTypes: {
        onChangeSelection: {action: 'onChangeSelection'},
        onResizeStart: {action: 'onResizeStart'},
        onResizeStop: {action: 'onResizeStop'},
        onResizing: {action: 'onResizing'},
        onColumnSizingChange: {action: 'onColumnSizingChange'},
        enableResize: {control: 'boolean'},
        columnSizing: {control: false},
        actionsColumnWidth: {control: 'number'},
        enablePagination: {control: 'boolean'},
        itemsPerPage: {control: 'number'},
        itemsPerPageOptions: {control: 'object'},
        paginationLabel: {control: 'object'}
    }
} satisfies Meta<typeof DataTable<DataUser>>;

type Story = StoryObj<typeof DataTable<DataUser>>;

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
        defaultSelection: ['Walter', 'Jon']
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

export const ResizableColumnsControlledDataTable: Story = {
    render: args => {
        const [columnSizing, setColumnSizing] = useState<Record<string, number>>({});

        return (
            <DataTable<DataUser>
                {...args}
                enableResize
                columnSizing={Object.keys(columnSizing).length > 0 ? columnSizing : undefined}
                onColumnSizingChange={updater => {
                    setColumnSizing(prev => (typeof updater === 'function' ? updater(prev) : updater));
                }}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName'
    },
    parameters: {
        docs: {
            description: {
                story: 'Controlled column widths in state (e.g. for localStorage persistence).'
            }
        }
    },
    name: 'Resizable Columns Controlled'
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
        const [columnSizing, setColumnSizing] = useState<Record<string, number>>({});

        return (
            <DataTable<DataUser>
                {...args}
                enableResize
                enablePagination
                columnSizing={Object.keys(columnSizing).length > 0 ? columnSizing : undefined}
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
                onColumnSizingChange={updater => {
                    setColumnSizing(prev => (typeof updater === 'function' ? updater(prev) : updater));
                }}
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
        enableResize: true,
        defaultSelection: ['Walter', 'Jon'],
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'All Features Combined'
};

