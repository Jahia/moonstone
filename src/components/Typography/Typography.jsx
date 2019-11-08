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
    'button'
];

const childrenPropType = (props, propName, componentName) => (props.isHtml ? PropTypes.node(props, propName, componentName) : PropTypes.string(props, propName, componentName));
const filterOutProps = function (props, out = []) {
    const newProps = Object.assign({}, props);
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
