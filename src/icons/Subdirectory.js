import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSubdirectory = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgSubdirectory.defaultProps = {
    size: 'default',
    className: ''
};
SvgSubdirectory.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgSubdirectory;
