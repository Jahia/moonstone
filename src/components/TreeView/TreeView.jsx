import React from 'react';
import PropTypes from 'prop-types';
import {UncontrolledTreeView} from './UncontrolledTreeView';
import {ControlledTreeView} from './ControlledTreeView';

export const TreeView = ({openedItems, defaultOpenedItems, onOpenItem, onCloseItem, ...others}) => {
    if (typeof openedItems === 'undefined') {
        return <UncontrolledTreeView defaultOpenedItems={defaultOpenedItems} {...others}/>;
    }

    return <ControlledTreeView openedItems={openedItems} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

TreeView.propTypes = {
    /**
     * Data to generate the tree
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        iconStart: PropTypes.nodes,
        iconEnd: PropTypes.nodes,
        hasChildren: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool
    })).isRequired,

    /**
     * Opened items ids. If set, component is controlled
     */
    openedItems: PropTypes.array,

    /**
     * Opened items ids by default, when uncontrolled
     */
    defaultOpenedItems: PropTypes.array,

    /**
     * Selected items' ids
     */
    selectedItems: PropTypes.array,

    /**
     * Trigger on opening node
     */
    onOpenItem: PropTypes.func,

    /**
     * Trigger on opening node
     */
    onCloseItem: PropTypes.func,

    /**
     * Trigger by clicking on node
     */
    onClickItem: PropTypes.func,

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem: PropTypes.func,

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed: PropTypes.bool
};

TreeView.defaultProps = {
    onClickItem: () => {},
    onDoubleClickItem: () => {},
    openedItems: undefined,
    defaultOpenedItems: [],
    selectedItems: [],
    isReversed: false
};

TreeView.displayName = 'TreeView';
