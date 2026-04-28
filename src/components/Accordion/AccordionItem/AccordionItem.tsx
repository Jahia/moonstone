import React from 'react';
import clsx from 'clsx';
import styles from './AccordionItem.module.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';
import type {AccordionItemProps} from './AccordionItem.types';
import {onAccessibleClick} from '~/hooks';
import {icons, layout} from '~/globals/css-utils.js';

export const AccordionItem: React.FC<AccordionItemProps> = ({id, label, icon = null, onClick = () => undefined, className, children, ...props}) => {
    const context = React.useContext(AccordionContext);
    const open = context.currentItem === id;

    const handleClick = (e: React.MouseEvent | React.KeyboardEvent, isOpen: boolean) => {
        onClick(e, !isOpen);
        context.onSetOpenedItem(id);
    };

    return (
        <section
            {...props}
            className={clsx(
                ['moonstone-accordionItem', styles['moonstone-accordionItem']],
                context.isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                ['flexCol', layout.flexCol],
                open ? ['flexFluid', layout.flexFluid] : null,
                className
            )}
        >
            <header
                className={clsx(
                    ['moonstone-accordionItem_header', styles['moonstone-accordionItem_header']],
                    open && ['moonstone-selected', styles['moonstone-selected']],
                    context.isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter]
                )}
                aria-controls={id}
                aria-expanded={open}
                {...onAccessibleClick({onClick: e => handleClick(e, open)})}
                role="accordion-item"
            >
                {icon &&
                    (
                        <div className={clsx(
                            ['moonstone-accordionItem_iconContainer', styles['moonstone-accordionItem_iconContainer']],
                            ['flexRow_center', layout.flexRow_center],
                            ['alignCenter', layout.alignCenter]
                        )}
                        >
                            {icon && <icon.type {...icon.props} size="big" className={clsx('moonstone-icon_big', icons['moonstone-icon_big'], icon.props.className)}/>}
                        </div>
                    )}
                <Typography
                    isNowrap
                    variant="subheading"
                    weight={open ? 'bold' : 'default'}
                    className={clsx('flexFluid', layout.flexFluid)}
                >
                    {label}
                </Typography>
            </header>

            {/* Accordion content */}
            {open &&
                (
                    <div className={clsx(
                        ['moonstone-accordionItem_content', styles['moonstone-accordionItem_content']],
                        ['flexFluid', layout.flexFluid],
                        ['flexCol_nowrap', layout.flexCol_nowrap]
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
