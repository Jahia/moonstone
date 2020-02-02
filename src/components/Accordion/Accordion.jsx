import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import styles from './Accordion.scss';

export const Accordion = ({children, openByDefault, isReversed}) => {
    const [currentItem, setCurrentItem] = useState(openByDefault ? openByDefault : null);
    const [reversed] = useState(isReversed);

    function defineCurrentItem(id) {
        setCurrentItem(prevState => (prevState === id ? null : id));
    }

    return (
        <AccordionContext.Provider value={{currentItem, defineCurrentItem, reversed}}>
            <div className={classnames('flexFluid', styles.accordion, isReversed ? styles.accordion_reversed : null)}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

Accordion.defaultProps = {
    isReversed: false
};

Accordion.propTypes = {
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
     * AccordionItem's id to set an item open by default
     */
    openByDefault: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
