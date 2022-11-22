import React from 'react';
import {CollapsibleProps} from './Collapsible.types';
import {UncontrolledCollapsible} from './UncontrolledCollapsible';
import {ControlledCollapsible} from './ControlledCollapsible';

const CollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CollapsibleProps> = ({isExpanded, ...props}, ref) => {
    if (typeof isExpanded === 'undefined') {
        return <UncontrolledCollapsible ref={ref} {...props}/>;
    }

    return <ControlledCollapsible ref={ref} isExpanded={isExpanded} {...props}/>;
};

export const Collapsible = React.forwardRef(CollapsibleForwardRef);

Collapsible.displayName = 'Collapsible';
