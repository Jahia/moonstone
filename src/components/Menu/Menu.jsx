import React from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './Menu.scss';

export const Menu = (
    {
        children,
        isDisplayed,
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
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin);
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);

    // ---
    // Styling
    // ---
    const styleMenu = {...stylePosition, ...style};
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
                className={classnames(
                    'moonstone-menu',
                    className,
                    {'moonstone-hidden': !isDisplayed || !stylePosition}
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
                    className={classnames('moonstone-menu_overlay')}
                    onClick={onClose}
                />
            }
        </>
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
    },
    transformElOrigin: {
        vertical: 'top',
        horizontal: 'left'
    }
};

Menu.propTypes = {
    /**
     * Max-width available
     */
    maxHeight: PropTypes.string,

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
     * This is the point on the menu which will attach to the anchor's origin
     */
    transformElOrigin: PropTypes.shape({
        horizontal: PropTypes.oneOf(['left', 'right']).isRequired,
        vertical: PropTypes.oneOf(['top', 'bottom']).isRequired
    }),

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Additional styles
     */
    style: PropTypes.object,

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
