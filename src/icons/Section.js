import * as React from 'react';
import PropTypes from 'prop-types';

const SvgSection = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M22 4H2v4.995h20.002V4zM18.999 12.011h-14v1h14v-1zM4.999 15.005h17v.998h-17v-.998zM13.999 18.001h-9V19h9v-.999z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgSection.defaultProps = {
    size: 'default',
    className: ''
};
SvgSection.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgSection;
