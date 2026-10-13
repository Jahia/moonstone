import clsx from 'clsx';
import React, { useId } from 'react';

import { AccordionContext } from '~/components/Accordion/Accordion.context';
import { Typography } from '~/components/Typography';
import { icons, layout } from '~/globals/css-utils.js';

import type { AccordionItemProps } from './AccordionItem.types';

import styles from './AccordionItem.module.scss';

export const AccordionItem: React.FC<AccordionItemProps> = ({
    id, label, icon = null, headingLevel = 3, onClick = () => undefined, className, children, ...props
}) => {
    const context = React.useContext(AccordionContext);
    const open = context.currentItem === id;
    const buttonId = useId();
    const panelId = useId();
    const Heading = `h${headingLevel}` as const;

    const handleClick = (e: React.MouseEvent) => {
        onClick(e, !open);
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
            <Heading className={clsx('moonstone-accordionItem_heading', styles['moonstone-accordionItem_heading'])}>
                <button
                    // The panel is only rendered when open, so it can only be referenced then
                    aria-controls={open ? panelId : undefined}
                    aria-expanded={open}
                    className={clsx(
                        ['moonstone-accordionItem_header', styles['moonstone-accordionItem_header']],
                        open && ['moonstone-selected', styles['moonstone-selected']],
                        context.isReversed && ['moonstone-reversed', styles['moonstone-reversed']],
                        ['flexRow', layout.flexRow],
                        ['alignCenter', layout.alignCenter],
                    )}
                    id={buttonId}
                    type="button"
                    onClick={handleClick}
                >
                    {icon
                        && (
                            <span className={clsx(
                                ['moonstone-accordionItem_iconContainer', styles['moonstone-accordionItem_iconContainer']],
                                ['flexRow_center', layout.flexRow_center],
                                ['alignCenter', layout.alignCenter],
                            )}
                            >
                                <icon.type {...icon.props} className={clsx('moonstone-icon_big', icons['moonstone-icon_big'], icon.props.className)} size="big"/>
                            </span>
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
                </button>
            </Heading>

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
                        id={panelId}
                        role="region"
                    >
                        {children}
                    </div>
                )}
        </section>
    );
};

AccordionItem.displayName = 'AccordionItem';
