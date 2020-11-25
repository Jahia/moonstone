import * as React from 'react';

export interface AccordionProps {
    /**
     * Reversed style for dark background with light text
     */
    isReversed?: boolean;
    /**
     * Content of the content
     */
    children: React.ReactNode;
    /**
     * AccordionItem's id opened by default
     */
    defaultOpenedItem?: string;
    /**
     * AccordionItem's id open
     */
    openedItem?: string;
    /**
     * Additional classname
     */
    className?: string;
    /**
     * Function to set accoridonItem opened
     */
    onSetOpenedItem?: (...args: any[])=>any;
}

export const Accordion: React.SFC<AccordionProps>;

