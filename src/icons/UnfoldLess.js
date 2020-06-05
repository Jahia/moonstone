import * as React from 'react';
import PropTypes from 'prop-types';

const SvgUnfoldLess = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgUnfoldLess.defaultProps = {
    size: 'default',
    className: ''
};
SvgUnfoldLess.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgUnfoldLess;
