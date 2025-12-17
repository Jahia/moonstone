import clsx from 'clsx';
import {ArrowDown, ArrowUp} from '~/icons';

type SortDirection = 'ascending' | 'descending';

type RenderSortIconOptions = {
    sortDirection?: SortDirection;
    isSorted: boolean;
};

export const renderSortIcon = ({sortDirection, isSorted}: RenderSortIconOptions) => {
    if (!sortDirection) {
        return null;
    }

    const sortClassName = clsx(
        'moonstone-tableCellHead_sort',
        {'moonstone-tableCellHead_sortActive': isSorted}
    );

    if (sortDirection === 'descending') {
        return <ArrowDown aria-label="Icon for sorting in descending order" className={sortClassName}/>;
    }

    if (sortDirection === 'ascending') {
        return <ArrowUp aria-label="Icon for sorting in ascending order" className={sortClassName}/>;
    }

    return null;
};
