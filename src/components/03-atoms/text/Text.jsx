import React from 'react'
import './_text.scss'
import PropTypes from 'prop-types'

const Text = ({ label, classes }) => {
    let classNames = classes ? classes : ''
    return <div className={classNames}>{label}</div>
}

Text.defaultProps = {
    color: 'default',
    variant: 'ghost',
    size: 'normal'
}

Text.displayName = 'mds-Text'

export default Text
