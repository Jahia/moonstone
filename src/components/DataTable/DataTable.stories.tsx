import {dataTable, dataColumnsUser, getStatusMessage} from '~/data/dataTable';
import type {DataUser, DataUserKeys} from '~/data/dataTable';
import {DataTable} from './DataTable';
import type {Meta, StoryObj} from '@storybook/react';
import {TableRow} from './TableRow';
import {TableCellStatus} from './cells';
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

// export const StatusBarDataTable: Story = {
//     render: args => {
//         return (
//             <DataTable<DataUser>
//                 {...args}
//                 enableSelection
//                 isStructured
//                 renderRowStart={row => {
//                     const status = getStatusMessage(row.original.status);

//                     return (
//                         <TableCellStatus
//                             color={status.color}
//                             iconStart={status.iconStart}
//                             text={status.text}
//                         />
//                     );
//                 }}
//             />
//         );
//     },
//     args: {
//         data: dataTable,
//         columns: dataColumnsUser,
//         primaryKey: 'firstName'
//     },
//     name: 'With Status Bar'
// };

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

export const ControlledSelection: Story = {
    render: args => {
        const [selection, setSelection] = useState<string[]>(['Walter', 'Jesse']);

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
        primaryKey: 'firstName'
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
        primaryKey: 'firstName',
        sortBy: 'progress'
    },
    name: 'Controlled Sorting'
};

export const ControlledPagination: Story = {
    render: args => {
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(5);

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
                itemsPerPageOptions={[5, 10, 25]}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        );
    },
    args: {
        data: dataTable,
        columns: dataColumnsUser,
        primaryKey: 'firstName'
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
                        style={{
                            backgroundColor: row.getIsSelected() ?
                                'rgba(0, 100, 255, 0.1)' :
                                undefined
                        }}
                    >
                        {renderCells({
                            before: (
                                <TableCellStatus
                                    color={getStatusMessage(row.original.status).color}
                                    iconStart={getStatusMessage(row.original.status).iconStart}
                                    text={getStatusMessage(row.original.status).text}
                                />
                            ),
                            after: (
                                <>
                                    <Button icon={<MoreVert/>} variant="ghost" aria-label="Actions"/>
                                    <Button icon={<Visibility/>} variant="ghost"/>
                                    <Button icon={<Edit/>} variant="ghost"/>
                                    <Button icon={<Delete/>} variant="ghost"/>
                                </>
                            )
                        })}
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
        defaultSelection: ['Walter', 'Jon'],
        defaultSortBy: 'progress',
        defaultSortDirection: 'descending'
    },
    name: 'All Features Combined'
};
