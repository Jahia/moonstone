import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '~/icons';

// Create a component to display in storybook
export const IconWrapper = ({iconName, size, className}) => {
    return React.createElement(Icons[iconName], {size, className});
};

IconWrapper.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string,
    className: PropTypes.string
};

export default IconWrapper;
