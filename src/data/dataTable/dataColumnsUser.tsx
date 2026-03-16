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
        ...stringColumn<DataUser>(row => row.firstName),
        render: (value, row) => (
            <span className="moonstone-tableCellContent flexRow_nowrap alignCenter">
                <Person/>
                <span className="moonstone-cellText">
                    {row.firstName} {row.lastName}
                </span>
            </span>
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
        align: 'center' // Custom column needs explicit align
    },
    {
        key: 'progress',
        label: 'Progress',
        ...numberColumn<DataUser>(row => row.progress),
        isScrollable: true
        // Align comes from numberColumn helper
    },
    {
        key: 'date',
        label: 'Last Login',
        ...dateColumn<DataUser>(row => row.date, {locale: 'fr-FR'}),
        // Align comes from dateColumn helper
        width: '150px'
    }
];
