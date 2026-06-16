import React, {useState} from 'react';
import type {ExpandedState} from '@tanstack/react-table';

type UseExpansionProps = {
    expandedRows?: string[];
    defaultExpandedRows?: true | string[];
    onExpandChange?: (expandedRows: string[]) => void;
};

function toExpandedState(ids: string[]): ExpandedState {
    return ids.reduce<Record<string, boolean>>((acc, id) => ({...acc, [id]: true}), {});
}

function toRowIds(state: ExpandedState): string[] {
    if (state === true) {
        return [];
    }

    return Object.keys(state).filter(id => (state as Record<string, boolean>)[id]);
}

export function useExpansion({expandedRows, defaultExpandedRows, onExpandChange}: UseExpansionProps) {
    const isExpansionControlled = expandedRows !== undefined;

    const [state, setState] = useState<ExpandedState>(() => {
        if (defaultExpandedRows === true) {
            return true;
        }

        if (defaultExpandedRows) {
            return toExpandedState(defaultExpandedRows);
        }

        return {};
    });

    const expanded: ExpandedState = isExpansionControlled ? toExpandedState(expandedRows) : state;

    const handleExpandedChange = (updater: React.SetStateAction<ExpandedState>) => {
        const next = typeof updater === 'function' ? updater(expanded) : updater;

        if (!isExpansionControlled) {
            setState(next);
        }

        onExpandChange?.(toRowIds(next));
    };

    return {expanded, isExpansionControlled, handleExpandedChange};
}
