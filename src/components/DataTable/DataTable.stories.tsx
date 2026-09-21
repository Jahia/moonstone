import { useState } from 'react';

import { DataTable, TableCellActions, TableCellStatus, TableRow } from './index';
import { Button, Tooltip } from '~/components';
import { dataColumnsUser, getStatus, tableFlat, tableStructured } from '~/data/dataTable';
import { Delete, Edit, MoreVert, Visibility } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DataUser, DataUserKeys } from '~/data/dataTable';

export default {
    title: 'Components/DataTable',
    component: DataTable,
    tags: ['beta'],
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        onChangeSelection: { action: 'onChangeSelection' },
        enablePagination: { control: 'boolean' },
        defaultItemsPerPage: { control: 'number' },
        itemsPerPageOptions: { control: 'object' },
        i18n: { control: 'object' },
    },
} satisfies Meta<typeof DataTable<DataUser>>;

type Story = StoryObj<typeof DataTable<DataUser>>;

export const DefaultDataTable: Story = {
    render: (args) => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
    },
    name: 'Default DataTable (uncontrolled)',
};

export const StructuredDataTable: Story = {
    render: (args) => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableStructured,
        isStructured: true,
        columns: dataColumnsUser,
        primaryKey: 'id',
    },
    name: 'Structured DataTable (uncontrolled)',
};

export const SelectableDataTable: Story = {
    render: (args) => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        enableSelection: true,
        defaultSortBy: 'progress',
    },
    name: 'Selectable DataTable (uncontrolled)',
};

export const DefaultSelectionDataTable: Story = {
    render: (args) => {
        return <DataTable {...args}/>;
    },
    args: {
        data: tableFlat,
        columns: dataColumnsUser,
        primaryKey: 'id',
        defaultSortBy: 'progress',
        enableSelection: true,
        defaultSelection: ['1', '6'],
    },
    name: 'Default Selection (uncontrolled)',
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
                enablePagination
                enableSelection
                enableSorting
                columns={dataColumnsUser}
                currentPage={currentPage}
                data={tableFlat}
                itemsPerPage={itemsPerPage}
                primaryKey="id"
                selection={selection}
                sortBy={sortBy}
                sortDirection={sortDirection}
                totalItems={tableFlat.length}
                onChangeSelection={setSelection}
                onItemsPerPageChange={setItemsPerPage}
                onPageChange={setCurrentPage}
                onSortChange={(newSortBy, newSortDirection) => {
                    setSortBy(newSortBy as DataUserKeys);
                    setSortDirection(newSortDirection);
                }}
            />
        );
    },
    name: 'Controlled DataTable',
};

export const InsertCells: Story = {
    render: (args) => {
        return (
            <DataTable
                {...args}
                renderRow={({ id, data, render: renderCells }) => (
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
                                    actions={<Button aria-label="Actions" icon={<MoreVert/>} variant="ghost"/>}
                                    actionsOnHover={(
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
                                    )}
                                />
                            ),
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
        enableSelection: true,
    },
    name: 'Insert custom cells (renderRow)',
};
