import * as React from 'react';
import PropTypes from 'prop-types';

const SvgMenu = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgMenu.defaultProps = {
    size: 'default',
    className: ''
};
SvgMenu.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgMenu;
