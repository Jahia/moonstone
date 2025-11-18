import type {Meta, StoryObj} from '@storybook/react';
import {TablePoc} from '~/components/TablePoc/TablePoc';
import {TablePocData} from '~/components/TablePoc/TablePocData';
import {TablePocProductData} from '~/components/TablePoc/TablePocProductData';
import type {TablePocProps} from '~/components/TablePoc/TablePoc.types';
import type {UserDataTypes} from '~/components/TablePoc/UserData.types';
import type {ProductDataTypes} from '~/components/TablePoc/UserData.types';
import {generateColumns} from './generatecolumns';
import {userTableConfig} from './userTableConfig';
import {productTableConfig} from './productTableConfig';

export default {
    title: 'Components/TableData',
    component: TablePoc,
    parameters: {
        controls: {expanded: true}
    }
} satisfies Meta<typeof TablePoc>;

type Story = StoryObj<typeof TablePoc>;

export const EmptyTable: Story = {
    render: (args: Omit<TablePocProps<ProductDataTypes>, 'data' | 'columns'>) => {
        const columns = generateColumns(productTableConfig);

        return (
            <TablePoc
                {...args}
                data={[]}
                columns={columns}
            />
        );
    },
    name: 'EmptyTable'
};

export const TanstackTable: Story = {
    render: (args: Omit<TablePocProps<UserDataTypes>, 'data' | 'columns'>) => {
        const columns = generateColumns(userTableConfig);

        return (
            <TablePoc
                {...args}
                data={TablePocData}
                columns={columns}
            />
        );
    },
    name: 'DataTable'
};

export const TanstackTable2: Story = {
    render: (args: Omit<TablePocProps<ProductDataTypes>, 'data' | 'columns'>) => {
        const columns = generateColumns(productTableConfig);

        return (
            <TablePoc
                {...args}
                data={TablePocProductData}
                columns={columns}
            />
        );
    },
    name: 'ProductDataTable'
};
