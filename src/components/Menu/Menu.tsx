import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { SearchInput } from '~/components/Input';
import { Typography } from '~/components/Typography';
import { useEnterExitCallbacks, usePositioning } from '~/hooks';

import type { MenuProps } from './Menu.types';

import styles from './Menu.module.scss';

const getFlatChildren = (children: [React.ReactElement]) => {
    if (children[0].props['data-option-type'] === 'group') {
        return children.reduce((acc, curr) => {
            acc.push(...curr.props.children[2]);
            return acc;
        }, []);
    }

    return children;
};

// Filtering function
const getFilteredChildren = (child: React.ReactElement, inputValue: string) => {
    if (child.props && (child.props.label || child.props.description)) {
        const containsLabel = child.props.label ? child.props.label.toLowerCase().includes(inputValue.toLowerCase()) : false;
        const containsDescription = child.props.description ? child.props.description.toLowerCase().includes(inputValue.toLowerCase()) : false;
        return (containsLabel || containsDescription) && child.props.variant !== 'title';
    }

    return false;
};

const getFilteredGroups = (children: [React.ReactElement], inputValue: string) => {
    // If group then filter each child by inputValue while keeping title & separator
    if (children.length > 0 && children[0].props?.['data-option-type'] === 'group') {
        return children.reduce((acc, curr) => {
            const groupChildren = curr.props.children[2] || [];
            const filteredChildren = groupChildren.filter((child: React.ReactElement) => getFilteredChildren(child, inputValue));

            // If children match the inputValue then add group with only matching children to returning array
            if (filteredChildren.length > 0) {
                const filteredGroup = {
                    ...curr,
                    props: {
                        ...curr.props,
                        children: [
                            // Separator
                            curr.props.children[0],
                            // Title
                            curr.props.children[1],
                            // Filtered children
                            filteredChildren,
                        ],
                    },
                };
                acc.push(filteredGroup);
            }

            return acc;
        }, []);
    }

    return children.filter(child => getFilteredChildren(child, inputValue));
};

const defaultAnchorElOrigin = {
    horizontal: 'left',
    vertical: 'bottom',
} as const;

const defaultTransformElOrigin = {
    vertical: 'top',
    horizontal: 'left',
} as const;

const defaultAnchorPosition = {
    top: 0,
    left: 0,
} as const;

export const Menu: React.FC<MenuProps> = ({
    children,
    isDisplayed,
    position = 'fixed',
    minWidth,
    maxWidth,
    maxHeight,
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    anchorEl = null,
    anchorElOrigin = defaultAnchorElOrigin,
    transformElOrigin = defaultTransformElOrigin,
    anchorPosition = defaultAnchorPosition,
    onClose,
    onEntering,
    onEntered,
    onExiting,
    onExited,
    hasOverlay = true,
    hasSearch,
    autoAddSearchLimit = 7,
    searchEmptyText = 'No results found.',
    ...props
}) => {
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    // Search results are derived from the query, not stored: no effect, no extra render.
    // `null` means "no active search", so the unfiltered children are rendered as-is.
    const filteredChildren = useMemo(
        () => (inputValue !== '' && Array.isArray(children)
            ? getFilteredGroups(children as [React.ReactElement], inputValue)
            : null),
        [inputValue, children],
    );
    const isEmptySearch = filteredChildren !== null && filteredChildren.length === 0;

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    let hasAutoSearch = hasSearch;
    if (typeof hasSearch === 'undefined') {
        const flatChildren = (Array.isArray(children)) ? getFlatChildren(children as [React.ReactElement]) : children; // Check for grouped data
        hasAutoSearch = React.Children.count(flatChildren) > autoAddSearchLimit;
    }

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition,
        ...style,
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
            <menu
                className={clsx(
                    ['moonstone-menu', styles['moonstone-menu']],
                    className,
                    (!isDisplayed || !stylePosition) && ['moonstone-hidden', styles['moonstone-hidden']],
                )}
                ref={itemRef}

                style={styleMenu}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...props}
            >
                { hasAutoSearch && (
                    <div className={clsx('moonstone-menu_searchInput', styles['moonstone-menu_searchInput'])}>
                        <SearchInput
                            focusOnField
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onClear={() => setInputValue('')}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    const list = React.Children.toArray(filteredChildren);
                                    if (list.length > 0) {
                                        (list[0] as React.ReactElement).props.onClick(e);
                                    }
                                }
                            }}
                        />
                    </div>
                )}
                {filteredChildren || children}
                {isEmptySearch && (
                    <Typography
                        className={clsx('moonstone-menu_emptySearchText', styles['moonstone-menu_emptySearchText'])}
                        variant="caption"
                    >
                        {searchEmptyText}
                    </Typography>
                )}
            </menu>
            {
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className={clsx('moonstone-menu_overlay', styles['moonstone-menu_overlay'])}
                        onClick={onClose}
                        onContextMenu={onClose}
                    />
                )
            }
        </>
    );
};

Menu.displayName = 'Menu';
