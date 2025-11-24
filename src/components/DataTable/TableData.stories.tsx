import {TableData} from './data/TableData';
import {userColumns} from './UserColumn';
import {MoonstoneTable} from './DataTable';
import type {DataTableProps} from './types/DataTableColumn.types';
import type {Meta, StoryObj} from '@storybook/react';
import type {UserData, UserDataRowProps} from './types/UserDataRow.types';
import {useState} from 'react';

export default {
    title: 'Components/TableData',
    component: MoonstoneTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true}
    },
    argTypes: {
        onChangeSelection: {action: 'onChangeSelection'}
    }
} satisfies Meta<typeof MoonstoneTable>;

type Story = StoryObj<typeof MoonstoneTable>;

export const EmptyDataTable: Story = {
    render: (args: Omit<DataTableProps<UserData>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                {...args}
                data={[]}
                columns={userColumns}
            />
        );
    },
    name: 'EmptyDataTable'
};

export const MoonstoneDataTable: Story = {
    render: (args: Omit<DataTableProps<UserDataRowProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                {...args}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    name: 'DataTable'
};

export const StructuredViewDataTable: Story = {
    render: (args: Omit<DataTableProps<UserDataRowProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                {...args}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        isStructured: true
        
    },
    name: 'Structured View'
};

export const SelectableDataTable: Story = {
    render: (args: Omit<DataTableProps<UserDataRowProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                enableSelection
                {...args}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSelection: true
    },
    name: 'Selectable Rows'
};

export const SelectableStructuredDataTable: Story = {
    render: (args: Omit<DataTableProps<UserDataRowProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                enableSelection
                isStructured
                {...args}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSelection: true,
        isStructured: true
    },
    name: 'Selectable and structured table view'
};

export const DefaultSelectionDataTable: Story = {
    render: (args: Omit<DataTableProps<UserDataRowProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                {...args}
                defaultSelection={['0', '2', '4']}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSelection: true,
        defaultSelection: ['0', '2', '4']
    },
    name: 'Default Selection'
};

export const SortableDataTable: Story = {
    render: (args) => {
        const [sortBy, setSortBy] = useState(args.sortBy);
        const [sortDirection, setSortDirection] = useState(args.sortDirection);

        const handleHeaderClick = (columnId: string) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId);
                setSortDirection('ascending');
            }
        };

        return (
            <MoonstoneTable
                {...args}
                sortBy={sortBy}
                sortDirection={sortDirection}
                onClickTableHeadCell={handleHeaderClick}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
       enableSorting: true,
       sortBy: 'progress',
       sortDirection: 'descending'
    },
    name: 'Sortable Table'
};

export const AllFeaturesTable: Story = {
    render: (args) => {
        const [sortBy, setSortBy] = useState(args.defaultSorting?.sortBy);
        const [sortDirection, setSortDirection] = useState(args.defaultSorting?.sortDirection);

        const handleHeaderClick = (columnId: string) => {
            if (sortBy === columnId) {
                setSortDirection(prev => prev === 'ascending' ? 'descending' : 'ascending');
            } else {
                setSortBy(columnId);
                setSortDirection('ascending');
            }
        };

        return (
            <MoonstoneTable
                {...args}
                sortBy={sortBy}
                sortDirection={sortDirection}
                onClickTableHeadCell={handleHeaderClick}
                data={TableData}
                columns={userColumns}
            />
        );
    },
    args: {
        enableSelection: true,
        isStructured: true,
        enableSorting: true,
        defaultSelection: ['0', '2'],
        defaultSorting: {
            sortBy: 'date',
            sortDirection: 'descending'
        }
    },
    name: 'All features Table',

};


