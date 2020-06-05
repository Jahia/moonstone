import * as React from 'react';
import PropTypes from 'prop-types';

const SvgVisibility = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M12 5C7.455 5 3.573 7.903 2 12c1.573 4.097 5.455 7 10 7 4.546 0 8.427-2.903 10-7-1.573-4.097-5.454-7-10-7zm0 11.667c-2.51 0-4.545-2.091-4.545-4.667 0-2.576 2.036-4.667 4.545-4.667 2.51 0 4.546 2.091 4.546 4.667 0 2.576-2.037 4.667-4.546 4.667zM12 9.2c-1.51 0-2.727 1.25-2.727 2.8 0 1.55 1.218 2.8 2.727 2.8 1.51 0 2.727-1.25 2.727-2.8 0-1.55-1.218-2.8-2.727-2.8z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgVisibility.defaultProps = {
    size: 'default',
    className: ''
};
SvgVisibility.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgVisibility;
