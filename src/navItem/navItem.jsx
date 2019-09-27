import React from 'react'

import PropTypes from 'prop-types'
import './navItem.scss'
import { Typography } from '../typography'

export const NavItem = ({ children, className, selected, icon, ...props }) => (
    <li
        {...props}
        className={`navItem ${selected ? 'navItem_selected' : ''} ${className}`}
    >
        <div className='navItem-icon-container'>{icon}</div>
        <Typography component='div'>{children}</Typography>
    </li>
)

NavItem.defaultProps = {
    children: '',
    className: '',
    selected: false
}

NavItem.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node,
    selected: PropTypes.bool,
    className: PropTypes.string
}
