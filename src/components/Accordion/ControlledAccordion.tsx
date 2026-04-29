import React from 'react';
import clsx from 'clsx';
import {AccordionContext} from './Accordion.context';
import {layout, reset} from '~/globals/css-utils.js';
import styles from './Accordion.module.scss';
import type {ControlledAccordionProps} from './Accordion.types';

export const ControlledAccordion: React.FC<ControlledAccordionProps> = ({children, openedItem, isReversed = false, className, onSetOpenedItem, ...props}) => {
    const provider = {
        currentItem: openedItem,
        onSetOpenedItem,
        isReversed
    };

    return (
        <AccordionContext.Provider value={provider}>
            <div className={
                clsx(
                    reset,
                    className,
                    ['flexFluid', layout.flexFluid],
                    ['moonstone-accordion', styles['moonstone-accordion']],
                    isReversed && ['moonstone-reversed', styles['moonstone-reversed']]
                )
            }
                 {...props}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};
