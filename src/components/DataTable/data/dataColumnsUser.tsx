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
};

export type DataUserKeys = Exclude<keyof dataUser, 'subRows'>;

// Helper to extract string value from firstName (handles both string and object format)
const getFirstNameValue = (firstName: dataUser['firstName']): string => {
    return typeof firstName === 'string' ? firstName : firstName.value;
};

export const dataColumnsUser: DataTableColumn<dataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        render: value => <TableCell value={value as string}/>,
        isSortable: true,
        sortFn: (a, b) => {
            const aVal = getFirstNameValue(a.firstName);
            const bVal = getFirstNameValue(b.firstName);
            return aVal.localeCompare(bVal);
        },
        align: 'left'
    },
    {
        key: 'status',
        label: 'Status',
        render: value => <TableCell value={value as string}/>,
        isSortable: true,
        sortFn: (a, b) => a.status.localeCompare(b.status),
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
        render: value => <TableCell value={value as number}/>,
        isSortable: true,
        sortFn: (a, b) => a.progress - b.progress
    },
    {
        key: 'date',
        label: 'Last Login',
        render: value => <TableCell value={value as Date}/>,
        isSortable: true,
        sortFn: (a, b) => a.date.getTime() - b.date.getTime()
    }
];
