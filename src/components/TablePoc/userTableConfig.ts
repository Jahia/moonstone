
import {TableColumnConfig} from './TableColumnConfigTypes';
import {UserDataTypes} from './UserData.types';

export const userTableConfig: TableColumnConfig<UserDataTypes>[] = [
    {
        key: 'firstName',
        header: 'Prénom'
    },
    {
        key: 'lastName',
        header: 'Nom',
        cell: value => (value as string).toUpperCase()
    },
    {
        key: 'age',
        header: 'Âge',
        cell: value => `${value} ans`
    },
    {
        key: 'status',
        header: 'Statut'
    },
    {
        key: 'progress',
        header: 'Progression',
        cell: value => `${value}%`
    },
    {
        key: 'date',
        header: 'Date',
        cell: value => (value as Date).toLocaleDateString('fr-FR')
    }
];
