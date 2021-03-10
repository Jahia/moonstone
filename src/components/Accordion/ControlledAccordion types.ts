import React from 'react';
import { AccordionItemProps } from './AccordionItem/AccordionItem.types';

export type ControlledAccordionProps = {
    /**
     * Reversed style for dark background with light text
     */
    isReversed?: boolean;

    /**
     * Content of the content
     */
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];

    /**
     * AccordionItem's id open
     */
    openedItem?: string,

    /**
     * Additional classname
     */
    className?: string,

    /**
     * Function to set accoridonItem opened
     */
    onSetOpenedItem: (id: string) => void;
};
