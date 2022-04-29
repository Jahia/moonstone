import React, {useState} from 'react';
import './Collapsible.scss';
import {CollapsibleProps} from './Collapsible.types';
import { ControlledCollapsible } from './ControlledCollapsible';

export const UncontrolledCollapsible: React.FC<CollapsibleProps> = ({
    children,
    onClick = () => undefined,
    isDefaultExpanded = false,
    ...other
}) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

    const handleOnClick: React.MouseEventHandler = (e) => {
        setIsExpanded(!isExpanded);
        onClick(e);
    };

    return (
        <ControlledCollapsible onClick={e => handleOnClick(e)} isExpanded={isExpanded} {...other}>
            {children}
        </ControlledCollapsible>
    );
};

UncontrolledCollapsible.displayName = 'UncontrolledCollapsible';
