import {tableStructured, tableFlat, dataColumnsUser, getStatus} from '~/data/dataTable';
import type {DataUser, DataUserKeys} from '~/data/dataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {DataTable, TableRow, TableCellActions, TableCellStatus} from './index';
import {useState} from 'react';
import {Button, Tooltip} from '~/components';
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
        i18n: {control: 'object'},
        enableSearch: {control: 'boolean'},
        searchColumns: {control: 'object'}
    }
} satisfies Meta<typeof DataTable<DataUser>>;

type Story = StoryObj<typeof DataTable<DataUser>>;

export const DefaultDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id'
    },
    name: 'Default DataTable (uncontrolled)'
};

export const StructuredDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableStructured,
        isStructured: true,
        columns: dataColumnsUser,
        primaryKey: 'id'
    },
    name: 'Structured DataTable (uncontrolled)'
};

export const SelectableDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        enableSelection: true,
        defaultSortBy: 'progress'
    },
    name: 'Selectable DataTable (uncontrolled)'
};

export const DefaultSelectionDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        defaultSortBy: 'progress',
        enableSelection: true,
        defaultSelection: ['1', '6']
    },
    name: 'Default Selection (uncontrolled)'
};

export const ControlledDataTable: Story = {
    render: () => {
        // Sorting
        const [sortBy, setSortBy] = useState<DataUserKeys>('progress');
        const [sortDirection, setSortDirection] = useState<'ascending' | 'descending'>('descending');
        // Selection
        const [selection, setSelection] = useState<string[]>(['1', '2']);
        // Pagination
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(10);

        return (
            <DataTable
                enableSelection
                enableSorting
                enablePagination
                data={tableFlat}
                columns={dataColumnsUser}
                primaryKey="id"
                sortBy={sortBy}
                sortDirection={sortDirection}
                selection={selection}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={tableFlat.length}
                onSortChange={(newSortBy, newSortDirection) => {
                    setSortBy(newSortBy as DataUserKeys);
                    setSortDirection(newSortDirection);
                }}
                onChangeSelection={setSelection}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        );
    },
    name: 'Controlled DataTable'
};

export const SearchableDataTable: Story = {
    render: args => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        enableSearch: true,
        searchColumns: ['firstName', 'status', 'progress'],
        searchInputProps: {placeholder: 'Search by user, status or progress'}
    },
    name: 'Searchable DataTable (uncontrolled)'
};

export const ServerSideSearchDataTable: Story = {
    render: () => {
        const [searchValue, setSearchValue] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(10);

        const query = searchValue.toLowerCase();
        const matchingRows = tableFlat.filter(row => `${row.firstName} ${row.lastName}`.toLowerCase().includes(query));
        const pageRows = matchingRows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

        return (
            <DataTable
                enableSearch
                enablePagination
                enableSorting={false}
                data={pageRows}
                columns={dataColumnsUser}
                primaryKey="id"
                searchValue={searchValue}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={matchingRows.length}
                searchInputProps={{placeholder: 'Search on the server'}}
                onSearchChange={value => {
                    setSearchValue(value);
                    setCurrentPage(1);
                }}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        );
    },
    name: 'Server-side search (the consumer filters)'
};

export const InsertCells: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                renderRow={({id, data, render: renderCells}) => (
                    <TableRow
                        key={id}
                    >
                        {renderCells({
                            before: (
                                <TableCellStatus color={getStatus(data.status).color}>
                                    <>
                                        {getStatus(data.status).iconStart} {getStatus(data.status).text}
                                    </>
                                </TableCellStatus>
                            ),
                            after: (
                                <TableCellActions
                                    actionsOnHover={
                                        <>
                                            <Tooltip label="View">
                                                <Button icon={<Visibility/>} variant="ghost"/>
                                            </Tooltip>
                                            <Tooltip label="Edit">
                                                <Button icon={<Edit/>} variant="ghost"/>
                                            </Tooltip>
                                            <Tooltip label="Delete">
                                                <Button icon={<Delete/>} variant="ghost"/>
                                            </Tooltip>
                                        </>
                                    }
                                    actions={<Button icon={<MoreVert/>} variant="ghost" aria-label="Actions"/>}
                                />
                            )
                        })}
                    </TableRow>
                )}
            />
        );
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        enableSelection: true
    },
    name: 'Insert custom cells (renderRow)'
};
