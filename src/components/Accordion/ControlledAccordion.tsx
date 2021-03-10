import React from 'react';
import clsx from 'clsx';
import {AccordionContext} from './Accordion.context';
import './Accordion.scss';
import { ControlledAccordionProps } from './ControlledAccordion types';

export const ControlledAccordion: React.FC<ControlledAccordionProps> = ({children, openedItem, isReversed, className, onSetOpenedItem, ...props}) => {
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

ControlledAccordion.defaultProps = {
    isReversed: false,
    onSetOpenedItem: () => undefined,
    openedItem: undefined

};

