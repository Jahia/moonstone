import {useState} from 'react';
import type {RowSelectionState} from '@tanstack/react-table';
import type {DataTableProps} from '~/components/DataTable/DataTable.types';

type Props = Pick<DataTableProps<Record<string, unknown>>, 'selection' | 'defaultSelection' | 'onChangeSelection'>;

export function useTableSelection({selection, defaultSelection = [], onChangeSelection}: Props) {
    const isControlled = selection !== undefined;

    const [internal, setInternal] = useState<RowSelectionState>(
        () => defaultSelection.reduce<RowSelectionState>((acc, id) => ({...acc, [id]: true}), {})
    );

    const rowSelection = isControlled
        ? selection.reduce<RowSelectionState>((acc, id) => ({...acc, [id]: true}), {})
        : internal;

    const handleRowSelectionChange = (updater: React.SetStateAction<RowSelectionState>) => {
        const next = typeof updater === 'function' ? updater(rowSelection) : updater;

        if (!isControlled) {
            setInternal(next);
        }

        onChangeSelection?.(Object.keys(next).filter(id => next[id]));
    };

    return {rowSelection, handleRowSelectionChange};
}
