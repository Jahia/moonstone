import * as React from 'react';
import PropTypes from 'prop-types';

const SvgStudio = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M8 21h1.946L16 4h-1.954L8 21zM3.8 13l4.6 4.6L7 19l-6-6 6-6 1.4 1.4L3.8 13zM20.2 13l-4.6 4.6L17 19l6-6-6-6-1.4 1.4 4.6 4.6z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgStudio.defaultProps = {
    size: 'default',
    className: ''
};
SvgStudio.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgStudio;
