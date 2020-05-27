import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSwapVert = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgSwapVert.defaultProps = {
    size: 'default',
    className: ''
};
SvgSwapVert.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgSwapVert;
