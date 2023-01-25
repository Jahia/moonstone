import React, {useState} from 'react';
import './Collapsible.scss';
import type {UncontrolledCollapsibleProps} from './Collapsible.types';
import {ControlledCollapsible} from './ControlledCollapsible';

export const UncontrolledCollapsible: React.FC<UncontrolledCollapsibleProps> = ({
    children,
    onClick = () => undefined,
    isDefaultExpanded = false,
    ...other
}) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

    const handleOnClick: React.MouseEventHandler = e => {
        setIsExpanded(!isExpanded);
        onClick(e);
    };

    return (
        <ControlledCollapsible isExpanded={isExpanded} onClick={e => handleOnClick(e)} {...other}>
            {children}
        </ControlledCollapsible>
    );
};

UncontrolledCollapsible.displayName = 'UncontrolledCollapsible';
