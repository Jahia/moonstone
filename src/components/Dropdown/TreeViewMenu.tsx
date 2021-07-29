import React, {useState} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {TreeViewMenuProps} from './TreeViewMenu.types';
import {Input, TreeView} from "~/components";
import "../Menu/Menu.scss";


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
                                                              searchEmptyText,
                                                              data,
                                                              handleSelect,
                                                              handleKeyPress,
                                                              ...props
                                                          }) => {

    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    // useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    // const [filteredChildren, setFilteredChildren] = useState(children);
    const [isEmptySearch, setIsEmptySearch] = useState(false);
    //
    // // useEffect hook to filter the search results and determine whether to show the no search results text
    // useEffect(() => {
    //     if (inputValue !== '') {
    //         if (Array.isArray(children)) {
    //             const _childrenToFilter = getChildrenToFilter(children as [React.ReactElement]);
    //             const _filtered = _childrenToFilter.filter((child: React.ReactElement) => {
    //                 if (child.props && child.props.label) {
    //                     const startsWith = child.props.label.toLowerCase().startsWith(inputValue.toLowerCase());
    //                     return startsWith && child.props.variant !== 'title';
    //                 }
    //                 return false;
    //             });
    //             setFilteredChildren(_filtered);
    //
    //             if (_filtered.length === 0) {
    //                 setIsEmptySearch(true);
    //             } else {
    //                 setIsEmptySearch(false);
    //             }
    //         }
    //     } else {
    //         setFilteredChildren(children);
    //         setIsEmptySearch(false);
    //     }
    // }, [inputValue, children]);

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition as React.CSSProperties,
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
            <menu className="moonstone-menu"
                  ref={itemRef}
                  style={styleMenu}
            >
                { hasSearch && (
                    <div className="moonstone-menu_searchInput">
                        <Input
                            variant="search"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                <TreeView data={data}
                          onClickItem={(node, e, toggleNode) => {
                              handleSelect(e, node)
                          }}
                />
            </menu>
            {
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className="moonstone-menu_overlay"
                    />
                )
            }
        </>
    );
};

// Kept defaultProps here because of unnecessary re-rendering when provided as default parameters to the function component
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

TreeViewMenu.displayName = 'TreeViewMenu';
