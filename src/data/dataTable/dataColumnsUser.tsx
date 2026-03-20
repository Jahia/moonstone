import type {DataTableColumn} from '~/components/DataTable/DataTable.types';
import {Chip, Typography} from '~/components';
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
        isScrollable: true,
        ...stringColumn<DataUser>(row => row.firstName),
        render: (value, row) => (
            <>
                <Person/>
                <Typography isNowrap variant="body">{`${value} ${row.lastName}`}</Typography>
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
        sortFn: (a, b) => a.status.localeCompare(b.status),
        align: 'center'
    },
    {
        key: 'progress',
        label: 'Progress',
        isScrollable: true,
        ...numberColumn<DataUser>(row => row.progress)
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn<DataUser>(row => row.date, {locale: 'fr-FR'}),
        width: '150px'
    }
];
