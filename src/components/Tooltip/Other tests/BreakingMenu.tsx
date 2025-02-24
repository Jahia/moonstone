import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import './FloatingMenu.scss';
import type {MenuProps} from '~/components/Menu/Menu.types';
import {SearchInput} from '~/components/Input';
import {Typography} from '~/components/Typography';
import {useFloating, offset} from '@floating-ui/react';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';

const getChildrenToFilter = (children: [React.ReactElement]) => {
    if (children[0].props['data-option-type'] === 'group') {
        return children.reduce((acc, curr) => {
            return [...acc, ...curr.props.children[2]];
        }, []);
    }

    return children;
};

// I tried to optimize our current Menu component by implementing Floating UI
// Removed now unecessary props and lines, causing breaking changes
export const BreakingMenu: React.FC<MenuProps> = ({
    children,
    isDisplayed,
    position,
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    anchorEl,
    anchorPosition,
    onClose,
    onEntering,
    onEntered,
    onExiting,
    onExited,
    hasOverlay,
    hasSearch,
    autoAddSearchLimit,
    searchEmptyText,
    ...props
}) => {
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [filteredChildren, setFilteredChildren] = useState(children);
    const [isEmptySearch, setIsEmptySearch] = useState(false);
    const {refs, floatingStyles} = useFloating({strategy: position, elements: {reference: anchorEl && anchorEl.current}, placement: 'bottom-start', middleware: [offset({mainAxis: 5, crossAxis: 5})]});

    // Creating an anchor element at the passed anchorPosition (should be the mouse's X & Y), or using passed anchorEl
    useEffect(() => {
        refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: anchorPosition.left ?? anchorEl.current.offsetLeft,
                    y: anchorPosition.top ?? anchorEl.current.offsetTop,
                    top: anchorPosition.top ?? anchorEl.current.offsetTop,
                    right: anchorPosition.left ?? anchorEl.current.offsetLeft,
                    bottom: anchorPosition.top ?? anchorEl.current.offsetTop,
                    left: anchorPosition.left ?? anchorEl.current.offsetLeft
                };
            }
        });

        if (inputValue !== '' && Array.isArray(children)) {
            const _childrenToFilter = getChildrenToFilter(children as [React.ReactElement]);
            const _filtered = _childrenToFilter.filter((child: React.ReactElement) => {
                if (child.props && child.props.label) {
                    const contains = child.props.label.toLowerCase().includes(inputValue.toLowerCase());
                    return contains && child.props.variant !== 'title';
                }

                return false;
            });
            setFilteredChildren(_filtered);

            if (_filtered.length === 0) {
                setIsEmptySearch(true);
            } else {
                setIsEmptySearch(false);
            }
        } else {
            setFilteredChildren(null);
            setIsEmptySearch(false);
        }
    }, [inputValue, children, anchorEl, anchorPosition, refs]);

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    let hasAutoSearch = hasSearch;
    if (typeof hasSearch === 'undefined') {
        const flatChildren = (Array.isArray(children)) ? getChildrenToFilter(children as [React.ReactElement]) : children; // Check for grouped data
        hasAutoSearch = React.Children.count(flatChildren) > autoAddSearchLimit;
    }

    // ---
    // Render
    // ---
    return (
        <>
            <menu
                ref={refs.setFloating}
                style={{...floatingStyles, ...style}}
                role="listbox"
                className={clsx(
                    'moonstone-menu',
                    className,
                    {'moonstone-hidden': !isDisplayed}
                )}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...props}
            >
                { hasAutoSearch && (
                    <div className="moonstone-menu_searchInput">
                        <SearchInput
                            focusOnField
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    const list = React.Children.toArray(filteredChildren);
                                    if (list.length > 0) {
                                        (list[0] as React.ReactElement).props.onClick(e);
                                    }
                                }
                            }}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                {filteredChildren || children}
                {isEmptySearch && (
                    <Typography
                        className="moonstone-menu_emptySearchText"
                        variant="caption"
                    >
                        {searchEmptyText}
                    </Typography>
                )}
            </menu>
            {hasOverlay && isDisplayed && (
            <div
                        aria-hidden="true"
                        className="moonstone-menu_overlay"
                        onClick={onClose}
                        onContextMenu={onClose}
                    />
            )}
        </>
    );
};

BreakingMenu.displayName = 'BreakingMenu';
