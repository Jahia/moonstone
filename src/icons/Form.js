import * as React from 'react';
import PropTypes from 'prop-types';

const SvgForm = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-3 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm-2 1a1 1 0 100-2 1 1 0 000 2zm2 3a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm-2 1a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgForm.defaultProps = {
    size: 'default',
    className: ''
};
SvgForm.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgForm;
