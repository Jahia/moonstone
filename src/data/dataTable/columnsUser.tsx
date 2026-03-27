import type {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {Chip} from '~/components';
import {Person} from '~/icons';
import {getStatus} from '~/data/dataTable/utils';
import {numberColumn, dateColumn, stringColumn} from '~/utils/dataTable';

export type DataUser = {
    firstName: string;
    lastName: string;
    age: number;
    status: 'published' | 'deleted' | 'modified' | 'new' | 'unpublished';
    progress: number;
    date: Date;
    subRows?: DataUser[];
};

export type DataUserKeys = Exclude<keyof DataUser, 'subRows'>;

export const dataColumnsUser: DataTableColumn<DataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        ...stringColumn<DataUser>(row => row.firstName),
        render: (value, row) => (
            <>
                <Person/>
                {value} {row.lastName}
            </>
        )
    },
    {
        key: 'status',
        label: 'Status',
        render: (value, row) => (
            <Chip
                label={value as string}
                color={getStatus(row.status).chipColor}
            />
        ),
        isSortable: true,
        sortFn: (a, b) => a.status.localeCompare(b.status),
        align: 'center'
    },
    {
        key: 'progress',
        label: 'Progress',
        ...numberColumn(row => row.progress)
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn(row => row.date, {locale: 'fr-FR'}),
        width: '150px'
    }
];
