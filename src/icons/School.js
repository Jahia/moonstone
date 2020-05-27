import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSchool = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgSchool.defaultProps = {
    size: 'default',
    className: ''
};
SvgSchool.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgSchool;
