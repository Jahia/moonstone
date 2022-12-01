import React from 'react';
import {CollapsibleProps} from './Collapsible.types';
import {UncontrolledCollapsible} from './UncontrolledCollapsible';
import {ControlledCollapsible} from './ControlledCollapsible';

export const Collapsible: React.FC<CollapsibleProps> = ({isExpanded, ...props}) => {
    if (typeof isExpanded === 'undefined') {
        return <UncontrolledCollapsible {...props}/>;
    }

    return <ControlledCollapsible isExpanded={isExpanded} {...props}/>;
};

// Export const Collapsible = React.forwardRef(CollapsibleForwardRef);

Collapsible.displayName = 'Collapsible';
