import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import {AccordionContext} from './Accordion.context';
import {AccordionItem} from './AccordionItem';
import styles from './Accordion.scss';

export const Accordion = ({children, defaultOpenedItemId, openedItemId, isReversed, className, isMultipleOpenable, ...props}) => {
    const [stateOpenedItemId, setStateOpenedItemId] = useState(defaultOpenedItemId);

    const setOpenedItemId = id => {
        setStateOpenedItemId(prevState => {
            if (typeof prevState === 'undefined') {
                return isMultipleOpenable ? [id] : id;
            }

            if (isMultipleOpenable) {
                return prevState.includes(id) ? prevState.filter(i => id !== i) : [...prevState, id];
            }

            return prevState === id ? null : id;
        });
    };

    useEffect(() => {
        // Update the state when the prop openedItemId has changed
        // Because of the first render with have to check if defaultOpenedItemId is set
        setStateOpenedItemId(defaultOpenedItemId && !openedItemId ? defaultOpenedItemId : openedItemId);
    }, [defaultOpenedItemId, openedItemId]);

    const provider = {
        currentItemId: stateOpenedItemId,
        setOpenedItemId,
        isReversed: isReversed,
        isMultipleOpenable: isMultipleOpenable
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

let idPropType;
if (process.env.NODE_ENV !== 'production') {
    idPropType = (props, propName, componentName) => {
        if (props.isMultipleOpenable && !Array.isArray(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be an array or null`);
        }

        if (!props.isMultipleOpenable && (props[propName] === null || typeof props[propName] === 'string')) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be a string or null.`);
        }
    };
}

Accordion.defaultProps = {
    isReversed: false,
    isMultipleOpenable: false
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
     * AccordionItem's id opened by default (isMultipleOpenable ? Array : String)
     */
    defaultOpenedItemId: idPropType,

    /**
     * AccordionItem's id open (isMultipleOpenable ? Array : String)
     */
    openedItemId: idPropType,

    /**
     * Allow multiple accordionItem opened has the same time
     */
    isMultipleOpenable: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Accordion.displayName = 'Accordion';
