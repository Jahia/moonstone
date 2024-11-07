import * as React from 'react';
import type {AccordionItemProps} from './AccordionItem/AccordionItem.types';

type BasicProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children'> & {
    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classname
    */
    className?: string;
    /**
     * Content of the component
     */
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

type ControlledProps = {
    /**
     * Id of the AccordionItem opened. Define the component as controlled when it set (controlled)
     */
    openedItem: string,

    /**
     * Function to set the opened AccordionItem (controlled)
     */
    onSetOpenedItem: (id: string) => void;
};

type UncontrolledProps = {
    /**
     * Id of the AccordionItem opened by default (uncontrolled)
     */
    defaultOpenedItem?: string;
};

export type AccordionProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledAccordionProps = BasicProps & ControlledProps;

export type UncontrolledAccordionProps = BasicProps & UncontrolledProps;
