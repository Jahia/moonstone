import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSiteWeb = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm0 14H5V8h14v10z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgSiteWeb.defaultProps = {
    size: 'default',
    className: ''
};
SvgSiteWeb.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgSiteWeb;
