import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './AccordionItem.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';

export const AccordionItem = ({id, label, icon, onClick, children, className, ...props}) => {
    const context = useContext(AccordionContext);
    const [cssExpanded, setCssExpanded] = useState(null);
    const open = context.currentItem === id;

    const handleClick = (e, open) => {
        onClick(e, !open);
        context.onSetOpenedItem(id);
    };

    useEffect(() => {
        setCssExpanded({[styles.accordionItem_opened]: open});
    },
    [open]);

    return (
        <section
            {...props}
            className={classnames(
                styles.accordionItem,
                {[styles.accordionItem_reversed]: context.isReversed},
                cssExpanded,
                className
            )}
        >
            <header
                className={classnames(
                    styles.accordionItem_header,
                    {[styles.accordionItem_header_selected]: open},
                    'flexRow',
                    'alignCenter'
                )}
                role="accordion-item"
                aria-controls={id}
                aria-expanded={open}
                onClick={e => handleClick(e, open)}
            >
                {icon &&
                <div className={classnames(
                        styles.accordionItem_iconContainer,
                        'flexRow_center',
                        'alignCenter'
                    )}
                >
                    {icon && <icon.type {...icon.props} size="big"/>}
                </div>}
                <Typography
                    isNowrap
                    variant="subheading"
                    weight={open ? 'bold' : 'default'}
                    className={classnames('flexFluid')}
                >
                    {label}
                </Typography>
            </header>

            {/* Accordion content */}
            <div className={classnames(styles.accordionItem_content)}
                 role="region"
            >
                {open && children}
            </div>
        </section>
    );
};

AccordionItem.defaultProps = {
    icon: null,
    onClick: () => {}
};

AccordionItem.propTypes = {
    /**
     * Id to define AccordionItem
     */
    id: PropTypes.string.isRequired,

    /**
     * Label
     */
    label: PropTypes.string.isRequired,

    /**
     * Function triggered on click
     */
    onClick: PropTypes.func,

    /**
     * Icon
     */
    icon: PropTypes.node,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

AccordionItem.displayName = 'AccordionItem';
