import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ControlledTreeView} from './ControlledTreeView';

export const UncontrolledTreeView = ({defaultOpenedItems, ...others}) => {
    const [openedItems, setOpenedItems] = useState(defaultOpenedItems);

    const onOpenItem = node => {
        setOpenedItems(openedItems => [...openedItems, node.id]);
    };

    const onCloseItem = node => {
        setOpenedItems(openedItems => openedItems.filter(item => item !== node.id));
    };

    return <ControlledTreeView openedItems={openedItems} onOpenItem={onOpenItem} onCloseItem={onCloseItem} {...others}/>;
};

UncontrolledTreeView.propTypes = {
    /**
     * Data to generate the tree
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        iconStart: PropTypes.nodes,
        iconEnd: PropTypes.nodes,
        hasChildren: PropTypes.bool,
        isClosable: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool,
        className: PropTypes.string,
        typographyOptions: PropTypes.object,
        treeItemProps: PropTypes.object
    })).isRequired,

    /**
     * Opened items' ids
     */
    defaultOpenedItems: PropTypes.array,

    /**
     * Selected items' ids
     */
    selectedItems: PropTypes.array,

    /**
     * Trigger by clicking on node
     */
    onClickItem: PropTypes.func,

    /**
     * Trigger by double clicking on node
     */
    onDoubleClickItem: PropTypes.func,

    /**
     * Trigger by right clicking on node
     */
    onContextMenuItem: PropTypes.func,

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed: PropTypes.bool
};

UncontrolledTreeView.defaultProps = {
    onClickItem: () => {},
    onDoubleClickItem: () => {},
    onContextMenuItem: () => {},
    defaultOpenedItems: [],
    selectedItems: [],
    isReversed: false
};

