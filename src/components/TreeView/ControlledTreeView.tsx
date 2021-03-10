import React from 'react';
import clsx from 'clsx';
import './TreeView.scss';
import {ControlledTreeViewProps} from './ControlledTreeView.types';
import {TreeViewData} from './TreeView.types';
import Loading from '~/icons/Loading';
import ChevronDown from '~/icons/ChevronDown';
import ChevronRight from '~/icons/ChevronRight';
import {Typography} from '~/components/Typography';

export const ControlledTreeView: React.FC<ControlledTreeViewProps> = ({
    data,
    openedItems = [],
    selectedItems = [],
    onClickItem = () => undefined,
    onDoubleClickItem = () => undefined,
    onContextMenuItem = () => undefined,
    onOpenItem = () => undefined,
    onCloseItem = () => undefined,
    isReversed = false,
    ...props
}) => {
    const isFlatData = data.filter(item => item.children && item.children.length > 0).length === 0;

    // TODO: Shadowed variables `deep` and `isFlatData` need to be renamed
    // tslint:disable-next-line:no-shadowed-variable
    function generateLevelJSX(data: TreeViewData[], deep: number, parentHasIconStart: boolean, isFlatData: boolean) {
        return data.map(node => {
            const hasChild = Boolean(node.hasChildren || (node.children && node.children.length !== 0));
            const hasIconStart = Boolean(node.iconStart);
            const isClosable = Boolean(node.isClosable !== false);
            const isOpen = Boolean(openedItems.includes(node.id)) || !isClosable;
            const isLoading = Boolean(node.isLoading);
            const isSelected = Boolean(selectedItems.includes(node.id));

            // ---
            // Manage clicks events
            // ---
            const toggleNode = (e: React.SyntheticEvent) => {
                if (isOpen) {
                    onCloseItem(node, e);
                } else {
                    onOpenItem(node, e);
                }
            };

            const handleNodeClick = (e: React.MouseEvent) => {
                if (onClickItem.length === 0) {
                    toggleNode(e);
                }

                onClickItem(node, e, toggleNode);
            };

            const handleNodeDoubleClick = (e: React.MouseEvent) => {
                onDoubleClickItem(node, e);
            };

            const handleNodeContextMenu = (e: React.MouseEvent) => {
                onContextMenuItem(node, e);
            };

            // ---
            // Define CSS treeView_item classes
            // ---
            const cssTreeViewItem = clsx(
                'flexRow_between',
                'alignCenter',
                'moonstone-treeView_item',
                {
                    'moonstone-selected': isSelected,
                    'moonstone-reversed': isReversed
                }
            );

            // Manage treeView_item's icon
            // TODO: Shadowed variable `parentHasIconStart` needs to be renamed
            // tslint:disable-next-line:no-shadowed-variable
            const displayIcon = (icon: React.ReactElement, size: string, className: string, parentHasIconStart: boolean = false) => {
                if (!icon && !parentHasIconStart) {
                    return;
                }

                return (
                    <i className={clsx('flexRow', 'alignCenter', className)}>
                        {icon &&
                            <icon.type {...icon.props} size={size}/>}
                    </i>
                );
            };

            // Manage if we display icon or loading
            const displayIconOrLoading = (icon: React.ReactElement) => {
                const i = isLoading ? <Loading size="big" className="moonstone-icon_isLoading"/> : icon;

                return displayIcon(i, 'default', 'moonstone-treeView_itemIconEnd');
            };

            // TreeItem has child
            return (
                <React.Fragment key={`${deep}-${node.id}`}>
                    <li role="treeitem"
                        aria-expanded={isOpen}
                        {...node.treeItemProps}
                    >
                        <div
                            className={cssTreeViewItem}
                            style={{
                                paddingLeft: `calc((var(--spacing-medium) + var(--spacing-nano)) * ${deep} + var(--spacing-medium))`
                            }}
                        >
                            {/* Icon arrow */}
                            {isClosable && hasChild && (
                                <div
                                    className={clsx('flexRow', 'alignCenter', 'moonstone-treeView_itemToggle')}
                                    onClick={toggleNode}
                                >
                                    {isOpen ? <ChevronDown/> : <ChevronRight/>}
                                </div>
                            )}
                            {!isFlatData && !hasChild &&
                                <div className={clsx('flexRow', 'alignCenter', 'moonstone-treeView_itemToggle')}/>}

                            {/* TreeViewItem */}
                            <div
                                className={clsx('flexRow_nowrap', 'alignCenter', 'flexFluid', 'moonstone-treeView_itemLabel', node.className)}
                                onClick={handleNodeClick}
                                onDoubleClick={handleNodeDoubleClick}
                                onContextMenu={handleNodeContextMenu}
                            >
                                {displayIcon(node.iconStart, 'small', 'moonstone-treeView_itemIconStart', parentHasIconStart)}
                                <Typography isNowrap
                                            className={clsx('flexFluid')}
                                            component="span"
                                            variant="body"
                                            {...node.typographyOptions}
                                >
                                    {node.label}
                                </Typography>
                                {displayIconOrLoading(node.iconEnd)}
                            </div>
                        </div>
                    </li>
                    {isOpen && node.children && generateLevelJSX(node.children, isClosable ? (deep + 1) : deep, hasIconStart, isFlatData)}
                </React.Fragment>
            );
        });
    }

    // TreeView component
    return (
        <ul role="tree" {...props}>
            {generateLevelJSX(data, 0, false, isFlatData)}
        </ul>
    );
};
