import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AccordionItem} from './AccordionItem';
import {ControlledAccordion} from './ControlledAccordion';

export const UncontrolledAccordion = ({defaultOpenedItem, children, ...props}) => {
    const [openedItem, setOpenedItem] = useState(defaultOpenedItem);

    const onSetOpenedItem = id => {
        setOpenedItem(prevState => {
            return prevState === id ? null : id;
        });
    };

    return (
        <ControlledAccordion openedItem={openedItem} onSetOpenedItem={onSetOpenedItem} {...props}>
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
     * AccordionItem's id opened by default
     */
    defaultOpenedItem: PropTypes.string,

    /**
     * Additional classname
     */
    className: PropTypes.string
};
