import React, { useState } from 'react';

import { ControlledCollapsible } from './ControlledCollapsible';

import type { UncontrolledCollapsibleProps } from './Collapsible.types';

const UncontrolledCollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, UncontrolledCollapsibleProps> = ({
    children,
    onClick = () => undefined,
    isDefaultExpanded = false,
    ...other
}, ref) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

    const handleOnClick: React.MouseEventHandler = (e) => {
        setIsExpanded(!isExpanded);
        onClick(e);
    };

    return (
        <ControlledCollapsible isExpanded={isExpanded} ref={ref} onClick={e => handleOnClick(e)} {...other}>
            {children}
        </ControlledCollapsible>
    );
};

export const UncontrolledCollapsible = React.forwardRef(UncontrolledCollapsibleForwardRef);

UncontrolledCollapsible.displayName = 'UncontrolledCollapsible';
