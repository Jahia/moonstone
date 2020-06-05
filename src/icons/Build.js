import * as React from 'react';
import PropTypes from 'prop-types';

const SvgBuild = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M20.872 17.712l-7.48-7.479c.74-1.89.33-4.11-1.232-5.671-1.644-1.644-4.11-1.973-6.082-1.069l3.534 3.534-2.466 2.466L3.53 5.96c-.987 1.973-.576 4.438 1.068 6.082 1.562 1.562 3.78 1.973 5.671 1.233l7.48 7.48a.794.794 0 001.15 0l1.89-1.891c.412-.329.412-.904.083-1.15z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgBuild.defaultProps = {
    size: 'default',
    className: ''
};
SvgBuild.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgBuild;
