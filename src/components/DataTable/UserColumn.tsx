import {Badge} from '~/index';
import type {DataTableColumn} from './types/DataTableColumn.types';
import type {UserDataRowProps} from './types/UserDataRow.types';
import {TableCellWrapper} from './cells/TableCellWrapper';

export const userColumns: DataTableColumn<UserDataRowProps>[] = [
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
];
