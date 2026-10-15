import React from 'react';

type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;
type onToggleProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onToggleNodeOptions = {
    onToggle: onToggleProp;
    onClick?: onClickProp;
    isDisabled?: boolean;
    // The node has children and the user can open and close it
    isExpandable?: boolean;
    // The children of the node are shown
    isOpen?: boolean;
    onFocusParent?: () => void;
    onFocusFirstChild?: () => void;
    onExpandSiblings?: onToggleProp;
};

type onToggleNodeProps = {
    onKeyDown?: React.KeyboardEventHandler;
    disabled?: boolean;
};

export const onToggleNode = ({
    onToggle,
    onClick,
    isDisabled = false,
    isExpandable = false,
    isOpen = false,
    onFocusParent,
    onFocusFirstChild,
    onExpandSiblings,
}: onToggleNodeOptions): onToggleNodeProps => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        // A link or a button inside the node keeps its native keys, and a modifier keeps the browser shortcuts
        if (e.target !== e.currentTarget || e.altKey || e.ctrlKey || e.metaKey) {
            return;
        }

        switch (e.key) {
            case 'Enter':
                if (e.repeat) {
                    break;
                }

                if (onClick && !isDisabled) {
                    onClick(e);
                } else {
                    onToggle(e);
                }

                break;
            case ' ':
                if (!e.repeat) {
                    onToggle(e);
                }

                break;
            case 'ArrowRight':
                if (isOpen) {
                    onFocusFirstChild?.();
                } else if (isExpandable) {
                    onToggle(e);
                }

                break;
            case 'ArrowLeft':
                if (isOpen && isExpandable) {
                    onToggle(e);
                } else {
                    onFocusParent?.();
                }

                break;
            case '*':
                onExpandSiblings?.(e);
                break;
            default:
                return;
        }

        e.preventDefault();
    };

    return {
        onKeyDown: handleKeyDown,
        disabled: isDisabled,
    };
};
