import React from 'react';
import PropTypes from 'prop-types';

export const PrimaryNavItemsGroup = ({isDisplayedByDefault, children}) => {
    console.log({isDisplayedByDefault, children});
    return (
        <primaryNavItemsGroup/>
    );
};

PrimaryNavItemsGroup.defaultProps = {
    isDisplayedByDefault: true
};

PrimaryNavItemsGroup.propTypes = {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedByDefault: PropTypes.bool,

    /**
     * Items displayed inside the group
     */
    children: PropTypes.arrayOf(PropTypes.node).isRequired

};
