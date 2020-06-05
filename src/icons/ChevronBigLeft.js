import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronBigLeft = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M17.835 3.87l-1.77-1.77-9.9 9.9 9.9 9.9 1.77-1.77L9.705 12l8.13-8.13z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgChevronBigLeft.defaultProps = {
    size: 'default',
    className: ''
};
SvgChevronBigLeft.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgChevronBigLeft;
