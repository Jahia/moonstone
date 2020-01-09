import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './TreeView.scss';
import classnames from 'clsx';
import {Typography} from '~/components/Typography';
import ChevronDown from '~/icons/asset/ChevronDown.svg';
import ChevronRight from '~/icons/asset/ChevronRight.svg';
import Loading from '~/icons/asset/Loading.svg';

export const TreeView = ({data, openedItems, loadingItems, selectedItems, onClick, onDoubleClick, onClickToOpen, isReversed}) => {
    const [openedNodes, setOpenedNodes] = useState(openedItems);
    const nestedWidth = '24px';
    const marginLeftIcon = '4px';

    function generateLevelJSX(data, deep) {
        return data.map(node => {
            const hasChild = Boolean(node.children && node.children.length !== 0);
            const isOpen = Boolean(openedNodes.includes(node.id));
            const isLoading = Boolean(loadingItems.includes(node.id));
            const isSelected = Boolean(selectedItems.includes(node.id));

            // ---
            // Manage clicks events
            // ---
            const toggleNode = e => {
                if (isOpen) {
                    setOpenedNodes(openedNodes.filter(item => item !== node.id));
                } else {
                    setOpenedNodes([...openedNodes, node.id]);
                    onClickToOpen(node, e);
                }
            };

            const handleNodeClick = e => {
                onClick(node, e);
            };

            const handleNodeDoubleClick = e => {
                onDoubleClick(node, e);
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
                        <div className={cssTreeViewItem} style={{paddingLeft: `calc(${nestedWidth} * ${deep}`}}>
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

                        {isOpen &&
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
                    style={{paddingLeft: `calc(${nestedWidth} * ${deep} + ${marginLeftIcon}`}}
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

TreeView.defaultProps = {
    onClick: () => {},
    onDoubleClick: () => {},
    onClickToOpen: () => {},
    openedItems: [],
    loadingItems: [],
    selectedItems: [],
    isReversed: false
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
        children: PropTypes.arrayOf(PropTypes.object)
    })).isRequired,

    /**
     * Opened items' ids
     */
    openedItems: PropTypes.array,

    /**
     * Loading items' ids
     */
    loadingItems: PropTypes.array,

    /**
     * Selected items' ids
     */
    selectedItems: PropTypes.array,

    /**
     * Trigger on opening node
     */
    onClickToOpen: PropTypes.func,

    /**
     * Trigger by clicking on node
     */
    onClick: PropTypes.func,

    /**
     * Trigger by double clicking on node
     */
    onDoubleClick: PropTypes.func,

    /**
     * Reverse color usefull for context with dark background
     */
    isReversed: PropTypes.bool
};
