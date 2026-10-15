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

        const actions: Record<string, () => void> = {
            'Enter': () => (onClick && !isDisabled ? onClick(e) : onToggle(e)),
            ' ': () => onToggle(e),
            'ArrowRight': () => {
                if (isOpen) {
                    onFocusFirstChild?.();
                } else if (isExpandable) {
                    onToggle(e);
                }
            },
            'ArrowLeft': () => (isOpen && isExpandable ? onToggle(e) : onFocusParent?.()),
            '*': () => onExpandSiblings?.(e),
        };

        const action = actions[e.key];
        if (!action) {
            return;
        }

        e.preventDefault();
        // A held Enter or Space repeats keydown: act once per press
        if (!(e.repeat && (e.key === 'Enter' || e.key === ' '))) {
            action();
        }
    };

    return {
        onKeyDown: handleKeyDown,
        disabled: isDisabled,
    };
};
