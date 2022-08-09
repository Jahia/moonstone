import React from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import clsx from 'clsx';
import './Menu.scss';
import type {MenuProps} from './Menu.types';

export const Menu: React.FC<MenuProps> = ({
    children,
    isDisplayed,
    position,
    minWidth,
    maxWidth,
    maxHeight,
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    anchorEl,
    anchorElOrigin,
    transformElOrigin,
    anchorPosition,
    onClose,
    onEntering,
    onEntered,
    onExiting,
    onExited,
    hasOverlay,
    ...props
}) => {
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    // ---
    // Styling
    // ---
    const styleMenu: React.CSSProperties = {
        position,
        ...stylePosition as React.CSSProperties,
        ...style
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
                ref={itemRef}
                style={styleMenu}
                role="listbox"
                className={clsx(
                    'moonstone-menu',
                    {'moonstone-hidden': !isDisplayed || !stylePosition},
                    className
                )}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...props}
            >
                {children}
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
Menu.defaultProps = {
    hasOverlay: true,
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

Menu.displayName = 'Menu';
