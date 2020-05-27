import * as React from 'react';
import PropTypes from 'prop-types';

const SvgFileImage = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01 4c0-1.1.89-2 1.99-2h8l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM13 3.5V9h5.5L13 3.5zM9.208 14l2.03 2.71 2.97-3.71 4 5h-12l3-4z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgFileImage.defaultProps = {
    size: 'default',
    className: ''
};
SvgFileImage.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgFileImage;
