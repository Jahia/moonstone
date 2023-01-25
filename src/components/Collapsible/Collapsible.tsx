import React from 'react';
import {CollapsibleProps} from './Collapsible.types';
import {UncontrolledCollapsible} from './UncontrolledCollapsible';
import {ControlledCollapsible} from './ControlledCollapsible';

export const Collapsible = React.forwardRef((
    {isExpanded, ...props}: CollapsibleProps,
    ref: React.Ref<HTMLDivElement>
) => {
    if (typeof isExpanded === 'undefined') {
        return <UncontrolledCollapsible ref={ref} {...props}/>;
    }

    return <ControlledCollapsible ref={ref} isExpanded={isExpanded} {...props}/>;
});

Collapsible.displayName = 'Collapsible';
