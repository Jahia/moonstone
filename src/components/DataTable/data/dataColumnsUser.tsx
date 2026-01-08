import type {DataTableColumn} from '../DataTable.types';
import {Chip} from '~/components';
import {numberColumn, dateColumn, stringColumn} from '~/utils/dataTable';

export type dataUser = {
    firstName: string;
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
        // Align comes from stringColumn helper
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
        align: 'center' // Custom column needs explicit align
    },
    {
        key: 'progress',
        label: 'Progress',
        ...numberColumn<dataUser>(row => row.progress)
        // Align comes from numberColumn helper
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn<dataUser>(row => row.date, {locale: 'fr-FR'})
        // Align comes from dateColumn helper
    }
];
