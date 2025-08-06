import React from 'react';
import clsx from 'clsx';
import './AccordionItem.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';
import type {AccordionItemProps} from './AccordionItem.types';
import {mergeHandlers, onArrowNavigation, useKeyUp} from '~/hooks';

export const AccordionItem: React.FC<AccordionItemProps> = ({id, label, icon = null, onClick = () => undefined, className, children, ...props}) => {
    const context = React.useContext(AccordionContext);
    const open = context.currentItem === id;
    const ref = React.useRef(null);

    const handleClick = (e: React.MouseEvent | React.KeyboardEvent, isOpen: boolean) => {
        onClick(e, !isOpen);
        context.onSetOpenedItem(id);
    };

    return (
        <section
            ref={ref}
            className={clsx(
                'moonstone-accordionItem',
                {'moonstone-reversed': context.isReversed},
                    'flexCol',
                    open ? 'flexFluid' : null,
                    className
                )}
            data-testid="accordion"
            {...mergeHandlers(onArrowNavigation({ref: ref}), useKeyUp({onKeyUp: e => handleClick(e, open), role: null}))}
            {...props}
        >
            <h3>
                <button
                    data-testid="accordion_button"
                    className={clsx(
                        'flexRow',
                        'alignCenter',
                        'moonstone-accordionItem_button',
                        {
                            'moonstone-selected': open,
                            'moonstone-reversed': context.isReversed
                        }
                    )}
                    type="button"
                    tabIndex={-1}
                    aria-controls={id}
                    aria-expanded={open}
                    onClick={e => handleClick(e, open)}
                >
                    {icon &&
                    (
                        <div
                            className={clsx(
                                'moonstone-accordionItem_iconContainer',
                                'flexRow_center',
                                'alignCenter'
                            )}
                        >
                            {icon && <icon.type {...icon.props} size="big" className={clsx('moonstone-icon_big', icon.props.className)}/>}
                        </div>
                    )}
                    <Typography
                        isNowrap
                        data-testid="accordion-label"
                        variant="subheading"
                        weight={open ? 'bold' : 'default'}
                    >
                        {label}
                    </Typography>
                </button>
            </h3>

            {/* Accordion content */}
            {open &&
                (
                    <div className={clsx(
                        'moonstone-accordionItem_content',
                        'flexFluid',
                        'flexCol_nowrap'
                    )}
                         id={id}
                         role="region"
                    >
                        {children}
                    </div>
                )}
        </section>
    );
};

AccordionItem.displayName = 'AccordionItem';
