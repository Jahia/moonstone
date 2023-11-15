import React from 'react';
import {TreeViewProps} from './TreeView.types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

const TreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, TreeViewProps> = ({openedItems, defaultOpenedItems, data, ...others}, ref) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} data={data} {...others}/>;
    }

    return <ControlledTreeView ref={ref} openedItems={openedItems} data={data} {...others}/>;
};

export const TreeView = React.forwardRef(TreeViewForwardRef);

TreeView.displayName = 'TreeView';
