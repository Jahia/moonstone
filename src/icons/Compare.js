import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCompare = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCompare.defaultProps = {
    size: 'default',
    className: ''
};
SvgCompare.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCompare;
