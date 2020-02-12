import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './AccordionItem.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';

export const AccordionItem = ({id, label, icon, onClickToOpen, onClick, onClickToClose, children, ...props}) => {
    const context = useContext(AccordionContext);
    let open;

    if (context.isMultipleOpenable) {
        open = context.currentItem ? context.currentItem.includes(id) : false;
    } else {
        open = context.currentItem === id;
    }

    const handleClick = e => {
        if (!open) {
            onClickToOpen(e);
        }

        onClick(e);
        context.setOpenedItem(id);

        if (open) {
            onClickToClose(e);
        }
    };

    return (
        <section
            {...props}
            className={classnames(
                styles.accordionItem,
                context.isReversed ? styles.accordionItem_reversed : null,
                'flexCol',
                open ? 'flexFluid' : null
            )}
        >
            <header
                className={classnames(
                    styles.accordionItem_header,
                    open ? classnames(styles.accordionItem_header_selected) : null,
                    'flexRow',
                    'alignCenter'
                )}
                aria-controls={id}
                aria-expanded={open}
                onClick={e => handleClick(e)}
            >
                {icon &&
                    <div className={classnames(
                        styles.accordionItem_iconContainer,
                        'flexRow_center',
                        'alignCenter'
                    )}
                    >
                        {icon}
                    </div>}
                <Typography
                    isNowrap
                    variant={open ? 'strong' : 'regular'}
                    className={classnames('flexFluid')}
                >
                    {label}
                </Typography>
            </header>

            {/* Accordion content */}
            {open &&
                <div className={classnames(
                        styles.accordionItem_content,
                        'flexFluid'
                    )}
                     role="region"
                >
                    {children}
                </div>}
        </section>
    );
};

AccordionItem.defaultProps = {
    icon: null,
    onClick: () => {},
    onClickToOpen: () => {},
    onClickToClose: () => {}
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
     * Function triggered on every click
     */
    onClick: PropTypes.func,

    /**
     * Function only triggered on click before accordion open
     */
    onClickToOpen: PropTypes.func,

    /**
     * Function only triggered on click before accordion close
     */
    onClickToClose: PropTypes.func,

    /**
     * Icon
     */
    icon: PropTypes.node,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired
};

AccordionItem.displayName = 'AccordionItem';
