import React from 'react';

type onClickProp = (e: React.KeyboardEvent | React.MouseEvent) => void;
type onToggleProp = (e: React.KeyboardEvent | React.MouseEvent) => void;

type onToggleNodeProps = {
    onClick?: onClickProp;
    onKeyUp?: React.KeyboardEventHandler;
    disabled?: boolean;
    tabIndex?: number;
};

export const onToggleNode = (
    onToggle: onToggleProp,
    onClick?: onClickProp,
    isDisabled = false,
    tabIndex = 0
): onToggleNodeProps => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Space') {
            onToggle(e);
        }

        if (e.code === 'Enter') {
            e.preventDefault();
            if (onClick && !isDisabled) {
                onClick(e);
            } else {
                onToggle(e);
            }
        }

        if (e.code === 'ArrowLeft') {
            onToggle(e);
        }

        if (e.code === 'ArrowRight') {
            onToggle(e);
        }
    };

    return {
        onClick: isDisabled ? undefined : onClick,
        onKeyUp: handleKeyUp,
        disabled: isDisabled,
        tabIndex: tabIndex
    };
};
