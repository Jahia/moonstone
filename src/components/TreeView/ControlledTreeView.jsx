import classnames from 'clsx';
import styles from './TreeView.scss';
import Loading from '~/tokens/icons/asset/Loading.svg';
import ChevronDown from '~/tokens/icons/asset/ChevronDown.svg';
import ChevronRight from '~/tokens/icons/asset/ChevronRight.svg';
import {Typography} from '~/components';
import PropTypes from 'prop-types';
import React from 'react';

const imgSizes = {
    small: '12px',
    default: '16px'
};

export const ControlledTreeView = ({data, openedItems, selectedItems, onClickItem, onDoubleClickItem, onContextMenuItem, onOpenItem, onCloseItem, isReversed, ...props}) => {
    function generateLevelJSX(data, deep) {
        return data.map(node => {
            const hasChild = Boolean(node.hasChildren || (node.children && node.children.length !== 0));
            const isClosable = Boolean(node.isClosable !== false);
            const isOpen = Boolean(openedItems.includes(node.id)) || !isClosable;
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

            const handleNodeContextMenu = e => {
                onContextMenuItem(node, e);
            };

            // ---
            // Define CSS treeView_item classes
            // ---
            const cssTreeViewItem = classnames(
                'flexRow_between',
                'alignCenter',
                styles.treeView_item,
                {
                    [styles.selected]: isSelected,
                    [styles.reversed]: isReversed
                }
            );

            // Manage treeView_item's icon
            const displayIcon = (icon, size, className) => {
                if (typeof icon === 'undefined') {
                    return;
                }

                // Manage url image and icon component
                const i = (typeof icon === 'string') ?
                    <img alt={`icon for ${node.label}`} width={imgSizes[size]} height={imgSizes[size]} src={icon}/> :
                    <icon.type {...icon.props} size={size}/>;

                return (
                    <i className={classnames('flexRow', 'alignCenter', styles.treeView_itemIcon, className)}>
                        {i}
                    </i>
                );
            };

            // Manage if we display icon or loading
            const displayIconOrLoading = icon => {
                const i = isLoading ? <Loading size="big" className="moonstone-icon_isLoading"/> : icon;

                return displayIcon(i, 'default', styles.treeView_itemIconEnd);
            };

            // TreeItem has child
            return (
                <React.Fragment key={`${deep}-${node.id}`}>
                    <li role="treeitem" aria-expanded={isOpen}>
                        <div className={cssTreeViewItem}
                             style={{
                                 paddingRight: 'var(--spacing-small)',
                                 paddingLeft: `calc(var(--spacing-medium) + var(--spacing-medium) * ${deep}`
                             }}
                        >
                            {/* Icon arrow */}
                            {isClosable && (
                                (hasChild &&
                                    <div
                                        className={classnames('flexRow', 'alignCenter', styles.treeView_itemIcon, styles.treeView_itemToggle)}
                                        onClick={toggleNode}
                                    >
                                        {isOpen ? <ChevronDown/> : <ChevronRight/>}
                                    </div>
                                ) || (
                                    <div
                                        className={classnames('flexRow', 'alignCenter', styles.treeView_itemIcon, styles.treeView_itemToggle)}/>
                                )
                            )}

                            {/* TreeViewItem */}
                            <div
                                className={classnames('flexRow', 'alignCenter', 'flexFluid', styles.treeView_itemLabel)}
                                onClick={handleNodeClick}
                                onDoubleClick={handleNodeDoubleClick}
                                onContextMenu={handleNodeContextMenu}
                            >
                                {displayIcon(node.iconStart, 'small', styles.treeView_itemIconStart)}
                                <Typography isNowrap
                                            {...node.typographyOptions}
                                            className={classnames('flexFluid')}
                                            component="span"
                                            variant="body"
                                >
                                    {node.label}
                                </Typography>
                                {displayIconOrLoading(node.iconEnd)}
                            </div>
                        </div>
                    </li>
                    {isOpen && node.children && generateLevelJSX(node.children, isClosable ? (deep + 1) : deep)}
                </React.Fragment>
            );
        });
    }

    // TreeView component
    return (
        <ul role="tree" {...props}>
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
        isClosable: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.object),
        isLoading: PropTypes.bool,
        typographyOptions: PropTypes.object
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
     * Trigger by right clicking on node
     */
    onContextMenuItem: PropTypes.func,

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed: PropTypes.bool
};

ControlledTreeView.defaultProps = {
    onClickItem: () => {},
    onDoubleClickItem: () => {},
    onContextMenuItem: () => {},
    onOpenItem: () => {},
    onCloseItem: () => {},
    openedItems: [],
    selectedItems: [],
    isReversed: false
};

