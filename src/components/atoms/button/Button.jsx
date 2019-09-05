import React from 'react'
import './_button.scss'
// import { Button as MuiButton, withStyles } from '@material-ui/core'
// import * as _ from 'lodash'
// import classnames from 'classnames'
// import PropTypes from 'prop-types'
//import PropTypeConstants from '@src/PropTypesConstants.js'

// let styles = theme => ({
//     root: {
//         borderRadius: 1,
//         letterSpacing: 0,
//         fontWeight: 600,
//         lineHeight: 1.25,
//         margin: '0 8px',
//         '-webkit-font-smoothing': 'antialiased',
//         '-moz-osx-font-smoothing': 'grayscale',
//     },
//     label: {},
//     focusVisible: {},
//     disabled: {},
//     fullWidth: {},
//     primary: {
//         background: theme.palette.brand.alpha,
//         boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
//         color: theme.palette.invert.beta,
//         '&:hover': {
//             background: theme.palette.brand.alpha,
//             boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
//             color: theme.palette.invert.beta,
//         },
//     },
//     secondary: {
//         border: '1px solid ' + theme.palette.brand.alpha,
//         boxSizing: 'border-box',
//         background: 'transparent',
//         color: theme.palette.brand.alpha,
//         '&:hover': {
//             border: '1px solid ' + theme.palette.brand.alpha,
//             boxSizing: 'border-box',
//             background: 'transparent',
//             color: theme.palette.brand.alpha,
//         },
//     },
//     ghost: {
//         color: theme.palette.brand.alpha,
//     },
//     colorInverted: {
//         color: theme.palette.invert.beta,
//     },
//     sizeNormal: {
//         fontSize: 14,
//         padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px',
//     },
//     sizeCompact: {
//         fontSize: 12,
//         padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit + 'px ',
//     },
//     noWrap: {},
//     gutterBottom: {},
//     paragraph: {},
//     text: {
//         padding: 'inherit',
//     },
//     icon: {
//         marginRight: theme.spacing.unit,
//     },
// })

// const getClasses = ({
//     variant,
//     color,
//     size,
//     classes: { root, label, focusVisible, disabled, fullWidth, ...myClasses },
// }) => ({
//     root: classnames(
//         root,
//         myClasses[variant],
//         myClasses['color' + _.capitalize(color)],
//         myClasses['size' + _.capitalize(size)]
//     ),
//     label,
//     focusVisible,
//     disabled,
//     fullWidth,
// })

// const Button = withStyles(styles, { name: 'DsButton' })(
//     ({ variant, color, size, classes, icon, children, ...props }) => (
//         <MuiButton
//             classes={getClasses({ variant, color, size, classes })}
//             {...props}
//         >
//             <div className={classes.icon}>{icon}</div>
//             {children}
//         </MuiButton>
//     )
// )

const Button = ({ label, classes }) => {
    let classNames = classes ? classes : ''
    return <button className={'mds-button' + ' ' + classNames}>{label}</button>
}
/*
Button.propTypes =
    process.env.NODE_ENV !== 'production'
        ? {
              icon: PropTypes.node,
              color: PropTypeConstants.button.colors,
              variant: PropTypeConstants.button.variants,
              size: PropTypeConstants.button.sizes
          }
        : {}
*/
Button.defaultProps = {
    color: 'default',
    variant: 'ghost',
    size: 'normal'
}

Button.displayName = 'mds-Button'

export default Button
