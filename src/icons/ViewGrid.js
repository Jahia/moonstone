import * as React from 'react';
import PropTypes from 'prop-types';

const SvgViewGrid = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M4 12h5V6H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V6h-5v6zm6-6v6h5V6h-5z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgViewGrid.defaultProps = {
    size: 'default',
    className: ''
};
SvgViewGrid.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgViewGrid;
