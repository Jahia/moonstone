import React from 'react';

export type AnchorPosition = {
    top: number;
    left: number;
};

export type AnchorElOrigin = {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
};

export type TransformElOrigin = {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
};

export type PositioningType = 'fixed' | 'absolute';

export type MenuProps = {
    /**
     * Maximum height of the Menu
     */
    maxHeight?: string;

    /**
     * Maximum width of the Menu
     */
    maxWidth?: string;

    /**
     * Minimum width of the Menu
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
    anchorPosition?: AnchorPosition;

    /**
     * Point on the anchor where the menu's anchorEl will attach to
     */
    anchorElOrigin?: AnchorElOrigin;

    /**
     * This is the point on the menu which will attach to the anchor's origin
     */
    transformElOrigin?: TransformElOrigin;

    /**
     * Additional classname
     */
    className?: string;

    /**
     * Additional styles
     */
    style?: React.CSSProperties;

    // /**
    //  * Whether the Menu displays a search input at the top
    //  */
    // hasSearch?: boolean;

    // /**
    //  * Text to display when the search doesn't show any results
    //  */
    // searchEmptyText?: string;

    /**
     * If 'absolute' is passed in for the position, the component will be positioned as per normal
     * CSS rules (i.e., positioned against the closest positioned ancestor). Position is 'fixed' by default
     */
    position?: PositioningType;

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
    onEntering?: () => void;

    /**
     * Function triggered when the menu has been opened (after open)
     */
    onEntered?: () => void;

    /**
     * Function triggered when the menu is going to be closed (before exit)
     */
    onExiting?: () => void;

    /**
     * Function triggered when the menu has been closed (after exit)
     */
    onExited?: () => void;

    /**
     * The menu has overlay or not
     */
    hasOverlay?: boolean;
}
