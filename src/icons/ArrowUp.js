import * as React from 'react';
import PropTypes from 'prop-types';

const SvgArrowUp = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M13 21V6.83l3.59 3.58L18 9l-6-6-6 6 1.41 1.41L11 6.83V21h2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgArrowUp.defaultProps = {
    size: 'default',
    className: ''
};
SvgArrowUp.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgArrowUp;
