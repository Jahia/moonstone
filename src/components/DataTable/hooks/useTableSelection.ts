import {useState} from 'react';
import type {RowSelectionState} from '@tanstack/react-table';
import type {SelectionProps} from '../DataTable.types';

type UseTableSelectionProps = Pick<SelectionProps, 'selection' | 'defaultSelection' | 'onChangeSelection'>;

export function useTableSelection({selection, defaultSelection = [], onChangeSelection}: UseTableSelectionProps) {
    const isSelectionControlled = selection !== undefined;

    const [state, setState] = useState<RowSelectionState>(
        () => defaultSelection.reduce<RowSelectionState>((acc, id) => ({...acc, [id]: true}), {})
    );

    const rowSelection = isSelectionControlled ?
        selection.reduce<RowSelectionState>((acc, id) => ({...acc, [id]: true}), {}) :
        state;

    const handleRowSelectionChange = (updater: React.SetStateAction<RowSelectionState>) => {
        const next = typeof updater === 'function' ? updater(rowSelection) : updater;

        if (!isSelectionControlled) {
            setState(next);
        }

        onChangeSelection?.(Object.keys(next).filter(id => next[id]));
    };

    return {rowSelection, isSelectionControlled, handleRowSelectionChange};
}
