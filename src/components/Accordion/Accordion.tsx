import * as React from 'react';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {ControlledAccordion} from './ControlledAccordion';
import {AccordionProps} from './Accordion.types';

export const Accordion: React.FC<AccordionProps> = ({children, defaultOpenedItem, openedItem, onSetOpenedItem, ...props}) => {
    if (!children) {
        return null;
    }

    if (typeof openedItem === 'undefined') {
        return <UncontrolledAccordion defaultOpenedItem={defaultOpenedItem} {...props}>{children}</UncontrolledAccordion>;
    }

    return <ControlledAccordion openedItem={openedItem} onSetOpenedItem={onSetOpenedItem} {...props}>{children}</ControlledAccordion>;
};

Accordion.displayName = 'Accordion';
