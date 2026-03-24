import type {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {Chip} from '~/components';
import {Person} from '~/icons';
import {numberColumn, dateColumn, stringColumn} from '~/utils/dataTable';

export type DataUser = {
    firstName: string;
    lastName: string;
    age: number;
    status: string;
    progress: number;
    date: Date;
    chips?: string[];
    subRows?: DataUser[];
};

export type DataUserKeys = Exclude<keyof DataUser, 'subRows'>;

export const dataColumnsUser: DataTableColumn<DataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        minWidth: 120, // Can help to prevent columns from being too narrow during resizing
        ...stringColumn<DataUser>(row => row.firstName),
        render: (value, row) => (
            <>
                <Person/>
                {row.firstName} {row.lastName}
            </>
        ),
        align: 'left'
    },
    {
        key: 'status',
        label: 'Status',
        render: value => (
            <Chip
                label={value as string}
                color={(value as string) === 'Active' ? 'success' : 'default'}
            />
        ),
        isSortable: true,
        minWidth: 120,
        sortFn: (a, b) => a.status.localeCompare(b.status),
        align: 'center' // Custom column needs explicit align
    },
    {
        key: 'progress',
        label: 'Progress',
        minWidth: 120,
        ...numberColumn<DataUser>(row => row.progress)
        // Align comes from numberColumn helper
    },
    {
        key: 'date',
        label: 'Last Login',
        minWidth: 120,
        ...dateColumn<DataUser>(row => row.date, {locale: 'fr-FR'}),
        enableResizing: false,
        // Align comes from dateColumn helper
        width: '150px'
    }
];
