import React, { useState } from 'react';

import { ControlledButtonToggle } from './index';

import type { UncontrolledButtonToggleProps } from './ButtonToggle.types';

export const UncontrolledButtonToggle = React.forwardRef<HTMLButtonElement, UncontrolledButtonToggleProps>(({ defaultPressed = false, onClick, ...props }, ref) => {
    const [pressed, setPressed] = useState(defaultPressed);

    return (
        <ControlledButtonToggle
            {...props}
            isPressed={pressed}
            ref={ref}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setPressed(prevPressed => !prevPressed);
                if (typeof onClick === 'function') {
                    onClick(event);
                }
            }}
        />
    );
});

UncontrolledButtonToggle.displayName = 'UncontrolledButtonToggle';
