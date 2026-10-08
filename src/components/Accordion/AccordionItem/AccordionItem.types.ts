import * as React from 'react';

export type AccordionItemProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children' | 'id' | 'onClick'> & {
    /**
     * Identifier of the item, unique within its Accordion.
     */
    id: string;

    /**
     * Text of the item's header.
     */
    label: string;

    /**
     * Called when the user opens or closes the item. The second argument is the new open state.
     */
    onClick?: (e: React.MouseEvent | React.KeyboardEvent, isOpen: boolean) => void;

    /**
     * Icon shown before the label.
     */
    icon?: React.ReactElement;

    /**
     * Content shown when the item is open.
     */
    children: React.ReactNode;

    /**
     * Additional class name.
     */
    className?: string;
};

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
};
