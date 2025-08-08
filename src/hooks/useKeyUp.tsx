import React from 'react';

type UseKeyUpProps = {
  onKeyUp: React.KeyboardEventHandler;
  disabled?: boolean;
  role?: string;
  tabIndex?: number;
};

const handleKeyUp = (e: React.KeyboardEvent, onKeyUp: React.KeyboardEventHandler) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        onKeyUp(e);
    }
};

export const useKeyUp = ({
    onKeyUp,
    disabled = false,
    role = 'button',
    tabIndex = 0
}: UseKeyUpProps) => {
    return {
        onKeyUp: disabled ? undefined : (e: React.KeyboardEvent) => handleKeyUp(e, onKeyUp),
        disabled,
        role,
        tabIndex: disabled ? -1 : tabIndex
    };
};
