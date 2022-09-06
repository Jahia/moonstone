import React from 'react';

import type {DropdownDataTree} from '../BaseDropdown/BaseDropdown.types';
import type {DropdownMenuTreeProps} from './DropdownMenuTree.types';

import {TreeView} from '~/components';

function getParents(data: DropdownDataTree[], ids: string[]): string[] {
    const parentsId: string[] = [];

    if (Array.isArray(data) && ids && ids.length > 0) {
        data.some(function iter(a) {
            if (ids.includes(a.id)) {
                ids.push(a.id);
                return true;
            }

            return Array.isArray(a.children) && a.children.some(iter, parentsId.push(a.id));
        }, []);
    }

    return parentsId;
}

const findNodes = (data: DropdownDataTree, selectedValues: string[], opened?: string[]): string => {
    if (selectedValues.includes(data.value)) {
        return data.id;
    }

    if (data.children) {
        const result = data.children.reduce((current, child) => {
            return current || findNodes(child, selectedValues, opened);
        }, '');
        console.log('findNodes');
        console.log(result);
        return result;
    }
};

export const DropdownMenuTree: React.FC<DropdownMenuTreeProps> = ({
    data,
    handleSelect,
    selectedNodesId,
    selectedValues,
    openedBySearch,
    // HandleKeyPress,
    ...props
}) => {
    // TODO: openedBySelection does'nt work anymore since I introduced multiple selection
    const openedBySelection = getParents(data, selectedNodesId);
    console.log(selectedNodesId);
    if (selectedValues.length > 0) {
        data.forEach(node => {
            findNodes(node, selectedValues);
        });
    }

    return (
        <TreeView
            data={data}
            selectedItems={selectedNodesId}
            defaultOpenedItems={[...openedBySearch, ...openedBySelection]}
            onClickItem={(node, e) => {
                handleSelect(e, node);
            }}
            {...props}
        />
    );
};
