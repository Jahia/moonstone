import React, { useState } from 'react';

import { ControlledButtonToggle } from './index';

import type { UncontrolledButtonToggleProps } from './ButtonToggle.types';

export const UncontrolledButtonToggle: React.FC<UncontrolledButtonToggleProps> = ({ defaultPressed = false, onClick, ...props }) => {
    const [pressed, setPressed] = useState(defaultPressed);

    return (
        <ControlledButtonToggle
            {...props}
            isPressed={pressed}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setPressed(prevPressed => !prevPressed);
                if (typeof onClick === 'function') {
                    onClick(event);
                }
            }}
        />
    );
};

UncontrolledButtonToggle.displayName = 'UncontrolledButtonToggle';
