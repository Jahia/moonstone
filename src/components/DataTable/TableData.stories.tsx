
import {TableData} from './data/TableData';
import {userColumns} from './UserColumn';
import {MoonstoneTable} from './DataTable';
import type {DataTableProps} from './types/DataTableColumn.types';
import type {Meta, StoryObj} from '@storybook/react';
import type {UserData, UserDataRowProps} from './types/UserDataRow.types';

export default {
    title: 'Components/TableData',
    component: MoonstoneTable,
    tags: ['beta'],
    parameters: {
        controls: {expanded: true}
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
                isStructured
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

