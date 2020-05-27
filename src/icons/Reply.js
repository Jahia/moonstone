import * as React from 'react';
import PropTypes from 'prop-types';

const SvgReply = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgReply.defaultProps = {
    size: 'default',
    className: ''
};
SvgReply.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgReply;
