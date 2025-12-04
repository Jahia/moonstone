import React from 'react';
import type {DataTableColumn} from '../DataTable.types';
import {TableCellChips} from '../cells/TableCellChips';
import {TableCell} from '../cells/TableCell';

export type dataUser = {
    firstName: string | { value: string; icon?: React.ReactElement };
    lastName: string;
    age: number;
    status: string;
    progress: number;
    date: Date;
    chips?: string[];
    subRows?: dataUser[];
    actions?: React.ReactNode;
    hoverActions?: React.ReactNode;
};

export type DataUserKeys = Exclude<keyof dataUser, 'subRows'>;

export const dataColumnsUser: DataTableColumn<dataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        render: value => <TableCell value={value as string}/>,
        isSortable: true,
        align: 'left'
    },
    {
        key: 'status',
        label: 'Status',
        render: value => <TableCell value={value as string}/>,
        align: 'right'
    },
    {
        key: 'chips',
        label: 'Roles',
        render: value => <TableCellChips value={value as string[]}/>
    },
    {
        key: 'progress',
        label: 'Progress',
        render: value => <TableCell value={value as number}/>

    },
    {
        key: 'date',
        label: 'Last Login',
        render: value => <TableCell value={value as Date}/>
    }
];
