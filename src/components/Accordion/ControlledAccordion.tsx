import clsx from 'clsx';
import React from 'react';

import { AccordionContext } from './Accordion.context';
import { layout } from '~/globals/css-utils.js';

import type { ControlledAccordionProps } from './Accordion.types';

import styles from './Accordion.module.scss';

export const ControlledAccordion: React.FC<ControlledAccordionProps> = ({
    children, openedItem, isReversed = false, className, onSetOpenedItem, ...props
}) => {
    const provider = React.useMemo(() => ({
        currentItem: openedItem,
        onSetOpenedItem,
        isReversed,
    }), [openedItem, onSetOpenedItem, isReversed]);

    return (
        <AccordionContext.Provider value={provider}>
            <div
                className={
                    clsx(
                        className,
                        ['flexFluid', layout.flexFluid],
                        ['moonstone-accordion', styles['moonstone-accordion']],
                        isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                    )
                }
                {...props}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};
