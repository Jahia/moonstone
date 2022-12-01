import * as React from 'react';
import {AccordionItemProps} from './AccordionItem/AccordionItem.types';

export type AccordionProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Reversed style for dark background with light text
     */
    isReversed?: boolean;
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
    // className?: string;

    /**
     * Function to set accoridonItem opened
     */
    onSetOpenedItem?: () => undefined;
    /**
     * Content of the component
     */
    children?: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}
