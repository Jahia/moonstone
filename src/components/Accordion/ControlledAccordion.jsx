import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import styles from './Accordion.scss';

export const ControlledAccordion = ({children, openedItem, isReversed, className, setOpenedItem, ...props}) => {
    const provider = {
        currentItem: openedItem,
        setOpenedItem,
        isReversed: isReversed
    };

    return (
        <AccordionContext.Provider value={provider}>
            <div className={
                    classnames(
                        className,
                        'flexFluid',
                        styles.accordion,
                        isReversed ? styles.accordion_reversed : null
                    )
                }
                 {...props}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

ControlledAccordion.defaultProps = {
    isReversed: false
};

ControlledAccordion.propTypes = {
    /**
     * Reversed style for dark background with light text
     */
    isReversed: PropTypes.bool,

    /**
     * Content of the content
     */
    children: PropTypes.oneOfType([
        PropTypes.shape({
            type: PropTypes.oneOf([AccordionItem])
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf([AccordionItem])
            })
        )
    ]).isRequired,

    /**
     * AccordionItem's id opened by default
     */
    defaultOpenedItem: PropTypes.string,

    /**
     * AccordionItem's id open
     */
    openedItem: PropTypes.string,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function to set accoridonItem opened
     */
    setOpenedItem: PropTypes.func
};
