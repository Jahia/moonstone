import React from 'react';

type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;
type onToggleProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onToggleNodeOptions = {
    onToggle: onToggleProp;
    onClick?: onClickProp;
    isDisabled?: boolean;
    // Undefined when the node cannot be opened
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
    isOpen,
    onFocusParent,
    onFocusFirstChild,
    onExpandSiblings,
}: onToggleNodeOptions): onToggleNodeProps => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                if (onClick && !isDisabled) {
                    onClick(e);
                } else {
                    onToggle(e);
                }

                break;
            case 'ArrowRight':
                if (isOpen) {
                    onFocusFirstChild?.();
                } else if (isOpen === false) {
                    onToggle(e);
                }

                break;
            case 'ArrowLeft':
                if (isOpen) {
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
