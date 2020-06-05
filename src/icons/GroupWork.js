import * as React from 'react';
import PropTypes from 'prop-types';

const SvgGroupWork = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM9 16.125a1.876 1.876 0 11.001-3.751A1.876 1.876 0 019 16.125zM10.125 9a1.876 1.876 0 113.751.001A1.876 1.876 0 0110.125 9zM15 16.125a1.876 1.876 0 11.001-3.751A1.876 1.876 0 0115 16.125z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgGroupWork.defaultProps = {
    size: 'default',
    className: ''
};
SvgGroupWork.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgGroupWork;
