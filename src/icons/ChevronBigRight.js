import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronBigRight = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2 5.88 4.12z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgChevronBigRight.defaultProps = {
    size: 'default',
    className: ''
};
SvgChevronBigRight.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgChevronBigRight;
