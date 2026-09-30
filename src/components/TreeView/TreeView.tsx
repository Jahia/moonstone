import React from 'react';

import { ControlledTreeView } from './ControlledTreeView';
import { UncontrolledTreeView } from './UncontrolledTreeView';

import type { TreeViewProps } from './TreeView.types';

const TreeViewForwardRef: React.ForwardRefRenderFunction<HTMLUListElement, TreeViewProps> = ({
    openedItems, defaultOpenedItems, data, onOpenItem, onCloseItem, ...others
}, ref) => {
    // If no data render nothing
    if (!Array.isArray(data) || data.length < 1) {
        return null;
    }

    if (typeof openedItems === 'undefined') {
        return (
            <UncontrolledTreeView
                data={data}
                defaultOpenedItems={defaultOpenedItems}
                onCloseItem={onCloseItem}
                onOpenItem={onOpenItem}
                {...others}
            />
        );
    }

    return (
        <ControlledTreeView
            data={data}
            openedItems={openedItems}
            ref={ref}
            onCloseItem={onCloseItem}
            onOpenItem={onOpenItem}
            {...others}
        />
    );
};

export const TreeView = React.forwardRef(TreeViewForwardRef);

TreeView.displayName = 'TreeView';
