import * as React from 'react';
import PropTypes from 'prop-types';

const SvgChevronDoubleRight = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M9.58 12L5 16.59 6.41 18l6-6-6-6L5 7.41 9.58 12z"
        fill="currentColor"
      />
            <path
        d="M16.99 12l-4.58 4.59L13.82 18l6-6-6-6-1.41 1.41L16.99 12z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgChevronDoubleRight.defaultProps = {
    size: 'default',
    className: ''
};
SvgChevronDoubleRight.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgChevronDoubleRight;
