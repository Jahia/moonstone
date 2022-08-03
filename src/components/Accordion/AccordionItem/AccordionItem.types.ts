import * as React from 'react';

export type AccordionItemProps = {
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
    onClick?: (e: React.MouseEvent | React.KeyboardEvent, isOpen: boolean) => void;

    /**
     * Icon
     */
    icon?: React.ReactElement;

    /**
     * Content of the component
     */
    children: React.ReactNode;

    /**
     * Additional classname
     */
    className?: string;
}

export type AccordionContextType = {
    /**
     * Additional classname
     */
    isReversed: boolean;
    /**
     * Additional classname
     */
    currentItem?: string;
    /**
     * Additional classname
     */
    onSetOpenedItem?: (id: string) => void;
}
