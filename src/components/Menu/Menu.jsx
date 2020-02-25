import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Menu.scss';

export const Menu = (
    {
        children,
        isDisplayed,
        minWidth,
        maxWidth,
        className,
        onMouseEnter,
        onMouseLeave,
        anchorEl,
        anchorElOrigin,
        anchorPosition,
        onClose,
        onEntering,
        onEntered,
        onExiting,
        onExited,
        hasOverlay,
        ...props
    }) => {
    const [stylePosition, setStylePosition] = useState();

    const definePositioning = useCallback(() => {
        const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

        if (resolvedAnchorEl) {
            let top = 0;
            let left = 0;

            let rect = resolvedAnchorEl.getBoundingClientRect();

            // Set vertical origin position
            if (anchorElOrigin.vertical === 'top') {
                top = rect.top;
            } else if (anchorElOrigin.vertical === 'center') {
                top = rect.top + (rect.height / 2);
            } else if (anchorElOrigin.vertical === 'bottom') {
                top = rect.top + rect.height;
            }

            // Set horizontal origin position
            if (anchorElOrigin.horizontal === 'left') {
                left = rect.left;
            } else if (anchorElOrigin.horizontal === 'center') {
                left = rect.left + (rect.width / 2);
            } else if (anchorElOrigin.horizontal === 'right') {
                left = rect.left + rect.width;
            }

            setStylePosition({
                top: (typeof anchorPosition.top === 'number') ? (top + anchorPosition.top) + 'px' : `calc(${top}px + ${anchorPosition.top})`,
                left: (typeof anchorPosition.left === 'number') ? (left + anchorPosition.left) + 'px' : `calc(${left}px + ${anchorPosition.left})`
            });
        } else {
            setStylePosition({
                top: (typeof anchorPosition.top === 'number') ? (anchorPosition.top + 'px') : anchorPosition.top,
                left: (typeof anchorPosition.left === 'number') ? (anchorPosition.left + 'px') : anchorPosition.left
            });
        }
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal]);

    useEffect(() => {
        if (isDisplayed) {
            definePositioning(anchorEl);
        }
    }, [anchorEl, isDisplayed, definePositioning]);

    useEffect(() => {
        if (stylePosition && !isDisplayed) {
            if (onExiting) {
                onExiting();
            }

            if (onExited) {
                onExited();
            }
        }

        if (isDisplayed) {
            if (onEntering) {
                onEntering();
            }

            if (onEntered) {
                onEntered();
            }
        }
    }, [isDisplayed, onEntered, onEntering, onExited, onExiting]); // eslint-disable-line react-hooks/exhaustive-deps

    // ---
    // Styling
    // ---
    const styleMenu = {...stylePosition};
    if (minWidth) {
        styleMenu.minWidth = minWidth;
    }

    if (maxWidth) {
        styleMenu.maxWidth = maxWidth;
    }

    // ---
    // Render
    // ---
    if (isDisplayed && stylePosition) {
        return (
            <div className={classnames(styles.menu_wrapper)}>
                <menu
                    style={styleMenu}
                    className={classnames(
                        styles.menu,
                        className
                    )}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    {...props}
                >
                    {children}
                </menu>
                {
                    hasOverlay &&
                    <div
                        aria-hidden="true"
                        className={classnames(styles.menu_overlay)}
                        onClick={onClose}
                    />
                }
            </div>
        );
    }

    return null;
};

Menu.defaultProps = {
    hasOverlay: true,
    anchorEl: null,
    anchorPosition: {
        top: '0px',
        left: '0px'
    },
    anchorElOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
    }
};

Menu.propTypes = {
    /**
     * Max-width available
     */
    maxWidth: PropTypes.string,

    /**
     * Min-width available
     */
    minWidth: PropTypes.string,

    /**
     * Content of the dropdown
     */
    children: PropTypes.node.isRequired,

    /**
     * Menu is display
     */
    isDisplayed: PropTypes.bool.isRequired,

    /**
     * Reference element to positioning the menu
     */
    anchorEl: PropTypes.object,

    /**
     * Position of the menu in px relative to anchorEl or the document
     */
    anchorPosition: PropTypes.shape({
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }),

    /**
     * Point on the anchor where the menu's anchorEl will attach to
     */
    anchorElOrigin: PropTypes.shape({
        horizontal: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
        vertical: PropTypes.oneOf(['top', 'center', 'bottom']).isRequired
    }),

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function triggered when the mouse pointer hovering the menu
     */
    onMouseEnter: PropTypes.func,

    /**
     * Function triggered when the mouse pointer move off the menu
     */
    onMouseLeave: PropTypes.func,

    /**
     * Function triggered when the menu close
     */
    onClose: PropTypes.func,

    /**
     * Function triggered when the menu is going to be opened (before open)
     */
    onEntering: PropTypes.func,

    /**
     * Function triggered when the menu has been opened (after open)
     */
    onEntered: PropTypes.func,

    /**
     * Function triggered when the menu is going to be closed (before exit)
     */
    onExiting: PropTypes.func,

    /**
     * Function triggered when the menu has been closed (after exit)
     */
    onExited: PropTypes.func,

    /**
     * The menu has overlay or not
     */
    hasOverlay: PropTypes.bool
};

Menu.displayName = 'Menu';
