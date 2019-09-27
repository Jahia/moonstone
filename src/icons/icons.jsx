import React from 'react'
import PropTypes from 'prop-types'
import './icons.scss'

const files = require.context('!svg-sprite-loader!./asset', false, /.*\.svg$/)
files.keys().forEach(files)

export const Icon = ({ name, className }) => (
    <svg className={`svg-icon ${className}`} width='1em' height='1em'>
        <use xlinkHref={`#${name}`}></use>
    </svg>
)

Icon.defaultProps = {
    name: null,
    className: ''
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
}
