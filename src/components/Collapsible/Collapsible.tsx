import React from 'react';

import { ControlledCollapsible } from './ControlledCollapsible';
import { UncontrolledCollapsible } from './UncontrolledCollapsible';

import type { CollapsibleProps } from './Collapsible.types';

const CollapsibleForwardRef: React.ForwardRefRenderFunction<HTMLDivElement, CollapsibleProps> = ({ isExpanded, ...props }, ref) => {
    if (typeof isExpanded === 'undefined') {
        return <UncontrolledCollapsible ref={ref} {...props}/>;
    }

    return <ControlledCollapsible isExpanded={isExpanded} ref={ref} {...props}/>;
};

export const Collapsible = React.forwardRef(CollapsibleForwardRef);

Collapsible.displayName = 'Collapsible';
