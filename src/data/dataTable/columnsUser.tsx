import type {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {Chip, Typography} from '~/components';
import {Person} from '~/icons';
import {getStatus} from '~/data/dataTable/utils';
import {numberColumn, dateColumn, stringColumn} from '~/utils/dataTable';

export type DataUser = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    status: 'published' | 'deleted' | 'modified' | 'new' | 'unpublished';
    progress: number;
    date: Date;
    subRows?: DataUser[];
};

export type DataUserFlat = Omit<DataUser, 'subRows'>;

export type DataUserKeys = Exclude<keyof DataUser, 'subRows'>;

export const dataColumnsUser: DataTableColumn<DataUser>[] = [
    {
        key: 'firstName',
        label: 'User',
        isScrollable: true,
        ...stringColumn<DataUser>(row => row.firstName),
        render: (value, row) => (
            <>
                <Person/>
                <Typography isNowrap variant="body">{`${value} ${row.lastName}`}</Typography>
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
        isScrollable: true,
        ...numberColumn(row => row.progress)
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn(row => row.date, {locale: 'fr-FR'}),
        width: '150px'
    }
];
