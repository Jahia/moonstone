import React from 'react';

import PropTypes from 'prop-types';
import styles from './Typography.scss';
import classnames from 'clsx';

export const TypographyVariants = [
    'page',
    'section',
    'regular',
    'caption',
    'strong',
    'button',
    'subtitle'
];

const filterOutProps = function (props, out) {
    const newProps = {...props};
    out.forEach(function (o) {
        delete newProps[o];
    });
    return newProps;
};

export const Typography = ({
    children,
    component,
    variant,
    className,
    isNowrap,
    ...props
}) =>
    React.createElement(
        component,
        {
            ...filterOutProps(props, ['isHtml']),
            className: classnames(styles.typography, styles[variant], className, {[styles.nowrap]: isNowrap})
        },
        children
    );

Typography.defaultProps = {
    children: '',
    className: '',
    component: 'p',
    variant: 'regular',
    isHtml: false,
    isNowrap: false
};

let childrenPropType = () => {};
if (process.env.NODE_ENV !== 'production') {
    const {isElement} = require('react-is');

    childrenPropType = (props, propName, componentName) => {
        if (props.isHtml && !isElement(props[propName])) {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be rederable.`);
        }

        if (!props.isHtml && typeof props[propName] !== 'string') {
            return new Error(`Invalid prop ${propName} supplied to ${componentName}. ${propName} should be a string.`);
        }
    };
}

Typography.propTypes = {
    /**
     * Content of the component
     */
    children: childrenPropType,

    /**
     * Custom classname to use
     */
    className: PropTypes.string,

    /**
     * The component used for the root node
     */
    component: PropTypes.string,

    /**
     * Variant to use
     */
    variant: PropTypes.oneOf(TypographyVariants),

    /**
     * Does the children contain HTML markup
     */
    isHtml: PropTypes.bool,

    /**
     * No wrapping for text
     */
    isNowrap: PropTypes.bool
};
