import * as React from 'react';
import PropTypes from 'prop-types';

const SvgFeather = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M20.744 3C10.199 3 3 10.313 3 21h.601c.301-2.531.63-4.202 3.337-4.765 2.812-.584 5.625-.53 7.875-3.706C14.973 11.653 13.687 12 12 12c2.406-.563 6.037-3.094 6.338-4.5 0 0-.301-.563-3.61 0 2.006-.938 7.52-3.938 6.016-4.5z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgFeather.defaultProps = {
    size: 'default',
    className: ''
};
SvgFeather.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgFeather;
