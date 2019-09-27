import React from 'react'

import PropTypes from 'prop-types'
import './typography.scss'

export const Typography = ({ children, component, variant, ...props }) =>
    React.createElement(
        component,
        {
            ...props,
            className: `typography typography_${variant} ${props.className}`
        },
        children
    )

Typography.defaultProps = {
    children: '',
    component: 'p',
    variant: 'regular'
}

Typography.propTypes = {
    children: PropTypes.node,
    component: PropTypes.string,
    variant: PropTypes.oneOf([
        'page',
        'section',
        'regular',
        'caption',
        'strong'
    ])
}
