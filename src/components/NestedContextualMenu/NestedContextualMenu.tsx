import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import './NestedContextualMenu.scss';
import type {NestedContextualMenuProps} from './NestedContextualMenu.types';
import {useFloating, shift, flip, offset, useHover, useInteractions} from '@floating-ui/react';
import {useEnterExitCallbacks} from '~/hooks/useEnterExitCallbacks';

// Unfinished component, I might just be missing some logic on how to recursively change the position of the submenus children
export const NestedContextualMenu: React.FC<NestedContextualMenuProps> = ({
    children,
    label,
    isNested,
    isDisplayed,
    position,
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    anchorEl,
    anchorPosition,
    onClose,
    onEntering,
    onEntered,
    onExiting,
    onExited,
    hasOverlay,
    ...props
}) => {
    useEnterExitCallbacks(isDisplayed, onExiting, onExited, onEntering, onEntered);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [subMenuPosition, setSubMenuPosition] = useState(null);
    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,

        strategy: position,
        placement: isNested ? 'right-start' : 'bottom-start',
        middleware: [
            offset({mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0}),
            flip(),
            shift()
        ]
    });

    const hover = useHover(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover
    ]);

    // Defining a new position to the left of the hovered element and setting isHovered to true to conditionally display its children
    const handleMouseOver = e => {
        setIsHovered(true);
        setSubMenuPosition({top: 0, left: e.currentTarget.getBoundingClientRect().width});
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    // Creating an anchor element at the passed anchorPosition (should be the mouse's X & Y)
    useEffect(() => {
        refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: anchorPosition.left,
                    y: anchorPosition.top,
                    top: anchorPosition.top,
                    right: anchorPosition.left,
                    bottom: anchorPosition.top,
                    left: anchorPosition.left
                };
            }
        });
    }, [children, anchorEl, anchorPosition, refs, subMenuPosition]);

    if (!children || React.Children.count(children) < 1) {
        return null;
    }

    // ---
    // Render
    // ---
    return (
        <>
            <menu
                ref={refs.setFloating}
                style={{...floatingStyles, ...style}}
                role="listbox"
                className={clsx(
                    'moonstone-nestedContextualMenu',
                    className,
                    {'moonstone-hidden': !isDisplayed}
                )}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...getReferenceProps()}
                {...props}
            >
                {label && label}
                {React.Children.map(children, child => {
                // If the child is a NestedContextualMenu (submenu), added the hover function to it
                if (React.isValidElement(child) && child.type === NestedContextualMenu) {
                    return React.cloneElement(child as React.ReactElement<NestedContextualMenuProps>, {
                        isDisplayed: true,
                        onMouseOver: handleMouseOver,
                        onMouseOut: handleMouseOut,
                        label: <span style={{marginLeft: 10, fontSize: 10}}>{child.props.label} ▶</span>
                    });
                }

                // Have the other children be displayed when the NestedContextualMenu is hovered & set position to the new subMenuPosition
                if (React.isValidElement(child) && subMenuPosition !== null) {
                    const floatingProps = getFloatingProps();
                    return React.cloneElement(child, {
                        isDisplayed: isHovered,
                        style: {
                            transform: `translate(${subMenuPosition.left}px, ${subMenuPosition.top}px)`
                          },
                        ...floatingProps
                    });
                }

                return (child);
            })}
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

NestedContextualMenu.displayName = 'NestedContextualMenu';
