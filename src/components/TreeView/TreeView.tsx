import React from 'react';
import type {TreeViewProps} from './TreeView.types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

const TreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, TreeViewProps> = ({openedItems, defaultOpenedItems, data, onOpenItem, onCloseItem, ...others}, ref) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} data={data} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
    }

    return <ControlledTreeView ref={ref} openedItems={openedItems} data={data} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

export const TreeView = React.forwardRef(TreeViewForwardRef);

TreeView.displayName = 'TreeView';
