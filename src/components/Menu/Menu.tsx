import React from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import classnames from 'clsx';
import './Menu.scss';

type TAnchorPosition = {
    top: number;
    left: number;
};
type TAnchorElOrigin = {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
};
type TTransformElOrigin = {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
};
type TStyleMenu =  {
    top?: string | number;
    left?: string | number;
    minWidth?: string;
    maxWidth?: string;
    maxHeight?: string;
};
type TMenuVariant = 'default' | 'smallImages' | 'bigImages';
enum MenuVariant {
    DEFAULT = 'default',
    SMALL_IMAGES = 'smallImages',
    BIG_IMAGES = 'bigImages'
}

interface IMenuProps {
    /**
     * Variant of the Menu
     */
    variant?: TMenuVariant;

    /**
     * Max-width available
     */
    maxHeight?: string;

    /**
     * Max-width available
     */
    maxWidth?: string;

    /**
     * Min-width available
     */
    minWidth?: string;

    /**
     * Content of the dropdown
     */
    children: React.ReactNode;

    /**
     * Menu is display
     */
    isDisplayed: boolean;

    /**
     * Reference element to positioning the menu
     */
    anchorEl?: React.MutableRefObject<HTMLDivElement>;

    /**
     * Position of the menu in px relative to anchorEl or the document
     */
    anchorPosition?: TAnchorPosition;

    /**
     * Point on the anchor where the menu's anchorEl will attach to
     */
    anchorElOrigin?: TAnchorElOrigin;

    /**
     * This is the point on the menu which will attach to the anchor's origin
     */
    transformElOrigin?: TTransformElOrigin;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Additional styles
     */
    style?: {};

    /**
     * Function triggered when the mouse pointer hovering the menu
     */
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    /**
     * Function triggered when the mouse pointer move off the menu
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    /**
     * Function triggered when the menu close
     */
    onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    /**
     * Function triggered when the menu is going to be opened (before open)
     */
    onEntering?: () => {};

    /**
     * Function triggered when the menu has been opened (after open)
     */
    onEntered?: () => {};

    /**
     * Function triggered when the menu is going to be closed (before exit)
     */
    onExiting?: () => {};

    /**
     * Function triggered when the menu has been closed (after exit)
     */
    onExited?: () => {};

    /**
     * The menu has overlay or not
     */
    hasOverlay?: boolean;
}

export const Menu: React.FC<IMenuProps> = (
    {
        children,
        variant,
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
    const styleMenu: TStyleMenu = {...stylePosition as TStyleMenu, ...style};
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
                    {
                        'moonstone-menu_smallImages': variant === MenuVariant.SMALL_IMAGES,
                        'moonstone-menu_bigImages': variant === MenuVariant.BIG_IMAGES
                    },
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
                hasOverlay && isDisplayed && (
                    <div
                        aria-hidden="true"
                        className={classnames('moonstone-menu_overlay')}
                        onClick={onClose}
                    />
                )
            }
        </>
    );
};

// Kept defaultProps here because of unnecessary re-rendering when provided as default parameters to the function component
Menu.defaultProps = {
    variant: MenuVariant.DEFAULT,
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

Menu.displayName = 'Menu';
