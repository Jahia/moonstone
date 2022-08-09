import React from 'react';

import {TreeView} from '~/components';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';
import type {DropdownMenuTreeProps} from './DropdownMenuTree.types';

const getSelectedIds = (selectedNodes: TreeViewData[]): string[] => {
    const ids: string[] = [];

    if (Array.isArray(selectedNodes) && selectedNodes.length > 0) {
        selectedNodes.forEach(node => {
            ids.push(node.id);
        });
    }

    return ids;
};

function getParents(data: TreeViewData[], id: string): string[] {
    const ids: string[] = [];

    if (Array.isArray(data) && id) {
        data.some(function iter(a) {
            if (a.id === id) {
                ids.push(a.id);
                return true;
            }

            return Array.isArray(a.children) && a.children.some(iter, ids.push(a.id));
        }, []);
    }

    return ids;
}

const findNodes = (data: TreeViewData, value: string, opened?: string[]): string => {
    if (data.value === value) {
        return data.id;
    }

    if (data.children) {
        const result = data.children.reduce((current, child) => {
            return current || findNodes(child, value, opened);
        }, '');

        return result;
    }
};

export const DropdownMenuTree: React.FC<DropdownMenuTreeProps> = ({
    data,
    handleSelect,
    selectedNodes,
    value,
    openedBySearch,
    // HandleKeyPress,
    ...props
}) => {
    const selectedIds = getSelectedIds(selectedNodes);
    const openedBySelection = getParents(data, selectedIds[0]);

    if (value) {
        data.forEach(node => {
            findNodes(node, value);
        });
    }

    return (
        <TreeView
            data={data}
            selectedItems={selectedIds}
            defaultOpenedItems={[...openedBySearch, ...openedBySelection]}
            onClickItem={(node, e) => {
                handleSelect(e, node);
            }}
            {...props}
        />
    );
};
