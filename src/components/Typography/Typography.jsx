import React from 'react';

import PropTypes from 'prop-types';
import styles from './Typography.scss';
import classnames from 'classnames';

export const TypographyVariants = [
    'page',
    'section',
    'regular',
    'caption',
    'strong',
    'button'
];

const childrenPropType = (props, propName, componentName) => (props.isHtml ? PropTypes.node(props, propName, componentName) : PropTypes.string(props, propName, componentName));

export const Typography = ({
    children,
    component,
    variant,
    className,
    ...props
}) =>
    React.createElement(
        component,
        {
            ...props,
            className: classnames(styles.typography, styles[variant], className)
        },
        children
    );

Typography.defaultProps = {
    children: '',
    className: '',
    component: 'p',
    variant: 'regular',
    isHtml: false
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
    isHtml: PropTypes.bool
};
