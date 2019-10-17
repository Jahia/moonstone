import React from 'react';
import PropTypes from 'prop-types';

// TODO implement the component !
// eslint-disable-next-line
export const PrimaryNavItemsGroup = ({isDisplayedByDefault, hasSeparator, children}) => {
    return (
        <primaryNavItemsGroup/>
    );
};

PrimaryNavItemsGroup.defaultProps = {
    isDisplayedByDefault: true,
    hasSeparator: true
};

PrimaryNavItemsGroup.propTypes = {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedByDefault: PropTypes.bool,

    /**
     * Items displayed inside the group
     */
    children: PropTypes.arrayOf(PropTypes.node).isRequired,

    /**
     * Shows a separator between items
     */
    hasSeparator: PropTypes.bool
};
