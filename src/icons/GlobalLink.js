import * as React from 'react';
import PropTypes from 'prop-types';

const SvgGlobalLink = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M12.915 8.413C15.887 5.311 19.563 2.737 22 2c-2.657.803-6.873 2.382-10.102 5.392V5.201h-1.243v4.468h4.476V8.413h-2.216zM9.67 5.201H8.426v2.335l-1.463-1.46-.88.878 1.463 1.46H5.207v1.255h4.477V8.413H9.67V5.201zM10.655 11.932v-1.256h4.477v1.256h-2.34l1.463 1.46-.88.877-1.462-1.46v2.335H10.67v-3.212h-.015zM2 22c.738-2.432 3.318-6.101 6.426-9.068v2.212h1.258v-4.468H5.207v1.24h2.197C4.387 15.14 2.805 19.349 2 22z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgGlobalLink.defaultProps = {
    size: 'default',
    className: ''
};
SvgGlobalLink.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgGlobalLink;
