import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCheckboxMiddle = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCheckboxMiddle.defaultProps = {
    size: 'default',
    className: ''
};
SvgCheckboxMiddle.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCheckboxMiddle;
