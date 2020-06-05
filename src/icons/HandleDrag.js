import * as React from 'react';
import PropTypes from 'prop-types';

const SvgHandleDrag = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M11.333 16c0 .733-.6 1.333-1.333 1.333s-1.333-.6-1.333-1.333.6-1.333 1.333-1.333 1.333.6 1.333 1.333zM10 10.667c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm0-4c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm4 2.666c.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333-1.333.6-1.333 1.333.6 1.333 1.333 1.333zm0 1.334c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm0 4c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgHandleDrag.defaultProps = {
    size: 'default',
    className: ''
};
SvgHandleDrag.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgHandleDrag;
