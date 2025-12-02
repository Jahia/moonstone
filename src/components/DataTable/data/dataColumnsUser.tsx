import React from 'react';
import {Badge, Button} from '~/components';
import {MoreVert} from '~/icons';
import { TableCellWrapper } from '../cells/TableCellWrapper';
import type {DataTableColumn} from '../DataTable.types';

export type dataUser = {
    firstName: string | { value: string; icon?: React.ReactElement };
    lastName: string;
    age: number;
    status: string;
    progress: number;
    date: Date;
    tags?: string;
    subRows?: dataUser[];
    actions?: React.ReactNode;
    hoverActions?: React.ReactNode;
};

export type DataUserKeys = Exclude<keyof dataUser, 'subRows'>;

export const dataColumnsUser: DataTableColumn<dataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        type: 'text',
    },
    {
        key: 'status',
        label: 'Status',
        type: 'status-bar',
    },
    {
        key: 'tags',
        label: 'Roles',
        type: "badge"
    },
    {
        key: 'progress',
        label: 'Progress',
        type: 'number',
        align: 'right'
    },
    {
        key: 'date',
        label: 'Last Login',
        type: 'date'
    },
    {
        key: 'hoverActions',
        label: 'Hover Actions',
        type: 'hover-actions',
        isSortable: false
    },
    {
        key: 'actions',
        label: '',
        type: 'actions',
        isSortable: false
    }
];
