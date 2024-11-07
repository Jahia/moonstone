import React, {useState} from 'react';
import './Collapsible.scss';
import type {UncontrolledCollapsibleProps} from './Collapsible.types';
import {ControlledCollapsible} from './ControlledCollapsible';

const UncontrolledCollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, UncontrolledCollapsibleProps> = ({
    children,
    onClick = () => undefined,
    isDefaultExpanded = false,
    ...other
}, ref) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

    const handleOnClick: React.MouseEventHandler = e => {
        setIsExpanded(!isExpanded);
        onClick(e);
    };

    return (
        <ControlledCollapsible ref={ref} isExpanded={isExpanded} onClick={e => handleOnClick(e)} {...other}>
            {children}
        </ControlledCollapsible>
    );
};

export const UncontrolledCollapsible = React.forwardRef(UncontrolledCollapsibleForwardRef);

UncontrolledCollapsible.displayName = 'UncontrolledCollapsible';
