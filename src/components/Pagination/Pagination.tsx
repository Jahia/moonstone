import React from 'react';

import { ControlledPagination } from './ControlledPagination';
import { UncontrolledPagination } from './UncontrolledPagination';

import type { ControlledPaginationProps, PaginationProps } from './Pagination.types';

const isControlledPagination = (props: PaginationProps): props is ControlledPaginationProps =>
    typeof props.currentPage !== 'undefined';

export const Pagination: React.FC<PaginationProps> = (props) => {
    if (isControlledPagination(props)) {
        return <ControlledPagination {...props}/>;
    }

    return <UncontrolledPagination {...props}/>;
};

Pagination.displayName = 'Pagination';
