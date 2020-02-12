import React, {useState} from 'react';
import PropTypes from 'prop-types';
// Import classnames from 'clsx';
// import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import {ControlledAccordion} from './ControlledAccordion';
// Import styles from './Accordion.scss';

export const UncontrolledAccordion = ({defaultOpenedItem, children, ...props}) => {
    console.log(defaultOpenedItem);
    const [stateOpenedItem, setStateOpenedItem] = useState(defaultOpenedItem);

    const setOpenedItem = id => {
        setStateOpenedItem(prevState => {
            return prevState === id ? null : id;
        });
    };

    return (
        <ControlledAccordion openedItem={stateOpenedItem} setOpenedItem={setOpenedItem} {...props}>
            {children}
        </ControlledAccordion>
    );
};

UncontrolledAccordion.defaultProps = {
    isReversed: false
};

UncontrolledAccordion.propTypes = {
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
     * AccordionItem's id opened by default (isMultipleOpenable ? Array : String)
     */
    defaultOpenedItem: PropTypes.string,

    /**
     * AccordionItem's id open (isMultipleOpenable ? Array : String)
     */
    openedItemId: PropTypes.string,

    /**
     * Allow multiple accordionItem opened has the same time
     */
    isMultipleOpenable: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};
