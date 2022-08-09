import React from 'react';
import {usePositioning} from '~/hooks/usePositioning';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';
import clsx from 'clsx';
import './Menu.scss';
import {MenuProps} from './Menu.types';
// Import {SearchInput} from '~/components/Input';
// import {Typography} from '~/components/Typography';

// const getChildrenToFilter = (children: [React.ReactElement]) => {
//     if (children[0].props['data-option-type'] === 'group') {
//         return children.reduce((acc, curr) => {
//             return [...acc, ...curr.props.children[2]];
//         }, []);
//     }

//     return children;
// };

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
    // Const [inputValue, setInputValue] = useState('');
    // const [filteredChildren, setFilteredChildren] = useState(children);
    // const [isEmptySearch, setIsEmptySearch] = useState(false);
    // useEffect hook to filter the search results and determine whether to show the no search results text
    // useEffect(() => {
    //     if (inputValue !== '') {
    //         if (Array.isArray(children)) {
    //             const _childrenToFilter = getChildrenToFilter(children as [React.ReactElement]);
    //             const _filtered = _childrenToFilter.filter((child: React.ReactElement) => {
    //                 if (child.props && child.props.label) {
    //                     const contains = child.props.label.toLowerCase().includes(inputValue.toLowerCase());
    //                     return contains && child.props.variant !== 'title';
    //                 }
    //                 return false;
    //             });
    //             setFilteredChildren(_filtered);

    //             if (_filtered.length === 0) {
    //                 setIsEmptySearch(true);
    //             } else {
    //                 setIsEmptySearch(false);
    //             }
    //         }
    //     } else {
    //         setFilteredChildren(children);
    //         setIsEmptySearch(false);
    //     }
    // }, [inputValue, children]);

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
    // HasSearch: false,
    // searchEmptyText: 'No results found.',
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
