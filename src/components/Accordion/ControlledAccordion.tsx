import React from 'react';
import clsx from 'clsx';
import {AccordionContext} from './Accordion.context';
import './Accordion.scss';
import {ControlledAccordionProps} from './Accordion.types';

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
                    className,
                    'flexFluid',
                    'moonstone-accordion',
                    {'moonstone-reversed': isReversed}
                )
            }
                 {...props}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};
