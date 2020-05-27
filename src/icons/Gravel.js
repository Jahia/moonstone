import * as React from 'react';
import PropTypes from 'prop-types';

const SvgGravel = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 21h12v2H1v-2zM5.245 8.07l2.83-2.828 14.14 14.142-2.828 2.828L5.245 8.07zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66L12.317 1zM3.826 9.484l5.657 5.657-2.828 2.828-5.657-5.657 2.828-2.828z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgGravel.defaultProps = {
    size: 'default',
    className: ''
};
SvgGravel.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgGravel;
