import {MoonstoneTableColumn} from './types/MoonstoneTableColumn.types';
import {UserDataProps} from './types/UserData.types';

export const userColumns: MoonstoneTableColumn<UserDataProps>[] = [
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
