import React, {useState} from 'react';
import './Collapsible.scss';
import type {UncontrolledCollapsibleProps} from './Collapsible.types';
import {ControlledCollapsible} from './ControlledCollapsible';

export const UncontrolledCollapsible = React.forwardRef((
    {
        children,
        onClick = () => undefined,
        isDefaultExpanded = false,
        ...other
    }: UncontrolledCollapsibleProps,
    ref: React.Ref<HTMLDivElement>
) => {
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
});

UncontrolledCollapsible.displayName = 'UncontrolledCollapsible';
