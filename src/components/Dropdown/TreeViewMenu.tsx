import React, {useState} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {TreeViewMenuProps} from './TreeViewMenu.types';
import {SearchInput, TreeView} from '~/components';
import '../Menu/Menu.scss';
import {TreeViewData} from '~/components/TreeView/TreeView.types';
import clsx from 'clsx';

function filterNodes(text: string, nodes: TreeViewData[], opened: string[]) {
    const filtered: TreeViewData[] = [];
    nodes.forEach(c => {
        const filterResult = filterNode(text, c, opened);
        if (filterResult) {
            filtered.push(filterResult);
        }
    });
    return filtered;
}

const filterNode = (text: string, node: TreeViewData, opened: string[]) => {
    const match = node.label.toLowerCase().includes(text);
    const children: TreeViewData[] = [];
    if (node.children) {
        const filteredChildren = filterNodes(text, node.children, opened);
        if (filteredChildren.length > 0) {
            children.push(...filteredChildren);
            opened.push(node.id);
        }
    }

    if (match || children.length > 0) {
        return {
            ...node,
            treeItemProps: {className: clsx({
                'moonstone-disabled': !match
            })},
            children
        };
    }
};

const find = (value: string, data: TreeViewData, opened: string[]): string => {
    if (data.value === value) {
        return data.id;
    }

    if (data.children) {
        const res = data.children.reduce((current, child) => {
            return current || find(value, child, opened);
        }, '');

        if (res) {
            opened.push(data.id);
        }

        return res;
    }
};

export const TreeViewMenu: React.FC<TreeViewMenuProps> = ({
    isDisplayed,
    minWidth,
    maxWidth,
    maxHeight,
    anchorEl,
    anchorPosition,
    anchorElOrigin,
    transformElOrigin,
    position,
    hasOverlay,
    hasSearch,
    // SearchEmptyText,
    treeData,
    value,
    values,
    handleSelect,
    // HandleKeyPress,
    onClose,
    ...props
}) => {
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    // UseEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [openedItems, setOpenedItems] = useState([]);

    const onOpenItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => [...previousOpenedItems, node.id]);
    };

    const onCloseItem = (node: TreeViewData) => {
        setOpenedItems(previousOpenedItems => previousOpenedItems.filter(item => item !== node.id));
    };

    const openedBySearch: string[] = [];
    const selected: string[] = [];

    if (inputValue !== '') {
        treeData = filterNodes(inputValue, treeData, openedBySearch);
    }

    if (value) {
        treeData.forEach(single => {
            const id = find(value, single, openedBySearch);
            if (id) {
                selected.push(id);
            }
        });
    }

    if (values) {
        values.forEach(v => {
            treeData.forEach(single => {
                const id = find(v, single, openedBySearch);
                if (id) {
                    selected.push(id);
                }
            });
        });
    }

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition as React.CSSProperties
    };

    if (minWidth) {
        styleMenu.minWidth = minWidth;
    }

    if (maxWidth) {
        styleMenu.maxWidth = maxWidth;
    }

    if (maxHeight) {
        styleMenu.maxHeight = maxHeight;
    }

    // ---
    // Render
    // ---
    return (
        <>
            <menu ref={itemRef}
                  className="moonstone-menu"
                  style={styleMenu}
                  {...props}
            >
                {hasSearch && (
                    <div className="moonstone-menu_searchInput">
                        <SearchInput
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={e => {
                                if (e.key === 'Enter' && treeData.length > 0) {
                                    handleSelect(e, treeData[0]);
                                }
                            }}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                <TreeView data={treeData}
                          selectedItems={selected}
                          size="small"
                          showCheckbox={Boolean(values)}
                          openedItems={[...openedItems, ...openedBySearch]}
                          onOpenItem={onOpenItem}
                          onCloseItem={onCloseItem}
                          onClickItem={(node, e) => {
                              handleSelect(e, node);
                          }}
                />
            </menu>
            {
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className="moonstone-menu_overlay"
                        onClick={onClose}
                        onContextMenu={onClose}
                    />
                )
            }
        </>
    );
};

// Kept defaultProps here because of unnecessary re-rendering when provided as default parameters to the function component
/* eslint-disable react/default-props-match-prop-types */
TreeViewMenu.defaultProps = {
    hasOverlay: true,
    hasSearch: false,
    searchEmptyText: 'No results found.',
    position: 'fixed',
    anchorEl: null,
    anchorPosition: {
        top: 0,
        left: 0
    },
    anchorElOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    transformElOrigin: {
        vertical: 'top',
        horizontal: 'left'
    }
};
/* eslint-enable react/default-props-match-prop-types */

TreeViewMenu.displayName = 'TreeViewMenu';
