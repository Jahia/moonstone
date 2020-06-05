import * as React from 'react';
import PropTypes from 'prop-types';

const SvgViewColumn = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M10 19h5V6h-5v13zm-6 0h5V6H4v13zM16 6v13h5V6h-5z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgViewColumn.defaultProps = {
    size: 'default',
    className: ''
};
SvgViewColumn.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgViewColumn;
