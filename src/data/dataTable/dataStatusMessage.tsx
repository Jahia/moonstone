import {Publish, WorkInProgress, Lock} from '~/icons';
import type {DataUser} from './dataColumnsUser';
import type {TableCellStatusProps} from '~/components/DataTable';

type StatusMessage = Pick<TableCellStatusProps, 'color' | 'iconStart' | 'text'>;

export const getStatusMessage = (status: DataUser['status']): StatusMessage => {
    if (status === 'Active') {
        return {
            color: 'success',
            iconStart: <Publish size="small"/>,
            text: 'Published by root on March 5, 2026 7:31 AM'
        };
    }

    if (status === 'Busy') {
        return {
            color: 'warning',
            iconStart: <WorkInProgress size="small"/>,
            text: 'Pending validation by root on March 5, 2026 10:53 AM'
        };
    }

    if (status === 'Offline') {
        return {
            color: 'danger',
            iconStart: <Lock size="small"/>,
            text: 'Locked by root on March 5, 2026 8:12 AM'
        };
    }

    return {
        color: 'neutral',
        text: status
    };
};
