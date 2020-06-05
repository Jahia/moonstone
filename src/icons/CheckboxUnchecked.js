import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheckboxUnchecked = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCheckboxUnchecked.defaultProps = {
    size: 'default',
    className: ''
};
SvgCheckboxUnchecked.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCheckboxUnchecked;
