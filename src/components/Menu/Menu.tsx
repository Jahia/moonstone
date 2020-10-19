import React, {useState, useEffect} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import classnames from 'clsx';
import './Menu.scss';
import {Input} from '~/components/Input';
import {Typography} from '~/components/Typography';

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
    width?: string;
    maxWidth?: string;
    maxHeight?: string;
};

interface IMenuProps {
    /**
     * Maximum height of the Menu
     */
    maxHeight?: string;

    /**
     * Maximum width of the Menu
     */
    maxWidth?: string;

    /**
     * Explicit width of the Menu
     */
    width?: string;

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
     * Whether the Menu displays a search input at the top
     */
    hasSearch?: boolean;

    /**
     * Text to display when the search doesn't show any results
     */
    searchEmptyText?: string;

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
        isDisplayed,
        minWidth,
        width,
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
        hasSearch,
        searchEmptyText,
        ...props
    }) => {
    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin);
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [filteredChildren, setFilteredChildren] = useState(children);
    const [isEmptySearch, setIsEmptySearch] = useState(false);

    useEffect(() => {
        if (inputValue !== '') {
            const _filtered = Array.isArray(children)
                ? children.filter((child: React.ReactElement) => {
                    const startsWith = child.props.label.toLowerCase().startsWith(inputValue.toLowerCase());
                    return startsWith && child.props.variant !== 'title';
                    })
                : children;
            setFilteredChildren(_filtered);

            if (Array.isArray(_filtered) && _filtered.length === 0) {
                setIsEmptySearch(true);
            } else {
                setIsEmptySearch(false);
            }

        } else {
            setFilteredChildren(children);
            setIsEmptySearch(false);
        }
    }, [inputValue]);

    // ---
    // Styling
    // ---
    const styleMenu: TStyleMenu = {...stylePosition as TStyleMenu, ...style};
    if (minWidth) {
        styleMenu.minWidth = minWidth;
    }

    if (width) {
        styleMenu.width = width;
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
                { hasSearch && (
                    <div className="moonstone-menu_searchInput">
                        <Input
                            variant="search"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onClear={() => setInputValue('')}
                        />
                    </div>
                )}
                {filteredChildren}
                {isEmptySearch && (
                    <Typography
                        className="moonstone-menu_emptySearchText"
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
                        className="moonstone-menu_overlay"
                        onClick={onClose}
                    />
                )
            }
        </>
    );
};

// Kept defaultProps here because of unnecessary re-rendering when provided as default parameters to the function component
Menu.defaultProps = {
    hasOverlay: true,
    hasSearch: false,
    searchEmptyText: 'No results found.',
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
