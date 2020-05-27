import * as React from 'react';
import PropTypes from 'prop-types';

const SvgArrowRight = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M3 13h14.17l-3.58 3.59L15 18l6-6-6-6-1.41 1.41L17.17 11H3v2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgArrowRight.defaultProps = {
    size: 'default',
    className: ''
};
SvgArrowRight.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgArrowRight;
