import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import styles from './Accordion.scss';

export const Accordion = ({children, defaultOpenedItemId, openedItemId, isReversed, className, isMultipleOpenable, ...props}) => {
    const [stateOpenedItemId, setStateOpenedItemId] = useState([]);

    const setOpenedItemId = id => {
        console.log('call setOpenedItemId');
        setStateOpenedItemId(prevState => {
            console.log(prevState);
            console.log('---');
            if (prevState === null) {
                return [id];
            }

            if (isMultipleOpenable) {
                return prevState.includes(id) ? prevState.filter(i => id !== i) : [...prevState, id];
            }

            return prevState.includes(id) || id === null ? [] : [id];
        });
    };

    useEffect(() => {
        console.log('call useEffect');
        console.log(defaultOpenedItemId);
        console.log(openedItemId);
        setStateOpenedItemId(defaultOpenedItemId && !openedItemId ? defaultOpenedItemId : openedItemId);
    }, [defaultOpenedItemId, openedItemId]);

    const provider = {
        currentItemId: stateOpenedItemId,
        setOpenedItemId,
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

Accordion.defaultProps = {
    isReversed: false,
    isMultipleOpenable: false,
    openedItemId: null
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
     * AccordionItem's id opened by default
     */
    defaultOpenedItemId: PropTypes.array,

    /**
     * AccordionItem's id open
     */
    openedItemId: PropTypes.array,

    isMultipleOpenable: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Accordion.displayName = 'Accordion';
