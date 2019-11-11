import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {PrimaryNavContext} from '../PrimaryNav.context';

// eslint-disable-next-line
export const PrimaryNavItemsGroup = ({isDisplayedWhenCollapsed, children}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    if (!primaryNavContext.isExpanded && !isDisplayedWhenCollapsed) {
        return null;
    }

    return (
        <li>
            <ul>
                {children}
            </ul>
        </li>
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
    children: PropTypes.oneOf(PropTypes.arrayOf(PropTypes.node).isRequired, PropTypes.objectOf(PropTypes.node).isRequired)
};
