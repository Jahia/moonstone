import React from 'react'
import PropTypes from 'prop-types'
import './icons.scss'
import './icons-loader'

export const Icon = ({ name, className, ...props }) => (
    <svg
        {...props}
        className={`svg-icon ${className}`}
        width='1em'
        height='1em'
    >
        <use xlinkHref={`#${name}`}></use>
    </svg>
)

Icon.defaultProps = {
    className: ''
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}
