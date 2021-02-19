import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import './Accordion.scss';

export const ControlledAccordion = ({children, openedItem, isReversed, className, onSetOpenedItem, ...props}) => {
    const provider = {
        currentItem: openedItem,
        onSetOpenedItem,
        isReversed: isReversed
    };

    return (
        <AccordionContext.Provider value={provider}>
            <div className={
                    clsx(
                        className,
                        'flexFluid',
                        'moonstone-accordion',
                        {'moonstone-reversed': isReversed}
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
    onSetOpenedItem: PropTypes.func
};
