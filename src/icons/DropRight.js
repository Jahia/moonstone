import * as React from 'react';
import PropTypes from 'prop-types';

const SvgDropRight = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M10 17l5-5-5-5v10z" fill="currentColor"/>
        </svg>
    );
};

SvgDropRight.defaultProps = {
    size: 'default',
    className: ''
};
SvgDropRight.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgDropRight;
