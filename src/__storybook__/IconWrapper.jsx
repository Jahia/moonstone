import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '~/icons';

// Create a component to display in storybook
export const IconWrapper = ({iconName, size}) => {
    return React.createElement(Icons[iconName], {size: size});
};

IconWrapper.propTypes = {
    iconName: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default IconWrapper;
