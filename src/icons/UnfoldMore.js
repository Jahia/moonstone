import * as React from 'react';
import PropTypes from 'prop-types';

const SvgUnfoldMore = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgUnfoldMore.defaultProps = {
    size: 'default',
    className: ''
};
SvgUnfoldMore.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgUnfoldMore;
