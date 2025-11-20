import type {DataTableColumn} from './types/DataTableColumn.types';
import {UserDataRowProps} from './types/UserDataRow.types';

export const userColumns: DataTableColumn<UserDataRowProps>[] = [
    {
        key: 'firstName',
        label: 'Prénom'
    },
    {
        key: 'lastName',
        label: 'Nom'
    },
    {
        key: 'age',
        label: 'Âge'
    },
    {
        key: 'status',
        label: 'Statut'
    },
    {
        key: 'progress',
        label: 'Progression'
    },
    {
        key: 'date',
        label: 'Date'
    }
];
