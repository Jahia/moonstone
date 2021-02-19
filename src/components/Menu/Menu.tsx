import React, {useState, useEffect} from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import clsx from 'clsx';
import './Menu.scss';
import {Input} from '~/components/Input';
import {Typography} from '~/components/Typography';

type AnchorPosition = {
    top: number;
    left: number;
};
type AnchorElOrigin = {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
};
type TransformElOrigin = {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
};
type PositioningType = 'fixed' | 'absolute';

interface MenuProps {
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

    /**
     * Whether the Menu displays a search input at the top
     */
    hasSearch?: boolean;

    /**
     * Text to display when the search doesn't show any results
     */
    searchEmptyText?: string;

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

const getChildrenToFilter = (children: [React.ReactElement]) => {
    if (children[0].props['data-option-type'] === 'group') {
        return children.reduce((acc, curr) => {
            return [...acc, ...curr.props.children[2]];
        }, []);
    }
    return children;
};

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
    hasSearch,
    searchEmptyText,
    ...props
}) => {
    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    const [stylePosition, itemRef] = usePositioning(isDisplayed, anchorPosition, anchorEl, anchorElOrigin, transformElOrigin, position);
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [inputValue, setInputValue] = useState('');
    const [filteredChildren, setFilteredChildren] = useState(children);
    const [isEmptySearch, setIsEmptySearch] = useState(false);

    // useEffect hook to filter the search results and determine whether to show the no search results text
    useEffect(() => {
        if (inputValue !== '') {
            if (Array.isArray(children)) {
                const _childrenToFilter = getChildrenToFilter(children as [React.ReactElement]);
                const _filtered = _childrenToFilter.filter((child: React.ReactElement) => {
                    if (child.props && child.props.label) {
                        const startsWith = child.props.label.toLowerCase().startsWith(inputValue.toLowerCase());
                        return startsWith && child.props.variant !== 'title';
                    }
                    return false;
                });
                setFilteredChildren(_filtered);

                if (_filtered.length === 0) {
                    setIsEmptySearch(true);
                } else {
                    setIsEmptySearch(false);
                }
            }
        } else {
            setFilteredChildren(children);
            setIsEmptySearch(false);
        }
    }, [inputValue, children]);

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
                className={clsx(
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

Menu.displayName = 'Menu';
