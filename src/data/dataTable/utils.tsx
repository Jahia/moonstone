import {Edit, CloudCheck, NoCloud, Delete} from '~/icons';
import type {DataUser} from './dataColumnsUser';

export const getStatus = (status: DataUser['status']) => {
    if (status === 'published') {
        return {
            color: 'success',
            iconStart: <CloudCheck/>,
            text: 'Published by root on March 5, 2026 7:31 AM'
        };
    }

    if (status === 'modified') {
        return {
            color: 'warning',
            iconStart: <Edit/>,
            text: 'Modified by root on March 5, 2026 10:53 AM'
        };
    }

    if (status === 'unpublished') {
        return {
            color: 'neutral',
            iconStart: <NoCloud/>,
            text: 'Unpublished by root on March 5, 2026 8:12 AM'
        };
    }

    if (status === 'deleted') {
        return {
            color: 'danger',
            iconStart: <Delete/>,
            text: 'Deleted by root on March 5, 2026 8:12 AM'
        };
    }

    if (status === 'new') {
        return {
            color: 'dark',
            iconStart: <NoCloud/>,
            text: 'Created by root on March 5, 2026 8:12 AM'
        };
    }

    return {
        color: 'neutral',
        text: status
    };
};
