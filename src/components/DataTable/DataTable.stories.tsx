import {dataTable, dataColumnsUser, getStatus} from '~/data/dataTable';
import type {DataUser, DataUserKeys} from '~/data/dataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {DataTable, TableRow, TableCell, TableCellActions, TableCellStatus} from './index';
import {useState} from 'react';
import {Button} from '~/components';
import {Visibility, Edit, Delete, MoreVert} from '~/icons';

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
        defaultItemsPerPage: {control: 'number'},
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
        primaryKey: 'id'
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
        primaryKey: 'id'
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
        primaryKey: 'id',
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
        primaryKey: 'id',
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
        primaryKey: 'id',
        enableSelection: true,
        defaultSelection: ['1', '6']
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
        primaryKey: 'id',
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
            />
        );
    },
    args: {
        columns: dataColumnsUser,
        primaryKey: 'id'
    },
    name: 'With Pagination (Structured)'
};

export const ControlledSelection: Story = {
    render: args => {
        const [selection, setSelection] = useState<string[]>(['1', '2']);

        return (
            <DataTable<DataUser>
                enableSelection
                isStructured
                data={args.data}
                columns={args.columns}
                primaryKey={args.primaryKey}
                selection={selection}
                onChangeSelection={setSelection}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'id'
    },
    name: 'Controlled Selection'
};

export const ControlledSorting: Story = {
    render: args => {
        const [sortBy, setSortBy] = useState<DataUserKeys>('progress');
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('descending');

        return (
            <DataTable<DataUser>
                enableSorting
                isStructured
                data={args.data}
                columns={args.columns}
                primaryKey={args.primaryKey}
                sortBy={sortBy}
                sortDirection={sortDirection}
                onSortChange={(newSortBy, newSortDirection) => {
                    setSortBy(newSortBy);
                    setSortDirection(newSortDirection);
                }}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'id',
        sortBy: 'progress'
    },
    name: 'Controlled Sorting'
};

export const ControlledPagination: Story = {
    render: args => {
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(10);

        return (
            <DataTable<DataUser>
                enablePagination
                isStructured
                data={args.data}
                columns={args.columns}
                primaryKey={args.primaryKey}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={args.data.length}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'id'
    },
    name: 'Controlled Pagination'
};

export const AllFeaturesTable: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                enablePagination
                renderRow={(row, renderCells) => (
                    <TableRow
                        key={row.id}
                    >
                        {renderCells({
                            before: [
                                <TableCellStatus color={getStatus(row.original.status).color}>
                                    <>
                                        {getStatus(row.original.status).iconStart} {getStatus(row.original.status).text}
                                    </>
                                </TableCellStatus>
                            ],
                            after: [
                                <TableCell>test</TableCell>,
                                <TableCellActions
                                    actionsOnHover={
                                        <>
                                            <Button icon={<Visibility/>} variant="ghost"/>
                                            <Button icon={<Edit/>} variant="ghost"/>
                                            <Button icon={<Delete/>} variant="ghost"/>
                                        </>
                                    }
                                    actions={<Button icon={<MoreVert/>} variant="ghost" aria-label="Actions"/>}
                                />
                            ]
                        })}
                    </TableRow>
                )}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'id',
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['1', '6'],
        defaultSortDirection: 'descending'
    },
    name: 'All Features Combined'
};
