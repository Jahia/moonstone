import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheck = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCheck.defaultProps = {
    size: 'default',
    className: ''
};
SvgCheck.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCheck;
