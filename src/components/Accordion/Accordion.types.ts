import * as React from 'react';

import type { AccordionItemProps } from './AccordionItem/AccordionItem.types';

type BasicProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children'> & {
    /**
     * Whether the accordion uses reversed colors, for a dark background.
     */
    isReversed?: boolean;

    /**
     * Additional class name.
    */
    className?: string;
    /**
     * The AccordionItem components of the accordion.
     */
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
};

type ControlledProps = {
    /**
     * Id of the open AccordionItem (controlled). Setting it makes the accordion controlled.
     */
    openedItem: string;

    /**
     * Called with the id of the item the user opens or closes (controlled).
     */
    onSetOpenedItem: (id: string) => void;
};

type UncontrolledProps = {
    /**
     * Id of the AccordionItem open on first render (uncontrolled).
     */
    defaultOpenedItem?: string;
};

export type AccordionProps = BasicProps & Partial<ControlledProps> & Partial<UncontrolledProps>;

export type ControlledAccordionProps = BasicProps & ControlledProps;

export type UncontrolledAccordionProps = BasicProps & UncontrolledProps;
