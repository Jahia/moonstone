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
    anchorPosition,
    onClose,
    hasOverlay,
    ...props
}) => {
    const [stylePosition, setStylePosition] = useState();

    useEffect(() => {
        if (isDisplayed) {
            setPositioningStyles(anchorEl);
        }
    }, [anchorEl, isDisplayed, setPositioningStyles]);

    const setPositioningStyles = useCallback(() => {
        let positioning;

        if (anchorEl) {
            let el = anchorEl.getBoundingClientRect();
            positioning = {
                top: el.top + el.height,
                left: el.left
            };
        } else {
            positioning = {
                top: 0,
                left: 0
            };
        }

        const positioningStyles = {
            top: `calc(${positioning.top}px + ${anchorPosition.top})`,
            left: `calc(${positioning.left}px + ${anchorPosition.left})`
        };

        setStylePosition(positioningStyles);
    }, [anchorEl, anchorPosition]);

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
    if (isDisplayed) {
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
    anchorPosition: {
        top: '0px',
        left: '0px'
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
    anchorEl: PropTypes.any,

    /**
     * Content of the dropdown
     */
    children: PropTypes.node.isRequired,

    /**
     * Menu is display
     */
    isDisplayed: PropTypes.bool.isRequired,

    /**
     * Position of the menu
     */
    anchorPosition: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string
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

    hasOverlay: PropTypes.bool
};

Menu.displayName = 'Menu';
