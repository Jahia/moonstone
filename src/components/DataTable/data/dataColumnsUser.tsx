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
        ...stringColumn<dataUser>(row => row.firstName),
        align: 'left' // Testing left alignment
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
        sortFn: (a, b) => a.status.localeCompare(b.status),
        align: 'center' // Testing center alignment
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

