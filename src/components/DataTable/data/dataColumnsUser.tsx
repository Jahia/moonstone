import React from 'react';
import type {DataTableColumn} from '../DataTable.types';
import {Chip} from '~/components';
import {numberColumn, dateColumn, chipsColumn, stringColumn} from '../utils';

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

export const dataColumnsUser: DataTableColumn<dataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        ...stringColumn<dataUser>(row => row.firstName)
    },
    {
        key: 'status',
        label: 'Status',
        // Fully custom column - return content directly, TableBodyCell handles cell rendering
        render: value => (
            <Chip
                label={value as string}
                color={(value as string) === 'Active' ? 'success' : 'default'}
            />
        ),
        isSortable: true,
        sortFn: (a, b) => a.status.localeCompare(b.status)

    },
    {
        key: 'chips',
        label: 'Roles',
        ...chipsColumn<dataUser>(row => row.chips ?? [])
    },
    {
        key: 'progress',
        label: 'Progress',
        ...numberColumn<dataUser>(row => row.progress),
        align: 'left' // You can align the content of the cell and override the default alignment of the helper function
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn<dataUser>(row => row.date, {locale: 'fr-FR'}), // Can use the locale option to format the date
        align: 'right' // You can align the content of the cell
    }
];
