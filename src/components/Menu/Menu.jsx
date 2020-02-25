import React, {useCallback, useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Menu.scss';
import toPX from 'to-px';

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
    const [stylePosition, setStylePosition] = useState({bottom: 0, right: 0});

    const menuRef = useRef();

    const definePositioning = useCallback(() => {
        let menuRectangle = menuRef.current.getBoundingClientRect();

        const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;

        let stylePosition = {
            top: typeof anchorPosition.top === 'string' ? toPX(anchorPosition.top) : anchorPosition.top,
            left: typeof anchorPosition.left === 'string' ? toPX(anchorPosition.left) : anchorPosition.left
        };

        if (!isDisplayed) {
            stylePosition = {
                bottom: 0,
                right: 0
            };
        } else if (resolvedAnchorEl) {
            let anchorElRectangle = resolvedAnchorEl.getBoundingClientRect();

            // Set vertical origin position
            if (anchorElOrigin.vertical === 'top') {
                stylePosition.top += anchorElRectangle.top;
            } else if (anchorElOrigin.vertical === 'center') {
                stylePosition.top += anchorElRectangle.top + (anchorElRectangle.height / 2);
            } else if (anchorElOrigin.vertical === 'bottom') {
                stylePosition.top += anchorElRectangle.bottom;
            }

            // Set horizontal origin position
            if (anchorElOrigin.horizontal === 'left') {
                stylePosition.left += anchorElRectangle.left;
            } else if (anchorElOrigin.horizontal === 'center') {
                stylePosition.left += anchorElRectangle.left + (anchorElRectangle.width / 2);
            } else if (anchorElOrigin.horizontal === 'right') {
                stylePosition.left += anchorElRectangle.right;
            }
        }

        if (stylePosition.left && (stylePosition.left + menuRectangle.width) > window.document.body.clientWidth) {
            stylePosition.left = window.document.body.clientWidth - menuRectangle.width;
        }

        if (stylePosition.top && (stylePosition.top + menuRectangle.height) > window.document.body.clientHeight) {
            stylePosition.top = window.document.body.clientHeight - menuRectangle.height;
        }

        setStylePosition(stylePosition);
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal, isDisplayed, menuRef]);

    useEffect(() => {
        if (isDisplayed) {
            definePositioning(anchorEl);
        }
    }, [anchorEl, isDisplayed, definePositioning]);

    const previousIsDisplayed = useRef();
    useEffect(() => {
        if (typeof previousIsDisplayed.current !== 'undefined') {
            if (!isDisplayed && previousIsDisplayed.current) {
                if (onExiting) {
                    onExiting();
                }

                if (onExited) {
                    onExited();
                }

                // Reset position
                definePositioning();
            }

            if (isDisplayed && !previousIsDisplayed.current) {
                if (onEntering) {
                    onEntering();
                }

                if (onEntered) {
                    onEntered();
                }
            }
        }

        previousIsDisplayed.current = isDisplayed;
    }, [isDisplayed, onEntered, onEntering, onExited, onExiting, previousIsDisplayed, definePositioning]);

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
    return (
        <div className={classnames(styles.menu_wrapper)}>
            <menu
                ref={menuRef}
                style={styleMenu}
                className={classnames(
                    styles.menu,
                    className,
                    {
                        [styles.hidden]: !isDisplayed || !stylePosition
                    }
                )}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...props}
            >
                {children}
            </menu>
            {
                hasOverlay && isDisplayed &&
                <div
                    aria-hidden="true"
                    className={classnames(styles.menu_overlay)}
                    onClick={onClose}
                />
            }
        </div>
    );
};

Menu.defaultProps = {
    hasOverlay: true,
    anchorEl: null,
    anchorPosition: {
        top: 0,
        left: 0
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
        top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
