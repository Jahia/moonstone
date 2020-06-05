import * as React from 'react';
import PropTypes from 'prop-types';

const SvgViewStream = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 19h17v-6H4v6zM4 6v6h17V6H4z" fill="currentColor"/>
        </svg>
    );
};

SvgViewStream.defaultProps = {
    size: 'default',
    className: ''
};
SvgViewStream.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgViewStream;
