import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({className, color, size, ...otherProps}) => {
    const props = Object.assign({}, {size, className, ...otherProps});
    const classNameColor = color ? ' moonstone-icon_' + color : '';

    props.className = className + ' moonstone-icon moonstone-icon_' + size + classNameColor;

    return <svg {...props}/>;
};

Svg.defaultProps = {
    size: 'default',
    className: ''
};

Svg.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    color: PropTypes.oneOf(['red', 'yellow', 'green', 'blue', 'purple', 'gray']),
    className: PropTypes.string
};

export default Svg;
