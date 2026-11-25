import { useState } from 'react';

import markdownNotes from './DataTable.md?raw';
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
        componentSubtitle: 'Builds a table from your records and columns.',
        docs: { description: { component: markdownNotes } },
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
                    setSortBy(newSortBy);
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
                                                <Button aria-label="View" icon={<Visibility/>} variant="ghost"/>
                                            </Tooltip>
                                            <Tooltip label="Edit">
                                                <Button aria-label="Edit" icon={<Edit/>} variant="ghost"/>
                                            </Tooltip>
                                            <Tooltip label="Delete">
                                                <Button aria-label="Delete" icon={<Delete/>} variant="ghost"/>
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
        customColumnLabels: { before: ['Status'], after: ['Actions'] },
    },
    name: 'Insert custom cells (renderRow)',
};

type Folder = { id: string; name: string; hasChildren: boolean; subRows?: Folder[] };

// Each folder holds 5 folders, 2 levels deep, loaded 2 at a time after a delay
const SUB_FOLDER_COUNT = 5;
const PAGE_SIZE = 2;
const toFolder = (id: string): Folder => ({ id, name: `Folder ${id}`, hasChildren: id.split('.').length < 3 });
const updateFolder = (folders: Folder[], id: string, update: (folder: Folder) => Folder): Folder[] => folders.map((folder) => {
    if (folder.id === id) {
        return update(folder);
    }

    return folder.subRows ? { ...folder, subRows: updateFolder(folder.subRows, id, update) } : folder;
});
// The next page of a folder, from the folders it already holds when the page arrives
const addPage = (folder: Folder): Folder => {
    const loaded = folder.subRows ?? [];
    const count = Math.min(PAGE_SIZE, SUB_FOLDER_COUNT - loaded.length);
    return { ...folder, subRows: [...loaded, ...Array.from({ length: count }, (_, i) => toFolder(`${folder.id}.${loaded.length + i + 1}`))] };
};

export const LazySubRows: StoryObj<typeof DataTable<Folder>> = {
    render: () => {
        const [folders, setFolders] = useState<Folder[]>(() => ['1', '2'].map(toFolder));
        const [opened, setOpened] = useState<string[]>([]);
        const loadPage = (id: string) => setTimeout(() => setFolders(current => updateFolder(current, id, addPage)), 1000);

        return (
            <DataTable
                hasMoreSubRows={folder => (folder.subRows?.length ?? 0) < SUB_FOLDER_COUNT}
                isStructured
                canExpand={folder => folder.hasChildren}
                columns={[{ key: 'name', label: 'Name' }]}
                data={folders}
                primaryKey="id"
                onExpandChange={(ids) => {
                    ids.filter(id => !opened.includes(id)).forEach(loadPage);
                    setOpened([...new Set([...opened, ...ids])]);
                }}
                onLoadMoreSubRows={folder => loadPage(folder.id)}
            />
        );
    },
    name: 'Lazy sub-rows',
};
