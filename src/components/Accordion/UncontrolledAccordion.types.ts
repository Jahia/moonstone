import React, { useState } from 'react';
import { AccordionItemProps } from './AccordionItem/AccordionItem.types';

export type UncontrolledAccordionProps = {
    /**
     * Reversed style for dark background with light text
     */
    isReversed?: boolean,

    /**
     * Content of the content
     */
    children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];

    /**
     * AccordionItem's id opened by default
     */
    defaultOpenedItem?: string;

    /**
     * Additional classname
     */
    className?: string;
};