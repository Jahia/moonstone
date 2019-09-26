import React from 'react'

import PropTypes from 'prop-types'
import './typography.scss'

export const Typography = ({ children, component, variant }) =>
    React.createElement(
        component,
        {
            className: `typography typography_${variant}`
        },
        children
    )

Typography.defaultProps = {
    children: '',
    component: 'p',
    variant: 'regular'
}

Typography.propTypes = {
    children: PropTypes.string,
    component: PropTypes.string,
    variant: PropTypes.oneOf([
        'page',
        'section',
        'regular',
        'caption',
        'strong'
    ])
}
