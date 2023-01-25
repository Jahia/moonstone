import * as React from 'react';
import {AccordionItemProps} from './AccordionItem/AccordionItem.types';

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

type BasicProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classnames
    */
    className?: string;

    /**
     * Content of the component
     */
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

export type AccordionProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledAccordionProps = BasicProps & ControlledProps;

export type UncontrolledAccordionProps = BasicProps & UncontrolledProps;
