import React from 'react';
import {TreeViewProps} from './TreeView.types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

export const TreeView: React.FC<TreeViewProps> = ({openedItems, defaultOpenedItems, onOpenItem, onCloseItem, data, ...others}) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} data={data} {...others}/>;
    }

    return <ControlledTreeView openedItems={openedItems} data={data} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

TreeView.defaultProps = {
    onClickItem: () => undefined,
    onDoubleClickItem: () => undefined,
    onContextMenuItem: () => undefined,
    openedItems: undefined,
    defaultOpenedItems: [],
    selectedItems: [],
    isReversed: false
};

TreeView.displayName = 'TreeView';
