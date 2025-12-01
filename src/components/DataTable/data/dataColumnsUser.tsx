import React from 'react';
import {Button} from '~/components';
import {MoreVert} from '~/icons';

type dataUser = {
    firstName: string | { value: string; icon?: React.ReactElement };
    lastName: string;
    age: number;
    status: 'Accept' | 'In progress' | 'Refuse';
    progress: number;
    date: Date;
    subRows?: dataUser[];
    actions?: React.ReactNode
};

export type DataUserKeys = Exclude<keyof dataUser, "subRows">;


export const dataColumnsUser = [
    {
        key: 'firstName',
        label: 'Prénom',
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
    },
    {
        key: 'actions',
        label: '',
        isSortable: false,
        render: () => <Button variant="ghost" icon={<MoreVert/>}/>
    }
] as const;
