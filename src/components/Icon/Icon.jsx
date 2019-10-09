import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.scss';
import classnames from 'classnames';
import '../../icons/icons-loader';

export const IconSizes = ['default', 'big'];

export const Icon = ({name, size, className, ...props}) => (
    <svg
        {...props}
        className={classnames(styles.svgIcon, styles[size], className)}
        width="1em"
        height="1em"
    >
        <use xlinkHref={`#${name}`}/>
    </svg>
);

Icon.defaultProps = {
    className: '',
    size: 'default'
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(IconSizes),
    className: PropTypes.string
};
