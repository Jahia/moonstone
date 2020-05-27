import * as React from 'react';
import PropTypes from 'prop-types';

const SvgUndelete = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M6.514 4l1.999 2H19V4h-3.5l-1-1h-5l-1 1H6.514z"
        fill="currentColor"
      />
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8.318l-3-3 1.27-1.27L21 20.788l-1.26 1.26-2.025-2.022c-.35.582-.99.974-1.715.974H8c-1.1 0-2-.9-2-2V8.318zm10 9.994V19H8v-8.683a37688.8 37688.8 0 008 7.995z"
        fill="currentColor"
      />
            <path d="M9.512 7l2 2H16v4.492l2 2V7H9.512z" fill="currentColor"/>
        </svg>
    );
};

SvgUndelete.defaultProps = {
    size: 'default',
    className: ''
};
SvgUndelete.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgUndelete;
