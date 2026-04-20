import {tableStructured, tableFlat, dataColumnsUser, getStatus} from '~/data/dataTable';
import type {DataUser, DataUserKeys} from '~/data/dataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {DataTable, TableRow, TableCellActions, TableCellStatus} from './index';
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
        i18n: {control: 'object'}
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

export const InsertCells: Story = {
    render: args => {
        return (
            <DataTable
                {...args}
                renderRow={(row, renderCells) => (
                    <TableRow
                        key={row.id}
                    >
                        {renderCells({
                            before: (
                                <TableCellStatus color={getStatus(row.original.status).color}>
                                    <>
                                        {getStatus(row.original.status).iconStart} {getStatus(row.original.status).text}
                                    </>
                                </TableCellStatus>
                            ),
                            after: (
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
