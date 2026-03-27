import type {ChipProps} from '~/components/Chip/Chip.types';
import type { TableCellStatusProps } from '~/components/DataTable';
import {Edit, CloudCheck, NoCloud, Delete} from '~/icons';
import type {DataUser} from './columnsUser';

type getStatusReturn = {
    color:  NonNullable<TableCellStatusProps['color']>;
    chipColor: NonNullable<ChipProps['color']>;
    iconStart?: React.ReactNode;
    text: string;
};

export const getStatus = (status: DataUser['status']): getStatusReturn => {
    if (status === 'published') {
        return {
            color: 'success',
            chipColor: 'success',
            iconStart: <CloudCheck/>,
            text: 'Published by root on March 5, 2026 7:31 AM'
        };
    }

    if (status === 'modified') {
        return {
            color: 'warning',
            chipColor: 'warning',
            iconStart: <Edit/>,
            text: 'Modified by root on March 5, 2026 10:53 AM'
        };
    }

    if (status === 'unpublished') {
        return {
            color: 'default',
            chipColor: 'default',
            iconStart: <NoCloud/>,
            text: 'Unpublished by root on March 5, 2026 8:12 AM'
        };
    }

    if (status === 'deleted') {
        return {
            color: 'danger',
            chipColor: 'danger',
            iconStart: <Delete/>,
            text: 'Deleted by root on March 5, 2026 8:12 AM'
        };
    }

    if (status === 'new') {
        return {
            color: 'dark',
            chipColor: 'default',
            iconStart: <NoCloud/>,
            text: 'Created by root on March 5, 2026 8:12 AM'
        };
    }

    return {
        color: 'default',
        chipColor: 'default',
        text: status
    };
};
