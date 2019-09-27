import React from 'react'

import PropTypes from 'prop-types'
import './typography.scss'

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
            className: `typography typography_${variant} ${className}`
        },
        children
    )

Typography.defaultProps = {
    children: '',
    className: '',
    component: 'p',
    variant: 'regular'
}

Typography.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.string,
    variant: PropTypes.oneOf([
        'page',
        'section',
        'regular',
        'caption',
        'strong'
    ])
}
