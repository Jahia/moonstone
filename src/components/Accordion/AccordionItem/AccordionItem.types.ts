import * as React from 'react';

export type AccordionItemProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children' | 'id' | 'onClick'> & {
    /**
     * Specific identifier to define AccordionItem
     */
    id: string;

    /**
     * Label displays as accordion title
     */
    label: string;

    /**
     * Function triggered on click
     */
    onClick?: (e: React.MouseEvent | React.KeyboardEvent, isOpen: boolean) => void;

    /**
     * Icon displays before the label
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
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;
    /**
     * Id of the AccordionItem opened
     */
    currentItem?: string;
    /**
     * Function to set the opened AccordionItem
     */
    onSetOpenedItem?: (id: string) => void;
}
