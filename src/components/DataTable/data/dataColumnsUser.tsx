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

export type DataUserKeys = Exclude<keyof dataUser, 'subRows'>;

export const dataColumnsUser = [
    {
        key: 'firstName',
        label: 'User',
        type: 'text'
    },
    {
        key: 'status',
        label: 'Status',
        type: 'status-bar'
    },
    {
        key: 'tags',
        label: 'Roles',
        render: values => (
            <TableCellWrapper>
                <div className="moonstone-cell-chips">
                    {Array.isArray(values) && values
                        .filter((tag): tag is string => typeof tag === 'string')
                        .map((tag, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Badge key={i} label={tag} color="accent"/>
                        ))}
                </div>
            </TableCellWrapper>
        )
    },
    {
        key: 'progress',
        label: 'Progress',
        type: 'number'
    },
    {
        key: 'date',
        label: 'Last Login',
        type: 'date'
    },
    {
        key: 'hoverActions',
        label: '',
        type: 'hover-actions'
    },
    {
        key: 'actions',
        label: '',
        type: 'actions',
        isSortable: false
    }
] as const;
