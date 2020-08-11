import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import './AccordionItem.scss';
import {Typography} from '~/components/Typography';
import {AccordionContext} from '~/components/Accordion/Accordion.context';

export const AccordionItem = ({id, label, icon, onClick, children, className, ...props}) => {
    const context = useContext(AccordionContext);
    const open = context.currentItem === id;

    const handleClick = (e, open) => {
        onClick(e, !open);
        context.onSetOpenedItem(id);
    };

    return (
        <section
            {...props}
            className={classnames(
                'moonstone-accordionItem',
                {'moonstone-reversed': context.isReversed},
                'flexCol',
                open ? 'flexFluid' : null,
                className
            )}
        >
            <header
                className={classnames(
                    'moonstone-accordionItem_header',
                    {
                        'moonstone-selected': open,
                        'moonstone-reversed': context.isReversed
                    },
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
                        'moonstone-accordionItem_iconContainer',
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
            {open &&
                <div className={classnames(
                        'moonstone-accordionItem_content',
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
