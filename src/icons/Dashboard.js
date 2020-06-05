import * as React from 'react';
import PropTypes from 'prop-types';

const SvgDashboard = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgDashboard.defaultProps = {
    size: 'default',
    className: ''
};
SvgDashboard.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgDashboard;
