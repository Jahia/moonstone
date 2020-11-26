import * as React from 'react';

export interface AccordionItemProps {
    /**
     * Id to define AccordionItem
     */
    id: string;
    /**
     * Label
     */
    label: string;
    /**
     * Function triggered on click
     */
    onClick?: (...args: any[])=>any;
    /**
     * Icon
     */
    icon?: React.ReactNode;
    /**
     * Content of the component
     */
    children: React.ReactNode;
    /**
     * Additional classname
     */
    className?: string;
}

export const AccordionItem: React.SFC<AccordionItemProps>;

