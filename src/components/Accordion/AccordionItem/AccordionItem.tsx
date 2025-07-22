import React from 'react';
import clsx from 'clsx';
import './AccordionItem.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';
import type {AccordionItemProps} from './AccordionItem.types';
import {onAccessibleClick, mergeHandlers, onArrowNavigation} from '~/hooks';

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
            {...mergeHandlers(onArrowNavigation({ref: ref}), onAccessibleClick({onClick: e => handleClick(e, open)}))}
            role="none"
            {...props}
        >
            <h3
                className={clsx(
                    'moonstone-accordionItem_header',
                    {
                        'moonstone-selected': open,
                        'moonstone-reversed': context.isReversed
                    },
                    'flexRow',
                    'alignCenter'
                )}
                aria-controls={id}
                aria-expanded={open}
                data-testid="accordion-item"
            >
                <div
                className={clsx('flexRow', 'alignCenter')}
                role="button"
                aria-expanded={open}
                >
                    {icon &&
                    (
                        <div className={clsx(
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
                    variant="subheading"
                    weight={open ? 'bold' : 'default'}
                    className={clsx('flexFluid')}
                    >
                        {label}
                    </Typography>
                </div>
            </h3>

            {/* Accordion content */}
            {open &&
                (
                    <div className={clsx(
                        'moonstone-accordionItem_content',
                        'flexFluid',
                        'flexCol_nowrap'
                    )}
                         role="region"
                    >
                        {children}
                    </div>
                )}
        </section>
    );
};

AccordionItem.displayName = 'AccordionItem';
