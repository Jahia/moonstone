import * as React from 'react';
import PropTypes from 'prop-types';

const SvgGraphQl = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.548 5.063A1.606 1.606 0 0012.01 3a1.603 1.603 0 00-1.539 2.06L6.77 7.198a1.607 1.607 0 00-2.555.302A1.607 1.607 0 005.23 9.863v4.275A1.608 1.608 0 004.219 16.5a1.606 1.606 0 002.551.305l3.7 2.137A1.603 1.603 0 0012.01 21a1.606 1.606 0 001.523-2.11l3.679-2.124a1.607 1.607 0 002.59-.266 1.6 1.6 0 00-1.012-2.362V9.863A1.608 1.608 0 0019.806 7.5a1.608 1.608 0 00-2.557-.3l-3.701-2.137zm-1.985 1.083a1.609 1.609 0 00.895 0l4.844 8.39a1.593 1.593 0 00-.451.783H7.169a1.609 1.609 0 00-.451-.781l4.845-8.392zm-.707-.427l.046.046-4.845 8.392a1.737 1.737 0 00-.064-.017V9.86a1.602 1.602 0 001.154-1.998l3.709-2.142zm2.263.045a1.69 1.69 0 00.043-.043l3.71 2.142a1.602 1.602 0 001.155 1.996v4.28l-.062.017-4.846-8.392zm3.763 10.423l-3.686 2.128a1.6 1.6 0 00-1.186-.523 1.6 1.6 0 00-1.156.49L7.15 16.144l.017-.062h9.685l.03.105z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgGraphQl.defaultProps = {
    size: 'default',
    className: ''
};
SvgGraphQl.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgGraphQl;
