import {MoonstoneTable} from '~/components/DataTable/MoonstoneTable';
import {DataTable} from './data/DataTable';
import {userColumns} from './UserColumn';
import type {Meta, StoryObj} from '@storybook/react';
import type {UserDataProps} from './types/UserData.types';
import type {MoonstoneTableProps} from './types/MoonstoneTableColumn.types';

export default {
    title: 'Components/TableData',
    component: MoonstoneTable,
    parameters: {
        controls: {expanded: true}
    }
} satisfies Meta<typeof MoonstoneTable>;

type Story = StoryObj<typeof MoonstoneTable>;

export const EmptyDataTable: Story = {
    render: (args: Omit<MoonstoneTableProps<UserDataProps>, 'data' | 'columns'>) => {
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
    render: (args: Omit<MoonstoneTableProps<UserDataProps>, 'data' | 'columns'>) => {
        return (
            <MoonstoneTable
                {...args}
                data={DataTable}
                columns={userColumns}
            />
        );
    },
    name: 'DataTable'
};

