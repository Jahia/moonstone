import * as React from 'react';
import PropTypes from 'prop-types';

const SvgRemotePublication = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M12 9v2H9v2h3v2l3-3-3-3zM3 5h5v14H3V5zM16 5h5v14h-5V5z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgRemotePublication.defaultProps = {
    size: 'default',
    className: ''
};
SvgRemotePublication.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgRemotePublication;
