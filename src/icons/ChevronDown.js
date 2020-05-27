import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronDown = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgChevronDown.defaultProps = {
    size: 'default',
    className: ''
};
SvgChevronDown.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgChevronDown;
