import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheckboxChecked = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCheckboxChecked.defaultProps = {
    size: 'default',
    className: ''
};
SvgCheckboxChecked.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCheckboxChecked;
