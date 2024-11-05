import React, {useState} from 'react';
import './ButtonToggle.scss';
import type {UncontrolledButtonToggleProps} from './ButtonToggle.types';
import {ControlledButtonToggle} from './index';

export const UncontrolledButtonToggle: React.FC<UncontrolledButtonToggleProps> = ({defaultPressed = false, onClick, ...props}) => {
    const [pressed, setPressed] = useState(defaultPressed);

    return (
        <ControlledButtonToggle
            {...props}
            isPressed={pressed}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                const togglePressed = !pressed;
                setPressed(togglePressed);
                if (typeof onClick === 'function') {
                    onClick(event);
                }
            }}
        />
    );
};

UncontrolledButtonToggle.displayName = 'UncontrolledButtonToggle';
