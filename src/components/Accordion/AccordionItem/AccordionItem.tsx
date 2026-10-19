import clsx from 'clsx';
import React, { useId } from 'react';

import { AccordionContext } from '~/components/Accordion/Accordion.context';
import { Typography } from '~/components/Typography';
import { icons, layout } from '~/globals/css-utils.js';

import type { AccordionItemProps } from './AccordionItem.types';

import styles from './AccordionItem.module.scss';

export const AccordionItem: React.FC<AccordionItemProps> = ({
    id, label, icon = null, onClick, className, children, ...props
}) => {
    const context = React.useContext(AccordionContext);
    const open = context.currentItem === id;
    const buttonId = useId();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e, !open);
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
                className,
            )}
        >
            <Typography component="h3">
                <Typography
                    // Kept while closed: referencing an unrendered panel is valid when aria-expanded is false
                    aria-controls={id}
                    aria-expanded={open}
                    className={clsx(
                        ['moonstone-accordionItem_header', styles['moonstone-accordionItem_header']],
                        open && ['moonstone-selected', styles['moonstone-selected']],
                        context.isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                        ['flexRow', layout.flexRow],
                        ['alignCenter', layout.alignCenter],
                    )}
                    component="button"
                    id={buttonId}
                    type="button"
                    onClick={handleClick}
                >
                    {icon && (
                        <icon.type
                            {...icon.props}
                            className={clsx('moonstone-icon_big', icons['moonstone-icon_big'], styles.accordionItem_icon, icon.props.className)}
                            size="big"
                        />
                    )}
                    <Typography
                        isNowrap
                        className={clsx('flexFluid', layout.flexFluid)}
                        component="span"
                        variant="subheading"
                        weight={open ? 'bold' : 'default'}
                    >
                        {label}
                    </Typography>
                </Typography>
            </Typography>

            {/* Accordion content */}
            {open
                && (
                    <div
                        aria-labelledby={buttonId}
                        className={clsx(
                            ['moonstone-accordionItem_content', styles['moonstone-accordionItem_content']],
                            ['flexFluid', layout.flexFluid],
                            ['flexCol_nowrap', layout.flexCol_nowrap],
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
