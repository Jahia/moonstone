import React from 'react';
import PropTypes from 'prop-types';

const Svg = initialProps => {
    const props = {
        ...initialProps,
        className: initialProps.className + ' moonstone-icon_' + props.size
    };
    return <svg {...props}/>;
};

Svg.defaultProps = {
    size: 'default',
    className: ''
};

Svg.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};

export default Svg;
