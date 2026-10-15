import clsx from 'clsx';
import React, { useRef } from 'react';

import { AccordionContext } from './Accordion.context';
import { layout } from '~/globals/css-utils.js';
import { mergeHandlers, useRovingFocus } from '~/hooks';

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
    const accordionRef = useRef<HTMLDivElement>(null);
    const { onKeyDown } = useRovingFocus(accordionRef, {
        itemSelector: '.moonstone-accordionItem_header',
        isRoving: false,
    });

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
                ref={accordionRef}
                {...mergeHandlers({ onKeyDown }, props)}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};
