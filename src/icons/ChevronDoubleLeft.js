import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronDoubleLeft = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M11 6l1.41 1.41L7.83 12l4.58 4.59L11 18l-6-6 6-6z"
        fill="currentColor"
      />
            <path
        d="M18 6l1.41 1.41L14.83 12l4.58 4.59L18 18l-6-6 6-6z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgChevronDoubleLeft.defaultProps = {
    size: 'default',
    className: ''
};
SvgChevronDoubleLeft.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgChevronDoubleLeft;
