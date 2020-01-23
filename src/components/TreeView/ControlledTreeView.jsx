import classnames from 'clsx';
import styles from './TreeView.scss';
import Loading from '~/tokens/icons/asset/Loading.svg';
import ChevronDown from '~/tokens/icons/asset/ChevronDown.svg';
import ChevronRight from '~/tokens/icons/asset/ChevronRight.svg';
import {Typography} from '~/components';
import PropTypes from 'prop-types';
import React from 'react';

export const ControlledTreeView = ({data, openedItems, selectedItems, onClickItem, onDoubleClickItem, onOpenItem, onCloseItem, isReversed}) => {
    function generateLevelJSX(data, deep) {
        return data.map(node => {
            const hasChild = Boolean(node.hasChildren || (node.children && node.children.length !== 0));
            const isOpen = Boolean(openedItems.includes(node.id));
            const isLoading = Boolean(node.isLoading);
            const isSelected = Boolean(selectedItems.includes(node.id));

            // ---
            // Manage clicks events
            // ---
            const toggleNode = e => {
                if (isOpen) {
                    onCloseItem(node, e);
                } else {
                    onOpenItem(node, e);
                }
            };

            const handleNodeClick = e => {
                onClickItem(node, e);
            };

            const handleNodeDoubleClick = e => {
                onDoubleClickItem(node, e);
            };

            // ---
            // Define CSS treeViewItem classes
            // ---
            const cssTreeViewItem = classnames(
                'flexRow_between',
                'alignCenter',
                styles.treeViewItem,
                isSelected ? styles.treeViewItem_selected : null,
                isReversed ? styles.treeViewItem_reversed : null
            );

            // Manage treeViewItem's icon
            const displayIcon = icon => {
                if (typeof icon === 'undefined') {
                    return;
                }

                // Manage url image and icon component
                const i = (typeof icon === 'string') ? <img alt={`icon for ${node.label}`} width="16px" height="16px" src={icon}/> : icon;

                return (
                    <i className={classnames(styles.treeViewItem_icon)}>
                        {i}
                    </i>
                );
            };

            // Manage if we display icon or loading
            const displayIconOrLoading = icon => {
                const i = isLoading ? <Loading size="small" className="moonstone-icon_isLoading"/> : icon;

                return displayIcon(i);
            };

            // TreeItem has child
            if (hasChild) {
                return (
                    <li key={`${deep}-${node.id}`} role="treeitem" aria-expanded={isOpen}>
                        <div className={cssTreeViewItem} style={{paddingLeft: `calc(var(--spacing-large) * ${deep}`}}>
                            {/* Icon arrow */}
                            <div className={classnames('flexRow', 'alignCenter', styles.treeViewItem_toggle)} onClick={toggleNode}>
                                {isOpen ? <ChevronDown/> : <ChevronRight/> }
                            </div>

                            {/* TreeViewItem */}
                            <div className={classnames('flexRow', 'alignCenter', 'flexFluid', styles.treeViewItem_label)}
                                 onClick={handleNodeClick}
                                 onDoubleClick={handleNodeDoubleClick}
                            >
                                {displayIcon(node.iconStart)}
                                <Typography isNowrap className={classnames('flexFluid')} component="span">{node.label}</Typography>
                                {displayIconOrLoading(node.iconEnd)}
                            </div>
                        </div>

                        {isOpen && node.children &&
                        <ul role="group">
                            {generateLevelJSX(node.children, deep + 1)}
                        </ul>}
                    </li>
                );
            }

            // TreeItem without children
            return (
                <li key={`${deep}-${node.id}`}
                    className={classnames(cssTreeViewItem, styles.treeViewItem_label)}
                    style={{paddingLeft: `calc(var(--spacing-large) * ${deep} + var(--spacing-nano)`}}
                    role="treeitem"
                    onClick={handleNodeClick}
                    onDoubleClick={handleNodeDoubleClick}
                >
                    {displayIcon(node.iconStart)}
                    <Typography isNowrap className={classnames('flexFluid')} component="span">{node.label}</Typography>
                    {displayIconOrLoading(node.iconEnd)}
                </li>
            );
        });
    }

    // TreeView component
    return (
        <ul role="tree" className={classnames(styles.treeView)}>
            {generateLevelJSX(data, 0)}
        </ul>
    );
};

ControlledTreeView.propTypes = {
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
     * Opened items' ids
     */
    openedItems: PropTypes.array,

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

ControlledTreeView.defaultProps = {
    onClickItem: () => {},
    onDoubleClickItem: () => {},
    onOpenItem: () => {},
    onCloseItem: () => {},
    openedItems: [],
    selectedItems: [],
    isReversed: false
};

