import React from 'react';

import PropTypes from 'prop-types';
import styles from './typography.scss';
import classnames from 'classnames';

export const TypographyVariants = [
    'page',
    'section',
    'regular',
    'caption',
    'strong'
];

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
    variant: 'regular'
};

Typography.propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.node,

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
    variant: PropTypes.oneOf(TypographyVariants)
};
