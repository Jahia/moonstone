import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './PrimaryNavItemsGroup.scss';
import {PrimaryNavContext} from '../PrimaryNav.context';
import {Separator} from '~/components/Separator';

export const PrimaryNavItemsGroup = ({isDisplayedWhenCollapsed, children, ...props}) => {
    const primaryNavContext = useContext(PrimaryNavContext);

    if (!primaryNavContext.isExpanded && !isDisplayedWhenCollapsed) {
        return null;
    }

    return (
        <>
            <li className={classnames(styles.primaryNavItemsGroup)}>
                <Separator size="large" spacing="small"/>
            </li>
            <li className={classnames(styles.primaryNavItemsGroup)} {...props}>
                <ul>
                    {children}
                </ul>
            </li>
        </>
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
    children: PropTypes.node.isRequired
};

PrimaryNavItemsGroup.displayName = 'PrimaryNavItemsGroup';
