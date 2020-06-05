import * as React from 'react';
import PropTypes from 'prop-types';

const SvgClock = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M11 7h1.5v5.25l4.5 2.67-.75 1.23L11 13V7z" fill="currentColor"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12zm2 0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgClock.defaultProps = {
    size: 'default',
    className: ''
};
SvgClock.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgClock;
