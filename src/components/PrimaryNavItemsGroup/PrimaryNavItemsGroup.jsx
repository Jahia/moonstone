import React from 'react';
import PropTypes from 'prop-types';

// TODO implement the component !
// eslint-disable-next-line
export const PrimaryNavItemsGroup = ({isDisplayedWhenCollapsed, children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

PrimaryNavItemsGroup.defaultProps = {
    isDisplayedWhenCollapsed: true
};

PrimaryNavItemsGroup.propTypes = {
    /**
     * Group is visible when the navigation is collapsed
     */
    isDisplayedWhenCollapsed: PropTypes.bool,

    /**
     * Items displayed inside the group
     */
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};
