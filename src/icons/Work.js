import * as React from 'react';
import PropTypes from 'prop-types';

const SvgWork = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.5h-3V6c0-.832-.668-1.5-1.5-1.5h-3C9.668 4.5 9 5.168 9 6v1.5H6c-.832 0-1.492.668-1.492 1.5L4.5 17.25c0 .832.668 1.5 1.5 1.5h12c.832 0 1.5-.668 1.5-1.5V9c0-.832-.668-1.5-1.5-1.5zm-4.5 0h-3V6h3v1.5z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgWork.defaultProps = {
    size: 'default',
    className: ''
};
SvgWork.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgWork;
