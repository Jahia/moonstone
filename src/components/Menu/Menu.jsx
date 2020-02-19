import React, {useCallback, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Menu.scss';

export const Menu = ({
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
    hasOverlay,
    ...props
}) => {
    const [stylePosition, setStylePosition] = useState();

    useEffect(() => {
        if (isDisplayed) {
            definePositioning(anchorEl);
        }
    }, [anchorEl, isDisplayed, definePositioning]);

    const definePositioning = useCallback(() => {
        const resolvedAnchorEl = anchorEl && anchorEl.current ? anchorEl.current : anchorEl;
        let top = 0;
        let left = 0;

        if (resolvedAnchorEl) {
            // Set vertical origin position
            if (anchorElOrigin.vertical === 'top') {
                top = resolvedAnchorEl.offsetTop;
            } else if (anchorElOrigin.vertical === 'center') {
                top = resolvedAnchorEl.offsetTop / 2;
            } else if (anchorElOrigin.vertical === 'bottom') {
                top = resolvedAnchorEl.offsetTop + resolvedAnchorEl.offsetHeight;
            }

            // Set horizontal origin position
            if (anchorElOrigin.horizontal === 'left') {
                left = resolvedAnchorEl.offsetLeft;
            } else if (anchorElOrigin.horizontal === 'center') {
                left = resolvedAnchorEl.offsetLeft / 2;
            } else if (anchorElOrigin.horizontal === 'right') {
                left = resolvedAnchorEl.offsetLeft + resolvedAnchorEl.offsetWidth;
            }
        }

        setStylePosition({
            top: `calc(${top}px + ${anchorPosition.top})`,
            left: `calc(${left}px + ${anchorPosition.left})`
        });
    }, [anchorEl, anchorPosition, anchorElOrigin.vertical, anchorElOrigin.horizontal]);

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
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onClose: () => {},
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
     * Reference element to positioning the menu
     */
    anchorEl: PropTypes.object,

    /**
     * Content of the dropdown
     */
    children: PropTypes.node.isRequired,

    /**
     * Menu is display
     */
    isDisplayed: PropTypes.bool.isRequired,

    /**
     * Position of the menu in px
     */
    anchorPosition: PropTypes.shape({
        top: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }),

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
     * The menu has overlay or not
     */
    hasOverlay: PropTypes.bool
};

Menu.displayName = 'Menu';
